'use client';

import React from 'react';

const WhatsAppContact = () => {
  return (
    <section className="py-20 px-4 max-w-xl mx-auto text-center bg-white shadow-md rounded">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Want to send me your resume info?
      </h2>
      <p className="mb-8 text-gray-600">
        Just send me a message on WhatsApp! I’ll get back to you ASAP.
      </p>
      <a
        href="https://wa.me/923091273446"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition"
      >
        Chat on WhatsApp 📲
      </a>
    </section>
  );
};

export default WhatsAppContact;
