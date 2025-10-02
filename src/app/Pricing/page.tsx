// app/pricing/page.tsx

import React from "react";

import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Pricing Plans – CV Crafter",
  description: "Explore our affordable and premium pricing plans for CV crafting services.",
};

const plans = [
    {
        name: "Basic",
        price: "PKR 500 – 700",
        designs: "1 Design",
        delivery: "7–8 Hours",
        edits: "No Future Edits",
        coverLetter: false,
        editableFile: false,
    },
    {
        name: "Standard",
        price: "PKR 1000 – 1500",
        designs: "2 Designs",
        delivery: "~5 Hours",
        edits: "3 Edits within 1 Month",
        coverLetter: false,
        editableFile: false,
    },
    {
        name: "Premium",
        price: "PKR 2000 – 2500",
        designs: "All Designs",
        delivery: "~3 Hours",
        edits: "Unlimited (1 Month)",
        coverLetter: "Optional Add-on",
        editableFile: false,
    },
    {
        name: "Ultimate",
        price: "PKR 3000+",
        designs: "Custom from Scratch",
        delivery: "24 Hours or Discussed",
        edits: "Unlimited Edits",
        coverLetter: "Included",
        editableFile: true,
    },
];

const PricingPage = () => {
    return (
        <main className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Pricing Plans</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <Card 
                            key={index} 
                            className={`rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                                plan.name === 'Ultimate' 
                                    ? 'border-2 border-yellow-400 bg-gradient-to-b from-yellow-50 to-white transform scale-105 z-10' 
                                    : ''
                            }`}
                        >
                            <CardContent className="p-6">
                                <h2 className={`text-2xl font-semibold mb-2 ${
                                    plan.name === 'Ultimate' ? 'text-yellow-600 font-bold' : 'text-gray-800'
                                }`}>
                                    {plan.name}
                                    {plan.name === 'Ultimate' && (
                                        <span className="ml-2 inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">PREMIUM</span>
                                    )}
                                </h2>
                                <p className="text-xl text-blue-600 font-bold mb-4">{plan.price}</p>

                                <ul className="text-gray-700 space-y-2">
                                    <li><strong>Designs:</strong> {plan.designs}</li>
                                    <li><strong>Delivery:</strong> {plan.delivery}</li>
                                    <li><strong>Edits:</strong> {plan.edits}</li>
                                    <li className="flex items-center gap-1">
                                        <strong>Cover Letter:</strong>{" "}
                                        {plan.coverLetter === true ? <Check className="text-green-600 w-4 h-4" /> :
                                            plan.coverLetter ? plan.coverLetter :
                                                <X className="text-red-600 w-4 h-4" />}
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <strong>Editable File:</strong>{" "}
                                        {plan.editableFile ? <Check className="text-green-600 w-4 h-4" /> : <X className="text-red-600 w-4 h-4" />}
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Order</h2>
                    <p className="text-gray-600 max-w-xl mx-auto mb-6">
                        To place your order, fill out our resume builder form with your details. We'll craft your resume and contact you via WhatsApp. Payments can be made through Easypaisa, JazzCash, or Bank Transfer.
                    </p>
                    <a
                        href="/resume-builder"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition"
                    >
                        Build Your Resume
                    </a>
                </div>

            </div>
        </main>
    );
};

export default PricingPage;
