import { useMemo, useState } from "react";

// Berpikir kritis: nilai kekuatan dukungan sebuah klaim.
// User memutuskan apakah klaim DIDUKUNG BAIK atau LEMAH/menyesatkan.
type Nilai = "kuat" | "lemah";

const SOAL: { klaim: string; nilai: Nilai; ket: string }[] = [
  {
    klaim: "Sebuah uji acak terkontrol pada 10.000 orang menemukan obat A menurunkan gejala 30% dibanding plasebo.",
    nilai: "kuat",
    ket: "Sampel besar, ada kelompok pembanding (plasebo), dan acak terkontrol. Bukti kuat.",
  },
  {
    klaim: "Tetanggaku sembuh setelah minum jamu ini, jadi jamu ini pasti menyembuhkan penyakit itu.",
    nilai: "lemah",
    ket: "Satu kasus (anekdot), tanpa pembanding. Bisa jadi kebetulan atau efek lain. Korelasi bukan sebab.",
  },
  {
    klaim: "90% dokter yang kami survei merekomendasikan produk ini. (Catatan kecil: survei terhadap 10 dokter yang disponsori produsen.)",
    nilai: "lemah",
    ket: "Sampel sangat kecil dan ada konflik kepentingan (disponsori). Angka 90% menyesatkan.",
  },
  {
    klaim: "Data BPS selama 10 tahun menunjukkan tingkat kemiskinan turun dari 11% ke 9%.",
    nilai: "kuat",
    ket: "Sumber kredibel, rentang waktu panjang, dan angka spesifik yang bisa diperiksa.",
  },
  {
    klaim: "Sejak toko buka, penjualan naik. Pasti karena warna catnya yang baru.",
    nilai: "lemah",
    ket: "Menyimpulkan sebab tunggal tanpa menyingkirkan faktor lain (musim, promosi, lokasi). Sebab belum terbukti.",
  },
  {
    klaim: "Meta-analisis terhadap 25 studi menyimpulkan olahraga teratur menurunkan risiko depresi.",
    nilai: "kuat",
    ket: "Meta-analisis menggabungkan banyak studi, memberi bukti lebih kuat daripada satu studi tunggal.",
  },
];

const OPSI: { id: Nilai; label: string }[] = [
  { id: "kuat", label: "Didukung kuat" },
  { id: "lemah", label: "Lemah / menyesatkan" },
];

export function PenilaiKlaim() {
  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState<Nilai | null>(null);
  const s = SOAL[idx];
  const benar = useMemo(() => pilih !== null && pilih === s.nilai, [pilih, s]);

  function lanjut() {
    setPilih(null);
    setIdx((i) => (i + 1) % SOAL.length);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔎 Penilai Kekuatan Klaim</div>
      <p className="mb-4 text-xs text-ink-faint">Berpikir kritis: nilai apakah bukti di balik klaim ini kuat atau lemah. Perhatikan ukuran sampel, pembanding, sumber, dan konflik kepentingan.</p>

      <div className="rounded-xl bg-canvas p-4 text-sm text-ink">{s.klaim}</div>

      <div className="mt-3 flex gap-2">
        {OPSI.map((o) => (
          <button
            key={o.id}
            onClick={() => pilih === null && setPilih(o.id)}
            disabled={pilih !== null}
            className={`flex-1 rounded-lg py-2 text-sm font-bold transition ${
              pilih !== null && o.id === s.nilai
                ? "bg-emerald-500 text-white"
                : pilih === o.id
                ? "bg-rose-400 text-white"
                : "bg-canvas text-ink-soft hover:bg-line"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      {pilih !== null && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${benar ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
          {benar ? "Tepat! " : "Belum tepat. "}
          {s.ket}
          <button onClick={lanjut} className="ml-2 rounded-md bg-brand-600 px-3 py-1 text-xs font-bold text-white">Klaim berikutnya</button>
        </div>
      )}
    </div>
  );
}
