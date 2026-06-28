import { useMemo, useState } from "react";

// Latihan mengenali sesat pikir: baca pernyataan, pilih jenis fallacy yang tepat.
const SOAL = [
  { teks: "Jangan dengarkan dia soal ekonomi, dia kan cuma lulusan SMA.", jawab: "Ad Hominem" },
  { teks: "Kalau ganja dilegalkan, nanti semua narkoba pasti dilegalkan, lalu negara hancur.", jawab: "Slippery Slope" },
  { teks: "Kamu mendukung penghematan, berarti kamu ingin semua pegawai dipecat.", jawab: "Strawman" },
  { teks: "Kamu sama kami, atau kamu musuh kami. Tidak ada pilihan lain.", jawab: "False Dilemma" },
  { teks: "Produk ini pasti bagus, kan jutaan orang sudah membelinya.", jawab: "Bandwagon" },
];
const OPSI = ["Ad Hominem", "Slippery Slope", "Strawman", "False Dilemma", "Bandwagon"];

export function DetektorFallacy() {
  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState<string | null>(null);
  const [skor, setSkor] = useState(0);
  const [dijawab, setDijawab] = useState(0);

  const soal = SOAL[idx];
  const benar = useMemo(() => pilih === soal.jawab, [pilih, soal]);

  function jawab(o: string) {
    if (pilih) return;
    setPilih(o);
    setDijawab((d) => d + 1);
    if (o === soal.jawab) setSkor((s) => s + 1);
  }
  function lanjut() {
    setPilih(null);
    setIdx((i) => (i + 1) % SOAL.length);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🕵️ Detektor Sesat Pikir</div>
      <p className="mb-4 text-xs text-ink-faint">
        Baca pernyataan berikut dan tentukan jenis sesat pikir (fallacy) yang terjadi.
      </p>

      <div className="rounded-xl bg-slate-50 p-4">
        <div className="text-xs text-ink-faint">Pernyataan</div>
        <div className="mt-1 text-base font-semibold text-ink">"{soal.teks}"</div>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {OPSI.map((o) => {
          let cls = "bg-white border-slate-200 hover:bg-slate-50";
          if (pilih) {
            if (o === soal.jawab) cls = "bg-emerald-50 border-emerald-400 text-emerald-800";
            else if (o === pilih) cls = "bg-rose-50 border-rose-300 text-rose-700";
            else cls = "bg-white border-slate-200 opacity-60";
          }
          return (
            <button key={o} onClick={() => jawab(o)} disabled={!!pilih} className={`rounded-lg border px-3 py-2 text-left text-sm font-semibold transition ${cls}`}>
              {o}
            </button>
          );
        })}
      </div>

      {pilih && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${benar ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
          {benar ? "Tepat! " : "Belum tepat. "}Ini adalah <b>{soal.jawab}</b>.
          <button onClick={lanjut} className="ml-2 rounded-md bg-brand-600 px-3 py-1 text-xs font-bold text-white">Soal berikutnya</button>
        </div>
      )}

      <div className="mt-3 text-xs text-ink-faint">Skor: <b>{skor}</b> benar dari <b>{dijawab}</b> percobaan.</div>
    </div>
  );
}
