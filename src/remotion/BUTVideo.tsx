import { AbsoluteFill } from "remotion";
import { palette, font } from "./theme";
import { Title, Chip, Arrow, useFade } from "./anim";

// Bentuk Usaha Tetap (BUT): kehadiran perusahaan asing di Indonesia yang
// menimbulkan hak pemajakan. Laba BUT kena PPh Badan, dan laba setelah pajak
// yang dikirim ke pusat kena Branch Profit Tax (PPh 26 ayat 4) 20% atau tarif treaty.
export const BUTVideo: React.FC = () => {
  const note = useFade(185, 18);
  return (
    <AbsoluteFill style={{ background: palette.bg, fontFamily: font, padding: "44px 50px" }}>
      <Title text="Bentuk Usaha Tetap (BUT)" sub="Kehadiran usaha asing yang dipajaki seperti badan dalam negeri" />
      <div style={{ marginTop: 50, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        <Chip label="Kantor pusat (luar negeri)" value="Perusahaan asing" bg={palette.bgSoft} fg={palette.text} delay={20} width={230} />
        <Arrow delay={45} label="buka cabang/proyek" />
        <Chip label="BUT di Indonesia" value="Laba kena PPh 22%" bg={palette.ekuitas} delay={60} width={210} />
      </div>
      <div style={{ marginTop: 38, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <Chip label="Laba setelah pajak" value="Dikirim ke pusat" bg={palette.kewajiban} delay={110} width={210} />
        <Arrow delay={135} label="Branch Profit Tax" />
        <Chip label="PPh 26 (4)" value="20% atau tarif treaty" bg={palette.kredit} fg="#fff" delay={150} width={210} />
      </div>
      <div style={{ marginTop: 40, opacity: note, textAlign: "center", fontSize: 17, color: palette.muted }}>
        Ada atau tidaknya BUT menentukan apakah Indonesia berhak memajaki laba usaha perusahaan asing.
      </div>
    </AbsoluteFill>
  );
};

export const BUTVideoDuration = 210;
