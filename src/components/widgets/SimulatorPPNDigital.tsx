import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const TARIF_PPN = 0.11; // PPN PMSE 11%

// PPN PMSE (Perdagangan Melalui Sistem Elektronik): penjual luar negeri yang
// menjual produk digital ke konsumen Indonesia ditunjuk memungut PPN 11% dan
// menyetorkannya. Berlaku sejak 2020.
export function SimulatorPPNDigital() {
  const [hargaLangganan, setHargaLangganan] = useState(150_000); // per pelanggan per bulan
  const [pelanggan, setPelanggan] = useState(100_000);

  const r = useMemo(() => {
    const dppBulanan = hargaLangganan * pelanggan;
    const ppnBulanan = dppBulanan * TARIF_PPN;
    const ppnTahunan = ppnBulanan * 12;
    return { dppBulanan, ppnBulanan, ppnTahunan };
  }, [hargaLangganan, pelanggan]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">💻 Simulator PPN Digital (PMSE)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Platform digital luar negeri yang menjual langganan ke konsumen Indonesia ditunjuk sebagai pemungut PPN 11%.
        Lihat berapa PPN yang terkumpul dari basis pelanggan.
      </p>

      <Slider label="Harga langganan per pelanggan/bulan" value={hargaLangganan} min={20_000} max={500_000} step={10_000} onChange={setHargaLangganan} />
      <Slider label="Jumlah pelanggan" value={pelanggan} min={1_000} max={1_000_000} step={1_000} onChange={setPelanggan} />

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Box label="DPP per bulan" value={rupiah(Math.round(r.dppBulanan))} color="text-sky-700" />
        <Box label="PPN PMSE per bulan" value={rupiah(Math.round(r.ppnBulanan))} color="text-brand-700" />
        <Box label="PPN setahun" value={rupiah(Math.round(r.ppnTahunan))} color="text-emerald-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Aturan PMSE menutup celah lama: konsumsi jasa digital lintas negara kini dipajaki PPN seperti barang/jasa
        domestik, menjaga keadilan terhadap pelaku usaha lokal.
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

function Slider({ label, value, min, max, step, onChange }: { label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{rupiah(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
