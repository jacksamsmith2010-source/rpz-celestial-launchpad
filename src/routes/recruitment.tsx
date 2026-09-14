import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { recruitment } from "@/lib/team-data";

export const Route = createFileRoute("/recruitment")({
  head: () => ({
    meta: [
      { title: "Recruitment — CELESTIAL" },
      {
        name: "description",
        content: recruitment.body,
      },
      { property: "og:title", content: "Recruitment — CELESTIAL" },
      {
        property: "og:description",
        content: recruitment.body,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/recruitment" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/recruitment" }],
  }),
  component: RecruitmentPage,
});

function RecruitmentPage() {
  const wants = [
    { icon: "⚡️", text: "active players & members" },
    { icon: "🗣️", text: "good communication" },
    { icon: "⚽️", text: "good passing & skill" },
    { icon: "🧠", text: "competitive mindset" },
    { icon: "🤝", text: "respectful/responsable people" },
    { icon: "🎨", text: "Graphic designers/editors" },
    { icon: "💜", text: "Looking for members to boost the server & to grow our community (this would mean a lot)" },
  ];
  const dontWants = [
    { icon: "🗣️", text: "toxicity / non-supportive" },
    { icon: "🫠", text: "soloing / egos" },
    { icon: "💬", text: "inappropriate behaviour / comments" },
    { icon: "⏰️", text: "not active / too busy" },
  ];
  const offers = [
    { icon: "👥️", text: "recruiting players" },
    { icon: "🎯", text: "daily tryouts" },
    { icon: "⚔️", text: "daily scrims" },
    { icon: "🏆", text: "competitive team to support & play for" },
    { icon: "⚡️", text: "active teams/community" },
    { icon: "🤝", text: "team partnerships" },
    { icon: "🎉", text: "team events and entertainment" },
    { icon: "💡", text: "suggestions on what we can do to make a better community" },
  ];

  return (
    <AnimatedSection className="container-tight pb-20 pt-32 md:pb-28">
      <SectionHeader title={recruitment.title} subtitle={recruitment.body} />

      <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center md:p-10">
        <h3 className="font-display text-2xl font-bold text-foreground">What are we looking for?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          We are looking for active, respectful and well-rounded players and members who want to
          grow with the team.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6">
          <div className="flex items-center gap-2">
            <span className="text-lg">✅️</span>
            <h3 className="font-display text-lg font-bold text-foreground">What We Want</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {wants.map((w) => (
              <li key={w.text} className="flex items-start gap-3 text-sm text-foreground">
                <span className="text-base leading-6">{w.icon}</span>
                <span className="leading-6 text-muted-foreground">{w.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-6">
          <div className="flex items-center gap-2">
            <span className="text-lg">❌️</span>
            <h3 className="font-display text-lg font-bold text-foreground">What We Don't Want</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {dontWants.map((w) => (
              <li key={w.text} className="flex items-start gap-3 text-sm text-foreground">
                <span className="text-base leading-6">{w.icon}</span>
                <span className="leading-6 text-muted-foreground">{w.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <div className="flex items-center gap-2">
            <span className="text-lg">✨️</span>
            <h3 className="font-display text-lg font-bold text-foreground">Why You Should Join</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {offers.map((w) => (
              <li key={w.text} className="flex items-start gap-3 text-sm text-foreground">
                <span className="text-base leading-6">{w.icon}</span>
                <span className="leading-6 text-muted-foreground">{w.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-border/50 bg-card p-8 md:p-10">
        <h3 className="font-display text-2xl font-bold text-foreground">Requirements</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          What we look for in every applicant.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {recruitment.requirements.map((req) => (
            <li
              key={req}
              className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/40 px-4 py-3"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check size={14} />
              </span>
              <span className="text-sm font-medium text-foreground">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 rounded-2xl border border-border/50 bg-gradient-to-br from-secondary to-accent p-8 text-center md:p-12">
        <h3 className="font-display text-2xl font-bold text-foreground">
          Do you have what it takes to be a part of <span className="text-gradient">CELESTIAL</span>?
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Join our Discord to share your competitive profile, availability, and a short introduction.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://discord.gg/9Y6KYU49uH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-8 py-4 text-sm font-bold text-primary transition-all hover:bg-primary/20"
          >
            Join our Discord
          </a>
          <a
            href="https://www.tiktok.com/@celestial.vresports.tt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-8 py-4 text-sm font-bold text-primary transition-all hover:bg-primary/20"
          >
            Follow on TikTok
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
