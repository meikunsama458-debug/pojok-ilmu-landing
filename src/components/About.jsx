function About({ isDark }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="font-bold text-[#0073E3]">Tentang Pojok Ilmu</p>
          <h2
            className={
              isDark
                ? "mt-3 text-3xl font-black text-white md:text-5xl"
                : "mt-3 text-3xl font-black text-slate-950 md:text-5xl"
            }
          >
            Ruang kecil untuk ilmu yang tumbuh besar.
          </h2>
        </div>

        <div
          className={
            isDark
              ? "rounded-[2rem] border border-slate-800 bg-slate-900 p-8 shadow-sm"
              : "rounded-[2rem] bg-white p-8 shadow-sm"
          }
        >
          <p
            className={
              isDark
                ? "text-lg leading-relaxed text-slate-300"
                : "text-lg leading-relaxed text-[#5A6774]"
            }
          >
            Pojok Ilmu adalah tempat belajar Bahasa Inggris dan Public Speaking
            yang dirancang untuk membantu siswa memahami materi, berani
            berbicara, dan membangun rasa percaya diri. Pembelajaran dilakukan
            secara privat, semi privat, maupun online sesuai kebutuhan siswa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
