"use client";

import { motion } from "framer-motion";

type Props = {
  isReady: boolean;
};

export function ScrollIndicator({ isReady }: Props) {
  return (
    <motion.div
      className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={isReady ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.0, delay: 5.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">
        Przewiń
      </span>
      <motion.div
        className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
        animate={{
          scaleY: [0.4, 1, 0.4],
          originY: 0,
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
