"use client";

import { motion } from "framer-motion";
import { useEntrance } from "@/lib/useEntrance";
import { Preloader } from "@/components/layout/Preloader";
import { MeshGradient } from "@/components/background/MeshGradient";
import { GlassNav } from "@/components/layout/GlassNav";
import { HeroHeadline } from "@/components/hero/HeroHeadline";
import { HeroCTAs } from "@/components/hero/HeroCTAs";
import { MobileAppCard } from "@/components/cards/MobileAppCard";
import { ScrollIndicator } from "@/components/hero/ScrollIndicator";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const { preloaderDone, pageReady } = useEntrance();

  return (
    <>
      <Preloader isComplete={preloaderDone} />

      <main className="relative overflow-hidden">
        <MeshGradient />
        <GlassNav isReady={pageReady} />

        <section className="relative z-10 min-h-screen flex items-center px-8 lg:px-16 pt-32">
          {/* Lewa kolumna — tekst */}
          <div className="flex-1 min-w-0">
            <HeroHeadline isReady={pageReady} />
            <HeroCTAs isReady={pageReady} />
          </div>

          {/* Prawa kolumna — karty, tylko lg+ */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-[400px] xl:w-[480px]">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={pageReady ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 4.2 }}
              className="relative mx-auto"
            >
              <MobileAppCard />
            </motion.div>
          </div>
        </section>

        <ScrollIndicator isReady={pageReady} />

        <ServicesSection />
        <WorkSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
