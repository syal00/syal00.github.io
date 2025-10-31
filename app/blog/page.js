import Image from 'next/image'
import Link from 'next/link'
import { personalData } from '../../utils/data/personal-data'
import { timeConverter } from '../../utils/time-converter'

async function getBlogs() {
  try {
    const response = await fetch(
      `https://dev.to/api/articles?username=${personalData.devUsername}&per_page=30`,
      { 
        next: { revalidate: 3600 },
        cache: 'force-cache'
      }
    )
    
    if (!response.ok) {
      return []
    }
    
    const data = await response.json()
    return data.filter((blog) => blog.cover_image)
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return []
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs()

  return (
    <div className="min-h-screen bg-[#0d1224] pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#16f2b3]">
          My Blogs
        </h1>

        {blogs.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            <p>No blogs found. Check back later!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1f3a] border border-teal-500/20 rounded-lg overflow-hidden hover:border-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={blog.cover_image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {blog.description || blog.title}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{timeConverter(blog.published_at)}</span>
                    <div className="flex items-center gap-4">
                      <span>❤️ {blog.public_reactions_count}</span>
                      <span>💬 {blog.comments_count}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
