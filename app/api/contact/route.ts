import { NextResponse } from "next/server";
export const runtime = "nodejs"
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Optional: check env safely
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Server not configured" },
        { status: 500 }
      );
    }

    // Lazy import (prevents build crash)
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "promote@hometownwebservicesar.cc",
      to: "altifygenerator@gmail.com",
      subject: "New Contact Form Submission",
      text: JSON.stringify(body, null, 2),
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