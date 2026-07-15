import { createFileRoute } from "@tanstack/react-router";
import { Mail, Target, Users } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { recruitment } from "@/lib/team-data";

export const Route = createFileRoute("/recruitment")({
  head: () => ({
    meta: [
      { title: "Recruitment — RPZ CELESTIAL" },
      {
        name: "description",
        content: "Join RPZ CELESTIAL. Open roles for competitive pilots, analysts, and coaches.",
      },
      { property: "og:title", content: "Recruitment — RPZ CELESTIAL" },
      {
        property: "og:description",
        content: "Join RPZ CELESTIAL. Open roles for competitive pilots, analysts, and coaches.",
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
      <SectionHeader
        eyebrow="Join us"
        title={recruitment.title}
        subtitle={recruitment.body}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {recruitment.roles.map((role, i) => (
          <div
            key={role.title}
            className="rounded-2xl border border-border/50 bg-card p-6 md:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {i === 0 ? <Target size={20} /> : <Users size={20} />}
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{role.title}</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {role.requirements.map((req) => (
                <li key={req} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border/50 bg-gradient-to-br from-secondary to-accent p-8 text-center md:p-12">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Mail size={24} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-foreground">Ready to apply?</h3>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Send us your competitive profile, availability, and a short introduction. We review every
          application personally.
        </p>
        <a
          href={`mailto:${recruitment.contact}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:glow"
        >
          {recruitment.contact}
        </a>
      </div>
    </AnimatedSection>
  );
}
