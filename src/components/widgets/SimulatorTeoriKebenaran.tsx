import { useMemo, useState } from "react";

// Tentukan teori kebenaran mana yang paling pas dipakai pada sebuah penilaian.
const TEORI = ["Korespondensi", "Koherensi", "Pragmatis"] as const;
type Teori = (typeof TEORI)[number];

const SOAL: { kasus: string; teori: Teori; ket: string }[] = [
  {
    kasus: "Kita mengecek apakah 'sekarang hujan' benar dengan melihat keluar jendela.",
    teori: "Korespondensi",
    ket: "Kebenaran diuji dengan mencocokkan pernyataan langsung pada kenyataan.",
  },
  {
    kasus: "Sebuah teori matematika dinilai benar karena tidak bertentangan dengan aksioma dan teorema lain dalam sistemnya.",
    teori: "Koherensi",
    ket: "Kebenaran dinilai dari konsistensi dengan keseluruhan sistem keyakinan.",
  },
  {
    kasus: "Sebuah metode pengobatan dianggap benar karena terbukti berhasil menyembuhkan banyak pasien dalam praktik.",
    teori: "Pragmatis",
    ket: "Kebenaran diukur dari kegunaan dan keberhasilannya saat diterapkan.",
  },
  {
    kasus: "Pernyataan 'ibu kota Indonesia adalah Jakarta' dicek dengan fakta geografis dan administratif.",
    teori: "Korespondensi",
    ket: "Diuji dengan kesesuaian pada fakta dunia nyata.",
  },
  {
    kasus: "Sebuah alibi dinilai dengan melihat apakah ia cocok tanpa kontradiksi dengan semua kesaksian lain.",
    teori: "Koherensi",
    ket: "Dinilai dari keselarasan dengan kumpulan keterangan yang ada.",
  },
  {
    kasus: "Sebuah model ekonomi dipertahankan karena ramalannya bekerja baik untuk pengambilan keputusan.",
    teori: "Pragmatis",
    ket: "Dinilai benar selama berguna dan memberi hasil yang bekerja.",
  },
];

export function SimulatorTeoriKebenaran() {
  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState<Teori | null>(null);
  const s = SOAL[idx];
  const benar = useMemo(() => pilih !== null && pilih === s.teori, [pilih, s]);

  function lanjut() {
    setPilih(null);
    setIdx((i) => (i + 1) % SOAL.length);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">✅ Simulator Teori Kebenaran</div>
      <p className="mb-4 text-xs text-ink-faint">Tentukan teori kebenaran mana yang paling pas menjelaskan cara penilaian pada tiap kasus.</p>

      <div className="rounded-xl bg-slate-50 p-4 text-sm text-ink">{s.kasus}</div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {TEORI.map((t) => (
          <button
            key={t}
            onClick={() => pilih === null && setPilih(t)}
            disabled={pilih !== null}
            className={`rounded-lg py-2 text-sm font-bold transition ${
              pilih !== null && t === s.teori
                ? "bg-emerald-500 text-white"
                : pilih === t
                ? "bg-rose-400 text-white"
                : "bg-slate-100 text-ink-soft hover:bg-slate-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {pilih !== null && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${benar ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
          {benar ? "Tepat! " : `Belum tepat. Jawabannya ${s.teori}. `}
          {s.ket}
          <button onClick={lanjut} className="ml-2 rounded-md bg-brand-600 px-3 py-1 text-xs font-bold text-white">Kasus berikutnya</button>
        </div>
      )}
    </div>
  );
}
