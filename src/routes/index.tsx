import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Target, Users, Sparkles, TrendingUp } from "lucide-react";

import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatCard } from "@/components/StatCard";
import { PlayerCard } from "@/components/PlayerCard";
import { MatchCard } from "@/components/MatchCard";
import { teamStats, roster, matches } from "@/lib/team-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RPZ CELESTIAL — ORION DRIFT Esports" },
      {
        name: "description",
        content:
          "Official home of RPZ CELESTIAL, a competitive VR esports org competing in Orion Drift. We offer rosters, schedules, stats, and recruitment.",
      },
      { property: "og:title", content: "RPZ CELESTIAL — ORION DRIFT Esports" },
      {
        property: "og:description",
        content:
          "Official home of RPZ CELESTIAL, a competitive VR esports org competing in Orion Drift. We offer rosters, schedules, stats, and recruitment.",
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

  const pillars = [
    {
      icon: Target,
      title: "Competitive",
      body: "We compete at the top of the Orion Drift ladder and treat every scrim like a final.",
    },
    {
      icon: Users,
      title: "Teamwork",
      body: "Trust, communication, and clean rotations are what turn talent into wins.",
    },
    {
      icon: Sparkles,
      title: "Community",
      body: "We build with our players and fans — respect on and off the map.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      body: "Full-EU roster, now expanding into NA. We're just getting started.",
    },
  ];

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
          title={nextMatch ? "Upcoming Match" : "Latest Match"}
          subtitle={
            nextMatch
              ? "Mark your calendars. The next drift is always closer than it looks."
              : "Here's how our most recent engagement went."
          }
        />
        {nextMatch ? (
          <MatchCard match={nextMatch} />
        ) : recentMatches[0] ? (
          <MatchCard match={recentMatches[0]} />
        ) : (
          <p className="text-center text-muted-foreground">No matches to display.</p>
        )}
      </AnimatedSection>

      <AnimatedSection className="border-y border-border/50 bg-card/30 py-20 md:py-28">
        <div className="container-tight">
          <SectionHeader
            eyebrow="The squad"
            title="Featured Roster"
            subtitle="Meet the core of RPZ CELESTIAL."
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

      <AnimatedSection className="border-t border-border/50 bg-card/30 py-20 md:py-28">
        <div className="container-tight">
          <SectionHeader
            eyebrow="Who we are"
            title="RPZ CELESTIAL"
            subtitle="An EU-based Orion Drift organization partnered with Replitz Esports, expanding into NA and building well-rounded players ready for the highest level."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border/50 bg-card p-6"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
