import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

const nodes = [
  { label: "PPh Badan", sub: "22% atas laba", c: "#60a5fa" },
  { label: "PPh 21", sub: "Gaji karyawan", c: "#34d399" },
  { label: "PPh 23/26", sub: "Jasa & lintas negara", c: "#a78bfa" },
  { label: "PPh 4(2)", sub: "Final: sewa, dll", c: "#f472b6" },
  { label: "PPh 22/25", sub: "Pungut & angsuran", c: "#22d3ee" },
  { label: "PPN 11%", sub: "Pertambahan nilai", c: "#fbbf24" },
  { label: "PBB & BPHTB", sub: "Tanah & bangunan", c: "#fb7185" },
  { label: "Pajak Daerah", sub: "Reklame, dll", c: "#94a3b8" },
];

export const PetaPajakKorporatVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(180, 18);
  const coreGrow = interpolate(frame - 20, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Peta Pajak yang Dihadapi Perusahaan" sub="Satu perusahaan menyentuh banyak jenis pajak sekaligus" />
      <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
        <div style={{ opacity: coreGrow, transform: `scale(${coreGrow})`, background: palette.accent, color: "#fff", borderRadius: 14, padding: "12px 26px", fontSize: 22, fontWeight: 800 }}>
          PERUSAHAAN
        </div>
      </div>
      <div style={{ marginTop: 26, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        {nodes.map((n, i) => {
          const delay = 40 + i * 12;
          const grow = interpolate(frame - delay, [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ opacity: grow, transform: `translateY(${(1 - grow) * 16}px)`, background: palette.bgSoft, border: `2px solid ${n.c}`, borderRadius: 12, padding: "14px 10px", textAlign: "center" }}>
              <div style={{ fontSize: 17, fontWeight: 800, color: n.c }}>{n.label}</div>
              <div style={{ fontSize: 12, color: palette.muted, marginTop: 4 }}>{n.sub}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 26, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Tax planning menyeluruh menata semua jenis pajak ini, bukan hanya PPh Badan.
      </div>
    </AbsoluteFill>
  );
};

export const PetaPajakKorporatVideoDuration = 215;
