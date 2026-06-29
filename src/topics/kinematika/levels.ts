import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "konsep-gerak",
    order: 1,
    title: "Konsep Gerak",
    subtitle: "Acuan, posisi, dan kecepatan",
    description:
      "Kerangka acuan, posisi, jarak versus perpindahan, kelajuan versus kecepatan, dan percepatan. Fondasi bahasa gerak sebelum berhitung.",
    color: "from-blue-400 to-indigo-500",
    icon: "🏃",
  },
  {
    id: "grafik-gerak",
    order: 2,
    title: "Grafik Gerak",
    subtitle: "Membaca gerak lewat gambar",
    description:
      "Grafik posisi-waktu, kecepatan-waktu, dan percepatan-waktu. Menafsir kemiringan sebagai laju perubahan dan luas sebagai akumulasi.",
    color: "from-emerald-400 to-teal-500",
    icon: "📈",
  },
  {
    id: "gerak-lurus",
    order: 3,
    title: "Gerak Lurus",
    subtitle: "GLB, GLBB, dan gravitasi",
    description:
      "Gerak lurus beraturan, gerak lurus berubah beraturan, jatuh bebas, dan gerak vertikal ke atas dengan percepatan gravitasi.",
    color: "from-indigo-400 to-violet-500",
    icon: "🚗",
  },
  {
    id: "gerak-parabola",
    order: 4,
    title: "Gerak Parabola",
    subtitle: "Lintasan melengkung peluru",
    description:
      "Penguraian vektor kecepatan, gerak peluru sebagai paduan GLB dan GLBB, tinggi maksimum, dan jangkauan terjauh.",
    color: "from-pink-400 to-rose-500",
    icon: "🏀",
  },
  {
    id: "gerak-melingkar",
    order: 5,
    title: "Gerak Melingkar",
    subtitle: "Berputar mengelilingi pusat",
    description:
      "Besaran sudut, gerak melingkar beraturan, percepatan sentripetal, dan hubungan roda-roda yang saling terkait.",
    color: "from-orange-400 to-amber-500",
    icon: "🎡",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
