import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";

export const momentum: Topic = {
  id: "momentum",
  title: "Momentum",
  tagline: "Kuantitas gerak",
  description:
    "Momentum linear, impuls, kekekalan momentum, tumbukan, dan pusat massa. Fisika bukan menghafal rumus: kita berpetualang lewat pengamatan, simulasi, dan grafik sampai rumusnya tercipta sendiri.",
  icon: "🎱",
  hero: "from-purple-600 via-fuchsia-700 to-pink-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4],
};
