import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Newspaper } from "lucide-react";

const links = [
  { href: "#thong-tin", label: "Thông tin" },
  { href: "#bao-in", label: "01 · Báo in" },
  { href: "#bao-truc-tuyen", label: "02 · Trực tuyến" },
  { href: "#on-tap", label: "Ôn tập" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight * 0.35;
      let cur = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07070a]/80 text-[#efe9dc] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-7 place-items-center bg-red transition-transform duration-500 group-hover:rotate-[360deg]">
            <Newspaper className="size-4 text-paper" strokeWidth={2.2} />
          </span>
          <span className="font-mono text-xs font-semibold tracking-[0.22em] uppercase">
            Ghi chú · Báo học
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative py-1 font-mono text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 ${
                  isActive ? "text-[#efe9dc]" : "text-[#efe9dc]/55 hover:text-[#efe9dc]/90"
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute right-0 -bottom-0.5 left-0 h-[2px] bg-red"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <span className="border border-white/25 px-2.5 py-1 font-mono text-[10px] tracking-[0.28em] uppercase text-[#efe9dc]/80">
          Buổi 01
        </span>
      </div>
      <motion.div style={{ scaleX }} className="h-[2px] origin-left bg-red" />
    </header>
  );
}
