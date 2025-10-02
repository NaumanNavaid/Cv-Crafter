import React from "react";
import Link from "next/link";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-8 border-t border-[hsl(var(--border))])">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    {/* Logo */}
                    <div className="text-2xl font-bold mb-4 md:mb-0 text-[hsl(var(--primary))]">
                        CV Crafter
                    </div>

                    {/* Socials */}
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a 
                            href="https://wa.me/923091273446" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary)/0.8)] transition-colors"
                        >
                            <FaWhatsapp size={20} />
                        </a>
                        <a 
                            href="https://www.facebook.com/cv.crafter1" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary)/0.8)] transition-colors"
                        >
                            <FaFacebook size={20} />
                        </a>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-[hsl(var(--muted-foreground))] mb-4 md:mb-0">
                        <Link href="/Contact" className="hover:text-[hsl(var(--primary))] transition-colors">Contact</Link>
                        <Link href="/Pricing" className="hover:text-[hsl(var(--primary))] transition-colors">Pricing</Link>
                        <Link href="/resume-builder" className="hover:text-[hsl(var(--primary))] transition-colors">Resume Builder</Link>
                    </div>
                </div>

                {/* Privacy & Copyright */}
                <div className="text-sm text-[hsl(var(--muted-foreground))] text-center mb-6">
                    <Link href="/privacy" className="hover:text-[hsl(var(--primary))] transition-colors block md:inline">Privacy Policy</Link>
                    <p className="mt-2 md:mt-0">© {new Date().getFullYear()} CV Crafter. All rights reserved.</p>
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t border-[hsl(var(--border))] text-center text-sm text-[hsl(var(--muted-foreground))]">
                    <p>Email: <a href="mailto:naumannavaid378@gmail.com" className="text-[hsl(var(--primary))] hover:underline">naumannavaid378@gmail.com</a></p>
                    <p className="mt-1">Phone: <a href="tel:+923091273446" className="text-[hsl(var(--primary))] hover:underline">+92 309 1273446</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
