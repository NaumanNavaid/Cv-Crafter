// app/contact/page.tsx
import ContactPage from "@/components/Contactpage";

export const metadata = {
  title: "Contact – CV Crafter",
  description:
    "Have questions or want to send your resume details? Get in touch with CV Crafter on WhatsApp or via email.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
