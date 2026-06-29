import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "orbit-dan-satelit",
    levelId: "orbit-satelit",
    order: 1,
    title: "Orbit dan Satelit",
    summary:
      "Mengapa ISS terus jatuh tetapi tidak pernah menabrak Bumi? Kita pahami dulu logika 'jatuh sambil maju', baru rumus laju orbit v = akar(GM/r) muncul.",
    durationMin: 15,
    tags: ["fisika", "gravitasi", "orbit", "satelit"],
    blocks: [
      {
        type: "paragraph",
        html: "Stasiun Luar Angkasa Internasional bergerak sekitar 7,7 kilometer setiap detik, dan setiap saat ia sedang jatuh menuju Bumi. Anehnya, ia tidak pernah menabrak. Rahasianya: sambil jatuh, ia juga melaju ke samping begitu cepat sehingga permukaan Bumi 'melengkung pergi' secepat ia jatuh. Sebelum bertemu rumus, ayo pahami dulu logika cantik ini.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Meriam Newton dan Lahirnya Orbit",
        caption: "Tembakkan benda cukup cepat, dan ia akan terus mengelilingi Bumi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan kamu melempar bola mendatar. Bola jatuh beberapa meter di depanmu. Lempar lebih kuat, ia jatuh lebih jauh. Newton bertanya: bagaimana jika dilempar begitu kuat sehingga lengkung jatuhnya sama dengan lengkung Bumi? Bola itu tidak akan pernah mendarat, ia <strong>mengorbit</strong>. Orbit hanyalah jatuh bebas yang tak pernah berakhir karena gerak menyampingnya cukup cepat.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "line",
        title: "Laju Orbit Menurun pada Orbit yang Lebih Tinggi",
        unit: "km/s",
        source: "perhitungan v = akar(GM/r) untuk Bumi",
        note: "Makin tinggi orbitnya (r makin besar), makin lambat satelit harus bergerak. Satelit dekat permukaan melaju sekitar 7,7 km/s, sedangkan satelit geostasioner yang jauh hanya sekitar 3,1 km/s.",
        data: [
          { label: "Orbit rendah (~6.700 km)", value: 7.7, color: "#fb7185" },
          { label: "~10.000 km", value: 6.3, color: "#f472b6" },
          { label: "~20.000 km", value: 4.5, color: "#e879f9" },
          { label: "Geostasioner (~42.000 km)", value: 3.1, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah satelit di orbit rendah dan sebuah satelit di orbit tinggi. Berdasarkan grafik, satelit mana yang bergerak lebih cepat? Jawab dengan laju orbit rendah dalam km/s.",
        answer: 7.7,
        tolerance: 0.2,
        suffix: " km/s",
        solution:
          "Laju orbit v = akar(GM/r). Karena r di pembilang penyebut, makin kecil r (orbit makin rendah) makin besar v. Satelit orbit rendah melaju paling cepat, sekitar <strong>7,7 km/s</strong>.",
        hint: "Lihat baris orbit paling rendah pada grafik.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan tentang orbit sebagai benar atau keliru.",
        buckets: ["Benar", "Keliru"],
        items: [
          { text: "Gaya gravitasi menyediakan gaya sentripetal yang menjaga orbit", bucket: "Benar" },
          { text: "Satelit di orbit lebih tinggi bergerak lebih cepat", bucket: "Keliru" },
          { text: "Satelit yang mengorbit sebenarnya sedang jatuh bebas", bucket: "Benar" },
          { text: "Tanpa gravitasi, satelit akan tetap mengorbit Bumi", bucket: "Keliru" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Satelit Geostasioner yang Diam di Langit",
        html: "Antena parabola di rumah selalu menghadap ke titik yang sama di langit, karena satelit penyiarannya tampak <strong>diam</strong>. Caranya: satelit ditempatkan pada orbit setinggi sekitar 36.000 km di atas khatulistiwa. Pada ketinggian itu, satu putaran orbit memakan waktu tepat 24 jam, sama dengan rotasi Bumi. Hasilnya, satelit dan titik di Bumi berputar serempak, seolah satelit menggantung diam. Itulah cara kerja TV satelit dan banyak layanan cuaca.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan: agar tetap mengorbit, gaya gravitasi harus menyediakan gaya sentripetal. Menyamakan keduanya menghasilkan laju orbit <strong>v = &radic;(G &middot; M / r)</strong>. Inilah yang menjelaskan grafik tadi: makin besar r, makin kecil v. Rumus ini tidak menghafal apa pun baru, ia hanya menerjemahkan 'jatuh sambil melaju cukup cepat' menjadi angka.",
      },
      {
        type: "takeaways",
        items: [
          "Orbit adalah jatuh bebas yang terus-menerus karena gerak menyamping yang cukup cepat.",
          "Gaya gravitasi berperan sebagai gaya sentripetal yang menjaga satelit melengkung.",
          "Laju orbit v = akar(GM/r): orbit lebih tinggi berarti gerak lebih lambat.",
          "Satelit geostasioner berperiode 24 jam sehingga tampak diam di atas satu titik.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus laju orbit melingkar adalah?",
            options: ["v = akar(GM/r)", "v = G M r", "v = m g", "v = akar(2GM/r)"],
            answer: 0,
            explain: "Menyamakan gaya gravitasi dengan gaya sentripetal memberi v = akar(GM/r).",
          },
          {
            q: "Satelit pada orbit yang lebih tinggi akan bergerak?",
            options: ["Lebih cepat", "Lebih lambat", "Sama saja", "Berhenti"],
            answer: 1,
            explain: "Karena v = akar(GM/r), makin besar r makin kecil v.",
          },
          {
            q: "Mengapa ISS tidak menabrak Bumi meski terus jatuh?",
            options: [
              "Tidak ada gravitasi di orbit",
              "Geraknya ke samping cukup cepat sehingga terus melengkung",
              "Mesin roketnya menyala terus",
              "Bumi mendorongnya menjauh",
            ],
            answer: 1,
            explain: "ISS jatuh bebas sambil melaju cepat, sehingga lintasannya melengkung mengelilingi Bumi.",
          },
          {
            q: "Apa yang menyediakan gaya sentripetal pada orbit satelit?",
            options: ["Gaya gesek", "Gaya gravitasi", "Gaya dorong mesin", "Tegangan tali"],
            answer: 1,
            explain: "Gravitasi Bumi menarik satelit ke pusat dan berperan sebagai gaya sentripetal.",
          },
          {
            q: "Berapa periode orbit satelit geostasioner?",
            options: ["1 jam", "12 jam", "24 jam", "1 bulan"],
            answer: 2,
            explain: "Periodenya 24 jam, sama dengan rotasi Bumi, sehingga tampak diam di langit.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-kepler-1-dan-2",
    levelId: "orbit-satelit",
    order: 2,
    title: "Hukum Kepler I dan II",
    summary:
      "Mengapa planet bergerak lebih cepat saat dekat Matahari? Kita ikuti dulu kerja keras Kepler membaca data Mars, baru dua hukumnya tentang bentuk dan laju orbit lahir.",
    durationMin: 14,
    tags: ["fisika", "gravitasi", "kepler", "orbit"],
    blocks: [
      {
        type: "paragraph",
        html: "Selama bertahun-tahun Johannes Kepler memelototi catatan posisi Mars yang teliti milik Tycho Brahe. Ia memaksakan lingkaran sempurna, tetapi datanya menolak. Akhirnya ia menyerah pada satu kemungkinan yang dulu dianggap kurang elegan: orbit planet berbentuk <strong>elips</strong>, bukan lingkaran. Dari kesabaran itu lahir dua hukum tentang bentuk dan laju orbit. Sebelum melihat rumusnya, ayo ikuti dulu apa yang Kepler temukan.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Kepler Membaca Tarian Mars",
        caption: "Orbit planet berbentuk elips dengan Matahari di salah satu fokusnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tarik dua paku, lingkarkan seutas benang, lalu gambar dengan pensil yang menegangkan benang. Yang muncul bukan lingkaran, melainkan <strong>elips</strong> dengan dua titik fokus. Hukum Kepler I berkata: Matahari berada di salah satu fokus itu. Hukum Kepler II lebih halus: garis dari Matahari ke planet menyapu <strong>luas yang sama dalam waktu yang sama</strong>. Akibatnya planet harus melaju lebih cepat saat dekat Matahari, dan lebih lambat saat jauh.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Laju Planet Saat Terdekat vs Terjauh dari Matahari",
        unit: "km/s",
        source: "data astronomi",
        note: "Sesuai Hukum Kepler II, planet melaju lebih cepat di titik terdekat (perihelion) dan lebih lambat di titik terjauh (aphelion). Merkurius yang orbitnya lebih lonjong menunjukkan beda laju paling mencolok.",
        data: [
          { label: "Merkurius (dekat)", value: 59.0, color: "#fb7185" },
          { label: "Merkurius (jauh)", value: 38.9, color: "#f9a8d4" },
          { label: "Bumi (dekat)", value: 30.3, color: "#e879f9" },
          { label: "Bumi (jauh)", value: 29.3, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah planet menyapu luas 10 satuan dalam 5 hari saat dekat Matahari. Menurut Hukum Kepler II, berapa luas yang ia sapu dalam 5 hari saat jauh dari Matahari?",
        answer: 10,
        tolerance: 0.01,
        suffix: " satuan",
        solution:
          "Hukum Kepler II: garis Matahari-planet menyapu luas yang sama dalam waktu yang sama. Dalam selang 5 hari yang sama, luasnya tetap <strong>10 satuan</strong>, di mana pun posisinya. Karena saat jauh planet lebih lambat, ia menempuh busur lebih pendek tetapi lebih lebar, sehingga luasnya tetap sama.",
        hint: "Waktu sama berarti luas sapuan sama, itulah inti hukumnya.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan sebagai Hukum Kepler I, Hukum Kepler II, atau Keliru.",
        buckets: ["Hukum Kepler I", "Hukum Kepler II", "Keliru"],
        items: [
          { text: "Orbit planet berbentuk elips dengan Matahari di salah satu fokus", bucket: "Hukum Kepler I" },
          { text: "Garis Matahari-planet menyapu luas sama dalam waktu sama", bucket: "Hukum Kepler II" },
          { text: "Planet melaju lebih cepat saat dekat Matahari", bucket: "Hukum Kepler II" },
          { text: "Semua orbit planet berbentuk lingkaran sempurna", bucket: "Keliru" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bumi Paling Dekat Matahari Justru Saat Musim Dingin Utara",
        html: "Banyak orang mengira musim dingin terjadi karena Bumi menjauh dari Matahari. Faktanya, Bumi justru paling dekat Matahari (perihelion) sekitar awal Januari, saat belahan utara sedang musim dingin. Musim ditentukan oleh kemiringan sumbu Bumi, bukan jaraknya. Tetapi Hukum Kepler II tetap bekerja: di perihelion Bumi melaju paling cepat, membuat musim dingin belahan utara sedikit lebih pendek daripada musim panasnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>Hukum Kepler I</strong>: orbit planet berbentuk elips dengan Matahari di salah satu fokus. <strong>Hukum Kepler II (hukum luas)</strong>: laju sapuan luas tetap, sehingga planet cepat saat dekat dan lambat saat jauh. Hukum II ini sebenarnya ungkapan lain dari kekekalan momentum sudut, jadi bukan aturan baru yang harus dihafal, melainkan akibat alami gerak di bawah gravitasi.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum Kepler I: orbit planet berbentuk elips dengan Matahari di salah satu fokus.",
          "Hukum Kepler II: garis Matahari-planet menyapu luas yang sama dalam waktu yang sama.",
          "Akibat Hukum II, planet melaju lebih cepat saat dekat dan lebih lambat saat jauh.",
          "Hukum II adalah ungkapan kekekalan momentum sudut, bukan aturan hafalan baru.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Menurut Hukum Kepler I, bentuk orbit planet adalah?",
            options: ["Lingkaran sempurna", "Elips dengan Matahari di salah satu fokus", "Garis lurus", "Spiral"],
            answer: 1,
            explain: "Orbit planet berbentuk elips dan Matahari berada di salah satu fokusnya.",
          },
          {
            q: "Hukum Kepler II menyatakan bahwa garis Matahari-planet?",
            options: [
              "Selalu sama panjang",
              "Menyapu luas yang sama dalam waktu yang sama",
              "Bergerak dengan laju tetap",
              "Selalu tegak lurus orbit",
            ],
            answer: 1,
            explain: "Hukum luas: luas sapuan per satuan waktu konstan.",
          },
          {
            q: "Kapan sebuah planet bergerak paling cepat?",
            options: ["Saat terjauh dari Matahari", "Saat terdekat dengan Matahari", "Lajunya selalu tetap", "Saat tegak lurus"],
            answer: 1,
            explain: "Agar luas sapuan tetap, planet harus lebih cepat saat dekat Matahari.",
          },
          {
            q: "Data siapa yang dipakai Kepler untuk menemukan hukumnya?",
            options: ["Galileo", "Tycho Brahe", "Newton", "Copernicus"],
            answer: 1,
            explain: "Kepler menganalisis pengamatan teliti Tycho Brahe, terutama tentang Mars.",
          },
          {
            q: "Hukum Kepler II merupakan ungkapan dari?",
            options: [
              "Kekekalan momentum sudut",
              "Kekekalan massa",
              "Hukum kuadrat terbalik",
              "Hukum Ohm",
            ],
            answer: 0,
            explain: "Hukum luas setara dengan kekekalan momentum sudut planet.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-kepler-3",
    levelId: "orbit-satelit",
    order: 3,
    title: "Hukum Kepler III",
    summary:
      "Bagaimana kita tahu Jupiter butuh hampir 12 tahun mengelilingi Matahari hanya dari jaraknya? Kita pahami dulu pola harmoni Kepler, baru rumus T kuadrat sebanding r pangkat tiga muncul.",
    durationMin: 14,
    tags: ["fisika", "gravitasi", "kepler", "periode"],
    blocks: [
      {
        type: "paragraph",
        html: "Kepler menghabiskan sepuluh tahun lagi mencari pola yang menghubungkan jarak planet ke Matahari dengan lama waktu satu putarannya. Ia merasa pasti ada 'harmoni' tersembunyi. Akhirnya pada 1619 ia menemukannya: planet yang lebih jauh tidak hanya menempuh lintasan lebih panjang, tetapi juga bergerak lebih lambat, sehingga periodenya melonjak. Sebelum bertemu rumusnya, ayo lihat dulu polanya pada planet-planet sungguhan.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Harmoni Jarak dan Periode",
        caption: "Planet yang lebih jauh mengorbit jauh lebih lambat secara teratur.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bumi butuh 1 tahun mengelilingi Matahari. Mars yang sekitar 1,5 kali lebih jauh butuh hampir 2 tahun. Jupiter yang sekitar 5 kali lebih jauh butuh hampir 12 tahun. Periodenya naik jauh lebih cepat daripada jaraknya. Kepler menemukan polanya: kuadrat periode (<strong>T kuadrat</strong>) sebanding dengan pangkat tiga jarak (<strong>r pangkat tiga</strong>). Jadi cukup tahu jaraknya, kamu bisa meramal lama satu tahunnya.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Periode Orbit Planet terhadap Matahari",
        unit: "tahun Bumi",
        source: "data astronomi",
        note: "Jarak Jupiter sekitar 5,2 kali jarak Bumi, tetapi periodenya hampir 12 tahun. Sesuai Hukum Kepler III, 5,2 pangkat tiga lalu diakar = sekitar 11,9, persis cocok dengan data.",
        data: [
          { label: "Merkurius", value: 0.24, color: "#fbbf24" },
          { label: "Bumi", value: 1.0, color: "#fb7185" },
          { label: "Mars", value: 1.88, color: "#e879f9" },
          { label: "Jupiter", value: 11.86, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah asteroid mengorbit Matahari pada jarak rata-rata 4 kali jarak Bumi (4 AU). Dengan Hukum Kepler III (T kuadrat sebanding r pangkat tiga, dan untuk Bumi T = 1 tahun pada r = 1 AU), berapa periode orbit asteroid itu?",
        answer: 8,
        tolerance: 0.2,
        suffix: " tahun",
        solution:
          "Hukum Kepler III: T kuadrat = r pangkat tiga (dalam satuan tahun dan AU). Maka T kuadrat = 4 pangkat tiga = 64, sehingga T = akar 64 = <strong>8 tahun</strong>.",
        hint: "Pangkatkan tiga jaraknya, lalu akar kuadratkan hasilnya.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap jarak orbit (dalam AU) dengan periode orbitnya menurut Hukum Kepler III.",
        pairs: [
          { left: "1 AU (Bumi)", right: "1 tahun" },
          { left: "4 AU", right: "8 tahun" },
          { left: "9 AU", right: "27 tahun" },
          { left: "0,25 AU", right: "0,125 tahun" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menimbang Matahari dari Orbit Bumi",
        html: "Hukum Kepler III ternyata menyimpan hadiah besar. Newton menunjukkan bahwa angka pembanding pada T kuadrat sebanding r pangkat tiga sebenarnya bergantung pada massa benda pusat. Artinya, dengan mengetahui jarak dan periode orbit Bumi, kita bisa menghitung massa Matahari, sekitar 2 x 10 pangkat 30 kilogram, tanpa pernah menyentuhnya. Cara yang sama dipakai untuk menimbang planet dari periode bulan-bulannya, bahkan menimbang lubang hitam dari orbit bintang di sekitarnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan: <strong>T&sup2; &prop; r&sup3;</strong>, kuadrat periode orbit sebanding dengan pangkat tiga jari-jari rata-ratanya. Bentuk lengkapnya <strong>T&sup2; = (4&pi;&sup2; / G&middot;M) &middot; r&sup3;</strong>, dengan M massa benda pusat. Rumus ini bukan sekadar pola dari data: Newton membuktikannya lahir langsung dari hukum gravitasi dan gaya sentripetal. Harmoni yang dicari Kepler ternyata akibat dari satu gaya yang sama.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum Kepler III: kuadrat periode sebanding dengan pangkat tiga jari-jari orbit (T kuadrat sebanding r pangkat tiga).",
          "Planet lebih jauh berperiode jauh lebih panjang, contohnya Jupiter hampir 12 tahun.",
          "Bentuk lengkapnya T kuadrat = (4 pi kuadrat / GM) r pangkat tiga, melibatkan massa benda pusat.",
          "Dari jarak dan periode orbit, kita bisa menimbang massa Matahari, planet, bahkan lubang hitam.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum Kepler III menghubungkan periode dan jari-jari orbit sebagai?",
            options: [
              "T sebanding r",
              "T kuadrat sebanding r pangkat tiga",
              "T sebanding r kuadrat",
              "T pangkat tiga sebanding r kuadrat",
            ],
            answer: 1,
            explain: "Kuadrat periode sebanding dengan pangkat tiga jari-jari orbit.",
          },
          {
            q: "Planet pada jarak 9 AU memiliki periode orbit sekitar?",
            options: ["3 tahun", "9 tahun", "27 tahun", "81 tahun"],
            answer: 2,
            explain: "T kuadrat = 9 pangkat tiga = 729, jadi T = 27 tahun.",
          },
          {
            q: "Mengapa Jupiter berperiode hampir 12 tahun?",
            options: [
              "Karena lebih ringan dari Bumi",
              "Karena jaraknya sekitar 5,2 AU dan periode naik mengikuti pangkat tiga jarak",
              "Karena bergerak lebih cepat dari Bumi",
              "Karena Matahari menariknya lebih kuat",
            ],
            answer: 1,
            explain: "Dengan r = 5,2 AU, T = akar(5,2 pangkat tiga) = sekitar 11,9 tahun.",
          },
          {
            q: "Bentuk lengkap Hukum Kepler III melibatkan besaran apa pada benda pusat?",
            options: ["Massanya", "Warnanya", "Suhunya", "Jari-jarinya"],
            answer: 0,
            explain: "T kuadrat = (4 pi kuadrat / GM) r pangkat tiga, jadi massa M benda pusat ikut menentukan.",
          },
          {
            q: "Salah satu manfaat Hukum Kepler III adalah?",
            options: [
              "Mengukur suhu planet",
              "Menimbang massa Matahari dan benda langit lain",
              "Menentukan warna bintang",
              "Mengukur tekanan udara",
            ],
            answer: 1,
            explain: "Dari jarak dan periode orbit, massa benda pusat dapat dihitung.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "jenis-orbit-satelit",
    levelId: "orbit-satelit",
    order: 4,
    title: "Jenis Orbit Satelit",
    summary:
      "Mengapa GPS, satelit cuaca, dan TV satelit ditempatkan pada ketinggian berbeda? Kita pahami dulu kebutuhan tiap misi, baru kaitannya dengan periode lewat Hukum Kepler.",
    durationMin: 13,
    tags: ["fisika", "gravitasi", "orbit", "satelit"],
    blocks: [
      {
        type: "paragraph",
        html: "Ponselmu menentukan lokasi lewat satelit GPS yang melaju di ketinggian sedang, sementara siaran TV satelit datang dari satelit yang tampak diam jauh di atas khatulistiwa, dan foto awan badai diambil satelit yang menyapu rendah dekat kutub. Ketiganya satelit, tetapi tinggi orbitnya sengaja dipilih berbeda sesuai tugasnya. Sebelum melihat aturannya, ayo pahami dulu mengapa ketinggian itu menentukan segalanya.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Tiga Lapis Orbit di Sekeliling Bumi",
        caption: "Orbit rendah, menengah, dan tinggi melayani misi yang berbeda.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Makin tinggi orbit, makin panjang periodenya (ingat Hukum Kepler III). Satelit <strong>orbit rendah (LEO)</strong> dekat ke Bumi, cocok untuk foto detail dan stasiun antariksa, tetapi melesat cepat melintasi langit. Satelit <strong>orbit menengah (MEO)</strong> seperti GPS menyapu wilayah luas dengan periode beberapa jam. Satelit <strong>geostasioner (GEO)</strong> di ketinggian khusus berperiode pas 24 jam, sehingga tampak menggantung diam. Tugas menentukan ketinggian, dan ketinggian menentukan periode.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Periode Orbit untuk Berbagai Ketinggian Satelit",
        unit: "jam",
        source: "data orbit, sesuai Hukum Kepler III",
        note: "Makin tinggi orbit, makin lama periodenya. ISS di orbit rendah berkeliling tiap 1,5 jam, GPS tiap sekitar 12 jam, dan satelit geostasioner tepat 24 jam sehingga serempak dengan rotasi Bumi.",
        data: [
          { label: "ISS / LEO (~400 km)", value: 1.5, color: "#fb7185" },
          { label: "GPS / MEO (~20.200 km)", value: 12, color: "#e879f9" },
          { label: "Geostasioner (~35.786 km)", value: 24, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Stasiun Luar Angkasa Internasional mengelilingi Bumi satu kali tiap 1,5 jam. Dalam satu hari (24 jam), berapa kali ISS mengelilingi Bumi?",
        answer: 16,
        tolerance: 0.5,
        suffix: " kali",
        solution:
          "Jumlah putaran = total waktu dibagi periode = 24 dibagi 1,5 = <strong>16 kali</strong>. Karena orbitnya rendah dan cepat, awak ISS menyaksikan sekitar 16 matahari terbit setiap hari.",
        hint: "Bagi 24 jam dengan lama satu putaran.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap satelit ke jenis orbitnya.",
        buckets: ["Orbit rendah (LEO)", "Orbit menengah (MEO)", "Geostasioner (GEO)"],
        items: [
          { text: "Stasiun Luar Angkasa Internasional", bucket: "Orbit rendah (LEO)" },
          { text: "Satelit navigasi GPS", bucket: "Orbit menengah (MEO)" },
          { text: "Satelit TV yang tampak diam di langit", bucket: "Geostasioner (GEO)" },
          { text: "Satelit pencitraan Bumi resolusi tinggi", bucket: "Orbit rendah (LEO)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa GPS Tidak Dipasang di Orbit Geostasioner",
        html: "Sekilas, menempatkan GPS di orbit geostasioner yang diam terdengar praktis. Tetapi navigasi butuh banyak satelit yang posisinya terus berubah relatif terhadap kita, agar penerima bisa menghitung jarak dari beberapa arah sekaligus dan menentukan titik secara presisi. Orbit menengah sekitar 20.200 km dengan periode 12 jam memberi sebaran satelit yang ideal: setiap penerima di Bumi selalu 'melihat' setidaknya empat satelit. Bentuk orbit dipilih bukan demi kemudahan, melainkan demi geometri pengukuran.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum lewat dua rumus yang sudah kita kenal: laju orbit <strong>v = &radic;(G&middot;M/r)</strong> dan Hukum Kepler III <strong>T&sup2; = (4&pi;&sup2;/G&middot;M)&middot;r&sup3;</strong>. Keduanya berkata: makin tinggi r, makin lambat lajunya dan makin panjang periodenya. Orbit geostasioner sekadar nilai r tempat T pas 24 jam. Jadi 'jenis orbit' bukan kategori hafalan, melainkan akibat langsung dari memilih jari-jari orbit.",
      },
      {
        type: "takeaways",
        items: [
          "Ketinggian orbit dipilih sesuai misi: LEO untuk pencitraan dan stasiun, MEO untuk navigasi, GEO untuk siaran.",
          "Makin tinggi orbit, makin panjang periode dan makin lambat lajunya (Hukum Kepler III).",
          "ISS di orbit rendah berkeliling Bumi sekitar 16 kali sehari.",
          "Orbit geostasioner adalah jari-jari khusus tempat periodenya pas 24 jam.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Satelit GPS umumnya berada di orbit?",
            options: ["Rendah (LEO)", "Menengah (MEO)", "Geostasioner (GEO)", "Di luar tata surya"],
            answer: 1,
            explain: "GPS berada di orbit menengah sekitar 20.200 km dengan periode sekitar 12 jam.",
          },
          {
            q: "Hubungan antara ketinggian orbit dan periode adalah?",
            options: [
              "Makin tinggi, makin pendek periodenya",
              "Makin tinggi, makin panjang periodenya",
              "Tidak ada hubungannya",
              "Periode selalu 24 jam",
            ],
            answer: 1,
            explain: "Sesuai Hukum Kepler III, orbit lebih tinggi berarti periode lebih panjang.",
          },
          {
            q: "Berapa kali kira-kira ISS mengelilingi Bumi dalam sehari?",
            options: ["1 kali", "4 kali", "16 kali", "100 kali"],
            answer: 2,
            explain: "Dengan periode 1,5 jam, 24 dibagi 1,5 = 16 kali sehari.",
          },
          {
            q: "Satelit yang tampak diam di langit berada di orbit?",
            options: ["Rendah", "Menengah", "Geostasioner", "Kutub"],
            answer: 2,
            explain: "Satelit geostasioner berperiode 24 jam sehingga tampak diam terhadap Bumi.",
          },
          {
            q: "Mengapa GPS tidak ditempatkan di orbit geostasioner?",
            options: [
              "Karena terlalu murah",
              "Karena navigasi butuh satelit yang posisinya berubah untuk pengukuran presisi",
              "Karena tidak ada gravitasi di sana",
              "Karena geostasioner terlalu rendah",
            ],
            answer: 1,
            explain: "Navigasi presisi butuh sebaran satelit yang bergerak relatif terhadap penerima.",
          },
        ],
      },
    ],
  },
];
