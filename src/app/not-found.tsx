import { Metadata } from 'next'
import Link from 'next/link'
import { Home, FileText, ArrowRight, Search, BookOpen, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found - CV Crafter',
  description: 'The page you\'re looking for doesn\'t exist. Explore our resume builder, templates, and career resources.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          {/* 404 Icon */}
          <div className="mx-auto h-24 w-24 text-blue-600 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-blue-600">404</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track to creating your perfect resume!
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-4xl px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What were you looking for?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Resume Builder */}
              <Link
                href="/resume-builder"
                className="group p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-200 border border-blue-200"
              >
                <div className="flex flex-col items-center text-center">
                  <FileText className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Resume Builder
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Create professional ATS-friendly resumes in minutes
                  </p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                    <span className="text-sm font-medium">Start Building</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>

              {/* Premium Templates */}
              <Link
                href="/Layouts"
                className="group p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all duration-200 border border-purple-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Premium Templates
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Professional templates designed by experts
                  </p>
                  <div className="flex items-center text-purple-600 group-hover:text-purple-700">
                    <span className="text-sm font-medium">Browse Templates</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>

              {/* Career Blog */}
              <Link
                href="/blog"
                className="group p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-200 border border-green-200"
              >
                <div className="flex flex-col items-center text-center">
                  <BookOpen className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Career Blog
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Expert tips for resume writing and job search
                  </p>
                  <div className="flex items-center text-green-600 group-hover:text-green-700">
                    <span className="text-sm font-medium">Read Articles</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Popular Resources */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Resources</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/Pricing"
                  className="flex items-center p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold text-sm">$</span>
                  </div>
                  <div>
                    <div className="font-medium">Pricing Plans</div>
                    <div className="text-sm text-gray-500">Compare features and pricing</div>
                  </div>
                </Link>

                <Link
                  href="/Contact"
                  className="flex items-center p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold text-sm">@</span>
                  </div>
                  <div>
                    <div className="font-medium">Contact Support</div>
                    <div className="text-sm text-gray-500">Get help from our team</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Search Suggestion */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center text-gray-600 text-sm">
                <Search className="w-4 h-4 mr-2" />
                <span>
                  Can't find what you're looking for? Try using our search feature or
                  <Link href="/Contact" className="text-blue-600 hover:text-blue-700 font-medium mx-1">
                    contact our support team
                  </Link>
                </span>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-6 text-center">
              <Link
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}