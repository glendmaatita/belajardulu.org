import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "dasar",
    order: 1,
    title: "Level 1 · Fondasi Ekonomi Syariah",
    subtitle: "Prinsip dan nilai dasar",
    description:
      "Apa itu ekonomi syariah, tujuannya (maqashid syariah), sumber hukum, serta larangan inti riba, gharar, dan maysir yang membedakannya dari ekonomi konvensional.",
    color: "from-emerald-600 to-green-700",
    icon: "🕌",
  },
  {
    id: "akad",
    order: 2,
    title: "Level 2 · Akad & Transaksi",
    subtitle: "Kontrak yang sesuai syariah",
    description:
      "Rukun dan syarat akad, akad jual beli (murabahah, salam, istishna), sewa (ijarah), bagi hasil (mudharabah, musyarakah), serta akad jasa dan tolong-menolong (wakalah, rahn, qard).",
    color: "from-teal-600 to-emerald-700",
    icon: "🤝",
  },
  {
    id: "perbankan",
    order: 3,
    title: "Level 3 · Perbankan & Lembaga Keuangan Syariah",
    subtitle: "Bank tanpa bunga",
    description:
      "Cara kerja bank syariah, produk pendanaan dan pembiayaan, peran Dewan Pengawas Syariah dan DSN-MUI, asuransi syariah (takaful), serta perbedaannya dengan bank konvensional.",
    color: "from-green-600 to-teal-700",
    icon: "🏦",
  },
  {
    id: "pasarmodal",
    order: 4,
    title: "Level 4 · Pasar Modal & Investasi Syariah",
    subtitle: "Berinvestasi sesuai syariah",
    description:
      "Saham syariah dan proses penyaringannya, sukuk sebagai alternatif obligasi, reksa dana syariah, indeks saham syariah (ISSI dan JII), serta investasi emas.",
    color: "from-emerald-600 to-cyan-700",
    icon: "📈",
  },
  {
    id: "sosial",
    order: 5,
    title: "Level 5 · Keuangan Sosial & Ekonomi Islam",
    subtitle: "Keadilan dan pemerataan",
    description:
      "Zakat, infak, sedekah, dan wakaf (ZISWAF) sebagai instrumen pemerataan, peran baitul maal, keuangan mikro syariah, serta visi ekonomi Islam tentang keadilan distribusi.",
    color: "from-lime-600 to-green-700",
    icon: "🌱",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
