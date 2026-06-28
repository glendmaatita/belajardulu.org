import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

const Zone: React.FC<{
  delay: number;
  color: string;
  scope: string;
  label: string;
  items: string[];
  x: number;
}> = ({ delay, color, scope, label, items, x }) => {
  const { scale, opacity } = usePop(delay);
  const listO = useFade(delay + 12, 14);
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: 150,
        width: 340,
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        border: "1px solid rgba(255,255,255,0.08)",
        borderTop: `5px solid ${color}`,
        borderRadius: 16,
        padding: "18px 20px",
        fontFamily: font,
      }}
    >
      <div style={{ display: "inline-block", background: color, color: "#06121f", fontWeight: 800, fontSize: 14, padding: "3px 12px", borderRadius: 999 }}>
        {scope}
      </div>
      <div style={{ marginTop: 8, fontSize: 20, fontWeight: 800, color: palette.text }}>{label}</div>
      <div style={{ opacity: listO, marginTop: 10 }}>
        {items.map((it, i) => (
          <div key={i} style={{ fontSize: 15, color: palette.muted, padding: "3px 0" }}>
            {it}
          </div>
        ))}
      </div>
    </div>
  );
};

export const ScopeEmisi: React.FC = () => {
  const frame = useCurrentFrame();
  const barO = interpolate(frame, [150, 175], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const split = [
    { label: "Scope 1", v: 20, c: "#ef4444" },
    { label: "Scope 2", v: 25, c: "#f59e0b" },
    { label: "Scope 3", v: 55, c: "#0ea5e9" },
  ];
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font }}>
      <div style={{ padding: "40px 56px 0" }}>
        <Title text="GHG Protocol: Scope 1, 2, 3" sub="Mengelompokkan emisi perusahaan agar terukur dan dapat dibandingkan" />
      </div>

      <Zone
        delay={25}
        color="#ef4444"
        scope="SCOPE 1"
        label="Langsung (dimiliki)"
        items={["🏭 Cerobong & proses pabrik", "🚚 Kendaraan operasional", "🔥 Boiler & genset milik sendiri"]}
        x={56}
      />
      <Zone
        delay={50}
        color="#f59e0b"
        scope="SCOPE 2"
        label="Energi yang dibeli"
        items={["⚡ Listrik dari PLN", "♨️ Uap / panas / pendingin beli", "🔌 Emisi dari pembangkitnya"]}
        x={430}
      />
      <Zone
        delay={75}
        color="#0ea5e9"
        scope="SCOPE 3"
        label="Rantai nilai (hulu & hilir)"
        items={["📦 Pemasok bahan baku", "🚢 Distribusi & logistik", "🧴 Pemakaian produk konsumen", "✈️ Perjalanan dinas, limbah"]}
        x={804}
      />

      {/* proportion bar */}
      <div style={{ position: "absolute", bottom: 70, left: 56, right: 56, opacity: barO, fontFamily: font }}>
        <div style={{ fontSize: 15, color: palette.muted, marginBottom: 8 }}>
          Porsi tipikal total emisi perusahaan (ilustrasi): Scope 3 sering paling besar
        </div>
        <div style={{ display: "flex", height: 40, borderRadius: 10, overflow: "hidden" }}>
          {split.map((s) => (
            <div
              key={s.label}
              style={{
                width: `${s.v}%`,
                background: s.c,
                color: "#06121f",
                fontWeight: 800,
                fontSize: 15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {s.label} {s.v}%
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const ScopeEmisiDuration = 220;
