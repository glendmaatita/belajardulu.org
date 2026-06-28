import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

const Box: React.FC<{ x: number; y: number; w: number; delay: number; icon: string; title: string; sub: string; color: string }> = ({ x, y, w, delay, icon, title, sub, color }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div style={{ position: "absolute", left: x, top: y, width: w, transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: "1px solid rgba(255,255,255,0.08)", borderTop: `5px solid ${color}`, borderRadius: 14, padding: "16px 18px", textAlign: "center", fontFamily: font }}>
      <div style={{ fontSize: 32 }}>{icon}</div>
      <div style={{ fontSize: 18, fontWeight: 800, color: palette.text, marginTop: 4 }}>{title}</div>
      <div style={{ fontSize: 13, color: palette.muted }}>{sub}</div>
    </div>
  );
};

export const ProjectFinanceSPV: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font }}>
      <div style={{ padding: "40px 56px 0" }}>
        <Title text="Struktur Project Finance" sub="Proyek dibiayai lewat SPV terpisah, pelunasan dari arus kas proyek (non-recourse)" />
      </div>

      <Box x={70} y={190} w={300} delay={25} icon="🏢" title="Sponsor (Ekuitas)" sub="Pemilik proyek, setor modal" color={palette.ekuitas} />
      <Box x={70} y={360} w={300} delay={45} icon="🏦" title="Lender (Utang)" sub="Bank, hanya klaim ke proyek" color={palette.kewajiban} />

      <Box x={470} y={275} w={250} delay={75} icon="📦" title="SPV / Proyek" sub="Entitas khusus, terpisah" color={palette.accent} />

      <Box x={830} y={275} w={300} delay={105} icon="💵" title="Arus Kas Proyek" sub="Melunasi utang & imbal hasil" color={palette.aset} />

      <div style={{ position: "absolute", bottom: 50, left: 56, right: 56, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        <b style={{ color: palette.text }}>Non-recourse</b>: jika proyek gagal, lender hanya bisa menuntut aset proyek, bukan seluruh kekayaan sponsor. Karena itu DSCR sangat dijaga.
      </div>
    </AbsoluteFill>
  );
};

export const ProjectFinanceSPVDuration = 200;
