import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, Chip, Arrow, useFade } from "./anim";

// Sukuk bukan surat utang berbunga, melainkan bukti kepemilikan atas aset atau
// proyek; imbal hasilnya berasal dari sewa atau bagi hasil aset itu.
export const SukukVideo: React.FC = () => {
  const note = useFade(185, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Sukuk: Bukan Obligasi Biasa" sub="Bukti kepemilikan aset, imbal hasil dari sewa atau bagi hasil" />
      <div style={{ marginTop: 52, display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
        <Chip label="Investor beli sukuk" value="Dana masuk" bg={palette.ekuitas} delay={20} width={190} />
        <Arrow delay={45} label="danai aset/proyek" />
        <Chip label="Aset nyata" value="Gedung, jalan, dll" bg={palette.kewajiban} delay={60} width={180} />
      </div>
      <div style={{ marginTop: 38, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
        <Chip label="Aset menghasilkan" value="Sewa / bagi hasil" bg={palette.aset} delay={110} width={200} />
        <Arrow delay={135} label="imbal hasil berkala" />
        <Chip label="Investor menerima" value="Bukan bunga" bg={palette.accent} fg="#fff" delay={150} width={190} />
      </div>
      <div style={{ marginTop: 42, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Karena bersandar aset nyata, sukuk terhindar dari riba. Pemerintah menerbitkan Sukuk Negara sejak 2008.
      </div>
    </AbsoluteFill>
  );
};

export const SukukVideoDuration = 210;
