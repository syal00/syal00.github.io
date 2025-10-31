'use client';

import { blogsData } from '../../../../utils/data/blogsData';

export default function BlogSection() {
  // Guard against empty data
  if (!blogsData || blogsData.length === 0) {
    return (
      <section className="section" id="blog" aria-labelledby="blog-title">
        <h2 id="blog-title" className="section-title">
          Blog
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 mb-4">
            Blog posts coming soon. Check back later for updates!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="blog" aria-labelledby="blog-title">
      <h2 id="blog-title" className="section-title">
        Blog
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogsData.map((blog, index) => (
            <article
              key={index}
              className="card"
              role="article"
              aria-labelledby={`blog-${index}-title`}
            >
              <h3 id={`blog-${index}-title`} className="text-xl font-bold mb-2 text-[#00ffff]">
                {blog.title}
              </h3>
              {blog.date && (
                <p className="text-gray-400 text-sm mb-2">{blog.date}</p>
              )}
              <p className="text-gray-300 mb-4">{blog.excerpt}</p>
              {blog.link && (
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ffff] hover:underline"
                  aria-label={`Read ${blog.title}`}
                >
                  Read more →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
