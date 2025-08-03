import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 border-t border-gray-200 py-8">      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold mb-4 md:mb-0">
                CV Crafter
            </div>

            {/* Socials */}
            <div className="flex space-x-6 mb-4 md:mb-0">
                <a href="#" aria-label="Facebook" className="hover:text-blue-400">
                    <FaFacebook size={20} />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
                    <FaLinkedin size={20} />
                </a>
                <a href="#" aria-label="GitHub" className="hover:text-blue-400">
                    <FaGithub size={20} />
                </a>
            </div>

            {/* Privacy & Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-right">
                <a href="#" className="hover:text-white block md:inline">Privacy Policy</a>
                <p className="mt-2 md:mt-0">© {new Date().getFullYear()} CV Crafter. All rights reserved.</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
