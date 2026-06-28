import { useState } from "react";

interface Step {
  icon: string;
  title: string;
  desc: string;
  items: string[];
}

const STEPS: Step[] = [
  {
    icon: "🗂️",
    title: "1. Siapkan dokumen",
    desc: "Kumpulkan data sebelum mulai mengisi, supaya lancar.",
    items: [
      "Rekap omzet (peredaran bruto) per bulan selama setahun",
      "Bukti bayar PPh final tiap bulan (NTPN)",
      "Bukti potong (jika ada penghasilan lain yang dipotong)",
      "Daftar harta dan utang per 31 Desember",
    ],
  },
  {
    icon: "🔑",
    title: "2. Masuk DJP Online",
    desc: "Akses sistem pelaporan resmi.",
    items: [
      "Buka djponline.pajak.go.id (atau Coretax)",
      "Login dengan NPWP/NIK dan kata sandi",
      "Pilih menu Lapor lalu e-Filing / e-Form",
    ],
  },
  {
    icon: "📄",
    title: "3. Pilih formulir SPT",
    desc: "Untuk UMKM orang pribadi biasanya formulir 1770.",
    items: [
      "Pilih SPT Tahunan Orang Pribadi (1770)",
      "Pilih tahun pajak yang dilaporkan",
      "Pilih status: normal (bukan pembetulan)",
    ],
  },
  {
    icon: "✍️",
    title: "4. Isi penghasilan UMKM",
    desc: "Masukkan omzet dan PPh final yang sudah dibayar.",
    items: [
      "Isi peredaran bruto (omzet) per bulan",
      "Sistem menghitung PPh final 0,5% (yang sudah kamu bayar)",
      "Pastikan total cocok dengan bukti bayar (NTPN)",
    ],
  },
  {
    icon: "🏠",
    title: "5. Isi harta & utang",
    desc: "Laporkan kondisi kekayaan, ini wajib walau sederhana.",
    items: [
      "Daftar harta: tabungan, kendaraan, tanah, dll",
      "Daftar utang (jika ada)",
      "Daftar anggota keluarga/tanggungan",
    ],
  },
  {
    icon: "📤",
    title: "6. Kirim & simpan bukti",
    desc: "Selesaikan dan amankan buktinya.",
    items: [
      "Minta kode verifikasi (lewat email/aplikasi)",
      "Masukkan kode lalu kirim SPT",
      "Simpan Bukti Penerimaan Elektronik (BPE)",
    ],
  },
];

export function WizardSPT() {
  const [step, setStep] = useState(0);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const s = STEPS[step];

  const toggle = (key: string) => setChecked((c) => ({ ...c, [key]: !c[key] }));

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧭 Panduan Lapor SPT Tahunan UMKM</div>
      <p className="mb-4 text-xs text-ink-faint">Ikuti langkah demi langkah. Centang tiap poin sambil kamu kerjakan.</p>

      {/* progress dots */}
      <div className="mb-4 flex gap-1.5">
        {STEPS.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-brand-500" : "bg-line"}`}
            title={`Langkah ${i + 1}`}
          />
        ))}
      </div>

      <div className="rounded-xl bg-canvas p-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{s.icon}</span>
          <div>
            <div className="text-base font-bold text-ink">{s.title}</div>
            <div className="text-sm text-ink-faint">{s.desc}</div>
          </div>
        </div>
        <ul className="mt-3 space-y-2">
          {s.items.map((it, i) => {
            const key = `${step}-${i}`;
            const on = !!checked[key];
            return (
              <li key={key}>
                <button onClick={() => toggle(key)} className="flex w-full items-start gap-2 text-left text-sm">
                  <span
                    className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border text-xs ${
                      on ? "border-emerald-500 bg-emerald-500 text-white" : "border-line-strong bg-white"
                    }`}
                  >
                    {on ? "✓" : ""}
                  </span>
                  <span className={on ? "text-ink-faint line-through" : "text-ink-soft"}>{it}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button onClick={() => setStep((x) => Math.max(0, x - 1))} disabled={step === 0} className="btn-ghost">
          ← Sebelumnya
        </button>
        <span className="text-xs text-ink-faint">
          Langkah {step + 1} dari {STEPS.length}
        </span>
        {step < STEPS.length - 1 ? (
          <button onClick={() => setStep((x) => Math.min(STEPS.length - 1, x + 1))} className="btn-primary">
            Lanjut →
          </button>
        ) : (
          <span className="btn bg-emerald-500 text-white">Selesai 🎉</span>
        )}
      </div>
    </div>
  );
}
