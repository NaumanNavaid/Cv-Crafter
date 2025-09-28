import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "@/components/WhatsappButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV Crafter – Create Professional ATS-Friendly Resumes Online",
  description:
    "CV Crafter helps you build modern, ATS-friendly resumes and cover letters with customizable templates. Export to PDF instantly and stand out in job applications.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <WhatsAppButton/>
        <Footer/>
      </body>
    </html>
  );
}