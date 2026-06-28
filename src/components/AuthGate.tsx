import { GoogleSignInButton } from "../lib/auth";
import { Icon } from "./Icon";

/**
 * Kartu "terkunci" untuk konten yang hanya bisa diakses setelah login.
 * Dipakai mis. di halaman pelajaran dan dashboard pengguna.
 */
export function AuthGate({
  title = "Masuk untuk membuka materi",
  description = "Isi materi hanya tersedia untuk pengguna yang sudah masuk. Daftar atau masuk dengan Google, gratis, dan progres belajarmu otomatis tersimpan.",
  perks = [
    "Akses penuh semua video, simulator, dan latihan",
    "Progres tersimpan dan tersinkron di semua perangkat",
    "Halaman khusus untuk memantau materi yang kamu ikuti",
  ],
}: {
  title?: string;
  description?: string;
  perks?: string[];
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/60 to-emerald-50/40" />
      <div className="relative">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-600 text-2xl text-white shadow-lg shadow-brand-600/30">
          <Icon name="lock" />
        </span>
        <h2 className="mt-5 text-2xl font-extrabold text-ink">{title}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{description}</p>

        <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left">
          {perks.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm text-ink-soft">
              <Icon name="check-circle" className="mt-0.5 shrink-0 text-emerald-500" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex justify-center">
          <GoogleSignInButton />
        </div>
      </div>
    </div>
  );
}
