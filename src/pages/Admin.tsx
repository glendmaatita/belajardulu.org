import { useCallback, useEffect, useState } from "react";
import { Icon } from "../components/Icon";

// ====== Tipe data dari API admin ======
interface Overview {
  users: number;
  progress: number;
  started: number;
  quizzes: number;
  exercises: number;
  feedback: number;
  suggestions: number;
}
interface AdminUser {
  id: number;
  email: string;
  name: string | null;
  created_at: string;
  last_login: string;
  completed: number;
  started: number;
  quizzes: number;
}
interface AdminSuggestion {
  id: number;
  lesson_key: string;
  email: string | null;
  user_email: string | null;
  message: string;
  created_at: string;
}
interface AdminFeedback {
  lesson_key: string;
  up: number;
  down: number;
}

type Tab = "pengguna" | "saran" | "umpan-balik";

async function api(path: string, opts?: RequestInit) {
  const r = await fetch(path, { credentials: "include", ...opts });
  return r;
}

export function Admin() {
  const [phase, setPhase] = useState<"loading" | "login" | "dash">("loading");
  const [configured, setConfigured] = useState(true);

  useEffect(() => {
    document.title = "Panel Admin - BelajarYuk";
  }, []);

  const refreshSession = useCallback(async () => {
    try {
      const r = await api("/api/admin/me");
      const d = await r.json();
      setConfigured(!!d.configured);
      setPhase(d.admin ? "dash" : "login");
    } catch {
      setPhase("login");
    }
  }, []);

  useEffect(() => {
    void refreshSession();
  }, [refreshSession]);

  const logout = useCallback(async () => {
    await api("/api/admin/logout", { method: "POST" });
    setPhase("login");
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-accent-300 shadow-card">
          <Icon name="lock" />
        </span>
        <div>
          <h1 className="font-display text-2xl font-semibold text-ink">Panel Admin</h1>
          <p className="text-sm text-ink-faint">Kelola data pengguna, saran, dan umpan balik.</p>
        </div>
        {phase === "dash" && (
          <button
            onClick={() => void logout()}
            className="ml-auto flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-semibold text-ink-soft transition-colors hover:border-line-strong"
          >
            <Icon name="logout" className="text-xs" /> Keluar
          </button>
        )}
      </div>

      {phase === "loading" && <div className="text-sm text-ink-faint">Memuat...</div>}
      {phase === "login" && <LoginForm configured={configured} onSuccess={refreshSession} />}
      {phase === "dash" && <Dashboard />}
    </div>
  );
}

// ====== Login ======
function LoginForm({ configured, onSuccess }: { configured: boolean; onSuccess: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    setError("");
    setBusy(true);
    try {
      const r = await api("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (r.ok) {
        onSuccess();
        return;
      }
      const d = await r.json().catch(() => ({}));
      setError(
        d.error === "admin_not_configured"
          ? "Admin belum dikonfigurasi di server."
          : "Username atau kata sandi salah."
      );
    } catch {
      setError("Tidak dapat terhubung ke server.");
    } finally {
      setBusy(false);
    }
  };

  if (!configured) {
    return (
      <div className="card-ruled p-8">
        <h2 className="font-display text-lg font-semibold text-ink">Admin belum dikonfigurasi</h2>
        <p className="mt-2 text-sm text-ink-soft">
          Setel <code className="rounded bg-canvas px-1.5 py-0.5 text-xs">ADMIN_USERNAME</code> dan{" "}
          <code className="rounded bg-canvas px-1.5 py-0.5 text-xs">ADMIN_PASSWORD</code> di file{" "}
          <code className="rounded bg-canvas px-1.5 py-0.5 text-xs">.env</code>, lalu muat ulang.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void submit();
      }}
      className="card mx-auto max-w-sm p-6"
    >
      <h2 className="mb-4 font-display text-lg font-semibold text-ink">Masuk sebagai admin</h2>
      <label className="mb-3 block">
        <span className="mb-1 block text-sm font-semibold text-ink-soft">Username</span>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand-500"
        />
      </label>
      <label className="mb-4 block">
        <span className="mb-1 block text-sm font-semibold text-ink-soft">Kata sandi</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand-500"
        />
      </label>
      {error && <p className="mb-3 text-sm font-medium text-rose-600">{error}</p>}
      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
      >
        {busy ? "Memeriksa..." : "Masuk"}
      </button>
    </form>
  );
}

// ====== Dashboard ======
function Dashboard() {
  const [overview, setOverview] = useState<Overview | null>(null);
  const [tab, setTab] = useState<Tab>("pengguna");

  useEffect(() => {
    void api("/api/admin/overview")
      .then((r) => r.json())
      .then(setOverview)
      .catch(() => {});
  }, []);

  const stats: { label: string; value: number | undefined }[] = [
    { label: "Pengguna", value: overview?.users },
    { label: "Materi selesai", value: overview?.progress },
    { label: "Materi dibuka", value: overview?.started },
    { label: "Hasil kuis", value: overview?.quizzes },
    { label: "Latihan tersimpan", value: overview?.exercises },
    { label: "Umpan balik", value: overview?.feedback },
    { label: "Saran masuk", value: overview?.suggestions },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-line bg-white p-3 text-center">
            <div className="tnum text-2xl font-extrabold text-ink">{s.value ?? "-"}</div>
            <div className="mt-0.5 text-xs text-ink-faint">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-2 border-b border-line">
        {([
          ["pengguna", "Pengguna"],
          ["saran", "Saran"],
          ["umpan-balik", "Umpan Balik"],
        ] as [Tab, string][]).map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`-mb-px border-b-2 px-3 py-2 text-sm font-semibold transition-colors ${
              tab === id
                ? "border-brand-600 text-ink"
                : "border-transparent text-ink-faint hover:text-ink-soft"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {tab === "pengguna" && <UsersTable />}
        {tab === "saran" && <SuggestionsTable />}
        {tab === "umpan-balik" && <FeedbackTable />}
      </div>
    </div>
  );
}

function useTable<T>(path: string) {
  const [rows, setRows] = useState<T[] | null>(null);
  const load = useCallback(() => {
    setRows(null);
    void api(path)
      .then((r) => r.json())
      .then((d) => setRows((Object.values(d)[0] as T[]) ?? []))
      .catch(() => setRows([]));
  }, [path]);
  useEffect(() => load(), [load]);
  return { rows, reload: load };
}

function fmtDate(s: string) {
  // s dari SQLite berformat "YYYY-MM-DD HH:MM:SS" (UTC).
  return s ? s.replace(" ", " ").slice(0, 16) : "-";
}

function UsersTable() {
  const { rows, reload } = useTable<AdminUser>("/api/admin/users");

  const del = async (u: AdminUser) => {
    if (!window.confirm(`Hapus pengguna ${u.email}? Semua progres dan datanya ikut terhapus.`)) return;
    await api(`/api/admin/users/${u.id}`, { method: "DELETE" });
    reload();
  };

  if (!rows) return <Loading />;
  if (rows.length === 0) return <Empty text="Belum ada pengguna." />;
  return (
    <Table head={["Email", "Nama", "Selesai", "Dibuka", "Kuis", "Login terakhir", ""]}>
      {rows.map((u) => (
        <tr key={u.id} className="border-t border-line">
          <Td>{u.email}</Td>
          <Td>{u.name ?? "-"}</Td>
          <Td className="tnum text-center">{u.completed}</Td>
          <Td className="tnum text-center">{u.started}</Td>
          <Td className="tnum text-center">{u.quizzes}</Td>
          <Td className="text-ink-faint">{fmtDate(u.last_login)}</Td>
          <Td className="text-right">
            <DeleteBtn onClick={() => void del(u)} />
          </Td>
        </tr>
      ))}
    </Table>
  );
}

function SuggestionsTable() {
  const { rows, reload } = useTable<AdminSuggestion>("/api/admin/suggestions");

  const del = async (s: AdminSuggestion) => {
    if (!window.confirm("Hapus saran ini?")) return;
    await api(`/api/admin/suggestions/${s.id}`, { method: "DELETE" });
    reload();
  };

  if (!rows) return <Loading />;
  if (rows.length === 0) return <Empty text="Belum ada saran masuk." />;
  return (
    <Table head={["Tanggal", "Materi", "Kontak", "Pesan", ""]}>
      {rows.map((s) => (
        <tr key={s.id} className="border-t border-line align-top">
          <Td className="whitespace-nowrap text-ink-faint">{fmtDate(s.created_at)}</Td>
          <Td className="whitespace-nowrap font-mono text-xs">{s.lesson_key}</Td>
          <Td className="whitespace-nowrap text-xs">{s.user_email ?? s.email ?? "anonim"}</Td>
          <Td className="max-w-md">{s.message}</Td>
          <Td className="text-right">
            <DeleteBtn onClick={() => void del(s)} />
          </Td>
        </tr>
      ))}
    </Table>
  );
}

function FeedbackTable() {
  const { rows } = useTable<AdminFeedback>("/api/admin/feedback");
  if (!rows) return <Loading />;
  if (rows.length === 0) return <Empty text="Belum ada umpan balik." />;
  return (
    <Table head={["Materi", "Suka", "Tidak suka", "Skor"]}>
      {rows.map((f) => (
        <tr key={f.lesson_key} className="border-t border-line">
          <Td className="font-mono text-xs">{f.lesson_key}</Td>
          <Td className="tnum text-center text-emerald-600">{f.up}</Td>
          <Td className="tnum text-center text-rose-600">{f.down}</Td>
          <Td className="tnum text-center font-bold">{f.up - f.down}</Td>
        </tr>
      ))}
    </Table>
  );
}

// ====== Komponen kecil ======
function Table({ head, children }: { head: string[]; children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-canvas text-left text-xs uppercase tracking-wide text-ink-faint">
            {head.map((h, i) => (
              <th key={i} className="px-3 py-2 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-3 py-2 text-ink-soft ${className}`}>{children}</td>;
}

function DeleteBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border border-rose-200 bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-600 transition-colors hover:bg-rose-100"
    >
      Hapus
    </button>
  );
}

function Loading() {
  return <div className="py-8 text-center text-sm text-ink-faint">Memuat data...</div>;
}

function Empty({ text }: { text: string }) {
  return <div className="py-8 text-center text-sm text-ink-faint">{text}</div>;
}
