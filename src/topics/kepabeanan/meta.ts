import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";
import { level6 } from "./lessons/level6";
import { level7 } from "./lessons/level7";
import { level8 } from "./lessons/level8";
import { level9 } from "./lessons/level9";
import { level10 } from "./lessons/level10";
import { level11 } from "./lessons/level11";
import { level12 } from "./lessons/level12";
import { level13 } from "./lessons/level13";
import { level14 } from "./lessons/level14";

export const kepabeanan: Topic = {
  id: "kepabeanan",
  title: "Kepabeanan",
  tagline: "Ekspor, impor & bea cukai",
  description:
    "Kurikulum lengkap ilmu ekspor, impor, dan kepabeanan: dari fundamental perdagangan internasional, klasifikasi HS Code, teknis PIB/PEB dan nilai pabean, dokumen, logistik, Incoterms 2020, pembayaran internasional dan LC, asuransi pengangkutan, perpajakan impor dan fasilitas fiskal, compliance dan manajemen risiko, customs digital (CEISA/INSW), sampai simulasi impor-ekspor dan trade analytics. Penuh kalkulator, simulator, grafik, dan video animasi.",
  icon: "🛳️",
  hero: "from-sky-600 via-blue-700 to-indigo-800",
  levels,
  lessons: [
    ...level1,
    ...level2,
    ...level3,
    ...level4,
    ...level5,
    ...level6,
    ...level7,
    ...level8,
    ...level9,
    ...level10,
    ...level11,
    ...level12,
    ...level13,
    ...level14,
  ],
};
