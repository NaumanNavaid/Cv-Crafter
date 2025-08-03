export function getResendApiKey(): string {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('Missing RESEND_API_KEY environment variable');
  return key;
}
