'use client';

import React, { useState } from 'react';
import { z } from 'zod';

const resumeSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name is required' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  phone: z.string().min(10, { message: 'Phone number is required' }),
  jobTitle: z.string().min(2, { message: 'Desired job title is required' }),
  experience: z.string().min(10, { message: 'Please provide some experience details' }),
  education: z.string().min(5, { message: 'Education details are required' }),
  skills: z.string().min(5, { message: 'Please list some skills' }),
  summary: z.string().min(20, { message: 'Professional summary should be more detailed' }),
  tier: z.string().min(1, { message: 'Please select a pricing tier' }),
});

export default function ResumeForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    jobTitle: '',
    experience: '',
    education: '',
    skills: '',
    summary: '',
    tier: '',
    layout: '',  // This will be used as the primary layout for Basic tier
  });
  
  const [selectedLayouts, setSelectedLayouts] = useState<string[]>([]);
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleLayoutChange = (layout: string) => {
    if (selectedLayouts.includes(layout)) {
      // Remove layout if already selected
      setSelectedLayouts(selectedLayouts.filter(l => l !== layout));
    } else {
      // Add layout if not selected yet
      // Limit based on tier
      const maxLayouts = getMaxLayoutsForTier(formData.tier);
      if (selectedLayouts.length < maxLayouts) {
        setSelectedLayouts([...selectedLayouts, layout]);
      }
    }
  };

  const getMaxLayoutsForTier = (tier: string): number => {
    switch(tier) {
      case 'Basic': return 1;
      case 'Standard': return 2;
      case 'Premium': return 6; // All layouts
      case 'Ultimate': return 0; // No layouts needed for Ultimate tier
      default: return 0;
    }
  };

  const formatWhatsAppMessage = () => {
    const getNumberOfDesigns = () => {
      switch(formData.tier) {
        case 'Basic': return '1 design';
        case 'Standard': return '2 design variations';
        case 'Premium': return 'multiple design options';
        case 'Ultimate': return 'custom design from scratch';
        default: return 'design';
      }
    };

    const message = `
*CV Crafter - New Resume Request*

*Full Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Desired Job Title:* ${formData.jobTitle}
*Selected Tier:* ${formData.tier}
*Preferred Layout Style:* ${formData.layout || 'Not specified'}
*Selected Layouts:* ${selectedLayouts.length > 0 ? selectedLayouts.join(', ') : 'None selected'}
*Number of Designs:* ${getNumberOfDesigns()}

*Experience:*
${formData.experience}

*Education:*
${formData.education}

*Skills:*
${formData.skills}

*Professional Summary:*
${formData.summary}

Thank you for your submission! Our expert will create your resume shortly.
    `.trim();

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = resumeSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach(issue => {
        if (issue.path && issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // For Basic tier, layout should be in selectedLayouts
    if (formData.tier === 'Basic' && selectedLayouts.length === 0) {
      setErrors({ layout: 'Please select a layout for Basic tier' });
      return;
    }
    
    // For other tiers (except Ultimate), ensure user has selected appropriate number of layouts
    const maxLayouts = getMaxLayoutsForTier(formData.tier);
    if (selectedLayouts.length === 0 && formData.tier !== 'Ultimate') {
      setErrors({ layout: `Please select at least 1 layout` });
      return;
    }

    // Format the message and redirect to WhatsApp
    const whatsappUrl = `https://wa.me/923091273446?text=${formatWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank');
  };



  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="John Doe"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            required
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="john@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="+92 300 1234567"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            required
          />
          {errors.phone && (
            <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
            Desired Job Title *
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.jobTitle ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Software Engineer"
            aria-invalid={!!errors.jobTitle}
            aria-describedby={errors.jobTitle ? "jobTitle-error" : undefined}
            required
          />
          {errors.jobTitle && (
            <p id="jobTitle-error" className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
          Education Details *
        </label>
        <textarea
          id="education"
          name="education"
          value={formData.education}
          onChange={handleChange}
          rows={3}
          className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.education ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Bachelor's in Computer Science from XYZ University, 2020..."
          aria-invalid={!!errors.education}
          aria-describedby={errors.education ? "education-error" : undefined}
          required
        />
        {errors.education && (
            <p id="education-error" className="text-red-500 text-sm mt-1">{errors.education}</p>
          )}
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
          Work Experience *
        </label>
        <textarea
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          rows={4}
          className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.experience ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Describe your work experience, responsibilities, and achievements..."
          aria-invalid={!!errors.experience}
          aria-describedby={errors.experience ? "experience-error" : undefined}
          required
        />
        {errors.experience && (
            <p id="experience-error" className="text-red-500 text-sm mt-1">{errors.experience}</p>
          )}
      </div>

      <div>
        <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
          Skills *
        </label>
        <textarea
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          rows={3}
          className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.skills ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="JavaScript, React, Node.js, Project Management, etc."
          aria-invalid={!!errors.skills}
          aria-describedby={errors.skills ? "skills-error" : undefined}
          required
        />
        {errors.skills && (
            <p id="skills-error" className="text-red-500 text-sm mt-1">{errors.skills}</p>
          )}
      </div>

      <div>
        <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">
          Professional Summary *
        </label>
        <textarea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          rows={4}
          className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.summary ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="A brief summary of your professional background, key strengths, and career goals..."
          aria-invalid={!!errors.summary}
          aria-describedby={errors.summary ? "summary-error" : undefined}
          required
        />
        {errors.summary && (
            <p id="summary-error" className="text-red-500 text-sm mt-1">{errors.summary}</p>
          )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="tier" className="block text-sm font-medium text-gray-700 mb-1">
            Pricing Tier *
          </label>
          <select
            id="tier"
            name="tier"
            value={formData.tier}
            onChange={handleChange}
            className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.tier ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={!!errors.tier}
            aria-describedby={errors.tier ? "tier-error" : undefined}
            required
          >
            <option value="">Select a tier</option>
            <option value="Basic">Basic (PKR 500-700) - 1 Design</option>
            <option value="Standard">Standard (PKR 1000-1500) - 2 Designs</option>
            <option value="Premium">Premium (PKR 2000-2500) - All Designs</option>
            <option value="Ultimate">Ultimate (PKR 3000+) - Custom from Scratch</option>
          </select>
          {errors.tier && (
            <p id="tier-error" className="text-red-500 text-sm mt-1">{errors.tier}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Resume Layouts ({formData.tier === 'Ultimate' ? 'Not Applicable' : `${selectedLayouts.length}/${getMaxLayoutsForTier(formData.tier)}`})
          </label>
          <div className="border rounded-md p-2 max-h-48 overflow-y-auto">
            {['Corporate Classic', 'Business Professional', 'Modern Executive', 'Leadership Suite', 'Minimal Clean', 'Creative Vibrant'].map((layout) => (
              <div key={layout} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`layout-${layout}`}
                  checked={selectedLayouts.includes(layout)}
                  onChange={() => handleLayoutChange(layout)}
                  disabled={formData.tier === 'Ultimate' || !formData.tier || (selectedLayouts.length >= getMaxLayoutsForTier(formData.tier) && !selectedLayouts.includes(layout))}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor={`layout-${layout}`} className="ml-2 text-gray-700">
                  {layout}
                </label>
              </div>
            ))}
          </div>
          {errors.layout && (
            <p className="text-red-500 text-sm mt-1">{errors.layout}</p>
          )}
          {formData.tier && (
            <p className="text-sm text-gray-500 mt-1">
              {formData.tier === 'Basic' && 'Select 1 layout (you will receive 1 design)'}
              {formData.tier === 'Standard' && 'Select up to 2 layouts (you will receive 2 design variations)'}
              {formData.tier === 'Premium' && 'Select multiple layouts (you will receive multiple design options)'}
              {formData.tier === 'Ultimate' && 'No layout selection needed (custom design will be created from scratch)'}
            </p>
          )}
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          aria-label="Send resume details via WhatsApp"
        >
          Send Details via WhatsApp
        </button>
        <p className="text-gray-500 text-sm mt-2 text-center">
          By submitting, your information will be sent directly to our CV expert via WhatsApp
        </p>
      </div>
    </form>
  );
}