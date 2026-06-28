import { useMemo, useState } from "react";

// Kenali bentuk dari sifatnya (jumlah sisi, sudut), bukan dari hafalan nama.
const SOAL = [
  { petunjuk: "Punya 3 sisi dan 3 sudut.", pilihan: ["Segitiga", "Persegi", "Lingkaran"], jawab: 0, ket: "Tiga sisi dan tiga sudut adalah ciri segitiga." },
  { petunjuk: "Tidak punya sudut sama sekali, sama dari segala arah.", pilihan: ["Segi enam", "Lingkaran", "Segitiga"], jawab: 1, ket: "Tanpa sudut dan simetri sempurna adalah ciri lingkaran." },
  { petunjuk: "Punya 4 sisi sama panjang dan 4 sudut siku-siku.", pilihan: ["Persegi", "Segitiga", "Lingkaran"], jawab: 0, ket: "Empat sisi sama dan sudut siku-siku adalah ciri persegi." },
  { petunjuk: "Punya 6 sisi, dipakai lebah untuk sarang.", pilihan: ["Persegi", "Segi enam", "Segitiga"], jawab: 1, ket: "Enam sisi adalah ciri segi enam (heksagon)." },
  { petunjuk: "Punya 4 sisi, sisi berhadapan sejajar tapi tidak semua sama panjang.", pilihan: ["Persegi panjang", "Lingkaran", "Segitiga"], jawab: 0, ket: "Empat sisi dengan pasangan sejajar adalah ciri persegi panjang." },
];

export function PenjelajahBentuk() {
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
      <div className="mb-1 text-sm font-bold text-brand-700">🔷 Penjelajah Bentuk</div>
      <p className="mb-4 text-xs text-ink-faint">Jangan hafal namanya dulu. Baca sifatnya, lalu tebak bentuk apa yang dimaksud.</p>

      <div className="rounded-xl bg-slate-50 p-4 text-sm font-medium text-ink">{s.petunjuk}</div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {s.pilihan.map((p, i) => (
          <button
            key={i}
            onClick={() => pilih === null && setPilih(i)}
            disabled={pilih !== null}
            className={`rounded-lg py-2 text-sm font-bold transition ${
              pilih !== null && i === s.jawab
                ? "bg-emerald-500 text-white"
                : pilih === i
                ? "bg-rose-400 text-white"
                : "bg-slate-100 text-ink-soft hover:bg-slate-200"
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
          <button onClick={lanjut} className="ml-2 rounded-md bg-brand-600 px-3 py-1 text-xs font-bold text-white">Bentuk berikutnya</button>
        </div>
      )}
    </div>
  );
}
