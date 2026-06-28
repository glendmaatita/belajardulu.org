import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "pernyataan",
    order: 1,
    title: "Level 1 · Pernyataan & Nilai Kebenaran",
    subtitle: "Benar atau salah",
    description: "Membedakan kalimat yang bisa dinilai benar atau salah, kalimat terbuka, dan ingkaran (negasi).",
    color: "from-slate-400 to-gray-500",
    icon: "💬",
  },
  {
    id: "operator-tabel",
    order: 2,
    title: "Level 2 · Operator & Tabel Kebenaran",
    subtitle: "Dan, atau, tidak",
    description: "Konjungsi, disjungsi, dan negasi, lalu menyusun tabel kebenaran untuk menguji setiap kemungkinan.",
    color: "from-gray-400 to-zinc-500",
    icon: "🔣",
  },
  {
    id: "implikasi",
    order: 3,
    title: "Level 3 · Implikasi & Variasinya",
    subtitle: "Jika-maka dan saudaranya",
    description: "Implikasi, biimplikasi, konvers, invers, dan kontraposisi serta hubungan nilai kebenarannya.",
    color: "from-zinc-400 to-neutral-500",
    icon: "➡️",
  },
  {
    id: "kuantor-penarikan",
    order: 4,
    title: "Level 4 · Kuantor & Penarikan Kesimpulan",
    subtitle: "Semua, ada, maka",
    description: "Kuantor universal dan eksistensial, modus ponens, modus tollens, dan silogisme.",
    color: "from-neutral-400 to-stone-500",
    icon: "⛓️",
  },
  {
    id: "himpunan",
    order: 5,
    title: "Level 5 · Himpunan & Diagram Venn",
    subtitle: "Mengelompokkan objek",
    description: "Himpunan, irisan, gabungan, komplemen, dan membaca diagram Venn dari masalah nyata.",
    color: "from-stone-400 to-slate-500",
    icon: "🔵",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
