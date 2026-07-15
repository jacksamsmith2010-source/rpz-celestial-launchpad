import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import logo from "@/assets/rpz-logo.png";

const nav = [
  { label: "Home", to: "/" },
  { label: "Roster", to: "/roster" },
  { label: "Schedule", to: "/schedule" },
  { label: "Stats", to: "/stats" },
  { label: "About", to: "/about" },
  { label: "Recruitment", to: "/recruitment" },
  { label: "Partners", to: "/partnerships" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({
    select: (s: { location: { pathname: string } }) => s.location.pathname,
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 glass">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="RPZ CELESTIAL logo" width={36} height={36} className="rounded-md" />
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
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
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
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    pathname === item.to
                      ? "bg-primary/10 text-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
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
