import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "pusat-massa",
    levelId: "pusat-massa",
    order: 1,
    title: "Pusat Massa",
    summary:
      "Lempar palu berputar-putar ke udara, dan satu titik di dalamnya tetap menggambar lengkung parabola mulus. Titik ajaib itu bernama pusat massa.",
    durationMin: 13,
    tags: ["fisika", "pusat massa", "keseimbangan", "momentum"],
    blocks: [
      {
        type: "paragraph",
        html: "Lemparkan palu sambil membuatnya berputar. Ujung-ujungnya berputar liar, sulit ditebak. Tapi ada satu titik tersembunyi di dalam palu yang tetap menggambar lintasan parabola yang mulus, seolah palu adalah bola sederhana. Titik istimewa itu disebut <strong>pusat massa</strong>. Sebelum menulis rumusnya, ayo berpetualang mencari di mana titik itu berada dan mengapa ia begitu setia.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Titik yang Mewakili Seluruh Benda",
        caption: "Gerak rumit sebuah benda bisa diringkas lewat gerak pusat massanya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil penggaris, coba seimbangkan di atas satu jari. Titik tempat ia tidak jatuh adalah pusat massanya. Sekarang tempel uang logam di salah satu ujung penggaris, dan titik seimbangnya bergeser ke arah logam. Amati: pusat massa selalu condong ke bagian yang lebih berat. Di sinilah seakan seluruh massa benda 'berkumpul'.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa pusat massa penting",
        html: "Pusat massa sistem bergerak seakan seluruh massa terkumpul di sana dan semua gaya luar bekerja di titik itu. Itu sebabnya palu yang berputar tetap punya satu titik yang lintasannya parabola mulus seperti benda titik biasa.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua bola dihubungkan batang ringan: 2 kg di posisi x = 0 m dan 6 kg di posisi x = 4 m. Di posisi mana pusat massanya?",
        answer: 3,
        tolerance: 0.01,
        suffix: " m",
        solution:
          "Pusat massa = (m1.x1 + m2.x2) / (m1 + m2) = (2x0 + 6x4) / (2 + 6) = 24 / 8 = <strong>3 m</strong>. Titiknya lebih dekat ke bola 6 kg yang lebih berat, persis seperti intuisi.",
        hint: "Pakai rata-rata posisi yang ditimbang oleh massa: (m1.x1 + m2.x2) / (m1 + m2).",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua anak duduk di jungkat-jungkit: 20 kg di x = 0 m dan 30 kg di x = 2 m. Di posisi mana pusat massanya?",
        answer: 1.2,
        tolerance: 0.01,
        suffix: " m",
        solution:
          "Pusat massa = (20x0 + 30x2) / (20 + 30) = 60 / 50 = <strong>1,2 m</strong>. Agar seimbang, titik tumpu harus diletakkan di pusat massa ini, lebih dekat ke anak yang lebih berat.",
        hint: "Hitung (m1.x1 + m2.x2) dibagi total massa.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan benda dengan letak perkiraan pusat massanya.",
        pairs: [
          { left: "Bola pejal seragam", right: "Tepat di titik tengahnya" },
          { left: "Penggaris dengan logam di satu ujung", right: "Bergeser ke arah ujung yang berat" },
          { left: "Cincin atau donat", right: "Di lubang tengah, di luar benda itu sendiri" },
          { left: "Palu", right: "Dekat kepala palu yang lebih berat" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lompatan Fosbury Flop",
        html: "Pada Olimpiade 1968, Dick Fosbury memenangi lompat tinggi dengan teknik aneh: melompati mistar dengan punggung lebih dulu dan tubuh melengkung. Rahasianya adalah pusat massa. Dengan melengkungkan tubuh, atlet bisa membuat pusat massanya lewat di bawah mistar sementara tubuhnya melewati di atas mistar. Karena yang harus diangkat tinggi hanyalah pusat massa, atlet menghemat energi dan melompat lebih tinggi. Fisika pusat massa mengubah olahraga selamanya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Kini rumusnya terasa alami. Untuk sistem benda, posisi pusat massa adalah rata-rata posisi yang ditimbang oleh massa: <strong>x_pm = (m1.x1 + m2.x2 + ...) / (m1 + m2 + ...)</strong>. Yang lebih dalam: pusat massa bergerak menurut <strong>F_luar = M_total . a_pm</strong>, yaitu seperti satu partikel bermassa total yang dikenai gaya luar saja. Karena gaya dalam saling meniadakan, pusat massa palu yang berputar tetap menggambar parabola mulus.",
      },
      {
        type: "takeaways",
        items: [
          "Pusat massa adalah titik rata-rata posisi yang ditimbang oleh massa benda.",
          "Rumusnya: x_pm = (m1.x1 + m2.x2 + ...) / (m1 + m2 + ...).",
          "Pusat massa condong ke bagian yang lebih berat, dan bisa berada di luar benda (misalnya donat).",
          "Pusat massa sistem bergerak seakan semua massa terkumpul di sana dan hanya gaya luar yang bekerja.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pusat massa sebuah benda adalah?",
            options: [
              "Titik paling berat",
              "Titik rata-rata posisi yang ditimbang massa",
              "Selalu di tengah geometris",
              "Titik tercepat",
            ],
            answer: 1,
            explain: "Pusat massa = rata-rata posisi yang ditimbang oleh massa tiap bagian.",
          },
          {
            q: "Massa 1 kg di x = 0 dan 3 kg di x = 4 m. Pusat massanya di?",
            options: ["1 m", "2 m", "3 m", "4 m"],
            answer: 2,
            explain: "(1x0 + 3x4)/(1+3) = 12/4 = 3 m, lebih dekat ke massa yang berat.",
          },
          {
            q: "Pusat massa sebuah cincin (donat) berada di?",
            options: [
              "Pinggir cincin",
              "Lubang tengahnya, di luar bahan cincin",
              "Tidak punya pusat massa",
              "Selalu bergerak",
            ],
            answer: 1,
            explain: "Pusat massa bisa berada di ruang kosong di luar bahan benda, seperti lubang donat.",
          },
          {
            q: "Mengapa palu yang dilempar berputar tetap punya lintasan parabola pada satu titik?",
            options: [
              "Karena palu ringan",
              "Karena pusat massanya bergerak hanya menurut gaya luar (gravitasi)",
              "Karena tidak ada gravitasi",
              "Karena palu tidak berputar",
            ],
            answer: 1,
            explain: "Gaya dalam saling meniadakan, sehingga pusat massa bergerak seperti partikel di bawah gravitasi.",
          },
          {
            q: "Teknik Fosbury flop berhasil karena atlet membuat pusat massanya?",
            options: [
              "Lewat jauh di atas mistar",
              "Lewat di bawah mistar walau tubuh melewati di atasnya",
              "Berhenti bergerak",
              "Bertambah berat",
            ],
            answer: 1,
            explain: "Dengan melengkung, pusat massa bisa lewat di bawah mistar, menghemat ketinggian yang perlu diangkat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gerak-pusat-massa",
    levelId: "pusat-massa",
    order: 2,
    title: "Gerak Pusat Massa",
    summary:
      "Kembang api meledak jadi ratusan pecahan liar, namun pusat massanya tetap menelusuri lengkung parabola yang tenang. Gaya dalam tak bisa mengusiknya. Kita selami dulu.",
    durationMin: 13,
    tags: ["fisika", "pusat massa", "gerak", "gaya dalam"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah roket kembang api melesat ke atas lalu meledak di puncak. Ratusan percik api menyebar ke segala arah, tampak kacau. Tapi jika kamu bisa menandai pusat massa seluruh percikan itu, ia tetap menelusuri lintasan parabola yang sama seperti seandainya roket tidak meledak. Ledakan dahsyat tidak mengubah jalur pusat massa sedikit pun. Mengapa? Ayo berpetualang dulu sebelum menulis rumus.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Pusat Massa yang Tak Terganggu",
        caption: "Gaya dalam, sebesar apa pun, tidak mengubah gerak pusat massa sistem.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua orang berpegangan di atas es licin lalu saling mendorong. Mereka meluncur berpisah, tetapi pusat massa di antara mereka tetap diam di tempat semula. Dorongan itu gaya dalam; ia memindahkan kedua orang, namun tidak menggeser pusat massanya. Amati: untuk menggerakkan pusat massa, dibutuhkan gaya dari luar, bukan dari dalam sistem.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Hanya gaya luar yang menggerakkan pusat massa",
        html: "Gaya dalam (antar bagian sistem) selalu berpasangan aksi-reaksi dan saling meniadakan, sehingga tidak bisa mempercepat pusat massa. Hanya gaya luar yang bisa. Itu sebabnya pusat massa kembang api hanya 'merasakan' gravitasi, bukan ledakannya sendiri.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kecepatan Pusat Massa Sistem Sebelum dan Sesudah Ledakan Internal",
        unit: "m/s",
        source: "Benda 4 kg bergerak 3 m/s lalu meledak; jumlah momentum tetap 12 kg.m/s di sistem 4 kg",
        note: "Ledakan adalah gaya dalam, jadi kecepatan pusat massa tidak berubah: tetap 3 m/s sebelum dan sesudah. Pecahan boleh terbang ke mana saja, pusat massanya tetap melaju 3 m/s.",
        data: [
          { label: "v pusat massa sebelum", value: 3, color: "#a78bfa" },
          { label: "v pusat massa sesudah", value: 3, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Benda A 2 kg bergerak 3 m/s ke kanan dan benda B 3 kg bergerak 2 m/s ke kiri. Berapa kecepatan pusat massa sistem?",
        answer: 0,
        tolerance: 0.01,
        suffix: " m/s",
        solution:
          "Ambil ke kanan positif. v_pm = (m_A.v_A + m_B.v_B) / (m_A + m_B) = (2x3 + 3x(-2)) / (2 + 3) = (6 - 6) / 5 = <strong>0 m/s</strong>. Momentum total nol, jadi pusat massa diam meski kedua benda bergerak.",
        hint: "v_pm = jumlah (massa x kecepatan) dibagi total massa; perhatikan tanda arah.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sistem terdiri dari benda 4 kg bergerak 5 m/s dan benda 1 kg yang diam. Berapa kecepatan pusat massa sistem?",
        answer: 4,
        tolerance: 0.01,
        suffix: " m/s",
        solution:
          "v_pm = (4x5 + 1x0) / (4 + 1) = 20 / 5 = <strong>4 m/s</strong>. Kecepatan pusat massa adalah momentum total dibagi massa total, lebih dekat ke benda yang lebih berat.",
        hint: "Bagi momentum total (4x5 + 1x0) dengan massa total.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan peristiwa dengan apa yang terjadi pada pusat massanya.",
        pairs: [
          { left: "Granat meledak di udara", right: "Pusat massa tetap di lintasan parabola semula" },
          { left: "Dua peseluncur es saling mendorong", right: "Pusat massa tetap diam (gaya dalam)" },
          { left: "Mobil direm oleh gesekan jalan", right: "Pusat massa melambat (gaya luar bekerja)" },
          { left: "Roket menyemburkan gas", right: "Pusat massa sistem roket+gas tetap, badan roket maju" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Peloncat Indah dan Senam Udara",
        html: "Saat peloncat indah melakukan salto di udara, tubuhnya berputar dan melipat dengan rumit. Namun pusat massanya tetap menelusuri lengkung parabola mulus dari papan loncat hingga masuk air, persis seperti benda yang dijatuhkan biasa. Putaran dan lipatan tubuh adalah gerak internal di sekitar pusat massa; mereka mengatur orientasi tubuh, tetapi tidak bisa mengubah jalur pusat massa yang sudah ditentukan saat kaki meninggalkan papan. Atlet 'menari' di sekitar titik yang patuh pada gravitasi saja.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya bermakna. Kecepatan pusat massa: <strong>v_pm = (m1.v1 + m2.v2 + ...) / (m1 + m2 + ...)</strong>, yaitu momentum total dibagi massa total. Geraknya mematuhi <strong>F_luar = M_total . a_pm</strong>. Bila tidak ada gaya luar, a_pm = 0 sehingga v_pm tetap, apa pun yang terjadi di dalam sistem. Inilah alasan pusat massa kembang api dan peloncat indah tetap setia pada lintasannya.",
      },
      {
        type: "takeaways",
        items: [
          "Kecepatan pusat massa = momentum total dibagi massa total: v_pm = Sigma(m.v) / Sigma m.",
          "Gerak pusat massa hanya dipengaruhi gaya luar: F_luar = M_total . a_pm.",
          "Gaya dalam (ledakan, dorongan antar bagian) tidak mengubah gerak pusat massa.",
          "Tanpa gaya luar, kecepatan pusat massa tetap meski bagian-bagiannya bergerak liar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kecepatan pusat massa sistem sama dengan?",
            options: [
              "Kecepatan benda tercepat",
              "Momentum total dibagi massa total",
              "Rata-rata kecepatan tanpa bobot",
              "Selalu nol",
            ],
            answer: 1,
            explain: "v_pm = momentum total / massa total.",
          },
          {
            q: "Apa yang terjadi pada pusat massa saat granat meledak di udara?",
            options: [
              "Berhenti seketika",
              "Tetap mengikuti lintasan parabola semula",
              "Terbang ke atas",
              "Pecah jadi banyak",
            ],
            answer: 1,
            explain: "Ledakan adalah gaya dalam; pusat massa tetap mengikuti gravitasi saja.",
          },
          {
            q: "Gaya apa yang bisa mengubah gerak pusat massa sistem?",
            options: ["Gaya dalam", "Gaya luar", "Tidak ada gaya", "Gaya dorong antar bagian"],
            answer: 1,
            explain: "Hanya gaya luar yang dapat mempercepat pusat massa; gaya dalam saling meniadakan.",
          },
          {
            q: "Benda 2 kg @ 4 m/s dan benda 2 kg @ -4 m/s. Kecepatan pusat massanya?",
            options: ["0 m/s", "4 m/s", "8 m/s", "2 m/s"],
            answer: 0,
            explain: "v_pm = (8 - 8)/4 = 0 m/s; momentum total nol.",
          },
          {
            q: "Mengapa pusat massa peloncat indah tetap berbentuk parabola walau tubuh bersalto?",
            options: [
              "Karena salto menambah gaya luar",
              "Karena putaran tubuh adalah gerak internal yang tak mengubah jalur pusat massa",
              "Karena tidak ada gravitasi di udara",
              "Karena atlet sangat ringan",
            ],
            answer: 1,
            explain: "Salto adalah gerak di sekitar pusat massa; hanya gravitasi (gaya luar) yang menentukan jalurnya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sistem-banyak-partikel",
    levelId: "pusat-massa",
    order: 3,
    title: "Pusat Massa Sistem Banyak Partikel",
    summary:
      "Bagaimana menemukan pusat massa tiga, empat, atau seribu benda sekaligus? Dengan satu rumus rata-rata berbobot yang sama, diperluas ke dua dimensi. Kita rakit dulu.",
    durationMin: 13,
    tags: ["fisika", "pusat massa", "banyak partikel", "dua dimensi"],
    blocks: [
      {
        type: "paragraph",
        html: "Mencari pusat massa dua benda terasa mudah. Tapi bagaimana dengan tiga batu di sepanjang papan, atau bahkan pelat berbentuk huruf L? Dan bagaimana jika benda tersebar tidak hanya di satu garis, melainkan di bidang dua dimensi? Ternyata satu ide sederhana, rata-rata posisi yang ditimbang massa, cukup untuk semuanya. Ayo berpetualang dulu memperluasnya sebelum menulis rumus lengkap.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Merata-ratakan Banyak Massa",
        caption: "Pusat massa banyak benda adalah perluasan langsung dari kasus dua benda.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Letakkan tiga koin berbeda berat di sepanjang penggaris, lalu cari titik seimbangnya dengan jari. Titik itu condong ke arah kumpulan koin yang lebih berat. Sekarang bayangkan menyebar koin di atas meja dalam pola dua dimensi; titik seimbangnya punya koordinat mendatar dan tegak. Amati: kita cukup merata-ratakan posisi mendatar dan tegak secara terpisah, masing-masing ditimbang oleh massa.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pecah jadi komponen, gabungkan benda rumit",
        html: "Untuk benda dua dimensi, hitung x_pm dan y_pm secara terpisah dengan rumus rata-rata berbobot yang sama. Benda berbentuk rumit (seperti huruf L) bisa dipecah menjadi beberapa bagian sederhana; pusat massa tiap bagian dianggap titik bermassa, lalu digabungkan dengan rumus yang sama.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "calcExercise",
        prompt:
          "Tiga benda di sepanjang sumbu x: 1 kg di x = 0 m, 2 kg di x = 3 m, dan 3 kg di x = 6 m. Di mana pusat massanya?",
        answer: 4,
        tolerance: 0.01,
        suffix: " m",
        solution:
          "x_pm = (1x0 + 2x3 + 3x6) / (1 + 2 + 3) = (0 + 6 + 18) / 6 = 24 / 6 = <strong>4 m</strong>. Titiknya condong ke arah benda 3 kg yang paling berat dan paling jauh.",
        hint: "Jumlahkan semua (massa x posisi), lalu bagi total massa.",
      },
      {
        type: "calcExercise",
        prompt:
          "Tiga benda: 1 kg di x = 0 m, 1 kg di x = 2 m, dan 2 kg di x = 4 m. Berapa koordinat x pusat massanya?",
        answer: 2.5,
        tolerance: 0.01,
        suffix: " m",
        solution:
          "x_pm = (1x0 + 1x2 + 2x4) / (1 + 1 + 2) = (0 + 2 + 8) / 4 = 10 / 4 = <strong>2,5 m</strong>. Rumus yang sama berlaku berapa pun jumlah bendanya.",
        hint: "x_pm = jumlah (massa x posisi) dibagi total massa.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan langkah mencari pusat massa benda rumit dengan deskripsinya.",
        pairs: [
          { left: "Pecah benda jadi bagian sederhana", right: "Misalnya huruf L jadi dua persegi panjang" },
          { left: "Tentukan pusat massa tiap bagian", right: "Anggap tiap bagian titik bermassa di pusatnya" },
          { left: "Hitung x_pm dan y_pm terpisah", right: "Rata-rata berbobot untuk tiap sumbu" },
          { left: "Gabungkan semua bagian", right: "Pakai rumus rata-rata berbobot yang sama" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Barycenter Bumi-Bulan",
        html: "Kita sering bilang Bulan mengelilingi Bumi, padahal keduanya sebenarnya mengorbit pusat massa bersama, disebut barycenter. Karena Bumi jauh lebih berat dari Bulan (sekitar 81 kali), pusat massa bersama itu sangat condong ke Bumi, bahkan berada di dalam tubuh Bumi, sekitar 4700 km dari pusat Bumi. Jadi Bumi tidak benar-benar diam; ia sedikit bergoyang mengitari barycenter yang ada di dalam dirinya sendiri. Rumus rata-rata berbobot yang sama, yang kita pakai untuk koin di penggaris, juga memerintah tarian dua benda langit.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Kini rumus lengkapnya bermakna. Untuk sistem banyak partikel: <strong>x_pm = (Sigma m_i.x_i) / (Sigma m_i)</strong> dan <strong>y_pm = (Sigma m_i.y_i) / (Sigma m_i)</strong>. Setiap sumbu dirata-ratakan terpisah, masing-masing ditimbang massa. Untuk benda rumit, pecah menjadi bagian sederhana, perlakukan tiap bagian sebagai titik bermassa di pusat massanya, lalu gabungkan dengan rumus yang sama. Satu ide, berapa pun jumlah benda dan berapa pun dimensinya.",
      },
      {
        type: "takeaways",
        items: [
          "Rumus pusat massa berlaku untuk berapa pun jumlah partikel: x_pm = Sigma(m.x) / Sigma m.",
          "Dalam dua dimensi, hitung x_pm dan y_pm secara terpisah.",
          "Benda rumit dipecah jadi bagian sederhana, tiap bagian dianggap titik bermassa.",
          "Konsep yang sama mengatur barycenter Bumi-Bulan, yang letaknya di dalam Bumi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus pusat massa banyak partikel pada sumbu x adalah?",
            options: [
              "Sigma(m.x) / Sigma m",
              "Sigma x / jumlah benda",
              "Sigma m / Sigma x",
              "Sigma(m + x)",
            ],
            answer: 0,
            explain: "x_pm adalah rata-rata posisi yang ditimbang massa: Sigma(m.x) / Sigma m.",
          },
          {
            q: "Benda 1 kg di x=0, 1 kg di x=2, 1 kg di x=4. Pusat massanya?",
            options: ["2 m", "3 m", "1 m", "6 m"],
            answer: 0,
            explain: "(0+2+4)/3 = 6/3 = 2 m, tepat di tengah karena massa sama.",
          },
          {
            q: "Untuk benda dua dimensi, pusat massa dihitung?",
            options: [
              "Hanya untuk sumbu x",
              "x_pm dan y_pm secara terpisah",
              "Dengan menjumlah x dan y",
              "Tidak bisa dihitung",
            ],
            answer: 1,
            explain: "Tiap sumbu dirata-ratakan terpisah dengan rumus berbobot yang sama.",
          },
          {
            q: "Cara menangani benda berbentuk rumit seperti huruf L?",
            options: [
              "Tidak mungkin dihitung",
              "Pecah jadi bagian sederhana, tiap bagian titik bermassa, lalu gabungkan",
              "Anggap massanya nol",
              "Pakai titik tengah geometris saja",
            ],
            answer: 1,
            explain: "Benda rumit dipecah jadi bagian sederhana yang masing-masing diwakili pusat massanya.",
          },
          {
            q: "Mengapa barycenter Bumi-Bulan berada di dalam Bumi?",
            options: [
              "Karena Bulan lebih berat",
              "Karena Bumi jauh lebih berat sehingga pusat massa condong ke Bumi",
              "Karena tidak ada gravitasi",
              "Karena jaraknya sangat dekat",
            ],
            answer: 1,
            explain: "Pusat massa condong ke benda yang jauh lebih berat, yaitu Bumi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "aplikasi-pusat-massa",
    levelId: "pusat-massa",
    order: 4,
    title: "Aplikasi Pusat Massa: Keseimbangan dan Stabilitas",
    summary:
      "Mengapa truk tinggi mudah terguling dan mobil balap menempel di tikungan? Mengapa kita merentangkan tangan saat hampir jatuh? Semua soal letak pusat massa. Kita amati dulu.",
    durationMin: 12,
    tags: ["fisika", "pusat massa", "stabilitas", "keseimbangan"],
    blocks: [
      {
        type: "paragraph",
        html: "Truk tinggi bermuatan penuh mudah terguling di tikungan tajam, sementara mobil balap yang ceper menempel mantap. Pemain akrobat berjalan di atas tali sambil memegang galah panjang untuk menjaga keseimbangan. Semua peristiwa ini diatur oleh satu hal yang sama: letak pusat massa. Ayo berpetualang dulu memahami bagaimana pusat massa menentukan stabilitas sebelum kita tarik kesimpulan.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Pusat Massa dan Keseimbangan",
        caption: "Letak pusat massa terhadap alas tumpu menentukan apakah benda stabil atau roboh.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba miringkan botol kosong pelan-pelan: ia kembali tegak sampai sudut tertentu, lalu tiba-tiba roboh. Sekarang isi botol dengan air sampai penuh dan ulangi; ia lebih mudah roboh karena pusat massanya naik. Amati: benda tetap stabil selama garis lurus dari pusat massa ke bawah masih jatuh di dalam alas tumpunya. Begitu garis itu keluar dari alas, benda terguling.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Syarat stabil: garis berat jatuh di dalam alas",
        html: "Sebuah benda stabil bila garis vertikal dari pusat massa jatuh di dalam alas tumpunya. Pusat massa yang <strong>rendah</strong> dan alas tumpu yang <strong>lebar</strong> membuat benda lebih sukar terguling. Itu sebabnya kendaraan balap dibuat ceper dan lebar.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah palu: kepala besi 1,2 kg di posisi x = 0,9 m dan gagang kayu 0,3 kg di posisi x = 0,3 m (diukur dari ujung gagang). Di mana pusat massanya?",
        answer: 0.78,
        tolerance: 0.01,
        suffix: " m",
        solution:
          "x_pm = (1,2 x 0,9 + 0,3 x 0,3) / (1,2 + 0,3) = (1,08 + 0,09) / 1,5 = 1,17 / 1,5 = <strong>0,78 m</strong>. Pusat massa sangat dekat ke kepala besi yang berat, itu sebabnya palu terasa 'berat di ujung'.",
        hint: "Pakai (m1.x1 + m2.x2) dibagi total massa.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua anak di jungkat-jungkit sepanjang 4 m: 40 kg di ujung x = 0 m dan 20 kg di ujung x = 4 m. Di posisi mana titik tumpu harus diletakkan agar seimbang (yaitu di pusat massanya)?",
        answer: 1.333,
        tolerance: 0.01,
        suffix: " m",
        solution:
          "x_pm = (40x0 + 20x4) / (40 + 20) = 80 / 60 = <strong>1,33 m</strong> dari anak 40 kg. Titik tumpu harus lebih dekat ke anak yang lebih berat agar momen kedua sisi seimbang.",
        hint: "Pusat massa = (m1.x1 + m2.x2) / (m1 + m2); letakkan tumpu di sana.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan: rancangan ini membuat benda lebih stabil atau lebih mudah terguling?",
        buckets: ["Lebih stabil (sukar terguling)", "Lebih mudah terguling"],
        items: [
          { text: "Mobil balap ceper dengan roda lebar", bucket: "Lebih stabil (sukar terguling)" },
          { text: "Piramida dengan alas lebar", bucket: "Lebih stabil (sukar terguling)" },
          { text: "Beban berat diletakkan di dasar kapal", bucket: "Lebih stabil (sukar terguling)" },
          { text: "Bus tingkat dengan penumpang penuh di lantai atas", bucket: "Lebih mudah terguling" },
          { text: "Truk tinggi bermuatan padat di bagian atas", bucket: "Lebih mudah terguling" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Truk Tinggi Mudah Terguling",
        html: "Truk kontainer dan bus tingkat punya pusat massa yang tinggi, apalagi saat muatan berat ditumpuk di bagian atas. Di tikungan tajam, gaya yang mendorong ke samping bisa membuat garis berat dari pusat massa keluar dari alas roda, dan kendaraan terguling. Insinyur melawannya dengan menempatkan komponen berat (mesin, baterai, muatan) serendah mungkin dan melebarkan jarak roda. Mobil balap memakai prinsip ekstrem ini: bodi ceper dan lebar membuat pusat massa rendah sehingga bisa menikung kencang tanpa terbalik. Pusat massa adalah kunci keselamatan di jalan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang prinsipnya tegas. Posisi pusat massa tetap <strong>x_pm = (Sigma m.x) / (Sigma m)</strong>, tetapi maknanya untuk stabilitas: sebuah benda <strong>stabil selama garis vertikal dari pusat massa jatuh di dalam alas tumpunya</strong>. Dua resep menambah stabilitas: <strong>turunkan pusat massa</strong> dan <strong>lebarkan alas tumpu</strong>. Untuk keseimbangan jungkat-jungkit, letakkan tumpu tepat di pusat massa. Satu konsep, dari mainan hingga keselamatan kendaraan.",
      },
      {
        type: "takeaways",
        items: [
          "Benda stabil bila garis vertikal dari pusat massa jatuh di dalam alas tumpunya.",
          "Pusat massa rendah dan alas tumpu lebar membuat benda lebih sukar terguling.",
          "Titik tumpu seimbang sebuah sistem terletak tepat di pusat massanya.",
          "Prinsip ini menjelaskan stabilitas kendaraan, kapal, akrobat, dan bangunan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sebuah benda tetap stabil (tidak terguling) selama?",
            options: [
              "Pusat massanya tinggi",
              "Garis vertikal dari pusat massa jatuh di dalam alas tumpu",
              "Alas tumpunya sempit",
              "Massanya besar",
            ],
            answer: 1,
            explain: "Stabil jika garis berat dari pusat massa masih jatuh di dalam alas tumpu.",
          },
          {
            q: "Agar kendaraan lebih sukar terguling, pusat massanya sebaiknya?",
            options: ["Dinaikkan", "Diturunkan", "Dihilangkan", "Diabaikan"],
            answer: 1,
            explain: "Pusat massa rendah membuat kendaraan lebih stabil di tikungan.",
          },
          {
            q: "Mengapa mobil balap dibuat ceper dan lebar?",
            options: [
              "Agar terlihat cepat",
              "Agar pusat massa rendah dan alas lebar sehingga stabil menikung",
              "Agar lebih ringan",
              "Agar pusat massa tinggi",
            ],
            answer: 1,
            explain: "Ceper menurunkan pusat massa, lebar memperluas alas, keduanya menambah stabilitas.",
          },
          {
            q: "Jungkat-jungkit: 30 kg di x=0 dan 60 kg di x=3 m. Titik tumpu seimbang di?",
            options: ["1 m", "2 m", "1,5 m", "3 m"],
            answer: 1,
            explain: "x_pm = (30x0 + 60x3)/90 = 180/90 = 2 m, dekat ke anak yang lebih berat.",
          },
          {
            q: "Beban berat diletakkan di dasar kapal agar?",
            options: [
              "Kapal lebih cepat",
              "Pusat massa rendah sehingga kapal stabil dan tidak mudah terbalik",
              "Kapal lebih ringan",
              "Pusat massa naik",
            ],
            answer: 1,
            explain: "Beban di dasar menurunkan pusat massa, menambah stabilitas kapal terhadap ombak.",
          },
        ],
      },
    ],
  },
];
