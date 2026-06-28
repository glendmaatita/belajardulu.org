import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Komposisi utang pemerintah dan rasio terhadap PDB (batas hukum 60%).
const KOMP = [
  { label: "SBN domestik", pct: 71, warna: palette.aset },
  { label: "SBN valas", pct: 17, warna: palette.ekuitas },
  { label: "Pinjaman", pct: 12, warna: palette.kewajiban },
];

export const UtangPemerintah: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(140, 18);
  const ratio = 39; // ilustrasi rasio utang/PDB

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Utang Pemerintah" sub="Dari mana utang berasal dan seberapa aman rasionya" />

      <div style={{ marginTop: 30, maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>
        <div style={{ fontSize: 15, color: palette.muted, marginBottom: 8 }}>Komposisi instrumen utang (ilustrasi)</div>
        <div style={{ display: "flex", height: 36, borderRadius: 10, overflow: "hidden" }}>
          {KOMP.map((k, i) => {
            const { opacity } = usePop(20 + i * 18);
            return (
              <div key={i} style={{ width: `${k.pct}%`, background: k.warna, opacity, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#06121f" }}>
                {k.pct > 12 ? `${k.label} ${k.pct}%` : ""}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 30, fontSize: 15, color: palette.muted, marginBottom: 8 }}>Rasio utang terhadap PDB</div>
        <div style={{ position: "relative", height: 36, background: palette.bgSoft, borderRadius: 10, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${(ratio / 60) * 100}%`, background: palette.aset, opacity: frame > 60 ? 1 : 0 }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 3, background: palette.kredit }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: palette.muted, marginTop: 4 }}>
          <span>{ratio}% PDB</span>
          <span style={{ color: palette.kredit, fontWeight: 700 }}>batas hukum 60% PDB</span>
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 26, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Mayoritas utang dalam bentuk SBN rupiah (lebih aman dari risiko kurs). Yang dinilai adalah rasio terhadap PDB, bukan nominalnya. Selama jauh di bawah 60% dan PDB tumbuh, utang terkendali.
      </div>
    </AbsoluteFill>
  );
};

export const UtangPemerintahDuration = 185;
