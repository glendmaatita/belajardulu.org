import { useMemo, useState } from "react";

// Keunggulan komparatif (David Ricardo): sebuah negara sebaiknya berspesialisasi
// pada barang dengan biaya peluang terendah, lalu berdagang. Kedua negara untung
// meski satu lebih unggul mutlak pada keduanya.
export function SimulatorKeunggulanKomparatif() {
  // jam kerja untuk memproduksi 1 unit
  const [aKain, setAKain] = useState(2); // Negara A: jam per kain
  const [aAnggur, setAAnggur] = useState(4); // Negara A: jam per anggur
  const [bKain, setBKain] = useState(6); // Negara B: jam per kain
  const [bAnggur, setBAnggur] = useState(8); // Negara B: jam per anggur

  const r = useMemo(() => {
    // biaya peluang 1 kain = berapa anggur yang dikorbankan = (jam kain)/(jam anggur)
    const opA = aKain / aAnggur; // kain dalam satuan anggur
    const opB = bKain / bAnggur;
    // negara dengan biaya peluang kain lebih rendah punya keunggulan komparatif pada kain
    const kainOleh = opA < opB ? "Negara A" : "Negara B";
    const anggurOleh = opA < opB ? "Negara B" : "Negara A";
    return { opA, opB, kainOleh, anggurOleh };
  }, [aKain, aAnggur, bKain, bAnggur]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌍 Simulator Keunggulan Komparatif</div>
      <p className="mb-4 text-xs text-ink-faint">
        Atur jam kerja tiap negara untuk memproduksi 1 unit kain dan anggur. Negara sebaiknya berspesialisasi pada
        barang dengan biaya peluang terendah, lalu berdagang. Keduanya bisa untung (gagasan David Ricardo, 1817).
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-3">
          <div className="mb-2 text-sm font-bold text-sky-700">Negara A (jam per unit)</div>
          <Slider label="Kain" value={aKain} min={1} max={10} onChange={setAKain} />
          <Slider label="Anggur" value={aAnggur} min={1} max={10} onChange={setAAnggur} />
        </div>
        <div className="rounded-xl bg-canvas p-3">
          <div className="mb-2 text-sm font-bold text-amber-700">Negara B (jam per unit)</div>
          <Slider label="Kain" value={bKain} min={1} max={10} onChange={setBKain} />
          <Slider label="Anggur" value={bAnggur} min={1} max={10} onChange={setBAnggur} />
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Box label="Biaya peluang 1 kain (Negara A)" value={`${r.opA.toFixed(2)} anggur`} color="text-sky-700" />
        <Box label="Biaya peluang 1 kain (Negara B)" value={`${r.opB.toFixed(2)} anggur`} color="text-amber-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Spesialisasi ideal: <strong>{r.kainOleh}</strong> memproduksi kain, <strong>{r.anggurOleh}</strong> memproduksi
        anggur, lalu keduanya berdagang. Total produksi dunia naik dibanding tanpa perdagangan.
      </p>
    </div>
  );
}

function Box({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-xl bg-canvas p-4">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${color}`}>{value}</div>
    </div>
  );
}

function Slider({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (n: number) => void }) {
  return (
    <div className="mb-2">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-xs font-bold text-ink">{value} jam</span>
      </div>
      <input type="range" min={min} max={max} step={1} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
