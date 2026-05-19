"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logoSrc from "@/public/logos/pitiaiti-logo.png";

type Props = {
  isComplete: boolean;
};

export function Preloader({ isComplete }: Props) {
  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(16px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 2.0,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative p-12"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.0,
                }}
              >
                <Image
                  src={logoSrc}
                  alt="PITIAITI"
                  priority
                  className="h-8 w-auto"
                />
              </motion.div>
              {/* Outer glow — szeroka poświata */}
              <motion.div
                className="absolute inset-0 -z-10 blur-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(217,70,239,0.5) 0%, rgba(107,70,193,0.3) 40%, transparent 70%)",
                }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Inner glow — bliżej logo, intensywny */}
              <motion.div
                className="absolute inset-0 -z-10 blur-xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(217,70,239,0.7) 0%, transparent 60%)",
                }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
