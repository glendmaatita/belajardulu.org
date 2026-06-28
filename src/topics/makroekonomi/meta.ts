import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const makroekonomi: Topic = {
  id: "makroekonomi",
  title: "Makroekonomi",
  tagline: "Ekonomi secara keseluruhan",
  description:
    "Memahami perekonomian secara agregat: mengukur PDB dan pertumbuhan, inflasi dan pengangguran, kebijakan moneter dan fiskal, ekonomi terbuka (perdagangan dan nilai tukar), hingga siklus bisnis dan model AD-AS. Penuh kalkulator, grafik, dan video animasi.",
  icon: "🌐",
  hero: "from-teal-600 via-cyan-700 to-blue-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
