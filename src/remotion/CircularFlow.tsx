import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Diagram arus melingkar: rumah tangga & perusahaan bertukar lewat pasar barang & pasar faktor.
export const CircularFlow: React.FC = () => {
  const frame = useCurrentFrame();
  const rt = usePop(20);
  const pr = usePop(55);
  const note = useFade(140, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Diagram Arus Melingkar" sub="Rumah tangga dan perusahaan saling bergantung lewat dua pasar" />

      <div style={{ position: "relative", marginTop: 30, height: 360 }}>
        <div style={{ position: "absolute", left: 80, top: 130, transform: `scale(${rt.scale})`, opacity: rt.opacity, background: palette.bgSoft, borderRadius: 16, padding: "22px 26px", width: 240, textAlign: "center", borderTop: `5px solid ${palette.aset}` }}>
          <div style={{ fontSize: 38 }}>🏠</div>
          <div style={{ fontSize: 21, fontWeight: 800, color: palette.text }}>Rumah Tangga</div>
          <div style={{ fontSize: 14, color: palette.muted }}>pemilik faktor produksi</div>
        </div>
        <div style={{ position: "absolute", right: 80, top: 130, transform: `scale(${pr.scale})`, opacity: pr.opacity, background: palette.bgSoft, borderRadius: 16, padding: "22px 26px", width: 240, textAlign: "center", borderTop: `5px solid ${palette.ekuitas}` }}>
          <div style={{ fontSize: 38 }}>🏢</div>
          <div style={{ fontSize: 21, fontWeight: 800, color: palette.text }}>Perusahaan</div>
          <div style={{ fontSize: 14, color: palette.muted }}>memproduksi barang & jasa</div>
        </div>

        {/* dua panah melingkar */}
        <svg viewBox="0 0 900 360" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <path d="M320,150 C450,70 470,70 600,150" fill="none" stroke={palette.aset} strokeWidth={3} markerEnd="url(#ar)" opacity={frame > 70 ? 1 : 0} />
          <text x={460} y={70} textAnchor="middle" fontSize={15} fill={palette.aset} opacity={frame > 70 ? 1 : 0}>Pasar barang (belanja &rarr;)</text>
          <path d="M600,240 C470,320 450,320 320,240" fill="none" stroke={palette.ekuitas} strokeWidth={3} markerEnd="url(#ar2)" opacity={frame > 95 ? 1 : 0} />
          <text x={460} y={335} textAnchor="middle" fontSize={15} fill={palette.ekuitas} opacity={frame > 95 ? 1 : 0}>Pasar faktor (gaji, sewa &larr;)</text>
          <defs>
            <marker id="ar" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill={palette.aset} /></marker>
            <marker id="ar2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill={palette.ekuitas} /></marker>
          </defs>
        </svg>
      </div>

      <div style={{ opacity: note, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Rumah tangga menjual faktor produksi (tenaga, modal, tanah) ke perusahaan dan menerima pendapatan, lalu membelanjakannya untuk membeli barang & jasa. Uang dan barang mengalir berlawanan arah.
      </div>
    </AbsoluteFill>
  );
};

export const CircularFlowDuration = 185;
