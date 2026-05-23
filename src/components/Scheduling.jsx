import { CalendarDays } from "lucide-react";

const schedules = [
  {
    type: "Privat",
    time: "Senin–Sabtu",
    note: "Jadwal fleksibel sesuai kesepakatan.",
  },
  {
    type: "Semi Privat",
    time: "2–3x per minggu",
    note: "Cocok untuk kelompok kecil dalam satu area.",
  },
  {
    type: "Online",
    time: "Sore / malam",
    note: "Belajar dari rumah melalui platform online.",
  },
];

function Scheduling({ isDark }) {
  return (
    <section id="scheduling" className="mx-auto max-w-6xl px-6 py-20">
      <div
        className={
          isDark
            ? "rounded-[2rem] border border-slate-800 bg-slate-900 p-8 shadow-xl shadow-blue-950/20 md:p-10"
            : "rounded-[2rem] bg-white p-8 shadow-xl shadow-blue-900/5 md:p-10"
        }
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold text-[#0073E3]">Scheduling</p>
            <h2
              className={
                isDark
                  ? "mt-3 text-3xl font-black text-white md:text-5xl"
                  : "mt-3 text-3xl font-black text-slate-950 md:text-5xl"
              }
            >
              Jadwal belajar fleksibel.
            </h2>
          </div>

          <div
            className={
              isDark
                ? "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FDCD00]/20 text-[#FDCD00]"
                : "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FDCD00]/20 text-[#014498]"
            }
          >
            <CalendarDays size={34} />
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {schedules.map((item) => (
            <div
              key={item.type}
              className={
                isDark
                  ? "rounded-2xl border border-slate-700 bg-slate-800 p-6"
                  : "rounded-2xl border border-slate-200 bg-[#FDFCF5] p-6"
              }
            >
              <h3
                className={
                  isDark
                    ? "text-xl font-black text-[#FDCD00]"
                    : "text-xl font-black text-[#014498]"
                }
              >
                {item.type}
              </h3>

              <p
                className={
                  isDark
                    ? "mt-2 font-bold text-white"
                    : "mt-2 font-bold text-slate-900"
                }
              >
                {item.time}
              </p>

              <p
                className={
                  isDark
                    ? "mt-3 leading-relaxed text-slate-300"
                    : "mt-3 leading-relaxed text-[#5A6774]"
                }
              >
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <p
          className={
            isDark
              ? "mt-8 rounded-2xl bg-[#0073E3]/20 p-5 text-sm leading-relaxed text-slate-200"
              : "mt-8 rounded-2xl bg-[#0073E3]/10 p-5 text-sm leading-relaxed text-[#014498]"
          }
        >
          Catatan: jadwal final akan ditentukan setelah konsultasi agar sesuai
          dengan kebutuhan siswa, orang tua, dan ketersediaan tutor.
        </p>
      </div>
    </section>
  );
}

export default Scheduling;
