"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
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
          Kontakt
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
        Zacznijmy.
        <br />
        <span className="text-white/60">Od rozmowy.</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-white/60 text-lg md:text-xl font-light max-w-2xl mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        Bez briefów i formularzy. Napisz dwa zdania o projekcie — odezwiemy się
        w ciągu 24h.
      </motion.p>

      {/* Email card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="rounded-3xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-2xl p-8 cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02]"
      >
        <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
          Email
        </span>
        <div className="mt-3 mb-6">
          <a
            href="mailto:pitiaiti.studio@outlook.com"
            className="text-white text-2xl font-light hover:text-white/70 transition-colors"
          >
            pitiaiti.studio@outlook.com
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Odpowiadamy w 24h", "Pierwsza rozmowa bezpłatna"].map((pill) => (
            <span
              key={pill}
              className="text-white/50 text-xs border border-white/[0.12] rounded-full px-3 py-1"
            >
              {pill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Bottom two cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="rounded-3xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-2xl p-8 cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02]"
        >
          <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
            Dla kogo
          </span>
          <p className="text-white/70 text-sm font-light leading-relaxed mt-4">
            Startupy, małe firmy, twórcy. Każdy kto ma pomysł i potrzebuje
            kogoś, kto go dowiezie.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="rounded-3xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-2xl p-8 cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02]"
        >
          <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
            Czego nie robimy
          </span>
          <p className="text-white/70 text-sm font-light leading-relaxed mt-4">
            Nie bierzemy projektów bez celu. Nie zgadzamy się na &ldquo;zróbcie
            coś ładnego&rdquo;. Nie pracujemy bez kontraktu.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
