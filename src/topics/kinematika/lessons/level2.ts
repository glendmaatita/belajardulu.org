import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "membaca-grafik-gerak",
    levelId: "grafik-gerak",
    order: 1,
    title: "Membaca Grafik Gerak",
    summary:
      "Grafik posisi-waktu dan kecepatan-waktu adalah 'bahasa visual' gerak. Sekali bisa membacanya, kamu tahu seluruh cerita gerak tanpa satu rumus pun.",
    durationMin: 14,
    tags: ["kinematika", "grafik", "posisi-waktu", "kecepatan-waktu"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah garis miring naik, sebuah garis datar, sebuah kurva melengkung. Tiga gambar sederhana ini bisa menceritakan apakah sebuah benda diam, melaju tetap, atau makin kencang. Sebelum berhitung, ayo belajar 'membaca' gerak lewat grafik, karena di sinilah kemiringan dan luas berbicara.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Kemiringan dan Luas pada Grafik Gerak",
        caption: "Kemiringan grafik menyatakan laju perubahan; luas di bawah grafik menyatakan akumulasi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lihat grafik <strong>posisi terhadap waktu</strong>. Garis yang makin curam berarti benda makin cepat; garis datar berarti benda diam. Sekarang lihat grafik <strong>kecepatan terhadap waktu</strong>: kemiringannya adalah percepatan, dan luas di bawahnya adalah perpindahan. Coba bayangkan bentuk garis untuk mobil yang berhenti di lampu merah lalu melaju lagi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua grafik, dua makna kemiringan",
        html: "Pada grafik <strong>posisi-waktu (s-t)</strong>, kemiringan = kecepatan. Pada grafik <strong>kecepatan-waktu (v-t)</strong>, kemiringan = percepatan, dan luas di bawah garis = perpindahan.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Grafik Posisi-Waktu: Gerak Lurus Beraturan",
        unit: "meter",
        source: "ilustrasi edukatif",
        note: "Garis lurus dengan kemiringan tetap berarti kecepatan tetap. Tiap detik posisi naik 10 m, jadi kecepatannya 10 m/s.",
        data: [
          { label: "0 s", value: 0, color: "#34d399" },
          { label: "1 s", value: 10, color: "#34d399" },
          { label: "2 s", value: 20, color: "#34d399" },
          { label: "3 s", value: 30, color: "#34d399" },
          { label: "4 s", value: 40, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pada grafik posisi-waktu, posisi benda naik dari 0 ke 40 m dalam 4 s membentuk garis lurus. Berapa kecepatannya (kemiringan grafik)?",
        answer: 10,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Kemiringan grafik s-t adalah kecepatan = perubahan posisi dibagi waktu = 40 ÷ 4 = <strong>10 m/s</strong>. Garis lurus berarti kemiringan tetap, jadi kecepatannya konstan.",
        hint: "Kemiringan = (perubahan sumbu tegak) dibagi (perubahan sumbu datar).",
      },
      {
        type: "calcExercise",
        prompt:
          "Grafik kecepatan-waktu menunjukkan kecepatan tetap 10 m/s selama 4 s. Berapa perpindahannya (luas di bawah grafik)?",
        answer: 40,
        tolerance: 0.1,
        suffix: " m",
        solution:
          "Luas di bawah grafik v-t adalah perpindahan. Bentuknya persegi panjang: 10 m/s × 4 s = <strong>40 m</strong>. Inilah cara grafik 'menyimpan' perpindahan sebagai luas.",
        hint: "Luas persegi panjang = tinggi (kecepatan) × lebar (waktu).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan bentuk grafik dengan jenis geraknya.",
        pairs: [
          { left: "Garis datar pada grafik v-t", right: "Kecepatan tetap (GLB)" },
          { left: "Garis miring naik pada grafik v-t", right: "Dipercepat beraturan (GLBB)" },
          { left: "Garis lurus miring pada grafik s-t", right: "Kecepatan tetap" },
          { left: "Kurva melengkung pada grafik s-t", right: "Kecepatan berubah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Grafik Perjalanan Kereta di Layar Masinis",
        html: "Di kabin kereta modern, layar menampilkan <strong>grafik kecepatan terhadap waktu</strong> sepanjang rute. Saat kereta berhenti di stasiun, garis menyentuh nol; saat melaju tetap, garis mendatar; saat berangkat, garis menanjak. Masinis bisa membaca seluruh perjalanan tanpa satu rumus, hanya dengan memahami bahwa kemiringan adalah percepatan dan luas di bawah garis adalah jarak tempuh. Grafik adalah cara fisika menceritakan gerak secara utuh dalam satu gambar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Baru sekarang rumusnya jelas maknanya. <strong>Pada grafik s-t: kecepatan = kemiringan = Δs / Δt.</strong> <strong>Pada grafik v-t: percepatan = kemiringan = Δv / Δt, dan perpindahan = luas di bawah grafik.</strong> Grafik bukan hiasan, melainkan sumber langsung semua besaran kinematika.",
      },
      {
        type: "takeaways",
        items: [
          "Kemiringan grafik posisi-waktu menyatakan kecepatan.",
          "Kemiringan grafik kecepatan-waktu menyatakan percepatan.",
          "Luas di bawah grafik kecepatan-waktu menyatakan perpindahan.",
          "Garis lurus berarti laju perubahan tetap; kurva melengkung berarti berubah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kemiringan grafik posisi-waktu menyatakan?",
            options: ["Percepatan", "Kecepatan", "Jarak", "Waktu"],
            answer: 1,
            explain: "Pada grafik s-t, kemiringan = Δs/Δt = kecepatan.",
          },
          {
            q: "Garis datar (mendatar) pada grafik posisi-waktu berarti?",
            options: ["Benda diam", "Benda dipercepat", "Benda diperlambat", "Benda berbalik arah"],
            answer: 0,
            explain: "Posisi tidak berubah terhadap waktu, jadi benda diam.",
          },
          {
            q: "Pada grafik kecepatan-waktu, luas di bawah garis menyatakan?",
            options: ["Percepatan", "Kecepatan rata-rata", "Perpindahan", "Waktu tempuh"],
            answer: 2,
            explain: "Luas di bawah grafik v-t sama dengan perpindahan.",
          },
          {
            q: "Garis miring naik pada grafik kecepatan-waktu menandakan?",
            options: ["Kecepatan tetap", "Percepatan tetap (dipercepat)", "Benda diam", "Perlambatan"],
            answer: 1,
            explain: "Kemiringan positif pada v-t berarti percepatan positif.",
          },
          {
            q: "Grafik v-t menunjukkan kecepatan tetap 8 m/s selama 5 s. Perpindahannya?",
            options: ["13 m", "1,6 m", "40 m", "3 m"],
            answer: 2,
            explain: "Luas = 8 × 5 = 40 m.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "grafik-posisi-waktu",
    levelId: "grafik-gerak",
    order: 2,
    title: "Grafik Posisi-Waktu",
    summary:
      "Grafik posisi terhadap waktu adalah peta perjalanan benda. Kemiringannya menceritakan kecepatan, dan bentuk garisnya membedakan diam, maju, dan mundur.",
    durationMin: 14,
    tags: ["kinematika", "grafik", "posisi-waktu", "kemiringan"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan merekam posisi seekor semut tiap detik, lalu menggambarnya sebagai titik-titik pada kertas: waktu mendatar, posisi tegak. Garis yang terbentuk seketika bercerita. Datar berarti diam, menanjak berarti maju, menurun berarti mundur ke titik awal. Sebelum menghitung kemiringan, ayo baca dulu kisah yang disimpan garis ini.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Garis yang Menceritakan Posisi",
        caption: "Pada grafik s-t, kecuraman garis adalah kecepatan dan arah kemiringan adalah arah gerak.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil grafik posisi-waktu lalu telusuri dengan jari dari kiri ke kanan. Saat jarimu naik tajam, benda melaju cepat menjauh; saat mendatar, benda berhenti; saat menurun, benda kembali mendekati titik awal. <strong>Makin curam garis, makin besar kecepatannya.</strong> Garis melengkung naik makin tajam berarti benda dipercepat.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Membaca grafik s-t",
        html: "Kemiringan positif = bergerak maju; kemiringan nol (datar) = diam; kemiringan negatif = bergerak mundur. Kurva yang makin curam = dipercepat; kurva yang makin landai = diperlambat.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Posisi-Waktu: Maju, Berhenti, lalu Maju Lagi",
        unit: "meter",
        source: "ilustrasi edukatif",
        note: "0-2 s posisi naik 0 ke 20 m (10 m/s). 2-4 s garis datar di 20 m (diam). 4-6 s naik 20 ke 50 m (15 m/s, lebih curam).",
        data: [
          { label: "0 s", value: 0, color: "#2dd4bf" },
          { label: "1 s", value: 10, color: "#2dd4bf" },
          { label: "2 s", value: 20, color: "#2dd4bf" },
          { label: "3 s", value: 20, color: "#2dd4bf" },
          { label: "4 s", value: 20, color: "#2dd4bf" },
          { label: "5 s", value: 35, color: "#2dd4bf" },
          { label: "6 s", value: 50, color: "#2dd4bf" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pada grafik di atas, antara 0 s dan 2 s posisi berubah dari 0 ke 20 m. Berapa kecepatan pada selang itu?",
        answer: 10,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Kecepatan = kemiringan = Δs / Δt = (20 − 0) ÷ (2 − 0) = 20 ÷ 2 = <strong>10 m/s</strong>.",
        hint: "Bagi perubahan posisi dengan selang waktunya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada selang 4 s sampai 6 s, posisi berubah dari 20 m ke 50 m. Berapa kecepatannya?",
        answer: 15,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Kecepatan = (50 − 20) ÷ (6 − 4) = 30 ÷ 2 = <strong>15 m/s</strong>. Garis lebih curam daripada selang awal, sehingga kecepatannya lebih besar.",
        hint: "Kemiringan yang lebih curam berarti kecepatan lebih besar.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan bentuk garis pada grafik posisi-waktu sesuai geraknya.",
        buckets: ["Diam", "Bergerak maju", "Bergerak mundur"],
        items: [
          { text: "Garis mendatar (sejajar sumbu waktu)", bucket: "Diam" },
          { text: "Garis menanjak ke kanan atas", bucket: "Bergerak maju" },
          { text: "Garis menurun ke kanan bawah", bucket: "Bergerak mundur" },
          { text: "Garis miring naik makin curam", bucket: "Bergerak maju" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Grafik Lari pada Aplikasi Olahraga",
        html: "Aplikasi lari menggambar <strong>posisi (jarak) terhadap waktu</strong> sepanjang sesi. Saat kamu berhenti di lampu merah, garis mendatar; saat sprint, garis menanjak tajam; saat jogging santai, garis menanjak landai. Pelatih bisa menebak intensitas latihanmu hanya dari kecuraman garis tanpa melihat angka kecepatan, karena <strong>kemiringan grafik posisi-waktu adalah kecepatan</strong>. Satu gambar merangkum seluruh ritme larimu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah membaca grafiknya, rumusnya jelas. <strong>Kecepatan pada grafik posisi-waktu = kemiringan garis = Δs / Δt.</strong> Kemiringan positif berarti maju, nol berarti diam, negatif berarti mundur. Untuk garis lurus, kecepatan tetap; untuk kurva, kecepatan adalah kemiringan garis singgung di tiap titik.",
      },
      {
        type: "takeaways",
        items: [
          "Pada grafik s-t, kecepatan adalah kemiringan garis (Δs / Δt).",
          "Garis datar berarti diam; makin curam berarti makin cepat.",
          "Kemiringan negatif (garis menurun) berarti bergerak mundur ke arah awal.",
          "Kurva yang makin curam menandakan benda dipercepat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada grafik posisi-waktu, kecepatan ditunjukkan oleh?",
            options: ["Tinggi garis", "Kemiringan garis", "Luas di bawah garis", "Panjang sumbu waktu"],
            answer: 1,
            explain: "Kemiringan grafik s-t sama dengan Δs/Δt = kecepatan.",
          },
          {
            q: "Garis yang menurun ke kanan bawah pada grafik s-t berarti benda?",
            options: ["Diam", "Bergerak maju", "Bergerak mundur ke titik awal", "Dipercepat"],
            answer: 2,
            explain: "Posisi mengecil terhadap waktu, jadi benda mundur.",
          },
          {
            q: "Posisi naik dari 5 m ke 25 m dalam 4 s. Kecepatannya?",
            options: ["5 m/s", "20 m/s", "30 m/s", "80 m/s"],
            answer: 0,
            explain: "(25 − 5) ÷ 4 = 20 ÷ 4 = 5 m/s.",
          },
          {
            q: "Dua garis lurus pada grafik s-t, A lebih curam dari B. Artinya?",
            options: ["A lebih lambat", "A lebih cepat", "Kecepatan sama", "A diam"],
            answer: 1,
            explain: "Makin curam kemiringan, makin besar kecepatan.",
          },
          {
            q: "Kurva pada grafik s-t yang melengkung makin tajam menandakan?",
            options: ["Benda diam", "Kecepatan tetap", "Benda dipercepat", "Benda berbalik arah"],
            answer: 2,
            explain: "Kemiringan yang terus membesar berarti kecepatan bertambah (dipercepat).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "grafik-kecepatan-waktu",
    levelId: "grafik-gerak",
    order: 3,
    title: "Grafik Kecepatan-Waktu",
    summary:
      "Grafik kecepatan terhadap waktu menyimpan dua harta sekaligus: kemiringannya adalah percepatan, dan luas di bawahnya adalah perpindahan.",
    durationMin: 14,
    tags: ["kinematika", "grafik", "kecepatan-waktu", "luas"],
    blocks: [
      {
        type: "paragraph",
        html: "Grafik kecepatan-waktu terlihat sederhana, hanya garis di atas sumbu waktu. Tetapi ia menyimpan dua rahasia. Kecuramannya memberitahu seberapa cepat kecepatan berubah, dan luas wilayah di bawahnya memberitahu seberapa jauh benda berpindah. Sebelum menghitung, ayo gali dua harta yang tersembunyi di grafik ini.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Kemiringan dan Luas di Grafik v-t",
        caption: "Kemiringan grafik v-t adalah percepatan; luas di bawahnya adalah perpindahan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lihat grafik kecepatan-waktu. Garis mendatar di ketinggian tertentu berarti benda melaju tetap (percepatan nol). Garis menanjak berarti dipercepat; garis menurun berarti diperlambat. Sekarang bayangkan <strong>mengarsir wilayah</strong> antara garis dan sumbu waktu. Luas arsiran itu sama dengan jarak yang ditempuh benda. Dua informasi dari satu gambar.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua harta grafik v-t",
        html: "<strong>Kemiringan</strong> grafik v-t = percepatan (a = Δv/Δt). <strong>Luas</strong> di bawah grafik v-t = perpindahan. Untuk garis mendatar, luasnya persegi panjang; untuk garis miring, luasnya berbentuk segitiga atau trapesium.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kecepatan-Waktu: Dipercepat dari 0 ke 20 m/s",
        unit: "m/s",
        source: "ilustrasi edukatif",
        note: "Garis lurus naik dari 0 ke 20 m/s dalam 4 s. Kemiringan = percepatan 5 m/s². Luas segitiga = ½ × 4 × 20 = 40 m (perpindahan).",
        data: [
          { label: "0 s", value: 0, color: "#22d3ee" },
          { label: "1 s", value: 5, color: "#22d3ee" },
          { label: "2 s", value: 10, color: "#22d3ee" },
          { label: "3 s", value: 15, color: "#22d3ee" },
          { label: "4 s", value: 20, color: "#22d3ee" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Grafik v-t berupa garis lurus naik dari 0 ke 20 m/s dalam 4 s. Berapa percepatannya (kemiringan)?",
        answer: 5,
        tolerance: 0.1,
        suffix: " m/s²",
        solution:
          "Percepatan = kemiringan = Δv / Δt = (20 − 0) ÷ 4 = <strong>5 m/s²</strong>.",
        hint: "Bagi perubahan kecepatan dengan selang waktu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada grafik yang sama (kecepatan naik lurus 0 ke 20 m/s dalam 4 s), berapa perpindahan benda (luas di bawah grafik)?",
        answer: 40,
        tolerance: 0.5,
        suffix: " m",
        solution:
          "Luas di bawah garis berbentuk segitiga: ½ × alas × tinggi = ½ × 4 s × 20 m/s = <strong>40 m</strong>. Itulah perpindahan benda.",
        hint: "Bentuknya segitiga, jadi luas = ½ × waktu × kecepatan akhir.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan bentuk grafik v-t dengan maknanya.",
        pairs: [
          { left: "Garis mendatar di atas sumbu", right: "Kecepatan tetap, percepatan nol" },
          { left: "Garis menanjak", right: "Dipercepat (percepatan positif)" },
          { left: "Garis menurun", right: "Diperlambat (percepatan negatif)" },
          { left: "Luas di bawah garis", right: "Perpindahan benda" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kotak Hitam dan Rekonstruksi Kecelakaan",
        html: "Penyidik kecelakaan sering merekonstruksi gerak kendaraan dari data <strong>kecepatan terhadap waktu</strong> pada perekam data. Dari kemiringan grafik mereka membaca <strong>percepatan atau perlambatan</strong> saat pengereman mendadak, dan dari <strong>luas di bawah grafik</strong> mereka menghitung jarak yang masih ditempuh sebelum berhenti. Tanpa mengukur langsung di lokasi, grafik v-t memberi dua jawaban penting sekaligus: seberapa keras mengerem dan sejauh apa meluncur.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya berdiri di atas pemahaman. <strong>Percepatan = kemiringan grafik v-t = Δv / Δt.</strong> <strong>Perpindahan = luas di bawah grafik v-t.</strong> Untuk garis mendatar luasnya persegi panjang (v × t), untuk garis dari nol berbentuk segitiga (½ × t × v), dan untuk kecepatan awal tak nol berbentuk trapesium (½ × (v₀ + v) × t).",
      },
      {
        type: "takeaways",
        items: [
          "Kemiringan grafik kecepatan-waktu adalah percepatan (a = Δv/Δt).",
          "Luas di bawah grafik kecepatan-waktu adalah perpindahan.",
          "Garis mendatar berarti percepatan nol (kecepatan tetap).",
          "Luas berbentuk persegi panjang, segitiga, atau trapesium sesuai bentuk grafik.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kemiringan grafik kecepatan-waktu menyatakan?",
            options: ["Perpindahan", "Percepatan", "Jarak", "Kelajuan rata-rata"],
            answer: 1,
            explain: "Pada grafik v-t, kemiringan = Δv/Δt = percepatan.",
          },
          {
            q: "Luas di bawah grafik kecepatan-waktu menyatakan?",
            options: ["Percepatan", "Perpindahan", "Waktu", "Kecepatan maksimum"],
            answer: 1,
            explain: "Luas di bawah grafik v-t sama dengan perpindahan.",
          },
          {
            q: "Garis mendatar pada grafik v-t di ketinggian 12 m/s berarti?",
            options: ["Benda diam", "Kecepatan tetap 12 m/s", "Dipercepat", "Diperlambat"],
            answer: 1,
            explain: "Garis mendatar berarti kecepatan konstan, percepatan nol.",
          },
          {
            q: "Kecepatan naik lurus dari 0 ke 10 m/s dalam 5 s. Perpindahannya?",
            options: ["50 m", "25 m", "2 m", "15 m"],
            answer: 1,
            explain: "Luas segitiga = ½ × 5 × 10 = 25 m.",
          },
          {
            q: "Garis menurun pada grafik v-t menandakan?",
            options: ["Dipercepat", "Diperlambat", "Diam", "Kecepatan tetap"],
            answer: 1,
            explain: "Kecepatan berkurang terhadap waktu, jadi diperlambat (percepatan negatif).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "grafik-percepatan-waktu",
    levelId: "grafik-gerak",
    order: 4,
    title: "Grafik Percepatan-Waktu",
    summary:
      "Grafik percepatan terhadap waktu adalah lapisan ketiga. Luas di bawahnya bukan perpindahan, melainkan perubahan kecepatan. Tiga grafik gerak akhirnya terhubung.",
    durationMin: 13,
    tags: ["kinematika", "grafik", "percepatan-waktu", "perubahan-kecepatan"],
    blocks: [
      {
        type: "paragraph",
        html: "Kita sudah melihat grafik posisi dan kecepatan. Sekarang lapisan ketiga: grafik percepatan terhadap waktu. Sering kali bentuknya hanya garis mendatar, terlihat membosankan. Tetapi luas di bawahnya menyimpan sesuatu yang penting, yaitu seberapa banyak kecepatan bertambah. Ayo telusuri dulu sebelum rumusnya muncul.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Lapisan Ketiga Grafik Gerak",
        caption: "Luas di bawah grafik percepatan-waktu sama dengan perubahan kecepatan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pada GLBB, percepatan tetap, sehingga grafik percepatan-waktu hanya berupa <strong>garis mendatar</strong>. Bayangkan mengarsir wilayah di bawah garis itu selama beberapa detik. Luas arsiran (percepatan × waktu) ternyata sama dengan <strong>tambahan kecepatan</strong> yang dialami benda. Tiga grafik gerak saling bertingkat: dari percepatan kita naik ke kecepatan, dari kecepatan kita naik ke posisi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tangga tiga grafik",
        html: "Luas di bawah grafik <strong>percepatan-waktu</strong> = perubahan kecepatan (Δv). Luas di bawah grafik <strong>kecepatan-waktu</strong> = perpindahan. Kemiringan naik ke arah sebaliknya: kemiringan s-t = kecepatan, kemiringan v-t = percepatan.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Percepatan-Waktu: GLBB dengan a = 4 m/s²",
        unit: "m/s²",
        source: "ilustrasi edukatif",
        note: "Percepatan tetap 4 m/s² selama 5 s. Garis mendatar. Luas = 4 × 5 = 20 m/s, yaitu tambahan kecepatan benda.",
        data: [
          { label: "0 s", value: 4, color: "#a78bfa" },
          { label: "1 s", value: 4, color: "#a78bfa" },
          { label: "2 s", value: 4, color: "#a78bfa" },
          { label: "3 s", value: 4, color: "#a78bfa" },
          { label: "4 s", value: 4, color: "#a78bfa" },
          { label: "5 s", value: 4, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Grafik percepatan-waktu menunjukkan a tetap 4 m/s² selama 5 s. Berapa perubahan kecepatan benda (luas di bawah grafik)?",
        answer: 20,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Luas di bawah grafik a-t = perubahan kecepatan = a × t = 4 × 5 = <strong>20 m/s</strong>. Artinya kecepatan benda bertambah 20 m/s selama 5 detik itu.",
        hint: "Luas persegi panjang = percepatan × waktu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika benda tadi mulai dari kecepatan 6 m/s lalu mengalami percepatan tetap 4 m/s² selama 5 s, berapa kecepatan akhirnya?",
        answer: 26,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Tambahan kecepatan = a × t = 4 × 5 = 20 m/s. Kecepatan akhir = kecepatan awal + tambahan = 6 + 20 = <strong>26 m/s</strong>. Ini sama dengan rumus v = v₀ + at.",
        hint: "Tambahkan luas grafik a-t (Δv) ke kecepatan awal.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap besaran sebagai 'luas di bawah grafik' atau 'kemiringan grafik'.",
        buckets: ["Luas di bawah grafik", "Kemiringan grafik"],
        items: [
          { text: "Perubahan kecepatan dari grafik a-t", bucket: "Luas di bawah grafik" },
          { text: "Perpindahan dari grafik v-t", bucket: "Luas di bawah grafik" },
          { text: "Percepatan dari grafik v-t", bucket: "Kemiringan grafik" },
          { text: "Kecepatan dari grafik s-t", bucket: "Kemiringan grafik" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sensor Percepatan di Ponsel",
        html: "Ponsel pintar memiliki <strong>akselerometer</strong> yang merekam percepatan tiap saat. Aplikasi penghitung langkah dan navigasi memanfaatkan data ini: dengan menjumlahkan (mengintegralkan) <strong>luas di bawah grafik percepatan-waktu</strong>, perangkat memperkirakan perubahan kecepatan, lalu dari kecepatan memperkirakan perpindahan. Itulah cara ponsel menebak gerakmu meski sinyal GPS hilang di terowongan. Tangga tiga grafik gerak bekerja diam-diam di sakumu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya menutup rangkaian. <strong>Perubahan kecepatan Δv = luas di bawah grafik a-t = a × t</strong> (untuk percepatan tetap). Maka <strong>v = v₀ + a·t</strong>, persis rumus GLBB. Tiga grafik gerak terhubung sebagai tangga: luas a-t memberi Δv, luas v-t memberi perpindahan; sebaliknya kemiringan s-t memberi kecepatan, kemiringan v-t memberi percepatan.",
      },
      {
        type: "takeaways",
        items: [
          "Luas di bawah grafik percepatan-waktu sama dengan perubahan kecepatan (Δv).",
          "Pada GLBB, grafik percepatan-waktu berupa garis mendatar.",
          "Δv = a × t, sehingga v = v₀ + a·t.",
          "Tiga grafik gerak terhubung: kemiringan naik dari posisi ke percepatan, luas turun dari percepatan ke posisi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Luas di bawah grafik percepatan-waktu menyatakan?",
            options: ["Perpindahan", "Perubahan kecepatan", "Kecepatan rata-rata", "Jarak tempuh"],
            answer: 1,
            explain: "Luas grafik a-t = a × t = perubahan kecepatan (Δv).",
          },
          {
            q: "Pada GLBB, bentuk grafik percepatan-waktu adalah?",
            options: ["Garis menanjak", "Garis menurun", "Garis mendatar", "Kurva melengkung"],
            answer: 2,
            explain: "Percepatan tetap, jadi grafik a-t berupa garis mendatar.",
          },
          {
            q: "Percepatan tetap 3 m/s² selama 4 s. Perubahan kecepatannya?",
            options: ["7 m/s", "12 m/s", "0,75 m/s", "1 m/s"],
            answer: 1,
            explain: "Δv = a × t = 3 × 4 = 12 m/s.",
          },
          {
            q: "Benda mulai 5 m/s, percepatan 2 m/s² selama 3 s. Kecepatan akhirnya?",
            options: ["6 m/s", "11 m/s", "10 m/s", "30 m/s"],
            answer: 1,
            explain: "v = v₀ + at = 5 + 2×3 = 5 + 6 = 11 m/s.",
          },
          {
            q: "Kemiringan grafik kecepatan-waktu menghasilkan besaran yang sama dengan?",
            options: [
              "Tinggi grafik percepatan-waktu",
              "Luas grafik posisi-waktu",
              "Tinggi grafik posisi-waktu",
              "Luas grafik percepatan-waktu",
            ],
            answer: 0,
            explain: "Kemiringan v-t = percepatan, yaitu tinggi (nilai) pada grafik a-t.",
          },
        ],
      },
    ],
  },
];
