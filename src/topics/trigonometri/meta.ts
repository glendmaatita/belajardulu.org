import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const trigonometri: Topic = {
  id: "trigonometri",
  title: "Trigonometri",
  tagline: "Matematika segitiga & gelombang",
  description: "Trigonometri lahir dari kebutuhan mengukur yang tak terjangkau: tinggi gunung, jarak bintang, lebar sungai. Lewat perbandingan sisi segitiga, kita berpetualang menemukan sinus, kosinus, dan tangen, sampai rumus dan identitasnya muncul sebagai kesimpulan.",
  icon: "🔺",
  hero: "from-orange-500 via-amber-600 to-yellow-700",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
