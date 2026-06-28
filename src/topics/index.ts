import type { Topic, Lesson } from "../types";
import type { IconName } from "../components/Icon";
import { akuntansi } from "./akuntansi/meta";
import { carbon } from "./carbon/meta";
import { pajak } from "./pajak/meta";
import { climateFinance } from "./climate-finance/meta";
import { corporateFinance } from "./corporate-finance/meta";
import { investasi } from "./investasi/meta";
import { kepabeanan } from "./kepabeanan/meta";
import { pasarKeuangan } from "./pasar-keuangan/meta";
import { mikroekonomi } from "./mikroekonomi/meta";
import { makroekonomi } from "./makroekonomi/meta";
import { kebijakanFiskal } from "./kebijakan-fiskal/meta";
import { logika } from "./logika/meta";
import { filsafat } from "./filsafat/meta";
import { matematikaDasar } from "./matematika-dasar/meta";
import { aljabar } from "./aljabar/meta";
import { geometri } from "./geometri/meta";
import { trigonometri } from "./trigonometri/meta";
import { fungsiGrafik } from "./fungsi-grafik/meta";
import { logikaMatematika } from "./logika-matematika/meta";
import { statistika } from "./statistika/meta";
import { kalkulus } from "./kalkulus/meta";

// Register topics here. Adding a future topic = create a folder + meta.ts, then
// import it and add to this array.
export const topics: Topic[] = [matematikaDasar, aljabar, geometri, trigonometri, fungsiGrafik, logikaMatematika, statistika, kalkulus, pajak, mikroekonomi, makroekonomi, kebijakanFiskal, pasarKeuangan, kepabeanan, investasi, corporateFinance, climateFinance, carbon, logika, filsafat, akuntansi];

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
    id: "ekonomi-kebijakan",
    title: "Ekonomi & Kebijakan",
    tagline: "Bagaimana pasar, negara, dan regulasi membentuk keputusan ekonomi.",
    icon: "landmark",
    accent: "from-amber-500 to-orange-600",
    topicIds: ["mikroekonomi", "makroekonomi", "kebijakan-fiskal", "pajak", "kepabeanan"],
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
    ],
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

export function topicsInCategory(cat: Category): Topic[] {
  return cat.topicIds.map((id) => getTopic(id)).filter((t): t is Topic => !!t);
}

/** Semua kategori beserta topiknya, plus kategori "Lainnya" untuk topik yang belum dipetakan. */
export function categorizedTopics(): { category: Category; topics: Topic[] }[] {
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

export function getTopic(id: string | undefined): Topic | undefined {
  return topics.find((t) => t.id === id);
}

export function lessonsByLevel(topic: Topic, levelId: string): Lesson[] {
  return topic.lessons.filter((l) => l.levelId === levelId).sort((a, b) => a.order - b.order);
}

export function getLesson(topic: Topic, lessonId: string): Lesson | undefined {
  return topic.lessons.find((l) => l.id === lessonId);
}

export function orderedLessons(topic: Topic): Lesson[] {
  return [...topic.levels]
    .sort((a, b) => a.order - b.order)
    .flatMap((lv) => lessonsByLevel(topic, lv.id));
}

export function adjacentLessons(topic: Topic, lessonId: string) {
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
