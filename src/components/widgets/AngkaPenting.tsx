import { useMemo, useState } from "react";

// Latihan menghitung angka penting (significant figures).
const SOAL = [
  { angka: "120,5", jumlah: 4, ket: "Semua angka bukan nol dan nol di antara angka penting ikut dihitung: 1, 2, 0, 5." },
  { angka: "0,0042", jumlah: 2, ket: "Nol di depan hanya penunjuk tempat, tidak dihitung. Yang penting: 4 dan 2." },
  { angka: "3500", jumlah: 2, ket: "Tanpa tanda desimal, nol di belakang dianggap tidak penting: 3 dan 5." },
  { angka: "6,00", jumlah: 3, ket: "Nol di belakang setelah koma adalah angka penting: 6, 0, 0." },
  { angka: "0,030", jumlah: 2, ket: "Nol depan tidak dihitung, nol belakang setelah koma dihitung: 3 dan 0." },
];

export function AngkaPenting() {
  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState<number | null>(null);
  const s = SOAL[idx];
  const benar = useMemo(() => pilih !== null && pilih === s.jumlah, [pilih, s]);
  const opsi = [2, 3, 4, 5];

  function lanjut() {
    setPilih(null);
    setIdx((i) => (i + 1) % SOAL.length);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔢 Latihan Angka Penting</div>
      <p className="mb-4 text-xs text-ink-faint">Berapa banyak angka penting pada bilangan berikut? Amati aturannya sambil mencoba.</p>

      <div className="rounded-xl bg-slate-50 p-4 text-center font-mono text-2xl font-bold text-ink">{s.angka}</div>

      <div className="mt-3 grid grid-cols-4 gap-2">
        {opsi.map((o) => (
          <button
            key={o}
            onClick={() => pilih === null && setPilih(o)}
            disabled={pilih !== null}
            className={`rounded-lg py-2 text-sm font-bold transition ${
              pilih !== null && o === s.jumlah
                ? "bg-emerald-500 text-white"
                : pilih === o
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
          {benar ? "Tepat! " : `Belum tepat, jawabannya ${s.jumlah}. `}
          {s.ket}
          <button onClick={lanjut} className="ml-2 rounded-md bg-brand-600 px-3 py-1 text-xs font-bold text-white">Soal berikutnya</button>
        </div>
      )}
    </div>
  );
}
