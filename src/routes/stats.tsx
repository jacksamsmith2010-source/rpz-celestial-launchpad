import { createFileRoute } from "@tanstack/react-router";

import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatCard } from "@/components/StatCard";
import { teamStats, goalDifferential } from "@/lib/team-data";

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
  return (
    <AnimatedSection className="container-tight pb-20 pt-32 md:pb-28">
      <SectionHeader
        eyebrow="By the numbers"
        title="Team Stats"
        subtitle="Data-driven performance across the Orion Drift competitive season."
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-4">
        <StatCard label="Matches" value={String(teamStats.matchesPlayed)} delay={0} />
        <StatCard label="Win Rate" value={`${teamStats.winRate}%`} delay={0.1} />
        <StatCard label="Trophies" value={String(teamStats.tournamentWins)} delay={0.2} />
        <StatCard label="Current Rank" value={teamStats.currentRank} delay={0.3} />
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Wins</p>
          <p className="mt-2 font-display text-4xl font-bold text-emerald-400">{teamStats.wins}</p>
        </div>
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Losses
          </p>
          <p className="mt-2 font-display text-4xl font-bold text-rose-400">{teamStats.losses}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Goals For
          </p>
          <p className="mt-2 font-display text-4xl font-bold text-emerald-400">{teamStats.goalsFor}</p>
        </div>
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Goals Against
          </p>
          <p className="mt-2 font-display text-4xl font-bold text-rose-400">{teamStats.goalsAgainst}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6">
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Goal Differential
          </p>
          <p className="mt-2 font-display text-4xl font-bold text-emerald-400">
            {goalDifferential >= 0 ? "+" : ""}
            {goalDifferential}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
