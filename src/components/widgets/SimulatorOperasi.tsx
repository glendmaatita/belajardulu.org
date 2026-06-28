import { useState } from "react";

// Perkalian sebagai penjumlahan berulang: lihat kelompok, lalu rumusnya muncul.
export function SimulatorOperasi() {
  const [kelompok, setKelompok] = useState(4);
  const [isi, setIsi] = useState(3);
  const [reveal, setReveal] = useState(false);

  const rows = Array.from({ length: kelompok }, (_, i) => i);

  const Step = ({ label, val, set }: { label: string; val: number; set: (n: number) => void }) => (
    <div className="flex items-center gap-2">
      <span className="w-28 text-xs font-bold text-ink-faint">{label}</span>
      <button onClick={() => set(Math.max(1, val - 1))} className="h-7 w-7 rounded-md bg-slate-100 font-bold text-ink-soft hover:bg-slate-200">-</button>
      <span className="w-6 text-center font-bold tnum">{val}</span>
      <button onClick={() => set(Math.min(8, val + 1))} className="h-7 w-7 rounded-md bg-slate-100 font-bold text-ink-soft hover:bg-slate-200">+</button>
    </div>
  );

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">✖️ Simulator Perkalian</div>
      <p className="mb-4 text-xs text-ink-faint">Bayangkan {kelompok} teman, masing-masing diberi {isi} permen. Hitung dulu dengan menjumlah, baru lihat jalan pintasnya.</p>

      <div className="flex flex-col gap-2">
        <Step label="Banyak kelompok" val={kelompok} set={setKelompok} />
        <Step label="Isi tiap kelompok" val={isi} set={setIsi} />
      </div>

      <div className="mt-4 space-y-1.5">
        {rows.map((r) => (
          <div key={r} className="flex justify-center gap-1.5">
            {Array.from({ length: isi }, (_, c) => (
              <div key={c} className="h-6 w-6 rounded-full bg-brand-500" />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-3 text-center text-sm text-ink-soft">
        Menjumlah: {Array.from({ length: kelompok }, () => isi).join(" + ")} = <b className="tnum">{kelompok * isi}</b>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-center text-sm text-emerald-800">
          Daripada menjumlah berulang, cukup kalikan: <b className="tnum">{kelompok} × {isi} = {kelompok * isi}</b>. Perkalian adalah penjumlahan berulang yang dipadatkan.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Lihat jalan pintasnya</button>
      )}
    </div>
  );
}
