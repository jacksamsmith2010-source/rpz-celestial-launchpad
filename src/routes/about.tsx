import { createFileRoute } from "@tanstack/react-router";

import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";

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
        subtitle="A VR esports team competing across VRML and ODC in Orion Drift."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            RPZ CELESTIAL is a VR esports team specializing in VRML (Virtual Reality Master League)
            and ODC (Orion Drift Competitive) League competitions. Our team consists of talented
            artists who are confident about pushing the boundaries of virtual reality gaming. With
            our dedication and skill, we aim to become a known and skilled force in the world of
            Orion Drift esports over the next few seasons!
          </p>
          <p>
            Our team, also known as CELESTIAL, is composed of highly skilled players from both EU
            and NA who are passionate about pushing the boundaries of VR gaming and competing at
            the highest level. We strive for excellence and are dedicated to perfecting our craft
            through constant practice and scrimming. We bring creativity and innovation to our
            gameplay. With our unique blend of talent, determination and experience vs top teams
            and players, we aim to make a mark in VRML and ODC and leave a lasting impact on the
            competitive Orion Drift community.
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
