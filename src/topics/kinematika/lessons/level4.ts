import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "penguraian-vektor-kecepatan",
    levelId: "gerak-parabola",
    order: 1,
    title: "Menguraikan Vektor Kecepatan",
    summary:
      "Sebelum memahami gerak peluru, kita perlu memecah satu kecepatan miring menjadi dua komponen tegak lurus: mendatar dan tegak. Inilah kunci gerak dua dimensi.",
    durationMin: 13,
    tags: ["kinematika", "vektor", "komponen", "sin-cos"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah bola ditendang miring ke atas dengan satu kecepatan. Tetapi gerak miring itu sebenarnya dua gerak yang berjalan bersamaan: satu maju mendatar, satu naik tegak. Bagaimana cara membagi satu kecepatan miring menjadi dua bagian yang rapi? Jawabannya bersembunyi pada segitiga siku-siku. Ayo selidiki dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Satu Vektor, Dua Komponen",
        caption: "Kecepatan miring dapat diuraikan menjadi komponen mendatar dan tegak yang saling tegak lurus.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan menarik koper dengan tali miring 30 derajat. Sebagian tarikanmu mendorong koper <strong>maju</strong>, sebagian lagi mengangkatnya <strong>ke atas</strong>. Makin mendatar talinya, makin besar bagian maju; makin tegak, makin besar bagian angkat. Kecepatan miring juga begitu: ia punya <strong>komponen mendatar (v cos θ)</strong> dan <strong>komponen tegak (v sin θ)</strong>. Sudut menentukan pembagiannya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua komponen kecepatan",
        html: "Untuk kecepatan v pada sudut θ terhadap mendatar: komponen mendatar <strong>vₓ = v·cos θ</strong> dan komponen tegak <strong>vᵧ = v·sin θ</strong>. Keduanya tegak lurus, dan jika digabung kembali dengan Pythagoras menghasilkan v semula.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Komponen Kecepatan 10 m/s pada Sudut 53° (cos 53° ≈ 0,6; sin 53° ≈ 0,8)",
        unit: "m/s",
        source: "ilustrasi edukatif",
        note: "Komponen mendatar = 10 × 0,6 = 6 m/s; komponen tegak = 10 × 0,8 = 8 m/s. Gabungan keduanya: akar(6² + 8²) = 10 m/s, kembali ke nilai semula.",
        data: [
          { label: "Mendatar (v cos θ)", value: 6, color: "#f472b6" },
          { label: "Tegak (v sin θ)", value: 8, color: "#fb7185" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda ditembak 10 m/s pada sudut 53° terhadap tanah (cos 53° ≈ 0,6). Berapa komponen kecepatan mendatarnya?",
        answer: 6,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Komponen mendatar vₓ = v·cos θ = 10 × 0,6 = <strong>6 m/s</strong>. Inilah bagian kecepatan yang membawa benda maju.",
        hint: "Gunakan vₓ = v·cos θ.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk benda yang sama (10 m/s, sudut 53°, sin 53° ≈ 0,8), berapa komponen kecepatan tegaknya?",
        answer: 8,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Komponen tegak vᵧ = v·sin θ = 10 × 0,8 = <strong>8 m/s</strong>. Inilah bagian kecepatan yang membawa benda naik.",
        hint: "Gunakan vᵧ = v·sin θ.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah penguraian vektor dengan rumus atau maknanya.",
        pairs: [
          { left: "Komponen mendatar", right: "vₓ = v·cos θ" },
          { left: "Komponen tegak", right: "vᵧ = v·sin θ" },
          { left: "Menggabung kembali", right: "v = akar(vₓ² + vᵧ²)" },
          { left: "Sudut elevasi θ", right: "Sudut kecepatan terhadap arah mendatar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Layar Radar Lalu Lintas Udara",
        html: "Pengatur lalu lintas udara melihat pesawat bergerak miring di layar, tetapi sistem memprosesnya sebagai dua angka: kecepatan <strong>mendatar</strong> (ke arah tujuan di peta) dan laju <strong>menanjak atau menurun</strong> (perubahan ketinggian). Dengan menguraikan satu kecepatan miring menjadi komponen mendatar dan tegak, mereka bisa memperkirakan kapan pesawat tiba di suatu titik peta dan kapan mencapai ketinggian jelajah. Penguraian vektor mengubah gerak rumit menjadi dua gerak sederhana yang dihitung terpisah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memahami polanya, rumusnya jelas. Kecepatan v pada sudut θ terhadap mendatar terurai menjadi <strong>vₓ = v·cos θ</strong> (mendatar) dan <strong>vᵧ = v·sin θ</strong> (tegak). Keduanya saling tegak lurus dan dapat digabung kembali dengan <strong>v = akar(vₓ² + vᵧ²)</strong>. Penguraian inilah fondasi yang membuat gerak parabola bisa diselesaikan sebagai dua gerak satu dimensi.",
      },
      {
        type: "takeaways",
        items: [
          "Kecepatan miring dapat diuraikan menjadi komponen mendatar dan tegak.",
          "Komponen mendatar vₓ = v·cos θ; komponen tegak vᵧ = v·sin θ.",
          "Kedua komponen saling tegak lurus dan tidak saling memengaruhi.",
          "Menggabungkan kembali: v = akar(vₓ² + vᵧ²).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Komponen mendatar dari kecepatan v pada sudut θ adalah?",
            options: ["v·sin θ", "v·cos θ", "v·tan θ", "v / cos θ"],
            answer: 1,
            explain: "Komponen mendatar vₓ = v·cos θ.",
          },
          {
            q: "Komponen tegak dari kecepatan v pada sudut θ adalah?",
            options: ["v·cos θ", "v·sin θ", "v / sin θ", "v·tan θ"],
            answer: 1,
            explain: "Komponen tegak vᵧ = v·sin θ.",
          },
          {
            q: "Kecepatan 20 m/s pada sudut 30° (cos 30° ≈ 0,87). Komponen mendatarnya kira-kira?",
            options: ["10 m/s", "17,4 m/s", "20 m/s", "23 m/s"],
            answer: 1,
            explain: "vₓ = 20 × 0,87 ≈ 17,4 m/s.",
          },
          {
            q: "Komponen mendatar 6 m/s dan tegak 8 m/s. Besar kecepatan totalnya?",
            options: ["10 m/s", "14 m/s", "2 m/s", "48 m/s"],
            answer: 0,
            explain: "v = akar(6² + 8²) = akar(100) = 10 m/s.",
          },
          {
            q: "Makin besar sudut elevasi (mendekati 90°), komponen tegak kecepatan akan?",
            options: ["Mengecil", "Membesar", "Tetap", "Menjadi nol"],
            answer: 1,
            explain: "sin θ membesar saat θ mendekati 90°, jadi komponen tegak membesar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gerak-peluru",
    levelId: "gerak-parabola",
    order: 2,
    title: "Gerak Peluru",
    summary:
      "Lempar bola dan lintasannya melengkung indah. Rahasianya: gerak mendatar dan gerak tegak berjalan sendiri-sendiri, lalu berpadu menjadi parabola.",
    durationMin: 15,
    tags: ["kinematika", "gerak-peluru", "parabola", "proyektil"],
    blocks: [
      {
        type: "paragraph",
        html: "Bola basket yang dilempar ke ring tidak terbang lurus, ia melengkung membentuk parabola. Anehnya, gerak ini bisa dipahami dengan memecahnya menjadi dua: gerak mendatar yang santai-tetap dan gerak tegak yang ditarik gravitasi. Sebelum rumus muncul, ayo lihat bagaimana dua gerak sederhana berpadu menjadi lintasan melengkung.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Memecah Gerak Menjadi Mendatar dan Tegak",
        caption: "Gerak peluru = GLB mendatar + GLBB tegak, dan keduanya berjalan bebas satu sama lain.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua bola dilepas bersamaan dari ketinggian sama: satu dijatuhkan lurus, satu ditembakkan mendatar. Mengejutkan, keduanya menyentuh tanah pada saat yang sama. Sebab gerak <strong>mendatar</strong> tidak memengaruhi gerak <strong>tegak</strong>. Arah tegak ditarik gravitasi (GLBB), arah mendatar melaju tetap (GLB). Inilah kunci gerak peluru.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua sumbu, dua aturan",
        html: "Pada gerak peluru, sumbu <strong>mendatar (x)</strong> mengikuti GLB (kecepatan tetap, tanpa percepatan). Sumbu <strong>tegak (y)</strong> mengikuti GLBB dengan percepatan gravitasi g. Keduanya berbagi waktu yang sama, tetapi bergerak secara mandiri.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Ketinggian Bola yang Dilempar ke Atas (v₀ tegak = 20 m/s)",
        unit: "meter",
        source: "ilustrasi edukatif (g = 10 m/s²)",
        note: "Ketinggian y = 20t − 5t². Bola naik, mencapai puncak 20 m pada detik ke-2, lalu turun simetris. Bentuk lengkung inilah parabola.",
        data: [
          { label: "0 s", value: 0, color: "#f472b6" },
          { label: "1 s", value: 15, color: "#f472b6" },
          { label: "2 s", value: 20, color: "#f472b6" },
          { label: "3 s", value: 15, color: "#f472b6" },
          { label: "4 s", value: 0, color: "#f472b6" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bola dilempar ke atas dengan kecepatan tegak 20 m/s (g = 10 m/s²). Berapa waktu untuk mencapai titik tertinggi?",
        answer: 2,
        tolerance: 0.1,
        suffix: " s",
        solution:
          "Di titik tertinggi, kecepatan tegak menjadi nol. Dari v = v₀ − g·t, maka 0 = 20 − 10·t, sehingga t = 20 ÷ 10 = <strong>2 s</strong>.",
        hint: "Di puncak, kecepatan arah tegak = 0. Pakai 0 = v₀ − g·t.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah peluru ditembakkan mendatar 15 m/s dari tebing dan melayang 3 s sebelum mendarat. Berapa jarak mendatar yang ditempuhnya?",
        answer: 45,
        tolerance: 0.5,
        suffix: " m",
        solution:
          "Arah mendatar adalah GLB: x = vₓ·t = 15 × 3 = <strong>45 m</strong>. Gerak tegak tidak memengaruhi gerak mendatar, jadi cukup kalikan kecepatan mendatar dengan waktu.",
        hint: "Arah mendatar GLB, jadi x = vₓ·t.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan ke komponen gerak peluru yang tepat.",
        buckets: ["Gerak mendatar (GLB)", "Gerak tegak (GLBB)"],
        items: [
          { text: "Kecepatannya tetap sepanjang gerak", bucket: "Gerak mendatar (GLB)" },
          { text: "Dipengaruhi percepatan gravitasi", bucket: "Gerak tegak (GLBB)" },
          { text: "Percepatannya nol", bucket: "Gerak mendatar (GLB)" },
          { text: "Kecepatannya berubah tiap detik", bucket: "Gerak tegak (GLBB)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sudut 45 Derajat Para Atlet Tolak Peluru",
        html: "Atlet tolak peluru dan lompat jauh berusaha melepas pada sudut mendekati <strong>45 derajat</strong>. Alasannya murni fisika gerak peluru: pada sudut itu, perpaduan kecepatan mendatar dan tegak menghasilkan jangkauan terjauh untuk laju lempar yang sama. Terlalu mendatar, peluru cepat menyentuh tanah; terlalu tegak, ia naik tinggi tetapi tidak jauh ke depan. Memahami bahwa gerak mendatar dan tegak bekerja terpisah memungkinkan atlet (dan insinyur balistik) mengoptimalkan jangkauan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Baru sekarang rumusnya bermakna. Gerak peluru dipecah menjadi dua: <strong>arah mendatar (GLB): x = v₀ₓ · t</strong> dan <strong>arah tegak (GLBB): y = v₀ᵧ·t − ½·g·t²</strong>. Komponen kecepatan awal: <strong>v₀ₓ = v₀·cos θ</strong> dan <strong>v₀ᵧ = v₀·sin θ</strong>. Keduanya berbagi variabel waktu yang sama, dan itulah yang menyatukan keduanya menjadi lintasan parabola.",
      },
      {
        type: "takeaways",
        items: [
          "Gerak peluru = GLB pada arah mendatar + GLBB pada arah tegak.",
          "Gerak mendatar dan tegak saling bebas, hanya berbagi variabel waktu.",
          "Di titik tertinggi, kecepatan arah tegak nol; waktu naik = v₀ᵧ / g.",
          "Komponen kecepatan awal: v₀ₓ = v₀·cos θ dan v₀ᵧ = v₀·sin θ.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Gerak peluru adalah perpaduan?",
            options: [
              "Dua GLB",
              "GLB mendatar dan GLBB tegak",
              "Dua GLBB tegak",
              "GLB dan gerak melingkar",
            ],
            answer: 1,
            explain: "Arah mendatar GLB, arah tegak GLBB karena gravitasi.",
          },
          {
            q: "Pada gerak peluru, kecepatan arah mendatar?",
            options: ["Selalu bertambah", "Tetap (jika gesekan udara diabaikan)", "Selalu berkurang", "Menjadi nol di puncak"],
            answer: 1,
            explain: "Tidak ada percepatan mendatar, jadi kecepatan mendatar tetap.",
          },
          {
            q: "Di titik tertinggi lintasan parabola, kecepatan arah tegak?",
            options: ["Maksimum", "Nol", "Sama dengan awal", "Tak terhingga"],
            answer: 1,
            explain: "Kecepatan tegak nol sesaat di puncak sebelum bola turun.",
          },
          {
            q: "Bola ditembak tegak 30 m/s (g = 10 m/s²). Waktu mencapai puncak?",
            options: ["3 s", "30 s", "300 s", "1,5 s"],
            answer: 0,
            explain: "t = v₀ᵧ / g = 30 ÷ 10 = 3 s.",
          },
          {
            q: "Peluru ditembak mendatar 20 m/s, melayang 2 s. Jarak mendatarnya?",
            options: ["10 m", "22 m", "40 m", "80 m"],
            answer: 2,
            explain: "x = vₓ·t = 20 × 2 = 40 m (gerak mendatar GLB).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tinggi-maksimum-peluru",
    levelId: "gerak-parabola",
    order: 3,
    title: "Tinggi Maksimum Peluru",
    summary:
      "Hanya komponen tegak kecepatan yang menentukan seberapa tinggi peluru naik. Gerak mendatar tidak ikut campur dalam soal ketinggian.",
    durationMin: 13,
    tags: ["kinematika", "gerak-peluru", "tinggi-maksimum", "komponen-tegak"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua bola ditendang dengan laju sama, tetapi satu lebih menukik ke atas dan satu lebih mendatar. Yang lebih tegak melambung lebih tinggi, padahal kekuatan tendangannya identik. Apa yang sebenarnya menentukan ketinggian puncak sebuah peluru? Petunjuknya: bukan seluruh kecepatan, melainkan hanya sebagian. Ayo selidiki dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Hanya Komponen Tegak yang Mengangkat",
        caption: "Tinggi maksimum peluru hanya bergantung pada komponen tegak kecepatan awal.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ingat, gerak tegak peluru adalah gerak vertikal ke atas yang murni. Gravitasi memperlambat komponen tegak hingga <strong>nol di puncak</strong>. Komponen mendatar tetap melaju, tetapi ia <strong>tidak ikut menentukan ketinggian</strong> sama sekali. Jadi makin besar bagian tegak kecepatan (makin curam sudut tembak), makin tinggi peluru naik, meski lajunya sama.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Yang menentukan ketinggian",
        html: "Tinggi maksimum hanya bergantung pada <strong>komponen tegak v₀ᵧ = v₀·sin θ</strong>. Rumusnya sama persis dengan gerak vertikal ke atas: <strong>h = v₀ᵧ² / (2g)</strong>. Komponen mendatar tidak muncul dalam rumus tinggi.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tinggi Maksimum vs Sudut Tembak (laju tetap 20 m/s, g = 10 m/s²)",
        unit: "meter",
        source: "ilustrasi edukatif (h = (v sin θ)² / 2g)",
        note: "Dengan laju lempar sama, sudut lebih curam memberi komponen tegak lebih besar, sehingga puncak lebih tinggi.",
        data: [
          { label: "30° (sin 0,5)", value: 5, color: "#fb7185" },
          { label: "53° (sin 0,8)", value: 12.8, color: "#fb7185" },
          { label: "90° (sin 1,0)", value: 20, color: "#fb7185" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Peluru ditembak 20 m/s pada sudut 53° (sin 53° ≈ 0,8; g = 10 m/s²). Berapa komponen kecepatan tegaknya?",
        answer: 16,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "v₀ᵧ = v₀·sin θ = 20 × 0,8 = <strong>16 m/s</strong>. Hanya bagian inilah yang mengangkat peluru ke atas.",
        hint: "Gunakan v₀ᵧ = v₀·sin θ.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan komponen tegak 16 m/s (g = 10 m/s²), berapa tinggi maksimum peluru?",
        answer: 12.8,
        tolerance: 0.2,
        suffix: " m",
        solution:
          "h = v₀ᵧ² / (2g) = 16² ÷ (2 × 10) = 256 ÷ 20 = <strong>12,8 m</strong>. Hanya komponen tegak yang menentukan ketinggian.",
        hint: "Gunakan h = v₀ᵧ² / (2g).",
      },
      {
        type: "classifyExercise",
        prompt: "Tentukan apakah faktor berikut memengaruhi tinggi maksimum peluru.",
        buckets: ["Memengaruhi tinggi maksimum", "Tidak memengaruhi tinggi maksimum"],
        items: [
          { text: "Komponen tegak kecepatan awal (v sin θ)", bucket: "Memengaruhi tinggi maksimum" },
          { text: "Percepatan gravitasi g", bucket: "Memengaruhi tinggi maksimum" },
          { text: "Komponen mendatar kecepatan (v cos θ)", bucket: "Tidak memengaruhi tinggi maksimum" },
          { text: "Sudut tembak θ", bucket: "Memengaruhi tinggi maksimum" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tendangan Bola Lambung di Sepak Bola",
        html: "Saat penjaga gawang melakukan tendangan gawang, ia memilih sudut curam agar bola <strong>melambung tinggi</strong> dan punya waktu lama di udara, memberi rekan setim kesempatan berlari. Sebaliknya, umpan datar mendatar dipilih saat ingin bola cepat sampai tanpa melambung. Keduanya bisa ditendang dengan tenaga yang sama; yang berbeda hanyalah <strong>sudut</strong>, yang mengatur seberapa besar komponen tegak kecepatan. Tinggi lambungan bola adalah cerminan langsung dari v₀·sin θ.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya bermakna. Tinggi maksimum peluru hanya ditentukan komponen tegak: <strong>h_maks = (v₀·sin θ)² / (2g) = v₀ᵧ² / (2g)</strong>. Waktu mencapai puncak: <strong>t_naik = v₀·sin θ / g</strong>. Komponen mendatar v₀·cos θ tidak muncul di sini, sebab gerak tegak dan mendatar saling bebas.",
      },
      {
        type: "takeaways",
        items: [
          "Tinggi maksimum hanya bergantung pada komponen tegak v₀·sin θ.",
          "Rumusnya h_maks = (v₀·sin θ)² / (2g), sama dengan gerak vertikal ke atas.",
          "Komponen mendatar v₀·cos θ tidak memengaruhi ketinggian.",
          "Sudut tembak lebih curam memberi tinggi puncak lebih besar pada laju yang sama.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tinggi maksimum peluru ditentukan oleh?",
            options: [
              "Komponen mendatar kecepatan",
              "Komponen tegak kecepatan",
              "Seluruh kecepatan tanpa diuraikan",
              "Massa peluru",
            ],
            answer: 1,
            explain: "Hanya komponen tegak v₀·sin θ yang menentukan tinggi.",
          },
          {
            q: "Rumus tinggi maksimum peluru adalah?",
            options: [
              "h = (v₀·cos θ)² / (2g)",
              "h = (v₀·sin θ)² / (2g)",
              "h = v₀·cos θ · t",
              "h = v₀² / g",
            ],
            answer: 1,
            explain: "h_maks = (v₀·sin θ)² / (2g).",
          },
          {
            q: "Dua bola ditendang sama kuat, sudut A lebih curam dari B. Mana naik lebih tinggi?",
            options: ["Bola A", "Bola B", "Sama tinggi", "Tidak bisa ditentukan"],
            answer: 0,
            explain: "Sudut lebih curam berarti sin θ lebih besar, jadi puncak lebih tinggi.",
          },
          {
            q: "Komponen tegak 10 m/s (g = 10 m/s²). Tinggi maksimumnya?",
            options: ["5 m", "10 m", "20 m", "1 m"],
            answer: 0,
            explain: "h = 10² / (2×10) = 100 ÷ 20 = 5 m.",
          },
          {
            q: "Komponen mendatar kecepatan terhadap tinggi maksimum?",
            options: ["Memperbesar tinggi", "Memperkecil tinggi", "Tidak berpengaruh", "Menentukan sepenuhnya"],
            answer: 2,
            explain: "Gerak mendatar tidak memengaruhi ketinggian, hanya jangkauan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "jangkauan-terjauh",
    levelId: "gerak-parabola",
    order: 4,
    title: "Jangkauan Terjauh",
    summary:
      "Jangkauan mendatar lahir dari perpaduan komponen mendatar dan waktu melayang. Sudut 45 derajat memberi jangkauan terjauh, dan ada keindahan simetri di baliknya.",
    durationMin: 14,
    tags: ["kinematika", "gerak-peluru", "jangkauan", "sudut-optimum"],
    blocks: [
      {
        type: "paragraph",
        html: "Atlet lempar lembing, pemain golf, bahkan pemadam kebakaran dengan selangnya, semuanya diam-diam memecahkan soal yang sama: pada sudut berapa lemparan mencapai paling jauh? Jawabannya ternyata satu angka ajaib, dan ada pasangan sudut yang menghasilkan jarak persis sama. Ayo selidiki dulu pola jangkauan sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Memadukan Mendatar dan Waktu Melayang",
        caption: "Jangkauan adalah komponen mendatar dikali waktu total peluru di udara.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Jangkauan tergantung dua hal yang saling bertarung. Komponen <strong>mendatar (v cos θ)</strong> membawa peluru maju, sedangkan komponen <strong>tegak (v sin θ)</strong> menentukan <strong>berapa lama</strong> peluru melayang. Sudut kecil memberi laju maju besar tetapi waktu melayang singkat; sudut besar memberi waktu lama tetapi maju lambat. Keseimbangan terbaik ada di <strong>45 derajat</strong>, tempat hasil kalinya maksimum.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Sudut optimum dan sudut komplementer",
        html: "Jangkauan maksimum terjadi pada <strong>θ = 45°</strong>. Pasangan sudut yang berjumlah 90° (misalnya 30° dan 60°) menghasilkan <strong>jangkauan yang sama</strong>, karena R bergantung pada sin(2θ).",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Jangkauan vs Sudut Tembak (laju 20 m/s, g = 10 m/s²)",
        unit: "meter",
        source: "ilustrasi edukatif (R = v² sin 2θ / g)",
        note: "Jangkauan terbesar pada 45°. Perhatikan 30° dan 60° menghasilkan jarak yang sama persis (sudut komplementer).",
        data: [
          { label: "15°", value: 20, color: "#f43f5e" },
          { label: "30°", value: 34.6, color: "#f43f5e" },
          { label: "45°", value: 40, color: "#e11d48" },
          { label: "60°", value: 34.6, color: "#f43f5e" },
          { label: "75°", value: 20, color: "#f43f5e" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Peluru ditembak 20 m/s pada sudut 45° (g = 10 m/s², sin 90° = 1). Berapa jangkauan mendatarnya? Gunakan R = v² sin(2θ) / g.",
        answer: 40,
        tolerance: 0.5,
        suffix: " m",
        solution:
          "R = v₀²·sin(2θ) / g = 20² × sin(90°) ÷ 10 = 400 × 1 ÷ 10 = <strong>40 m</strong>. Sudut 45° memberi sin(2θ) = sin 90° = 1, nilai maksimum.",
        hint: "Gunakan R = v₀²·sin(2θ) / g dengan 2θ = 90°.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan laju tembak sama 20 m/s pada sudut 30° (sin 60° ≈ 0,866; g = 10 m/s²), berapa jangkauannya?",
        answer: 34.6,
        tolerance: 0.5,
        suffix: " m",
        solution:
          "R = v₀²·sin(2θ) / g = 400 × sin(60°) ÷ 10 = 400 × 0,866 ÷ 10 = <strong>34,6 m</strong>. Sama persis dengan jangkauan pada 60°, karena keduanya saling komplementer.",
        hint: "Gunakan R = v₀²·sin(2θ) / g dengan 2θ = 60°.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan sudut tembak dengan jangkauan relatifnya (laju sama).",
        pairs: [
          { left: "45°", right: "Jangkauan maksimum" },
          { left: "30° dan 60°", right: "Jangkauan sama (komplementer)" },
          { left: "Mendekati 0°", right: "Jangkauan sangat kecil" },
          { left: "Mendekati 90°", right: "Jangkauan sangat kecil (hampir tegak)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Meriam dan Tabel Tembak Artileri",
        html: "Awak meriam memakai <strong>tabel tembak</strong> yang mencantumkan sudut elevasi untuk tiap jarak sasaran. Yang menarik, untuk satu jarak tertentu sering tersedia <strong>dua pilihan sudut</strong>: satu rendah (lintasan datar, cepat sampai) dan satu tinggi (lintasan melengkung, melewati penghalang). Keduanya adalah sudut komplementer yang menjumlah 90° dan memberi jangkauan sama, persis ramalan rumus R = v² sin(2θ)/g. Fisika gerak peluru menentukan pilihan taktik di medan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya menyatukan semuanya. Jangkauan = komponen mendatar × waktu total melayang: <strong>R = (v₀·cos θ) × (2·v₀·sin θ / g)</strong>, yang disederhanakan menjadi <strong>R = v₀²·sin(2θ) / g</strong>. Karena sin(2θ) maksimum saat 2θ = 90°, <strong>jangkauan terjauh terjadi pada θ = 45°</strong>, dan sudut komplementer (θ dan 90° − θ) selalu memberi jangkauan sama.",
      },
      {
        type: "takeaways",
        items: [
          "Jangkauan = komponen mendatar dikali waktu total melayang: R = v₀²·sin(2θ)/g.",
          "Jangkauan maksimum terjadi pada sudut tembak 45°.",
          "Sudut komplementer (berjumlah 90°) memberi jangkauan yang sama.",
          "Jangkauan sebanding dengan kuadrat laju tembak (v₀²).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sudut tembak yang memberi jangkauan terjauh (di tanah datar) adalah?",
            options: ["30°", "45°", "60°", "90°"],
            answer: 1,
            explain: "Pada 45°, sin(2θ) = sin 90° = 1, jangkauan maksimum.",
          },
          {
            q: "Rumus jangkauan gerak peluru adalah?",
            options: [
              "R = v₀²·sin(2θ) / g",
              "R = v₀·sin θ / g",
              "R = v₀² / (2g)",
              "R = ½·g·t²",
            ],
            answer: 0,
            explain: "R = v₀²·sin(2θ) / g.",
          },
          {
            q: "Dua sudut yang memberi jangkauan sama adalah pasangan yang?",
            options: ["Berselisih 45°", "Berjumlah 90°", "Berjumlah 180°", "Sama besar"],
            answer: 1,
            explain: "Sudut komplementer (jumlah 90°) memberi sin(2θ) sama, jadi jangkauan sama.",
          },
          {
            q: "Laju tembak digandakan, jangkauan menjadi?",
            options: ["Dua kali", "Empat kali", "Setengah", "Tetap"],
            answer: 1,
            explain: "R sebanding v₀², jadi 2² = 4 kali lipat.",
          },
          {
            q: "Peluru 30 m/s ditembak 45° (g = 10 m/s²). Jangkauannya?",
            options: ["45 m", "90 m", "180 m", "30 m"],
            answer: 1,
            explain: "R = v₀²·sin90° / g = 900 × 1 ÷ 10 = 90 m.",
          },
        ],
      },
    ],
  },
];
