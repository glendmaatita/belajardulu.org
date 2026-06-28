import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Titik impas (break-even) & shutdown point: berapa unit harus dijual agar tidak rugi.
export function SimulatorTitikImpas() {
  const [harga, setHarga] = useState(50_000); // harga jual per unit
  const [biayaVariabel, setBiayaVariabel] = useState(30_000); // biaya variabel per unit
  const [biayaTetap, setBiayaTetap] = useState(20_000_000); // biaya tetap total
  const [jualan, setJualan] = useState(1500); // jumlah unit terjual

  const r = useMemo(() => {
    const marginKontribusi = harga - biayaVariabel;
    const bep = marginKontribusi > 0 ? biayaTetap / marginKontribusi : Infinity;
    const laba = jualan * marginKontribusi - biayaTetap;
    const tutup = harga < biayaVariabel; // shutdown bila harga < biaya variabel
    return { marginKontribusi, bep, laba, tutup };
  }, [harga, biayaVariabel, biayaTetap, jualan]);

  const untung = r.laba >= 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Simulator Titik Impas (Break-Even)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Titik impas adalah jumlah unit yang harus dijual agar penerimaan menutup seluruh biaya. Di bawahnya rugi, di atasnya untung.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Harga jual / unit" value={harga} set={setHarga} min={10_000} max={120_000} step={5_000} fmt={(v) => rupiah(v)} />
        <Slider label="Biaya variabel / unit" value={biayaVariabel} set={setBiayaVariabel} min={5_000} max={100_000} step={5_000} fmt={(v) => rupiah(v)} />
        <Slider label="Biaya tetap total" value={biayaTetap} set={setBiayaTetap} min={5_000_000} max={100_000_000} step={5_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Unit terjual" value={jualan} set={setJualan} min={0} max={5000} step={50} fmt={(v) => `${v.toLocaleString("id-ID")} unit`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-sky-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Titik impas (BEP)</div>
          <div className="text-xl font-extrabold tnum text-sky-700">{Number.isFinite(r.bep) ? Math.ceil(r.bep).toLocaleString("id-ID") + " unit" : "Tak tercapai"}</div>
          <div className="text-xs text-ink-faint">margin kontribusi {rupiah(r.marginKontribusi)}/unit</div>
        </div>
        <div className={`rounded-xl p-4 text-center ${untung ? "bg-emerald-50" : "bg-rose-50"}`}>
          <div className="text-xs text-ink-faint">Laba pada {jualan.toLocaleString("id-ID")} unit</div>
          <div className={`text-xl font-extrabold tnum ${untung ? "text-emerald-700" : "text-rose-700"}`}>{untung ? "+" : ""}{rupiah(Math.round(r.laba))}</div>
        </div>
      </div>

      {r.tutup && (
        <div className="mt-3 rounded-xl bg-rose-50 p-3 text-center text-sm font-semibold text-rose-700">
          Harga jual di bawah biaya variabel: lebih baik berhenti produksi (shutdown point), karena tiap unit menambah kerugian.
        </div>
      )}

      <p className="mt-3 text-xs text-ink-faint">
        BEP = biaya tetap / margin kontribusi per unit. Menjual di atas BEP menghasilkan laba; bila harga bahkan tak menutup biaya variabel, produksi sebaiknya dihentikan.
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
