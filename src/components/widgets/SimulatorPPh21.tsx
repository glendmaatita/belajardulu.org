import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const PTKP: Record<string, { label: string; value: number }> = {
  "TK/0": { label: "Lajang, tanpa tanggungan", value: 54_000_000 },
  "K/0": { label: "Kawin, tanpa tanggungan", value: 58_500_000 },
  "K/1": { label: "Kawin, 1 tanggungan", value: 63_000_000 },
  "K/2": { label: "Kawin, 2 tanggungan", value: 67_500_000 },
  "K/3": { label: "Kawin, 3 tanggungan", value: 72_000_000 },
};

// Tarif progresif Pasal 17 (orang pribadi)
function hitungPPh(pkp: number): number {
  const brackets = [
    [60_000_000, 0.05],
    [190_000_000, 0.15], // 60jt sampai 250jt
    [250_000_000, 0.25], // 250jt sampai 500jt
    [4_500_000_000, 0.3], // 500jt sampai 5M
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

export function SimulatorPPh21() {
  const [gaji, setGaji] = useState(8_000_000); // gaji per bulan
  const [status, setStatus] = useState("TK/0");

  const r = useMemo(() => {
    const bruto = gaji * 12;
    const biayaJabatan = Math.min(bruto * 0.05, 6_000_000);
    const neto = bruto - biayaJabatan;
    const ptkp = PTKP[status].value;
    const pkp = Math.max(0, Math.floor((neto - ptkp) / 1000) * 1000);
    const pphTahun = hitungPPh(pkp);
    return { bruto, neto, ptkp, pkp, pphTahun, pphBulan: pphTahun / 12 };
  }, [gaji, status]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">👔 Simulator PPh 21 (Pajak Gaji Karyawan)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Kalau UMKM-mu punya karyawan, kamu memotong PPh 21 dari gajinya. Estimasi sederhana (mengabaikan THR, iuran
        BPJS, dll).
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-semibold text-ink-soft">Gaji per bulan</span>
            <span className="tnum text-sm font-bold text-ink">{rupiah(gaji)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={50_000_000}
            step={500_000}
            value={gaji}
            onChange={(e) => setGaji(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600"
          />
        </div>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink-soft">Status (PTKP)</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
          >
            {Object.entries(PTKP).map(([k, v]) => (
              <option key={k} value={k}>
                {k} · {v.label}
              </option>
            ))}
          </select>
          <span className="mt-1 block text-xs text-ink-faint">PTKP: {rupiah(r.ptkp)}/tahun</span>
        </label>
      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-4">
        {r.pphTahun === 0 ? (
          <p className="text-sm text-emerald-700">
            🎉 Penghasilan setahun ({rupiah(r.bruto)}) masih di bawah PTKP, jadi <b>PPh 21 = Rp0</b>. Karyawan tidak
            dipotong pajak.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3">
              <Card label="PPh 21 per tahun" value={rupiah(Math.round(r.pphTahun))} accent="text-brand-700" />
              <Card label="Dipotong per bulan" value={rupiah(Math.round(r.pphBulan))} accent="text-sky-700" />
            </div>
            <p className="mt-3 text-xs text-ink-faint">
              Penghasilan kena pajak (PKP) = {rupiah(r.pkp)} (penghasilan neto {rupiah(Math.round(r.neto))} dikurangi
              PTKP {rupiah(r.ptkp)}).
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function Card({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-lg bg-white p-3">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${accent}`}>{value}</div>
    </div>
  );
}
