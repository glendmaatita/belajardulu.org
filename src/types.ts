// ====== Unified multi-topic domain types ======

export interface JournalLine {
  account: string;
  debit?: number;
  credit?: number;
}

export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number; // index
  explain: string;
}

// Video composition names and widget ids are plain strings, resolved against
// the global registries. This keeps the type open so new topics can register
// their own videos/widgets without editing this file.
export type VideoComp = string;
export type WidgetId = string;

export type ContentBlock =
  | { type: "heading"; text: string; level?: number }
  | { type: "paragraph"; html: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; tone: "info" | "tip" | "warn" | "key"; title?: string; html: string }
  | { type: "case"; title: string; html: string }
  | { type: "equation"; assets: number; liabilities: number; equity: number; note?: string }
  | { type: "journal"; title?: string; date?: string; lines: JournalLine[]; note?: string }
  | { type: "ledger"; accounts: { name: string; debits: number[]; credits: number[] }[] }
  | { type: "table"; headers: string[]; rows: string[][]; caption?: string }
  | {
      type: "chart";
      variant: "bar" | "line" | "donut" | "area";
      title: string;
      unit?: string;
      source?: string;
      note?: string;
      data: { label: string; value: number; color?: string }[];
    }
  | {
      type: "stats";
      items: { value: string; label: string; sub?: string; color?: string }[];
    }
  | { type: "takeaways"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string; credit?: string }
  | { type: "video"; comp: VideoComp; title: string; caption?: string }
  | { type: "widget"; widget: WidgetId }
  | { type: "quiz"; questions: QuizQuestion[] }
  | { type: "journalExercise"; prompt: string; accounts: string[]; answer: JournalLine[]; hint?: string }
  | {
      type: "calcExercise";
      prompt: string;
      answer: number;
      tolerance?: number;
      prefix?: string;
      suffix?: string;
      solution: string;
      hint?: string;
    }
  | {
      type: "classifyExercise";
      prompt: string;
      buckets: string[];
      items: { text: string; bucket: string }[];
    }
  | {
      type: "matchExercise";
      prompt: string;
      pairs: { left: string; right: string }[];
    };

export interface Level {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  description: string;
  color: string; // tailwind gradient classes
  icon: string;
}

export interface LessonMeta {
  id: string;
  levelId: string;
  order: number;
  title: string;
  summary: string;
  durationMin: number;
  tags: string[];
}

export interface Lesson extends LessonMeta {
  blocks: ContentBlock[];
}

// A Topic is a self-contained course (akuntansi, carbon, future topics).
export interface Topic {
  id: string; // url slug, e.g. "carbon"
  title: string; // e.g. "Carbon Trading"
  tagline: string; // short hook
  description: string;
  icon: string; // emoji
  hero: string; // tailwind gradient classes for hero / landing card
  levels: Level[];
  lessons: Lesson[];
}

// Ringkasan topik tanpa isi berat (blocks). Dipakai untuk katalog, navigasi, dan
// dashboard agar halaman awal tidak perlu memuat seluruh konten pelajaran.
// Isi lengkap (blocks) dimuat lazy per-topik lewat loadTopic() saat pelajaran dibuka.
// Dibuat otomatis oleh scripts/gen-manifest.mts (jangan sunting manifest manual).
export interface TopicMeta {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  hero: string;
  levels: Level[];
  lessons: LessonMeta[]; // shell pelajaran (tanpa blocks)
  videoCount: number; // total block video di seluruh pelajaran (untuk statistik)
  quizCount: number; // total soal kuis di seluruh pelajaran
}
