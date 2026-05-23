import { MessageCircle } from "lucide-react";

function CTA({ isDark }) {
  const message = encodeURIComponent(
    "Halo Pojok Ilmu, saya ingin mendaftar/konsultasi kelas.",
  );

  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 py-20">
      <div
        className={
          isDark
            ? "relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 p-8 text-center text-white md:p-14"
            : "relative overflow-hidden rounded-[2rem] bg-[#014498] p-8 text-center text-white md:p-14"
        }
      >
        <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#0073E3] opacity-40 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#FDCD00] opacity-40 blur-3xl" />

        <div className="relative">
          <h2 className="text-3xl font-black md:text-5xl">
            Siap mulai belajar di Pojok Ilmu?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-blue-50">
            Konsultasikan kebutuhan belajar siswa, pilih program yang cocok,
            lalu mulai perjalanan belajar yang lebih percaya diri.
          </p>

          <a
            href={`https://wa.me/6285712556125?text=${message}`}
            target="_blank"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#FDCD00] px-7 py-3 font-black text-[#014498] transition hover:bg-white"
          >
            <MessageCircle size={20} />
            Hubungi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
