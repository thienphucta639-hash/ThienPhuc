import { Ban, Globe2, Printer, Sparkles, Star } from "lucide-react";
import { GhostStrip, Kicker, Reveal, Stamp } from "./ui";

const worldStages = [
  {
    no: "GĐ · 1",
    era: "Trước TK·XV",
    title: "Tiền báo chí",
    body: [
      "Báo chí đời đầu, còn ở dạng sơ khai nhất. Hình thức điển hình là các bản tin viết tay, trưng bày nơi công cộng — tiêu biểu như Acta Diurna của La Mã cổ đại (khoảng năm 59 TCN).",
      "Nội dung chủ yếu là tin chiến tranh và các sự kiện lớn; lâu lâu mới xuất bản một lần, không có tính định kỳ — có thông tin mới đưa.",
      "Nội dung như vậy chưa đáp ứng được nhu cầu của bạn đọc, nhưng chính nó đã tạo tiền đề để báo in xuất hiện từ thế kỷ XV.",
    ],
    facts: [] as { tag: string; text: string }[],
  },
  {
    no: "GĐ · 2",
    era: "TK·XV → cuối TK·XIX",
    title: "Báo in ra đời & phát triển",
    body: [
      "Khoảng năm 1445, Johannes Gutenberg phát minh kỹ thuật in chữ rời — ấn phẩm lần đầu tiên được nhân bản nhanh với số lượng lớn, mở đường cho báo in ra đời.",
      "Tuy vậy, trong suốt giai đoạn này nội dung báo vẫn chưa đáp ứng trọn vẹn nhu cầu thông tin của bạn đọc; hình thức phát hành cũng chưa thật sự định kỳ.",
    ],
    facts: [
      {
        tag: "1605 → 2005 · Tờ Relation",
        text: "Tên đầy đủ của tờ báo: “Relation aller Fürnemmen und gedenckwürdigen Historien” (tiếng Đức, nghĩa là “Bản tin về những sự kiện đáng ghi nhớ và quan trọng”), do Johann Carolus phát hành tại Strasbourg từ năm 1605. Mãi đến năm 2005, Hiệp hội Báo chí Thế giới mới chính thức công nhận đây là tờ báo đầu tiên — trước đó, danh hiệu này thường được gán cho tờ Avisa Relation oder Zeitung (1609).",
      },
      {
        tag: "Độc giả thời này",
        text: "Giá báo còn cao nên chỉ giới quý tộc mới mua và đọc được báo — đúng lời giảng trên lớp: “người nghèo thì chim cúc”.",
      },
    ],
  },
  {
    no: "GĐ · 3",
    era: "Cuối TK·XIX → đầu TK·XX",
    title: "Thời kỳ hoàng kim",
    body: [
      "Công nghiệp in ấn phát triển khiến giá thành tờ báo giảm mạnh — báo trở nên bình dân, ai cũng mua đọc được. Số lượng bạn đọc tăng vọt, sức ảnh hưởng của báo chí lên tới đỉnh điểm.",
      "Nhật báo ra hằng ngày trở thành kênh thông tin chính của xã hội đương thời.",
    ],
    facts: [
      {
        tag: "Danh hiệu",
        text: "Báo chí được tôn xưng là “quyền lực thứ tư” — sức mạnh giám sát được xếp ngay sau ba quyền lực: Lập pháp, Hành pháp và Tư pháp.",
      },
    ],
  },
  {
    no: "GĐ · 4",
    era: "Cuối TK·XX → đầu TK·XXI",
    title: "Cạnh tranh khốc liệt",
    body: [
      "Báo in phải cạnh tranh với các loại hình báo chí mới: truyền hình, báo điện tử — và sau này là mạng xã hội. Nhiều tờ báo buộc phải chuyển đổi số hoặc dừng hẳn bản giấy.",
    ],
    facts: [
      {
        tag: "Minh chứng",
        text: "Ngày 30/6/2026, hàng loạt báo giấy TP.HCM in số cuối cùng — xem khung “Khi nhịp in dừng máy” phía dưới, và đối thủ của báo in ở chương 02.",
      },
    ],
  },
];

const ceased = [
  "Báo Người Lao Động",
  "Báo Phụ Nữ TP.HCM",
  "Báo Pháp Luật TP.HCM",
  "Tạp chí Giáo dục TP.HCM",
  "Tạp chí Du lịch TP.HCM",
  "Tạp chí Doanh nhân Sài Gòn",
  "Tạp chí Kinh tế Sài Gòn",
  "Tạp chí Khoa học Phổ thông",
];

const formats = [
  {
    name: "Báo",
    desc: "Chu kỳ xuất bản ngắn (nhật báo, chu báo…); thiên về tin thời sự, cập nhật nhanh.",
  },
  {
    name: "Tạp chí",
    desc: "Chu kỳ xuất bản dài hơn (tuần, tháng, quý); nội dung chuyên sâu theo lĩnh vực.",
  },
];

export default function PrintChapter() {
  return (
    <section id="bao-in" className="scroll-mt-24 bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 pt-24 pb-24 md:px-10 md:pt-36 md:pb-32">
        {/* ---------- chapter opener ---------- */}
        <Reveal>
          <Kicker index="Phần 01" label="Chương một" />
        </Reveal>
        <div className="relative mt-6">
          <GhostStrip text="MÁY IN · GIẤY · MỰC" className="-top-8 -left-10 opacity-60" />
          <span
            aria-hidden
            className="text-outline-ink pointer-events-none absolute -top-16 right-0 hidden font-serif text-[15rem] leading-none font-black select-none md:block"
          >
            01
          </span>
          <Reveal className="relative z-10">
            <h2 className="font-serif text-[clamp(3rem,9vw,8.5rem)] leading-[0.9] font-black tracking-tight">
              BÁO IN
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="relative z-10">
            <p className="mt-2 font-serif text-2xl font-medium italic text-red md:text-4xl">
              — thời đại của giấy
            </p>
          </Reveal>
          <Reveal delay={0.2} className="relative z-10">
            <p className="mt-6 max-w-2xl leading-relaxed text-ink/70 md:text-lg">
              Loại hình báo chí lâu đời nhất: chữ viết, hình ảnh và mùi mực in — từ mặt
              hàng chỉ giới quý tộc mới chạm tới, đến vị thế “quyền lực thứ tư” của xã hội.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <figure className="mt-12 border-2 border-ink bg-cream p-2 shadow-[10px_10px_0_0_#181410]">
            <img
              src="/images/press.jpg"
              alt="Phòng in với chữ rời và báo cũ"
              className="h-[300px] w-full object-cover md:h-[440px]"
            />
            <figcaption className="flex items-center justify-between px-1 pt-2.5 font-mono text-[10px] tracking-[0.22em] uppercase text-ink/60">
              <span>Hình 01 — Phòng in thời máy chữ rời</span>
              <span>Ảnh minh họa</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* ---------- 1.1 khái niệm ---------- */}
        <div className="mt-24 grid gap-12 border-t-2 border-ink pt-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Kicker index="Mục 1.1" label="Khái niệm" />
              <h3 className="mt-5 font-serif text-4xl font-black tracking-tight md:text-5xl">
                Báo in <span className="font-medium italic text-red">là gì?</span>
              </h3>
              <Printer className="mt-6 size-10 text-ink/25" strokeWidth={1.2} />
              <p className="mt-6 font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60">
                Theo định nghĩa, báo in gồm hai dạng
              </p>
              <div className="mt-3 space-y-3">
                {formats.map((f) => (
                  <div key={f.name} className="border-2 border-ink bg-cream p-4">
                    <p className="font-serif text-xl font-bold">{f.name}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink/65">{f.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <p className="dropcap font-serif text-2xl leading-snug font-medium md:text-[2rem]">
                Báo in là loại hình báo chí sử dụng <mark>chữ viết, hình ảnh, tranh</mark>{" "}
                minh họa; được thực hiện bằng <mark>phương tiện in</mark> và{" "}
                <mark>phát hành định kỳ</mark> đến bạn đọc.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl leading-relaxed text-ink/70">
                Định nghĩa này tách ra được ba trục phân tích — cũng là phần lõi để đối
                chiếu báo in với báo trực tuyến ở chương 02:
              </p>
              <div className="mt-8 grid gap-px border-2 border-ink sm:grid-cols-3">
                {[
                  { k: "Ngôn ngữ", v: "Chữ viết kết hợp hình ảnh, tranh minh họa" },
                  { k: "Phương tiện", v: "Kỹ thuật in — tồn tại dưới dạng bản giấy" },
                  { k: "Phát hành", v: "Định kỳ, phân phối rộng rãi tới bạn đọc" },
                ].map((it) => (
                  <div
                    key={it.k}
                    className="group bg-cream p-5 transition-colors duration-300 hover:bg-ink"
                  >
                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-red">
                      {it.k}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed font-medium transition-colors duration-300 group-hover:text-paper">
                      {it.v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---------- 1.2 lịch sử thế giới ---------- */}
        <div className="mt-24 grid gap-12 border-t-2 border-ink pt-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Kicker index="Mục 1.2" label="Lịch sử hình thành" />
                <h3 className="mt-5 font-serif text-4xl font-black tracking-tight md:text-5xl">
                  Báo in <span className="font-medium italic text-red">thế giới</span>
                </h3>
                <p className="mt-3 font-serif text-2xl font-medium italic">
                  04 giai đoạn lớn
                </p>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/65">
                  Theo bài giảng: toàn bộ bốn giai đoạn trong mục này đều nghiên cứu trong
                  phạm vi lịch sử báo chí thế giới.
                </p>
                <div className="mt-6">
                  <Stamp>Thế giới · 4 giai đoạn</Stamp>
                </div>
                <Globe2 className="mt-10 hidden size-10 text-ink/20 lg:block" strokeWidth={1.2} />
              </Reveal>
            </div>
          </div>

          <ol className="space-y-6 lg:col-span-8">
            {worldStages.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.06}>
                <li className="relative border-2 border-ink bg-cream p-6 shadow-[8px_8px_0_0_#181410] transition-transform duration-500 hover:-translate-y-1 md:p-8">
                  <span
                    aria-hidden
                    className="text-outline-ink pointer-events-none absolute top-3 right-4 font-serif text-6xl leading-none font-black opacity-60 select-none"
                  >
                    {`0${i + 1}`}
                  </span>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="border border-ink/50 px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.2em]">
                      {s.no}
                    </span>
                    <h4 className="font-serif text-2xl font-black tracking-tight md:text-3xl">
                      {s.era}
                    </h4>
                    <span className="font-serif text-lg font-medium italic text-red md:text-xl">
                      {s.title}
                    </span>
                  </div>
                  <div className="mt-4 space-y-2.5">
                    {s.body.map((p) => (
                      <p key={p} className="text-sm leading-relaxed text-ink/75 md:text-[15px]">
                        {p}
                      </p>
                    ))}
                  </div>
                  {s.facts.length > 0 && (
                    <div className="mt-5 space-y-3">
                      {s.facts.map((f) => (
                        <div
                          key={f.tag}
                          className="flex items-start gap-3 border border-dashed border-red/60 bg-paper px-4 py-3"
                        >
                          <Sparkles className="mt-0.5 size-4 shrink-0 text-red" />
                          <p className="text-xs leading-relaxed text-ink/80 md:text-sm">
                            <span className="font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-red">
                              Fact · {f.tag} —{" "}
                            </span>
                            {f.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* ---------- 1.3 lịch sử Việt Nam ---------- */}
        <div className="mt-24 border-t-2 border-ink pt-14">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Kicker index="Mục 1.3" label="Lịch sử · Việt Nam" />
              <h3 className="mt-5 font-serif text-4xl font-black tracking-tight md:text-6xl">
                03 mốc vàng <span className="font-medium italic text-red">báo in VN</span>
              </h3>
            </div>
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/60">
              1865 → 1925/1941 → 1951
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Mốc 1 */}
            <Reveal>
              <article className="flex h-full flex-col border-2 border-ink bg-cream p-7 shadow-[8px_8px_0_0_#181410] transition-transform duration-500 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60">
                    Mốc 01
                  </span>
                  <Star className="size-4 text-red" />
                </div>
                <p className="mt-6 font-serif text-5xl font-black tracking-tight">
                  15·04·1865
                </p>
                <h4 className="mt-3 font-serif text-2xl font-bold italic text-red">
                  Báo Gia Định
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  Phát hành tại Sài Gòn, do chính quyền thực dân Pháp ấn hành với Petrus
                  Trương Vĩnh Ký làm chủ bút. Đây là tờ báo in — đồng thời là tờ báo chữ
                  Quốc ngữ — đầu tiên của Việt Nam.
                </p>
                <div className="mt-auto pt-6">
                  <Stamp>Báo in đầu tiên</Stamp>
                </div>
              </article>
            </Reveal>

            {/* Mốc 2 */}
            <Reveal delay={0.08}>
              <article className="flex h-full flex-col border-2 border-ink bg-ink p-7 text-paper shadow-[8px_8px_0_0_#c1121f] transition-transform duration-500 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/60">
                    Mốc 02
                  </span>
                  <Star className="size-4 text-red" />
                </div>
                <p className="mt-6 font-serif text-5xl font-black tracking-tight">
                  1925 — 1941
                </p>
                <h4 className="mt-3 font-serif text-2xl font-bold italic text-red">
                  Báo chí cách mạng
                </h4>
                <div className="mt-4 space-y-4 border-t border-paper/20 pt-4">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-paper/60">
                      21 · 06 · 1925 — Quảng Châu, Trung Quốc
                    </p>
                    <p className="mt-1 font-serif text-lg font-bold">Báo Thanh Niên</p>
                    <p className="mt-1 text-sm leading-relaxed text-paper/70">
                      Do Nguyễn Ái Quốc (tức Chủ tịch Hồ Chí Minh) thành lập — cơ quan của
                      Hội Việt Nam Cách mạng Thanh niên; tờ báo cách mạng đầu tiên, khai
                      sinh nền báo chí cách mạng Việt Nam. Ngày 21/6 sau này được lấy làm
                      Ngày Báo chí Cách mạng Việt Nam.
                    </p>
                  </div>
                  <div className="border-t border-paper/15 pt-4">
                    <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-paper/60">
                      01 · 08 · 1941 — Cao Bằng
                    </p>
                    <p className="mt-1 font-serif text-lg font-bold">
                      Báo Việt Nam Độc Lập
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-paper/70">
                      Cơ quan tuyên truyền của Mặt trận Việt Nam Độc lập Đồng minh (Việt
                      Minh) trong thời kỳ kháng chiến.
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <Stamp>Báo chí cách mạng</Stamp>
                </div>
              </article>
            </Reveal>

            {/* Mốc 3 */}
            <Reveal delay={0.16}>
              <article className="flex h-full flex-col border-2 border-ink bg-cream p-7 shadow-[8px_8px_0_0_#181410] transition-transform duration-500 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60">
                    Mốc 03
                  </span>
                  <Star className="size-4 text-red" />
                </div>
                <p className="mt-6 font-serif text-5xl font-black tracking-tight">
                  11·03·1951
                </p>
                <h4 className="mt-3 font-serif text-2xl font-bold italic text-red">
                  Báo Nhân Dân
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  Ra số đầu tại chiến khu Việt Bắc, ngay sau khi Đảng Lao động Việt Nam
                  công khai ra mắt (tháng 2/1951). Là cơ quan ngôn luận của Đảng Cộng sản
                  Việt Nam, trở thành tiếng nói chính thống cho đến nay.
                </p>
                <div className="mt-auto pt-6">
                  <Stamp>Tiếng nói chính thống</Stamp>
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal>
            <p className="mt-8 border-y border-ink/20 py-3 text-center font-mono text-[11px] tracking-[0.22em] uppercase text-ink/60">
              1865: Đầu tiên · 1925 &amp; 1941: Cách mạng · 1951: Chính thống
            </p>
          </Reveal>
        </div>

        {/* ---------- ceases band ---------- */}
        <Reveal className="mt-24">
          <div className="crosshatch border-2 border-ink bg-paper-2 p-6 shadow-[10px_10px_0_0_#181410] md:p-10">
            <div className="flex flex-wrap items-center gap-4">
              <span className="grid size-11 place-items-center border-2 border-ink bg-ink text-paper">
                <Ban className="size-5" />
              </span>
              <h4 className="font-serif text-2xl font-black tracking-tight md:text-4xl">
                30·06·2026 — Khi nhịp in dừng máy
              </h4>
              <Stamp>Minh chứng · GĐ 4</Stamp>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink/70 md:text-[15px]">
              Trong đợt sắp xếp lại hệ thống báo chí TP.HCM, tám cơ quan báo chí dừng
              hoạt động theo mô hình cũ và các ấn phẩm giấy phát hành số cuối cùng ngày
              30/6/2026 — minh chứng gần nhất cho giai đoạn cạnh tranh của báo in:
            </p>
            <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
              {ceased.map((c) => (
                <li key={c} className="flex items-baseline gap-3 text-sm font-medium">
                  <span className="font-mono text-red">✕</span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8 border border-dashed border-red/70 bg-cream p-5">
              <p className="text-sm leading-relaxed md:text-[15px]">
                <span className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-red">
                  Đặc biệt —{" "}
                </span>
                <span className="font-serif text-lg font-bold">Báo Tuổi Trẻ</span> ngừng
                hẳn bản giấy sau hơn 50 năm phát hành: kể từ 01/7/2026, Tuổi Trẻ chỉ còn
                tồn tại dưới dạng báo điện tử — đúng trường hợp được nhấn mạnh trên lớp.
              </p>
            </div>
            <p className="mt-5 font-mono text-[10px] tracking-[0.18em] uppercase text-ink/45">
              Nguồn đối chiếu: ghi chú buổi học và tin báo chí tháng 6/2026
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
