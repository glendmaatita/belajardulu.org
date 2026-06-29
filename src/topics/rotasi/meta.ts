import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";

export const rotasi: Topic = {
  id: "rotasi",
  title: "Rotasi",
  tagline: "Gerak berputar",
  description: "Sudut, kecepatan dan percepatan sudut, torsi, momen inersia, momentum sudut, energi rotasi, serta menggelinding tanpa slip. Fisika bukan menghafal rumus: kita berpetualang lewat pengamatan, simulasi, dan grafik sampai rumusnya tercipta sendiri.",
  icon: "🌀",
  hero: "from-fuchsia-600 via-pink-700 to-rose-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4],
};
