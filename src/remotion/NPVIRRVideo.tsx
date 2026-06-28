import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop } from "./anim";

// NPV: arus kas masa depan didiskon ke nilai kini, lalu dibandingkan dengan investasi awal.
const CF = [
  { th: "Th 0", nominal: -100, pv: -100, warna: palette.kredit },
  { th: "Th 1", nominal: 40, pv: 36, warna: palette.aset },
  { th: "Th 2", nominal: 50, pv: 41, warna: palette.aset },
  { th: "Th 3", nominal: 60, pv: 45, warna: palette.aset },
];

export const NPVIRRVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const npv = CF.reduce((a, b) => a + b.pv, 0); // 22
  const maxAbs = 100;

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="NPV: Menilai Kelayakan Investasi" sub="Arus kas masa depan didiskon ke nilai kini, lalu dijumlahkan" />

      <div style={{ display: "flex", gap: 26, marginTop: 40, alignItems: "flex-end", height: 300 }}>
        {CF.map((c, i) => {
          const { opacity } = usePop(20 + i * 24);
          const hNom = (Math.abs(c.nominal) / maxAbs) * 120;
          const hPv = (Math.abs(c.pv) / maxAbs) * 120;
          const naik = c.nominal >= 0;
          return (
            <div key={i} style={{ opacity, textAlign: "center", flex: 1 }}>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", alignItems: "flex-end", height: 150 }}>
                <div title="nominal" style={{ width: 38, height: hNom, background: "rgba(255,255,255,0.18)", borderRadius: 6, alignSelf: naik ? "flex-end" : "flex-start" }} />
                <div title="nilai kini" style={{ width: 38, height: hPv, background: c.warna, borderRadius: 6, alignSelf: naik ? "flex-end" : "flex-start" }} />
              </div>
              <div style={{ fontSize: 18, color: palette.text, marginTop: 10, fontWeight: 700 }}>{c.th}</div>
              <div style={{ fontSize: 15, color: palette.muted }}>{c.nominal} &rarr; PV {c.pv}</div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: 18, marginTop: 24 }}>
        <Legend warna="rgba(255,255,255,0.18)" label="Nominal arus kas" />
        <Legend warna={palette.aset} label="Nilai kini (PV) setelah didiskon" />
      </div>

      <div style={{ opacity: frame > 130 ? 1 : 0, marginTop: 22, display: "flex", gap: 40, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 18, color: palette.muted }}>NPV = jumlah semua nilai kini</div>
          <div style={{ fontSize: 40, fontWeight: 900, color: npv >= 0 ? palette.aset : palette.kredit }}>+{npv}</div>
        </div>
        <div style={{ fontSize: 22, color: palette.text, fontWeight: 700 }}>
          NPV &gt; 0 &rarr; proyek menambah nilai, layak diterima.
        </div>
      </div>
    </AbsoluteFill>
  );
};

function Legend({ warna, label }: { warna: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ width: 18, height: 18, borderRadius: 5, background: warna, display: "inline-block" }} />
      <span style={{ fontSize: 16, color: palette.muted }}>{label}</span>
    </div>
  );
}

export const NPVIRRVideoDuration = 200;
