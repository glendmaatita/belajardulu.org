import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "dasar",
    order: 1,
    title: "Level 1 · Dasar Logika",
    subtitle: "Proposisi & penalaran",
    description:
      "Apa itu logika, proposisi dan term, perbedaan penalaran deduktif dan induktif, serta beda kebenaran dan validitas.",
    color: "from-slate-500 to-gray-600",
    icon: "🧠",
  },
  {
    id: "proposisional",
    order: 2,
    title: "Level 2 · Logika Proposisional",
    subtitle: "Operator & tabel kebenaran",
    description:
      "Operator logika (negasi, konjungsi, disjungsi, implikasi, biimplikasi), tabel kebenaran, tautologi, kontradiksi, dan ekuivalensi.",
    color: "from-gray-500 to-zinc-600",
    icon: "🔣",
  },
  {
    id: "silogisme",
    order: 3,
    title: "Level 3 · Penalaran & Silogisme",
    subtitle: "Premis ke kesimpulan",
    description:
      "Silogisme kategoris, premis dan kesimpulan, aturan validitas, serta membedakan argumen yang valid dari yang benar.",
    color: "from-zinc-500 to-neutral-600",
    icon: "⛓️",
  },
  {
    id: "fallacy",
    order: 4,
    title: "Level 4 · Sesat Pikir (Fallacy)",
    subtitle: "Kesalahan penalaran",
    description:
      "Sesat pikir formal dan informal: ad hominem, strawman, slippery slope, false dilemma, appeal to authority, dan cara mengenalinya.",
    color: "from-neutral-500 to-stone-600",
    icon: "⚠️",
  },
  {
    id: "terapan",
    order: 5,
    title: "Level 5 · Logika Terapan",
    subtitle: "Berpikir kritis",
    description:
      "Menyusun argumen yang baik, berpikir kritis, mengenali bias kognitif, dan menerapkan logika dalam debat serta keputusan sehari-hari.",
    color: "from-stone-500 to-slate-600",
    icon: "🎯",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
