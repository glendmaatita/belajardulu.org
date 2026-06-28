import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// PPh Final UMKM (PP 55/2022): tarif 0,5% dari omzet (peredaran bruto).
// WP Orang Pribadi: omzet sampai Rp500 juta/tahun TIDAK kena pajak.
export function SimulatorPajakUMKM() {
  const [omzetBulan, setOmzetBulan] = useState(40_000_000);
  const [badan, setBadan] = useState(false); // false = Orang Pribadi, true = Badan (PT/CV)

  const r = useMemo(() => {
    const omzetTahun = omzetBulan * 12;
    const bebas = badan ? 0 : 500_000_000; // fasilitas Rp500 juta hanya untuk OP
    const kena = Math.max(0, omzetTahun - bebas);
    const pajakTahun = kena * 0.005;
    const lewatBatas = omzetTahun > 4_800_000_000;
    return { omzetTahun, bebas, kena, pajakTahun, pajakBulan: pajakTahun / 12, lewatBatas };
  }, [omzetBulan, badan]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧮 Simulator PPh Final UMKM (0,5%)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Skema paling umum untuk UMKM (PP 55/2022): pajaknya cuma 0,5% dari omzet. Geser nilainya di bawah.
      </p>

      <div className="mb-4 flex gap-2">
        <Toggle active={!badan} onClick={() => setBadan(false)} label="👤 Orang Pribadi" />
        <Toggle active={badan} onClick={() => setBadan(true)} label="🏢 Badan (PT/CV)" />
      </div>

      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">Omzet (penjualan) per bulan</span>
        <span className="tnum text-sm font-bold text-ink">{rupiah(omzetBulan)}</span>
      </div>
      <input
        type="range"
        min={0}
        max={500_000_000}
        step={5_000_000}
        value={omzetBulan}
        onChange={(e) => setOmzetBulan(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
      />
      <div className="mt-1 text-right text-xs text-ink-faint">Omzet setahun: {rupiah(r.omzetTahun)}</div>

      <div className="mt-5 rounded-xl bg-canvas p-4">
        {!badan && (
          <div className="mb-3 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
            ✨ Omzet pertama <b>Rp500 juta/tahun bebas pajak</b> (khusus Orang Pribadi). Yang kena pajak hanya{" "}
            <b>{rupiah(r.kena)}</b>.
          </div>
        )}
        <div className="grid grid-cols-2 gap-3">
          <Result label="Pajak per tahun" value={rupiah(Math.round(r.pajakTahun))} accent="text-brand-700" />
          <Result label="Setara per bulan" value={rupiah(Math.round(r.pajakBulan))} accent="text-sky-700" />
        </div>
        {r.pajakTahun === 0 ? (
          <p className="mt-3 text-sm text-emerald-700">
            🎉 Dengan omzet ini, PPh final-mu <b>Rp0</b>. Tetap wajib lapor SPT Tahunan, ya.
          </p>
        ) : (
          <p className="mt-3 text-sm text-ink-faint">
            Cukup bayar <b>{rupiah(Math.round(r.pajakBulan))}</b> tiap bulan lewat e-Billing. Sederhana, tanpa
            pembukuan rumit.
          </p>
        )}
        {r.lewatBatas && (
          <div className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
            ⚠️ Omzet setahun sudah lewat <b>Rp4,8 miliar</b>. Kamu tidak boleh lagi pakai tarif final 0,5%, harus
            beralih ke pembukuan (tarif normal) dan wajib jadi PKP (pungut PPN).
          </div>
        )}
      </div>
    </div>
  );
}

function Toggle({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
        active ? "border-brand-400 bg-brand-50 text-brand-700" : "border-line bg-white text-ink-faint"
      }`}
    >
      {label}
    </button>
  );
}

function Result({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div>
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${accent}`}>{value}</div>
    </div>
  );
}
