import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, Chip, Arrow, useFade } from "./anim";

// Digital Rupiah: uang digital bank sentral (CBDC) sebagai pelengkap uang kartal
// dan giral, diterbitkan langsung oleh Bank Indonesia.
export const DigitalRupiahVideo: React.FC = () => {
  const note = useFade(180, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Rupiah Digital (CBDC)" sub="Uang digital yang diterbitkan langsung bank sentral" />
      <div style={{ marginTop: 56, display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
        <Chip label="Uang kartal" value="Kertas & logam" bg={palette.kewajiban} delay={20} width={170} />
        <Chip label="Uang giral" value="Saldo bank" bg={palette.ekuitas} delay={40} width={170} />
        <Chip label="Rupiah digital" value="CBDC oleh BI" bg={palette.accent} fg="#fff" delay={60} width={180} />
      </div>
      <div style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <Chip label="Bank Indonesia" value="Terbitkan & jamin" bg={palette.aset} delay={110} width={210} />
        <Arrow delay={135} label="distribusi" />
        <Chip label="Masyarakat & bank" value="Transaksi digital" bg={palette.bgSoft} fg={palette.text} delay={150} width={210} />
      </div>
      <div style={{ marginTop: 42, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        CBDC adalah kewajiban langsung bank sentral, berbeda dari uang elektronik swasta atau kripto.
      </div>
    </AbsoluteFill>
  );
};

export const DigitalRupiahVideoDuration = 205;
