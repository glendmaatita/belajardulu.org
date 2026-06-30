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

export const supplyChain: Topic = {
  id: "supply-chain",
  title: "Supply Chain Management",
  tagline: "Mengalirkan barang dari hulu ke hilir",
  description:
    "Dari konsep dasar sampai praktik nyata: model SCOR, efek bullwhip, pengadaan dan sourcing, manajemen persediaan, pergudangan, logistik dan distribusi di negara kepulauan, transportasi, perencanaan produksi dan permintaan, analitik, manajemen risiko, keberlanjutan, rantai pasok digital, sampai perdagangan global. Diperkaya konteks Indonesia (Pelindo, Tol Laut, NLE/INSW, e-Katalog LKPP), dengan banyak simulator, grafik, video animasi, studi kasus sejarah, dan latihan.",
  icon: "🔗",
  hero: "from-sky-500 via-blue-600 to-indigo-700",
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
  ],
};
