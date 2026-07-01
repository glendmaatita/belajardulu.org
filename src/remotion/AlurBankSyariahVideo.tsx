import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, Chip, Arrow, useFade } from "./anim";

// Bank syariah menghimpun dana (mudharabah) dan menyalurkan pembiayaan
// (jual beli/bagi hasil), lalu berbagi hasil dengan penabung. Tanpa bunga.
export const AlurBankSyariahVideo: React.FC = () => {
  const note = useFade(185, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Cara Kerja Bank Syariah" sub="Menghubungkan penabung dan pengusaha lewat bagi hasil, bukan bunga" />
      <div style={{ marginTop: 50, display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
        <Chip label="Penabung" value="Titip dana (mudharabah)" bg={palette.ekuitas} delay={20} width={200} />
        <Arrow delay={45} label="himpun" />
        <Chip label="Bank Syariah" value="Kelola sesuai syariah" bg={palette.accent} fg="#fff" delay={60} width={200} />
        <Arrow delay={85} label="salurkan" />
        <Chip label="Pengusaha" value="Pembiayaan usaha" bg={palette.aset} delay={100} width={190} />
      </div>
      <div style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
        <Chip label="Hasil usaha kembali" value="Bagi hasil" bg={palette.kewajiban} delay={130} width={200} />
        <Arrow delay={150} label="dibagi ke penabung" />
        <Chip label="Penabung dapat" value="Porsi bagi hasil" bg={palette.ekuitas} delay={162} width={200} />
      </div>
      <div style={{ marginTop: 40, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Imbal hasil penabung bergantung pada kinerja pembiayaan nyata, diawasi Dewan Pengawas Syariah.
      </div>
    </AbsoluteFill>
  );
};

export const AlurBankSyariahVideoDuration = 215;
