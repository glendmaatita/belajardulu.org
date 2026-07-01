import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "dasar",
    order: 1,
    title: "Level 1 · Fondasi Perencanaan Keuangan",
    subtitle: "Mulai dari mengenal uangmu",
    description:
      "Apa itu perencanaan keuangan dan siklus hidup keuangan, cara membuat catatan keuangan pribadi, menyusun anggaran, menetapkan tujuan, memahami bunga majemuk, rasio keuangan, dan kebiasaan uang yang sehat.",
    color: "from-emerald-500 to-green-600",
    icon: "🌱",
  },
  {
    id: "aruskas",
    order: 2,
    title: "Level 2 · Arus Kas, Menabung & Dana Darurat",
    subtitle: "Amankan fondasi dulu",
    description:
      "Mengelola arus kas dan menutup kebocoran, membangun dana darurat, menabung otomatis, sinking fund, memilih produk simpanan, melawan inflasi, dan menabung untuk tujuan besar seperti DP rumah dan umrah.",
    color: "from-teal-500 to-emerald-600",
    icon: "💧",
  },
  {
    id: "utang",
    order: 3,
    title: "Level 3 · Utang, Kredit & Proteksi",
    subtitle: "Kelola risiko dan pinjaman",
    description:
      "Membedakan utang baik dan buruk, mengelola kartu kredit, simulasi KPR, mewaspadai pinjol dan paylater, memahami skor kredit dan SLIK OJK, asuransi jiwa, serta BPJS Kesehatan dan asuransi lainnya.",
    color: "from-amber-500 to-orange-600",
    icon: "🛡️",
  },
  {
    id: "investasi",
    order: 4,
    title: "Level 4 · Investasi untuk Tujuan",
    subtitle: "Menumbuhkan uang sesuai tujuan",
    description:
      "Menghubungkan investasi dengan tujuan dan horizon waktu, mengenal profil risiko dan alokasi aset, instrumen (reksa dana, saham, SBN ritel, emas), investasi rutin, diversifikasi, biaya dan pajak, serta dana pendidikan anak.",
    color: "from-sky-500 to-blue-600",
    icon: "📈",
  },
  {
    id: "pensiun",
    order: 5,
    title: "Level 5 · Pensiun, Warisan & Kemandirian",
    subtitle: "Merancang masa depan panjang",
    description:
      "Merencanakan pensiun (JHT dan JP BPJS Ketenagakerjaan, DPLK, aturan 4%), menghitung kemandirian finansial, pajak pribadi, perencanaan warisan dan wasiat, keuangan keluarga, menghadapi guncangan, dan menyusun rencana menyeluruh.",
    color: "from-indigo-500 to-violet-700",
    icon: "🎯",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
