import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const kalkulus: Topic = {
  id: "kalkulus",
  title: "Kalkulus",
  tagline: "Matematika perubahan",
  description: "Kalkulus adalah matematika tentang perubahan dan penumpukan tak hingga. Bukan menghafal aturan turunan dan integral, kita berpetualang dari laju perubahan dan luas di bawah kurva, sampai konsep limit, turunan, dan integral tercipta dengan sendirinya.",
  icon: "♾️",
  hero: "from-purple-600 via-violet-700 to-indigo-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
