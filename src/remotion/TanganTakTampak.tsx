import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, Arrow } from "./anim";

// Tangan tak tampak: keputusan egois banyak orang menghasilkan keteraturan tanpa komando pusat.
export const TanganTakTampak: React.FC = () => {
  const frame = useCurrentFrame();
  const hand = interpolate(frame, [90, 130], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Tangan Tak Tampak" sub="Kepentingan pribadi banyak orang menata pasar tanpa ada yang memerintah" />

      <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 56, justifyContent: "center" }}>
        <Card delay={20} ikon="🥖" judul="Pembuat roti" ket="Mencari untung" warna="#fbbf24" />
        <Card delay={36} ikon="🧑‍🌾" judul="Petani" ket="Menjual hasil tani" warna="#34d399" />
        <Card delay={52} ikon="🛒" judul="Pembeli" ket="Cari harga terbaik" warna="#60a5fa" />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
        <Arrow delay={66} label="tanpa komando pusat" vertical />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <div style={{ transform: `scale(${interpolate(hand, [0, 1], [0.7, 1])})`, opacity: hand, background: palette.bgSoft, border: "2px solid #f472b6", borderRadius: 18, padding: "20px 30px", textAlign: "center", boxShadow: "0 16px 44px rgba(244,114,182,0.2)" }}>
          <div style={{ fontSize: 40 }}>🤝</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#f472b6", marginTop: 6 }}>Roti tersedia tiap pagi</div>
          <div style={{ fontSize: 14, color: palette.muted, marginTop: 4 }}>Pasokan, harga, dan jumlah menyesuaikan sendiri</div>
        </div>
      </div>

      <div style={{ marginTop: 28, fontSize: 17, color: palette.muted, textAlign: "center", maxWidth: 900, marginInline: "auto" }}>
        Kata Adam Smith: kita mendapat roti bukan karena kebaikan hati pembuatnya, melainkan karena ia mengejar kepentingannya sendiri.
      </div>
    </AbsoluteFill>
  );
};

const Card: React.FC<{ delay: number; ikon: string; judul: string; ket: string; warna: string }> = ({ delay, ikon, judul, ket, warna }) => {
  const { scale, opacity } = usePop(delay);
  return (
    <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: `2px solid ${warna}`, borderRadius: 16, padding: "18px 20px", width: 180, textAlign: "center" }}>
      <div style={{ fontSize: 36 }}>{ikon}</div>
      <div style={{ fontSize: 18, fontWeight: 800, color: warna, marginTop: 6 }}>{judul}</div>
      <div style={{ fontSize: 13, color: palette.muted, marginTop: 2 }}>{ket}</div>
    </div>
  );
};

export const TanganTakTampakDuration = 220;
