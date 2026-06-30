import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

// S&OP: menyeimbangkan rencana permintaan (sales) dan rencana pasokan (operations).
export const SnOPVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const tilt = Math.sin(frame / 16) * interpolate(frame, [60, 150], [10, 0.6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Sales & Operations Planning" sub="Satu rencana yang menyeimbangkan permintaan dan pasokan tiap bulan" />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 70 }}>
        <div style={{ position: "relative", width: 620, height: 200 }}>
          <div style={{ position: "absolute", left: "50%", bottom: 0, width: 14, height: 130, marginLeft: -7, background: palette.muted, borderRadius: 6 }} />
          <div style={{ position: "absolute", left: "50%", top: 30, width: 540, marginLeft: -270, height: 16, background: palette.bgSoft, borderRadius: 8, transform: `rotate(${tilt}deg)`, transformOrigin: "center", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
            <Pan delay={24} ikon="📈" label="Permintaan" warna="#60a5fa" />
            <Pan delay={40} ikon="🏭" label="Pasokan" warna="#fbbf24" />
          </div>
        </div>
      </div>

      <div style={{ marginTop: 64, fontSize: 18, color: palette.muted, textAlign: "center", maxWidth: 900, marginInline: "auto", opacity: interpolate(frame, [120, 160], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        Rapat S&OP bulanan menyatukan penjualan, produksi, dan keuangan agar satu angka rencana dipakai bersama, bukan ramalan yang saling bertentangan.
      </div>
    </AbsoluteFill>
  );
};

const Pan: React.FC<{ delay: number; ikon: string; label: string; warna: string }> = ({ delay, ikon, label, warna }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div style={{ transform: `scale(${scale}) translateY(36px)`, opacity, background: palette.bgSoft, border: `2px solid ${warna}`, borderRadius: 14, padding: "14px 22px", textAlign: "center", width: 150 }}>
      <div style={{ fontSize: 30 }}>{ikon}</div>
      <div style={{ fontSize: 16, fontWeight: 800, color: warna, marginTop: 4 }}>{label}</div>
    </div>
  );
};

export const SnOPVideoDuration = 210;
