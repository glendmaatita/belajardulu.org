import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "torsi",
    levelId: "dinamika-rotasi",
    order: 1,
    title: "Torsi",
    summary:
      "Mengapa kunci inggris yang panjang membuat baut berkarat menyerah? Kisah tuas dulu, rumus torsi belakangan.",
    durationMin: 13,
    tags: ["fisika", "rotasi", "torsi", "gaya", "tuas"],
    blocks: [
      {
        type: "paragraph",
        html: "Baut berkarat menolak diputar dengan tangan kosong. Lalu kamu pasang kunci inggris yang panjang, dan tiba-tiba baut itu menyerah dengan gaya yang sama. Apa yang berubah? Bukan kekuatanmu, melainkan <strong>seberapa jauh dari poros</strong> gaya itu bekerja. Mari telusuri kisahnya sebelum menulis rumus.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Gaya yang Membuat Benda Berputar",
        caption: "Torsi adalah versi rotasi dari gaya: ia yang memulai putaran.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba buka pintu dengan mendorong tepat di dekat engsel. Susah sekali. Sekarang dorong di gagangnya, jauh dari engsel. Mudah. Gaya dorongmu sama, tetapi efek memutarnya berbeda jauh. Inilah sebabnya gagang pintu selalu dipasang sejauh mungkin dari engsel: untuk memperbesar <strong>lengan gaya</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua bahan torsi",
        html: "Besarnya efek memutar bergantung pada dua hal: <strong>besar gaya</strong> dan <strong>jarak gaya dari poros</strong> (lengan gaya). Memperbesar salah satunya memperbesar torsi. Yang juga penting: arah gaya. Gaya yang menekan tegak lurus tuas paling efektif; gaya yang searah tuas tidak memutar sama sekali.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Torsi dari Gaya 100 N pada Berbagai Lengan",
        unit: "N·m",
        source: "perhitungan τ = r × F dengan F tetap 100 N",
        note: "Gaya tetap 100 N, hanya lengan gaya yang berubah. Torsi tumbuh lurus mengikuti panjang lengan: itulah mengapa kunci yang panjang terasa ringan.",
        data: [
          { label: "Lengan 0,10 m", value: 10, color: "#f472b6" },
          { label: "Lengan 0,20 m", value: 20, color: "#e879f9" },
          { label: "Lengan 0,30 m", value: 30, color: "#c084fc" },
          { label: "Lengan 0,40 m", value: 40, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu menekan kunci inggris dengan gaya 50 N tegak lurus, pada jarak 0,3 m dari baut. Berapa torsi yang dihasilkan?",
        answer: 15,
        tolerance: 0.01,
        suffix: " N·m",
        solution:
          "Torsi adalah gaya dikali lengan gaya: τ = r × F = 0,3 × 50 = <strong>15 N·m</strong>. Perbesar jarak atau gaya, perbesar torsi.",
        hint: "Kalikan jarak dari poros dengan gaya tegak lurus.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa gaya tegak lurus yang dibutuhkan untuk menghasilkan torsi 24 N·m pada lengan 0,4 m?",
        answer: 60,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Dari τ = r × F, maka F = τ / r = 24 / 0,4 = <strong>60 N</strong>. Lengan yang lebih panjang akan menurunkan gaya yang diperlukan.",
        hint: "Bagi torsi dengan panjang lengan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Gaya 100 N menekan tuas 0,5 m, tetapi membentuk sudut 30° terhadap tuas. Berapa torsinya? (τ = r·F·sin θ, sin 30° = 0,5)",
        answer: 25,
        tolerance: 0.1,
        suffix: " N·m",
        solution:
          "Hanya komponen tegak lurus yang bekerja: τ = r·F·sin θ = 0,5 × 100 × 0,5 = <strong>25 N·m</strong>. Bandingkan dengan 50 N·m bila gaya tegak lurus penuh.",
        hint: "Kalikan r, F, dan sin 30° (= 0,5).",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk gaya yang sama, kelompokkan situasi menghasilkan torsi besar atau torsi kecil.",
        buckets: ["Torsi besar", "Torsi kecil"],
        items: [
          { text: "Mendorong pintu di gagang (jauh dari engsel)", bucket: "Torsi besar" },
          { text: "Mendorong pintu dekat engsel", bucket: "Torsi kecil" },
          { text: "Memakai kunci inggris panjang", bucket: "Torsi besar" },
          { text: "Memutar baut dengan jari pendek", bucket: "Torsi kecil" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah torsi dengan maknanya.",
        pairs: [
          { left: "Torsi (τ)", right: "Efek memutar sebuah gaya" },
          { left: "Lengan gaya (r)", right: "Jarak gaya dari poros putar" },
          { left: "Satuan torsi", right: "Newton meter (N·m)" },
          { left: "Gaya searah tuas", right: "Tidak menghasilkan torsi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pegangan Pintu dan Engsel",
        html: "Perhatikan setiap pintu di sekitarmu: gagangnya selalu di sisi terjauh dari engsel, tidak pernah di tengah. Bukan kebetulan, melainkan fisika torsi. Dengan lengan gaya terpanjang, dorongan kecil sudah cukup membuka pintu berat. Insinyur tidak menghafal rumus untuk ini; mereka memahami bahwa torsi tumbuh seiring jarak, lalu menaruh gagang di tempat paling menguntungkan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya terasa jelas. Torsi sama dengan lengan gaya dikali gaya tegak lurus: <strong>τ = r × F</strong>. Bila gaya membentuk sudut θ terhadap tuas, hanya komponen tegak lurusnya yang bekerja: <strong>τ = r × F × sin θ</strong>. Dan seperti gaya menimbulkan percepatan (F = ma), torsi total menimbulkan percepatan sudut lewat <strong>τ = I·α</strong>, yang akan kita kupas di pelajaran berikutnya.",
      },
      {
        type: "takeaways",
        items: [
          "Torsi adalah efek memutar dari sebuah gaya, bukan gaya itu sendiri.",
          "Torsi membesar bila gaya atau lengan gaya (jarak dari poros) diperbesar.",
          "Rumusnya τ = r × F, atau τ = r × F × sin θ bila gaya menyudut.",
          "Gaya yang searah tuas tidak menghasilkan torsi sama sekali.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Satuan torsi adalah?",
            options: ["newton (N)", "newton meter (N·m)", "joule (J)", "watt (W)"],
            answer: 1,
            explain: "Torsi adalah gaya dikali jarak, jadi satuannya newton meter (N·m).",
          },
          {
            q: "Gaya 40 N tegak lurus pada lengan 0,5 m menghasilkan torsi?",
            options: ["8 N·m", "20 N·m", "40 N·m", "80 N·m"],
            answer: 1,
            explain: "τ = r × F = 0,5 × 40 = 20 N·m.",
          },
          {
            q: "Mengapa kunci inggris panjang lebih mudah membuka baut?",
            options: [
              "Karena lebih berat",
              "Karena lengan gaya lebih panjang, torsi lebih besar",
              "Karena gayanya bertambah sendiri",
              "Karena baut jadi lebih lemah",
            ],
            answer: 1,
            explain: "Lengan yang panjang memperbesar torsi untuk gaya yang sama.",
          },
          {
            q: "Gaya yang arahnya searah dengan tuas menghasilkan torsi?",
            options: ["Maksimum", "Nol", "Setengah", "Negatif besar"],
            answer: 1,
            explain: "Hanya komponen gaya tegak lurus yang memutar; gaya searah tuas tidak berkontribusi.",
          },
          {
            q: "Pada τ = r × F × sin θ, torsi maksimum terjadi saat θ?",
            options: ["0°", "30°", "90°", "180°"],
            answer: 2,
            explain: "Pada 90°, sin θ = 1, sehingga seluruh gaya bekerja tegak lurus tuas.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "momen-inersia",
    levelId: "dinamika-rotasi",
    order: 2,
    title: "Momen Inersia",
    summary:
      "Dua benda bermassa sama bisa sangat berbeda susahnya diputar. Rahasianya pada sebaran massa, dan rumus menyusul di akhir.",
    durationMin: 14,
    tags: ["fisika", "rotasi", "momen inersia", "massa", "distribusi massa"],
    blocks: [
      {
        type: "paragraph",
        html: "Pegang palu di bagian kepala lalu putar bolak-balik di pergelangan: ringan. Sekarang pegang ujung gagangnya dan putar dengan cara sama: terasa jauh lebih berat, padahal palunya sama. Massa tidak berubah, tetapi <strong>seberapa jauh massa itu tersebar dari poros</strong> berubah. Mari pahami kisahnya dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Inersia dalam Gerak Berputar",
        caption: "Momen inersia adalah keengganan benda untuk mulai atau berhenti berputar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua roda dengan massa sama. Roda pertama padat merata, roda kedua memusatkan seluruh massanya di tepi (seperti cincin). Coba putar keduanya. Roda cincin terasa lebih sulit diputar, karena massanya berada <strong>jauh dari poros</strong>. Makin jauh massa dari sumbu putar, makin enggan benda itu berputar.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bukan sekadar massa",
        html: "Pada gerak lurus, yang menentukan keengganan bergerak hanyalah <strong>massa</strong>. Pada rotasi, dua hal menentukan: berapa massanya <em>dan</em> seberapa jauh massa itu dari poros. Massa yang jauh dari poros jauh lebih 'berat' untuk diputar daripada massa yang dekat poros. Inilah <strong>momen inersia</strong>.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Momen Inersia Berbagai Bentuk (M = 2 kg, R = 0,5 m)",
        unit: "kg·m²",
        source: "rumus baku momen inersia tiap bentuk",
        note: "Massa dan jari-jari sama persis, hanya sebaran massanya berbeda. Cincin (massa di tepi) paling sulit diputar; bola pejal (massa terkumpul di tengah) paling mudah.",
        data: [
          { label: "Cincin (MR²)", value: 0.5, color: "#f472b6" },
          { label: "Bola berongga (2/3 MR²)", value: 0.333, color: "#e879f9" },
          { label: "Silinder pejal (½ MR²)", value: 0.25, color: "#c084fc" },
          { label: "Bola pejal (2/5 MR²)", value: 0.2, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah massa kecil 3 kg diikat di ujung tali dan diputar pada jari-jari 2 m. Berapa momen inersianya? (anggap massa titik, I = m·r²)",
        answer: 12,
        tolerance: 0.01,
        suffix: " kg·m²",
        solution:
          "Untuk massa titik, I = m × r² = 3 × 2² = 3 × 4 = <strong>12 kg·m²</strong>. Perhatikan jaraknya dikuadratkan, jadi jarak sangat menentukan.",
        hint: "Kalikan massa dengan kuadrat jaraknya dari poros.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah cincin bermassa 4 kg berjari-jari 0,5 m. Berapa momen inersianya? (cincin: I = M·R²)",
        answer: 1,
        tolerance: 0.01,
        suffix: " kg·m²",
        solution:
          "Untuk cincin, seluruh massa berada di tepi: I = M × R² = 4 × 0,5² = 4 × 0,25 = <strong>1 kg·m²</strong>.",
        hint: "Cincin memakai I = M·R², jadi kuadratkan jari-jarinya lalu kalikan massa.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan bentuk benda dengan rumus momen inersianya (terhadap poros pusat).",
        pairs: [
          { left: "Massa titik", right: "m·r²" },
          { left: "Cincin tipis", right: "M·R²" },
          { left: "Silinder pejal", right: "½ M·R²" },
          { left: "Bola pejal", right: "2/5 M·R²" },
        ],
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk massa dan ukuran sama, kelompokkan benda mana lebih sulit dan lebih mudah diputar.",
        buckets: ["Lebih sulit diputar", "Lebih mudah diputar"],
        items: [
          { text: "Cincin (massa di tepi)", bucket: "Lebih sulit diputar" },
          { text: "Bola pejal (massa di tengah)", bucket: "Lebih mudah diputar" },
          { text: "Silinder berongga (massa di tepi)", bucket: "Lebih sulit diputar" },
          { text: "Silinder pejal (massa merata)", bucket: "Lebih mudah diputar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Roda Gila (Flywheel)",
        html: "Mesin dan pabrik memakai roda gila untuk menyimpan energi putar dan menjaga putaran tetap halus. Insinyur sengaja memusatkan massa roda di bagian tepi, bukan di tengah. Alasannya bukan menghafal rumus, melainkan paham bahwa momen inersia melonjak ketika massa diletakkan jauh dari poros (ingat jaraknya dikuadratkan). Roda gila yang berat di tepi menyimpan momen inersia besar, sehingga putarannya stabil dan tahan terhadap perubahan mendadak.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya masuk akal. Momen inersia adalah jumlah massa dikali kuadrat jaraknya dari poros: <strong>I = Σ m·r²</strong>. Untuk satu massa titik, <strong>I = m·r²</strong>. Tiap bentuk punya rumusnya: cincin MR², silinder pejal ½MR², bola pejal 2/5 MR². Dan inilah jembatannya ke torsi: <strong>τ = I·α</strong>, yaitu Hukum Newton kedua versi rotasi yang akan kita kupas berikutnya.",
      },
      {
        type: "takeaways",
        items: [
          "Momen inersia adalah keengganan benda untuk diputar, padanan massa pada rotasi.",
          "Ia bergantung pada massa dan pada kuadrat jarak massa dari poros (I = Σ m·r²).",
          "Massa yang jauh dari poros jauh lebih sulit diputar daripada massa yang dekat.",
          "Hukum Newton rotasi: τ = I·α, sehingga makin besar I makin sulit dipercepat berputar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Momen inersia adalah padanan rotasi dari besaran apa?",
            options: ["Gaya", "Massa", "Kecepatan", "Energi"],
            answer: 1,
            explain: "Momen inersia berperan seperti massa, yaitu keengganan untuk diubah geraknya.",
          },
          {
            q: "Massa titik 2 kg pada jari-jari 3 m punya momen inersia?",
            options: ["6 kg·m²", "12 kg·m²", "18 kg·m²", "36 kg·m²"],
            answer: 2,
            explain: "I = m·r² = 2 × 3² = 2 × 9 = 18 kg·m².",
          },
          {
            q: "Untuk massa dan jari-jari sama, mana momen inersianya paling besar?",
            options: ["Bola pejal", "Silinder pejal", "Cincin", "Semua sama"],
            answer: 2,
            explain: "Cincin menaruh seluruh massa di tepi (I = MR²), jadi momen inersianya terbesar.",
          },
          {
            q: "Jika jarak massa dari poros digandakan, momen inersianya menjadi?",
            options: ["2 kali", "3 kali", "4 kali", "tetap"],
            answer: 2,
            explain: "Karena I bergantung pada r², menggandakan r membuat I menjadi 2² = 4 kali.",
          },
          {
            q: "Hukum Newton kedua versi rotasi adalah?",
            options: ["F = ma", "τ = I·α", "L = I·ω", "Ek = ½I·ω²"],
            answer: 1,
            explain: "τ = I·α: torsi total sama dengan momen inersia dikali percepatan sudut.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-newton-rotasi",
    levelId: "dinamika-rotasi",
    order: 3,
    title: "Hukum II Newton untuk Rotasi",
    summary:
      "Torsi adalah penyebab, percepatan sudut adalah akibatnya, dan momen inersia adalah perantaranya. Tiga besaran bertemu dalam satu hukum.",
    durationMin: 14,
    tags: ["fisika", "rotasi", "hukum newton", "torsi", "percepatan sudut"],
    blocks: [
      {
        type: "paragraph",
        html: "Untuk membuat gerobak melaju, kita butuh gaya; makin berat gerobak, makin sulit. Pada rotasi ceritanya serupa: untuk membuat roda mulai berputar makin cepat, kita butuh torsi, dan makin besar momen inersianya, makin sulit dipercepat. Dua dunia, satu logika. Ayo telusuri sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Sebab dan Akibat dalam Putaran",
        caption: "Torsi menyebabkan percepatan sudut, dihambat oleh momen inersia.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua roda dengan torsi dorong sama. Roda ringan (momen inersia kecil) langsung melesat mempercepat putaran. Roda berat di tepi (momen inersia besar) hanya mempercepat pelan. Jadi untuk torsi yang sama, <strong>percepatan sudut berbanding terbalik dengan momen inersia</strong>. Persis seperti F = ma: gaya sama, massa besar berarti percepatan kecil.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Cermin dari F = ma",
        html: "Hukum II Newton gerak lurus berkata gaya total = massa × percepatan. Versi rotasinya tinggal menukar tiap besaran: gaya menjadi <strong>torsi</strong>, massa menjadi <strong>momen inersia</strong>, percepatan menjadi <strong>percepatan sudut</strong>. Hasilnya τ = I·α. Tidak ada yang baru untuk dihafal; hanya cermin yang sama.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Percepatan Sudut dari Torsi 12 N·m",
        unit: "rad/s²",
        source: "perhitungan α = τ/I dengan torsi tetap 12 N·m",
        note: "Torsi sama 12 N·m, tetapi makin besar momen inersia makin kecil percepatan sudutnya. Inilah τ = I·α dalam angka nyata.",
        data: [
          { label: "I = 1 kg·m²", value: 12, color: "#f472b6" },
          { label: "I = 2 kg·m²", value: 6, color: "#e879f9" },
          { label: "I = 3 kg·m²", value: 4, color: "#c084fc" },
          { label: "I = 4 kg·m²", value: 3, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Torsi 20 N·m bekerja pada roda dengan momen inersia 4 kg·m². Berapa percepatan sudutnya? (τ = I·α)",
        answer: 5,
        tolerance: 0.01,
        suffix: " rad/s²",
        solution:
          "Dari τ = I·α, maka α = τ/I = 20/4 = <strong>5 rad/s²</strong>. Sama persis pola a = F/m.",
        hint: "Bagi torsi dengan momen inersia.",
      },
      {
        type: "calcExercise",
        prompt:
          "Roda dengan momen inersia 2 kg·m² ingin dipercepat 6 rad/s². Berapa torsi yang dibutuhkan?",
        answer: 12,
        tolerance: 0.01,
        suffix: " N·m",
        solution:
          "τ = I·α = 2 × 6 = <strong>12 N·m</strong>. Makin besar percepatan sudut yang diinginkan, makin besar torsi yang diperlukan.",
        hint: "Kalikan momen inersia dengan percepatan sudut.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah gaya 10 N menarik tepi roda berjari-jari 0,5 m (momen inersia 2,5 kg·m²). Berapa percepatan sudutnya? (cari torsi dulu, lalu α = τ/I)",
        answer: 2,
        tolerance: 0.01,
        suffix: " rad/s²",
        solution:
          "Torsi τ = r·F = 0,5 × 10 = 5 N·m. Lalu α = τ/I = 5/2,5 = <strong>2 rad/s²</strong>. Gabungan torsi dan hukum Newton rotasi.",
        hint: "Hitung torsi r×F dulu, baru bagi dengan momen inersia.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan besaran gerak lurus dengan padanan rotasinya pada hukum Newton.",
        pairs: [
          { left: "Gaya F", right: "Torsi τ" },
          { left: "Massa m", right: "Momen inersia I" },
          { left: "Percepatan a", right: "Percepatan sudut α" },
          { left: "F = m·a", right: "τ = I·α" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Untuk torsi sama, kelompokkan roda mana mendapat percepatan sudut besar atau kecil.",
        buckets: ["Percepatan sudut besar", "Percepatan sudut kecil"],
        items: [
          { text: "Roda ringan, momen inersia kecil", bucket: "Percepatan sudut besar" },
          { text: "Roda gila berat di tepi", bucket: "Percepatan sudut kecil" },
          { text: "Cakram tipis ringan", bucket: "Percepatan sudut besar" },
          { text: "Cincin baja besar", bucket: "Percepatan sudut kecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memutar Roda Gila Mesin",
        html: "Mesin diesel besar memakai roda gila berat untuk menjaga putaran tetap halus. Karena momen inersianya besar, dibutuhkan torsi besar untuk mempercepatnya, tetapi sekali berputar ia sulit diperlambat. Insinyur menghitung torsi starter motor agar cukup memberi percepatan sudut yang memadai (τ = I·α). Mereka tidak menghafal; mereka memakai hukum Newton rotasi untuk memastikan mesin bisa dihidupkan tanpa starter yang terlalu besar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Inilah jantung dinamika rotasi: <strong>τ = I·α</strong>. Torsi total sama dengan momen inersia dikali percepatan sudut, persis cermin dari F = ma. Dari sini: <strong>α = τ/I</strong> (torsi sama, momen inersia besar berarti percepatan sudut kecil). Hukum ini menyatukan dua pelajaran sebelumnya, torsi dan momen inersia, menjadi satu sebab-akibat.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum II Newton rotasi: τ = I·α, cermin dari F = ma.",
          "Torsi adalah sebab, percepatan sudut akibat, momen inersia perantaranya.",
          "Untuk torsi sama, percepatan sudut berbanding terbalik dengan momen inersia.",
          "Gaya pada tepi roda diubah dulu jadi torsi (τ = r·F) sebelum dipakai di τ = I·α.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum II Newton untuk rotasi adalah?",
            options: ["F = ma", "τ = I·α", "L = I·ω", "v = ω·r"],
            answer: 1,
            explain: "τ = I·α: torsi total sama dengan momen inersia dikali percepatan sudut.",
          },
          {
            q: "Torsi 18 N·m pada momen inersia 3 kg·m² memberi percepatan sudut?",
            options: ["3 rad/s²", "6 rad/s²", "15 rad/s²", "54 rad/s²"],
            answer: 1,
            explain: "α = τ/I = 18/3 = 6 rad/s².",
          },
          {
            q: "Untuk torsi tetap, jika momen inersia digandakan, percepatan sudut menjadi?",
            options: ["Dua kali", "Setengah", "Tetap", "Empat kali"],
            answer: 1,
            explain: "α = τ/I; menggandakan I membuat α menjadi setengahnya.",
          },
          {
            q: "Padanan rotasi dari massa pada hukum Newton adalah?",
            options: ["Torsi", "Momen inersia", "Percepatan sudut", "Momentum sudut"],
            answer: 1,
            explain: "Momen inersia berperan seperti massa pada τ = I·α.",
          },
          {
            q: "Berapa torsi untuk mempercepat I = 5 kg·m² sebesar 4 rad/s²?",
            options: ["1,25 N·m", "9 N·m", "20 N·m", "40 N·m"],
            answer: 2,
            explain: "τ = I·α = 5 × 4 = 20 N·m.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kesetimbangan-benda-tegar",
    levelId: "dinamika-rotasi",
    order: 4,
    title: "Kesetimbangan Benda Tegar",
    summary:
      "Jungkat-jungkit seimbang bukan karena berat sama, tetapi karena torsi kiri dan kanan saling meniadakan. Kisah keseimbangan dulu, rumus di akhir.",
    durationMin: 14,
    tags: ["fisika", "rotasi", "kesetimbangan", "torsi", "benda tegar"],
    blocks: [
      {
        type: "paragraph",
        html: "Anak gemuk dan anak kurus bisa bermain jungkat-jungkit dengan seimbang. Caranya? Anak gemuk duduk lebih dekat ke poros, anak kurus lebih jauh. Berat mereka jelas berbeda, tetapi papan tetap datar. Yang seimbang ternyata bukan berat, melainkan <strong>torsi</strong>. Ayo telusuri rahasianya sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Saat Semua Torsi Saling Meniadakan",
        caption: "Benda diam dalam rotasi bila torsi yang memutar ke kiri dan ke kanan setara.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan jungkat-jungkit. Berat di kiri menghasilkan torsi yang memutar papan ke bawah-kiri; berat di kanan memutar ke bawah-kanan. Bila kedua torsi ini sama besar, mereka saling membatalkan dan papan diam. Anak berat cukup duduk dekat poros (lengan kecil), anak ringan duduk jauh (lengan besar), agar hasil kali berat × jarak keduanya sama.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua syarat keseimbangan",
        html: "Benda tegar benar-benar diam bila dua syarat terpenuhi. Pertama, <strong>tidak bergeser</strong>: jumlah semua gaya nol (ΣF = 0). Kedua, <strong>tidak berputar</strong>: jumlah semua torsi nol (Στ = 0). Torsi yang cenderung memutar searah jarum jam diimbangi oleh torsi berlawanan arah jarum jam.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Jarak Setimbang dari Poros (torsi lawan 60 N·m)",
        unit: "meter",
        source: "perhitungan r = τ/F = 60/F untuk tiap berat",
        note: "Agar torsi setara 60 N·m, makin besar berat anak makin pendek jaraknya dari poros. Inilah aturan jungkat-jungkit: berat × jarak harus sama di kedua sisi.",
        data: [
          { label: "Berat 200 N", value: 0.3, color: "#f472b6" },
          { label: "Berat 300 N", value: 0.2, color: "#e879f9" },
          { label: "Berat 400 N", value: 0.15, color: "#c084fc" },
          { label: "Berat 600 N", value: 0.1, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pada jungkat-jungkit, anak 300 N duduk 1 m dari poros. Di sisi lain anak 200 N harus duduk berapa meter agar seimbang? (torsi kiri = torsi kanan)",
        answer: 1.5,
        tolerance: 0.01,
        suffix: " m",
        solution:
          "Setimbang bila 300 × 1 = 200 × r, jadi r = 300/200 = <strong>1,5 m</strong>. Anak yang lebih ringan duduk lebih jauh dari poros.",
        hint: "Samakan berat × jarak di kedua sisi, lalu cari jaraknya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah batang ditumpu di tengah. Beban 40 N di kiri pada 0,5 m. Berapa torsi yang harus dilawan di sisi kanan agar seimbang?",
        answer: 20,
        tolerance: 0.01,
        suffix: " N·m",
        solution:
          "Torsi kiri = F × r = 40 × 0,5 = 20 N·m. Agar Στ = 0, sisi kanan harus memberi torsi <strong>20 N·m</strong> arah berlawanan.",
        hint: "Hitung torsi beban kiri; sisi kanan harus menyamainya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Batang seimbang: di kiri 50 N pada 0,8 m. Di kanan ada gaya pada jarak 0,4 m. Berapa besar gaya kanan itu?",
        answer: 100,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Torsi kiri = 50 × 0,8 = 40 N·m. Agar seimbang, F × 0,4 = 40, maka F = 40/0,4 = <strong>100 N</strong>. Lengan pendek butuh gaya besar.",
        hint: "Samakan torsi kiri dan kanan, lalu bagi dengan lengan kanan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah kesetimbangan dengan maknanya.",
        pairs: [
          { left: "Syarat tak bergeser", right: "ΣF = 0" },
          { left: "Syarat tak berputar", right: "Στ = 0" },
          { left: "Jungkat-jungkit seimbang", right: "Berat × jarak kiri = kanan" },
          { left: "Titik tumpu", right: "Poros tempat torsi diukur" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan keadaan benda tegar: setimbang atau berputar (tidak setimbang).",
        buckets: ["Setimbang (Στ = 0)", "Berputar (Στ ≠ 0)"],
        items: [
          { text: "Jungkat-jungkit dengan torsi kiri = kanan", bucket: "Setimbang (Στ = 0)" },
          { text: "Hanya satu anak duduk di salah satu ujung", bucket: "Berputar (Στ ≠ 0)" },
          { text: "Timbangan neraca dengan beban setara", bucket: "Setimbang (Στ = 0)" },
          { text: "Rak yang bebannya menumpuk di satu sisi", bucket: "Berputar (Στ ≠ 0)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Crane Konstruksi dan Beban Pengimbang",
        html: "Crane mengangkat beban berat di ujung lengan panjangnya. Agar tidak terguling, di sisi seberang dipasang beban pengimbang (counterweight). Insinyur mengatur agar torsi beban angkat sama dengan torsi pengimbang terhadap menara: beban berat di lengan pendek mengimbangi beban angkat di lengan panjang. Mereka tidak menghafal; mereka menerapkan Στ = 0 agar crane berdiri kokoh meski mengangkat berton-ton baja.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya jelas. Benda tegar setimbang bila dua syarat terpenuhi: <strong>ΣF = 0</strong> (tidak ada gerak translasi) dan <strong>Στ = 0</strong> (tidak ada gerak rotasi). Pada jungkat-jungkit, ini berarti torsi searah jarum jam sama dengan torsi berlawanan: <strong>F₁·r₁ = F₂·r₂</strong>. Keseimbangan bukan soal berat yang sama, melainkan torsi yang setara.",
      },
      {
        type: "takeaways",
        items: [
          "Benda tegar setimbang bila ΣF = 0 dan Στ = 0.",
          "Pada jungkat-jungkit, syaratnya berat × jarak kiri = berat × jarak kanan.",
          "Benda berat cukup dekat poros; benda ringan harus jauh agar torsinya setara.",
          "Keseimbangan ditentukan oleh torsi, bukan sekadar oleh berat yang sama.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dua syarat kesetimbangan benda tegar adalah?",
            options: [
              "ΣF = 0 dan Σm = 0",
              "ΣF = 0 dan Στ = 0",
              "Στ = 0 saja",
              "Σv = 0 dan Σa = 0",
            ],
            answer: 1,
            explain: "Benda tegar setimbang bila jumlah gaya nol (ΣF = 0) dan jumlah torsi nol (Στ = 0).",
          },
          {
            q: "Anak 400 N di 0,5 m. Anak 200 N seimbang pada jarak?",
            options: ["0,5 m", "1 m", "1,5 m", "2 m"],
            answer: 1,
            explain: "400 × 0,5 = 200 × r, jadi r = 200/200 = 1 m.",
          },
          {
            q: "Mengapa anak berat duduk lebih dekat poros jungkat-jungkit?",
            options: [
              "Agar lebih nyaman",
              "Agar lengan gayanya kecil sehingga torsinya setara anak ringan",
              "Agar papannya tidak patah",
              "Tidak ada alasan fisika",
            ],
            answer: 1,
            explain: "Berat besar × lengan kecil bisa menyamai berat kecil × lengan besar.",
          },
          {
            q: "Beban 60 N pada 0,5 m menghasilkan torsi?",
            options: ["12 N·m", "30 N·m", "60 N·m", "120 N·m"],
            answer: 1,
            explain: "τ = F × r = 60 × 0,5 = 30 N·m.",
          },
          {
            q: "Counterweight pada crane berfungsi untuk?",
            options: [
              "Menambah berat total",
              "Mengimbangi torsi beban angkat (Στ = 0)",
              "Mempercepat putaran",
              "Mengurangi gesekan",
            ],
            answer: 1,
            explain: "Pengimbang menyediakan torsi lawan agar jumlah torsi nol dan crane tidak terguling.",
          },
        ],
      },
    ],
  },
];
