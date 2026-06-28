import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const fungsiGrafik: Topic = {
  id: "fungsi-grafik",
  title: "Fungsi & Grafik",
  tagline: "Mesin hubungan & gambarnya",
  description: "Fungsi adalah mesin yang mengubah masukan menjadi keluaran, dan grafik adalah potretnya. Bukan menghafal bentuk grafik, kita berpetualang memasukkan angka, melihat polanya di bidang koordinat, sampai persamaan dan ciri grafiknya tersimpulkan.",
  icon: "📈",
  hero: "from-emerald-500 via-green-600 to-teal-700",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
