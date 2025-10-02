import React from "react";
import { CheckCircle, Paintbrush, Save, FileText, Smartphone, Clock } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-[hsl(var(--professional-primary))]" />,
    title: "Fully Done-for-You",
    description: "Just fill a short form — I'll handle the rest and build your resume from scratch.",
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-[hsl(var(--professional-primary))]" />,
    title: "Tailored Design",
    description: "Every resume is crafted to match your profession and personal style.",
  },
  {
    icon: <Save className="w-8 h-8 text-[hsl(var(--professional-primary))]" />,
    title: "No Lost Progress",
    description: "Your data is safely stored and reviewed to ensure resume perfection.",
  },
  {
    icon: <FileText className="w-8 h-8 text-[hsl(var(--professional-primary))]" />,
    title: "Delivered to You",
    description: "Receive your resume in PDF or any format you prefer — no tools needed.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[hsl(var(--professional-primary))]" />,
    title: "WhatsApp Delivery",
    description: "Get your final resume sent directly via WhatsApp — fast and easy!",
  },
  {
    icon: <Clock className="w-8 h-8 text-[hsl(var(--professional-primary))]" />,
    title: "Flexible Delivery Times",
    description: "Choose standard or express delivery — we adjust to your timeline.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--professional-primary))] mb-4">
            Why Choose CV Crafter?
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto text-lg">
            We provide exceptional resume crafting services tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-8 hover:shadow-professional transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-[hsl(var(--professional-primary)/0.1)] w-16 h-16 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[hsl(var(--professional-dark))]">
                {feature.title}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
