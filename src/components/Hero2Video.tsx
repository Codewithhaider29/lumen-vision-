"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroVideo = () => {
  return (
    <section className="w-full py-10 px-4 md:px-8 bg-white flex justify-center items-center">
      
      {/* Main Container Card */}
      <div className="relative w-full max-w-[1400px] h-[600px] md:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl group">
        
        {/* --- 1. Background Video --- */}
        <video
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          src="/glasses-promo.mp4" // Yahan apni video file ka path lagayein
          autoPlay
          loop
          muted
          playsInline
        />

        {/* --- 2. Dark Overlay Gradient --- */}
        {/* Ye gradient right side ko dark karega taake text clear dikhe */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/60 to-black/90" />

        {/* --- 3. Content Section --- */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-end px-6 md:px-20">
          <div className="max-w-xl w-full text-white space-y-8">
            
            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
            >
              Experience the future, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                one glance at a time
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md"
            >
              Lorem ipsum dolor sit amet consectetur vel pharetra nulla a varius ac cras et est nec elementum ut facilisi tortor mi duis non.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 group/btn">
                Reserve now
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroVideo;