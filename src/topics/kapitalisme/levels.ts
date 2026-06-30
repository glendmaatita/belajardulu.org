import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "fondasi",
    order: 1,
    title: "Level 1 · Fondasi Kapitalisme",
    subtitle: "Apa itu kapitalisme dan ciri-cirinya",
    description:
      "Definisi kapitalisme, empat pilarnya (milik pribadi, pasar bebas, motif laba, persaingan), beda dengan sistem ekonomi lain, serta peran harga sebagai sinyal.",
    color: "from-amber-500 to-orange-600",
    icon: "💰",
  },
  {
    id: "sejarah",
    order: 2,
    title: "Level 2 · Akar Sejarah",
    subtitle: "Dari merkantilisme ke revolusi industri",
    description:
      "Perdagangan dan merkantilisme, lahirnya pabrik dan revolusi industri, Adam Smith dan The Wealth of Nations, serta bagaimana kapitalisme menyebar ke dunia.",
    color: "from-yellow-600 to-amber-700",
    icon: "🏭",
  },
  {
    id: "pasar",
    order: 3,
    title: "Level 3 · Pasar & Mekanisme Harga",
    subtitle: "Tangan tak tampak yang mengatur",
    description:
      "Penawaran dan permintaan, keseimbangan harga, tangan tak tampak Adam Smith, persaingan, dan bagaimana pasar mengoordinasikan jutaan keputusan tanpa komando pusat.",
    color: "from-emerald-500 to-teal-600",
    icon: "⚖️",
  },
  {
    id: "milik-modal",
    order: 4,
    title: "Level 4 · Milik Pribadi, Modal & Laba",
    subtitle: "Mesin penggerak kapitalisme",
    description:
      "Hak milik pribadi, modal dan investasi, faktor produksi, upah dan tenaga kerja, laba sebagai insentif, serta peran perusahaan dan kewirausahaan.",
    color: "from-sky-500 to-blue-600",
    icon: "🏦",
  },
  {
    id: "pemikir",
    order: 5,
    title: "Level 5 · Pemikir Besar",
    subtitle: "Tokoh yang membentuk pemikiran ekonomi",
    description:
      "Adam Smith, David Ricardo, Karl Marx, John Maynard Keynes, Friedrich Hayek, Milton Friedman, dan Joseph Schumpeter, beserta gagasan kunci mereka.",
    color: "from-violet-500 to-purple-600",
    icon: "🧠",
  },
  {
    id: "varian",
    order: 6,
    title: "Level 6 · Varian Kapitalisme",
    subtitle: "Tidak ada satu bentuk tunggal",
    description:
      "Laissez-faire, ekonomi campuran, negara kesejahteraan, model Nordik, kapitalisme negara, dan spektrum dari pasar bebas sampai perencanaan.",
    color: "from-pink-500 to-rose-600",
    icon: "🎚️",
  },
  {
    id: "krisis",
    order: 7,
    title: "Level 7 · Krisis & Siklus Ekonomi",
    subtitle: "Naik turun yang tak terelakkan",
    description:
      "Siklus bisnis, gelembung dan keruntuhan, Depresi Besar 1929, krisis keuangan 2008, krisis moneter Asia 1997, dan penghancuran kreatif Schumpeter.",
    color: "from-red-500 to-rose-700",
    icon: "📉",
  },
  {
    id: "kritik",
    order: 8,
    title: "Level 8 · Kritik & Ketimpangan",
    subtitle: "Sisi gelap dan perdebatannya",
    description:
      "Kritik Marx, ketimpangan kekayaan dan koefisien Gini, eksternalitas dan kerusakan lingkungan, monopoli, serta komodifikasi.",
    color: "from-rose-600 to-red-700",
    icon: "⚠️",
  },
  {
    id: "negara",
    order: 9,
    title: "Level 9 · Kapitalisme & Peran Negara",
    subtitle: "Pasar tidak pernah benar-benar sendirian",
    description:
      "Regulasi dan antitrust, pajak dan redistribusi, bank sentral dan kebijakan moneter, barang publik, serta perdebatan besar peran pemerintah dalam ekonomi.",
    color: "from-indigo-500 to-blue-700",
    icon: "🏛️",
  },
  {
    id: "indonesia",
    order: 10,
    title: "Level 10 · Ekonomi Indonesia",
    subtitle: "Kapitalisme dalam konteks Pancasila",
    description:
      "Sistem ekonomi Pancasila dan Pasal 33 UUD 1945, ekonomi kerakyatan, peran BUMN dan swasta, sejarah ekonomi Orde Baru sampai Reformasi, dan globalisasi.",
    color: "from-red-600 to-amber-600",
    icon: "🇮🇩",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
