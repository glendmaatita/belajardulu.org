import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "fondasi",
    order: 1,
    title: "Level 1 · Fondasi Investasi",
    subtitle: "Mulai dari prinsip",
    description:
      "Tujuan investasi, hubungan risiko dan imbal hasil, jenis aset, kekuatan bunga majemuk, serta mengenali profil risiko diri.",
    color: "from-emerald-500 to-green-600",
    icon: "🌱",
  },
  {
    id: "portofolio",
    order: 2,
    title: "Level 2 · Portfolio Management",
    subtitle: "Diversifikasi & alokasi",
    description:
      "Diversifikasi, alokasi aset, hubungan risiko-imbal hasil portofolio, rebalancing, dan intuisi efisiensi (Markowitz).",
    color: "from-teal-500 to-cyan-600",
    icon: "🧩",
  },
  {
    id: "analisis",
    order: 3,
    title: "Level 3 · Equity Research & Valuasi",
    subtitle: "Menilai saham",
    description:
      "Analisis fundamental, membaca laporan keuangan, valuasi dengan DCF dan multiples (P/E, EV/EBITDA), serta menyusun rekomendasi.",
    color: "from-sky-500 to-blue-600",
    icon: "🔬",
  },
  {
    id: "asetmanajemen",
    order: 4,
    title: "Level 4 · Asset Management",
    subtitle: "Reksa dana & ETF",
    description:
      "Peran manajer investasi, reksa dana dan ETF, biaya (expense ratio), aktif vs pasif, dan menilai kinerja.",
    color: "from-violet-500 to-purple-600",
    icon: "🏦",
  },
  {
    id: "alternatif",
    order: 5,
    title: "Level 5 · Private Markets: VC & PE",
    subtitle: "Venture & private equity",
    description:
      "Venture capital, private equity, leveraged buyout (LBO), struktur dana (GP/LP), ilikuiditas, dan power law imbal hasil.",
    color: "from-amber-500 to-orange-600",
    icon: "🚀",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
