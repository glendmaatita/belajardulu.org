import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

const Panel: React.FC<{ delay: number; accent: string; icon: string; title: string; items: string[]; x: number }> = ({ delay, accent, icon, title, items, x }) => {
  const { scale, opacity } = usePop(delay);
  const listO = useFade(delay + 14, 14);
  return (
    <div style={{ position: "absolute", left: x, top: 180, width: 440, transform: `scale(${scale})`, opacity, background: palette.bgSoft, border: "1px solid rgba(255,255,255,0.08)", borderTop: `5px solid ${accent}`, borderRadius: 18, padding: "24px 26px", fontFamily: font }}>
      <div style={{ fontSize: 46 }}>{icon}</div>
      <div style={{ fontSize: 26, fontWeight: 800, color: accent, marginTop: 6 }}>{title}</div>
      <div style={{ opacity: listO, marginTop: 14 }}>
        {items.map((it, i) => (
          <div key={i} style={{ fontSize: 17, color: palette.muted, padding: "6px 0", display: "flex", gap: 8 }}>
            <span style={{ color: accent }}>•</span>
            <span>{it}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const RisikoFisikTransisi: React.FC = () => {
  const note = useFade(150, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px", justifyContent: "flex-start" }}>
      <Title text="Dua Wajah Risiko Iklim bagi Keuangan" sub="Bukan hanya bencana fisik, tapi juga risiko transisi kebijakan" />
      <div style={{ marginTop: 30 }}>
        <Panel
          delay={25}
          accent={palette.kredit}
          icon="🌊"
          title="Risiko Fisik"
          items={["Banjir, badai, kekeringan", "Kenaikan muka air laut", "Kerusakan aset & rantai pasok", "Gagal panen, gangguan operasi"]}
          x={60}
        />
        <Panel
          delay={55}
          accent={palette.ekuitas}
          icon="📉"
          title="Risiko Transisi"
          items={["Kebijakan & harga karbon", "Teknologi bersih menggeser pasar", "Aset jadi stranded (tak laku)", "Pergeseran preferensi konsumen"]}
          x={560}
        />
      </div>
      <div style={{ position: "absolute", bottom: 50, left: 56, right: 56, opacity: note, textAlign: "center", fontSize: 18, color: palette.muted }}>
        Keduanya bisa menggerus nilai aset dan laba. Investor kini menilai keduanya sebelum menaruh modal.
      </div>
    </AbsoluteFill>
  );
};

export const RisikoFisikTransisiDuration = 200;
