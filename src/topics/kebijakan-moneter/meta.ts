import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const kebijakanMoneter: Topic = {
  id: "kebijakan-moneter",
  title: "Kebijakan Moneter",
  tagline: "Bagaimana bank sentral menjaga nilai uang",
  description:
    "Cara bank sentral seperti Bank Indonesia mengelola uang dan suku bunga untuk menjaga stabilitas harga dan nilai tukar: dari fungsi uang, instrumen (BI-Rate, operasi pasar terbuka, GWM), mekanisme transmisi dan sasaran inflasi, nilai tukar dan cadangan devisa, sampai koordinasi dengan fiskal, kebijakan tak konvensional, dan rupiah digital. Penuh simulator, grafik, dan video.",
  icon: "🏦",
  hero: "from-emerald-700 via-teal-800 to-slate-900",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
