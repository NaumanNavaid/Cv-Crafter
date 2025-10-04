import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define the proper types for Next.js 15
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Move layoutData above everything so it can be used in both metadata + page
const layoutData: Record<
  string,
  { name: string; image: string; description: string }
> = {
  "corporate-classic": {
    name: "Corporate Classic",
    image: "/corporate-classic.png",
    description: "A timeless, conservative layout ideal for formal industries.",
  },
  "business-professional": {
    name: "Business Professional",
    image: "/business-professional.png",
    description: "Clean and confident formatting for professional roles.",
  },
  "modern-executive": {
    name: "Modern Executive",
    image: "/modern-executive.png",
    description: "Bold and structured – includes modern typographic hierarchy.",
  },
  "leadership-suite": {
    name: "Leadership Suite",
    image: "/leadership-suite.png",
    description: "Focuses on achievements, perfect for senior/leadership positions.",
  },
  "minimal-clean": {
    name: "Minimal Clean",
    image: "/minimal-clean.png",
    description: "Simple, airy design that draws attention to content, not visuals.",
  },
  "creative-vibrant": {
    name: "Creative Vibrant",
    image: "/creative-vibrant.png",
    description: "Colorful and striking design for creative fields and portfolios.",
  },
};

// ✅ Dynamic metadata based on slug - NOW ASYNC
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params; // Await the params Promise
  const layout = layoutData[slug];
  return {
    title: layout ? layout.name : "Layout Not Found",
  };
}

// ✅ Page component - NOW ASYNC
export default async function LayoutDetailPage({ params }: PageProps) {
  const { slug } = await params; // Await the params Promise
  const layout = layoutData[slug];

  if (!layout) {
    notFound(); // Show 404 page if slug doesn't match
  }

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{layout.name}</h2>
        <p className="text-gray-600 mb-8">{layout.description}</p>
        <div className="max-w-[700px] mx-auto flex items-center justify-center bg-white p-4 rounded-lg border border-gray-200">
          <Image
            src={layout.image}
            alt={layout.name}
            width={700}
            height={900}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="mt-8">
          <Link 
            href="/resume-builder" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Use This Layout for My Resume
          </Link>
        </div>
      </div>
    </section>
  );
}

// Optional: Generate static params for better performance
export async function generateStaticParams() {
  return Object.keys(layoutData).map((slug) => ({
    slug,
  }));
}