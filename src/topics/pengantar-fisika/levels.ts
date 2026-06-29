import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "besaran-satuan",
    order: 1,
    title: "Besaran & Satuan",
    subtitle: "Bahasa pengukuran fisika",
    description: "Apa itu fisika, besaran pokok dan turunan, satuan Sistem Internasional, konversi satuan, serta beda besaran skalar dan vektor.",
    color: "from-sky-400 to-blue-500",
    icon: "📏",
  },
  {
    id: "dimensi",
    order: 2,
    title: "Dimensi Besaran",
    subtitle: "Tata bahasa rumus fisika",
    description: "Dimensi besaran, analisis dimensi, asas kehomogenan dimensi, dan cara menurunkan bentuk rumus lewat dimensi tanpa menghafal.",
    color: "from-violet-400 to-indigo-500",
    icon: "🧩",
  },
  {
    id: "ketelitian-pengukuran",
    order: 3,
    title: "Ketelitian Pengukuran",
    subtitle: "Jujur soal seberapa yakin",
    description: "Alat ukur dan ketelitiannya, ketidakpastian, angka penting, operasi angka penting, serta notasi ilmiah.",
    color: "from-teal-400 to-emerald-500",
    icon: "🔬",
  },
  {
    id: "pengolahan-data",
    order: 4,
    title: "Pengolahan Data & Estimasi",
    subtitle: "Dari data mentah ke kesimpulan",
    description: "Pengukuran berulang dan ralat, membaca alat ukur, estimasi orde besaran, serta cara menyajikan data hasil percobaan.",
    color: "from-amber-400 to-orange-500",
    icon: "📊",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
