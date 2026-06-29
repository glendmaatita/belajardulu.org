import { useRef, useState } from "react";

// Hash deterministik ~64 hex char (varian FNV-1a, ilustrasi). Bukan SHA-256 asli.
function fnv(str: string, seed: number): number {
  let h = seed >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

// 8 seed berbeda x 8 hex = 64 hex char. Tiap seed juga mencampur panjang teks
// agar tiap segmen tergantung seluruh isi masukan.
function hash64(str: string): string {
  const seeds = [2166136261, 0x811c9dc5, 0x1234567, 0x9e3779b1, 0x85ebca6b, 0xc2b2ae35, 0x27d4eb2f, 0x165667b1];
  let out = "";
  for (let s = 0; s < seeds.length; s++) {
    const v = fnv(str + "|" + s + "|" + str.length, seeds[s]);
    out += (v >>> 0).toString(16).padStart(8, "0");
  }
  return out;
}

export function SimulatorHashKripto() {
  const [teks, setTeks] = useState("Halo dunia kripto");
  const prevRef = useRef<{ teks: string; hash: string }>({ teks: "Halo dunia kripto", hash: hash64("Halo dunia kripto") });

  const hashSekarang = hash64(teks);
  const { teks: teksLama, hash: hashLama } = prevRef.current;

  // Hitung berapa banyak karakter hex yang berbeda dari hash sebelumnya.
  let beda = 0;
  for (let i = 0; i < hashSekarang.length; i++) {
    if (hashSekarang[i] !== hashLama[i]) beda++;
  }
  const persenBeda = (beda / hashSekarang.length) * 100;
  const adaPerubahan = teks !== teksLama;

  function ubah(nilai: string) {
    // Simpan hash teks sebelumnya sebagai pembanding sebelum memperbarui.
    prevRef.current = { teks, hash: hashSekarang };
    setTeks(nilai);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌊 Simulator Efek Longsor (Avalanche)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Fungsi hash kriptografi bersifat sensitif: ubah satu karakter saja, dan hasilnya berubah total. Ketik perlahan dan
        amati berapa banyak karakter hash yang langsung berbeda.
      </p>

      <label className="mb-1 block text-xs font-semibold text-ink-faint">Masukan</label>
      <input
        type="text"
        value={teks}
        onChange={(e) => ubah(e.target.value)}
        className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink focus:border-brand-500 focus:outline-none"
      />

      <div className="mt-4 rounded-xl bg-canvas p-3">
        <div className="mb-1 text-xs text-ink-faint">Hash hex (64 karakter)</div>
        <div className="break-all font-mono text-sm leading-relaxed">
          {hashSekarang.split("").map((c, i) => (
            <span key={i} className={adaPerubahan && c !== hashLama[i] ? "rounded bg-rose-200 text-rose-800" : "text-ink"}>
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-4 text-center">
          <div className="text-xs text-ink-faint">Karakter hash yang berubah</div>
          <div className="text-2xl font-extrabold tnum text-rose-700">{beda} / 64</div>
        </div>
        <div className="rounded-xl bg-canvas p-4 text-center">
          <div className="text-xs text-ink-faint">Persentase perbedaan</div>
          <div className="text-2xl font-extrabold tnum text-violet-700">{persenBeda.toFixed(0)}%</div>
        </div>
      </div>

      <p className="mt-4 text-xs text-ink-faint">
        {adaPerubahan
          ? `Perubahan kecil pada masukan membuat sekitar ${persenBeda.toFixed(0)}% karakter hash ikut berubah. Idealnya mendekati 50%, sehingga mustahil menebak isi dari hash-nya.`
          : "Ubah masukan untuk membandingkan dengan hash sebelumnya."}{" "}
        Hash di sini ilustrasi (varian FNV-1a), bukan SHA-256 asli.
      </p>
    </div>
  );
}
