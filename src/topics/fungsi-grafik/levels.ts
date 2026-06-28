import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "apa-itu-fungsi",
    order: 1,
    title: "Level 1 · Apa Itu Fungsi",
    subtitle: "Mesin input dan output",
    description: "Memahami fungsi sebagai aturan yang memetakan tiap masukan ke tepat satu keluaran, lewat contoh sehari-hari.",
    color: "from-emerald-400 to-green-500",
    icon: "⚙️",
  },
  {
    id: "fungsi-linear",
    order: 2,
    title: "Level 2 · Fungsi Linear",
    subtitle: "Garis lurus & gradien",
    description: "Hubungan yang berubah tetap menghasilkan garis lurus. Menemukan gradien dan titik potong dari pola.",
    color: "from-green-400 to-teal-500",
    icon: "📈",
  },
  {
    id: "fungsi-kuadrat",
    order: 3,
    title: "Level 3 · Fungsi Kuadrat",
    subtitle: "Parabola & titik puncak",
    description: "Bentuk parabola, titik puncak, dan sumbu simetri ditemukan dari tabel nilai dan grafik.",
    color: "from-teal-400 to-cyan-500",
    icon: "🪃",
  },
  {
    id: "jenis-fungsi",
    order: 4,
    title: "Level 4 · Ragam Fungsi",
    subtitle: "Eksponen, akar, mutlak",
    description: "Mengenali ciri fungsi eksponen, akar, dan nilai mutlak dari grafiknya.",
    color: "from-cyan-400 to-sky-500",
    icon: "🧮",
  },
  {
    id: "membaca-grafik",
    order: 5,
    title: "Level 5 · Membaca & Mengubah Grafik",
    subtitle: "Geser, regang, balik",
    description: "Membaca informasi dari grafik dan memahami transformasi grafik fungsi.",
    color: "from-sky-400 to-blue-500",
    icon: "🔍",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
