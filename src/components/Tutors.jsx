import { BadgeCheck, BookOpen, MessageCircle, UserRound } from "lucide-react";

const tutors = [
  {
    name: "Mei Teguh",
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
];

function Tutors({ isDark }) {
  return (
    <section id="tutor" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
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
          menghadirkan tutor yang siap membantu siswa belajar dengan pendekatan
          yang personal, nyaman, dan terarah.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tutors.map((tutor) => (
          <article
            key={tutor.name}
            className={
              isDark
                ? "overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-xl shadow-blue-950/20 transition hover:-translate-y-1 hover:border-[#0073E3]"
                : "overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-blue-900/5 transition hover:-translate-y-1 hover:shadow-blue-900/10"
            }
          >
            <div
              className={isDark ? "h-72 bg-slate-800" : "h-72 bg-[#0073E3]/10"}
            >
              {tutor.photo ? (
                <img
                  src={tutor.photo}
                  alt={tutor.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[#0073E3]">
                  <UserRound size={72} />
                </div>
              )}
            </div>

            <div className="p-7">
              <h3
                className={
                  isDark
                    ? "text-2xl font-black text-white"
                    : "text-2xl font-black text-slate-950"
                }
              >
                {tutor.name}
              </h3>

              <p className="mt-1 font-bold text-[#0073E3]">{tutor.role}</p>

              <p
                className={
                  isDark
                    ? "mt-4 leading-relaxed text-slate-300"
                    : "mt-4 leading-relaxed text-[#5A6774]"
                }
              >
                {tutor.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {tutor.focus.map((item) => (
                  <span
                    key={item}
                    className={
                      isDark
                        ? "rounded-full bg-slate-800 px-4 py-2 text-sm font-bold text-[#FDCD00]"
                        : "rounded-full bg-[#FDFCF5] px-4 py-2 text-sm font-bold text-[#014498]"
                    }
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                {tutor.highlights.map((highlight) => {
                  const Icon = highlight.icon;

                  return (
                    <div
                      key={highlight.text}
                      className={
                        isDark
                          ? "flex items-center gap-3 rounded-2xl bg-slate-800 p-4"
                          : "flex items-center gap-3 rounded-2xl bg-[#FDFCF5] p-4"
                      }
                    >
                      <Icon className="shrink-0 text-[#0073E3]" size={22} />

                      <span
                        className={
                          isDark
                            ? "font-semibold text-slate-200"
                            : "font-semibold text-slate-700"
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
