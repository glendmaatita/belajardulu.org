import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "apa-itu-matematika",
    order: 1,
    title: "Level 1 · Apa Itu Matematika?",
    subtitle: "Matematika vs berhitung",
    description:
      "Membedakan matematika dari sekadar berhitung, melihat pola dan keteraturan di sekitar kita, dan memahami matematika sebagai bahasa untuk membaca semesta.",
    color: "from-blue-500 to-indigo-600",
    icon: "🧭",
  },
  {
    id: "bilangan-pola",
    order: 2,
    title: "Level 2 · Bilangan & Pola",
    subtitle: "Dari menghitung ke pola",
    description:
      "Bagaimana bilangan lahir dari kebutuhan sehari-hari, operasi lewat cerita nyata, pecahan dan persen, serta menemukan pola barisan lewat petualangan.",
    color: "from-indigo-500 to-violet-600",
    icon: "🔢",
  },
  {
    id: "bentuk-ruang",
    order: 3,
    title: "Level 3 · Bentuk & Ruang",
    subtitle: "Geometri di sekitar kita",
    description:
      "Bentuk di sekeliling kita, menemukan luas dengan menghitung petak, lahirnya bilangan pi, dan petualangan segitiga menuju Teorema Pythagoras.",
    color: "from-violet-500 to-purple-600",
    icon: "📐",
  },
  {
    id: "perbandingan-perubahan",
    order: 4,
    title: "Level 4 · Perbandingan & Perubahan",
    subtitle: "Rasio, proporsi, laju",
    description:
      "Rasio dalam resep dan peta, proporsi dan kesebandingan, persen dalam diskon dan bunga, serta laju perubahan seperti kecepatan dan pertumbuhan.",
    color: "from-purple-500 to-fuchsia-600",
    icon: "⚖️",
  },
  {
    id: "bahasa-semesta",
    order: 5,
    title: "Level 5 · Bahasa Semesta",
    subtitle: "Peluang, data, keindahan",
    description:
      "Peluang untuk menjinakkan ketidakpastian, statistika untuk membaca dunia lewat data, pertumbuhan eksponensial, dan keindahan matematika di alam.",
    color: "from-fuchsia-500 to-pink-600",
    icon: "✨",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
