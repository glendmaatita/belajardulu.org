import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const getaranGelombang: Topic = {
  id: "getaran-gelombang",
  title: "Getaran & Gelombang",
  tagline: "Osilasi dan rambatan",
  description:
    "Gerak harmonik sederhana, pegas, bandul, resonansi, gelombang transversal dan longitudinal, pemantulan, interferensi, difraksi, gelombang berdiri, bunyi, dan efek Doppler. Fisika bukan menghafal rumus: kita berpetualang lewat pengamatan, simulasi, dan grafik sampai rumusnya tercipta sendiri.",
  icon: "〰️",
  hero: "from-teal-600 via-cyan-700 to-sky-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
