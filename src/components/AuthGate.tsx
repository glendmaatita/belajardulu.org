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
    <div className="card-ruled p-8 text-center">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid text-brand-900/[0.04]" />
      <div className="relative">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-600 text-2xl text-accent-300 shadow-lift">
          <Icon name="lock" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-semibold text-ink">{title}</h2>
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
