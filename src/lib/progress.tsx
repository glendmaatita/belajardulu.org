import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useAuth } from "./auth";

const KEY = "belajaryuk.progress.v1";

type ProgressMap = Record<string, boolean>;

function readLocal(): ProgressMap {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

function writeLocal(map: ProgressMap) {
  localStorage.setItem(KEY, JSON.stringify(map));
}

interface ProgressCtx {
  map: ProgressMap;
  isDone: (id: string) => boolean;
  toggle: (id: string, value?: boolean) => void;
  reset: () => void;
  completedCount: number;
  doneInTopic: (topicId: string) => number;
  syncing: boolean;
}

const Ctx = createContext<ProgressCtx | null>(null);

function toMap(ids: string[]): ProgressMap {
  return Object.fromEntries(ids.map((id) => [id, true]));
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { user, ready } = useAuth();
  const [map, setMap] = useState<ProgressMap>(() => readLocal());
  const [syncing, setSyncing] = useState(false);
  const mergedFor = useRef<string | null>(null);

  // When auth state resolves, load the right source of truth.
  useEffect(() => {
    if (!ready) return;
    if (!user) {
      mergedFor.current = null;
      setMap(readLocal());
      return;
    }
    if (mergedFor.current === user.email) return;
    mergedFor.current = user.email;
    setSyncing(true);
    // Merge any guest progress into the account, then load the server copy.
    const localIds = Object.keys(readLocal());
    fetch("/api/progress/merge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ lessonIds: localIds }),
    })
      .then((r) => (r.ok ? r.json() : fetch("/api/progress", { credentials: "include" }).then((x) => x.json())))
      .then((d: { completed: string[] }) => setMap(toMap(d.completed || [])))
      .catch(() => {})
      .finally(() => setSyncing(false));
  }, [ready, user]);

  const toggle = useCallback(
    (id: string, value?: boolean) => {
      setMap((prev) => {
        const next = { ...prev, [id]: value ?? !prev[id] };
        if (!next[id]) delete next[id];
        if (user) {
          // server is source of truth; fire & forget, reconcile from response
          fetch("/api/progress", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ lessonId: id, done: !!next[id] }),
          })
            .then((r) => (r.ok ? r.json() : null))
            .then((d) => d && setMap(toMap(d.completed || [])))
            .catch(() => {});
        } else {
          writeLocal(next);
        }
        return next;
      });
    },
    [user]
  );

  const reset = useCallback(() => {
    if (user) {
      const ids = Object.keys(map);
      setMap({});
      Promise.all(
        ids.map((id) =>
          fetch("/api/progress", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ lessonId: id, done: false }),
          })
        )
      ).catch(() => {});
    } else {
      writeLocal({});
      setMap({});
    }
  }, [user, map]);

  const isDone = useCallback((id: string) => !!map[id], [map]);
  const doneInTopic = useCallback(
    (topicId: string) => Object.keys(map).filter((k) => k.startsWith(topicId + ":")).length,
    [map]
  );

  return (
    <Ctx.Provider
      value={{ map, isDone, toggle, reset, completedCount: Object.keys(map).length, doneInTopic, syncing }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useProgress() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useProgress must be used within ProgressProvider");
  return c;
}
