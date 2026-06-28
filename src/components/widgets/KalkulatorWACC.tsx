import { useMemo, useState } from "react";
import { angka } from "../../lib/format";

// WACC = (E/V)*Ke + (D/V)*Kd*(1-tax)
export function KalkulatorWACC() {
  const [equity, setEquity] = useState(600); // Rp miliar
  const [debt, setDebt] = useState(400); // Rp miliar
  const [ke, setKe] = useState(15); // cost of equity %
  const [kd, setKd] = useState(9); // cost of debt %
  const [tax, setTax] = useState(22); // %

  const r = useMemo(() => {
    const v = equity + debt;
    const we = v ? equity / v : 0;
    const wd = v ? debt / v : 0;
    const kdAfter = kd * (1 - tax / 100);
    const wacc = we * ke + wd * kdAfter;
    return { we, wd, kdAfter, wacc };
  }, [equity, debt, ke, kd, tax]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Kalkulator WACC</div>
      <p className="mb-4 text-xs text-ink-faint">
        WACC (biaya modal rata-rata tertimbang) adalah tingkat minimum yang harus dihasilkan perusahaan. Utang lebih
        murah karena bunganya mengurangi pajak (tax shield).
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Nilai ekuitas (E)" value={equity} set={setEquity} min={0} max={2000} step={50} fmt={(v) => `Rp${angka(v)} M`} />
        <Slider label="Nilai utang (D)" value={debt} set={setDebt} min={0} max={2000} step={50} fmt={(v) => `Rp${angka(v)} M`} />
        <Slider label="Biaya ekuitas (Ke)" value={ke} set={setKe} min={4} max={30} step={0.5} fmt={(v) => `${v}%`} />
        <Slider label="Biaya utang (Kd)" value={kd} set={setKd} min={2} max={20} step={0.5} fmt={(v) => `${v}%`} />
        <Slider label="Tarif pajak" value={tax} set={setTax} min={0} max={35} step={1} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 flex h-7 overflow-hidden rounded-lg">
        <div className="flex items-center justify-center bg-sky-500 text-xs font-bold text-white" style={{ width: `${r.we * 100}%` }}>
          {r.we > 0.12 ? `Ekuitas ${(r.we * 100).toFixed(0)}%` : ""}
        </div>
        <div className="flex items-center justify-center bg-amber-500 text-xs font-bold text-white" style={{ width: `${r.wd * 100}%` }}>
          {r.wd > 0.12 ? `Utang ${(r.wd * 100).toFixed(0)}%` : ""}
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4 text-center">
        <div className="text-xs text-ink-faint">WACC (biaya modal)</div>
        <div className="text-3xl font-extrabold tnum text-brand-700">{r.wacc.toFixed(2)}%</div>
        <div className="mt-1 text-xs text-ink-faint">
          Biaya utang setelah pajak: {r.kdAfter.toFixed(2)}% (dari {angka(kd)}% berkat tax shield). Proyek hanya layak
          jika imbal hasilnya di atas WACC ini.
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600" />
    </div>
  );
}
