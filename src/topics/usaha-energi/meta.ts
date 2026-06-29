import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";

export const usahaEnergi: Topic = {
  id: "usaha-energi",
  title: "Usaha & Energi",
  tagline: "Kemampuan melakukan kerja",
  description: "Usaha, energi kinetik, energi potensial, energi mekanik, daya, kekekalan energi, dan efisiensi. Fisika bukan menghafal rumus: kita berpetualang lewat pengamatan, simulasi, dan grafik sampai rumusnya tercipta sendiri.",
  icon: "⚡",
  hero: "from-violet-600 via-purple-700 to-fuchsia-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4],
};
