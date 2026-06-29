import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "gaya-hukum-newton",
    order: 1,
    title: "Gaya & Hukum Newton",
    subtitle: "Akar dari semua gerak",
    description: "Gaya, massa dan inersia, lalu tiga Hukum Newton: kelembaman, F = m · a, dan aksi-reaksi.",
    color: "from-indigo-400 to-violet-500",
    icon: "🧲",
  },
  {
    id: "jenis-gaya",
    order: 2,
    title: "Jenis-jenis Gaya",
    subtitle: "Mengenali gaya di sekitar kita",
    description: "Gaya berat, gaya normal, gaya gesek statis dan kinetis, serta tegangan tali.",
    color: "from-violet-400 to-purple-500",
    icon: "🪢",
  },
  {
    id: "diagram-benda-bebas",
    order: 3,
    title: "Diagram Benda Bebas",
    subtitle: "Menggambar gaya sebelum menghitung",
    description: "Menggambar diagram benda bebas, gaya pada lift, sistem katrol, dan gaya pada tali penghubung.",
    color: "from-purple-400 to-fuchsia-500",
    icon: "📐",
  },
  {
    id: "aplikasi-dinamika",
    order: 4,
    title: "Aplikasi Dinamika",
    subtitle: "Dinamika dalam dunia nyata",
    description: "Gerak pada bidang miring, sistem dua benda, gaya sentripetal, dan dinamika gerak melingkar.",
    color: "from-fuchsia-400 to-pink-500",
    icon: "🎡",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
