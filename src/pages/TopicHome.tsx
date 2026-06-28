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
      <section className={`relative overflow-hidden border-b border-slate-200 bg-gradient-to-br ${topic.hero} text-white`}>
        <div className="mx-auto max-w-5xl px-4 py-14">
          <div className="flex flex-wrap items-center gap-2">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold hover:bg-white/25">
              <Icon name="arrow-left" /> Semua Topik
            </Link>
            {category && (
              <a
                href={`/#kategori-${category.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold hover:bg-white/25"
              >
                <Icon name={category.icon} /> {category.title}
              </a>
            )}
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            {topic.icon} {topic.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{topic.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to={`/${topic.id}/pelajaran/${nextLesson.id}`}
              className="btn bg-white px-5 py-3 text-brand-700 hover:bg-slate-100"
            >
              <Icon name={completed > 0 ? "play" : "rocket"} />
              {completed > 0 ? "Lanjutkan Belajar" : "Mulai Belajar"}
            </Link>
            <a href="#kurikulum" className="btn bg-white/15 px-5 py-3 text-white hover:bg-white/25">
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
        <h2 className="flex items-center gap-2.5 text-2xl font-bold text-ink">
          <Icon name="route" className="text-brand-600" />
          Kurikulum Lengkap
        </h2>
        <p className="mt-1 text-ink-faint">Ikuti urut dari Level 1, atau lompat ke bagian yang kamu butuhkan.</p>

        {locked && (
          <div className="mt-5 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
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
                  <div className={`rounded-2xl bg-gradient-to-r ${lv.color} p-5 text-white shadow-sm`}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-2xl">{lv.icon}</div>
                        <h3 className="mt-1 text-xl font-bold">{lv.title}</h3>
                        <p className="mt-1 max-w-2xl text-sm text-white/85">{lv.description}</p>
                      </div>
                      <div className="shrink-0 rounded-xl bg-white/20 px-3 py-1.5 text-center text-sm font-semibold">
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
                            className="group flex h-full items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/30"
                          >
                            <span
                              className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
                                complete ? "bg-emerald-500 text-white" : "bg-slate-100 text-ink-faint"
                              }`}
                            >
                              {complete ? <Icon name="check" /> : l.order}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block font-semibold text-ink group-hover:text-brand-700">{l.title}</span>
                              <span className="mt-0.5 block text-sm text-ink-faint">{l.summary}</span>
                              <span className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-ink-faint">
                                <Icon name="clock" /> {l.durationMin} menit
                              </span>
                            </span>
                            {locked && (
                              <Icon name="lock" className="mt-0.5 shrink-0 text-slate-300 group-hover:text-brand-400" />
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
