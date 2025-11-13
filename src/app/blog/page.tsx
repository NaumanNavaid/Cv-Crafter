import { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS, BLOG_CATEGORIES, getFeaturedPosts, getRecentPosts } from '@/lib/blog-data'
import { generateMetadata, SchemaGenerator } from '@/components/SEOHead'
import { WebsiteStructuredData, OrganizationStructuredData, BreadcrumbStructuredData, BlogStructuredData } from '@/components/StructuredData'
import { Calendar, Clock, User, ArrowRight, BookOpen } from 'lucide-react'

export const metadata: Metadata = generateMetadata({
  title: "Career Blog - Expert Resume Tips & Job Search Advice | CV Crafter",
  description: "Get expert career advice, resume writing tips, interview techniques, and job search strategies. Learn how to create ATS-friendly resumes and land your dream job with professional guidance.",
  keywords: "career advice, resume tips, job search, interview preparation, professional development, ATS-friendly resume, career growth, job application strategies",
  author: "CV Crafter Team",
  openGraph: {
    title: "Career Blog - Professional Resume & Career Advice",
    description: "Expert tips and advice on resume writing, job searching, interviews, and career development to help you land your dream job",
    type: "website",
    images: [
      {
        url: '/blog-og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Career Blog - CV Crafter"
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Career Blog - Professional Resume & Career Advice",
    description: "Expert tips and advice on resume writing, job searching, interviews, and career development",
    images: ['/blog-twitter-image.jpg'],
  },
  jsonLd: SchemaGenerator.generateWebsiteSchema('CV Crafter', 'https://cv-crafter.com/blog', 'https://cv-crafter.com/Logo.png')
})

function BlogPostCard({ post }: { post: any }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {post.category}
          </span>
          {post.featured && (
            <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          <Link
            href={`/blog/${post.category.toLowerCase().replace(/\s+/g, '-')}/${post.slug}`}
            className="hover:text-blue-600 transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <User className="w-4 h-4 mr-1" />
          <span className="mr-4">{post.author.name}</span>
          <Calendar className="w-4 h-4 mr-1" />
          <span className="mr-4">{new Date(post.publishedAt).toLocaleDateString()}</span>
          <Clock className="w-4 h-4 mr-1" />
          <span>{post.readTime} min read</span>
        </div>

        <Link
          href={`/blog/${post.category.toLowerCase().replace(/\s+/g, '-')}/${post.slug}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          Read more
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts()
  const recentPosts = getRecentPosts(6)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Career Advice & Insights
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Expert tips on resume writing, job searching, interviews, and career development to help you land your dream job.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 group"
              >
                <div className="flex items-center mb-3">
                  <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.postCount} articles</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>

                {category.subcategories && category.subcategories.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="space-y-2">
                      {category.subcategories.map((subcategory) => (
                        <Link
                          key={subcategory.slug}
                          href={`/blog/category/${category.slug}/${subcategory.slug}`}
                          className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          • {subcategory.name} ({subcategory.postCount})
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Recent Posts Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Career Tips</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get the latest career advice, job search tips, and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}