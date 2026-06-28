import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Pertumbuhan vs pembangunan, dan tiga dimensi IPM (HDI).
export const PembangunanEkonomi: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(140, 18);
  const dim = [
    { ikon: "❤️", nama: "Kesehatan", ket: "angka harapan hidup", warna: palette.kredit },
    { ikon: "📚", nama: "Pendidikan", ket: "lama sekolah", warna: palette.ekuitas },
    { ikon: "💰", nama: "Standar Hidup", ket: "pendapatan per kapita", warna: palette.aset },
  ];

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Pertumbuhan vs Pembangunan" sub="Bukan sekadar PDB naik, tetapi kualitas hidup membaik dan merata" />

      <div style={{ display: "flex", gap: 24, marginTop: 20, justifyContent: "center" }}>
        <div style={{ background: palette.bgSoft, borderRadius: 14, padding: "16px 22px", width: 360, opacity: frame > 25 ? 1 : 0 }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: palette.kewajiban }}>Pertumbuhan ekonomi</div>
          <div style={{ fontSize: 15, color: palette.muted, marginTop: 6 }}>Kenaikan PDB riil (kuantitas output). Bisa naik tetapi timpang.</div>
        </div>
        <div style={{ background: palette.bgSoft, borderRadius: 14, padding: "16px 22px", width: 360, opacity: frame > 45 ? 1 : 0 }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: palette.aset }}>Pembangunan ekonomi</div>
          <div style={{ fontSize: 15, color: palette.muted, marginTop: 6 }}>Perbaikan kualitas hidup: kesehatan, pendidikan, pemerataan.</div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 24, fontSize: 18, fontWeight: 700, color: palette.text, opacity: frame > 60 ? 1 : 0 }}>
        Indeks Pembangunan Manusia (IPM) = tiga dimensi:
      </div>
      <div style={{ display: "flex", gap: 18, marginTop: 16, justifyContent: "center" }}>
        {dim.map((d, i) => {
          const { scale, opacity } = usePop(70 + i * 22);
          return (
            <div key={i} style={{ transform: `scale(${scale})`, opacity, background: palette.bgSoft, borderRadius: 16, padding: "18px 20px", width: 230, textAlign: "center", borderTop: `5px solid ${d.warna}` }}>
              <div style={{ fontSize: 36 }}>{d.ikon}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: palette.text, marginTop: 4 }}>{d.nama}</div>
              <div style={{ fontSize: 13, color: palette.muted }}>{d.ket}</div>
            </div>
          );
        })}
      </div>

      <div style={{ opacity: note, marginTop: 24, fontSize: 17, color: palette.muted, textAlign: "center" }}>
        Pertumbuhan tanpa pemerataan bisa menaikkan ketimpangan (koefisien Gini). Pembangunan sejati menurunkan kemiskinan dan menaikkan IPM, bukan hanya angka PDB.
      </div>
    </AbsoluteFill>
  );
};

export const PembangunanEkonomiDuration = 190;
