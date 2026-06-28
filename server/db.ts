import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = process.env.DB_PATH || resolve(__dirname, "../data/app.db");

mkdirSync(dirname(DB_PATH), { recursive: true });

export const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    google_sub  TEXT UNIQUE NOT NULL,
    email       TEXT NOT NULL,
    name        TEXT,
    picture     TEXT,
    created_at  TEXT NOT NULL DEFAULT (datetime('now')),
    last_login  TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS progress (
    user_id      INTEGER NOT NULL,
    lesson_id    TEXT NOT NULL,
    completed_at TEXT NOT NULL DEFAULT (datetime('now')),
    PRIMARY KEY (user_id, lesson_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  -- Thumbs up / down per material (lesson_key = "topicId:lessonId").
  -- user_id is NULL for anonymous votes. Logged-in users get one
  -- changeable vote per material (enforced by the partial unique index).
  CREATE TABLE IF NOT EXISTS feedback (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    lesson_key TEXT NOT NULL,
    user_id    INTEGER,
    value      INTEGER NOT NULL,           -- 1 = thumbs up, -1 = thumbs down
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
  CREATE UNIQUE INDEX IF NOT EXISTS feedback_user_unique
    ON feedback(lesson_key, user_id) WHERE user_id IS NOT NULL;
  CREATE INDEX IF NOT EXISTS feedback_lesson_idx ON feedback(lesson_key);

  -- Improvement proposals submitted from a material page.
  CREATE TABLE IF NOT EXISTS suggestion (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    lesson_key TEXT NOT NULL,
    user_id    INTEGER,
    email      TEXT,
    message    TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
  );
  CREATE INDEX IF NOT EXISTS suggestion_lesson_idx ON suggestion(lesson_key);
`);

export interface UserRow {
  id: number;
  google_sub: string;
  email: string;
  name: string | null;
  picture: string | null;
}

export function upsertUser(p: {
  sub: string;
  email: string;
  name?: string;
  picture?: string;
}): UserRow {
  db.prepare(
    `INSERT INTO users (google_sub, email, name, picture)
     VALUES (@sub, @email, @name, @picture)
     ON CONFLICT(google_sub) DO UPDATE SET
       email = excluded.email,
       name = excluded.name,
       picture = excluded.picture,
       last_login = datetime('now')`
  ).run({
    sub: p.sub,
    email: p.email,
    name: p.name ?? null,
    picture: p.picture ?? null,
  });
  return db.prepare("SELECT id, google_sub, email, name, picture FROM users WHERE google_sub = ?").get(p.sub) as UserRow;
}

export function getUserById(id: number): UserRow | undefined {
  return db.prepare("SELECT id, google_sub, email, name, picture FROM users WHERE id = ?").get(id) as
    | UserRow
    | undefined;
}

export function listProgress(userId: number): string[] {
  const rows = db.prepare("SELECT lesson_id FROM progress WHERE user_id = ?").all(userId) as {
    lesson_id: string;
  }[];
  return rows.map((r) => r.lesson_id);
}

export function setProgress(userId: number, lessonId: string, done: boolean) {
  if (done) {
    db.prepare(
      "INSERT INTO progress (user_id, lesson_id) VALUES (?, ?) ON CONFLICT DO NOTHING"
    ).run(userId, lessonId);
  } else {
    db.prepare("DELETE FROM progress WHERE user_id = ? AND lesson_id = ?").run(userId, lessonId);
  }
}

export function mergeProgress(userId: number, lessonIds: string[]) {
  const insert = db.prepare(
    "INSERT INTO progress (user_id, lesson_id) VALUES (?, ?) ON CONFLICT DO NOTHING"
  );
  const tx = db.transaction((ids: string[]) => {
    for (const id of ids) insert.run(userId, id);
  });
  tx(lessonIds);
}

// ---- feedback (thumbs up / down) ----

export interface FeedbackSummary {
  up: number;
  down: number;
  mine: "up" | "down" | null; // current user's vote (logged-in only)
}

export function setFeedback(lessonKey: string, userId: number | null, value: 1 | -1) {
  if (userId === null) {
    db.prepare("INSERT INTO feedback (lesson_key, user_id, value) VALUES (?, NULL, ?)").run(
      lessonKey,
      value
    );
    return;
  }
  db.prepare(
    `INSERT INTO feedback (lesson_key, user_id, value) VALUES (?, ?, ?)
     ON CONFLICT(lesson_key, user_id) WHERE user_id IS NOT NULL
     DO UPDATE SET value = excluded.value, created_at = datetime('now')`
  ).run(lessonKey, userId, value);
}

export function getFeedbackSummary(lessonKey: string, userId: number | null): FeedbackSummary {
  const row = db
    .prepare(
      `SELECT
         SUM(CASE WHEN value = 1 THEN 1 ELSE 0 END) AS up,
         SUM(CASE WHEN value = -1 THEN 1 ELSE 0 END) AS down
       FROM feedback WHERE lesson_key = ?`
    )
    .get(lessonKey) as { up: number | null; down: number | null };

  let mine: "up" | "down" | null = null;
  if (userId !== null) {
    const m = db
      .prepare("SELECT value FROM feedback WHERE lesson_key = ? AND user_id = ?")
      .get(lessonKey, userId) as { value: number } | undefined;
    if (m) mine = m.value === 1 ? "up" : "down";
  }
  return { up: row?.up ?? 0, down: row?.down ?? 0, mine };
}

// ---- improvement suggestions ----

export function addSuggestion(
  lessonKey: string,
  userId: number | null,
  message: string,
  email: string | null
) {
  db.prepare(
    "INSERT INTO suggestion (lesson_key, user_id, email, message) VALUES (?, ?, ?, ?)"
  ).run(lessonKey, userId, email, message);
}
