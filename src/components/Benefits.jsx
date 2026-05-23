import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Materi disesuaikan dengan kebutuhan siswa",
  "Tutor komunikatif dan mudah diajak berdiskusi",
  "Fokus pada pemahaman, bukan sekadar hafalan",
  "Latihan speaking dan confidence building",
  "Jadwal fleksibel berdasarkan kesepakatan",
  "Tersedia kelas privat, semi privat, dan online",
];

function Benefits({ isDark }) {
  return (
    <section
      id="benefits"
      className={
        isDark
          ? "bg-slate-900 py-20 text-white transition-colors duration-300"
          : "bg-[#0073E3] py-20 text-white transition-colors duration-300"
      }
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-bold text-[#FDCD00]">Keunggulan</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Belajar dibuat lebih dekat, jelas, dan percaya diri.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className={
                isDark
                  ? "flex items-start gap-4 rounded-2xl border border-slate-700 bg-slate-800/70 p-5"
                  : "flex items-start gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur"
              }
            >
              <CheckCircle2
                className="mt-1 shrink-0 text-[#FDCD00]"
                size={24}
              />
              <p className="font-semibold leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
