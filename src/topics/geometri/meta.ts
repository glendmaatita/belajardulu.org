import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const geometri: Topic = {
  id: "geometri",
  title: "Geometri",
  tagline: "Membaca bentuk dan ruang",
  description: "Geometri adalah cara matematika membaca bentuk, ruang, dan posisi di dunia nyata. Bukan menghafal rumus luas dan volume, melainkan menemukannya lewat mengukur, menyusun, dan mengamati pola, sampai rumusnya muncul sendiri di akhir.",
  icon: "📏",
  hero: "from-teal-500 via-cyan-600 to-sky-700",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
