import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "medan-dan-energi-potensial-gravitasi",
    levelId: "medan-potensial-gravitasi",
    order: 1,
    title: "Medan dan Energi Potensial Gravitasi",
    summary:
      "Mengapa berat kita berkurang di puncak gunung dan astronaut seolah melayang? Kita susuri dulu gagasan medan dan energi, baru rumus g = GM/r kuadrat muncul.",
    durationMin: 14,
    tags: ["fisika", "gravitasi", "medan", "energi-potensial"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah timbangan yang sama menunjukkan angka yang sedikit berbeda di puncak gunung dibanding di pantai. Tubuhmu tidak berubah, lalu apa yang berubah? Jawabannya: kekuatan gravitasi di tempat itu. Bumi seakan menebar 'jaring tak kasat mata' yang melemah saat menjauh. Sebelum menulis rumusnya, ayo rasakan dulu gagasan medan dan energi gravitasi.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Medan Gravitasi sebagai Lekukan Ruang",
        caption: "Setiap massa menciptakan medan yang menarik benda di sekitarnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan kamu naik tangga. Tiap anak tangga butuh usaha melawan gravitasi, dan makin tinggi kamu, makin besar <strong>energi potensial</strong> yang tersimpan. Sekarang bayangkan medan gravitasi sebagai 'seberapa kuat tarikan per kilogram' di suatu titik. Di dekat Bumi tarikannya kuat, jauh di angkasa tarikannya tipis. Astronaut di stasiun luar angkasa tetap ditarik gravitasi, mereka hanya sedang jatuh bebas bersama wahananya.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "area",
        title: "Kuat Medan Gravitasi Bumi terhadap Ketinggian",
        unit: "m/s kuadrat",
        source: "perhitungan g = GM/r kuadrat",
        note: "Di permukaan, g sekitar 9,8. Pada jarak 2 kali jari-jari Bumi dari pusatnya, g turun menjadi seperempatnya, sekitar 2,45. Medan melemah mengikuti kuadrat terbalik, persis seperti gayanya.",
        data: [
          { label: "1 R (permukaan)", value: 9.8, color: "#fb7185" },
          { label: "1,5 R", value: 4.36, color: "#f472b6" },
          { label: "2 R", value: 2.45, color: "#e879f9" },
          { label: "3 R", value: 1.09, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Kuat medan gravitasi di permukaan Bumi sekitar 9,8 m/s kuadrat. Pada jarak 2 kali jari-jari Bumi dari pusatnya, berapa kuat medan gravitasinya?",
        answer: 2.45,
        tolerance: 0.05,
        suffix: " m/s kuadrat",
        solution:
          "Medan g sebanding dengan 1 dibagi r kuadrat. Pada r = 2R, medan menjadi 9,8 dibagi 2 kuadrat = 9,8 dibagi 4 = <strong>2,45 m/s kuadrat</strong>.",
        hint: "Bagi 9,8 dengan kuadrat faktor jaraknya.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan sebagai benar atau keliru.",
        buckets: ["Benar", "Keliru"],
        items: [
          { text: "Medan gravitasi melemah saat menjauh dari Bumi", bucket: "Benar" },
          { text: "Astronaut di orbit sama sekali bebas dari gravitasi", bucket: "Keliru" },
          { text: "Energi potensial gravitasi bertambah saat benda dinaikkan", bucket: "Benar" },
          { text: "Kuat medan gravitasi tidak bergantung pada jarak", bucket: "Keliru" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Astronaut yang 'Melayang' di ISS",
        html: "Di Stasiun Luar Angkasa Internasional pada ketinggian sekitar 400 km, gravitasi masih sekitar 90 persen dari nilai di permukaan Bumi. Lalu mengapa astronaut tampak melayang? Karena mereka dan stasiunnya sama-sama <strong>jatuh bebas</strong> mengelilingi Bumi pada laju yang sama. Tidak ada lantai yang mendorong balik kaki mereka, sehingga rasa berat hilang. Gravitasi tidak menghilang, ia justru yang menjaga mereka tetap mengorbit.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan: kuat medan gravitasi <strong>g = G &middot; M / r&sup2;</strong>, yaitu tarikan per satuan massa pada jarak r dari pusat benda bermassa M. Sementara energi potensial gravitasi ditulis <strong>U = &minus; G &middot; M &middot; m / r</strong>. Tanda minus berarti benda 'terikat': perlu energi untuk melepaskannya menjauh. Kedua rumus ini hanya merapikan apa yang kamu rasakan, medan menipis dan energi tersimpan saat menjauh.",
      },
      {
        type: "takeaways",
        items: [
          "Medan gravitasi g adalah kuat tarikan gravitasi per kilogram di suatu titik.",
          "Medan melemah mengikuti kuadrat terbalik: pada jarak 2 kali, g menjadi seperempat.",
          "Energi potensial gravitasi bertambah saat benda dinaikkan menjauh dari Bumi.",
          "Astronaut melayang karena jatuh bebas, bukan karena gravitasi hilang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus kuat medan gravitasi adalah?",
            options: ["g = G M / r kuadrat", "g = m a", "g = F r", "g = G M r"],
            answer: 0,
            explain: "Kuat medan gravitasi pada jarak r adalah G dikali M dibagi r kuadrat.",
          },
          {
            q: "Berapa kira-kira kuat medan gravitasi di permukaan Bumi?",
            options: ["1,0 m/s kuadrat", "9,8 m/s kuadrat", "100 m/s kuadrat", "0,1 m/s kuadrat"],
            answer: 1,
            explain: "Di permukaan Bumi, g sekitar 9,8 m/s kuadrat.",
          },
          {
            q: "Pada jarak 2 kali jari-jari Bumi dari pusatnya, kuat medan menjadi?",
            options: ["Setengah, sekitar 4,9", "Seperempat, sekitar 2,45", "Tetap 9,8", "Dua kali, sekitar 19,6"],
            answer: 1,
            explain: "g sebanding 1 dibagi r kuadrat, jadi 9,8 dibagi 4 = 2,45.",
          },
          {
            q: "Tanda minus pada energi potensial gravitasi menunjukkan bahwa benda?",
            options: ["Tidak bermassa", "Terikat dan butuh energi untuk lepas", "Bergerak mundur", "Tidak ditarik gravitasi"],
            answer: 1,
            explain: "Tanda negatif berarti benda terikat secara gravitasi dan perlu energi untuk dilepaskan.",
          },
          {
            q: "Mengapa astronaut tampak melayang di ISS?",
            options: [
              "Tidak ada gravitasi di sana",
              "Mereka jatuh bebas bersama stasiunnya",
              "Mereka lebih ringan di angkasa",
              "Udara mendorong mereka ke atas",
            ],
            answer: 1,
            explain: "Mereka dan stasiun sama-sama jatuh bebas mengelilingi Bumi, sehingga tidak terasa berat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "medan-gravitasi-arah-dan-superposisi",
    levelId: "medan-potensial-gravitasi",
    order: 2,
    title: "Medan Gravitasi: Arah dan Superposisi",
    summary:
      "Di titik mana antara Bumi dan Bulan tarikan keduanya saling meniadakan? Kita pahami dulu medan sebagai panah berarah, baru menjumlahkannya.",
    durationMin: 14,
    tags: ["fisika", "gravitasi", "medan", "vektor"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah wahana antariksa yang melaju dari Bumi ke Bulan melewati satu titik istimewa: di sana tarikan Bumi dan tarikan Bulan persis sama besar namun berlawanan arah, sehingga saling meniadakan. Untuk memahami titik ajaib ini, kita perlu memandang gravitasi bukan sekadar angka, melainkan panah yang punya arah. Sebelum menjumlahkannya, ayo rasakan dulu apa artinya medan punya arah.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Peta Panah Medan Gravitasi",
        caption: "Setiap titik di sekitar massa memiliki arah tarikan menuju pusat massa.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan tiap titik di sekitar Bumi punya <strong>panah</strong> kecil yang menunjuk ke pusat Bumi, panjang panah menandakan kuat tarikan. Itulah medan gravitasi. Jika ada dua benda, misal Bumi dan Bulan, di tiap titik ada dua panah yang harus <strong>dijumlahkan</strong> mengikuti arahnya. Bila keduanya sama besar dan berlawanan arah, hasilnya nol. Menjumlahkan medan dengan memperhatikan arah inilah yang disebut superposisi.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kuat Medan Gravitasi Matahari di Orbit Tiap Planet",
        unit: "milimeter/s kuadrat",
        source: "perhitungan g = GM/r kuadrat untuk Matahari",
        note: "Medan Matahari makin tipis pada planet yang lebih jauh, mengikuti kuadrat terbalik. Di orbit Merkurius medannya jauh lebih kuat daripada di orbit Jupiter, walau sumbernya sama.",
        data: [
          { label: "Merkurius", value: 39.6, color: "#fb7185" },
          { label: "Bumi", value: 5.93, color: "#f472b6" },
          { label: "Mars", value: 2.56, color: "#e879f9" },
          { label: "Jupiter", value: 0.22, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Di suatu titik, medan gravitasi Bumi 6 satuan mengarah ke kiri, dan medan Bulan 6 satuan mengarah ke kanan. Berapa kuat medan total di titik itu?",
        answer: 0,
        tolerance: 0.01,
        suffix: " satuan",
        solution:
          "Medan adalah besaran berarah. Dua medan sama besar yang berlawanan arah saling meniadakan: 6 ke kiri tambah 6 ke kanan = <strong>0</strong>. Inilah titik tempat tarikan kedua benda seimbang.",
        hint: "Arah berlawanan berarti yang satu mengurangi yang lain.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan tentang medan gravitasi sebagai benar atau keliru.",
        buckets: ["Benar", "Keliru"],
        items: [
          { text: "Medan gravitasi punya besar sekaligus arah", bucket: "Benar" },
          { text: "Arah medan gravitasi selalu menuju massa sumbernya", bucket: "Benar" },
          { text: "Medan dari dua benda dijumlahkan begitu saja tanpa memperhatikan arah", bucket: "Keliru" },
          { text: "Ada titik antara dua massa tempat medan total bisa nol", bucket: "Benar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Titik Lagrange, Tempat Teleskop Menggantung",
        html: "Teleskop antariksa James Webb tidak mengorbit Bumi biasa, melainkan 'parkir' di sebuah titik istimewa bernama L2, sekitar 1,5 juta km dari Bumi menjauhi Matahari. Di sana, kombinasi medan gravitasi Matahari dan Bumi pas membuat teleskop mengelilingi Matahari serempak dengan Bumi. Titik-titik Lagrange lahir dari penjumlahan medan gravitasi dua benda besar, dan menjadi 'tempat parkir' hemat bahan bakar bagi banyak wahana.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan: medan gravitasi dari sebuah massa adalah <strong>g = G &middot; M / r&sup2;</strong> dengan arah menuju massa itu. Bila ada beberapa massa, medan total adalah <strong>penjumlahan vektor</strong> tiap medan: g&#8348;&#8336;&#8348;&#8336;&#8343; = g&#8321; + g&#8322; + ... dengan memperhatikan arah. Prinsip superposisi inilah yang menjelaskan titik bermedan nol dan titik Lagrange.",
      },
      {
        type: "takeaways",
        items: [
          "Medan gravitasi adalah besaran berarah: punya besar dan arah menuju massa sumber.",
          "Medan dari beberapa massa dijumlahkan secara vektor (memperhatikan arah), disebut superposisi.",
          "Ada titik tempat medan dua benda saling meniadakan sehingga totalnya nol.",
          "Titik Lagrange muncul dari penjumlahan medan gravitasi dua benda besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Medan gravitasi termasuk besaran yang memiliki?",
            options: ["Hanya besar", "Besar dan arah", "Hanya arah", "Tidak keduanya"],
            answer: 1,
            explain: "Medan gravitasi adalah besaran vektor: punya besar dan arah.",
          },
          {
            q: "Arah medan gravitasi sebuah massa selalu?",
            options: [
              "Menjauhi massa",
              "Menuju massa sumbernya",
              "Mendatar",
              "Berubah-ubah acak",
            ],
            answer: 1,
            explain: "Gravitasi menarik, jadi medannya menunjuk ke arah massa sumber.",
          },
          {
            q: "Bagaimana cara menggabungkan medan dari dua benda?",
            options: [
              "Dijumlahkan secara vektor dengan memperhatikan arah",
              "Selalu dijumlahkan langsung",
              "Selalu dikurangkan",
              "Diabaikan salah satunya",
            ],
            answer: 0,
            explain: "Prinsip superposisi: jumlahkan secara vektor sesuai arah masing-masing.",
          },
          {
            q: "Di titik tempat medan Bumi dan Bulan sama besar dan berlawanan arah, medan totalnya?",
            options: ["Dua kali lipat", "Nol", "Setengah", "Tak terhingga"],
            answer: 1,
            explain: "Dua medan berlawanan arah yang sama besar saling meniadakan menjadi nol.",
          },
          {
            q: "Titik Lagrange L2 dimanfaatkan untuk?",
            options: [
              "Menambang asteroid",
              "Menempatkan teleskop antariksa secara hemat bahan bakar",
              "Mendaratkan roket",
              "Menyimpan bahan bakar",
            ],
            answer: 1,
            explain: "L2 adalah titik gabungan medan yang stabil, cocok untuk teleskop seperti James Webb.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "energi-potensial-gravitasi",
    levelId: "medan-potensial-gravitasi",
    order: 3,
    title: "Energi Potensial Gravitasi",
    summary:
      "Dari mana bendungan raksasa mendapat energi untuk menyalakan kota? Kita telusuri dulu gagasan energi tersimpan akibat ketinggian, baru rumus U = -GMm/r muncul.",
    durationMin: 14,
    tags: ["fisika", "gravitasi", "energi-potensial", "usaha"],
    blocks: [
      {
        type: "paragraph",
        html: "Air yang ditahan jauh di atas bendungan menyimpan energi diam-diam. Saat dilepas, ia jatuh, memutar turbin, dan menyalakan jutaan lampu. Energi itu tidak datang dari mana-mana, ia tersimpan karena air berada tinggi di dalam medan gravitasi Bumi. Sebelum menulis rumusnya, ayo pahami dulu mengapa ketinggian sama dengan energi tersimpan.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Energi yang Tersimpan dalam Ketinggian",
        caption: "Mengangkat benda menabung energi yang bisa dilepas saat jatuh.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Untuk mengangkat ember, kamu harus bekerja melawan gravitasi, dan usaha itu tidak hilang, melainkan <strong>ditabung</strong> sebagai energi potensial. Makin tinggi kamu angkat, makin banyak energi tertabung, dan akan keluar lagi saat ember jatuh. Bayangkan gravitasi sebagai lembah: benda di dasar lembah 'terjebak', dan makin tinggi ia naik, makin dekat ke tepi untuk bebas. Energi potensial mengukur seberapa dalam benda masih terjebak.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Energi Potensial Gravitasi 1 kg terhadap Jarak dari Pusat Bumi",
        unit: "megajoule per kg",
        source: "perhitungan U = -GMm/r untuk Bumi",
        note: "Energi potensial bernilai negatif dan naik mendekati nol saat benda menjauh. Di permukaan benda paling 'dalam' (-62,6), makin tinggi nilainya makin mendekati nol, tanda benda makin bebas.",
        data: [
          { label: "1 R (permukaan)", value: -62.6, color: "#fb7185" },
          { label: "2 R", value: -31.3, color: "#f472b6" },
          { label: "4 R", value: -15.6, color: "#e879f9" },
          { label: "8 R", value: -7.8, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Energi potensial gravitasi 1 kg di permukaan Bumi sekitar -62,6 megajoule. Pada jarak 2 kali jari-jari Bumi dari pusatnya, berapa energi potensialnya?",
        answer: -31.3,
        tolerance: 0.5,
        suffix: " megajoule",
        solution:
          "Energi potensial U sebanding dengan -1 dibagi r (bukan r kuadrat). Pada r = 2R, nilainya menjadi setengah: -62,6 dibagi 2 = <strong>-31,3 megajoule</strong>. Lebih besar (lebih dekat nol) berarti benda lebih bebas.",
        hint: "U sebanding dengan 1 dibagi r, jadi jarak 2 kali membuat besarnya setengah.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan tentang energi potensial gravitasi sebagai benar atau keliru.",
        buckets: ["Benar", "Keliru"],
        items: [
          { text: "Energi potensial gravitasi bertambah (mendekati nol) saat benda menjauh", bucket: "Benar" },
          { text: "Mengangkat benda menyimpan energi potensial", bucket: "Benar" },
          { text: "Energi potensial gravitasi selalu bernilai positif", bucket: "Keliru" },
          { text: "Energi potensial sebanding dengan 1 dibagi r kuadrat", bucket: "Keliru" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Baterai Raksasa dari Air dan Ketinggian",
        html: "Pembangkit listrik pompa-simpan bekerja seperti baterai raksasa. Saat listrik berlebih, air dipompa naik ke waduk atas, menabung energi potensial gravitasi. Saat permintaan listrik melonjak, air dilepas turun memutar turbin, mengubah energi potensial kembali menjadi listrik. Indonesia membangun fasilitas seperti ini di Cisokan. Seluruh idenya bersandar pada satu fakta sederhana: benda yang lebih tinggi di medan gravitasi menyimpan lebih banyak energi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan: energi potensial gravitasi <strong>U = &minus; G &middot; M &middot; m / r</strong>. Tanda minus dan acuan nol di jarak tak hingga berarti benda yang terikat selalu bernilai negatif, dan nilainya naik mendekati nol saat menjauh. Dekat permukaan Bumi, rumus ini menyederhana menjadi bentuk akrab <strong>U = m &middot; g &middot; h</strong> untuk perubahan ketinggian kecil. Keduanya menyatakan hal yang sama: tinggi sama dengan energi tersimpan.",
      },
      {
        type: "takeaways",
        items: [
          "Mengangkat benda menyimpan energi potensial gravitasi yang bisa dilepas saat jatuh.",
          "Rumus umumnya U = -GMm/r, bernilai negatif dan mendekati nol saat benda menjauh.",
          "U sebanding dengan 1 dibagi r, jadi jarak 2 kali membuat besarnya setengah.",
          "Dekat permukaan Bumi, U menyederhana menjadi U = m g h untuk ketinggian kecil.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus energi potensial gravitasi umum adalah?",
            options: ["U = -G M m / r", "U = G M / r kuadrat", "U = 1/2 m v kuadrat", "U = m a"],
            answer: 0,
            explain: "Energi potensial gravitasi U = -GMm/r, bernilai negatif untuk benda terikat.",
          },
          {
            q: "Mengapa energi potensial gravitasi benda terikat bernilai negatif?",
            options: [
              "Karena energinya hilang",
              "Karena acuan nol diambil di jarak tak hingga dan benda terikat",
              "Karena massanya negatif",
              "Karena selalu salah hitung",
            ],
            answer: 1,
            explain: "Dengan acuan nol di tak hingga, benda yang terikat punya energi lebih rendah, jadi negatif.",
          },
          {
            q: "Saat benda dinaikkan menjauh dari Bumi, energi potensialnya?",
            options: ["Berkurang", "Bertambah (mendekati nol)", "Tetap", "Menjadi nol seketika"],
            answer: 1,
            explain: "Menjauh berarti naik mendekati nol, tanda benda makin bebas.",
          },
          {
            q: "Dekat permukaan Bumi, energi potensial untuk ketinggian kecil sering ditulis?",
            options: ["U = m g h", "U = m v kuadrat", "U = G m", "U = g / h"],
            answer: 0,
            explain: "Untuk perubahan ketinggian kecil, U = m g h adalah penyederhanaan yang akrab.",
          },
          {
            q: "Pembangkit pompa-simpan menabung energi dengan cara?",
            options: [
              "Memanaskan air",
              "Memompa air naik untuk menyimpan energi potensial",
              "Menambah massa air",
              "Mendinginkan turbin",
            ],
            answer: 1,
            explain: "Air dipompa ke atas menyimpan energi potensial gravitasi, lalu dilepas memutar turbin.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "potensial-gravitasi",
    levelId: "medan-potensial-gravitasi",
    order: 4,
    title: "Potensial Gravitasi",
    summary:
      "Bagaimana cara menggambar 'peta ketinggian' gravitasi yang sama untuk benda apa pun? Kita pahami dulu potensial per kilogram, baru rumus V = -GM/r muncul.",
    durationMin: 13,
    tags: ["fisika", "gravitasi", "potensial", "medan"],
    blocks: [
      {
        type: "paragraph",
        html: "Peta topografi menandai garis-garis ketinggian yang sama, dan kamu langsung tahu di mana lereng curam atau lembah dalam, tanpa peduli siapa yang mendaki. Gravitasi pun bisa dipetakan begitu: sebuah angka di tiap titik yang berlaku untuk benda apa pun, bukan hanya satu benda tertentu. Angka itu disebut potensial gravitasi. Sebelum bertemu rumusnya, ayo pahami dulu mengapa kita butuh ukuran 'per kilogram'.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Peta Ketinggian Gravitasi",
        caption: "Potensial gravitasi seperti garis kontur: sifat ruang, bukan sifat benda.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Energi potensial U bergantung pada massa benda yang kita taruh, jadi tiap benda punya angka berbeda. Repot. Solusinya: bagi dengan massa benda itu, sehingga tersisa angka yang hanya bergantung pada <strong>ruang dan sumber gravitasinya</strong>. Itulah <strong>potensial gravitasi</strong>, energi potensial per kilogram. Seperti peta kontur, ia menggambarkan 'kedalaman lembah gravitasi' di tiap titik, sama untuk batu kecil maupun pesawat besar.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Potensial Gravitasi di Permukaan Berbagai Benda Langit",
        unit: "megajoule per kg",
        source: "perhitungan V = -GM/r",
        note: "Makin masif dan padat sebuah benda, makin 'dalam' lembah gravitasinya (makin negatif). Lembah Jupiter jauh lebih dalam daripada Bulan, sehingga lebih sulit dilepasi.",
        data: [
          { label: "Bulan", value: -2.8, color: "#fbbf24" },
          { label: "Mars", value: -12.6, color: "#fb7185" },
          { label: "Bumi", value: -62.6, color: "#f472b6" },
          { label: "Jupiter", value: -1813, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Potensial gravitasi di permukaan Bumi sekitar -62,6 megajoule per kg. Berapa energi potensial sebuah satelit bermassa 2 kg di permukaan itu? Gunakan U = m dikali V.",
        answer: -125.2,
        tolerance: 1,
        suffix: " megajoule",
        solution:
          "Energi potensial = massa dikali potensial: U = m x V = 2 x (-62,6) = <strong>-125,2 megajoule</strong>. Potensial V adalah energi per kilogram, jadi tinggal dikalikan massa benda.",
        hint: "Kalikan potensial per kg dengan massa benda.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap besaran dengan keterangannya.",
        pairs: [
          { left: "Potensial gravitasi V", right: "Energi potensial per kilogram (-GM/r)" },
          { left: "Energi potensial U", right: "Untuk benda tertentu (m dikali V)" },
          { left: "Kuat medan g", right: "Gaya gravitasi per kilogram (GM/r kuadrat)" },
          { left: "Lembah lebih dalam", right: "Potensial lebih negatif, lebih sulit lepas" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Lepas Landas dari Jupiter Mustahil Hari Ini",
        html: "Potensial gravitasi di awan Jupiter jauh lebih negatif daripada di Bumi, artinya lembah gravitasinya jauh lebih dalam. Untuk membawa wahana keluar dari lembah sedalam itu butuh energi sangat besar per kilogram muatan. Itu sebabnya misi ke Jupiter mengirim wahana kecil yang mengorbit atau menjatuhkan probe, bukan mendarat lalu lepas landas. Potensial gravitasi memberi tahu kita seberapa 'mahal' energi untuk keluar dari cengkeraman sebuah dunia, tanpa peduli berapa massa wahananya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan: potensial gravitasi <strong>V = &minus; G &middot; M / r</strong>, yaitu energi potensial per satuan massa pada jarak r dari benda bermassa M. Hubungannya dengan energi potensial benda: <strong>U = m &middot; V</strong>. Seperti medan g yang merupakan gaya per kilogram, potensial V adalah energi per kilogram, sebuah sifat ruang yang sama untuk benda apa pun.",
      },
      {
        type: "takeaways",
        items: [
          "Potensial gravitasi adalah energi potensial per kilogram, sifat ruang bukan sifat benda.",
          "Rumusnya V = -GM/r, bernilai negatif dan makin dalam dekat benda masif.",
          "Energi potensial benda diperoleh dengan U = m dikali V.",
          "Lembah potensial yang lebih dalam berarti lebih sulit untuk dilepasi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus potensial gravitasi adalah?",
            options: ["V = -G M / r", "V = -G M m / r", "V = G M / r kuadrat", "V = m g h"],
            answer: 0,
            explain: "Potensial gravitasi V = -GM/r, yaitu energi potensial per satuan massa.",
          },
          {
            q: "Apa beda potensial gravitasi V dan energi potensial U?",
            options: [
              "V per kilogram, U untuk benda tertentu",
              "Keduanya sama persis",
              "V untuk benda tertentu, U per kilogram",
              "V positif, U negatif",
            ],
            answer: 0,
            explain: "V adalah energi per kilogram (sifat ruang); U = m V untuk benda dengan massa m.",
          },
          {
            q: "Hubungan antara U, m, dan V adalah?",
            options: ["U = m V", "U = V / m", "U = m + V", "U = m / V"],
            answer: 0,
            explain: "Energi potensial benda = massa dikali potensial: U = m V.",
          },
          {
            q: "Lembah potensial yang lebih dalam (lebih negatif) berarti?",
            options: [
              "Lebih mudah meninggalkan benda",
              "Lebih sulit meninggalkan benda",
              "Tidak ada gravitasi",
              "Benda melayang",
            ],
            answer: 1,
            explain: "Makin dalam lembah, makin besar energi yang dibutuhkan untuk lepas.",
          },
          {
            q: "Mengapa potensial gravitasi praktis dipakai untuk memetakan gravitasi?",
            options: [
              "Karena bergantung pada benda uji",
              "Karena sama untuk benda apa pun, hanya bergantung ruang dan sumbernya",
              "Karena selalu positif",
              "Karena tidak butuh massa sumber",
            ],
            answer: 1,
            explain: "Potensial adalah sifat ruang, berlaku untuk benda apa pun seperti garis kontur peta.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "bidang-ekuipotensial-dan-usaha",
    levelId: "medan-potensial-gravitasi",
    order: 5,
    title: "Bidang Ekuipotensial dan Usaha Gravitasi",
    summary:
      "Mengapa berjalan menyusuri lereng pada ketinggian sama tidak melelahkan, sementara mendaki tegak lurus menguras tenaga? Kita pahami dulu gagasan garis ketinggian gravitasi, baru rumus usaha W = m dikali selisih potensial muncul.",
    durationMin: 13,
    tags: ["fisika", "gravitasi", "ekuipotensial", "usaha"],
    blocks: [
      {
        type: "paragraph",
        html: "Di peta gunung, garis kontur menandai titik-titik berketinggian sama. Berjalan menyusuri satu garis kontur tidak membuatmu naik atau turun, jadi tidak menabung maupun melepas energi. Gravitasi punya 'garis kontur' serupa, disebut <strong>bidang ekuipotensial</strong>: kumpulan titik dengan potensial gravitasi sama. Sebelum bertemu rumus usahanya, ayo pahami dulu mengapa bergerak di sepanjang bidang ini gratis, tetapi menyeberang antar bidang berbiaya energi.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Garis Kontur Gravitasi",
        caption: "Bidang ekuipotensial adalah permukaan berpotensial sama, tegak lurus arah medan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Di sekitar Bumi, bidang ekuipotensial berbentuk bola-bola yang membungkus pusat Bumi. Bergerak <strong>sepanjang</strong> satu bola (ketinggian tetap) tidak mengubah potensial, jadi gravitasi tidak melakukan usaha. Untuk berpindah ke bola yang lebih luar, kamu harus menyeberang, dan di sinilah energi tertabung sebagai energi potensial. Karena gravitasi adalah <strong>gaya konservatif</strong>, usaha untuk berpindah antar dua titik hanya bergantung pada titik awal dan akhir, bukan pada jalur yang ditempuh.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "area",
        title: "Usaha Mengangkat 1 kg dari Permukaan Bumi ke Berbagai Jarak",
        unit: "megajoule",
        source: "perhitungan W = m dikali selisih V, dengan V = -GM/r",
        note: "Usaha bertambah saat benda diangkat lebih tinggi, tetapi tidak tanpa batas: ia mendekati 62,6 megajoule, yaitu energi yang dibutuhkan untuk lepas total. Angka inilah yang setara dengan setengah kuadrat kecepatan lepas Bumi.",
        data: [
          { label: "ke 2 R", value: 31.3, color: "#fb7185" },
          { label: "ke 4 R", value: 47.0, color: "#f472b6" },
          { label: "ke 8 R", value: 54.8, color: "#e879f9" },
          { label: "lepas (tak hingga)", value: 62.6, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Potensial gravitasi di permukaan Bumi sekitar -62,6 megajoule per kg, dan pada jarak 2 kali jari-jari Bumi sekitar -31,3 megajoule per kg. Berapa usaha untuk mengangkat benda 1 kg dari permukaan ke jarak 2R? Gunakan W = m dikali selisih potensial.",
        answer: 31.3,
        tolerance: 0.5,
        suffix: " megajoule",
        solution:
          "Usaha = massa dikali selisih potensial: W = m x (V akhir - V awal) = 1 x (-31,3 - (-62,6)) = 1 x 31,3 = <strong>31,3 megajoule</strong>. Hasil ini sama berapa pun jalur yang dipilih, karena gravitasi gaya konservatif.",
        hint: "Kurangkan potensial awal dari potensial akhir, lalu kalikan massa.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan tentang bidang ekuipotensial dan usaha sebagai benar atau keliru.",
        buckets: ["Benar", "Keliru"],
        items: [
          { text: "Bergerak sepanjang bidang ekuipotensial tidak memerlukan usaha gravitasi", bucket: "Benar" },
          { text: "Bidang ekuipotensial selalu tegak lurus arah medan gravitasi", bucket: "Benar" },
          { text: "Usaha gravitasi bergantung pada jalur yang ditempuh, bukan titik ujungnya", bucket: "Keliru" },
          { text: "Di sekitar massa bola, bidang ekuipotensial berbentuk bola-bola", bucket: "Benar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Roket Diluncurkan ke Timur dari Dekat Khatulistiwa",
        html: "Untuk mengangkat wahana ke orbit, roket harus menabung energi melawan potensial gravitasi. Setiap megajoule berharga. Karena itu banyak peluncuran diarahkan <strong>ke timur</strong> dan dilakukan dekat khatulistiwa, agar mendapat 'dorongan gratis' dari rotasi Bumi yang di khatulistiwa melaju sekitar 0,46 km/s ke timur. Energi awal ini mengurangi bahan bakar yang perlu dibakar untuk menyeberangi bidang-bidang ekuipotensial menuju orbit. Indonesia, yang membentang di khatulistiwa, secara geografis sangat menguntungkan untuk gagasan peluncuran semacam ini.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan: usaha untuk memindahkan benda bermassa m antara dua titik adalah <strong>W = m &middot; (V&#8322; &minus; V&#8321;)</strong>, yaitu massa dikali selisih potensial gravitasi. Bila kedua titik berada di bidang ekuipotensial yang sama, V&#8322; = V&#8321; sehingga <strong>W = 0</strong>. Karena gravitasi konservatif, usaha ini tidak bergantung pada jalur. Usaha untuk lepas total (ke jarak tak hingga) sama dengan m dikali besar potensial permukaan, dan itulah yang menentukan kecepatan lepas.",
      },
      {
        type: "takeaways",
        items: [
          "Bidang ekuipotensial adalah kumpulan titik berpotensial gravitasi sama, seperti garis kontur peta.",
          "Bergerak sepanjang bidang ekuipotensial tidak memerlukan usaha gravitasi (selisih potensial nol).",
          "Gravitasi adalah gaya konservatif: usaha hanya bergantung pada titik awal dan akhir, bukan jalurnya.",
          "Usaha memindahkan benda dihitung dengan W = m dikali selisih potensial (V akhir dikurangi V awal).",
          "Usaha untuk lepas total bernilai berhingga, dan menjadi dasar gagasan kecepatan lepas.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu bidang ekuipotensial gravitasi?",
            options: [
              "Permukaan dengan kuat medan nol",
              "Kumpulan titik dengan potensial gravitasi sama",
              "Garis arah jatuhnya benda",
              "Tempat gravitasi paling besar",
            ],
            answer: 1,
            explain: "Bidang ekuipotensial menghubungkan titik-titik berpotensial sama, mirip garis kontur peta.",
          },
          {
            q: "Berapa usaha gravitasi saat benda bergerak sepanjang bidang ekuipotensial?",
            options: ["Nol", "Maksimum", "Negatif besar", "Tak terhingga"],
            answer: 0,
            explain: "Potensialnya tidak berubah, jadi W = m dikali selisih potensial = nol.",
          },
          {
            q: "Bidang ekuipotensial selalu berorientasi bagaimana terhadap medan gravitasi?",
            options: ["Sejajar medan", "Tegak lurus medan", "Membentuk 45 derajat", "Acak"],
            answer: 1,
            explain: "Bidang ekuipotensial selalu tegak lurus terhadap arah medan gravitasi.",
          },
          {
            q: "Rumus usaha memindahkan benda antara dua titik dalam medan gravitasi adalah?",
            options: [
              "W = m dikali (V akhir dikurangi V awal)",
              "W = m g",
              "W = G M / r",
              "W = 1/2 m v kuadrat",
            ],
            answer: 0,
            explain: "Usaha = massa dikali selisih potensial gravitasi antara titik akhir dan awal.",
          },
          {
            q: "Apa arti gravitasi adalah gaya konservatif?",
            options: [
              "Gravitasi selalu menghemat energi",
              "Usaha hanya bergantung pada titik awal dan akhir, bukan jalurnya",
              "Gravitasi tidak pernah melakukan usaha",
              "Gravitasi hanya bekerja di Bumi",
            ],
            answer: 1,
            explain: "Pada gaya konservatif, usaha antara dua titik tak bergantung pada lintasan yang dilalui.",
          },
        ],
      },
    ],
  },
];
