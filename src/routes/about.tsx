import { createFileRoute } from "@tanstack/react-router";

import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { teamStats } from "@/lib/team-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — RPZ CELESTIAL" },
      {
        name: "description",
        content: "Learn about RPZ CELESTIAL: our story, values, and mission in VR esports.",
      },
      { property: "og:title", content: "About — RPZ CELESTIAL" },
      {
        property: "og:description",
        content: "Learn about RPZ CELESTIAL: our story, values, and mission in VR esports.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <AnimatedSection className="container-tight pb-20 pt-32 md:pb-28">
      <SectionHeader
        eyebrow="Our origin"
        title="About RPZ CELESTIAL"
        subtitle="An EU Orion Drift team partnered with Replitz Esports, now expanding into NA."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            RPZ CELESTIAL was founded in {teamStats.founded} by JSL2010. What started as a small
            crew grinding Orion Drift ranked has grown into a full org partnered with Replitz
            Esports, competing across EU and now North America.
          </p>
          <p>
            We now field two rosters — a proven EU squad and a brand new NA squad — chasing
            recognition and results in ODC and beyond. Every player is picked for skill, game
            sense, and the mindset to grow with the org.
          </p>
          <p>
            We don't just play in VR. We scrim, review VODs, and iterate like any serious esports
            team — because Orion Drift deserves the same discipline as any other title.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "Competitive", body: "We show up to win. Every scrim, every match, every map." },
            { title: "Teamwork", body: "Clean calls, clean rotations, clean trust." },
            { title: "Community", body: "We build with our players and fans, EU and NA." },
            { title: "Growth", body: "Two rosters, one org, always leveling up." },
          ].map((value, i) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border/50 bg-card p-6"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="font-display text-lg font-bold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
