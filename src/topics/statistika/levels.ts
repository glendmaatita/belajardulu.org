import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "data-penyajian",
    order: 1,
    title: "Level 1 · Data & Penyajian",
    subtitle: "Mengumpulkan dan menggambar",
    description: "Jenis data, cara mengumpulkan, serta menyajikan dengan tabel dan diagram yang jujur.",
    color: "from-indigo-400 to-blue-500",
    icon: "🗂️",
  },
  {
    id: "pemusatan",
    order: 2,
    title: "Level 2 · Ukuran Pemusatan",
    subtitle: "Mean, median, modus",
    description: "Menemukan satu angka yang mewakili banyak data dan kapan tiap ukuran paling tepat dipakai.",
    color: "from-blue-400 to-cyan-500",
    icon: "🎯",
  },
  {
    id: "penyebaran",
    order: 3,
    title: "Level 3 · Ukuran Penyebaran",
    subtitle: "Seberapa menyebar data",
    description: "Jangkauan, kuartil, dan simpangan baku untuk melihat keragaman data, bukan hanya rata-ratanya.",
    color: "from-cyan-400 to-sky-500",
    icon: "📏",
  },
  {
    id: "peluang",
    order: 4,
    title: "Level 4 · Peluang",
    subtitle: "Mengukur kemungkinan",
    description: "Peluang dari percobaan nyata, ruang sampel, dan kejadian, menuju rumus peluang.",
    color: "from-sky-400 to-blue-500",
    icon: "🎲",
  },
  {
    id: "distribusi-korelasi",
    order: 5,
    title: "Level 5 · Distribusi & Hubungan",
    subtitle: "Pola dan keterkaitan",
    description: "Membaca distribusi data dan mengenali hubungan antar dua variabel lewat diagram pencar.",
    color: "from-blue-400 to-indigo-500",
    icon: "🔗",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
