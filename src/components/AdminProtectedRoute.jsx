import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

function AdminProtectedRoute({ children, isDark }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        setIsAdmin(false);
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", session.user.id)
        .maybeSingle();

      if (error || !data) {
        await supabase.auth.signOut();
        setIsAdmin(false);
        setIsLoading(false);
        return;
      }

      setIsAdmin(true);
      setIsLoading(false);
    };

    checkAdmin();
  }, []);

  if (isLoading) {
    return (
      <section className="flex min-h-screen items-center justify-center px-6">
        <div
          className={
            isDark
              ? "rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center"
              : "rounded-3xl bg-white p-8 text-center shadow-xl shadow-blue-900/5"
          }
        >
          <p className="font-bold text-[#0073E3]">Memeriksa akses admin...</p>
        </div>
      </section>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default AdminProtectedRoute;