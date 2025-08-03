'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Logo.png" // Replace with your actual logo path
            alt="CV Crafter Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="font-bold text-xl text-gray-800">CV Crafter</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/Pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
          <Link href="/Contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/Pricing" className="block text-gray-700 hover:text-blue-600">Pricing</Link>
          <Link href="/Contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
