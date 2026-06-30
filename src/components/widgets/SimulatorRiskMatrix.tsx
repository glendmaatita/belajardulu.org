import { useMemo, useState } from "react";

// Matriks risiko: skor = kemungkinan x dampak. Memetakan risiko ke zona
// hijau (terima), kuning (pantau), merah (mitigasi segera).
const RISIKO = [
  { nama: "Pemasok tunggal bangkrut", k: 2, d: 5 },
  { nama: "Pelabuhan macet", k: 4, d: 3 },
  { nama: "Serangan siber WMS", k: 3, d: 4 },
  { nama: "Banjir gudang", k: 3, d: 3 },
  { nama: "Kurs melonjak", k: 4, d: 2 },
];

export function SimulatorRiskMatrix() {
  const [pilih, setPilih] = useState(0);
  const [k, setK] = useState(RISIKO[0].k);
  const [d, setD] = useState(RISIKO[0].d);

  const skor = k * d;
  const zona = skor >= 15 ? { t: "Merah · mitigasi segera", c: "bg-rose-50 text-rose-700" } : skor >= 8 ? { t: "Kuning · pantau & siapkan rencana", c: "bg-amber-50 text-amber-700" } : { t: "Hijau · terima / kelola rutin", c: "bg-emerald-50 text-emerald-700" };

  const sel = (i: number) => { setPilih(i); setK(RISIKO[i].k); setD(RISIKO[i].d); };

  const warnaSel = useMemo(() => (kk: number, dd: number) => {
    const s = kk * dd;
    return s >= 15 ? "#f87171" : s >= 8 ? "#fbbf24" : "#34d399";
  }, []);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🚦 Simulator Matriks Risiko</div>
      <p className="mb-4 text-xs text-ink-faint">
        Skor risiko = kemungkinan × dampak. Pilih risiko, sesuaikan nilainya, dan lihat di zona mana ia jatuh.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {RISIKO.map((r, i) => (
          <button key={r.nama} onClick={() => sel(i)} className={`rounded-lg border px-2.5 py-1 text-xs font-semibold transition-colors ${pilih === i ? "border-brand-600 bg-brand-600 text-white" : "border-line bg-white text-ink-soft hover:border-line-strong"}`}>
            {r.nama}
          </button>
        ))}
      </div>

      <div className="flex gap-4">
        <div className="grid shrink-0" style={{ gridTemplateColumns: "auto repeat(5, 30px)", gridTemplateRows: "repeat(5, 30px) auto" }}>
          {[5, 4, 3, 2, 1].map((dd) => (
            <Frag key={dd} dd={dd} k={k} d={d} warnaSel={warnaSel} />
          ))}
          <div />
          {[1, 2, 3, 4, 5].map((kk) => (
            <div key={kk} className="grid place-items-center text-[10px] text-ink-faint">{kk}</div>
          ))}
        </div>
        <div className="flex-1">
          <Slider label="Kemungkinan (1-5)" value={k} set={setK} min={1} max={5} step={1} fmt={(v) => `${v}`} />
          <div className="mt-3"><Slider label="Dampak (1-5)" value={d} set={setD} min={1} max={5} step={1} fmt={(v) => `${v}`} /></div>
          <div className={`mt-4 rounded-xl p-3 text-center ${zona.c}`}>
            <div className="text-xs text-ink-faint">Skor = {k} × {d}</div>
            <div className="text-2xl font-extrabold tnum">{skor}</div>
            <div className="text-sm font-semibold">{zona.t}</div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-ink-faint">Sumbu tegak = dampak, sumbu datar = kemungkinan. Kotak bertanda ▢ adalah posisi risiko terpilih.</p>
    </div>
  );
}

function Frag({ dd, k, d, warnaSel }: { dd: number; k: number; d: number; warnaSel: (k: number, d: number) => string }) {
  return (
    <>
      <div className="grid place-items-center pr-1 text-[10px] text-ink-faint">{dd}</div>
      {[1, 2, 3, 4, 5].map((kk) => {
        const aktif = kk === k && dd === d;
        return (
          <div key={kk} className="grid place-items-center text-[10px] font-bold text-white" style={{ background: warnaSel(kk, dd), opacity: aktif ? 1 : 0.45, outline: aktif ? "2px solid #0b1220" : "none" }}>
            {aktif ? "▢" : ""}
          </div>
        );
      })}
    </>
  );
}

function Slider({ label, value, set, min, max, step, fmt }: { label: string; value: number; set: (n: number) => void; min: number; max: number; step: number; fmt: (v: number) => string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
