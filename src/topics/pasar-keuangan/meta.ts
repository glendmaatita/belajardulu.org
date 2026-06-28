import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const pasarKeuangan: Topic = {
  id: "pasar-keuangan",
  title: "Pasar Keuangan",
  tagline: "Tempat dana bertemu peluang",
  description:
    "Memahami cara kerja pasar keuangan: fungsi dan pelakunya (OJK, Bank Indonesia, bursa), pasar uang dan suku bunga acuan, pasar modal saham (bursa, IPO, indeks), pasar obligasi dan yield curve, hingga pasar valas, derivatif, dan hipotesis pasar efisien. Penuh simulator, grafik, dan video animasi.",
  icon: "💹",
  hero: "from-blue-600 via-indigo-700 to-violet-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
