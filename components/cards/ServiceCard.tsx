"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type Props = {
  number: string;
  icon: LucideIcon;
  title: string;
  headline: string;
  description: string;
  stack: string[];
  accent: string;
  index: number;
};

export function ServiceCard({
  number,
  icon: Icon,
  title,
  headline,
  description,
  stack,
  accent,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.5 + index * 0.15,
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      }}
      className="group relative h-full"
    >
      {/* Glass card */}
      <div className="relative h-full rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl saturate-150 p-8 lg:p-10 overflow-hidden transition-shadow duration-500 ease-out hover:shadow-[0_20px_60px_rgba(217,70,239,0.15),0_8px_32px_rgba(0,0,0,0.4)]">
        {/* Accent gradient blob */}
        <div
          className={`absolute -top-32 -right-32 h-64 w-64 rounded-full blur-3xl opacity-50 bg-gradient-to-br ${accent} pointer-events-none transition-opacity duration-700 group-hover:opacity-80`}
        />

        {/* Inner border glow */}
        <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

        {/* Content */}
        <div className="relative flex flex-col h-full">
          {/* Top: number + icon */}
          <div className="flex items-start justify-between mb-12">
            <span className="text-white/30 text-xs font-mono tracking-widest">
              {number}
            </span>
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-3 backdrop-blur-xl">
              <Icon size={22} strokeWidth={1.25} className="text-white/80" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-white text-3xl lg:text-4xl font-light tracking-tight mb-2">
            {title}
          </h3>

          {/* Headline */}
          <p className="text-white/80 text-lg lg:text-xl font-light leading-snug mb-6">
            {headline}
          </p>

          {/* Description */}
          <p className="text-white/50 text-sm lg:text-base leading-relaxed mb-8 flex-1">
            {description}
          </p>

          {/* Stack pills */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/60 text-xs font-medium backdrop-blur-xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
