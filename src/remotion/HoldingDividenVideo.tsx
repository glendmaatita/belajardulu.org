import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, Chip, Arrow, useFade } from "./anim";

// UU HPP: dividen dari dalam negeri yang diterima WP badan dikecualikan dari
// objek pajak. Struktur holding memanfaatkan ini agar laba mengalir ke atas
// tanpa lapisan pajak tambahan.
export const HoldingDividenVideo: React.FC = () => {
  const note = useFade(180, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Holding & Dividen Antarperusahaan" sub="Dividen dalam negeri ke WP badan dikecualikan dari objek pajak" />
      <div style={{ marginTop: 50, display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
        <Chip label="Holding (induk)" value="Terima dividen bebas pajak" bg={palette.accent} fg="#fff" delay={120} width={300} />
        <Arrow delay={100} vertical label="dividen naik" />
        <div style={{ display: "flex", gap: 28 }}>
          <Chip label="Anak A" value="Laba kena 22%" bg={palette.ekuitas} delay={30} />
          <Chip label="Anak B" value="Laba kena 22%" bg={palette.aset} delay={50} />
          <Chip label="Anak C" value="Laba kena 22%" bg={palette.kewajiban} delay={70} />
        </div>
      </div>
      <div style={{ marginTop: 44, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Dengan struktur holding, dividen dari anak usaha dalam negeri mengalir ke induk tanpa lapisan PPh tambahan.
      </div>
    </AbsoluteFill>
  );
};

export const HoldingDividenVideoDuration = 200;
