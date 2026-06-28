import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

const Panel: React.FC<{
  delay: number;
  accent: string;
  badge: string;
  title: string;
  rows: string[];
}> = ({ delay, accent, badge, title, rows }) => {
  const { scale, opacity } = usePop(delay);
  const listO = useFade(delay + 14, 16);
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        width: 440,
        background: palette.bgSoft,
        border: "1px solid rgba(255,255,255,0.08)",
        borderTop: `5px solid ${accent}`,
        borderRadius: 18,
        padding: "24px 26px",
        fontFamily: font,
      }}
    >
      <div style={{ display: "inline-block", background: accent, color: "#06121f", fontWeight: 800, fontSize: 13, padding: "4px 12px", borderRadius: 999 }}>
        {badge}
      </div>
      <div style={{ marginTop: 12, fontSize: 26, fontWeight: 800, color: palette.text }}>{title}</div>
      <div style={{ opacity: listO, marginTop: 14 }}>
        {rows.map((r, i) => (
          <div key={i} style={{ fontSize: 17, color: palette.muted, padding: "6px 0", display: "flex", gap: 8 }}>
            <span style={{ color: accent }}>•</span>
            <span>{r}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const PasarKarbon: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px", justifyContent: "flex-start" }}>
      <Title text="Dua Jenis Pasar Karbon" sub="Wajib (compliance) vs sukarela (voluntary)" />
      <div style={{ marginTop: 40, display: "flex", gap: 30, justifyContent: "center" }}>
        <Panel
          delay={25}
          accent={palette.ekuitas}
          badge="WAJIB"
          title="Compliance Market"
          rows={[
            "Diwajibkan regulasi pemerintah",
            "Mekanisme: cap-and-trade / pajak karbon",
            "Contoh: EU ETS, Bursa Karbon IDX",
            "Unit: izin emisi (allowance)",
          ]}
        />
        <Panel
          delay={55}
          accent={palette.aset}
          badge="SUKARELA"
          title="Voluntary Market"
          rows={[
            "Atas inisiatif perusahaan sendiri",
            "Untuk klaim net-zero / CSR / citra",
            "Contoh: Verra (VCS), Gold Standard",
            "Unit: carbon credit / offset",
          ]}
        />
      </div>
    </AbsoluteFill>
  );
};

export const PasarKarbonDuration = 200;
