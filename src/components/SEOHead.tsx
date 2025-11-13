import { Metadata } from 'next';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: string;
    url?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    siteName?: string;
    locale?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image';
    title?: string;
    description?: string;
    images?: string[];
    site?: string;
    creator?: string;
  };
  canonical?: string;
  alternate?: Array<{
    hrefLang: string;
    href: string;
  }>;
  noindex?: boolean;
  robots?: string;
  jsonLd?: Record<string, any>;
}

export function generateMetadata(props: SEOHeadProps): Metadata {
  const {
    title = 'CV Crafter – Create Professional ATS-Friendly Resumes Online',
    description = 'CV Crafter helps you build modern, ATS-friendly resumes and cover letters with customizable templates. Export to PDF instantly and stand out in job applications.',
    keywords = 'resume builder, CV creator, ATS-friendly resume, professional templates, job application',
    author = 'CV Crafter Team',
    openGraph,
    twitter,
    canonical,
    alternate,
    noindex,
    robots,
    jsonLd
  } = props;

  const metadata: Metadata = {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    openGraph: {
      title: openGraph?.title || title,
      description: openGraph?.description || description,
      type: (openGraph?.type as 'website' | 'article' | undefined) || 'website',
      url: openGraph?.url,
      images: openGraph?.images?.map(img => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: img.alt || title,
      })),
      siteName: openGraph?.siteName || 'CV Crafter',
      locale: openGraph?.locale || 'en_US',
    },
    twitter: {
      card: twitter?.card || 'summary_large_image',
      title: twitter?.title || title,
      description: twitter?.description || description,
      images: twitter?.images,
      site: twitter?.site || '@cv_crafter',
      creator: twitter?.creator || '@cv_crafter',
    },
    alternates: {
      canonical,
      languages: alternate?.reduce((acc, alt) => {
        acc[alt.hrefLang] = alt.href;
        return acc;
      }, {} as Record<string, string>),
    },
    robots: {
      index: !noindex,
      follow: robots?.includes('nofollow') ? false : true,
      googleBot: {
        index: !noindex,
        follow: robots?.includes('nofollow') ? false : true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: jsonLd ? {
      'application/ld+json': JSON.stringify(jsonLd),
    } : undefined,
  };

  return metadata;
}

// JSON-LD Schema Generator
export class SchemaGenerator {
  static generateWebsiteSchema(organizationName: string, url: string, logo?: string) {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: organizationName,
      url: url,
      description: 'Create professional, ATS-friendly resumes online with customizable templates',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${url}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
      publisher: {
        '@type': 'Organization',
        name: organizationName,
        url: url,
        logo: logo ? {
          '@type': 'ImageObject',
          url: logo,
        } : undefined,
      },
    };
  }

  static generateOrganizationSchema(organizationName: string, url: string, contactInfo: {
    email?: string;
    phone?: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      zipCode?: string;
      country?: string;
    };
    socialMedia?: Record<string, string>;
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: organizationName,
      url: url,
      description: 'Professional resume building platform with ATS-friendly templates',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: contactInfo.email,
        telephone: contactInfo.phone,
        availableLanguage: ['English'],
      },
      address: contactInfo.address ? {
        '@type': 'PostalAddress',
        streetAddress: contactInfo.address.street,
        addressLocality: contactInfo.address.city,
        addressRegion: contactInfo.address.state,
        postalCode: contactInfo.address.zipCode,
        addressCountry: contactInfo.address.country,
      } : undefined,
      sameAs: contactInfo.socialMedia ? Object.values(contactInfo.socialMedia) : undefined,
    };
  }

  static generateServiceSchema(serviceName: string, description: string, url: string, provider: string) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      description: description,
      url: url,
      provider: {
        '@type': 'Organization',
        name: provider,
      },
      serviceType: 'Resume Building Service',
      areaServed: 'Worldwide',
      offers: {
        '@type': 'Offer',
        price: '0.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    };
  }

  static generateArticleSchema(article: {
    headline: string;
    description: string;
    url: string;
    image?: string;
    author: string;
    publishDate: string;
    modifyDate?: string;
    category?: string;
    keywords?: string[];
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.headline,
      description: article.description,
      url: article.url,
      image: article.image,
      author: {
        '@type': 'Person',
        name: article.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'CV Crafter',
        logo: {
          '@type': 'ImageObject',
          url: '/Logo.png',
        },
      },
      datePublished: article.publishDate,
      dateModified: article.modifyDate || article.publishDate,
      articleSection: article.category || 'Career Advice',
      keywords: article.keywords?.join(', '),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': article.url,
      },
    };
  }

  static generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
  }

  static generateProductSchema(product: {
    name: string;
    description: string;
    url: string;
    image?: string;
    price?: number;
    currency?: string;
    rating?: number;
    reviewCount?: number;
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      url: product.url,
      image: product.image,
      brand: {
        '@type': 'Brand',
        name: 'CV Crafter',
      },
      offers: {
        '@type': 'Offer',
        url: product.url,
        priceCurrency: product.currency || 'USD',
        price: product.price || 0,
        availability: 'https://schema.org/InStock',
        priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      },
      aggregateRating: product.rating ? {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.reviewCount || 100,
        bestRating: 5,
        worstRating: 1,
      } : undefined,
    };
  }

  static generateFAQSchema(faq: Array<{ question: string; answer: string }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  }
}