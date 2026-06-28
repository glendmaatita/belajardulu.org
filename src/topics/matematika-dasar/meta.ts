import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const matematikaDasar: Topic = {
  id: "matematika-dasar",
  title: "Matematika Dasar",
  tagline: "Bukan sekadar berhitung",
  description:
    "Matematika bukan hanya berhitung. Berhitung hanyalah bagian kecilnya. Di sini kita berpetualang melihat pola di alam, memakai matematika dalam kehidupan sehari-hari, dan memahaminya sebagai bahasa untuk membaca semesta. Kita jelajahi dulu masalahnya sampai sebuah rumus tercipta dengan sendirinya, bukan menghafal rumus di awal.",
  icon: "📐",
  hero: "from-blue-600 via-indigo-600 to-violet-700",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
