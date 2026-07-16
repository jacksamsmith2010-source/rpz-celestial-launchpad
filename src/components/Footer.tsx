import { Link } from "@tanstack/react-router";
import { socials } from "@/lib/team-data";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container-tight py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Link to="/" className="font-display text-xl font-bold tracking-tight">
              RPZ <span className="text-gradient">CELESTIAL</span>
            </Link>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              RPZ Esports partners with CELESTIAL to push for recognition and strength across EU and NA.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border/50 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} RPZ CELESTIAL. All rights reserved.</p>
          <p>Powered by stars, sweat, and zero-gravity drift.</p>
        </div>
      </div>
    </footer>
  );
}
