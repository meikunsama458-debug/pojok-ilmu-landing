function Footer({ isDark }) {
  return (
    <footer
      className={
        isDark
          ? "border-t border-slate-800 bg-slate-950 px-6 py-8 transition-colors duration-300"
          : "border-t border-slate-200 bg-white px-6 py-8 transition-colors duration-300"
      }
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <img
            src="/pojok-ilmu-logo.png"
            alt="Logo Pojok Ilmu"
            className="h-10 w-auto"
          />
        </div>

        <p
          className={
            isDark ? "text-sm text-slate-400" : "text-sm text-[#5A6774]"
          }
        >
          © 2026 Pojok Ilmu. Belajar • Berani • Berbicara.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
