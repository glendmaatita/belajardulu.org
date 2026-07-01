import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, Chip, Arrow, useFade } from "./anim";

// Akad murabahah: bank membeli barang, lalu menjualnya ke nasabah dengan margin
// yang disepakati terbuka, dibayar cicilan. Bukan pinjaman berbunga.
export const AkadJualBeliVideo: React.FC = () => {
  const note = useFade(185, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Akad Murabahah (Jual Beli)" sub="Bank membeli barang, lalu menjualnya dengan margin yang jelas" />
      <div style={{ marginTop: 54, display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
        <Chip label="Nasabah pesan" value="Ingin beli mobil" bg={palette.ekuitas} delay={20} width={180} />
        <Arrow delay={42} label="pesan" />
        <Chip label="Bank beli dari dealer" value="Rp200 jt" bg={palette.kewajiban} delay={58} width={190} />
        <Arrow delay={78} label="jual + margin" />
        <Chip label="Nasabah beli dari bank" value="Rp230 jt (cicil)" bg={palette.aset} delay={92} width={200} />
      </div>
      <div style={{ marginTop: 40, textAlign: "center", opacity: useFade(120, 16) }}>
        <span style={{ fontSize: 17, color: palette.accent, fontWeight: 700 }}>
          Margin Rp30 jt disepakati di awal secara transparan, bukan bunga yang berjalan
        </span>
      </div>
      <div style={{ marginTop: 36, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Karena bank benar-benar memiliki lalu menjual barang, keuntungannya sah sebagai laba jual beli, bukan riba.
      </div>
    </AbsoluteFill>
  );
};

export const AkadJualBeliVideoDuration = 215;
