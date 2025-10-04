"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to create my resume?",
    answer: "Delivery time depends on the tier you choose: Basic (7-8 hours), Standard (~5 hours), Premium (~3 hours), and Ultimate (24 hours or as discussed)."
  },
  {
    question: "What information do I need to provide?",
    answer: "You'll need to provide your personal details, work experience, education, skills, and a brief professional summary. The resume form on our website guides you through all required information."
  },
  {
    question: "Are the resumes ATS-friendly?",
    answer: "Yes, all our resumes are designed to be ATS (Applicant Tracking System) friendly, ensuring they pass through automated screening systems used by employers."
  },
  {
    question: "Can I request revisions after receiving my resume?",
    answer: "Yes! Our Standard, Premium, and Ultimate tiers include different numbers of revisions. The Ultimate tier offers unlimited revisions within one month."
  },
  {
    question: "What file format will I receive my resume in?",
    answer: "You'll receive your resume in PDF format by default. The Ultimate tier also includes editable file formats if needed."
  },
  {
    question: "Do you offer cover letter writing as well?",
    answer: "Cover letter writing is available as an optional add-on for the Premium tier and included for free with the Ultimate tier."
  },
  {
    question: "How do I make payment?",
    answer: "Payments can be made through Easypaisa, JazzCash, or Bank Transfer. Details are provided once you place your order."
  },
  {
    question: "What if I'm not satisfied with the resume?",
    answer: "We offer unlimited revisions within your chosen package timeframe to ensure you're satisfied with the final product. Your happiness is our priority."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-[hsl(var(--professional-secondary))]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--professional-primary))] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Everything you need to know about our resume services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="card rounded-xl overflow-hidden shadow-professional hover:shadow-lg transition-shadow"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left hover:bg-[hsl(var(--accent))] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--professional-primary)/0.2)]"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-lg  font-medium text-[hsl(var(--professional-dark))]">{faq.question}</h3>
                {openIndex === index ? 
                  <ChevronUp className="h-5 w-5 text-[hsl(var(--professional-primary))]" /> : 
                  <ChevronDown className="h-5 w-5 text-[hsl(var(--professional-primary))]" />
                }
              </button>
              
              <div
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-3 text-[hsl(var(--muted-foreground))]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-6 card rounded-xl shadow-professional">
          <p className="text-[hsl(var(--muted-foreground))] mb-4">
            Have more questions? Feel free to contact us
          </p>
          <a
            href="https://wa.me/923091273446"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[hsl(var(--professional-primary))] text-white px-6 py-3 rounded-lg font-medium hover:bg-[hsl(var(--professional-primary)/0.9)] transition duration-300"
          >
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}