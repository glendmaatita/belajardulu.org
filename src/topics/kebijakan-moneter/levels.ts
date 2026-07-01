import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "dasar",
    order: 1,
    title: "Level 1 · Uang & Bank Sentral",
    subtitle: "Fondasi sistem moneter",
    description:
      "Apa itu uang dan fungsinya, sejarah uang dari barter sampai digital, peran bank sentral (Bank Indonesia), serta tujuan kebijakan moneter menjaga stabilitas nilai rupiah.",
    color: "from-emerald-600 to-teal-700",
    icon: "🏦",
  },
  {
    id: "instrumen",
    order: 2,
    title: "Level 2 · Instrumen Kebijakan Moneter",
    subtitle: "Alat yang dipakai bank sentral",
    description:
      "Suku bunga acuan (BI-Rate), operasi pasar terbuka, giro wajib minimum (GWM), fasilitas standing, serta peran bank sentral sebagai lender of last resort.",
    color: "from-teal-600 to-cyan-700",
    icon: "🎛️",
  },
  {
    id: "transmisi",
    order: 3,
    title: "Level 3 · Transmisi & Inflasi",
    subtitle: "Dari kebijakan ke harga",
    description:
      "Mekanisme transmisi lewat jalur suku bunga, kredit, nilai tukar, dan ekspektasi; kerangka sasaran inflasi (inflation targeting); serta hubungan inflasi dan pengangguran (kurva Phillips).",
    color: "from-sky-600 to-blue-700",
    icon: "🔁",
  },
  {
    id: "eksternal",
    order: 4,
    title: "Level 4 · Nilai Tukar & Sektor Eksternal",
    subtitle: "Menjaga rupiah di pasar global",
    description:
      "Rezim nilai tukar, intervensi valuta asing, cadangan devisa, trilemma kebijakan (impossible trinity), serta bagaimana bank sentral menjaga stabilitas nilai tukar.",
    color: "from-blue-600 to-indigo-700",
    icon: "💱",
  },
  {
    id: "modern",
    order: 5,
    title: "Level 5 · Moneter, Fiskal & Tantangan Modern",
    subtitle: "Koordinasi dan masa depan",
    description:
      "Koordinasi kebijakan moneter dan fiskal, independensi bank sentral, kebijakan tak konvensional (quantitative easing), kebijakan makroprudensial, sampai mata uang digital bank sentral (digital rupiah).",
    color: "from-indigo-600 to-violet-800",
    icon: "🚀",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
