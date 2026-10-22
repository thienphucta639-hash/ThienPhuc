import { BookOpen, CalendarRange, FileText, Percent } from "lucide-react";
import { Reveal, Stamp } from "./ui";

const cells = [
  {
    icon: FileText,
    label: "Hình thức thi",
    value: "Tiểu luận",
    note: "Hình thức đánh giá của học phần.",
  },
  {
    icon: CalendarRange,
    label: "Lịch thực hành",
    value: "Tuần 3 – 4",
    note: "Thời điểm tổ chức thực hành trong kỳ học.",
  },
  {
    icon: Percent,
    label: "Trọng số",
    value: "15%",
    note: "Tỷ trọng trong điểm quá trình giữa kỳ.",
  },
];

const books = [
  "Giáo trình “Tác phẩm báo mạng điện tử”",
  "Giáo trình “Tổ chức và hoạt động của tòa soạn”",
  "Giáo trình “Tổ chức nội dung, thiết kế và trình bày báo in”",
];

export default function CourseMemo() {
  return (
    <section id="thong-tin" className="scroll-mt-24 border-b-2 border-ink bg-paper-2">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-4xl font-black tracking-tight md:text-6xl">
            Phiếu thông tin <span className="font-medium italic text-red">môn học</span>
          </h2>
          <Stamp>Thông tin chung</Stamp>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 border-2 border-ink bg-paper shadow-[10px_10px_0_0_#181410]">
          <div className="grid md:grid-cols-3">
            {cells.map((c, i) => (
              <div
                key={c.label}
                className={`p-7 md:p-8 ${i > 0 ? "border-t-2 md:border-t-0 md:border-l-2 border-ink" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60">
                    {c.label}
                  </span>
                  <c.icon className="size-5 text-red" strokeWidth={1.8} />
                </div>
                <p className="mt-5 font-serif text-4xl font-black tracking-tight md:text-5xl">
                  {c.value}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{c.note}</p>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-ink p-7 md:p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60">
                Tài liệu tham khảo
              </span>
              <BookOpen className="size-5 text-red" strokeWidth={1.8} />
            </div>
            <ol className="mt-5">
              {books.map((b, i) => (
                <li
                  key={b}
                  className="flex items-baseline gap-5 border-t border-ink/15 py-3.5 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-xs font-semibold text-red">0{i + 1}</span>
                  <span className="font-serif text-lg font-bold md:text-xl">{b}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
