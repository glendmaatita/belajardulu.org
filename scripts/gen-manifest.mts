// Generator manifest topik: baca tiap src/topics/<dir>/meta.ts, buang isi berat
// (blocks) tiap pelajaran, precompute jumlah video & kuis, lalu tulis:
//   - src/topics/manifest.ts  : metadata ringan + shell pelajaran (untuk katalog/navigasi)
//   - src/topics/loaders.ts   : peta id -> dynamic import meta.ts (untuk code-splitting per topik)
// Jalankan: npm run gen:manifest
import { readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import type { Topic, TopicMeta } from "../src/types.ts";

const topicsDir = new URL("../src/topics/", import.meta.url);

const dirs = readdirSync(topicsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

type Loaded = { dir: string; topic: Topic };
const loaded: Loaded[] = [];

for (const dir of dirs) {
  const metaUrl = new URL(`./${dir}/meta.ts`, topicsDir);
  let mod: Record<string, unknown>;
  try {
    mod = await import(metaUrl.href);
  } catch {
    continue; // folder tanpa meta.ts (mis. folder util) dilewati
  }
  const topic = Object.values(mod).find(
    (v): v is Topic => !!v && typeof v === "object" && Array.isArray((v as Topic).lessons),
  );
  if (topic) loaded.push({ dir, topic });
}

const manifest: TopicMeta[] = loaded.map(({ topic }) => ({
  id: topic.id,
  title: topic.title,
  tagline: topic.tagline,
  description: topic.description,
  icon: topic.icon,
  hero: topic.hero,
  levels: topic.levels,
  lessons: topic.lessons.map(({ blocks: _blocks, ...meta }) => meta),
  videoCount: topic.lessons.reduce(
    (s, l) => s + l.blocks.filter((b) => b.type === "video").length,
    0,
  ),
  quizCount: topic.lessons.reduce(
    (s, l) => s + l.blocks.reduce((a, b) => (b.type === "quiz" ? a + b.questions.length : a), 0),
    0,
  ),
}));

const manifestFile = `// AUTO-GENERATED oleh scripts/gen-manifest.mts. JANGAN sunting manual.
// Regenerate: npm run gen:manifest (jalankan setiap kali menambah/mengubah pelajaran).
import type { TopicMeta } from "../types";

export const manifest: TopicMeta[] = ${JSON.stringify(manifest)};
`;
writeFileSync(new URL("./manifest.ts", topicsDir), manifestFile);

const loaderLines = loaded
  .map(({ dir, topic }) => `  ${JSON.stringify(topic.id)}: () => import(${JSON.stringify(`./${dir}/meta`)}),`)
  .join("\n");
const loadersFile = `// AUTO-GENERATED oleh scripts/gen-manifest.mts. JANGAN sunting manual.
// Peta id topik -> dynamic import meta.ts, sehingga tiap topik menjadi chunk terpisah
// dan isi pelajaran (blocks) hanya dimuat saat topik itu dibuka.
export const topicLoaders: Record<string, () => Promise<Record<string, unknown>>> = {
${loaderLines}
};
`;
writeFileSync(new URL("./loaders.ts", topicsDir), loadersFile);

console.log(
  `manifest: ${manifest.length} topik, ${manifest.reduce((s, t) => s + t.lessons.length, 0)} pelajaran`,
);
console.log(`path: ${fileURLToPath(new URL("./manifest.ts", topicsDir))}`);
