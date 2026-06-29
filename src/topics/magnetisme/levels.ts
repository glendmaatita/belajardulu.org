import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "medan-magnet",
    order: 1,
    title: "Medan Magnet",
    subtitle: "Magnet, kutub, dan garis gaya",
    description:
      "Sifat magnet, medan magnet dan garis gaya, kutub yang tak terpisahkan, fluks magnetik, dan medan magnet Bumi. Fondasi sebelum berhitung.",
    color: "from-emerald-400 to-teal-500",
    icon: "🧭",
  },
  {
    id: "gaya-magnetik",
    order: 2,
    title: "Gaya Magnetik",
    subtitle: "Gaya pada muatan dan kawat",
    description:
      "Gaya Lorentz pada muatan bergerak, gerak melingkar dalam medan magnet, gaya pada kawat berarus, dan gaya antar dua kawat sejajar.",
    color: "from-cyan-400 to-sky-500",
    icon: "🧲",
  },
  {
    id: "sumber-medan-magnet",
    order: 3,
    title: "Sumber Medan Magnet",
    subtitle: "Arus yang melahirkan magnet",
    description:
      "Medan magnet kawat lurus, kawat melingkar, solenoida, dan toroida. Bagaimana arus listrik menciptakan medan magnetnya sendiri.",
    color: "from-sky-400 to-blue-500",
    icon: "🔋",
  },
  {
    id: "induksi-elektromagnetik",
    order: 4,
    title: "Induksi Elektromagnetik",
    subtitle: "Magnet yang melahirkan arus",
    description:
      "Fluks dan GGL induksi, hukum Faraday, hukum Lenz, GGL gerak pada kawat, dan induktansi diri. Dasar seluruh pembangkit listrik.",
    color: "from-blue-400 to-indigo-500",
    icon: "⚡",
  },
  {
    id: "aplikasi-magnet",
    order: 5,
    title: "Aplikasi Kemagnetan",
    subtitle: "Mesin yang menggerakkan dunia",
    description:
      "Generator pengubah gerak jadi listrik, transformator penaik-turun tegangan, dan motor listrik pengubah listrik jadi gerak.",
    color: "from-indigo-400 to-violet-500",
    icon: "⚙️",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
