import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const NISAB_GRAM = 85; // nisab zakat maal setara 85 gram emas
const TARIF = 0.025; // 2,5%

// Zakat maal wajib bila harta (yang telah dimiliki satu tahun/haul) mencapai
// nisab (setara 85 gram emas). Besarnya 2,5% dari total harta.
export function KalkulatorZakat() {
  const [harta, setHarta] = useState(150_000_000); // total tabungan, emas, dll
  const [hargaEmas, setHargaEmas] = useState(1_200_000); // per gram

  const r = useMemo(() => {
    const nisab = NISAB_GRAM * hargaEmas;
    const wajib = harta >= nisab;
    const zakat = wajib ? harta * TARIF : 0;
    return { nisab, wajib, zakat };
  }, [harta, hargaEmas]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🕌 Kalkulator Zakat Maal</div>
      <p className="mb-4 text-xs text-ink-faint">
        Zakat maal wajib bila harta yang dimiliki genap satu tahun (haul) mencapai nisab, setara 85 gram emas.
        Besarnya 2,5% dari total harta.
      </p>

      <Slider label="Total harta (tabungan, emas, investasi)" value={harta} min={0} max={2_000_000_000} step={5_000_000} fmt={rupiah} onChange={setHarta} />
      <Slider label="Harga emas per gram" value={hargaEmas} min={800_000} max={2_000_000} step={50_000} fmt={rupiah} onChange={setHargaEmas} />

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Box label="Nisab (85 gram emas)" value={rupiah(Math.round(r.nisab))} color="text-sky-700" />
        <div className={`rounded-xl p-4 ${r.wajib ? "bg-emerald-50" : "bg-canvas"}`}>
          <div className="text-xs text-ink-faint">Status</div>
          <div className={`text-lg font-extrabold ${r.wajib ? "text-emerald-700" : "text-ink-faint"}`}>{r.wajib ? "Wajib zakat" : "Belum wajib"}</div>
        </div>
        <Box label="Zakat (2,5%)" value={rupiah(Math.round(r.zakat))} color="text-brand-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        {r.wajib
          ? `Harta melebihi nisab, sehingga wajib mengeluarkan zakat ${rupiah(Math.round(r.zakat))} untuk delapan golongan penerima (asnaf).`
          : "Harta belum mencapai nisab, sehingga belum wajib zakat maal. Sedekah tetap dianjurkan."}
      </p>
    </div>
  );
}

function Box({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-xl bg-canvas p-4">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${color}`}>{value}</div>
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
