"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Globe, Smartphone, Layers } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Web",
    headline: "Aplikacje webowe i landingi.",
    description:
      "Strony, które się otwierają w 200ms i sprzedają w 10 sekund. Next.js, App Router, statyczne i serwerowe — dobierane do celu, nie hype'u.",
    stack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    accent: "from-violet-500/30 to-fuchsia-500/30",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile",
    headline: "Aplikacje iOS i Android.",
    description:
      "Cross-platform z React Native lub natywne — w zależności od potrzeb. App Store, Google Play, push notifications, biometria, offline-first.",
    stack: ["React Native", "Expo", "Swift", "Kotlin", "Supabase"],
    accent: "from-fuchsia-500/30 to-pink-500/30",
  },
  {
    number: "03",
    icon: Layers,
    title: "SaaS",
    headline: "Platformy subskrypcyjne i panele.",
    description:
      "Backend, API, autentykacja, payments, dashboardy. Od MVP do skali. Multi-tenant, role, webhooks, kolejki — wszystko czego nie widzi user, ale czuje.",
    stack: ["Django", "FastAPI", "PostgreSQL", "Redis", "Celery"],
    accent: "from-teal-500/30 to-cyan-500/30",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
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
          Usługi
        </span>
      </motion.div>

      {/* Section heading */}
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
        Trzy filary.
        <br />
        <span className="text-white/60">Jedna obsesja.</span>
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
        Tworzymy oprogramowanie, które działa, sprzedaje
        <br className="hidden md:block" />i nie wstydzi się być proste.
      </motion.p>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, i) => (
          <ServiceCard key={service.number} {...service} index={i} />
        ))}
      </div>
    </section>
  );
}
