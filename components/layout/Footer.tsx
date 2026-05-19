"use client";

import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="relative z-10 px-8 lg:px-16 py-16 border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Left: logo + tagline */}
        <div>
          <Logo className="h-5 w-auto mb-3" />
          <p className="text-white/30 text-xs font-light">
            Proste. Mocne.
          </p>
        </div>

        {/* Center: nav links */}
        <nav className="flex flex-wrap gap-6">
          {[
            { label: "Realizacje", href: "#work" },
            { label: "Usługi", href: "#services" },
            { label: "Proces", href: "#process" },
            { label: "O nas", href: "#about" },
            { label: "Kontakt", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right: copyright */}
        <p className="text-white/20 text-xs font-light">
          © {new Date().getFullYear()} PITIAITI
        </p>

      </div>
    </footer>
  );
}
