import { useState } from "react";

// Membandingkan model ekspor untuk orang tanpa pabrik. Tiap model punya trade-off
// antara modal awal, potensi margin, kendali atas transaksi, dan kerumitan.
// Nilai 1-5 bersifat ilustratif untuk membandingkan, bukan angka baku.
type Model = "Ekspor Mandiri" | "Undername" | "Agregator" | "Marketplace / Dropship";

const DATA: Record<
  Model,
  { modal: number; margin: number; kendali: number; rumit: number; narasi: string; cocok: string }
> = {
  "Ekspor Mandiri": {
    modal: 4,
    margin: 5,
    kendali: 5,
    rumit: 4,
    narasi: "Kamu punya NIB sendiri, membeli dari produsen, dan mengurus PEB atas namamu sendiri (bisa dibantu forwarder). Paling untung dan paling kamu kendalikan, tetapi paling banyak yang harus dipelajari dan disiapkan.",
    cocok: "Kamu serius jangka panjang dan siap mengurus dokumen sendiri.",
  },
  Undername: {
    modal: 2,
    margin: 3,
    kendali: 3,
    rumit: 2,
    narasi: "Barang diekspor memakai bendera (NIB/PEB) perusahaan lain yang sudah biasa ekspor, kamu membayar fee jasa. Cepat mulai tanpa banyak urus izin, tetapi kamu bergantung pada pihak itu dan tetap wajib memastikan barang serta dokumen benar (tanggung jawab hukum tidak hilang).",
    cocok: "Uji pasar cepat, order pertama, atau volume masih kecil.",
  },
  Agregator: {
    modal: 2,
    margin: 2,
    kendali: 2,
    rumit: 1,
    narasi: "Kamu menitipkan produk ke agregator atau konsolidator ekspor yang menggabungkan barang banyak produsen kecil menjadi satu pengapalan. Paling ringan, tetapi margin dan kendalimu paling kecil karena harga dan buyer dipegang agregator.",
    cocok: "Produsen/penjual kecil yang ingin tembus ekspor tanpa repot.",
  },
  "Marketplace / Dropship": {
    modal: 2,
    margin: 3,
    kendali: 3,
    rumit: 3,
    narasi: "Kamu menjual lewat marketplace lintas negara (mis. Etsy, Amazon, Alibaba) dan mengirim paket kecil lewat jasa kurir/pos. Modal awal kecil dan bisa mulai dari rumah, tetapi ada biaya platform, dan pengiriman ritel per paket relatif mahal per unit.",
    cocok: "Produk ritel bernilai tambah tinggi (kerajinan, fesyen, kopi kemasan).",
  },
};

const LIST: Model[] = ["Ekspor Mandiri", "Undername", "Agregator", "Marketplace / Dropship"];

function Bar({ label, level, tinggiBaik }: { label: string; level: number; tinggiBaik: boolean }) {
  // Untuk modal & kerumitan, nilai rendah lebih baik (hijau); untuk margin & kendali, tinggi lebih baik.
  const baik = tinggiBaik ? level >= 4 : level <= 2;
  const buruk = tinggiBaik ? level <= 2 : level >= 4;
  const warna = baik ? "#10b981" : buruk ? "#ef4444" : "#f59e0b";
  const teks = level >= 4 ? "Tinggi" : level === 3 ? "Sedang" : "Rendah";
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="font-semibold text-ink-soft">{label}</span>
        <span className="font-bold" style={{ color: warna }}>{teks}</span>
      </div>
      <div className="h-3 w-full rounded-full bg-line">
        <div className="h-3 rounded-full" style={{ width: `${(level / 5) * 100}%`, background: warna }} />
      </div>
    </div>
  );
}

export function SimulatorModelEkspor() {
  const [model, setModel] = useState<Model>("Undername");
  const d = DATA[model];

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧭 Simulator Model Ekspor Tanpa Pabrik</div>
      <p className="mb-4 text-xs text-ink-faint">
        Empat cara mulai ekspor tanpa punya pabrik. Pilih satu dan bandingkan modal, margin, kendali, dan kerumitannya.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {LIST.map((m) => (
          <button
            key={m}
            onClick={() => setModel(m)}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
              model === m ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft hover:bg-line"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Bar label="Modal awal" level={d.modal} tinggiBaik={false} />
        <Bar label="Potensi margin" level={d.margin} tinggiBaik={true} />
        <Bar label="Kendali atas transaksi" level={d.kendali} tinggiBaik={true} />
        <Bar label="Kerumitan mengurus" level={d.rumit} tinggiBaik={false} />
      </div>

      <div className="mt-4 rounded-xl bg-canvas p-4 text-sm">
        <p className="text-ink-soft">{d.narasi}</p>
        <p className="mt-2 text-xs text-ink-faint">
          Paling cocok: <b>{d.cocok}</b>
        </p>
      </div>
    </div>
  );
}
