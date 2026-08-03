import { motion } from "framer-motion";
import { Crown, Star, Shield } from "lucide-react";
import { matches, seasons, type Player } from "@/lib/team-data";

interface PlayerCardProps {
  player: Player;
  delay?: number;
}

function mvpCount(handle: string) {
  const all = [...matches, ...seasons.flatMap((s) => s.matches)];
  const seen = new Set<string>();
  let n = 0;
  for (const m of all) {
    if (seen.has(m.id)) continue;
    seen.add(m.id);
    if (m.mvp === handle) n += 1;
  }
  return n;
}

export function PlayerCard({ player, delay = 0 }: PlayerCardProps) {
  const initials = player.initials || player.handle.slice(0, 2).toUpperCase();
  const mvps = mvpCount(player.handle);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl neon-border neon-pulse bg-card transition-shadow hover:glow"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo to-violet opacity-60 transition-opacity group-hover:opacity-100" />
      <div className="p-6">
        <div className="flex items-start justify-between">
          {player.image ? (
            <div className="h-14 w-14 overflow-hidden rounded-xl border border-violet/40 bg-gradient-to-br from-secondary to-accent shadow-[0_0_18px_-6px_var(--color-glow)]">
              <img
                src={player.image}
                alt={player.handle}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-violet/40 bg-gradient-to-br from-secondary to-accent font-display text-xl font-bold text-foreground shadow-[0_0_18px_-6px_var(--color-glow)]">
              {initials}
            </div>
          )}
          <span className="text-2xl" aria-hidden="true">
            {player.flag}
          </span>
        </div>

        {player.title && (
          <div
            className={`mt-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest ${
              player.title === "Captain"
                ? "border border-primary/50 bg-primary/15 text-primary glow"
                : "border border-violet/50 bg-violet/10 text-violet"
            }`}
          >
            {player.title === "Captain" ? <Crown size={12} /> : <Shield size={12} />}
            {player.title}
          </div>
        )}

        <h3 className={`${player.title ? "mt-2" : "mt-5"} font-display text-xl font-bold text-foreground group-hover:glow-text`}>
          {player.handle}
        </h3>
        <p className="text-sm font-medium text-primary">{player.role}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {player.name} · Joined {player.joined}
        </p>

        {mvps > 0 && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-[0_0_20px_-8px_var(--color-glow)]">
            <Star size={13} />
            {mvps} MVP{mvps === 1 ? "" : "s"}
          </div>
        )}
      </div>
    </motion.div>
  );
}
