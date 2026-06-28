import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "bahasa-simbol",
    order: 1,
    title: "Level 1 · Bahasa Simbol",
    subtitle: "Variabel & bentuk aljabar",
    description: "Mengapa kita memakai huruf, apa itu variabel, konstanta, koefisien, dan suku, serta menerjemahkan kalimat sehari-hari menjadi simbol.",
    color: "from-rose-400 to-pink-500",
    icon: "🔤",
  },
  {
    id: "persamaan-linear",
    order: 2,
    title: "Level 2 · Persamaan Linear",
    subtitle: "Menyeimbangkan untuk cari x",
    description: "Menyelesaikan persamaan satu variabel dengan ide timbangan yang seimbang, sampai langkah-langkahnya menjadi aturan.",
    color: "from-pink-400 to-fuchsia-500",
    icon: "⚖️",
  },
  {
    id: "operasi-bentuk",
    order: 3,
    title: "Level 3 · Operasi Bentuk Aljabar",
    subtitle: "Menyederhanakan & faktorkan",
    description: "Menjumlah suku sejenis, sifat distributif, perkalian bentuk aljabar, dan pemfaktoran sebagai kebalikannya.",
    color: "from-fuchsia-400 to-purple-500",
    icon: "✖️",
  },
  {
    id: "pertidaksamaan-sistem",
    order: 4,
    title: "Level 4 · Pertidaksamaan & Sistem",
    subtitle: "Lebih dari satu syarat",
    description: "Pertidaksamaan linear dan sistem persamaan dua variabel lewat situasi nyata seperti belanja dan campuran.",
    color: "from-purple-400 to-violet-500",
    icon: "🔗",
  },
  {
    id: "persamaan-kuadrat",
    order: 5,
    title: "Level 5 · Persamaan Kuadrat",
    subtitle: "Saat x bertemu x kuadrat",
    description: "Memahami persamaan kuadrat lewat luas dan pola, memfaktorkan, melengkapkan kuadrat, hingga rumus abc lahir di akhir.",
    color: "from-violet-400 to-indigo-500",
    icon: "🟪",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
