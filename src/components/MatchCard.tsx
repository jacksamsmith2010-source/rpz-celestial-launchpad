import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronDown, Trophy } from "lucide-react";
import type { Match } from "@/lib/team-data";

interface MatchCardProps {
  match: Match;
  delay?: number;
}

const statusStyles = {
  upcoming: "border-l-4 border-l-primary bg-card",
  won: "border-l-4 border-l-emerald-500 bg-card",
  lost: "border-l-4 border-l-rose-500 bg-card",
  draw: "border-l-4 border-l-amber-500 bg-card",
};

const statusLabel = {
  upcoming: "Upcoming",
  won: "Win",
  lost: "Loss",
  draw: "Draw",
};

export function MatchCard({ match, delay = 0 }: MatchCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`rounded-xl ${statusStyles[match.status]}`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full flex-col justify-between gap-4 p-5 text-left sm:flex-row sm:items-center"
      >
        <div>
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <Calendar size={14} />
            <span>
              {match.date} · {match.time}
            </span>
          </div>
          <h3 className="mt-2 font-display text-xl font-bold text-foreground">
            RPZ CELESTIAL <span className="text-muted-foreground">vs</span> {match.opponent}
          </h3>
          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <Trophy size={14} />
            <span>{match.tournament}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:flex-col sm:items-end">
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
              match.status === "upcoming"
                ? "bg-primary/10 text-primary"
                : match.status === "won"
                  ? "bg-emerald-500/10 text-emerald-400"
                  : match.status === "lost"
                    ? "bg-rose-500/10 text-rose-400"
                    : "bg-amber-500/10 text-amber-400"
            }`}
          >
            {statusLabel[match.status]}
          </span>
          {match.score && (
            <span className="font-display text-2xl font-bold text-foreground">{match.score}</span>
          )}
          <ChevronDown
            size={18}
            className={`text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border/50 px-5 py-4 text-sm text-muted-foreground">
              <dl className="grid gap-3 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">
                    Format
                  </dt>
                  <dd className="mt-1 text-foreground">{match.time}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">
                    Tournament
                  </dt>
                  <dd className="mt-1 text-foreground">{match.tournament}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">
                    Date
                  </dt>
                  <dd className="mt-1 text-foreground">{match.date}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">
                    Result
                  </dt>
                  <dd className="mt-1 text-foreground">
                    {match.status === "upcoming"
                      ? "TBD"
                      : `${statusLabel[match.status]}${match.score ? ` · ${match.score}` : ""}`}
                  </dd>
                </div>
              </dl>
              {match.games && match.games.length > 0 ? (
                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">
                    Game scores
                  </p>
                  <ol className="mt-2 grid gap-2 sm:grid-cols-2">
                    {match.games.map((g, i) => (
                      <li
                        key={i}
                        className="rounded-md border border-border/50 bg-background/40 px-3 py-2 font-display text-foreground"
                      >
                        <span className="text-muted-foreground">Game {i + 1}:</span> {g}
                      </li>
                    ))}
                  </ol>
                </div>
              ) : (
                <p className="mt-4 text-xs italic text-muted-foreground/70">
                  Per-game scorelines coming soon.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
