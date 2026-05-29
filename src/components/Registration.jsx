import { useState } from "react";
import { CheckCircle2, ClipboardList, MessageCircle, Send } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

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
  "Arfa Rista Caniago, S.Pd",
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

const initialFormData = {
  student_name: "",
  whatsapp: "",
  parent_name: "",
  student_class: "",
  location: "",
  program: "",
  learning_goal: "",
  learning_method: "",
  preferred_tutor: "Belum menentukan tutor",
  preferred_day: "",
  preferred_time: "",
  note: "",
  booking_note: "",
  agreement: false,
};

function Registration({ isDark }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const consultationMessage = encodeURIComponent(
    "Halo Pojok Ilmu, saya ingin konsultasi dulu sebelum mendaftar kelas.",
  );

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateStepOne = () => {
    const requiredFields = [
      "student_name",
      "whatsapp",
      "parent_name",
      "student_class",
      "location",
    ];

    return requiredFields.every((field) => formData[field].trim() !== "");
  };

  const validateStepTwo = () => {
    const requiredFields = [
      "program",
      "learning_goal",
      "learning_method",
      "preferred_day",
      "preferred_time",
    ];

    return requiredFields.every((field) => formData[field].trim() !== "");
  };

  const goNextStep = () => {
    if (step === 1 && !validateStepOne()) {
      alert("Lengkapi data siswa terlebih dahulu.");
      return;
    }

    if (step === 2 && !validateStepTwo()) {
      alert("Lengkapi data program dan booking terlebih dahulu.");
      return;
    }

    setStep((prev) => prev + 1);
  };

  const goPreviousStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateStepOne() || !validateStepTwo()) {
      alert("Masih ada data yang belum lengkap.");
      return;
    }

    if (!formData.agreement) {
      alert("Kamu perlu menyetujui Syarat & Ketentuan terlebih dahulu.");
      return;
    }

    const payload = {
      student_name: formData.student_name,
      whatsapp: formData.whatsapp,
      parent_name: formData.parent_name,
      student_class: formData.student_class,
      location: formData.location,

      program: formData.program,
      learning_goal: formData.learning_goal,
      learning_method: formData.learning_method,
      preferred_tutor: formData.preferred_tutor,
      preferred_day: formData.preferred_day,
      preferred_time: formData.preferred_time,

      schedule_preference: `${formData.preferred_day} - ${formData.preferred_time}`,
      note: formData.note || null,
      booking_note: formData.booking_note || null,

      agreement: formData.agreement,
      status: "new",
      booking_status: "requested",
    };

    setIsSubmitting(true);
    setIsSubmitted(false);

    const { error } = await supabase.from("registrations").insert(payload);

    if (error) {
      console.error("Supabase insert error:", error);
      alert(
        "Pendaftaran gagal dikirim. Silakan coba lagi atau hubungi WhatsApp Pojok Ilmu.",
      );
      setIsSubmitting(false);
      return;
    }

    setIsSubmitted(true);
    setFormData(initialFormData);
    setStep(1);
    setIsSubmitting(false);
  };

  const inputClass = isDark
    ? "w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#FDCD00]"
    : "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0073E3]";

  const labelClass = isDark
    ? "mb-2 block text-sm font-bold text-slate-200"
    : "mb-2 block text-sm font-bold text-slate-700";

  const stepBoxClass = (targetStep) => {
    const isActive = step === targetStep;

    if (isDark) {
      return isActive
        ? "rounded-2xl border border-[#FDCD00] bg-[#FDCD00]/10 p-4"
        : "rounded-2xl border border-slate-800 bg-slate-900 p-4";
    }

    return isActive
      ? "rounded-2xl border border-[#0073E3] bg-[#0073E3]/10 p-4"
      : "rounded-2xl border border-slate-200 bg-white p-4";
  };

  return (
    <section id="registration" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="font-bold text-[#0073E3]">Pendaftaran & Booking</p>

        <h2
          className={
            isDark
              ? "mt-3 text-3xl font-black text-white md:text-5xl"
              : "mt-3 text-3xl font-black text-slate-950 md:text-5xl"
          }
        >
          Daftar kelas dan ajukan jadwal belajar.
        </h2>

        <p
          className={
            isDark
              ? "mt-5 leading-relaxed text-slate-300"
              : "mt-5 leading-relaxed text-[#5A6774]"
          }
        >
          Isi data siswa, pilih program, ajukan preferensi tutor dan jadwal,
          lalu Pojok Ilmu akan menghubungi melalui WhatsApp untuk konfirmasi.
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
              mengirim form pendaftaran dan booking jadwal.
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
                Data akan masuk ke database Pojok Ilmu.
              </p>
            </div>
          </div>

          <div className="mb-6 grid gap-3 md:grid-cols-3">
            <div className={stepBoxClass(1)}>
              <p className="text-sm font-black text-[#0073E3]">Step 1</p>
              <p
                className={
                  isDark
                    ? "mt-1 text-sm font-bold text-white"
                    : "mt-1 text-sm font-bold text-slate-900"
                }
              >
                Data Siswa
              </p>
            </div>

            <div className={stepBoxClass(2)}>
              <p className="text-sm font-black text-[#0073E3]">Step 2</p>
              <p
                className={
                  isDark
                    ? "mt-1 text-sm font-bold text-white"
                    : "mt-1 text-sm font-bold text-slate-900"
                }
              >
                Program & Jadwal
              </p>
            </div>

            <div className={stepBoxClass(3)}>
              <p className="text-sm font-black text-[#0073E3]">Step 3</p>
              <p
                className={
                  isDark
                    ? "mt-1 text-sm font-bold text-white"
                    : "mt-1 text-sm font-bold text-slate-900"
                }
              >
                Konfirmasi
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

          <form onSubmit={handleSubmit} className="grid gap-5">
            {step === 1 && (
              <>
                <div>
                  <label className={labelClass}>Nama Lengkap Siswa</label>
                  <input
                    name="student_name"
                    type="text"
                    value={formData.student_name}
                    onChange={updateField}
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
                    value={formData.whatsapp}
                    onChange={updateField}
                    required
                    placeholder="Contoh: 081234567890"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Nama Orang Tua / Wali</label>
                  <input
                    name="parent_name"
                    type="text"
                    value={formData.parent_name}
                    onChange={updateField}
                    required
                    placeholder="Contoh: Bapak/Ibu ..."
                    className={inputClass}
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>Jenjang / Kelas</label>
                    <input
                      name="student_class"
                      type="text"
                      value={formData.student_class}
                      onChange={updateField}
                      required
                      placeholder="Contoh: Kelas 8 SMP"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Domisili</label>
                    <input
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={updateField}
                      required
                      placeholder="Contoh: Bumiayu"
                      className={inputClass}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={goNextStep}
                  className={
                    isDark
                      ? "rounded-full bg-[#FDCD00] px-6 py-3 font-black text-[#014498] transition hover:bg-white"
                      : "rounded-full bg-[#0073E3] px-6 py-3 font-black text-white transition hover:bg-[#014498]"
                  }
                >
                  Lanjut ke Program
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label className={labelClass}>Program yang Dipilih</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={updateField}
                    required
                    className={inputClass}
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

                <div>
                  <label className={labelClass}>Tujuan Belajar</label>
                  <select
                    name="learning_goal"
                    value={formData.learning_goal}
                    onChange={updateField}
                    required
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Pilih tujuan belajar
                    </option>
                    <option value="Belajar Dari Dasar">
                      Belajar Dari Dasar
                    </option>
                    <option value="Meningkatkan Nilai Sekolah">
                      Meningkatkan Nilai Sekolah
                    </option>
                    <option value="Latihan Speaking">Latihan Speaking</option>
                    <option value="Persiapan Ujian">Persiapan Ujian</option>
                    <option value="TOEFL Preparation">TOEFL Preparation</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>Metode Belajar</label>
                    <select
                      name="learning_method"
                      value={formData.learning_method}
                      onChange={updateField}
                      required
                      className={inputClass}
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
                      value={formData.preferred_tutor}
                      onChange={updateField}
                      className={inputClass}
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
                      value={formData.preferred_day}
                      onChange={updateField}
                      required
                      className={inputClass}
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
                      value={formData.preferred_time}
                      onChange={updateField}
                      required
                      className={inputClass}
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
                  <label className={labelClass}>Catatan Belajar</label>
                  <textarea
                    name="note"
                    value={formData.note}
                    onChange={updateField}
                    rows="3"
                    placeholder="Tulis kebutuhan belajar, target, atau kendala siswa."
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Catatan Booking</label>
                  <textarea
                    name="booking_note"
                    value={formData.booking_note}
                    onChange={updateField}
                    rows="3"
                    placeholder="Contoh: Bisa sore setelah jam 4, ingin tutor tertentu, atau lokasi home visit."
                    className={inputClass}
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={goPreviousStep}
                    className={
                      isDark
                        ? "rounded-full border border-slate-700 px-6 py-3 font-black text-slate-200 transition hover:border-[#FDCD00] hover:text-[#FDCD00]"
                        : "rounded-full border border-slate-300 px-6 py-3 font-black text-slate-700 transition hover:border-[#0073E3] hover:text-[#0073E3]"
                    }
                  >
                    Kembali
                  </button>

                  <button
                    type="button"
                    onClick={goNextStep}
                    className={
                      isDark
                        ? "rounded-full bg-[#FDCD00] px-6 py-3 font-black text-[#014498] transition hover:bg-white"
                        : "rounded-full bg-[#0073E3] px-6 py-3 font-black text-white transition hover:bg-[#014498]"
                    }
                  >
                    Lanjut ke Konfirmasi
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div
                  className={
                    isDark
                      ? "rounded-2xl border border-slate-700 bg-slate-800 p-5"
                      : "rounded-2xl border border-slate-200 bg-[#FDFCF5] p-5"
                  }
                >
                  <h4
                    className={
                      isDark
                        ? "font-black text-white"
                        : "font-black text-slate-950"
                    }
                  >
                    Ringkasan Pendaftaran
                  </h4>

                  <div
                    className={
                      isDark
                        ? "mt-4 grid gap-2 text-sm text-slate-300"
                        : "mt-4 grid gap-2 text-sm text-[#5A6774]"
                    }
                  >
                    <p>
                      <strong>Nama:</strong> {formData.student_name || "-"}
                    </p>
                    <p>
                      <strong>WhatsApp:</strong> {formData.whatsapp || "-"}
                    </p>
                    <p>
                      <strong>Program:</strong> {formData.program || "-"}
                    </p>
                    <p>
                      <strong>Metode:</strong> {formData.learning_method || "-"}
                    </p>
                    <p>
                      <strong>Tutor:</strong> {formData.preferred_tutor || "-"}
                    </p>
                    <p>
                      <strong>Jadwal:</strong> {formData.preferred_day || "-"} -{" "}
                      {formData.preferred_time || "-"}
                    </p>
                  </div>
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
                      name="agreement"
                      checked={formData.agreement}
                      onChange={updateField}
                      required
                      className="mt-1 h-4 w-4 accent-[#0073E3]"
                    />

                    <span>
                      Saya telah membaca ringkasan S&K di samping, memahami, dan
                      menyetujui Syarat & Ketentuan Pojok Ilmu yang berlaku.
                    </span>
                  </label>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={goPreviousStep}
                    className={
                      isDark
                        ? "rounded-full border border-slate-700 px-6 py-3 font-black text-slate-200 transition hover:border-[#FDCD00] hover:text-[#FDCD00]"
                        : "rounded-full border border-slate-300 px-6 py-3 font-black text-slate-700 transition hover:border-[#0073E3] hover:text-[#0073E3]"
                    }
                  >
                    Kembali
                  </button>

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
                    {isSubmitting ? "Mengirim..." : "Kirim Pendaftaran"}
                  </button>
                </div>

                <p
                  className={
                    isDark
                      ? "text-center text-xs leading-relaxed text-slate-500"
                      : "text-center text-xs leading-relaxed text-[#5A6774]"
                  }
                >
                  Data yang dikirim hanya digunakan untuk kebutuhan pendaftaran,
                  booking jadwal, dan konsultasi kelas Pojok Ilmu.
                </p>
              </>
            )}

            <a
              href={`https://wa.me/6285712556125?text=${consultationMessage}`}
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
