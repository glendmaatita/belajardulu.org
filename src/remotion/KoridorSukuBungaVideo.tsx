import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Koridor suku bunga: fasilitas pinjaman (ceiling) di atas, suku bunga acuan di
// tengah, fasilitas simpanan (floor) di bawah. Suku bunga pasar bergerak di antaranya.
export const KoridorSukuBungaVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(180, 18);
  const grow = (d: number) => interpolate(frame - d, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const Bar: React.FC<{ y: number; label: string; val: string; c: string; d: number }> = ({ y, label, val, c, d }) => (
    <div style={{ position: "absolute", top: y, left: 0, right: 0, opacity: grow(d) }}>
      <div style={{ height: 3, background: c, width: "100%" }} />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
        <span style={{ fontSize: 15, color: c, fontWeight: 700 }}>{label}</span>
        <span style={{ fontSize: 15, color: palette.text, fontWeight: 800 }}>{val}</span>
      </div>
    </div>
  );
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Koridor Suku Bunga" sub="Bank sentral memagari pergerakan suku bunga antarbank" />
      <div style={{ position: "relative", height: 260, marginTop: 50, marginLeft: 40, marginRight: 40 }}>
        <Bar y={10} label="Fasilitas pinjaman (atap)" val="7,0%" c="#fb7185" d={40} />
        <Bar y={120} label="Suku bunga acuan (tengah)" val="6,0%" c="#60a5fa" d={20} />
        <Bar y={230} label="Fasilitas simpanan (lantai)" val="5,0%" c="#34d399" d={60} />
        <div style={{ position: "absolute", top: 130, left: "50%", opacity: grow(95), transform: "translateX(-50%)", background: palette.kewajiban, color: "#06121f", borderRadius: 999, padding: "4px 12px", fontSize: 13, fontWeight: 800 }}>
          Suku bunga pasar uang bergerak di sini
        </div>
      </div>
      <div style={{ marginTop: 20, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Lebar koridor (mis. plus minus 1% dari acuan) menjaga suku bunga antarbank tetap dekat dengan sasaran.
      </div>
    </AbsoluteFill>
  );
};

export const KoridorSukuBungaVideoDuration = 210;
