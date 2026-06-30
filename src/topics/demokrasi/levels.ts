import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "fondasi",
    order: 1,
    title: "Level 1 · Fondasi Demokrasi",
    subtitle: "Apa itu demokrasi dan prinsipnya",
    description:
      "Arti demokrasi (kedaulatan rakyat), prinsip inti (kesetaraan, partisipasi, kebebasan, supremasi hukum), beda dengan otokrasi, dan mengapa demokrasi diperjuangkan.",
    color: "from-blue-500 to-indigo-600",
    icon: "🗳️",
  },
  {
    id: "sejarah",
    order: 2,
    title: "Level 2 · Sejarah Demokrasi",
    subtitle: "Dari Athena kuno sampai era modern",
    description:
      "Demokrasi langsung Athena, republik Romawi, Magna Carta 1215, Pencerahan, revolusi Amerika dan Prancis, sampai gelombang demokratisasi abad ke-20.",
    color: "from-amber-500 to-yellow-600",
    icon: "🏛️",
  },
  {
    id: "bentuk",
    order: 3,
    title: "Level 3 · Bentuk & Model Demokrasi",
    subtitle: "Banyak jalan menuju kedaulatan rakyat",
    description:
      "Demokrasi langsung vs perwakilan, sistem presidensial vs parlementer, demokrasi liberal, referendum, dan demokrasi deliberatif.",
    color: "from-cyan-500 to-sky-600",
    icon: "🔀",
  },
  {
    id: "pemilu",
    order: 4,
    title: "Level 4 · Pemilu & Sistem Pemilihan",
    subtitle: "Mengubah suara menjadi kursi",
    description:
      "Hak pilih, sistem distrik (first-past-the-post) vs proporsional, ambang batas parlemen, metode pembagian kursi, dan integritas pemilu.",
    color: "from-teal-500 to-emerald-600",
    icon: "✅",
  },
  {
    id: "kekuasaan",
    order: 5,
    title: "Level 5 · Pembagian Kekuasaan",
    subtitle: "Agar kekuasaan tidak menumpuk",
    description:
      "Trias politica Montesquieu (eksekutif, legislatif, yudikatif), checks and balances, pemisahan vs pembagian kekuasaan, dan peran lembaga independen.",
    color: "from-indigo-500 to-violet-600",
    icon: "⚖️",
  },
  {
    id: "konstitusi",
    order: 6,
    title: "Level 6 · Konstitusi & Negara Hukum",
    subtitle: "Aturan main tertinggi",
    description:
      "Konstitusi, supremasi hukum (rule of law), negara hukum (rechtsstaat), judicial review, amandemen, dan perlindungan dari kekuasaan sewenang-wenang.",
    color: "from-slate-600 to-blue-700",
    icon: "📜",
  },
  {
    id: "hak",
    order: 7,
    title: "Level 7 · Hak Asasi & Kebebasan Sipil",
    subtitle: "Yang tak boleh dilanggar mayoritas",
    description:
      "Hak asasi manusia, kebebasan berpendapat, pers, berkumpul, dan beragama, hak minoritas, serta tirani mayoritas yang harus dicegah.",
    color: "from-fuchsia-500 to-purple-600",
    icon: "🕊️",
  },
  {
    id: "pemikir",
    order: 8,
    title: "Level 8 · Pemikir Demokrasi",
    subtitle: "Gagasan yang membangun demokrasi",
    description:
      "Plato dan Aristoteles, John Locke (kontrak sosial dan hak alamiah), Montesquieu, Rousseau (kehendak umum), Tocqueville, dan Robert Dahl.",
    color: "from-purple-500 to-violet-700",
    icon: "🧠",
  },
  {
    id: "tantangan",
    order: 9,
    title: "Level 9 · Tantangan Demokrasi Modern",
    subtitle: "Demokrasi tidak pernah selesai",
    description:
      "Populisme, kemunduran demokrasi (democratic backsliding), disinformasi dan media sosial, polarisasi, korupsi, dan godaan otoritarianisme.",
    color: "from-orange-500 to-red-600",
    icon: "⚠️",
  },
  {
    id: "indonesia",
    order: 10,
    title: "Level 10 · Demokrasi di Indonesia",
    subtitle: "Perjalanan demokrasi Pancasila",
    description:
      "Pancasila dan UUD 1945, demokrasi terpimpin dan Orde Baru, Reformasi 1998, pemilu langsung, otonomi daerah, dan lembaga seperti KPU, MK, dan DPR.",
    color: "from-red-600 to-rose-700",
    icon: "🇮🇩",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
