import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, Arrow } from "./anim";

// Ketertelusuran blockchain: tiap simpul mencatat asal-usul yang tak bisa diubah.
const HOP = [
  { ikon: "🌾", judul: "Petani", ket: "Panen kopi Gayo", hash: "0xa1" },
  { ikon: "🏭", judul: "Prosesor", ket: "Sangrai & kemas", hash: "0xb7" },
  { ikon: "🚢", judul: "Eksportir", ket: "Kirim ke luar negeri", hash: "0xc3" },
  { ikon: "☕", judul: "Kafe", ket: "Pindai QR, lihat asal", hash: "0xd9" },
];

export const BlockchainTraceabilityVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Ketertelusuran Blockchain" sub="Tiap tangan mencatat jejak yang tak bisa diam-diam diubah" />

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 56, flexWrap: "wrap" }}>
        {HOP.map((h, i) => {
          const { scale, opacity } = usePop(20 + i * 24);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: "2px solid #a78bfa", borderRadius: 16, padding: "20px 16px", width: 190, textAlign: "center", boxShadow: "0 12px 32px rgba(167,139,250,0.18)" }}>
                <div style={{ fontSize: 36 }}>{h.ikon}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: palette.text, marginTop: 6 }}>{h.judul}</div>
                <div style={{ fontSize: 13, color: palette.muted, marginTop: 2 }}>{h.ket}</div>
                <div style={{ fontSize: 13, color: "#a78bfa", marginTop: 6, fontFamily: "monospace" }}>blok {h.hash}</div>
              </div>
              {i < HOP.length - 1 && <Arrow delay={32 + i * 24} label="terkunci" />}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 40, fontSize: 18, color: palette.muted, maxWidth: 980 }}>
        Konsumen memindai satu kode dan melihat seluruh perjalanan: dari kebun sampai cangkir. Klaim halal, organik, atau bebas deforestasi jadi bisa dibuktikan, bukan sekadar dijanjikan.
      </div>
    </AbsoluteFill>
  );
};

export const BlockchainTraceabilityVideoDuration = 210;
