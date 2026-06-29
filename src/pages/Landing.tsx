import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { Topic } from "../types";
import { categorizedTopics } from "../topics";
import { useProgress } from "../lib/progress";
import { useAuth, GoogleSignInButton } from "../lib/auth";
import { Icon } from "../components/Icon";

export function Landing() {
  const { doneInTopic } = useProgress();
  const { user, ready } = useAuth();
  const allGroups = useMemo(() => categorizedTopics(), []);
  const totalTopics = allGroups.reduce((s, g) => s + g.topics.length, 0);
  const totalLessons = allGroups.reduce(
    (s, g) => s + g.topics.reduce((a, t) => a + t.lessons.length, 0),
    0,
  );

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
      <section className="hero-paper relative overflow-hidden border-b border-line">
        <div className="absolute inset-x-0 top-0 h-1 bg-accent-400" />
        <div className="pointer-events-none absolute inset-0 bg-dotgrid text-brand-900/[0.04]" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <div className="eyebrow">
            <Icon name="globe" className="text-accent-500" />
            Berbahasa Indonesia · Interaktif · Berbasis Studi Kasus
          </div>
          <h1 className="display mt-5 max-w-3xl text-[2.6rem] leading-[1.05] text-ink sm:text-6xl">
            Belajar apa{" "}
            <span className="relative whitespace-nowrap text-accent-700">
              hari ini
              <span className="absolute inset-x-0 -bottom-1.5 h-[3px] rounded-full bg-accent-400" />
            </span>
            ?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Satu platform, banyak topik. Pilih kursus di bawah dan belajar lewat video animasi, simulator, grafik
            data, studi kasus, dan kuis. Progresmu tersimpan otomatis.
          </p>

          {/* Pencarian topik */}
          <div className="mt-8 max-w-xl">
            <div className="flex items-center gap-3 rounded-2xl border border-line-strong bg-white px-4 py-3 shadow-card transition-shadow focus-within:border-brand-400 focus-within:shadow-lift">
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
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-ink-faint transition-colors hover:bg-canvas hover:text-ink"
                >
                  <Icon name="close" />
                </button>
              )}
            </div>
          </div>

          {/* Loncat antar kategori */}
          <div className="mt-6 flex flex-wrap gap-2">
            {allGroups.map((g) => (
              <a
                key={g.category.id}
                href={`#kategori-${g.category.id}`}
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-400 hover:text-brand-700"
              >
                <Icon name={g.category.icon} className="text-accent-500" />
                {g.category.title}
                <span className="rounded-full bg-canvas px-1.5 text-xs text-ink-faint">{g.topics.length}</span>
              </a>
            ))}
          </div>

          {/* Ringkasan katalog, gaya almanak */}
          <dl className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-4 border-t border-line pt-6">
            <div>
              <dt className="eyebrow text-ink-faint">Topik</dt>
              <dd className="display mt-1 text-3xl tnum leading-none text-ink">{totalTopics}</dd>
            </div>
            <span className="hidden h-9 w-px self-end bg-line sm:block" aria-hidden="true" />
            <div>
              <dt className="eyebrow text-ink-faint">Kategori</dt>
              <dd className="display mt-1 text-3xl tnum leading-none text-ink">{allGroups.length}</dd>
            </div>
            <span className="hidden h-9 w-px self-end bg-line sm:block" aria-hidden="true" />
            <div>
              <dt className="eyebrow text-ink-faint">Pelajaran</dt>
              <dd className="display mt-1 text-3xl tnum leading-none text-ink">{totalLessons}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        {/* Banner untuk tamu yang belum login */}
        {ready && !user && (
          <div className="card-ruled mb-10 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-600 text-accent-300">
                <Icon name="lock" />
              </span>
              <div>
                <div className="font-display text-base font-semibold text-ink">Jelajahi semua materi secara gratis</div>
                <p className="mt-0.5 text-sm text-ink-soft">
                  Kamu bisa melihat seluruh daftar materi. Untuk membuka isi pelajaran, masuk dulu dengan Google,
                  progres belajarmu otomatis tersimpan.
                </p>
              </div>
            </div>
            <div className="shrink-0 sm:pl-3">
              <GoogleSignInButton />
            </div>
          </div>
        )}

        <div className="eyebrow"><span className="rule" />{q ? "Pencarian" : "Katalog"}</div>
        <div className="mt-2 flex items-baseline justify-between gap-3">
          <h2 className="display text-3xl text-ink">
            {q ? "Hasil Pencarian" : "Pilih Materi"}
          </h2>
          <span className="shrink-0 text-sm text-ink-faint">
            {q ? `${resultCount} dari ${totalTopics} topik` : `${totalTopics} topik · ${allGroups.length} kategori`}
          </span>
        </div>
        <p className="mt-1 text-ink-faint">
          {q
            ? `Menampilkan topik yang cocok dengan "${query.trim()}".`
            : "Materi dikelompokkan per kategori. Setiap topik adalah kurikulum lengkap dari dasar hingga lanjutan."}
        </p>

        {q && resultCount === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-line-strong bg-white p-12 text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-canvas text-2xl text-accent-500">
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
          {groups.map(({ category, topics }, i) => (
            <div key={category.id} id={`kategori-${category.id}`} className="scroll-mt-20">
              <div className="flex items-center gap-4 border-b border-line pb-3">
                <span className="display hidden text-2xl tnum leading-none text-accent-500 sm:block" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-lg text-white shadow-card ring-1 ring-brand-700">
                  <Icon name={category.icon} />
                </span>
                <div>
                  <h3 className="display text-xl text-ink">{category.title}</h3>
                  <p className="text-sm text-ink-faint">{category.tagline}</p>
                </div>
                <span className="ml-auto shrink-0 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink-faint">
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

        <p className="mt-14 flex items-center justify-center gap-2 text-center text-sm text-ink-faint">
          <Icon name="seedling" className="text-accent-500" />
          Topik baru akan ditambahkan secara berkala.
        </p>
      </section>
    </>
  );
}

function TopicCard({ topic: t, done, locked }: { topic: Topic; done: number; locked: boolean }) {
  const total = t.lessons.length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const finished = total > 0 && done === total;
  return (
    <Link
      to={`/${t.id}`}
      className="card-ruled group flex flex-col transition-all hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift"
    >
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-canvas text-3xl ring-1 ring-line-strong">
            {t.icon}
          </span>
          <div className="min-w-0 flex-1">
            <h4 className="display text-xl leading-tight text-ink">{t.title}</h4>
            <p className="mt-0.5 text-sm text-ink-faint">{t.tagline}</p>
          </div>
          {locked && (
            <span
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-canvas px-2.5 py-1 text-xs font-semibold text-ink-faint"
              title="Masuk untuk membuka isi materi"
            >
              <Icon name="lock" /> Terkunci
            </span>
          )}
        </div>

        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-ink-soft">{t.description}</p>

        <div className="mt-auto pt-5">
          <div className="flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
              <div
                className={`h-full rounded-full transition-all ${finished ? "bg-accent-500" : "bg-brand-600"}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="tnum text-xs font-semibold text-ink-faint">
              {done}/{total}
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
            <span className="flex items-center gap-1.5 text-xs text-ink-faint">
              <Icon name="layers" className="text-accent-500" /> {t.levels.length} level
              <span className="text-line-strong">·</span>
              <Icon name="book" className="text-accent-500" /> {total} pelajaran
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
              {done > 0 ? "Lanjutkan" : "Lihat materi"}
              <Icon name="arrow-right" className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
