import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Hukum utilitas marginal yang menurun: tiap unit tambahan memberi kepuasan lebih kecil.
const MU = [10, 8, 6, 4, 2, 0];

export const UtilitasMarginal: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(140, 18);
  const maxH = 180;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Utilitas Marginal yang Menurun" sub="Gelas pertama paling nikmat, gelas berikutnya makin biasa" />

      <div style={{ display: "flex", gap: 22, marginTop: 40, alignItems: "flex-end", justifyContent: "center", height: 240 }}>
        {MU.map((mu, i) => {
          const o = frame > 20 + i * 18 ? 1 : 0;
          const h = (mu / 10) * maxH;
          return (
            <div key={i} style={{ opacity: o, textAlign: "center", width: 110 }}>
              <div style={{ fontSize: 30 }}>🥤</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: palette.aset, marginTop: 4 }}>{mu}</div>
              <div style={{ height: Math.max(h, 3), background: palette.aset, borderRadius: 8, marginTop: 4 }} />
              <div style={{ fontSize: 13, color: palette.muted, marginTop: 8 }}>Gelas {i + 1}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 22, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Utilitas marginal (tambahan kepuasan) menurun tiap unit. Saat MU mencapai nol, menambah konsumsi tidak lagi menambah kepuasan. Inilah alasan kita berhenti membeli pada titik tertentu.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const UtilitasMarginalDuration = 175;
