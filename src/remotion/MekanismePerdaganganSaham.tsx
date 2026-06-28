import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Order book: order beli (bid) dan jual (ask) dicocokkan; transaksi terjadi saat harga bertemu.
const BID = [
  { harga: 1000, lot: 50 },
  { harga: 995, lot: 120 },
  { harga: 990, lot: 200 },
];
const ASK = [
  { harga: 1005, lot: 80 },
  { harga: 1010, lot: 140 },
  { harga: 1015, lot: 90 },
];

export const MekanismePerdaganganSaham: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(140, 18);
  const maxLot = 200;

  const Row = ({ harga, lot, side, delay }: { harga: number; lot: number; side: "bid" | "ask"; delay: number }) => {
    const o = frame > delay ? 1 : 0;
    const w = (lot / maxLot) * 100;
    const c = side === "bid" ? palette.aset : palette.kredit;
    return (
      <div style={{ opacity: o, display: "flex", alignItems: "center", gap: 8, justifyContent: side === "bid" ? "flex-end" : "flex-start", flexDirection: side === "bid" ? "row" : "row-reverse" }}>
        <span style={{ fontSize: 15, color: palette.muted, width: 70, textAlign: side === "bid" ? "right" : "left" }}>{lot} lot</span>
        <div style={{ width: 180 }}>
          <div style={{ height: 22, width: `${w}%`, background: c, borderRadius: 4, marginLeft: side === "bid" ? "auto" : 0 }} />
        </div>
        <span style={{ fontSize: 17, fontWeight: 800, color: c, width: 60 }}>{harga}</span>
      </div>
    );
  };

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Mekanisme Perdagangan Saham" sub="Order beli (bid) dan jual (ask) dicocokkan di order book" />

      <div style={{ display: "flex", gap: 40, marginTop: 30, justifyContent: "center" }}>
        <div>
          <div style={{ textAlign: "right", fontSize: 16, fontWeight: 800, color: palette.aset, marginBottom: 8 }}>BELI (Bid)</div>
          {BID.map((b, i) => <div key={i} style={{ marginBottom: 6 }}><Row {...b} side="bid" delay={20 + i * 18} /></div>)}
        </div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 800, color: palette.kredit, marginBottom: 8 }}>JUAL (Ask)</div>
          {ASK.map((a, i) => <div key={i} style={{ marginBottom: 6 }}><Row {...a} side="ask" delay={20 + i * 18} /></div>)}
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 26, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Selisih harga beli tertinggi dan jual terendah disebut spread. Transaksi terjadi saat keduanya bertemu. Penyelesaian dana dan efek terjadi T+2 (dua hari bursa).
      </div>
    </AbsoluteFill>
  );
};

export const MekanismePerdaganganSahamDuration = 175;
