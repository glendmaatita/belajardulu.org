import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Automated Market Maker: kolam likuiditas dua token dengan rumus x*y=k.
const Kolam: React.FC<{ label: string; warna: string; jumlah: number; x: number }> = ({
  label,
  warna,
  jumlah,
  x,
}) => {
  const tinggi = interpolate(jumlah, [400, 2500], [60, 220], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const { scale, opacity } = usePop(20);
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: 470,
        width: 200,
        transform: `scale(${scale})`,
        opacity,
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 200,
          height: tinggi,
          marginTop: 220 - tinggi,
          background: warna,
          borderRadius: "14px 14px 8px 8px",
          boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: 10,
          color: "#06121f",
          fontWeight: 800,
          fontSize: 26,
        }}
      >
        {Math.round(jumlah)}
      </div>
      <div style={{ marginTop: 10, fontSize: 22, fontWeight: 800, color: warna }}>{label}</div>
    </div>
  );
};

export const AMMVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const k = 1000 * 1000; // x * y = k
  // Trader memasukkan token A, jumlah B berkurang.
  const swap = interpolate(frame, [40, 130], [0, 600], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const a = 1000 + swap;
  const b = k / a;
  const hargaB = a / b; // harga B dalam satuan A
  const note = useFade(150, 18);
  const lp = useFade(95, 16);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "36px 50px" }}>
      <Title text="Automated Market Maker (AMM)" sub="Kolam likuiditas yang menjaga rumus x kali y sama dengan k" />

      <div style={{ display: "flex", gap: 40, marginTop: 14 }}>
        <div style={{ background: palette.bgSoft, borderRadius: 14, padding: "12px 20px" }}>
          <div style={{ fontSize: 15, color: palette.muted }}>Rumus konstan</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>x &times; y = k</div>
        </div>
        <div style={{ background: palette.bgSoft, borderRadius: 14, padding: "12px 20px" }}>
          <div style={{ fontSize: 15, color: palette.muted }}>Harga token B</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: palette.kewajiban }}>{hargaB.toFixed(2)} A</div>
        </div>
        <div style={{ background: palette.bgSoft, borderRadius: 14, padding: "12px 20px", opacity: lp }}>
          <div style={{ fontSize: 15, color: palette.muted }}>Penyedia likuiditas</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.aset }}>setor A + B, dapat fee</div>
        </div>
      </div>

      <Kolam label="Token A" warna={palette.ekuitas} jumlah={a} x={300} />
      <Kolam label="Token B" warna={palette.kredit} jumlah={b} x={780} />

      <div
        style={{
          position: "absolute",
          top: 320,
          left: 540,
          fontSize: 22,
          color: palette.accent,
          fontWeight: 800,
          opacity: useFade(40, 12),
        }}
      >
        tukar A &rarr; B
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: 50,
          right: 50,
          opacity: note,
          fontSize: 18,
          color: palette.muted,
        }}
      >
        Saat trader menukar A menjadi B, stok A naik dan stok B turun, sehingga B jadi lebih mahal. Penyedia likuiditas menyetor kedua token dan menerima sebagian biaya dari tiap swap.
      </div>
    </AbsoluteFill>
  );
};

export const AMMVideoDuration = 200;
