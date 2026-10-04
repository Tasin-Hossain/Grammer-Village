import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, phone, message } = await req.json().catch(() => ({}));
  if (!name || !phone) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  // TODO: send this somewhere real: email (Resend/Nodemailer), Google Sheet, or your database.
  console.log("New inquiry:", { name, phone, message });
  return NextResponse.json({ ok: true });
}
