import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Uang pertanggungan asuransi jiwa dihitung agar keluarga yang ditinggalkan
// tetap terjaga. Metode pengganti penghasilan: penghasilan tahunan dikali
// jumlah tahun kebutuhan, ditambah utang, dikurangi aset likuid.
export function KalkulatorUangPertanggungan() {
  const [penghasilanBulanan, setPenghasilanBulanan] = useState(8_000_000);
  const [tahun, setTahun] = useState(10); // berapa tahun keluarga perlu ditopang
  const [utang, setUtang] = useState(200_000_000); // sisa KPR/utang
  const [asetLikuid, setAsetLikuid] = useState(50_000_000);

  const r = useMemo(() => {
    const penggantiPenghasilan = penghasilanBulanan * 12 * tahun;
    const kebutuhan = penggantiPenghasilan + utang - asetLikuid;
    return { penggantiPenghasilan, kebutuhan: Math.max(0, kebutuhan) };
  }, [penghasilanBulanan, tahun, utang, asetLikuid]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧬 Kalkulator Uang Pertanggungan Jiwa</div>
      <p className="mb-4 text-xs text-ink-faint">
        Asuransi jiwa penting bila ada orang yang bergantung pada penghasilanmu. Uang pertanggungan idealnya cukup
        mengganti penghasilan beberapa tahun, melunasi utang, dikurangi aset yang sudah dimiliki.
      </p>

      <Slider label="Penghasilan per bulan" value={penghasilanBulanan} min={2_000_000} max={50_000_000} step={500_000} fmt={rupiah} onChange={setPenghasilanBulanan} />
      <Slider label="Tahun keluarga perlu ditopang" value={tahun} min={3} max={20} step={1} fmt={(n) => `${n} tahun`} onChange={setTahun} />
      <Slider label="Sisa utang (KPR, dll)" value={utang} min={0} max={2_000_000_000} step={25_000_000} fmt={rupiah} onChange={setUtang} />
      <Slider label="Aset likuid yang sudah ada" value={asetLikuid} min={0} max={1_000_000_000} step={10_000_000} fmt={rupiah} onChange={setAsetLikuid} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Box label="Pengganti penghasilan" value={rupiah(Math.round(r.penggantiPenghasilan))} color="text-sky-700" />
        <Box label="Uang pertanggungan disarankan" value={rupiah(Math.round(r.kebutuhan))} color="text-brand-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Utamakan asuransi jiwa berjangka (term life) yang preminya murah untuk pertanggungan besar. Bila ingin sesuai
        syariah, pilih asuransi jiwa syariah (takaful) yang berbasis tolong-menolong.
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
