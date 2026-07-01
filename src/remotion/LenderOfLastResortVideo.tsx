import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, Chip, Arrow, useFade } from "./anim";

// Lender of last resort: saat panik dan bank sehat kehabisan likuiditas, bank
// sentral memberi pinjaman darurat untuk mencegah keruntuhan menular.
export const LenderOfLastResortVideo: React.FC = () => {
  const note = useFade(185, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Bank Sentral: Penyangga Terakhir" sub="Lender of last resort saat krisis likuiditas melanda" />
      <div style={{ marginTop: 52, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        <Chip label="Panik perbankan" value="Nasabah tarik dana" bg={palette.kewajiban} delay={20} width={210} />
        <Arrow delay={45} label="bank kekurangan likuiditas" />
        <Chip label="Bank sehat terancam" value="Bisa menular" bg={palette.kredit} fg="#fff" delay={60} width={190} />
      </div>
      <div style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <Chip label="Bank sentral" value="Pinjaman darurat" bg={palette.aset} delay={110} width={200} />
        <Arrow delay={135} label="suntik likuiditas" />
        <Chip label="Sistem stabil" value="Panik mereda" bg={palette.ekuitas} delay={150} width={190} />
      </div>
      <div style={{ marginTop: 42, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Prinsip klasik Bagehot: pinjamkan bebas ke bank yang sehat, dengan jaminan baik dan bunga penalti.
      </div>
    </AbsoluteFill>
  );
};

export const LenderOfLastResortVideoDuration = 210;
