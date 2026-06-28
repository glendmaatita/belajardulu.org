import { useMemo, useState } from "react";

// Detektor greenwashing: centang tanda bahaya pada sebuah klaim hijau, dapatkan skor risiko.
const TANDA = [
  { id: "kabur", teks: "Istilah kabur tanpa definisi ('eco', 'natural', 'hijau')", bobot: 2 },
  { id: "data", teks: "Tidak ada data atau bukti terukur", bobot: 3 },
  { id: "target", teks: "Tidak ada target dengan tenggat waktu", bobot: 2 },
  { id: "scope", teks: "Hanya menonjolkan satu hal kecil, menutupi dampak besar", bobot: 3 },
  { id: "sertif", teks: "Tidak ada sertifikasi/verifikasi pihak ketiga", bobot: 2 },
  { id: "gambar", teks: "Banyak gambar daun/hijau tetapi minim substansi", bobot: 1 },
];

export function DetektorGreenwashing() {
  const [aktif, setAktif] = useState<Record<string, boolean>>({});

  const r = useMemo(() => {
    const maks = TANDA.reduce((a, b) => a + b.bobot, 0);
    const skor = TANDA.reduce((a, b) => a + (aktif[b.id] ? b.bobot : 0), 0);
    const pct = (skor / maks) * 100;
    let level = "Rendah";
    if (pct >= 60) level = "Tinggi";
    else if (pct >= 30) level = "Sedang";
    return { skor, maks, pct, level };
  }, [aktif]);

  const warna = r.pct >= 60 ? "text-rose-700" : r.pct >= 30 ? "text-amber-700" : "text-emerald-700";
  const bg = r.pct >= 60 ? "bg-rose-50" : r.pct >= 30 ? "bg-amber-50" : "bg-emerald-50";

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🕵️ Detektor Greenwashing</div>
      <p className="mb-4 text-xs text-ink-faint">
        Periksa sebuah klaim hijau. Centang tanda bahaya yang muncul, lalu lihat tingkat risiko greenwashing-nya.
      </p>

      <div className="space-y-2">
        {TANDA.map((t) => (
          <label key={t.id} className="flex cursor-pointer items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
            <span className="text-sm text-ink-soft">{t.teks}</span>
            <input type="checkbox" checked={!!aktif[t.id]} onChange={(e) => setAktif((p) => ({ ...p, [t.id]: e.target.checked }))} className="h-4 w-4 accent-rose-500" />
          </label>
        ))}
      </div>

      <div className={`mt-4 rounded-xl ${bg} p-4 text-center`}>
        <div className="text-xs text-ink-faint">Skor risiko greenwashing</div>
        <div className={`text-3xl font-extrabold tnum ${warna}`}>{r.skor} / {r.maks}</div>
        <div className={`mt-1 text-lg font-bold ${warna}`}>Risiko: {r.level}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Makin banyak tanda bahaya, makin besar kemungkinan klaim hanya pemasaran. Klaim hijau yang kredibel selalu didukung data, target terukur, dan verifikasi independen.
      </p>
    </div>
  );
}
