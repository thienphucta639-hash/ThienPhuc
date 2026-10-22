import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 36,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Marquee({
  children,
  className = "",
  fast = false,
}: {
  children: ReactNode;
  className?: string;
  fast?: boolean;
}) {
  return (
    <div className={`marquee-mask group overflow-hidden ${className}`}>
      <div className={`flex w-max items-center ${fast ? "animate-marquee-fast" : "animate-marquee"}`}>
        {children}
        {children}
      </div>
    </div>
  );
}

export function Kicker({
  index,
  label,
  tone = "ink",
}: {
  index: string;
  label: string;
  tone?: "ink" | "neon";
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] tracking-[0.18em] uppercase md:text-xs md:tracking-[0.28em] ${
        tone === "ink" ? "text-ink/70" : "text-neon/80"
      }`}
    >
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        className={`inline-block h-px w-10 origin-left ${tone === "ink" ? "bg-ink/40" : "bg-neon/50"}`}
      />
      <span>{index}</span>
      <span className="opacity-50">/</span>
      <span>{label}</span>
    </div>
  );
}

/* Red stamp that "slams" onto the page when scrolled into view */
export function Stamp({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 2.6, rotate: -18 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`inline-block border-2 border-red px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-red select-none md:text-[11px] ${className}`}
    >
      {children}
    </motion.span>
  );
}

/* Typewriter line with blinking terminal caret */
export function Typewriter({
  text,
  className = "",
  speed = 34,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(text.length);
      return;
    }
    const t = window.setInterval(() => {
      setN((v) => {
        if (v >= text.length) {
          window.clearInterval(t);
          return v;
        }
        return v + 1;
      });
    }, speed);
    return () => window.clearInterval(t);
  }, [inView, text, speed]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden>{text.slice(0, n)}</span>
      <span
        aria-hidden
        className="caret-blink ml-1 inline-block h-[1.05em] w-[0.55ch] translate-y-[0.22em] bg-neon/90"
      />
    </span>
  );
}

/* Giant outlined word strip that drifts with page scroll */
export function GhostStrip({
  text,
  tone = "ink",
  reverse = false,
  className = "",
}: {
  text: string;
  tone?: "ink" | "paper";
  reverse?: boolean;
  className?: string;
}) {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 4000], reverse ? [0, -860] : [0, 860]);

  return (
    <motion.div
      aria-hidden
      style={{ x }}
      className={`pointer-events-none absolute hidden font-serif text-[clamp(6rem,16vw,13rem)] leading-none font-black whitespace-nowrap select-none md:block ${
        tone === "ink" ? "text-outline-ink" : "text-outline-paper"
      } ${className}`}
    >
      {text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}
    </motion.div>
  );
}
