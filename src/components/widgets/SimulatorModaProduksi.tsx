import { useState } from "react";

// Tahap-tahap mode produksi dalam materialisme historis Marx.
const MODES = [
  {
    id: "komunal",
    label: "Komunal Primitif",
    dominan: "Tidak ada kelas",
    tertindas: "Tidak ada kelas",
    surplus: "Nyaris tidak ada surplus",
    kontradiksi: "Produktivitas sangat rendah",
    c: "border-emerald-400",
  },
  {
    id: "perbudakan",
    label: "Perbudakan",
    dominan: "Pemilik budak",
    tertindas: "Budak",
    surplus: "Kerja paksa budak",
    kontradiksi: "Budak vs tuan",
    c: "border-amber-400",
  },
  {
    id: "feodal",
    label: "Feodalisme",
    dominan: "Tuan tanah",
    tertindas: "Petani/hamba",
    surplus: "Sewa tanah & upeti",
    kontradiksi: "Hamba vs bangsawan",
    c: "border-orange-400",
  },
  {
    id: "kapitalis",
    label: "Kapitalisme",
    dominan: "Borjuasi (pemilik modal)",
    tertindas: "Proletariat (buruh)",
    surplus: "Nilai lebih dari upah kerja",
    kontradiksi: "Buruh vs pemilik modal",
    c: "border-rose-400",
  },
  {
    id: "sosialis",
    label: "Sosialisme",
    dominan: "Tidak ada kelas pemilik",
    tertindas: "Tidak ada kelas tertindas",
    surplus: "Dikelola bersama (cita-cita)",
    kontradiksi: "Diperdebatkan dalam praktik",
    c: "border-sky-400",
  },
];

export function SimulatorModaProduksi() {
  const [idx, setIdx] = useState(3);
  const m = MODES[idx];

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏛️ Simulator Mode Produksi</div>
      <p className="mb-4 text-xs text-ink-faint">
        Materialisme historis melihat sejarah sebagai pergantian mode produksi. Pilih satu tahap untuk melihat siapa
        kelas dominan, siapa yang tertindas, dan dari mana surplus diambil.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {MODES.map((mode, i) => (
          <button key={mode.id} onClick={() => setIdx(i)} className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${idx === i ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft"}`}>
            {mode.label}
          </button>
        ))}
      </div>

      <div className={`rounded-xl border-2 ${m.c} bg-canvas p-4`}>
        <div className="text-base font-extrabold text-ink">{m.label}</div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <Row label="Kelas dominan" value={m.dominan} />
          <Row label="Kelas tertindas" value={m.tertindas} />
          <Row label="Bentuk surplus" value={m.surplus} />
          <Row label="Kontradiksi utama" value={m.kontradiksi} />
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Bagi Marx, kontradiksi di tiap mode mendorong perubahan ke mode berikutnya lewat perjuangan kelas.
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white p-3">
      <div className="text-[11px] text-ink-faint">{label}</div>
      <div className="text-sm font-bold text-ink">{value}</div>
    </div>
  );
}
