import React from "react";
import { CheckCircle, Paintbrush, Save, FileText, Smartphone, Clock } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    title: "Fully Done-for-You",
    description: "Just fill a short form — I’ll handle the rest and build your resume from scratch.",
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-primary" />,
    title: "Tailored Design",
    description: "Every resume is crafted to match your profession and personal style.",
  },
  {
    icon: <Save className="w-8 h-8 text-primary" />,
    title: "No Lost Progress",
    description: "Your data is safely stored and reviewed to ensure resume perfection.",
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Delivered to You",
    description: "Receive your resume in PDF or any format you prefer — no tools needed.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "WhatsApp Delivery",
    description: "Get your final resume sent directly via WhatsApp — fast and easy!",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Flexible Delivery Times",
    description: "Choose standard or express delivery — we adjust to your timeline.",
  },
];


const FeaturesSection = () => {
  return (
    <section className=" py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Why Choose CV Crafter?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
