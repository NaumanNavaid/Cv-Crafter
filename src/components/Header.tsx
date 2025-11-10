'use client';

import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, handleClickOutside]);

  // Close mobile menu when navigating
  const handleNavigation = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Logo.png" // Replace with your actual logo path
            alt="CV Crafter Logo"
            width={100}
            height={100}
            className="mr-0 object-cover py-1"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
          <Link href="/" className="text-gray-700 hover:text-[hsl(var(--professional-primary))] transition-colors" aria-label="Home">Home</Link>
          <Link href="/resume-builder" className="text-gray-700 hover:text-[hsl(var(--professional-primary))] transition-colors" aria-label="Create Resume">Create Resume</Link>
          <Link href="/Pricing" className="text-gray-700 hover:text-[hsl(var(--professional-primary))] transition-colors" aria-label="Pricing">Pricing</Link>
          <Link href="/Contact" className="text-gray-700 hover:text-[hsl(var(--professional-primary))] transition-colors" aria-label="Contact">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-gray-200 shadow-lg absolute left-0 right-0 z-40"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <Link href="/" className="block text-gray-700 hover:text-[hsl(var(--professional-primary))] py-3 px-4 transition-colors" aria-label="Home" onClick={handleNavigation}>Home</Link>
          <Link href="/resume-builder" className="block text-gray-700 hover:text-[hsl(var(--professional-primary))] py-3 px-4 transition-colors" aria-label="Create Resume" onClick={handleNavigation}>Create Resume</Link>
          <Link href="/Pricing" className="block text-gray-700 hover:text-[hsl(var(--professional-primary))] py-3 px-4 transition-colors" aria-label="Pricing" onClick={handleNavigation}>Pricing</Link>
          <Link href="/Contact" className="block text-gray-700 hover:text-[hsl(var(--professional-primary))] py-3 px-4 transition-colors" aria-label="Contact" onClick={handleNavigation}>Contact</Link>
        </div>
      )}
    </header>
  );
});

Header.displayName = 'Header';
export default Header;
