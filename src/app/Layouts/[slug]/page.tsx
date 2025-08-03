import Image from "next/image";
import { notFound } from "next/navigation"; // ✅ Required for 404 behavior

// 🔼 Move layoutData above everything so it can be used in both metadata + page
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

// ✅ Dynamic metadata based on slug
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const layout = layoutData[params.slug];
  return {
    title: layout ? layout.name : "Layout Not Found",
  };
}

// ✅ Page component
export default function LayoutDetailPage({ params }: { params: { slug: string } }) {
  const layout = layoutData[params.slug];

  if (!layout) {
    notFound(); // Show 404 page if slug doesn't match
  }

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{layout.name}</h2>
        <p className="text-gray-600 mb-8">{layout.description}</p>
        <Image
          src={layout.image}
          alt={layout.name}
          width={700}
          height={900}
          className="mx-auto"
        />
      </div>
    </section>
  );
}
