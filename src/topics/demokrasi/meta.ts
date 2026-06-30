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

export const demokrasi: Topic = {
  id: "demokrasi",
  title: "Demokrasi",
  tagline: "Kedaulatan rakyat & cara kerjanya",
  description:
    "Dari fondasi sampai praktik nyata: arti demokrasi dan prinsipnya, sejarah dari Athena kuno sampai gelombang demokratisasi, bentuk dan model demokrasi, pemilu dan sistem pemilihan, pembagian kekuasaan, konstitusi dan negara hukum, hak asasi dan kebebasan sipil, pemikir dari Aristoteles sampai Dahl, tantangan demokrasi modern, sampai perjalanan demokrasi Pancasila di Indonesia. Penuh simulator, grafik, video animasi, gambar tokoh, studi kasus sejarah, dan latihan.",
  icon: "🗳️",
  hero: "from-blue-500 via-indigo-600 to-violet-700",
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
