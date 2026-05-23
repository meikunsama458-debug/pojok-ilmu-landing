import { MessageCircle, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Coming Soon",
    role: "Siswa Pojok Ilmu",
    message:
      "Testimoni siswa akan ditampilkan setelah kelas berjalan. Pojok Ilmu berkomitmen menghadirkan pengalaman belajar yang personal, nyaman, dan terarah.",
  },
  {
    name: "Coming Soon",
    role: "Orang Tua/Wali",
    message:
      "Cerita dari orang tua dan siswa akan ditambahkan setelah proses belajar berlangsung dan mendapat izin untuk ditampilkan.",
  },
  {
    name: "Coming Soon",
    role: "Program English & Public Speaking",
    message:
      "Setiap testimoni yang tampil nantinya akan berasal dari pengalaman belajar asli bersama Pojok Ilmu.",
  },
];

function Testimonials({ isDark }) {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="font-bold text-[#0073E3]">Testimoni</p>

        <h2
          className={
            isDark
              ? "mt-3 text-3xl font-black text-white md:text-5xl"
              : "mt-3 text-3xl font-black text-slate-950 md:text-5xl"
          }
        >
          Cerita belajar siswa akan hadir di sini.
        </h2>

        <p
          className={
            isDark
              ? "mt-5 leading-relaxed text-slate-300"
              : "mt-5 leading-relaxed text-[#5A6774]"
          }
        >
          Pojok Ilmu akan menampilkan testimoni asli dari siswa atau orang
          tua/wali setelah kelas berjalan dan mendapat izin untuk
          dipublikasikan.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className={
              isDark
                ? "rounded-[1.5rem] border border-slate-800 bg-slate-900 p-6"
                : "rounded-[1.5rem] bg-white p-6 shadow-sm"
            }
          >
            <div
              className={
                isDark
                  ? "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDCD00]/20 text-[#FDCD00]"
                  : "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0073E3]/10 text-[#0073E3]"
              }
            >
              <Quote size={26} />
            </div>

            <p
              className={
                isDark
                  ? "leading-relaxed text-slate-300"
                  : "leading-relaxed text-[#5A6774]"
              }
            >
              “{testimonial.message}”
            </p>

            <div className="mt-6">
              <h3
                className={
                  isDark ? "font-black text-white" : "font-black text-slate-950"
                }
              >
                {testimonial.name}
              </h3>

              <p className="mt-1 text-sm font-semibold text-[#0073E3]">
                {testimonial.role}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div
        className={
          isDark
            ? "mt-8 rounded-[1.5rem] border border-slate-800 bg-slate-900 p-6 text-center"
            : "mt-8 rounded-[1.5rem] bg-white p-6 text-center shadow-sm"
        }
      >
        <p className={isDark ? "text-slate-300" : "text-[#5A6774]"}>
          Mau jadi bagian dari cerita belajar pertama Pojok Ilmu?
        </p>

        <a
          href="#registration"
          className={
            isDark
              ? "mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#FDCD00] px-6 py-3 font-black text-[#014498] transition hover:bg-white"
              : "mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#0073E3] px-6 py-3 font-black text-white transition hover:bg-[#014498]"
          }
        >
          <MessageCircle size={19} />
          Daftar Sekarang
        </a>
      </div>
    </section>
  );
}

export default Testimonials;
