import type { Level } from "../../types";

export const levels: Level[] = [
  {
    id: "fluida-statis-tekanan",
    order: 1,
    title: "Fluida Statis: Tekanan",
    subtitle: "Saat fluida diam menekan",
    description:
      "Massa jenis, tekanan, tekanan hidrostatis, tekanan atmosfer, barometer, dan manometer. Fondasi semua hal tentang fluida yang diam.",
    color: "from-cyan-400 to-sky-500",
    icon: "🌊",
  },
  {
    id: "pascal-archimedes",
    order: 2,
    title: "Hukum Pascal & Archimedes",
    subtitle: "Gaya raksasa dari fluida",
    description:
      "Hukum Pascal, dongkrak dan rem hidrolik, Hukum Archimedes, serta syarat terapung, melayang, dan tenggelam.",
    color: "from-sky-400 to-blue-500",
    icon: "🚢",
  },
  {
    id: "fluida-dinamis",
    order: 3,
    title: "Fluida Dinamis",
    subtitle: "Saat fluida mengalir",
    description:
      "Debit dan persamaan kontinuitas, asas Bernoulli, serta penerapannya pada venturi, tabung pitot, dan gaya angkat sayap pesawat.",
    color: "from-blue-400 to-indigo-500",
    icon: "✈️",
  },
  {
    id: "fluida-nyata",
    order: 4,
    title: "Fluida Nyata",
    subtitle: "Kekentalan dan permukaan",
    description:
      "Viskositas dan hukum Stokes, aliran laminar dan turbulen, tegangan permukaan, serta kapilaritas pada fluida yang sebenarnya.",
    color: "from-indigo-400 to-violet-500",
    icon: "💧",
  },
];

export const levelById = (id: string) => levels.find((l) => l.id === id);
