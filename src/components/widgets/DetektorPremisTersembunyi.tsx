import { useMemo, useState } from "react";

// Entimem: temukan premis tersembunyi yang membuat argumen menjadi valid.
const SOAL = [
  {
    argumen: "Ia warga negara Indonesia, jadi ia berhak memilih dalam pemilu.",
    opsi: [
      "Semua warga negara Indonesia berhak memilih dalam pemilu.",
      "Sebagian warga negara berhak memilih.",
      "Ia sudah berusia 17 tahun.",
    ],
    jawab: 0,
    ket: "Premis umum yang menghubungkan 'WNI' dengan 'berhak memilih' dibiarkan tersirat.",
  },
  {
    argumen: "Paus adalah mamalia, maka paus bernapas dengan paru-paru.",
    opsi: [
      "Semua mamalia bernapas dengan paru-paru.",
      "Paus hidup di laut.",
      "Sebagian mamalia bernapas dengan paru-paru.",
    ],
    jawab: 0,
    ket: "Aturan umum 'semua mamalia bernapas dengan paru-paru' menjadi premis yang tersembunyi.",
  },
  {
    argumen: "Produk ini mahal, pasti kualitasnya bagus.",
    opsi: [
      "Semua yang mahal pasti berkualitas bagus.",
      "Produk ini diiklankan di televisi.",
      "Sebagian produk mahal berkualitas bagus.",
    ],
    jawab: 0,
    ket: "Premis tersembunyinya keliru (mahal belum tentu bagus), sehingga argumen lemah meski strukturnya terlihat utuh.",
  },
  {
    argumen: "Dia tidak hadir rapat, berarti dia tidak peduli pada proyek ini.",
    opsi: [
      "Setiap orang yang peduli pasti hadir rapat.",
      "Rapat diadakan pagi hari.",
      "Dia sering terlambat.",
    ],
    jawab: 0,
    ket: "Asumsi tersembunyi 'yang peduli pasti hadir' belum tentu benar; ketidakhadiran bisa banyak sebab.",
  },
];

export function DetektorPremisTersembunyi() {
  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState<number | null>(null);
  const s = SOAL[idx];
  const benar = useMemo(() => pilih !== null && pilih === s.jawab, [pilih, s]);

  function lanjut() {
    setPilih(null);
    setIdx((i) => (i + 1) % SOAL.length);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🕵️ Detektor Premis Tersembunyi</div>
      <p className="mb-4 text-xs text-ink-faint">Argumen sehari-hari sering menyembunyikan satu premis (entimem). Pilih premis tersirat yang membuat argumen ini menyambung.</p>

      <div className="rounded-xl bg-slate-50 p-4 text-sm font-bold text-ink">"{s.argumen}"</div>

      <div className="mt-3 space-y-2">
        {s.opsi.map((o, i) => (
          <button
            key={i}
            onClick={() => pilih === null && setPilih(i)}
            disabled={pilih !== null}
            className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
              pilih !== null && i === s.jawab
                ? "bg-emerald-500 text-white"
                : pilih === i
                ? "bg-rose-400 text-white"
                : "bg-slate-100 text-ink-soft hover:bg-slate-200"
            }`}
          >
            {o}
          </button>
        ))}
      </div>

      {pilih !== null && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${benar ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
          {benar ? "Tepat! " : "Belum tepat. "}
          {s.ket}
          <button onClick={lanjut} className="ml-2 rounded-md bg-brand-600 px-3 py-1 text-xs font-bold text-white">Soal berikutnya</button>
        </div>
      )}
    </div>
  );
}
