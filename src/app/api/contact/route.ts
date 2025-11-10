import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { getResendApiKey } from '@/lib/env';
import { z } from 'zod';

// Define validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

export async function POST(req: Request) {
  const resend = new Resend(getResendApiKey());

  try {
    const body = await req.json();
    
    // Validate the request body
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      // Format validation errors to return to client
      const errors: Record<string, string> = {};
      result.error.issues.forEach(issue => {
        if (issue.path && issue.path[0]) {
          errors[issue.path[0] as string] = issue.message;
        }
      });
      
      return NextResponse.json({ 
        error: 'Validation failed', 
        details: errors 
      }, { status: 400 });
    }

    const { name, email, message } = result.data;

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
  } catch (err: any) {
    // Log error silently - consider using a proper logging service in production
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
