import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Dana darurat adalah tabungan khusus untuk keadaan mendesak. Besarnya diukur
// dalam kelipatan pengeluaran bulanan, tergantung tanggungan.
const PROFIL = [
  { id: "lajang", label: "Lajang", bulan: 4 },
  { id: "menikah", label: "Menikah tanpa anak", bulan: 6 },
  { id: "keluarga", label: "Keluarga dengan anak", bulan: 9 },
  { id: "freelance", label: "Penghasilan tidak tetap", bulan: 12 },
];

export function KalkulatorDanaDarurat() {
  const [pengeluaran, setPengeluaran] = useState(4_000_000);
  const [profil, setProfil] = useState("menikah");
  const [terkumpul, setTerkumpul] = useState(5_000_000);

  const r = useMemo(() => {
    const p = PROFIL.find((x) => x.id === profil)!;
    const target = pengeluaran * p.bulan;
    const persen = target > 0 ? Math.min(100, (terkumpul / target) * 100) : 0;
    const kurang = Math.max(0, target - terkumpul);
    return { p, target, persen, kurang };
  }, [pengeluaran, profil, terkumpul]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">💧 Kalkulator Dana Darurat</div>
      <p className="mb-4 text-xs text-ink-faint">
        Dana darurat adalah bantalan untuk kejadian tak terduga (sakit, kehilangan pekerjaan). Idealnya beberapa kali
        pengeluaran bulanan, makin banyak tanggungan makin besar targetnya.
      </p>

      <Slider label="Pengeluaran wajib per bulan" value={pengeluaran} min={1_000_000} max={30_000_000} step={500_000} onChange={setPengeluaran} />

      <div className="mb-3 flex flex-wrap gap-2">
        {PROFIL.map((p) => (
          <button key={p.id} onClick={() => setProfil(p.id)} className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${profil === p.id ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft"}`}>
            {p.label} ({p.bulan} bln)
          </button>
        ))}
      </div>

      <Slider label="Dana darurat terkumpul" value={terkumpul} min={0} max={100_000_000} step={1_000_000} onChange={setTerkumpul} />

      <div className="mt-4 h-6 w-full overflow-hidden rounded-full bg-line">
        <div className="flex h-full items-center justify-center bg-emerald-500 text-[11px] font-bold text-white" style={{ width: `${r.persen}%` }}>
          {r.persen.toFixed(0)}%
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Box label={`Target (${r.p.bulan} bulan pengeluaran)`} value={rupiah(Math.round(r.target))} color="text-brand-700" />
        <Box label={r.kurang > 0 ? "Masih perlu dikumpulkan" : "Target tercapai"} value={r.kurang > 0 ? rupiah(Math.round(r.kurang)) : "Aman"} color={r.kurang > 0 ? "text-rose-700" : "text-emerald-700"} />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Simpan dana darurat di tempat yang mudah dicairkan tetapi tidak tergoda dipakai, seperti tabungan terpisah atau
        reksa dana pasar uang.
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
