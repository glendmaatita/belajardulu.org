import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "kerangka-acuan",
    levelId: "konsep-gerak",
    order: 1,
    title: "Kerangka Acuan",
    summary:
      "Sebelum bertanya apakah sesuatu bergerak, kita harus tahu 'bergerak terhadap apa'. Gerak selalu diukur relatif terhadap titik acuan yang kita pilih.",
    durationMin: 12,
    tags: ["kinematika", "kerangka-acuan", "relativitas", "posisi"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu duduk diam membaca ini, tetapi Bumi membawamu mengelilingi Matahari dengan laju sekitar 30 km/detik. Jadi kamu diam atau bergerak? Jawabannya bergantung pada satu hal: terhadap apa kita mengukurnya. Pertanyaan 'diam atau bergerak' tidak punya makna sampai kita memilih titik acuan. Ayo selidiki dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Gerak Selalu Relatif",
        caption: "Sebuah benda bisa diam menurut satu pengamat dan bergerak menurut pengamat lain.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan kamu duduk di kereta yang melaju mulus. Cangkir di mejamu tampak <strong>diam</strong> menurutmu, tetapi menurut orang di peron, cangkir itu <strong>melesat</strong> bersama kereta. Tidak ada yang salah; keduanya benar. Yang berbeda hanyalah <strong>kerangka acuan</strong>, yaitu patokan yang dipakai untuk menilai gerak. Tanpa memilih acuan, kata 'bergerak' menggantung tanpa makna.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu kerangka acuan",
        html: "<strong>Kerangka acuan</strong> adalah titik atau benda yang kita anggap diam, lalu kita ukur posisi dan gerak benda lain terhadapnya. Mengubah kerangka acuan mengubah nilai kecepatan yang teramati, walau peristiwanya sama.",
      },
      {
        type: "widget",
        widget: "SimulatorKecepatan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kecepatan Penumpang Kereta menurut Acuan Berbeda",
        unit: "m/s",
        source: "ilustrasi edukatif",
        note: "Penumpang yang berjalan 1 m/s ke depan di dalam kereta 20 m/s terlihat diam menurut kursinya, tetapi 21 m/s menurut peron.",
        data: [
          { label: "Menurut kursi kereta", value: 1, color: "#38bdf8" },
          { label: "Menurut rel/peron", value: 21, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kereta melaju 20 m/s. Seorang penumpang berjalan 1 m/s searah kereta. Berapa kecepatan penumpang menurut pengamat di peron?",
        answer: 21,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Kecepatan penumpang menurut peron adalah jumlah kecepatan kereta dan kecepatan penumpang relatif kereta: 20 + 1 = <strong>21 m/s</strong>. Menurut kursi kereta, penumpang hanya 1 m/s.",
        hint: "Jumlahkan kecepatan kereta dengan kecepatan jalan penumpang karena searah.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kereta melaju 20 m/s. Penumpang berjalan 1 m/s ke arah belakang kereta. Berapa kecepatan penumpang menurut peron?",
        answer: 19,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Karena penumpang berjalan berlawanan arah kereta, kecepatannya dikurangkan: 20 − 1 = <strong>19 m/s</strong>. Tanda arah menentukan apakah ditambah atau dikurang.",
        hint: "Berlawanan arah berarti kecepatannya dikurangkan.",
      },
      {
        type: "classifyExercise",
        prompt: "Tentukan apakah benda berikut diam atau bergerak menurut acuan yang disebut.",
        buckets: ["Diam menurut acuan itu", "Bergerak menurut acuan itu"],
        items: [
          { text: "Sopir, menurut jok mobil yang ia kemudikan", bucket: "Diam menurut acuan itu" },
          { text: "Sopir, menurut pohon di pinggir jalan", bucket: "Bergerak menurut acuan itu" },
          { text: "Bulan, menurut Bumi", bucket: "Bergerak menurut acuan itu" },
          { text: "Buku di meja, menurut meja", bucket: "Diam menurut acuan itu" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengisi Bensin Pesawat di Udara",
        html: "Pesawat tanker mengisi bahan bakar pesawat tempur saat keduanya terbang ratusan kilometer per jam. Bagaimana selang bisa tersambung tanpa putus? Rahasianya adalah <strong>kerangka acuan</strong>. Menurut tanah, keduanya melesat sangat cepat, tetapi menurut <strong>satu pesawat terhadap pesawat lain</strong>, kecepatan relatifnya nyaris nol. Dalam kerangka acuan itu, kedua pesawat seolah melayang diam berdampingan sehingga selang dapat disambungkan dengan tenang. Memilih acuan yang tepat membuat persoalan rumit menjadi sederhana.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, rumusnya muncul. Kecepatan benda A menurut pengamat C sama dengan kecepatan A menurut B ditambah kecepatan B menurut C: <strong>v(A,C) = v(A,B) + v(B,C)</strong>, dengan memperhatikan tanda arah. Inilah aturan penjumlahan kecepatan relatif. Gerak tidak pernah mutlak; ia selalu diukur terhadap kerangka acuan yang kita pilih.",
      },
      {
        type: "takeaways",
        items: [
          "Gerak selalu relatif: kita harus memilih kerangka acuan dahulu.",
          "Benda yang sama bisa diam menurut satu acuan dan bergerak menurut acuan lain.",
          "Kecepatan relatif searah dijumlahkan, berlawanan arah dikurangkan.",
          "Memilih kerangka acuan yang tepat dapat menyederhanakan persoalan gerak.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kerangka acuan adalah?",
            options: [
              "Alat ukur kecepatan",
              "Titik atau benda yang dianggap diam sebagai patokan gerak",
              "Lintasan benda",
              "Gaya yang menggerakkan benda",
            ],
            answer: 1,
            explain: "Kerangka acuan adalah patokan yang dianggap diam untuk mengukur gerak benda lain.",
          },
          {
            q: "Penumpang duduk diam di bus yang melaju. Menurut pohon di pinggir jalan, penumpang itu?",
            options: ["Diam", "Bergerak bersama bus", "Tidak bisa ditentukan", "Berputar"],
            answer: 1,
            explain: "Terhadap pohon, penumpang ikut melaju bersama bus.",
          },
          {
            q: "Kereta 15 m/s, penumpang berjalan 2 m/s searah kereta. Kecepatan penumpang menurut peron?",
            options: ["13 m/s", "15 m/s", "17 m/s", "30 m/s"],
            answer: 2,
            explain: "Searah, jadi 15 + 2 = 17 m/s.",
          },
          {
            q: "Mengapa pesawat bisa diisi bahan bakar di udara?",
            options: [
              "Karena gravitasi hilang di udara",
              "Karena kecepatan relatif antar kedua pesawat nyaris nol",
              "Karena pesawat berhenti total",
              "Karena selang sangat panjang",
            ],
            answer: 1,
            explain: "Dalam kerangka acuan satu pesawat terhadap lainnya, keduanya seolah diam.",
          },
          {
            q: "Pernyataan 'benda itu bergerak' menjadi bermakna hanya jika?",
            options: [
              "Benda itu berat",
              "Kita menyebut terhadap kerangka acuan apa",
              "Benda itu cepat",
              "Ada gaya yang bekerja",
            ],
            answer: 1,
            explain: "Gerak selalu relatif terhadap kerangka acuan yang dipilih.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "posisi-jarak-perpindahan",
    levelId: "konsep-gerak",
    order: 2,
    title: "Posisi, Jarak, dan Perpindahan",
    summary:
      "Sebelum bicara cepat atau lambat, kita pahami dulu di mana benda berada dan seberapa jauh ia berpindah. Dua kata yang terdengar mirip, jarak dan perpindahan, ternyata berbeda.",
    durationMin: 13,
    tags: ["kinematika", "posisi", "jarak", "perpindahan", "vektor"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu lari pagi mengelilingi lapangan, lalu berhenti tepat di titik start. Aplikasi di ponselmu berkata kamu menempuh 400 meter, tetapi posisimu sama persis seperti saat mulai. Jadi, sudah berpindah sejauh apa kamu sebenarnya? Pertanyaan sederhana ini membuka seluruh kinematika. Ayo selidiki dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Di Mana dan Seberapa Jauh",
        caption: "Posisi adalah titik acuan; gerak adalah perubahan posisi terhadap waktu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba berjalan 3 langkah ke kanan lalu 3 langkah kembali ke kiri. <strong>Jarak</strong> yang kamu tempuh adalah 6 langkah, tetapi <strong>perpindahanmu</strong> nol karena kamu kembali ke posisi semula. Rasakan bedanya: jarak menghitung seluruh lintasan, sedangkan perpindahan hanya peduli pada posisi awal dan akhir beserta arahnya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Skalar vs vektor",
        html: "<strong>Jarak</strong> adalah besaran skalar (hanya punya nilai). <strong>Perpindahan</strong> adalah besaran vektor (punya nilai dan arah). Itulah mengapa perpindahan bisa bernilai nol meski jaraknya besar.",
      },
      {
        type: "widget",
        widget: "SimulatorKecepatan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Berjalan 300 m ke Timur lalu 400 m ke Utara",
        unit: "meter",
        source: "ilustrasi edukatif",
        note: "Lintasan total 700 m, tetapi posisi akhir hanya 500 m dari titik awal (resultan sisi 300 dan 400, segitiga siku-siku 3-4-5).",
        data: [
          { label: "Jarak tempuh", value: 700, color: "#38bdf8" },
          { label: "Perpindahan", value: 500, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Seseorang berjalan 6 m ke timur lalu 8 m ke utara. Berapa besar perpindahannya?",
        answer: 10,
        tolerance: 0.1,
        suffix: " m",
        solution:
          "Perpindahan adalah resultan kedua arah. Karena timur dan utara saling tegak lurus, gunakan teorema Pythagoras: akar dari (6² + 8²) = akar(36 + 64) = akar(100) = <strong>10 m</strong>. Jarak tempuhnya 14 m, tetapi perpindahannya hanya 10 m.",
        hint: "Kedua arah tegak lurus, jadi pakai akar dari (a² + b²).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap besaran sebagai skalar atau vektor.",
        buckets: ["Skalar", "Vektor"],
        items: [
          { text: "Jarak", bucket: "Skalar" },
          { text: "Perpindahan", bucket: "Vektor" },
          { text: "Kelajuan", bucket: "Skalar" },
          { text: "Kecepatan", bucket: "Vektor" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya.",
        pairs: [
          { left: "Posisi", right: "Letak benda terhadap titik acuan" },
          { left: "Jarak", right: "Panjang seluruh lintasan yang ditempuh" },
          { left: "Perpindahan", right: "Perubahan posisi dari awal ke akhir" },
          { left: "Titik acuan", right: "Patokan untuk menentukan posisi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pelari Maraton yang Kembali ke Garis Start",
        html: "Pada banyak lomba maraton, garis finis sengaja dibuat dekat garis start. Seorang pelari menempuh <strong>jarak</strong> 42,2 km, tetapi <strong>perpindahannya</strong> mungkin hanya beberapa ratus meter karena ia hampir kembali ke titik awal. Panitia mengukur prestasi dari jarak tempuh, bukan perpindahan, sebab yang dihargai adalah seluruh lintasan yang dilalui. Inilah alasan kita perlu membedakan keduanya: keduanya menjawab pertanyaan yang berbeda.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru rumusnya muncul. <strong>Perpindahan Δx = x_akhir − x_awal</strong>, sebuah besaran vektor yang membawa tanda arah (positif atau negatif). Jarak adalah jumlah panjang seluruh lintasan, selalu positif. Saat lintasan lurus searah, nilai jarak dan besar perpindahan kebetulan sama; saat berbelok atau berbalik, keduanya berpisah.",
      },
      {
        type: "takeaways",
        items: [
          "Posisi adalah letak benda terhadap titik acuan yang kita pilih.",
          "Jarak adalah panjang seluruh lintasan (skalar, selalu positif).",
          "Perpindahan adalah perubahan posisi awal ke akhir (vektor, punya arah).",
          "Perpindahan bisa nol meski jarak tempuhnya besar, misalnya saat kembali ke titik awal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa perbedaan utama jarak dan perpindahan?",
            options: [
              "Jarak punya arah, perpindahan tidak",
              "Perpindahan punya arah, jarak tidak",
              "Keduanya sama persis",
              "Jarak selalu lebih kecil",
            ],
            answer: 1,
            explain: "Perpindahan adalah vektor (punya arah), jarak adalah skalar.",
          },
          {
            q: "Seorang anak mengelilingi lapangan satu putaran penuh dan kembali ke start. Perpindahannya adalah?",
            options: ["Sama dengan keliling lapangan", "Setengah keliling", "Nol", "Tidak bisa ditentukan"],
            answer: 2,
            explain: "Posisi akhir sama dengan posisi awal, jadi perpindahan nol.",
          },
          {
            q: "Berjalan 3 m ke timur lalu 4 m ke utara, besar perpindahannya?",
            options: ["7 m", "5 m", "1 m", "12 m"],
            answer: 1,
            explain: "Resultan tegak lurus: akar(3² + 4²) = akar(25) = 5 m.",
          },
          {
            q: "Manakah yang termasuk besaran vektor?",
            options: ["Jarak", "Kelajuan", "Perpindahan", "Waktu"],
            answer: 2,
            explain: "Perpindahan punya nilai sekaligus arah, sehingga vektor.",
          },
          {
            q: "Posisi sebuah benda berubah dari 2 m menjadi 9 m. Perpindahannya?",
            options: ["11 m", "7 m", "-7 m", "4,5 m"],
            answer: 1,
            explain: "Δx = x_akhir − x_awal = 9 − 2 = 7 m.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kelajuan-vs-kecepatan",
    levelId: "konsep-gerak",
    order: 3,
    title: "Kelajuan vs Kecepatan",
    summary:
      "Speedometer menunjukkan kelajuan, tetapi tidak peduli ke mana kamu menuju. Kecepatan menambahkan satu hal penting: arah. Perbedaan kecil ini berdampak besar.",
    durationMin: 13,
    tags: ["kinematika", "kelajuan", "kecepatan", "skalar", "vektor"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua orang berlari pada angka speedometer yang sama, 5 m/s. Yang satu lurus ke sekolah, yang lain berputar-putar di taman dan kembali ke rumah. Lajunya identik, tetapi 'kecepatan' mereka sebagai perubahan posisi sangat berbeda. Apa yang membedakan kelajuan dari kecepatan? Ayo berpetualang dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Laju dan Arah",
        caption: "Kelajuan hanya angka; kecepatan adalah angka beserta arahnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan mengendarai motor mengelilingi blok perumahan dan kembali ke titik awal dalam 1 menit. Speedometer mungkin menunjuk 30 km/jam sepanjang jalan, itulah <strong>kelajuan rata-rata</strong>. Tetapi karena kamu kembali ke titik semula, <strong>perpindahanmu nol</strong>, sehingga <strong>kecepatan rata-ratamu juga nol</strong>. Kelajuan memakai jarak, kecepatan memakai perpindahan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Inti perbedaannya",
        html: "<strong>Kelajuan</strong> = jarak / waktu (skalar, selalu positif). <strong>Kecepatan</strong> = perpindahan / waktu (vektor, punya arah). Pada lintasan lurus tanpa berbalik, keduanya sama besar; pada lintasan berbelok, keduanya berbeda.",
      },
      {
        type: "widget",
        widget: "SimulatorKecepatan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Berlari Mengelilingi Trek lalu Kembali ke Start (jarak 400 m, 80 s)",
        unit: "m/s",
        source: "ilustrasi edukatif",
        note: "Kelajuan rata-rata = 400 m / 80 s = 5 m/s, tetapi karena kembali ke titik awal, perpindahan nol sehingga kecepatan rata-rata = 0.",
        data: [
          { label: "Kelajuan rata-rata", value: 5, color: "#38bdf8" },
          { label: "Kecepatan rata-rata", value: 0, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang pelari menempuh lintasan 400 m dalam 80 s dan kembali ke titik start. Berapa kelajuan rata-ratanya?",
        answer: 5,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Kelajuan rata-rata = jarak total dibagi waktu = 400 m ÷ 80 s = <strong>5 m/s</strong>. Kelajuan memakai jarak tempuh, bukan perpindahan.",
        hint: "Bagi jarak tempuh dengan waktu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada lintasan yang sama (400 m, 80 s) pelari kembali tepat ke titik start. Berapa besar kecepatan rata-ratanya?",
        answer: 0,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Kecepatan rata-rata = perpindahan dibagi waktu. Karena pelari kembali ke titik awal, perpindahannya 0 m, sehingga kecepatan rata-rata = 0 ÷ 80 = <strong>0 m/s</strong>. Inilah bukti kelajuan dan kecepatan berbeda.",
        hint: "Kecepatan memakai perpindahan; kembali ke start berarti perpindahan nol.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan sebagai ciri kelajuan atau ciri kecepatan.",
        buckets: ["Kelajuan", "Kecepatan"],
        items: [
          { text: "Besaran skalar, hanya nilai", bucket: "Kelajuan" },
          { text: "Besaran vektor, punya arah", bucket: "Kecepatan" },
          { text: "Dihitung dari jarak tempuh", bucket: "Kelajuan" },
          { text: "Dihitung dari perpindahan", bucket: "Kecepatan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: GPS Menghitung Estimasi Waktu Tiba",
        html: "Aplikasi peta menampilkan dua angka berbeda. Ada <strong>kelajuan</strong> sesaat yang terbaca dari sensor (misalnya 48 km/jam), dan ada perhitungan rute yang memakai <strong>kecepatan efektif</strong> menuju tujuan. Saat jalan berkelok atau memutar, kelajuanmu bisa tinggi sementara kemajuan menuju tujuan (komponen kecepatan ke arah tujuan) kecil. Itulah mengapa terkadang speedometer menunjuk angka besar tetapi estimasi waktu tiba tidak banyak berkurang: GPS membedakan seberapa cepat kamu bergerak dari seberapa cepat kamu mendekat ke tujuan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya bermakna. <strong>Kelajuan rata-rata = jarak tempuh / waktu</strong> (skalar). <strong>Kecepatan rata-rata = perpindahan / waktu</strong>, ditulis <strong>v = Δx / Δt</strong> (vektor, membawa arah). Pada gerak lurus searah keduanya bernilai sama; begitu lintasan berbelok atau berbalik, kecepatan menjadi lebih kecil daripada kelajuan.",
      },
      {
        type: "takeaways",
        items: [
          "Kelajuan adalah skalar: jarak tempuh dibagi waktu, selalu positif.",
          "Kecepatan adalah vektor: perpindahan dibagi waktu, membawa arah.",
          "Pada lintasan tertutup (kembali ke start), kecepatan rata-rata nol tetapi kelajuan tidak.",
          "Pada gerak lurus tanpa berbalik arah, besar kelajuan dan kecepatan sama.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Perbedaan utama kelajuan dan kecepatan adalah?",
            options: [
              "Kelajuan punya arah, kecepatan tidak",
              "Kecepatan punya arah, kelajuan tidak",
              "Keduanya selalu sama",
              "Kelajuan diukur dalam m/s²",
            ],
            answer: 1,
            explain: "Kecepatan adalah vektor (punya arah), kelajuan skalar.",
          },
          {
            q: "Mobil menempuh 240 km dalam 4 jam. Kelajuan rata-ratanya?",
            options: ["60 km/jam", "960 km/jam", "30 km/jam", "120 km/jam"],
            answer: 0,
            explain: "240 ÷ 4 = 60 km/jam.",
          },
          {
            q: "Seseorang berlari satu putaran penuh kembali ke start dalam 50 s. Kecepatan rata-ratanya?",
            options: ["Sama dengan kelajuannya", "Nol", "Setengah kelajuan", "Tak terhingga"],
            answer: 1,
            explain: "Perpindahan nol karena kembali ke titik awal, jadi kecepatan rata-rata nol.",
          },
          {
            q: "Kapan besar kelajuan dan kecepatan rata-rata sama?",
            options: [
              "Saat lintasan melingkar",
              "Saat benda berbalik arah",
              "Saat gerak lurus tanpa berbalik arah",
              "Tidak pernah sama",
            ],
            answer: 2,
            explain: "Pada gerak lurus searah, jarak = besar perpindahan, jadi nilainya sama.",
          },
          {
            q: "Alat speedometer kendaraan menunjukkan?",
            options: ["Kecepatan", "Kelajuan", "Percepatan", "Perpindahan"],
            answer: 1,
            explain: "Speedometer membaca kelajuan (besar saja, tanpa arah).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kecepatan-dan-percepatan",
    levelId: "konsep-gerak",
    order: 4,
    title: "Kecepatan dan Percepatan",
    summary:
      "Setelah tahu 'seberapa jauh', kita tanya 'seberapa cepat' dan 'seberapa cepat kecepatannya berubah'. Dua ide inilah jantung kinematika.",
    durationMin: 14,
    tags: ["kinematika", "kecepatan", "percepatan", "laju"],
    blocks: [
      {
        type: "paragraph",
        html: "Speedometer mobil menunjukkan 60, jarum bergerak naik saat kamu menginjak gas dan turun saat mengerem. Angka itu adalah kecepatan, tetapi perubahannya yang membuatmu terdorong ke belakang atau ke depan, itulah percepatan. Sebelum menghafal simbol v dan a, ayo rasakan dulu apa yang mereka maksud.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Laju Perubahan Posisi dan Kecepatan",
        caption: "Kecepatan adalah laju perubahan posisi; percepatan adalah laju perubahan kecepatan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua mobil sama-sama melaju 40 km/jam. Yang satu pelan-pelan menambah kecepatan, yang lain langsung tancap gas dari diam. Keduanya bisa berada di kecepatan yang sama, tetapi <strong>percepatan</strong> mereka berbeda. Percepatan bukan soal seberapa cepat, melainkan seberapa cepat kecepatan itu berubah.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kelajuan vs kecepatan",
        html: "<strong>Kelajuan</strong> hanya nilai (skalar), misalnya 60 km/jam. <strong>Kecepatan</strong> menyertakan arah (vektor), misalnya 60 km/jam ke utara. Speedometer membaca kelajuan, bukan kecepatan.",
      },
      {
        type: "widget",
        widget: "SimulatorKecepatan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kecepatan Mobil yang Dipercepat Tetap",
        unit: "m/s",
        source: "ilustrasi edukatif",
        note: "Tiap detik kecepatan bertambah 5 m/s. Kemiringan garis yang lurus dan konstan inilah percepatan, yaitu 5 m/s².",
        data: [
          { label: "0 s", value: 0, color: "#38bdf8" },
          { label: "1 s", value: 5, color: "#38bdf8" },
          { label: "2 s", value: 10, color: "#38bdf8" },
          { label: "3 s", value: 15, color: "#38bdf8" },
          { label: "4 s", value: 20, color: "#38bdf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Sebuah mobil menempuh 100 m dalam waktu 5 s. Berapa kecepatan rata-ratanya?",
        answer: 20,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Kecepatan rata-rata = perpindahan dibagi waktu = 100 m ÷ 5 s = <strong>20 m/s</strong>. Inilah inti definisi kecepatan: seberapa banyak posisi berubah tiap satuan waktu.",
        hint: "Bagi jarak dengan waktu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kecepatan sebuah mobil naik dari 0 menjadi 20 m/s dalam 4 s. Berapa percepatannya?",
        answer: 5,
        tolerance: 0.1,
        suffix: " m/s²",
        solution:
          "Percepatan = perubahan kecepatan dibagi waktu = (20 − 0) ÷ 4 = <strong>5 m/s²</strong>. Artinya tiap detik kecepatan bertambah 5 m/s.",
        hint: "Bagi selisih kecepatan dengan selang waktu.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan besaran dengan satuan SI-nya.",
        pairs: [
          { left: "Kecepatan", right: "m/s" },
          { left: "Percepatan", right: "m/s²" },
          { left: "Perpindahan", right: "m" },
          { left: "Waktu", right: "s" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Iklan Mobil '0-100 km/jam dalam 4 Detik'",
        html: "Iklan mobil sport sering membanggakan angka <strong>0 sampai 100 km/jam dalam 4 detik</strong>. Itu bukan ukuran kecepatan tertinggi, melainkan ukuran <strong>percepatan</strong>. 100 km/jam setara sekitar 27,8 m/s; dibagi 4 detik menghasilkan percepatan sekitar 6,9 m/s². Dua mobil dengan kecepatan puncak sama bisa terasa sangat berbeda di lampu merah karena percepatannya tidak sama. Inilah alasan fisikawan memisahkan konsep kecepatan dan percepatan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya bermakna. <strong>Kecepatan rata-rata v = Δx / Δt</strong> (perpindahan dibagi waktu). <strong>Percepatan a = Δv / Δt</strong> (perubahan kecepatan dibagi waktu). Percepatan positif berarti dipercepat, percepatan negatif (perlambatan) berarti diperlambat. Keduanya lahir langsung dari gagasan 'laju perubahan'.",
      },
      {
        type: "takeaways",
        items: [
          "Kecepatan adalah laju perubahan posisi: v = Δx / Δt.",
          "Percepatan adalah laju perubahan kecepatan: a = Δv / Δt.",
          "Kelajuan adalah skalar, kecepatan adalah vektor (menyertakan arah).",
          "Percepatan negatif berarti perlambatan, bukan selalu 'melambat ke arah berlawanan'.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kecepatan didefinisikan sebagai?",
            options: [
              "Jarak dikali waktu",
              "Perubahan posisi tiap satuan waktu",
              "Perubahan percepatan tiap waktu",
              "Massa dibagi waktu",
            ],
            answer: 1,
            explain: "v = Δx / Δt, yaitu perpindahan per satuan waktu.",
          },
          {
            q: "Sebuah benda menempuh 60 m dalam 3 s. Kecepatan rata-ratanya?",
            options: ["20 m/s", "180 m/s", "63 m/s", "0,05 m/s"],
            answer: 0,
            explain: "60 ÷ 3 = 20 m/s.",
          },
          {
            q: "Satuan SI untuk percepatan adalah?",
            options: ["m/s", "m/s²", "s/m", "km/jam"],
            answer: 1,
            explain: "Percepatan = kecepatan per waktu = (m/s)/s = m/s².",
          },
          {
            q: "Kecepatan berubah dari 10 menjadi 30 m/s dalam 5 s. Percepatannya?",
            options: ["4 m/s²", "6 m/s²", "20 m/s²", "8 m/s²"],
            answer: 0,
            explain: "(30 − 10) ÷ 5 = 20 ÷ 5 = 4 m/s².",
          },
          {
            q: "Apa beda kelajuan dan kecepatan?",
            options: [
              "Tidak ada bedanya",
              "Kecepatan menyertakan arah, kelajuan tidak",
              "Kelajuan menyertakan arah, kecepatan tidak",
              "Kelajuan diukur dalam m/s²",
            ],
            answer: 1,
            explain: "Kecepatan adalah vektor (punya arah), kelajuan skalar.",
          },
        ],
      },
    ],
  },
];
