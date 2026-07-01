import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const sejarahPemikiranEkonomi: Topic = {
  id: "sejarah-pemikiran-ekonomi",
  title: "Sejarah Pemikiran Ekonomi",
  tagline: "Bagaimana ide-ide ekonomi berkembang",
  description:
    "Perjalanan gagasan ekonomi dari zaman kuno sampai kini: Aristoteles dan Ibn Khaldun, skolastik, merkantilisme, fisiokrat, mazhab klasik (Smith, Malthus, Ricardo, Mill), kritik Marx, revolusi marginal dan neoklasik (Jevons, Menger, Walras, Marshall), sampai ekonomi modern (Keynes, Friedman, Hayek, ekonomi perilaku). Kaya potret tokoh, grafik, video, dan studi kasus sejarah.",
  icon: "📚",
  hero: "from-amber-700 via-orange-800 to-stone-900",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
