import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Ethereum sebagai komputer dunia: transaksi memanggil smart contract, bayar gas, mengubah state.
const Kotak: React.FC<{
  judul: string;
  isi: string;
  delay: number;
  accent: string;
  lebar?: number;
}> = ({ judul, isi, delay, accent, lebar }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        borderRadius: 16,
        padding: "16px 20px",
        border: `2px solid ${accent}`,
        boxShadow: "0 16px 44px rgba(0,0,0,0.32)",
        fontFamily: font,
        width: lebar ?? 230,
      }}
    >
      <div style={{ fontSize: 20, fontWeight: 800, color: accent }}>{judul}</div>
      <div style={{ fontSize: 15, color: palette.muted, marginTop: 8, lineHeight: 1.4 }}>{isi}</div>
    </div>
  );
};

const FlowArrow: React.FC<{ delay: number; label: string }> = ({ delay, label }) => {
  const frame = useCurrentFrame();
  const grow = interpolate(frame - delay, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: grow, fontFamily: font }}>
      <div style={{ fontSize: 14, color: palette.muted, whiteSpace: "nowrap" }}>{label}</div>
      <div style={{ fontSize: 34, color: palette.accent }}>&rarr;</div>
    </div>
  );
};

export const EVMSmartContractVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const stateOp = useFade(150, 18);
  // Animasi perpindahan saldo token: Andi berkurang, Budi bertambah.
  const t = interpolate(frame, [150, 200], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const andi = 100 - Math.round(t * 30);
  const budi = 20 + Math.round(t * 30);
  const note = useFade(205, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="EVM: Komputer Dunia Ethereum" sub="Smart contract berjalan saat dipanggil transaksi" />

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 30 }}>
        <Kotak
          judul="Transaksi"
          isi="Andi memanggil fungsi transfer pada kontrak token."
          delay={24}
          accent={palette.ekuitas}
        />
        <FlowArrow delay={48} label="bayar gas" />
        <Kotak
          judul="EVM"
          isi="Mesin virtual Ethereum menjalankan kode kontrak di setiap node."
          delay={60}
          accent={palette.kewajiban}
        />
        <FlowArrow delay={96} label="ubah state" />
        <Kotak
          judul="Smart Contract"
          isi="Kode token memperbarui catatan saldo pemegang."
          delay={108}
          accent={palette.aset}
        />
      </div>

      <div style={{ opacity: stateOp, marginTop: 36 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: palette.text, marginBottom: 14 }}>
          State berubah: 30 token berpindah dari Andi ke Budi
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <div
            style={{
              background: palette.bgSoft,
              borderRadius: 14,
              padding: "16px 24px",
              border: `2px solid ${palette.kredit}`,
              minWidth: 220,
            }}
          >
            <div style={{ fontSize: 16, color: palette.muted }}>Saldo Andi</div>
            <div style={{ fontSize: 34, fontWeight: 800, color: palette.kredit }}>{andi} TKN</div>
          </div>
          <div
            style={{
              background: palette.bgSoft,
              borderRadius: 14,
              padding: "16px 24px",
              border: `2px solid ${palette.aset}`,
              minWidth: 220,
            }}
          >
            <div style={{ fontSize: 16, color: palette.muted }}>Saldo Budi</div>
            <div style={{ fontSize: 34, fontWeight: 800, color: palette.aset }}>{budi} TKN</div>
          </div>
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 26, fontSize: 18, color: palette.muted, lineHeight: 1.5, maxWidth: 1000 }}>
        Gas adalah biaya komputasi yang dibayar agar jaringan mau menjalankan kontrak. Hasilnya, state
        bersama (saldo semua orang) ikut diperbarui dan disepakati seluruh node.
      </div>
    </AbsoluteFill>
  );
};

export const EVMSmartContractVideoDuration = 225;
