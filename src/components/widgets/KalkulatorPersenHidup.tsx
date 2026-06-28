import { useState } from "react";

// Jelajahi persen lewat diskon belanja, lalu rumusnya muncul.
export function KalkulatorPersenHidup() {
  const [harga, setHarga] = useState(200000);
  const [diskon, setDiskon] = useState(25);
  const [reveal, setReveal] = useState(false);

  const potongan = Math.round((harga * diskon) / 100);
  const bayar = harga - potongan;
  const fmt = (n: number) => "Rp" + n.toLocaleString("id-ID");

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏷️ Penjelajah Persen (Diskon)</div>
      <p className="mb-4 text-xs text-ink-faint">Coba berbagai harga dan diskon. Lihat berapa yang dipotong, baru kita rumuskan persennya.</p>

      <label className="block text-xs font-bold text-ink-faint">Harga barang</label>
      <input
        type="number"
        value={harga}
        min={0}
        step={10000}
        onChange={(e) => setHarga(Math.max(0, Number(e.target.value) || 0))}
        className="mt-1 w-full rounded-lg border border-slate-200 p-2 text-sm tnum outline-none focus:border-brand-400"
      />

      <label className="mt-3 block text-xs font-bold text-ink-faint">Diskon: <span className="tnum">{diskon}%</span></label>
      <input type="range" min={0} max={100} value={diskon} onChange={(e) => setDiskon(Number(e.target.value))} className="w-full" />

      <div className="mt-3 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-xl bg-rose-50 p-3">
          <div className="text-xs text-rose-600">Potongan</div>
          <div className="text-base font-extrabold text-rose-600 tnum">{fmt(potongan)}</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-3">
          <div className="text-xs text-emerald-700">Bayar</div>
          <div className="text-base font-extrabold text-emerald-700 tnum">{fmt(bayar)}</div>
        </div>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Persen berarti "per seratus". Potongan = harga × (diskon ÷ 100) = {fmt(harga)} × {diskon}/100 = <b className="tnum">{fmt(potongan)}</b>. Rumus ini hanya merapikan apa yang baru kamu coba.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Bagaimana rumusnya?</button>
      )}
    </div>
  );
}
