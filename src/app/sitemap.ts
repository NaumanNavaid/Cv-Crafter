import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Define the path to the app directory
const appDir = path.join(process.cwd(), 'src/app')

// Function to recursively find all page.tsx files
function findPages(dir: string, basePath = ''): string[] {
  const pages: string[] = []

  try {
    const items = fs.readdirSync(dir)

    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        // Skip API routes, dynamic routes, and other special directories
        if (item.startsWith('(') || item === 'api' || item.startsWith('[')) {
          continue
        }

        // Recursively search subdirectories
        const subPages = findPages(fullPath, path.join(basePath, item))
        pages.push(...subPages)
      } else if (item === 'page.tsx') {
        // Convert file path to URL path
        let urlPath = basePath

        // Handle root page
        if (basePath === '') {
          urlPath = ''
        }

        pages.push(urlPath)
      }
    }
  } catch (error) {
    // Silently continue if directory can't be read
  }

  return pages
}

// Function to get priority and change frequency based on path
function getPageMetadata(path: string) {
  const priorities = {
    '': 1.0,           // Home page
    'resume-builder': 0.9,
    'Layouts': 0.8,
    'blog': 0.7,
    'Contact': 0.6,
    'Pricing': 0.6,
    'faq': 0.5,
  }

  const changeFrequencies = {
    '': 'weekly',
    'resume-builder': 'weekly',
    'Layouts': 'weekly',
    'blog': 'daily',
    'Contact': 'monthly',
    'Pricing': 'monthly',
    'faq': 'monthly',
  }

  // Get the first segment of the path for matching
  const firstSegment = path.split('/')[0] || ''

  return {
    priority: priorities[firstSegment as keyof typeof priorities] || 0.5,
    changeFrequency: changeFrequencies[firstSegment as keyof typeof changeFrequencies] || 'monthly'
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cvcrafterpk.com'

  // Find all pages automatically
  const pages = findPages(appDir)

  // Convert pages to sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = pages.map(page => {
    const metadata = getPageMetadata(page)
    const url = page === '' ? baseUrl : `${baseUrl}/${page}`

    return {
      url,
      lastModified: new Date(),
      changeFrequency: metadata.changeFrequency as any,
      priority: metadata.priority,
    }
  })

  // Add dynamic routes that we know exist
  // Blog categories (you can customize these based on your actual categories)
  const blogCategories = ['career', 'resume-tips', 'interview']

  blogCategories.forEach(category => {
    sitemapEntries.push({
      url: `${baseUrl}/blog/category/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    })
  })

  // Sort by priority (high to low) and then by URL
  sitemapEntries.sort((a, b) => {
    const priorityA = a.priority || 0.5
    const priorityB = b.priority || 0.5

    if (priorityB !== priorityA) {
      return priorityB - priorityA
    }
    return a.url.localeCompare(b.url)
  })

  return sitemapEntries
}