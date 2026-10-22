import { useState, type MouseEvent } from "react";
import { MousePointerClick, RotateCw } from "lucide-react";
import { Kicker, Reveal, Stamp } from "./ui";

type Card = { date: string; tag: "GIẤY" | "PIXEL"; answer: string };

const cards: Card[] = [
  {
    date: "15 · 04 · 1865",
    tag: "GIẤY",
    answer: "Báo Gia Định — phát hành tại Sài Gòn; tờ báo in (và báo chữ Quốc ngữ) đầu tiên của Việt Nam.",
  },
  {
    date: "1605 → 2005",
    tag: "GIẤY",
    answer:
      "“Relation aller Fürnemmen und gedenckwürdigen Historien” (Đức, 1605) — năm 2005 được công nhận là tờ báo đầu tiên trên thế giới.",
  },
  {
    date: "21 · 06 · 1925",
    tag: "GIẤY",
    answer:
      "Báo Thanh Niên — Nguyễn Ái Quốc thành lập; khai sinh báo chí cách mạng. 21/6 nay là Ngày Báo chí Cách mạng Việt Nam.",
  },
  {
    date: "01 · 08 · 1941",
    tag: "GIẤY",
    answer: "Báo Việt Nam Độc Lập — cơ quan tuyên truyền của Mặt trận Việt Minh.",
  },
  {
    date: "11 · 03 · 1951",
    tag: "GIẤY",
    answer: "Báo Nhân Dân — cơ quan ngôn luận của Đảng Cộng sản Việt Nam, tiếng nói chính thống tới nay.",
  },
  {
    date: "1992",
    tag: "PIXEL",
    answer: "Chicago Tribune (Mỹ) — tòa soạn đầu tiên trên thế giới đưa báo lên mạng.",
  },
  {
    date: "06 · 02 · 1997",
    tag: "PIXEL",
    answer: "Báo Quê Hương — phát hành từ Canada; báo trực tuyến đầu tiên của người Việt.",
  },
  {
    date: "19 · 11 · 1997",
    tag: "PIXEL",
    answer: "Việt Nam chính thức nối vào mạng Internet toàn cầu.",
  },
  {
    date: "02 · 2002",
    tag: "PIXEL",
    answer: "VnExpress — báo điện tử độc lập đầu tiên được cấp phép (không kèm báo in).",
  },
];

const keywords = [
  {
    term: "Tiền báo chí",
    gloss: "Báo chí sơ khai trước thế kỷ XV — bản tin viết tay, không định kỳ, có tin mới đưa.",
  },
  {
    term: "Quyền lực thứ tư",
    gloss: "Danh hiệu của báo chí trong thời kỳ hoàng kim — sau Lập pháp, Hành pháp, Tư pháp.",
  },
  {
    term: "“Con nuôi” của báo in",
    gloss: "Vị thế của báo trực tuyến giai đoạn 1997–2001: nội dung lấy từ báo in, đội ngũ chưa chuyên.",
  },
  {
    term: "3 trong 1 · 4 trong 1",
    gloss: "Một phóng viên kiêm nhiệm 3–4 việc (viết, chụp, quay, dựng) — chuẩn từ 2005 tới nay.",
  },
];

function FlipCard({ c }: { c: Card }) {
  const [flipped, setFlipped] = useState(false);
  const isPixel = c.tag === "PIXEL";
  const isLong = c.answer.length > 90;
  const [{ rx, ry }, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      rx: -((e.clientY - r.top) / r.height - 0.5) * 7,
      ry: ((e.clientX - r.left) / r.width - 0.5) * 9,
    });
  };
  const onLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <button
      type="button"
      onClick={() => setFlipped((v) => !v)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-pressed={flipped}
      style={{
        transform: `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}
      className={`flip block h-56 w-full cursor-pointer text-left md:h-64 ${
        flipped ? "flipped" : ""
      }`}
    >
      <div className="flip-inner relative size-full">
        {/* front */}
        <div className="flip-face absolute inset-0 flex flex-col justify-between border-2 border-ink bg-cream p-5 shadow-[6px_6px_0_0_#181410]">
          <span
            className={`self-start px-2 py-0.5 font-mono text-[9px] font-semibold tracking-[0.25em] ${
              isPixel ? "bg-ink text-[#22d3ee]" : "bg-red text-paper"
            }`}
          >
            {c.tag}
          </span>
          <p className="font-serif text-4xl leading-none font-black tracking-tight md:text-[2.5rem]">
            {c.date}
          </p>
          <span className="flex items-center gap-2 font-mono text-[9px] tracking-[0.22em] uppercase text-ink/50">
            <RotateCw className="size-3.5 text-red" /> Nhấn để lật
          </span>
        </div>
        {/* back */}
        <div className="flip-face flip-back absolute inset-0 flex flex-col justify-between gap-3 border-2 border-ink bg-ink p-5 text-paper shadow-[6px_6px_0_0_#c1121f]">
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-paper/50">
            {c.date}
          </span>
          <p
            className={`font-serif leading-snug font-bold ${
              isLong ? "text-base md:text-lg" : "text-lg md:text-[1.35rem]"
            }`}
          >
            {c.answer}
          </p>
          <span
            className={`self-start px-2 py-0.5 font-mono text-[9px] font-semibold tracking-[0.25em] ${
              isPixel ? "border border-[#22d3ee]/50 text-[#9be5fb]" : "bg-red text-paper"
            }`}
          >
            {c.tag}
          </span>
        </div>
      </div>
    </button>
  );
}

export default function CheatSheet() {
  return (
    <section id="on-tap" className="scroll-mt-24 border-y-2 border-ink bg-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Kicker index="Phần 03" label="Ôn tập nhanh" />
            <h2 className="mt-5 font-serif text-4xl font-black tracking-tight md:text-6xl">
              Lật thẻ <span className="font-medium italic text-red">nhớ mốc</span>
            </h2>
          </div>
          <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-ink/60">
            <MousePointerClick className="size-4 text-red" /> Chạm vào thẻ để lật đáp án
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.date} delay={i * 0.05}>
              <FlipCard c={c} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="font-serif text-3xl font-black tracking-tight md:text-4xl">
              Cụm từ <span className="font-medium italic text-red">then chốt</span>
            </h3>
            <Stamp>Trục ký ức của chương</Stamp>
          </div>
        </Reveal>

        <div className="mt-8 border-t-2 border-ink">
          {keywords.map((k, i) => (
            <Reveal key={k.term} delay={i * 0.04}>
              <div className="group grid gap-2 border-b border-ink/15 py-5 transition-colors duration-300 hover:bg-paper md:grid-cols-12 md:items-baseline md:gap-6 md:px-4">
                <span className="font-mono text-xs font-semibold text-red md:col-span-1">
                  0{i + 1}
                </span>
                <p className="font-serif text-2xl font-black tracking-tight transition-colors duration-300 group-hover:text-red md:col-span-5 md:text-3xl">
                  {k.term}
                </p>
                <p className="text-sm leading-relaxed text-ink/65 md:col-span-6">{k.gloss}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
