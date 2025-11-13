import React from "react";
import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail, Phone, MapPin, FileText, BookOpen, DollarSign, MessageCircle, Star, Users, Zap } from "lucide-react";

// Types
interface FooterLink {
  href: string;
  label: string;
  icon: React.ComponentType<any>;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  href: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
}

// Constants
const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Product",
    links: [
      { href: "/resume-builder", label: "Create Resume", icon: FileText },
      { href: "/Layouts", label: "Resume Templates", icon: FileText },
      { href: "/Pricing", label: "Pricing Plans", icon: DollarSign },
      { href: "/features", label: "Features", icon: Zap },
    ]
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Career Blog", icon: BookOpen },
      { href: "/examples", label: "Resume Examples", icon: FileText },
      { href: "/cover-letter-examples", label: "Cover Letter Examples", icon: FileText },
      { href: "/faq", label: "FAQ", icon: MessageCircle },
    ]
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us", icon: Users },
      { href: "/Contact", label: "Contact", icon: MessageCircle },
      { href: "/careers", label: "Careers", icon: Users },
      { href: "/partners", label: "Partners", icon: Star },
    ]
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy", icon: FileText },
      { href: "/terms", label: "Terms of Service", icon: FileText },
      { href: "/cookies", label: "Cookie Policy", icon: FileText },
      { href: "/gdpr", label: "GDPR", icon: FileText },
    ]
  }
];

const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://wa.me/923091273446", label: "WhatsApp", icon: FaWhatsapp, color: "hover:text-green-600" },
  { href: "https://www.facebook.com/cv.crafter1", label: "Facebook", icon: FaFacebook, color: "hover:text-blue-600" },
  { href: "https://twitter.com/cv_crafter", label: "Twitter", icon: FaTwitter, color: "hover:text-blue-400" },
  { href: "https://www.linkedin.com/company/cv-crafter", label: "LinkedIn", icon: FaLinkedin, color: "hover:text-blue-700" },
  { href: "https://www.instagram.com/cv_crafter", label: "Instagram", icon: FaInstagram, color: "hover:text-pink-600" },
];

const STATS = [
  { number: "50K+", label: "Resumes Created" },
  { number: "10K+", label: "Happy Users" },
  { number: "25+", label: "Templates" },
  { number: "4.8/5", label: "Average Rating" },
];

const Footer = () => {
  const renderSocialLinks = () => (
    <div className="flex space-x-4">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`text-gray-400 hover:text-white transition-colors ${social.color}`}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );

  const renderFooterSection = (section: FooterSection) => (
    <div key={section.title}>
      <h3 className="font-semibold text-white mb-4">{section.title}</h3>
      <ul className="space-y-3">
        {section.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center text-gray-300 hover:text-white transition-colors group"
            >
              <link.icon className="w-4 h-4 mr-2 text-gray-500 group-hover:text-blue-400 transition-colors" />
              <span className="group-hover:text-blue-400 transition-colors">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderContactInfo = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="flex items-center text-gray-300">
        <Mail className="w-5 h-5 mr-3 text-blue-400" />
        <div>
          <div className="font-medium text-white">Email</div>
          <a href="mailto:naumannavaid378@gmail.com" className="hover:text-blue-400 transition-colors">
            naumannavaid378@gmail.com
          </a>
        </div>
      </div>
      <div className="flex items-center text-gray-300">
        <Phone className="w-5 h-5 mr-3 text-blue-400" />
        <div>
          <div className="font-medium text-white">Phone</div>
          <a href="tel:+923091273446" className="hover:text-blue-400 transition-colors">
            +92 309 1273446
          </a>
        </div>
      </div>
      <div className="flex items-center text-gray-300">
        <MapPin className="w-5 h-5 mr-3 text-blue-400" />
        <div>
          <div className="font-medium text-white">Location</div>
          <span className="text-sm">Global Service</span>
        </div>
      </div>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-white">
      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">CV Crafter</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Create professional, ATS-friendly resumes in minutes with our intuitive resume builder.
              Stand out from the competition and land your dream job.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-white">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-gray-700"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3 text-white">Follow Us</h4>
              {renderSocialLinks()}
            </div>
          </div>

          {/* Footer Sections */}
          {FOOTER_SECTIONS.map(renderFooterSection)}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          {renderContactInfo()}

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} CV Crafter. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;