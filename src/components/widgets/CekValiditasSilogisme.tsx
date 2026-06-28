import { useMemo, useState } from "react";

// Latihan membedakan argumen valid (bentuk benar) dari yang tidak valid.
// Termasuk membedakan valid vs benar (sound).
const CONTOH = [
  {
    premis: ["Semua A adalah B.", "Semua B adalah C.", "Maka: Semua A adalah C."],
    valid: true,
    ket: "Valid (modus Barbara). Bentuknya sahih, kesimpulan mengikuti premis.",
  },
  {
    premis: ["Semua kucing adalah mamalia.", "Semua anjing adalah mamalia.", "Maka: Semua kucing adalah anjing."],
    valid: false,
    ket: "Tidak valid. Berbagi satu kategori (mamalia) tidak membuat keduanya sama.",
  },
  {
    premis: ["Jika hujan, jalan basah.", "Jalan basah.", "Maka: Pasti hujan."],
    valid: false,
    ket: "Tidak valid (menegaskan akibat). Jalan basah bisa karena sebab lain.",
  },
  {
    premis: ["Jika hujan, jalan basah.", "Hujan.", "Maka: Jalan basah."],
    valid: true,
    ket: "Valid (modus ponens). Bentuk penalaran yang sahih.",
  },
];

export function CekValiditasSilogisme() {
  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState<boolean | null>(null);
  const c = CONTOH[idx];
  const benar = useMemo(() => pilih !== null && pilih === c.valid, [pilih, c]);

  function jawab(v: boolean) {
    if (pilih !== null) return;
    setPilih(v);
  }
  function lanjut() {
    setPilih(null);
    setIdx((i) => (i + 1) % CONTOH.length);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⛓️ Cek Validitas Argumen</div>
      <p className="mb-4 text-xs text-ink-faint">
        Baca argumen berikut. Apakah bentuknya <b>valid</b> (kesimpulan mengikuti premis secara logis), terlepas dari benar atau tidaknya isi premis?
      </p>

      <div className="space-y-1.5 rounded-xl bg-canvas p-4">
        {c.premis.map((p, i) => (
          <div key={i} className={`text-sm ${i === c.premis.length - 1 ? "font-bold text-ink" : "text-ink-soft"}`}>{p}</div>
        ))}
      </div>

      <div className="mt-3 flex gap-2">
        <button onClick={() => jawab(true)} disabled={pilih !== null} className={`flex-1 rounded-lg py-2 text-sm font-bold transition ${pilih !== null && c.valid ? "bg-emerald-500 text-white" : pilih === true ? "bg-rose-400 text-white" : "bg-canvas text-ink-soft hover:bg-line"}`}>
          Valid
        </button>
        <button onClick={() => jawab(false)} disabled={pilih !== null} className={`flex-1 rounded-lg py-2 text-sm font-bold transition ${pilih !== null && !c.valid ? "bg-emerald-500 text-white" : pilih === false ? "bg-rose-400 text-white" : "bg-canvas text-ink-soft hover:bg-line"}`}>
          Tidak valid
        </button>
      </div>

      {pilih !== null && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${benar ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
          {benar ? "Tepat! " : "Belum tepat. "}{c.ket}
          <button onClick={lanjut} className="ml-2 rounded-md bg-brand-600 px-3 py-1 text-xs font-bold text-white">Argumen berikutnya</button>
        </div>
      )}

      <p className="mt-3 text-xs text-ink-faint">
        Ingat: <b>valid</b> berarti bentuknya benar (kesimpulan mengikuti premis). <b>Benar/sound</b> berarti valid DAN premisnya memang benar. Argumen bisa valid tetapi premisnya keliru.
      </p>
    </div>
  );
}
