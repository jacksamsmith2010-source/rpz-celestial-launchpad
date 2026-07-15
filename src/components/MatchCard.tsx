import { motion } from "framer-motion";
import { Calendar, Trophy } from "lucide-react";
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
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`rounded-xl p-5 ${statusStyles[match.status]}`}
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
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
        </div>
      </div>
    </motion.div>
  );
}
