import { Globe2, Home, MapPin } from "lucide-react";

const areas = [
  {
    title: "Home Visit",
    description:
      "Tutor datang ke rumah siswa sesuai area layanan dan kesepakatan jadwal.",
    icon: Home,
  },
  {
    title: "Area Bumiayu & Sekitarnya",
    description:
      "Layanan offline diprioritaskan untuk area Bumiayu dan sekitarnya.",
    icon: MapPin,
  },
  {
    title: "Online Class",
    description:
      "Untuk siswa di luar area home visit, kelas tetap tersedia secara online.",
    icon: Globe2,
  },
];

function ServiceArea({ isDark }) {
  return (
    <section id="service-area" className="mx-auto max-w-6xl px-6 py-20">
      <div
        className={
          isDark
            ? "rounded-[2rem] border border-slate-800 bg-slate-900 p-8 md:p-10"
            : "rounded-[2rem] bg-white p-8 shadow-xl shadow-blue-900/5 md:p-10"
        }
      >
        <div className="max-w-3xl">
          <p className="font-bold text-[#0073E3]">Area Layanan</p>

          <h2
            className={
              isDark
                ? "mt-3 text-3xl font-black text-white md:text-5xl"
                : "mt-3 text-3xl font-black text-slate-950 md:text-5xl"
            }
          >
            Belajar bisa dari rumah atau online.
          </h2>

          <p
            className={
              isDark
                ? "mt-5 leading-relaxed text-slate-300"
                : "mt-5 leading-relaxed text-[#5A6774]"
            }
          >
            Pojok Ilmu menyediakan kelas home visit untuk area tertentu dan
            kelas online untuk siswa yang ingin belajar lebih fleksibel.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <div
                key={area.title}
                className={
                  isDark
                    ? "rounded-2xl border border-slate-700 bg-slate-800 p-6"
                    : "rounded-2xl border border-slate-200 bg-[#FDFCF5] p-6"
                }
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0073E3]/10 text-[#0073E3]">
                  <Icon size={26} />
                </div>

                <h3
                  className={
                    isDark
                      ? "text-lg font-black text-[#FDCD00]"
                      : "text-lg font-black text-[#014498]"
                  }
                >
                  {area.title}
                </h3>

                <p
                  className={
                    isDark
                      ? "mt-3 leading-relaxed text-slate-300"
                      : "mt-3 leading-relaxed text-[#5A6774]"
                  }
                >
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
