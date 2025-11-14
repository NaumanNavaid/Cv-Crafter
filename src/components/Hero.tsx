'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-blue-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                Build Your Dream
                <span className="text-blue-600 block">Resume</span>
              </h1>
              <p className="text-gray-600 text-lg sm:text-xl max-w-lg">
                Create, customize, and export your professional resume in minutes with our beautiful, ATS-friendly templates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/resume-builder"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href="/Layouts"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
              >
                View Templates
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-gray-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">ATS-Friendly</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Professional Templates</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Customizable Templates</span>
              </div>
            </div>
          </div>

          {/* Image - LCP Optimized */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Background decoration - optimized for LCP */}
              <div className="absolute inset-0 bg-blue-200 rounded-xl transform rotate-6 opacity-75"></div>
              <div className="absolute inset-0 bg-blue-300 rounded-xl transform -rotate-6 opacity-75"></div>

              {/* Main image - LCP optimized */}
              <div className="relative">
                <Image
                  src="/resume-preview.png"
                  alt="Professional Resume Preview"
                  width={600}
                  height={600}
                  className="w-full h-auto max-w-md lg:max-w-lg object-cover rounded-xl shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R/xjqNzTakmeZQQM5xQB5Df/9k="
                />

                {/* Floating badges - optimized with will-change for performance */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg will-change-transform">
                  ✓ ATS Approved
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg will-change-transform">
                  25+ Templates
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;