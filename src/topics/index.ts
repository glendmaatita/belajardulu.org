import type { Topic, TopicMeta, LessonMeta } from "../types";
import type { IconName } from "../components/Icon";
import { manifest } from "./manifest";
import { topicLoaders } from "./loaders";

// Katalog topik = metadata ringan (tanpa isi berat/blocks) yang dibuat otomatis
// oleh scripts/gen-manifest.mts. Halaman katalog, navigasi, dan dashboard cukup
// memakai ini. Urutan tampil ditentukan di sini agar tidak bergantung urutan folder.
const ORDER = [
  "matematika-dasar", "aljabar", "geometri", "trigonometri", "fungsi-grafik", "logika-matematika",
  "statistika", "kalkulus", "pengantar-fisika", "kinematika", "dinamika", "usaha-energi", "momentum",
  "rotasi", "gravitasi", "fluida", "getaran-gelombang", "termodinamika", "listrik-statis", "arus-listrik",
  "magnetisme", "optika", "pajak", "tax-planning", "mikroekonomi", "makroekonomi", "kebijakan-fiskal",
  "kebijakan-moneter", "pasar-keuangan", "kepabeanan", "ekspor", "investasi", "corporate-finance", "climate-finance",
  "carbon", "cryptocurrency", "supply-chain", "kapitalisme", "marxisme", "ekonomi-syariah",
  "sejarah-pemikiran-ekonomi", "perencanaan-keuangan", "demokrasi", "logika", "filsafat", "akuntansi",
];

const byId = new Map(manifest.map((t) => [t.id, t]));
export const topics: TopicMeta[] = [
  ...ORDER.map((id) => byId.get(id)).filter((t): t is TopicMeta => !!t),
  ...manifest.filter((t) => !ORDER.includes(t.id)), // topik baru yang belum masuk urutan
];

// Muat isi lengkap satu topik (dengan blocks) secara lazy. Vite memecah tiap topik
// menjadi chunk sendiri, jadi isi pelajaran hanya diunduh saat topik itu dibuka.
export async function loadTopic(id: string | undefined): Promise<Topic | undefined> {
  if (!id) return undefined;
  const loader = topicLoaders[id];
  if (!loader) return undefined;
  const mod = await loader();
  return Object.values(mod).find(
    (v): v is Topic => !!v && typeof v === "object" && Array.isArray((v as Topic).lessons),
  );
}

// ===== Kategori materi =====
// Mengelompokkan topik ke dalam rumpun yang berkaitan. Topik yang belum
// terdaftar di sini otomatis masuk ke kategori "Lainnya".
export interface Category {
  id: string;
  title: string;
  tagline: string;
  icon: IconName;
  accent: string; // tailwind gradient untuk header kategori
  topicIds: string[];
}

export const categories: Category[] = [
  {
    id: "matematika",
    title: "Matematika",
    tagline: "Dari berhitung dasar sampai kalkulus, bangun intuisi lewat petualangan.",
    icon: "calculator",
    accent: "from-indigo-500 to-blue-600",
    topicIds: [
      "matematika-dasar",
      "aljabar",
      "geometri",
      "trigonometri",
      "fungsi-grafik",
      "logika-matematika",
      "statistika",
      "kalkulus",
    ],
  },
  {
    id: "fisika",
    title: "Fisika",
    tagline: "Memahami hukum-hukum alam, dari gerak dan energi sampai listrik dan cahaya.",
    icon: "flask",
    accent: "from-sky-500 to-blue-600",
    topicIds: [
      "pengantar-fisika",
      "kinematika",
      "dinamika",
      "usaha-energi",
      "momentum",
      "rotasi",
      "gravitasi",
      "fluida",
      "getaran-gelombang",
      "termodinamika",
      "listrik-statis",
      "arus-listrik",
      "magnetisme",
      "optika",
    ],
  },
  {
    id: "ekonomi-kebijakan",
    title: "Ekonomi & Kebijakan",
    tagline: "Bagaimana pasar, negara, dan regulasi membentuk keputusan ekonomi.",
    icon: "landmark",
    accent: "from-amber-500 to-orange-600",
    topicIds: ["mikroekonomi", "makroekonomi", "kebijakan-fiskal", "kebijakan-moneter", "pajak", "tax-planning", "kepabeanan", "kapitalisme", "sejarah-pemikiran-ekonomi"],
  },
  {
    id: "keuangan-investasi",
    title: "Keuangan & Investasi",
    tagline: "Pasar modal, investasi, keuangan perusahaan, sampai perdagangan karbon.",
    icon: "coins",
    accent: "from-emerald-500 to-teal-600",
    topicIds: [
      "pasar-keuangan",
      "investasi",
      "corporate-finance",
      "climate-finance",
      "carbon",
      "akuntansi",
      "ekonomi-syariah",
      "perencanaan-keuangan",
    ],
  },
  {
    id: "teknologi-blockchain",
    title: "Teknologi & Blockchain",
    tagline: "Uang digital, blockchain, dan ekosistem Web3 dari dasar sampai investasi.",
    icon: "gears",
    accent: "from-amber-500 to-orange-600",
    topicIds: ["cryptocurrency"],
  },
  {
    id: "operasi-rantai-pasok",
    title: "Operasi & Rantai Pasok",
    tagline: "Mengalirkan barang dari hulu ke hilir: pengadaan, gudang, logistik, sampai perdagangan global.",
    icon: "gears",
    accent: "from-sky-500 to-indigo-600",
    topicIds: ["supply-chain", "ekspor"],
  },
  {
    id: "sosial-politik",
    title: "Sosial & Kewarganegaraan",
    tagline: "Bagaimana masyarakat memerintah dirinya: demokrasi, ideologi, kekuasaan, dan hak warga.",
    icon: "landmark",
    accent: "from-blue-500 to-indigo-600",
    topicIds: ["demokrasi", "marxisme"],
  },
  {
    id: "logika-filsafat",
    title: "Logika & Filsafat",
    tagline: "Cara berpikir jernih, menalar, dan menelusuri pemikiran besar sepanjang sejarah.",
    icon: "scale",
    accent: "from-violet-500 to-purple-600",
    topicIds: ["logika", "filsafat"],
  },
];

export function topicsInCategory(cat: Category): TopicMeta[] {
  return cat.topicIds.map((id) => getTopic(id)).filter((t): t is TopicMeta => !!t);
}

/** Semua kategori beserta topiknya, plus kategori "Lainnya" untuk topik yang belum dipetakan. */
export function categorizedTopics(): { category: Category; topics: TopicMeta[] }[] {
  const mapped = new Set(categories.flatMap((c) => c.topicIds));
  const groups = categories
    .map((category) => ({ category, topics: topicsInCategory(category) }))
    .filter((g) => g.topics.length > 0);

  const leftovers = topics.filter((t) => !mapped.has(t.id));
  if (leftovers.length) {
    groups.push({
      category: {
        id: "lainnya",
        title: "Lainnya",
        tagline: "Topik lain yang siap kamu jelajahi.",
        icon: "folder",
        accent: "from-slate-500 to-slate-600",
        topicIds: leftovers.map((t) => t.id),
      },
      topics: leftovers,
    });
  }
  return groups;
}

export function getCategoryForTopic(topicId: string): Category | undefined {
  return categories.find((c) => c.topicIds.includes(topicId));
}

export function getTopic(id: string | undefined): TopicMeta | undefined {
  return topics.find((t) => t.id === id);
}

export function lessonsByLevel(topic: TopicMeta, levelId: string): LessonMeta[] {
  return topic.lessons.filter((l) => l.levelId === levelId).sort((a, b) => a.order - b.order);
}

export function getLesson(topic: TopicMeta, lessonId: string): LessonMeta | undefined {
  return topic.lessons.find((l) => l.id === lessonId);
}

export function orderedLessons(topic: TopicMeta): LessonMeta[] {
  return [...topic.levels]
    .sort((a, b) => a.order - b.order)
    .flatMap((lv) => lessonsByLevel(topic, lv.id));
}

export function adjacentLessons(topic: TopicMeta, lessonId: string) {
  const ordered = orderedLessons(topic);
  const idx = ordered.findIndex((l) => l.id === lessonId);
  return {
    prev: idx > 0 ? ordered[idx - 1] : undefined,
    next: idx >= 0 && idx < ordered.length - 1 ? ordered[idx + 1] : undefined,
  };
}

// Progress key helper: scope a lesson to its topic so ids never collide.
export function progressKey(topicId: string, lessonId: string): string {
  return `${topicId}:${lessonId}`;
}
