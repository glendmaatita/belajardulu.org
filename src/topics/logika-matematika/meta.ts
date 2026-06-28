import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const logikaMatematika: Topic = {
  id: "logika-matematika",
  title: "Logika Matematika",
  tagline: "Bernalar dengan pasti",
  description: "Logika matematika adalah aturan main untuk bernalar tanpa keliru. Bukan menghafal tabel, kita berpetualang menguji pernyataan benar dan salah, menyusun tabel kebenaran, dan menarik kesimpulan yang sah, sampai aturannya tersimpulkan sendiri.",
  icon: "🧮",
  hero: "from-slate-500 via-gray-600 to-zinc-700",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
