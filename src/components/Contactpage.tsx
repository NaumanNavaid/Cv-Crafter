'use client';

import React, { useState } from 'react';


export const metadata = {
  title: "Contact – CV Crafter",
  description:
    "Have questions or want to send your resume details? Get in touch with CV Crafter on WhatsApp or via email.",
};
const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData?.error || 'Failed to send message');
      }
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Contact</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md p-8 rounded">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {success && (
          <p className="text-green-600 text-sm mt-2">✅ Message sent successfully!</p>
        )}
        {error && <p className="text-red-500 text-sm mt-2">❌ {error}</p>}
      </form>

      <div className="text-center mt-10 text-gray-600">
        <p>
          Email:{' '}
          <a href="mailto:naumannavaid378@gmail.com" className="text-blue-500">
            naumannavaid378@gmail.com
          </a>
        </p>
        <p>
          <a href="https://wa.me/923091273446" target="_blank" rel="noopener noreferrer" className="text-blue-500">

          WhatsApp:{' '}
            +92 309 1273446
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
