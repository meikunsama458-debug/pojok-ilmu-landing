import { useState } from "react";
import { CheckCircle2, ClipboardList, MessageCircle, Send } from "lucide-react";

const termsSummary = [
  {
    number: "01",
    title: "Sistem Belajar",
    description:
      "Kelas tersedia secara home visit, semi privat, atau online sesuai program yang dipilih.",
  },
  {
    number: "02",
    title: "Jadwal Kelas",
    description:
      "Jadwal ditentukan berdasarkan kesepakatan antara tutor dan siswa/orang tua/wali.",
  },
  {
    number: "03",
    title: "Pembayaran",
    description:
      "Pembayaran dilakukan di awal periode atau sebelum kelas dimulai, dan biaya yang sudah dibayarkan tidak dapat dikembalikan.",
  },
  {
    number: "04",
    title: "Reschedule",
    description:
      "Perubahan jadwal wajib dikonfirmasi minimal H-1. Tanpa konfirmasi, kelas dianggap hangus.",
  },
  {
    number: "05",
    title: "Lokasi & Kenyamanan",
    description:
      "Home visit dilakukan di lokasi yang disepakati. Siswa diharapkan menjaga etika dan suasana belajar yang kondusif.",
  },
  {
    number: "06",
    title: "Persetujuan",
    description:
      "Dengan mendaftar, siswa/orang tua/wali menyetujui Syarat & Ketentuan Pojok Ilmu.",
  },
];

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeSL4c-QpZHdnMzjp8u1KnzphH9RC2dPSZ8_8PvcrzM_3Vbbw/formResponse";

const googleFormFields = {
  agreement: "entry.86161339",
  name: "entry.865556410",
  whatsapp: "entry.819718953",
  studentClass: "entry.394875850",
  location: "entry.695607141",
  parentName: "entry.667877564",
  note: "entry.1023618802",
  learningGoal: "entry.2029924862",
  schedule: "entry.476013789",
  program: "entry.1041201772",
};

function Registration({ isDark }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputClass = isDark
    ? "w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#FDCD00]"
    : "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0073E3]";

  const labelClass = isDark
    ? "mb-2 block text-sm font-bold text-slate-200"
    : "mb-2 block text-sm font-bold text-slate-700";

  return (
    <section id="registration" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="font-bold text-[#0073E3]">Pendaftaran</p>

        <h2
          className={
            isDark
              ? "mt-3 text-3xl font-black text-white md:text-5xl"
              : "mt-3 text-3xl font-black text-slate-950 md:text-5xl"
          }
        >
          Daftar kelas Pojok Ilmu.
        </h2>

        <p
          className={
            isDark
              ? "mt-5 leading-relaxed text-slate-300"
              : "mt-5 leading-relaxed text-[#5A6774]"
          }
        >
          Baca ringkasan ketentuan, isi form pendaftaran, lalu Pojok Ilmu akan
          menghubungi melalui WhatsApp untuk konsultasi program dan jadwal.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-5">
            <p className="font-bold text-[#0073E3]">Ringkasan S&K</p>

            <h3
              className={
                isDark
                  ? "mt-2 text-2xl font-black text-white"
                  : "mt-2 text-2xl font-black text-slate-950"
              }
            >
              Ketentuan penting sebelum mendaftar.
            </h3>

            <p
              className={
                isDark
                  ? "mt-3 text-sm leading-relaxed text-slate-300"
                  : "mt-3 text-sm leading-relaxed text-[#5A6774]"
              }
            >
              Ringkasan ini berisi poin utama yang perlu dipahami sebelum
              mengirim form pendaftaran.
            </p>
          </div>

          <div className="grid gap-4">
            {termsSummary.map((term) => (
              <div
                key={term.number}
                className={
                  isDark
                    ? "rounded-[1.5rem] border border-slate-800 bg-slate-900 p-6"
                    : "rounded-[1.5rem] bg-white p-6 shadow-sm"
                }
              >
                <p className="text-3xl font-black text-[#FDCD00]">
                  {term.number}
                </p>

                <h3
                  className={
                    isDark
                      ? "mt-4 text-lg font-black text-[#FDCD00]"
                      : "mt-4 text-lg font-black text-[#014498]"
                  }
                >
                  {term.title}
                </h3>

                <p
                  className={
                    isDark
                      ? "mt-2 text-sm leading-relaxed text-slate-300"
                      : "mt-2 text-sm leading-relaxed text-[#5A6774]"
                  }
                >
                  {term.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={
            isDark
              ? "rounded-[2rem] border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-blue-950/20 md:p-8"
              : "rounded-[2rem] bg-white p-6 shadow-xl shadow-blue-900/5 md:p-8"
          }
        >
          <div className="mb-6 flex items-center gap-3">
            <div
              className={
                isDark
                  ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDCD00]/20 text-[#FDCD00]"
                  : "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0073E3]/10 text-[#0073E3]"
              }
            >
              <ClipboardList size={26} />
            </div>

            <div>
              <h3
                className={
                  isDark
                    ? "text-xl font-black text-white"
                    : "text-xl font-black text-slate-950"
                }
              >
                Form Pendaftaran
              </h3>

              <p
                className={
                  isDark ? "text-sm text-slate-400" : "text-sm text-[#5A6774]"
                }
              >
                Data akan masuk ke Google Form Pojok Ilmu.
              </p>
            </div>
          </div>

          {isSubmitted && (
            <div
              className={
                isDark
                  ? "mb-6 flex gap-3 rounded-2xl border border-green-700 bg-green-950/40 p-4 text-green-200"
                  : "mb-6 flex gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800"
              }
            >
              <CheckCircle2 className="mt-0.5 shrink-0" size={22} />
              <div>
                <p className="font-black">Pendaftaran berhasil dikirim!</p>
                <p className="mt-1 text-sm leading-relaxed">
                  Tim Pojok Ilmu akan menghubungi kamu melalui WhatsApp untuk
                  konfirmasi program dan jadwal.
                </p>
              </div>
            </div>
          )}

          <iframe
            name="hiddenGoogleForm"
            title="hiddenGoogleForm"
            className="hidden"
          />

          <form
            action={GOOGLE_FORM_ACTION}
            method="POST"
            target="hiddenGoogleForm"
            className="grid gap-5"
            onSubmit={() => {
              setTimeout(() => {
                setIsSubmitted(true);
              }, 500);
            }}
          >
            <input type="hidden" name="pageHistory" value="0" />

            <div>
              <label className={labelClass}>Nama Lengkap Siswa</label>
              <input
                name={googleFormFields.name}
                type="text"
                required
                placeholder="Contoh: Ahmad Rizky"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Nomor WhatsApp</label>
              <input
                name={googleFormFields.whatsapp}
                type="tel"
                required
                placeholder="Contoh: 081234567890"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Nama Orang Tua / Wali</label>
              <input
                name={googleFormFields.parentName}
                type="text"
                required
                placeholder="Contoh: Bapak/Ibu ..."
                className={inputClass}
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass}>Jenjang / Kelas</label>
                <input
                  name={googleFormFields.studentClass}
                  type="text"
                  required
                  placeholder="Contoh: Kelas 8 SMP"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Domisili</label>
                <input
                  name={googleFormFields.location}
                  type="text"
                  required
                  placeholder="Contoh: Bumiayu"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Program yang Dipilih</label>
              <select
                name={googleFormFields.program}
                required
                className={inputClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Pilih program
                </option>
                <option value="Private Bundling SD Home Visit">
                  Private Bundling SD Home Visit
                </option>
                <option value="Private Bundling SD Online">
                  Private Bundling SD Online
                </option>
                <option value="Private Bundling SMP Home Visit">
                  Private Bundling SMP Home Visit
                </option>
                <option value="Private Bundling SMP Online">
                  Private Bundling SMP Online
                </option>
                <option value="Private Bundling SMA Home Visit">
                  Private Bundling SMA Home Visit
                </option>
                <option value="Private Bundling SMA Online">
                  Private Bundling SMA Online
                </option>
                <option value="Intensif / Speaking / TOEFL Class">
                  Intensif / Speaking / TOEFL Class
                </option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Tujuan Belajar</label>
              <select
                name={googleFormFields.learningGoal}
                required
                className={inputClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Pilih tujuan belajar
                </option>
                <option value="Belajar Dari Dasar">Belajar Dari Dasar</option>
                <option value="Meningkatkan Nilai Sekolah">
                  Meningkatkan Nilai Sekolah
                </option>
                <option value="Latihan Speaking">Latihan Speaking</option>
                <option value="Persiapan Ujian">Persiapan Ujian</option>
                <option value="TOEFL Preparation">TOEFL Preparation</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Preferensi Jadwal</label>
              <select
                name={googleFormFields.schedule}
                required
                className={inputClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Pilih hari
                </option>
                <option value="Senin">Senin</option>
                <option value="Selasa">Selasa</option>
                <option value="Rabu">Rabu</option>
                <option value="Kamis">Kamis</option>
                <option value="Jumat">Jumat</option>
                <option value="Sabtu">Sabtu</option>
                <option value="Minggu">Minggu</option>
                <option value="Fleksibel">Fleksibel</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Catatan Tambahan</label>
              <textarea
                name={googleFormFields.note}
                rows="4"
                placeholder="Tulis kebutuhan belajar, target, kendala siswa, atau preferensi jam belajar."
                className={inputClass}
              />
            </div>

            <div
              className={
                isDark
                  ? "rounded-2xl border border-slate-700 bg-slate-800 p-4"
                  : "rounded-2xl border border-slate-200 bg-[#FDFCF5] p-4"
              }
            >
              <label
                className={
                  isDark
                    ? "flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                    : "flex items-start gap-3 text-sm leading-relaxed text-[#5A6774]"
                }
              >
                <input
                  type="checkbox"
                  name={googleFormFields.agreement}
                  value="Dengan Mencentang Tombol Ini, Saya Menerima dan Setuju Terhadap S&K Yang Berlaku"
                  required
                  className="mt-1 h-4 w-4 accent-[#0073E3]"
                />

                <span>
                  Saya telah membaca ringkasan S&K di samping, memahami, dan
                  menyetujui Syarat & Ketentuan Pojok Ilmu yang berlaku.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className={
                isDark
                  ? "inline-flex items-center justify-center gap-2 rounded-full bg-[#FDCD00] px-6 py-3 font-black text-[#014498] transition hover:bg-white"
                  : "inline-flex items-center justify-center gap-2 rounded-full bg-[#0073E3] px-6 py-3 font-black text-white transition hover:bg-[#014498]"
              }
            >
              <Send size={19} />
              Kirim Pendaftaran
            </button>

            <p
              className={
                isDark
                  ? "text-center text-xs leading-relaxed text-slate-500"
                  : "text-center text-xs leading-relaxed text-[#5A6774]"
              }
            >
              Data yang dikirim hanya digunakan untuk kebutuhan pendaftaran dan
              konsultasi kelas Pojok Ilmu.
            </p>

            <a
              href={`https://wa.me/6285712556125?text=${encodeURIComponent(
                "Halo Pojok Ilmu, saya ingin konsultasi dulu sebelum mendaftar kelas.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className={
                isDark
                  ? "inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-300 transition hover:text-[#FDCD00]"
                  : "inline-flex items-center justify-center gap-2 text-sm font-bold text-[#5A6774] transition hover:text-[#0073E3]"
              }
            >
              <MessageCircle size={18} />
              Atau konsultasi dulu lewat WhatsApp
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Registration;
