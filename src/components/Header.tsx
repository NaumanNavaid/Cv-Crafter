'use client';

import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, BookOpen, FileText, DollarSign, MessageCircle, Home } from 'lucide-react';

// Types
interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<any>;
  description: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    href: string;
    label: string;
    description: string;
  }[];
}

// Constants
const NAV_ITEMS: NavItem[] = [
  {
    href: '/',
    label: 'Home',
    icon: Home,
    description: 'Welcome page'
  },
  {
    href: '/resume-builder',
    label: 'Create Resume',
    icon: FileText,
    description: 'Build professional resumes'
  },
  {
    href: '#',
    label: 'Resources',
    icon: BookOpen,
    hasDropdown: true,
    description: 'Career resources',
    dropdownItems: [
      {
        href: '/blog',
        label: 'Career Blog',
        description: 'Expert tips and advice'
      },
      {
        href: '/Layouts',
        label: 'Resume Templates',
        description: 'Browse templates'
      },
      {
        href: '/examples',
        label: 'Resume Examples',
        description: 'See sample resumes'
      },
      {
        href: '/cover-letter-examples',
        label: 'Cover Letter Examples',
        description: 'Sample cover letters'
      }
    ]
  },
  {
    href: '/Pricing',
    label: 'Pricing',
    icon: DollarSign,
    description: 'View pricing plans'
  },
  {
    href: '/Contact',
    label: 'Contact',
    icon: MessageCircle,
    description: 'Get in touch'
  }
];

const Header = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isOpen || isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, isDropdownOpen]);

  // Close menus when navigating
  const handleNavigation = useCallback(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, []);

  // Check if a link is active
  const isActive = useCallback((href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  }, [pathname]);

  // Render dropdown menu
  const renderDropdown = (dropdownItems: NavItem['dropdownItems']) => (
    <div
      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      {dropdownItems?.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors group"
          onClick={handleNavigation}
        >
          <div className="font-medium group-hover:text-blue-600">{item.label}</div>
          <div className="text-sm text-gray-500 mt-1">{item.description}</div>
        </Link>
      ))}
    </div>
  );

  // Render navigation item
  const renderNavItem = (item: NavItem) => {
    if (item.hasDropdown) {
      return (
        <div key={item.label} className="relative" ref={dropdownRef}>
          <button
            className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onMouseEnter={() => setIsDropdownOpen(true)}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            <item.icon className="w-4 h-4 mr-2" />
            {item.label}
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {isDropdownOpen && renderDropdown(item.dropdownItems)}
        </div>
      );
    }

    return (
      <Link
        key={item.label}
        href={item.href}
        className={`flex items-center px-3 py-2 rounded-lg transition-all duration-200 group ${
          isActive(item.href)
            ? 'text-blue-600 bg-blue-50'
            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
        }`}
        onClick={handleNavigation}
        aria-label={item.description}
      >
        <item.icon className="w-4 h-4 mr-2" />
        {item.label}
      </Link>
    );
  };

  // Render mobile navigation item
  const renderMobileNavItem = (item: NavItem) => {
    if (item.hasDropdown) {
      return (
        <div key={item.label}>
          <button
            className="flex items-center w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-expanded={isDropdownOpen}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
            <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {isDropdownOpen && item.dropdownItems && (
            <div className="ml-8 mt-2 space-y-1">
              {item.dropdownItems.map((dropdownItem) => (
                <Link
                  key={dropdownItem.href}
                  href={dropdownItem.href}
                  className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={handleNavigation}
                >
                  <div className="font-medium text-sm">{dropdownItem.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{dropdownItem.description}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.label}
        href={item.href}
        className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
          isActive(item.href)
            ? 'text-blue-600 bg-blue-50'
            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
        }`}
        onClick={handleNavigation}
        aria-label={item.description}
      >
        <item.icon className="w-5 h-5 mr-3" />
        {item.label}
      </Link>
    );
  };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - LCP Optimized */}
          <Link href="/" onClick={handleNavigation}>
            <Image
              src="/Logo.png"
              alt="CV Crafter Logo"
              width={80}
              height={80}
              className="h-20 w-auto object-contain"
              priority
              sizes="80px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R/xjqNzTakmeZQQM5xQB5Df/9k="
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {NAV_ITEMS.map(renderNavItem)}

            {/* CTA Button */}
            <Link
              href="/resume-builder"
              className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              onClick={handleNavigation}
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden px-4 pb-4 space-y-2 bg-white border-t border-gray-200 shadow-lg"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {NAV_ITEMS.map(renderMobileNavItem)}

          {/* Mobile CTA Button */}
          <div className="pt-4 border-t border-gray-200">
            <Link
              href="/resume-builder"
              className="block w-full px-4 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors font-medium"
              onClick={handleNavigation}
            >
              Get Started Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
});

Header.displayName = 'Header';
export default Header;