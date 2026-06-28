import { useMemo, useState } from "react";

// Latihan klasifikasi HS Code: cocokkan produk dengan bab (chapter) HS yang tepat.
// Struktur HS: Bab (2 digit) > Pos (4 digit) > Subpos (6 digit) > pos tarif nasional (8 digit BTKI).
const SOAL = [
  { produk: "Kopi sangrai", bab: "09 (Kopi, teh, rempah)", contoh: "0901.21" },
  { produk: "Kemeja katun pria", bab: "62 (Pakaian bukan rajutan)", contoh: "6205.20" },
  { produk: "Ponsel pintar", bab: "85 (Mesin & peralatan listrik)", contoh: "8517.13" },
  { produk: "Ban mobil karet", bab: "40 (Karet & barang dari karet)", contoh: "4011.10" },
  { produk: "Furniture kayu", bab: "94 (Perabotan)", contoh: "9403.60" },
];

const PILIHAN = [
  "09 (Kopi, teh, rempah)",
  "62 (Pakaian bukan rajutan)",
  "85 (Mesin & peralatan listrik)",
  "40 (Karet & barang dari karet)",
  "94 (Perabotan)",
];

export function SimulatorHSCode() {
  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState<string | null>(null);
  const [skor, setSkor] = useState(0);
  const [dijawab, setDijawab] = useState(0);

  const soal = SOAL[idx];
  const benar = useMemo(() => pilih === soal.bab, [pilih, soal]);

  function jawab(opsi: string) {
    if (pilih) return;
    setPilih(opsi);
    setDijawab((d) => d + 1);
    if (opsi === soal.bab) setSkor((s) => s + 1);
  }

  function lanjut() {
    setPilih(null);
    setIdx((i) => (i + 1) % SOAL.length);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔢 Latihan Klasifikasi HS Code</div>
      <p className="mb-4 text-xs text-ink-faint">
        Setiap barang punya kode HS. Dua digit pertama menunjukkan bab. Tebak bab yang tepat untuk produk berikut.
      </p>

      <div className="rounded-xl bg-slate-50 p-4">
        <div className="text-xs text-ink-faint">Produk</div>
        <div className="text-xl font-extrabold text-ink">{soal.produk}</div>
      </div>

      <div className="mt-3 grid gap-2">
        {PILIHAN.map((opsi) => {
          let cls = "bg-white border-slate-200 hover:bg-slate-50";
          if (pilih) {
            if (opsi === soal.bab) cls = "bg-emerald-50 border-emerald-400 text-emerald-800";
            else if (opsi === pilih) cls = "bg-red-50 border-red-300 text-red-700";
            else cls = "bg-white border-slate-200 opacity-60";
          }
          return (
            <button key={opsi} onClick={() => jawab(opsi)} disabled={!!pilih} className={`rounded-lg border px-3 py-2 text-left text-sm font-semibold transition ${cls}`}>
              {opsi}
            </button>
          );
        })}
      </div>

      {pilih && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${benar ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
          {benar ? "Tepat! " : "Belum tepat. "}
          Bab yang benar adalah <b>{soal.bab}</b>, misalnya kode <b>{soal.contoh}</b>.
          <button onClick={lanjut} className="ml-2 rounded-md bg-brand-600 px-3 py-1 text-xs font-bold text-white">
            Soal berikutnya
          </button>
        </div>
      )}

      <div className="mt-3 text-xs text-ink-faint">
        Skor: <b>{skor}</b> benar dari <b>{dijawab}</b> percobaan. Klasifikasi yang tepat menentukan tarif bea masuk dan aturan lartas.
      </div>
    </div>
  );
}
