import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { socials } from "@/lib/team-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-background">
      {/* animated neon top line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px neon-line-h opacity-70" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-0 h-px w-40 neon-line-h"
        initial={{ x: "-20%" }}
        animate={{ x: ["-20%", "120%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      {/* animated vertical accents */}
      <div className="pointer-events-none absolute inset-0 opacity-35">
        {[18, 50, 82].map((left, i) => (
          <motion.div
            key={left}
            className="absolute top-0 h-full w-px neon-line-v"
            style={{ left: `${left}%` }}
            animate={{ opacity: [0.12, 0.5, 0.12] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 neon-grid opacity-15" />

      <div className="container-tight relative py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Link to="/" className="font-display text-xl font-bold tracking-tight">
              RPZ <span className="text-gradient">CELESTIAL</span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-border rounded-md bg-card/60 px-4 py-2 text-sm font-medium text-foreground transition-all hover:text-primary hover:glow"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mt-10 flex flex-col items-center justify-between gap-4 pt-6 text-xs text-muted-foreground md:flex-row">
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px neon-line-h opacity-50" />
          <p>© {new Date().getFullYear()} RPZ CELESTIAL. All rights reserved.</p>
          <p>Powered by stars, sweat, and zero-gravity drift.</p>
        </div>
      </div>
    </footer>
  );
}
