import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, Chip, Arrow, useFade } from "./anim";

// Dua sirkulasi: C-M-C (jual untuk beli, tujuan konsumsi) vs M-C-M' (beli untuk
// jual lebih mahal, tujuan akumulasi nilai lebih).
export const SirkuitKapitalVideo: React.FC = () => {
  const note = useFade(185, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Dua Sirkulasi: C-M-C vs M-C-M'" sub="Beda menjual untuk hidup dan membeli untuk menambah modal" />
      <div style={{ marginTop: 40 }}>
        <div style={{ fontSize: 16, color: palette.muted, marginBottom: 10 }}>Sirkulasi sederhana (rakyat biasa):</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <Chip label="Komoditas" value="C" bg={palette.ekuitas} delay={20} width={120} />
          <Arrow delay={40} label="jual" />
          <Chip label="Uang" value="M" bg={palette.kewajiban} delay={55} width={120} />
          <Arrow delay={70} label="beli" />
          <Chip label="Komoditas lain" value="C" bg={palette.aset} delay={85} width={140} />
        </div>
      </div>
      <div style={{ marginTop: 36 }}>
        <div style={{ fontSize: 16, color: palette.muted, marginBottom: 10 }}>Sirkulasi kapital (pemilik modal):</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <Chip label="Uang" value="M" bg={palette.kewajiban} delay={110} width={120} />
          <Arrow delay={130} label="beli" />
          <Chip label="Komoditas" value="C" bg={palette.ekuitas} delay={145} width={120} />
          <Arrow delay={160} label="jual" />
          <Chip label="Uang lebih besar" value="M'" bg={palette.kredit} fg="#fff" delay={172} width={150} />
        </div>
      </div>
      <div style={{ marginTop: 36, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Pada M-C-M', tujuannya bukan barang melainkan tambahan uang (M' = M + nilai lebih). Inilah logika kapital.
      </div>
    </AbsoluteFill>
  );
};

export const SirkuitKapitalVideoDuration = 215;
