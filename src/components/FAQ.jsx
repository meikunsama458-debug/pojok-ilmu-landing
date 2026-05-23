import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Apakah kelas bisa datang ke rumah?",
    answer:
      "Bisa. Pojok Ilmu menyediakan sistem home visit untuk area layanan tertentu, terutama Bumiayu dan sekitarnya.",
  },
  {
    question: "Apakah tersedia kelas online?",
    answer:
      "Tersedia. Semua program bisa dilakukan secara online agar siswa tetap bisa belajar dari rumah.",
  },
  {
    question: "Berapa durasi tiap pertemuan?",
    answer:
      "Durasi kelas dapat disesuaikan dengan program dan kebutuhan siswa. Detail durasi akan dikonfirmasi saat konsultasi.",
  },
  {
    question: "Apakah jadwal bisa fleksibel?",
    answer:
      "Bisa. Jadwal ditentukan berdasarkan kesepakatan antara siswa/orang tua dan tutor.",
  },
  {
    question: "Apakah materi mengikuti pelajaran sekolah?",
    answer:
      "Bisa. Materi dapat mengikuti kebutuhan sekolah, tugas, ujian, atau fokus khusus seperti speaking dan TOEFL basic.",
  },
  {
    question: "Bagaimana sistem pendaftarannya?",
    answer:
      "Calon siswa mengisi form pendaftaran, lalu Pojok Ilmu akan menghubungi melalui WhatsApp untuk konsultasi dan penentuan jadwal.",
  },
];

function FAQ({ isDark }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-bold text-[#0073E3]">FAQ</p>

          <h2
            className={
              isDark
                ? "mt-3 text-3xl font-black text-white md:text-5xl"
                : "mt-3 text-3xl font-black text-slate-950 md:text-5xl"
            }
          >
            Pertanyaan yang sering ditanyakan.
          </h2>

          <p
            className={
              isDark
                ? "mt-5 leading-relaxed text-slate-300"
                : "mt-5 leading-relaxed text-[#5A6774]"
            }
          >
            Beberapa informasi dasar sebelum mendaftar kelas di Pojok Ilmu.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={
                  isDark
                    ? "rounded-2xl border border-slate-800 bg-slate-900"
                    : "rounded-2xl bg-white shadow-sm"
                }
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={
                      isDark
                        ? "font-black text-white"
                        : "font-black text-slate-950"
                    }
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={
                      isOpen
                        ? "shrink-0 rotate-180 text-[#0073E3] transition"
                        : "shrink-0 text-[#0073E3] transition"
                    }
                  />
                </button>

                {isOpen && (
                  <p
                    className={
                      isDark
                        ? "px-6 pb-5 leading-relaxed text-slate-300"
                        : "px-6 pb-5 leading-relaxed text-[#5A6774]"
                    }
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
