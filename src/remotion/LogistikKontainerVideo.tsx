import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// FCL vs LCL: satu kontainer penuh untuk satu pengirim, atau digabung dari banyak pengirim.
export const LogistikKontainerVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const fcl = usePop(25);
  const lcl = usePop(60);
  const note = useFade(135, 18);

  const Box = ({ c }: { c: string }) => (
    <div style={{ width: 30, height: 24, background: c, borderRadius: 4 }} />
  );

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="FCL vs LCL: Memuat Kontainer" sub="Satu pengirim penuh, atau banyak pengirim digabung" />

      <div style={{ display: "flex", gap: 40, marginTop: 50, justifyContent: "center" }}>
        {/* FCL */}
        <div style={{ transform: `scale(${fcl.scale})`, opacity: fcl.opacity, textAlign: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginBottom: 12 }}>FCL</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, padding: 16, background: palette.bgSoft, borderRadius: 14, border: `3px solid ${palette.aset}` }}>
            {Array.from({ length: 12 }).map((_, i) => <Box key={i} c={palette.aset} />)}
          </div>
          <div style={{ fontSize: 15, color: palette.muted, marginTop: 10, width: 220 }}>Satu kontainer penuh milik satu pengirim. Hemat untuk volume besar.</div>
        </div>

        {/* LCL */}
        <div style={{ transform: `scale(${lcl.scale})`, opacity: lcl.opacity, textAlign: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginBottom: 12 }}>LCL</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, padding: 16, background: palette.bgSoft, borderRadius: 14, border: `3px solid ${palette.kewajiban}` }}>
            {[palette.aset, palette.ekuitas, palette.kredit, palette.kewajiban, palette.aset, palette.ekuitas, palette.kredit, palette.kewajiban, palette.aset, palette.ekuitas, palette.kredit, palette.kewajiban].map((c, i) => <Box key={i} c={c} />)}
          </div>
          <div style={{ fontSize: 15, color: palette.muted, marginTop: 10, width: 220 }}>Barang beberapa pengirim digabung (konsolidasi). Hemat untuk volume kecil.</div>
        </div>
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 18, color: palette.muted, textAlign: "center" }}>
        Pilih FCL saat volume besar dan rutin; pilih LCL saat muatan sedikit agar hanya membayar sesuai ruang yang dipakai.
        {frame > 0 ? "" : ""}
      </div>
    </AbsoluteFill>
  );
};

export const LogistikKontainerVideoDuration = 180;
