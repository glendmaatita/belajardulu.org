import { useMemo, useState } from "react";

// Latihan dialektika Hegel: dari tesis & antitesis, pilih sintesis terbaik.
const SOAL = [
  {
    tesis: "Kebebasan individu harus mutlak, tanpa batasan apa pun.",
    antitesis: "Negara harus mengatur segala hal demi ketertiban bersama.",
    opsi: [
      "Kebebasan individu dijamin, tetapi dibatasi aturan yang melindungi kebebasan orang lain.",
      "Kebebasan individu dihapus sepenuhnya.",
      "Negara dibubarkan agar tiap orang bebas total.",
    ],
    jawab: 0,
    ket: "Sintesis memadukan kebenaran kedua sisi: kebebasan tetap ada, namun diatur agar tidak merugikan sesama.",
  },
  {
    tesis: "Pengetahuan sepenuhnya berasal dari akal (rasionalisme).",
    antitesis: "Pengetahuan sepenuhnya berasal dari pengalaman (empirisme).",
    opsi: [
      "Akal mengolah data dari pengalaman; keduanya dibutuhkan (sintesis Kant).",
      "Hanya akal yang dipakai, pengalaman diabaikan.",
      "Pengetahuan itu mustahil, jadi tak perlu dibahas.",
    ],
    jawab: 0,
    ket: "Kant menyatukan keduanya: pengalaman memberi bahan, akal memberi bentuk. Inilah contoh sintesis klasik.",
  },
  {
    tesis: "Hanya materi yang nyata (materialisme).",
    antitesis: "Hanya ide atau pikiran yang nyata (idealisme).",
    opsi: [
      "Kenyataan punya sisi materi dan sisi kesadaran yang saling terkait.",
      "Tidak ada apa pun yang nyata.",
      "Materi dan ide adalah hal yang persis sama tanpa beda.",
    ],
    jawab: 0,
    ket: "Sintesis mengakui kedua aspek: dunia fisik dan kesadaran sama-sama nyata dan saling berhubungan.",
  },
  {
    tesis: "Tradisi lama harus dipertahankan apa adanya.",
    antitesis: "Semua tradisi lama harus dibuang demi yang serba baru.",
    opsi: [
      "Pertahankan nilai tradisi yang masih relevan sambil membarui yang sudah usang.",
      "Tolak semua hal baru tanpa kecuali.",
      "Hapus seluruh masa lalu tanpa menimbang manfaatnya.",
    ],
    jawab: 0,
    ket: "Sintesis menyaring: mengambil yang baik dari tradisi dan dari pembaruan, bukan memilih satu secara ekstrem.",
  },
];

export function SimulatorDialektika() {
  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState<number | null>(null);
  const s = SOAL[idx];
  const benar = useMemo(() => pilih !== null && pilih === s.jawab, [pilih, s]);

  function lanjut() {
    setPilih(null);
    setIdx((i) => (i + 1) % SOAL.length);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">☯️ Simulator Dialektika</div>
      <p className="mb-4 text-xs text-ink-faint">Dari tesis dan antitesis berikut, pilih sintesis terbaik yang memadukan kebenaran kedua sisi (pola tesis, antitesis, sintesis ala Hegel).</p>

      <div className="space-y-2">
        <div className="rounded-lg border-l-4 border-emerald-400 bg-emerald-50 p-3 text-sm">
          <span className="font-bold text-emerald-700">TESIS: </span>
          <span className="text-ink-soft">{s.tesis}</span>
        </div>
        <div className="rounded-lg border-l-4 border-rose-400 bg-rose-50 p-3 text-sm">
          <span className="font-bold text-rose-600">ANTITESIS: </span>
          <span className="text-ink-soft">{s.antitesis}</span>
        </div>
      </div>

      <p className="mt-3 text-xs font-bold text-ink-faint">Pilih sintesis:</p>
      <div className="mt-1 space-y-2">
        {s.opsi.map((o, i) => (
          <button
            key={i}
            onClick={() => pilih === null && setPilih(i)}
            disabled={pilih !== null}
            className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
              pilih !== null && i === s.jawab
                ? "bg-emerald-500 text-white"
                : pilih === i
                ? "bg-rose-400 text-white"
                : "bg-slate-100 text-ink-soft hover:bg-slate-200"
            }`}
          >
            {o}
          </button>
        ))}
      </div>

      {pilih !== null && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${benar ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
          {benar ? "Tepat! " : "Belum tepat. "}
          {s.ket}
          <button onClick={lanjut} className="ml-2 rounded-md bg-brand-600 px-3 py-1 text-xs font-bold text-white">Soal berikutnya</button>
        </div>
      )}
    </div>
  );
}
