import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const investasi: Topic = {
  id: "investasi",
  title: "Investasi",
  tagline: "Mengelola & menumbuhkan dana",
  description:
    "Dari prinsip dasar investasi sampai dunia profesional: manajemen portofolio dan diversifikasi, equity research dan valuasi saham, asset management (reksa dana & ETF), hingga private markets (venture capital & private equity). Penuh simulator, grafik, dan video animasi.",
  icon: "📈",
  hero: "from-emerald-600 via-teal-700 to-cyan-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
