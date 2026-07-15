import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
  delay?: number;
}

export function StatCard({ label, value, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 text-center"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo to-violet" />
      <p className="font-display text-3xl font-bold text-foreground md:text-4xl">{value}</p>
      <p className="mt-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
    </motion.div>
  );
}
