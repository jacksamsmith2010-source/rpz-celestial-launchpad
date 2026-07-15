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
        subtitle="A team forged in zero gravity, driven by discipline, and aimed at the stars."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            RPZ CELESTIAL was founded in {teamStats.founded} by a group of competitive VR pilots who
            believed that the future of esports would not be played on a flat screen, but inside it.
            We started in small community lobbies, grinding Orion Drift ranked ladders until the
            constellations started to remember our callsigns.
          </p>
          <p>
            Today we are a full roster of dedicated players, coaches, and analysts competing across
            Europe. Our identity is built on three principles: precision communication, adaptive
            strategy, and relentless respect for the craft.
          </p>
          <p>
            We do not just play in virtual reality. We train, study, and iterate like any elite
            sports team — because VR esports deserves the same discipline as any other arena.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "Precision", body: "Every movement is intentional. Every call is clear." },
            { title: "Adaptability", body: "Metas shift. Gravity changes. We adjust in real time." },
            { title: "Team First", body: "Individual skill wins rounds. Trust wins championships." },
            { title: "Respect", body: "We compete hard and honor the game, the opponents, and the community." },
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
