import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Paritas Daya Beli (PPP) ala indeks Big Mac: bandingkan harga barang sama di
// dua negara untuk menemukan kurs "wajar", lalu bandingkan dengan kurs pasar
// untuk menilai apakah rupiah undervalued atau overvalued.
export function KalkulatorPPP() {
  const [hargaRI, setHargaRI] = useState(35_000); // harga Big Mac di Indonesia (Rp)
  const [hargaUS, setHargaUS] = useState(5); // harga Big Mac di AS (USD)
  const [kursPasar, setKursPasar] = useState(16_000); // kurs pasar Rp/USD

  const r = useMemo(() => {
    const kursPPP = hargaRI / hargaUS; // kurs implied
    const selisih = ((kursPPP - kursPasar) / kursPasar) * 100;
    // jika kursPPP < kursPasar, rupiah undervalued (butuh rupiah lebih sedikit utk 1 USD secara PPP)
    const status = kursPPP < kursPasar ? "Rupiah undervalued (lebih murah dari wajar)" : kursPPP > kursPasar ? "Rupiah overvalued (lebih mahal dari wajar)" : "Sesuai paritas";
    return { kursPPP, selisih, status };
  }, [hargaRI, hargaUS, kursPasar]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🍔 Kalkulator Paritas Daya Beli (PPP)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Ala indeks Big Mac: jika barang yang sama berharga berbeda di dua negara, kursnya bisa dinilai terlalu kuat
        atau terlalu lemah. Kurs PPP = harga di Indonesia dibagi harga di AS.
      </p>

      <Slider label="Harga Big Mac di Indonesia" value={hargaRI} min={20_000} max={60_000} step={1_000} fmt={rupiah} onChange={setHargaRI} />
      <Slider label="Harga Big Mac di AS (USD)" value={hargaUS} min={3} max={8} step={0.5} fmt={(n) => `USD ${n}`} onChange={setHargaUS} />
      <Slider label="Kurs pasar (Rp per USD)" value={kursPasar} min={10_000} max={20_000} step={250} fmt={(n) => `Rp${n.toLocaleString("id-ID")}`} onChange={setKursPasar} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Box label="Kurs PPP (implied)" value={`Rp${Math.round(r.kursPPP).toLocaleString("id-ID")}`} color="text-sky-700" />
        <Box label="Selisih vs kurs pasar" value={`${r.selisih >= 0 ? "+" : ""}${r.selisih.toFixed(1)}%`} color={r.selisih >= 0 ? "text-emerald-700" : "text-rose-700"} />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">{r.status}. PPP adalah jangkar jangka panjang; jangka pendek kurs bisa menyimpang jauh karena arus modal dan sentimen.</p>
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
