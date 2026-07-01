import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const taxPlanning: Topic = {
  id: "tax-planning",
  title: "Tax Planning Korporat",
  tagline: "Hemat pajak yang sah dan terukur",
  description:
    "Bagaimana perusahaan menekan beban pajak secara legal dan terukur: memahami PPh Badan 22%, koreksi fiskal, penyusutan dan kompensasi kerugian, memanfaatkan fasilitas dan insentif (Pasal 31E, tax holiday, super deduction), mengelola withholding tax, PPN, transfer pricing, dan tax treaty, sampai manajemen risiko pemeriksaan dan tren global Pilar Dua. Penuh kalkulator, grafik, dan video animasi, mengikuti aturan pajak Indonesia (DJP).",
  icon: "🧾",
  hero: "from-sky-700 via-indigo-800 to-slate-900",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
