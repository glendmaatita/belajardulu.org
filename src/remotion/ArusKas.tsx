import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

const aktivitas = [
  {
    nama: "OPERASI",
    icon: "🏭",
    color: palette.aset,
    contoh: ["+ Kas dari pelanggan", "− Bayar pemasok & gaji"],
    nilai: "+50 jt",
  },
  {
    nama: "INVESTASI",
    icon: "🏗️",
    color: palette.kewajiban,
    contoh: ["− Beli mesin/gedung", "+ Jual aset tetap"],
    nilai: "−30 jt",
  },
  {
    nama: "PENDANAAN",
    icon: "🏦",
    color: palette.ekuitas,
    contoh: ["+ Setoran modal / pinjaman", "− Bayar utang / prive"],
    nilai: "+10 jt",
  },
];

const Col: React.FC<{ i: number }> = ({ i }) => {
  const a = aktivitas[i];
  const delay = 25 + i * 28;
  const { scale, opacity } = usePop(delay);
  const listO = useFade(delay + 14, 14);
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        border: "1px solid rgba(255,255,255,0.08)",
        borderTop: `5px solid ${a.color}`,
        borderRadius: 16,
        padding: "20px 22px",
        width: 320,
        fontFamily: font,
      }}
    >
      <div style={{ fontSize: 38 }}>{a.icon}</div>
      <div style={{ fontSize: 24, fontWeight: 800, color: a.color, marginTop: 4 }}>{a.nama}</div>
      <div style={{ opacity: listO, marginTop: 12 }}>
        {a.contoh.map((c, k) => (
          <div key={k} style={{ fontSize: 17, color: palette.muted, padding: "3px 0" }}>
            {c}
          </div>
        ))}
      </div>
      <div style={{ opacity: listO, marginTop: 14, fontSize: 26, fontWeight: 800, color: palette.text, fontVariantNumeric: "tabular-nums" }}>
        {a.nilai}
      </div>
    </div>
  );
};

export const ArusKas: React.FC = () => {
  const frame = useCurrentFrame();
  const totalO = interpolate(frame, [140, 165], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, padding: "56px 50px", fontFamily: font, justifyContent: "center" }}>
      <Title text="Tiga Aktivitas Arus Kas" sub="Ke mana kas datang & pergi, dikelompokkan rapi" />
      <div style={{ display: "flex", gap: 30, justifyContent: "center", marginTop: 36 }}>
        {aktivitas.map((_, i) => (
          <Col key={i} i={i} />
        ))}
      </div>
      <div
        style={{
          opacity: totalO,
          marginTop: 32,
          textAlign: "center",
          fontSize: 20,
          color: palette.text,
        }}
      >
        Kenaikan kas bersih = <b style={{ color: palette.aset }}>+50</b> <b style={{ color: palette.kewajiban }}>−30</b>{" "}
        <b style={{ color: palette.ekuitas }}>+10</b> = <b style={{ color: palette.accent }}>+Rp30 juta</b>
      </div>
    </AbsoluteFill>
  );
};

export const ArusKasDuration = 200;
