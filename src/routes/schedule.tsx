import { createFileRoute } from "@tanstack/react-router";

import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MatchCard } from "@/components/MatchCard";
import { matches } from "@/lib/team-data";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — RPZ CELESTIAL" },
      {
        name: "description",
        content: "Upcoming matches and recent results for RPZ CELESTIAL in Orion Drift.",
      },
      { property: "og:title", content: "Schedule — RPZ CELESTIAL" },
      {
        property: "og:description",
        content: "Upcoming matches and recent results for RPZ CELESTIAL in Orion Drift.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/schedule" },
    ],
    links: [{ rel: "canonical", href: "/schedule" }],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  const upcoming = matches.filter((m) => m.status === "upcoming");
  const results = matches.filter((m) => m.status !== "upcoming");

  return (
    <AnimatedSection className="container-tight pb-20 pt-32 md:pb-28">
      <SectionHeader
        eyebrow="Mission log"
        title="Match Schedule"
        subtitle="Every upcoming engagement and the results that got us here."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Upcoming</h2>
          {upcoming.length > 0 ? (
            <div className="flex flex-col gap-4">
              {upcoming.map((m, i) => (
                <MatchCard key={m.id} match={m} delay={i * 0.1} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No upcoming matches scheduled.</p>
          )}
        </div>

        <div>
          <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Results</h2>
          {results.length > 0 ? (
            <div className="flex flex-col gap-4">
              {results.map((m, i) => (
                <MatchCard key={m.id} match={m} delay={i * 0.1} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No recent results.</p>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
