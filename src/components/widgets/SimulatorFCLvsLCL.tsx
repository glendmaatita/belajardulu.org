import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// FCL vs LCL: pilih moda muat berdasarkan volume. LCL dibayar per m3; FCL biaya tetap per kontainer.
export function SimulatorFCLvsLCL() {
  const [volume, setVolume] = useState(12); // m3
  const [tarifLCL, setTarifLCL] = useState(700_000); // per m3
  const [biayaFCL, setBiayaFCL] = useState(18_000_000); // per kontainer 20ft (~28 m3)

  const r = useMemo(() => {
    const kapasitas = 28; // m3 kontainer 20ft
    const biayaLCL = volume * tarifLCL;
    const titikImpas = biayaFCL / tarifLCL; // m3 saat LCL = FCL
    const pilihan = biayaLCL <= biayaFCL ? "LCL" : "FCL";
    const hemat = Math.abs(biayaLCL - biayaFCL);
    return { kapasitas, biayaLCL, titikImpas, pilihan, hemat };
  }, [volume, tarifLCL, biayaFCL]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📦 Simulator FCL vs LCL</div>
      <p className="mb-4 text-xs text-ink-faint">
        Untuk volume kecil, LCL (bayar per m3) lebih hemat. Setelah melewati titik impas, FCL (satu kontainer penuh) lebih murah. Cari titik impasnya.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Volume barang" value={volume} set={setVolume} min={1} max={28} step={1} fmt={(v) => `${v} m3`} />
        <Slider label="Tarif LCL / m3" value={tarifLCL} set={setTarifLCL} min={300_000} max={1_500_000} step={50_000} fmt={(v) => rupiah(v)} />
        <Slider label="Biaya FCL / kontainer" value={biayaFCL} set={setBiayaFCL} min={8_000_000} max={40_000_000} step={1_000_000} fmt={(v) => rupiah(v)} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-sky-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Biaya LCL (volume {volume} m3)</div>
          <div className="text-xl font-extrabold tnum text-sky-700">{rupiah(Math.round(r.biayaLCL))}</div>
        </div>
        <div className="rounded-xl bg-amber-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Biaya FCL (1 kontainer)</div>
          <div className="text-xl font-extrabold tnum text-amber-700">{rupiah(Math.round(biayaFCL))}</div>
        </div>
      </div>

      <div className="mt-3 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Pilihan lebih hemat</div>
        <div className="text-2xl font-extrabold text-emerald-700">{r.pilihan}</div>
        <div className="mt-1 text-xs text-ink-faint">
          Lebih hemat {rupiah(Math.round(r.hemat))}. Titik impas di sekitar <b>{r.titikImpas.toFixed(1)} m3</b>.
        </div>
      </div>
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
