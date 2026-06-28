import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const statistika: Topic = {
  id: "statistika",
  title: "Statistika",
  tagline: "Membaca dunia lewat data",
  description: "Statistika adalah cara matematika memahami dunia yang penuh data dan ketidakpastian. Bukan menghafal rumus rata-rata dan simpangan, kita berpetualang mengumpulkan, menyajikan, dan meringkas data nyata, sampai ukuran dan rumusnya muncul sebagai kesimpulan.",
  icon: "📊",
  hero: "from-indigo-500 via-blue-600 to-cyan-700",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
