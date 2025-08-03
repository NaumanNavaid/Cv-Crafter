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
              className="border border-gray-200 shadow-lg rounded-md overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={layout.image}
                  alt={layout.name}
                  width={400}
                  height={550}
                  className="w-full h-auto filter blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/70 px-3 py-1 rounded text-gray-700 text-sm">
                    Preview Locked
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-700 mb-2">
                  {layout.name}
                </h3>
                <Link
                  href={`/Layouts/${layout.slug}`}
                  className="text-blue-500 hover:underline text-sm"
                >
                  View Full Layout
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
