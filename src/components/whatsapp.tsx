'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const WhatsAppContact = () => {
  return (
    <section className="section bg-[hsl(var(--professional-secondary))]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="card rounded-2xl shadow-professional p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <div className="bg-[hsl(var(--professional-accent)/0.1)] p-4 rounded-full">
              <MessageCircle className="h-10 w-10 text-[hsl(var(--professional-accent))]" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--professional-primary))]">
            Ready to Get Started?
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] mb-8 max-w-2xl mx-auto">
            Have questions or ready to send your resume details? Contact us directly on WhatsApp for immediate assistance.
          </p>
          <a
            href="https://wa.me/923091273446"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppContact;
