import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

const Country: React.FC<{ x: number; flag: string; name: string; role: string; color: string; delay: number }> = ({
  x,
  flag,
  name,
  role,
  color,
  delay,
}) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div style={{ position: "absolute", left: x, top: 200, transform: `scale(${scale})`, opacity, width: 300, textAlign: "center", fontFamily: font }}>
      <div style={{ background: palette.bgSoft, border: `1px solid rgba(255,255,255,0.08)`, borderTop: `5px solid ${color}`, borderRadius: 18, padding: "24px" }}>
        <div style={{ fontSize: 56 }}>{flag}</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginTop: 6 }}>{name}</div>
        <div style={{ fontSize: 15, color, fontWeight: 700, marginTop: 4 }}>{role}</div>
      </div>
    </div>
  );
};

export const ParisArticle6: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const s = spring({ frame: frame - 90, fps, config: { damping: 18 } });
  const tokenX = interpolate(s, [0, 1], [430, 700]);
  const tokenOn = frame > 90 && frame < 170;
  const adj = useFade(150, 18);
  const concl = useFade(180, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font }}>
      <div style={{ padding: "40px 60px 0" }}>
        <Title text="Paris Agreement, Pasal 6" sub="Kerja sama antarnegara lewat ITMO (perdagangan karbon lintas batas)" />
      </div>

      <Country x={170} flag="🇮🇩" name="Negara Tuan Rumah" role="kurangi emisi, jual ITMO" color={palette.aset} delay={25} />
      <Country x={760} flag="🇯🇵" name="Negara Pembeli" role="pakai untuk capai NDC" color={palette.ekuitas} delay={45} />

      {tokenOn && (
        <div
          style={{
            position: "absolute",
            left: tokenX,
            top: 250,
            padding: "10px 16px",
            background: "#fbbf24",
            color: "#06121f",
            borderRadius: 999,
            fontWeight: 800,
            fontSize: 15,
            boxShadow: "0 8px 24px rgba(251,191,36,0.5)",
          }}
        >
          ITMO →
        </div>
      )}

      <div style={{ position: "absolute", top: 470, left: 0, right: 0, textAlign: "center", opacity: adj, fontFamily: font }}>
        <span style={{ background: "rgba(244,114,182,0.15)", border: "1px solid rgba(244,114,182,0.4)", color: palette.kredit, padding: "8px 16px", borderRadius: 12, fontSize: 16, fontWeight: 700 }}>
          ⚖️ Corresponding adjustment: tuan rumah TIDAK boleh menghitungnya lagi (anti double counting)
        </span>
      </div>

      <div style={{ position: "absolute", bottom: 36, left: 60, right: 60, textAlign: "center", opacity: concl, fontSize: 18, color: palette.muted, lineHeight: 1.5 }}>
        Satu ton pengurangan hanya boleh diklaim <b style={{ color: palette.text }}>satu negara</b>. Itulah kunci
        integritas perdagangan karbon global.
      </div>
    </AbsoluteFill>
  );
};

export const ParisArticle6Duration = 230;
