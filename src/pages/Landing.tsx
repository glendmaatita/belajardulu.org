import { Link } from "react-router-dom";
import { topics } from "../topics";
import { useProgress } from "../lib/progress";

export function Landing() {
  const { doneInTopic } = useProgress();

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            🇮🇩 Berbahasa Indonesia · Interaktif · Berbasis Studi Kasus
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Belajar apa <span className="text-emerald-300">hari ini</span>?
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Satu platform, banyak topik. Pilih kursus di bawah dan belajar lewat video animasi, simulator, grafik
            data, studi kasus, dan kuis. Progresmu tersimpan otomatis.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold text-ink">Pilih Topik</h2>
        <p className="mt-1 text-ink-faint">Setiap topik adalah kurikulum lengkap dari dasar hingga lanjutan.</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {topics.map((t) => {
            const total = t.lessons.length;
            const done = doneInTopic(t.id);
            const pct = total ? Math.round((done / total) * 100) : 0;
            return (
              <Link
                key={t.id}
                to={`/${t.id}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className={`bg-gradient-to-br ${t.hero} p-6 text-white`}>
                  <div className="text-4xl">{t.icon}</div>
                  <div className="mt-3 text-2xl font-extrabold">{t.title}</div>
                  <div className="text-sm text-white/85">{t.tagline}</div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-ink-soft">{t.description}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full bg-emerald-500 transition-all" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="tnum text-xs font-semibold text-ink-faint">
                      {done}/{total}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-ink-faint">
                      {t.levels.length} level · {total} pelajaran
                    </span>
                    <span className="text-sm font-semibold text-brand-700 group-hover:underline">
                      {done > 0 ? "Lanjutkan" : "Mulai"} →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-ink-faint">Topik baru akan ditambahkan secara berkala. 🌱</p>
      </section>
    </>
  );
}
