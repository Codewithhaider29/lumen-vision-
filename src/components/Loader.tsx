import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden">
      
      {/* Background Ambience (Subtle Pulse) */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-gray-100 rounded-full blur-[100px] opacity-50"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Logo Container */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Animated Rings (Lens Effect) */}
        <div className="relative w-32 h-32 flex items-center justify-center mb-12">
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-gray-200"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Scanning Ring (Rotation) */}
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-l-2 border-black/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Sharp Ring */}
          <motion.div
            className="absolute inset-4 rounded-full border border-gray-100"
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 p-4 bg-white/50 backdrop-blur-sm rounded-full"
          >
            <img
              src="/dark logo.svg"
              alt="Lumen Logo"
              className="w-16 h-16 object-contain"
            />
          </motion.div>
        </div>

        {/* Text & Progress Section */}
        <div className="flex flex-col items-center gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium tracking-[0.3em] uppercase text-black"
          >
            Initializing
          </motion.h2>

          {/* Sleek Progress Line */}
          <div className="relative w-48 h-[2px] bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-black"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2.5, // Matches your fake loading time roughly
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div>
          
          <motion.p
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs text-gray-400 font-mono"
          >
            Calibrating Systems...
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Loading;