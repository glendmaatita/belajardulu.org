import { useMemo, useState } from "react";

// Utilitas marginal & keseimbangan konsumen: alokasi anggaran optimal saat MU/P sama antar barang.
export function KalkulatorUtilitas() {
  const [muA, setMuA] = useState(40); // utilitas marginal barang A pada unit terakhir
  const [hargaA, setHargaA] = useState(8000);
  const [muB, setMuB] = useState(30);
  const [hargaB, setHargaB] = useState(5000);

  const r = useMemo(() => {
    const ratioA = muA / (hargaA / 1000); // MU per Rp1.000
    const ratioB = muB / (hargaB / 1000);
    let saran = "Sudah optimal: MU/P kedua barang seimbang.";
    if (Math.abs(ratioA - ratioB) > 0.05) {
      saran = ratioA > ratioB
        ? "Tambah konsumsi barang A (MU per rupiahnya lebih tinggi), kurangi B."
        : "Tambah konsumsi barang B (MU per rupiahnya lebih tinggi), kurangi A.";
    }
    return { ratioA, ratioB, saran, optimal: Math.abs(ratioA - ratioB) <= 0.05 };
  }, [muA, hargaA, muB, hargaB]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🥤 Kalkulator Utilitas & Keseimbangan Konsumen</div>
      <p className="mb-4 text-xs text-ink-faint">
        Konsumen memaksimalkan kepuasan saat utilitas marginal per rupiah (MU/P) sama untuk semua barang. Atur MU dan harga, lihat sarannya.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-3">
          <div className="mb-2 text-sm font-bold text-sky-700">Barang A</div>
          <Slider label="Utilitas marginal (util)" value={muA} set={setMuA} min={5} max={100} step={5} fmt={(v) => `${v}`} />
          <Slider label="Harga" value={hargaA} set={setHargaA} min={1000} max={20000} step={1000} fmt={(v) => `Rp${v.toLocaleString("id-ID")}`} />
        </div>
        <div className="rounded-xl bg-canvas p-3">
          <div className="mb-2 text-sm font-bold text-violet-700">Barang B</div>
          <Slider label="Utilitas marginal (util)" value={muB} set={setMuB} min={5} max={100} step={5} fmt={(v) => `${v}`} />
          <Slider label="Harga" value={hargaB} set={setHargaB} min={1000} max={20000} step={1000} fmt={(v) => `Rp${v.toLocaleString("id-ID")}`} />
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Stat label="MU/Rp1.000 barang A" value={r.ratioA.toFixed(1)} tone="sky" />
        <Stat label="MU/Rp1.000 barang B" value={r.ratioB.toFixed(1)} tone="violet" />
      </div>

      <div className={`mt-3 rounded-xl p-4 text-center text-sm font-semibold ${r.optimal ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
        {r.saran}
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Aturan keseimbangan konsumen: MUx/Px = MUy/Py. Selama belum sama, mengalihkan satu rupiah ke barang dengan MU per rupiah lebih tinggi menambah total kepuasan.
      </p>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: "sky" | "violet" }) {
  const map = { sky: "text-sky-700", violet: "text-violet-700" };
  return (
    <div className="rounded-xl bg-canvas p-3 text-center">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${map[tone]}`}>{value}</div>
    </div>
  );
}

function Slider({ label, value, set, min, max, step, fmt }: { label: string; value: number; set: (n: number) => void; min: number; max: number; step: number; fmt: (v: number) => string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-xs font-bold text-ink">{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
