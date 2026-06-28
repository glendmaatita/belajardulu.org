import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade, Arrow } from "./anim";

// Fungsi sebagai mesin: satu masukan menghasilkan tepat satu keluaran.
const CONTOH = [
  { masuk: "2", keluar: "5" },
  { masuk: "3", keluar: "7" },
  { masuk: "4", keluar: "9" },
];

export const FungsiVideo: React.FC = () => {
  const mesin = usePop(20);
  const rumus = useFade(140, 16);
  const note = useFade(165, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Fungsi adalah Mesin" sub="Masuk satu angka, keluar tepat satu angka" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, marginTop: 44 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {CONTOH.map((c, i) => (
            <div key={i} style={{ width: 56, height: 40, borderRadius: 8, background: palette.bgSoft, color: palette.text, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700 }}>{c.masuk}</div>
          ))}
        </div>
        <Arrow delay={40} />
        <div style={{ transform: `scale(${mesin.scale})`, opacity: mesin.opacity, width: 150, height: 110, borderRadius: 16, background: palette.accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 800, textAlign: "center" }}>aturan:<br/>kali 2 tambah 1</div>
        <Arrow delay={60} />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {CONTOH.map((c, i) => (
            <div key={i} style={{ width: 56, height: 40, borderRadius: 8, background: palette.aset, color: "#06121f", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800 }}>{c.keluar}</div>
          ))}
        </div>
      </div>

      <div style={{ opacity: rumus, marginTop: 30, textAlign: "center", fontSize: 23, fontWeight: 800, color: palette.text }}>
        Setelah melihat polanya: f(x) = 2x + 1
      </div>
      <div style={{ opacity: note, marginTop: 14, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Rumus fungsi lahir dari mengamati pasangan masukan dan keluaran, bukan dihafal lebih dulu.
      </div>
    </AbsoluteFill>
  );
};

export const FungsiVideoDuration = 195;
