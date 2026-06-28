import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "fondasi",
    order: 1,
    title: "Level 1 · Fondasi Pasar Keuangan",
    subtitle: "Fungsi, pelaku, jenis pasar",
    description:
      "Apa itu pasar keuangan dan fungsinya menyalurkan dana, pelaku dan lembaga (OJK, Bank Indonesia, bursa), serta perbedaan pasar uang dan pasar modal.",
    color: "from-blue-500 to-indigo-600",
    icon: "🏛️",
  },
  {
    id: "pasaruang",
    order: 2,
    title: "Level 2 · Pasar Uang & Suku Bunga",
    subtitle: "Instrumen jangka pendek",
    description:
      "Pasar uang dan instrumennya (SBI, SPN, deposito, repo), suku bunga acuan BI dan transmisinya, serta peran bank sentral menjaga stabilitas.",
    color: "from-cyan-500 to-sky-600",
    icon: "💵",
  },
  {
    id: "saham",
    order: 3,
    title: "Level 3 · Pasar Modal: Saham",
    subtitle: "Bursa, IPO, indeks",
    description:
      "Bursa efek dan perannya, mekanisme perdagangan (order, lot, bid/ask, settlement T+2), proses IPO, serta indeks saham seperti IHSG.",
    color: "from-emerald-500 to-teal-600",
    icon: "📈",
  },
  {
    id: "obligasi",
    order: 4,
    title: "Level 4 · Pasar Obligasi",
    subtitle: "SBN, korporasi, yield curve",
    description:
      "Pasar surat utang: obligasi pemerintah (SUN, ORI, sukuk) dan korporasi, peringkat (rating), pasar primer vs sekunder, dan kurva imbal hasil (yield curve).",
    color: "from-amber-500 to-orange-600",
    icon: "🧾",
  },
  {
    id: "derivatif",
    order: 5,
    title: "Level 5 · Valas, Derivatif & Efisiensi",
    subtitle: "Forex, opsi, pasar efisien",
    description:
      "Pasar valuta asing, instrumen derivatif (futures, opsi, swap) dan fungsinya untuk hedging dan spekulasi, serta hipotesis pasar efisien dan perilaku investor.",
    color: "from-violet-500 to-purple-600",
    icon: "🌐",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
