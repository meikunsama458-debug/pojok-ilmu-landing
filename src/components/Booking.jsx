import { useState } from "react";
import { CalendarCheck, CheckCircle2, Clock, Send } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

const programs = [
  "Private Bundling SD Home Visit",
  "Private Bundling SD Online",
  "Private Bundling SMP Home Visit",
  "Private Bundling SMP Online",
  "Private Bundling SMA Home Visit",
  "Private Bundling SMA Online",
  "Intensif / Speaking / TOEFL Class",
];

const tutors = [
  "Belum menentukan tutor",
  "Mei Teguh Firmansyah",
  "Ivan Rakhmansyah, S.Pd",
  "Ramli, S.Pd",
  "Fadhilla Cahya Rahmawati, S.Pd",
];

const days = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Minggu",
  "Fleksibel",
];

const times = ["Pagi", "Siang", "Sore", "Malam", "Fleksibel"];

function Booking({ isDark }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      student_name: formData.get("student_name"),
      whatsapp: formData.get("whatsapp"),
      program: formData.get("program"),
      learning_method: formData.get("learning_method"),
      preferred_day: formData.get("preferred_day"),
      preferred_time: formData.get("preferred_time"),
      preferred_tutor: formData.get("preferred_tutor"),
      note: formData.get("note") || null,
      status: "requested",
    };

    setIsSubmitting(true);
    setIsSubmitted(false);

    const { error } = await supabase.from("bookings").insert(payload);

    if (error) {
      console.error("Supabase booking insert error:", error);
      alert(
        "Booking gagal dikirim. Silakan coba lagi atau hubungi WhatsApp Pojok Ilmu.",
      );
      setIsSubmitting(false);
      return;
    }

    setIsSubmitted(true);
    form.reset();
    setIsSubmitting(false);
  };

  const inputClass = isDark
    ? "w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#FDCD00]"
    : "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0073E3]";

  const labelClass = isDark
    ? "mb-2 block text-sm font-bold text-slate-200"
    : "mb-2 block text-sm font-bold text-slate-700";

  return (
    <section id="booking" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="font-bold text-[#0073E3]">Booking Jadwal</p>

          <h2
            className={
              isDark
                ? "mt-3 text-3xl font-black text-white md:text-5xl"
                : "mt-3 text-3xl font-black text-slate-950 md:text-5xl"
            }
          >
            Ajukan jadwal belajar yang paling nyaman.
          </h2>

          <p
            className={
              isDark
                ? "mt-5 leading-relaxed text-slate-300"
                : "mt-5 leading-relaxed text-[#5A6774]"
            }
          >
            Pilih program, metode belajar, hari, dan waktu yang kamu inginkan.
            Tim Pojok Ilmu akan menghubungi melalui WhatsApp untuk konfirmasi
            ketersediaan tutor dan jadwal.
          </p>

          <div className="mt-8 grid gap-4">
            <div
              className={
                isDark
                  ? "rounded-[1.5rem] border border-slate-800 bg-slate-900 p-6"
                  : "rounded-[1.5rem] bg-white p-6 shadow-sm"
              }
            >
              <CalendarCheck className="text-[#0073E3]" size={30} />
              <h3
                className={
                  isDark
                    ? "mt-4 text-lg font-black text-white"
                    : "mt-4 text-lg font-black text-slate-950"
                }
              >
                Booking bersifat permintaan jadwal
              </h3>
              <p
                className={
                  isDark
                    ? "mt-2 text-sm leading-relaxed text-slate-300"
                    : "mt-2 text-sm leading-relaxed text-[#5A6774]"
                }
              >
                Jadwal final tetap akan dikonfirmasi oleh admin/tutor melalui
                WhatsApp.
              </p>
            </div>

            <div
              className={
                isDark
                  ? "rounded-[1.5rem] border border-slate-800 bg-slate-900 p-6"
                  : "rounded-[1.5rem] bg-white p-6 shadow-sm"
              }
            >
              <Clock className="text-[#FDCD00]" size={30} />
              <h3
                className={
                  isDark
                    ? "mt-4 text-lg font-black text-white"
                    : "mt-4 text-lg font-black text-slate-950"
                }
              >
                Fleksibel sesuai tutor dan siswa
              </h3>
              <p
                className={
                  isDark
                    ? "mt-2 text-sm leading-relaxed text-slate-300"
                    : "mt-2 text-sm leading-relaxed text-[#5A6774]"
                }
              >
                Sistem ini membantu mempercepat proses pencocokan jadwal, bukan
                booking otomatis seperti tiket.
              </p>
            </div>
          </div>
        </div>

        <div
          className={
            isDark
              ? "rounded-[2rem] border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-blue-950/20 md:p-8"
              : "rounded-[2rem] bg-white p-6 shadow-xl shadow-blue-900/5 md:p-8"
          }
        >
          <div className="mb-6">
            <h3
              className={
                isDark
                  ? "text-xl font-black text-white"
                  : "text-xl font-black text-slate-950"
              }
            >
              Form Booking Jadwal
            </h3>

            <p
              className={
                isDark
                  ? "mt-1 text-sm text-slate-400"
                  : "mt-1 text-sm text-[#5A6774]"
              }
            >
              Data booking akan masuk ke database Pojok Ilmu.
            </p>
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
                <p className="font-black">Booking berhasil dikirim!</p>
                <p className="mt-1 text-sm leading-relaxed">
                  Tim Pojok Ilmu akan menghubungi kamu untuk konfirmasi jadwal.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid gap-5">
            <div>
              <label className={labelClass}>Nama Lengkap Siswa</label>
              <input
                name="student_name"
                type="text"
                required
                placeholder="Contoh: Ahmad Rizky"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Nomor WhatsApp</label>
              <input
                name="whatsapp"
                type="tel"
                required
                placeholder="Contoh: 081234567890"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Program</label>
              <select
                name="program"
                required
                className={inputClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Pilih program
                </option>
                {programs.map((program) => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass}>Metode Belajar</label>
                <select
                  name="learning_method"
                  required
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Pilih metode
                  </option>
                  <option value="Home Visit">Home Visit</option>
                  <option value="Online">Online</option>
                  <option value="Fleksibel">Fleksibel</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Tutor Pilihan</label>
                <select
                  name="preferred_tutor"
                  className={inputClass}
                  defaultValue="Belum menentukan tutor"
                >
                  {tutors.map((tutor) => (
                    <option key={tutor} value={tutor}>
                      {tutor}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass}>Hari Pilihan</label>
                <select
                  name="preferred_day"
                  required
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Pilih hari
                  </option>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass}>Waktu Pilihan</label>
                <select
                  name="preferred_time"
                  required
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Pilih waktu
                  </option>
                  {times.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>Catatan Tambahan</label>
              <textarea
                name="note"
                rows="4"
                placeholder="Contoh: Bisa sore setelah jam 4, ingin tutor tertentu, atau lokasi home visit."
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={
                isDark
                  ? "inline-flex items-center justify-center gap-2 rounded-full bg-[#FDCD00] px-6 py-3 font-black text-[#014498] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                  : "inline-flex items-center justify-center gap-2 rounded-full bg-[#0073E3] px-6 py-3 font-black text-white transition hover:bg-[#014498] disabled:cursor-not-allowed disabled:opacity-60"
              }
            >
              <Send size={19} />
              {isSubmitting ? "Mengirim..." : "Kirim Booking"}
            </button>

            <p
              className={
                isDark
                  ? "text-center text-xs leading-relaxed text-slate-500"
                  : "text-center text-xs leading-relaxed text-[#5A6774]"
              }
            >
              Booking ini adalah permintaan jadwal. Jadwal final akan
              dikonfirmasi melalui WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Booking;
