import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const kebijakanFiskal: Topic = {
  id: "kebijakan-fiskal",
  title: "Kebijakan Fiskal",
  tagline: "APBN & keuangan negara Indonesia",
  description:
    "Memahami kebijakan fiskal Indonesia: fungsi alokasi, distribusi, dan stabilisasi; struktur dan siklus APBN; penerimaan negara (pajak dan PNBP); belanja dan transfer ke daerah; serta defisit, utang, dan keberlanjutan fiskal. Penuh simulator, grafik, dan video animasi.",
  icon: "🏛️",
  hero: "from-red-600 via-rose-700 to-pink-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
