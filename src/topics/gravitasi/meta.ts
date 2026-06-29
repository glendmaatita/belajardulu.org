import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";

export const gravitasi: Topic = {
  id: "gravitasi",
  title: "Gravitasi",
  tagline: "Gaya pengikat semesta",
  description:
    "Dari apel Newton sampai lubang hitam: hukum gravitasi, medan dan potensial, orbit dan satelit, hingga energi orbit dan kecepatan lepas. Fisika bukan menghafal rumus: kita berpetualang lewat pengamatan, simulasi, dan grafik sampai rumusnya tercipta sendiri.",
  icon: "🪐",
  hero: "from-pink-600 via-rose-700 to-red-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4],
};
