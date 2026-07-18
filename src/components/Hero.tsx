import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight, MessageCircle } from "lucide-react";

import heroImage from "@/assets/hero-celestial.jpg";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="RPZ CELESTIAL VR arena"
          width={1920}
          height={1088}
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </div>

      <div className="container-tight relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary"
        >
          VR Esports · Orion Drift
        </motion.span>

        <motion.h1
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl font-bold text-foreground md:text-7xl"
        >
          RPZ CELESTIAL
        </motion.h1>

        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/schedule"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:glow"
          >
            Watch Next Match
            <ChevronRight size={16} />
          </Link>
          <Link
            to="/roster"
            className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/80 px-6 py-3 text-sm font-bold text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card"
          >
            Meet the Roster
          </Link>
          <a
            href="https://discord.gg/9Y6KYU49uH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-primary/20"
          >
            <MessageCircle size={16} />
            Join Discord
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 h-8 w-5 -translate-x-1/2 rounded-full border-2 border-muted-foreground/30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mt-1 h-1.5 w-1.5 rounded-full bg-primary"
        />
      </motion.div>
    </section>
  );
}
