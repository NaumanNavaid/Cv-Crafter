// components/LayoutTeaser.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const layouts = [
  {
    name: "Corporate Classic",
    image: "/corporate-classic.png",
    description: "Timeless and professional design ideal for corporate roles.",
  },
  {
    name: "Business Professional",
    image: "/business-professional.png",
    description: "Sophisticated layout for business professionals.",
  },
  {
    name: "Modern Executive",
    image: "/modern-executive.png",
    description: "Contemporary design for modern executives.",
  },
  {
    name: "Leadership Suite",
    image: "/leadership-suite.png",
    description: "Powerful layout for leadership positions.",
  },
  {
    name: "Minimal Clean",
    image: "/minimal-clean.png",
    description: "Clean and simple design for minimalists.",
  },
  {
    name: "Creative Vibrant",
    image: "/creative-vibrant.png",
    description: "Colorful and creative for design-focused roles.",
  },
];

const LayoutTeaser = () => {
  return (
    <section className="section bg-[hsl(var(--professional-secondary))]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[hsl(var(--professional-primary))]">
          Explore Resume Layouts
        </h2>
        <p className="text-[hsl(var(--muted-foreground))] mb-10 max-w-2xl mx-auto">
          Stand out with professionally designed layouts tailored for every
          career level.
        </p>

        <div className="max-w-5xl mx-auto">
          <Carousel 
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {layouts.map((layout, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="h-full card shadow-professional hover:shadow-lg transition-shadow flex flex-col">
                      <CardContent className="p-4 flex flex-col items-center flex-grow">
                        <div className="rounded-md overflow-hidden border border-[hsl(var(--border))] shadow-professional w-full aspect-[3/4] flex items-center justify-center bg-white">
                          <Image
                            src={layout.image}
                            alt={layout.name}
                            width={300}
                            height={400}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div className="mt-4 text-center w-full">
                          <h3 className="text-lg font-semibold text-[hsl(var(--professional-dark))]">
                            {layout.name}
                          </h3>
                          <p className="text-sm text-[hsl(var(--muted-foreground))] mt-2">
                            {layout.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="static absolute left-4 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="static absolute right-4 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>

        <div className="mt-10">
          <Link href="/Layouts">
            <Button variant="default" size="lg">
              View All Layouts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LayoutTeaser;
