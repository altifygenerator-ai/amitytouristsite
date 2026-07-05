import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "promote@naturalstatetourismproject.org",
      to: process.env.NATURAL_STATE_CONTACT_EMAIL ?? "naturalstatetourismproject@gmail.com",
      bcc: "altifygenerator@gmail.com",
      subject: "Amity Arkansas Guide Contact",
      text: JSON.stringify(body, null, 2),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
