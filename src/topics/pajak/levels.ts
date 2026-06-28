import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "dasar",
    order: 1,
    title: "Level 1 · Pajak untuk Pemula",
    subtitle: "Mulai dari nol",
    description:
      "Kenapa UMKM perlu bayar pajak, NPWP dan NIK, peta jenis pajak yang relevan, serta istilah-istilah yang sering bikin bingung. Tanpa istilah ribet.",
    color: "from-rose-500 to-pink-600",
    icon: "🌱",
  },
  {
    id: "pphfinal",
    order: 2,
    title: "Level 2 · PPh Final UMKM 0,5%",
    subtitle: "Pajak utama UMKM",
    description:
      "Skema paling penting buat UMKM: PPh Final 0,5% dari omzet (PP 55/2022). Fasilitas bebas Rp500 juta, cara hitung & bayar, batas Rp4,8 miliar, dan jangka waktunya.",
    color: "from-amber-500 to-orange-600",
    icon: "🧮",
  },
  {
    id: "ppn",
    order: 3,
    title: "Level 3 · PPN & Status PKP",
    subtitle: "Kapan wajib pungut PPN",
    description:
      "Apa itu PPN 11%, kapan UMKM wajib jadi PKP, cara menghitung PPN keluaran dan masukan, serta faktur pajak.",
    color: "from-sky-500 to-blue-600",
    icon: "🏷️",
  },
  {
    id: "karyawan",
    order: 4,
    title: "Level 4 · Pajak Karyawan & Jasa",
    subtitle: "Saat usaha mulai berkembang",
    description:
      "PPh 21 untuk gaji karyawan beserta PTKP, PPh 23 saat membayar jasa pihak lain, dan kewajiban membuat bukti potong.",
    color: "from-violet-500 to-purple-600",
    icon: "👔",
  },
  {
    id: "lapor",
    order: 5,
    title: "Level 5 · Bayar, Lapor & Patuh",
    subtitle: "Biar tenang dan aman",
    description:
      "Cara bayar lewat e-Billing, lapor SPT Masa dan Tahunan, kalender tenggat pajak, serta menghindari denda dan sanksi.",
    color: "from-emerald-500 to-teal-600",
    icon: "🗓️",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
