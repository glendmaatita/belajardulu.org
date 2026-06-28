import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";
import { level6 } from "./lessons/level6";

export const carbon: Topic = {
  id: "carbon",
  title: "Carbon Trading",
  tagline: "Konsep sampai strategi",
  description:
    "Belajar perdagangan karbon menyeluruh: lingkungan, ekonomi, hukum, kebijakan, keuangan, akuntansi, pajak, teknologi (MRV), tata kelola, risiko, bisnis, sosial, etika, internasional, dan politik. Penuh grafik data, simulator, kuis, dan video animasi.",
  icon: "🌿",
  hero: "from-emerald-600 via-emerald-700 to-teal-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5, ...level6],
};
