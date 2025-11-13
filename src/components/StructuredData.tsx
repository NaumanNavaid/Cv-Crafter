import React from 'react';

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Pre-built structured data components
export function WebsiteStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CV Crafter',
    url: 'https://cv-crafter.com',
    description: 'Create professional, ATS-friendly resumes online with customizable templates',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://cv-crafter.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CV Crafter',
      url: 'https://cv-crafter.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cv-crafter.com/Logo.png',
        width: 512,
        height: 512,
      },
    },
  };

  return <StructuredData data={data} />;
}

export function OrganizationStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CV Crafter',
    url: 'https://cv-crafter.com',
    description: 'Professional resume building platform with ATS-friendly templates',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'naumannavaid378@gmail.com',
      telephone: '+923091273446',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.facebook.com/cv.crafter1',
      'https://wa.me/923091273446',
      'https://twitter.com/cv_crafter',
      'https://www.linkedin.com/company/cv-crafter',
      'https://www.instagram.com/cv_crafter',
    ],
  };

  return <StructuredData data={data} />;
}

export function BreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  return <StructuredData data={data} />;
}

export function ServiceStructuredData() {
  const services = [
    {
      '@type': 'Service',
      name: 'Resume Builder',
      description: 'Create professional, ATS-friendly resumes with our easy-to-use builder',
      url: 'https://cv-crafter.com/resume-builder',
      provider: {
        '@type': 'Organization',
        name: 'CV Crafter',
      },
      serviceType: 'Resume Building Service',
      areaServed: 'Worldwide',
      offers: {
        '@type': 'Offer',
        price: '0.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'Service',
      name: 'Resume Templates',
      description: 'Professional resume templates designed to pass ATS systems',
      url: 'https://cv-crafter.com/Layouts',
      provider: {
        '@type': 'Organization',
        name: 'CV Crafter',
      },
      serviceType: 'Template Design Service',
      areaServed: 'Worldwide',
      offers: {
        '@type': 'Offer',
        price: '0.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    },
  ];

  return services.map((service, index) => (
    <StructuredData key={index} data={service} />
  ));
}

export function FAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <StructuredData data={data} />;
}

export function ReviewStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'CV Crafter',
    url: 'https://cv-crafter.com',
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'John D.',
        },
        reviewBody: 'Excellent resume builder! Helped me land my dream job.',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Sarah M.',
        },
        reviewBody: 'The ATS-friendly templates really work. Got multiple interviews!',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '12047',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return <StructuredData data={data} />;
}

export function BlogStructuredData(post: {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  author: string;
  category: string;
  image?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: post.url,
    image: post.image || 'https://cv-crafter.com/blog-default-image.jpg',
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'CV Crafter',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cv-crafter.com/Logo.png',
      },
    },
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    articleSection: post.category,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
  };

  return <StructuredData data={data} />;
}