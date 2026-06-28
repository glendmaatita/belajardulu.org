import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Wizard ramah pemula: masukkan jenis usaha + omzet, lihat kewajiban pajaknya.
export function CekStatusPajak() {
  const [badan, setBadan] = useState(false);
  const [omzet, setOmzet] = useState(800_000_000);

  const r = useMemo(() => {
    const wajibPKP = omzet > 4_800_000_000;
    const skemaFinal = omzet <= 4_800_000_000;
    return { wajibPKP, skemaFinal };
  }, [omzet]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔎 Cek Kewajiban Pajakmu</div>
      <p className="mb-4 text-xs text-ink-faint">Jawab 2 hal, langsung tahu pajak apa saja yang jadi kewajibanmu.</p>

      <div className="mb-4 flex gap-2">
        <Toggle active={!badan} onClick={() => setBadan(false)} label="👤 Orang Pribadi" />
        <Toggle active={badan} onClick={() => setBadan(true)} label="🏢 Badan (PT/CV)" />
      </div>

      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">Perkiraan omzet setahun</span>
        <span className="tnum text-sm font-bold text-ink">{rupiah(omzet)}</span>
      </div>
      <input
        type="range"
        min={0}
        max={8_000_000_000}
        step={100_000_000}
        value={omzet}
        onChange={(e) => setOmzet(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600"
      />

      <div className="mt-5 space-y-2.5">
        <Diag
          icon="🪪"
          title="NPWP / NIK"
          ok
          text="Wajib punya NPWP (untuk orang pribadi, NIK kini berfungsi sebagai NPWP)."
        />
        <Diag
          icon="🧾"
          title="Pajak Penghasilan (PPh)"
          ok={r.skemaFinal}
          text={
            r.skemaFinal
              ? "Boleh pakai skema mudah: PPh Final UMKM 0,5% dari omzet."
              : "Omzet di atas Rp4,8 miliar: wajib pembukuan dan pakai tarif normal (bukan 0,5% lagi)."
          }
        />
        <Diag
          icon="🏷️"
          title="PPN & status PKP"
          ok={!r.wajibPKP}
          text={
            r.wajibPKP
              ? "Wajib dikukuhkan sebagai PKP dan memungut PPN 11% dari pembeli, lalu menyetorkannya."
              : "Belum wajib PKP. Boleh memilih jadi non-PKP, jadi tidak perlu memungut PPN."
          }
        />
        <Diag
          icon="🗓️"
          title="Lapor SPT"
          ok
          text={
            badan
              ? "Wajib lapor SPT Tahunan Badan (plus SPT Masa bila ada karyawan/PPN)."
              : "Wajib lapor SPT Tahunan Orang Pribadi setiap tahun, walau pajaknya Rp0."
          }
        />
      </div>

      <p className="mt-4 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Ringkasan: {badan ? "Badan usaha" : "Usaha perorangan"} dengan omzet {rupiah(omzet)}{" "}
        {r.skemaFinal ? "cocok dengan skema UMKM yang sederhana." : "sudah masuk kategori usaha menengah/besar."}
      </p>
    </div>
  );
}

function Diag({ icon, title, ok, text }: { icon: string; title: string; ok: boolean; text: string }) {
  return (
    <div className={`flex items-start gap-3 rounded-xl border p-3 ${ok ? "border-emerald-200 bg-emerald-50/50" : "border-amber-200 bg-amber-50/60"}`}>
      <span className="text-xl">{icon}</span>
      <div>
        <div className="text-sm font-bold text-ink">
          {title} {ok ? <span className="text-emerald-600">✓</span> : <span className="text-amber-600">⚠️</span>}
        </div>
        <div className="text-sm text-ink-soft">{text}</div>
      </div>
    </div>
  );
}

function Toggle({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
        active ? "border-brand-400 bg-brand-50 text-brand-700" : "border-slate-200 bg-white text-ink-faint"
      }`}
    >
      {label}
    </button>
  );
}
