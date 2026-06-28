import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const mikroekonomi: Topic = {
  id: "mikroekonomi",
  title: "Mikroekonomi",
  tagline: "Perilaku pelaku & pasar",
  description:
    "Memahami keputusan individu, rumah tangga, dan perusahaan: kelangkaan dan biaya peluang, hukum permintaan dan penawaran, elastisitas dan perilaku konsumen, produksi dan biaya, hingga struktur pasar dari persaingan sempurna sampai monopoli. Penuh simulator, grafik, dan video animasi.",
  icon: "🧩",
  hero: "from-rose-600 via-pink-700 to-fuchsia-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
