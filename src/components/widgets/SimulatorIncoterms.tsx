import { useMemo, useState } from "react";

// Incoterms 2020: siapa menanggung biaya & risiko di tiap tahap perjalanan barang.
// Disederhanakan ke 7 tahap utama dari gudang penjual sampai gudang pembeli.
type Incoterm = "EXW" | "FCA" | "FOB" | "CFR" | "CIF" | "DAP" | "DDP";

const TAHAP = [
  "Muat di gudang penjual",
  "Angkut ke pelabuhan asal",
  "Bea & dokumen ekspor",
  "Muat ke kapal",
  "Pelayaran utama (freight)",
  "Bongkar & impor di tujuan",
  "Antar ke gudang pembeli",
];

// Untuk tiap incoterm, sampai tahap ke-berapa (index) penjual menanggung biaya.
// Nilai = index tahap terakhir yang ditanggung PENJUAL.
const SELLER_SAMPAI: Record<Incoterm, number> = {
  EXW: -1, // pembeli urus semua bahkan dari gudang penjual
  FCA: 2, // penjual sampai serah ke pengangkut + urus ekspor
  FOB: 3, // penjual sampai barang di atas kapal
  CFR: 4, // penjual bayar freight, risiko pindah di kapal
  CIF: 4, // seperti CFR + asuransi
  DAP: 5, // penjual sampai tujuan, belum bea impor
  DDP: 6, // penjual tanggung semua termasuk bea impor
};

const DESKRIPSI: Record<Incoterm, string> = {
  EXW: "Ex Works: pembeli mengambil barang di gudang penjual dan menanggung seluruh biaya & risiko sesudahnya. Beban paling berat untuk pembeli.",
  FCA: "Free Carrier: penjual menyerahkan barang (sudah diurus ekspor) ke pengangkut yang ditunjuk pembeli. Fleksibel untuk peti kemas.",
  FOB: "Free On Board: penjual menanggung sampai barang berada di atas kapal di pelabuhan asal. Risiko pindah ke pembeli sejak itu.",
  CFR: "Cost and Freight: penjual membayar ongkos angkut laut sampai pelabuhan tujuan, tetapi risiko sudah pindah ke pembeli saat barang di kapal.",
  CIF: "Cost, Insurance and Freight: sama seperti CFR ditambah penjual wajib membayar asuransi minimum. Umum dipakai di perdagangan laut.",
  DAP: "Delivered At Place: penjual menanggung sampai barang tiba di tempat tujuan, tetapi bea masuk & pajak impor jadi tanggungan pembeli.",
  DDP: "Delivered Duty Paid: penjual menanggung segalanya sampai gudang pembeli, termasuk bea masuk & pajak impor. Beban paling berat untuk penjual.",
};

const LIST: Incoterm[] = ["EXW", "FCA", "FOB", "CFR", "CIF", "DAP", "DDP"];

export function SimulatorIncoterms() {
  const [term, setTerm] = useState<Incoterm>("CIF");
  const sampai = SELLER_SAMPAI[term];
  // Asuransi: hanya CIF (dan CIP) yang mewajibkan penjual. Kita tandai khusus CIF.
  const asuransiPenjual = useMemo(() => term === "CIF", [term]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🚢 Simulator Incoterms 2020</div>
      <p className="mb-4 text-xs text-ink-faint">
        Pilih satu Incoterm, lihat sampai tahap mana <b>penjual</b> menanggung biaya dan risiko, dan sejak kapan beralih ke <b>pembeli</b>.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {LIST.map((t) => (
          <button
            key={t}
            onClick={() => setTerm(t)}
            className={`rounded-lg px-3 py-1.5 text-sm font-bold transition ${
              term === t ? "bg-brand-600 text-white" : "bg-slate-100 text-ink-soft hover:bg-slate-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-1.5">
        {TAHAP.map((tahap, i) => {
          const penjual = i <= sampai;
          return (
            <div key={i} className="flex items-center gap-3">
              <div className="w-6 text-right text-xs font-bold text-ink-faint">{i + 1}</div>
              <div className="flex-1 text-sm text-ink-soft">{tahap}</div>
              <span
                className={`rounded-md px-2 py-0.5 text-xs font-bold ${
                  penjual ? "bg-sky-100 text-sky-700" : "bg-amber-100 text-amber-700"
                }`}
              >
                {penjual ? "Penjual" : "Pembeli"}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm">
        <div className="mb-1 font-bold text-ink">{term}</div>
        <p className="text-ink-soft">{DESKRIPSI[term]}</p>
        <p className="mt-2 text-xs text-ink-faint">
          Asuransi wajib oleh penjual: <b>{asuransiPenjual ? "Ya (minimum)" : "Tidak diwajibkan"}</b>.
        </p>
      </div>
    </div>
  );
}
