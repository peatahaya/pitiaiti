"use client";

import { motion } from "framer-motion";

export function MeshGradient() {
  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeOut" }}
    >
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Indigo — dominant top-left */}
          <radialGradient id="grad-indigo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1a1b3e" stopOpacity="0.9" />
            <stop offset="45%"  stopColor="#1a1b3e" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1a1b3e" stopOpacity="0" />
          </radialGradient>

          {/* Violet — center */}
          <radialGradient id="grad-violet" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#6b46c1" stopOpacity="0.75" />
            <stop offset="40%"  stopColor="#6b46c1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6b46c1" stopOpacity="0" />
          </radialGradient>

          {/* Magenta — accent bottom-right, low opacity */}
          <radialGradient id="grad-magenta" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#d946ef" stopOpacity="0.55" />
            <stop offset="40%"  stopColor="#d946ef" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
          </radialGradient>

          {/* Teal — accent top-right */}
          <radialGradient id="grad-teal" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#14b8a6" stopOpacity="0.45" />
            <stop offset="50%"  stopColor="#14b8a6" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </radialGradient>

          {/* White glow — center highlight */}
          <radialGradient id="grad-white" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="50%"  stopColor="#ffffff" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base — deep dark fill */}
        <rect width="1920" height="1080" fill="#0a0a1a" />

        {/* Layer 1: Indigo — dominant top-left */}
        <motion.g
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: 22, ease: "easeInOut", repeat: Infinity, delay: 0 }}
        >
          <ellipse
            cx="480"
            cy="380"
            rx="680"
            ry="580"
            fill="url(#grad-indigo)"
          />
        </motion.g>

        {/* Layer 2: Violet — center */}
        <motion.g
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -25, 0],
            scale: [1, 1.12, 0.94, 1],
          }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, delay: 3 }}
        >
          <ellipse
            cx="960"
            cy="560"
            rx="620"
            ry="520"
            fill="url(#grad-violet)"
          />
        </motion.g>

        {/* Layer 3: Magenta — accent bottom-right */}
        <motion.g
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -50, 35, 0],
            scale: [1, 0.92, 1.1, 1],
          }}
          transition={{ duration: 16, ease: "easeInOut", repeat: Infinity, delay: 6 }}
        >
          <ellipse
            cx="1500"
            cy="820"
            rx="500"
            ry="420"
            fill="url(#grad-magenta)"
          />
        </motion.g>

        {/* Layer 4: Teal — accent top-right */}
        <motion.g
          animate={{
            x: [0, -40, 55, 0],
            y: [0, 30, -40, 0],
            scale: [1, 1.06, 0.98, 1],
          }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, delay: 9 }}
        >
          <ellipse
            cx="1580"
            cy="240"
            rx="440"
            ry="360"
            fill="url(#grad-teal)"
          />
        </motion.g>

        {/* Layer 5: White glow — center highlight */}
        <motion.g
          animate={{
            x: [0, 25, -35, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.15, 0.92, 1],
          }}
          transition={{ duration: 14, ease: "easeInOut", repeat: Infinity, delay: 2 }}
        >
          <ellipse
            cx="860"
            cy="460"
            rx="380"
            ry="300"
            fill="url(#grad-white)"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
