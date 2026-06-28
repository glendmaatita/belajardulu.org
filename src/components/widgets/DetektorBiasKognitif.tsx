import { useMemo, useState } from "react";

// Kenali bias kognitif dari skenario sehari-hari.
const BIAS = [
  "Bias Konfirmasi",
  "Efek Bandwagon",
  "Bias Penjangkaran",
  "Bias Ketersediaan",
  "Sunk Cost",
] as const;
type Bias = (typeof BIAS)[number];

const SOAL: { skenario: string; bias: Bias; ket: string }[] = [
  {
    skenario: "Budi yakin vaksin berbahaya, jadi ia hanya membaca artikel yang menentang vaksin dan mengabaikan studi yang mendukung.",
    bias: "Bias Konfirmasi",
    ket: "Hanya mencari bukti yang menguatkan keyakinan dan menyaring yang bertentangan.",
  },
  {
    skenario: "Ani membeli saham itu karena 'semua orang di grup chat sedang membelinya', tanpa menganalisis perusahaannya.",
    bias: "Efek Bandwagon",
    ket: "Percaya atau ikut bertindak karena banyak orang melakukannya, bukan karena bukti.",
  },
  {
    skenario: "Penjual menyebut harga awal Rp10 juta, lalu menurunkannya jadi Rp7 juta. Pembeli merasa murah padahal nilai wajarnya Rp5 juta.",
    bias: "Bias Penjangkaran",
    ket: "Terpaku pada angka pertama (jangkar) sebagai acuan menilai berikutnya.",
  },
  {
    skenario: "Setelah melihat berita kecelakaan pesawat, Tono merasa terbang jauh lebih berbahaya daripada naik mobil, padahal datanya sebaliknya.",
    bias: "Bias Ketersediaan",
    ket: "Menilai sesuatu sering atau berisiko hanya karena contohnya mudah diingat.",
  },
  {
    skenario: "Rina terus menonton film yang membosankan sampai habis 'karena tiketnya sudah terlanjur dibeli'.",
    bias: "Sunk Cost",
    ket: "Melanjutkan sesuatu hanya karena sudah menanam biaya, bukan karena manfaat ke depan.",
  },
  {
    skenario: "Seorang manajer hanya mengingat proyek yang gagal saat dipimpin tim A, lalu menilai tim A buruk tanpa melihat data lengkap.",
    bias: "Bias Ketersediaan",
    ket: "Contoh yang gampang teringat mendominasi penilaian, mengalahkan data menyeluruh.",
  },
];

export function DetektorBiasKognitif() {
  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState<Bias | null>(null);
  const s = SOAL[idx];
  const benar = useMemo(() => pilih !== null && pilih === s.bias, [pilih, s]);

  function lanjut() {
    setPilih(null);
    setIdx((i) => (i + 1) % SOAL.length);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧠 Detektor Bias Kognitif</div>
      <p className="mb-4 text-xs text-ink-faint">Baca skenario, lalu tentukan bias kognitif yang sedang bekerja.</p>

      <div className="rounded-xl bg-slate-50 p-4 text-sm text-ink">{s.skenario}</div>

      <div className="mt-3 flex flex-wrap gap-2">
        {BIAS.map((b) => (
          <button
            key={b}
            onClick={() => pilih === null && setPilih(b)}
            disabled={pilih !== null}
            className={`rounded-lg px-3 py-2 text-sm font-bold transition ${
              pilih !== null && b === s.bias
                ? "bg-emerald-500 text-white"
                : pilih === b
                ? "bg-rose-400 text-white"
                : "bg-slate-100 text-ink-soft hover:bg-slate-200"
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      {pilih !== null && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${benar ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
          {benar ? "Tepat! " : `Belum tepat. Ini ${s.bias}. `}
          {s.ket}
          <button onClick={lanjut} className="ml-2 rounded-md bg-brand-600 px-3 py-1 text-xs font-bold text-white">Skenario berikutnya</button>
        </div>
      )}
    </div>
  );
}
