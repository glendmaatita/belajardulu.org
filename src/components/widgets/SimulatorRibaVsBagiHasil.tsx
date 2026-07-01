import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Membandingkan pinjaman berbunga (konvensional) dengan pembiayaan bagi hasil
// (syariah) pada berbagai skenario hasil usaha. Pada bunga, kewajiban tetap
// meski rugi; pada bagi hasil, imbalan mengikuti hasil usaha nyata.
export function SimulatorRibaVsBagiHasil() {
  const [modal, setModal] = useState(100_000_000);
  const [hasilUsaha, setHasilUsaha] = useState(20_000_000); // laba (bisa negatif)
  const [bunga, setBunga] = useState(12); // % bunga tetap konvensional
  const [nisbahPemodal, setNisbahPemodal] = useState(40); // % bagi hasil ke pemodal

  const r = useMemo(() => {
    // Konvensional: peminjam wajib bayar bunga tetap apa pun hasilnya
    const kewajibanBunga = modal * (bunga / 100);
    const sisaPengusahaKonv = hasilUsaha - kewajibanBunga;
    // Syariah: pemodal dapat porsi laba; jika rugi, pemodal menanggung
    const bagianPemodalSyariah = hasilUsaha < 0 ? hasilUsaha : hasilUsaha * (nisbahPemodal / 100);
    const sisaPengusahaSyariah = hasilUsaha < 0 ? 0 : hasilUsaha * (1 - nisbahPemodal / 100);
    return { kewajibanBunga, sisaPengusahaKonv, bagianPemodalSyariah, sisaPengusahaSyariah };
  }, [modal, hasilUsaha, bunga, nisbahPemodal]);

  const rugi = hasilUsaha < 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Simulator Riba vs Bagi Hasil</div>
      <p className="mb-4 text-xs text-ink-faint">
        Bandingkan pinjaman berbunga dengan pembiayaan bagi hasil pada berbagai hasil usaha. Perhatikan siapa
        menanggung risiko saat usaha merugi.
      </p>

      <Slider label="Modal / pinjaman" value={modal} min={10_000_000} max={500_000_000} step={10_000_000} fmt={rupiah} onChange={setModal} />
      <Slider label="Hasil usaha (negatif = rugi)" value={hasilUsaha} min={-40_000_000} max={100_000_000} step={5_000_000} fmt={rupiah} onChange={setHasilUsaha} />
      <Slider label="Bunga tetap (konvensional)" value={bunga} min={5} max={24} step={1} fmt={(n) => `${n}%`} onChange={setBunga} />
      <Slider label="Nisbah bagi hasil ke pemodal (syariah)" value={nisbahPemodal} min={10} max={70} step={5} fmt={(n) => `${n}%`} onChange={setNisbahPemodal} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-rose-50 p-4">
          <div className="text-sm font-bold text-rose-700">Konvensional (bunga)</div>
          <div className="mt-1 text-xs text-ink-faint">Wajib bayar bunga {rupiah(Math.round(r.kewajibanBunga))}</div>
          <div className="text-[11px] text-ink-faint">Sisa untuk pengusaha: {rupiah(Math.round(r.sisaPengusahaKonv))}</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4">
          <div className="text-sm font-bold text-emerald-700">Syariah (bagi hasil)</div>
          <div className="mt-1 text-xs text-ink-faint">Pemodal terima {rupiah(Math.round(r.bagianPemodalSyariah))}</div>
          <div className="text-[11px] text-ink-faint">Sisa untuk pengusaha: {rupiah(Math.round(r.sisaPengusahaSyariah))}</div>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        {rugi
          ? "Saat rugi, skema bunga tetap menuntut pembayaran sehingga pengusaha makin terpuruk; skema bagi hasil membuat pemodal ikut menanggung risiko."
          : "Saat untung, keduanya memberi imbalan; bedanya, bagi hasil menautkan imbalan pemodal pada hasil usaha nyata, bukan angka tetap."}
      </p>
    </div>
  );
}

function Slider({ label, value, min, max, step, fmt, onChange }: { label: string; value: number; min: number; max: number; step: number; fmt: (n: number) => string; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
