import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, Chip, Arrow, useFade } from "./anim";

// PPN PMSE: penjual luar negeri yang menjual barang/jasa digital ke konsumen
// Indonesia ditunjuk memungut PPN 11%. Plus Pilar Satu untuk realokasi hak pajak.
export const PajakDigitalVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(180, 18);
  const ppnGrow = interpolate(frame - 100, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Pajak Ekonomi Digital" sub="Memajaki nilai yang tercipta tanpa kehadiran fisik" />
      <div style={{ marginTop: 50, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        <Chip label="Platform digital global" value="Langganan & aplikasi" bg={palette.bgSoft} fg={palette.text} delay={20} width={230} />
        <Arrow delay={45} label="jual ke konsumen RI" />
        <Chip label="Konsumen Indonesia" value="Bayar + PPN 11%" bg={palette.ekuitas} delay={60} width={210} />
      </div>
      <div style={{ marginTop: 32, textAlign: "center", opacity: ppnGrow }}>
        <span style={{ fontSize: 17, color: palette.kewajiban, fontWeight: 700 }}>
          Penjual luar negeri ditunjuk sebagai pemungut PPN PMSE dan menyetorkannya ke Indonesia
        </span>
      </div>
      <div style={{ marginTop: 36, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Ekonomi digital menantang aturan lama yang berbasis kehadiran fisik, memunculkan PPN PMSE dan Pilar Satu.
      </div>
    </AbsoluteFill>
  );
};

export const PajakDigitalVideoDuration = 210;
