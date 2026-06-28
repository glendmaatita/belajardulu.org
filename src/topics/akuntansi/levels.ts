import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "dasar",
    order: 1,
    title: "Level 1 · Fondasi Akuntansi",
    subtitle: "Mulai dari nol",
    description:
      "Pahami apa itu akuntansi, persamaan dasar, akun, aturan debit-kredit, jurnal, buku besar, dan neraca saldo.",
    color: "from-emerald-500 to-teal-600",
    icon: "🌱",
  },
  {
    id: "siklus",
    order: 2,
    title: "Level 2 · Siklus Akuntansi",
    subtitle: "Dari transaksi ke laporan",
    description:
      "Jurnal penyesuaian, neraca lajur, menyusun laporan keuangan, jurnal penutup, dan jurnal pembalik.",
    color: "from-sky-500 to-blue-600",
    icon: "🔄",
  },
  {
    id: "dagang",
    order: 3,
    title: "Level 3 · Perusahaan Dagang",
    subtitle: "Jual-beli barang",
    description:
      "Karakteristik perusahaan dagang, persediaan (perpetual & periodik), metode FIFO/Average, HPP, diskon, retur, dan PPN.",
    color: "from-violet-500 to-purple-600",
    icon: "🏪",
  },
  {
    id: "lanjutan",
    order: 4,
    title: "Level 4 · Topik Lanjutan",
    subtitle: "Pos-pos penting",
    description:
      "Kas & rekonsiliasi bank, piutang & penyisihan, aset tetap & penyusutan, liabilitas, dan pengantar akuntansi biaya.",
    color: "from-amber-500 to-orange-600",
    icon: "📊",
  },
  {
    id: "advance",
    order: 5,
    title: "Level 5 · Advance",
    subtitle: "Analisis & standar",
    description:
      "Analisis rasio laporan keuangan, akuntansi manufaktur, laporan arus kas, PSAK, dan dasar akuntansi pajak.",
    color: "from-rose-500 to-pink-600",
    icon: "🚀",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
