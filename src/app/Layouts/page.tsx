// app/layouts/page.tsx

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "CV Layouts – CV Crafter",
  description: "Browse and select from various CV layouts and templates.",
};

const layouts = [
  {
    name: "Corporate Classic",
    image: "/corporate-classic.png",
    slug: "corporate-classic",
  },
  {
    name: "Business Professional",
    image: "/business-professional.png",
    slug: "business-professional",
  },
  {
    name: "Modern Executive",
    image: "/modern-executive.png",
    slug: "modern-executive",
  },
  {
    name: "Leadership Suite",
    image: "/leadership-suite.png",
    slug: "leadership-suite",
  },
  {
    name: "Minimal Clean",
    image: "/minimal-clean.png",
    slug: "minimal-clean",
  },
  {
    name: "Creative Vibrant",
    image: "/creative-vibrant.png",
    slug: "creative-vibrant",
  },
];

export default function LayoutsPage() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Choose Your Resume Layout
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {layouts.map((layout) => (
            <div
              key={layout.slug}
              className="border border-gray-200 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative overflow-hidden aspect-[3/4] flex items-center justify-center bg-white flex-grow">
                <Image
                  src={layout.image}
                  alt={layout.name}
                  width={300}
                  height={400}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                  priority={false}
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                  {layout.name}
                </h3>
                <Link
                  href={`/Layouts/${layout.slug}`}
                  className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center gap-1"
                  aria-label={`View details for ${layout.name} layout`}
                >
                  View Full Layout
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
