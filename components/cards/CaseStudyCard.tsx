"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Props = {
  name: string;
  category: string;
  headline: string;
  description: string;
  stack: string[];
  status: "live" | "in-production" | "wip";
  statusLabel: string;
  accent: string;
  featured: boolean;
  link: string;
  index: number;
  visualType: "dashboard" | "parish" | "studio";
};

export function CaseStudyCard({
  name,
  category,
  headline,
  description,
  stack,
  status,
  statusLabel,
  accent,
  featured,
  link,
  index,
  visualType,
}: Props) {
  const statusColor =
    status === "live"
      ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
      : status === "in-production"
      ? "bg-violet-500/20 border-violet-400/30 text-violet-300"
      : "bg-amber-500/20 border-amber-400/30 text-amber-300";

  return (
    <motion.a
      href={link}
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
      className="group relative block h-full"
    >
      <div
        className={`relative h-full rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl saturate-150 overflow-hidden transition-shadow duration-500 ease-out hover:shadow-[0_20px_60px_rgba(217,70,239,0.15),0_8px_32px_rgba(0,0,0,0.4)] ${
          featured ? "p-10 lg:p-14" : "p-8 lg:p-10"
        }`}
      >
        {/* Accent blob */}
        <div
          className={`absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-40 bg-gradient-to-br ${accent} pointer-events-none transition-opacity duration-700 group-hover:opacity-60`}
        />

        {/* Inner border glow */}
        <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

        {featured ? (
          <FeaturedLayout
            name={name}
            category={category}
            headline={headline}
            description={description}
            stack={stack}
            statusLabel={statusLabel}
            statusColor={statusColor}
            visualType={visualType}
          />
        ) : (
          <CompactLayout
            name={name}
            category={category}
            headline={headline}
            description={description}
            stack={stack}
            statusLabel={statusLabel}
            statusColor={statusColor}
          />
        )}

        {/* Hover arrow */}
        <div className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12">
          <ArrowUpRight size={18} strokeWidth={1.5} className="text-white" />
        </div>
      </div>
    </motion.a>
  );
}

function FeaturedLayout({
  name,
  category,
  headline,
  description,
  stack,
  statusLabel,
  statusColor,
  visualType,
}: {
  name: string;
  category: string;
  headline: string;
  description: string;
  stack: string[];
  statusLabel: string;
  statusColor: string;
  visualType: "dashboard" | "parish" | "studio";
}) {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 h-full">
      {/* Text: 3 cols */}
      <div className="lg:col-span-3 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-white/40 text-xs uppercase tracking-[0.3em] font-mono">
            {category}
          </span>
          <span
            className={`px-2.5 py-0.5 rounded-full border text-[10px] font-medium ${statusColor}`}
          >
            {statusLabel}
          </span>
        </div>

        <h3 className="text-white text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight mb-4">
          {name}
        </h3>

        <p className="text-white/80 text-xl lg:text-2xl font-light leading-snug mb-6">
          {headline}
        </p>

        <p className="text-white/50 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
          {description}
        </p>

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

      {/* Visual: 2 cols */}
      <div className="lg:col-span-2 relative min-h-[280px] flex items-center justify-center">
        <CaseVisual type={visualType} />
      </div>
    </div>
  );
}

function CompactLayout({
  name,
  category,
  headline,
  description,
  stack,
  statusLabel,
  statusColor,
}: {
  name: string;
  category: string;
  headline: string;
  description: string;
  stack: string[];
  statusLabel: string;
  statusColor: string;
}) {
  return (
    <div className="relative flex flex-col h-full">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-white/40 text-xs uppercase tracking-[0.3em] font-mono">
          {category}
        </span>
        <span
          className={`px-2.5 py-0.5 rounded-full border text-[10px] font-medium ${statusColor}`}
        >
          {statusLabel}
        </span>
      </div>

      <h3 className="text-white text-3xl lg:text-4xl font-light tracking-tight mb-3">
        {name}
      </h3>

      <p className="text-white/80 text-lg font-light leading-snug mb-4">
        {headline}
      </p>

      <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
        {description}
      </p>

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
  );
}

function CaseVisual({ type }: { type: "dashboard" | "parish" | "studio" }) {
  if (type === "dashboard") {
    return (
      <div className="relative w-full max-w-lg aspect-[16/10] rounded-2xl overflow-hidden">
        <Image
          src="/reference/binara-preview.png"
          alt="binara — platforma do zarządzania korepetycjami"
          fill
          className="object-cover object-left-top rounded-2xl"
        />
      </div>
    );
  }

  if (type === "parish") {
    return (
      <div className="relative w-full max-w-xs aspect-[3/4] rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-xl overflow-hidden p-5">
        <div className="flex flex-col gap-3 h-full">
          <div className="h-2 w-12 rounded-full bg-amber-500/40" />
          <div className="h-4 w-full rounded bg-white/30" />
          <div className="h-3 w-3/4 rounded bg-white/15" />
          <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-white/10" />
          <div className="h-2 w-full rounded bg-white/15" />
          <div className="h-2 w-2/3 rounded bg-white/15" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-xs aspect-[3/4] rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-xl overflow-hidden p-5">
      <div className="flex flex-col gap-3 h-full justify-center">
        <div className="h-3 w-1/3 rounded-full bg-teal-400/40 mb-2" />
        <div className="h-6 w-full rounded bg-white/40" />
        <div className="h-6 w-4/5 rounded bg-white/40" />
        <div className="mt-4 flex gap-2">
          <div className="h-6 w-20 rounded-full bg-white/15 border border-white/20" />
          <div className="h-6 w-16 rounded-full border border-white/15" />
        </div>
      </div>
    </div>
  );
}
