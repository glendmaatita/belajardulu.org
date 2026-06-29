import { useMemo, useState } from "react";
import { angka } from "../../lib/format";

// Jadwal vesting token: 0 sebelum cliff, lalu linear sampai 100% di akhir durasi.
export function SimulatorVesting() {
  const [alokasiJuta, setAlokasiJuta] = useState(100); // juta token
  const [cliff, setCliff] = useState(12); // bulan
  const [durasi, setDurasi] = useState(48); // bulan total
  const [berjalan, setBerjalan] = useState(18); // bulan berjalan

  const r = useMemo(() => {
    const totalToken = alokasiJuta * 1_000_000;
    let pct: number;
    if (berjalan < cliff) {
      pct = 0;
    } else if (berjalan >= durasi) {
      pct = 1;
    } else {
      pct = berjalan / durasi;
    }
    const unlocked = totalToken * pct;
    const terkunci = totalToken - unlocked;
    return { totalToken, pct, unlocked, terkunci };
  }, [alokasiJuta, cliff, durasi, berjalan]);

  const pctTampil = Math.round(r.pct * 100);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔓 Simulator Vesting Token</div>
      <p className="mb-4 text-xs text-ink-faint">
        Token tim dan investor biasanya tidak langsung beredar. Ada masa tunggu (cliff), lalu dibuka bertahap (linear)
        sampai durasi vesting selesai.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Total alokasi" value={alokasiJuta} set={setAlokasiJuta} min={1} max={500} step={1} fmt={(v) => `${angka(v)} juta token`} />
        <Slider label="Masa cliff" value={cliff} set={setCliff} min={0} max={24} step={1} fmt={(v) => `${v} bulan`} />
        <Slider label="Durasi vesting total" value={durasi} set={setDurasi} min={Math.max(cliff, 1)} max={60} step={1} fmt={(v) => `${v} bulan`} />
        <Slider label="Bulan berjalan" value={berjalan} set={setBerjalan} min={0} max={72} step={1} fmt={(v) => `${v} bulan`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">Sudah ter-unlock</div>
          <div className="tnum text-2xl font-extrabold text-emerald-700">{pctTampil}%</div>
        </div>
        <div className="rounded-xl bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">Token beredar</div>
          <div className="tnum text-2xl font-extrabold text-blue-700">{angka(Math.round(r.unlocked))}</div>
        </div>
        <div className="rounded-xl bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">Token terkunci</div>
          <div className="tnum text-2xl font-extrabold text-amber-600">{angka(Math.round(r.terkunci))}</div>
        </div>
      </div>

      <div className="mt-4 flex h-7 overflow-hidden rounded-lg bg-line">
        <div
          className="flex items-center justify-center bg-emerald-500 text-xs font-bold text-white"
          style={{ width: `${pctTampil}%` }}
        >
          {pctTampil > 14 ? "Beredar" : ""}
        </div>
        <div
          className="flex items-center justify-center bg-amber-400 text-xs font-bold text-white"
          style={{ width: `${100 - pctTampil}%` }}
        >
          {100 - pctTampil > 14 ? "Terkunci" : ""}
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        {berjalan < cliff ? (
          <>
            Masih dalam masa cliff ({cliff} bulan). Belum ada token yang beredar sampai cliff terlewati. Ini mencegah tim
            menjual token terlalu dini.
          </>
        ) : berjalan >= durasi ? (
          <>
            Vesting selesai. Seluruh <b>{angka(r.totalToken)}</b> token sudah beredar penuh.
          </>
        ) : (
          <>
            Setelah cliff, token terbuka linear. Pada bulan ke-{berjalan} dari {durasi}, sekitar <b>{pctTampil}%</b> sudah
            beredar dan sisanya masih terkunci.
          </>
        )}
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
