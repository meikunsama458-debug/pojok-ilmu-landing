import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PublicHome from "./pages/PublicHome";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <main
      className={
        isDark
          ? "min-h-screen bg-slate-950 text-white transition-colors duration-300"
          : "min-h-screen bg-[#FDFCF5] text-slate-950 transition-colors duration-300"
      }
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PublicHome isDark={isDark} setIsDark={setIsDark} />}
          />

          <Route path="/admin/login" element={<AdminLogin isDark={isDark} />} />

          <Route
            path="/admin"
            element={
              <AdminProtectedRoute isDark={isDark}>
                <AdminDashboard isDark={isDark} />
              </AdminProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;