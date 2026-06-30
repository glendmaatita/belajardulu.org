import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, Arrow } from "./anim";

// Garis waktu demokrasi.
const ERA = [
  { thn: "508 SM", judul: "Athena", ket: "Demokrasi langsung pertama", warna: "#fbbf24" },
  { thn: "1215", judul: "Magna Carta", ket: "Raja pun tunduk hukum", warna: "#60a5fa" },
  { thn: "1776-1789", judul: "Revolusi", ket: "Amerika & Prancis", warna: "#f472b6" },
  { thn: "Abad 20", judul: "Hak pilih universal", ket: "Perempuan & semua warga", warna: "#34d399" },
  { thn: "1998", judul: "Reformasi", ket: "Demokratisasi Indonesia", warna: "#a78bfa" },
];

export const SejarahDemokrasiVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Perjalanan Panjang Demokrasi" sub="Dari Athena kuno sampai Reformasi Indonesia" />

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 64, flexWrap: "wrap" }}>
        {ERA.map((e, i) => {
          const { scale, opacity } = usePop(18 + i * 22);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: `2px solid ${e.warna}`, borderRadius: 16, padding: "18px 14px", width: 178, textAlign: "center", boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: e.warna }}>{e.thn}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: palette.text, marginTop: 6 }}>{e.judul}</div>
                <div style={{ fontSize: 13, color: palette.muted, marginTop: 4 }}>{e.ket}</div>
              </div>
              {i < ERA.length - 1 && <Arrow delay={30 + i * 22} />}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 44, fontSize: 18, color: palette.muted, maxWidth: 980 }}>
        Demokrasi tidak lahir sekali jadi. Ia diperjuangkan berabad-abad, sering lewat pengorbanan, dan masih terus disempurnakan.
      </div>
    </AbsoluteFill>
  );
};

export const SejarahDemokrasiVideoDuration = 220;
