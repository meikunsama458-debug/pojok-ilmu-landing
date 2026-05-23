import { MessageCircle, Sparkles } from "lucide-react";

function Hero({ isDark }) {
  const message = encodeURIComponent(
    "Halo Pojok Ilmu, saya ingin bertanya tentang pendaftaran kelas.",
  );

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
      <div>
        <div
          className={
            isDark
              ? "mb-5 inline-flex items-center gap-2 rounded-full bg-[#FDCD00]/20 px-4 py-2 text-sm font-bold text-[#FDCD00]"
              : "mb-5 inline-flex items-center gap-2 rounded-full bg-[#FDCD00]/25 px-4 py-2 text-sm font-bold text-[#014498]"
          }
        >
          <Sparkles size={18} />
          Belajar • Berani • Berbicara
        </div>

        <h1
          className={
            isDark
              ? "text-4xl font-black leading-tight tracking-tight text-white md:text-6xl"
              : "text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl"
          }
        >
          Bimbel Bahasa Inggris & Public Speaking yang lebih personal.
        </h1>

        <p
          className={
            isDark
              ? "mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
              : "mt-6 max-w-xl text-lg leading-relaxed text-[#5A6774]"
          }
        >
          Pojok Ilmu membantu siswa belajar dengan cara yang santai, terarah,
          dan percaya diri melalui kelas privat, semi privat, dan online.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`https://wa.me/6285712556125?text=${message}`}
            target="_blank"
            className={
              isDark
                ? "inline-flex items-center justify-center gap-2 rounded-full bg-[#FDCD00] px-6 py-3 font-bold text-[#014498] shadow-lg transition hover:bg-white"
                : "inline-flex items-center justify-center gap-2 rounded-full bg-[#0073E3] px-6 py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#014498]"
            }
          >
            <MessageCircle size={20} />
            Konsultasi Gratis
          </a>

          <a
            href="#programs"
            className={
              isDark
                ? "inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 font-bold text-white transition hover:border-[#FDCD00] hover:text-[#FDCD00]"
                : "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 transition hover:border-[#0073E3] hover:text-[#0073E3]"
            }
          >
            Lihat Program
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-[#FDCD00]/40 blur-2xl" />
        <div className="absolute -bottom-4 -left-4 h-40 w-40 rounded-full bg-[#0073E3]/25 blur-2xl" />

        <div
          className={
            isDark
              ? "relative rounded-[2rem] border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-blue-950/30"
              : "relative rounded-[2rem] bg-white p-8 shadow-2xl shadow-blue-900/10"
          }
        >
          <img
            src="/pojok-ilmu-logo.png"
            alt="Pojok Ilmu"
            className="mx-auto mb-8 w-64"
          />

          <div className="grid gap-4">
            <div
              className={
                isDark
                  ? "rounded-2xl bg-slate-800 p-5"
                  : "rounded-2xl bg-[#FDFCF5] p-5"
              }
            >
              <p className="text-sm font-bold text-[#0073E3]">English Class</p>
              <p
                className={
                  isDark ? "mt-1 text-slate-300" : "mt-1 text-[#5A6774]"
                }
              >
                Grammar, vocabulary, speaking, dan confidence building.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0073E3] p-5 text-white">
              <p className="text-sm font-bold text-[#FDCD00]">
                Public Speaking
              </p>
              <p className="mt-1 text-blue-50">
                Latihan berbicara, presentasi, dan komunikasi yang jelas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
