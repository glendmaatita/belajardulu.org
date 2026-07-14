import type { Topic } from "../../types";
import { levels } from "./levels";
import { level1 } from "./lessons/level1";
import { level2 } from "./lessons/level2";
import { level3 } from "./lessons/level3";
import { level4 } from "./lessons/level4";
import { level5 } from "./lessons/level5";

export const ekspor: Topic = {
  id: "ekspor",
  title: "Ekspor",
  tagline: "Ekspor dari Indonesia tanpa punya pabrik",
  description:
    "Panduan praktis untuk orang biasa di Indonesia yang ingin mulai mengekspor walau tidak punya pabrik. Kamu jadi jembatan antara produsen lokal (UMKM, petani, perajin) dan pembeli luar negeri: dari membangun mindset dan menilai kesiapan, menemukan produk dan produsen, riset pasar dan mencari buyer, mengurus legalitas (NIB/OSS) tanpa perlu pabrik, Lartas, dan dokumen ekspor (PEB, SKA, B/L), memilih metode pembayaran dan Incoterms yang aman, mengatur logistik dan asuransi, model ekspor bermodal kecil (undername, agregator, dropship, marketplace ekspor), sampai memanfaatkan insentif (PPN 0%, pembiayaan LPEI) dan menumbuhkan bisnis ekspor. Penuh kalkulator, simulator, grafik, dan video animasi.",
  icon: "🌏",
  hero: "from-emerald-600 via-teal-700 to-cyan-800",
  levels,
  lessons: [...level1, ...level2, ...level3, ...level4, ...level5],
};
