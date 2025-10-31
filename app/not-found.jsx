import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d1224] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#16f2b3] mb-4">404</h1>
        <h2 className="text-4xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
