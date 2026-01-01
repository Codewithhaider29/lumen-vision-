"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Replace with your actual asset path
// import parallaxBanner from "@/assets/parallax-banner.jpg";

const ParallaxBanner = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress relative to this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax calculations
  // Background moves slower than scroll (creates depth)
  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  // Text moves slightly faster to separate from background
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  // Opacity fade out as you scroll past
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[85vh] overflow-hidden flex items-center justify-center bg-black"
    >
      
      {/* --- Layer 1: The Parallax Image --- */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]" // Height > 100% to prevent white gaps
      >
        <img
          src="/parallax-banner.jpg" // Ensure this matches your asset
          alt="Parallax Background"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Cinematic Gradient Overlay (Bottom Fade) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </motion.div>

      {/* --- Layer 2: Film Grain Texture (For premium feel) --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* --- Layer 3: Content --- */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-20 container mx-auto px-6 text-center"
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-medium text-gray-300 uppercase tracking-[0.2em]">
            The Future of AR
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="block"
          >
            Experience the future,
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
          >
            one glance at a time.
          </motion.span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Join thousands who have already transformed how they see the world. 
          Seamless integration, infinite possibilities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <button className="group relative px-8 py-4 bg-white text-black rounded-full text-lg font-semibold overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Reserve Your Pair
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            {/* Button Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ParallaxBanner;