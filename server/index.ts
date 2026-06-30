import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  upsertUser,
  getUserById,
  listProgress,
  setProgress,
  mergeProgress,
  setFeedback,
  getFeedbackSummary,
  addSuggestion,
  setStarted,
  listStarted,
  mergeStarted,
  setQuizResult,
  listQuizResults,
  mergeQuizResults,
  setExerciseState,
  listExerciseStates,
  mergeExerciseStates,
  adminOverview,
  adminListUsers,
  adminListSuggestions,
  adminListFeedback,
  adminDeleteUser,
  adminDeleteSuggestion,
} from "./db.ts";
import { timingSafeEqual } from "node:crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = Number(process.env.PORT || 8787);
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const JWT_SECRET = process.env.JWT_SECRET || "dev-insecure-secret-change-me";
const COOKIE = "belajaryuk_session";
const ADMIN_COOKIE = "belajaryuk_admin";
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";
const adminConfigured = !!(ADMIN_USERNAME && ADMIN_PASSWORD);
const isProd = process.env.NODE_ENV === "production";

if (!adminConfigured) {
  console.warn(
    "⚠️  ADMIN_USERNAME / ADMIN_PASSWORD belum di-set. Halaman /admin dinonaktifkan sampai .env diisi (lihat .env.example)."
  );
}

if (!GOOGLE_CLIENT_ID) {
  console.warn(
    "⚠️  GOOGLE_CLIENT_ID belum di-set. Login Google dinonaktifkan sampai .env diisi (lihat .env.example)."
  );
}

const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);
const app = express();
app.use(express.json());
app.use(cookieParser());

// ---- helpers ----
function issueSession(res: express.Response, userId: number) {
  const token = jwt.sign({ uid: userId }, JWT_SECRET, { expiresIn: "30d" });
  res.cookie(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: isProd,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
}

function currentUserId(req: express.Request): number | null {
  const token = req.cookies?.[COOKIE];
  if (!token) return null;
  try {
    const payload = jwt.verify(token, JWT_SECRET) as { uid: number };
    return payload.uid;
  } catch {
    return null;
  }
}

function requireAuth(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const uid = currentUserId(req);
  if (!uid) return res.status(401).json({ error: "unauthorized" });
  (req as express.Request & { uid: number }).uid = uid;
  next();
}

// ---- admin auth (username/password from env, separate cookie) ----
function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ba.length !== bb.length) return false;
  return timingSafeEqual(ba, bb);
}

function issueAdminSession(res: express.Response) {
  const token = jwt.sign({ admin: true }, JWT_SECRET, { expiresIn: "1d" });
  res.cookie(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: isProd,
    maxAge: 24 * 60 * 60 * 1000,
  });
}

function isAdmin(req: express.Request): boolean {
  const token = req.cookies?.[ADMIN_COOKIE];
  if (!token) return false;
  try {
    const payload = jwt.verify(token, JWT_SECRET) as { admin?: boolean };
    return !!payload.admin;
  } catch {
    return false;
  }
}

function requireAdmin(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (!isAdmin(req)) return res.status(401).json({ error: "unauthorized" });
  next();
}

// ---- auth routes ----
app.post("/api/auth/google", async (req, res) => {
  if (!GOOGLE_CLIENT_ID) return res.status(503).json({ error: "google_not_configured" });
  const { credential } = req.body ?? {};
  if (!credential) return res.status(400).json({ error: "missing_credential" });
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    if (!payload?.sub || !payload.email) return res.status(401).json({ error: "invalid_token" });
    const user = upsertUser({
      sub: payload.sub,
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
    });
    issueSession(res, user.id);
    res.json({ user: { name: user.name, email: user.email, picture: user.picture } });
  } catch (e) {
    console.error("Google verify failed:", e);
    res.status(401).json({ error: "verification_failed" });
  }
});

app.post("/api/auth/logout", (_req, res) => {
  res.clearCookie(COOKIE);
  res.json({ ok: true });
});

app.get("/api/me", (req, res) => {
  const uid = currentUserId(req);
  if (!uid) return res.json({ user: null, googleConfigured: !!GOOGLE_CLIENT_ID });
  const user = getUserById(uid);
  if (!user) return res.json({ user: null, googleConfigured: !!GOOGLE_CLIENT_ID });
  res.json({
    user: { name: user.name, email: user.email, picture: user.picture },
    googleConfigured: !!GOOGLE_CLIENT_ID,
  });
});

// ---- progress routes ----
app.get("/api/progress", requireAuth, (req, res) => {
  const uid = (req as express.Request & { uid: number }).uid;
  res.json({ completed: listProgress(uid) });
});

app.post("/api/progress", requireAuth, (req, res) => {
  const uid = (req as express.Request & { uid: number }).uid;
  const { lessonId, done } = req.body ?? {};
  if (typeof lessonId !== "string") return res.status(400).json({ error: "bad_request" });
  setProgress(uid, lessonId, !!done);
  res.json({ completed: listProgress(uid) });
});

// Merge guest (localStorage) progress into the account on login.
app.post("/api/progress/merge", requireAuth, (req, res) => {
  const uid = (req as express.Request & { uid: number }).uid;
  const { lessonIds } = req.body ?? {};
  if (Array.isArray(lessonIds)) mergeProgress(uid, lessonIds.filter((x) => typeof x === "string"));
  res.json({ completed: listProgress(uid) });
});

// ---- learning activity: started lessons + quiz results ----
app.get("/api/activity", requireAuth, (req, res) => {
  const uid = (req as express.Request & { uid: number }).uid;
  res.json({ started: listStarted(uid), quiz: listQuizResults(uid), exercise: listExerciseStates(uid) });
});

app.post("/api/started", requireAuth, (req, res) => {
  const uid = (req as express.Request & { uid: number }).uid;
  const { lessonKey } = req.body ?? {};
  if (typeof lessonKey !== "string" || !lessonKey) return res.status(400).json({ error: "bad_request" });
  setStarted(uid, lessonKey);
  res.json({ ok: true });
});

app.post("/api/quiz", requireAuth, (req, res) => {
  const uid = (req as express.Request & { uid: number }).uid;
  const { quizKey, score, total, answers } = req.body ?? {};
  if (typeof quizKey !== "string" || !quizKey) return res.status(400).json({ error: "bad_request" });
  if (typeof score !== "number" || typeof total !== "number") return res.status(400).json({ error: "bad_request" });
  const ans = Array.isArray(answers) ? answers : [];
  setQuizResult(uid, quizKey, score, total, ans);
  res.json({ ok: true });
});

app.post("/api/exercise", requireAuth, (req, res) => {
  const uid = (req as express.Request & { uid: number }).uid;
  const { exKey, state } = req.body ?? {};
  if (typeof exKey !== "string" || !exKey) return res.status(400).json({ error: "bad_request" });
  if (state === undefined) return res.status(400).json({ error: "bad_request" });
  setExerciseState(uid, exKey, state);
  res.json({ ok: true });
});

// Merge guest (localStorage) activity into the account on login.
app.post("/api/activity/merge", requireAuth, (req, res) => {
  const uid = (req as express.Request & { uid: number }).uid;
  const { started, quiz, exercise } = req.body ?? {};
  if (Array.isArray(started)) mergeStarted(uid, started.filter((x) => typeof x === "string"));
  if (quiz && typeof quiz === "object") mergeQuizResults(uid, quiz);
  if (exercise && typeof exercise === "object") mergeExerciseStates(uid, exercise);
  res.json({ started: listStarted(uid), quiz: listQuizResults(uid), exercise: listExerciseStates(uid) });
});

// ---- feedback (thumbs up / down) ----
// Open to everyone: logged-in votes are tied to the account (one changeable
// vote), anonymous votes are counted without identity.
app.get("/api/feedback", (req, res) => {
  const lessonKey = typeof req.query.lessonKey === "string" ? req.query.lessonKey : "";
  if (!lessonKey) return res.status(400).json({ error: "bad_request" });
  res.json(getFeedbackSummary(lessonKey, currentUserId(req)));
});

app.post("/api/feedback", (req, res) => {
  const { lessonKey, value } = req.body ?? {};
  if (typeof lessonKey !== "string" || !lessonKey) return res.status(400).json({ error: "bad_request" });
  if (value !== "up" && value !== "down") return res.status(400).json({ error: "bad_value" });
  setFeedback(lessonKey, currentUserId(req), value === "up" ? 1 : -1);
  res.json(getFeedbackSummary(lessonKey, currentUserId(req)));
});

// ---- improvement suggestions ----
app.post("/api/suggestion", (req, res) => {
  const { lessonKey, message, email } = req.body ?? {};
  if (typeof lessonKey !== "string" || !lessonKey) return res.status(400).json({ error: "bad_request" });
  const text = typeof message === "string" ? message.trim() : "";
  if (text.length < 3) return res.status(400).json({ error: "message_too_short" });
  if (text.length > 4000) return res.status(400).json({ error: "message_too_long" });
  const contact = typeof email === "string" && email.trim() ? email.trim().slice(0, 200) : null;
  addSuggestion(lessonKey, currentUserId(req), text, contact);
  res.json({ ok: true });
});

// ---- admin: manage data stored in SQLite ----
app.get("/api/admin/me", (req, res) => {
  res.json({ admin: isAdmin(req), configured: adminConfigured });
});

app.post("/api/admin/login", (req, res) => {
  if (!adminConfigured) return res.status(503).json({ error: "admin_not_configured" });
  const { username, password } = req.body ?? {};
  if (typeof username !== "string" || typeof password !== "string")
    return res.status(400).json({ error: "bad_request" });
  if (safeEqual(username, ADMIN_USERNAME) && safeEqual(password, ADMIN_PASSWORD)) {
    issueAdminSession(res);
    return res.json({ ok: true });
  }
  return res.status(401).json({ error: "invalid_credentials" });
});

app.post("/api/admin/logout", (_req, res) => {
  res.clearCookie(ADMIN_COOKIE);
  res.json({ ok: true });
});

app.get("/api/admin/overview", requireAdmin, (_req, res) => {
  res.json(adminOverview());
});

app.get("/api/admin/users", requireAdmin, (_req, res) => {
  res.json({ users: adminListUsers() });
});

app.get("/api/admin/suggestions", requireAdmin, (_req, res) => {
  res.json({ suggestions: adminListSuggestions() });
});

app.get("/api/admin/feedback", requireAdmin, (_req, res) => {
  res.json({ feedback: adminListFeedback() });
});

app.delete("/api/admin/users/:id", requireAdmin, (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ error: "bad_request" });
  adminDeleteUser(id);
  res.json({ ok: true });
});

app.delete("/api/admin/suggestions/:id", requireAdmin, (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ error: "bad_request" });
  adminDeleteSuggestion(id);
  res.json({ ok: true });
});

// ---- serve built frontend in production ----
const distDir = resolve(__dirname, "../dist");
if (existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(resolve(distDir, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 API BelajarYuk berjalan di http://localhost:${PORT}`);
});
