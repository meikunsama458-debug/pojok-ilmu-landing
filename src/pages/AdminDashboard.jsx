import { useEffect, useState } from "react";
import { LogOut, RefreshCw, Save, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

const statuses = ["new", "contacted", "scheduled", "active", "cancelled"];

function formatDate(dateString) {
  if (!dateString) return "-";

  return new Date(dateString).toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function normalizeWhatsApp(number) {
  const digits = String(number || "").replace(/\D/g, "");

  if (digits.startsWith("0")) {
    return `62${digits.slice(1)}`;
  }

  if (digits.startsWith("62")) {
    return digits;
  }

  return digits;
}

function AdminDashboard({ isDark }) {
  const navigate = useNavigate();

  const [registrations, setRegistrations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const cardClass = isDark
    ? "rounded-[1.5rem] border border-slate-800 bg-slate-900 p-6"
    : "rounded-[1.5rem] bg-white p-6 shadow-sm";

  const inputClass = isDark
    ? "w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition focus:border-[#FDCD00]"
    : "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0073E3]";

  const fetchRegistrations = async () => {
    setIsLoading(true);

    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Fetch registrations error:", error);
      alert("Gagal mengambil data pendaftaran.");
      setIsLoading(false);
      return;
    }

    setRegistrations(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const updateLocalRegistration = (id, field, value) => {
    setRegistrations((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const saveRegistration = async (registration) => {
    const { error } = await supabase
      .from("registrations")
      .update({
        status: registration.status,
        booking_status: registration.booking_status,
        assigned_tutor: registration.assigned_tutor,
        admin_note: registration.admin_note,
      })
      .eq("id", registration.id);

    if (error) {
      console.error("Update registration error:", error);
      alert("Gagal menyimpan perubahan.");
      return;
    }

    alert("Perubahan berhasil disimpan.");
  };

  const markContacted = async (registration) => {
    const contactedAt = new Date().toISOString();

    const { error } = await supabase
      .from("registrations")
      .update({
        status: "contacted",
        contacted_at: contactedAt,
      })
      .eq("id", registration.id);

    if (error) {
      console.error("Mark contacted error:", error);
      alert("Gagal menandai sudah dihubungi.");
      return;
    }

    setRegistrations((prev) =>
      prev.map((item) =>
        item.id === registration.id
          ? { ...item, status: "contacted", contacted_at: contactedAt }
          : item
      )
    );
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-bold text-[#0073E3]">Admin Dashboard</p>

          <h1
            className={
              isDark
                ? "mt-2 text-3xl font-black text-white md:text-5xl"
                : "mt-2 text-3xl font-black text-slate-950 md:text-5xl"
            }
          >
            Data Pendaftaran
          </h1>

          <p
            className={
              isDark
                ? "mt-3 max-w-2xl leading-relaxed text-slate-300"
                : "mt-3 max-w-2xl leading-relaxed text-[#5A6774]"
            }
          >
            Kelola data pendaftaran siswa, status follow-up, tutor, dan catatan
            admin.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={fetchRegistrations}
            className={
              isDark
                ? "inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-[#FDCD00] hover:text-[#FDCD00]"
                : "inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-bold text-slate-700 transition hover:border-[#0073E3] hover:text-[#0073E3]"
            }
          >
            <RefreshCw size={18} />
            Refresh
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0073E3] px-5 py-3 font-bold text-white transition hover:bg-[#014498]"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      <div
        className={
          isDark
            ? "mt-8 rounded-[1.5rem] border border-slate-800 bg-slate-900 p-5"
            : "mt-8 rounded-[1.5rem] bg-white p-5 shadow-sm"
        }
      >
        <p className="font-black">
          Total pendaftar:{" "}
          <span className="text-[#0073E3]">{registrations.length}</span>
        </p>
      </div>

      {isLoading ? (
        <div className={cardClass + " mt-6"}>
          <p className="font-bold text-[#0073E3]">Memuat data...</p>
        </div>
      ) : (
        <div className="mt-6 grid gap-5">
          {registrations.map((registration) => {
            const whatsappNumber = normalizeWhatsApp(registration.whatsapp);

            const whatsappMessage = encodeURIComponent(
              `Halo, saya dari Pojok Ilmu. Kami ingin mengonfirmasi pendaftaran atas nama ${registration.student_name}.`
            );

            return (
              <article key={registration.id} className={cardClass}>
                <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                  <div>
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h2
                          className={
                            isDark
                              ? "text-2xl font-black text-white"
                              : "text-2xl font-black text-slate-950"
                          }
                        >
                          {registration.student_name}
                        </h2>

                        <p className="mt-1 text-sm font-bold text-[#0073E3]">
                          {registration.program}
                        </p>
                      </div>

                      <p
                        className={
                          isDark
                            ? "text-sm text-slate-400"
                            : "text-sm text-[#5A6774]"
                        }
                      >
                        {formatDate(registration.created_at)}
                      </p>
                    </div>

                    <div
                      className={
                        isDark
                          ? "mt-5 grid gap-2 text-sm text-slate-300 md:grid-cols-2"
                          : "mt-5 grid gap-2 text-sm text-[#5A6774] md:grid-cols-2"
                      }
                    >
                      <p>
                        <strong>WhatsApp:</strong> {registration.whatsapp}
                      </p>
                      <p>
                        <strong>Orang tua:</strong> {registration.parent_name}
                      </p>
                      <p>
                        <strong>Kelas:</strong> {registration.student_class}
                      </p>
                      <p>
                        <strong>Domisili:</strong> {registration.location}
                      </p>
                      <p>
                        <strong>Tujuan:</strong> {registration.learning_goal}
                      </p>
                      <p>
                        <strong>Metode:</strong>{" "}
                        {registration.learning_method || "-"}
                      </p>
                      <p>
                        <strong>Tutor pilihan:</strong>{" "}
                        {registration.preferred_tutor || "-"}
                      </p>
                      <p>
                        <strong>Jadwal:</strong>{" "}
                        {registration.preferred_day || "-"} -{" "}
                        {registration.preferred_time || "-"}
                      </p>
                    </div>

                    {registration.note && (
                      <p
                        className={
                          isDark
                            ? "mt-5 rounded-2xl bg-slate-800 p-4 text-sm leading-relaxed text-slate-300"
                            : "mt-5 rounded-2xl bg-[#FDFCF5] p-4 text-sm leading-relaxed text-[#5A6774]"
                        }
                      >
                        <strong>Catatan belajar:</strong> {registration.note}
                      </p>
                    )}

                    {registration.booking_note && (
                      <p
                        className={
                          isDark
                            ? "mt-3 rounded-2xl bg-slate-800 p-4 text-sm leading-relaxed text-slate-300"
                            : "mt-3 rounded-2xl bg-[#FDFCF5] p-4 text-sm leading-relaxed text-[#5A6774]"
                        }
                      >
                        <strong>Catatan booking:</strong>{" "}
                        {registration.booking_note}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-4">
                    <div>
                      <label className="mb-2 block text-sm font-bold">
                        Status Pendaftaran
                      </label>
                      <select
                        value={registration.status || "new"}
                        onChange={(event) =>
                          updateLocalRegistration(
                            registration.id,
                            "status",
                            event.target.value
                          )
                        }
                        className={inputClass}
                      >
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold">
                        Status Booking
                      </label>
                      <select
                        value={registration.booking_status || "requested"}
                        onChange={(event) =>
                          updateLocalRegistration(
                            registration.id,
                            "booking_status",
                            event.target.value
                          )
                        }
                        className={inputClass}
                      >
                        <option value="requested">requested</option>
                        <option value="confirmed">confirmed</option>
                        <option value="rescheduled">rescheduled</option>
                        <option value="cancelled">cancelled</option>
                        <option value="completed">completed</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold">
                        Tutor Assigned
                      </label>
                      <input
                        value={registration.assigned_tutor || ""}
                        onChange={(event) =>
                          updateLocalRegistration(
                            registration.id,
                            "assigned_tutor",
                            event.target.value
                          )
                        }
                        placeholder="Nama tutor"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold">
                        Catatan Admin
                      </label>
                      <textarea
                        value={registration.admin_note || ""}
                        onChange={(event) =>
                          updateLocalRegistration(
                            registration.id,
                            "admin_note",
                            event.target.value
                          )
                        }
                        rows="4"
                        placeholder="Catatan internal admin"
                        className={inputClass}
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => saveRegistration(registration)}
                      className={
                        isDark
                          ? "inline-flex items-center justify-center gap-2 rounded-full bg-[#FDCD00] px-5 py-3 font-black text-[#014498] transition hover:bg-white"
                          : "inline-flex items-center justify-center gap-2 rounded-full bg-[#0073E3] px-5 py-3 font-black text-white transition hover:bg-[#014498]"
                      }
                    >
                      <Save size={18} />
                      Simpan
                    </button>

                    <button
                      type="button"
                      onClick={() => markContacted(registration)}
                      className={
                        isDark
                          ? "rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-[#FDCD00] hover:text-[#FDCD00]"
                          : "rounded-full border border-slate-300 px-5 py-3 font-bold text-slate-700 transition hover:border-[#0073E3] hover:text-[#0073E3]"
                      }
                    >
                      Tandai Sudah Dihubungi
                    </button>

                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 font-black text-white transition hover:bg-green-700"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default AdminDashboard;