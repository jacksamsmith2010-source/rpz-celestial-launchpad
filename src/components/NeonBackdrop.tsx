import { motion, useReducedMotion } from "framer-motion";

const horizontalLines = [
  { top: "8%", delay: 0, duration: 6, height: 2 },
  { top: "16%", delay: 1.4, duration: 10, height: 1 },
  { top: "26%", delay: 0.3, duration: 7, height: 3 },
  { top: "36%", delay: 2.2, duration: 9, height: 1 },
  { top: "46%", delay: 0.8, duration: 8, height: 2 },
  { top: "56%", delay: 1.9, duration: 11, height: 1 },
  { top: "66%", delay: 0.5, duration: 7.5, height: 3 },
  { top: "76%", delay: 2.6, duration: 9, height: 1 },
  { top: "86%", delay: 1.1, duration: 10, height: 2 },
  { top: "94%", delay: 0.7, duration: 8.5, height: 1 },
];

const verticalLines = [
  { left: "10%", delay: 0.2, duration: 9 },
  { left: "22%", delay: 1.8, duration: 12 },
  { left: "35%", delay: 0.6, duration: 10 },
  { left: "48%", delay: 2.4, duration: 13 },
  { left: "61%", delay: 1.0, duration: 11 },
  { left: "74%", delay: 0.4, duration: 9 },
  { left: "87%", delay: 2.0, duration: 12 },
];

const shootingStars = [
  { top: "15%", left: "-10%", angle: 25, delay: 0, duration: 4 },
  { top: "55%", left: "-20%", angle: 20, delay: 2.5, duration: 5 },
  { top: "35%", left: "110%", angle: -30, delay: 1.2, duration: 4.5 },
  { top: "75%", left: "120%", angle: -25, delay: 3.8, duration: 5.5 },
];

const orbs = [
  { top: "20%", left: "15%", size: 280, delay: 0, duration: 8 },
  { top: "60%", left: "80%", size: 360, delay: 2, duration: 10 },
  { top: "40%", left: "50%", size: 220, delay: 1, duration: 9 },
  { top: "80%", left: "25%", size: 180, delay: 3, duration: 7 },
];

export function NeonBackdrop() {
  const reduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
      aria-hidden="true"
    >
      <div className="neon-grid absolute inset-0 opacity-50" />

      {horizontalLines.map((line, i) => (
        <motion.div
          key={`h-${i}`}
          className="neon-line-h absolute left-0 w-[55%]"
          style={{ top: line.top, height: line.height }}
          initial={{ x: "-80%", opacity: 0 }}
          animate={
            reduced
              ? { opacity: 0.5 }
              : { x: ["-80%", "220%"], opacity: [0, 1, 1, 0] }
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
              ? { opacity: 0.4 }
              : { y: ["-80%", "320%"], opacity: [0, 0.9, 0.9, 0] }
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
              : { x: ["-120%", "420%"], opacity: [0, 1, 0] }
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
              "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 35%, transparent) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={
            reduced
              ? { opacity: 0.2 }
              : {
                  opacity: [0.15, 0.35, 0.15],
                  scale: [0.95, 1.08, 0.95],
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
