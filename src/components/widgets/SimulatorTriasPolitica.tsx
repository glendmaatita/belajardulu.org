import { useMemo, useState } from "react";

// Semakin banyak pilar pengawasan yang independen, semakin kecil risiko kekuasaan
// menumpuk di satu tangan. Matikan satu per satu dan lihat skor kesehatan demokrasi.
const PILAR = [
  { key: "legislatif", label: "Legislatif independen", ket: "Parlemen bebas mengkritik & mengawasi" },
  { key: "yudikatif", label: "Yudikatif independen", ket: "Pengadilan tak bisa ditekan penguasa" },
  { key: "pers", label: "Pers bebas", ket: "Media boleh memberitakan tanpa takut" },
  { key: "pemilu", label: "Pemilu jujur & berkala", ket: "Kekuasaan bisa berganti lewat suara" },
] as const;

export function SimulatorTriasPolitica() {
  const [on, setOn] = useState<Record<string, boolean>>({ legislatif: true, yudikatif: true, pers: true, pemilu: true });

  const r = useMemo(() => {
    const aktif = PILAR.filter((p) => on[p.key]).length;
    const skor = (aktif / PILAR.length) * 100;
    const status = skor === 100
      ? { t: "Demokrasi sehat", c: "bg-emerald-50 text-emerald-700" }
      : skor >= 50
      ? { t: "Demokrasi rapuh", c: "bg-amber-50 text-amber-700" }
      : { t: "Menuju otoritarianisme", c: "bg-rose-50 text-rose-700" };
    return { aktif, skor, status };
  }, [on]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏛️ Simulator Pengawasan Kekuasaan</div>
      <p className="mb-4 text-xs text-ink-faint">
        Demokrasi bukan hanya pemilu. Matikan satu per satu pilar pengawasan dan lihat bagaimana kekuasaan mulai menumpuk.
      </p>

      <div className="space-y-2">
        {PILAR.map((p) => (
          <label key={p.key} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-colors ${on[p.key] ? "border-emerald-300 bg-emerald-50" : "border-rose-200 bg-rose-50"}`}>
            <input type="checkbox" checked={on[p.key]} onChange={(e) => setOn((s) => ({ ...s, [p.key]: e.target.checked }))} className="h-4 w-4 accent-brand-600" />
            <span>
              <span className="block text-sm font-bold text-ink">{p.label}</span>
              <span className="block text-xs text-ink-faint">{p.ket}</span>
            </span>
            <span className={`ml-auto text-xs font-bold ${on[p.key] ? "text-emerald-600" : "text-rose-600"}`}>{on[p.key] ? "aktif" : "lumpuh"}</span>
          </label>
        ))}
      </div>

      <div className={`mt-4 rounded-xl p-4 text-center ${r.status.c}`}>
        <div className="text-xs text-ink-faint">{r.aktif} dari 4 pilar pengawasan aktif</div>
        <div className="text-3xl font-extrabold tnum">{r.skor.toFixed(0)}%</div>
        <div className="text-sm font-semibold">{r.status.t}</div>
      </div>
      <p className="mt-2 text-xs text-ink-faint">Kemunduran demokrasi biasanya melumpuhkan pilar-pilar ini satu per satu, bukan sekaligus.</p>
    </div>
  );
}
