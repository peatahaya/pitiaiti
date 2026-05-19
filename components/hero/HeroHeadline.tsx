"use client";

import { motion } from "framer-motion";

type Props = {
  isReady: boolean;
};

function AnimatedWord({
  word,
  isReady,
  baseDelay,
  staggerDelay = 0.04,
}: {
  word: string;
  isReady: boolean;
  baseDelay: number;
  staggerDelay?: number;
}) {
  return (
    <span className="block leading-[0.9]" style={{ paddingBottom: "0.2em" }}>
      {word.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block relative overflow-hidden"
          style={{ verticalAlign: "top" }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={
              isReady
                ? { y: "0%", opacity: 1 }
                : { y: "100%", opacity: 0 }
            }
            transition={{
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1],
              delay: baseDelay + i * staggerDelay,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function HeroHeadline({ isReady }: Props) {
  return (
    <div>
      <h1 className="text-white font-light text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-tight max-w-xl pr-4">
        <AnimatedWord
          word="Proste."
          isReady={isReady}
          baseDelay={0.6}
        />
        <AnimatedWord
          word="Mocne."
          isReady={isReady}
          baseDelay={1.4}
        />
      </h1>

      <motion.p
        className="text-white/60 text-lg md:text-xl font-light mt-6 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
          delay: 2.5,
        }}
      >
        Studio software z charakterem.
        <br />
        Aplikacje webowe, mobilne, SaaS.
      </motion.p>
    </div>
  );
}
