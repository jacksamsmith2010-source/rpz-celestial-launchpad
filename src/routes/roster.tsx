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
  const eu = roster.filter((p) => p.region === "EU");
  const na = roster.filter((p) => p.region === "NA");

  return (
    <AnimatedSection className="container-tight pb-20 pt-32 md:pb-28">
      <SectionHeader
        eyebrow="The constellation"
        title="Team Roster"
        subtitle="Two rosters, one org. Our EU squad and our new NA squad."
      />

      <div className="space-y-16">
        <section>
          <div className="mb-6 flex items-center gap-3">
            <span className="text-2xl">🇪🇺</span>
            <h2 className="font-display text-2xl font-bold text-foreground">EU Roster</h2>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              {eu.length} pilots
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eu.map((p, i) => (
              <PlayerCard key={p.id} player={p} delay={i * 0.08} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-center gap-3">
            <span className="text-2xl">🇺🇸</span>
            <h2 className="font-display text-2xl font-bold text-foreground">NA Roster</h2>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              {na.length} pilots
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {na.map((p, i) => (
              <PlayerCard key={p.id} player={p} delay={i * 0.08} />
            ))}
          </div>
        </section>
      </div>
    </AnimatedSection>
  );
}
