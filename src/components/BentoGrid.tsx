"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Zap, ArrowRight, MoveHorizontal, Check } from "lucide-react";

const BentoGrid = () => {
  return (
    <section className="py-24 px-4 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400"
            >
              System Features
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900"
            >
              Engineered for <br className="hidden md:block" />
              seamless living.
            </motion.h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-slate-800 transition-colors"
          >
            Reserve now <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">

          {/* Card 1: Smart Design (Large Vertical) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:col-span-1 md:row-span-2 bg-gray-50 rounded-[2rem] p-8 relative overflow-hidden group border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">Smart Design</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Engineered with aerospace-grade composites for a featherlight feel that lasts all day.
                </p>
              </div>

              {/* Simulated "Exploded View" or Technical visual */}
              <div className="mt-8 flex-grow relative flex items-center justify-center">
                {/* Placeholder for Product Image */}
                <motion.video
                  src="/glasses-video.mp4"   // video file in /public
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full object-contain"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />


                {/* Decorative Circle */}
                <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-50 scale-0 group-hover:scale-125 transition-all duration-700 blur-2xl" />
              </div>

              <div className="pt-6 border-t border-gray-200/50">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Premium Materials
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: App Ecosystem (Wide Horizontal) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-gray-50 rounded-[2rem] p-8 relative overflow-hidden group border border-gray-100 flex flex-col md:flex-row items-center gap-8 hover:bg-gray-100 transition-colors duration-500"
          >
            <div className="flex-1 space-y-4 z-10">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">Seamless Control</h3>
              <p className="text-slate-500 text-sm max-w-xs">
                Manage notifications, adjust tint, and track battery life directly from the companion app.
              </p>
            </div>

            {/* Simulated App UI */}
            <div className="flex-1 w-full max-w-[280px] bg-white rounded-2xl shadow-xl p-4 border border-gray-100 relative top-8 md:top-0 md:group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex justify-between items-center mb-6">
                <div className="h-2 w-16 bg-gray-200 rounded-full" />
                <div className="h-4 w-4 rounded-full bg-gray-100" />
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i === 1 ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <Check className="w-4 h-4" />
                    </div>
                    <div className="h-2 w-24 bg-gray-200 rounded-full" />
                  </div>
                ))}
              </div>
              {/* Floating Notification */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 bg-black text-white text-xs px-3 py-1.5 rounded-full shadow-lg"
              >
                Connected
              </motion.div>
            </div>
          </motion.div>

          {/* Card 3: Streamlined Fit (Small) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-black text-white rounded-[2rem] p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                <MoveHorizontal className="w-5 h-5 text-white" />
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Adaptive Fit</h3>
                <p className="text-white/60 text-sm">
                  Temples that flex to your unique face shape.
                </p>
              </div>
            </div>

            {/* Abstract Background Animation */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d="M0 50 Q 50 20 100 50"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M0 70 Q 50 40 100 70"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Card 4: Stats/Technical (Small) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 bg-white border border-gray-200 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <h4 className="text-5xl font-bold tracking-tighter mb-2">24<span className="text-lg text-slate-400 font-normal align-top ml-1">g</span></h4>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Ultra Lightweight</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;