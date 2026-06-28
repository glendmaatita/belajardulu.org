import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "dasar",
    order: 1,
    title: "Level 1 · Fundamental Perdagangan",
    subtitle: "Bisnis & perdagangan internasional",
    description:
      "Cara barang berpindah antarnegara, peran WTO, neraca perdagangan, hambatan tarif & non-tarif, serta pengantar jenis ekspor dan impor.",
    color: "from-sky-500 to-blue-600",
    icon: "🌍",
  },
  {
    id: "produk",
    order: 2,
    title: "Level 2 · Produk & Regulasi",
    subtitle: "HS Code, Lartas, asal barang",
    description:
      "Klasifikasi barang dengan HS Code/BTKI, aturan larangan & pembatasan (lartas) dan perizinan, serta Rules of Origin dan surat keterangan asal (COO).",
    color: "from-cyan-500 to-teal-600",
    icon: "🏷️",
  },
  {
    id: "kepabeanan",
    order: 3,
    title: "Level 3 · Kepabeanan",
    subtitle: "PIB, PEB, nilai pabean, tarif",
    description:
      "Dasar hukum kepabeanan, teknis customs clearance dan penjaluran, sistem nilai pabean (transaction value), serta tarif MFN dan preferensi.",
    color: "from-teal-500 to-emerald-600",
    icon: "🛃",
  },
  {
    id: "dokumen",
    order: 4,
    title: "Level 4 · Dokumen Internasional",
    subtitle: "Invoice, B/L, COO",
    description:
      "Dokumen perdagangan (invoice, packing list, kontrak), dokumen pengiriman (Bill of Lading, Air Waybill), dan dokumen kepabeanan.",
    color: "from-emerald-500 to-green-600",
    icon: "📑",
  },
  {
    id: "logistik",
    order: 5,
    title: "Level 5 · Logistik Internasional",
    subtitle: "Freight, shipping, warehouse",
    description:
      "Freight forwarder dan konsolidasi, FCL vs LCL, ocean & air freight, jadwal kapal, demurrage & detention, serta pergudangan termasuk bonded warehouse.",
    color: "from-green-500 to-lime-600",
    icon: "🚚",
  },
  {
    id: "incoterms",
    order: 6,
    title: "Level 6 · Incoterms 2020",
    subtitle: "Pembagian biaya & risiko",
    description:
      "Sebelas istilah Incoterms 2020 (EXW sampai DDP), titik perpindahan biaya dan risiko, serta cara memilih term yang tepat.",
    color: "from-lime-500 to-yellow-600",
    icon: "📦",
  },
  {
    id: "pembayaran",
    order: 7,
    title: "Level 7 · Pembayaran Internasional",
    subtitle: "LC, TT, trade finance",
    description:
      "Metode pembayaran (advance, TT, open account, collection, Letter of Credit) dan trade finance seperti export/import financing, factoring, dan bank guarantee.",
    color: "from-amber-500 to-orange-600",
    icon: "💳",
  },
  {
    id: "asuransi",
    order: 8,
    title: "Level 8 · Asuransi Pengangkutan",
    subtitle: "Marine cargo insurance",
    description:
      "Marine insurance, perbedaan klausul ICC A, B, dan C, asuransi kargo, serta proses klaim saat barang rusak atau hilang.",
    color: "from-orange-500 to-red-600",
    icon: "🛟",
  },
  {
    id: "perpajakan",
    order: 9,
    title: "Level 9 · Perpajakan Impor",
    subtitle: "Bea masuk, PPN, PPh, fasilitas",
    description:
      "Bea masuk, PPN impor, PPh Pasal 22, bea masuk tambahan, serta fasilitas fiskal seperti KITE, Kawasan Berikat, KEK, dan Free Trade Zone.",
    color: "from-red-500 to-rose-600",
    icon: "🧮",
  },
  {
    id: "compliance",
    order: 10,
    title: "Level 10 · Compliance",
    subtitle: "Audit & kepatuhan",
    description:
      "Audit kepabeanan (PCA), audit dokumen dan transaksi, serta customs compliance lewat internal control, due diligence, dan record keeping.",
    color: "from-rose-500 to-pink-600",
    icon: "✅",
  },
  {
    id: "risiko",
    order: 11,
    title: "Level 11 · Manajemen Risiko",
    subtitle: "Fraud & pelanggaran",
    description:
      "Risiko fraud dalam perdagangan: under-valuation, misclassification, penyelundupan, dan risiko transaksi pihak berelasi, beserta cara mencegahnya.",
    color: "from-pink-500 to-fuchsia-600",
    icon: "⚠️",
  },
  {
    id: "digital",
    order: 12,
    title: "Level 12 · Digital Customs",
    subtitle: "CEISA, INSW, digital trade",
    description:
      "Sistem digital DJBC (CEISA, INSW, e-Billing, e-Manifest) dan digital trade lewat e-commerce lintas batas serta dokumentasi elektronik.",
    color: "from-fuchsia-500 to-violet-600",
    icon: "💻",
  },
  {
    id: "praktik",
    order: 13,
    title: "Level 13 · Praktik",
    subtitle: "Simulasi impor & ekspor",
    description:
      "Simulasi end-to-end: dari mencari supplier/buyer, negosiasi, menghitung landed cost, booking kapal, customs clearance, sampai dokumen dan pembayaran.",
    color: "from-violet-500 to-purple-600",
    icon: "🎯",
  },
  {
    id: "advanced",
    order: 14,
    title: "Level 14 · Advanced",
    subtitle: "Trade agreement, supply chain, analytics",
    description:
      "Trade agreement (WTO, RCEP, ASEAN, CEPA, IJEPA), manajemen supply chain end-to-end, dan trade analytics untuk pengambilan keputusan.",
    color: "from-purple-500 to-indigo-600",
    icon: "📊",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
