'use client'

import Link from 'next/link'
import { ChevronDown, ChevronUp, HelpCircle, FileText, DollarSign, MessageCircle, Zap, Shield, Users, Clock, CheckCircle, BookOpen } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  icon: React.ComponentType<any>;
}

const faqData: FAQItem[] = [
  {
    question: "How does the CV Crafter resume builder work?",
    answer: "Our resume builder helps you create professional, ATS-friendly resumes through a simple manual process. Choose from our professionally designed templates, then manually input your information into each section. Our system formats everything perfectly for you. Customize colors, fonts, and layouts to match your style, then export as PDF.",
    category: "Getting Started",
    icon: Zap
  },
  {
    question: "Are your resumes ATS-friendly?",
    answer: "Yes! All our templates are designed to pass through Applicant Tracking Systems (ATS). We use clean formatting, standard section headers, and keyword optimization to ensure your resume gets noticed by recruiters and automated systems.",
    category: "Getting Started",
    icon: CheckCircle
  },
  {
    question: "What's included in your packages?",
    answer: "We offer one-time payment packages, not subscriptions. Our basic package includes access to standard templates and PDF export. Premium packages include all premium templates, advanced customization options, unlimited downloads, cover letter builder, priority support, and expert content suggestions.",
    category: "Pricing",
    icon: DollarSign
  },
  {
    question: "Do you offer subscriptions or one-time payments?",
    answer: "We only offer one-time payment packages! Pay once and get lifetime access to your purchased templates and features. No recurring charges or hidden fees. Our packages start at ₹1500+ with future updates included.",
    category: "Pricing",
    icon: DollarSign
  },
  {
    question: "How many templates are available?",
    answer: "We offer 15+ professionally designed templates in various styles - modern, classic, creative, and executive. Each template is optimized for different industries and career levels, from entry-level to executive positions.",
    category: "Templates",
    icon: FileText
  },
  {
    question: "Can I customize the templates?",
    answer: "Yes! You can customize colors, fonts, layouts, sections, and content. Simply input your information and our system handles the formatting. Premium package users get access to advanced customization options including custom colors, fonts, and layout adjustments.",
    category: "Templates",
    icon: FileText
  },
  {
    question: "What formats can I export my resume in?",
    answer: "You can export your resume as PDF (recommended for applications). Premium users also get access to Word document export for further editing flexibility.",
    category: "Features",
    icon: FileText
  },
  {
    question: "Is my data secure and private?",
    answer: "Absolutely. We use bank-level encryption to protect your personal information. Your data is stored securely and we never share it with third parties. You can delete your account and all data at any time.",
    category: "Security",
    icon: Shield
  },
  {
    question: "Do you offer cover letter templates?",
    answer: "Yes! Premium package users get access to matching cover letter templates that complement your resume design. You can create professional cover letters that coordinate with your chosen resume template.",
    category: "Features",
    icon: FileText
  },
  {
    question: "How can I get support if I have issues?",
    answer: "We offer multiple support channels: Email support for all users and a comprehensive help center with video tutorials. Premium package users get priority response times within 24 hours.",
    category: "Support",
    icon: MessageCircle
  },
  {
    question: "Can I use CV Crafter on mobile devices?",
    answer: "Yes! Our platform is fully responsive and works on all devices - desktop, tablet, and mobile. You can create and edit your resumes on the go.",
    category: "Features",
    icon: Users
  },
  {
    question: "Do you provide resume writing tips?",
    answer: "Yes! We offer a comprehensive career blog with expert resume writing tips, interview advice, and job search strategies. Premium package users also get access to expert content suggestions and examples for each section.",
    category: "Resources",
    icon: HelpCircle
  }
];

const categories = ["Getting Started", "Pricing", "Templates", "Features", "Security", "Support", "Resources"];

function FAQAccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  const Icon = item.icon;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
        onClick={onToggle}
      >
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Find answers to common questions about our resume builder, templates, and services.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Links */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/resume-builder"
              className="flex items-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow border border-blue-200"
            >
              <FileText className="w-5 h-5 text-blue-600 mr-3" />
              <span className="font-medium">Start Building Resume</span>
            </Link>
            <Link
              href="/Layouts"
              className="flex items-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow border border-blue-200"
            >
              <FileText className="w-5 h-5 text-blue-600 mr-3" />
              <span className="font-medium">Browse Templates</span>
            </Link>
            <Link
              href="/Pricing"
              className="flex items-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow border border-blue-200"
            >
              <DollarSign className="w-5 h-5 text-blue-600 mr-3" />
              <span className="font-medium">View Pricing</span>
            </Link>
          </div>
        </div>

        {/* FAQ Categories */}
        {categories.map((category) => {
          const categoryItems = faqData.filter(item => item.category === category);

          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">
                    {category.charAt(0)}
                  </span>
                </div>
                {category}
              </h2>
              <div className="space-y-4">
                {categoryItems.map((item, index) => {
                  const itemKey = `${category}-${index}`;
                  const isOpen = openItems[itemKey] || false;

                  return (
                    <FAQAccordionItem
                      key={itemKey}
                      item={item}
                      isOpen={isOpen}
                      onToggle={() => {
                        setOpenItems(prev => ({
                          ...prev,
                          [itemKey]: !isOpen
                        }));
                      }}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Still Have Questions */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mt-12">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Link
              href="/Contact"
              className="flex-1 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <Link
              href="/blog"
              className="flex-1 bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors flex items-center justify-center"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Visit Blog
            </Link>
          </div>
        </div>

        {/* Help Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
            <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
            <p className="text-gray-600">Self-service access to FAQ and help articles</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
            <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2"> 24h</h3>
            <p className="text-gray-600">Premium support response time</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
            <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">98%</h3>
            <p className="text-gray-600">Customer satisfaction rate</p>
          </div>
        </div>
      </div>
    </div>
  )
}