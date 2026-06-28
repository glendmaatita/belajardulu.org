import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "fondasi",
    order: 1,
    title: "Level 1 · Fondasi Mikroekonomi",
    subtitle: "Kelangkaan & pilihan",
    description:
      "Inti ilmu ekonomi: kelangkaan, pilihan, dan biaya peluang. Pelaku ekonomi, insentif, serta cara berpikir marginal dan ceteris paribus.",
    color: "from-rose-500 to-pink-600",
    icon: "🧩",
  },
  {
    id: "pasar",
    order: 2,
    title: "Level 2 · Permintaan & Penawaran",
    subtitle: "Mekanisme pasar",
    description:
      "Hukum permintaan dan penawaran, keseimbangan pasar (equilibrium), pergeseran kurva, serta surplus konsumen dan produsen.",
    color: "from-pink-500 to-fuchsia-600",
    icon: "⚖️",
  },
  {
    id: "elastisitas",
    order: 3,
    title: "Level 3 · Elastisitas & Perilaku Konsumen",
    subtitle: "Kepekaan & utilitas",
    description:
      "Elastisitas harga permintaan dan penawaran, faktor penentunya, utilitas, dan hukum utilitas marginal yang menurun.",
    color: "from-fuchsia-500 to-purple-600",
    icon: "📐",
  },
  {
    id: "produksi",
    order: 4,
    title: "Level 4 · Produksi & Biaya",
    subtitle: "Dari input ke laba",
    description:
      "Fungsi produksi, biaya tetap dan variabel, biaya marginal dan rata-rata, skala ekonomi, serta keputusan laba maksimum (MR = MC).",
    color: "from-violet-500 to-indigo-600",
    icon: "🏭",
  },
  {
    id: "struktur",
    order: 5,
    title: "Level 5 · Struktur Pasar",
    subtitle: "Persaingan hingga monopoli",
    description:
      "Persaingan sempurna, monopoli, oligopoli, dan persaingan monopolistik, ditutup dengan kegagalan pasar dan peran intervensi pemerintah.",
    color: "from-indigo-500 to-blue-600",
    icon: "🏪",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
