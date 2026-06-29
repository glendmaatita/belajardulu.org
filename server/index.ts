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
} from "./db.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = Number(process.env.PORT || 8787);
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const JWT_SECRET = process.env.JWT_SECRET || "dev-insecure-secret-change-me";
const COOKIE = "belajaryuk_session";
const isProd = process.env.NODE_ENV === "production";

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
  res.json({ started: listStarted(uid), quiz: listQuizResults(uid) });
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

// Merge guest (localStorage) activity into the account on login.
app.post("/api/activity/merge", requireAuth, (req, res) => {
  const uid = (req as express.Request & { uid: number }).uid;
  const { started, quiz } = req.body ?? {};
  if (Array.isArray(started)) mergeStarted(uid, started.filter((x) => typeof x === "string"));
  if (quiz && typeof quiz === "object") mergeQuizResults(uid, quiz);
  res.json({ started: listStarted(uid), quiz: listQuizResults(uid) });
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
