import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const kinematika: Topic = {
  id: "kinematika",
  title: "Kinematika",
  tagline: "Gerak dan lintasannya",
  description: "Posisi, jarak, perpindahan, kecepatan, percepatan, grafik gerak, gerak lurus beraturan dan berubah beraturan, gerak dua dimensi, parabola, dan melingkar. Fisika bukan menghafal rumus: kita berpetualang lewat pengamatan, simulasi, dan grafik sampai rumusnya tercipta sendiri.",
  icon: "🏃",
  hero: "from-blue-600 via-indigo-700 to-violet-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
