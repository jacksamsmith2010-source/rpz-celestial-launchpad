import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { sponsors, type Sponsor } from "@/lib/team-data";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors — CELESTIAL" },
      {
        name: "description",
        content:
          "Meet the leagues and creative sponsor supporting CELESTIAL.",
      },
      { property: "og:title", content: "Sponsors — CELESTIAL" },
      {
        property: "og:description",
        content:
          "Meet the leagues and creative sponsor supporting CELESTIAL.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sponsors" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/sponsors" }],
  }),
  component: SponsorsPage,
});

function SponsorCard({ sponsor, delay }: { sponsor: Sponsor; delay: number }) {
  const glow =
    sponsor.glow === "blue" ? "glow-blue" : sponsor.glow === "bronze" ? "glow-bronze" : "glow";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className={`rounded-2xl border bg-card ${glow}`}
    >
      <div className="p-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/40 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          <Handshake size={12} />
          Sponsor
        </span>
        <h2 className="mt-3 font-display text-2xl font-bold text-foreground">{sponsor.name}</h2>
      </div>
    </motion.div>
  );
}

function SponsorsPage() {
  return (
    <AnimatedSection className="container-tight pb-20 pt-32 md:pb-28">
      <SectionHeader
        eyebrow="Supporting the mission"
        title="Sponsors"
        subtitle="The leagues and creative talent supporting CELESTIAL."
      />
      <div className="grid gap-6">
        {sponsors.map((sponsor, i) => (
          <SponsorCard key={sponsor.id} sponsor={sponsor} delay={i * 0.08} />
        ))}
      </div>
    </AnimatedSection>
  );
}