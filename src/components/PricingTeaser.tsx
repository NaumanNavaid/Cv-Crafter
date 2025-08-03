// components/PricingTeaser.tsx
'use client'
import React from 'react'

const pricingTiers = [
  {
    title: 'Basic Resume',
    price: '₨500+',
    description: 'One layout, no edits, 7-hour delivery',
  },
  {
    title: 'Pro Resume',
    price: '₨1000+',
    description: 'Custom layout with 1 revision, 5-hour delivery',
  },
  {
    title: 'Executive Resume',
    price: '₨2000+',
    description: 'Premium design, multiple formats, fast & flexible',
  },
]

const PricingTeaser = () => {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Simple Pricing for Every Need</h2>
        <p className="text-gray-600 mb-10">Choose the resume package that fits your goals.</p>

        <div className="grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{tier.title}</h3>
              <p className="text-2xl font-bold text-indigo-600 my-2">{tier.price}</p>
              <p className="text-gray-600">{tier.description}</p>
            </div>
          ))}
        </div>

        <a
          href="/Pricing"
          className="inline-block mt-10 bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
        >
          View Full Pricing
        </a>
      </div>
    </section>
  )
}

export default PricingTeaser
