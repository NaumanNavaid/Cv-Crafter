'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ChevronRight } from 'lucide-react';

// Constants
const PATH_MAPPINGS: Record<string, string> = {
  'blog': 'Career Blog',
  'resume-builder': 'Create Resume',
  'Pricing': 'Pricing',
  'Contact': 'Contact',
  'Layouts': 'Resume Templates',
  'about': 'About Us',
  'faq': 'FAQ',
  'privacy': 'Privacy Policy',
  'terms': 'Terms of Service',
  'category': 'Category',
  'examples': 'Resume Examples',
  'cover-letter-examples': 'Cover Letter Examples',
  'features': 'Features',
  'careers': 'Careers',
  'partners': 'Partners',
  'cookies': 'Cookie Policy',
  'gdpr': 'GDPR',
  'sitemap': 'Sitemap',
} as const;

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Don't show breadcrumbs on the home page
  if (pathname === '/') return null;

  const generateBreadcrumbs = () => {
    const items = [{ label: 'Home', href: '/' }];
    const pathSegments = pathname.split('/').filter(Boolean);
    let currentPath = '';

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;

      // Handle special cases for blog structure
      if (segment === 'category' && pathSegments[index + 1]) {
        items.push({ label: 'Blog', href: '/blog' });
        return;
      }

      // Skip blog post slugs (last segment in blog path)
      if (pathSegments[0] === 'blog' && index > 1 && index === pathSegments.length - 1) {
        return;
      }

      // Format the label
      let label = PATH_MAPPINGS[segment] || segment;

      // Format blog categories and subcategories
      const isBlogCategory = pathSegments[0] === 'blog' && index === 1;
      const isSubcategory = pathSegments[0] === 'blog' && index === 2;

      if (isBlogCategory || isSubcategory) {
        label = segment.split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      } else if (!PATH_MAPPINGS[segment]) {
        // Capitalize first letter and replace dashes with spaces for other paths
        label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      }

      items.push({ label, href: currentPath });
    });

    return items;
  };

  const breadcrumbs = generateBreadcrumbs();

  const renderBreadcrumbItem = (item: { label: string; href: string }, index: number, isLast: boolean) => (
    <li key={item.href} className="flex items-center">
      {index === 0 ? (
        <Home className="w-4 h-4 mr-1" />
      ) : (
        <ChevronRight className="w-4 h-4 mr-2 text-gray-400" />
      )}

      {isLast ? (
        <span className="text-gray-900 font-medium">{item.label}</span>
      ) : (
        <Link
          href={item.href}
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          {item.label}
        </Link>
      )}
    </li>
  );

  return (
    <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {breadcrumbs.map((item, index) =>
            renderBreadcrumbItem(item, index, index === breadcrumbs.length - 1)
          )}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;