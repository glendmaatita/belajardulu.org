import { useState } from "react";
import { angka } from "../../lib/format";

// FNV-1a 32-bit deterministik. Ilustratif, bukan SHA-256 sungguhan.
function fnv1a(input: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}

const MAKS_PERCOBAAN = 200000;

type Hasil = {
  ketemu: boolean;
  nonce: number;
  percobaan: number;
  hash: string;
};

// Proof of Work: cari nonce sampai hash diawali sejumlah nol. Makin sulit, makin banyak percobaan.
export function SimulatorMining() {
  const [kesulitan, setKesulitan] = useState(2);
  const [data, setData] = useState("Blok: kirim 5 BTC ke Budi");
  const [hasil, setHasil] = useState<Hasil | null>(null);

  function tambang() {
    const target = "0".repeat(kesulitan);
    for (let nonce = 0; nonce < MAKS_PERCOBAAN; nonce++) {
      const hash = fnv1a(data + "|" + nonce);
      if (hash.startsWith(target)) {
        setHasil({ ketemu: true, nonce, percobaan: nonce + 1, hash });
        return;
      }
    }
    setHasil({ ketemu: false, nonce: -1, percobaan: MAKS_PERCOBAAN, hash: "" });
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⛏️ Simulator Mining (Proof of Work)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Menambang berarti menebak angka (nonce) sampai hash blok diawali sejumlah nol yang diminta. Naikkan kesulitan dan
        lihat percobaan melonjak.
      </p>

      <div className="mb-4">
        <label className="mb-1 block text-sm font-semibold text-ink-soft">Data blok</label>
        <input
          type="text"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
            setHasil(null);
          }}
          className="w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm text-ink"
        />
      </div>

      <div className="mb-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-soft">Tingkat kesulitan (jumlah nol di depan)</span>
          <span className="tnum text-sm font-bold text-ink">{kesulitan}</span>
        </div>
        <input
          type="range"
          min={1}
          max={4}
          step={1}
          value={kesulitan}
          onChange={(e) => {
            setKesulitan(Number(e.target.value));
            setHasil(null);
          }}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
        />
        <div className="mt-1 text-xs text-ink-faint">
          Target: hash harus diawali <b className="tnum font-mono">{"0".repeat(kesulitan)}</b>
        </div>
      </div>

      <button onClick={tambang} className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-bold text-white">
        Tambang blok
      </button>

      {hasil && hasil.ketemu && (
        <div className="mt-4 rounded-xl bg-emerald-50 p-4">
          <div className="text-xs text-ink-faint">Blok berhasil ditambang</div>
          <div className="mt-1 grid gap-2 sm:grid-cols-3">
            <div>
              <div className="text-[11px] text-ink-faint">Nonce ditemukan</div>
              <div className="tnum text-xl font-extrabold text-emerald-700">{angka(hasil.nonce)}</div>
            </div>
            <div>
              <div className="text-[11px] text-ink-faint">Jumlah percobaan</div>
              <div className="tnum text-xl font-extrabold text-emerald-700">{angka(hasil.percobaan)}</div>
            </div>
            <div>
              <div className="text-[11px] text-ink-faint">Hash valid</div>
              <div className="tnum break-all font-mono text-sm font-bold text-emerald-700">{hasil.hash}</div>
            </div>
          </div>
        </div>
      )}

      {hasil && !hasil.ketemu && (
        <div className="mt-4 rounded-xl bg-rose-50 p-4 text-sm text-rose-700">
          Tidak ditemukan dalam {angka(MAKS_PERCOBAAN)} percobaan. Kesulitan terlalu tinggi untuk data ini. Coba ubah
          data blok atau turunkan kesulitan.
        </div>
      )}

      <p className="mt-3 text-xs text-ink-faint">
        Tiap nol tambahan membuat target makin langka, jadi rata-rata percobaan naik berlipat. Beginilah jaringan
        blockchain mengatur agar menambang butuh kerja komputasi nyata.
      </p>
      <p className="mt-2 text-[11px] text-ink-faint">
        Catatan: hash di sini ilustratif (FNV-1a), bukan SHA-256 yang dipakai blockchain sungguhan.
      </p>
    </div>
  );
}
