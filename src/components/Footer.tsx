"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Twitter, Instagram, Linkedin, Youtube, Send } from "lucide-react";

const Footer = () => {
  const links = {
    Product: ["Features", "Technology", "Pricing", "Enterprise"],
    Company: ["About", "Careers", "Blog", "Contact"],
    Support: ["Help Center", "Terms of Service", "Privacy Policy", "Status"],
  };

  return (
    <footer className="bg-black text-white overflow-hidden relative pt-24 pb-12 px-6">
      
      {/* Decorative Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-900/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section: CTA & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
          
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Ready to see the <br /> 
              <span className="text-gray-500">future clearly?</span>
            </h3>
            <p className="text-gray-400 max-w-md text-lg">
              Join 50,000+ pioneers shaping the next era of augmented reality. No spam, just updates.
            </p>
          </div>

          <div className="lg:pl-12">
            <form className="relative group">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent border-b border-gray-800 py-4 text-xl placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors pr-12"
              />
              <button 
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-white hover:text-black rounded-full transition-all duration-300 group-focus-within:opacity-100 opacity-50"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>

        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-24 border-t border-gray-900 pt-16">
          
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">
                {category}
              </h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors relative group inline-block"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials Column */}
          <div>
             <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">
                Connect
              </h4>
              <div className="flex gap-4">
                {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="mt-8">
                 <p className="text-gray-500 text-sm mb-2">Questions?</p>
                 <a href="mailto:hello@lumen.com" className="text-lg font-semibold hover:text-gray-300 transition-colors">
                    hello@lumen.com
                 </a>
              </div>
          </div>

        </div>

        {/* Bottom Section: Massive Brand & Copyright */}
        <div className="flex flex-col items-center border-t border-gray-900 pt-12">
            
            {/* Massive Logo */}
            <h1 className="text-[15vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-black select-none opacity-50">
                LUMEN
            </h1>

            <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 mt-8 gap-4">
               <p>© 2025 Lumen Technologies Inc.</p>
               <div className="flex gap-8">
                  <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
                  <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
                  <a href="#" className="hover:text-gray-400 transition-colors">Cookies</a>
               </div>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;