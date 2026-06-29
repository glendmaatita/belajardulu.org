import { useMemo, useState } from "react";

// FNV-1a 32-bit deterministik. Ilustratif, bukan SHA-256 sungguhan.
function fnv1a(input: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return h.toString(16).padStart(8, "0").slice(0, 8);
}

const JUMLAH_PILIHAN = [4, 8];

// Merkle tree: satu data berubah -> hash daun berubah -> seluruh jalur sampai root ikut berubah.
export function SimulatorMerkleTree() {
  const [jumlah, setJumlah] = useState(4);
  const [diubah, setDiubah] = useState<number | null>(null);

  const pohon = useMemo(() => {
    // Nilai daun: bila TX diubah, tambahkan penanda agar isinya berbeda.
    const daun = Array.from({ length: jumlah }, (_, i) => {
      const isi = diubah === i ? `TX${i + 1}:diubah` : `TX${i + 1}:asli`;
      return fnv1a(isi);
    });

    // Bangun level demi level sampai tersisa satu (root).
    const level: string[][] = [daun];
    let kini = daun;
    while (kini.length > 1) {
      const atas: string[] = [];
      for (let i = 0; i < kini.length; i += 2) {
        atas.push(fnv1a(kini[i] + kini[i + 1]));
      }
      level.push(atas);
      kini = atas;
    }
    return level;
  }, [jumlah, diubah]);

  // Tandai simpul yang termasuk jalur dari daun yang diubah menuju root.
  const jalurBerubah = useMemo(() => {
    const set = new Set<string>();
    if (diubah === null) return set;
    let idx = diubah;
    for (let lv = 0; lv < pohon.length; lv++) {
      set.add(`${lv}-${idx}`);
      idx = Math.floor(idx / 2);
    }
    return set;
  }, [diubah, pohon]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌳 Simulator Merkle Tree</div>
      <p className="mb-4 text-xs text-ink-faint">
        Tiap transaksi diringkas jadi hash. Hash digabung berpasangan naik sampai satu Merkle root. Ubah satu transaksi
        dan lihat seluruh jalur sampai root ikut berubah.
      </p>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold text-ink-soft">Jumlah transaksi:</span>
        {JUMLAH_PILIHAN.map((j) => (
          <button
            key={j}
            onClick={() => {
              setJumlah(j);
              setDiubah(null);
            }}
            className={`rounded-lg px-3 py-1 text-sm font-bold ${
              jumlah === j ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft"
            }`}
          >
            {j} TX
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {pohon
          .slice()
          .reverse()
          .map((level, ri) => {
            const lv = pohon.length - 1 - ri;
            const isRoot = lv === pohon.length - 1;
            const isDaun = lv === 0;
            return (
              <div key={lv}>
                <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
                  {isRoot ? "Merkle root" : isDaun ? "Hash daun (transaksi)" : `Simpul level ${lv}`}
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {level.map((hash, ni) => {
                    const berubah = jalurBerubah.has(`${lv}-${ni}`);
                    return (
                      <div
                        key={ni}
                        className={`rounded-xl border px-3 py-2 text-center ${
                          isRoot
                            ? "min-w-[120px] border-violet-300 bg-violet-50"
                            : "min-w-[96px] border-line bg-canvas"
                        } ${berubah ? "ring-2 ring-rose-400" : ""}`}
                      >
                        {isDaun && (
                          <div className="text-[11px] font-bold text-ink-soft">
                            TX{ni + 1}
                            {diubah === ni ? " (diubah)" : ""}
                          </div>
                        )}
                        <div
                          className={`tnum font-mono text-xs font-bold ${
                            berubah ? "text-rose-600" : isRoot ? "text-violet-700" : "text-ink"
                          }`}
                        >
                          {hash}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {Array.from({ length: jumlah }, (_, i) => (
          <button
            key={i}
            onClick={() => setDiubah(diubah === i ? null : i)}
            className={`rounded-lg px-3 py-1 text-xs font-bold ${
              diubah === i ? "bg-rose-500 text-white" : "bg-canvas text-ink-soft"
            }`}
          >
            {diubah === i ? `Kembalikan TX${i + 1}` : `Ubah TX${i + 1}`}
          </button>
        ))}
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        {diubah === null ? (
          <>Belum ada transaksi yang diubah. Klik salah satu tombol di atas.</>
        ) : (
          <>
            Kamu mengubah <b>TX{diubah + 1}</b>. Perhatikan jalur merah dari daun itu sampai ke root: <b>semua ikut
            berubah</b>. Inilah cara Merkle tree mendeteksi pemalsuan data dengan cepat.
          </>
        )}
      </p>
      <p className="mt-2 text-[11px] text-ink-faint">
        Catatan: hash di sini ilustratif (FNV-1a pendek), bukan SHA-256 yang dipakai blockchain sungguhan.
      </p>
    </div>
  );
}
