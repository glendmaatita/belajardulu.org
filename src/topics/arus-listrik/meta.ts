import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";

export const arusListrik: Topic = {
  id: "arus-listrik",
  title: "Arus Listrik",
  tagline: "Muatan mengalir",
  description:
    "Dari arus dan Hukum Ohm, rangkaian hambatan, Hukum Kirchhoff, sampai energi dan daya listrik yang kita bayar tiap bulan. Fisika bukan menghafal rumus: kita berpetualang lewat pengamatan, simulasi, dan grafik sampai rumusnya tercipta sendiri.",
  icon: "🔌",
  hero: "from-lime-600 via-green-700 to-emerald-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4],
};
