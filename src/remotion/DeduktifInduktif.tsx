import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Penalaran deduktif (umum ke khusus, pasti) vs induktif (khusus ke umum, kemungkinan).
export const DeduktifInduktif: React.FC = () => {
  const a = usePop(25);
  const b = usePop(70);
  const note = useFade(135, 18);

  const Panel = ({ pop, judul, arah, contoh, sifat, warna }: { pop: { scale: number; opacity: number }; judul: string; arah: string; contoh: string[]; sifat: string; warna: string }) => (
    <div style={{ transform: `scale(${pop.scale})`, opacity: pop.opacity, background: palette.bgSoft, borderRadius: 18, padding: "24px 22px", width: 400, boxShadow: "0 14px 40px rgba(0,0,0,0.3)", borderTop: `6px solid ${warna}` }}>
      <div style={{ fontSize: 23, fontWeight: 800, color: palette.text, textAlign: "center" }}>{judul}</div>
      <div style={{ fontSize: 14, color: warna, textAlign: "center", fontWeight: 700, marginTop: 2 }}>{arah}</div>
      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 7 }}>
        {contoh.map((c, i) => (
          <div key={i} style={{ fontSize: 15, color: i === contoh.length - 1 ? palette.text : palette.muted, fontWeight: i === contoh.length - 1 ? 700 : 400 }}>
            {i === contoh.length - 1 ? "Jadi: " : ""}{c}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, fontSize: 14, color: palette.muted, fontStyle: "italic" }}>{sifat}</div>
    </div>
  );

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Deduktif vs Induktif" sub="Dua cara menarik kesimpulan" />

      <div style={{ display: "flex", gap: 34, marginTop: 36, justifyContent: "center" }}>
        <Panel pop={a} judul="Deduktif" arah="Umum ke khusus" warna={palette.aset}
          contoh={["Semua manusia bisa mati.", "Sokrates manusia.", "Sokrates bisa mati."]}
          sifat="Bila premis benar, kesimpulan PASTI benar." />
        <Panel pop={b} judul="Induktif" arah="Khusus ke umum" warna={palette.kewajiban}
          contoh={["Angsa 1, 2, 3... berwarna putih.", "Semua angsa (mungkin) putih."]}
          sifat="Kesimpulan KEMUNGKINAN benar, tidak pasti." />
      </div>

      <div style={{ opacity: note, marginTop: 32, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Deduksi memberi kepastian bila premisnya benar; induksi memberi probabilitas dari pengamatan dan bisa keliru bila ada pengecualian.
      </div>
    </AbsoluteFill>
  );
};

export const DeduktifInduktifDuration = 175;
