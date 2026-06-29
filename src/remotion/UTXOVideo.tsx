import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Model UTXO Bitcoin: input mengonsumsi UTXO, menghasilkan output baru plus kembalian.
const Koin: React.FC<{ x: number; y: number; nilai: string; color: string; delay: number; label: string }> = ({ x, y, nilai, color, delay, label }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${scale})`, opacity, textAlign: "center" }}>
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          background: color,
          color: "#1a1205",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontWeight: 800,
          boxShadow: `0 12px 30px ${color}55`,
          border: "3px solid rgba(255,255,255,0.25)",
        }}
      >
        {nilai}
      </div>
      <div style={{ fontSize: 13, color: palette.muted, marginTop: 6, width: 110 }}>{label}</div>
    </div>
  );
};

export const UTXOVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const arrowOp = interpolate(frame, [60, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const note = useFade(176, 18);
  const analogi = useFade(140, 16);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Model UTXO Bitcoin" sub="Transaksi memakai UTXO sebagai input lalu menghasilkan UTXO output baru plus kembalian" />

      <div style={{ position: "relative", height: 320, marginTop: 18 }}>
        <div style={{ position: "absolute", left: 20, top: 6, fontSize: 15, color: palette.muted, fontWeight: 700 }}>INPUT (UTXO dikonsumsi)</div>
        <Koin x={40} y={40} nilai="0,5 BTC" color={palette.ekuitas} delay={20} label="UTXO lama milik kamu" />

        <div style={{ position: "absolute", left: 360, top: 78, opacity: arrowOp, fontSize: 56, color: palette.accent }}>&rarr;</div>
        <div style={{ position: "absolute", left: 300, top: 150, opacity: arrowOp, fontSize: 16, color: palette.text, width: 180, textAlign: "center" }}>
          Pecah jadi output + change
        </div>

        <div style={{ position: "absolute", left: 560, top: 6, fontSize: 15, color: palette.muted, fontWeight: 700 }}>OUTPUT (UTXO baru)</div>
        <Koin x={560} y={40} nilai="0,3 BTC" color={palette.aset} delay={90} label="Dikirim ke penerima" />
        <Koin x={560} y={170} nilai="0,199 BTC" color={palette.kewajiban} delay={108} label="Kembalian (change) ke kamu" />

        <div style={{ position: "absolute", left: 740, top: 90, opacity: analogi, fontSize: 15, color: palette.muted, width: 230 }}>
          Sisa 0,001 BTC menjadi biaya transaksi (fee) untuk penambang.
        </div>

        <div style={{ position: "absolute", left: 40, top: 250, opacity: analogi, fontSize: 17, color: palette.text, width: 700 }}>
          Analogi: kamu bayar belanja Rp30 ribu pakai uang Rp50 ribu, lalu menerima kembalian Rp20 ribu. UTXO tidak bisa dipakai separuh, harus dipecah utuh.
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 4, fontSize: 18, color: palette.muted }}>
        Saldo dompetmu sebenarnya adalah jumlah semua UTXO yang bisa kamu belanjakan, bukan satu angka tunggal seperti rekening bank.
      </div>
    </AbsoluteFill>
  );
};

export const UTXOVideoDuration = 215;
