import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFX() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 240, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 240, damping: 24, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 1500, damping: 90 });
  const dotY = useSpring(y, { stiffness: 1500, damping: 90 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-fx");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(Boolean(t?.closest("a, button, .flip")));
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      document.documentElement.classList.remove("cursor-fx");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div style={{ x: ringX, y: ringY }} className="pointer-events-none fixed top-0 left-0 z-[90]">
        <motion.div
          animate={{ scale: hovering ? 2 : 1, opacity: hovering ? 0.5 : 0.9 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="-mt-4 -ml-4 size-8 rounded-full border-2 border-red"
        />
      </motion.div>
      <motion.div style={{ x: dotX, y: dotY }} className="pointer-events-none fixed top-0 left-0 z-[90]">
        <div className="-mt-[3px] -ml-[3px] size-1.5 rounded-full bg-red" />
      </motion.div>
    </>
  );
}
