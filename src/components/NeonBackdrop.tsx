import { motion, useReducedMotion } from "framer-motion";

const lines = [
  { top: "12%", delay: 0, duration: 7, height: 2 },
  { top: "24%", delay: 1.2, duration: 9, height: 1 },
  { top: "38%", delay: 0.6, duration: 6, height: 3 },
  { top: "52%", delay: 2.1, duration: 8, height: 1 },
  { top: "64%", delay: 0.3, duration: 10, height: 2 },
  { top: "78%", delay: 1.8, duration: 7.5, height: 1 },
  { top: "88%", delay: 2.6, duration: 9.5, height: 2 },
];

const verticals = [
  { left: "18%", delay: 0.4, duration: 8 },
  { left: "42%", delay: 1.6, duration: 11 },
  { left: "68%", delay: 0.9, duration: 9 },
  { left: "86%", delay: 2.2, duration: 12 },
];

export function NeonBackdrop() {
  const reduced = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden bg-background" aria-hidden="true">
      <div className="neon-grid absolute inset-0 opacity-40" />

      {lines.map((line, i) => (
        <motion.div
          key={`h-${i}`}
          className="neon-line-h absolute left-0 w-[45%]"
          style={{ top: line.top, height: line.height }}
          initial={{ x: "-60%", opacity: 0 }}
          animate={reduced ? { opacity: 0.5 } : { x: ["-60%", "260%"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {verticals.map((line, i) => (
        <motion.div
          key={`v-${i}`}
          className="neon-line-v absolute top-0 h-[40%] w-px"
          style={{ left: line.left }}
          initial={{ y: "-60%", opacity: 0 }}
          animate={reduced ? { opacity: 0.4 } : { y: ["-60%", "300%"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="absolute -left-1/4 top-1/4 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
      <div className="absolute -right-1/4 bottom-0 h-[480px] w-[480px] rounded-full bg-violet/20 blur-[140px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>
  );
}