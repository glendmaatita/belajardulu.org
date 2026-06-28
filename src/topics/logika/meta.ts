import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const logika: Topic = {
  id: "logika",
  title: "Logika",
  tagline: "Seni berpikir lurus",
  description:
    "Belajar bernalar dengan benar: proposisi dan penalaran deduktif vs induktif, logika proposisional dan tabel kebenaran, silogisme dan validitas, mengenali sesat pikir (fallacy), serta berpikir kritis dalam kehidupan sehari-hari. Penuh latihan interaktif dan video animasi.",
  icon: "🧠",
  hero: "from-slate-600 via-gray-700 to-zinc-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
