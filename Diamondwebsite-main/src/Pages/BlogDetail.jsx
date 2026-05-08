import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { User, Calendar, ArrowLeft, Share2 } from 'lucide-react';

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogData.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] flex flex-col items-center justify-center px-6">
        <h1 className="text-white text-4xl font-bold mb-4">Blog Not Found</h1>
        <Link to="/Blogs" className="text-[#B88A6A] hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#1A1A1A] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link 
          to="/Blogs" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#B88A6A] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm uppercase tracking-widest">Back to All Blogs</span>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-[#B88A6A] text-xs uppercase tracking-[0.2em] font-medium mb-6">
            <span>By Admin</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88A6A]/30"></span>
            <span>{blog.date}</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            {blog.title}
          </h1>
          
          <div className="flex items-center justify-between border-y border-white/10 py-6">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="w-10 h-10 rounded-full bg-[#B88A6A]/20 flex items-center justify-center text-[#B88A6A]">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Diamond Admin</p>
                <p className="text-xs">Expert Gemologist</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="text-xs uppercase tracking-wider hidden sm:inline">Share Article</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-16 aspect-video overflow-hidden rounded-2xl">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div 
            className="text-gray-300 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>

        {/* Footer / CTA */}
        <footer className="mt-20 pt-12 border-t border-white/10">
          <div className="bg-[#242424] p-8 md:p-12 rounded-3xl text-center">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Interested in Diamond Jewelry?
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Explore our exquisite collection of lab-grown diamonds and find the perfect piece for your special moment.
            </p>
            <Link 
              to="/Contact"
              className="inline-flex items-center gap-2 bg-[#B88A6A] hover:bg-[#A67958] text-white px-8 py-4 rounded-full transition-all duration-300 font-medium tracking-wide"
            >
              Inquire Now
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogDetail;
