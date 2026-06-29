import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "arus-hukum-ohm",
    order: 1,
    title: "Arus & Hukum Ohm",
    subtitle: "Yang mengalir di dalam kawat",
    description:
      "Arus listrik, beda potensial, hambatan dan hambatan jenis, Hukum Ohm, serta beda konduktor dan isolator.",
    color: "from-lime-400 to-green-500",
    icon: "🔌",
  },
  {
    id: "rangkaian-hambatan",
    order: 2,
    title: "Rangkaian Hambatan",
    subtitle: "Menyusun jalan bagi arus",
    description:
      "Rangkaian seri dan paralel, kombinasi seri-paralel, serta menghitung hambatan pengganti.",
    color: "from-green-400 to-emerald-500",
    icon: "🪢",
  },
  {
    id: "hukum-kirchhoff",
    order: 3,
    title: "Hukum Kirchhoff",
    subtitle: "Aturan di persimpangan dan loop",
    description:
      "Hukum I Kirchhoff (titik cabang), Hukum II Kirchhoff (loop), GGL dan hambatan dalam, serta rangkaian dua loop.",
    color: "from-emerald-400 to-teal-500",
    icon: "🔀",
  },
  {
    id: "energi-daya-listrik",
    order: 4,
    title: "Energi & Daya Listrik",
    subtitle: "Listrik yang kita bayar",
    description:
      "Daya listrik, energi listrik dan biaya PLN, alat listrik rumah tangga, serta keselamatan listrik.",
    color: "from-teal-400 to-cyan-500",
    icon: "⚡",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
