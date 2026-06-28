import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Elastisitas penawaran: seberapa cepat produsen menambah jumlah saat harga naik (landai = elastis, curam = inelastis).
export const ElastisitasPenawaran: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 300;
  const note = useFade(140, 18);

  const Panel = ({ x, title, landai, warna, ket, delay }: { x: number; title: string; landai: boolean; warna: string; ket: string; delay: number }) => {
    const o = frame > delay ? 1 : 0;
    const w = 380;
    const padL = 50;
    const padB = 40;
    const x0 = x + padL;
    const yTop = 24;
    const yBot = H - padB;
    const p1 = [x0, yBot];
    const p2 = landai ? [x + w - 20, yTop + 30] : [x0 + 70, yTop];
    return (
      <g opacity={o}>
        <text x={x + w / 2} y={14} textAnchor="middle" fontSize={18} fontWeight={800} fill={warna}>{title}</text>
        <line x1={x0} y1={yBot} x2={x + w - 20} y2={yBot} stroke="rgba(255,255,255,0.25)" strokeWidth={2} />
        <line x1={x0} y1={yTop} x2={x0} y2={yBot} stroke="rgba(255,255,255,0.25)" strokeWidth={2} />
        <line x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} stroke={warna} strokeWidth={4} strokeLinecap="round" />
        <text x={x + w / 2} y={H - 8} textAnchor="middle" fontSize={13} fill={palette.muted}>{ket}</text>
      </g>
    );
  };

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Elastisitas Penawaran" sub="Seberapa responsif jumlah yang ditawarkan terhadap harga" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 26 }}>
        <Panel x={20} title="Elastis (landai)" landai warna={palette.aset} ket="Mudah menambah produksi (mis. barang pabrik)" delay={25} />
        <Panel x={520} title="Inelastis (curam)" landai={false} warna={palette.kewajiban} ket="Sulit menambah cepat (mis. hasil tani, properti)" delay={70} />
      </svg>

      <div style={{ opacity: note, marginTop: 18, fontSize: 18, color: palette.muted }}>
        Penawaran lebih elastis bila produsen mudah menambah output dan punya waktu menyesuaikan. Dalam jangka panjang, penawaran umumnya lebih elastis daripada jangka pendek.
      </div>
    </AbsoluteFill>
  );
};

export const ElastisitasPenawaranDuration = 175;
