import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useProgress } from "../lib/progress";
import { topics } from "../topics";
import { useAuth, GoogleSignInButton } from "../lib/auth";
import { Icon } from "./Icon";

const totalLessons = topics.reduce((s, t) => s + t.lessons.length, 0);

export function Layout({ children }: { children: React.ReactNode }) {
  const { completedCount } = useProgress();
  const pct = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;
  const { pathname } = useLocation();
  const { user, ready, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Tutup menu saat klik di luar atau saat berpindah halaman.
  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLink = (to: string, active: boolean, icon: "layers" | "gauge", label: string) => (
    <Link
      to={to}
      className={`relative flex items-center gap-1.5 px-2 py-2 transition-colors hover:text-ink ${
        active ? "text-ink" : ""
      }`}
    >
      <Icon name={icon} className="text-xs" />
      {label}
      <span
        className={`absolute inset-x-2 -bottom-[7px] h-0.5 rounded-full bg-accent-500 transition-transform ${
          active ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </Link>
  );

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-line bg-canvas/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3">
          <Link to="/" className="group flex items-center gap-2.5 text-ink">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-accent-300 shadow-card transition-transform group-hover:-rotate-3">
              <Icon name="graduation-cap" />
            </span>
            <span className="font-display text-xl font-semibold leading-none tracking-tight">
              Yuk<span className="text-accent-600">Belajar</span>
            </span>
          </Link>

          <nav className="ml-auto flex items-center gap-2 text-sm font-semibold text-ink-faint">
            {navLink("/", pathname === "/", "layers", "Topik")}
            <Link
              to={user ? "/saya" : "/"}
              className="hidden items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 transition-colors hover:border-line-strong sm:flex"
              title="Progres belajarmu"
            >
              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-line">
                <div className="h-full rounded-full bg-brand-600 transition-all" style={{ width: `${pct}%` }} />
              </div>
              <span className="tnum text-xs text-ink-soft">
                {completedCount}/{totalLessons}
              </span>
            </Link>

            {/* Auth */}
            {ready &&
              (user ? (
                <div className="relative" ref={menuRef}>
                  <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 transition-colors hover:bg-white"
                    title="Akun"
                    aria-haspopup="menu"
                    aria-expanded={menuOpen}
                  >
                    {user.picture ? (
                      <img
                        src={user.picture}
                        alt={user.name ?? user.email}
                        referrerPolicy="no-referrer"
                        className="h-8 w-8 rounded-full border border-line"
                      />
                    ) : (
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                        {(user.name ?? user.email).charAt(0).toUpperCase()}
                      </span>
                    )}
                    <span className="hidden max-w-[120px] truncate text-sm font-medium text-ink sm:block">
                      {user.name ?? user.email}
                    </span>
                    <Icon
                      name="chevron-right"
                      className={`text-[10px] text-ink-faint transition-transform ${menuOpen ? "rotate-90" : ""}`}
                    />
                  </button>

                  {menuOpen && (
                    <div
                      role="menu"
                      className="absolute right-0 top-full z-40 mt-2 w-52 overflow-hidden rounded-xl border border-line bg-white py-1 shadow-card"
                    >
                      <div className="border-b border-line px-3 py-2 sm:hidden">
                        <p className="truncate text-sm font-semibold text-ink">{user.name ?? user.email}</p>
                        {user.name && <p className="truncate text-xs text-ink-faint">{user.email}</p>}
                      </div>
                      <Link
                        to="/saya"
                        role="menuitem"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-canvas"
                      >
                        <Icon name="gauge" className="text-xs text-ink-faint" />
                        Materi Saya
                      </Link>
                      <button
                        role="menuitem"
                        onClick={() => {
                          setMenuOpen(false);
                          void logout();
                        }}
                        className="flex w-full items-center gap-2.5 px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-canvas"
                      >
                        <Icon name="logout" className="text-xs text-ink-faint" />
                        Keluar
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <GoogleSignInButton />
              ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-20 border-t border-line bg-[#f1ead9]">
        <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-ink-faint">
          <p className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <Icon name="graduation-cap" className="text-accent-600" />
            YukBelajar
          </p>
          <p className="mt-2 max-w-2xl">
            Platform belajar interaktif berbahasa Indonesia dengan banyak topik, dari akuntansi sampai perdagangan
            karbon. Setiap topik dilengkapi video animasi, simulator, grafik data, studi kasus, dan kuis.
          </p>
          <p className="mt-3 text-xs">
            Materi bersifat edukatif. Angka, tarif, dan regulasi dapat berubah, selalu rujuk sumber resmi sebelum
            mengambil keputusan nyata.
          </p>
        </div>
      </footer>
    </div>
  );
}
