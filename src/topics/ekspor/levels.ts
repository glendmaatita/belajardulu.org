import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "mulai",
    order: 1,
    title: "Level 1 · Siap Ekspor Tanpa Pabrik",
    subtitle: "Peluang, mindset & kesiapan",
    description:
      "Kamu tidak perlu punya pabrik untuk ekspor. Kenali model eksportir non-produsen (kamu jadi jembatan antara produsen lokal dan pembeli luar negeri), bongkar mitos 'ekspor cuma untuk perusahaan besar', nilai kesiapanmu, temukan produk dan produsen, lalu pahami perananmu dalam rantai ekspor.",
    color: "from-emerald-500 to-teal-600",
    icon: "🌏",
  },
  {
    id: "riset",
    order: 2,
    title: "Level 2 · Riset Pasar & Buyer",
    subtitle: "Pasar tujuan, HS Code, cari pembeli, harga",
    description:
      "Menentukan negara tujuan lewat data, membaca HS Code produkmu, mencari dan menyeleksi buyer tanpa tertipu, lalu menyusun harga ekspor dari harga beli produsen ditambah biaya ekspor dan margin, agar untung dan tetap bersaing.",
    color: "from-teal-500 to-cyan-600",
    icon: "🔎",
  },
  {
    id: "legalitas",
    order: 3,
    title: "Level 3 · Legalitas & Dokumen",
    subtitle: "NIB, Lartas, PEB, dokumen ekspor",
    description:
      "Mengurus legalitas eksportir lewat OSS/NIB (cukup izin usaha perdagangan, tanpa pabrik), mengecek larangan dan pembatasan (Lartas), menyiapkan dokumen inti ekspor, dan memahami alur Bea Cukai lewat PEB sampai terbit NPE.",
    color: "from-cyan-500 to-sky-600",
    icon: "📑",
  },
  {
    id: "logistik",
    order: 4,
    title: "Level 4 · Pembayaran & Pengiriman",
    subtitle: "Pembayaran, Incoterms, logistik, asuransi",
    description:
      "Memilih metode pembayaran internasional yang aman untuk transaksi pertama, memahami Incoterms 2020, mengatur pengapalan (FCL/LCL) lewat freight forwarder, serta melindungi kiriman dengan asuransi kargo.",
    color: "from-sky-500 to-blue-600",
    icon: "🚢",
  },
  {
    id: "tumbuh",
    order: 5,
    title: "Level 5 · Prosedur, Modal Kecil & Tumbuh",
    subtitle: "Alur end-to-end, ekspor modal kecil, scaling",
    description:
      "Merangkai seluruh proses ekspor dari kontrak sampai dana masuk, model ekspor bermodal kecil tanpa pabrik (undername, agregator, konsinyasi, dropship, marketplace ekspor), memanfaatkan insentif (PPN 0%, pembiayaan LPEI/KUR ekspor), lalu menumbuhkan bisnis ekspor secara berkelanjutan.",
    color: "from-blue-500 to-indigo-600",
    icon: "📈",
  },
];
