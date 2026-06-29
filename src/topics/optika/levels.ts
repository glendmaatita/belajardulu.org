import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "cahaya-pemantulan",
    order: 1,
    title: "Cahaya & Pemantulan",
    subtitle: "Hakikat cahaya dan cermin",
    description:
      "Hakikat cahaya, perambatan lurus, hukum pemantulan, cermin datar, cermin cekung, dan cermin cembung.",
    color: "from-sky-400 to-blue-500",
    icon: "🔦",
  },
  {
    id: "pembiasan-lensa",
    order: 2,
    title: "Pembiasan & Lensa",
    subtitle: "Cahaya membelok dan lensa",
    description:
      "Pembiasan dan indeks bias (Hukum Snell), pemantulan total dan serat optik, lensa cembung, serta lensa cekung.",
    color: "from-cyan-400 to-teal-500",
    icon: "🔎",
  },
  {
    id: "optika-fisis",
    order: 3,
    title: "Optika Fisis",
    subtitle: "Cahaya sebagai gelombang",
    description:
      "Interferensi celah ganda Young, difraksi dan kisi, polarisasi, serta dispersi dan warna.",
    color: "from-violet-400 to-indigo-500",
    icon: "🌈",
  },
  {
    id: "alat-optik",
    order: 4,
    title: "Alat Optik",
    subtitle: "Memperluas penglihatan",
    description:
      "Mata dan cacat mata (kacamata), lup, mikroskop, serta teleskop dan kamera.",
    color: "from-amber-400 to-orange-500",
    icon: "🔬",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
