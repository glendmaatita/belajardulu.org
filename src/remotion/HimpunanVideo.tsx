import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Himpunan dan diagram Venn: irisan dan gabungan.
export const HimpunanVideo: React.FC = () => {
  const venn = usePop(20);
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Himpunan & Diagram Venn" sub="Mengelompokkan objek dan melihat irisannya" />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 24, transform: `scale(${venn.scale})`, opacity: venn.opacity }}>
        <svg width="420" height="240">
          <circle cx="170" cy="120" r="95" fill="rgba(52,211,153,0.30)" stroke={palette.aset} strokeWidth="3" />
          <circle cx="270" cy="120" r="95" fill="rgba(96,165,250,0.30)" stroke={palette.ekuitas} strokeWidth="3" />
          <text x="110" y="120" fill={palette.text} fontSize="16" textAnchor="middle">suka teh</text>
          <text x="330" y="120" fill={palette.text} fontSize="16" textAnchor="middle">suka kopi</text>
          <text x="220" y="120" fill="#06121f" fontSize="15" textAnchor="middle" fontWeight="700">dua-duanya</text>
        </svg>
      </div>

      <div style={{ opacity: note, marginTop: 20, fontSize: 18, color: palette.muted, textAlign: "center", maxWidth: 780, marginLeft: "auto", marginRight: "auto" }}>
        Bagian tengah adalah irisan (anggota di kedua himpunan), seluruh daerah berwarna adalah gabungan. Diagram Venn membuat hubungan kelompok mudah dibaca.
      </div>
    </AbsoluteFill>
  );
};

export const HimpunanVideoDuration = 180;
