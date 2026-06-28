import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade, Arrow } from "./anim";

const Panel: React.FC<{
  delay: number;
  title: string;
  children: React.ReactNode;
  accent: string;
}> = ({ delay, title, children, accent }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        border: `1px solid rgba(255,255,255,0.08)`,
        borderTop: `4px solid ${accent}`,
        borderRadius: 16,
        padding: "18px 22px",
        width: 360,
        fontFamily: font,
      }}
    >
      <div style={{ fontSize: 16, fontWeight: 700, color: accent, marginBottom: 10 }}>{title}</div>
      {children}
    </div>
  );
};

const Line: React.FC<{ akun: string; d?: string; k?: string; delay: number; indent?: boolean }> = ({
  akun,
  d,
  k,
  delay,
  indent,
}) => {
  const o = useFade(delay, 10);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 90px 90px", opacity: o, fontSize: 18, padding: "4px 0" }}>
      <span style={{ paddingLeft: indent ? 24 : 0, color: indent ? palette.muted : palette.text, fontWeight: indent ? 400 : 600 }}>
        {akun}
      </span>
      <span style={{ textAlign: "right", color: palette.debit, fontVariantNumeric: "tabular-nums" }}>{d || ""}</span>
      <span style={{ textAlign: "right", color: palette.kredit, fontVariantNumeric: "tabular-nums" }}>{k || ""}</span>
    </div>
  );
};

export const AlurJurnal: React.FC = () => {
  const frame = useCurrentFrame();
  const analysisOpacity = interpolate(frame, [60, 80], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, padding: "50px 70px", fontFamily: font }}>
      <Title text="Dari Transaksi → Jurnal" sub="Membeli peralatan Rp5.000.000 secara tunai" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 50 }}>
        <Panel delay={20} title="① TRANSAKSI" accent={palette.accent}>
          <div style={{ fontSize: 19, color: palette.text, lineHeight: 1.5 }}>
            Perusahaan membeli <b>peralatan</b> seharga <b>Rp5.000.000</b>, dibayar <b>tunai</b>.
          </div>
        </Panel>

        <Arrow delay={55} label="analisis" />

        <Panel delay={70} title="② JURNAL" accent={palette.aset}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 90px 90px", fontSize: 13, color: palette.muted, marginBottom: 4 }}>
            <span>Akun</span>
            <span style={{ textAlign: "right" }}>Debit</span>
            <span style={{ textAlign: "right" }}>Kredit</span>
          </div>
          <Line akun="Peralatan" d="5.000.000" delay={90} />
          <Line akun="Kas" k="5.000.000" delay={110} indent />
        </Panel>
      </div>

      <div
        style={{
          opacity: analysisOpacity,
          marginTop: 46,
          background: "rgba(52,120,246,0.12)",
          border: "1px solid rgba(52,120,246,0.3)",
          borderRadius: 14,
          padding: "16px 22px",
          fontSize: 18,
          color: palette.text,
          lineHeight: 1.6,
        }}
      >
        💡 Peralatan (aset) <b style={{ color: palette.debit }}>bertambah → DEBIT</b>. Kas (aset){" "}
        <b style={{ color: palette.kredit }}>berkurang → KREDIT</b>. Total debit = total kredit = Rp5.000.000. ✓
      </div>
    </AbsoluteFill>
  );
};

export const AlurJurnalDuration = 180;
