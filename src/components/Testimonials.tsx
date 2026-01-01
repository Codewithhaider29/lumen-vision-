"use client";

import React from "react";
import { motion } from "framer-motion";
import { Twitter, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    handle: "@sarahc_tech",
    initials: "SC",
    content: "The Lumen glasses have completely changed how I navigate my day. The notifications feature alone is worth it!",
    role: "Product Designer",
  },
  {
    name: "Marcus Johnson",
    handle: "@marcusj",
    initials: "MJ",
    content: "As a developer, having hands-free access to my alerts while coding is a game-changer. Highly recommend.",
    role: "Software Engineer",
  },
  {
    name: "Emily Watson",
    handle: "@emwatson",
    initials: "EW",
    content: "The real-time translation feature saved me during my trip to Japan. Absolutely incredible technology.",
    role: "Travel Vlogger",
  },
  {
    name: "David Park",
    handle: "@davidp",
    initials: "DP",
    content: "Sleek design, comfortable fit, amazing battery life. Lumen exceeded all my expectations.",
    role: "Architect",
  },
  {
    name: "Lisa Thompson",
    handle: "@lisathomp",
    initials: "LT",
    content: "Finally, smart glasses that actually look good. I wear them all day without any discomfort.",
    role: "Creative Director",
  },
  {
    name: "James Miller",
    handle: "@jmiller",
    initials: "JM",
    content: "The voice assistant is incredibly responsive. It's like having a personal AI assistant everywhere I go.",
    role: "Tech Journalist",
  },
];

const Testimonials = () => {
  // Split data into 3 columns for the masonry layout
  const column1 = testimonials.slice(0, 2);
  const column2 = testimonials.slice(2, 4);
  const column3 = testimonials.slice(4, 6);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-6"
          >
             <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Community Love</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6"
          >
            Loved by <span className="text-slate-400">innovators.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg"
          >
            Join thousands of early adopters shaping the future of augmented reality.
          </motion.p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] overflow-hidden mask-gradient">
          
          {/* Gradient Masks (Fade top and bottom) */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

          {/* Column 1 (Scrolls Up) */}
          <MarqueeColumn reviews={[...column1, ...column3, ...column2]} duration={45} />
          
          {/* Column 2 (Scrolls Down - Hidden on Mobile) */}
          <div className="hidden md:block">
            <MarqueeColumn reviews={[...column2, ...column1, ...column3]} duration={55} reverse />
          </div>

          {/* Column 3 (Scrolls Up - Hidden on Tablet) */}
          <div className="hidden lg:block">
             <MarqueeColumn reviews={[...column3, ...column2, ...column1]} duration={50} />
          </div>

        </div>
      </div>
    </section>
  );
};

const MarqueeColumn = ({ reviews, duration, reverse = false }: { reviews: typeof testimonials, duration: number, reverse?: boolean }) => {
  return (
    <div className="relative flex flex-col gap-6">
      <motion.div
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {/* We double the reviews to create a seamless loop */}
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </motion.div>
    </div>
  );
};

const ReviewCard = ({ review }: { review: typeof testimonials[number] }) => {
  return (
    <div className="group bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:scale-[1.02] cursor-default">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold">
            {review.initials}
          </div>
          <div>
            <div className="flex items-center gap-1">
                <h4 className="font-semibold text-sm text-slate-900">{review.name}</h4>
                <CheckCircle2 className="w-3 h-3 text-blue-500 fill-blue-500/10" />
            </div>
            <p className="text-xs text-slate-400">{review.handle}</p>
          </div>
        </div>
        <Twitter className="w-4 h-4 text-slate-300 group-hover:text-blue-400 transition-colors" />
      </div>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-4">
        "{review.content}"
      </p>

      <div className="pt-4 border-t border-gray-200/50 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{review.role}</span>
          <div className="flex gap-0.5">
             {[1,2,3,4,5].map(star => (
                 <svg key={star} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
             ))}
          </div>
      </div>
    </div>
  );
};

export default Testimonials;