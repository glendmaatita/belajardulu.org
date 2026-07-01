import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

const stages = [
  { label: "Barter", desc: "Tukar barang langsung", c: "#fb7185" },
  { label: "Uang logam", desc: "Emas & perak", c: "#fbbf24" },
  { label: "Uang kertas", desc: "Dijamin negara", c: "#34d399" },
  { label: "Uang giral", desc: "Saldo & transfer", c: "#60a5fa" },
  { label: "Uang digital", desc: "Elektronik & CBDC", c: "#a78bfa" },
];

export const SejarahUangVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(175, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Evolusi Uang" sub="Dari barter sampai uang digital" />
      <div style={{ marginTop: 56, display: "flex", gap: 12, justifyContent: "center" }}>
        {stages.map((s, i) => {
          const grow = interpolate(frame - (30 + i * 22), [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ flex: 1, opacity: grow, transform: `translateY(${(1 - grow) * 20}px)`, background: palette.bgSoft, border: `2px solid ${s.c}`, borderRadius: 14, padding: "18px 10px", textAlign: "center" }}>
              <div style={{ fontSize: 17, fontWeight: 800, color: s.c }}>{s.label}</div>
              <div style={{ fontSize: 12, color: palette.muted, marginTop: 6 }}>{s.desc}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 44, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Uang berkembang sebagai alat tukar, satuan hitung, dan penyimpan nilai yang makin efisien.
      </div>
    </AbsoluteFill>
  );
};

export const SejarahUangVideoDuration = 205;
