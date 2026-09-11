/**
 * Draft client quotes for copy review only.
 *
 * Do not import this file from page components until a named client has
 * confirmed the wording. Shipping these as live testimonials would be
 * fabricated social proof.
 */

export type DraftTestimonial = {
  quote: string;
  attribution: string;
  confirmed: false;
  status: "DRAFT — not yet confirmed by client";
};

export const unconfirmedTestimonialDrafts: DraftTestimonial[] = [
  {
    quote:
      "we'd briefed four agencies before bmkrs and got four versions of the same deck. this was the first one that actually sounded like a bar, not a pitch.",
    attribution: "founder, copa, off the shore",
    confirmed: false,
    status: "DRAFT — not yet confirmed by client",
  },
  {
    quote:
      "the rebuild paid for itself in the first quarter. 22% more people finishing checkout, and nobody on the team had to learn a new system to keep it running.",
    attribution: "founder, floare din banat",
    confirmed: false,
    status: "DRAFT — not yet confirmed by client",
  },
  {
    quote:
      "one team, one invoice, one person to call. that alone was worth switching for. the brand work being good was the bonus.",
    attribution: "founder, flipster iptv",
    confirmed: false,
    status: "DRAFT — not yet confirmed by client",
  },
];
