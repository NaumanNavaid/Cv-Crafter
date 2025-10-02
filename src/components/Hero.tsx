'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="section bg-[hsl(var(--professional-secondary))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text */}
        <div className="text-center md:text-left max-w-2xl space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[hsl(var(--professional-primary))] leading-tight">
            Build Your Dream Resume
          </h1>
          <p className="text-[hsl(var(--professional-text))] text-lg sm:text-xl max-w-xl">
            Create, customize, and export your professional resume in minutes with our beautiful templates.
          </p>
          <div className="pt-4">
            <Link href="/resume-builder">
              <Button className="bg-[hsl(var(--professional-primary))] hover:bg-[hsl(var(--professional-primary)/0.9)] text-white px-8 py-4 rounded-lg shadow-professional text-lg h-12">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src="/resume-preview.png"
              alt="Resume Preview"
              width={600}
              height={600}
              className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-xl shadow-professional"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
