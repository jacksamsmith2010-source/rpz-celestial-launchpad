import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Partner } from "@/lib/team-data";

interface PartnerCardProps {
  partner: Partner;
  delay?: number;
}

const tierStyles = {
  platinum: "from-indigo-light to-violet",
  gold: "from-amber-300 to-yellow-500",
  silver: "from-slate-300 to-slate-400",
};

const tierLabel = {
  platinum: "Platinum Partner",
  gold: "Gold Partner",
  silver: "Silver Partner",
};

export function PartnerCard({ partner, delay = 0 }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6"
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tierStyles[partner.tier]}`}
      />
      <div className="flex items-center gap-2">
        <Star size={16} className="text-primary" />
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {tierLabel[partner.tier]}
        </span>
      </div>
      <h3 className="mt-4 font-display text-2xl font-bold text-foreground">{partner.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{partner.description}</p>
    </motion.div>
  );
}
