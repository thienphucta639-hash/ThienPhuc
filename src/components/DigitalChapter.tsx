import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Camera,
  Globe,
  PenLine,
  Scissors,
  TriangleAlert,
  Video,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GhostStrip, Kicker, Marquee, Reveal, Typewriter } from "./ui";

const bandItems = [
  "Phần 02 — Từ giấy sang pixel",
  "Internet về Việt Nam 19·11·1997",
  "Tin tức hoạt động 24/7",
  "Một người — ba, bốn công việc",
];

const vnTimeline = [
  {
    date: "06 · 02 · 1997",
    title: "Báo Quê Hương",
    desc: "Tờ báo trực tuyến đầu tiên của người Việt — do các nhà báo gốc Việt ở nước ngoài lập ra và phát hành từ Canada, trước cả khi Việt Nam chính thức hòa mạng.",
    chip: "Tờ đầu tiên",
  },
  {
    date: "19 · 11 · 1997",
    title: "Internet về Việt Nam",
    desc: "Việt Nam chính thức nối vào mạng Internet toàn cầu. Thời điểm này, cả nước mới có đúng 01 tờ báo điện tử — báo Quê Hương.",
    chip: "01 tờ báo",
  },
  {
    date: "1998",
    title: "Nhân Dân điện tử",
    desc: "Tờ báo trong nước — và là báo Đảng — đầu tiên lên mạng. Tính đến thời điểm này, tổng số trang tin điện tử (kể cả của người Việt ở nước ngoài) mới chỉ khoảng 04 tờ.",
    chip: "≈ 04 tờ báo",
  },
  {
    date: "02 · 1999",
    title: "Đài Tiếng nói Việt Nam (VOV)",
    desc: "“Báo nói” chính thức đưa tin lên mạng — nội dung báo chí bắt đầu kết hợp thêm âm thanh.",
    chip: null,
  },
  {
    date: "09 · 2000",
    title: "Báo điện tử VTV",
    desc: "“Báo hình” lên mạng — chữ, hình ảnh và video bắt đầu xuất hiện trên cùng một trang tin.",
    chip: null,
  },
  {
    date: "02 · 2002",
    title: "VnExpress.net",
    desc: "Được cấp phép tháng 2/2002 — tờ báo điện tử độc lập đầu tiên của Việt Nam: hoạt động như một cơ quan báo chí thuần trực tuyến, không phải phiên bản số của báo in.",
    chip: "Độc lập đầu tiên",
  },
];

type StageCard = {
  ver: string;
  period: string;
  name: string;
  points: string[];
  quote: string;
  skills?: { icon: LucideIcon; label: string }[];
};

const devStages: StageCard[] = [
  {
    ver: "v1.0",
    period: "1997 — 2001",
    name: "Khởi đầu",
    points: [
      "Nội dung chủ yếu lấy lại từ báo in: copy tin bài đưa lên mạng, gần như không có tin tự khai thác",
      "Hình thức, bố cục trang tin còn đơn giản",
      "Đội ngũ làm báo trực tuyến chưa chuyên — chủ yếu làm kiêm nhiệm",
    ],
    quote: "Vị thế: “con nuôi” của báo in",
  },
  {
    ver: "v2.0",
    period: "2001 — 2005",
    name: "Phát triển",
    points: [
      "Từng bước chuyên nghiệp hóa cả nội dung lẫn hình thức trình bày",
      "Tòa soạn bắt đầu vận hành song song hai sản phẩm: báo in và báo trực tuyến — “làm được cả hai”",
    ],
    quote: "Hai sản phẩm — một tòa soạn",
  },
  {
    ver: "v3.0",
    period: "2005 — nay",
    name: "Hội tụ đa năng",
    points: [
      "Chuyển sang mô hình hội tụ: “tuyển 1 người, làm 3 — 4 việc” thay vì mỗi người một việc",
      "Phóng viên đa năng trở thành tiêu chuẩn tuyển dụng của tòa soạn hiện đại",
      "Tin bài được khai thác đa nền tảng: báo giấy, web, video, mạng xã hội",
    ],
    quote: "“3 trong 1” · “4 trong 1”",
    skills: [
      { icon: PenLine, label: "Viết" },
      { icon: Camera, label: "Chụp" },
      { icon: Video, label: "Quay" },
      { icon: Scissors, label: "Dựng" },
    ],
  },
];

export default function DigitalChapter() {
  const tlRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: tlRef,
    offset: ["start 70%", "end 60%"],
  });

  return (
    <section id="bao-truc-tuyen" className="scroll-mt-24 bg-night text-paper">
      {/* red transition band */}
      <div className="border-y-2 border-ink bg-red py-3">
        <Marquee fast>
          {[...bandItems, ...bandItems].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center font-mono text-[11px] font-semibold tracking-[0.25em] uppercase whitespace-nowrap text-cream"
            >
              <span className="mx-7">{t}</span>
              <Wifi className="size-4" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="dotgrid scanlines relative">
        <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
          {/* ---------- opener ---------- */}
          <Reveal>
            <Kicker index="Phần 02" label="Chương hai" tone="neon" />
          </Reveal>
          <div className="relative mt-6">
            <GhostStrip
              text="TRỰC TUYẾN · PIXEL · MẠNG"
              tone="paper"
              reverse
              className="-top-8 -left-10"
            />
            <span
              aria-hidden
              className="text-outline-paper pointer-events-none absolute -top-16 right-0 hidden font-serif text-[15rem] leading-none font-black select-none md:block"
            >
              02
            </span>
            <Reveal className="relative z-10">
              <h2 className="font-serif leading-[0.98] tracking-tight md:leading-[0.9]">
                <span className="block text-[clamp(3rem,9vw,8.5rem)] font-black">BÁO</span>
                <span className="block text-[clamp(2.4rem,7vw,6.5rem)] font-medium italic text-neon">
                  TRỰC TUYẾN
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="relative z-10">
              <p className="mt-2 font-serif text-2xl font-medium italic text-ice/80 md:text-3xl">
                — tin tức lên mạng
              </p>
            </Reveal>
            <Reveal delay={0.25} className="relative z-10">
              <p className="mt-6 max-w-2xl leading-relaxed text-paper/65 md:text-lg">
                Loại hình báo chí trẻ nhất: chỉ trong hơn 25 năm, đi từ vị thế “con nuôi”
                của báo in tới tòa soạn hội tụ một-người-làm-nhiều-việc — và trở thành đối
                thủ buộc báo in phải cạnh tranh ở giai đoạn 4.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <figure className="mt-12 border border-neon/40 bg-night-2 p-2 shadow-[10px_10px_0_0_rgba(34,211,238,0.18)]">
              <img
                src="/images/digital.jpg"
                alt="Tòa soạn số lúc nửa đêm"
                className="h-[300px] w-full object-cover md:h-[440px]"
              />
              <figcaption className="flex items-center justify-between px-1 pt-2.5 font-mono text-[10px] tracking-[0.22em] uppercase text-ice/50">
                <span>&gt; open toa-soan-so.jpg</span>
                <span className="text-neon">— 200 OK</span>
              </figcaption>
            </figure>
          </Reveal>

          {/* ---------- 2.1 khái niệm ---------- */}
          <div className="mt-24 grid gap-12 border-t border-paper/15 pt-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <Kicker index="Mục 2.1" label="Khái niệm" tone="neon" />
                <h3 className="mt-5 font-serif text-4xl font-black tracking-tight md:text-5xl">
                  Báo trực tuyến <span className="font-medium italic text-neon">là gì?</span>
                </h3>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
                  Còn gọi là báo điện tử — ra đời và lớn lên cùng quá trình phổ cập
                  Internet, với bốn đặc trưng: nền tảng, đa phương tiện, nhịp cập nhật và
                  tương tác.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <div className="border border-neon/40 bg-night-2/80 shadow-[8px_8px_0_0_rgba(34,211,238,0.15)]">
                  <div className="flex items-center gap-2 border-b border-neon/25 px-4 py-2.5">
                    <span className="size-2.5 rounded-full bg-red/80" />
                    <span className="size-2.5 rounded-full bg-neon/40" />
                    <span className="size-2.5 rounded-full bg-neon/40" />
                    <span className="ml-3 font-mono text-[10px] tracking-[0.2em] text-ice/50 uppercase">
                      ghi-chu / zsh — muc_2.1
                    </span>
                  </div>
                  <div className="p-6 font-mono text-sm leading-relaxed md:p-8 md:text-[15px]">
                    <p className="text-neon/70">
                      &gt; <Typewriter text={'dinh_nghia("báo trực tuyến")'} speed={36} />
                    </p>
                    <p className="mt-5 text-paper/85">
                      Báo trực tuyến (báo điện tử) là loại hình báo chí hoạt động trên nền
                      tảng <span className="text-neon">Internet</span>, khai thác sức mạnh{" "}
                      <span className="text-neon">đa phương tiện</span> — chữ, hình ảnh, âm
                      thanh, video — <span className="text-neon">cập nhật liên tục</span>{" "}
                      và <span className="text-neon">tương tác hai chiều</span> với bạn đọc.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2.5">
                      {["Nền Internet", "Đa phương tiện", "Cập nhật 24/7", "Tương tác 2 chiều"].map(
                        (c) => (
                          <span
                            key={c}
                            className="border border-neon/40 px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase text-neon/90"
                          >
                            {c}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ---------- 2.2 thế giới ---------- */}
          <div className="mt-20 border-t border-paper/15 pt-12">
            <Reveal>
              <Kicker index="Mục 2.2" label="Lịch sử · Thế giới" tone="neon" />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-8 border border-neon/30 bg-night-2/60 p-8 transition-colors hover:border-neon/60 md:flex-row md:items-center md:p-12">
                <Globe className="size-12 shrink-0 text-neon" strokeWidth={1.2} />
                <div>
                  <p className="font-serif text-[clamp(2rem,5vw,4rem)] leading-tight font-black tracking-tight">
                    1992 — Chicago Tribune{" "}
                    <span className="text-[0.45em] font-medium text-paper/50 italic">(Mỹ)</span>
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper/70 md:text-base">
                    Tòa soạn đầu tiên trên thế giới đưa nội dung báo lên mạng máy tính —
                    chính thức khai sinh loại hình báo trực tuyến.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ---------- 2.3 Việt Nam ---------- */}
          <div className="mt-20 border-t border-paper/15 pt-12">
            <Reveal>
              <Kicker index="Mục 2.3" label="Lịch sử · Việt Nam" tone="neon" />
              <h3 className="mt-5 font-serif text-4xl font-black tracking-tight md:text-6xl">
                Dòng thời gian <span className="font-medium italic text-neon">1997 → 2002</span>
              </h3>
            </Reveal>

            <div ref={tlRef} className="relative mt-12">
              <div className="absolute top-0 bottom-0 left-[7px] w-px bg-paper/15 md:left-[9px]" />
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute top-0 bottom-0 left-[7px] w-px origin-top bg-neon md:left-[9px]"
              />
              <ol className="space-y-12">
                {vnTimeline.map((t, i) => (
                  <Reveal key={t.date} delay={i * 0.04}>
                    <li className="relative pl-10 md:pl-16">
                      <span className="absolute top-1.5 left-0 size-[15px] rounded-full border-2 border-neon bg-night shadow-[0_0_14px_rgba(34,211,238,0.7)] md:size-[19px]" />
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <p className="font-mono text-sm tracking-[0.25em] text-neon">{t.date}</p>
                        {t.chip && (
                          <span className="border border-neon/40 px-2 py-0.5 font-mono text-[9px] tracking-[0.2em] uppercase text-ice/80">
                            {t.chip}
                          </span>
                        )}
                      </div>
                      <h5 className="mt-1.5 font-serif text-2xl font-bold tracking-tight md:text-3xl">
                        {t.title}
                      </h5>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-paper/70 md:text-[15px]">
                        {t.desc}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>

            <Reveal>
              <p className="mt-12 flex items-start gap-3 border border-dashed border-red/70 bg-night-2/70 px-4 py-3.5 text-xs leading-relaxed text-paper/75 md:text-sm">
                <TriangleAlert className="mt-0.5 size-4 shrink-0 text-red" />
                <span>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-red">
                    Chú thích —{" "}
                  </span>
                  Trong bản ghi chép gốc, mốc 02/1999 còn đi kèm cụm “Hoa Mai”; chưa xác
                  định được ấn phẩm tương ứng nên chỉ ghi nhận ở chú thích này.
                </span>
              </p>
            </Reveal>
          </div>

          {/* ---------- 3 giai đoạn ---------- */}
          <div className="mt-20 border-t border-paper/15 pt-12">
            <Reveal>
              <Kicker index="Ba giai đoạn" label="Phát triển của báo trực tuyến VN" tone="neon" />
              <h3 className="mt-5 font-serif text-4xl font-black tracking-tight md:text-6xl">
                Từ “con nuôi” <span className="font-medium italic text-neon">tới người đa năng</span>
              </h3>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {devStages.map((s, i) => (
                <Reveal key={s.ver} delay={i * 0.07} className="h-full">
                  <article className="group flex h-full flex-col border border-neon/30 bg-night-2/70 p-6 transition-all duration-500 hover:border-neon/70 hover:shadow-[0_0_50px_-12px_rgba(34,211,238,0.55)] md:p-8">
                    <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.22em]">
                      <span className="text-neon">{s.ver}</span>
                      <span className="text-paper/50">{s.period}</span>
                    </div>
                    <h5 className="mt-6 font-serif text-3xl font-black tracking-tight">
                      {s.name}
                    </h5>
                    <ul className="mt-5 space-y-2.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm leading-relaxed text-paper/70">
                          <span className="text-neon">—</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    {s.skills && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {s.skills.map((sk) => (
                          <span
                            key={sk.label}
                            className="flex items-center gap-2 border border-neon/40 px-2.5 py-1.5 font-mono text-[10px] tracking-[0.18em] uppercase text-ice/85"
                          >
                            <sk.icon className="size-3.5 text-neon" />
                            {sk.label}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="mt-auto border-t border-paper/15 pt-5 font-serif text-lg font-medium italic text-ice/80">
                      <span className="mr-2 text-red">¶</span>
                      {s.quote}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
