import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "fondasi",
    order: 1,
    title: "Level 1 · Fondasi Climate Finance",
    subtitle: "Mengapa & dari mana dananya",
    description:
      "Apa itu climate finance, beda mitigasi dan adaptasi, kesenjangan pendanaan, serta sumber dan aktor utamanya.",
    color: "from-cyan-500 to-teal-600",
    icon: "🌍",
  },
  {
    id: "instrumen",
    order: 2,
    title: "Level 2 · Instrumen Pendanaan Hijau",
    subtitle: "Alat penyalur modal",
    description:
      "Green bond, sustainability-linked bond/loan, transition finance, green sukuk, dan blended finance.",
    color: "from-emerald-500 to-green-600",
    icon: "🌱",
  },
  {
    id: "risiko",
    order: 3,
    title: "Level 3 · Risiko Iklim bagi Keuangan",
    subtitle: "Fisik & transisi",
    description:
      "Risiko fisik, risiko transisi, stranded asset, analisis skenario, dan bagaimana risiko iklim memengaruhi nilai aset.",
    color: "from-amber-500 to-orange-600",
    icon: "⚠️",
  },
  {
    id: "pengungkapan",
    order: 4,
    title: "Level 4 · Pengungkapan, Taksonomi & Standar",
    subtitle: "Transparansi & integritas",
    description:
      "TCFD, standar ISSB (IFRS S2), taksonomi hijau, ESG ratings, dan menghindari greenwashing.",
    color: "from-sky-500 to-blue-600",
    icon: "📋",
  },
  {
    id: "praktik",
    order: 5,
    title: "Level 5 · Praktik & Pasar",
    subtitle: "Dari teori ke proyek",
    description:
      "Dana iklim global (GCF), menilai kelayakan proyek hijau, keuangan adaptasi, just transition, dan mengukur dampak.",
    color: "from-violet-500 to-purple-600",
    icon: "🚀",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
