import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatCard } from "@/components/StatCard";
import { seasons } from "@/lib/team-data";

export const Route = createFileRoute("/stats")({
  head: () => ({
    meta: [
      { title: "Stats — RPZ CELESTIAL" },
      {
        name: "description",
        content: "Overall team stats for RPZ CELESTIAL.",
      },
      { property: "og:title", content: "Stats — RPZ CELESTIAL" },
      {
        property: "og:description",
        content: "Overall team stats for RPZ CELESTIAL.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/stats" },
    ],
    links: [{ rel: "canonical", href: "/stats" }],
  }),
  component: StatsPage,
});

function StatsPage() {
  const [seasonId, setSeasonId] = useState(seasons[0].id);
  const season = seasons.find((s) => s.id === seasonId) ?? seasons[0];
  const s = season.stats;
  const goalDiff = s.goalsFor - s.goalsAgainst;

  return (
    <AnimatedSection className="container-tight pb-20 pt-32 md:pb-28">
      <SectionHeader
        eyebrow="By the numbers"
        title="Team Stats"
        subtitle="Data-driven performance across the Orion Drift competitive season."
      />

      <div className="mx-auto mb-8 flex max-w-md flex-col gap-2">
        <label htmlFor="season-select" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Season
        </label>
        <select
          id="season-select"
          value={seasonId}
          onChange={(e) => setSeasonId(e.target.value)}
          className="w-full rounded-lg border border-border/50 bg-card px-4 py-2 font-display text-foreground focus:border-primary focus:outline-none"
        >
          {seasons.map((sea) => (
            <option key={sea.id} value={sea.id}>
              {sea.region} · {sea.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-4">
        <StatCard label="Matches" value={String(s.matchesPlayed)} delay={0} />
        <StatCard label="Win Rate" value={`${s.winRate}%`} delay={0.1} />
        <StatCard label="Trophies" value={String(s.tournamentWins)} delay={0.2} />
        <StatCard label="Current Rank" value={s.currentRank} delay={0.3} />
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Wins</p>
          <p className="mt-2 font-display text-4xl font-bold text-emerald-400">{s.wins}</p>
        </div>
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Losses
          </p>
          <p className="mt-2 font-display text-4xl font-bold text-rose-400">{s.losses}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Goals For
          </p>
          <p className="mt-2 font-display text-4xl font-bold text-emerald-400">{s.goalsFor}</p>
        </div>
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Goals Against
          </p>
          <p className="mt-2 font-display text-4xl font-bold text-rose-400">{s.goalsAgainst}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6">
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Goal Differential
          </p>
          <p className={`mt-2 font-display text-4xl font-bold ${goalDiff >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
            {goalDiff >= 0 ? "+" : ""}
            {goalDiff}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
