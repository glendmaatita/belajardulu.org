import { useMemo, useState } from "react";

// Dari pola gambar yang tumbuh, temukan bentuk aljabarnya.
const SOAL = [
  { cerita: "Tiap meja memuat 4 kursi. Untuk n meja?", pilihan: ["n + 4", "4n", "n / 4"], jawab: 1, ket: "Tiap meja 4 kursi, n meja berarti 4 dikali n, yaitu 4n." },
  { cerita: "Pola korek: 4, 7, 10, 13, ... (bertambah 3). Suku ke-n?", pilihan: ["3n + 1", "4n", "n + 3"], jawab: 0, ket: "Mulai dari 4 dan bertambah 3, polanya 3n + 1 (cek: n=1 -> 4)." },
  { cerita: "Umur kakak 5 tahun lebih tua dari adik. Jika adik x tahun?", pilihan: ["x - 5", "5x", "x + 5"], jawab: 2, ket: "Lebih tua 5 tahun berarti umur adik ditambah 5, yaitu x + 5." },
  { cerita: "Sebuah bilangan dikalikan 2 lalu dikurangi 3. Jika bilangan itu x?", pilihan: ["2x - 3", "2(x - 3)", "3 - 2x"], jawab: 0, ket: "Dikali 2 dulu (2x), baru dikurangi 3, jadi 2x - 3." },
];

export function PolaKeAljabar() {
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
      <div className="mb-1 text-sm font-bold text-brand-700">🔤 Dari Pola ke Bentuk Aljabar</div>
      <p className="mb-4 text-xs text-ink-faint">Terjemahkan situasi nyata menjadi bentuk aljabar. Amati polanya dulu, baru pilih simbolnya.</p>

      <div className="rounded-xl bg-canvas p-4 text-sm font-medium text-ink">{s.cerita}</div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {s.pilihan.map((p, i) => (
          <button
            key={i}
            onClick={() => pilih === null && setPilih(i)}
            disabled={pilih !== null}
            className={`rounded-lg py-2 font-mono text-sm font-bold transition ${
              pilih !== null && i === s.jawab
                ? "bg-emerald-500 text-white"
                : pilih === i
                ? "bg-rose-400 text-white"
                : "bg-canvas text-ink-soft hover:bg-line"
            }`}
          >
            {p}
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
