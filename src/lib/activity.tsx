import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useAuth } from "./auth";

// Tracks learning activity beyond "completed": lessons the user has opened
// (started) and quiz results, so the dashboard can show materials in progress
// and quizzes survive a page refresh.

const STARTED_KEY = "belajaryuk.started.v1";
const QUIZ_KEY = "belajaryuk.quiz.v1";

export interface QuizResult {
  score: number;
  total: number;
  answers: (number | null)[];
}

type StartedMap = Record<string, true>;
type QuizMap = Record<string, QuizResult>;

function readJSON<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}

interface ActivityCtx {
  started: StartedMap;
  quiz: QuizMap;
  markStarted: (lessonKey: string) => void;
  saveQuiz: (quizKey: string, result: QuizResult) => void;
  getQuiz: (quizKey: string) => QuizResult | undefined;
  hasActivityInTopic: (topicId: string) => boolean;
}

const Ctx = createContext<ActivityCtx | null>(null);

function arrToMap(ids: string[]): StartedMap {
  return Object.fromEntries(ids.map((id) => [id, true as const]));
}

export function ActivityProvider({ children }: { children: React.ReactNode }) {
  const { user, ready } = useAuth();
  const [started, setStarted] = useState<StartedMap>(() => readJSON<StartedMap>(STARTED_KEY, {}));
  const [quiz, setQuiz] = useState<QuizMap>(() => readJSON<QuizMap>(QUIZ_KEY, {}));
  const mergedFor = useRef<string | null>(null);

  // When auth resolves, load the right source of truth.
  useEffect(() => {
    if (!ready) return;
    if (!user) {
      mergedFor.current = null;
      setStarted(readJSON<StartedMap>(STARTED_KEY, {}));
      setQuiz(readJSON<QuizMap>(QUIZ_KEY, {}));
      return;
    }
    if (mergedFor.current === user.email) return;
    mergedFor.current = user.email;
    // Merge any guest activity into the account, then load the server copy.
    fetch("/api/activity/merge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        started: Object.keys(readJSON<StartedMap>(STARTED_KEY, {})),
        quiz: readJSON<QuizMap>(QUIZ_KEY, {}),
      }),
    })
      .then((r) => (r.ok ? r.json() : fetch("/api/activity", { credentials: "include" }).then((x) => x.json())))
      .then((d: { started?: string[]; quiz?: QuizMap }) => {
        setStarted(arrToMap(d.started || []));
        setQuiz(d.quiz || {});
      })
      .catch(() => {});
  }, [ready, user]);

  const markStarted = useCallback(
    (lessonKey: string) => {
      setStarted((prev) => {
        if (prev[lessonKey]) return prev;
        const next = { ...prev, [lessonKey]: true as const };
        if (user) {
          fetch("/api/started", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ lessonKey }),
          }).catch(() => {});
        } else {
          localStorage.setItem(STARTED_KEY, JSON.stringify(next));
        }
        return next;
      });
    },
    [user]
  );

  const saveQuiz = useCallback(
    (quizKey: string, result: QuizResult) => {
      setQuiz((prev) => {
        const next = { ...prev, [quizKey]: result };
        if (user) {
          fetch("/api/quiz", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ quizKey, ...result }),
          }).catch(() => {});
        } else {
          localStorage.setItem(QUIZ_KEY, JSON.stringify(next));
        }
        return next;
      });
    },
    [user]
  );

  const getQuiz = useCallback((quizKey: string) => quiz[quizKey], [quiz]);

  const hasActivityInTopic = useCallback(
    (topicId: string) => {
      const p = topicId + ":";
      return (
        Object.keys(started).some((k) => k.startsWith(p)) ||
        Object.keys(quiz).some((k) => k.startsWith(p))
      );
    },
    [started, quiz]
  );

  return (
    <Ctx.Provider value={{ started, quiz, markStarted, saveQuiz, getQuiz, hasActivityInTopic }}>
      {children}
    </Ctx.Provider>
  );
}

export function useActivity() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useActivity must be used within ActivityProvider");
  return c;
}
