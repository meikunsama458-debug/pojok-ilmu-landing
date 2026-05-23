import {
  ClipboardCheck,
  MessagesSquare,
  PencilRuler,
  TrendingUp,
} from "lucide-react";

const methods = [
  {
    title: "Assessment Awal",
    description:
      "Siswa akan dilihat kebutuhannya terlebih dahulu agar materi lebih tepat sasaran.",
    icon: ClipboardCheck,
  },
  {
    title: "Materi Personal",
    description:
      "Pembelajaran disesuaikan dengan level, target, dan kendala belajar siswa.",
    icon: PencilRuler,
  },
  {
    title: "Latihan Aktif",
    description:
      "Siswa diajak aktif menjawab, berbicara, berdiskusi, dan mencoba langsung.",
    icon: MessagesSquare,
  },
  {
    title: "Evaluasi Berkala",
    description:
      "Perkembangan siswa diperhatikan agar proses belajar tetap terarah.",
    icon: TrendingUp,
  },
];

function LearningMethod({ isDark }) {
  return (
    <section id="method" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="font-bold text-[#0073E3]">Metode Belajar</p>

        <h2
          className={
            isDark
              ? "mt-3 text-3xl font-black text-white md:text-5xl"
              : "mt-3 text-3xl font-black text-slate-950 md:text-5xl"
          }
        >
          Belajar bukan cuma mengerjakan soal, tapi membangun pemahaman.
        </h2>

        <p
          className={
            isDark
              ? "mt-5 leading-relaxed text-slate-300"
              : "mt-5 leading-relaxed text-[#5A6774]"
          }
        >
          Pojok Ilmu menggunakan pendekatan belajar yang personal, santai, tapi
          tetap terarah agar siswa lebih nyaman memahami materi.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {methods.map((method, index) => {
          const Icon = method.icon;

          return (
            <article
              key={method.title}
              className={
                isDark
                  ? "rounded-[1.5rem] border border-slate-800 bg-slate-900 p-6 transition hover:border-[#0073E3]"
                  : "rounded-[1.5rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10"
              }
            >
              <p className="text-sm font-black text-[#FDCD00]">0{index + 1}</p>

              <div
                className={
                  isDark
                    ? "mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDCD00]/20 text-[#FDCD00]"
                    : "mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0073E3]/10 text-[#0073E3]"
                }
              >
                <Icon size={26} />
              </div>

              <h3
                className={
                  isDark
                    ? "mt-5 text-lg font-black text-white"
                    : "mt-5 text-lg font-black text-slate-950"
                }
              >
                {method.title}
              </h3>

              <p
                className={
                  isDark
                    ? "mt-3 text-sm leading-relaxed text-slate-300"
                    : "mt-3 text-sm leading-relaxed text-[#5A6774]"
                }
              >
                {method.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default LearningMethod;
