import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Royalti NFT: smart contract bisa membayar kreator otomatis di tiap penjualan sekunder (resale).
export function SimulatorRoyaltiNFT() {
  const [hargaAwal, setHargaAwal] = useState(5_000_000); // harga jual pertama (primary sale)
  const [royalti, setRoyalti] = useState(10); // % royalti kreator per resale
  const [jumlahResale, setJumlahResale] = useState(5); // berapa kali dijual ulang
  const [kenaikan, setKenaikan] = useState(20); // % kenaikan harga tiap resale

  const r = useMemo(() => {
    const faktor = 1 + kenaikan / 100;
    let hargaSekarang = hargaAwal;
    let totalRoyalti = 0;
    let totalVolume = 0;
    const harga: number[] = [];
    for (let i = 0; i < jumlahResale; i++) {
      // tiap resale harga naik dulu dari harga transaksi sebelumnya
      hargaSekarang = hargaSekarang * faktor;
      harga.push(hargaSekarang);
      totalVolume += hargaSekarang;
      totalRoyalti += hargaSekarang * (royalti / 100);
    }
    return { totalRoyalti, totalVolume, harga };
  }, [hargaAwal, royalti, jumlahResale, kenaikan]);

  const maxHarga = Math.max(...r.harga, 1);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎨 Simulator Royalti NFT</div>
      <p className="mb-4 text-xs text-ink-faint">
        Berbeda dari karya fisik, NFT bisa membayar royalti ke kreator secara otomatis setiap kali karya dijual ulang. Atur skenarionya dan lihat total royalti yang mengalir ke kreator.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Harga jual pertama" value={hargaAwal} set={setHargaAwal} min={1_000_000} max={50_000_000} step={1_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Royalti kreator" value={royalti} set={setRoyalti} min={0} max={15} step={1} fmt={(v) => `${v}%`} />
        <Slider label="Jumlah penjualan ulang" value={jumlahResale} set={setJumlahResale} min={1} max={10} step={1} fmt={(v) => `${v}x`} />
        <Slider label="Kenaikan harga per resale" value={kenaikan} set={setKenaikan} min={0} max={50} step={5} fmt={(v) => `+${v}%`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-4 text-center">
          <div className="text-xs text-ink-faint">Total royalti untuk kreator</div>
          <div className="text-2xl font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.totalRoyalti))}</div>
        </div>
        <div className="rounded-xl bg-canvas p-4 text-center">
          <div className="text-xs text-ink-faint">Total volume perdagangan sekunder</div>
          <div className="text-2xl font-extrabold tnum text-violet-700">{rupiah(Math.round(r.totalVolume))}</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="mb-2 text-xs font-semibold text-ink-soft">Harga tiap penjualan ulang</div>
        <div className="flex items-end gap-1.5" style={{ height: "96px" }}>
          {r.harga.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center justify-end">
              <div className="w-full rounded-t bg-violet-400" style={{ height: `${(h / maxHarga) * 100}%` }} />
              <div className="mt-1 text-[10px] text-ink-faint">#{i + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Dengan royalti <b>{royalti}%</b>, kreator tetap menerima penghasilan setiap kali karyanya berpindah tangan, totalnya <b>{rupiah(Math.round(r.totalRoyalti))}</b> dari {jumlahResale} penjualan ulang. Aturan ini tertanam di smart contract, jadi berjalan otomatis tanpa perlu menagih.
      </p>
    </div>
  );
}

function Slider({ label, value, set, min, max, step, fmt }: { label: string; value: number; set: (n: number) => void; min: number; max: number; step: number; fmt: (v: number) => string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
