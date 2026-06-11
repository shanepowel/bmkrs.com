import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  _type: string;
  slug?: string;
};

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    if (!secret) {
      return NextResponse.json({ message: "Revalidation not configured" }, { status: 501 });
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(req, secret);

    if (!isValidSignature) {
      return new NextResponse("Invalid signature", { status: 401 });
    }
    if (!body?._type) {
      return new NextResponse("Bad request: missing _type", { status: 400 });
    }

    const revalidated: string[] = [];
    const touch = (path: string) => {
      revalidatePath(path);
      revalidated.push(path);
    };

    switch (body._type) {
      case "caseStudy":
        touch("/work");
        touch("/");
        if (body.slug) touch(`/work/${body.slug}`);
        break;
      case "product":
        touch("/services");
        touch("/motion");
        touch("/");
        break;
      case "post":
        touch("/journal");
        if (body.slug) touch(`/journal/${body.slug}`);
        break;
      case "teamMember":
      case "aboutPage":
        touch("/about");
        break;
      case "testimonial":
        touch("/");
        touch("/work");
        break;
      case "siteSettings":
        revalidateTag("settings", { expire: 0 });
        revalidated.push("tag:settings");
        touch("/");
        break;
      case "networkPage":
        touch("/network");
        break;
      case "pressKit":
        touch("/press");
        break;
      case "discipline":
        touch("/services");
        touch("/");
        break;
      case "nowBuilding":
        touch("/about");
        break;
      default:
        touch("/");
    }

    return NextResponse.json({ revalidated, now: Date.now() });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return new NextResponse(message, { status: 500 });
  }
}
