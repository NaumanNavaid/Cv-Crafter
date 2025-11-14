import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "@/components/WhatsappButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SocialTracking } from "@/components/SocialTracking";
import { WebsiteStructuredData, OrganizationStructuredData, ServiceStructuredData } from "@/components/StructuredData";
import "./globals.css";

// LCP optimized font loading with preload and display-swap
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
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
      <head>
        {/* SEO and Analytics */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="canonical" href="https://cv-crafter.com" />

        {/* LCP Optimizations - Resource Hints */}
        <link rel="preload" href="/resume-preview.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />

        {/* Structured Data */}
        <WebsiteStructuredData />
        <OrganizationStructuredData />
        <ServiceStructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Facebook Pixel Tracking - Only in Production */}
        {process.env.NODE_ENV === 'production' && (
          <SocialTracking
            facebookPixelId={process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID!}
          />
        )}

        <Header/>
        <Breadcrumbs />
        {children}
        <WhatsAppButton/>
        <Footer/>
      </body>
    </html>
  );
}