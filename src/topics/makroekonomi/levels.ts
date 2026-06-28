import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "fondasi",
    order: 1,
    title: "Level 1 · Fondasi Makroekonomi",
    subtitle: "Mengukur ekonomi",
    description:
      "Cara mengukur perekonomian: PDB dan komponennya, pendapatan nasional, pertumbuhan ekonomi, serta indikator makro utama.",
    color: "from-teal-500 to-cyan-600",
    icon: "🌐",
  },
  {
    id: "inflasi",
    order: 2,
    title: "Level 2 · Inflasi & Pengangguran",
    subtitle: "Dua penyakit ekonomi",
    description:
      "Inflasi (penyebab, jenis, dampak) dan cara mengukurnya lewat IHK, pengangguran dan jenisnya, serta hubungan keduanya dalam kurva Phillips.",
    color: "from-cyan-500 to-sky-600",
    icon: "🔥",
  },
  {
    id: "kebijakan",
    order: 3,
    title: "Level 3 · Kebijakan Moneter & Fiskal",
    subtitle: "Mengelola ekonomi",
    description:
      "Kebijakan moneter (bank sentral, suku bunga, jumlah uang beredar) dan fiskal (APBN, pajak, belanja negara), efek pengganda, serta bauran kebijakan.",
    color: "from-sky-500 to-blue-600",
    icon: "🎛️",
  },
  {
    id: "terbuka",
    order: 4,
    title: "Level 4 · Ekonomi Terbuka",
    subtitle: "Perdagangan & nilai tukar",
    description:
      "Neraca pembayaran, nilai tukar dan dampaknya, ekspor-impor, keunggulan komparatif, serta peluang dan risiko globalisasi.",
    color: "from-blue-500 to-indigo-600",
    icon: "🚢",
  },
  {
    id: "siklus",
    order: 5,
    title: "Level 5 · Siklus & Pertumbuhan",
    subtitle: "Naik turun & jangka panjang",
    description:
      "Siklus bisnis (boom dan resesi), permintaan dan penawaran agregat (AD-AS), sumber pertumbuhan jangka panjang, serta pembangunan ekonomi.",
    color: "from-indigo-500 to-violet-600",
    icon: "📈",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
