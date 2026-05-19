"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Zaczynamy od rozmowy, nie wyceny. Rozumiemy problem, cel i kontekst — zanim padnie słowo o technologii.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Prototyp przed kodem. Interaktywne makiety, które możesz kliknąć i odczuć, zanim wydasz złotówkę na dev.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Iteracyjny development w tygodniowych sprintach. Widzisz postęp co 7 dni — bez niespodzianek na końcu.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Deploy, monitoring, onboarding. Nie zostawiamy projektu na progu — asystujemy przy starcie i pierwszych tygodniach.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative z-10 min-h-screen px-8 lg:px-16 py-32 flex flex-col justify-center overflow-x-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 mb-8"
      >
        <span className="h-px w-12 bg-white/30" />
        <span className="text-white/50 text-xs uppercase tracking-[0.3em] font-medium">
          Proces
        </span>
      </motion.div>

      <motion.h2
        className="text-white font-light text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] max-w-3xl mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        Jak pracujemy.
        <br />
        <span className="text-white/60">Bez niespodzianek.</span>
      </motion.h2>

      <motion.p
        className="text-white/60 text-lg md:text-xl font-light max-w-2xl mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        Cztery etapy, jasna komunikacja
        <br className="hidden md:block" />i zero niespodzianek na fakturze.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.1,
            }}
            className="relative"
          >
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-white/10 -translate-y-1/2 z-0" />
            )}
            <span className="block text-white/20 text-xs uppercase tracking-[0.3em] font-medium mb-6">
              {step.number}
            </span>
            <div className="rounded-3xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-2xl p-6 h-full cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02]">
              <h3 className="text-white font-medium text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-white/55 text-sm font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
