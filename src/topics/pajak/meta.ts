import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const pajak: Topic = {
  id: "pajak",
  title: "Pajak UMKM",
  tagline: "Dibuat ramah untuk awam",
  description:
    "Pajak terkenal sulit, jadi topik ini sengaja dibuat sesederhana mungkin: bahasa sehari-hari dan banyak simulator. Mulai dari NPWP, PPh Final 0,5%, PPN & PKP, pajak karyawan (PPh 21/23), sampai cara bayar, lapor, dan menghindari denda.",
  icon: "🧾",
  hero: "from-amber-600 via-orange-700 to-rose-700",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
