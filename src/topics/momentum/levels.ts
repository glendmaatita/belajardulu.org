import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "momentum-impuls",
    order: 1,
    title: "Momentum & Impuls",
    subtitle: "Kuantitas gerak dan pengubahnya",
    description:
      "Momentum linear, impuls, teorema impuls-momentum, impuls sebagai luas grafik gaya-waktu, serta aplikasi keselamatan dan olahraga.",
    color: "from-purple-400 to-fuchsia-500",
    icon: "🎱",
  },
  {
    id: "kekekalan-momentum",
    order: 2,
    title: "Kekekalan Momentum",
    subtitle: "Yang tetap terjaga",
    description:
      "Hukum kekekalan momentum, ledakan dan sentakan (recoil), gaya dorong roket, serta ayunan balistik.",
    color: "from-fuchsia-400 to-pink-500",
    icon: "🚀",
  },
  {
    id: "tumbukan",
    order: 3,
    title: "Tumbukan",
    subtitle: "Beradu dan memantul",
    description:
      "Jenis tumbukan, lenting sempurna, tak lenting sama sekali, lenting sebagian, dan koefisien restitusi.",
    color: "from-pink-400 to-rose-500",
    icon: "💥",
  },
  {
    id: "pusat-massa",
    order: 4,
    title: "Pusat Massa & Sistem",
    subtitle: "Satu titik mewakili semua",
    description:
      "Pusat massa, gerak pusat massa, sistem banyak partikel, dan aplikasi keseimbangan serta stabilitas.",
    color: "from-rose-400 to-orange-500",
    icon: "⚖️",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
