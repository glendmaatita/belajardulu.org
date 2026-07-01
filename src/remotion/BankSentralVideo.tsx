import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

const roles = [
  { label: "Menjaga inflasi", c: "#34d399" },
  { label: "Stabilkan rupiah", c: "#60a5fa" },
  { label: "Atur sistem pembayaran", c: "#fbbf24" },
  { label: "Lender of last resort", c: "#fb7185" },
];

export const BankSentralVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(175, 18);
  const coreGrow = interpolate(frame - 20, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Peran Bank Sentral" sub="Bank Indonesia sebagai penjaga nilai rupiah" />
      <div style={{ marginTop: 30, display: "flex", justifyContent: "center" }}>
        <div style={{ opacity: coreGrow, transform: `scale(${coreGrow})`, background: palette.accent, color: "#fff", borderRadius: 16, padding: "16px 30px", fontSize: 24, fontWeight: 900 }}>
          BANK INDONESIA
        </div>
      </div>
      <div style={{ marginTop: 34, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
        {roles.map((r, i) => {
          const grow = interpolate(frame - (45 + i * 18), [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ opacity: grow, transform: `translateY(${(1 - grow) * 16}px)`, background: palette.bgSoft, border: `2px solid ${r.c}`, borderRadius: 12, padding: "16px", textAlign: "center" }}>
              <span style={{ fontSize: 17, fontWeight: 700, color: r.c }}>{r.label}</span>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 32, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Tujuan utama BI adalah mencapai dan memelihara kestabilan nilai rupiah, dari inflasi sampai nilai tukar.
      </div>
    </AbsoluteFill>
  );
};

export const BankSentralVideoDuration = 205;
