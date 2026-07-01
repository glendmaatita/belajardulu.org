import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const perencanaanKeuangan: Topic = {
  id: "perencanaan-keuangan",
  title: "Perencanaan Keuangan",
  tagline: "Atur uang pribadi dengan percaya diri",
  description:
    "Panduan praktis mengatur keuangan pribadi dan keluarga di Indonesia: menyusun anggaran dan dana darurat, mengelola utang dan KPR, memahami BPJS Kesehatan dan BPJS Ketenagakerjaan, berinvestasi sesuai tujuan (reksa dana, SBN ritel, emas), sampai merencanakan pensiun dan warisan. Dibuat ramah pemula, penuh kalkulator, dengan sudut pandang konvensional dan syariah.",
  icon: "💰",
  hero: "from-emerald-600 via-teal-700 to-slate-900",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
