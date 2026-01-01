"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";

// Placeholder images - ensure these exist or use placeholders
// import blog1 from "@/assets/blog-1.jpg";
// import blog2 from "@/assets/blog-2.jpg";
// import blog3 from "@/assets/blog-3.jpg";

interface BlogPost {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const posts: BlogPost[] = [
  {
    image: "/blog-1.jpg", // Replace with your import
    title: "The Future of Wearable Technology is Here",
    excerpt: "Exploring how AR is shifting from novelty to daily utility.",
    date: "Dec 28, 2025",
    category: "Technology",
    readTime: "5 min read",
  },
  {
    image: "/blog-2.jpg",
    title: "Inside Look: How We Built Lumen's Micro-Display",
    excerpt: "A deep dive into the engineering challenges of miniaturization.",
    date: "Dec 20, 2025",
    category: "Engineering",
    readTime: "8 min read",
  },
  {
    image: "/blog-3.jpg",
    title: "AR Glasses and the Evolution of HCI",
    excerpt: "Why voice and gaze are the new keyboard and mouse.",
    date: "Dec 15, 2025",
    category: "Research",
    readTime: "6 min read",
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 px-6 bg-white text-slate-900" id="blog">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                 Insights
               </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Latest news.
            </h2>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#"
            className="group flex items-center gap-2 text-sm font-semibold border-b border-gray-200 pb-1 hover:border-slate-900 transition-all"
          >
            View all articles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay Badge (Category) */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm border border-white/50">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        {/* Meta Data */}
        <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-300" />
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold leading-tight mb-3 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <div className="mt-auto pt-4 border-t border-gray-100">
           <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:gap-3 transition-all">
             Read story 
             <ArrowRight className="w-4 h-4 text-blue-600" />
           </span>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogSection;