import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const akuntansi: Topic = {
  id: "akuntansi",
  title: "Akuntansi",
  tagline: "Dari nol hingga mahir",
  description:
    "Belajar akuntansi dari persamaan dasar, siklus akuntansi, perusahaan dagang, topik lanjutan, sampai analisis laporan & standar. Dilengkapi simulasi jurnal, kalkulator, kuis, dan video animasi.",
  icon: "📒",
  hero: "from-blue-600 via-blue-700 to-indigo-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
