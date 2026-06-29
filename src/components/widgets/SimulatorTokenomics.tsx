import { useState } from "react";
import { angka } from "../../lib/format";

// Tokenomics: pasokan token berubah tiap tahun karena inflasi (cetak baru) dan burn (bakar token).
export function SimulatorTokenomics() {
  const [totalSupply, setTotalSupply] = useState(100); // juta token
  const [circPersen, setCircPersen] = useState(40); // % yang sudah beredar
  const [inflasi, setInflasi] = useState(8); // % per tahun
  const [burn, setBurn] = useState(3); // % per tahun

  const circ0 = (totalSupply * circPersen) / 100; // juta token beredar sekarang
  const netto = (inflasi - burn) / 100; // laju bersih per tahun
  const proyeksi = Array.from({ length: 6 }, (_, t) => circ0 * Math.pow(1 + netto, t)); // tahun 0..5
  const maks = Math.max(...proyeksi);
  const deflasi = burn > inflasi;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📊 Simulator Tokenomics</div>
      <p className="mb-4 text-xs text-ink-faint">
        Inflasi menambah token baru, burn membakar token yang ada. Selisihnya menentukan apakah pasokan tumbuh atau menyusut.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Total supply" value={totalSupply} set={setTotalSupply} min={10} max={1000} step={10} fmt={(v) => `${angka(v)} juta`} />
        <Slider label="Sudah beredar" value={circPersen} set={setCircPersen} min={5} max={100} step={5} fmt={(v) => `${v}%`} />
        <Slider label="Inflasi tahunan" value={inflasi} set={setInflasi} min={0} max={20} step={1} fmt={(v) => `${v}%`} />
        <Slider label="Burn tahunan" value={burn} set={setBurn} min={0} max={20} step={1} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 rounded-xl bg-canvas p-4 text-center">
        <div className="text-xs text-ink-faint">Circulating supply sekarang</div>
        <div className="text-3xl font-extrabold tnum text-brand-700">{angka(Math.round(circ0 * 1_000_000))}</div>
        <div className="mt-1 text-xs text-ink-faint">token ({circ0.toFixed(1)} juta)</div>
      </div>

      <div className="mt-4 rounded-xl bg-canvas p-4">
        <div className="mb-3 text-xs font-bold text-ink-soft">Proyeksi circulating supply 5 tahun ke depan</div>
        <div className="space-y-2">
          {proyeksi.map((nilai, t) => (
            <div key={t} className="flex items-center gap-2">
              <span className="w-16 text-xs text-ink-faint">Tahun {t}</span>
              <div className="h-5 flex-1 overflow-hidden rounded-full bg-line">
                <div
                  className={`h-full rounded-full ${deflasi ? "bg-emerald-500" : "bg-violet-500"}`}
                  style={{ width: `${(nilai / maks) * 100}%` }}
                />
              </div>
              <span className="w-20 text-right text-xs font-bold tnum text-ink">{nilai.toFixed(1)} jt</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`mt-4 rounded-xl p-3 text-sm ${deflasi ? "bg-emerald-50 text-emerald-800" : "bg-violet-50 text-violet-800"}`}>
        {deflasi
          ? `Burn (${burn}%) lebih besar dari inflasi (${inflasi}%), jadi pasokan menyusut tiap tahun. Ini sifat deflasioner: token jadi makin langka.`
          : netto === 0
          ? `Inflasi dan burn seimbang, pasokan stabil dari tahun ke tahun.`
          : `Inflasi (${inflasi}%) lebih besar dari burn (${burn}%), jadi pasokan tumbuh ${(netto * 100).toFixed(0)}% per tahun. Tanpa permintaan baru, ini menekan harga.`}
      </div>
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
