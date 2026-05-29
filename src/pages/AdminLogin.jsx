import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

function AdminLogin({ isDark }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const inputClass = isDark
    ? "w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#FDCD00]"
    : "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0073E3]";

  const handleLogin = async (event) => {
    event.preventDefault();

    setErrorMessage("");
    setIsLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage("Email atau password salah.");
      setIsLoading(false);
      return;
    }

    const { data: adminRecord, error: adminError } = await supabase
      .from("admin_users")
      .select("user_id")
      .eq("user_id", data.user.id)
      .maybeSingle();

    if (adminError || !adminRecord) {
      await supabase.auth.signOut();
      setErrorMessage("Akun ini tidak terdaftar sebagai admin.");
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    navigate("/admin");
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-20">
      <div
        className={
          isDark
            ? "w-full max-w-md rounded-[2rem] border border-slate-800 bg-slate-900 p-8 shadow-xl shadow-blue-950/20"
            : "w-full max-w-md rounded-[2rem] bg-white p-8 shadow-xl shadow-blue-900/10"
        }
      >
        <div
          className={
            isDark
              ? "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FDCD00]/20 text-[#FDCD00]"
              : "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0073E3]/10 text-[#0073E3]"
          }
        >
          <LockKeyhole size={30} />
        </div>

        <p className="font-bold text-[#0073E3]">Admin Pojok Ilmu</p>

        <h1
          className={
            isDark
              ? "mt-2 text-3xl font-black text-white"
              : "mt-2 text-3xl font-black text-slate-950"
          }
        >
          Masuk Dashboard
        </h1>

        <p
          className={
            isDark
              ? "mt-3 text-sm leading-relaxed text-slate-300"
              : "mt-3 text-sm leading-relaxed text-[#5A6774]"
          }
        >
          Login untuk melihat data pendaftaran siswa dan mengelola follow-up.
        </p>

        {errorMessage && (
          <div
            className={
              isDark
                ? "mt-6 rounded-2xl border border-red-800 bg-red-950/40 p-4 text-sm font-semibold text-red-200"
                : "mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700"
            }
          >
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin} className="mt-6 grid gap-5">
          <div>
            <label className="mb-2 block text-sm font-bold">Email Admin</label>
            <input
              type="email"
              required
              placeholder="admin@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Password</label>
            <input
              type="password"
              required
              placeholder="Masukkan password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={
              isDark
                ? "rounded-full bg-[#FDCD00] px-6 py-3 font-black text-[#014498] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                : "rounded-full bg-[#0073E3] px-6 py-3 font-black text-white transition hover:bg-[#014498] disabled:cursor-not-allowed disabled:opacity-60"
            }
          >
            {isLoading ? "Memproses..." : "Masuk Admin"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminLogin;