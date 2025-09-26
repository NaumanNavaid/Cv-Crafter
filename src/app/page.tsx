import React from 'react'
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
      <main>
        <head><meta name="google-site-verification" content="6qojGTrZXFpTN3bK8cBDV86dxQ_HPmIMcvOTuYDfqE8" /></head>
        <Hero />
        <FeaturesSection />
        <Steps/>
        <PricingTeaser />
        <LayoutTeaser/>
        <FaqTeaser/>
        <WhatsAppContact/>
      </main>
    </div>
  )
}

export default Page
