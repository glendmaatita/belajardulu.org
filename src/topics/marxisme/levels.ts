import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "dasar",
    order: 1,
    title: "Level 1 · Mengenal Marx & Materialisme",
    subtitle: "Latar, tokoh, dan cara pandang",
    description:
      "Siapa Karl Marx dan Friedrich Engels, latar Revolusi Industri yang melahirkan pemikirannya, beda materialisme dengan idealisme, serta gambaran besar apa yang dikritik dan ditawarkan Marxisme.",
    color: "from-rose-600 to-red-700",
    icon: "📕",
  },
  {
    id: "nilai",
    order: 2,
    title: "Level 2 · Teori Nilai & Nilai Lebih",
    subtitle: "Dari mana laba berasal",
    description:
      "Teori nilai kerja, nilai lebih (surplus value) sebagai sumber laba, tingkat eksploitasi, komodifikasi tenaga kerja, serta alienasi pekerja dalam produksi kapitalis.",
    color: "from-orange-600 to-red-700",
    icon: "⚙️",
  },
  {
    id: "historis",
    order: 3,
    title: "Level 3 · Materialisme Historis & Dialektika",
    subtitle: "Mesin penggerak sejarah",
    description:
      "Dialektika dari Hegel ke Marx, mode produksi, hubungan basis ekonomi dan suprastruktur, perjuangan kelas sebagai motor sejarah, serta tahap-tahap perkembangan masyarakat.",
    color: "from-amber-600 to-orange-700",
    icon: "🌀",
  },
  {
    id: "kritik",
    order: 4,
    title: "Level 4 · Kritik atas Kapitalisme",
    subtitle: "Kontradiksi di dalam sistem",
    description:
      "Akumulasi modal, krisis akibat overproduksi, kecenderungan penurunan tingkat laba, konsentrasi dan sentralisasi modal, tentara cadangan buruh, serta fetisisme komoditas.",
    color: "from-red-600 to-rose-800",
    icon: "📉",
  },
  {
    id: "warisan",
    order: 5,
    title: "Level 5 · Aliran & Warisan Marxisme",
    subtitle: "Cabang, kritik, dan relevansi",
    description:
      "Marxisme-Leninisme, revisionisme dan sosialisme demokratik, Rosa Luxemburg, Mazhab Frankfurt, penerapan dalam sejarah abad ke-20, kritik terhadapnya, serta relevansinya hari ini.",
    color: "from-rose-700 to-red-900",
    icon: "🌍",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
