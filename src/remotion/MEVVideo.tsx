import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade, usePop } from "./anim";

// MEV (Maximal Extractable Value): penyusun blok menyusun ulang transaksi.
// Contoh sandwich attack: bot membeli sebelum dan menjual sesudah transaksi korban.
export const MEVVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const intro = useFade(150, 18);

  // Tiga transaksi dalam satu blok, diurutkan oleh penyusun blok.
  const baris = [
    { delay: 20, label: "1. Beli bot", who: "Bot MEV", note: "harga masih murah", color: palette.kredit },
    { delay: 48, label: "2. Beli korban", who: "Transaksi korban", note: "dorong harga naik", color: palette.kewajiban },
    { delay: 76, label: "3. Jual bot", who: "Bot MEV", note: "untung dari selisih", color: palette.aset },
  ];

  // Harga naik seiring tiap transaksi dieksekusi.
  const hargaKorban = interpolate(frame, [48, 70], [100, 108], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const untungBot = interpolate(frame, [100, 130], [0, 7.6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="MEV: Sandwich Attack" sub="Penyusun blok mengatur urutan transaksi untuk mengambil keuntungan" />

      <div style={{ marginTop: 16, display: "flex", gap: 36 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, color: palette.muted, marginBottom: 8 }}>Urutan dalam satu blok</div>
          {baris.map((b) => {
            const { scale, opacity } = usePop(b.delay);
            return (
              <div
                key={b.label}
                style={{
                  transform: `scale(${scale})`,
                  opacity,
                  background: palette.bgSoft,
                  borderLeft: `5px solid ${b.color}`,
                  borderRadius: 12,
                  padding: "14px 18px",
                  marginBottom: 12,
                }}
              >
                <div style={{ fontSize: 14, color: palette.muted }}>{b.label}</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: palette.text }}>{b.who}</div>
                <div style={{ fontSize: 15, color: palette.muted, marginTop: 2 }}>{b.note}</div>
              </div>
            );
          })}
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>
          <div style={{ background: palette.bgSoft, borderRadius: 14, padding: "18px 22px" }}>
            <div style={{ fontSize: 15, color: palette.muted }}>Harga yang dibayar korban</div>
            <div style={{ fontSize: 38, fontWeight: 800, color: palette.kewajiban }}>Rp{hargaKorban.toFixed(1)}</div>
            <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>lebih mahal karena bot membeli lebih dulu</div>
          </div>
          <div style={{ background: palette.bgSoft, borderRadius: 14, padding: "18px 22px" }}>
            <div style={{ fontSize: 15, color: palette.muted }}>Keuntungan bot</div>
            <div style={{ fontSize: 38, fontWeight: 800, color: palette.aset }}>+Rp{untungBot.toFixed(1)}</div>
            <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>diambil dari kerugian korban</div>
          </div>
        </div>
      </div>

      <div style={{ opacity: intro, marginTop: 12, fontSize: 18, color: palette.muted }}>
        Bot mengapit transaksi korban: beli sebelum &rarr; korban membeli lebih mahal &rarr; bot menjual sesudahnya.
      </div>
    </AbsoluteFill>
  );
};

export const MEVVideoDuration = 200;
