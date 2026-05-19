"use client";

import { motion } from "framer-motion";
import { GlassButton } from "@/components/ui/GlassButton";
import { GhostButton } from "@/components/ui/GhostButton";

type Props = {
  isReady: boolean;
};

export function HeroCTAs({ isReady }: Props) {
  return (
    <motion.div
      className="flex flex-row items-center gap-3 mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1],
        delay: 3.2,
      }}
    >
      <GlassButton>Zobacz realizacje</GlassButton>
      <GhostButton>Przeczytaj manifest</GhostButton>
    </motion.div>
  );
}
