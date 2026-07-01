import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const TARIF = 0.22;

// Transaksi antarperusahaan terafiliasi harus memakai harga wajar (arm's length).
// Jika harga jual ke afiliasi di bawah harga wajar, laba (dan pajak) di Indonesia
// terkikis, dan DJP dapat mengoreksinya.
export function SimulatorTransferPricing() {
  const [biaya, setBiaya] = useState(100_000_000); // biaya produksi per unit batch
  const [markupWajar, setMarkupWajar] = useState(25); // markup arm's length (%)
  const [hargaAfiliasi, setHargaAfiliasi] = useState(110_000_000); // harga ke afiliasi

  const r = useMemo(() => {
    const hargaWajar = biaya * (1 + markupWajar / 100);
    const labaDilaporkan = hargaAfiliasi - biaya;
    const labaWajar = hargaWajar - biaya;
    const koreksi = Math.max(0, labaWajar - labaDilaporkan);
    const tambahanPajak = koreksi * TARIF;
    return { hargaWajar, labaDilaporkan, labaWajar, koreksi, tambahanPajak };
  }, [biaya, markupWajar, hargaAfiliasi]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔀 Simulator Transfer Pricing</div>
      <p className="mb-4 text-xs text-ink-faint">
        Harga transaksi ke perusahaan afiliasi harus sewajar transaksi dengan pihak independen (prinsip arm's length).
        Jika terlalu rendah, laba berpindah ke luar dan DJP dapat mengoreksi.
      </p>

      <Slider label="Biaya produksi" value={biaya} min={20_000_000} max={500_000_000} step={5_000_000} onChange={setBiaya} />
      <Slider label="Markup wajar (pembanding)" value={markupWajar} min={5} max={60} step={1} fmt={(n) => `${n}%`} onChange={setMarkupWajar} />
      <Slider label="Harga jual ke afiliasi" value={hargaAfiliasi} min={biaya} max={biaya * 2} step={5_000_000} onChange={setHargaAfiliasi} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Box label="Harga wajar (arm's length)" value={rupiah(Math.round(r.hargaWajar))} color="text-sky-700" />
        <Box label="Laba dilaporkan" value={rupiah(Math.round(r.labaDilaporkan))} color="text-ink" />
        <Box label="Koreksi DJP atas laba" value={rupiah(Math.round(r.koreksi))} color="text-rose-700" />
        <Box label="Tambahan PPh akibat koreksi" value={rupiah(Math.round(r.tambahanPajak))} color="text-rose-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        {r.koreksi > 0
          ? "Harga ke afiliasi di bawah wajar: laba kurang dilaporkan dan rawan dikoreksi. Dokumentasi transfer pricing wajib disiapkan."
          : "Harga sudah sama atau di atas wajar: tidak ada koreksi, posisi pajak aman."}
      </p>
    </div>
  );
}

function Box({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-xl bg-canvas p-4">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${color}`}>{value}</div>
    </div>
  );
}

function Slider({ label, value, min, max, step, fmt, onChange }: { label: string; value: number; min: number; max: number; step: number; fmt?: (n: number) => string; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt ? fmt(value) : rupiah(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
      />
    </div>
  );
}
