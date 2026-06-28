import { Link, useParams } from "react-router-dom";
import { getTopic, lessonsByLevel, orderedLessons, progressKey, getCategoryForTopic } from "../topics";
import { useProgress } from "../lib/progress";
import { useAuth } from "../lib/auth";
import { Icon, type IconName } from "../components/Icon";

export function TopicHome() {
  const { topicId = "" } = useParams();
  const topic = getTopic(topicId);
  const { isDone, doneInTopic } = useProgress();
  const { user, ready } = useAuth();
  const locked = ready && !user;
  const category = getCategoryForTopic(topicId);

  if (!topic) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Topik tidak ditemukan</h1>
        <Link to="/" className="btn-primary mt-4">
          <Icon name="arrow-left" /> Kembali ke daftar topik
        </Link>
      </div>
    );
  }

  const ordered = orderedLessons(topic);
  const nextLesson = ordered.find((l) => !isDone(progressKey(topic.id, l.id))) ?? ordered[0];
  const completed = doneInTopic(topic.id);

  const allBlocks = topic.lessons.flatMap((l) => l.blocks);
  const videoCount = allBlocks.filter((b) => b.type === "video").length;
  const quizCount = allBlocks.reduce((s, b) => (b.type === "quiz" ? s + b.questions.length : s), 0);

  return (
    <>
      {/* Hero */}
      <section className={`relative overflow-hidden border-b border-line bg-gradient-to-br ${topic.hero} text-white`}>
        <div className="pointer-events-none absolute inset-0 bg-dotgrid text-white/10" />
        <div className="relative mx-auto max-w-5xl px-4 py-14">
          <div className="flex flex-wrap items-center gap-2">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold ring-1 ring-white/20 transition-colors hover:bg-white/25">
              <Icon name="arrow-left" /> Semua Topik
            </Link>
            {category && (
              <a
                href={`/#kategori-${category.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold ring-1 ring-white/20 transition-colors hover:bg-white/25"
              >
                <Icon name={category.icon} /> {category.title}
              </a>
            )}
          </div>
          <div className="mt-6 flex items-start gap-4">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/15 text-4xl shadow-inset ring-1 ring-white/20">
              {topic.icon}
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              {topic.title}
            </h1>
          </div>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">{topic.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to={`/${topic.id}/pelajaran/${nextLesson.id}`}
              className="btn bg-white px-5 py-3 text-brand-700 shadow-card hover:bg-canvas active:translate-y-px"
            >
              <Icon name={completed > 0 ? "play" : "rocket"} />
              {completed > 0 ? "Lanjutkan Belajar" : "Mulai Belajar"}
            </Link>
            <a href="#kurikulum" className="btn bg-white/15 px-5 py-3 text-white ring-1 ring-white/25 hover:bg-white/25">
              <Icon name="list-check" /> Lihat Kurikulum
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
            <Stat icon="layers" n={`${topic.levels.length}`} label="Level" />
            <Stat icon="book" n={`${topic.lessons.length}`} label="Pelajaran" />
            <Stat icon="film" n={`${videoCount}`} label="Video animasi" />
            <Stat icon="question" n={`${quizCount}`} label="Soal kuis" />
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="kurikulum" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-12">
        <div className="eyebrow"><span className="rule" />Peta Belajar</div>
        <h2 className="mt-2 display text-3xl text-ink">Kurikulum Lengkap</h2>
        <p className="mt-1 text-ink-faint">Ikuti urut dari Level 1, atau lompat ke bagian yang kamu butuhkan.</p>

        {locked && (
          <div className="mt-5 flex items-center gap-3 rounded-xl border border-accent-200 bg-accent-50 px-4 py-3 text-sm text-accent-800">
            <Icon name="lock" className="shrink-0" />
            <span>
              Kamu bisa melihat seluruh daftar pelajaran di bawah. Untuk membuka isinya, masuk dulu dengan Google.
            </span>
          </div>
        )}

        <div className="mt-8 space-y-10">
          {[...topic.levels]
            .sort((a, b) => a.order - b.order)
            .map((lv) => {
              const lessons = lessonsByLevel(topic, lv.id);
              const done = lessons.filter((l) => isDone(progressKey(topic.id, l.id))).length;
              return (
                <div key={lv.id}>
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${lv.color} p-5 text-white shadow-card`}>
                    <div className="pointer-events-none absolute inset-0 bg-dotgrid text-white/10" />
                    <div className="relative flex items-start justify-between gap-3">
                      <div>
                        <div className="text-2xl">{lv.icon}</div>
                        <h3 className="mt-1 font-display text-xl font-semibold">{lv.title}</h3>
                        <p className="mt-1 max-w-2xl text-sm text-white/85">{lv.description}</p>
                      </div>
                      <div className="shrink-0 rounded-xl bg-white/20 px-3 py-1.5 text-center text-sm font-semibold tnum ring-1 ring-white/20">
                        {done}/{lessons.length}
                        <div className="text-[10px] font-normal opacity-80">selesai</div>
                      </div>
                    </div>
                  </div>

                  <ol className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {lessons.map((l) => {
                      const complete = isDone(progressKey(topic.id, l.id));
                      return (
                        <li key={l.id}>
                          <Link
                            to={`/${topic.id}/pelajaran/${l.id}`}
                            className="group flex h-full items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift"
                          >
                            <span
                              className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold tnum ${
                                complete ? "bg-emerald-500 text-white" : "bg-canvas text-ink-faint ring-1 ring-line"
                              }`}
                            >
                              {complete ? <Icon name="check" /> : l.order}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block font-semibold text-ink group-hover:text-brand-700">{l.title}</span>
                              <span className="mt-0.5 block text-sm text-ink-faint">{l.summary}</span>
                              <span className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-ink-faint">
                                <Icon name="clock" className="text-accent-500" /> {l.durationMin} menit
                              </span>
                            </span>
                            {locked && (
                              <Icon name="lock" className="mt-0.5 shrink-0 text-line-strong group-hover:text-accent-500" />
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}

function Stat({ icon, n, label }: { icon: IconName; n: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 text-lg text-white">
        <Icon name={icon} />
      </span>
      <div>
        <div className="text-2xl font-extrabold leading-none text-white">{n}</div>
        <div className="mt-1 text-xs uppercase tracking-wide">{label}</div>
      </div>
    </div>
  );
}
