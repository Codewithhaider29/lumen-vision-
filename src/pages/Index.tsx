
import { useState, useEffect } from "react";
import Loader from "@/components/Loader"; // Ensure path is correct based on where you saved Loader
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StickyScrollFeatures from "@/components/StickyScrollFeatures";
import ProductCard from "@/components/ProductCard";
import ProductCarousel from "@/components/ProductCarousel";
import PricingGrid from "@/components/PricingGrid";
import BentoGrid from "@/components/BentoGrid";
import HeroVideo from "@/components/Hero2Video";
import ParallaxBanner from "@/components/ParallaxBanner";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2.5 seconds ka fake loading timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white"> {/* Global bg-black set kiya hai premium feel ke liye */}
      
      {/* Loading Screen Logic */}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader">
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <main>
              <HeroSection />
              <StickyScrollFeatures />
              <ProductCard />
              <PricingGrid />
              <BentoGrid />
              <HeroVideo />
              <ProductCarousel />
              <ParallaxBanner />
              <Testimonials />
              <FAQSection />
              <BlogSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default Index;