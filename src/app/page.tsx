import { Metadata } from 'next'
import Hero from '@/components/Hero'
import FeaturesSection from '@/components/Featuressection'
import Steps from '@/components/Steps'
import PricingTeaser from '@/components/PricingTeaser'
import LayoutTeaser from '@/components/Layoutteaser'
import WhatsAppContact from '@/components/whatsapp'
import TestimonialsSection from '@/components/Testimonials'
import FAQSection from '@/components/FAQSection'
import BlogTeaser from '@/components/BlogTeaser'

export const metadata: Metadata = {
  title: "CV Crafter – Create Professional ATS-Friendly Resumes Online",
  description: "Build modern, ATS-friendly resumes with customizable templates. Choose from professional layouts, get expert review, and land your dream job.",
  keywords: "resume builder, CV creator, ATS-friendly resume, professional templates, job application",
  openGraph: {
    title: "CV Crafter – Professional Resume Builder",
    description: "Create stunning, ATS-friendly resumes in minutes with our professional templates",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "6qojGTrZXFpTN3bK8cBDV86dxQ_HPmIMcvOTuYDfqE8",
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/Logo.png',
  },
}

const Page = () => {
  return (
    <div className="bg-white min-h-screen">
      <main className="bg-white">
        <Hero />
        <FeaturesSection />
        <Steps />
        <TestimonialsSection />
        <BlogTeaser />
        <PricingTeaser />
        <LayoutTeaser />
        <FAQSection />
        <WhatsAppContact />
      </main>
    </div>
  )
}

export default Page
