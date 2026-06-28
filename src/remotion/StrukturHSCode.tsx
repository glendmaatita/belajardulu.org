import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

// Membedah struktur HS Code / BTKI: dari 2 digit bab sampai 8 digit pos tarif nasional.
const SEGMEN = [
  { digit: "09", label: "Bab", ket: "Kelompok besar: Kopi, teh, rempah", warna: palette.aset },
  { digit: "01", label: "Pos", ket: "Lebih spesifik: Kopi", warna: palette.ekuitas },
  { digit: "21", label: "Subpos", ket: "Kopi disangrai, tanpa kafein dihilangkan", warna: palette.kewajiban },
  { digit: "00", label: "Nasional", ket: "Pos tarif BTKI (8 digit)", warna: palette.kredit },
];

export const StrukturHSCode: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Membedah HS Code" sub="Satu kode menyimpan klasifikasi barang secara berjenjang" />

      <div style={{ display: "flex", gap: 14, marginTop: 50, justifyContent: "center" }}>
        {SEGMEN.map((s, i) => {
          const { scale, opacity } = usePop(20 + i * 26);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, textAlign: "center" }}>
              <div
                style={{
                  background: s.warna,
                  color: "#06121f",
                  borderRadius: 16,
                  padding: "26px 30px",
                  fontSize: 52,
                  fontWeight: 900,
                  boxShadow: "0 16px 44px rgba(0,0,0,0.34)",
                }}
              >
                {s.digit}
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: palette.text, marginTop: 12 }}>{s.label}</div>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: "center", marginTop: 30, opacity: frame > 130 ? 1 : 0 }}>
        <div style={{ fontSize: 20, color: palette.muted }}>Contoh kode lengkap</div>
        <div style={{ fontSize: 44, fontWeight: 900, color: palette.text, letterSpacing: 4 }}>0901.21.00</div>
      </div>

      <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 8 }}>
        {SEGMEN.map((s, i) => {
          const o = frame > 150 + i * 12 ? 1 : 0;
          return (
            <div key={i} style={{ opacity: o, fontSize: 17, color: palette.muted }}>
              <b style={{ color: s.warna }}>{s.digit}</b> = {s.ket}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

export const StrukturHSCodeDuration = 230;
