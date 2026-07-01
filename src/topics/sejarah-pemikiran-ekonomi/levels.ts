import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "praklasik",
    order: 1,
    title: "Level 1 · Akar & Praklasik",
    subtitle: "Sebelum ilmu ekonomi lahir",
    description:
      "Pemikiran ekonomi zaman kuno (Aristoteles), sumbangan Ibn Khaldun, ajaran skolastik tentang harga adil dan riba, merkantilisme, serta kaum fisiokrat yang pertama melihat ekonomi sebagai sistem.",
    color: "from-amber-600 to-yellow-700",
    icon: "📜",
  },
  {
    id: "klasik",
    order: 2,
    title: "Level 2 · Mazhab Klasik",
    subtitle: "Kelahiran ilmu ekonomi",
    description:
      "Adam Smith dan tangan tak tampak, pembagian kerja, teori nilai kerja, Thomas Malthus tentang populasi, David Ricardo dengan keunggulan komparatif dan sewa, hukum Say, serta John Stuart Mill.",
    color: "from-orange-600 to-amber-700",
    icon: "⚖️",
  },
  {
    id: "kritik",
    order: 3,
    title: "Level 3 · Marx & Kritik atas Klasik",
    subtitle: "Menggugat tatanan",
    description:
      "Kritik Karl Marx terhadap kapitalisme dan ekonomi klasik, teori nilai lebih, sosialisme, mazhab historis Jerman, serta kelahiran institusionalisme (Veblen) yang menyoroti peran lembaga.",
    color: "from-rose-600 to-red-700",
    icon: "🔥",
  },
  {
    id: "marginal",
    order: 4,
    title: "Level 4 · Revolusi Marginal & Neoklasik",
    subtitle: "Nilai dari kegunaan",
    description:
      "Revolusi marginal (Jevons, Menger, Walras) yang mengubah teori nilai, sintesis neoklasik Alfred Marshall dengan penawaran dan permintaan, keseimbangan umum, serta lahirnya mazhab Austria.",
    color: "from-sky-600 to-blue-700",
    icon: "📐",
  },
  {
    id: "modern",
    order: 5,
    title: "Level 5 · Ekonomi Modern",
    subtitle: "Dari Keynes sampai perilaku",
    description:
      "Revolusi Keynesian dan permintaan agregat, monetarisme Milton Friedman, mazhab Austria Hayek, teori pilihan publik, ekonomi kelembagaan baru, sampai ekonomi perilaku yang menantang asumsi rasionalitas.",
    color: "from-indigo-600 to-violet-800",
    icon: "🧠",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
