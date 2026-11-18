type HubSpotEnquiry = {
  name: string;
  email: string;
  company?: string;
  reason: string;
  services: string[];
  budget?: string;
  message: string;
};

const HUBSPOT_API = "https://api.hubapi.com";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

async function hubSpotRequest(path: string, token: string, body: unknown) {
  const response = await fetch(`${HUBSPOT_API}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(8_000),
  });

  if (!response.ok) {
    // Do not log request contents or provider response bodies; both may contain PII.
    throw new Error(`HubSpot request failed (${response.status})`);
  }

  return response.json() as Promise<{ results?: Array<{ id?: string }> }>;
}

export async function sendEnquiryToHubSpot(enquiry: HubSpotEnquiry, token: string) {
  const [firstName, ...lastNameParts] = enquiry.name.trim().split(/\s+/);
  const contactResult = await hubSpotRequest(
    "/crm/v3/objects/contacts/batch/upsert",
    token,
    {
      inputs: [
        {
          id: enquiry.email,
          idProperty: "email",
          properties: {
            email: enquiry.email,
            firstname: firstName,
            lastname: lastNameParts.join(" "),
            ...(enquiry.company ? { company: enquiry.company } : {}),
          },
        },
      ],
    },
  );

  const contactId = contactResult.results?.[0]?.id;
  if (!contactId) throw new Error("HubSpot did not return a contact ID");

  const details = [
    `Website enquiry: ${enquiry.reason}`,
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    enquiry.company ? `Company: ${enquiry.company}` : "",
    enquiry.services.length ? `Services: ${enquiry.services.join(", ")}` : "",
    enquiry.budget ? `Budget: ${enquiry.budget}` : "",
    "",
    enquiry.message,
  ].filter((line, index, lines) => line || (index > 0 && lines[index - 1] !== ""));

  const noteBody = details
    .map((line) => (line ? escapeHtml(line) : "<br>"))
    .join("<br>");

  await hubSpotRequest("/crm/v3/objects/notes", token, {
    properties: {
      hs_timestamp: Date.now().toString(),
      hs_note_body: noteBody,
    },
    associations: [
      {
        to: { id: contactId },
        types: [
          { associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 },
        ],
      },
    ],
  });
}
