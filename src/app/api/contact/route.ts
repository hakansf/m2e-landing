import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log("[contact] Route hit");
  console.log("[contact] RESEND_API_KEY length:", process.env.RESEND_API_KEY?.length ?? "undefined");

  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const response = await resend.emails.send({
      from: "M2E Contact Form <contact@m2e.ai>",
      to: "info@m2e.ai",
      replyTo: email,
      subject: `New contact from ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "N/A"}`,
        "",
        `Message:\n${message}`,
      ].join("\n"),
    });

    console.log("[contact] Resend response:", JSON.stringify(response, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 },
    );
  }
}
