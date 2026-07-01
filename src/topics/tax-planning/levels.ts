import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "fondasi",
    order: 1,
    title: "Level 1 · Fondasi Tax Planning",
    subtitle: "Apa, kenapa, dan batasnya",
    description:
      "Apa itu tax planning korporat dan bedanya dengan tax avoidance dan tax evasion, dasar PPh Badan 22%, beda laba akuntansi vs laba fiskal, serta etika dan kepatuhan yang menjadi pagar perencanaan pajak.",
    color: "from-sky-500 to-blue-600",
    icon: "🧭",
  },
  {
    id: "pphbadan",
    order: 2,
    title: "Level 2 · PPh Badan & Rekonsiliasi Fiskal",
    subtitle: "Dari laba komersial ke pajak",
    description:
      "Koreksi fiskal positif dan negatif (biaya yang boleh dan tidak boleh dikurangkan, Pasal 6 & 9 UU PPh), penyusutan dan amortisasi fiskal, kompensasi kerugian 5 tahun, sampai menyusun rekonsiliasi fiskal dan SPT Tahunan Badan (1771).",
    color: "from-indigo-500 to-blue-700",
    icon: "🧮",
  },
  {
    id: "strategi",
    order: 3,
    title: "Level 3 · Strategi Perencanaan",
    subtitle: "Memilih jalur yang sah dan optimal",
    description:
      "Fasilitas Pasal 31E dan tarif final PP 55/2022, thin capitalization (DER 4:1), insentif pajak (tax holiday, tax allowance, super deduction), serta strategi PPh 21 karyawan: gross, nett, dan gross-up.",
    color: "from-violet-500 to-purple-600",
    icon: "🎯",
  },
  {
    id: "transaksi",
    order: 4,
    title: "Level 4 · Transaksi & Withholding",
    subtitle: "Pajak yang menempel di tiap transaksi",
    description:
      "Withholding tax (PPh 23, PPh 4 ayat 2) sebagai alat arus kas dan kepatuhan, pengkreditan pajak masukan PPN dan restitusi, transfer pricing dan transaksi hubungan istimewa, serta tax treaty (P3B) dan PPh 26.",
    color: "from-emerald-500 to-teal-600",
    icon: "🔗",
  },
  {
    id: "risiko",
    order: 5,
    title: "Level 5 · Risiko, Kepatuhan & Tren",
    subtitle: "Aman hari ini, siap untuk besok",
    description:
      "Manajemen risiko pajak dan tax control framework, pemeriksaan pajak serta keberatan dan banding, tren global BEPS dan Pilar Dua (pajak minimum global 15%), sampai menyusun roadmap tax planning perusahaan yang menyeluruh.",
    color: "from-amber-500 to-orange-600",
    icon: "🛡️",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
