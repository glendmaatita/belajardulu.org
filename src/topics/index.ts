import type { Topic, Lesson } from "../types";
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

// Register topics here. Adding a future topic = create a folder + meta.ts, then
// import it and add to this array.
export const topics: Topic[] = [matematikaDasar, pajak, mikroekonomi, makroekonomi, kebijakanFiskal, pasarKeuangan, kepabeanan, investasi, corporateFinance, climateFinance, carbon, logika, filsafat, akuntansi];

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
