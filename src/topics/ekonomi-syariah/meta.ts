import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const ekonomiSyariah: Topic = {
  id: "ekonomi-syariah",
  title: "Ekonomi Syariah",
  tagline: "Ekonomi yang berlandaskan keadilan Islam",
  description:
    "Sistem ekonomi dan keuangan berdasarkan prinsip Islam: tujuan maqashid syariah, larangan riba, gharar, dan maysir, aneka akad (murabahah, ijarah, mudharabah, musyarakah), perbankan dan asuransi syariah, pasar modal syariah (saham, sukuk, reksa dana), sampai keuangan sosial (zakat, infak, sedekah, wakaf). Penuh kalkulator, grafik, dan video, mengikuti fatwa DSN-MUI dan regulasi OJK.",
  icon: "🕌",
  hero: "from-emerald-700 via-green-800 to-teal-900",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
