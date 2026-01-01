"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    {
      name: "Features",
      href: "#features",
      hasDropdown: true,
      dropdownItems: [
        { name: "Smart Vision", href: "#vision" },
        { name: "Audio System", href: "#audio" },
        { name: "Connectivity", href: "#connect" },
      ],
    },
    { name: "Pricing", href: "#pricing" },
  ];

  // Animation Variants
  const menuVars: Variants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const containerVars: Variants = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } },
  };

  const mobileLinkVars: Variants = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <nav
          className={`relative mx-auto flex items-center justify-between rounded-full px-6 transition-all duration-500 ${
            isScrolled
              ? "bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5 border border-white/20 h-16 max-w-7xl"
              : "bg-transparent h-20 max-w-[100%]"
          }`}
        >
          {/* --- LOGO --- */}
          <a href="/" className="z-50 relative group">
            <img
              src="/dark logo.svg"
              alt="Lumen Logo"
              className="h-7 w-auto object-contain lg:h-8"
            />
          </a>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group h-full flex items-center"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-black transition-colors"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        hoveredLink === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {link.hasDropdown && hoveredLink === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      {link.dropdownItems?.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 text-sm text-gray-600 hover:text-black transition-colors group/item"
                        >
                          {item.name}
                          <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* --- CTA & MOBILE TOGGLE --- */}
          <div className="flex items-center gap-4 z-50">
            <button className="hidden lg:flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-slate-800 hover:scale-105 transition-all duration-300">
              Reserve Now
            </button>

            {/* Mobile Burger */}
            <button
              className="lg:hidden relative w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      {/* --- FULL SCREEN MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-white origin-top z-40 flex flex-col pt-32 px-6 pb-10 overflow-y-auto"
          >
            <div className="flex flex-col justify-between h-full max-w-md mx-auto w-full">
              
              {/* Links Container */}
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-6"
              >
                {navLinks.map((link) => (
                  <div key={link.name} className="overflow-hidden">
                    <motion.div variants={mobileLinkVars}>
                      <div
                        onClick={() =>
                            link.hasDropdown 
                            ? setMobileActiveDropdown(mobileActiveDropdown === link.name ? null : link.name) 
                            : setIsMobileMenuOpen(false)
                        }
                        className="flex items-center justify-between text-3xl font-medium tracking-tight text-slate-900 cursor-pointer"
                      >
                        {link.name}
                        {link.hasDropdown && (
                             <motion.div 
                                animate={{ rotate: mobileActiveDropdown === link.name ? 180 : 0 }}
                             >
                                <ChevronDown size={24} />
                             </motion.div>
                        )}
                      </div>

                      {/* Mobile Dropdown Expansion */}
                      <AnimatePresence>
                        {link.hasDropdown && mobileActiveDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-4 py-4 pl-4 border-l border-gray-200 ml-2 mt-2">
                              {link.dropdownItems?.map((item, i) => (
                                <motion.a
                                  key={item.name}
                                  href={item.href}
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-lg text-slate-500 flex items-center gap-2"
                                >
                                  {item.name}
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              {/* Mobile Footer Area */}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5, duration: 0.5 }}
                 className="mt-10 pt-10 border-t border-gray-100"
              >
                  <div className="grid grid-cols-2 gap-4 mb-8">
                      <a href="#" className="text-sm font-semibold text-slate-900">Support</a>
                      <a href="#" className="text-sm font-semibold text-slate-900">Contact</a>
                      <a href="#" className="text-sm font-semibold text-slate-900">Privacy</a>
                      <a href="#" className="text-sm font-semibold text-slate-900">Terms</a>
                  </div>
                  <button className="w-full bg-black text-white py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform">
                      Get Lumen
                      <ArrowUpRight size={20} />
                  </button>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;