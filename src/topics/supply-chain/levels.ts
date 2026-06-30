import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "fondasi",
    order: 1,
    title: "Level 1 · Fondasi SCM",
    subtitle: "Memahami rantai pasok end-to-end",
    description:
      "Konsep supply chain, evolusi SCM, beda SCM dan logistik, value chain, ekosistem rantai pasok, model SCOR (Plan-Source-Make-Deliver-Return), serta efek bullwhip yang mengguncang seluruh rantai.",
    color: "from-sky-500 to-blue-600",
    icon: "🔗",
  },
  {
    id: "procurement",
    order: 2,
    title: "Level 2 · Pengadaan & Sourcing",
    subtitle: "Memilih dan mengelola pemasok",
    description:
      "Strategic sourcing, seleksi dan evaluasi pemasok, Supplier Relationship Management, tender dan kontrak, global sourcing, sustainable procurement, spend analysis, category management, sampai e-Katalog LKPP.",
    color: "from-amber-500 to-orange-600",
    icon: "🤝",
  },
  {
    id: "inventory",
    order: 3,
    title: "Level 3 · Manajemen Persediaan",
    subtitle: "Menjaga stok pas, tidak kurang tidak berlebih",
    description:
      "Economic Order Quantity (EOQ), safety stock, reorder point, analisis ABC dan XYZ, penilaian persediaan, cycle counting, dan optimasi persediaan.",
    color: "from-emerald-500 to-teal-600",
    icon: "📦",
  },
  {
    id: "warehousing",
    order: 4,
    title: "Level 4 · Pergudangan",
    subtitle: "Mengelola ruang dan aliran barang",
    description:
      "Desain dan tata letak gudang, slotting, strategi picking, packing, cross docking, cold chain, otomasi gudang, dan Warehouse Management System (WMS).",
    color: "from-indigo-500 to-blue-700",
    icon: "🏬",
  },
  {
    id: "logistik",
    order: 5,
    title: "Level 5 · Logistik & Distribusi",
    subtitle: "Memindahkan barang ke seluruh negeri",
    description:
      "Logistik domestik dan internasional, freight forwarding, pelayaran, kargo udara, laut, truk, kereta, last mile di negara kepulauan, reverse logistics, dan program Tol Laut.",
    color: "from-cyan-500 to-sky-600",
    icon: "🚚",
  },
  {
    id: "transportasi",
    order: 6,
    title: "Level 6 · Transportasi & Optimasi Rute",
    subtitle: "Merencanakan dan mengoptimalkan armada",
    description:
      "Perencanaan transportasi, manajemen armada, optimasi rute, Transportation Management System (TMS), manajemen carrier, dan optimasi biaya angkut.",
    color: "from-teal-500 to-emerald-600",
    icon: "🗺️",
  },
  {
    id: "produksi",
    order: 7,
    title: "Level 7 · Perencanaan Produksi",
    subtitle: "Mengubah rencana jadi barang jadi",
    description:
      "Perencanaan manufaktur, kapasitas, aggregate planning, Material Requirement Planning (MRP), MRP II, penjadwalan produksi, shop floor control, lean manufacturing, dan Theory of Constraints.",
    color: "from-rose-500 to-red-600",
    icon: "🏭",
  },
  {
    id: "demand",
    order: 8,
    title: "Level 8 · Perencanaan Permintaan",
    subtitle: "Menebak masa depan dengan disiplin",
    description:
      "Sales & Operations Planning (S&OP), demand forecasting, peramalan deret waktu, demand sensing, collaborative planning, dan Integrated Business Planning (IBP).",
    color: "from-violet-500 to-purple-600",
    icon: "📈",
  },
  {
    id: "analytics",
    order: 9,
    title: "Level 9 · Analitik Rantai Pasok",
    subtitle: "Mengukur, memvisualkan, mengoptimalkan",
    description:
      "KPI rantai pasok, dashboard, business intelligence, akurasi peramalan, metrik SCOR, optimasi jaringan, simulasi, dan digital twin.",
    color: "from-blue-500 to-indigo-600",
    icon: "📊",
  },
  {
    id: "risiko",
    order: 10,
    title: "Level 10 · Risiko & Resiliensi",
    subtitle: "Bertahan saat rantai terguncang",
    description:
      "Risiko rantai pasok, business continuity, risiko pemasok, risiko geopolitik, risiko iklim, risiko siber, resiliensi, dan scenario planning.",
    color: "from-orange-500 to-amber-600",
    icon: "🛡️",
  },
  {
    id: "keberlanjutan",
    order: 11,
    title: "Level 11 · Rantai Pasok Berkelanjutan",
    subtitle: "Hijau, sirkular, dan beretika",
    description:
      "Green supply chain, ekonomi sirkular, logistik berkelanjutan, ethical sourcing, kemasan ramah lingkungan, dan jejak karbon logistik.",
    color: "from-green-500 to-emerald-600",
    icon: "🌱",
  },
  {
    id: "digital",
    order: 12,
    title: "Level 12 · Rantai Pasok Digital",
    subtitle: "Teknologi yang mengubah rantai pasok",
    description:
      "Industry 4.0, IoT, RFID, AI dan machine learning dalam supply chain, blockchain untuk ketertelusuran, cloud supply chain, RPA, dan pengadaan digital.",
    color: "from-fuchsia-500 to-purple-600",
    icon: "🤖",
  },
  {
    id: "global",
    order: 13,
    title: "Level 13 · Rantai Pasok Global",
    subtitle: "Berdagang melintasi batas negara",
    description:
      "Perdagangan global, Incoterms, kepabeanan, trade compliance, Free Trade Agreement (FTA), manajemen ekspor dan impor, sanctions compliance, dan ekosistem logistik nasional (NLE/INSW).",
    color: "from-slate-600 to-blue-700",
    icon: "🌏",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
