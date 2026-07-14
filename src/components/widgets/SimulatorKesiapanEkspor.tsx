import { useMemo, useState } from "react";

// Cek kesiapan ekspor untuk orang biasa (tanpa pabrik). Pengguna menilai dirinya
// pada enam aspek; skor total memberi gambaran seberapa siap ia mulai ekspor.
// Bukan penilaian resmi, hanya alat bantu refleksi.
type Aspek = {
  key: string;
  label: string;
  tanya: string;
  bobot: number; // kontribusi maksimum ke skor 100
};

const ASPEK: Aspek[] = [
  { key: "produk", label: "Produk & produsen", tanya: "Saya sudah punya produk dan produsen lokal yang pasokannya bisa diandalkan.", bobot: 22 },
  { key: "mutu", label: "Konsistensi mutu", tanya: "Mutu dan jumlah barang bisa dijaga konsisten untuk beberapa kali kirim.", bobot: 18 },
  { key: "modal", label: "Modal & arus kas", tanya: "Saya punya modal kerja atau skema (PO, konsinyasi) untuk menalangi sampai dibayar buyer.", bobot: 16 },
  { key: "pasar", label: "Pengetahuan pasar", tanya: "Saya tahu negara tujuan yang membutuhkan produk ini dan kira-kira harganya.", bobot: 16 },
  { key: "legal", label: "Legalitas", tanya: "Saya sudah/siap mengurus NIB lewat OSS dan paham dokumen dasar ekspor.", bobot: 14 },
  { key: "bahasa", label: "Komunikasi buyer", tanya: "Saya bisa berkomunikasi dengan buyer (bahasa Inggris dasar) dan menawar dengan sopan.", bobot: 14 },
];

type Nilai = 0 | 1 | 2; // Belum, Sebagian, Siap

const OPSI: { n: Nilai; teks: string }[] = [
  { n: 0, teks: "Belum" },
  { n: 1, teks: "Sebagian" },
  { n: 2, teks: "Siap" },
];

export function SimulatorKesiapanEkspor() {
  const [jawab, setJawab] = useState<Record<string, Nilai>>(
    Object.fromEntries(ASPEK.map((a) => [a.key, 1])) as Record<string, Nilai>,
  );

  const skor = useMemo(() => {
    return Math.round(
      ASPEK.reduce((s, a) => s + (jawab[a.key] / 2) * a.bobot, 0),
    );
  }, [jawab]);

  const verdikt =
    skor >= 80
      ? { warna: "#10b981", label: "Siap jalan", saran: "Kamu sudah cukup siap. Fokus cari buyer pertama dan kirim sampel." }
      : skor >= 55
        ? { warna: "#f59e0b", label: "Hampir siap", saran: "Tambal satu-dua celah dengan skor rendah, terutama pasokan produsen dan modal kerja." }
        : { warna: "#ef4444", label: "Perlu persiapan", saran: "Mulai dari yang paling dasar: kunci pasokan produsen yang andal, lalu urus legalitas." };

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">✅ Cek Kesiapan Ekspor (Tanpa Pabrik)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Nilai dirimu di enam aspek. Ini refleksi, bukan penilaian resmi. Geser tiap aspek ke Belum, Sebagian, atau Siap.
      </p>

      <div className="space-y-3">
        {ASPEK.map((a) => (
          <div key={a.key} className="rounded-xl bg-canvas p-3">
            <div className="mb-2 flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-ink">{a.label}</div>
                <div className="text-xs text-ink-faint">{a.tanya}</div>
              </div>
              <span className="shrink-0 rounded-md bg-white px-2 py-0.5 text-[11px] font-semibold text-ink-faint">
                bobot {a.bobot}
              </span>
            </div>
            <div className="flex gap-2">
              {OPSI.map((o) => (
                <button
                  key={o.n}
                  onClick={() => setJawab((j) => ({ ...j, [a.key]: o.n }))}
                  className={`flex-1 rounded-lg px-2 py-1.5 text-xs font-bold transition ${
                    jawab[a.key] === o.n ? "bg-brand-600 text-white" : "bg-white text-ink-soft hover:bg-line"
                  }`}
                >
                  {o.teks}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-canvas p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-soft">Skor kesiapan</span>
          <span className="tnum text-lg font-bold" style={{ color: verdikt.warna }}>
            {skor}/100
          </span>
        </div>
        <div className="h-3 w-full rounded-full bg-line">
          <div className="h-3 rounded-full transition-all" style={{ width: `${skor}%`, background: verdikt.warna }} />
        </div>
        <div className="mt-2 text-sm font-bold" style={{ color: verdikt.warna }}>
          {verdikt.label}
        </div>
        <p className="mt-1 text-xs text-ink-faint">{verdikt.saran}</p>
      </div>
    </div>
  );
}
