import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const climateFinance: Topic = {
  id: "climate-finance",
  title: "Climate Finance",
  tagline: "Mendanai transisi iklim",
  description:
    "Bagaimana dunia membiayai transisi menuju ekonomi rendah karbon dan tahan iklim: instrumen pendanaan hijau (green bond, blended finance), risiko iklim bagi keuangan, pengungkapan & standar (TCFD, ISSB), sampai menilai kelayakan proyek hijau. Penuh grafik, simulator, dan video animasi.",
  icon: "🌍",
  hero: "from-cyan-600 via-teal-700 to-emerald-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
