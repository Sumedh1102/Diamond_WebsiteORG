import React from 'react';
import { User, Calendar, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

const BlogCard = ({ id, title, date, image, slug }) => {
  return (
    <Link to={`/blog/${slug}`} className="group cursor-pointer block">
      <div className="mb-6">
        <h3 className="text-white text-2xl font-bold leading-tight mb-4 group-hover:text-[#B88A6A] transition-colors duration-300">
          {title}
        </h3>
        <div className="border-b border-white/10 "></div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-4 text-gray-400 text-xs uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5" />
              <span>By Admin</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-amber-700"></div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>{date}</span>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[#B88A6A] transition-colors" />
        </div>
      </div>
      <div className="overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </Link>
  );
};

const LatestNews = () => {
  return (
    <div className="bg-[#1A1A1A] min-h-fit py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-gray-700 rounded-full mb-6">
              <span className="text-gray-300 text-xs uppercase tracking-widest font-medium">
                Our Blogs
              </span>
            </div>
            <h1 className="text-white text-7xl font-bold">
              Latest News
            </h1>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((blog) => (
            <BlogCard 
              key={blog.id}
              id={blog.id}
              slug={blog.slug}
              title={blog.title}
              date={blog.date}
              image={blog.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;