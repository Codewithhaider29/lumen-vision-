"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  Shield,
  Globe,
  MapPin,
  Smartphone,
  Cpu,
  LucideIcon,
} from "lucide-react";

type Feature = {
  text: string;
  icon: LucideIcon;
};

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: Feature[];
  theme: "dark" | "light";
  popular: boolean;
  accent: string;
  stats: { weight: string; display: string; battery: string };
};

const products: Product[] = [
  {
    id: "lumen",
    name: "Lumen",
    price: 269,
    description: "Essential smart features in a featherlight design.",
    features: [
      { text: "Retina projection", icon: Globe },
      { text: "Voice OS", icon: Zap },
      { text: "8h Battery", icon: Clock },
      { text: "Water resistant", icon: Shield },
    ],
    theme: "dark",
    popular: false,
    accent: "blue",
    stats: { weight: "24g", display: "4K", battery: "8h" },
  },
  {
    id: "lumen-r2",
    name: "Lumen R2",
    price: 299,
    description: "Advanced AI capabilities for the power user.",
    features: [
      { text: "Real-time translation", icon: MapPin },
      { text: "LiDAR mapping", icon: Smartphone },
      { text: "12h Battery", icon: Clock },
      { text: "Titanium finish", icon: Cpu },
    ],
    theme: "light",
    popular: true,
    accent: "purple",
    stats: { weight: "26g", display: "8K", battery: "12h" },
  },
];

const PricingGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  // Smooth floating animation
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 100 },
    },
  };

  return (
    <section className="relative py-20 px-4 md:px-8 bg-gray-50 text-slate-900 overflow-hidden min-h-screen flex items-center">
      {/* --- Background Elements --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Find your perfect fit.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Choose the power that suits your reality.
          </p>
        </motion.div>

        {/* --- Main Grid Layout (60% Image | 40% Pricing) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
        >
          {/* --- LEFT SIDE: Image (60% Width -> col-span-7) --- */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 relative h-[600px] lg:h-auto rounded-[2.5rem] overflow-hidden group shadow-2xl"
          >
            {/* Image */}
            <img
              src="/glasses-static1.jpg" // Ensure this path is correct
              alt="Lumen Glasses Design"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </motion.div>

          {/* --- RIGHT SIDE: Pricing Cards (40% Width -> col-span-5) --- */}
          {/* Stacked vertically because width is narrower */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-5 flex flex-col gap-6 justify-center"
          >
            {products.map((product) => (
              <PricingCard
                key={product.id}
                product={product}
                hovered={hoveredCard === product.id}
                setHovered={setHoveredCard}
                selected={selectedCard === product.id}
                setSelected={setSelectedCard}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Sub Component: Pricing Card ---
const PricingCard = ({
  product,
  hovered,
  setHovered,
  selected,
  setSelected,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
  const isDark = product.theme === "dark";
  const accentColor =
    product.accent === "white" ? "text-white-500" : "text-white-500";
  const accentBg = product.accent === "white" ? "bg-white-500" : "bg-white-500";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
      }}
      whileHover={{ scale: 1.02, y: -4 }}
      onClick={() => setSelected(product.id)}
      onMouseEnter={() => setHovered(product.id)}
      onMouseLeave={() => setHovered(null)}
      className={`relative p-6 rounded-[2rem] border transition-all duration-300 cursor-pointer overflow-hidden group ${
        isDark
          ? "bg-[#0f1115] border-gray-800 text-white"
          : "bg-white border-gray-200 text-slate-900 shadow-xl shadow-slate-200/50"
      } ${selected ? `ring-2 ring-offset-2 ` : ""}`}
    >
      {/* Popular Badge */}
      {product.popular && (
        <div className="absolute top-0 right-0 p-6">
          <span className="border border-black text-black text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-gray-400" />
            Popular
          </span>
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            {product.description}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight">
          ${product.price}
        </span>
        <span
          className={`text-sm font-medium ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          USD
        </span>
      </div>

      {/* Features Grid (Compact for narrower column) */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {product.features.map((feature: Feature, i: number) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className={`p-1.5 rounded-full ${
                isDark ? "bg-white/10" : "bg-gray-100"
              } ${hovered ? accentColor : "text-gray-400"}`}
            >
              <feature.icon className="w-3.5 h-3.5" />
            </div>
            <span
              className={`text-xs font-medium ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <div
        className={`
    w-full py-3.5 rounded-xl font-semibold text-sm
    flex items-center justify-center gap-2
    transition-all duration-300 cursor-pointer
    ${
      isDark
        ? hovered
          ? "bg-white text-black shadow-lg"
          : "bg-white/10 text-white hover:bg-white/20"
        : hovered
        ? "bg-black text-white shadow-lg"
        : "bg-gray-100 text-slate-900 hover:bg-gray-200"
    }
  `}
      >
        <span>Reserve Now</span>
        <ArrowRight
          className={`w-4 h-4 transition-transform ${
            hovered ? "translate-x-1" : ""
          }`}
        />
      </div>
    </motion.div>
  );
};

export default PricingGrid;
