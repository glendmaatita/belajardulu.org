import { useMemo, useState } from "react";

// Utilisasi gudang: berapa persen ruang terpakai, dan kapan gudang mulai sesak.
// Utilisasi sehat biasanya 80-85%; di atas itu, aliran kerja mulai tersendat.
export function KalkulatorUtilisasiGudang() {
  const [luas, setLuas] = useState(2000); // m2 total
  const [rasioSimpan, setRasioSimpan] = useState(60); // % luas jadi area simpan (sisanya gang, dok, kantor)
  const [tinggiRak, setTinggiRak] = useState(5); // level rak (tumpukan)
  const [palet, setPalet] = useState(3200); // jumlah palet yang harus disimpan

  const r = useMemo(() => {
    const areaSimpan = luas * (rasioSimpan / 100);
    // 1 palet butuh ~1,2 m2 jejak lantai; rak menumpuk ke atas.
    const kapasitas = (areaSimpan / 1.2) * tinggiRak;
    const utilisasi = (palet / kapasitas) * 100;
    return { areaSimpan, kapasitas, utilisasi };
  }, [luas, rasioSimpan, tinggiRak, palet]);

  const status = r.utilisasi > 100 ? { t: "Penuh sesak", c: "bg-rose-50 text-rose-700" } : r.utilisasi > 85 ? { t: "Mulai sesak", c: "bg-amber-50 text-amber-700" } : { t: "Sehat", c: "bg-emerald-50 text-emerald-700" };

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏬 Kalkulator Utilisasi Gudang</div>
      <p className="mb-4 text-xs text-ink-faint">
        Ruang gudang tidak semuanya untuk menyimpan: ada gang, dok, dan area kerja. Lihat kapan gudang mulai terlalu padat.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Luas total gudang" value={luas} set={setLuas} min={500} max={5000} step={100} fmt={(v) => `${v.toLocaleString("id-ID")} m²`} />
        <Slider label="Porsi untuk area simpan" value={rasioSimpan} set={setRasioSimpan} min={40} max={75} step={5} fmt={(v) => `${v}%`} />
        <Slider label="Tinggi rak (level tumpuk)" value={tinggiRak} set={setTinggiRak} min={1} max={8} step={1} fmt={(v) => `${v} level`} />
        <Slider label="Palet yang harus disimpan" value={palet} set={setPalet} min={500} max={8000} step={100} fmt={(v) => `${v.toLocaleString("id-ID")} palet`} />
      </div>

      <div className="mt-5 rounded-xl bg-canvas p-4">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-ink-soft">Kapasitas: <strong className="text-ink">{Math.round(r.kapasitas).toLocaleString("id-ID")}</strong> palet</span>
          <span className="text-ink-soft">Utilisasi: <strong className="text-ink">{r.utilisasi.toFixed(0)}%</strong></span>
        </div>
        <div className="h-5 w-full overflow-hidden rounded-full bg-line">
          <div className={`h-full rounded-full ${r.utilisasi > 100 ? "bg-rose-500" : r.utilisasi > 85 ? "bg-amber-500" : "bg-emerald-500"}`} style={{ width: `${Math.min(100, r.utilisasi)}%` }} />
        </div>
      </div>

      <div className={`mt-3 rounded-xl p-3 text-center text-sm ${status.c}`}>
        Status: <strong>{status.t}</strong>. {r.utilisasi > 85 ? "Pertimbangkan tambah level rak, sewa ruang, atau percepat perputaran." : "Masih ada ruang gerak untuk picking yang lancar."}
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
