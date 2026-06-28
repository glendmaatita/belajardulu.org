import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Rasio utang terhadap PDB dengan batas hukum 60% (UU Keuangan Negara). Defisit dibatasi 3% PDB.
export const DefisitUtangFiskal: React.FC = () => {
  const frame = useCurrentFrame();
  const target = 39; // rasio utang ~39% PDB (ilustrasi)
  const grow = interpolate(frame, [20, 110], [0, target], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const note = useFade(140, 18);
  const W = 800;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Defisit, Utang & Batas Hukum" sub="UU membatasi defisit maksimal 3% PDB dan rasio utang maksimal 60% PDB" />

      <div style={{ marginTop: 60, maxWidth: W, marginLeft: "auto", marginRight: "auto" }}>
        <div style={{ position: "relative", height: 56, borderRadius: 12, background: palette.bgSoft, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${(grow / 60) * 100}%`, background: palette.aset }} />
          {/* batas 60% */}
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "100%", width: 3, background: palette.kredit }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 15, color: palette.muted }}>
          <span>0%</span>
          <span style={{ color: palette.kredit, fontWeight: 700 }}>batas 60% PDB</span>
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <div style={{ fontSize: 16, color: palette.muted }}>Rasio utang Indonesia (ilustrasi)</div>
          <div style={{ fontSize: 46, fontWeight: 900, color: palette.aset }}>{grow.toFixed(0)}% PDB</div>
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 28, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Defisit ditutup dengan utang, terutama penerbitan SBN. Selama rasio utang jauh di bawah batas 60% dan defisit di bawah 3% PDB, fiskal dinilai masih sehat dan berkelanjutan.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const DefisitUtangFiskalDuration = 170;
