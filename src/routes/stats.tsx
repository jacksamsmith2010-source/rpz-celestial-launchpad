import { createFileRoute } from "@tanstack/react-router";

import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatCard } from "@/components/StatCard";
import { teamStats, roster, matches } from "@/lib/team-data";

export const Route = createFileRoute("/stats")({
  head: () => ({
    meta: [
      { title: "Stats — RPZ CELESTIAL" },
      {
        name: "description",
        content: "Overall team stats, match history, and player performance for RPZ CELESTIAL.",
      },
      { property: "og:title", content: "Stats — RPZ CELESTIAL" },
      {
        property: "og:description",
        content: "Overall team stats, match history, and player performance for RPZ CELESTIAL.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/stats" },
    ],
    links: [{ rel: "canonical", href: "/stats" }],
  }),
  component: StatsPage,
});

function StatsPage() {
  const wins = matches.filter((m) => m.status === "won").length;
  const losses = matches.filter((m) => m.status === "lost").length;
  const totalMvps = roster.reduce((sum, p) => sum + p.stats.mvps, 0);

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

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Wins</p>
          <p className="mt-2 font-display text-4xl font-bold text-emerald-400">{wins}</p>
        </div>
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Losses</p>
          <p className="mt-2 font-display text-4xl font-bold text-rose-400">{losses}</p>
        </div>
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Total MVPs</p>
          <p className="mt-2 font-display text-4xl font-bold text-primary">{totalMvps}</p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-border/50 bg-card p-6 md:p-8">
        <h3 className="font-display text-xl font-bold text-foreground">Player Performance</h3>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/50 text-muted-foreground">
                <th className="pb-3 font-display font-semibold">Pilot</th>
                <th className="pb-3 font-display font-semibold">Role</th>
                <th className="pb-3 font-display font-semibold">Matches</th>
                <th className="pb-3 font-display font-semibold">Wins</th>
                <th className="pb-3 font-display font-semibold">MVPs</th>
              </tr>
            </thead>
            <tbody>
              {roster.map((p) => (
                <tr key={p.id} className="border-b border-border/30 last:border-0">
                  <td className="py-4 font-display font-bold text-foreground">
                    {p.handle}{" "}
                    <span className="font-sans text-xs font-normal text-muted-foreground">
                      ({p.name})
                    </span>
                  </td>
                  <td className="py-4 text-muted-foreground">{p.role}</td>
                  <td className="py-4 text-foreground">{p.stats.matches}</td>
                  <td className="py-4 text-emerald-400">{p.stats.wins}</td>
                  <td className="py-4 text-primary">{p.stats.mvps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AnimatedSection>
  );
}
