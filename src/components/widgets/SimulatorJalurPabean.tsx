import { useMemo, useState } from "react";

// Simulasi penjaluran impor: hijau / kuning / merah berdasarkan profil risiko.
// Edukatif & disederhanakan, bukan algoritma resmi DJBC.
export function SimulatorJalurPabean() {
  const [importirBaru, setImportirBaru] = useState(false); // reputasi importir
  const [dokumenLengkap, setDokumenLengkap] = useState(true);
  const [barangBerisiko, setBarangBerisiko] = useState(false); // komoditas sensitif/lartas
  const [nilaiWajar, setNilaiWajar] = useState(true); // harga sesuai pasar (tidak under-value)

  const hasil = useMemo(() => {
    let skor = 0;
    if (importirBaru) skor += 2;
    if (!dokumenLengkap) skor += 3;
    if (barangBerisiko) skor += 2;
    if (!nilaiWajar) skor += 3;

    if (skor >= 5) {
      return {
        jalur: "Merah",
        warna: "#ef4444",
        bg: "bg-red-50",
        teks: "text-red-700",
        narasi: "Risiko tinggi. Dilakukan pemeriksaan fisik barang dan penelitian dokumen sebelum barang dikeluarkan.",
      };
    }
    if (skor >= 2) {
      return {
        jalur: "Kuning",
        warna: "#f59e0b",
        bg: "bg-amber-50",
        teks: "text-amber-700",
        narasi: "Risiko menengah. Dilakukan penelitian dokumen, tanpa pemeriksaan fisik (kecuali ada temuan).",
      };
    }
    return {
      jalur: "Hijau",
      warna: "#10b981",
      bg: "bg-emerald-50",
      teks: "text-emerald-700",
      narasi: "Risiko rendah. Barang dapat langsung keluar tanpa pemeriksaan fisik maupun penelitian dokumen mendalam.",
    };
  }, [importirBaru, dokumenLengkap, barangBerisiko, nilaiWajar]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🚦 Simulator Penjaluran Pabean</div>
      <p className="mb-4 text-xs text-ink-faint">
        Sistem pabean menilai risiko tiap impor lalu menetapkan jalur. Ubah faktor di bawah dan lihat jalurnya. Ilustrasi edukatif, bukan aturan resmi.
      </p>

      <div className="space-y-2">
        <Toggle label="Importir baru / reputasi belum terbangun" value={importirBaru} set={setImportirBaru} naik />
        <Toggle label="Dokumen lengkap & konsisten" value={dokumenLengkap} set={setDokumenLengkap} />
        <Toggle label="Barang termasuk komoditas berisiko / lartas" value={barangBerisiko} set={setBarangBerisiko} naik />
        <Toggle label="Nilai barang wajar (sesuai harga pasar)" value={nilaiWajar} set={setNilaiWajar} />
      </div>

      <div className={`mt-5 rounded-xl ${hasil.bg} p-4`}>
        <div className="flex items-center gap-3">
          <span className="inline-block h-4 w-4 rounded-full" style={{ background: hasil.warna }} />
          <span className={`text-lg font-extrabold ${hasil.teks}`}>Jalur {hasil.jalur}</span>
        </div>
        <p className="mt-2 text-sm text-ink-soft">{hasil.narasi}</p>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Tips: importir patuh dengan dokumen rapi dan nilai wajar cenderung mendapat jalur hijau sehingga barang keluar lebih cepat dan biaya penyimpanan lebih hemat.
      </p>
    </div>
  );
}

function Toggle({ label, value, set, naik }: { label: string; value: boolean; set: (b: boolean) => void; naik?: boolean }) {
  // `naik` menandai faktor yang menaikkan risiko jika dicentang.
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
      <span className="text-sm text-ink-soft">{label}</span>
      <input type="checkbox" checked={value} onChange={(e) => set(e.target.checked)} className={`h-4 w-4 ${naik ? "accent-red-500" : "accent-emerald-500"}`} />
    </label>
  );
}
