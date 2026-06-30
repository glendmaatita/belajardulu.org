import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, Arrow } from "./anim";

// Digital twin: kembaran digital rantai pasok untuk uji skenario tanpa risiko nyata.
export const DigitalTwinVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 10) * 0.03;
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Digital Twin Rantai Pasok" sub="Kembaran digital untuk menguji skenario sebelum dijalankan di dunia nyata" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 30, marginTop: 70 }}>
        <Side delay={20} ikon="🏭" judul="Dunia nyata" ket="Pabrik, gudang, truk, sensor" warna="#fbbf24" scale={1} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <Arrow delay={40} label="data sensor" />
          <div style={{ fontSize: 13, color: palette.muted }}>cermin dua arah</div>
          <div style={{ transform: "rotate(180deg)" }}><Arrow delay={54} label="" /></div>
        </div>
        <Side delay={34} ikon="🖥️" judul="Kembaran digital" ket="Simulasi & what-if" warna="#60a5fa" scale={pulse} />
      </div>

      <div style={{ marginTop: 60, fontSize: 18, color: palette.muted, textAlign: "center", maxWidth: 940, marginInline: "auto", opacity: interpolate(frame, [110, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        Tanya pada kembaran: bagaimana jika satu pelabuhan tutup? Jawabannya muncul dalam simulasi, bukan lewat kerugian nyata.
      </div>
    </AbsoluteFill>
  );
};

const Side: React.FC<{ delay: number; ikon: string; judul: string; ket: string; warna: string; scale: number }> = ({ delay, ikon, judul, ket, warna, scale }) => {
  const p = usePop(delay);
  return (
    <div style={{ transform: `scale(${p.scale * scale})`, opacity: p.opacity, background: palette.bgSoft, border: `2px solid ${warna}`, borderRadius: 18, padding: "26px 28px", width: 280, textAlign: "center", boxShadow: `0 14px 40px ${warna}22` }}>
      <div style={{ fontSize: 48 }}>{ikon}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: warna, marginTop: 8 }}>{judul}</div>
      <div style={{ fontSize: 15, color: palette.muted, marginTop: 4 }}>{ket}</div>
    </div>
  );
};

export const DigitalTwinVideoDuration = 200;
