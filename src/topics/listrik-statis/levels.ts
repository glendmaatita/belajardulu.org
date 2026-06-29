import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "muatan-coulomb",
    order: 1,
    title: "Muatan & Hukum Coulomb",
    subtitle: "Asal mula gaya listrik",
    description:
      "Muatan listrik, cara memberi muatan lewat gosokan, induksi, dan konduksi, hukum Coulomb, serta gaya oleh beberapa muatan sekaligus.",
    color: "from-amber-400 to-yellow-500",
    icon: "⚡",
  },
  {
    id: "medan-listrik",
    order: 2,
    title: "Medan Listrik",
    subtitle: "Daerah pengaruh muatan",
    description:
      "Medan listrik sebagai peta gaya, garis-garis medan, medan oleh beberapa muatan, serta pengantar fluks dan hukum Gauss.",
    color: "from-lime-400 to-green-500",
    icon: "🌐",
  },
  {
    id: "potensial-listrik",
    order: 3,
    title: "Potensial Listrik",
    subtitle: "Bukit dan lembah listrik",
    description:
      "Energi potensial listrik, potensial listrik, beda potensial dan usaha memindahkan muatan, serta hubungan antara medan dan potensial.",
    color: "from-teal-400 to-cyan-500",
    icon: "🏔️",
  },
  {
    id: "kapasitor",
    order: 4,
    title: "Kapasitor",
    subtitle: "Menabung muatan dan energi",
    description:
      "Kapasitansi, kapasitor keping sejajar dengan luas, jarak, dan dielektrik, rangkaian seri dan paralel, serta energi yang tersimpan.",
    color: "from-sky-400 to-blue-500",
    icon: "🔋",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
