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

export const cryptocurrency: Topic = {
  id: "cryptocurrency",
  title: "Cryptocurrency",
  tagline: "Uang digital & blockchain",
  description:
    "Dari nol sampai paham: kenapa Bitcoin lahir, cara kerja blockchain dan kriptografi, Bitcoin dan Ethereum, mekanisme konsensus, smart contract, DeFi, stablecoin, tokenomics, NFT dan Web3, cross-chain, keamanan, sampai investasi kripto. Penuh simulator, grafik, video animasi, dan latihan.",
  icon: "🪙",
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
    ...level11,
    ...level12,
    ...level13,
    ...level14,
  ],
};
