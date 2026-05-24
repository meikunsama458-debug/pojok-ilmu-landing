import { useRef } from "react";
import {
  BadgeCheck,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  UserRound,
} from "lucide-react";

const tutors = [
  {
    name: "Mei Teguh Firmansyah",
    role: "English & Public Speaking Tutor",
    photo: "/tutors/mei-teguh.png",
    description:
      "Membantu siswa memahami Bahasa Inggris dengan pendekatan personal, komunikatif, dan mudah dipahami.",
    focus: ["Grammar", "Speaking", "Public Speaking"],
    highlights: [
      {
        icon: BadgeCheck,
        text: "Pendekatan belajar personal",
      },
      {
        icon: BookOpen,
        text: "Academic support",
      },
      {
        icon: MessageCircle,
        text: "Speaking confidence",
      },
    ],
  },
  {
    name: "Ivan Rakhmansyah, S.Pd",
    role: "English Tutor",
    photo: "/tutors/ivan-rakhmansyah.png",
    description:
      "Membantu siswa memahami materi Bahasa Inggris sekolah dengan cara yang sabar, jelas, dan terarah.",
    focus: ["SD", "SMP", "Vocabulary"],
    highlights: [
      {
        icon: BadgeCheck,
        text: "Pendampingan belajar personal",
      },
      {
        icon: BookOpen,
        text: "Materi sekolah",
      },
      {
        icon: MessageCircle,
        text: "Komunikatif dengan siswa",
      },
    ],
  },
  {
    name: "Ramli, S.Pd",
    role: "Academic Support Tutor",
    photo: "/tutors/ramli.png",
    description:
      "Fokus membantu siswa mengerjakan pemahaman dasar, tugas sekolah, dan persiapan ujian.",
    focus: ["School Support", "Exam Prep", "Basic English"],
    highlights: [
      {
        icon: BadgeCheck,
        text: "Belajar dari dasar",
      },
      {
        icon: BookOpen,
        text: "Persiapan ujian",
      },
      {
        icon: MessageCircle,
        text: "Diskusi aktif",
      },
    ],
  },
  {
    name: "Fadhilla Cahya Rahmawati, S.Pd",
    role: "Speaking & Confidence Tutor",
    photo: "/tutors/fadilla-cahya.png",
    description:
      "Membantu siswa berlatih speaking, pronunciation, public speaking, dan membangun rasa percaya diri.",
    focus: ["Speaking", "Pronunciation", "Confidence"],
    highlights: [
      {
        icon: BadgeCheck,
        text: "Latihan speaking aktif",
      },
      {
        icon: BookOpen,
        text: "Public speaking basic",
      },
      {
        icon: MessageCircle,
        text: "Confidence building",
      },
    ],
  },
  {
    name: "Arfa Rista Caniago, S.Pd",
    role: "English Tutor",
    photo: "tutors/arfa-rista.png",
    description:
      "Membantu siswa belajar dengan pendekatan yang nyaman, sabar, dan menyesuaikan kebutuhan belajar siswa.",
    focus: ["English", "Practice", "Support"],
    highlights: [
      {
        icon: BadgeCheck,
        text: "Belajar terarah",
      },
      {
        icon: BookOpen,
        text: "Academic support",
      },
      {
        icon: MessageCircle,
        text: "Komunikatif",
      },
    ],
  },
];

function Tutors({ isDark }) {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  return (
    <section id="tutor" className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl text-left">
          <p className="font-bold text-[#0073E3]">Tim Tutor</p>

          <h2
            className={
              isDark
                ? "mt-3 text-3xl font-black text-white md:text-5xl"
                : "mt-3 text-3xl font-black text-slate-950 md:text-5xl"
            }
          >
            Belajar bersama tutor yang memahami kebutuhan siswa.
          </h2>

          <p
            className={
              isDark
                ? "mt-5 leading-relaxed text-slate-300"
                : "mt-5 leading-relaxed text-[#5A6774]"
            }
          >
            Setiap siswa punya cara belajar yang berbeda. Karena itu, Pojok Ilmu
            menghadirkan tutor yang siap membantu siswa belajar dengan
            pendekatan yang personal, nyaman, dan terarah.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scrollSlider("left")}
            className={
              isDark
                ? "flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white transition hover:border-[#FDCD00] hover:text-[#FDCD00]"
                : "flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#0073E3] hover:text-[#0073E3]"
            }
            aria-label="Geser tutor ke kiri"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={() => scrollSlider("right")}
            className={
              isDark
                ? "flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white transition hover:border-[#FDCD00] hover:text-[#FDCD00]"
                : "flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#0073E3] hover:text-[#0073E3]"
            }
            aria-label="Geser tutor ke kanan"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-5"
      >
        {tutors.map((tutor) => (
          <article
            key={tutor.name}
            className={
              isDark
                ? "min-w-[280px] snap-start overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 text-left shadow-xl shadow-blue-950/20 transition hover:-translate-y-1 hover:border-[#0073E3] sm:min-w-[340px] lg:min-w-[360px]"
                : "min-w-[280px] snap-start overflow-hidden rounded-[2rem] bg-white text-left shadow-xl shadow-blue-900/5 transition hover:-translate-y-1 hover:shadow-blue-900/10 sm:min-w-[340px] lg:min-w-[360px]"
            }
          >
            <div
              className={
                isDark
                  ? "aspect-[4/5] bg-slate-800"
                  : "aspect-[4/5] bg-[#0073E3]/10"
              }
            >
              {tutor.photo ? (
                <img
                  src={tutor.photo}
                  alt={tutor.name}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[#0073E3]">
                  <UserRound size={72} />
                </div>
              )}
            </div>

            <div className="p-6">
              <h3
                className={
                  isDark
                    ? "text-xl font-black text-white"
                    : "text-xl font-black text-slate-950"
                }
              >
                {tutor.name}
              </h3>

              <p className="mt-1 text-sm font-bold text-[#0073E3]">
                {tutor.role}
              </p>

              <p
                className={
                  isDark
                    ? "mt-4 text-sm leading-relaxed text-slate-300"
                    : "mt-4 text-sm leading-relaxed text-[#5A6774]"
                }
              >
                {tutor.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {tutor.focus.map((item) => (
                  <span
                    key={item}
                    className={
                      isDark
                        ? "rounded-full bg-slate-800 px-3 py-1.5 text-xs font-bold text-[#FDCD00]"
                        : "rounded-full bg-[#FDFCF5] px-3 py-1.5 text-xs font-bold text-[#014498]"
                    }
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid gap-3">
                {tutor.highlights.map((highlight) => {
                  const Icon = highlight.icon;

                  return (
                    <div
                      key={highlight.text}
                      className={
                        isDark
                          ? "flex items-center gap-3 rounded-2xl bg-slate-800 p-3"
                          : "flex items-center gap-3 rounded-2xl bg-[#FDFCF5] p-3"
                      }
                    >
                      <Icon className="shrink-0 text-[#0073E3]" size={20} />

                      <span
                        className={
                          isDark
                            ? "text-sm font-semibold text-slate-200"
                            : "text-sm font-semibold text-slate-700"
                        }
                      >
                        {highlight.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Tutors;
