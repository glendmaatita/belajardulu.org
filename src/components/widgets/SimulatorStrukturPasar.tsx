import { useMemo, useState } from "react";

// Bandingkan empat struktur pasar berdasarkan ciri-cirinya.
type Struktur = "Persaingan Sempurna" | "Persaingan Monopolistik" | "Oligopoli" | "Monopoli";

const DATA: Record<Struktur, { penjual: string; produk: string; kendaliHarga: string; hambatan: string; contoh: string; warna: string }> = {
  "Persaingan Sempurna": { penjual: "Sangat banyak", produk: "Identik", kendaliHarga: "Tidak ada (price taker)", hambatan: "Tidak ada", contoh: "Produk pertanian", warna: "text-emerald-700" },
  "Persaingan Monopolistik": { penjual: "Banyak", produk: "Terdiferensiasi", kendaliHarga: "Sedikit", hambatan: "Rendah", contoh: "Restoran, fashion", warna: "text-sky-700" },
  Oligopoli: { penjual: "Sedikit & besar", produk: "Identik/beda", kendaliHarga: "Cukup besar, saling pengaruh", hambatan: "Tinggi", contoh: "Telekomunikasi, semen", warna: "text-amber-700" },
  Monopoli: { penjual: "Satu", produk: "Unik tanpa substitusi", kendaliHarga: "Penuh (price maker)", hambatan: "Sangat tinggi", contoh: "Layanan air bersih", warna: "text-rose-700" },
};

const LIST: Struktur[] = ["Persaingan Sempurna", "Persaingan Monopolistik", "Oligopoli", "Monopoli"];

export function SimulatorStrukturPasar() {
  const [s, setS] = useState<Struktur>("Oligopoli");
  const d = useMemo(() => DATA[s], [s]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏪 Simulator Struktur Pasar</div>
      <p className="mb-4 text-xs text-ink-faint">
        Pilih satu struktur pasar dan bandingkan ciri-cirinya: jumlah penjual, jenis produk, kendali harga, dan hambatan masuk.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {LIST.map((x) => (
          <button key={x} onClick={() => setS(x)} className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${s === x ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft hover:bg-line"}`}>
            {x}
          </button>
        ))}
      </div>

      <div className="space-y-1.5 rounded-xl bg-canvas p-4 text-sm">
        <Row label="Jumlah penjual" value={d.penjual} />
        <Row label="Jenis produk" value={d.produk} />
        <Row label="Kendali atas harga" value={d.kendaliHarga} />
        <Row label="Hambatan masuk" value={d.hambatan} />
        <Row label="Contoh" value={d.contoh} />
      </div>

      <p className={`mt-3 text-sm font-bold ${d.warna}`}>{s}</p>
      <p className="mt-1 text-xs text-ink-faint">
        Makin sedikit penjual dan makin tinggi hambatan masuk, makin besar kekuatan menentukan harga, sehingga konsumen cenderung dirugikan dan pengawasan dibutuhkan.
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-ink-faint">{label}</span>
      <span className="text-right font-semibold text-ink">{value}</span>
    </div>
  );
}
