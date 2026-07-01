import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Hari kerja dibagi dua: kerja perlu (necessary labour) yang menutup upah, dan
// kerja lebih (surplus labour) yang menghasilkan nilai lebih bagi pemilik modal.
export function SimulatorNilaiLebih() {
  const [jamKerja, setJamKerja] = useState(8);
  const [nilaiPerJam, setNilaiPerJam] = useState(50_000); // nilai yang diciptakan buruh per jam
  const [upahHarian, setUpahHarian] = useState(150_000);

  const r = useMemo(() => {
    const nilaiTotal = jamKerja * nilaiPerJam;
    const jamPerlu = nilaiPerJam > 0 ? Math.min(jamKerja, upahHarian / nilaiPerJam) : 0;
    const jamLebih = jamKerja - jamPerlu;
    const nilaiLebih = Math.max(0, nilaiTotal - upahHarian);
    const tingkatEksploitasi = upahHarian > 0 ? (nilaiLebih / upahHarian) * 100 : 0;
    return { nilaiTotal, jamPerlu, jamLebih, nilaiLebih, tingkatEksploitasi };
  }, [jamKerja, nilaiPerJam, upahHarian]);

  const pctPerlu = r.nilaiTotal > 0 ? (r.jamPerlu / jamKerja) * 100 : 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚙️ Simulator Nilai Lebih</div>
      <p className="mb-4 text-xs text-ink-faint">
        Menurut Marx, buruh menciptakan nilai lebih besar daripada upahnya. Bagian hari kerja yang menutup upah disebut
        kerja perlu; sisanya adalah kerja lebih yang menjadi nilai lebih bagi pemilik modal.
      </p>

      <Slider label="Panjang hari kerja" value={jamKerja} min={4} max={14} step={1} fmt={(n) => `${n} jam`} onChange={setJamKerja} />
      <Slider label="Nilai diciptakan per jam" value={nilaiPerJam} min={20_000} max={150_000} step={5_000} fmt={rupiah} onChange={setNilaiPerJam} />
      <Slider label="Upah harian buruh" value={upahHarian} min={50_000} max={600_000} step={10_000} fmt={rupiah} onChange={setUpahHarian} />

      <div className="mt-4 h-7 w-full overflow-hidden rounded-full bg-line">
        <div className="flex h-full">
          <div className="flex h-full items-center justify-center bg-emerald-500 text-[11px] font-bold text-white" style={{ width: `${pctPerlu}%` }}>
            Kerja perlu
          </div>
          <div className="flex h-full items-center justify-center bg-rose-500 text-[11px] font-bold text-white" style={{ width: `${100 - pctPerlu}%` }}>
            Kerja lebih
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Box label="Nilai diciptakan" value={rupiah(Math.round(r.nilaiTotal))} color="text-sky-700" />
        <Box label="Nilai lebih (untuk modal)" value={rupiah(Math.round(r.nilaiLebih))} color="text-rose-700" />
        <Box label="Tingkat eksploitasi" value={`${r.tingkatEksploitasi.toFixed(0)}%`} color="text-brand-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Dari {jamKerja} jam, sekitar {r.jamPerlu.toFixed(1)} jam menutup upah dan {r.jamLebih.toFixed(1)} jam
        menghasilkan nilai lebih. Makin panjang kerja lebih, makin tinggi tingkat eksploitasi.
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
