import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "hukum-gravitasi",
    order: 1,
    title: "Hukum Gravitasi Newton",
    subtitle: "Apel, Bulan, dan satu gaya yang sama",
    description:
      "Gaya gravitasi antar massa, konstanta gravitasi G, hukum kuadrat terbalik, dan percepatan gravitasi g.",
    color: "from-pink-400 to-rose-500",
    icon: "🍎",
  },
  {
    id: "medan-potensial-gravitasi",
    order: 2,
    title: "Medan & Potensial Gravitasi",
    subtitle: "Jaring tak kasat mata di sekitar massa",
    description:
      "Medan gravitasi dan kuat medan, energi potensial gravitasi, serta potensial gravitasi per satuan massa.",
    color: "from-fuchsia-400 to-pink-500",
    icon: "🌌",
  },
  {
    id: "orbit-satelit",
    order: 3,
    title: "Orbit & Satelit",
    subtitle: "Jatuh selamanya tanpa pernah menabrak",
    description:
      "Hukum Kepler, orbit lingkaran, laju dan periode orbit, serta satelit geostasioner dan jenis orbit.",
    color: "from-violet-400 to-purple-500",
    icon: "🛰️",
  },
  {
    id: "energi-orbit",
    order: 4,
    title: "Energi Orbit & Kecepatan Lepas",
    subtitle: "Dari membebaskan diri hingga lubang hitam",
    description:
      "Energi total orbit, kecepatan lepas, gravitasi di dalam planet, dan pengantar lubang hitam.",
    color: "from-indigo-400 to-violet-600",
    icon: "🕳️",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
