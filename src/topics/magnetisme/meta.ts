import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const magnetisme: Topic = {
  id: "magnetisme",
  title: "Magnetisme",
  tagline: "Magnet dan induksi",
  description:
    "Medan magnet, gaya Lorentz, medan magnet kawat, solenoida, induksi elektromagnetik, Hukum Faraday, Hukum Lenz, generator, transformator, dan motor listrik. Fisika bukan menghafal rumus: kita berpetualang lewat pengamatan, simulasi, dan grafik sampai rumusnya tercipta sendiri.",
  icon: "🧭",
  hero: "from-emerald-600 via-teal-700 to-cyan-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
