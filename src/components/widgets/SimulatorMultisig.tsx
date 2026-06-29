import { useEffect, useMemo, useState } from "react";

// Dompet multisig m-of-n: transaksi butuh minimal m dari n tanda tangan agar bisa dieksekusi.
export function SimulatorMultisig() {
  const [n, setN] = useState(3); // total penanda tangan
  const [m, setM] = useState(2); // ambang batas tanda tangan yang dibutuhkan
  const [tandaTangan, setTandaTangan] = useState<boolean[]>([true, false, false]);

  // sesuaikan panjang array signer saat n berubah, dan jaga m tidak melebihi n
  useEffect(() => {
    setTandaTangan((prev) => {
      const next = Array.from({ length: n }, (_, i) => prev[i] ?? false);
      return next;
    });
    setM((prev) => Math.min(prev, n));
  }, [n]);

  const jumlahTtd = useMemo(() => tandaTangan.slice(0, n).filter(Boolean).length, [tandaTangan, n]);
  const tereksekusi = jumlahTtd >= m;

  const toggle = (i: number) => {
    setTandaTangan((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const nama = ["Andi", "Budi", "Citra", "Dewi", "Eka"];

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔐 Simulator Dompet Multisig</div>
      <p className="mb-4 text-xs text-ink-faint">
        Dompet multisig m-of-n butuh persetujuan beberapa orang sebelum dana berpindah. Atur jumlah penanda tangan (n) dan ambang batas (m), lalu coba kumpulkan tanda tangan untuk satu transaksi.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-semibold text-ink-soft">Total penanda tangan (n)</span>
            <span className="tnum text-sm font-bold text-ink">{n}</span>
          </div>
          <input type="range" min={2} max={5} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-semibold text-ink-soft">Ambang batas (m)</span>
            <span className="tnum text-sm font-bold text-ink">{m} dari {n}</span>
          </div>
          <input type="range" min={1} max={n} step={1} value={m} onChange={(e) => setM(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
        </div>
      </div>

      <div className="mt-5 space-y-2">
        {Array.from({ length: n }, (_, i) => {
          const signed = tandaTangan[i] ?? false;
          return (
            <button key={i} onClick={() => toggle(i)} className={`flex w-full items-center justify-between rounded-xl border px-4 py-2.5 text-left ${signed ? "border-emerald-300 bg-emerald-50" : "border-line bg-canvas"}`}>
              <span className="text-sm font-semibold text-ink-soft">Penanda tangan {i + 1}: {nama[i]}</span>
              <span className={`text-sm font-bold ${signed ? "text-emerald-700" : "text-ink-faint"}`}>
                {signed ? "Sudah tanda tangan" : "Belum"}
              </span>
            </button>
          );
        })}
      </div>

      <div className={`mt-5 rounded-xl p-4 text-center ${tereksekusi ? "bg-emerald-50" : "bg-amber-50"}`}>
        {tereksekusi ? (
          <>
            <div className="text-sm font-bold text-emerald-700">Transaksi tereksekusi</div>
            <div className="mt-1 text-xs text-emerald-700">Terkumpul {jumlahTtd} tanda tangan, ambang batas {m} terpenuhi.</div>
          </>
        ) : (
          <>
            <div className="text-sm font-bold text-amber-700">Menunggu tanda tangan ({jumlahTtd}/{m})</div>
            <div className="mt-1 text-xs text-amber-700">Butuh {Math.max(0, m - jumlahTtd)} tanda tangan lagi agar transaksi berjalan.</div>
          </>
        )}
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Multisig mengurangi titik kegagalan tunggal. Jika satu kunci pribadi bocor, dana tetap aman selama penyerang belum mengumpulkan {m} tanda tangan. Skema seperti 2-of-3 populer untuk menyeimbangkan keamanan dan kemudahan.
      </p>
    </div>
  );
}
