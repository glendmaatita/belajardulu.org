import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

function pphProgresif(pkp: number): number {
  const brackets = [
    [60_000_000, 0.05],
    [190_000_000, 0.15],
    [250_000_000, 0.25],
    [4_500_000_000, 0.3],
    [Infinity, 0.35],
  ] as const;
  let sisa = Math.max(0, pkp);
  let pajak = 0;
  for (const [lebar, tarif] of brackets) {
    const kena = Math.min(sisa, lebar);
    pajak += kena * tarif;
    sisa -= kena;
    if (sisa <= 0) break;
  }
  return pajak;
}

// Bandingkan PPh Final 0,5% vs pembukuan (tarif normal) untuk Orang Pribadi.
export function SimulatorPembukuanVsFinal() {
  const [omzet, setOmzet] = useState(1_200_000_000);
  const [margin, setMargin] = useState(15); // % laba bersih

  const r = useMemo(() => {
    const final = Math.max(0, omzet - 500_000_000) * 0.005;
    const laba = omzet * (margin / 100);
    const pkp = Math.max(0, laba - 54_000_000); // asumsi PTKP TK/0
    const pembukuan = pphProgresif(pkp);
    const finalLebihMurah = final <= pembukuan;
    return { final, laba, pembukuan, finalLebihMurah, selisih: Math.abs(final - pembukuan) };
  }, [omzet, margin]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Bandingkan: Final 0,5% vs Pembukuan</div>
      <p className="mb-4 text-xs text-ink-faint">
        Skema final 0,5% bersifat opsional. Untuk usaha dengan margin tipis, kadang pembukuan (tarif normal) malah
        lebih murah. Bandingkan di sini (asumsi Orang Pribadi, PTKP lajang).
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-semibold text-ink-soft">Omzet setahun</span>
            <span className="tnum text-sm font-bold text-ink">{rupiah(omzet)}</span>
          </div>
          <input
            type="range"
            min={500_000_000}
            max={4_800_000_000}
            step={100_000_000}
            value={omzet}
            onChange={(e) => setOmzet(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
          />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-semibold text-ink-soft">Margin laba bersih</span>
            <span className="tnum text-sm font-bold text-ink">{angka(margin)}%</span>
          </div>
          <input
            type="range"
            min={1}
            max={60}
            step={1}
            value={margin}
            onChange={(e) => setMargin(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
          />
          <div className="mt-1 text-right text-xs text-ink-faint">Laba: {rupiah(Math.round(r.laba))}</div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Opt active={r.finalLebihMurah} title="PPh Final 0,5%" value={rupiah(Math.round(r.final))} note="Mudah, tanpa pembukuan rinci" />
        <Opt active={!r.finalLebihMurah} title="Pembukuan (tarif normal)" value={rupiah(Math.round(r.pembukuan))} note="Perlu catat laba, tapi bisa lebih hemat" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        💡 Untuk kondisi ini, <b>{r.finalLebihMurah ? "PPh Final 0,5%" : "pembukuan"}</b> lebih hemat sekitar{" "}
        <b>{rupiah(Math.round(r.selisih))}</b>. Makin tipis margin, pembukuan makin menarik; makin tebal margin, final
        makin menguntungkan.
      </p>
    </div>
  );
}

function Opt({ active, title, value, note }: { active: boolean; title: string; value: string; note: string }) {
  return (
    <div className={`rounded-xl border p-3 ${active ? "border-emerald-400 bg-emerald-50" : "border-line bg-white opacity-75"}`}>
      <div className="text-xs text-ink-faint">{title}</div>
      <div className="text-lg font-extrabold tnum text-ink">{value}</div>
      <div className="text-[11px] text-ink-faint">{note}</div>
      {active && <div className="mt-1 text-xs font-semibold text-emerald-600">← lebih hemat</div>}
    </div>
  );
}
