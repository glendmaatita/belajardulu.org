import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Variabel: huruf yang mewakili angka yang belum diketahui.
export const AljabarVideo: React.FC = () => {
  const box = usePop(20);
  const reveal = usePop(70);
  const rumus = useFade(120, 16);
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Huruf yang Mewakili Angka" sub="Aljabar adalah bahasa untuk hal yang belum diketahui" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginTop: 56 }}>
        <div style={{ transform: `scale(${box.scale})`, opacity: box.opacity, fontSize: 24, color: palette.text }}>Sebuah kotak berisi</div>
        <div style={{ transform: `scale(${box.scale})`, opacity: box.opacity, width: 90, height: 90, borderRadius: 16, background: palette.kewajiban, color: "#06121f", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44, fontWeight: 800 }}>x</div>
        <div style={{ transform: `scale(${box.scale})`, opacity: box.opacity, fontSize: 24, color: palette.text }}>permen</div>
      </div>

      <div style={{ opacity: reveal.opacity, marginTop: 36, textAlign: "center", fontSize: 20, color: palette.muted }}>
        Tambah 3 permen lagi, lalu jadi 8. Berapa isi kotak semula?
      </div>
      <div style={{ opacity: rumus, marginTop: 18, textAlign: "center", fontSize: 26, fontWeight: 800, color: palette.aset }}>
        x + 3 = 8, maka x = 5
      </div>
      <div style={{ opacity: note, marginTop: 16, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Huruf x hanyalah nama untuk angka yang dicari. Aljabar menuliskan teka-teki agar bisa dipecahkan.
      </div>
    </AbsoluteFill>
  );
};

export const AljabarVideoDuration = 185;
