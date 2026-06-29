import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const termodinamika: Topic = {
  id: "termodinamika",
  title: "Termodinamika",
  tagline: "Panas dan energi",
  description:
    "Suhu, kalor, perpindahan kalor, kapasitas kalor, gas ideal, Hukum Termodinamika I dan II, entropi, mesin kalor, dan refrigerasi. Fisika bukan menghafal rumus: kita berpetualang lewat pengamatan, simulasi, dan grafik sampai rumusnya tercipta sendiri.",
  icon: "🔥",
  hero: "from-orange-600 via-red-700 to-rose-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
