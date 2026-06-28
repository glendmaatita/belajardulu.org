import { useMemo, useState } from "react";

// Transmisi BI Rate: perubahan suku bunga acuan menggeser bunga deposito & kredit,
// lalu memengaruhi cicilan dan daya beli. Ilustrasi edukatif sederhana.
export function SimulatorTransmisiSukuBunga() {
  const [biRate, setBiRate] = useState(6); // %
  const [pinjaman, setPinjaman] = useState(500_000_000); // pokok KPR
  const [tenor, setTenor] = useState(15); // tahun

  const r = useMemo(() => {
    // spread ilustrasi: bunga kredit = BI rate + 4%, bunga deposito = BI rate - 1,5%
    const bungaKredit = biRate + 4;
    const bungaDeposito = Math.max(0, biRate - 1.5);
    const i = bungaKredit / 100 / 12;
    const n = tenor * 12;
    const cicilan = i > 0 ? (pinjaman * i) / (1 - Math.pow(1 + i, -n)) : pinjaman / n;
    return { bungaKredit, bungaDeposito, cicilan };
  }, [biRate, pinjaman, tenor]);

  const fmt = (n: number) => "Rp" + Math.round(n).toLocaleString("id-ID");

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔁 Simulator Transmisi Suku Bunga</div>
      <p className="mb-4 text-xs text-ink-faint">
        Geser suku bunga acuan (BI Rate) dan lihat dampaknya pada bunga kredit, bunga deposito, dan cicilan KPR. Ilustrasi edukatif.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="BI Rate (acuan)" value={biRate} set={setBiRate} min={3} max={10} step={0.25} fmt={(v) => `${v}%`} />
        <Slider label="Pokok pinjaman" value={pinjaman} set={setPinjaman} min={100_000_000} max={2_000_000_000} step={50_000_000} fmt={fmt} />
        <Slider label="Tenor" value={tenor} set={setTenor} min={5} max={30} step={1} fmt={(v) => `${v} tahun`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Stat label="Bunga kredit (~BI+4%)" value={`${r.bungaKredit.toFixed(2)}%`} tone="rose" />
        <Stat label="Bunga deposito (~BI-1,5%)" value={`${r.bungaDeposito.toFixed(2)}%`} tone="emerald" />
        <Stat label="Cicilan KPR per bulan" value={fmt(r.cicilan)} tone="sky" />
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Saat BI menaikkan suku bunga, cicilan kredit naik dan menabung jadi lebih menarik (mendinginkan ekonomi & menekan inflasi). Saat diturunkan, kebalikannya untuk mendorong pertumbuhan.
      </p>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: "rose" | "emerald" | "sky" }) {
  const map = { rose: "text-rose-700", emerald: "text-emerald-700", sky: "text-sky-700" };
  return (
    <div className="rounded-xl bg-slate-50 p-3 text-center">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${map[tone]}`}>{value}</div>
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
