"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What features do Lumen glasses offer?",
    answer: "Lumen glasses offer notifications display, voice assistant control, real-time translation, facial recognition alerts, and more. All features are designed to enhance your daily life without being intrusive.",
  },
  {
    question: "How long does the battery last?",
    answer: "The standard Lumen model offers 8 hours of active use, while the Lumen R2 provides up to 12 hours. Standby time extends up to several days depending on usage patterns.",
  },
  {
    question: "Are Lumen glasses water resistant?",
    answer: "Yes, both Lumen models feature IP54 water resistance, protecting them from splashes and light rain. However, they are not designed for swimming or submersion.",
  },
  {
    question: "Can I use Lumen with prescription lenses?",
    answer: "Absolutely! We offer a prescription lens program where you can have your prescription fitted into Lumen frames through our certified optical partners.",
  },
  {
    question: "What devices are compatible with Lumen?",
    answer: "Lumen glasses are compatible with both iOS (iPhone 12 and newer) and Android (Android 10 and newer) devices via the Lumen companion app.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-gray-50 text-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* --- Left Column: Sticky Header --- */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Support</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Common questions.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Everything you need to know about the product and billing. Can't find the answer you're looking for?
              </p>
              
              <button className="text-slate-900 font-semibold border-b border-slate-900 pb-0.5 hover:text-slate-600 hover:border-slate-600 transition-colors flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Chat to our team
              </button>
            </div>
          </div>

          {/* --- Right Column: Accordion List --- */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                faq={faq} 
                isOpen={openIndex === index} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq, isOpen, onClick }: { faq: FAQ, isOpen: boolean, onClick: () => void }) => {
  return (
    <motion.div
      initial={false}
      animate={{ 
        backgroundColor: isOpen ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
        borderColor: isOpen ? "rgba(226, 232, 240, 1)" : "rgba(226, 232, 240, 0)"
      }}
      className={`rounded-3xl border border-transparent overflow-hidden transition-colors duration-300 ${
        isOpen ? "shadow-xl shadow-gray-200/50" : "hover:bg-white/50"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full px-8 py-6 flex items-start justify-between text-left gap-4"
      >
        <span className={`text-lg font-medium transition-colors duration-300 ${
          isOpen ? "text-slate-900" : "text-slate-600"
        }`}>
          {faq.question}
        </span>
        
        {/* Animated Icon Container */}
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen ? "bg-slate-900 border-slate-900" : "bg-white border-gray-200"
        }`}>
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
          >
             {isOpen ? (
                 <Minus className="w-4 h-4 text-white" />
             ) : (
                 <Plus className="w-4 h-4 text-slate-400" />
             )}
          </motion.div>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="px-8 pb-8">
              <p className="text-slate-500 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQSection;