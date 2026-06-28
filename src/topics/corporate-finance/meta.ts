import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const corporateFinance: Topic = {
  id: "corporate-finance",
  title: "Corporate Finance",
  tagline: "Keputusan keuangan perusahaan",
  description:
    "Bagaimana perusahaan mengambil keputusan keuangan untuk menciptakan nilai: investasi (capital budgeting, NPV, WACC), pendanaan dan struktur modal, treasury & modal kerja, project finance, sampai merger & akuisisi (valuasi, LBO). Penuh kalkulator, grafik, dan video animasi.",
  icon: "🏢",
  hero: "from-indigo-600 via-blue-700 to-slate-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
