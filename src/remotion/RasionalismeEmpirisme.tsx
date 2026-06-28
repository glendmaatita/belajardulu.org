import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Dua sumber pengetahuan: rasionalisme (akal) vs empirisme (pengalaman indra).
export const RasionalismeEmpirisme: React.FC = () => {
  const a = usePop(25);
  const b = usePop(70);
  const note = useFade(135, 18);

  const Panel = ({ pop, ikon, judul, tokoh, inti, contoh, warna }: { pop: { scale: number; opacity: number }; ikon: string; judul: string; tokoh: string; inti: string; contoh: string; warna: string }) => (
    <div style={{ transform: `scale(${pop.scale})`, opacity: pop.opacity, background: palette.bgSoft, borderRadius: 18, padding: "26px 24px", width: 400, boxShadow: "0 14px 40px rgba(0,0,0,0.3)", borderTop: `6px solid ${warna}` }}>
      <div style={{ fontSize: 44, textAlign: "center" }}>{ikon}</div>
      <div style={{ fontSize: 23, fontWeight: 800, color: palette.text, textAlign: "center", marginTop: 6 }}>{judul}</div>
      <div style={{ fontSize: 14, color: warna, textAlign: "center", fontWeight: 700 }}>{tokoh}</div>
      <div style={{ fontSize: 16, color: palette.text, marginTop: 14 }}>{inti}</div>
      <div style={{ fontSize: 14, color: palette.muted, marginTop: 10, fontStyle: "italic" }}>{contoh}</div>
    </div>
  );

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Dari Mana Pengetahuan Berasal?" sub="Rasionalisme (akal) vs Empirisme (pengalaman)" />

      <div style={{ display: "flex", gap: 34, marginTop: 34, justifyContent: "center" }}>
        <Panel pop={a} ikon="🧠" judul="Rasionalisme" tokoh="Descartes, Leibniz" warna={palette.ekuitas}
          inti="Pengetahuan sejati berasal dari akal dan penalaran, bukan indra yang bisa menipu."
          contoh="Contoh: kebenaran matematika diketahui lewat nalar." />
        <Panel pop={b} ikon="👁️" judul="Empirisme" tokoh="Locke, Hume" warna={palette.kewajiban}
          inti="Pengetahuan berasal dari pengalaman indra. Pikiran lahir sebagai kertas kosong."
          contoh="Contoh: kita tahu api panas karena merasakannya." />
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Kant kemudian memadukan keduanya: pengetahuan butuh pengalaman indra sekaligus struktur akal untuk mengolahnya.
      </div>
    </AbsoluteFill>
  );
};

export const RasionalismeEmpirismeDuration = 180;
