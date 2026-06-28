import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

const BULAN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
const BEBAS = 500_000_000;
const BATAS = 4_800_000_000;

// Melacak omzet kumulatif sepanjang tahun (Orang Pribadi) dan kapan PPh final mulai berlaku.
export function SimulatorOmzetKumulatif() {
  const [omzetBulan, setOmzetBulan] = useState(60_000_000);

  const r = useMemo(() => {
    const rows = BULAN.map((b, i) => {
      const cum = omzetBulan * (i + 1);
      const prev = omzetBulan * i;
      const taxable = Math.max(0, cum - BEBAS) - Math.max(0, prev - BEBAS);
      const pajak = taxable * 0.005;
      return { b, cum, pajak, kena: taxable > 0 };
    });
    const totalPajak = rows.reduce((s, x) => s + x.pajak, 0);
    const omzetTahun = omzetBulan * 12;
    const bulanMulai = rows.find((x) => x.kena)?.b ?? null;
    return { rows, totalPajak, omzetTahun, bulanMulai, lewatBatas: omzetTahun > BATAS };
  }, [omzetBulan]);

  const maxCum = r.omzetTahun || 1;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📈 Simulator Omzet Kumulatif (Orang Pribadi)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Lihat kapan dalam setahun omzetmu melewati Rp500 juta dan PPh final 0,5% mulai berlaku.
      </p>

      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">Omzet per bulan</span>
        <span className="tnum text-sm font-bold text-ink">{rupiah(omzetBulan)}</span>
      </div>
      <input
        type="range"
        min={0}
        max={600_000_000}
        step={5_000_000}
        value={omzetBulan}
        onChange={(e) => setOmzetBulan(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
      />

      {/* 12 month bars */}
      <div className="mt-5 flex h-40 items-end gap-1.5">
        {r.rows.map((row) => (
          <div key={row.b} className="flex flex-1 flex-col items-center justify-end">
            <div
              className="w-full rounded-t"
              style={{
                height: `${(row.cum / maxCum) * 100}%`,
                background: row.kena ? "#f59e0b" : "#10b981",
                minHeight: 3,
              }}
              title={`${row.b}: ${rupiah(row.cum)}`}
            />
            <div className="mt-1 text-[10px] text-ink-faint">{row.b}</div>
          </div>
        ))}
      </div>
      <div className="mt-1 flex gap-3 text-[11px] text-ink-faint">
        <span>🟢 masih bebas</span>
        <span>🟡 sudah kena 0,5%</span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Card label="Omzet setahun" value={rupiah(r.omzetTahun)} accent="text-ink" />
        <Card
          label="Mulai kena pajak"
          value={r.bulanMulai ? `bulan ${r.bulanMulai}` : "tidak kena"}
          accent="text-amber-700"
        />
        <Card label="Total PPh final setahun" value={rupiah(Math.round(r.totalPajak))} accent="text-brand-700" />
      </div>
      {r.lewatBatas && (
        <div className="mt-3 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">
          ⚠️ Omzet setahun {rupiah(r.omzetTahun)} melewati batas Rp4,8 miliar. Tahun depan wajib pembukuan dan jadi PKP.
        </div>
      )}
      <p className="mt-3 text-xs text-ink-faint">
        Total omzet {angka(12)} bulan dihitung kumulatif. Selama kumulatif masih di bawah Rp500 juta, pajaknya Rp0.
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
