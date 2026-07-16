import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatCard } from "@/components/StatCard";
import { PlayerCard } from "@/components/PlayerCard";
import { MatchCard } from "@/components/MatchCard";
import { PartnerCard } from "@/components/PartnerCard";
import { teamStats, roster, matches, partners } from "@/lib/team-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RPZ CELESTIAL — VR Esports Team" },
      {
        name: "description",
        content:
          "Official home of RPZ CELESTIAL, a competitive VR esports team competing in Orion Drift. Roster, schedule, stats, and recruitment.",
      },
      { property: "og:title", content: "RPZ CELESTIAL — VR Esports Team" },
      {
        property: "og:description",
        content:
          "Official home of RPZ CELESTIAL, a competitive VR esports team competing in Orion Drift.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const nextMatch = matches.find((m) => m.status === "upcoming");
  const recentMatches = matches.filter((m) => m.status !== "upcoming").slice(0, 3);
  const featuredPlayers = roster.slice(0, 3);

  return (
    <>
      <Hero />

      <AnimatedSection className="container-tight -mt-20 relative z-20">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-4">
          <StatCard label="Matches" value={String(teamStats.matchesPlayed)} delay={0} />
          <StatCard label="Win Rate" value={`${teamStats.winRate}%`} delay={0.1} />
          <StatCard label="Trophies" value={String(teamStats.tournamentWins)} delay={0.2} />
          <StatCard label="Rank" value={teamStats.currentRank} delay={0.3} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-tight py-20 md:py-28">
        <SectionHeader
          eyebrow="Next engagement"
          title="Upcoming Match"
          subtitle="Mark your calendars. The next drift is always closer than it looks."
        />
        {nextMatch ? (
          <MatchCard match={nextMatch} />
        ) : (
          <p className="text-center text-muted-foreground">No upcoming matches scheduled.</p>
        )}
      </AnimatedSection>

      <AnimatedSection className="border-y border-border/50 bg-card/30 py-20 md:py-28">
        <div className="container-tight">
          <SectionHeader
            eyebrow="The squad"
            title="Featured Roster"
            subtitle="Five pilots. One orbit. Meet the core of RPZ CELESTIAL."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPlayers.map((p, i) => (
              <PlayerCard key={p.id} player={p} delay={i * 0.1} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/roster"
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background px-6 py-3 text-sm font-bold text-foreground transition-all hover:border-primary/50"
            >
              View Full Roster
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-tight py-20 md:py-28">
        <SectionHeader
          eyebrow="Recent results"
          title="Last Matches"
          subtitle="A quick look at how the constellation has been performing."
        />
        <div className="flex flex-col gap-4">
          {recentMatches.map((m, i) => (
            <MatchCard key={m.id} match={m} delay={i * 0.1} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/schedule"
            className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card px-6 py-3 text-sm font-bold text-foreground transition-all hover:border-primary/50"
          >
            Full Schedule
            <ChevronRight size={16} />
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-tight py-20 md:py-28">
        <SectionHeader eyebrow="Our ally" title="Partner" />
        <div className="mx-auto max-w-3xl">
          <PartnerCard partner={partners[0]} />
        </div>
      </AnimatedSection>
    </>
  );
}
