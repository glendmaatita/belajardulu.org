import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, Chip, Arrow, useFade } from "./anim";

export const WithholdingTaxVideo: React.FC = () => {
  const note = useFade(180, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Alur Withholding Tax" sub="Pajak dipotong di sumber, disetor pemotong, jadi kredit penerima" />
      <div style={{ marginTop: 56, display: "flex", alignItems: "center", justifyContent: "center", gap: 18, flexWrap: "wrap" }}>
        <Chip label="Pembayar (pemotong)" value="Bayar jasa Rp100 jt" bg={palette.ekuitas} delay={20} width={210} />
        <Arrow delay={45} label="potong 2%" />
        <Chip label="Dipotong PPh 23" value="Rp2 jt" bg={palette.kredit} fg="#fff" delay={60} />
        <Arrow delay={85} label="setor & lapor" />
        <Chip label="Kas negara" value="Rp2 jt" bg={palette.aset} delay={100} />
      </div>
      <div style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 18 }}>
        <Chip label="Penyedia terima" value="Rp98 jt" bg={palette.bgSoft} fg={palette.text} delay={130} width={190} />
        <Arrow delay={150} label="bukti potong" />
        <Chip label="Kredit pajak di SPT" value="Rp2 jt" bg={palette.accent} fg="#fff" delay={160} width={210} />
      </div>
      <div style={{ marginTop: 40, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Withholding mempercepat penerimaan negara dan menyebar kepatuhan. Bagi penerima, bukti potong mengurangi pajak akhir.
      </div>
    </AbsoluteFill>
  );
};

export const WithholdingTaxVideoDuration = 210;
