import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "garis-sudut",
    order: 1,
    title: "Level 1 · Garis, Sudut, Bidang",
    subtitle: "Unsur dasar geometri",
    description: "Titik, garis, sinar, sudut dan jenisnya, serta hubungan sudut saat garis berpotongan dan sejajar.",
    color: "from-teal-400 to-cyan-500",
    icon: "📐",
  },
  {
    id: "bangun-datar",
    order: 2,
    title: "Level 2 · Bangun Datar",
    subtitle: "Keliling & luas",
    description: "Segitiga, persegi, jajar genjang, trapesium, dan lingkaran. Menemukan keliling dan luas dengan mengukur dan menyusun.",
    color: "from-cyan-400 to-sky-500",
    icon: "🟦",
  },
  {
    id: "pythagoras-kesebangunan",
    order: 3,
    title: "Level 3 · Pythagoras & Kesebangunan",
    subtitle: "Segitiga istimewa",
    description: "Teorema Pythagoras lewat luas bujur sangkar, kesebangunan, dan kekongruenan bangun.",
    color: "from-sky-400 to-blue-500",
    icon: "🔺",
  },
  {
    id: "bangun-ruang",
    order: 4,
    title: "Level 4 · Bangun Ruang",
    subtitle: "Volume & luas permukaan",
    description: "Kubus, balok, prisma, tabung, limas, kerucut, dan bola. Menemukan volume dengan menumpuk satuan kubus.",
    color: "from-blue-400 to-indigo-500",
    icon: "🧊",
  },
  {
    id: "transformasi",
    order: 5,
    title: "Level 5 · Transformasi & Simetri",
    subtitle: "Menggeser, memutar, mencermin",
    description: "Translasi, refleksi, rotasi, dilatasi, dan simetri pada bidang koordinat.",
    color: "from-indigo-400 to-violet-500",
    icon: "🔄",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
