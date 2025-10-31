'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { personalData } from '../../../../utils/data/personal-data'
import { timeConverter } from '../../../../utils/time-converter'

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://dev.to/api/articles?username=${personalData.devUsername}&per_page=6`
        )
        const data = await response.json()
        // Filter blogs with cover images
        const blogsWithImages = data.filter((blog) => blog.cover_image)
        setBlogs(blogsWithImages.slice(0, 3))
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    if (personalData.devUsername) {
      fetchBlogs()
    }
  }, [])

  if (!personalData.devUsername) {
    return null
  }

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-[#0d1224]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#16f2b3]">
            Latest Blogs
          </h2>
          <div className="text-center text-gray-400">Loading blogs...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="blog" className="py-20 bg-[#0d1224]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#16f2b3]">
            Latest Blogs
          </h2>
          <Link
            href="/blog"
            className="text-[#16f2b3] hover:text-teal-400 transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                  {blog.title}
                </h3>
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
      </div>
    </section>
  )
}
