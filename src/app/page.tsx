import React from 'react'
import Head from 'next/head'
import Hero from '@/components/Hero'
import FeaturesSection from '@/components/Featuressection'
import Steps from '@/components/Steps'
import PricingTeaser from '@/components/PricingTeaser'
import LayoutTeaser from '@/components/Layoutteaser'
import WhatsAppContact from '@/components/whatsapp'
import TestimonialsSection from '@/components/Testimonials'
import FAQSection from '@/components/FAQSection'

const Page = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        {/* ✅ Google verification */}
       <meta name="google-site-verification" content="6qojGTrZXFpTN3bK8cBDV86dxQ_HPmIMcvOTuYDfqE8" />

        {/* ✅ Favicon + Logo (use lowercase filenames for safety) */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/Logo.png" sizes="512x512" type="image/png" />

        {/* ✅ Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CV Crafter",
              url: "https://www.cvcrafterpk.com",
              logo: "https://www.cvcrafterpk.com/logo.png",
            }),
          }}
        />
      </Head>

      <main className="bg-white">
        <Hero />
        <FeaturesSection />
        <Steps />
        <TestimonialsSection />
        <PricingTeaser />
        <LayoutTeaser />
        <FAQSection />
        <WhatsAppContact />
      </main>
    </div>
  )
}

export default Page
