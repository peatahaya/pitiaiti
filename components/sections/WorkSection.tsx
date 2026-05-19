"use client";

import { motion } from "framer-motion";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";

const caseStudies = [
  {
    name: "binara",
    category: "SaaS",
    headline: "Platforma do zarządzania korepetycjami.",
    description:
      "Studenci, lekcje, płatności, raporty — wszystko w jednym panelu. Backend Django + DRF, frontend Next.js, kolejki Celery, real-time przez WebSockets.",
    stack: [
      "Django 5",
      "DRF",
      "Celery",
      "Redis",
      "PostgreSQL",
      "Next.js 15",
      "TypeScript",
    ],
    status: "in-production" as const,
    statusLabel: "W produkcji",
    accent: "from-violet-500/40 to-fuchsia-500/30",
    featured: true,
    link: "#",
    visualType: "dashboard" as const,
  },
  {
    name: "Parafia Chełmica",
    category: "CMS",
    headline: "Strona parafialna z autorskim CMS-em.",
    description:
      "Multi-tenant CMS dla katolickich parafii. Ksiądz dodaje treści przez panel, parafianie czytają. Zero setup, zero bullshit.",
    stack: ["Next.js", "Supabase", "Tailwind", "shadcn/ui", "Vercel"],
    status: "live" as const,
    statusLabel: "Live",
    accent: "from-amber-500/30 to-orange-500/30",
    featured: false,
    link: "#",
    visualType: "parish" as const,
  },
  {
    name: "PITIAITI",
    category: "Studio site",
    headline: "Strona, na którą właśnie patrzysz.",
    description:
      "Cinematic preloader, scroll-triggered animations, glassmorphism, fixed mesh gradient. Single-page experience, nie multi-page folder.",
    stack: ["Next.js 15", "Framer Motion", "Tailwind v4", "TypeScript"],
    status: "live" as const,
    statusLabel: "Live",
    accent: "from-teal-500/30 to-cyan-500/30",
    featured: false,
    link: "#",
    visualType: "studio" as const,
  },
];

export function WorkSection() {
  return (
    <section
      id="work"
      className="relative z-10 min-h-screen px-8 lg:px-16 py-32 flex flex-col justify-center"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 mb-8"
      >
        <span className="h-px w-12 bg-white/30" />
        <span className="text-white/50 text-xs uppercase tracking-[0.3em] font-medium">
          Realizacje
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-white font-light text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] max-w-3xl mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.1,
        }}
      >
        Co już dowieziono.
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-white/60 text-lg md:text-xl font-light max-w-2xl mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{
          duration: 1.0,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.3,
        }}
      >
        Trzy projekty. Każdy z innej działki.
        <br className="hidden md:block" />
        Wszystkie żyją.
      </motion.p>

      {/* Cases grid: featured (full width) + 2 side-by-side */}
      <div className="flex flex-col gap-6 lg:gap-8">
        <CaseStudyCard {...caseStudies[0]} index={0} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <CaseStudyCard {...caseStudies[1]} index={1} />
          <CaseStudyCard {...caseStudies[2]} index={2} />
        </div>
      </div>
    </section>
  );
}
