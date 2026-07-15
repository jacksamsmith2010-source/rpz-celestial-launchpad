import { createFileRoute } from "@tanstack/react-router";

import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PlayerCard } from "@/components/PlayerCard";
import { roster } from "@/lib/team-data";

export const Route = createFileRoute("/roster")({
  head: () => ({
    meta: [
      { title: "Roster — RPZ CELESTIAL" },
      {
        name: "description",
        content: "Meet the RPZ CELESTIAL Orion Drift roster: pilots, supports, and staff.",
      },
      { property: "og:title", content: "Roster — RPZ CELESTIAL" },
      {
        property: "og:description",
        content: "Meet the RPZ CELESTIAL Orion Drift roster: pilots, supports, and staff.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/roster" },
    ],
    links: [{ rel: "canonical", href: "/roster" }],
  }),
  component: RosterPage,
});

function RosterPage() {
  return (
    <AnimatedSection className="container-tight pb-20 pt-32 md:pb-28">
      <SectionHeader
        eyebrow="The constellation"
        title="Team Roster"
        subtitle="Every star in our orbit. Click through player cards to see roles, regions, and stats."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roster.map((p, i) => (
          <PlayerCard key={p.id} player={p} delay={i * 0.08} />
        ))}
      </div>
    </AnimatedSection>
  );
}
