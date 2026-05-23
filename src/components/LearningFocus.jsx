import {
  BookText,
  MessageSquareText,
  Mic,
  PenLine,
  SpellCheck,
  Trophy,
} from "lucide-react";

const focuses = [
  {
    title: "Grammar",
    description:
      "Memahami struktur kalimat Bahasa Inggris dengan cara yang lebih sederhana.",
    icon: BookText,
  },
  {
    title: "Vocabulary",
    description:
      "Menambah kosakata untuk kebutuhan sekolah, komunikasi, dan latihan harian.",
    icon: SpellCheck,
  },
  {
    title: "Speaking Practice",
    description:
      "Latihan berbicara agar siswa lebih berani dan tidak kaku saat menggunakan English.",
    icon: MessageSquareText,
  },
  {
    title: "Public Speaking",
    description:
      "Melatih keberanian, artikulasi, presentasi, dan cara menyampaikan ide.",
    icon: Mic,
  },
  {
    title: "School Support",
    description:
      "Membantu siswa memahami materi sekolah, tugas, dan persiapan ujian.",
    icon: PenLine,
  },
  {
    title: "TOEFL Basic",
    description:
      "Pengenalan dasar TOEFL untuk siswa yang ingin mulai belajar lebih serius.",
    icon: Trophy,
  },
];

function LearningFocus({ isDark }) {
  return (
    <section id="learning-focus" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="font-bold text-[#0073E3]">Materi Belajar</p>

        <h2
          className={
            isDark
              ? "mt-3 text-3xl font-black text-white md:text-5xl"
              : "mt-3 text-3xl font-black text-slate-950 md:text-5xl"
          }
        >
          Fokus belajar yang bisa disesuaikan dengan kebutuhan siswa.
        </h2>

        <p
          className={
            isDark
              ? "mt-5 leading-relaxed text-slate-300"
              : "mt-5 leading-relaxed text-[#5A6774]"
          }
        >
          Pojok Ilmu tidak hanya membantu siswa mengerjakan materi sekolah,
          tetapi juga membangun keberanian untuk memahami, berbicara, dan
          menyampaikan ide.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {focuses.map((focus) => {
          const Icon = focus.icon;

          return (
            <article
              key={focus.title}
              className={
                isDark
                  ? "rounded-[1.5rem] border border-slate-800 bg-slate-900 p-6 transition hover:border-[#0073E3]"
                  : "rounded-[1.5rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10"
              }
            >
              <div
                className={
                  isDark
                    ? "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDCD00]/20 text-[#FDCD00]"
                    : "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0073E3]/10 text-[#0073E3]"
                }
              >
                <Icon size={26} />
              </div>

              <h3
                className={
                  isDark
                    ? "text-lg font-black text-white"
                    : "text-lg font-black text-slate-950"
                }
              >
                {focus.title}
              </h3>

              <p
                className={
                  isDark
                    ? "mt-3 leading-relaxed text-slate-300"
                    : "mt-3 leading-relaxed text-[#5A6774]"
                }
              >
                {focus.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default LearningFocus;
