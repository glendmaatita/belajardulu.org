import { useMemo, useState } from "react";

// Tingkat pengangguran = pengangguran / angkatan kerja x 100%.
// Angkatan kerja = bekerja + menganggur (yang aktif mencari kerja).
export function KalkulatorPengangguran() {
  const [bekerja, setBekerja] = useState(135); // juta orang
  const [menganggur, setMenganggur] = useState(7); // juta orang
  const [bukanAngkatan, setBukanAngkatan] = useState(60); // pelajar, ibu rumah tangga, pensiunan (juta)

  const r = useMemo(() => {
    const angkatanKerja = bekerja + menganggur;
    const penduduk = angkatanKerja + bukanAngkatan;
    const tpt = angkatanKerja > 0 ? (menganggur / angkatanKerja) * 100 : 0; // tingkat pengangguran terbuka
    const tpak = penduduk > 0 ? (angkatanKerja / penduduk) * 100 : 0; // tingkat partisipasi angkatan kerja
    return { angkatanKerja, penduduk, tpt, tpak };
  }, [bekerja, menganggur, bukanAngkatan]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">👷 Kalkulator Tingkat Pengangguran</div>
      <p className="mb-4 text-xs text-ink-faint">
        Tingkat pengangguran dihitung dari angkatan kerja (yang bekerja + mencari kerja), bukan dari seluruh penduduk. Atur angkanya (juta orang).
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Bekerja" value={bekerja} set={setBekerja} min={80} max={160} step={1} fmt={(v) => `${v} jt`} />
        <Slider label="Menganggur (cari kerja)" value={menganggur} set={setMenganggur} min={1} max={25} step={1} fmt={(v) => `${v} jt`} />
        <Slider label="Bukan angkatan kerja" value={bukanAngkatan} set={setBukanAngkatan} min={20} max={100} step={1} fmt={(v) => `${v} jt`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-rose-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Tingkat Pengangguran Terbuka</div>
          <div className="text-2xl font-extrabold tnum text-rose-700">{r.tpt.toFixed(1)}%</div>
        </div>
        <div className="rounded-xl bg-sky-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Tingkat Partisipasi Angkatan Kerja</div>
          <div className="text-2xl font-extrabold tnum text-sky-700">{r.tpak.toFixed(1)}%</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Angkatan kerja {r.angkatanKerja} juta dari {r.penduduk} juta penduduk usia kerja. Pelajar dan ibu rumah tangga tidak dihitung menganggur karena tidak aktif mencari kerja.
      </p>
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
