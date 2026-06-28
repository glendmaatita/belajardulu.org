import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Sustainability-Linked Bond: kupon naik (step-up) jika target keberlanjutan (KPI) tidak tercapai.
export function SimulatorSLB() {
  const [pokok, setPokok] = useState(500_000_000_000); // nilai obligasi
  const [kupon, setKupon] = useState(6); // kupon dasar %
  const [stepUp, setStepUp] = useState(25); // step-up dalam basis poin (bps)
  const [tahunSisa, setTahunSisa] = useState(5); // tahun tersisa setelah penilaian KPI
  const [tercapai, setTercapai] = useState(false); // apakah KPI tercapai

  const r = useMemo(() => {
    const kuponDasar = pokok * (kupon / 100);
    const kuponBaru = tercapai ? kuponDasar : pokok * ((kupon + stepUp / 100) / 100);
    const tambahanPerTahun = kuponBaru - kuponDasar;
    const totalTambahan = tambahanPerTahun * tahunSisa;
    return { kuponDasar, kuponBaru, tambahanPerTahun, totalTambahan };
  }, [pokok, kupon, stepUp, tahunSisa, tercapai]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔗 Simulator Sustainability-Linked Bond</div>
      <p className="mb-4 text-xs text-ink-faint">
        Pada SLB, kupon naik (step-up) bila target keberlanjutan tidak tercapai. Lihat berapa biaya tambahan bagi penerbit jika gagal.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Nilai pokok obligasi" value={pokok} set={setPokok} min={50_000_000_000} max={2_000_000_000_000} step={50_000_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Kupon dasar" value={kupon} set={setKupon} min={3} max={12} step={0.5} fmt={(v) => `${v}%`} />
        <Slider label="Step-up (bps)" value={stepUp} set={setStepUp} min={0} max={75} step={5} fmt={(v) => `${v} bps`} />
        <Slider label="Tahun tersisa" value={tahunSisa} set={setTahunSisa} min={1} max={10} step={1} fmt={(v) => `${v} tahun`} />
      </div>

      <div className="mt-4 flex rounded-lg bg-canvas p-1 text-sm font-bold">
        <button onClick={() => setTercapai(true)} className={`flex-1 rounded-md py-2 transition ${tercapai ? "bg-emerald-500 text-white" : "text-ink-soft"}`}>
          KPI tercapai
        </button>
        <button onClick={() => setTercapai(false)} className={`flex-1 rounded-md py-2 transition ${!tercapai ? "bg-rose-500 text-white" : "text-ink-soft"}`}>
          KPI gagal
        </button>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">Kupon per tahun saat ini</div>
          <div className="text-lg font-extrabold tnum text-ink">{rupiah(Math.round(r.kuponBaru))}</div>
          <div className="text-xs text-ink-faint">{tercapai ? `tetap ${kupon}%` : `${kupon}% + ${stepUp} bps`}</div>
        </div>
        <div className={`rounded-xl p-3 text-center ${tercapai ? "bg-emerald-50" : "bg-rose-50"}`}>
          <div className="text-xs text-ink-faint">Total biaya bunga tambahan</div>
          <div className={`text-lg font-extrabold tnum ${tercapai ? "text-emerald-700" : "text-rose-700"}`}>{rupiah(Math.round(r.totalTambahan))}</div>
          <div className="text-xs text-ink-faint">selama {tahunSisa} tahun</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Step-up membuat janji iklim punya konsekuensi finansial nyata. Berbeda dari green bond, dana SLB tidak diikat untuk proyek hijau tertentu, tetapi kinerjanya diikat ke target.
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
