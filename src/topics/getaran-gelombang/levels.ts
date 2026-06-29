import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "getaran-ghs",
    order: 1,
    title: "Getaran (GHS)",
    subtitle: "Irama bolak-balik yang teratur",
    description:
      "Gerak harmonik sederhana, simpangan, kecepatan dan percepatan getaran, periode dan frekuensi, serta energi getaran.",
    color: "from-teal-400 to-cyan-500",
    icon: "〰️",
  },
  {
    id: "sistem-getaran",
    order: 2,
    title: "Sistem Getaran",
    subtitle: "Pegas, bandul, resonansi",
    description:
      "Getaran pegas dan Hukum Hooke, bandul sederhana, resonansi, serta redaman getaran dalam kehidupan nyata.",
    color: "from-cyan-400 to-sky-500",
    icon: "🪀",
  },
  {
    id: "gelombang",
    order: 3,
    title: "Gelombang",
    subtitle: "Getaran yang merambat",
    description:
      "Pengertian gelombang, gelombang transversal dan longitudinal, besaran gelombang dan v = fλ, serta gelombang berjalan.",
    color: "from-sky-400 to-blue-500",
    icon: "🌊",
  },
  {
    id: "sifat-gelombang",
    order: 4,
    title: "Sifat Gelombang",
    subtitle: "Memantul, berpadu, melentur",
    description:
      "Pemantulan dan pembiasan, superposisi dan interferensi, difraksi, serta gelombang berdiri pada tali dan dawai.",
    color: "from-blue-400 to-indigo-500",
    icon: "🔀",
  },
  {
    id: "bunyi-doppler",
    order: 5,
    title: "Bunyi & Efek Doppler",
    subtitle: "Dari dawai sampai sirene",
    description:
      "Gelombang bunyi, cepat rambat bunyi, resonansi pada dawai dan pipa organa, efek Doppler, serta intensitas dan taraf intensitas.",
    color: "from-indigo-400 to-violet-500",
    icon: "🔊",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
