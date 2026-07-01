import { useState } from "react";

// Empat bentuk alienasi (keterasingan) menurut Marx muda (Manuskrip 1844).
const TYPES = [
  {
    id: "produk",
    label: "Dari produk kerja",
    desc: "Barang yang dibuat buruh menjadi milik pemilik modal, asing dari pembuatnya.",
    contoh: "Penjahit membuat ribuan baju mahal, tetapi tak satu pun jadi miliknya.",
    c: "border-rose-400 text-rose-700",
  },
  {
    id: "proses",
    label: "Dari proses kerja",
    desc: "Kerja terasa terpaksa dan monoton, bukan ekspresi diri yang bebas.",
    contoh: "Pekerja lini perakitan mengulang satu gerakan ribuan kali tanpa kendali atas caranya.",
    c: "border-amber-400 text-amber-700",
  },
  {
    id: "diri",
    label: "Dari hakikat diri",
    desc: "Potensi kreatif manusia tak berkembang karena kerja direduksi jadi sekadar alat hidup.",
    contoh: "Bakat dan ide pekerja tak terpakai karena tugasnya dipersempit demi efisiensi.",
    c: "border-sky-400 text-sky-700",
  },
  {
    id: "sesama",
    label: "Dari sesama manusia",
    desc: "Hubungan antarmanusia berubah jadi persaingan, bukan kerja sama.",
    contoh: "Buruh bersaing memperebutkan pekerjaan langka alih-alih bersolidaritas.",
    c: "border-emerald-400 text-emerald-700",
  },
];

export function SimulatorAlienasi() {
  const [idx, setIdx] = useState(0);
  const t = TYPES[idx];

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🪞 Simulator Alienasi</div>
      <p className="mb-4 text-xs text-ink-faint">
        Marx muda menjelaskan empat bentuk keterasingan pekerja dalam kapitalisme. Pilih satu untuk melihat maknanya
        dan contoh nyatanya.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {TYPES.map((type, i) => (
          <button key={type.id} onClick={() => setIdx(i)} className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${idx === i ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft"}`}>
            {type.label}
          </button>
        ))}
      </div>

      <div className={`rounded-xl border-2 ${t.c.split(" ")[0]} bg-canvas p-4`}>
        <div className={`text-base font-extrabold ${t.c.split(" ")[1]}`}>{t.label}</div>
        <p className="mt-2 text-sm text-ink-soft">{t.desc}</p>
        <div className="mt-3 rounded-lg bg-white p-3">
          <div className="text-[11px] text-ink-faint">Contoh</div>
          <div className="text-sm text-ink">{t.contoh}</div>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Keempatnya saling terkait: keterasingan dari produk dan proses berujung pada keterasingan dari diri dan sesama.
      </p>
    </div>
  );
}
