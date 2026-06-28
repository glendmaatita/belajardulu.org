import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "fondasi",
    order: 1,
    title: "Level 1 · Fondasi Carbon Trading",
    subtitle: "Konsep & lingkungan",
    description:
      "Perubahan iklim, gas rumah kaca, apa itu carbon credit & offset, jenis pasar (wajib vs sukarela), serta efektivitas pengurangan emisi.",
    color: "from-emerald-500 to-green-600",
    icon: "🌱",
  },
  {
    id: "pasar",
    order: 2,
    title: "Level 2 · Pasar & Ekonomi Karbon",
    subtitle: "Harga & mekanisme",
    description:
      "Harga karbon, cap-and-trade, baseline-and-credit, efisiensi pasar, insentif, serta dampak ekonomi terhadap investasi dan pertumbuhan.",
    color: "from-teal-500 to-emerald-600",
    icon: "📈",
  },
  {
    id: "regulasi",
    order: 3,
    title: "Level 3 · Hukum, Kebijakan & Internasional",
    subtitle: "Aturan main",
    description:
      "Regulasi & kepatuhan Indonesia, kontrak & sengketa, pajak karbon, cap-and-trade sebagai kebijakan, Paris Agreement, dan perdagangan karbon global.",
    color: "from-sky-500 to-blue-600",
    icon: "⚖️",
  },
  {
    id: "keuangan",
    order: 4,
    title: "Level 4 · Keuangan, Akuntansi & Pajak",
    subtitle: "Carbon sebagai aset",
    description:
      "Carbon asset & credit sebagai instrumen investasi, ESG & green finance, pengakuan aset karbon, pelaporan ESG, serta perlakuan PPN & PPh.",
    color: "from-cyan-500 to-teal-600",
    icon: "💰",
  },
  {
    id: "teknologi",
    order: 5,
    title: "Level 5 · Teknologi, Tata Kelola & Risiko",
    subtitle: "Integritas & kepercayaan",
    description:
      "MRV, blockchain, IoT & AI untuk monitoring; transparansi, akuntabilitas, anti-fraud; serta manajemen risiko regulasi, harga, reputasi, dan greenwashing.",
    color: "from-indigo-500 to-violet-600",
    icon: "🛰️",
  },
  {
    id: "strategi",
    order: 6,
    title: "Level 6 · Bisnis, Sosial, Etika & Politik",
    subtitle: "Dampak & strategi",
    description:
      "Strategi perusahaan menuju net-zero & keunggulan kompetitif, dampak sosial & keadilan iklim, etika (additionality, carbon colonialism), serta politik & geopolitik energi.",
    color: "from-amber-500 to-orange-600",
    icon: "🌏",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
