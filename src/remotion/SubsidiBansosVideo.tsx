import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Subsidi harga (dinikmati semua) vs bansos tertarget (lebih tepat sasaran).
export const SubsidiBansosVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const a = usePop(25);
  const b = usePop(70);
  const note = useFade(135, 18);

  const Bar = ({ pct, warna }: { pct: number; warna: string }) => (
    <div style={{ display: "flex", height: 26, borderRadius: 8, overflow: "hidden", marginTop: 10 }}>
      <div style={{ width: `${pct}%`, background: warna, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#06121f" }}>{pct}% tepat</div>
      <div style={{ width: `${100 - pct}%`, background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: palette.muted }}>{100 - pct}% bocor</div>
    </div>
  );

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Subsidi Harga vs Bansos Tertarget" sub="Mana yang lebih tepat sasaran bagi yang membutuhkan?" />

      <div style={{ display: "flex", gap: 34, marginTop: 44, justifyContent: "center" }}>
        <div style={{ transform: `scale(${a.scale})`, opacity: a.opacity, background: palette.bgSoft, borderRadius: 18, padding: "24px 22px", width: 400, borderTop: `6px solid ${palette.kewajiban}` }}>
          <div style={{ fontSize: 40, textAlign: "center" }}>⛽</div>
          <div style={{ fontSize: 21, fontWeight: 800, color: palette.text, textAlign: "center", marginTop: 6 }}>Subsidi Harga</div>
          <div style={{ fontSize: 14, color: palette.muted, textAlign: "center" }}>mis. BBM: semua orang menikmati</div>
          <Bar pct={50} warna={palette.kewajiban} />
        </div>
        <div style={{ transform: `scale(${b.scale})`, opacity: b.opacity, background: palette.bgSoft, borderRadius: 18, padding: "24px 22px", width: 400, borderTop: `6px solid ${palette.aset}` }}>
          <div style={{ fontSize: 40, textAlign: "center" }}>🎯</div>
          <div style={{ fontSize: 21, fontWeight: 800, color: palette.text, textAlign: "center", marginTop: 6 }}>Bansos Tertarget</div>
          <div style={{ fontSize: 14, color: palette.muted, textAlign: "center" }}>mis. PKH: berdasarkan data DTKS</div>
          <Bar pct={90} warna={palette.aset} />
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 32, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Subsidi harga mudah dijalankan tetapi banyak dinikmati kelompok mampu. Bansos tertarget lebih efisien, asalkan data penerima (DTKS) akurat. Inilah inti perdebatan reformasi subsidi.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const SubsidiBansosVideoDuration = 175;
