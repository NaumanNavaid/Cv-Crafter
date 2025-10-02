import ResumeForm from '@/components/ResumeForm';

export const metadata = {
  title: "Build Your Resume – CV Crafter",
  description: "Fill out your details and send them directly to CV Crafter via WhatsApp",
};

export default function ResumeBuilderPage() {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Build Your Professional Resume
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fill in your details below and send them directly to our CV expert via WhatsApp. 
          We'll craft a professional resume tailored to your needs.
        </p>
      </div>
      
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
        <ResumeForm />
      </div>
    </div>
  );
}