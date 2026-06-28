import { Link, useLocation } from "react-router-dom";
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

  const navLink = (to: string, active: boolean, icon: "layers" | "gauge", label: string) => (
    <Link
      to={to}
      className={`relative flex items-center gap-1.5 px-2 py-1.5 transition-colors hover:text-ink ${
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
            {user && navLink("/saya", pathname === "/saya", "gauge", "Materi Saya")}
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
                <div className="flex items-center gap-2">
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
                  <button onClick={() => void logout()} className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-white" title="Keluar">
                    <Icon name="logout" className="text-xs" />
                    Keluar
                  </button>
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
