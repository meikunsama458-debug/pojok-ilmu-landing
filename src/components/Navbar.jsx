import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Beranda", href: "#" },
  { label: "Tentang", href: "#about" },
  { label: "Program", href: "#programs" },
  { label: "Metode", href: "#method" },
  { label: "FAQ", href: "#faq" },
];

function Navbar({ isDark, setIsDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerClass = isDark
    ? "sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl transition-colors duration-300"
    : "sticky top-0 z-50 border-b border-slate-200/70 bg-[#FDFCF5]/90 backdrop-blur-xl transition-colors duration-300";

  const navLinkClass = isDark
    ? "text-sm font-semibold text-slate-300 transition hover:text-[#FDCD00]"
    : "text-sm font-semibold text-slate-700 transition hover:text-[#0073E3]";

  const themeButtonClass = isDark
    ? "flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-[#FDCD00] shadow-sm transition hover:border-[#FDCD00]"
    : "flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#0073E3] hover:text-[#0073E3]";

  const ctaButtonClass = isDark
    ? "rounded-full bg-[#FDCD00] px-5 py-2.5 text-sm font-bold text-[#014498] shadow-sm transition hover:bg-white"
    : "rounded-full bg-[#0073E3] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#014498]";

  const mobileMenuButtonClass = isDark
    ? "flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white transition hover:border-[#FDCD00] hover:text-[#FDCD00]"
    : "flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#0073E3] hover:text-[#0073E3]";

  const mobilePanelClass = isDark
    ? "border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden"
    : "border-t border-slate-200 bg-[#FDFCF5] px-6 py-5 md:hidden";

  return (
    <header className={headerClass}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-3"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src="/pojok-ilmu-logo.png"
            alt="Logo Pojok Ilmu"
            className="h-12 w-auto"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={navLinkClass}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#registration" className={ctaButtonClass}>
            Daftar Sekarang
          </a>

          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className={themeButtonClass}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className={themeButtonClass}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={mobileMenuButtonClass}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={mobilePanelClass}>
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  isDark
                    ? "rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-900 hover:text-[#FDCD00]"
                    : "rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-[#0073E3]"
                }
              >
                {item.label}
              </a>
            ))}

            <a
              href="#registration"
              onClick={() => setIsMenuOpen(false)}
              className={
                isDark
                  ? "mt-2 rounded-full bg-[#FDCD00] px-5 py-3 text-center text-sm font-bold text-[#014498] transition hover:bg-white"
                  : "mt-2 rounded-full bg-[#0073E3] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#014498]"
              }
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
