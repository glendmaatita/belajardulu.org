import { useMemo, useState } from "react";

// Metode D'Hondt: suara tiap partai dibagi 1, 2, 3, ... lalu kursi diberikan
// ke hasil bagi (quotient) tertinggi sampai semua kursi habis. Dipakai banyak negara.
export function KalkulatorKursiDHondt() {
  const [votes, setVotes] = useState([340000, 280000, 160000, 90000]);
  const [seats, setSeats] = useState(7);
  const nama = ["Partai A", "Partai B", "Partai C", "Partai D"];
  const warna = ["bg-blue-500", "bg-amber-500", "bg-rose-500", "bg-emerald-500"];

  const r = useMemo(() => {
    const won = [0, 0, 0, 0];
    const steps: { party: number; quotient: number }[] = [];
    for (let s = 0; s < seats; s++) {
      let best = -1, bestQ = -1;
      for (let p = 0; p < votes.length; p++) {
        const q = votes[p] / (won[p] + 1);
        if (q > bestQ) { bestQ = q; best = p; }
      }
      won[best]++;
      steps.push({ party: best, quotient: Math.round(bestQ) });
    }
    return { won, steps };
  }, [votes, seats]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧮 Kalkulator Kursi (Metode D'Hondt)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Atur perolehan suara dan jumlah kursi. Metode D'Hondt membagi suara dengan 1, 2, 3, dan seterusnya, lalu kursi jatuh ke hasil bagi tertinggi.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {votes.map((v, i) => (
          <Slider key={i} label={`Suara ${nama[i]}`} value={v} set={(nv) => setVotes((s) => s.map((x, j) => (j === i ? nv : x)))} min={20000} max={500000} step={10000} fmt={(x) => `${(x / 1000).toFixed(0)} rb`} />
        ))}
      </div>
      <div className="mt-3"><Slider label="Jumlah kursi tersedia" value={seats} set={setSeats} min={3} max={15} step={1} fmt={(v) => `${v} kursi`} /></div>

      <div className="mt-5 space-y-1.5">
        {r.won.map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-16 shrink-0 text-xs font-semibold text-ink-soft">{nama[i]}</span>
            <div className="flex flex-1 gap-1">
              {Array.from({ length: w }).map((_, k) => (
                <span key={k} className={`h-5 w-5 rounded ${warna[i]}`} />
              ))}
            </div>
            <span className="tnum w-16 shrink-0 text-right text-sm font-bold text-ink">{w} kursi</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-ink-faint">D'Hondt sedikit menguntungkan partai besar dibanding metode lain (seperti Sainte-Lague), sehingga pilihan rumus pembagian pun memengaruhi hasil.</p>
    </div>
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
