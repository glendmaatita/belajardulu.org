import { useMemo, useState } from "react";

// Eksternalitas: biaya/manfaat yang tidak ditanggung pelaku. Pajak Pigou menutup selisih biaya sosial vs privat.
export function KalkulatorEksternalitas() {
  const [jenis, setJenis] = useState<"negatif" | "positif">("negatif");
  const [biayaPrivat, setBiayaPrivat] = useState(10000); // biaya/manfaat privat per unit
  const [dampakEksternal, setDampakEksternal] = useState(4000); // besar eksternalitas per unit

  const r = useMemo(() => {
    // negatif: biaya sosial = privat + eksternal (pasar overproduksi). positif: manfaat sosial = privat + eksternal (underproduksi)
    const biayaSosial = biayaPrivat + dampakEksternal;
    const pajakOptimal = jenis === "negatif" ? dampakEksternal : 0;
    const subsidiOptimal = jenis === "positif" ? dampakEksternal : 0;
    return { biayaSosial, pajakOptimal, subsidiOptimal };
  }, [jenis, biayaPrivat, dampakEksternal]);

  const fmt = (n: number) => "Rp" + n.toLocaleString("id-ID");

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏭 Kalkulator Eksternalitas</div>
      <p className="mb-4 text-xs text-ink-faint">
        Eksternalitas adalah dampak ke pihak ketiga yang tidak diperhitungkan pasar. Pemerintah dapat mengoreksinya lewat pajak (untuk dampak negatif) atau subsidi (untuk dampak positif).
      </p>

      <div className="mb-4 flex rounded-lg bg-slate-100 p-1 text-sm font-bold">
        <button onClick={() => setJenis("negatif")} className={`flex-1 rounded-md py-2 transition ${jenis === "negatif" ? "bg-rose-500 text-white" : "text-ink-soft"}`}>
          Negatif (mis. polusi)
        </button>
        <button onClick={() => setJenis("positif")} className={`flex-1 rounded-md py-2 transition ${jenis === "positif" ? "bg-emerald-500 text-white" : "text-ink-soft"}`}>
          Positif (mis. vaksinasi)
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label={jenis === "negatif" ? "Biaya privat / unit" : "Manfaat privat / unit"} value={biayaPrivat} set={setBiayaPrivat} min={2000} max={30000} step={1000} fmt={fmt} />
        <Slider label="Besar eksternalitas / unit" value={dampakEksternal} set={setDampakEksternal} min={0} max={20000} step={1000} fmt={fmt} />
      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-4 text-center">
        <div className="text-xs text-ink-faint">{jenis === "negatif" ? "Biaya sosial per unit (privat + eksternal)" : "Manfaat sosial per unit (privat + eksternal)"}</div>
        <div className="text-2xl font-extrabold tnum text-ink">{fmt(r.biayaSosial)}</div>
      </div>

      <div className={`mt-3 rounded-xl p-4 text-center ${jenis === "negatif" ? "bg-rose-50" : "bg-emerald-50"}`}>
        <div className="text-xs text-ink-faint">{jenis === "negatif" ? "Pajak Pigou optimal (per unit)" : "Subsidi optimal (per unit)"}</div>
        <div className={`text-2xl font-extrabold tnum ${jenis === "negatif" ? "text-rose-700" : "text-emerald-700"}`}>
          {fmt(jenis === "negatif" ? r.pajakOptimal : r.subsidiOptimal)}
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        {jenis === "negatif"
          ? "Tanpa koreksi, pasar memproduksi terlalu banyak barang berdampak negatif. Pajak sebesar nilai eksternalitas membuat pelaku menanggung biaya sosial penuh."
          : "Tanpa koreksi, pasar memproduksi terlalu sedikit barang berdampak positif. Subsidi sebesar nilai eksternalitas mendorong produksi ke tingkat yang efisien secara sosial."}
      </p>
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600" />
    </div>
  );
}
