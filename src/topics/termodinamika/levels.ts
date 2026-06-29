import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "suhu-kalor",
    order: 1,
    title: "Level 1 · Suhu & Kalor",
    subtitle: "Panas, skala, dan wujud zat",
    description:
      "Suhu dan skala Celsius, Kelvin, Fahrenheit, pemuaian zat, kalor sebagai energi yang berpindah, serta perubahan wujud dan kalor laten.",
    color: "from-sky-400 to-cyan-500",
    icon: "🌡️",
  },
  {
    id: "perpindahan-kapasitas-kalor",
    order: 2,
    title: "Level 2 · Kapasitas & Perpindahan Kalor",
    subtitle: "Kalor jenis dan jalan kalor",
    description:
      "Kalor jenis dan kapasitas kalor, asas Black pada percampuran, serta tiga cara kalor berpindah: konduksi, konveksi, dan radiasi.",
    color: "from-cyan-400 to-teal-500",
    icon: "♨️",
  },
  {
    id: "gas-ideal",
    order: 3,
    title: "Level 3 · Gas Ideal",
    subtitle: "Tekanan, volume, dan suhu gas",
    description:
      "Hukum Boyle, hukum Charles dan Gay-Lussac, persamaan gas ideal PV = nRT, serta teori kinetik gas yang menjelaskan tekanan dari gerak molekul.",
    color: "from-teal-400 to-emerald-500",
    icon: "🎈",
  },
  {
    id: "hukum-termodinamika",
    order: 4,
    title: "Level 4 · Hukum Termodinamika",
    subtitle: "Energi, usaha, dan entropi",
    description:
      "Usaha gas pada proses isobarik, isokorik, isotermal, dan adiabatik, energi dalam gas, Hukum I dan II termodinamika, serta entropi.",
    color: "from-amber-400 to-orange-500",
    icon: "🔥",
  },
  {
    id: "mesin-kalor",
    order: 5,
    title: "Level 5 · Mesin Kalor",
    subtitle: "Mengubah dan memindahkan panas",
    description:
      "Siklus termodinamika dan efisiensi, siklus Carnot sebagai batas tertinggi, mesin kalor, serta mesin pendingin atau refrigerator.",
    color: "from-orange-400 to-red-500",
    icon: "⚙️",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
