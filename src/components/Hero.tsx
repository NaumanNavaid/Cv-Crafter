'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text */}
        <div className="text-center md:text-left max-w-xl space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 leading-tight">
            Build Your Dream Resume
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl">
            Create, customize, and export your professional resume in minutes with our beautiful templates.
          </p>
          <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <Image
            src="/resume-preview.png"
            alt="Resume Preview"
            width={500}
            height={500}
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
