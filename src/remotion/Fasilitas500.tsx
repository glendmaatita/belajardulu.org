import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

export const Fasilitas500: React.FC = () => {
  const frame = useCurrentFrame();
  // omzet kumulatif tumbuh dari 0 ke 800 juta
  const omzet = interpolate(frame, [30, 160], [0, 800], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const bebas = Math.min(omzet, 500);
  const kena = Math.max(0, omzet - 500);
  const pajak = kena * 0.005; // dalam juta
  const note = useFade(170, 18);

  const W = 900; // lebar bar penuh = 800 juta
  const pxPerJuta = W / 800;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 60px" }}>
      <Title text="Omzet Rp500 Juta Pertama: Bebas Pajak" sub="Untuk usaha perorangan, 0,5% hanya berlaku di atas Rp500 juta" />

      {/* counters */}
      <div style={{ display: "flex", gap: 40, marginTop: 30 }}>
        <div>
          <div style={{ fontSize: 16, color: palette.muted }}>Omzet setahun</div>
          <div style={{ fontSize: 40, fontWeight: 800, color: palette.text, fontVariantNumeric: "tabular-nums" }}>
            Rp{omzet.toFixed(0)} jt
          </div>
        </div>
        <div>
          <div style={{ fontSize: 16, color: palette.muted }}>PPh Final 0,5%</div>
          <div style={{ fontSize: 40, fontWeight: 800, color: pajak > 0 ? palette.kewajiban : palette.aset, fontVariantNumeric: "tabular-nums" }}>
            Rp{pajak.toFixed(2)} jt
          </div>
        </div>
      </div>

      {/* bar */}
      <div style={{ marginTop: 50, position: "relative", width: W, height: 70 }}>
        <div style={{ position: "absolute", inset: 0, background: palette.bgSoft, borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)" }} />
        {/* bebas part */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: bebas * pxPerJuta, background: palette.aset, borderRadius: "12px 0 0 12px" }} />
        {/* kena part */}
        <div style={{ position: "absolute", left: 500 * pxPerJuta, top: 0, bottom: 0, width: kena * pxPerJuta, background: palette.kewajiban }} />
        {/* threshold marker at 500 */}
        <div style={{ position: "absolute", left: 500 * pxPerJuta, top: -18, bottom: -18, width: 3, background: palette.text }} />
        <div style={{ position: "absolute", left: 500 * pxPerJuta - 40, top: -46, fontSize: 15, color: palette.text, width: 90 }}>Rp500 jt</div>
      </div>
      <div style={{ display: "flex", gap: 24, marginTop: 16, fontSize: 16 }}>
        <span style={{ color: palette.aset }}>🟢 Bagian bebas (Rp0)</span>
        <span style={{ color: palette.kewajiban }}>🟡 Bagian kena 0,5%</span>
      </div>

      <div style={{ opacity: note, marginTop: 30, fontSize: 19, color: palette.muted }}>
        Contoh: omzet Rp700 jt, yang kena pajak hanya Rp200 jt, jadi PPh final = <b style={{ color: palette.text }}>Rp1 juta</b> setahun.
      </div>
    </AbsoluteFill>
  );
};

export const Fasilitas500Duration = 220;
