import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, Chip, Arrow, useFade } from "./anim";

// Operasi Pasar Terbuka: jual SBI/obligasi menyerap uang (kontraktif),
// beli kembali menambah uang beredar (ekspansif).
export const OperasiPasarTerbukaVideo: React.FC = () => {
  const note = useFade(185, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Operasi Pasar Terbuka" sub="Bank sentral mengatur uang beredar lewat jual-beli surat berharga" />
      <div style={{ marginTop: 50, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        <Chip label="BI JUAL surat berharga" value="Serap uang" bg={palette.kewajiban} delay={20} width={210} />
        <Arrow delay={45} label="uang beredar turun" />
        <Chip label="Kontraktif" value="Tekan inflasi" bg={palette.kredit} fg="#fff" delay={60} width={190} />
      </div>
      <div style={{ marginTop: 38, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        <Chip label="BI BELI surat berharga" value="Suntik uang" bg={palette.aset} delay={110} width={210} />
        <Arrow delay={135} label="uang beredar naik" />
        <Chip label="Ekspansif" value="Dorong ekonomi" bg={palette.ekuitas} delay={150} width={190} />
      </div>
      <div style={{ marginTop: 42, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Dengan menjual atau membeli surat berharga, bank sentral menambah atau menyerap likuiditas di perbankan.
      </div>
    </AbsoluteFill>
  );
};

export const OperasiPasarTerbukaVideoDuration = 210;
