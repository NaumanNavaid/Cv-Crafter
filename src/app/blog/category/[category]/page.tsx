import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_CATEGORIES, getPostsByCategory } from '@/lib/blog-data'
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params
  const category = BLOG_CATEGORIES.find(cat => cat.slug === categorySlug)

  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }

  return {
    title: `${category.name} - CV Crafter Blog`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params
  const category = BLOG_CATEGORIES.find(cat => cat.slug === categorySlug)

  if (!category) {
    notFound()
  }

  const posts = getPostsByCategory(categorySlug)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            {category.description}
          </p>
          <p className="text-blue-200 mt-2">
            {category.postCount} {category.postCount === 1 ? 'article' : 'articles'}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Subcategories */}
        {category.subcategories && category.subcategories.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Subcategory</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.subcategories.map((subcategory) => (
                <Link
                  key={subcategory.slug}
                  href={`/blog/category/${category.slug}/${subcategory.slug}`}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {subcategory.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{subcategory.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{subcategory.postCount} articles</span>
                    <span className="text-blue-600 group-hover:text-blue-700 transition-colors">
                      View all →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All {category.name} Articles
          </h2>

          {posts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-500 mb-4">No articles found in this category yet.</p>
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Browse other categories
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        {post.subcategory && (
                          <Link
                            href={`/blog/category/${category.slug}/${post.subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full mr-3 hover:bg-gray-200 transition-colors"
                          >
                            {post.subcategory}
                          </Link>
                        )}
                        {post.featured && (
                          <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        <Link
                          href={`/blog/${post.category.toLowerCase().replace(/\s+/g, '-')}/${post.slug}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-gray-500 text-sm mb-4">
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
                        Read full article
                      </Link>

                      {post.tags && post.tags.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded hover:bg-gray-200 transition-colors cursor-pointer"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}