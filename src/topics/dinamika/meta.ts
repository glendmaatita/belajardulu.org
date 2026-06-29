import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";

export const dinamika: Topic = {
  id: "dinamika",
  title: "Dinamika",
  tagline: "Mengapa benda bergerak",
  description: "Gaya, massa, inersia, tiga Hukum Newton, gaya gesek, gaya normal, tegangan tali, diagram benda bebas, dan gerak pada bidang miring. Fisika bukan menghafal rumus: kita berpetualang lewat pengamatan, simulasi, dan grafik sampai rumusnya tercipta sendiri.",
  icon: "🧲",
  hero: "from-indigo-600 via-violet-700 to-purple-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4],
};
