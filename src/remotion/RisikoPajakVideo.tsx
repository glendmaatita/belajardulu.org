import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, Chip, Arrow, useFade } from "./anim";

export const RisikoPajakVideo: React.FC = () => {
  const note = useFade(185, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Daur Risiko & Pemeriksaan Pajak" sub="Dari pelaporan sampai sengketa, kelola sebelum jadi denda" />
      <div style={{ marginTop: 50, display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
        <Chip label="Lapor SPT" value="Patuh tepat waktu" bg={palette.aset} delay={20} width={180} />
        <Arrow delay={42} />
        <Chip label="Pemeriksaan" value="Audit DJP" bg={palette.kewajiban} delay={56} width={170} />
        <Arrow delay={78} />
        <Chip label="SKP terbit" value="Kurang bayar?" bg={palette.kredit} fg="#fff" delay={92} width={180} />
      </div>
      <div style={{ marginTop: 36, display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
        <Chip label="Keberatan" value="ke DJP" bg={palette.bgSoft} fg={palette.text} delay={120} width={160} />
        <Arrow delay={140} />
        <Chip label="Banding" value="Pengadilan Pajak" bg={palette.ekuitas} delay={154} width={190} />
      </div>
      <div style={{ marginTop: 42, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Dokumentasi rapi dan tax control framework menekan risiko sengketa, sanksi bunga, dan denda.
      </div>
    </AbsoluteFill>
  );
};

export const RisikoPajakVideoDuration = 215;
