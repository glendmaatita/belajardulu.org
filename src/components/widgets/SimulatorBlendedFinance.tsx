import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

// Blended finance: dana publik/konsesi menarik modal komersial yang jauh lebih besar.
export function SimulatorBlendedFinance() {
  const [konsesi, setKonsesi] = useState(100); // Rp miliar dana konsesi/hibah (first-loss)
  const [leverage, setLeverage] = useState(4); // x

  const r = useMemo(() => {
    const konsesiRp = konsesi * 1_000_000_000;
    const komersial = konsesiRp * leverage;
    const total = konsesiRp + komersial;
    return { konsesiRp, komersial, total };
  }, [konsesi, leverage]);

  const pubPct = (r.konsesiRp / r.total) * 100;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🤝 Simulator Blended Finance</div>
      <p className="mb-4 text-xs text-ink-faint">
        Dana publik/hibah dipakai menutup risiko awal (first-loss), sehingga investor swasta berani masuk. Sedikit dana
        publik bisa memobilisasi modal komersial berkali lipat.
      </p>

      <div className="mb-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-soft">Dana publik / konsesi (first-loss)</span>
          <span className="tnum text-sm font-bold text-ink">Rp{angka(konsesi)} miliar</span>
        </div>
        <input type="range" min={10} max={1000} step={10} value={konsesi} onChange={(e) => setKonsesi(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
      </div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">Rasio mobilisasi (leverage)</span>
        <span className="tnum text-sm font-bold text-ink">{leverage}x</span>
      </div>
      <input type="range" min={1} max={10} step={0.5} value={leverage} onChange={(e) => setLeverage(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />

      <div className="mt-5">
        <div className="flex h-9 overflow-hidden rounded-lg">
          <div className="flex items-center justify-center bg-sky-500 text-xs font-bold text-white" style={{ width: `${pubPct}%` }}>
            {pubPct >= 12 ? "Publik" : ""}
          </div>
          <div className="flex items-center justify-center bg-emerald-500 text-xs font-bold text-white" style={{ width: `${100 - pubPct}%` }}>
            Modal komersial
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Card label="Dana publik" value={rupiah(r.konsesiRp)} accent="text-sky-700" />
        <Card label="Modal komersial tertarik" value={rupiah(r.komersial)} accent="text-emerald-700" />
        <Card label="Total proyek terdanai" value={rupiah(r.total)} accent="text-brand-700" />
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        Setiap Rp1 dana publik menarik Rp{angka(leverage)} modal swasta. Inilah kekuatan blended finance dalam menutup
        kesenjangan pendanaan iklim.
      </p>
    </div>
  );
}

function Card({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-xl bg-canvas p-3">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-base font-extrabold tnum ${accent}`}>{value}</div>
    </div>
  );
}
