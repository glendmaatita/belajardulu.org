import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Cash Conversion Cycle: DIO + DSO - DPO = berapa lama kas "terjebak" di operasi.
const DIO = 60; // persediaan
const DSO = 45; // piutang
const DPO = 30; // utang usaha
const CCC = DIO + DSO - DPO; // 75 hari

export const CashConversionVideo: React.FC = () => {
  const W = 1000;
  const scale = 8; // px per hari
  const x0 = 60;

  const dio = usePop(20);
  const dso = usePop(45);
  const dpo = usePop(70);
  const note = useFade(120, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Cash Conversion Cycle" sub="Berapa lama kas terjebak di persediaan dan piutang sebelum kembali" />

      <svg viewBox={`0 0 ${W} 320`} style={{ width: "100%", marginTop: 30 }}>
        {/* DIO bar */}
        <g opacity={dio.opacity}>
          <rect x={x0} y={70} width={DIO * scale} height={40} rx={6} fill={palette.ekuitas} />
          <text x={x0 + (DIO * scale) / 2} y={95} textAnchor="middle" fontSize={16} fill="#06121f" fontWeight={700}>DIO {DIO} hari</text>
          <text x={x0} y={58} fontSize={15} fill={palette.muted}>Persediaan jadi piutang</text>
        </g>
        {/* DSO bar */}
        <g opacity={dso.opacity}>
          <rect x={x0 + DIO * scale} y={70} width={DSO * scale} height={40} rx={6} fill={palette.aset} />
          <text x={x0 + DIO * scale + (DSO * scale) / 2} y={95} textAnchor="middle" fontSize={16} fill="#06121f" fontWeight={700}>DSO {DSO} hari</text>
        </g>
        {/* DPO bar (pengurang) */}
        <g opacity={dpo.opacity}>
          <rect x={x0} y={150} width={DPO * scale} height={40} rx={6} fill={palette.kewajiban} />
          <text x={x0 + (DPO * scale) / 2} y={175} textAnchor="middle" fontSize={16} fill="#06121f" fontWeight={700}>DPO {DPO} hari</text>
          <text x={x0} y={138} fontSize={15} fill={palette.muted}>Tempo bayar ke pemasok (mengurangi)</text>
        </g>
        {/* CCC result */}
        <g opacity={note}>
          <rect x={x0} y={230} width={CCC * scale} height={44} rx={6} fill={palette.accent} />
          <text x={x0 + (CCC * scale) / 2} y={258} textAnchor="middle" fontSize={18} fill="#fff" fontWeight={800}>CCC = {CCC} hari</text>
        </g>
      </svg>

      <div style={{ opacity: note, marginTop: 16, fontSize: 18, color: palette.muted }}>
        CCC = DIO + DSO - DPO = {DIO} + {DSO} - {DPO} = <b style={{ color: palette.text }}>{CCC} hari</b>. Makin pendek, makin sedikit modal kerja yang dibutuhkan.
      </div>
    </AbsoluteFill>
  );
};

export const CashConversionVideoDuration = 180;
