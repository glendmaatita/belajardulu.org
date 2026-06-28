import { useMemo, useState } from "react";

// AD-AS: guncangan permintaan/penawaran agregat menggeser keseimbangan (output & tingkat harga).
type Guncangan = "Stimulus fiskal/moneter (AD naik)" | "Pengetatan (AD turun)" | "Lonjakan biaya energi (AS turun)" | "Teknologi membaik (AS naik)";

const EFEK: Record<Guncangan, { output: string; harga: string; narasi: string }> = {
  "Stimulus fiskal/moneter (AD naik)": { output: "naik", harga: "naik", narasi: "Permintaan agregat bergeser kanan: output naik, tetapi tingkat harga juga naik (risiko inflasi bila kapasitas penuh)." },
  "Pengetatan (AD turun)": { output: "turun", harga: "turun", narasi: "Permintaan agregat bergeser kiri: output dan harga turun (inflasi ditekan, tetapi pertumbuhan melambat)." },
  "Lonjakan biaya energi (AS turun)": { output: "turun", harga: "naik", narasi: "Penawaran agregat bergeser kiri: output turun sekaligus harga naik. Inilah stagflasi, kombinasi yang sulit." },
  "Teknologi membaik (AS naik)": { output: "naik", harga: "turun", narasi: "Penawaran agregat bergeser kanan: output naik dan harga turun. Skenario paling ideal." },
};

const LIST: Guncangan[] = ["Stimulus fiskal/moneter (AD naik)", "Pengetatan (AD turun)", "Lonjakan biaya energi (AS turun)", "Teknologi membaik (AS naik)"];

export function SimulatorADAS() {
  const [g, setG] = useState<Guncangan>("Stimulus fiskal/moneter (AD naik)");
  const d = useMemo(() => EFEK[g], [g]);

  const Badge = ({ label, arah }: { label: string; arah: string }) => {
    const naik = arah === "naik";
    return (
      <div className={`rounded-xl p-4 text-center ${naik ? "bg-emerald-50" : "bg-rose-50"}`}>
        <div className="text-xs text-ink-faint">{label}</div>
        <div className={`text-xl font-extrabold ${naik ? "text-emerald-700" : "text-rose-700"}`}>{naik ? "Naik ▲" : "Turun ▼"}</div>
      </div>
    );
  };

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📊 Simulator AD-AS</div>
      <p className="mb-4 text-xs text-ink-faint">
        Pilih sebuah guncangan ekonomi dan lihat dampaknya pada output riil (PDB) dan tingkat harga lewat model permintaan-penawaran agregat.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {LIST.map((x) => (
          <button key={x} onClick={() => setG(x)} className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${g === x ? "bg-brand-600 text-white" : "bg-slate-100 text-ink-soft hover:bg-slate-200"}`}>
            {x}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Badge label="Output riil (PDB)" arah={d.output} />
        <Badge label="Tingkat harga" arah={d.harga} />
      </div>

      <p className="mt-3 text-sm text-ink-soft">{d.narasi}</p>
      <p className="mt-2 text-xs text-ink-faint">
        Guncangan permintaan menggerakkan output dan harga searah; guncangan penawaran menggerakkannya berlawanan. Stagflasi (output turun, harga naik) paling sulit ditangani kebijakan biasa.
      </p>
    </div>
  );
}
