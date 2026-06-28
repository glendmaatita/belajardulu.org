import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// PPh orang pribadi progresif (lapisan tarif UU HPP). Hitung pajak terutang & tarif efektif.
// Lapisan: 0-60jt: 5%; 60-250jt: 15%; 250-500jt: 25%; 500jt-5M: 30%; >5M: 35%.
const PTKP = 54_000_000; // PTKP wajib pajak lajang (TK/0)

export function KalkulatorPPh() {
  const [penghasilanTahunan, setPenghasilanTahunan] = useState(120_000_000);

  const r = useMemo(() => {
    const pkp = Math.max(0, penghasilanTahunan - PTKP); // penghasilan kena pajak
    const lapis = [
      { batas: 60_000_000, tarif: 0.05 },
      { batas: 250_000_000, tarif: 0.15 },
      { batas: 500_000_000, tarif: 0.25 },
      { batas: 5_000_000_000, tarif: 0.3 },
      { batas: Infinity, tarif: 0.35 },
    ];
    let sisa = pkp;
    let bawah = 0;
    let pajak = 0;
    const rincian: { tarif: number; kena: number; pajak: number }[] = [];
    for (const l of lapis) {
      if (sisa <= 0) break;
      const lebar = l.batas - bawah;
      const kena = Math.min(sisa, lebar);
      const p = kena * l.tarif;
      pajak += p;
      rincian.push({ tarif: l.tarif, kena, pajak: p });
      sisa -= kena;
      bawah = l.batas;
    }
    const tarifEfektif = penghasilanTahunan > 0 ? (pajak / penghasilanTahunan) * 100 : 0;
    return { pkp, pajak, tarifEfektif, rincian };
  }, [penghasilanTahunan]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧾 Kalkulator PPh Orang Pribadi (Progresif)</div>
      <p className="mb-4 text-xs text-ink-faint">
        PPh orang pribadi memakai tarif progresif berlapis. Penghasilan dikurangi PTKP (Rp54 juta untuk lajang), lalu dikenai tarif bertingkat 5% sampai 35%.
      </p>

      <Slider label="Penghasilan bruto setahun" value={penghasilanTahunan} set={setPenghasilanTahunan} min={54_000_000} max={2_000_000_000} step={6_000_000} fmt={(v) => rupiah(v)} />

      <div className="mt-4 space-y-1.5 rounded-xl bg-slate-50 p-4 text-sm">
        <Row label="Penghasilan Kena Pajak (PKP)" value={rupiah(r.pkp)} />
        {r.rincian.map((x, i) => (
          <Row key={i} label={`Lapisan ${(x.tarif * 100).toFixed(0)}% atas ${rupiah(Math.round(x.kena))}`} value={rupiah(Math.round(x.pajak))} muted />
        ))}
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-rose-50 p-4 text-center">
          <div className="text-xs text-ink-faint">PPh terutang setahun</div>
          <div className="text-xl font-extrabold tnum text-rose-700">{rupiah(Math.round(r.pajak))}</div>
        </div>
        <div className="rounded-xl bg-sky-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Tarif efektif</div>
          <div className="text-xl font-extrabold tnum text-sky-700">{r.tarifEfektif.toFixed(1)}%</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Tarif efektif (pajak dibagi penghasilan total) selalu lebih rendah dari tarif lapisan tertinggi, karena hanya bagian penghasilan di lapisan atas yang kena tarif tinggi. Inilah cara kerja pajak progresif.
      </p>
    </div>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={muted ? "text-ink-faint" : "text-ink-soft"}>{label}</span>
      <span className={`tnum font-bold ${muted ? "text-ink-faint" : "text-ink"}`}>{value}</span>
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
