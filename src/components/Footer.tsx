import { ArrowUp, Asterisk } from "lucide-react";
import { Marquee } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-night text-paper">
      <div className="border-b border-paper/15 py-3.5">
        <Marquee>
          {["1865 — Báo Gia Định", "1925 — Báo Thanh Niên", "1951 — Báo Nhân Dân", "1992 — Chicago Tribune", "1997 — Báo Quê Hương", "2002 — VnExpress"].map((t) => (
            <span
              key={t}
              className="flex items-center font-mono text-[10px] tracking-[0.3em] uppercase whitespace-nowrap text-paper/50"
            >
              <span className="mx-7">{t}</span>
              <Asterisk className="size-3.5 text-red" />
            </span>
          ))}
        </Marquee>
      </div>
      <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-16">
        <div className="flex flex-col gap-8 border-b border-paper/15 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-neon/80">
              Ghi chú buổi 01 — Tổng quan
            </p>
            <p className="mt-3 font-serif text-3xl font-black tracking-tight md:text-5xl">
              Báo In <span className="text-red">&amp;</span> Báo Trực Tuyến
            </p>
          </div>
          <a
            href="#top"
            className="group inline-flex w-fit items-center gap-3 border border-paper/30 px-4 py-2.5 font-mono text-[10px] tracking-[0.25em] uppercase text-paper/70 transition-colors hover:border-paper hover:text-paper"
          >
            Lên đầu trang
            <ArrowUp className="size-4 transition-transform group-hover:-translate-y-1" />
          </a>
        </div>
        <div className="flex flex-col gap-3 pt-8 font-mono text-[10px] tracking-[0.2em] uppercase text-paper/45 md:flex-row md:items-center md:justify-between md:text-[11px]">
          <span>Bản viết lại từ ghi chép trong giờ học</span>
          <span>Thi tiểu luận · Thực hành tuần 3–4 · 15% giữa kỳ</span>
          <span>Nội dung chương 01 · Tổng quan hai loại hình báo chí</span>
        </div>
      </div>
    </footer>
  );
}
