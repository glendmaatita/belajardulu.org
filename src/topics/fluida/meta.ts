import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";

export const fluida: Topic = {
  id: "fluida",
  title: "Fluida",
  tagline: "Zat yang mengalir",
  description:
    "Massa jenis, tekanan, Hukum Pascal, Hukum Archimedes, fluida statis dan dinamis, persamaan kontinuitas, Bernoulli, viskositas, tegangan permukaan, dan kapilaritas. Fisika bukan menghafal rumus: kita berpetualang lewat pengamatan, simulasi, dan grafik sampai rumusnya tercipta sendiri.",
  icon: "💧",
  hero: "from-cyan-600 via-sky-700 to-blue-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4],
};
