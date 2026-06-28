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

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 font-extrabold text-ink">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">
              <Icon name="graduation-cap" />
            </span>
            <span className="text-lg">
              Yuk<span className="text-brand-600">Belajar</span>
            </span>
          </Link>

          <nav className="ml-auto flex items-center gap-1 text-sm font-semibold text-ink-faint">
            <Link
              to="/"
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 hover:bg-slate-100 ${pathname === "/" ? "text-brand-700" : ""}`}
            >
              <Icon name="layers" className="text-xs" />
              Topik
            </Link>
            {user && (
              <Link
                to="/saya"
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 hover:bg-slate-100 ${pathname === "/saya" ? "text-brand-700" : ""}`}
              >
                <Icon name="gauge" className="text-xs" />
                Materi Saya
              </Link>
            )}
            <Link
              to={user ? "/saya" : "/"}
              className="hidden items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 hover:bg-slate-200 sm:flex"
              title="Progres belajarmu"
            >
              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-slate-300">
                <div className="h-full bg-emerald-500 transition-all" style={{ width: `${pct}%` }} />
              </div>
              <span className="tnum text-xs">
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
                      className="h-8 w-8 rounded-full border border-slate-200"
                    />
                  ) : (
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                      {(user.name ?? user.email).charAt(0).toUpperCase()}
                    </span>
                  )}
                  <span className="hidden max-w-[120px] truncate text-sm font-medium text-ink sm:block">
                    {user.name ?? user.email}
                  </span>
                  <button onClick={() => void logout()} className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm hover:bg-slate-100" title="Keluar">
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

      <footer className="mt-16 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-ink-faint">
          <p className="flex items-center gap-2 font-semibold text-ink">
            <Icon name="graduation-cap" className="text-brand-600" />
            YukBelajar
          </p>
          <p className="mt-1">
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
