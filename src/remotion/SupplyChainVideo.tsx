import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

// Rantai pasok global: barang melintasi banyak simpul dari bahan baku sampai konsumen lintas negara.
const NODE = [
  { ikon: "⛏️", judul: "Bahan baku", ket: "Sumber daya & komoditas" },
  { ikon: "🏭", judul: "Produsen", ket: "Pengolahan & manufaktur" },
  { ikon: "🚢", judul: "Ekspor", ket: "Pelabuhan & pelayaran" },
  { ikon: "🛃", judul: "Pabean", ket: "Bea cukai negara tujuan" },
  { ikon: "🏬", judul: "Distributor", ket: "Gudang & grosir" },
  { ikon: "🛒", judul: "Konsumen", ket: "Pengguna akhir" },
];

export const SupplyChainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Rantai Pasok Global" sub="Barang melintasi banyak simpul dan negara sebelum sampai ke konsumen" />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 40, alignItems: "stretch" }}>
        {NODE.map((n, i) => {
          const { scale, opacity } = usePop(20 + i * 22);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 16, padding: "20px 18px", width: 200, textAlign: "center", boxShadow: "0 12px 36px rgba(0,0,0,0.3)" }}>
                <div style={{ fontSize: 38 }}>{n.ikon}</div>
                <div style={{ fontSize: 19, fontWeight: 800, color: palette.text, marginTop: 8 }}>{n.judul}</div>
                <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>{n.ket}</div>
              </div>
              {i < NODE.length - 1 && <div style={{ fontSize: 30, color: palette.muted, opacity }}>&rarr;</div>}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 34, fontSize: 18, color: palette.muted }}>
        Setiap simpul punya biaya, dokumen, dan risikonya sendiri. Ilmu ekspor-impor memastikan barang mengalir lancar, patuh aturan, dan hemat biaya.
      </div>
    </AbsoluteFill>
  );
};

export const SupplyChainVideoDuration = 200;
