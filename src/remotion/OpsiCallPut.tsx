import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Payoff opsi: call untung saat harga naik di atas strike; put untung saat harga turun di bawah strike.
export const OpsiCallPut: React.FC = () => {
  const frame = useCurrentFrame();
  const W = 1000;
  const H = 320;
  const padL = 60;
  const padB = 50;
  const strike = 100;
  const premi = 10;
  const xFor = (p: number) => padL + ((p - 60) / 80) * (W - padL - 40); // harga 60..140
  const yFor = (v: number) => 40 + (1 - (v + 20) / 60) * (H - padB - 40); // payoff -20..40

  const callPts: string[] = [];
  const putPts: string[] = [];
  for (let p = 60; p <= 140; p += 2) {
    callPts.push(`${xFor(p)},${yFor(Math.max(p - strike, 0) - premi)}`);
    putPts.push(`${xFor(p)},${yFor(Math.max(strike - p, 0) - premi)}`);
  }
  const showCall = frame > 30;
  const showPut = frame > 90;
  const note = useFade(140, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Opsi: Call vs Put" sub="Hak (bukan kewajiban) membeli atau menjual pada harga tertentu" />

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", marginTop: 16 }}>
        <line x1={padL} y1={yFor(0)} x2={W - 40} y2={yFor(0)} stroke="rgba(255,255,255,0.25)" strokeWidth={1.5} />
        <line x1={xFor(strike)} y1={30} x2={xFor(strike)} y2={H - padB} stroke="rgba(255,255,255,0.15)" strokeDasharray="6" />
        <text x={xFor(strike)} y={H - padB + 22} textAnchor="middle" fontSize={14} fill={palette.muted}>strike {strike}</text>
        {showCall && <polyline points={callPts.join(" ")} fill="none" stroke={palette.aset} strokeWidth={4} strokeLinecap="round" />}
        {showCall && <text x={W - 50} y={yFor(34)} textAnchor="end" fontSize={17} fontWeight={800} fill={palette.aset}>Call (taruhan harga naik)</text>}
        {showPut && <polyline points={putPts.join(" ")} fill="none" stroke={palette.kredit} strokeWidth={4} strokeLinecap="round" />}
        {showPut && <text x={padL + 10} y={yFor(34)} fontSize={17} fontWeight={800} fill={palette.kredit}>Put (taruhan harga turun)</text>}
        <text x={(W + padL) / 2} y={H - 10} textAnchor="middle" fontSize={15} fill={palette.muted}>Harga aset saat jatuh tempo</text>
      </svg>

      <div style={{ opacity: note, marginTop: 6, fontSize: 18, color: palette.muted }}>
        Kerugian pembeli opsi terbatas pada premi yang dibayar, sementara potensi untungnya besar. Opsi dipakai untuk hedging maupun spekulasi.
      </div>
    </AbsoluteFill>
  );
};

export const OpsiCallPutDuration = 185;
