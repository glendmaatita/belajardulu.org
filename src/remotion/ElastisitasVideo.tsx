import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Elastisitas: respons jumlah terhadap perubahan harga. Elastis (landai) vs inelastis (curam).
export const ElastisitasVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 300;
  const note = useFade(140, 18);

  const Panel = ({ x, title, steep, warna, ket, delay }: { x: number; title: string; steep: boolean; warna: string; ket: string; delay: number }) => {
    const o = frame > delay ? 1 : 0;
    const w = 380;
    const padL = 50;
    const padB = 40;
    // garis permintaan: curam (inelastis) atau landai (elastis)
    const x0 = x + padL;
    const x1 = x + w - 20;
    const yTop = 20;
    const yBot = H - padB;
    const p1 = steep ? [x0 + 30, yTop] : [x0, yTop + 40];
    const p2 = steep ? [x0 + 90, yBot] : [x1, yBot - 10];
    return (
      <g opacity={o}>
        <text x={x + w / 2} y={14} textAnchor="middle" fontSize={18} fontWeight={800} fill={warna}>{title}</text>
        <line x1={x0} y1={yBot} x2={x1} y2={yBot} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={x0} y1={yTop} x2={x0} y2={yBot} stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
        <line x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} stroke={warna} strokeWidth={4} strokeLinecap="round" />
        <text x={x + w / 2} y={H - 8} textAnchor="middle" fontSize={13} fill={palette.muted}>{ket}</text>
      </g>
    );
  };

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Elastisitas Permintaan" sub="Seberapa peka jumlah terhadap perubahan harga" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 26 }}>
        <Panel x={20} title="Inelastis (curam)" steep warna={palette.kewajiban} ket="Harga naik, jumlah hampir tak berubah (mis. BBM, obat)" delay={25} />
        <Panel x={520} title="Elastis (landai)" steep={false} warna={palette.aset} ket="Harga naik sedikit, jumlah turun banyak (mis. barang mewah)" delay={70} />
      </svg>

      <div style={{ opacity: note, marginTop: 18, fontSize: 18, color: palette.muted }}>
        Elastisitas = persentase perubahan jumlah dibagi persentase perubahan harga. Barang kebutuhan pokok cenderung inelastis; barang dengan banyak substitusi cenderung elastis.
      </div>
    </AbsoluteFill>
  );
};

export const ElastisitasVideoDuration = 175;
