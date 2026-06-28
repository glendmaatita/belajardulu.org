import { useMemo, useState } from "react";

// Masukkan data, temukan rata-rata, median, dan modus.
export function SimulatorStatistik() {
  const [data, setData] = useState<number[]>([70, 80, 80, 90, 100]);
  const [input, setInput] = useState("");
  const [reveal, setReveal] = useState(false);

  const stat = useMemo(() => {
    if (data.length === 0) return { mean: 0, median: 0, modus: "-" };
    const sorted = [...data].sort((a, b) => a - b);
    const mean = data.reduce((s, n) => s + n, 0) / data.length;
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    const freq: Record<number, number> = {};
    data.forEach((n) => (freq[n] = (freq[n] || 0) + 1));
    const max = Math.max(...Object.values(freq));
    const modusList = Object.keys(freq).filter((k) => freq[Number(k)] === max);
    const modus = max <= 1 ? "tidak ada" : modusList.join(", ");
    return { mean, median, modus };
  }, [data]);

  function tambah() {
    const n = Number(input);
    if (!input.trim() || Number.isNaN(n)) return;
    setData((d) => [...d, n]);
    setInput("");
  }
  function reset() {
    setData([]);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📊 Simulator Statistik</div>
      <p className="mb-4 text-xs text-ink-faint">Masukkan data (misalnya nilai ulangan), lalu lihat bagaimana satu angka bisa mewakili semuanya.</p>

      <div className="flex flex-wrap gap-1.5 rounded-xl bg-canvas p-3">
        {data.length ? (
          data.map((n, i) => (
            <span key={i} className="rounded-md bg-white px-2.5 py-1 text-sm font-bold text-ink tnum">{n}</span>
          ))
        ) : (
          <span className="text-xs text-ink-faint">Belum ada data. Tambahkan beberapa angka.</span>
        )}
      </div>

      <div className="mt-3 flex gap-2">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && tambah()}
          placeholder="Ketik angka lalu Tambah"
          className="flex-1 rounded-lg border border-line p-2 text-sm tnum outline-none focus:border-brand-400"
        />
        <button onClick={tambah} className="btn-primary">Tambah</button>
        <button onClick={reset} className="btn bg-canvas text-ink-soft hover:bg-line">Ulang</button>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl bg-emerald-50 p-3">
          <div className="text-xs text-emerald-700">Rata-rata</div>
          <div className="text-lg font-extrabold text-emerald-700 tnum">{stat.mean.toFixed(1)}</div>
        </div>
        <div className="rounded-xl bg-sky-50 p-3">
          <div className="text-xs text-sky-700">Median</div>
          <div className="text-lg font-extrabold text-sky-700 tnum">{stat.median}</div>
        </div>
        <div className="rounded-xl bg-amber-50 p-3">
          <div className="text-xs text-amber-700">Modus</div>
          <div className="text-lg font-extrabold text-amber-700 tnum">{stat.modus}</div>
        </div>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Rata-rata = jumlah semua data dibagi banyaknya data. Median adalah nilai tengah, modus adalah yang paling sering muncul. Tiga cara ini meringkas banyak angka jadi satu.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="mt-3 w-full text-sm font-semibold text-brand-600 hover:text-brand-700">Apa arti ketiga angka ini?</button>
      )}
    </div>
  );
}
