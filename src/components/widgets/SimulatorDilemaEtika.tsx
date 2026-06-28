import { useMemo, useState } from "react";

// Bandingkan bagaimana tiga teori etika menilai sebuah dilema moral.
const DILEMA = [
  {
    teks: "Menarik tuas trolley: mengorbankan 1 orang untuk menyelamatkan 5.",
    utilitarian: { putusan: "Tarik tuas", alasan: "5 nyawa > 1 nyawa, manfaat terbesar." },
    deontologi: { putusan: "Ragu/menolak", alasan: "Sengaja memakai 1 orang sebagai alat melanggar martabat." },
    keutamaan: { putusan: "Tergantung karakter", alasan: "Apa yang akan dilakukan orang bijak dan welas asih?" },
  },
  {
    teks: "Berbohong demi melindungi teman dari bahaya.",
    utilitarian: { putusan: "Boleh berbohong", alasan: "Jika hasilnya lebih banyak kebaikan, dibenarkan." },
    deontologi: { putusan: "Tidak boleh", alasan: "Kejujuran adalah kewajiban universal, tanpa kecuali." },
    keutamaan: { putusan: "Cari jalan bijak", alasan: "Orang berkebajikan menyeimbangkan kejujuran dan kasih." },
  },
  {
    teks: "Menyontek agar lulus ujian penting.",
    utilitarian: { putusan: "Umumnya menolak", alasan: "Merusak kepercayaan sistem, kerugian jangka panjang besar." },
    deontologi: { putusan: "Menolak tegas", alasan: "Curang melanggar aturan yang tak bisa diuniversalkan." },
    keutamaan: { putusan: "Menolak", alasan: "Bertentangan dengan kejujuran dan integritas." },
  },
];

export function SimulatorDilemaEtika() {
  const [idx, setIdx] = useState(0);
  const d = useMemo(() => DILEMA[idx], [idx]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Simulator Dilema Etika</div>
      <p className="mb-4 text-xs text-ink-faint">
        Untuk dilema yang sama, tiga teori etika besar bisa memberi jawaban berbeda. Pilih dilema dan bandingkan.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {DILEMA.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${idx === i ? "bg-brand-600 text-white" : "bg-slate-100 text-ink-soft hover:bg-slate-200"}`}>
            Dilema {i + 1}
          </button>
        ))}
      </div>

      <div className="rounded-xl bg-slate-50 p-4">
        <div className="text-xs text-ink-faint">Dilema</div>
        <div className="mt-1 text-base font-semibold text-ink">{d.teks}</div>
      </div>

      <div className="mt-3 space-y-2">
        <Teori nama="Utilitarianisme" warna="emerald" putusan={d.utilitarian.putusan} alasan={d.utilitarian.alasan} />
        <Teori nama="Deontologi (Kant)" warna="sky" putusan={d.deontologi.putusan} alasan={d.deontologi.alasan} />
        <Teori nama="Etika Keutamaan" warna="amber" putusan={d.keutamaan.putusan} alasan={d.keutamaan.alasan} />
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Tidak ada jawaban tunggal yang disepakati semua. Berfilsafat etika berarti memahami dasar tiap pandangan dan menimbangnya secara jujur.
      </p>
    </div>
  );
}

function Teori({ nama, warna, putusan, alasan }: { nama: string; warna: "emerald" | "sky" | "amber"; putusan: string; alasan: string }) {
  const map = { emerald: "border-emerald-400 text-emerald-700", sky: "border-sky-400 text-sky-700", amber: "border-amber-400 text-amber-700" };
  return (
    <div className={`rounded-lg border-l-4 bg-white p-3 ${map[warna]}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold">{nama}</span>
        <span className="text-sm font-bold">{putusan}</span>
      </div>
      <div className="mt-1 text-xs text-ink-soft">{alasan}</div>
    </div>
  );
}
