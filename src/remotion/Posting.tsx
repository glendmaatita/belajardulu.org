import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

const TAccount: React.FC<{
  name: string;
  debit?: string;
  credit?: string;
  delay: number;
}> = ({ name, debit, credit, delay }) => {
  const o = useFade(delay, 12);
  return (
    <div style={{ opacity: o, width: 300, fontFamily: font }}>
      <div style={{ textAlign: "center", fontSize: 22, fontWeight: 800, color: palette.text, marginBottom: 6 }}>{name}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: `2px solid ${palette.muted}`, borderRadius: 6 }}>
        <div style={{ borderRight: `2px solid ${palette.muted}`, minHeight: 70, padding: 10 }}>
          <div style={{ fontSize: 13, color: palette.muted, textAlign: "center", marginBottom: 6 }}>Debit</div>
          {debit && (
            <div style={{ fontSize: 22, color: palette.debit, textAlign: "center", fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>
              {debit}
            </div>
          )}
        </div>
        <div style={{ minHeight: 70, padding: 10 }}>
          <div style={{ fontSize: 13, color: palette.muted, textAlign: "center", marginBottom: 6 }}>Kredit</div>
          {credit && (
            <div style={{ fontSize: 22, color: palette.kredit, textAlign: "center", fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>
              {credit}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Posting: React.FC = () => {
  const frame = useCurrentFrame();
  const jrnO = useFade(20, 14);
  // animated arrows from journal to T-accounts
  const flow = interpolate(frame, [70, 100], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: palette.bg, padding: "50px 70px", fontFamily: font }}>
      <Title text="Posting ke Buku Besar" sub="Setiap angka di jurnal pindah ke sisi yang sama pada T-account" />

      {/* Journal */}
      <div
        style={{
          opacity: jrnO,
          marginTop: 34,
          background: palette.bgSoft,
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 14,
          padding: "14px 22px",
          width: 520,
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 120px 120px", fontSize: 14, color: palette.muted }}>
          <span>Jurnal</span>
          <span style={{ textAlign: "right" }}>Debit</span>
          <span style={{ textAlign: "right" }}>Kredit</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 120px 120px", fontSize: 19, padding: "6px 0", color: palette.text }}>
          <span style={{ fontWeight: 600 }}>Kas</span>
          <span style={{ textAlign: "right", color: palette.debit, fontVariantNumeric: "tabular-nums" }}>40.000.000</span>
          <span />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 120px 120px", fontSize: 19, color: palette.muted }}>
          <span style={{ paddingLeft: 24 }}>Modal Pemilik</span>
          <span />
          <span style={{ textAlign: "right", color: palette.kredit, fontVariantNumeric: "tabular-nums" }}>40.000.000</span>
        </div>
      </div>

      {/* Flow arrows */}
      <div style={{ display: "flex", justifyContent: "center", margin: "14px 0", opacity: flow }}>
        <div style={{ fontSize: 34, color: palette.accent }}>↓↓ posting ↓↓</div>
      </div>

      {/* T-accounts */}
      <div style={{ display: "flex", gap: 60, justifyContent: "center", marginTop: 6 }}>
        <TAccount name="Kas" debit="40.000.000" delay={100} />
        <TAccount name="Modal Pemilik" credit="40.000.000" delay={120} />
      </div>
    </AbsoluteFill>
  );
};

export const PostingDuration = 180;
