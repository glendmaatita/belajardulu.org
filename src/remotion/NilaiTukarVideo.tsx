import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Apresiasi vs depresiasi rupiah dan siapa yang diuntungkan/dirugikan.
export const NilaiTukarVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const apr = usePop(30);
  const dep = usePop(75);
  const note = useFade(140, 18);

  const Panel = ({ pop, judul, arah, warna, untung, rugi }: { pop: { scale: number; opacity: number }; judul: string; arah: string; warna: string; untung: string; rugi: string }) => (
    <div style={{ transform: `scale(${pop.scale})`, opacity: pop.opacity, background: palette.bgSoft, borderRadius: 18, padding: "24px 22px", width: 400, boxShadow: "0 14px 40px rgba(0,0,0,0.3)", borderTop: `6px solid ${warna}` }}>
      <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, textAlign: "center" }}>{judul}</div>
      <div style={{ fontSize: 18, color: warna, textAlign: "center", fontWeight: 700, marginTop: 4 }}>{arah}</div>
      <div style={{ marginTop: 14, fontSize: 15, color: palette.muted }}>✅ Untung: {untung}</div>
      <div style={{ marginTop: 8, fontSize: 15, color: palette.muted }}>⚠️ Rugi: {rugi}</div>
    </div>
  );

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Nilai Tukar: Apresiasi vs Depresiasi" sub="Saat rupiah menguat atau melemah, ada yang untung dan ada yang rugi" />

      <div style={{ display: "flex", gap: 34, marginTop: 40, justifyContent: "center" }}>
        <Panel pop={apr} judul="Apresiasi (rupiah menguat)" arah="Rp16.000 → Rp15.000 per USD" warna={palette.aset}
          untung="importir, pemilik utang dolar, wisatawan ke luar" rugi="eksportir (pendapatan dolar bernilai lebih sedikit)" />
        <Panel pop={dep} judul="Depresiasi (rupiah melemah)" arah="Rp16.000 → Rp17.000 per USD" warna={palette.kewajiban}
          untung="eksportir, pariwisata domestik" rugi="importir, pemilik utang dolar" />
      </div>

      <div style={{ opacity: note, marginTop: 32, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Nilai tukar menentukan harga barang antarnegara. Bank Indonesia menjaga rupiah tetap stabil agar dunia usaha bisa merencanakan biaya tanpa gejolak.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const NilaiTukarVideoDuration = 180;
