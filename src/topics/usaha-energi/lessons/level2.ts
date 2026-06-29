import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "energi-kinetik",
    levelId: "bentuk-energi",
    order: 1,
    title: "Energi Kinetik",
    summary:
      "Mobil cepat jauh lebih sulit dihentikan daripada mobil lambat, padahal massanya sama. Energi geraknya menyimpan rahasia kuadrat.",
    durationMin: 13,
    tags: ["fisika", "energi kinetik", "kecepatan", "gerak"],
    blocks: [
      {
        type: "paragraph",
        html: "Bola yang menggelinding pelan mudah kamu hentikan dengan tangan. Bola yang sama melaju kencang bisa menyakiti telapakmu. Benda yang bergerak menyimpan energi karena geraknya, dan energi itu disebut <strong>energi kinetik</strong>. Yang mengejutkan, melipatduakan kecepatan tidak melipatduakan energinya, melainkan jauh lebih banyak. Sebelum rumus, ayo selidiki dulu mengapa kecepatan begitu menentukan.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Energi karena Gerak",
        caption:
          "Energi kinetik adalah energi yang dimiliki benda karena geraknya, dan tumbuh sangat cepat terhadap kecepatan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tiup bola pingpong pelan ke arah tumpukan kelereng, lalu lempar bola yang sama dengan kencang. Pada lemparan kencang, tumpukan berantakan jauh lebih hebat. Massanya sama, hanya kecepatannya berbeda. Perhatikan: menambah sedikit kecepatan menambah banyak 'kemampuan menabrak'. Itulah jejak energi kinetik yang bergantung pada kuadrat kecepatan.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bergantung kuadrat kecepatan",
        html: "Energi kinetik tidak naik sebanding kecepatan, melainkan terhadap <strong>kuadrat</strong> kecepatan. Menggandakan kecepatan membuat energi kinetik menjadi empat kali lipat; melipattigakan membuatnya sembilan kali lipat. Itulah mengapa kecelakaan pada kecepatan tinggi jauh lebih merusak daripada yang kita kira.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Energi Kinetik Benda 2 kg pada Berbagai Kecepatan",
        unit: "joule",
        source: "ilustrasi edukatif",
        note: "Energi kinetik naik terhadap kuadrat kecepatan: kecepatan dua kali lipat (2 ke 4 m/s) berarti energi empat kali lipat (4 ke 16 J).",
        data: [
          { label: "2 m/s", value: 4, color: "#c084fc" },
          { label: "4 m/s", value: 16, color: "#a78bfa" },
          { label: "6 m/s", value: 36, color: "#818cf8" },
          { label: "8 m/s", value: 64, color: "#6366f1" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bola bermassa 2 kg bergerak dengan kecepatan 3 m/s. Berapa energi kinetiknya?",
        answer: 9,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Ek = ½ x m x v² = ½ x 2 x 3² = ½ x 2 x 9 = <strong>9 joule</strong>.",
        hint: "Gunakan setengah massa kali kecepatan kuadrat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda 4 kg memiliki energi kinetik 50 J. Berapa kecepatannya?",
        answer: 5,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Ek = ½ m v², jadi 50 = ½ x 4 x v² = 2 v². Maka v² = 25 dan v = <strong>5 m/s</strong>.",
        hint: "Susun ulang Ek = ½ m v² untuk mencari v.",
      },
      {
        type: "matchExercise",
        prompt:
          "Untuk benda bermassa 2 kg, pasangkan kecepatan dengan energi kinetiknya.",
        pairs: [
          { left: "1 m/s", right: "1 J" },
          { left: "2 m/s", right: "4 J" },
          { left: "3 m/s", right: "9 J" },
          { left: "5 m/s", right: "25 J" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Jarak Pengereman Kendaraan",
        html: "Mengapa rambu jalan menurunkan batas kecepatan di area ramai? Karena jarak yang dibutuhkan untuk berhenti bergantung pada energi kinetik kendaraan, yang naik terhadap <strong>kuadrat</strong> kecepatan. Mobil pada 60 km/jam punya energi kinetik empat kali lipat dibanding pada 30 km/jam, sehingga butuh kira-kira empat kali jarak pengereman untuk berhenti. Sedikit menambah kecepatan menambah jauh lebih banyak energi yang harus diserap rem. Inilah dasar fisika di balik aturan batas kecepatan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru rumusnya. <strong>Energi kinetik</strong> adalah energi karena gerak: Ek = ½ x m x v². Massa berperan linear, tetapi kecepatan <strong>dikuadratkan</strong>. Karena itu kecepatan jauh lebih 'mahal' dalam energi: menggandakan v melipatempatkan energi kinetik. Satuannya joule.",
      },
      {
        type: "takeaways",
        items: [
          "Energi kinetik adalah energi karena gerak: Ek = ½ m v².",
          "Energi kinetik bergantung pada kuadrat kecepatan.",
          "Menggandakan kecepatan membuat energi kinetik empat kali lipat.",
          "Massa hanya berperan linear, kecepatan jauh lebih menentukan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Energi kinetik adalah energi karena?",
            options: ["Posisi benda", "Gerak benda", "Suhu benda", "Massa benda saja"],
            answer: 1,
            explain: "Energi kinetik adalah energi yang dimiliki benda karena geraknya.",
          },
          {
            q: "Rumus energi kinetik adalah?",
            options: ["Ek = m g h", "Ek = ½ m v²", "Ek = F s", "Ek = m v"],
            answer: 1,
            explain: "Ek = setengah massa kali kecepatan kuadrat.",
          },
          {
            q: "Benda 4 kg bergerak 2 m/s. Energi kinetiknya?",
            options: ["8 J", "16 J", "4 J", "2 J"],
            answer: 0,
            explain: "Ek = ½ x 4 x 2² = ½ x 4 x 4 = 8 J.",
          },
          {
            q: "Jika kecepatan digandakan, energi kinetik menjadi?",
            options: ["Dua kali", "Empat kali", "Setengah", "Tetap"],
            answer: 1,
            explain: "Ek sebanding v², jadi 2² = 4 kali lipat.",
          },
          {
            q: "Benda 2 kg punya Ek 36 J. Kecepatannya?",
            options: ["6 m/s", "18 m/s", "9 m/s", "3 m/s"],
            answer: 0,
            explain: "36 = ½ x 2 x v² = v², jadi v = 6 m/s.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "teorema-usaha-energi",
    levelId: "bentuk-energi",
    order: 2,
    title: "Teorema Usaha-Energi",
    summary:
      "Dorong troli lebih jauh, ia melaju lebih kencang. Ternyata usaha total yang kamu berikan persis menjadi tambahan energi geraknya.",
    durationMin: 13,
    tags: ["fisika", "teorema usaha-energi", "energi kinetik", "usaha"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat kamu mendorong troli kosong, ia mulai bergerak dan makin lama makin cepat selama kamu terus mendorong. Dari mana datangnya energi gerak itu? Dari usaha yang kamu berikan. Ada hubungan rapi: usaha total pada sebuah benda <strong>sama persis</strong> dengan perubahan energi kinetiknya. Sebelum rumus, ayo amati dulu bagaimana usaha berubah menjadi laju.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Usaha yang Berubah Jadi Laju",
        caption:
          "Usaha total yang dilakukan pada benda muncul kembali sebagai perubahan energi kinetiknya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Dorong skateboard atau kursi beroda dengan dorongan tetap sambil menghitung sampai tiga, lalu lepaskan. Ulangi dengan dorongan tetap sampai hitungan enam. Pada dorongan yang lebih panjang, kamu memberi usaha lebih banyak, dan benda lepas dengan kecepatan lebih besar. Usaha yang kamu tanam berubah menjadi energi gerak yang bisa kamu rasakan sebagai laju.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "callout",
        tone: "info",
        title: "Usaha total, bukan satu gaya saja",
        html: "Yang menentukan perubahan energi kinetik adalah usaha <strong>total</strong>, yaitu jumlah usaha semua gaya termasuk gesekan. Jika usaha total positif, benda dipercepat. Jika usaha total negatif, seperti saat gesekan mendominasi, benda diperlambat. Jika usaha total nol, kecepatannya tetap.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda 2 kg awalnya diam, lalu mendapat usaha total 36 J. Berapa energi kinetik akhirnya?",
        answer: 36,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Usaha total = perubahan energi kinetik. Karena Ek awal = 0, maka Ek akhir = 0 + 36 = <strong>36 joule</strong>.",
        hint: "Usaha total menambah energi kinetik dari nilai awalnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Benda 2 kg yang diam mendapat usaha total 36 J. Berapa kecepatan akhirnya?",
        answer: 6,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Ek akhir = 36 J = ½ x 2 x v² = v². Maka v² = 36 dan v = <strong>6 m/s</strong>.",
        hint: "Ubah energi kinetik akhir menjadi kecepatan lewat Ek = ½ m v².",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mobil mainan bergerak dengan Ek 50 J, lalu gesekan melakukan usaha -30 J hingga mobil melambat. Berapa energi kinetik akhirnya?",
        answer: 20,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Ek akhir = Ek awal + usaha total = 50 + (-30) = <strong>20 joule</strong>. Usaha negatif gesekan mengurangi energi gerak.",
        hint: "Tambahkan usaha total (yang negatif) ke energi kinetik awal.",
      },
      {
        type: "case",
        title: "Studi Kasus: Landasan Pacu Pesawat",
        html: "Pesawat butuh landasan yang panjang untuk lepas landas karena ia harus mengumpulkan energi kinetik yang sangat besar agar mencapai kecepatan terbang. Mesin mendorong dengan gaya besar, dan sepanjang landasan gaya itu melakukan <strong>usaha</strong>. Makin panjang landasan, makin banyak usaha terkumpul, makin besar energi kinetik dan kecepatan saat roda terangkat. Pesawat berbadan berat butuh landasan lebih panjang karena perlu energi kinetik lebih besar untuk kecepatan terbang yang sama.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Barulah rumusnya. <strong>Teorema usaha-energi</strong>: usaha total pada benda sama dengan perubahan energi kinetiknya. W total = Ek akhir - Ek awal = ½ m v akhir² - ½ m v awal². Usaha positif menambah laju, usaha negatif menguranginya. Inilah jembatan antara dunia gaya dan dunia energi.",
      },
      {
        type: "takeaways",
        items: [
          "Usaha total sama dengan perubahan energi kinetik: W total = ΔEk.",
          "Usaha positif mempercepat, usaha negatif memperlambat benda.",
          "Yang dihitung adalah usaha total dari semua gaya, termasuk gesekan.",
          "Teorema ini menghubungkan gaya dan perpindahan dengan kecepatan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Teorema usaha-energi menyatakan usaha total sama dengan?",
            options: [
              "Perubahan energi kinetik",
              "Energi potensial",
              "Daya dikali waktu",
              "Massa dikali tinggi",
            ],
            answer: 0,
            explain: "W total = perubahan energi kinetik benda.",
          },
          {
            q: "Benda diam 3 kg diberi usaha total 24 J. Energi kinetik akhirnya?",
            options: ["24 J", "8 J", "0 J", "27 J"],
            answer: 0,
            explain: "Ek akhir = 0 + 24 = 24 J.",
          },
          {
            q: "Jika usaha total pada benda bergerak negatif, benda akan?",
            options: ["Dipercepat", "Diperlambat", "Tetap", "Berhenti seketika"],
            answer: 1,
            explain: "Usaha negatif mengurangi energi kinetik, jadi melambat.",
          },
          {
            q: "Benda 2 kg diam diberi usaha 16 J. Kecepatan akhirnya?",
            options: ["4 m/s", "8 m/s", "16 m/s", "2 m/s"],
            answer: 0,
            explain: "16 = ½ x 2 x v² = v², jadi v = 4 m/s.",
          },
          {
            q: "Ek awal 40 J, gesekan melakukan usaha -15 J. Ek akhir?",
            options: ["55 J", "25 J", "15 J", "40 J"],
            answer: 1,
            explain: "Ek akhir = 40 + (-15) = 25 J.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "energi-kinetik-dan-potensial",
    levelId: "bentuk-energi",
    order: 3,
    title: "Energi Potensial Gravitasi",
    summary:
      "Air di puncak bendungan diam, tetapi menyimpan tenaga raksasa karena posisinya tinggi. Energi posisi menanti dilepaskan.",
    durationMin: 13,
    tags: ["fisika", "energi potensial", "gravitasi", "ketinggian"],
    blocks: [
      {
        type: "paragraph",
        html: "Di puncak lintasan roller coaster, kereta berhenti sejenak, diam tetapi penuh 'tabungan' energi karena posisinya yang tinggi. Sedetik kemudian ia meluncur kencang. Energi yang tersimpan karena <strong>ketinggian</strong> itu disebut energi potensial gravitasi. Benda yang diam pun bisa menyimpan tenaga besar hanya karena posisinya. Sebelum rumus, ayo rasakan dulu bagaimana ketinggian menabung energi.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Energi karena Ketinggian",
        caption:
          "Energi potensial gravitasi tersimpan karena posisi benda terhadap acuan, dan tumbuh dengan ketinggian.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Jatuhkan batu kecil dari setinggi lutut ke pasir, amati cekungannya. Lalu jatuhkan dari setinggi kepala. Cekungan kedua jauh lebih dalam, padahal batunya sama. Makin tinggi kamu angkat, makin besar 'tabungan' energi posisinya, dan makin keras ia menghantam. Tabungan itu kamu isi saat mengangkat, dan dicairkan saat benda jatuh.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Energi potensial butuh acuan",
        html: "Energi potensial gravitasi selalu dihitung terhadap suatu <strong>acuan</strong> ketinggian, misalnya lantai atau permukaan tanah. Buku di meja punya energi potensial terhadap lantai, tetapi nol terhadap permukaan meja itu sendiri. Yang penting dalam perhitungan adalah perubahan ketinggiannya.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Energi Potensial Benda 5 kg pada Berbagai Ketinggian (g = 10)",
        unit: "joule",
        source: "ilustrasi edukatif",
        note: "Energi potensial naik lurus terhadap ketinggian: tiap tambahan 2 m menambah 100 J untuk benda 5 kg.",
        data: [
          { label: "0 m", value: 0, color: "#c084fc" },
          { label: "2 m", value: 100, color: "#c084fc" },
          { label: "4 m", value: 200, color: "#c084fc" },
          { label: "6 m", value: 300, color: "#c084fc" },
          { label: "8 m", value: 400, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Buku 5 kg berada di rak setinggi 4 m. Dengan g = 10 m/s², berapa energi potensialnya terhadap lantai?",
        answer: 200,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Ep = m x g x h = 5 x 10 x 4 = <strong>200 joule</strong>.",
        hint: "Kalikan massa, percepatan gravitasi, dan ketinggian.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda memiliki energi potensial 600 J pada ketinggian 5 m (g = 10 m/s²). Berapa massanya?",
        answer: 12,
        tolerance: 0.1,
        suffix: " kg",
        solution:
          "Dari Ep = m g h, maka m = Ep / (g x h) = 600 / (10 x 5) = 600 / 50 = <strong>12 kilogram</strong>.",
        hint: "Susun ulang Ep = m g h untuk mencari massa.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan keadaan benda berdasarkan energi yang dominan dimilikinya.",
        buckets: ["Energi kinetik", "Energi potensial"],
        items: [
          { text: "Mobil melaju di jalan tol", bucket: "Energi kinetik" },
          { text: "Air tertahan di puncak bendungan", bucket: "Energi potensial" },
          { text: "Buah tergantung di pohon tinggi", bucket: "Energi potensial" },
          { text: "Bola yang sedang menggelinding", bucket: "Energi kinetik" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bendungan Pembangkit Listrik",
        html: "Air yang ditampung tinggi di balik bendungan menyimpan <strong>energi potensial gravitasi</strong> yang besar karena posisinya. Ketika pintu dibuka, air jatuh dan energi potensial berubah menjadi energi kinetik aliran deras. Air yang melaju memutar turbin, dan gerak itu diubah menjadi listrik. Makin tinggi bendungan, makin besar energi potensial tiap meter kubik air, dan makin banyak listrik yang bisa dihasilkan. Posisi tinggi adalah tabungan energi yang menunggu dicairkan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru rumusnya. <strong>Energi potensial gravitasi</strong> adalah energi karena ketinggian: Ep = m x g x h, dengan m massa, g percepatan gravitasi, dan h ketinggian terhadap acuan. Berbeda dengan energi kinetik, di sini ketinggian berperan linear, sehingga grafik Ep terhadap h berupa garis lurus. Satuannya joule.",
      },
      {
        type: "takeaways",
        items: [
          "Energi potensial gravitasi adalah energi karena ketinggian: Ep = m g h.",
          "Energi potensial selalu diukur terhadap suatu acuan ketinggian.",
          "Ep berbanding lurus dengan ketinggian, grafiknya garis lurus.",
          "Benda diam di tempat tinggi tetap menyimpan energi besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Energi potensial gravitasi terbesar dimiliki benda yang?",
            options: ["Paling cepat", "Paling tinggi", "Paling ringan", "Paling dingin"],
            answer: 1,
            explain: "Ep = m g h, makin tinggi makin besar.",
          },
          {
            q: "Rumus energi potensial gravitasi adalah?",
            options: ["Ep = ½ m v²", "Ep = m g h", "Ep = F s", "Ep = P t"],
            answer: 1,
            explain: "Ep = massa kali gravitasi kali ketinggian.",
          },
          {
            q: "Benda 2 kg di ketinggian 5 m (g = 10). Ep-nya?",
            options: ["100 J", "10 J", "25 J", "50 J"],
            answer: 0,
            explain: "Ep = 2 x 10 x 5 = 100 J.",
          },
          {
            q: "Energi potensial gravitasi diukur terhadap?",
            options: ["Kecepatan benda", "Suatu acuan ketinggian", "Suhu udara", "Warna benda"],
            answer: 1,
            explain: "Ep bergantung pada ketinggian terhadap acuan yang dipilih.",
          },
          {
            q: "Benda 3 kg punya Ep 150 J (g = 10). Ketinggiannya?",
            options: ["5 m", "50 m", "0,5 m", "15 m"],
            answer: 0,
            explain: "h = Ep / (m g) = 150 / 30 = 5 m.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "energi-potensial-pegas",
    levelId: "bentuk-energi",
    order: 4,
    title: "Energi Potensial Pegas",
    summary:
      "Ketapel yang ditarik diam, tetapi siap melontarkan batu jauh. Regangan menyimpan energi yang tumbuh dengan kuadrat tarikan.",
    durationMin: 13,
    tags: ["fisika", "energi potensial pegas", "pegas", "regangan"],
    blocks: [
      {
        type: "paragraph",
        html: "Tarik karet ketapel ke belakang, tahan, dan ia diam, tetapi terasa ingin melesat. Pegas atau karet yang diregangkan menyimpan <strong>energi potensial pegas</strong>: energi yang siap melontarkan benda saat dilepas. Makin jauh kamu menarik, makin besar simpanannya, dan ternyata tumbuhnya bukan lurus melainkan terhadap kuadrat regangan. Sebelum rumus, ayo rasakan dulu energi yang tersembunyi dalam regangan.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Energi dalam Regangan",
        caption:
          "Pegas yang ditarik atau ditekan menyimpan energi potensial yang dilepaskan saat kembali ke bentuk semula.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tarik karet gelang sedikit lalu lepaskan ke jarak dekat. Sekarang tarik dua kali lebih jauh, lalu lepas. Lontarannya jauh lebih hebat, bukan sekadar dua kali. Regangan dua kali lipat menyimpan energi empat kali lipat. Rasakan juga makin keras menarik saat regangan bertambah: gaya pegas tumbuh seiring tarikan.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tumbuh terhadap kuadrat regangan",
        html: "Berbeda dengan energi potensial gravitasi yang naik lurus terhadap ketinggian, energi potensial pegas naik terhadap <strong>kuadrat</strong> regangan. Meregangkan dua kali lebih jauh menyimpan empat kali lebih banyak energi. Ini karena makin jauh ditarik, makin besar pula gaya yang harus dilawan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Energi Pegas (k = 200 N/m) pada Berbagai Regangan",
        unit: "joule",
        source: "ilustrasi edukatif",
        note: "Energi naik terhadap kuadrat regangan: regangan 0,1 ke 0,2 m (dua kali) membuat energi 1 ke 4 J (empat kali).",
        data: [
          { label: "0,1 m", value: 1, color: "#c084fc" },
          { label: "0,2 m", value: 4, color: "#a78bfa" },
          { label: "0,3 m", value: 9, color: "#818cf8" },
          { label: "0,4 m", value: 16, color: "#6366f1" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pegas dengan konstanta 200 N/m ditekan sejauh 0,2 m. Berapa energi potensial pegasnya?",
        answer: 4,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Ep pegas = ½ x k x x² = ½ x 200 x 0,2² = ½ x 200 x 0,04 = <strong>4 joule</strong>.",
        hint: "Gunakan setengah konstanta kali regangan kuadrat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pegas dengan konstanta 800 N/m diregangkan 0,1 m. Berapa energi potensial pegasnya?",
        answer: 4,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Ep pegas = ½ x k x x² = ½ x 800 x 0,1² = ½ x 800 x 0,01 = <strong>4 joule</strong>.",
        hint: "Kuadratkan dulu regangannya, baru kalikan.",
      },
      {
        type: "matchExercise",
        prompt:
          "Untuk pegas dengan konstanta 100 N/m, pasangkan regangan dengan energi potensial pegasnya.",
        pairs: [
          { left: "0,1 m", right: "0,5 J" },
          { left: "0,2 m", right: "2 J" },
          { left: "0,3 m", right: "4,5 J" },
          { left: "0,4 m", right: "8 J" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Trampolin dan Lompatan",
        html: "Saat kamu mendarat di trampolin, kainnya dan pegas tepinya meregang, menyimpan <strong>energi potensial pegas</strong> dari energi gerak jatuhmu. Sesaat kemudian pegas kembali ke bentuk semula dan melepaskan energi itu, melontarkanmu ke atas. Makin dalam trampolin tertekan, makin besar energi yang tersimpan dan makin tinggi kamu terlempar, karena energi pegas tumbuh terhadap kuadrat tekanannya. Pemain yang menekuk lutut lebih dalam melompat lebih tinggi karena meregangkan pegas lebih jauh.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya. <strong>Energi potensial pegas</strong>: Ep pegas = ½ x k x x², dengan k konstanta pegas (newton per meter) dan x besar regangan atau tekanan dari posisi alami. Karena x dikuadratkan, energinya melonjak cepat saat regangan bertambah. Satuannya joule.",
      },
      {
        type: "takeaways",
        items: [
          "Energi potensial pegas tersimpan saat pegas diregang atau ditekan.",
          "Ep pegas = ½ k x², dengan x diukur dari posisi alami pegas.",
          "Energi pegas tumbuh terhadap kuadrat regangan.",
          "Meregangkan dua kali lebih jauh menyimpan empat kali energi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Energi potensial pegas tersimpan ketika pegas?",
            options: [
              "Diam di posisi alami",
              "Diregangkan atau ditekan",
              "Bergerak cepat",
              "Dipanaskan",
            ],
            answer: 1,
            explain: "Regangan atau tekanan dari posisi alami menyimpan energi pegas.",
          },
          {
            q: "Rumus energi potensial pegas adalah?",
            options: ["Ep = m g h", "Ep = ½ k x²", "Ep = ½ m v²", "Ep = k x"],
            answer: 1,
            explain: "Ep pegas = setengah konstanta kali regangan kuadrat.",
          },
          {
            q: "Pegas k = 100 N/m ditekan 0,2 m. Energinya?",
            options: ["2 J", "10 J", "20 J", "4 J"],
            answer: 0,
            explain: "½ x 100 x 0,2² = ½ x 100 x 0,04 = 2 J.",
          },
          {
            q: "Jika regangan pegas digandakan, energinya menjadi?",
            options: ["Dua kali", "Empat kali", "Setengah", "Tetap"],
            answer: 1,
            explain: "Ep pegas sebanding x², jadi 2² = 4 kali lipat.",
          },
          {
            q: "Dibanding energi potensial gravitasi, energi pegas terhadap regangan bersifat?",
            options: [
              "Lurus (linear)",
              "Kuadratik",
              "Tetap",
              "Berbanding terbalik",
            ],
            answer: 1,
            explain: "Ep pegas naik terhadap kuadrat regangan, bukan linear.",
          },
        ],
      },
    ],
  },
];
