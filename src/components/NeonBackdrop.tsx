import { motion, useReducedMotion } from "framer-motion";

const horizontalLines = [
  { top: "12%", delay: 0, duration: 7, height: 2 },
  { top: "28%", delay: 1.8, duration: 11, height: 1 },
  { top: "44%", delay: 0.6, duration: 8, height: 2 },
  { top: "60%", delay: 2.4, duration: 10, height: 1 },
  { top: "76%", delay: 1.2, duration: 9, height: 2 },
  { top: "92%", delay: 0.9, duration: 12, height: 1 },
];

const verticalLines = [
  { left: "15%", delay: 0.4, duration: 11 },
  { left: "38%", delay: 2.0, duration: 14 },
  { left: "62%", delay: 1.2, duration: 12 },
  { left: "85%", delay: 0.6, duration: 10 },
];

const shootingStars = [
  { top: "20%", left: "-10%", angle: 25, delay: 0, duration: 5 },
  { top: "65%", left: "110%", angle: -30, delay: 2.8, duration: 5.5 },
];

const orbs = [
  { top: "25%", left: "20%", size: 260, delay: 0, duration: 9 },
  { top: "65%", left: "75%", size: 320, delay: 2, duration: 11 },
];

export function NeonBackdrop() {
  const reduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
      aria-hidden="true"
    >
      <div className="neon-grid absolute inset-0 opacity-30" />

      {horizontalLines.map((line, i) => (
        <motion.div
          key={`h-${i}`}
          className="neon-line-h absolute left-0 w-[55%]"
          style={{ top: line.top, height: line.height }}
          initial={{ x: "-80%", opacity: 0 }}
          animate={
            reduced
              ? { opacity: 0.35 }
              : { x: ["-80%", "220%"], opacity: [0, 0.8, 0.8, 0] }
          }
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {verticalLines.map((line, i) => (
        <motion.div
          key={`v-${i}`}
          className="neon-line-v absolute top-0 h-[45%] w-px"
          style={{ left: line.left }}
          initial={{ y: "-80%", opacity: 0 }}
          animate={
            reduced
              ? { opacity: 0.3 }
              : { y: ["-80%", "320%"], opacity: [0, 0.7, 0.7, 0] }
          }
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {shootingStars.map((star, i) => (
        <motion.div
          key={`s-${i}`}
          className="neon-line-h absolute h-px w-[30%]"
          style={{
            top: star.top,
            left: star.left,
            rotate: star.angle,
          }}
          initial={{ x: "-120%", opacity: 0 }}
          animate={
            reduced
              ? { opacity: 0 }
              : { x: ["-120%", "420%"], opacity: [0, 0.8, 0] }
          }
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {orbs.map((orb, i) => (
        <motion.div
          key={`o-${i}`}
          className="absolute rounded-full"
          style={{
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 28%, transparent) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={
            reduced
              ? { opacity: 0.15 }
              : {
                  opacity: [0.12, 0.25, 0.12],
                  scale: [0.96, 1.05, 0.96],
                }
          }
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,var(--color-background)_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>
  );
}
