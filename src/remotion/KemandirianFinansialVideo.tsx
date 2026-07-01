import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, useFade } from "./anim";

// Kemandirian finansial: titik saat penghasilan pasif (dari investasi) menutupi
// seluruh pengeluaran, sehingga bekerja menjadi pilihan, bukan keharusan.
export const KemandirianFinansialVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const note = useFade(180, 18);
  const pasif = interpolate(frame, [20, 150], [10, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cross = pasif >= 100;
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Menuju Kemandirian Finansial" sub="Saat penghasilan pasif menutupi seluruh pengeluaran" />
      <div style={{ marginTop: 50, marginLeft: 40, marginRight: 40 }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 15, color: palette.muted }}>Pengeluaran bulanan</span>
            <span style={{ fontSize: 15, color: palette.kewajiban, fontWeight: 700 }}>100%</span>
          </div>
          <div style={{ height: 22, borderRadius: 999, background: palette.kewajiban, width: "100%" }} />
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 15, color: palette.muted }}>Penghasilan pasif (investasi)</span>
            <span style={{ fontSize: 15, color: palette.aset, fontWeight: 700 }}>{Math.round(pasif)}%</span>
          </div>
          <div style={{ height: 22, borderRadius: 999, background: palette.aset, width: `${pasif}%` }} />
        </div>
      </div>
      <div style={{ marginTop: 34, textAlign: "center", opacity: cross ? 1 : 0.3 }}>
        <span style={{ fontSize: 20, fontWeight: 800, color: cross ? palette.aset : palette.muted }}>
          {cross ? "Merdeka secara finansial: bekerja jadi pilihan" : "Terus menumbuhkan aset..."}
        </span>
      </div>
      <div style={{ marginTop: 30, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Semakin besar aset yang menghasilkan, semakin dekat titik saat kamu tidak lagi bergantung pada gaji.
      </div>
    </AbsoluteFill>
  );
};

export const KemandirianFinansialVideoDuration = 200;
