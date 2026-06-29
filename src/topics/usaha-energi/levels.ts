import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "usaha-daya",
    order: 1,
    title: "Usaha & Daya",
    subtitle: "Gaya yang membuahkan perpindahan",
    description:
      "Pengertian usaha, usaha oleh gaya konstan, usaha gaya bersudut, usaha oleh beberapa gaya, dan daya.",
    color: "from-violet-400 to-purple-500",
    icon: "⚡",
  },
  {
    id: "bentuk-energi",
    order: 2,
    title: "Bentuk Energi",
    subtitle: "Energi gerak, posisi, dan regangan",
    description:
      "Energi kinetik, teorema usaha-energi, energi potensial gravitasi, dan energi potensial pegas.",
    color: "from-purple-400 to-fuchsia-500",
    icon: "🔋",
  },
  {
    id: "kekekalan-energi",
    order: 3,
    title: "Kekekalan Energi",
    subtitle: "Total energi yang selalu tetap",
    description:
      "Energi mekanik, hukum kekekalan energi, energi pada bidang miring, dan energi pada ayunan.",
    color: "from-fuchsia-400 to-pink-500",
    icon: "♾️",
  },
  {
    id: "efisiensi-konversi",
    order: 4,
    title: "Efisiensi & Konversi",
    subtitle: "Energi yang berpindah wujud",
    description:
      "Daya dan kecepatan, efisiensi mesin, konversi bentuk energi, dan sumber energi.",
    color: "from-pink-400 to-rose-500",
    icon: "🌱",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
