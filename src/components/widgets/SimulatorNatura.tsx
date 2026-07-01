import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const TARIF_BADAN = 0.22;

// UU HPP mengubah perlakuan natura/kenikmatan. Secara umum kini natura BOLEH
// dikurangkan oleh pemberi (deductible) dan menjadi OBJEK PPh bagi penerima,
// kecuali jenis yang dikecualikan (PMK 66/2023): makanan/minuman di tempat kerja,
// natura di daerah tertentu, keharusan pekerjaan, dan di bawah ambang tertentu.
export function SimulatorNatura() {
  const [nilai, setNilai] = useState(200_000_000); // nilai natura setahun
  const [tarifKaryawan, setTarifKaryawan] = useState(15); // tarif PPh 21 efektif karyawan
  const [dikecualikan, setDikecualikan] = useState(false);

  const r = useMemo(() => {
    const t = tarifKaryawan / 100;
    // Pasca HPP: deductible bagi perusahaan kecuali dikecualikan (tetap deductible bila terkait 3M)
    const hematBadan = nilai * TARIF_BADAN; // penghematan PPh Badan karena boleh dibebankan
    // Objek PPh 21 bagi karyawan, kecuali jika dikecualikan
    const pajakKaryawan = dikecualikan ? 0 : nilai * t;
    const netManfaat = hematBadan - pajakKaryawan;
    return { hematBadan, pajakKaryawan, netManfaat };
  }, [nilai, tarifKaryawan, dikecualikan]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🍱 Simulator Natura & Kenikmatan (pasca UU HPP)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Sejak UU HPP, natura umumnya boleh dikurangkan perusahaan tetapi menjadi objek PPh karyawan, kecuali jenis
        yang dikecualikan (mis. makanan di tempat kerja atau di bawah ambang tertentu).
      </p>

      <Slider label="Nilai natura/kenikmatan setahun" value={nilai} min={20_000_000} max={1_000_000_000} step={10_000_000} fmt={rupiah} onChange={setNilai} />
      <Slider label="Tarif efektif PPh 21 karyawan" value={tarifKaryawan} min={5} max={35} step={1} fmt={(n) => `${n}%`} onChange={setTarifKaryawan} />

      <label className="mb-4 flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink-soft">
        <input type="checkbox" checked={dikecualikan} onChange={(e) => setDikecualikan(e.target.checked)} className="h-4 w-4 accent-brand-600" />
        Natura termasuk yang dikecualikan dari objek PPh karyawan
      </label>

      <div className="grid gap-3 sm:grid-cols-3">
        <Box label="Hemat PPh Badan (deductible)" value={rupiah(Math.round(r.hematBadan))} color="text-emerald-700" />
        <Box label="PPh tambahan karyawan" value={rupiah(Math.round(r.pajakKaryawan))} color="text-rose-700" />
        <Box label="Manfaat bersih bagi grup" value={rupiah(Math.round(r.netManfaat))} color={r.netManfaat >= 0 ? "text-brand-700" : "text-rose-700"} />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        {dikecualikan
          ? "Karena dikecualikan, karyawan tidak terkena PPh, sementara perusahaan tetap menghemat pajak: paling optimal."
          : "Perencanaan natura kini menimbang penghematan PPh Badan terhadap pajak yang menempel ke karyawan."}
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

function Slider({ label, value, min, max, step, fmt, onChange }: { label: string; value: number; min: number; max: number; step: number; fmt: (n: number) => string; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
