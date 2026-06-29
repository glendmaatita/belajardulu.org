import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";

export const pengantarFisika: Topic = {
  id: "pengantar-fisika",
  title: "Pengantar Fisika",
  tagline: "Cara berpikir fisika",
  description: "Besaran dan satuan SI, dimensi dan analisis dimensi, ketelitian dan ketidakpastian, angka penting, notasi ilmiah, pengukuran, serta estimasi orde besaran. Fisika bukan menghafal rumus: kita berpetualang lewat pengamatan, simulasi, dan grafik sampai rumusnya tercipta sendiri.",
  icon: "📏",
  hero: "from-sky-600 via-blue-700 to-indigo-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4],
};
