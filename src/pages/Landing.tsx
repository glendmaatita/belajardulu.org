import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { Topic } from "../types";
import { categorizedTopics } from "../topics";
import { useProgress } from "../lib/progress";
import { useAuth } from "../lib/auth";
import { Icon } from "../components/Icon";

export function Landing() {
  const { doneInTopic } = useProgress();
  const { user, ready } = useAuth();
  const allGroups = useMemo(() => categorizedTopics(), []);
  const totalTopics = allGroups.reduce((s, g) => s + g.topics.length, 0);

  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  // Filter topik per kategori berdasarkan pencarian (judul, tagline, deskripsi,
  // kategori, dan tag pelajaran). Kategori tanpa hasil disembunyikan.
  const groups = useMemo(() => {
    if (!q) return allGroups;
    return allGroups
      .map(({ category, topics }) => ({
        category,
        topics: topics.filter((t) => {
          const haystack = [
            t.title,
            t.tagline,
            t.description,
            category.title,
            ...t.lessons.flatMap((l) => l.tags),
          ]
            .join(" ")
            .toLowerCase();
          return haystack.includes(q);
        }),
      }))
      .filter((g) => g.topics.length > 0);
  }, [allGroups, q]);

  const resultCount = groups.reduce((s, g) => s + g.topics.length, 0);

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            <Icon name="globe" className="text-emerald-300" />
            Berbahasa Indonesia · Interaktif · Berbasis Studi Kasus
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Belajar apa <span className="text-emerald-300">hari ini</span>?
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Satu platform, banyak topik. Pilih kursus di bawah dan belajar lewat video animasi, simulator, grafik
            data, studi kasus, dan kuis. Progresmu tersimpan otomatis.
          </p>

          {/* Pencarian topik */}
          <div className="mt-7 max-w-xl">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-black/10 focus-within:ring-2 focus-within:ring-emerald-300">
              <Icon name="search" className="text-ink-faint" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari topik, mis. aljabar, pajak, investasi…"
                aria-label="Cari topik"
                className="w-full bg-transparent text-base text-ink placeholder:text-ink-faint focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Hapus pencarian"
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-ink-faint transition-colors hover:bg-slate-100 hover:text-ink"
                >
                  <Icon name="close" />
                </button>
              )}
            </div>
          </div>

          {/* Loncat antar kategori */}
          <div className="mt-5 flex flex-wrap gap-2">
            {allGroups.map((g) => (
              <a
                key={g.category.id}
                href={`#kategori-${g.category.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/25"
              >
                <Icon name={g.category.icon} />
                {g.category.title}
                <span className="rounded-full bg-white/20 px-1.5 text-xs">{g.topics.length}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        {/* Banner untuk tamu yang belum login */}
        {ready && !user && (
          <div className="mb-10 flex flex-col gap-3 rounded-2xl border border-brand-200 bg-brand-50/70 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
                <Icon name="lock" />
              </span>
              <div>
                <div className="font-bold text-ink">Jelajahi semua materi secara gratis</div>
                <p className="mt-0.5 text-sm text-ink-soft">
                  Kamu bisa melihat seluruh daftar materi. Untuk membuka isi pelajaran, masuk dulu dengan Google,
                  progres belajarmu otomatis tersimpan.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-baseline justify-between gap-3">
          <h2 className="flex items-center gap-2.5 text-2xl font-bold text-ink">
            <Icon name="compass" className="text-brand-600" />
            {q ? "Hasil Pencarian" : "Pilih Materi"}
          </h2>
          <span className="text-sm text-ink-faint">
            {q ? `${resultCount} dari ${totalTopics} topik` : `${totalTopics} topik · ${allGroups.length} kategori`}
          </span>
        </div>
        <p className="mt-1 text-ink-faint">
          {q
            ? `Menampilkan topik yang cocok dengan "${query.trim()}".`
            : "Materi dikelompokkan per kategori. Setiap topik adalah kurikulum lengkap dari dasar hingga lanjutan."}
        </p>

        {q && resultCount === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-slate-100 text-2xl text-ink-faint">
              <Icon name="search" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-ink">Tidak ada topik yang cocok</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
              Coba kata kunci lain, atau hapus pencarian untuk melihat semua materi.
            </p>
            <button onClick={() => setQuery("")} className="btn-ghost mt-6">
              <Icon name="close" /> Hapus pencarian
            </button>
          </div>
        ) : (
        <div className="mt-10 space-y-12">
          {groups.map(({ category, topics }) => (
            <div key={category.id} id={`kategori-${category.id}`} className="scroll-mt-20">
              <div className="flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${category.accent} text-lg text-white shadow-sm`}>
                  <Icon name={category.icon} />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold text-ink">{category.title}</h3>
                  <p className="text-sm text-ink-faint">{category.tagline}</p>
                </div>
                <span className="ml-auto shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-ink-faint">
                  {topics.length} topik
                </span>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {topics.map((t) => (
                  <TopicCard key={t.id} topic={t} done={doneInTopic(t.id)} locked={ready && !user} />
                ))}
              </div>
            </div>
          ))}
        </div>
        )}

        <p className="mt-12 flex items-center justify-center gap-2 text-center text-sm text-ink-faint">
          <Icon name="seedling" className="text-emerald-500" />
          Topik baru akan ditambahkan secara berkala.
        </p>
      </section>
    </>
  );
}

function TopicCard({ topic: t, done, locked }: { topic: Topic; done: number; locked: boolean }) {
  const total = t.lessons.length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  return (
    <Link
      to={`/${t.id}`}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className={`relative bg-gradient-to-br ${t.hero} p-6 text-white`}>
        <div className="text-4xl">{t.icon}</div>
        <div className="mt-3 text-2xl font-extrabold">{t.title}</div>
        <div className="text-sm text-white/85">{t.tagline}</div>
        {locked && (
          <span
            className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/25 px-2.5 py-1 text-xs font-semibold backdrop-blur"
            title="Masuk untuk membuka isi materi"
          >
            <Icon name="lock" /> Terkunci
          </span>
        )}
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
          <span className="flex items-center gap-1.5 text-xs text-ink-faint">
            <Icon name="layers" /> {t.levels.length} level
            <span className="text-slate-300">·</span>
            <Icon name="book" /> {total} pelajaran
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:underline">
            {done > 0 ? "Lanjutkan" : "Lihat materi"}
            <Icon name="arrow-right" className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
