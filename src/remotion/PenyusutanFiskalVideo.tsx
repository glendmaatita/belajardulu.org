import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Garis lurus: beban rata. Saldo menurun: beban besar di awal, mengecil.
const gl = [100, 100, 100, 100, 100, 100];
const sm = [180, 122, 83, 56, 38, 26];

const Bars: React.FC<{ data: number[]; color: string; label: string; delayBase: number }> = ({ data, color, label, delayBase }) => {
  const frame = useCurrentFrame();
  return (
    <div style={{ flex: 1 }}>
      <div style={{ textAlign: "center", fontSize: 18, fontWeight: 800, color, marginBottom: 12 }}>{label}</div>
      <div style={{ display: "flex", gap: 8, alignItems: "flex-end", justifyContent: "center", height: 220 }}>
        {data.map((v, i) => {
          const delay = delayBase + i * 8;
          const grow = interpolate(frame - delay, [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 34, height: v * grow, background: color, borderRadius: "6px 6px 0 0" }} />
              <div style={{ fontSize: 12, color: palette.muted, marginTop: 6 }}>Th{i + 1}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const PenyusutanFiskalVideo: React.FC = () => {
  const note = useFade(180, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Garis Lurus vs Saldo Menurun" sub="Dua metode penyusutan fiskal, total beban sama" />
      <div style={{ marginTop: 30, display: "flex", gap: 40 }}>
        <Bars data={gl} color={palette.ekuitas} label="Garis lurus (rata)" delayBase={30} />
        <Bars data={sm} color={palette.kewajiban} label="Saldo menurun (besar di awal)" delayBase={80} />
      </div>
      <div style={{ marginTop: 28, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Saldo menurun menggeser beban ke tahun-tahun awal, menunda pajak. Total penyusutan sepanjang umur aset identik.
      </div>
    </AbsoluteFill>
  );
};

export const PenyusutanFiskalVideoDuration = 220;
