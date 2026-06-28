import { useState } from "react";

// Garis waktu interaktif: pilih era untuk melihat filsuf dan gagasan utamanya.
const ERA = [
  {
    id: "kuno",
    nama: "Filsafat Kuno",
    masa: "sekitar 600 SM - 500 M",
    warna: "bg-emerald-500",
    filsuf: [
      { nama: "Socrates", ide: "Metode bertanya untuk menguji keyakinan." },
      { nama: "Plato", ide: "Dunia ide yang sempurna di balik dunia nyata." },
      { nama: "Aristoteles", ide: "Pengetahuan lewat pengamatan dunia nyata dan logika." },
    ],
  },
  {
    id: "abad-pertengahan",
    nama: "Abad Pertengahan",
    masa: "sekitar 500 - 1500 M",
    warna: "bg-amber-500",
    filsuf: [
      { nama: "Agustinus", ide: "Memadukan iman Kristen dengan pemikiran Plato." },
      { nama: "Thomas Aquinas", ide: "Menyatukan akal dan iman lewat pemikiran Aristoteles." },
    ],
  },
  {
    id: "modern",
    nama: "Filsafat Modern",
    masa: "sekitar 1500 - 1800 M",
    warna: "bg-sky-500",
    filsuf: [
      { nama: "Descartes", ide: "Rasionalisme: akal sebagai sumber utama pengetahuan." },
      { nama: "Hume", ide: "Empirisme: semua pengetahuan berasal dari pengalaman." },
      { nama: "Kant", ide: "Sintesis rasionalisme dan empirisme." },
    ],
  },
  {
    id: "kontemporer",
    nama: "Filsafat Kontemporer",
    masa: "sekitar 1800 - kini",
    warna: "bg-rose-500",
    filsuf: [
      { nama: "Hegel", ide: "Dialektika: tesis, antitesis, sintesis." },
      { nama: "Nietzsche", ide: "Kritik nilai, kehendak untuk berkuasa." },
      { nama: "Sartre", ide: "Eksistensialisme: eksistensi mendahului esensi." },
    ],
  },
];

export function GarisWaktuFilsuf() {
  const [aktif, setAktif] = useState(0);
  const e = ERA[aktif];
  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🕰️ Garis Waktu Filsuf</div>
      <p className="mb-4 text-xs text-ink-faint">Pilih sebuah era untuk melihat para filsuf dan gagasan besarnya. Perhatikan bagaimana tiap era menanggapi era sebelumnya.</p>

      <div className="flex flex-wrap gap-2">
        {ERA.map((er, i) => (
          <button
            key={er.id}
            onClick={() => setAktif(i)}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${aktif === i ? `${er.warna} text-white` : "bg-slate-100 text-ink-soft hover:bg-slate-200"}`}
          >
            {er.nama}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4">
        <div className="flex items-baseline justify-between">
          <div className="text-base font-bold text-ink">{e.nama}</div>
          <div className="text-xs font-medium text-ink-faint">{e.masa}</div>
        </div>
        <div className="mt-3 space-y-2">
          {e.filsuf.map((f) => (
            <div key={f.nama} className="rounded-lg bg-white p-3">
              <div className="text-sm font-bold text-brand-700">{f.nama}</div>
              <div className="text-sm text-ink-soft">{f.ide}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
