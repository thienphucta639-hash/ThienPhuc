import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Asterisk } from "lucide-react";
import { EASE, Marquee } from "./ui";

const ticker = [
  "15·04·1865 — Báo Gia Định",
  "1605 — Relation Aller",
  "21·06·1925 — Báo Thanh Niên",
  "11·03·1951 — Báo Nhân Dân",
  "1992 — Chicago Tribune lên mạng",
  "06·02·1997 — Báo Quê Hương",
  "19·11·1997 — Internet về Việt Nam",
  "02·2002 — VnExpress",
];

const memoChips = ["Thi tiểu luận", "Thực hành tuần 3–4", "15% điểm giữa kỳ"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden bg-paper pt-24 md:pt-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="flex flex-wrap items-center justify-between gap-3 border-y-2 border-ink py-3 font-mono text-[10px] tracking-[0.25em] uppercase text-ink/70 md:text-[11px]"
        >
          <span>Ghi chú môn báo học — bản viết lại từ nháp trong giờ</span>
          <span className="hidden md:inline">Tổng quan · Số 01</span>
          <span>HK · 2026</span>
        </motion.div>

        <div className="grid items-end gap-12 py-14 md:py-20 lg:grid-cols-12">
          {/* headline */}
          <div className="relative lg:col-span-8">
            <motion.span
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 right-1/3 hidden md:block"
            >
              <Asterisk className="size-10 text-red/25" />
            </motion.span>
            <motion.span
              aria-hidden
              animate={{ rotate: -360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
              className="absolute top-28 right-10 hidden md:block"
            >
              <Asterisk className="size-6 text-ink/15" />
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink/70 md:text-sm"
            >
              Tổng quan về
            </motion.p>
            <h1 className="font-serif leading-[1.04] font-black tracking-tight md:leading-[0.92]">
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.25, ease: EASE }}
                className="block text-[clamp(3.4rem,10vw,9.5rem)]"
              >
                BÁO IN
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: EASE }}
                className="block text-[clamp(1.6rem,7.4vw,7rem)] font-medium italic"
              >
                <span className="text-red not-italic">&amp;</span> BÁO TRỰC&nbsp;TUYẾN
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease: EASE }}
              className="mt-8 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg"
            >
              {("Khái niệm, lịch sử hình thành và các giai đoạn phát triển của hai loại hình báo chí — kể từ máy in chữ rời thế kỷ XV cho tới tòa soạn số hội tụ hiện nay.")
                .split(" ")
                .map((w, i) => (
                  <motion.span
                    key={w + "-" + i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.62 + i * 0.018, ease: EASE }}
                    className="inline-block"
                  >
                    {w}&nbsp;
                  </motion.span>
                ))}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {memoChips.map((c) => (
                <a
                  key={c}
                  href="#thong-tin"
                  className="border-2 border-ink px-3.5 py-2 font-mono text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors hover:bg-ink hover:text-paper md:text-[11px]"
                >
                  {c}
                </a>
              ))}
              <span className="ml-1 hidden items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-ink/50 md:flex">
                <ArrowDown className="size-3.5 animate-bounce" /> Cuộn để đọc
              </span>
            </motion.div>
          </div>

          {/* plates */}
          <div className="relative hidden h-[460px] lg:col-span-4 lg:block">
            <motion.figure
              style={{ y: yA }}
              initial={{ opacity: 0, rotate: -8, y: 40 }}
              animate={{ opacity: 1, rotate: -5, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
              className="absolute top-0 right-6 w-60 border-2 border-ink bg-cream p-2 shadow-[10px_10px_0_0_#181410]"
            >
              <img src="/images/press.jpg" alt="Phòng in kiểu cũ" className="h-52 w-full object-cover" />
              <figcaption className="flex items-center justify-between px-1 pt-2 font-mono text-[9px] tracking-[0.2em] uppercase text-ink/60">
                <span>H.01 — Thế kỷ của máy in</span>
                <Asterisk className="size-3 text-red" />
              </figcaption>
            </motion.figure>

            <motion.figure
              style={{ y: yB }}
              initial={{ opacity: 0, rotate: 8, y: 40 }}
              animate={{ opacity: 1, rotate: 3, y: 0 }}
              transition={{ duration: 1.1, delay: 0.65, ease: EASE }}
              className="absolute bottom-0 left-0 w-56 border border-neon/50 bg-night-2 p-2 shadow-[10px_10px_0_0_rgba(34,211,238,0.25)]"
            >
              <img src="/images/digital.jpg" alt="Tòa soạn số" className="h-48 w-full object-cover" />
              <figcaption className="flex items-center justify-between px-1 pt-2 font-mono text-[9px] tracking-[0.2em] uppercase text-ice/70">
                <span>H.02 — Thế kỷ của pixel</span>
                <Asterisk className="size-3 text-neon" />
              </figcaption>
            </motion.figure>
          </div>

          {/* plates on mobile */}
          <div className="grid grid-cols-2 gap-4 lg:hidden">
            <figure className="-rotate-2 border-2 border-ink bg-cream p-2 shadow-[6px_6px_0_0_#181410]">
              <img src="/images/press.jpg" alt="Phòng in kiểu cũ" className="h-36 w-full object-cover" />
              <figcaption className="px-1 pt-2 font-mono text-[9px] tracking-[0.2em] uppercase text-ink/60">
                H.01 — Máy in
              </figcaption>
            </figure>
            <figure className="rotate-2 border border-neon/50 bg-night-2 p-2 shadow-[6px_6px_0_0_rgba(34,211,238,0.25)]">
              <img src="/images/digital.jpg" alt="Tòa soạn số" className="h-36 w-full object-cover" />
              <figcaption className="px-1 pt-2 font-mono text-[9px] tracking-[0.2em] uppercase text-ice/70">
                H.02 — Pixel
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* date ticker */}
      <div className="border-y-2 border-ink bg-cream py-3.5">
        <Marquee>
          {ticker.map((t) => (
            <span
              key={t}
              className="flex items-center font-mono text-[11px] tracking-[0.22em] uppercase whitespace-nowrap text-ink/80 md:text-xs"
            >
              <span className="mx-6">{t}</span>
              <Asterisk className="size-4 text-red" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
