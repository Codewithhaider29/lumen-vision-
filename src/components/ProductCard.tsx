"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Zap, Eye, Navigation, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";

const ProductCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Helper to prevent "play() request interrupted" errors
  const playVideo = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Video play interrupted");
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playVideo();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        playVideo();
      }
    }
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 0.3,
      },
    },
  };

  const features = [
    {
      icon: Zap,
      title: "Voice-activated commands",
      description: "Control everything with simple voice commands",
    },
    {
      icon: Eye,
      title: "Facial recognition alerts",
      description: "Instant recognition and notifications",
    },
    {
      icon: Navigation,
      title: "Integrated AR navigation",
      description: "Seamless augmented reality guidance",
    },
  ];

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex justify-center items-center min-h-screen p-4 md:p-10 bg-white"
    >
      <div className="flex flex-col lg:flex-row max-w-6xl w-full gap-8 lg:gap-16 items-center">
        
        {/* --- Media Section --- */}
        <motion.div
          variants={imageVariants}
          className="relative w-full lg:w-1/2 aspect-square rounded-[2.5rem] overflow-hidden bg-gray-100 cursor-pointer group shadow-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Static Image */}
          <motion.img
            src="/glasses-static.jpg"
            alt="Smart Glasses"
            className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500 ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Video Element */}
          <video
            ref={videoRef}
            src="/glasses-video.mp4"
            className="absolute inset-0 w-full h-full object-cover z-0"
            muted
            loop
            playsInline
          />

          {/* Play/Pause Button */}
          <motion.button
            onClick={handleVideoClick}
            className={`absolute top-6 left-6 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 z-20 transition-all duration-300 hover:bg-white/30 ${
              isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            }`}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                >
                  <Pause className="text-white w-6 h-6 fill-current" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ scale: 0, rotate: 90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: -90 }}
                >
                  <Play className="text-white w-6 h-6 fill-current ml-1" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* --- Content Section --- */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/2 space-y-8"
        >
          {/* Title with Gradient Animation */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            <motion.span
              className="bg-clip-text to-gray-900 bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Redefining sight
            </motion.span>
            <br />
            <span>with intelligence</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            Experience the future of augmented reality with our cutting-edge
            smart glasses. Seamlessly blend digital and physical worlds with
            unparalleled clarity and comfort.
          </motion.p>

          {/* Features List */}
          <motion.div variants={containerVariants} className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group p-4 rounded-2xl border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-black group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                  <motion.div
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-black text-white font-semibold text-lg px-10 py-4 rounded-full shadow-xl group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Reserve now
              </span>
              
              {/* Sliding Background */}
              <motion.div
                className="absolute inset-0 bg-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductCard;