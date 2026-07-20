import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MatchCard } from "@/components/MatchCard";
import { seasons } from "@/lib/team-data";

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
  const [region, setRegion] = useState<"EU" | "NA">("EU");
  const regionSeasons = useMemo(() => seasons.filter((s) => s.region === region), [region]);
  const [seasonId, setSeasonId] = useState(regionSeasons[0]?.id ?? "");

  const activeId = regionSeasons.find((s) => s.id === seasonId)?.id ?? regionSeasons[0]?.id;
  const season = seasons.find((s) => s.id === activeId);
  const seasonMatches = season?.matches ?? [];
  const upcoming = seasonMatches.filter((m) => m.status === "upcoming");
  const results = seasonMatches.filter((m) => m.status !== "upcoming");

  return (
    <AnimatedSection className="container-tight pb-20 pt-32 md:pb-28">
      <SectionHeader
        eyebrow="Mission log"
        title="Match Schedule"
        subtitle="Every upcoming engagement and the results that got us here."
      />

      <div className="mx-auto mb-10 grid max-w-2xl gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="region-select" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Region
          </label>
          <select
            id="region-select"
            value={region}
            onChange={(e) => {
              const r = e.target.value as "EU" | "NA";
              setRegion(r);
              const first = seasons.find((s) => s.region === r);
              if (first) setSeasonId(first.id);
            }}
            className="rounded-lg border border-border/50 bg-card px-4 py-2 font-display text-foreground focus:border-primary focus:outline-none"
          >
            <option value="EU">EU</option>
            <option value="NA">NA</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="season-select" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Season
          </label>
          <select
            id="season-select"
            value={activeId ?? ""}
            onChange={(e) => setSeasonId(e.target.value)}
            className="rounded-lg border border-border/50 bg-card px-4 py-2 font-display text-foreground focus:border-primary focus:outline-none"
          >
            {regionSeasons.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>

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
