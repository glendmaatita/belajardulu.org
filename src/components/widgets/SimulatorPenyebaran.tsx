import { useMemo, useState } from "react";

// Masukkan data, lihat rata-rata, jangkauan, dan simpangan baku.
export function SimulatorPenyebaran() {
  const [data, setData] = useState<number[]>([48, 49, 50, 51, 52]);
  const [input, setInput] = useState("");
  const [reveal, setReveal] = useState(false);

  const stat = useMemo(() => {
    if (!data.length) return { mean: 0, range: 0, sd: 0 };
    const mean = data.reduce((s, n) => s + n, 0) / data.length;
    const range = Math.max(...data) - Math.min(...data);
    const variance = data.reduce((s, n) => s + (n - mean) ** 2, 0) / data.length;
    return { mean, range, sd: Math.sqrt(variance) };
  }, [data]);

  function tambah() {
    const n = Number(input);
    if (!input.trim() || Number.isNaN(n)) return;
    setData((d) => [...d, n]);
    setInput("");
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📏 Simulator Penyebaran</div>
      <p className="mb-4 text-xs text-ink-faint">Masukkan data, lalu lihat bukan hanya rata-ratanya tetapi juga seberapa menyebar nilainya.</p>

      <div className="flex flex-wrap gap-1.5 rounded-xl bg-slate-50 p-3">
        {data.length ? data.map((n, i) => (
          <span key={i} className="rounded-md bg-white px-2.5 py-1 text-sm font-bold text-ink tnum">{n}</span>
        )) : <span className="text-xs text-ink-faint">Belum ada data.</span>}
      </div>

      <div className="mt-3 flex gap-2">
        <input type="number" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && tambah()} placeholder="Tambah angka" className="flex-1 rounded-lg border border-slate-200 p-2 text-sm tnum outline-none focus:border-brand-400" />
        <button onClick={tambah} className="btn-primary">Tambah</button>
        <button onClick={() => setData([])} className="btn bg-slate-100 text-ink-soft hover:bg-slate-200">Ulang</button>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl bg-emerald-50 p-3"><div className="text-xs text-emerald-700">Rata-rata</div><div className="text-base font-extrabold text-emerald-700 tnum">{stat.mean.toFixed(1)}</div></div>
        <div className="rounded-xl bg-sky-50 p-3"><div className="text-xs text-sky-700">Jangkauan</div><div className="text-base font-extrabold text-sky-700 tnum">{stat.range}</div></div>
        <div className="rounded-xl bg-amber-50 p-3"><div className="text-xs text-amber-700">Simpangan baku</div><div className="text-base font-extrabold text-amber-700 tnum">{stat.sd.toFixed(2)}</div></div>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Jangkauan = nilai terbesar dikurangi terkecil. Simpangan baku mengukur rata-rata jarak data dari mean: makin besar, makin menyebar. Dua kelompok bisa berata-rata sama tetapi berbeda simpangan bakunya.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="mt-3 w-full text-sm font-semibold text-brand-600 hover:text-brand-700">Apa arti angka penyebaran ini?</button>
      )}
    </div>
  );
}
