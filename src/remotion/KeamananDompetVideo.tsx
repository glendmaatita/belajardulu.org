import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { palette, font } from "./theme";
import { Title, usePop, useFade } from "./anim";

// Keamanan dompet kripto: seed phrase 12 kata adalah kunci utama, hardware wallet menyimpan
// private key offline, dan waspada phishing. Kontras "aman" vs "bahaya".
const SEED = [
  "ombak", "kayu", "lentera", "rajut", "padi", "embun",
  "gerbang", "sauh", "merpati", "tanah", "kunci", "fajar",
];

const Word: React.FC<{ index: number; text: string; reveal: number }> = ({ index, text, reveal }) => {
  const { scale, opacity } = usePop(40 + index * 4);
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity: opacity * reveal,
        background: palette.bgSoft,
        border: `1px solid ${palette.aset}`,
        borderRadius: 10,
        padding: "8px 10px",
        fontSize: 15,
        color: palette.text,
        fontFamily: font,
      }}
    >
      <span style={{ color: palette.muted, fontWeight: 700, marginRight: 6 }}>{index + 1}.</span>
      {text}
    </div>
  );
};

const Card: React.FC<{
  title: string;
  body: string;
  ok: boolean;
  delay: number;
}> = ({ title, body, ok, delay }) => {
  const { scale, opacity } = usePop(delay);
  const color = ok ? palette.aset : palette.kredit;
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: palette.bgSoft,
        borderRadius: 16,
        padding: "16px 20px",
        width: 280,
        border: `2px solid ${color}`,
        fontFamily: font,
      }}
    >
      <div style={{ fontSize: 17, fontWeight: 800, color }}>
        {ok ? "Aman" : "Bahaya"}: {title}
      </div>
      <div style={{ fontSize: 15, color: palette.muted, marginTop: 6 }}>{body}</div>
    </div>
  );
};

export const KeamananDompetVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const seedReveal = interpolate(frame, [30, 50], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const note = useFade(200, 18);

  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "40px 50px" }}>
      <Title text="Keamanan Dompet Kripto" sub="Seed phrase adalah kunci utama. Siapa pun yang memilikinya menguasai dana Anda" />

      <div style={{ marginTop: 22, fontSize: 17, color: palette.text, fontWeight: 700 }}>
        Seed phrase 12 kata (jangan pernah dibagikan)
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 8,
          marginTop: 10,
          maxWidth: 720,
        }}
      >
        {SEED.map((w, i) => (
          <Word key={i} index={i} text={w} reveal={seedReveal} />
        ))}
      </div>

      <div style={{ display: "flex", gap: 22, marginTop: 30, flexWrap: "wrap" }}>
        <Card
          title="Hardware wallet"
          body="Private key disimpan offline, tidak pernah menyentuh internet."
          ok
          delay={110}
        />
        <Card
          title="Seed dirahasiakan"
          body="Dicatat di kertas, disimpan sendiri, tidak difoto atau diunggah."
          ok
          delay={130}
        />
        <Card
          title="Membagikan seed"
          body="Memberi 12 kata ke orang lain sama dengan menyerahkan seluruh dana."
          ok={false}
          delay={150}
        />
        <Card
          title="Situs palsu (phishing)"
          body="Tautan tiruan meminta seed phrase. Dompet asli tidak pernah memintanya."
          ok={false}
          delay={170}
        />
      </div>

      <div style={{ opacity: note, marginTop: 24, fontSize: 18, color: palette.muted }}>
        Simpan kunci secara offline dan rahasiakan seed phrase. Tidak ada layanan sah yang memintanya.
      </div>
    </AbsoluteFill>
  );
};

export const KeamananDompetVideoDuration = 225;
