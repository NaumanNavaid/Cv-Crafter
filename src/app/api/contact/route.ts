import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { getResendApiKey } from '@/lib/env';

export async function POST(req: Request) {
  const resend = new Resend(getResendApiKey());

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ['naumannavaid378@gmail.com'],
      subject: `New message from CV Crafter`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email failed:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
