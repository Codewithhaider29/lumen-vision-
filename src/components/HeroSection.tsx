"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  // Parallax scroll effects
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]); // Increased range for better parallax
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  // State for particles to prevent hydration mismatch
  const [particles, setParticles] = useState<Array<{ x: string; y: string; duration: number }>>([]);

  useEffect(() => {
    // Generate particles only on client-side
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      duration: 15 + Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const glowAnimation = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const,
  },
};
  return (
    <section className="relative w-full py-12 md:py-20 px-4 md:px-6 lg:px-8 bg-white flex justify-center items-center overflow-hidden">
      
      {/* Floating Particles Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-gray-900/10 rounded-full"
            initial={{ x: p.x, y: p.y }}
            animate={{
              y: [p.y, `calc(${p.y} - 100px)`, p.y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Black Card Container */}
      <motion.div
        style={{ opacity }}
        className="relative w-full max-w-[1300px] bg-black rounded-[40px] md:rounded-[60px] overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center shadow-2xl shadow-black/30"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0">
          

          {/* Floating Glow Orbs */}
          <motion.div
            animate={glowAnimation.animate}
            transition={glowAnimation.transition}
            className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={glowAnimation.animate}
            transition={{ ...glowAnimation.transition, delay: 2 }}
            className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px]"
          />
        </div>

        {/* Background Image with Parallax */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-10 flex justify-end items-center pointer-events-none"
        >
          <div className="relative w-full md:w-[75%] h-full">
            <motion.img
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              src="/glasses-hero.png" // Ensure this image exists in /public
              alt="Smart Glasses"
              className="w-full h-full object-cover md:object-contain object-right opacity-90 md:opacity-100"
            />
            {/* Gradient Overlay for better text readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent md:via-transparent" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-30 container mx-auto px-6 md:px-16 lg:px-24 w-full"
        >
          <div className="max-w-2xl">

            {/* Heading with Animated Gradient Text */}
            <div className="relative">
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8"
              >
                <span className="block text-white">Reimagining</span>
                <span className="block text-white">the way you</span>
                
                {/* Gradient Text Line */}
                <span className="block relative overflow-hidden pb-2">
                  <motion.span
                    className="absolute inset-0"
                    animate={{ backgroundPosition: ["0% center", "200% center"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    see the world
                  </motion.span>
                  <span className="invisible">see the world</span>
                </span>
              </motion.h1>
            </div>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mb-10"
            >
              Experience the future of augmented reality with our cutting-edge
              smart glasses. Seamlessly blend digital and physical worlds.
            </motion.p>

            {/* Button */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white text-black font-bold text-lg px-10 py-4 rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                  Reserve now
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                
                {/* Animated Background on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;