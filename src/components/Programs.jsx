import { BookOpen, GraduationCap, Laptop, Mic, Home } from "lucide-react";

const programs = [
  {
    title: "SD",
    description:
      "Program belajar untuk siswa Sekolah Dasar dengan pendekatan yang santai, sabar, dan mudah dipahami.",
    homeVisit: "Rp 400.000",
    online: "Rp 320.000",
    icon: BookOpen,
  },
  {
    title: "SMP",
    description:
      "Program untuk membantu siswa SMP memahami materi Bahasa Inggris, grammar, vocabulary, dan speaking dasar.",
    homeVisit: "Rp 500.000",
    online: "Rp 400.000",
    icon: GraduationCap,
  },
  {
    title: "SMA",
    description:
      "Program untuk siswa SMA yang ingin memperkuat pemahaman Bahasa Inggris, speaking, dan persiapan akademik.",
    homeVisit: "Rp 650.000",
    online: "Rp 500.000",
    icon: Laptop,
  },
  {
    title: "Intensif / Speaking / TOEFL Class",
    description:
      "Kelas khusus untuk speaking, public speaking, TOEFL preparation, atau kebutuhan belajar intensif lainnya.",
    homeVisit: "Mulai Rp 115.000",
    online: "Mulai Rp 115.000",
    icon: Mic,
    featured: true,
  },
];

function Programs({ isDark }) {
  return (
    <section id="programs" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="font-bold text-[#0073E3]">Program Kelas</p>

        <h2
          className={
            isDark
              ? "mt-3 text-3xl font-black text-white md:text-5xl"
              : "mt-3 text-3xl font-black text-slate-950 md:text-5xl"
          }
        >
          Pilih program belajar sesuai jenjang dan kebutuhanmu.
        </h2>

        <p
          className={
            isDark
              ? "mt-5 max-w-2xl leading-relaxed text-slate-300"
              : "mt-5 max-w-2xl leading-relaxed text-[#5A6774]"
          }
        >
          Semua program tersedia dalam sistem belajar offline home visit dan
          online, sehingga siswa bisa memilih metode belajar yang paling nyaman.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {programs.map((program) => {
          const Icon = program.icon;

          return (
            <article
              key={program.title}
              className={
                isDark
                  ? program.featured
                    ? "relative overflow-hidden rounded-[1.5rem] border border-[#FDCD00]/40 bg-slate-900 p-7 shadow-xl shadow-yellow-950/10 transition hover:-translate-y-1"
                    : "relative overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-900 p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#0073E3]"
                  : program.featured
                    ? "relative overflow-hidden rounded-[1.5rem] border border-[#FDCD00] bg-white p-7 shadow-xl shadow-yellow-900/10 transition hover:-translate-y-1"
                    : "relative overflow-hidden rounded-[1.5rem] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10"
              }
            >
              {program.featured && (
                <div className="absolute right-5 top-5 rounded-full bg-[#FDCD00] px-4 py-1 text-xs font-black text-[#014498]">
                  Special Class
                </div>
              )}

              <div
                className={
                  isDark
                    ? "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0073E3]/20 text-[#FDCD00]"
                    : "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0073E3]/10 text-[#0073E3]"
                }
              >
                <Icon size={30} />
              </div>

              <h3
                className={
                  isDark
                    ? "text-2xl font-black text-white"
                    : "text-2xl font-black text-slate-950"
                }
              >
                {program.title}
              </h3>

              <p
                className={
                  isDark
                    ? "mt-3 leading-relaxed text-slate-300"
                    : "mt-3 leading-relaxed text-[#5A6774]"
                }
              >
                {program.description}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div
                  className={
                    isDark
                      ? "rounded-2xl border border-slate-700 bg-slate-800 p-5"
                      : "rounded-2xl border border-slate-200 bg-[#FDFCF5] p-5"
                  }
                >
                  <div className="flex items-center gap-2">
                    <Home size={18} className="text-[#0073E3]" />
                    <p
                      className={
                        isDark
                          ? "text-sm font-bold text-slate-200"
                          : "text-sm font-bold text-slate-700"
                      }
                    >
                      Home Visit
                    </p>
                  </div>

                  <p
                    className={
                      isDark
                        ? "mt-3 text-2xl font-black text-[#FDCD00]"
                        : "mt-3 text-2xl font-black text-[#014498]"
                    }
                  >
                    {program.homeVisit}
                  </p>
                </div>

                <div
                  className={
                    isDark
                      ? "rounded-2xl border border-slate-700 bg-slate-800 p-5"
                      : "rounded-2xl border border-slate-200 bg-[#FDFCF5] p-5"
                  }
                >
                  <div className="flex items-center gap-2">
                    <Laptop size={18} className="text-[#0073E3]" />
                    <p
                      className={
                        isDark
                          ? "text-sm font-bold text-slate-200"
                          : "text-sm font-bold text-slate-700"
                      }
                    >
                      Online
                    </p>
                  </div>

                  <p
                    className={
                      isDark
                        ? "mt-3 text-2xl font-black text-[#FDCD00]"
                        : "mt-3 text-2xl font-black text-[#014498]"
                    }
                  >
                    {program.online}
                  </p>
                </div>
              </div>

              <p
                className={
                  isDark
                    ? "mt-5 text-xs leading-relaxed text-slate-400"
                    : "mt-5 text-xs leading-relaxed text-[#5A6774]"
                }
              >
                *Harga dapat disesuaikan berdasarkan kebutuhan belajar, lokasi,
                jumlah pertemuan, dan kesepakatan jadwal.
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Programs;
