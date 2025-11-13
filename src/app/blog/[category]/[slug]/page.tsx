import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getRelatedPosts, getPostsByCategory } from '@/lib/blog-data'
import { Calendar, Clock, User, ArrowLeft, ArrowRight, BookOpen, Share2 } from 'lucide-react'

interface BlogPostPageProps {
  params: Promise<{
    category: string
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - CV Crafter Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { category, slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post)
  const categoryPosts = getPostsByCategory(category).filter(p => p.id !== post.id)

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return (
          <h1 key={index} className="text-3xl font-bold text-gray-900 mb-4 mt-8">
            {line.replace('# ', '')}
          </h1>
        )
      }
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-semibold text-gray-900 mb-3 mt-6">
            {line.replace('## ', '')}
          </h2>
        )
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-gray-900 mb-2 mt-4">
            {line.replace('### ', '')}
          </h3>
        )
      }
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-700 mb-2 ml-6 list-disc">
            {line.replace('- ', '')}
          </li>
        )
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <p key={index} className="text-gray-700 mb-4 font-semibold">
            {line.replace(/\*\*/g, '')}
          </p>
        )
      }
      if (line.startsWith('```')) {
        return (
          <pre key={index} className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-sm text-gray-800">{line.replace('```', '')}</code>
          </pre>
        )
      }
      if (line.trim() === '') {
        return <br key={index} />
      }
      return (
        <p key={index} className="text-gray-700 mb-4 leading-relaxed">
          {line}
        </p>
      )
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/blog" className="text-gray-500 hover:text-gray-700">
              Blog
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-500 hover:text-gray-700">
              {post.category}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{post.title}</span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {post.category}
            </span>
            {post.subcategory && (
              <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                {post.subcategory}
              </span>
            )}
            {post.featured && (
              <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center text-gray-500 mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center mr-6 mb-2">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Share buttons */}
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-gray-600 font-medium">Share:</span>
            <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Share2 className="w-4 h-4 mr-1" />
              LinkedIn
            </button>
            <button className="flex items-center text-gray-600 hover:text-blue-400 transition-colors">
              <Share2 className="w-4 h-4 mr-1" />
              Twitter
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
              <Share2 className="w-4 h-4 mr-1" />
              Facebook
            </button>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {formatContent(post.content)}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
              {post.author.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
              <p className="text-gray-600">Career Development Expert</p>
            </div>
          </div>
          <p className="text-gray-700">
            Passionate about helping professionals advance their careers through effective resume writing,
            job search strategies, and interview preparation. Sharing insights gained from years of experience
            in career coaching and recruitment.
          </p>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {relatedPost.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    <Link
                      href={`/blog/${relatedPost.category.toLowerCase().replace(/\s+/g, '-')}/${relatedPost.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{relatedPost.readTime} min read</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* More from this category */}
        {categoryPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              More from {post.category}
            </h2>
            <div className="space-y-4">
              {categoryPosts.slice(0, 3).map((categoryPost) => (
                <div key={categoryPost.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 transition-colors">
                  <Link
                    href={`/blog/${categoryPost.category.toLowerCase().replace(/\s+/g, '-')}/${categoryPost.slug}`}
                    className="block"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      {categoryPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{categoryPost.excerpt}</p>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{new Date(categoryPost.publishedAt).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{categoryPost.readTime} min read</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Enjoy this article?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get more career advice and job search tips delivered to your inbox weekly.
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
      </article>
    </div>
  )
}