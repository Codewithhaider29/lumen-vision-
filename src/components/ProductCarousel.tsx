"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Eye, Battery } from "lucide-react";

// Placeholder images - ensure these paths are correct in your project
import productAngle1 from "@/assets/product-angle1.jpg";
import productAngle2 from "@/assets/product-angle2.jpg";
import productAngle3 from "@/assets/product-angle3.jpg";

const products = [
  {
    id: 1,
    image: productAngle1,
    title: "Voice Command",
    description: "Hands-free control with natural language processing.",
    icon: Zap,
  },
  {
    id: 2,
    image: productAngle2,
    title: "Face Recognition",
    description: "Instant identification alerts displayed in your peripheral vision.",
    icon: Eye,
  },
  {
    id: 3,
    image: productAngle3,
    title: "Smart Charging",
    description: "Premium case provides 24 hours of additional battery life.",
    icon: Battery,
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handleManualSelect = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
              Intelligence
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Redefining sight.
            </h2>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex gap-2">
             {products.map((_, idx) => (
                <div key={idx} className="h-1 w-8 rounded-full bg-gray-100 overflow-hidden">
                    {idx === currentIndex && (
                        <motion.div 
                            layoutId="activeProgress"
                            className="h-full bg-slate-900"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 5, ease: "linear" }}
                        />
                    )}
                     {idx < currentIndex && <div className="h-full w-full bg-slate-900" />}
                </div>
             ))}
          </div>
        </div>

        {/* Main Display Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px] lg:h-[500px]">
          
          {/* Active Image (Large) */}
          <div className="lg:col-span-8 relative rounded-[2rem] overflow-hidden bg-gray-100 shadow-2xl group">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img
                key={currentIndex}
                src={products[currentIndex].image}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 w-full h-full object-cover"
                alt={products[currentIndex].title}
              />
            </AnimatePresence>

            {/* Overlay Gradient for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Mobile Text (Only visible on small screens inside image) */}
            <div className="absolute bottom-8 left-8 lg:hidden text-white">
                <h3 className="text-2xl font-bold">{products[currentIndex].title}</h3>
                <p className="text-white/80 text-sm mt-2">{products[currentIndex].description}</p>
            </div>
          </div>

          {/* Side Navigation (Desktop) */}
          <div className="lg:col-span-4 flex flex-col justify-between py-4">
            
            {/* Active Details */}
            <div className="hidden lg:block space-y-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                            {React.createElement(products[currentIndex].icon, { className: "w-6 h-6 text-slate-900" })}
                        </div>
                        <h3 className="text-4xl font-bold mb-4">{products[currentIndex].title}</h3>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            {products[currentIndex].description}
                        </p>
                    </motion.div>
                </AnimatePresence>
                
                <button className="flex items-center gap-2 text-sm font-semibold mt-4 hover:gap-4 transition-all duration-300">
                    Learn more <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-3 gap-4 mt-auto">
                {products.map((product, idx) => (
                    <button
                        key={product.id}
                        onClick={() => handleManualSelect(idx)}
                        className={`relative rounded-xl overflow-hidden aspect-square transition-all duration-300 ${
                            idx === currentIndex 
                                ? "ring-2 ring-slate-900 ring-offset-2 opacity-100 scale-105" 
                                : "opacity-50 hover:opacity-100 grayscale"
                        }`}
                    >
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;