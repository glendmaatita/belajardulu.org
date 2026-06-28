import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "perbandingan-segitiga",
    order: 1,
    title: "Level 1 · Perbandingan Segitiga",
    subtitle: "Lahirnya sin, cos, tan",
    description: "Pada segitiga siku-siku yang sebangun, perbandingan sisi selalu tetap. Dari sinilah sinus, kosinus, dan tangen ditemukan.",
    color: "from-orange-400 to-amber-500",
    icon: "📐",
  },
  {
    id: "sudut-istimewa",
    order: 2,
    title: "Level 2 · Sudut Istimewa",
    subtitle: "0, 30, 45, 60, 90 derajat",
    description: "Nilai perbandingan trigonometri untuk sudut istimewa dan cara menemukannya dari segitiga sederhana.",
    color: "from-amber-400 to-yellow-500",
    icon: "📐",
  },
  {
    id: "lingkaran-satuan",
    order: 3,
    title: "Level 3 · Lingkaran Satuan",
    subtitle: "Sudut di segala arah",
    description: "Memperluas trigonometri ke semua sudut dengan lingkaran satuan dan empat kuadran.",
    color: "from-yellow-400 to-lime-500",
    icon: "⭕",
  },
  {
    id: "identitas",
    order: 4,
    title: "Level 4 · Identitas Trigonometri",
    subtitle: "Hubungan yang selalu benar",
    description: "Identitas dasar seperti sin kuadrat tambah cos kuadrat sama dengan satu, ditemukan lewat Pythagoras.",
    color: "from-lime-400 to-green-500",
    icon: "🟰",
  },
  {
    id: "aturan-aplikasi",
    order: 5,
    title: "Level 5 · Aturan Sinus & Kosinus",
    subtitle: "Segitiga sembarang & terapan",
    description: "Aturan sinus dan kosinus untuk segitiga sembarang serta penerapan mengukur jarak dan tinggi.",
    color: "from-green-400 to-emerald-500",
    icon: "🗺️",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
