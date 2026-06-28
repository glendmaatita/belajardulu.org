import { useState } from "react";

// Atur besar sudut, kenali jenisnya, dan temukan pasangan penyiku/pelurus.
export function SimulatorSudut() {
  const [deg, setDeg] = useState(40);
  const [reveal, setReveal] = useState(false);

  const jenis = deg < 90 ? "Lancip" : deg === 90 ? "Siku-siku" : deg < 180 ? "Tumpul" : "Lurus";
  const penyiku = 90 - deg;
  const pelurus = 180 - deg;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📐 Simulator Sudut</div>
      <p className="mb-4 text-xs text-ink-faint">Geser besar sudut, amati jenisnya dan hubungannya dengan sudut lain.</p>

      <label className="block text-xs font-bold text-ink-faint">Besar sudut: <span className="tnum">{deg}°</span></label>
      <input type="range" min={0} max={180} value={deg} onChange={(e) => setDeg(Number(e.target.value))} className="w-full" />

      <div className="mt-3 flex justify-center">
        <svg width="220" height="120">
          <line x1="20" y1="100" x2="200" y2="100" stroke="#94a3b8" strokeWidth="3" />
          <line
            x1="20"
            y1="100"
            x2={20 + 180 * Math.cos((deg * Math.PI) / 180)}
            y2={100 - 180 * Math.sin((deg * Math.PI) / 180)}
            stroke="#6366f1"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="mt-2 rounded-xl bg-slate-50 p-3 text-center text-sm">
        Jenis sudut: <b className="text-brand-700">{jenis}</b>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Dua sudut <b>berpenyiku</b> jika jumlahnya 90° (pasangannya {penyiku < 0 ? "tidak ada" : penyiku + "°"}). Dua sudut <b>berpelurus</b> jika jumlahnya 180° (pasangannya {pelurus}°). Hubungan ini lahir dari sudut pada garis lurus yang selalu 180°.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Lihat sudut penyiku & pelurusnya</button>
      )}
    </div>
  );
}
