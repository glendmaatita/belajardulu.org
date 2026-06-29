import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "interferensi-young",
    levelId: "optika-fisis",
    order: 1,
    title: "Interferensi Cahaya (Celah Ganda Young)",
    summary:
      "Sebelum menulis rumus celah, kita kagumi dulu warna-warni gelembung sabun dan pola terang-gelap yang membuktikan cahaya itu gelombang.",
    durationMin: 15,
    tags: ["optika", "interferensi", "celah-ganda", "young", "gelombang"],
    blocks: [
      {
        type: "paragraph",
        html: "Tiup gelembung sabun dan amati: permukaannya berkilau warna-warni padahal air sabun tidak berwarna. Lihat juga genangan air bercampur sedikit oli di jalan, ada pelangi tipis di atasnya. Dari mana warna itu jika tidak ada pigmen? Inilah bukti nyata bahwa <strong>cahaya adalah gelombang</strong> yang bisa saling menguatkan dan meniadakan. Ayo selami dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Cahaya Berperilaku sebagai Gelombang",
        caption: "Dua gelombang cahaya bisa berpadu menguatkan atau meniadakan, menciptakan pola terang-gelap.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pada 1801, Thomas Young melewatkan satu berkas cahaya melalui <strong>dua celah</strong> sempit yang berdekatan, lalu menatap layar di belakangnya. Bukannya dua garis terang, yang muncul justru deretan <strong>pita terang-gelap</strong> berselang-seling. Kamu bisa menirunya dengan dua celah tipis pada kartu di depan lampu kecil. Pola itu hanya mungkin jika cahaya berpadu seperti riak air di kolam. Amati polanya dulu, rumus menyusul.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Menguatkan dan meniadakan",
        html: "Saat dua gelombang cahaya bertemu sefase (puncak ketemu puncak), mereka <strong>saling menguatkan</strong> dan muncul pita <strong>terang</strong>. Saat bertemu berlawanan fase (puncak ketemu lembah), mereka <strong>saling meniadakan</strong> dan muncul pita <strong>gelap</strong>. Pita terang muncul saat selisih lintasan dua gelombang sama dengan kelipatan bulat panjang gelombang.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Panjang Gelombang Tiap Warna Cahaya Tampak",
        unit: "nanometer (nm)",
        source: "data spektrum cahaya tampak",
        note: "Angka nyata. Warna ditentukan oleh panjang gelombang: ungu paling pendek, merah paling panjang. Inilah yang menentukan jarak pita interferensi tiap warna.",
        data: [
          { label: "Ungu", value: 400, color: "#818cf8" },
          { label: "Hijau", value: 530, color: "#34d399" },
          { label: "Kuning", value: 580, color: "#fbbf24" },
          { label: "Merah", value: 680, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Percobaan celah ganda Young: jarak antar celah d = 0,5 mm, layar berjarak L = 2 m, cahaya berpanjang gelombang 600 nm. Berapa jarak pita terang pertama dari pusat? (y = m·λ·L / d, dengan m = 1)",
        answer: 2.4,
        tolerance: 0.1,
        suffix: " mm",
        solution:
          "y = (1 × 600×10⁻⁹ m × 2 m) / (0,5×10⁻³ m) = (1200×10⁻⁹) / (5×10⁻⁴) = 2,4×10⁻³ m = <strong>2,4 mm</strong>. Pola terang-gelap muncul karena gelombang dari dua celah saling menguatkan dan meniadakan.",
        hint: "Ubah semua ke meter: 600 nm = 600×10⁻⁹ m, 0,5 mm = 0,5×10⁻³ m, lalu y = λLm/d.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada percobaan yang sama (d = 0,5 mm, L = 2 m, λ = 600 nm), berapa jarak pita terang kedua (m = 2) dari pusat?",
        answer: 4.8,
        tolerance: 0.1,
        suffix: " mm",
        solution:
          "y = (2 × 600×10⁻⁹ × 2) / (0,5×10⁻³) = 4,8×10⁻³ m = <strong>4,8 mm</strong>. Pita-pita terang berjarak sama, jadi pita kedua tepat dua kali jarak pita pertama.",
        hint: "Sama seperti soal sebelumnya tetapi m = 2, jadi hasilnya dua kali lipat.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap kondisi sebagai penyebab pita terang atau pita gelap.",
        buckets: ["Pita terang (menguatkan)", "Pita gelap (meniadakan)"],
        items: [
          { text: "Selisih lintasan = 1 panjang gelombang", bucket: "Pita terang (menguatkan)" },
          { text: "Puncak gelombang bertemu puncak", bucket: "Pita terang (menguatkan)" },
          { text: "Selisih lintasan = setengah panjang gelombang", bucket: "Pita gelap (meniadakan)" },
          { text: "Puncak gelombang bertemu lembah", bucket: "Pita gelap (meniadakan)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Warna pada Gelembung Sabun",
        html: "Lapisan sabun setipis beberapa ratus nanometer memantulkan cahaya dari dua permukaan: sisi luar dan sisi dalam. Kedua pantulan itu lalu <strong>berinterferensi</strong>. Untuk ketebalan tertentu, warna tertentu saling menguatkan dan tampak cemerlang, sementara warna lain meniadakan dan hilang. Karena ketebalan lapisan berubah-ubah saat gelembung mengalir, warna yang menguat pun bergeser, menghasilkan pelangi yang menari. Lapisan oli di atas air bekerja persis sama. Tidak ada pigmen, hanya gelombang cahaya yang berpadu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. Pita terang interferensi celah ganda memenuhi <strong>d · sin θ = m · λ</strong> (atau y = m·λ·L/d pada layar), dengan m = 0, 1, 2, ... orde pita. Pita terang muncul saat selisih lintasan dua gelombang adalah kelipatan bulat panjang gelombang. Rumus ini hanya merangkum warna gelembung dan pola Young yang sudah kamu lihat sendiri.",
      },
      {
        type: "takeaways",
        items: [
          "Interferensi membuktikan cahaya adalah gelombang yang bisa menguatkan dan meniadakan.",
          "Pita terang celah ganda: d · sin θ = m · λ.",
          "Pada layar, jarak pita terang ke-m adalah y = m · λ · L / d.",
          "Warna gelembung sabun dan lapisan oli adalah interferensi lapisan tipis.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Percobaan dua celah Young membuktikan bahwa cahaya?",
            options: ["Berupa partikel saja", "Berupa gelombang yang bisa berinterferensi", "Tidak bisa membelok", "Selalu lurus"],
            answer: 1,
            explain: "Pola terang-gelap hanya bisa dijelaskan bila cahaya adalah gelombang yang berpadu.",
          },
          {
            q: "Pita terang interferensi terjadi saat dua gelombang?",
            options: [
              "Bertemu puncak dengan lembah",
              "Bertemu puncak dengan puncak (sefase)",
              "Saling tegak lurus",
              "Berbeda warna",
            ],
            answer: 1,
            explain: "Gelombang sefase saling menguatkan, menghasilkan pita terang.",
          },
          {
            q: "Rumus pita terang celah ganda adalah?",
            options: ["d · sin θ = m · λ", "n₁ sin θ₁ = n₂ sin θ₂", "1/f = 1/s + 1/s'", "v = f · λ"],
            answer: 0,
            explain: "Pita terang muncul saat d · sin θ = m · λ (selisih lintasan kelipatan λ).",
          },
          {
            q: "Pada celah ganda d = 0,5 mm, L = 2 m, λ = 600 nm, pita terang pertama berjarak?",
            options: ["1,2 mm", "2,4 mm", "4,8 mm", "0,6 mm"],
            answer: 1,
            explain: "y = λLm/d = (600×10⁻⁹ × 2 × 1)/(0,5×10⁻³) = 2,4 mm.",
          },
          {
            q: "Warna-warni gelembung sabun disebabkan oleh?",
            options: [
              "Pigmen dalam sabun",
              "Interferensi pantulan dari dua permukaan lapisan tipis",
              "Pembiasan tunggal",
              "Penyerapan cahaya",
            ],
            answer: 1,
            explain: "Pantulan dari sisi luar dan dalam lapisan berinterferensi, menguatkan warna tertentu.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "difraksi-kisi",
    levelId: "optika-fisis",
    order: 2,
    title: "Difraksi dan Kisi",
    summary:
      "Sebelum memakai rumus kisi, kita amati dulu mengapa permukaan CD memancarkan pelangi dan mengapa cahaya bisa melentur menembus celah sempit.",
    durationMin: 14,
    tags: ["optika", "difraksi", "kisi", "gelombang"],
    blocks: [
      {
        type: "paragraph",
        html: "Miringkan permukaan sebuah CD atau DVD ke arah cahaya, dan seketika muncul <strong>pelangi</strong> menyapu permukaannya, padahal cakram itu sebenarnya abu-abu metalik. Lalu lihat lampu jauh melalui kain tipis atau bulu mata yang dirapatkan: titik cahaya itu melebar jadi garis-garis. Cahaya ternyata bisa <strong>melentur</strong> dan menyebar. Mengapa? Ayo amati dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Gelombang Melentur Melewati Celah",
        caption: "Saat melewati celah sempit, gelombang melentur dan menyebar, itulah difraksi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang dua jari rapat-rapat di depan mata sambil melihat lampu terang, sisakan celah sangat tipis di antaranya. Perhatikan: muncul garis-garis gelap halus di celah itu. Itu <strong>difraksi</strong>, cahaya melentur dan berpadu saat melewati celah sempit. Lalu tatap CD: ribuan alur halusnya bekerja seperti ribuan celah sekaligus, menguraikan cahaya putih jadi spektrum. Amati dulu, rumus belakangan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dari satu celah ke ribuan celah",
        html: "<strong>Difraksi</strong> adalah pelenturan gelombang saat melewati celah atau tepi penghalang. Makin sempit celahnya, makin lebar lenturannya. <strong>Kisi difraksi</strong> adalah ribuan celah sangat rapat dan sejajar (misalnya 500 garis tiap milimeter). Karena celahnya sangat banyak dan rapat, kisi menguraikan warna jauh lebih tajam dan terang dibanding celah ganda.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Sudut Difraksi Orde-1 Tiap Warna pada Kisi 500 garis/mm",
        unit: "derajat",
        source: "perhitungan d·sin θ = λ dengan d = 1/500 mm = 2000 nm",
        note: "Angka nyata. Tiap warna melentur dengan sudut berbeda: ungu paling kecil, merah paling besar. Itu sebabnya kisi menguraikan cahaya putih jadi spektrum lengkap.",
        data: [
          { label: "Ungu 400 nm", value: 11.5, color: "#818cf8" },
          { label: "Hijau 530 nm", value: 15.4, color: "#34d399" },
          { label: "Kuning 580 nm", value: 16.9, color: "#fbbf24" },
          { label: "Merah 680 nm", value: 19.9, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kisi difraksi memiliki 500 garis per milimeter, jadi jarak antar celah d = 2000 nm. Cahaya 600 nm melewatinya. Berapa nilai sin θ untuk orde pertama (m = 1)? (d · sin θ = m · λ)",
        answer: 0.3,
        tolerance: 0.02,
        solution:
          "sin θ = m·λ/d = (1 × 600 nm) / 2000 nm = <strong>0,30</strong> (sudut sekitar 17,5°). Karena d dan λ sama-sama dalam nm, satuannya langsung coret tanpa konversi tambahan.",
        hint: "sin θ = m·λ/d; pakai d = 2000 nm, λ = 600 nm.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kisi memiliki 200 garis per milimeter. Berapa jarak antar celah d-nya dalam nanometer? (d = 1 mm dibagi jumlah garis)",
        answer: 5000,
        tolerance: 50,
        suffix: " nm",
        solution:
          "d = 1 mm / 200 = 0,005 mm = 5000 nm = <strong>5000 nm</strong>. Makin sedikit garis per mm, makin lebar jarak antar celah, dan makin kecil sudut penyebarannya.",
        hint: "1 mm = 1.000.000 nm; bagi dengan jumlah garis.",
      },
      {
        type: "classifyExercise",
        prompt: "Saat celah dipersempit atau kisi dirapatkan, bagaimana penyebaran cahayanya?",
        buckets: ["Lenturan makin lebar", "Lenturan makin sempit"],
        items: [
          { text: "Celah tunggal dibuat makin sempit", bucket: "Lenturan makin lebar" },
          { text: "Kisi dengan lebih banyak garis per mm (d kecil)", bucket: "Lenturan makin lebar" },
          { text: "Celah tunggal dibuat makin lebar", bucket: "Lenturan makin sempit" },
          { text: "Kisi dengan lebih sedikit garis per mm (d besar)", bucket: "Lenturan makin sempit" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Spektroskop Membaca Bintang",
        html: "Astronom memasang <strong>kisi difraksi</strong> di teleskop untuk menguraikan cahaya bintang menjadi spektrum. Setiap unsur kimia memancarkan atau menyerap warna khas pada panjang gelombang tertentu, sehingga spektrum bintang penuh garis terang dan gelap seperti sidik jari. Dari posisi garis-garis itu, ilmuwan tahu bintang tersusun dari hidrogen, helium, atau besi, dan dari pergeserannya mereka mengukur seberapa cepat bintang menjauh. Permukaan CD memancarkan pelangi karena alasan yang sama: alur-alur rapatnya adalah kisi difraksi alami. Semua bertumpu pada satu pola: d · sin θ = m · λ.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan. Maksimum terang kisi difraksi memenuhi <strong>d · sin θ = m · λ</strong>, dengan d jarak antar celah, m orde (0, 1, 2, ...), dan λ panjang gelombang. Karena tiap warna punya λ berbeda, sudut θ-nya berbeda, sehingga cahaya putih terurai jadi spektrum. Rumus ini hanya merangkum pelangi CD dan garis difraksi yang sudah kamu amati.",
      },
      {
        type: "takeaways",
        items: [
          "Difraksi adalah pelenturan gelombang saat melewati celah atau tepi; makin sempit celah, makin lebar lenturannya.",
          "Kisi difraksi adalah ribuan celah rapat yang menguraikan cahaya dengan tajam.",
          "Maksimum terang kisi: d · sin θ = m · λ.",
          "Spektroskop dan kilau CD memanfaatkan difraksi untuk menguraikan warna.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Difraksi adalah peristiwa?",
            options: [
              "Pemantulan cahaya pada cermin",
              "Pelenturan gelombang saat melewati celah atau tepi",
              "Pembelokan cahaya antar medium",
              "Penyerapan warna",
            ],
            answer: 1,
            explain: "Difraksi adalah pelenturan dan penyebaran gelombang di celah atau tepi penghalang.",
          },
          {
            q: "Makin sempit sebuah celah, lenturan cahayanya?",
            options: ["Makin sempit", "Makin lebar", "Tidak berubah", "Menghilang"],
            answer: 1,
            explain: "Celah yang lebih sempit menyebabkan difraksi yang lebih lebar.",
          },
          {
            q: "Rumus maksimum terang kisi difraksi adalah?",
            options: ["d · sin θ = m · λ", "n₁ sin θ₁ = n₂ sin θ₂", "1/f = 1/s + 1/s'", "P = 1/f"],
            answer: 0,
            explain: "Maksimum terang kisi memenuhi d · sin θ = m · λ.",
          },
          {
            q: "Kisi 500 garis/mm (d = 2000 nm), λ = 600 nm, orde 1. Nilai sin θ?",
            options: ["0,15", "0,30", "0,60", "1,20"],
            answer: 1,
            explain: "sin θ = m·λ/d = 600/2000 = 0,30.",
          },
          {
            q: "Mengapa permukaan CD memancarkan warna pelangi?",
            options: [
              "Karena dilapisi pigmen warna-warni",
              "Alur-alur rapatnya bertindak sebagai kisi difraksi yang menguraikan cahaya",
              "Karena memantulkan cahaya secara baur",
              "Karena menyerap cahaya merah",
            ],
            answer: 1,
            explain: "Alur mikroskopis CD adalah kisi yang menyebarkan tiap warna pada sudut berbeda.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "polarisasi",
    levelId: "optika-fisis",
    order: 3,
    title: "Polarisasi Cahaya",
    summary:
      "Sebelum memakai hukum Malus, kita pahami dulu mengapa kacamata polaroid menghilangkan silau air dan mengapa layar HP bisa menggelap saat dilihat lewat kacamata hitam.",
    durationMin: 14,
    tags: ["optika", "polarisasi", "malus", "gelombang"],
    blocks: [
      {
        type: "paragraph",
        html: "Putar layar ponselmu pelan-pelan sambil menatapnya lewat kacamata hitam polaroid. Pada sudut tertentu, layar berubah <strong>gelap total</strong>, padahal lampunya menyala penuh. Pemancing pun memakai kacamata polaroid agar silau permukaan air hilang dan ikan di bawahnya terlihat. Apa yang sedang disaring dari cahaya? Ayo selami dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Arah Getar Gelombang Cahaya",
        caption: "Cahaya biasa bergetar ke segala arah; polarisasi menyisakan satu arah getar saja.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil dua lensa kacamata hitam polaroid (atau dua filter polarisasi), tumpuk, lalu putar yang satu perlahan terhadap yang lain. Saat sumbunya sejajar, cahaya tembus terang. Saat diputar 90°, keduanya bersilangan dan cahaya <strong>terblokir hampir total</strong>, gelap. Bayangkan menggoyang tali lewat dua pagar celah: hanya getaran yang searah celah yang lolos. Amati polanya dulu, rumus menyusul.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Hanya gelombang transversal yang bisa terpolarisasi",
        html: "Cahaya adalah gelombang <strong>transversal</strong>: medannya bergetar tegak lurus arah rambat, ke segala arah. <strong>Polarisasi</strong> menyaring getaran itu agar tinggal satu arah saja. Filter (polaroid) hanya meneruskan komponen getar yang sejajar sumbunya. Pemantulan dari permukaan datar seperti air atau aspal juga membuat cahaya terpolarisasi mendatar, itulah sumber silau.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "line",
        title: "Intensitas Lolos vs Sudut antara Dua Polaroid (Hukum Malus)",
        unit: "intensitas relatif (I/I₀)",
        source: "perhitungan I = I₀ cos²θ",
        note: "Angka nyata dari hukum Malus. Saat sumbu sejajar (0°) cahaya lolos penuh; saat bersilangan (90°) lolos nol. Pada 45° tepat separuhnya yang lolos.",
        data: [
          { label: "0°", value: 1.0, color: "#34d399" },
          { label: "30°", value: 0.75, color: "#22d3ee" },
          { label: "45°", value: 0.5, color: "#38bdf8" },
          { label: "60°", value: 0.25, color: "#60a5fa" },
          { label: "90°", value: 0.0, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Cahaya terpolarisasi berintensitas 800 lux melewati polaroid kedua yang sumbunya membentuk sudut 60° terhadap arah polarisasi. Berapa intensitas cahaya yang lolos? (I = I₀ cos²θ, cos 60° = 0,5)",
        answer: 200,
        tolerance: 5,
        suffix: " lux",
        solution:
          "I = I₀ cos²θ = 800 × (0,5)² = 800 × 0,25 = <strong>200 lux</strong>. Hanya seperempat yang lolos karena cos²60° = 0,25.",
        hint: "Kuadratkan cos 60° dulu (0,5² = 0,25), lalu kalikan dengan 800.",
      },
      {
        type: "calcExercise",
        prompt:
          "Cahaya terpolarisasi 800 lux melewati polaroid yang sumbunya membentuk sudut 45° (cos 45° = 0,707). Berapa intensitas yang lolos?",
        answer: 400,
        tolerance: 10,
        suffix: " lux",
        solution:
          "I = I₀ cos²45° = 800 × (0,707)² = 800 × 0,5 = <strong>400 lux</strong>. Pada sudut 45° tepat separuh intensitas yang diteruskan.",
        hint: "cos²45° = 0,5; kalikan dengan 800.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap peristiwa: melibatkan polarisasi atau tidak.",
        buckets: ["Melibatkan polarisasi", "Tidak melibatkan polarisasi"],
        items: [
          { text: "Kacamata polaroid meredam silau air", bucket: "Melibatkan polarisasi" },
          { text: "Kacamata 3D bioskop memisahkan gambar dua mata", bucket: "Melibatkan polarisasi" },
          { text: "Sedotan tampak patah di gelas air", bucket: "Tidak melibatkan polarisasi" },
          { text: "Bayangan tegas di dinding dari senter", bucket: "Tidak melibatkan polarisasi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kacamata Polaroid Pemancing",
        html: "Cahaya yang memantul dari permukaan air menjadi <strong>terpolarisasi mendatar</strong> dan menimbulkan silau yang menutupi pandangan ke dalam air. Lensa polaroid pada kacamata pemancing dipasang dengan sumbu <strong>vertikal</strong>, sehingga getaran mendatar dari silau itu terblokir hampir total, sementara cahaya dari ikan dan dasar yang bergetar acak masih sebagian lolos. Hasilnya silau lenyap dan air menjadi jernih dipandang. Layar LCD dan kacamata 3D bekerja dengan prinsip penyaringan arah getar yang sama. Tidak ada sihir, hanya pemilihan satu arah getaran gelombang cahaya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan <strong>Hukum Malus</strong>: <strong>I = I₀ cos²θ</strong>, dengan I₀ intensitas cahaya terpolarisasi yang masuk, θ sudut antara arah polarisasi cahaya dan sumbu polaroid, dan I intensitas yang lolos. Saat θ = 0° lolos penuh; saat θ = 90° lolos nol. Rumus ini hanya merangkum apa yang kamu lihat saat memutar dua polaroid.",
      },
      {
        type: "takeaways",
        items: [
          "Cahaya gelombang transversal, sehingga bisa dipolarisasikan (disaring ke satu arah getar).",
          "Pemantulan dari permukaan datar memolarisasikan cahaya secara mendatar, sumber silau.",
          "Hukum Malus: I = I₀ cos²θ; pada 90° cahaya terblokir total.",
          "Kacamata polaroid, kacamata 3D, dan layar LCD memanfaatkan polarisasi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Polarisasi membuktikan bahwa cahaya adalah gelombang?",
            options: ["Longitudinal", "Transversal", "Mekanik", "Berdiri"],
            answer: 1,
            explain: "Hanya gelombang transversal (bergetar tegak lurus rambat) yang bisa dipolarisasikan.",
          },
          {
            q: "Apa yang dilakukan filter polaroid pada cahaya?",
            options: [
              "Membelokkan semua cahaya",
              "Meneruskan hanya getaran searah sumbunya",
              "Memperkuat cahaya",
              "Mengubah warnanya",
            ],
            answer: 1,
            explain: "Polaroid hanya meloloskan komponen getar yang sejajar sumbunya.",
          },
          {
            q: "Bunyi Hukum Malus adalah?",
            options: ["I = I₀ cos²θ", "I = I₀ sin θ", "I = I₀ / θ", "I = I₀ tan²θ"],
            answer: 0,
            explain: "Intensitas yang lolos I = I₀ cos²θ.",
          },
          {
            q: "Cahaya terpolarisasi 800 lux melewati polaroid pada sudut 60°. Intensitas lolos?",
            options: ["100 lux", "200 lux", "400 lux", "800 lux"],
            answer: 1,
            explain: "I = 800 × cos²60° = 800 × 0,25 = 200 lux.",
          },
          {
            q: "Mengapa kacamata polaroid mengurangi silau permukaan air?",
            options: [
              "Menggelapkan semua cahaya merata",
              "Silau pantulan terpolarisasi mendatar, dan sumbu lensa vertikal memblokirnya",
              "Membiaskan cahaya air",
              "Memantulkan cahaya kembali ke air",
            ],
            answer: 1,
            explain: "Silau pantulan bergetar mendatar; lensa polaroid bersumbu vertikal menyaringnya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "dispersi-warna",
    levelId: "optika-fisis",
    order: 4,
    title: "Dispersi dan Warna",
    summary:
      "Sebelum berhitung, kita pecahkan dulu rahasia Newton: bagaimana sebongkah kaca bening bisa menguraikan cahaya putih menjadi tujuh warna pelangi.",
    durationMin: 14,
    tags: ["optika", "dispersi", "warna", "prisma", "pelangi"],
    blocks: [
      {
        type: "paragraph",
        html: "Pada 1666 Isaac Newton menutup kamarnya, menyisakan satu celah cahaya matahari, lalu meletakkan <strong>prisma</strong> kaca di jalannya. Di dinding seberang muncul pita warna lengkap dari merah ke ungu. Banyak yang mengira prisma 'mewarnai' cahaya, tetapi Newton membuktikan sebaliknya: cahaya putih sudah mengandung semua warna, prisma hanya <strong>menguraikannya</strong>. Mengapa kaca bisa memisahkan warna? Ayo amati dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "PembiasanCahaya",
        title: "Video: Prisma Menguraikan Cahaya Putih",
        caption: "Tiap warna membelok dengan sudut sedikit berbeda, sehingga cahaya putih terurai jadi spektrum.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Isi gelas bening dengan air, letakkan di tepi meja dekat jendela yang terkena matahari, dan miringkan sedikit agar air berperan seperti prisma. Cari pita pelangi di lantai atau dinding. Perhatikan urutannya: <strong>merah selalu di satu ujung, ungu di ujung lain</strong>. Ungu membelok paling tajam, merah paling landai. Amati urutan warnanya dulu, rumus menyusul.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Indeks bias bergantung pada warna",
        html: "<strong>Dispersi</strong> terjadi karena indeks bias suatu medium sedikit <strong>berbeda untuk tiap panjang gelombang</strong>. Cahaya ungu (λ pendek) mengalami n lebih besar sehingga membelok paling tajam; cahaya merah (λ panjang) ber-n lebih kecil dan membelok paling landai. Karena itu satu berkas putih masuk, tetapi keluar terurai jadi kipas warna.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Indeks Bias Kaca Crown untuk Tiap Warna",
        unit: "indeks bias n",
        source: "data dispersi kaca crown (BK7)",
        note: "Angka nyata. Selisihnya kecil tetapi cukup memisahkan warna: ungu ber-n tertinggi (membelok terkuat), merah terendah (terlemah). Inilah penyebab dispersi.",
        data: [
          { label: "Ungu 400 nm", value: 1.532, color: "#818cf8" },
          { label: "Biru 470 nm", value: 1.528, color: "#60a5fa" },
          { label: "Hijau 530 nm", value: 1.519, color: "#34d399" },
          { label: "Kuning 580 nm", value: 1.517, color: "#fbbf24" },
          { label: "Merah 680 nm", value: 1.513, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Cahaya ungu (n = 1,53) masuk dari udara ke kaca dengan sin θ₁ = 0,60. Berapa nilai sin θ₂ di dalam kaca? (Snell: 1 × sin θ₁ = n × sin θ₂)",
        answer: 0.39,
        tolerance: 0.02,
        solution:
          "sin θ₂ = sin θ₁ / n = 0,60 / 1,53 = <strong>0,39</strong>. Sudut biasnya kecil karena n ungu besar, jadi ungu membelok paling tajam.",
        hint: "sin θ₂ = sin θ₁ dibagi indeks bias.",
      },
      {
        type: "calcExercise",
        prompt:
          "Cahaya merah (n = 1,513) masuk ke kaca yang sama dengan sin θ₁ = 0,60. Berapa nilai sin θ₂-nya?",
        answer: 0.4,
        tolerance: 0.02,
        solution:
          "sin θ₂ = 0,60 / 1,513 = <strong>0,40</strong>. Nilainya sedikit lebih besar daripada ungu (0,39), artinya merah membelok lebih landai. Selisih kecil inilah yang memisahkan warna pada prisma.",
        hint: "Bagi 0,60 dengan 1,513, lalu bandingkan dengan hasil ungu.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Berdasarkan dispersi, kelompokkan tiap warna sebagai yang membelok paling tajam atau paling landai di dalam prisma.",
        buckets: ["Membelok paling tajam (n besar)", "Membelok paling landai (n kecil)"],
        items: [
          { text: "Ungu (λ pendek)", bucket: "Membelok paling tajam (n besar)" },
          { text: "Biru", bucket: "Membelok paling tajam (n besar)" },
          { text: "Merah (λ panjang)", bucket: "Membelok paling landai (n kecil)" },
          { text: "Kuning-jingga", bucket: "Membelok paling landai (n kecil)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pelangi Setelah Hujan",
        html: "Pelangi lahir dari dispersi dan pemantulan. Saat cahaya matahari masuk ke setiap tetes air hujan, ia membelok (dispersi memisahkan warna), memantul total di dinding belakang tetes, lalu membelok lagi saat keluar. Karena tiap warna punya indeks bias sedikit berbeda, ungu keluar pada sudut sekitar 40° dan merah sekitar 42°, sehingga warna-warna terpisah membentuk busur. Tidak ada cat di langit, hanya jutaan tetes air yang masing-masing menjadi prisma bola mungil. Kilau 'api' pada intan pun dispersi: indeks biasnya yang tinggi membuat warna-warna terpisah sangat lebar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. Dispersi muncul karena indeks bias bergantung panjang gelombang, <strong>n = n(λ)</strong>, sehingga Hukum Snell <strong>sin θ₂ = sin θ₁ / n</strong> memberi sudut bias berbeda untuk tiap warna. Ungu (n terbesar) membelok paling tajam, merah (n terkecil) paling landai. Rumus ini hanya merangkum kipas warna prisma dan busur pelangi yang sudah kamu lihat.",
      },
      {
        type: "takeaways",
        items: [
          "Cahaya putih adalah campuran semua warna; prisma menguraikannya, bukan mewarnainya.",
          "Dispersi terjadi karena indeks bias bergantung panjang gelombang, n = n(λ).",
          "Ungu (n terbesar) membelok paling tajam; merah (n terkecil) paling landai.",
          "Pelangi dan kilau intan adalah peristiwa dispersi cahaya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Saat cahaya putih melewati prisma, prisma sebenarnya?",
            options: [
              "Mewarnai cahaya yang tadinya tak berwarna",
              "Menguraikan warna-warna yang sudah ada dalam cahaya putih",
              "Menyerap sebagian warna",
              "Memantulkan cahaya",
            ],
            answer: 1,
            explain: "Newton membuktikan cahaya putih sudah mengandung semua warna; prisma hanya memisahkannya.",
          },
          {
            q: "Penyebab dispersi adalah?",
            options: [
              "Indeks bias yang sama untuk semua warna",
              "Indeks bias yang sedikit berbeda untuk tiap panjang gelombang",
              "Pemantulan baur",
              "Polarisasi",
            ],
            answer: 1,
            explain: "Karena n bergantung λ, tiap warna membelok dengan sudut berbeda.",
          },
          {
            q: "Warna yang membelok paling tajam di dalam prisma adalah?",
            options: ["Merah", "Kuning", "Hijau", "Ungu"],
            answer: 3,
            explain: "Ungu punya indeks bias terbesar sehingga membelok paling tajam.",
          },
          {
            q: "Cahaya ungu (n=1,53), sin θ₁ = 0,60. Nilai sin θ₂ di kaca?",
            options: ["0,39", "0,60", "0,92", "1,53"],
            answer: 0,
            explain: "sin θ₂ = 0,60 / 1,53 = 0,39.",
          },
          {
            q: "Pelangi terbentuk karena tetes air hujan?",
            options: [
              "Memantulkan cahaya secara baur",
              "Membiaskan dan mendispersikan cahaya matahari menjadi spektrum",
              "Memancarkan cahaya sendiri",
              "Memolarisasikan cahaya",
            ],
            answer: 1,
            explain: "Tiap tetes membiaskan (dispersi) lalu memantulkan cahaya, memisahkan warna jadi busur.",
          },
        ],
      },
    ],
  },
];
