import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, Chip, Arrow, useFade } from "./anim";

export const TransferPricingVideo: React.FC = () => {
  const note = useFade(180, 18);
  const warn = useFade(140, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Transfer Pricing & Arm's Length" sub="Harga ke afiliasi harus sewajar transaksi dengan pihak bebas" />
      <div style={{ marginTop: 50, display: "flex", alignItems: "center", justifyContent: "center", gap: 18, flexWrap: "wrap" }}>
        <Chip label="PT di Indonesia" value="Biaya Rp100 jt" bg={palette.ekuitas} delay={20} width={200} />
        <Arrow delay={45} label="jual ke afiliasi" />
        <Chip label="Harga tak wajar" value="Rp110 jt" bg={palette.kredit} fg="#fff" delay={60} />
        <Chip label="Harga wajar" value="Rp125 jt" bg={palette.aset} delay={90} />
      </div>
      <div style={{ marginTop: 34, textAlign: "center", opacity: warn }}>
        <span style={{ fontSize: 17, color: palette.kewajiban, fontWeight: 700 }}>
          Laba kurang dilaporkan Rp15 jt. DJP mengoreksi dan menambah pajak.
        </span>
      </div>
      <div style={{ marginTop: 40, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Menggeser laba ke afiliasi berpajak rendah memicu koreksi. Dokumentasi transfer pricing wajib disiapkan.
      </div>
    </AbsoluteFill>
  );
};

export const TransferPricingVideoDuration = 210;
