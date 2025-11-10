// Simple environment variable access without validation during build
export function getResendApiKey(): string {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('Missing RESEND_API_KEY environment variable');
  return key;
}

export function getWhatsAppNumber(): string {
  const number = process.env.WHATSAPP_NUMBER;
  if (!number) throw new Error('Missing WHATSAPP_NUMBER environment variable');
  return number;
}

export function getContactEmail(): string {
  const email = process.env.CONTACT_EMAIL;
  if (!email) throw new Error('Missing CONTACT_EMAIL environment variable');
  return email;
}

// Runtime validation only when actually needed
export function validateRuntimeEnv() {
  const required = ['RESEND_API_KEY', 'WHATSAPP_NUMBER', 'CONTACT_EMAIL'];
  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}
