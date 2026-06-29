import { useState } from "react";

// Hash sederhana deterministik (FNV-1a varian) untuk ilustrasi. Bukan SHA-256 asli.
function fnv(str: string, seed: number): number {
  let h = seed >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

function hashHex(str: string): string {
  const a = fnv(str, 2166136261);
  const b = fnv(str + "#", 0x811c9dc5);
  return ((a >>> 0).toString(16).padStart(8, "0") + (b >>> 0).toString(16).padStart(8, "0")).slice(0, 10);
}

const GENESIS = "0000000000";

export function SimulatorBlokHash() {
  const [data, setData] = useState<string[]>(["Andi kirim 5 ke Budi", "Budi kirim 2 ke Citra", "Citra kirim 1 ke Doni"]);
  // prevHash yang "tersimpan" dalam tiap blok saat terakhir ditambang.
  const [prev, setPrev] = useState<string[]>([GENESIS, hashHex("Andi kirim 5 ke Budi" + GENESIS), hashHex("Budi kirim 2 ke Citra" + hashHex("Andi kirim 5 ke Budi" + GENESIS))]);

  // Hash hidup tiap blok dihitung dari data + prevHash tersimpan.
  const hash = data.map((d, i) => hashHex(d + prev[i]));

  // Blok valid bila prevHash tersimpan cocok dengan hash blok sebelumnya,
  // dan seluruh rantai sebelumnya juga valid.
  const valid: boolean[] = [];
  for (let i = 0; i < 3; i++) {
    if (i === 0) valid.push(prev[0] === GENESIS);
    else valid.push(valid[i - 1] && prev[i] === hash[i - 1]);
  }

  const semuaValid = valid.every(Boolean);

  function ubahData(i: number, nilai: string) {
    const next = data.slice();
    next[i] = nilai;
    setData(next);
  }

  function tambangUlang() {
    // Set ulang seluruh prevHash agar rantai kembali konsisten.
    const h1 = hashHex(data[0] + GENESIS);
    const h2 = hashHex(data[1] + h1);
    setPrev([GENESIS, h1, h2]);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⛓️ Simulator Rantai Blok</div>
      <p className="mb-4 text-xs text-ink-faint">
        Tiap blok menyimpan hash blok sebelumnya. Ubah data sebuah blok, lalu lihat blok itu dan semua blok sesudahnya menjadi
        tidak valid karena hash tidak lagi cocok. Inilah yang membuat data lama sulit dipalsukan.
      </p>

      <div className="space-y-3">
        {data.map((d, i) => (
          <div key={i} className={`rounded-xl border p-3 ${valid[i] ? "border-emerald-300 bg-emerald-50" : "border-rose-300 bg-rose-50"}`}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-bold text-ink-soft">Blok #{i + 1}</span>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${valid[i] ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>
                {valid[i] ? "Valid" : "Tidak valid"}
              </span>
            </div>
            <label className="mb-1 block text-xs font-semibold text-ink-faint">Data</label>
            <input
              type="text"
              value={d}
              onChange={(e) => ubahData(i, e.target.value)}
              className="w-full rounded-lg border border-line bg-white px-3 py-1.5 text-sm text-ink focus:border-brand-500 focus:outline-none"
            />
            <div className="mt-2 grid gap-1 text-xs">
              <div className="flex justify-between gap-2">
                <span className="text-ink-faint">Prev hash</span>
                <span className={`tnum font-mono ${i > 0 && prev[i] !== hash[i - 1] ? "text-rose-600" : "text-ink-soft"}`}>{prev[i]}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-ink-faint">Hash</span>
                <span className="tnum font-mono font-bold text-ink">{hash[i]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <span className={`text-sm font-bold ${semuaValid ? "text-emerald-700" : "text-rose-700"}`}>
          {semuaValid ? "Rantai konsisten" : "Rantai rusak, perlu ditambang ulang"}
        </span>
        <button onClick={tambangUlang} className="rounded-lg bg-brand-600 px-4 py-1.5 text-sm font-bold text-white hover:bg-brand-700">
          Tambang ulang
        </button>
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        Hash di sini hanya ilustrasi (varian FNV-1a), bukan SHA-256 asli yang dipakai Bitcoin. Tujuannya menunjukkan prinsip
        keterkaitan antar blok.
      </p>
    </div>
  );
}
