import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Handshake } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { partners, type Partner } from "@/lib/team-data";

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      { title: "Partnerships — RPZ CELESTIAL" },
      {
        name: "description",
        content:
          "The organizations partnered with RPZ CELESTIAL: RPZ Esports, VAL Esport and SXG WYVERNS.",
      },
      { property: "og:title", content: "Partnerships — RPZ CELESTIAL" },
      {
        property: "og:description",
        content:
          "The organizations partnered with RPZ CELESTIAL: RPZ Esports, VAL Esport and SXG WYVERNS.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/partnerships" },
    ],
    links: [{ rel: "canonical", href: "/partnerships" }],
  }),
  component: PartnershipsPage,
});

function PartnerCard({ partner, delay }: { partner: Partner; delay: number }) {
  const [open, setOpen] = useState(false);
  const glow = partner.glow === "blue" ? "glow-blue" : "glow-gold";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className={`rounded-2xl border bg-card ${glow}`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/40 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            <Handshake size={12} />
            {partner.tier}
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-foreground">{partner.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">Owned by {partner.owner}</p>
        </div>
        <ChevronDown
          size={20}
          className={`shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="border-t border-border/50 px-6 py-5 text-sm leading-6 text-muted-foreground">
              {partner.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function PartnershipsPage() {
  return (
    <AnimatedSection className="container-tight pb-20 pt-32 md:pb-28">
      <SectionHeader
        eyebrow="Together in orbit"
        title="Partnerships"
        subtitle="The organizations standing beside RPZ CELESTIAL."
      />
      <div className="grid gap-6">
        {partners.map((p, i) => (
          <PartnerCard key={p.id} partner={p} delay={i * 0.08} />
        ))}
      </div>
    </AnimatedSection>
  );
}