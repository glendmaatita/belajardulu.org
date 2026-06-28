import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Postur APBN: pendapatan vs belanja menentukan surplus/defisit, ditutup oleh pembiayaan.
export const PosturAPBN: React.FC = () => {
  const frame = useCurrentFrame();
  const pendapatan = 2800; // triliun (ilustrasi)
  const belanja = 3300;
  const defisit = belanja - pendapatan; // 500
  const a = usePop(20);
  const b = usePop(55);
  const c = usePop(95);
  const note = useFade(135, 18);
  const maxH = 230;

  const Bar = ({ pop, label, nilai, warna, color }: { pop: { scale: number; opacity: number }; label: string; nilai: number; warna: string; color?: string }) => (
    <div style={{ transform: `scale(${pop.scale})`, opacity: pop.opacity, textAlign: "center" }}>
      <div style={{ fontSize: 22, fontWeight: 800, color: color || palette.text }}>Rp{nilai.toLocaleString("id-ID")} T</div>
      <div style={{ width: 150, height: (nilai / 3300) * maxH, background: warna, borderRadius: 10, marginTop: 8 }} />
      <div style={{ fontSize: 17, color: palette.muted, marginTop: 8 }}>{label}</div>
    </div>
  );

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Postur APBN" sub="Pendapatan vs belanja menentukan defisit, lalu ditutup pembiayaan" />

      <div style={{ display: "flex", gap: 56, marginTop: 30, justifyContent: "center", alignItems: "flex-end", height: 280 }}>
        <Bar pop={a} label="Pendapatan negara" nilai={pendapatan} warna={palette.aset} />
        <Bar pop={b} label="Belanja negara" nilai={belanja} warna={palette.kewajiban} />
        <Bar pop={c} label="Defisit" nilai={defisit} warna={palette.kredit} color={palette.kredit} />
      </div>

      <div style={{ opacity: note, marginTop: 24, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Belanja Rp{belanja.toLocaleString("id-ID")} T melebihi pendapatan Rp{pendapatan.toLocaleString("id-ID")} T, sehingga defisit Rp{defisit.toLocaleString("id-ID")} T. Defisit ditutup lewat pembiayaan, terutama penerbitan SBN.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const PosturAPBNDuration = 175;
