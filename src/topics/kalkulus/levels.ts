import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "limit",
    order: 1,
    title: "Level 1 · Limit",
    subtitle: "Mendekati tanpa menyentuh",
    description: "Gagasan limit lewat mendekati suatu nilai dari kiri dan kanan, dan mengapa itu penting.",
    color: "from-purple-400 to-violet-500",
    icon: "🎯",
  },
  {
    id: "turunan",
    order: 2,
    title: "Level 2 · Turunan",
    subtitle: "Laju perubahan sesaat",
    description: "Dari kemiringan garis menuju kemiringan kurva di satu titik, yaitu gradien garis singgung.",
    color: "from-violet-400 to-indigo-500",
    icon: "📉",
  },
  {
    id: "aplikasi-turunan",
    order: 3,
    title: "Level 3 · Aplikasi Turunan",
    subtitle: "Maksimum & minimum",
    description: "Memakai turunan untuk menemukan titik tertinggi dan terendah pada masalah nyata.",
    color: "from-indigo-400 to-blue-500",
    icon: "⛰️",
  },
  {
    id: "integral",
    order: 4,
    title: "Level 4 · Integral",
    subtitle: "Luas di bawah kurva",
    description: "Menjumlah potongan kecil tak hingga untuk menemukan luas dan total, kebalikan dari turunan.",
    color: "from-blue-400 to-cyan-500",
    icon: "📐",
  },
  {
    id: "aplikasi-integral",
    order: 5,
    title: "Level 5 · Aplikasi Integral",
    subtitle: "Total dari laju",
    description: "Memakai integral untuk menghitung jarak dari kecepatan, luas daerah, dan volume benda putar.",
    color: "from-cyan-400 to-teal-500",
    icon: "🔵",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
