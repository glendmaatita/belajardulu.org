import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "pengantar",
    order: 1,
    title: "Level 1 · Pengantar Filsafat",
    subtitle: "Cabang & cara berpikir",
    description:
      "Apa itu filsafat dan mengapa penting, cabang utamanya (metafisika, epistemologi, etika, logika, estetika), serta cara berfilsafat yang kritis.",
    color: "from-amber-500 to-yellow-600",
    icon: "🦉",
  },
  {
    id: "epistemologi",
    order: 2,
    title: "Level 2 · Epistemologi",
    subtitle: "Hakikat pengetahuan",
    description:
      "Apa itu pengetahuan, sumbernya (rasionalisme vs empirisme), skeptisisme, dan berbagai teori kebenaran.",
    color: "from-yellow-500 to-lime-600",
    icon: "💡",
  },
  {
    id: "metafisika",
    order: 3,
    title: "Level 3 · Metafisika",
    subtitle: "Hakikat kenyataan",
    description:
      "Pertanyaan tentang ada dan kenyataan: materialisme vs idealisme, determinisme vs kehendak bebas, dan identitas diri.",
    color: "from-lime-500 to-green-600",
    icon: "🌌",
  },
  {
    id: "etika",
    order: 4,
    title: "Level 4 · Etika & Moral",
    subtitle: "Apa yang benar?",
    description:
      "Teori etika besar: utilitarianisme, deontologi (Kant), etika keutamaan (Aristoteles), relativisme, dan cara menghadapi dilema moral.",
    color: "from-green-500 to-emerald-600",
    icon: "⚖️",
  },
  {
    id: "terapan",
    order: 5,
    title: "Level 5 · Filsafat & Kehidupan",
    subtitle: "Makna & penerapan",
    description:
      "Filsafat Timur dan Pancasila, eksistensialisme dan makna hidup, filsafat ilmu, serta filsafat politik dan keadilan.",
    color: "from-emerald-500 to-teal-600",
    icon: "🌏",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
