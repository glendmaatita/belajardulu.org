import { useState } from "react";
import { rupiah } from "../../lib/format";

type Status = "menunggu" | "terkunci" | "rilis" | "refund";

// Smart contract escrow: kode menahan dana dan merilisnya sesuai aturan, tanpa perantara manusia.
export function SimulatorEscrowKontrak() {
  const harga = 5_000_000; // nilai transaksi
  const [status, setStatus] = useState<Status>("menunggu");

  // Saldo dihitung dari status agar selalu konsisten.
  const saldoPembeli = status === "menunggu" ? harga : status === "refund" ? harga : 0;
  const saldoKontrak = status === "terkunci" ? harga : 0;
  const saldoPenjual = status === "rilis" ? harga : 0;

  const info: Record<Status, { label: string; tone: string; pesan: string }> = {
    menunggu: { label: "Menunggu Dana", tone: "bg-slate-100 text-slate-700", pesan: "Kontrak siap. Pembeli belum mengirim dana." },
    terkunci: { label: "Dana Terkunci", tone: "bg-amber-100 text-amber-700", pesan: "Dana aman di dalam kontrak. Penjual boleh mengirim barang karena tahu uangnya sudah terkunci." },
    rilis: { label: "Dirilis ke Penjual", tone: "bg-emerald-100 text-emerald-700", pesan: "Pembeli konfirmasi terima. Kontrak otomatis mengirim dana ke penjual." },
    refund: { label: "Dikembalikan ke Pembeli", tone: "bg-rose-100 text-rose-700", pesan: "Refund diajukan. Kontrak otomatis mengembalikan dana ke pembeli." },
  };

  const cur = info[status];

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔐 Simulator Escrow Smart Contract</div>
      <p className="mb-4 text-xs text-ink-faint">
        Escrow menahan dana sampai syarat terpenuhi. Di blockchain, perannya digantikan kode yang mengeksekusi aturan secara otomatis.
      </p>

      <div className="mb-4 flex items-center justify-between rounded-xl bg-canvas p-4">
        <span className="text-sm font-semibold text-ink-soft">Status kontrak</span>
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${cur.tone}`}>{cur.label}</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Saldo label="Pembeli" value={saldoPembeli} color="text-blue-700" />
        <Saldo label="Kontrak" value={saldoKontrak} color="text-amber-700" />
        <Saldo label="Penjual" value={saldoPenjual} color="text-emerald-700" />
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <button
          onClick={() => setStatus("terkunci")}
          disabled={status !== "menunggu"}
          className="rounded-xl border border-line bg-canvas px-3 py-2 text-sm font-bold text-ink-soft disabled:opacity-40"
        >
          Pembeli kirim dana
        </button>
        <button
          onClick={() => setStatus("rilis")}
          disabled={status !== "terkunci"}
          className="rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700 disabled:opacity-40"
        >
          Pembeli konfirmasi terima
        </button>
        <button
          onClick={() => setStatus("refund")}
          disabled={status !== "terkunci"}
          className="rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-sm font-bold text-rose-700 disabled:opacity-40"
        >
          Ajukan refund
        </button>
      </div>

      <div className={`mt-4 rounded-xl p-3 text-sm ${cur.tone}`}>{cur.pesan}</div>

      {status !== "menunggu" && (
        <button onClick={() => setStatus("menunggu")} className="mt-3 text-xs font-bold text-brand-700 underline">
          Ulang dari awal
        </button>
      )}

      <p className="mt-3 text-xs text-ink-faint">
        Tidak ada bank atau notaris yang menahan uang. Aturan ditulis dalam kode dan dijalankan apa adanya, sehingga kedua pihak tidak perlu saling percaya secara buta.
      </p>
    </div>
  );
}

function Saldo({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="rounded-xl bg-canvas p-3 text-center">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-base font-extrabold tnum ${color}`}>{rupiah(value)}</div>
    </div>
  );
}
