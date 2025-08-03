// components/Steps.tsx
import { FileEdit, Paintbrush, SendHorizontal } from "lucide-react";

const steps = [
  {
    icon: <FileEdit className="w-8 h-8 text-primary" />,
    title: "Step 1: Fill the Form",
    description: "Answer a few quick questions about your education, experience, and skills.",
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-primary" />,
    title: "Step 2: I Craft Your Resume",
    description: "I’ll turn your input into a custom-designed resume tailored to your goals.",
  },
  {
    icon: <SendHorizontal className="w-8 h-8 text-primary" />,
    title: "Step 3: Get It on WhatsApp",
    description: "I’ll send your resume to you directly — no editing tools needed.",
  },
  {
    icon: <FileEdit className="w-8 h-8 text-primary" />,
    title: "Step 4: Request Revisions",
    description: "Want a tweak? Just reply — I’ll adjust your resume until you're happy.",
  },
];

export default function Steps() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white shadow-md rounded-xl p-6 text-left">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
