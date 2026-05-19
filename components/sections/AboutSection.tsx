"use client";

import { motion } from "framer-motion";

const members = [
  {
    label: "Founder & Developer",
    name: "Piotrek",
    description:
      "Full-stack developer z obsesją na punkcie UI. Buduje backendy w Django i frontendy w Next.js — i nie znosi, gdy jedno nie rozumie drugiego.",
    stack: ["Next.js", "Django", "TypeScript", "Supabase"],
  },
  {
    label: "Design & Marketing",
    name: "Iga",
    description:
      "Graficzka i strateg w jednej osobie. Zamienia cele biznesowe w identyfikację wizualną, kampanie i materiały, które ludzie zapamiętują.",
    stack: ["Branding", "Figma", "Adobe CC", "Marketing"],
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
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
          O nas
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-white font-light text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] max-w-3xl mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        Dwoje ludzi.
        <br />
        <span className="text-white/60">Jeden standard.</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-white/60 text-lg md:text-xl font-light max-w-2xl mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        Nie agencja, nie korpo. Studio z nazwiskiem na robocie.
      </motion.p>

      {/* Member cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {members.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            className="rounded-3xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-2xl p-8 cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02]"
          >
            <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
              {member.label}
            </span>
            <h3 className="text-white text-2xl font-medium mt-3 mb-4">
              {member.name}
            </h3>
            <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
              {member.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {member.stack.map((pill) => (
                <span
                  key={pill}
                  className="text-white/50 text-xs border border-white/[0.12] rounded-full px-3 py-1"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Philosophy card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="mt-8 rounded-3xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-2xl p-8 cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02]"
      >
        <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
          Filozofia
        </span>
        <p className="text-white/70 text-lg font-light leading-relaxed max-w-3xl mt-4">
          Wierzymy, że dobre oprogramowanie nie wymaga instrukcji. Jeśli
          użytkownik się zastanawia — to już błąd projektu. Budujemy rzeczy
          proste. Nie uproszczone — proste.
        </p>
      </motion.div>
    </section>
  );
}
