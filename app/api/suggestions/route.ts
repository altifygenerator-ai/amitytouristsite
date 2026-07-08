import { NextResponse } from "next/server";

export const runtime = "nodejs";

function cleanField(value: unknown) {
  return String(value || "").trim();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const payload = {
      name: cleanField(body.name),
      email: cleanField(body.email),
      suggestionType: cleanField(body.suggestionType),
      placeName: cleanField(body.placeName),
      location: cleanField(body.location),
      link: cleanField(body.link),
      message: cleanField(body.message),
      site: cleanField(body.site) || "Amity Arkansas Guide",
    };

    if (!payload.suggestionType || !payload.message) {
      return NextResponse.json(
        { error: "Please include a suggestion type and message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Server not configured" },
        { status: 500 }
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "promote@naturalstatetourismproject.org",
      to: process.env.NATURAL_STATE_CONTACT_EMAIL ?? "naturalstatetourismproject@gmail.com",
      bcc: "altifygenerator@gmail.com",
      subject: `New Amity Guide Suggestion: ${payload.suggestionType}`,
      text: JSON.stringify(payload, null, 2),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
