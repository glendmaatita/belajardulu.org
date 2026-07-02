import { registerSW } from "virtual:pwa-register";

// Kunci penanda kapan terakhir data PWA disegarkan, untuk menegakkan TTL 24 jam.
const FRESH_KEY = "pwa:lastFresh";
const TTL_MS = 24 * 60 * 60 * 1000; // 24 jam

// Bersihkan seluruh cache PWA + service worker lalu muat ulang aplikasi dari server.
// Dipakai oleh tombol "Muat ulang" dan oleh penegakan TTL 24 jam.
export async function hardRefresh(): Promise<void> {
  try {
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
    }
  } catch {
    // abaikan error pembersihan; tetap muat ulang
  }
  try {
    localStorage.setItem(FRESH_KEY, String(Date.now()));
  } catch {
    // localStorage bisa gagal di mode privasi; abaikan
  }
  window.location.reload();
}

// Jika cache lebih tua dari 24 jam, segarkan total sekali (dengan guard anti-loop).
// Mengembalikan true bila sedang melakukan refresh (pemanggil sebaiknya berhenti).
function enforceTtl(): boolean {
  try {
    const last = Number(localStorage.getItem(FRESH_KEY) || 0);
    const now = Date.now();
    if (!last) {
      localStorage.setItem(FRESH_KEY, String(now));
      return false;
    }
    if (now - last > TTL_MS) {
      localStorage.setItem(FRESH_KEY, String(now)); // set dulu agar tidak loop
      void hardRefresh();
      return true;
    }
  } catch {
    // abaikan
  }
  return false;
}

// Pasang PWA: tegakkan TTL 24 jam lalu daftarkan service worker (autoUpdate).
export function setupPWA(): void {
  if (enforceTtl()) return; // sedang refresh total, hentikan pemasangan
  registerSW({ immediate: true });
}
