import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const filsafat: Topic = {
  id: "filsafat",
  title: "Filsafat",
  tagline: "Cinta pada kebijaksanaan",
  description:
    "Menjelajahi pertanyaan-pertanyaan terbesar manusia: cabang-cabang filsafat, epistemologi (hakikat pengetahuan), metafisika (hakikat kenyataan dan kehendak bebas), etika (utilitarianisme, deontologi, keutamaan), serta filsafat dalam kehidupan termasuk eksistensialisme dan Pancasila. Penuh eksperimen pikiran interaktif dan video animasi.",
  icon: "🦉",
  hero: "from-amber-600 via-yellow-700 to-orange-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
