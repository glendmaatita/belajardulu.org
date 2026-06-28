import { useMemo, useState } from "react";

// Peta interaktif cabang filsafat: klik cabang untuk melihat pertanyaan inti, tokoh, dan contoh.
const CABANG = [
  { nama: "Metafisika", ikon: "🌌", tanya: "Apa yang sungguh-sungguh ada?", tokoh: "Plato, Aristoteles", contoh: "Apakah jiwa terpisah dari tubuh? Apakah waktu nyata?" },
  { nama: "Epistemologi", ikon: "💡", tanya: "Apa itu pengetahuan & dari mana asalnya?", tokoh: "Descartes, Hume, Kant", contoh: "Bagaimana kita tahu sesuatu benar? Bisakah kita yakin?" },
  { nama: "Etika", ikon: "⚖️", tanya: "Apa yang benar dan baik dilakukan?", tokoh: "Aristoteles, Kant, Mill", contoh: "Bolehkah berbohong demi kebaikan?" },
  { nama: "Logika", ikon: "🧩", tanya: "Apa penalaran yang sahih?", tokoh: "Aristoteles, Frege", contoh: "Kapan sebuah kesimpulan mengikuti premisnya?" },
  { nama: "Estetika", ikon: "🎨", tanya: "Apa itu keindahan & seni?", tokoh: "Kant, Hume", contoh: "Apakah keindahan objektif atau selera pribadi?" },
];

export function PetaCabangFilsafat() {
  const [idx, setIdx] = useState(0);
  const c = useMemo(() => CABANG[idx], [idx]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🗺️ Peta Cabang Filsafat</div>
      <p className="mb-4 text-xs text-ink-faint">
        Klik tiap cabang filsafat untuk melihat pertanyaan intinya, tokoh, dan contoh persoalan yang dibahas.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {CABANG.map((x, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`rounded-lg px-3 py-1.5 text-sm font-bold transition ${idx === i ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft hover:bg-line"}`}>
            {x.ikon} {x.nama}
          </button>
        ))}
      </div>

      <div className="rounded-xl bg-canvas p-4">
        <div className="text-2xl font-extrabold text-ink">{c.ikon} {c.nama}</div>
        <div className="mt-3 space-y-2 text-sm">
          <Row label="Pertanyaan inti" value={c.tanya} />
          <Row label="Tokoh" value={c.tokoh} />
          <Row label="Contoh persoalan" value={c.contoh} />
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Kelima cabang saling terkait: etika butuh logika untuk beralasan, dan epistemologi menopang metafisika. Filsafat adalah jaringan pertanyaan, bukan daftar terpisah.
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="font-bold text-brand-700">{label}: </span>
      <span className="text-ink-soft">{value}</span>
    </div>
  );
}
