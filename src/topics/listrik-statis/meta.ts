import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";

export const listrikStatis: Topic = {
  id: "listrik-statis",
  title: "Listrik Statis",
  tagline: "Muatan diam",
  description:
    "Dari balon yang menempel di dinding sampai petir yang menyambar, kita telusuri muatan listrik, hukum Coulomb, medan listrik, potensial listrik, dan kapasitor. Fisika bukan menghafal rumus: kita berpetualang lewat pengamatan, simulasi, dan grafik sampai rumusnya tercipta sendiri.",
  icon: "⚡",
  hero: "from-amber-600 via-yellow-700 to-orange-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4],
};
