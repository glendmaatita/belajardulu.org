import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const aljabar: Topic = {
  id: "aljabar",
  title: "Aljabar",
  tagline: "Bahasa simbol matematika",
  description: "Aljabar bukan sekadar berhitung dengan huruf. Ia adalah bahasa untuk menangkap pola dan menyelesaikan teka-teki yang angkanya belum diketahui. Kita berpetualang dari soal nyata sampai sebuah persamaan dan rumus tercipta dengan sendirinya, bukan menghafal rumus di awal.",
  icon: "🟰",
  hero: "from-rose-500 via-pink-600 to-fuchsia-700",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
