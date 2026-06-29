import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Proof of Work vs Proof of Stake: dua mekanisme konsensus berdampingan.
const Kolom: React.FC<{
  judul: string;
  warna: string;
  poin: string[];
  delay: number;
  x: number;
}> = ({ judul, warna, poin, delay, x }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div
      style={{
        position: "absolute",
        top: 150,
        left: x,
        width: 520,
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        border: `2px solid ${warna}`,
        borderRadius: 22,
        padding: "26px 28px",
        boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
      }}
    >
      <div style={{ fontSize: 30, fontWeight: 800, color: warna }}>{judul}</div>
      <div style={{ height: 2, background: warna, opacity: 0.3, margin: "14px 0" }} />
      {poin.map((p, i) => (
        <PoinBaris key={i} text={p} warna={warna} delay={delay + 12 + i * 14} />
      ))}
    </div>
  );
};

const PoinBaris: React.FC<{ text: string; warna: string; delay: number }> = ({ text, warna, delay }) => {
  const o = useFade(delay, 14);
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginTop: 14, opacity: o }}>
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: 6,
          background: warna,
          marginTop: 7,
          flexShrink: 0,
        }}
      />
      <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>{text}</div>
    </div>
  );
};

export const KonsensusVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = interpolate(frame % 40, [0, 20, 40], [0.4, 1, 0.4]);
  const note = useFade(160, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Konsensus: Proof of Work vs Proof of Stake" sub="Dua cara jaringan menyepakati blok yang sah" />

      <Kolom
        judul="Proof of Work"
        warna={palette.kewajiban}
        x={50}
        delay={20}
        poin={[
          "Penambang berlomba menebak nilai hash yang benar.",
          "Butuh daya komputasi dan energi yang sangat besar.",
          "Pemenang berhak menambah blok dan dapat imbalan.",
          "Aman, tetapi boros listrik dan lambat.",
        ]}
      />

      <Kolom
        judul="Proof of Stake"
        warna={palette.aset}
        x={620}
        delay={48}
        poin={[
          "Validator dipilih sesuai jumlah stake yang dikunci.",
          "Hemat energi karena tanpa perlombaan hash.",
          "Berlaku jujur diberi imbalan, curang kena slashing.",
          "Lebih cepat dan ramah lingkungan.",
        ]}
      />

      <div
        style={{
          position: "absolute",
          top: 222,
          left: 596,
          fontSize: 26,
          fontWeight: 800,
          color: palette.muted,
          opacity: pulse,
        }}
      >
        vs
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: 50,
          right: 50,
          opacity: note,
          fontSize: 19,
          color: palette.muted,
        }}
      >
        PoW membeli keamanan dengan energi, PoS membelinya dengan modal yang dipertaruhkan. Validator nakal pada PoS bisa kehilangan sebagian stake lewat slashing.
      </div>
    </AbsoluteFill>
  );
};

export const KonsensusVideoDuration = 200;
