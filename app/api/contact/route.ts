import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Log to console for now — replace with Resend or Formspree when ready
    console.log("[contact]", { name, email, message });

    // TODO: integrate Resend
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ from: "site@adeelsarwar.com", to: "adeel@adeelsarwar.com", subject: `New message from ${name}`, text: message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
