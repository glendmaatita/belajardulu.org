import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "dasar",
    order: 1,
    title: "Level 1 · Dasar Kebijakan Fiskal",
    subtitle: "Fungsi & arah",
    description:
      "Apa itu kebijakan fiskal, tiga fungsinya (alokasi, distribusi, stabilisasi), kebijakan ekspansif vs kontraktif, dan kaitannya dengan perekonomian.",
    color: "from-red-500 to-rose-600",
    icon: "🏛️",
  },
  {
    id: "apbn",
    order: 2,
    title: "Level 2 · APBN: Struktur & Siklus",
    subtitle: "Anggaran negara",
    description:
      "Struktur APBN (pendapatan, belanja, pembiayaan), postur dan asumsi makro, serta siklus penyusunan dari perencanaan sampai pertanggungjawaban.",
    color: "from-rose-500 to-pink-600",
    icon: "📑",
  },
  {
    id: "penerimaan",
    order: 3,
    title: "Level 3 · Penerimaan Negara",
    subtitle: "Pajak & PNBP",
    description:
      "Sumber penerimaan negara: pajak (PPh, PPN, cukai, bea), PNBP, rasio pajak (tax ratio), serta reformasi perpajakan di Indonesia.",
    color: "from-pink-500 to-fuchsia-600",
    icon: "🧾",
  },
  {
    id: "belanja",
    order: 4,
    title: "Level 4 · Belanja & Transfer ke Daerah",
    subtitle: "Mengalokasikan dana",
    description:
      "Belanja pemerintah pusat (kementerian/lembaga, subsidi, bansos) dan Transfer ke Daerah (DAU, DAK, DBH, Dana Desa), serta belanja produktif.",
    color: "from-fuchsia-500 to-purple-600",
    icon: "🏗️",
  },
  {
    id: "defisit",
    order: 5,
    title: "Level 5 · Defisit, Utang & Keberlanjutan",
    subtitle: "Menjaga fiskal sehat",
    description:
      "Defisit APBN dan batas 3% PDB, rasio utang dan ambang 60% PDB, penerbitan SBN, ruang fiskal, serta keberlanjutan fiskal jangka panjang.",
    color: "from-purple-500 to-indigo-600",
    icon: "⚖️",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
