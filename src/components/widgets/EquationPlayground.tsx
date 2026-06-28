import { useState } from "react";
import { rupiah } from "../../lib/format";

export function EquationPlayground() {
  const [liabilities, setLiabilities] = useState(20_000_000);
  const [equity, setEquity] = useState(50_000_000);
  const assets = liabilities + equity;

  const bar = (v: number) => Math.max(2, (v / assets) * 100);

  return (
    <div className="my-6 card p-5">
      <div className="mb-4 flex items-center gap-2 text-sm font-bold text-brand-700">
        🧮 Playground Persamaan Akuntansi
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Slider
          label="Kewajiban (Utang)"
          color="bg-amber-500"
          value={liabilities}
          onChange={setLiabilities}
        />
        <Slider
          label="Ekuitas (Modal)"
          color="bg-blue-500"
          value={equity}
          onChange={setEquity}
        />
      </div>

      <div className="mt-6 rounded-xl bg-canvas p-4">
        <div className="mb-2 text-center text-sm font-semibold text-ink-faint">
          ASET = KEWAJIBAN + EKUITAS
        </div>
        <div className="flex items-center justify-center gap-3 text-lg font-bold tnum">
          <span className="text-emerald-600">{rupiah(assets)}</span>
          <span className="text-ink-faint">=</span>
          <span className="text-amber-600">{rupiah(liabilities)}</span>
          <span className="text-ink-faint">+</span>
          <span className="text-blue-600">{rupiah(equity)}</span>
        </div>

        <div className="mt-4 flex h-8 overflow-hidden rounded-lg">
          <div className="bg-amber-500" style={{ width: `${bar(liabilities)}%` }} title="Kewajiban" />
          <div className="bg-blue-500" style={{ width: `${bar(equity)}%` }} title="Ekuitas" />
        </div>
        <div className="mt-2 flex justify-between text-xs text-ink-faint">
          <span>🟡 Kewajiban {Math.round((liabilities / assets) * 100)}%</span>
          <span>🔵 Ekuitas {Math.round((equity / assets) * 100)}%</span>
        </div>
        <p className="mt-3 text-center text-sm text-emerald-700">
          ✓ Total aset selalu menyesuaikan, persamaan tetap seimbang.
        </p>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  onChange,
  color,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  color: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{rupiah(value)}</span>
      </div>
      <input
        type="range"
        min={0}
        max={100_000_000}
        step={1_000_000}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-current ${color.replace("bg-", "text-")}`}
      />
    </div>
  );
}
