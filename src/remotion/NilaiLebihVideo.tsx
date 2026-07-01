import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, Chip, Arrow, useFade } from "./anim";

// Sirkuit kapital M-C-M': uang dipakai membeli komoditas (tenaga kerja + alat),
// menghasilkan komoditas baru yang dijual dengan nilai lebih besar (M').
export const NilaiLebihVideo: React.FC = () => {
  const note = useFade(185, 18);
  const surplus = useFade(150, 16);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Nilai Lebih: Sirkuit M - C - M'" sub="Menurut Marx, laba lahir dari kerja yang tak dibayar" />
      <div style={{ marginTop: 60, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        <Chip label="Modal awal (M)" value="Rp100" bg={palette.ekuitas} delay={20} />
        <Arrow delay={45} label="beli tenaga kerja + alat" />
        <Chip label="Produksi (C)" value="Buruh bekerja" bg={palette.kewajiban} delay={60} />
        <Arrow delay={85} label="jual komoditas" />
        <Chip label="Modal akhir (M')" value="Rp120" bg={palette.aset} delay={100} />
      </div>
      <div style={{ marginTop: 46, textAlign: "center", opacity: surplus }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: palette.kredit }}>Nilai lebih = M' - M = Rp20</div>
        <div style={{ fontSize: 15, color: palette.muted, marginTop: 6 }}>Selisih ini, kata Marx, berasal dari kerja buruh yang tidak dibayar penuh.</div>
      </div>
      <div style={{ marginTop: 34, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Buruh menciptakan nilai lebih besar daripada upah yang diterimanya; selisihnya diambil pemilik modal.
      </div>
    </AbsoluteFill>
  );
};

export const NilaiLebihVideoDuration = 215;
