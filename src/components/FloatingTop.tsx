import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function FloatingTop() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setShow(v > 0.08));
  }, [scrollYProgress]);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Lên đầu trang"
          initial={{ opacity: 0, y: 24, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-50 grid size-14 place-items-center rounded-full border border-paper/25 bg-ink/90 text-paper shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] backdrop-blur-md transition-transform hover:scale-105 md:right-8 md:bottom-[max(2rem,env(safe-area-inset-bottom))]"
        >
          <svg viewBox="0 0 56 56" className="absolute inset-0 size-full -rotate-90">
            <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(244,238,226,0.15)" strokeWidth="2.5" />
            <motion.circle
              cx="28"
              cy="28"
              r="24"
              fill="none"
              stroke="#c1121f"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />
          </svg>
          <ArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
