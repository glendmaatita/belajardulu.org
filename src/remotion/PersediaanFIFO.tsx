import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

interface BoxDef {
  label: string;
  harga: string;
  color: string;
  enter: number; // frame masuk
  exit?: number; // frame keluar (terjual)
}

const boxes: BoxDef[] = [
  { label: "Lot A", harga: "@10rb", color: palette.aset, enter: 25, exit: 120 },
  { label: "Lot B", harga: "@12rb", color: palette.kewajiban, enter: 50 },
  { label: "Lot C", harga: "@15rb", color: palette.ekuitas, enter: 75 },
];

const Box: React.FC<{ def: BoxDef; index: number }> = ({ def, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const inS = spring({ frame: frame - def.enter, fps, config: { damping: 16 } });
  const enterX = interpolate(inS, [0, 1], [400, 0]);
  let opacity = interpolate(frame - def.enter, [0, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  let exitX = 0;
  let sold = false;
  if (def.exit !== undefined && frame >= def.exit) {
    sold = true;
    const outS = spring({ frame: frame - def.exit, fps, config: { damping: 16 } });
    exitX = interpolate(outS, [0, 1], [0, -460]);
    opacity = interpolate(frame - def.exit, [0, 25], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  }
  return (
    <div
      style={{
        transform: `translateX(${enterX + exitX}px)`,
        opacity,
        background: def.color,
        color: "#06121f",
        borderRadius: 12,
        padding: "20px 26px",
        textAlign: "center",
        fontFamily: font,
        boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
        position: "relative",
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 800 }}>{def.label}</div>
      <div style={{ fontSize: 18, fontWeight: 600, opacity: 0.75 }}>{def.harga}</div>
      <div style={{ fontSize: 13, marginTop: 4, fontWeight: 700 }}>{index === 0 ? "masuk pertama" : ""}</div>
      {sold && (
        <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", fontSize: 13, color: palette.text, whiteSpace: "nowrap" }}>
          terjual →
        </div>
      )}
    </div>
  );
};

export const PersediaanFIFO: React.FC = () => {
  const frame = useCurrentFrame();
  const labelIn = useFade(15, 14);
  const concl = interpolate(frame, [150, 175], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, padding: "54px 70px", fontFamily: font }}>
      <Title text="FIFO, First In, First Out" sub="Barang yang masuk lebih dulu, dijual lebih dulu" />

      <div style={{ position: "relative", marginTop: 70, height: 160 }}>
        <div style={{ opacity: labelIn, position: "absolute", left: 0, top: -34, fontSize: 16, color: palette.kredit, fontWeight: 700 }}>
          ⬅ KELUAR (dijual)
        </div>
        <div style={{ opacity: labelIn, position: "absolute", right: 0, top: -34, fontSize: 16, color: palette.aset, fontWeight: 700 }}>
          MASUK (dibeli) ➡
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
            justifyContent: "center",
            height: 150,
            border: "2px dashed rgba(255,255,255,0.15)",
            borderRadius: 16,
            padding: 20,
          }}
        >
          {boxes.map((b, i) => (
            <Box key={b.label} def={b} index={i} />
          ))}
        </div>
      </div>

      <div
        style={{
          opacity: concl,
          marginTop: 50,
          background: "rgba(52,211,153,0.12)",
          border: "1px solid rgba(52,211,153,0.3)",
          borderRadius: 14,
          padding: "16px 22px",
          fontSize: 18,
          color: palette.text,
          lineHeight: 1.6,
        }}
      >
        💡 Saat menjual, biaya yang dipakai sebagai HPP diambil dari <b>Lot A (paling lama, @10rb)</b> dulu. Sisa
        persediaan = lot yang lebih baru (B &amp; C). Itulah inti <b>FIFO</b>.
      </div>
    </AbsoluteFill>
  );
};

export const PersediaanFIFODuration = 200;
