"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  delay?: number;
};

export function FloatingCard({
  children,
  className,
  rotate = 0,
  delay = 0,
}: Props) {
  return (
    <motion.div
      className={cn(
        "relative",
        "rounded-3xl",
        "border border-white/15",
        "bg-white/5",
        "backdrop-blur-2xl saturate-150",
        "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        "overflow-hidden",
        "before:content-['']",
        "before:absolute before:inset-0 before:rounded-3xl",
        "before:border before:border-white/10",
        "before:pointer-events-none",
        "transition-shadow duration-500 ease-out",
        "hover:shadow-[0_20px_60px_rgba(217,70,239,0.15),0_8px_32px_rgba(0,0,0,0.4)]",
        className
      )}
      initial={{ rotate, y: 0, scale: 1 }}
      whileHover={{
        y: -6,
        scale: 1.015,
        transition: {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
    >
      {children}
    </motion.div>
  );
}
