import React from 'react'
import Head from 'next/head'
import Hero from '@/components/Hero'
import FeaturesSection from '@/components/Featuressection'
import Steps from '@/components/Steps'
import PricingTeaser from '@/components/PricingTeaser'
import FaqTeaser from '@/components/FaqTeaser'
import LayoutTeaser from '@/components/Layoutteaser'
import WhatsAppContact from '@/components/whatsapp'

const Page = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-white to-indigo-100 min-h-screen">
      <Head>
        {/* ✅ Google verification */}
        <meta
          name="google-site-verification"
          content="6qojGTrZXFpTN3bK8cBDV86dxQ_HPmIMcvOTuYDfqE8"
        />

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

      <main>
        <Hero />
        <FeaturesSection />
        <Steps />
        <PricingTeaser />
        <LayoutTeaser />
        <FaqTeaser />
        <WhatsAppContact />
      </main>
    </div>
  )
}

export default Page
