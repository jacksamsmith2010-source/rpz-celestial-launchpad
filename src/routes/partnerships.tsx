import { createFileRoute } from "@tanstack/react-router";

import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PartnerCard } from "@/components/PartnerCard";
import { partners } from "@/lib/team-data";

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      { title: "Partners — RPZ CELESTIAL" },
      {
        name: "description",
        content: "Discover the partners and sponsors supporting RPZ CELESTIAL.",
      },
      { property: "og:title", content: "Partners — RPZ CELESTIAL" },
      {
        property: "og:description",
        content: "Discover the partners and sponsors supporting RPZ CELESTIAL.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/partnerships" },
    ],
    links: [{ rel: "canonical", href: "/partnerships" }],
  }),
  component: PartnershipsPage,
});

function PartnershipsPage() {
  return (
    <AnimatedSection className="container-tight pb-20 pt-32 md:pb-28">
      <SectionHeader
        eyebrow="Allies"
        title="Partners & Sponsors"
        subtitle="The organizations that help RPZ CELESTIAL reach further into the stars."
      />

      <div className="mx-auto max-w-3xl">
        {partners.map((p, i) => (
          <PartnerCard key={p.id} partner={p} delay={i * 0.1} />
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-border/50 bg-card p-8 text-center md:p-12">
        <h3 className="font-display text-2xl font-bold text-foreground">Become a Partner</h3>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Interested in joining our constellation? We offer brand placement, co-branded content,
          event activations, and long-term partnership packages tailored to your goals.
        </p>
        <a
          href="mailto:partners@rpzcelestial.gg"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background px-8 py-4 text-sm font-bold text-foreground transition-all hover:border-primary/50"
        >
          partners@rpzcelestial.gg
        </a>
      </div>
    </AnimatedSection>
  );
}
