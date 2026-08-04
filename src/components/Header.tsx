import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import logoAsset from "@/assets/celestial-star.jpg.asset.json";

const nav = [
  { label: "Home", to: "/" },
  { label: "Roster", to: "/roster" },
  { label: "Schedule", to: "/schedule" },
  { label: "Stats", to: "/stats" },
  { label: "About", to: "/about" },
  { label: "Recruitment", to: "/recruitment" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({
    select: (s: { location: { pathname: string } }) => s.location.pathname,
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-violet/25 glass shadow-[0_1px_24px_-12px_var(--color-glow)]">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="RPZ CELESTIAL logo"
            width={36}
            height={36}
            className="rounded-md shadow-[0_0_18px_-4px_var(--color-glow)] transition-transform group-hover:scale-105"
          />
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            RPZ <span className="text-gradient">CELESTIAL</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-foreground" }}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "border border-primary/40 bg-primary/10 text-foreground glow"
                    : "border border-transparent text-muted-foreground hover:border-primary/40 hover:bg-primary/10 hover:text-foreground hover:glow"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border/50 md:hidden"
          >
            <div className="container-tight flex flex-col gap-1 py-3">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md border px-3 py-2 text-sm font-medium transition-all ${
                    pathname === item.to
                      ? "border-primary/40 bg-primary/10 text-foreground glow"
                      : "border-transparent text-muted-foreground hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
