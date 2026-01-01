"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Bell,
  AudioWaveform,
  Languages,
  ArrowRight,
  Scan,
  Battery,
  Wifi,
} from "lucide-react";

// Placeholder data - kept consistent with your original
const features = [
  {
    id: 0,
    title: "Notifications display",
    description:
      "Stay connected without breaking focus. Important alerts float naturally in your peripheral vision, ensuring you never miss a moment.",
    icon: <Bell className="w-5 h-5" />,
    image: "/feature-notifications.jpg",
    overlay: {
      title: "New Message",
      subtitle: "Sarah: 'Dinner at 8?'",
      time: "10:42 AM",
    },
  },
  {
    id: 1,
    title: "Voice Command",
    description:
      "A whisper is all it takes. Our advanced acoustic algorithms isolate your voice from crowd noise for flawless hands-free control.",
    icon: <AudioWaveform className="w-5 h-5" />,
    image: "/feature-voice.jpg",
    overlay: {
      title: "Listening...",
      subtitle: "Playing 'Deep Focus'",
      time: "10:43 AM",
    },
  },
  {
    id: 2,
    title: "Real-time Translation",
    description:
      "The world, unlocked. Instantly translate signs, menus, and conversations. It's not just reading; it's understanding anywhere.",
    icon: <Languages className="w-5 h-5" />,
    image: "/feature-translation.jpg",
    overlay: {
      title: "Translating",
      subtitle: "Spanish → English",
      time: "10:45 AM",
    },
  },
];

const StickyScrollFeatures = () => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll progress for the timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const handleScroll = () => {
      const featureElements = featureRefs.current;
      featureElements.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          // Trigger slightly above center for better reading flow
          if (
            rect.top < window.innerHeight * 0.4 &&
            rect.bottom > window.innerHeight * 0.4
          ) {
            setActiveCard(index);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="bg-white relative">
      {/* Decorative top fade */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24">
        {/* Header - Stays static at top of section */}
        <div className="mb-24 lg:mb-32 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-[0.95]"
          >
            Intelligence, <br />
            <span className="text-neutral-400">right before your eyes.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* --- LEFT: Scrolling Content --- */}
          <div className="lg:col-span-5 relative">
            {/* Timeline Line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-neutral-200 hidden md:block">
              <motion.div
                style={{
                  height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                }}
                className="w-full bg-black origin-top"
              />
            </div>

            <div className="relative z-10">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  ref={(el) => (featureRefs.current[index] = el)}
                  className="min-h-[70vh] flex flex-col justify-center py-10 group pl-0 md:pl-16"
                >
                  <motion.div
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                      x: activeCard === index ? 0 : -10,
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-6"
                  >
                    {/* Icon with active state pulsing */}
                    <div
                      className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-500 ${
                        activeCard === index
                          ? "bg-black border-black text-white shadow-xl"
                          : "bg-white border-neutral-200 text-neutral-400"
                      }`}
                    >
                      {feature.icon}
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-black mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-neutral-600 leading-relaxed max-w-sm">
                        {feature.description}
                      </p>
                    </div>

                    {/* Learn More link that appears only when active */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeCard === index
                          ? "max-h-20 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <button className="text-sm font-semibold border-b border-black pb-0.5 mt-2 flex items-center gap-2 hover:gap-4 transition-all">
                        Explore feature <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: Sticky Visuals (The "HUD") --- */}
          <div className="hidden lg:block lg:col-span-7 relative h-full">
            <div className="sticky top-12 h-[85vh] w-full rounded-[32px] overflow-hidden bg-neutral-900 border-[8px] border-neutral-900 shadow-2xl">
              {/* Device Frame / HUD Elements */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {/* Top Bar HUD */}
                <div className="absolute top-6 left-8 right-8 flex justify-between text-white/60 text-xs font-mono tracking-widest">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                      <Battery size={12} /> 84%
                    </span>
                    <span className="flex items-center gap-1">
                      <Wifi size={12} /> 5G
                    </span>
                  </div>
                  <span>REC ●</span>
                </div>

                {/* Corner Brackets (Viewfinder feel) */}
                <Scan
                  className="absolute bottom-6 right-6 text-white/20 w-8 h-8"
                  strokeWidth={1}
                />

                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40" />
              </div>

              {/* Dynamic Image Swapping */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={features[activeCard].image}
                    alt={features[activeCard].title}
                    className="w-full h-full object-cover opacity-90"
                  />

                  {/* The AR Overlay UI */}
                  <div className="absolute bottom-12 left-8 md:left-12 z-30">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-2xl w-80 overflow-hidden relative"
                    >
                      {/* Shimmer effect on the glass card */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] animate-shimmer" />

                      <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-white rounded-lg text-black">
                          {features[activeCard].icon}
                        </div>
                        <span className="text-[10px] font-mono text-white/60">
                          {features[activeCard].overlay.time}
                        </span>
                      </div>
                      <h4 className="text-white font-medium text-lg leading-tight mb-1">
                        {features[activeCard].overlay.title}
                      </h4>
                      <p className="text-white/70 text-sm">
                        {features[activeCard].overlay.subtitle}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyScrollFeatures;
