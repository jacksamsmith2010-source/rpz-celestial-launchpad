import { createFileRoute } from "@tanstack/react-router";
import { Mail, Check } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { recruitment } from "@/lib/team-data";

export const Route = createFileRoute("/recruitment")({
  head: () => ({
    meta: [
      { title: "Recruitment — RPZ CELESTIAL" },
      {
        name: "description",
        content: recruitment.body,
      },
      { property: "og:title", content: "Recruitment — RPZ CELESTIAL" },
      {
        property: "og:description",
        content: recruitment.body,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/recruitment" },
    ],
    links: [{ rel: "canonical", href: "/recruitment" }],
  }),
  component: RecruitmentPage,
});

function RecruitmentPage() {
  return (
    <AnimatedSection className="container-tight pb-20 pt-32 md:pb-28">
      <SectionHeader title={recruitment.title} subtitle={recruitment.body} />

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
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Mail size={24} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-foreground">Ready to apply?</h3>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Send us your competitive profile, availability, and a short introduction. We review every
          application personally.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${recruitment.contact}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:glow"
          >
            {recruitment.contact}
          </a>
          <a
            href="https://discord.gg/9Y6KYU49uH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-8 py-4 text-sm font-bold text-primary transition-all hover:bg-primary/20"
          >
            Join our Discord
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
