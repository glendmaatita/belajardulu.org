import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "kekekalan-momentum",
    levelId: "kekekalan-momentum",
    order: 1,
    title: "Kekekalan Momentum",
    summary:
      "Saat dua bola biliar beradu atau senapan tersentak ke belakang, ada satu hal yang selalu setia: jumlah momentum total. Kita lihat ceritanya dulu.",
    durationMin: 13,
    tags: ["fisika", "momentum", "kekekalan", "tumbukan"],
    blocks: [
      {
        type: "paragraph",
        html: "Tonton bola biliar putih menghantam bola merah yang diam. Bola putih melambat, bola merah melesat. Seolah 'gerak' berpindah dari satu bola ke bola lain. Atau perhatikan senapan: saat peluru melesat ke depan, senapan menyentak ke belakang. Ada sesuatu yang tetap terjaga di setiap peristiwa ini. Ayo berpetualang menemukannya sebelum menulis rumus.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Momentum yang Berpindah",
        caption: "Dalam tabrakan, momentum tidak hilang, ia hanya berpindah antar benda.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba berdiri di atas skateboard lalu lempar tas berat ke depan. Tubuhmu terdorong mundur. Sebelum dilempar, total momentum sistem (kamu + tas) nol. Setelah dilempar, tas bergerak maju dan kamu mundur, tetapi jumlah momentumnya tetap nol. Amati: momentum yang hilang di satu sisi muncul di sisi lain. Tidak ada yang benar-benar lenyap.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Syaratnya: tidak ada gaya luar",
        html: "Momentum total kekal selama tidak ada gaya luar yang ikut campur (atau gaya luarnya saling meniadakan). Gaya antara kedua benda saat bertabrakan adalah gaya dalam, dan gaya dalam tidak mengubah momentum total sistem.",
      },
      {
        type: "widget",
        widget: "SimulatorTumbukan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Momentum Total: Dua Kereta yang Saling Menempel",
        unit: "kg.m/s",
        source: "Kereta A 2 kg @ 3 m/s menabrak kereta B 2 kg diam, lalu menempel jadi 4 kg @ 1,5 m/s",
        note: "Momentum total sebelum (6 + 0) sama persis dengan momentum total sesudah (4 kg x 1,5 m/s). Kecepatan berubah, jumlah momentum tidak.",
        data: [
          { label: "Sebelum: kereta A", value: 6, color: "#a78bfa" },
          { label: "Sebelum: kereta B", value: 0, color: "#c4b5fd" },
          { label: "Total sebelum", value: 6, color: "#7c3aed" },
          { label: "Total sesudah", value: 6, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah senapan 4 kg menembakkan peluru 0,01 kg dengan kecepatan 400 m/s. Berapa kecepatan sentakan (recoil) senapan?",
        answer: 1,
        tolerance: 0.01,
        suffix: " m/s",
        solution:
          "Momentum awal nol. Momentum peluru = 0,01 x 400 = 4 kg.m/s ke depan. Agar total tetap nol, momentum senapan = 4 kg.m/s ke belakang. Kecepatan senapan = 4 / 4 = <strong>1 m/s</strong>.",
        hint: "Momentum peluru maju harus diimbangi momentum senapan mundur agar totalnya tetap nol.",
      },
      {
        type: "calcExercise",
        prompt:
          "Gerbong 3 kg melaju 4 m/s menabrak gerbong 1 kg yang diam, lalu keduanya menempel. Berapa kecepatan gabungannya?",
        answer: 3,
        tolerance: 0.01,
        suffix: " m/s",
        solution:
          "Momentum sebelum = 3 x 4 + 1 x 0 = 12 kg.m/s. Massa gabungan = 4 kg. Kecepatan = 12 / 4 = <strong>3 m/s</strong>. Momentum total tetap 12 kg.m/s.",
        hint: "Pakai m1.v1 = (m1 + m2) . v gabungan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan peristiwa dengan penjelasan kekekalan momentumnya.",
        pairs: [
          { left: "Senapan menyentak mundur", right: "Momentum peluru maju diimbangi senapan mundur" },
          { left: "Roket meluncur ke atas", right: "Gas disemburkan ke bawah, roket terdorong ke atas" },
          { left: "Peloncat es saling mendorong", right: "Keduanya meluncur berlawanan arah, total tetap nol" },
          { left: "Dua kereta menempel setelah tabrakan", right: "Bergerak bersama dengan momentum total yang sama" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Roket Bisa Terbang di Luar Angkasa",
        html: "Banyak yang mengira roket terbang karena 'mendorong udara'. Tapi di luar angkasa tidak ada udara. Roket tetap melaju karena kekekalan momentum: ia menyemburkan gas panas ke belakang dengan momentum besar, sehingga badan roket memperoleh momentum yang sama besar ke depan. Total momentum sistem (roket + gas) tetap kekal. Inilah persis prinsip senapan yang menyentak, hanya saja terjadi terus-menerus.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya terasa wajar. Untuk dua benda tanpa gaya luar: <strong>m1.v1 + m2.v2 = m1.v1' + m2.v2'</strong>. Jumlah momentum sebelum tumbukan sama dengan jumlah momentum sesudahnya. Ingat, kecepatan bertanda (positif/negatif) sesuai arah, karena momentum adalah vektor. Hukum ini berlaku untuk tumbukan, ledakan, sentakan, maupun semburan roket.",
      },
      {
        type: "takeaways",
        items: [
          "Momentum total sistem kekal bila tidak ada gaya luar yang bekerja.",
          "Persamaannya: m1.v1 + m2.v2 = m1.v1' + m2.v2'.",
          "Gaya antar benda saat tumbukan adalah gaya dalam dan tidak mengubah momentum total.",
          "Recoil senapan dan dorongan roket adalah contoh langsung kekekalan momentum.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapan momentum total sebuah sistem kekal?",
            options: [
              "Selalu, tanpa syarat",
              "Saat tidak ada gaya luar yang bekerja",
              "Hanya saat benda diam",
              "Hanya pada tumbukan elastis",
            ],
            answer: 1,
            explain: "Momentum total kekal jika resultan gaya luar pada sistem nol.",
          },
          {
            q: "Sebuah senapan menyentak ke belakang karena?",
            options: [
              "Udara mendorongnya",
              "Momentum peluru maju diimbangi momentum senapan mundur",
              "Gravitasi menariknya",
              "Pelurunya terlalu berat",
            ],
            answer: 1,
            explain: "Total momentum awal nol, jadi senapan harus mundur untuk mengimbangi peluru.",
          },
          {
            q: "Benda 2 kg @ 5 m/s menabrak benda 3 kg diam lalu menempel. Kecepatan gabungannya?",
            options: ["2 m/s", "1 m/s", "5 m/s", "2,5 m/s"],
            answer: 0,
            explain: "Momentum = 2x5 = 10. Massa gabungan 5 kg. v = 10/5 = 2 m/s.",
          },
          {
            q: "Roket bisa melaju di ruang hampa karena?",
            options: [
              "Mendorong udara di sekitarnya",
              "Menyemburkan gas ke belakang, badan roket terdorong ke depan",
              "Tidak ada gravitasi",
              "Bahan bakarnya ringan",
            ],
            answer: 1,
            explain: "Kekekalan momentum: gas mundur, roket maju, total momentum tetap.",
          },
          {
            q: "Dalam tumbukan, gaya antara kedua benda disebut gaya dalam karena?",
            options: [
              "Berasal dari luar sistem",
              "Tidak mengubah momentum total sistem",
              "Selalu nol",
              "Hanya bekerja pada satu benda",
            ],
            answer: 1,
            explain: "Gaya dalam saling berpasangan (aksi-reaksi) sehingga momentum total sistem tetap.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "ledakan-dan-recoil",
    levelId: "kekekalan-momentum",
    order: 2,
    title: "Ledakan dan Sentakan (Recoil)",
    summary:
      "Granat yang diam tiba-tiba pecah ke segala arah, namun pusatnya seolah tetap diam. Bagaimana 'gerak' lahir dari benda yang tadinya diam? Kita selidiki dulu.",
    durationMin: 13,
    tags: ["fisika", "kekekalan momentum", "ledakan", "recoil"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah kembang api meledak di langit, pecahannya menyebar ke segala arah dengan kecepatan tinggi. Sebelum meledak, ia hanya melayang pelan. Dari mana datang semua gerak liar itu? Dan anehnya, kalau kamu jumlahkan momentum semua pecahan, hasilnya tetap sama dengan sebelum meledak. Ayo berpetualang dulu memahami keajaiban yang sebenarnya bukan keajaiban ini.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Ledakan dan Momentum yang Saling Meniadakan",
        caption: "Pada ledakan benda diam, pecahan-pecahannya selalu menjumlah menjadi momentum nol.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tiup balon, jepit lehernya, lalu lepaskan. Balon melesat ke satu arah sementara udara menyembur ke arah sebaliknya. Sebelum dilepas, balon diam dan momentum totalnya nol. Setelah dilepas, balon dan udara bergerak berlawanan, tetapi jumlah momentumnya tetap nol. Amati: ledakan tidak menciptakan momentum, ia hanya memecah nol menjadi dua bagian yang saling meniadakan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Ledakan adalah kebalikan tumbukan menempel",
        html: "Pada tumbukan tak lenting, banyak benda menyatu jadi satu. Pada ledakan, satu benda pecah jadi banyak. Keduanya sama-sama mematuhi kekekalan momentum. Energi pada ledakan justru bertambah (dari bahan peledak), tetapi momentum total tetap kekal.",
      },
      {
        type: "widget",
        widget: "SimulatorTumbukan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Momentum Pecahan Granat 5 kg yang Semula Diam",
        unit: "kg.m/s",
        source: "Granat diam pecah jadi 2 kg @ 30 m/s ke kanan dan 3 kg @ 20 m/s ke kiri",
        note: "Besar momentum kedua pecahan sama persis (60 kg.m/s), tetapi arahnya berlawanan. Jumlah vektornya nol, sama dengan momentum granat sebelum meledak.",
        data: [
          { label: "Pecahan 2 kg (ke kanan)", value: 60, color: "#a78bfa" },
          { label: "Pecahan 3 kg (ke kiri)", value: 60, color: "#f87171" },
          { label: "Jumlah vektor", value: 0, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda 5 kg yang diam meledak menjadi dua pecahan. Pecahan 2 kg melesat 30 m/s ke kanan. Berapa kecepatan pecahan 3 kg?",
        answer: 20,
        tolerance: 0.01,
        suffix: " m/s",
        solution:
          "Momentum awal nol. Momentum pecahan 2 kg = 2 x 30 = 60 kg.m/s ke kanan. Agar total tetap nol, pecahan 3 kg harus punya momentum 60 kg.m/s ke kiri. Kecepatannya = 60 / 3 = <strong>20 m/s</strong> ke kiri.",
        hint: "Total momentum tetap nol; momentum kedua pecahan harus sama besar dan berlawanan arah.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang anak 50 kg berdiri diam di atas skateboard licin lalu melempar bola 2 kg dengan kecepatan 10 m/s ke depan. Berapa kecepatan mundur anak itu?",
        answer: 0.4,
        tolerance: 0.01,
        suffix: " m/s",
        solution:
          "Momentum awal nol. Momentum bola = 2 x 10 = 20 kg.m/s ke depan. Anak harus mundur dengan momentum 20 kg.m/s. Kecepatan anak = 20 / 50 = <strong>0,4 m/s</strong> ke belakang.",
        hint: "Momentum bola maju harus diimbangi momentum anak mundur.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan peristiwa ledakan/recoil dengan pasangan momentum yang saling meniadakan.",
        pairs: [
          { left: "Meriam menembak", right: "Peluru maju, meriam menyentak mundur" },
          { left: "Balon dilepas", right: "Balon maju, udara menyembur mundur" },
          { left: "Perenang menolak dinding kolam", right: "Tubuh maju, dorongan ke dinding mengarah mundur" },
          { left: "Kembang api meledak di puncak", right: "Pecahan menyebar, jumlah momentumnya tetap" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Recoil Meriam dan Sistem Peredam",
        html: "Meriam tua bisa terlempar mundur beberapa meter setiap kali menembak, membahayakan awaknya dan mengacaukan bidikan. Solusinya bukan melawan kekekalan momentum (itu mustahil), melainkan mengelolanya. Meriam modern dipasangi sistem peredam recoil berupa pegas dan peredam hidrolik. Momentum mundur tetap muncul sama besar, tetapi sistem peredam memperpanjang waktu sentakan sehingga gayanya kecil dan terkendali. Sekali lagi, fisika impuls bekerja sama dengan kekekalan momentum.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya jelas. Untuk benda diam yang meledak menjadi dua bagian, momentum awal nol sehingga: <strong>m1.v1' + m2.v2' = 0</strong>, artinya <strong>m1.v1' = -m2.v2'</strong>. Kedua pecahan punya momentum sama besar tapi berlawanan arah. Secara umum, untuk berapa pun pecahan: <strong>Sigma p_sebelum = Sigma p_sesudah</strong>. Ledakan dan recoil hanyalah kekekalan momentum yang dibaca dari arah sebaliknya.",
      },
      {
        type: "takeaways",
        items: [
          "Ledakan tidak menciptakan momentum; total momentum tetap kekal.",
          "Benda diam yang meledak: m1.v1' = -m2.v2', pecahan berlawanan arah dengan momentum sama besar.",
          "Recoil senapan, meriam, dan balon adalah ledakan dua-benda yang sama prinsipnya.",
          "Energi bisa bertambah dari bahan peledak, tetapi momentum total tidak berubah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sebuah benda diam meledak jadi dua pecahan. Total momentum sesudahnya?",
            options: ["Lebih besar dari nol", "Tetap nol", "Negatif", "Tidak bisa ditentukan"],
            answer: 1,
            explain: "Momentum awal nol, maka jumlah momentum pecahan juga harus nol.",
          },
          {
            q: "Benda 6 kg diam meledak; pecahan 2 kg melesat 9 m/s. Momentum pecahan lainnya (4 kg)?",
            options: ["18 kg.m/s berlawanan arah", "9 kg.m/s searah", "0", "36 kg.m/s"],
            answer: 0,
            explain: "Momentum pecahan 2 kg = 18 kg.m/s, jadi pecahan 4 kg = 18 kg.m/s ke arah sebaliknya.",
          },
          {
            q: "Hubungan ledakan dengan tumbukan tak lenting sempurna adalah?",
            options: [
              "Sama persis",
              "Ledakan adalah kebalikannya: satu benda pecah jadi banyak",
              "Tidak berhubungan",
              "Ledakan melanggar kekekalan momentum",
            ],
            answer: 1,
            explain: "Tumbukan menempel menyatukan benda; ledakan memecah benda, keduanya momentum kekal.",
          },
          {
            q: "Pada ledakan, energi kinetik total biasanya?",
            options: [
              "Berkurang",
              "Bertambah karena energi dari bahan peledak",
              "Selalu nol",
              "Tidak berubah",
            ],
            answer: 1,
            explain: "Energi kimia bahan peledak berubah menjadi energi kinetik pecahan, sehingga EK bertambah.",
          },
          {
            q: "Sistem peredam recoil pada meriam bekerja dengan?",
            options: [
              "Menghapus momentum mundur",
              "Memperpanjang waktu sentakan sehingga gaya mengecil",
              "Menambah massa peluru",
              "Menghilangkan gravitasi",
            ],
            answer: 1,
            explain: "Momentum mundur tetap ada; peredam mengulur waktu agar gaya sentakan terkendali.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gaya-dorong-roket",
    levelId: "kekekalan-momentum",
    order: 3,
    title: "Gaya Dorong Roket",
    summary:
      "Roket raksasa terangkat ke langit tanpa berpegangan pada apa pun. Rahasianya bukan mendorong udara, melainkan terus-menerus 'meledak' ke belakang. Kita susuri dulu.",
    durationMin: 13,
    tags: ["fisika", "kekekalan momentum", "roket", "gaya dorong"],
    blocks: [
      {
        type: "paragraph",
        html: "Roket peluncur satelit beratnya ratusan ton, namun bisa terangkat tegak lurus ke langit. Ia tidak berpegangan pada apa pun dan tidak mendorong tanah. Yang ia lakukan hanya satu: menyemburkan gas panas ke bawah dengan kecepatan luar biasa, terus-menerus. Bagaimana semburan gas bisa mengangkat raksasa baja? Ayo berpetualang dulu sebelum menulis rumusnya.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Dorongan dari Semburan Gas",
        caption: "Setiap kilogram gas yang disembur ke belakang mendorong roket maju ke depan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tiup balon lalu lepas: ia melesat selama udara masih menyembur. Begitu udara habis, ia berhenti terdorong. Roket adalah balon yang jauh lebih bertenaga: ia membakar bahan bakar untuk menyemburkan gas dengan kecepatan ribuan meter per detik, dan ia melakukannya terus-menerus. Amati: dorongan roket bukan satu sentakan, melainkan aliran sentakan kecil yang tak henti.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tidak butuh udara untuk didorong",
        html: "Roket tidak mendorong udara; ia mendorong gas buangannya sendiri. Karena itu roket justru bekerja paling efisien di ruang hampa, tanpa hambatan udara. Gaya dorongnya murni hasil kekekalan momentum antara roket dan gas yang disemburkan.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Gaya Dorong Roket untuk Berbagai Kecepatan Semburan Gas",
        unit: "newton",
        source: "Laju semburan gas tetap 100 kg/s; gaya dorong = laju massa x kecepatan gas",
        note: "Dengan laju buang gas yang sama (100 kg/s), gaya dorong tumbuh sebanding dengan kecepatan semburan gas. Itu sebabnya mesin roket dirancang menyemburkan gas secepat mungkin.",
        data: [
          { label: "Gas 1000 m/s", value: 100000, color: "#c4b5fd" },
          { label: "Gas 2000 m/s", value: 200000, color: "#a78bfa" },
          { label: "Gas 3000 m/s", value: 300000, color: "#7c3aed" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mesin roket menyemburkan gas dengan laju 50 kg/s pada kecepatan 2000 m/s relatif terhadap roket. Berapa gaya dorong yang dihasilkan?",
        answer: 100000,
        tolerance: 1,
        suffix: " N",
        solution:
          "Gaya dorong = (laju massa gas) x (kecepatan gas) = 50 kg/s x 2000 m/s = <strong>100000 N</strong>. Setiap detik, momentum 100000 kg.m/s disemburkan ke belakang, dan roket mendapat dorongan sebesar itu ke depan.",
        hint: "Gaya dorong = laju buang massa dikali kecepatan semburan gas.",
      },
      {
        type: "calcExercise",
        prompt:
          "Roket bermassa 1000 kg mendapat gaya dorong 30000 N ke atas. Jika berat roket (gaya gravitasi) 10000 N, berapa percepatan roket ke atas? (gunakan gaya total dibagi massa)",
        answer: 20,
        tolerance: 0.1,
        suffix: " m/s^2",
        solution:
          "Gaya total ke atas = gaya dorong - berat = 30000 - 10000 = 20000 N. Percepatan = gaya total / massa = 20000 / 1000 = <strong>20 m/s^2</strong>. Gaya dorong harus mengalahkan berat dulu sebelum roket naik.",
        hint: "Kurangi gaya dorong dengan berat roket, lalu bagi dengan massa.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah roket dengan maknanya.",
        pairs: [
          { left: "Gaya dorong (thrust)", right: "Laju buang massa dikali kecepatan gas" },
          { left: "Kecepatan semburan gas", right: "Makin tinggi, makin besar dorongan per kg gas" },
          { left: "Roket bertingkat", right: "Membuang tangki kosong agar massa berkurang" },
          { left: "Kekekalan momentum", right: "Gas mundur, roket maju, total momentum tetap" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Roket Dibuat Bertingkat",
        html: "Roket pengangkut seperti Falcon dan Saturn V dibuat bertingkat, dan setiap tingkat dilepas setelah bahan bakarnya habis. Alasannya kekekalan momentum. Membawa tangki bahan bakar yang sudah kosong hanya menambah massa yang harus didorong, memboroskan gaya dorong. Dengan melepas tingkat yang sudah kosong, roket membuang massa mati sehingga sisa bahan bakar bisa mempercepat massa yang jauh lebih kecil. Hasilnya kecepatan akhir jauh lebih tinggi. Membuang beban adalah strategi cerdas, bukan pemborosan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Kini rumusnya bermakna. Gaya dorong roket adalah laju perubahan momentum gas yang disemburkan: <strong>F_dorong = v_gas . (Delta m / Delta t)</strong>, dengan v_gas kecepatan semburan gas dan Delta m / Delta t laju massa gas yang dibuang per detik. Karena momentum sistem (roket + gas) kekal, momentum gas yang mundur sama dengan momentum maju yang diterima roket setiap saat. Membuang gas lebih cepat atau lebih banyak per detik akan memperbesar dorongan.",
      },
      {
        type: "takeaways",
        items: [
          "Roket maju karena menyemburkan gas ke belakang, bukan mendorong udara.",
          "Gaya dorong = kecepatan semburan gas dikali laju buang massa (F = v_gas x Delta m / Delta t).",
          "Roket bekerja paling efisien di ruang hampa tanpa hambatan udara.",
          "Roket bertingkat membuang massa kosong agar kecepatan akhirnya jauh lebih tinggi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Gaya dorong roket berasal dari?",
            options: [
              "Mendorong udara di sekitarnya",
              "Menyemburkan gas ke belakang (kekekalan momentum)",
              "Gravitasi bumi",
              "Putaran mesin",
            ],
            answer: 1,
            explain: "Gas disembur ke belakang, roket mendapat momentum maju yang sama besar.",
          },
          {
            q: "Mesin membuang 40 kg/s gas pada 2500 m/s. Gaya dorongnya?",
            options: ["100000 N", "62,5 N", "16 N", "2540 N"],
            answer: 0,
            explain: "F = 40 x 2500 = 100000 N.",
          },
          {
            q: "Roket paling efisien bekerja di?",
            options: ["Atmosfer rapat", "Ruang hampa tanpa hambatan udara", "Bawah air", "Dalam tanah"],
            answer: 1,
            explain: "Tanpa udara tidak ada gesekan, dan roket memang tidak butuh udara untuk didorong.",
          },
          {
            q: "Agar gaya dorong lebih besar, mesin roket sebaiknya?",
            options: [
              "Menyemburkan gas lebih lambat",
              "Menyemburkan gas lebih cepat atau lebih banyak per detik",
              "Menambah massa roket",
              "Mematikan mesin",
            ],
            answer: 1,
            explain: "F = v_gas x Delta m / Delta t; menambah kecepatan atau laju massa gas memperbesar dorongan.",
          },
          {
            q: "Mengapa roket dibuat bertingkat?",
            options: [
              "Agar terlihat besar",
              "Untuk membuang massa tangki kosong sehingga kecepatan akhir lebih tinggi",
              "Agar lebih berat",
              "Untuk mendorong udara lebih banyak",
            ],
            answer: 1,
            explain: "Membuang massa mati membuat sisa bahan bakar mempercepat massa yang lebih kecil.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "ayunan-balistik",
    levelId: "kekekalan-momentum",
    order: 4,
    title: "Studi Kekekalan: Ayunan Balistik",
    summary:
      "Bagaimana mengukur kecepatan peluru yang terlalu cepat untuk dilihat mata? Dengan sebongkah kayu dan kekekalan momentum. Kita ikuti dulu kisahnya.",
    durationMin: 13,
    tags: ["fisika", "kekekalan momentum", "balistik", "tak lenting"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebelum ada alat ukur elektronik, para ilmuwan menghadapi teka-teki: bagaimana mengukur kecepatan peluru yang melesat ratusan meter per detik, terlalu cepat untuk dilihat? Jawabannya cerdik: tembakkan peluru ke balok kayu yang tergantung, lalu ukur seberapa tinggi balok terayun. Alat sederhana ini disebut ayunan balistik. Ayo berpetualang dulu memahami cara kerjanya sebelum menulis rumus.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Peluru, Balok, dan Ayunan",
        caption: "Peluru yang tertanam membawa balok terayun naik, menyimpan jejak kecepatannya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan balok kayu berat tergantung diam. Peluru kecil menembus dan tertanam di dalamnya. Sekejap setelah tertanam, balok plus peluru bergerak bersama dengan kecepatan tertentu, lalu terayun naik seperti ayunan. Makin cepat peluru, makin tinggi ayunannya. Amati: ketinggian ayunan adalah 'sidik jari' kecepatan peluru yang tak terlihat itu.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua tahap, dua hukum berbeda",
        html: "Ayunan balistik punya dua tahap. Tahap pertama, peluru menancap ke balok: ini tumbukan tak lenting, <strong>momentum kekal</strong> tetapi energi kinetik banyak hilang jadi panas. Tahap kedua, balok-peluru terayun naik: di sini <strong>energi mekanik kekal</strong>, energi kinetik berubah jadi energi potensial. Jangan tertukar memakai hukum yang salah di tahap yang salah.",
      },
      {
        type: "widget",
        widget: "SimulatorTumbukan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Momentum Sistem Peluru-Balok Sebelum dan Sesudah Menancap",
        unit: "kg.m/s",
        source: "Peluru 0,02 kg @ 400 m/s menancap di balok 1,98 kg diam, bergerak bersama 4 m/s",
        note: "Pada tahap tumbukan, momentum total kekal: 8 kg.m/s sebelum sama dengan 8 kg.m/s sesudah. Inilah kunci untuk menghitung balik kecepatan peluru.",
        data: [
          { label: "Peluru sebelum", value: 8, color: "#a78bfa" },
          { label: "Balok sebelum", value: 0, color: "#c4b5fd" },
          { label: "Total sesudah (gabungan)", value: 8, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Peluru 0,02 kg menancap di balok 1,98 kg yang diam, lalu keduanya bergerak bersama dengan kecepatan 4 m/s. Berapa kecepatan peluru sebelum menancap?",
        answer: 400,
        tolerance: 1,
        suffix: " m/s",
        solution:
          "Momentum kekal: m_peluru x v = (m_peluru + m_balok) x v_gabungan. Maka 0,02 x v = (0,02 + 1,98) x 4 = 2 x 4 = 8. Jadi v = 8 / 0,02 = <strong>400 m/s</strong>. Inilah cara mengukur kecepatan peluru tanpa melihatnya.",
        hint: "Pakai kekekalan momentum tahap tumbukan: m1.v1 = (m1+m2).v gabungan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada tumbukan di atas, energi kinetik sebelumnya 1600 J dan sesudah peluru menancap menjadi 16 J. Berapa energi kinetik yang hilang menjadi panas?",
        answer: 1584,
        tolerance: 1,
        suffix: " J",
        solution:
          "Energi hilang = EK sebelum - EK sesudah = 1600 - 16 = <strong>1584 J</strong>. Hampir seluruh energi kinetik peluru berubah menjadi panas dan kerusakan saat menancap. Momentum tetap kekal walau energi anjlok drastis.",
        hint: "Kurangkan energi kinetik sesudah dari energi kinetik sebelum.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tahap ayunan balistik dengan hukum yang berlaku.",
        pairs: [
          { left: "Peluru menancap ke balok", right: "Momentum kekal, energi kinetik hilang banyak" },
          { left: "Balok-peluru terayun naik", right: "Energi mekanik kekal, EK menjadi EP" },
          { left: "Menghitung kecepatan peluru", right: "Pakai kekekalan momentum tahap tumbukan" },
          { left: "Menghitung tinggi ayunan", right: "Pakai kekekalan energi tahap ayunan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ayunan Balistik dan Lahirnya Balistika Modern",
        html: "Pada abad ke-18, Benjamin Robins menggunakan ayunan balistik untuk pertama kalinya mengukur kecepatan peluru senapan secara ilmiah. Sebelumnya, kecepatan peluru hanya tebakan. Dengan menggantung balok berat dan mengukur ketinggian ayunannya, Robins bisa menghitung mundur kecepatan peluru memakai kekekalan momentum lalu kekekalan energi. Penemuan ini melahirkan ilmu balistika modern dan membuktikan bahwa hukum fisika sederhana bisa mengukur hal yang mustahil dilihat mata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya runtut. Tahap 1 (tumbukan tak lenting, momentum kekal): <strong>m.v = (m + M).V</strong>, sehingga kecepatan gabungan V = m.v / (m + M). Tahap 2 (ayunan naik, energi kekal): <strong>1/2 (m + M).V^2 = (m + M).g.h</strong>, sehingga V = akar(2.g.h). Gabungkan keduanya untuk mendapat kecepatan peluru: <strong>v = ((m + M) / m) . akar(2.g.h)</strong>. Dua hukum kekekalan, satu kecepatan tersembunyi terungkap.",
      },
      {
        type: "takeaways",
        items: [
          "Ayunan balistik mengukur kecepatan peluru lewat ketinggian ayunan balok.",
          "Tahap tumbukan: momentum kekal, m.v = (m+M).V; energi kinetik banyak hilang.",
          "Tahap ayunan: energi mekanik kekal, V = akar(2.g.h).",
          "Gabungannya: v = ((m+M)/m) x akar(2.g.h); jangan tukar hukum antar tahap.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada tahap peluru menancap ke balok, yang kekal adalah?",
            options: ["Energi kinetik", "Momentum", "Ketinggian", "Suhu"],
            answer: 1,
            explain: "Tumbukan tak lenting: momentum kekal, tetapi energi kinetik banyak hilang.",
          },
          {
            q: "Peluru 0,01 kg menancap di balok 0,99 kg, bergerak bersama 3 m/s. Kecepatan peluru semula?",
            options: ["300 m/s", "30 m/s", "3 m/s", "3000 m/s"],
            answer: 0,
            explain: "0,01 x v = 1 x 3 = 3, maka v = 300 m/s.",
          },
          {
            q: "Pada tahap balok terayun naik, yang kekal adalah?",
            options: ["Momentum", "Energi mekanik (EK menjadi EP)", "Massa peluru", "Gaya"],
            answer: 1,
            explain: "Setelah menyatu, ayunan naik mematuhi kekekalan energi mekanik.",
          },
          {
            q: "Mengapa energi kinetik banyak hilang saat peluru menancap?",
            options: [
              "Karena momentum hilang",
              "Karena berubah jadi panas dan kerusakan (tumbukan tak lenting)",
              "Karena peluru memantul",
              "Karena gravitasi",
            ],
            answer: 1,
            explain: "Tumbukan tak lenting sempurna mengubah sebagian besar EK menjadi panas dan deformasi.",
          },
          {
            q: "Kesalahan umum dalam menganalisis ayunan balistik adalah?",
            options: [
              "Memakai kekekalan momentum di tahap tumbukan",
              "Memakai kekekalan energi di tahap ayunan",
              "Memakai kekekalan energi di tahap tumbukan menancap",
              "Mengukur tinggi ayunan",
            ],
            answer: 2,
            explain: "Energi kinetik hilang saat menancap, jadi kekekalan energi tidak boleh dipakai di tahap itu.",
          },
        ],
      },
    ],
  },
];
