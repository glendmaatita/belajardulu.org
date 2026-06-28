import { useState } from "react";

// Laju perubahan: jarak dan waktu menentukan kecepatan.
export function SimulatorKecepatan() {
  const [jarak, setJarak] = useState(240);
  const [waktu, setWaktu] = useState(4);
  const [reveal, setReveal] = useState(false);

  const kecepatan = jarak / waktu;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🚗 Simulator Kecepatan</div>
      <p className="mb-4 text-xs text-ink-faint">Atur jarak tempuh dan lama perjalanan. Amati berapa jarak yang ditempuh tiap satu jam.</p>

      <label className="block text-xs font-bold text-ink-faint">Jarak: <span className="tnum">{jarak} km</span></label>
      <input type="range" min={10} max={600} step={10} value={jarak} onChange={(e) => setJarak(Number(e.target.value))} className="w-full" />

      <label className="mt-2 block text-xs font-bold text-ink-faint">Waktu: <span className="tnum">{waktu} jam</span></label>
      <input type="range" min={1} max={12} value={waktu} onChange={(e) => setWaktu(Number(e.target.value))} className="w-full" />

      <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-emerald-700">Jarak per satu jam</div>
        <div className="text-2xl font-extrabold text-emerald-700 tnum">{kecepatan.toFixed(1)} km/jam</div>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Kecepatan adalah seberapa jauh kamu menempuh tiap satuan waktu: <b>Kecepatan = jarak ÷ waktu = {jarak} ÷ {waktu} = {kecepatan.toFixed(1)} km/jam</b>. Inilah contoh laju perubahan, cikal bakal ide gradien.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Rumuskan lajunya</button>
      )}
    </div>
  );
}
