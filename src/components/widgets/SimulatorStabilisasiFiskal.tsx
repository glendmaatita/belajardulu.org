import { useMemo, useState } from "react";

// Pilih kondisi ekonomi & stance kebijakan, lihat apakah tepat (kontra-siklus) atau keliru (pro-siklus).
type Kondisi = "Resesi (ekonomi lesu)" | "Normal" | "Overheating (inflasi tinggi)";
type Stance = "Ekspansif (tambah belanja, turunkan pajak)" | "Netral" | "Kontraktif (tahan belanja, naikkan pajak)";

const KONDISI: Kondisi[] = ["Resesi (ekonomi lesu)", "Normal", "Overheating (inflasi tinggi)"];
const STANCE: Stance[] = ["Ekspansif (tambah belanja, turunkan pajak)", "Netral", "Kontraktif (tahan belanja, naikkan pajak)"];

export function SimulatorStabilisasiFiskal() {
  const [kondisi, setKondisi] = useState<Kondisi>("Resesi (ekonomi lesu)");
  const [stance, setStance] = useState<Stance>("Ekspansif (tambah belanja, turunkan pajak)");

  const r = useMemo(() => {
    const tepat =
      (kondisi === "Resesi (ekonomi lesu)" && stance.startsWith("Ekspansif")) ||
      (kondisi === "Overheating (inflasi tinggi)" && stance.startsWith("Kontraktif")) ||
      (kondisi === "Normal" && stance.startsWith("Netral"));
    let narasi = "";
    if (tepat) {
      narasi = "Tepat (kontra-siklus): kebijakan bergerak melawan arah masalah, menstabilkan ekonomi.";
    } else if (
      (kondisi === "Resesi (ekonomi lesu)" && stance.startsWith("Kontraktif")) ||
      (kondisi === "Overheating (inflasi tinggi)" && stance.startsWith("Ekspansif"))
    ) {
      narasi = "Keliru (pro-siklus): kebijakan justru memperparah masalah. Resesi makin dalam atau inflasi makin tinggi.";
    } else {
      narasi = "Kurang optimal: kebijakan tidak merespons kondisi. Stabilisasi belum maksimal.";
    }
    return { tepat, narasi };
  }, [kondisi, stance]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎚️ Simulator Stabilisasi Fiskal</div>
      <p className="mb-4 text-xs text-ink-faint">
        Pilih kondisi ekonomi dan arah kebijakan fiskal, lalu cek apakah kombinasinya menstabilkan (kontra-siklus) atau justru memperburuk (pro-siklus).
      </p>

      <div className="mb-3">
        <div className="mb-1 text-sm font-semibold text-ink-soft">Kondisi ekonomi</div>
        <div className="flex flex-wrap gap-2">
          {KONDISI.map((k) => (
            <button key={k} onClick={() => setKondisi(k)} className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${kondisi === k ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft hover:bg-line"}`}>{k}</button>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-1 text-sm font-semibold text-ink-soft">Arah kebijakan fiskal</div>
        <div className="flex flex-col gap-2">
          {STANCE.map((s) => (
            <button key={s} onClick={() => setStance(s)} className={`rounded-lg px-3 py-2 text-left text-xs font-bold transition ${stance === s ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft hover:bg-line"}`}>{s}</button>
          ))}
        </div>
      </div>

      <div className={`mt-4 rounded-xl p-4 text-center text-sm font-semibold ${r.tepat ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"}`}>
        {r.narasi}
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Prinsip kontra-siklus: dorong ekonomi saat lesu (ekspansif), rem saat memanas (kontraktif). Kebijakan pro-siklus memperbesar gejolak dan harus dihindari.
      </p>
    </div>
  );
}
