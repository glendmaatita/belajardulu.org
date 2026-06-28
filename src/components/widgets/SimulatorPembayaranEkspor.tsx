import { useState } from "react";

// Metode pembayaran internasional: keseimbangan risiko antara eksportir & importir.
type Metode = "Advance Payment" | "Letter of Credit" | "Documentary Collection" | "Open Account";

const DATA: Record<
  Metode,
  { risikoEksportir: number; risikoImportir: number; narasi: string; cocok: string }
> = {
  "Advance Payment": {
    risikoEksportir: 1,
    risikoImportir: 5,
    narasi: "Pembeli membayar penuh di muka sebelum barang dikirim. Sangat aman bagi eksportir, tetapi importir menanggung risiko barang tidak dikirim.",
    cocok: "Transaksi pertama, pembeli baru, atau barang custom.",
  },
  "Letter of Credit": {
    risikoEksportir: 2,
    risikoImportir: 2,
    narasi: "Bank menjamin pembayaran jika eksportir menyerahkan dokumen sesuai syarat LC. Risiko seimbang karena bank menjadi penengah, tetapi biaya & prosedurnya lebih rumit.",
    cocok: "Nilai besar, mitra belum saling percaya, lintas negara berisiko.",
  },
  "Documentary Collection": {
    risikoEksportir: 3,
    risikoImportir: 3,
    narasi: "Bank meneruskan dokumen dan menagih pembayaran, tetapi tidak menjamin. Lebih murah dari LC, tetapi perlindungannya lebih lemah.",
    cocok: "Mitra cukup terpercaya, ingin biaya lebih hemat dari LC.",
  },
  "Open Account": {
    risikoEksportir: 5,
    risikoImportir: 1,
    narasi: "Barang dikirim dulu, dibayar kemudian (misal 60 hari). Sangat nyaman bagi importir, tetapi eksportir menanggung risiko tidak dibayar.",
    cocok: "Mitra lama yang terpercaya, pasar kompetitif.",
  },
};

const LIST: Metode[] = ["Advance Payment", "Letter of Credit", "Documentary Collection", "Open Account"];

function Bar({ label, level }: { label: string; level: number }) {
  const warna = level >= 4 ? "#ef4444" : level === 3 ? "#f59e0b" : "#10b981";
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="font-semibold text-ink-soft">{label}</span>
        <span className="font-bold" style={{ color: warna }}>
          {level >= 4 ? "Tinggi" : level === 3 ? "Sedang" : "Rendah"}
        </span>
      </div>
      <div className="h-3 w-full rounded-full bg-slate-200">
        <div className="h-3 rounded-full" style={{ width: `${(level / 5) * 100}%`, background: warna }} />
      </div>
    </div>
  );
}

export function SimulatorPembayaranEkspor() {
  const [metode, setMetode] = useState<Metode>("Letter of Credit");
  const d = DATA[metode];

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">💳 Simulator Metode Pembayaran Ekspor-Impor</div>
      <p className="mb-4 text-xs text-ink-faint">
        Tiap metode membagi risiko berbeda antara eksportir dan importir. Pilih satu dan bandingkan.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {LIST.map((m) => (
          <button
            key={m}
            onClick={() => setMetode(m)}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
              metode === m ? "bg-brand-600 text-white" : "bg-slate-100 text-ink-soft hover:bg-slate-200"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <Bar label="Risiko bagi Eksportir (penjual)" level={d.risikoEksportir} />
        <Bar label="Risiko bagi Importir (pembeli)" level={d.risikoImportir} />
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm">
        <p className="text-ink-soft">{d.narasi}</p>
        <p className="mt-2 text-xs text-ink-faint">
          Paling cocok: <b>{d.cocok}</b>
        </p>
      </div>
    </div>
  );
}
