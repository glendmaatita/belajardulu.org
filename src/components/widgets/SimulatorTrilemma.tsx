import { useState } from "react";

// Trilemma kebijakan (impossible trinity): sebuah negara hanya bisa memilih dua
// dari tiga tujuan: nilai tukar tetap, arus modal bebas, dan moneter mandiri.
const OPTIONS = [
  { id: "tetap", label: "Nilai tukar tetap" },
  { id: "modal", label: "Arus modal bebas" },
  { id: "mandiri", label: "Moneter mandiri" },
];

const RESULTS: Record<string, { judul: string; desc: string }> = {
  "tetap,modal": {
    judul: "Kurs tetap + modal bebas",
    desc: "Mengorbankan kemandirian moneter. Suku bunga dalam negeri terkunci mengikuti luar negeri (mis. dewan mata uang / currency board).",
  },
  "tetap,mandiri": {
    judul: "Kurs tetap + moneter mandiri",
    desc: "Mengorbankan arus modal bebas. Perlu kontrol modal agar kurs tetap bisa dipertahankan (mis. Tiongkok masa lalu).",
  },
  "modal,mandiri": {
    judul: "Modal bebas + moneter mandiri",
    desc: "Mengorbankan kurs tetap. Nilai tukar dibiarkan mengambang. Inilah pilihan umum Indonesia saat ini.",
  },
};

export function SimulatorTrilemma() {
  const [picked, setPicked] = useState<string[]>(["modal", "mandiri"]);

  const toggle = (id: string) => {
    setPicked((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      const next = [...prev, id];
      return next.slice(-2); // selalu maksimal dua
    });
  };

  const key = [...picked].sort().join(",");
  const result = RESULTS[key];
  const dikorbankan = OPTIONS.find((o) => !picked.includes(o.id));

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔺 Simulator Trilemma Kebijakan</div>
      <p className="mb-4 text-xs text-ink-faint">
        Pilih dua tujuan yang ingin dicapai bersamaan. Yang ketiga otomatis harus dikorbankan. Inilah dilema mendasar
        kebijakan moneter di ekonomi terbuka.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {OPTIONS.map((o) => (
          <button key={o.id} onClick={() => toggle(o.id)} className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${picked.includes(o.id) ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft"}`}>
            {o.label}
          </button>
        ))}
      </div>

      {picked.length === 2 && result ? (
        <div className="rounded-xl border-2 border-brand-300 bg-canvas p-4">
          <div className="text-base font-extrabold text-brand-700">{result.judul}</div>
          <p className="mt-2 text-sm text-ink-soft">{result.desc}</p>
          <div className="mt-3 rounded-lg bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700">
            Dikorbankan: {dikorbankan?.label}
          </div>
        </div>
      ) : (
        <div className="rounded-xl bg-canvas p-4 text-sm text-ink-faint">Pilih tepat dua tujuan untuk melihat hasilnya.</div>
      )}
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Tidak ada negara yang bisa meraih ketiganya sekaligus. Memilih dua selalu berarti melepaskan yang ketiga.
      </p>
    </div>
  );
}
