import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

export function SimulatorCapTrade() {
  const [emisi, setEmisi] = useState(120_000); // tCO2e aktual
  const [cap, setCap] = useState(100_000); // jatah gratis
  const [harga, setHarga] = useState(60_000); // Rp / tCO2e
  const [abatement, setAbatement] = useState(45_000); // Rp / tCO2e

  const r = useMemo(() => {
    const selisih = emisi - cap; // + defisit, - surplus
    if (selisih <= 0) {
      const surplus = -selisih;
      return {
        status: "surplus" as const,
        surplus,
        pendapatan: surplus * harga,
      };
    }
    const biayaBeli = selisih * harga;
    const biayaKurangi = selisih * abatement;
    const pilihan = biayaKurangi < biayaBeli ? "kurangi" : "beli";
    return {
      status: "defisit" as const,
      defisit: selisih,
      biayaBeli,
      biayaKurangi,
      pilihan,
      hemat: Math.abs(biayaBeli - biayaKurangi),
    };
  }, [emisi, cap, harga, abatement]);

  const max = Math.max(emisi, cap, 1);

  return (
    <div className="my-6 card p-5">
      <div className="mb-4 text-sm font-bold text-emerald-700">🏭 Simulator Cap-and-Trade</div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Emisi aktual perusahaan" value={emisi} set={setEmisi} min={0} max={200_000} step={5_000} unit="tCO2e" />
        <Slider label="Jatah emisi (cap/PTBAE)" value={cap} set={setCap} min={0} max={200_000} step={5_000} unit="tCO2e" />
        <Slider label="Harga karbon di pasar" value={harga} set={setHarga} min={10_000} max={200_000} step={5_000} unit="Rp/tCO2e" money />
        <Slider label="Biaya kurangi emisi sendiri" value={abatement} set={setAbatement} min={10_000} max={200_000} step={5_000} unit="Rp/tCO2e" money />
      </div>

      {/* visual emisi vs cap */}
      <div className="mt-5 space-y-2">
        <Bar label="Emisi" value={emisi} max={max} color="#ef4444" />
        <Bar label="Cap" value={cap} max={max} color="#10b981" />
      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm">
        {r.status === "surplus" ? (
          <p className="text-emerald-700">
            ✅ <b>Surplus {angka(r.surplus)} tCO2e</b>. Emisi di bawah jatah, perusahaan bisa <b>menjual</b> kelebihan
            izinnya dan memperoleh <b>{rupiah(Math.round(r.pendapatan))}</b>. Inilah insentif positif untuk berinovasi
            lebih hijau.
          </p>
        ) : (
          <div className="space-y-2 text-ink-soft">
            <p>
              ⚠️ <b className="text-rose-600">Defisit {angka(r.defisit)} tCO2e</b>. Perusahaan wajib menutup kekurangan
              ini. Ada dua pilihan:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Opt active={r.pilihan === "beli"} title="Beli carbon credit" value={rupiah(Math.round(r.biayaBeli))} />
              <Opt active={r.pilihan === "kurangi"} title="Kurangi emisi sendiri" value={rupiah(Math.round(r.biayaKurangi))} />
            </div>
            <p className="pt-1">
              💡 Pilihan termurah: <b>{r.pilihan === "kurangi" ? "mengurangi emisi sendiri" : "membeli kredit"}</b>,
              menghemat <b>{rupiah(Math.round(r.hemat))}</b>. Jika harga karbon naik di atas biaya pengurangan,
              perusahaan justru terdorong <b>berinvestasi pada teknologi bersih</b>, itulah tujuan kebijakan ini.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Bar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  return (
    <div>
      <div className="mb-0.5 flex justify-between text-xs">
        <span className="font-semibold text-ink-soft">{label}</span>
        <span className="tnum">{angka(value)} tCO2e</span>
      </div>
      <div className="h-4 overflow-hidden rounded-md bg-slate-200">
        <div className="h-full rounded-md transition-all" style={{ width: `${(value / max) * 100}%`, background: color }} />
      </div>
    </div>
  );
}

function Opt({ active, title, value }: { active: boolean; title: string; value: string }) {
  return (
    <div className={`rounded-lg border p-2 ${active ? "border-emerald-400 bg-emerald-50" : "border-slate-200 bg-white opacity-70"}`}>
      <div className="text-xs text-ink-faint">{title}</div>
      <div className="tnum font-bold text-ink">{value}</div>
      {active && <div className="text-[11px] font-semibold text-emerald-600">← termurah</div>}
    </div>
  );
}

function Slider({
  label,
  value,
  set,
  min,
  max,
  step,
  unit,
  money,
}: {
  label: string;
  value: number;
  set: (n: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  money?: boolean;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{money ? rupiah(value) : `${angka(value)}`}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-emerald-600"
      />
      <div className="mt-0.5 text-right text-[11px] text-ink-faint">{unit}</div>
    </div>
  );
}
