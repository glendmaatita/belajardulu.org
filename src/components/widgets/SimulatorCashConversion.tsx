import { useMemo, useState } from "react";
import { angka } from "../../lib/format";

// Cash Conversion Cycle = DIO + DSO - DPO. Inti manajemen modal kerja (treasury).
export function SimulatorCashConversion() {
  const [dio, setDio] = useState(60); // Days Inventory Outstanding
  const [dso, setDso] = useState(45); // Days Sales Outstanding
  const [dpo, setDpo] = useState(30); // Days Payable Outstanding

  const ccc = useMemo(() => dio + dso - dpo, [dio, dso, dpo]);
  const maxBar = Math.max(dio + dso, dpo, 1);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔄 Simulator Cash Conversion Cycle</div>
      <p className="mb-4 text-xs text-ink-faint">
        CCC mengukur berapa hari uang "terjebak" di modal kerja sebelum kembali jadi kas. Makin pendek makin sehat
        likuiditasnya. CCC = DIO + DSO - DPO.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="DIO (hari persediaan)" value={dio} set={setDio} min={0} max={180} />
        <Slider label="DSO (hari piutang)" value={dso} set={setDso} min={0} max={180} />
        <Slider label="DPO (hari utang)" value={dpo} set={setDpo} min={0} max={180} />
      </div>

      <div className="mt-5 space-y-2">
        <BarRow label="DIO + DSO (uang tertahan)" value={dio + dso} max={maxBar} color="#f59e0b" />
        <BarRow label="DPO (tempo dari pemasok)" value={dpo} max={maxBar} color="#10b981" />
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Cash Conversion Cycle</div>
        <div className={`text-3xl font-extrabold tnum ${ccc <= 30 ? "text-emerald-700" : ccc <= 60 ? "text-amber-600" : "text-rose-600"}`}>{angka(ccc)} hari</div>
        <div className="mt-1 text-xs text-ink-faint">
          {ccc <= 0
            ? "Luar biasa: pemasok mendanai operasimu (CCC negatif), seperti model ritel/marketplace tertentu."
            : ccc <= 30
            ? "Pendek dan sehat: kas cepat berputar."
            : "Cukup panjang: banyak kas tertahan di persediaan/piutang. Pertimbangkan percepat penagihan atau perpanjang tempo pemasok."}
        </div>
      </div>
    </div>
  );
}

function Slider({ label, value, set, min, max }: { label: string; value: number; set: (n: number) => void; min: number; max: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{angka(value)} hari</span>
      </div>
      <input type="range" min={min} max={max} step={1} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600" />
    </div>
  );
}

function BarRow({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  return (
    <div>
      <div className="mb-0.5 flex justify-between text-xs">
        <span className="text-ink-soft">{label}</span>
        <span className="tnum">{angka(value)} hari</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full" style={{ width: `${(value / max) * 100}%`, background: color }} />
      </div>
    </div>
  );
}
