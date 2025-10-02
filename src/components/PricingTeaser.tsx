// components/PricingTeaser.tsx
'use client'
import React from 'react'

const pricingTiers = [
  {
    title: 'Basic Resume',
    price: 'PKR 500-700',
    description: '1 Design, No Future Edits, 7-8 Hour Delivery',
  },
  {
    title: 'Standard Resume',
    price: 'PKR 1000-1500',
    description: '2 Designs, 3 Edits within 1 Month, ~5 Hour Delivery',
  },
  {
    title: 'Premium Resume',
    price: 'PKR 2000-2500',
    description: 'All Designs, Unlimited Edits, ~3 Hour Delivery',
  },
  {
    title: 'Ultimate Resume',
    price: 'PKR 3000+',
    description: 'Custom from Scratch, Unlimited Edits, 24 Hour or Discussed Delivery',
  },
]

const PricingTeaser = () => {
  return (
    <section className="section bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[hsl(var(--professional-primary))] mb-6">Simple Pricing for Every Need</h2>
        <p className="text-[hsl(var(--muted-foreground))] mb-10">Choose the resume package that fits your goals.</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier, i) => (
            <div
              key={i}
              className="card p-6 rounded-2xl shadow-professional hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[hsl(var(--professional-dark))]">{tier.title}</h3>
              <p className="text-2xl font-bold text-[hsl(var(--professional-primary))] my-2">{tier.price}</p>
              <p className="text-[hsl(var(--muted-foreground))]">{tier.description}</p>
            </div>
          ))}
        </div>

        <a
          href="/Pricing"
          className="inline-block mt-10 bg-[hsl(var(--professional-primary))] text-white px-6 py-3 rounded-xl font-medium hover:bg-[hsl(var(--professional-primary)/0.9)] transition"
        >
          View Full Pricing
        </a>
      </div>
    </section>
  )
}

export default PricingTeaser
