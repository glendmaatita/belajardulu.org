import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const TARIF_BADAN = 0.22;
const DER_MAX = 4; // batas DER 4:1 (PMK 169/2015)

// Thin capitalization: hanya bunga atas utang sampai 4 kali ekuitas yang boleh
// dibebankan secara fiskal. Bunga atas kelebihan utang dikoreksi positif.
export function KalkulatorThinCap() {
  const [utang, setUtang] = useState(8_000_000_000);
  const [ekuitas, setEkuitas] = useState(1_000_000_000);
  const [bunga, setBunga] = useState(12); // % per tahun

  const r = useMemo(() => {
    const utangMax = ekuitas * DER_MAX;
    const utangDiakui = Math.min(utang, utangMax);
    const der = ekuitas > 0 ? utang / ekuitas : Infinity;
    const bungaTotal = utang * (bunga / 100);
    const bungaDeductible = utangDiakui * (bunga / 100);
    const bungaKoreksi = bungaTotal - bungaDeductible; // dikoreksi positif
    const tambahanPajak = bungaKoreksi * TARIF_BADAN;
    return { der, utangMax, bungaTotal, bungaDeductible, bungaKoreksi, tambahanPajak };
  }, [utang, ekuitas, bunga]);

  const lewat = r.der > DER_MAX;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Kalkulator Thin Capitalization (DER 4:1)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Perusahaan kadang memperbesar utang agar bunga (deductible) menekan pajak. Aturan DER membatasi: hanya bunga
        atas utang sampai 4 kali ekuitas yang boleh dikurangkan. Selebihnya dikoreksi positif.
      </p>

      <Slider label="Total utang berbunga" value={utang} min={500_000_000} max={20_000_000_000} step={250_000_000} fmt={rupiah} onChange={setUtang} />
      <Slider label="Ekuitas" value={ekuitas} min={250_000_000} max={6_000_000_000} step={250_000_000} fmt={rupiah} onChange={setEkuitas} />
      <Slider label="Suku bunga per tahun" value={bunga} min={4} max={20} step={1} fmt={(n) => `${n}%`} onChange={setBunga} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className={`rounded-xl p-4 ${lewat ? "bg-rose-50" : "bg-emerald-50"}`}>
          <div className="text-xs text-ink-faint">Rasio DER (utang : ekuitas)</div>
          <div className={`text-xl font-extrabold tnum ${lewat ? "text-rose-700" : "text-emerald-700"}`}>{r.der.toFixed(2)} : 1</div>
          <div className="text-[11px] text-ink-faint">{lewat ? "Melebihi batas 4:1" : "Masih dalam batas 4:1"}</div>
        </div>
        <div className="rounded-xl bg-canvas p-4">
          <div className="text-xs text-ink-faint">Bunga boleh dibebankan</div>
          <div className="text-xl font-extrabold tnum text-brand-700">{rupiah(Math.round(r.bungaDeductible))}</div>
          <div className="text-[11px] text-ink-faint">dari total {rupiah(Math.round(r.bungaTotal))}</div>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Bunga dikoreksi positif: {rupiah(Math.round(r.bungaKoreksi))}. Tambahan PPh Badan akibat koreksi:
        {" "}{rupiah(Math.round(r.tambahanPajak))}. Menumpuk utang berlebih bukan strategi pajak yang aman.
      </p>
    </div>
  );
}

function Slider({ label, value, min, max, step, fmt, onChange }: { label: string; value: number; min: number; max: number; step: number; fmt: (n: number) => string; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
      />
    </div>
  );
}
