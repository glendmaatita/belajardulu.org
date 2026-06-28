import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "fondasi",
    order: 1,
    title: "Level 1 · Fondasi Corporate Finance",
    subtitle: "Tujuan & prinsip",
    description:
      "Tujuan keuangan perusahaan, nilai waktu uang, hubungan risiko dan imbal hasil, serta pilihan pendanaan utang vs ekuitas.",
    color: "from-blue-500 to-indigo-600",
    icon: "🏢",
  },
  {
    id: "keputusan",
    order: 2,
    title: "Level 2 · Keputusan Investasi & Pendanaan",
    subtitle: "NPV, WACC, struktur modal",
    description:
      "Capital budgeting (NPV, IRR, payback), biaya modal (WACC), struktur modal dan leverage, serta kebijakan dividen.",
    color: "from-indigo-500 to-violet-600",
    icon: "📊",
  },
  {
    id: "treasury",
    order: 3,
    title: "Level 3 · Treasury & Modal Kerja",
    subtitle: "Kas, likuiditas, FX",
    description:
      "Manajemen kas dan likuiditas, modal kerja (cash conversion cycle), risiko nilai tukar dan hedging, serta pendanaan jangka pendek.",
    color: "from-cyan-500 to-sky-600",
    icon: "💧",
  },
  {
    id: "project",
    order: 4,
    title: "Level 4 · Project Finance",
    subtitle: "SPV & non-recourse",
    description:
      "Karakteristik project finance, struktur SPV, pembiayaan non-recourse, alokasi risiko, dan rasio kunci DSCR.",
    color: "from-amber-500 to-orange-600",
    icon: "🏗️",
  },
  {
    id: "mna",
    order: 5,
    title: "Level 5 · Merger & Akuisisi (M&A)",
    subtitle: "Valuasi, sinergi, LBO",
    description:
      "Rasionale dan sinergi M&A, proses deal dan due diligence, metode valuasi (DCF dan multiples), serta leveraged buyout (LBO).",
    color: "from-rose-500 to-pink-600",
    icon: "🤝",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
