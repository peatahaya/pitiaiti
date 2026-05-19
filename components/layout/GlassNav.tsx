"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { GlassButton } from "@/components/ui/GlassButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Realizacje", href: "#work" },
  { label: "Usługi",     href: "#services" },
  { label: "Proces",     href: "#process" },
  { label: "O nas",      href: "#about" },
  { label: "Kontakt",    href: "#contact" },
];

type Props = {
  isReady: boolean;
};

export function GlassNav({ isReady }: Props) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3,
      }}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-3rem)] max-w-5xl",
        "rounded-full",
        "bg-white/[0.08] backdrop-blur-2xl saturate-150",
        "border border-white/[0.15]",
        "shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
        "pl-6 pr-3 py-3",
        "flex items-center justify-between gap-8"
      )}
    >
      {/* Left: Logo */}
      <Logo className="h-6 w-auto shrink-0" />

      {/* Center: nav links */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: CTA + mobile hamburger */}
      <div className="flex items-center gap-3">
        <GlassButton
          size="sm"
          className="hidden md:inline-flex"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Rozpocznij projekt →
        </GlassButton>
        <button
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>
    </motion.nav>
  );
}
