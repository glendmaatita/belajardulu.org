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

export const kapitalisme: Topic = {
  id: "kapitalisme",
  title: "Kapitalisme",
  tagline: "Sistem ekonomi pasar & sejarahnya",
  description:
    "Dari pilar dasarnya sampai perdebatan besar: apa itu kapitalisme, akar sejarahnya dari merkantilisme ke revolusi industri, mekanisme pasar dan tangan tak tampak, milik pribadi dan laba, pemikir besar dari Adam Smith sampai Keynes dan Friedman, varian kapitalisme, krisis ekonomi, kritik dan ketimpangan, peran negara, sampai ekonomi Pancasila di Indonesia. Penuh simulator, grafik, video animasi, gambar tokoh, studi kasus sejarah, dan latihan.",
  icon: "💰",
  hero: "from-amber-500 via-orange-600 to-yellow-700",
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
  ],
};
