import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "kinematika-rotasi",
    order: 1,
    title: "Level 1 · Kinematika Rotasi",
    subtitle: "Sudut, ω, dan α",
    description: "Sudut dan radian, kecepatan sudut, percepatan sudut, gerak melingkar berubah beraturan, serta hubungan besaran linear dengan besaran sudut.",
    color: "from-fuchsia-400 to-pink-500",
    icon: "🌀",
  },
  {
    id: "dinamika-rotasi",
    order: 2,
    title: "Level 2 · Dinamika Rotasi",
    subtitle: "Torsi & momen inersia",
    description: "Torsi sebagai penyebab putaran, momen inersia, hukum II Newton untuk rotasi (τ = Iα), serta kesetimbangan benda tegar.",
    color: "from-pink-400 to-rose-500",
    icon: "🔧",
  },
  {
    id: "momentum-energi-sudut",
    order: 3,
    title: "Level 3 · Momentum & Energi Sudut",
    subtitle: "L = Iω dan energi rotasi",
    description: "Momentum sudut, kekekalan momentum sudut lewat kisah penari es, energi kinetik rotasi, dan hubungan torsi dengan perubahan momentum sudut.",
    color: "from-rose-400 to-purple-500",
    icon: "💫",
  },
  {
    id: "menggelinding",
    order: 4,
    title: "Level 4 · Menggelinding & Aplikasi",
    subtitle: "Putaran bertemu dunia nyata",
    description: "Menggelinding tanpa slip, energi total benda menggelinding, gasing dan giroskop, serta penerapan rotasi di sepeda, satelit, dan mesin.",
    color: "from-purple-400 to-violet-500",
    icon: "⚙️",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
