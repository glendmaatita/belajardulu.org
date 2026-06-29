import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Garis waktu singkat lahirnya Bitcoin: whitepaper 2008 hingga blok genesis 2009.
const kronologi = [
  {
    tahun: "Okt 2008",
    judul: "Whitepaper terbit",
    isi: "Satoshi Nakamoto merilis makalah \"Bitcoin: A Peer-to-Peer Electronic Cash System\".",
  },
  {
    tahun: "3 Jan 2009",
    judul: "Blok genesis",
    isi: "Blok pertama (block 0) ditambang, menandai mulainya jaringan Bitcoin.",
  },
  {
    tahun: "9 Jan 2009",
    judul: "Perangkat lunak rilis",
    isi: "Klien Bitcoin versi awal dirilis sebagai sumber terbuka untuk siapa pun.",
  },
  {
    tahun: "Ide inti",
    judul: "Uang tanpa bank",
    isi: "Kirim nilai langsung antar orang (peer-to-peer) tanpa perantara perbankan.",
  },
];

const Kartu: React.FC<{
  tahun: string;
  judul: string;
  isi: string;
  delay: number;
  accent: string;
}> = ({ tahun, judul, isi, delay, accent }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        borderRadius: 16,
        padding: "18px 22px",
        borderLeft: `6px solid ${accent}`,
        boxShadow: "0 16px 44px rgba(0,0,0,0.32)",
        fontFamily: font,
        flex: 1,
      }}
    >
      <div style={{ fontSize: 16, fontWeight: 700, color: accent }}>{tahun}</div>
      <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginTop: 4 }}>{judul}</div>
      <div style={{ fontSize: 16, color: palette.muted, marginTop: 8, lineHeight: 1.4 }}>{isi}</div>
    </div>
  );
};

export const LahirnyaBitcoinVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const lineGrow = interpolate(frame, [24, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const note = useFade(160, 18);
  const colors = [palette.kewajiban, palette.aset, palette.ekuitas, palette.accent];

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Lahirnya Bitcoin" sub="Dari sebuah makalah menjadi jaringan uang digital pertama" />

      <div style={{ position: "relative", marginTop: 34 }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "2%",
            width: `${lineGrow * 96}%`,
            height: 4,
            background: palette.accent,
            borderRadius: 4,
          }}
        />
        <div style={{ display: "flex", gap: 18, marginTop: 22 }}>
          {kronologi.map((k, i) => (
            <Kartu
              key={k.judul}
              tahun={k.tahun}
              judul={k.judul}
              isi={k.isi}
              delay={28 + i * 24}
              accent={colors[i]}
            />
          ))}
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 19, color: palette.muted, lineHeight: 1.5 }}>
        Satoshi Nakamoto adalah nama samaran, identitas aslinya masih misteri hingga kini. Yang pasti, idenya
        membuka era uang elektronik yang berjalan tanpa bank pusat.
      </div>
    </AbsoluteFill>
  );
};

export const LahirnyaBitcoinVideoDuration = 200;
