import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";

export const optika: Topic = {
  id: "optika",
  title: "Optika",
  tagline: "Ilmu cahaya",
  description:
    "Cahaya, pemantulan, cermin, pembiasan, lensa, pemantulan total, interferensi, difraksi, polarisasi, dispersi, dan alat optik dari mata hingga teleskop. Fisika bukan menghafal rumus: kita berpetualang lewat pengamatan, simulasi, dan grafik sampai rumusnya tercipta sendiri.",
  icon: "🔦",
  hero: "from-indigo-600 via-blue-700 to-cyan-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4],
};
