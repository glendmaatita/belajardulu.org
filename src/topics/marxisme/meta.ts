import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const marxisme: Topic = {
  id: "marxisme",
  title: "Marxisme",
  tagline: "Memahami kritik besar atas kapitalisme",
  description:
    "Pemikiran Karl Marx dan Friedrich Engels yang mengguncang dunia: teori nilai kerja dan nilai lebih, alienasi, materialisme historis dan dialektika, perjuangan kelas, kritik atas kapitalisme, sampai aliran-aliran dan warisannya di abad ke-20 dan hari ini. Disajikan berimbang dan kritis, dengan video, simulator, grafik, dan potret tokoh.",
  icon: "☭",
  hero: "from-rose-700 via-red-800 to-stone-900",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
