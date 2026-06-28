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
