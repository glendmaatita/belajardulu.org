import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

export interface User {
  name: string | null;
  email: string;
  picture: string | null;
}

interface AuthCtx {
  user: User | null;
  ready: boolean;
  googleConfigured: boolean;
  /** Submit a Google ID token credential to the backend. */
  loginWithCredential: (credential: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

const Ctx = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [googleConfigured, setGoogleConfigured] = useState(false);

  useEffect(() => {
    fetch("/api/me", { credentials: "include" })
      .then((r) => r.json())
      .then((d) => {
        setUser(d.user ?? null);
        setGoogleConfigured(!!d.googleConfigured);
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  const loginWithCredential = useCallback(async (credential: string) => {
    const r = await fetch("/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ credential }),
    });
    if (!r.ok) return false;
    const d = await r.json();
    setUser(d.user);
    return true;
  }, []);

  const logout = useCallback(async () => {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    setUser(null);
  }, []);

  return (
    <Ctx.Provider value={{ user, ready, googleConfigured, loginWithCredential, logout }}>
      {children}
    </Ctx.Provider>
  );
}

export function useAuth() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth must be used within AuthProvider");
  return c;
}

// ---- Google Identity Services loader & button ----

const CLIENT_ID = (import.meta.env.VITE_GOOGLE_CLIENT_ID as string | undefined) || "";

let gisPromise: Promise<void> | null = null;
function loadGis(): Promise<void> {
  if (gisPromise) return gisPromise;
  gisPromise = new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && (window as any).google?.accounts?.id) return resolve();
    const s = document.createElement("script");
    s.src = "https://accounts.google.com/gsi/client";
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Gagal memuat Google Sign-In"));
    document.head.appendChild(s);
  });
  return gisPromise;
}

export function GoogleSignInButton() {
  const { loginWithCredential } = useAuth();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!CLIENT_ID) return;
    let cancelled = false;
    loadGis()
      .then(() => {
        if (cancelled || !ref.current) return;
        const google = (window as any).google;
        google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: (resp: { credential: string }) => {
            void loginWithCredential(resp.credential);
          },
        });
        google.accounts.id.renderButton(ref.current, {
          theme: "outline",
          size: "large",
          shape: "pill",
          text: "signin_with",
          logo_alignment: "left",
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [loginWithCredential]);

  if (!CLIENT_ID) {
    return (
      <span
        title="Setel VITE_GOOGLE_CLIENT_ID di file .env untuk mengaktifkan login Google."
        className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-ink-faint"
      >
        Login Google belum disetel
      </span>
    );
  }
  return <div ref={ref} />;
}
