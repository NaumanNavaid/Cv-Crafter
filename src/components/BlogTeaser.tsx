import Link from 'next/link'
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react'
import { getFeaturedPosts } from '@/lib/blog-data'

const BlogTeaser = () => {
  const featuredPosts = getFeaturedPosts()

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Career Tips & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get expert advice on resume writing, job searching, interviews, and career development to help you land your dream job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.slice(0, 3).map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
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
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Career Articles</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-gray-600">Readers Helped</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">Weekly</div>
            <div className="text-gray-600">New Content</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogTeaser