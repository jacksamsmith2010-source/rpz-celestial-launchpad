import { motion } from "framer-motion";
import type { Player } from "@/lib/team-data";

interface PlayerCardProps {
  player: Player;
  delay?: number;
}

export function PlayerCard({ player, delay = 0 }: PlayerCardProps) {
  const initials = player.handle.slice(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo to-violet opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="p-6">
        <div className="flex items-start justify-between">
          {player.image ? (
            <div className="h-14 w-14 overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-secondary to-accent">
              <img
                src={player.image}
                alt={player.handle}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent font-display text-xl font-bold text-foreground">
              {initials}
            </div>
          )}
          <span className="text-2xl" aria-hidden="true">
            {player.flag}
          </span>
        </div>

        <h3 className="mt-5 font-display text-xl font-bold text-foreground">{player.handle}</h3>
        <p className="text-sm font-medium text-primary">{player.role}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {player.name} · Joined {player.joined}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border/50 pt-4">
          <div className="text-center">
            <p className="font-display text-lg font-bold text-foreground">{player.stats.matches}</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Matches</p>
          </div>
          <div className="text-center">
            <p className="font-display text-lg font-bold text-foreground">{player.stats.wins}</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Wins</p>
          </div>
          <div className="text-center">
            <p className="font-display text-lg font-bold text-foreground">{player.stats.mvps}</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">MVPs</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
