import { z } from 'zod';

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY is required'),
  WHATSAPP_NUMBER: z.string().min(1, 'WHATSAPP_NUMBER is required'),
  CONTACT_EMAIL: z.string().email('Invalid CONTACT_EMAIL format'),
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
});

// Validate environment variables
const envValidation = envSchema.safeParse(process.env);

if (!envValidation.success) {
  console.error('❌ Invalid environment variables:', envValidation.error.format());
  throw new Error('Invalid environment variables');
}

export const env = envValidation.data;

// Legacy function for backward compatibility
export function getResendApiKey(): string {
  return env.RESEND_API_KEY;
}
