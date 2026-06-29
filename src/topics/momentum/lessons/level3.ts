import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "tumbukan-elastis-dan-tak-elastis",
    levelId: "tumbukan",
    order: 1,
    title: "Tumbukan Elastis dan Tak Elastis",
    summary:
      "Bola biliar memantul renyah, tapi plastisin yang dilempar menempel begitu saja. Momentum sama-sama kekal, lalu apa bedanya? Kisahnya dulu, rumusnya belakangan.",
    durationMin: 14,
    tags: ["fisika", "tumbukan", "energi kinetik", "elastis"],
    blocks: [
      {
        type: "paragraph",
        html: "Jatuhkan bola karet ke lantai, ia memantul tinggi. Jatuhkan bola plastisin, ia menempel diam di lantai. Dua-duanya menabrak lantai, dua-duanya mematuhi kekekalan momentum, tapi nasibnya berbeda. Ke mana 'gerak' bola plastisin pergi? Ayo berpetualang dulu menyelidiki perbedaan ini sebelum kita rumuskan.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Dua Jenis Tumbukan",
        caption: "Momentum selalu kekal, tetapi energi kinetik belum tentu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang dua kelereng, benturkan: terdengar 'tik' dan keduanya memantul lincah. Sekarang tekan dua bola plastisin sampai menempel: tidak ada pantulan, hanya 'plok' lembut. Rasakan bedanya. Pada plastisin, energi gerak berubah menjadi panas dan perubahan bentuk. Momentum tetap kekal, tapi energi kinetik berkurang. Inilah petunjuk pertama kita.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Yang kekal vs yang tidak",
        html: "Pada <strong>semua</strong> tumbukan tanpa gaya luar, momentum selalu kekal. Yang membedakan adalah energi kinetik: pada tumbukan <strong>elastis</strong> energi kinetik kekal, pada tumbukan <strong>tak elastis</strong> sebagian energi kinetik berubah menjadi panas, bunyi, atau deformasi.",
      },
      {
        type: "widget",
        widget: "SimulatorTumbukan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Energi Kinetik pada Tumbukan Tak Elastis Sempurna",
        unit: "joule",
        source: "Benda 2 kg @ 3 m/s menabrak benda 2 kg diam lalu menempel jadi 4 kg @ 1,5 m/s",
        note: "Momentum tetap (6 kg.m/s sebelum dan sesudah), tetapi energi kinetik turun dari 9 J menjadi 4,5 J. Selisih 4,5 J berubah jadi panas dan deformasi. Pada tumbukan elastis, kedua batang ini akan sama tinggi.",
        data: [
          { label: "EK sebelum", value: 9, color: "#a78bfa" },
          { label: "EK sesudah", value: 4.5, color: "#f87171" },
          { label: "Energi hilang (panas)", value: 4.5, color: "#fbbf24" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan peristiwa berikut sebagai tumbukan elastis atau tak elastis.",
        buckets: ["Mendekati elastis", "Tak elastis"],
        items: [
          { text: "Dua bola biliar beradu", bucket: "Mendekati elastis" },
          { text: "Bola karet memantul tinggi", bucket: "Mendekati elastis" },
          { text: "Plastisin menempel di dinding", bucket: "Tak elastis" },
          { text: "Dua mobil ringsek lalu bergerak bersama", bucket: "Tak elastis" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Benda 1 kg melaju 6 m/s menabrak benda 2 kg yang diam, lalu keduanya menempel. Berapa kecepatan gabungannya?",
        answer: 2,
        tolerance: 0.01,
        suffix: " m/s",
        solution:
          "Ini tumbukan tak elastis sempurna. Momentum = 1 x 6 = 6 kg.m/s. Massa gabungan 3 kg. v = 6 / 3 = <strong>2 m/s</strong>. Momentum kekal, tapi cek energi: sebelum 18 J, sesudah 6 J, sebagian hilang jadi panas.",
        hint: "Karena menempel, gunakan m1.v1 = (m1 + m2).v.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada tumbukan tak elastis sempurna di atas (sebelum 18 J), energi kinetik sesudahnya 6 J. Berapa energi kinetik yang hilang menjadi panas?",
        answer: 12,
        tolerance: 0.01,
        suffix: " J",
        solution:
          "Energi hilang = EK sebelum - EK sesudah = 18 J - 6 J = <strong>12 J</strong>. Energi ini tidak lenyap, ia berubah menjadi panas dan deformasi. Momentum tetap kekal walau energi kinetik berkurang.",
        hint: "Kurangkan energi kinetik sesudah dari energi kinetik sebelum.",
      },
      {
        type: "case",
        title: "Studi Kasus: Zona Remuk (Crumple Zone) Mobil",
        html: "Mobil modern sengaja dirancang agar bagian depannya ringsek saat tabrakan. Terdengar aneh, tapi ini menyelamatkan nyawa. Bagian yang remuk membuat tumbukan menjadi tak elastis: energi kinetik yang besar diserap untuk merusak logam, bukan diteruskan ke kabin penumpang. Sekaligus, proses meremuk memperpanjang waktu berhenti sehingga gaya pada penumpang mengecil. Mobil yang terlalu kaku justru memantulkan energi itu ke tubuh manusia. Kadang 'rusak' adalah desain yang cerdas.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Barulah sekarang rumusnya jernih. Di <strong>semua</strong> tumbukan: <strong>m1.v1 + m2.v2 = m1.v1' + m2.v2'</strong> (momentum kekal). Pada tumbukan <strong>elastis</strong>, energi kinetik juga kekal: <strong>1/2.m1.v1^2 + 1/2.m2.v2^2 = 1/2.m1.v1'^2 + 1/2.m2.v2'^2</strong>. Pada tumbukan <strong>tak elastis</strong>, energi kinetik berkurang; pada kasus <strong>tak elastis sempurna</strong> kedua benda menempel: <strong>m1.v1 + m2.v2 = (m1 + m2).v'</strong>. Tingkat 'kelentingan' diukur koefisien restitusi e: e = 1 elastis, e = 0 menempel.",
      },
      {
        type: "takeaways",
        items: [
          "Momentum kekal pada semua jenis tumbukan tanpa gaya luar.",
          "Tumbukan elastis: energi kinetik ikut kekal (contoh: bola biliar, kelereng).",
          "Tumbukan tak elastis: sebagian energi kinetik berubah jadi panas, bunyi, atau deformasi.",
          "Tak elastis sempurna: benda menempel dan bergerak bersama; koefisien restitusi e = 0.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Besaran yang selalu kekal di semua tumbukan adalah?",
            options: ["Energi kinetik", "Momentum", "Kecepatan", "Massa per benda"],
            answer: 1,
            explain: "Momentum selalu kekal tanpa gaya luar; energi kinetik belum tentu.",
          },
          {
            q: "Pada tumbukan elastis, yang ikut kekal selain momentum adalah?",
            options: ["Energi kinetik", "Suhu", "Bunyi", "Tidak ada"],
            answer: 0,
            explain: "Ciri tumbukan elastis: energi kinetik total juga kekal.",
          },
          {
            q: "Pada tumbukan tak elastis sempurna, kedua benda?",
            options: [
              "Memantul berlawanan arah",
              "Menempel dan bergerak bersama",
              "Berhenti total selalu",
              "Bertukar kecepatan",
            ],
            answer: 1,
            explain: "Tak elastis sempurna berarti benda menempel jadi satu setelah tumbukan.",
          },
          {
            q: "Ke mana energi kinetik yang 'hilang' pada tumbukan tak elastis?",
            options: [
              "Lenyap dari alam semesta",
              "Berubah jadi panas, bunyi, dan deformasi",
              "Menjadi momentum tambahan",
              "Menjadi massa baru",
            ],
            answer: 1,
            explain: "Energi tidak lenyap, hanya berubah bentuk menjadi panas, bunyi, dan perubahan bentuk.",
          },
          {
            q: "Koefisien restitusi e = 0 menandakan tumbukan?",
            options: ["Elastis sempurna", "Tak elastis sempurna (menempel)", "Tanpa momentum", "Tanpa gaya"],
            answer: 1,
            explain: "e = 0 berarti benda tidak memantul sama sekali, melainkan menempel.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tumbukan-lenting-sempurna",
    levelId: "tumbukan",
    order: 2,
    title: "Tumbukan Lenting Sempurna",
    summary:
      "Pada ayunan Newton, satu bola dilepas dan satu bola di ujung lain terlempar dengan kecepatan persis sama. Tidak ada yang terbuang. Kita selidiki dulu rahasianya.",
    durationMin: 13,
    tags: ["fisika", "tumbukan", "lenting sempurna", "energi kinetik"],
    blocks: [
      {
        type: "paragraph",
        html: "Lihat mainan ayunan Newton (Newton's cradle): lima bola logam tergantung berjajar. Angkat satu bola di ujung lalu lepaskan; bola di ujung seberang melenting keluar dengan kecepatan yang sama, sementara bola tengah diam. Seolah momentum dan energi mengalir mulus menembus barisan tanpa kehilangan apa pun. Bagaimana bisa begitu sempurna? Ayo berpetualang dulu sebelum menulis rumus.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Tumbukan yang Tak Membuang Energi",
        caption: "Pada tumbukan lenting sempurna, momentum dan energi kinetik sama-sama kekal.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Benturkan dua kelereng yang sama besar: yang menabrak berhenti, yang ditabrak melesat pergi dengan kecepatan hampir persis sama. Mereka seolah bertukar kecepatan. Sekarang dengarkan bunyinya yang nyaring dan amati pantulannya yang lincah. Hampir tidak ada energi yang terbuang jadi panas. Inilah tumbukan yang paling 'kenyal', tempat energi kinetik ikut terjaga.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua hukum kekal sekaligus",
        html: "Tumbukan lenting sempurna istimewa karena <strong>dua besaran kekal sekaligus</strong>: momentum dan energi kinetik. Untuk dua benda bermassa sama, hasilnya selalu menarik: mereka bertukar kecepatan. Untuk massa berbeda, kita butuh kedua persamaan kekal untuk menyelesaikannya.",
      },
      {
        type: "widget",
        widget: "SimulatorTumbukan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Energi Kinetik pada Tumbukan Lenting Sempurna",
        unit: "joule",
        source: "Bola 1 kg @ 4 m/s menabrak bola 1 kg diam; setelah tumbukan bola pertama diam, bola kedua 4 m/s",
        note: "Berbeda dengan tumbukan tak elastis, energi kinetik di sini tidak berkurang sama sekali: 8 J sebelum sama dengan 8 J sesudah. Momentum pun tetap 4 kg.m/s. Tidak ada panas yang lahir.",
        data: [
          { label: "EK sebelum", value: 8, color: "#a78bfa" },
          { label: "EK sesudah", value: 8, color: "#34d399" },
          { label: "Energi hilang", value: 0, color: "#c4b5fd" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Bola 2 kg melaju 6 m/s menabrak bola 2 kg yang diam secara lenting sempurna. Berapa kecepatan bola kedua setelah tumbukan?",
        answer: 6,
        tolerance: 0.01,
        suffix: " m/s",
        solution:
          "Untuk dua benda bermassa sama pada tumbukan lenting sempurna, keduanya bertukar kecepatan. Bola pertama berhenti dan bola kedua melaju <strong>6 m/s</strong>. Cek: momentum 12 kg.m/s tetap, energi kinetik 36 J tetap.",
        hint: "Massa sama pada tumbukan lenting sempurna: kedua benda bertukar kecepatan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Bola 2 kg melaju 3 m/s menabrak bola 1 kg diam secara lenting sempurna. Dengan rumus, kecepatan bola kedua v2' = 2.m1/(m1+m2) x v1. Berapa nilainya?",
        answer: 4,
        tolerance: 0.01,
        suffix: " m/s",
        solution:
          "v2' = 2.m1 / (m1 + m2) x v1 = 2 x 2 / (2 + 1) x 3 = 4/3 x 3 = <strong>4 m/s</strong>. Bola pertama menjadi v1' = (m1 - m2)/(m1+m2) x v1 = 1/3 x 3 = 1 m/s. Cek momentum: 2x1 + 1x4 = 6 = 2x3. Cocok.",
        hint: "Masukkan m1 = 2, m2 = 1, v1 = 3 ke rumus v2' = 2.m1/(m1+m2) x v1.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan kasus tumbukan lenting sempurna dengan hasilnya.",
        pairs: [
          { left: "Massa sama, satu diam", right: "Keduanya bertukar kecepatan" },
          { left: "Bola ringan menabrak bola sangat berat diam", right: "Bola ringan memantul balik hampir penuh" },
          { left: "Bola berat menabrak bola sangat ringan diam", right: "Bola ringan terlempar hampir dua kali kecepatan" },
          { left: "Ayunan Newton satu bola dilepas", right: "Satu bola di ujung lain terlempar dengan laju sama" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ayunan Newton dan Atom Gas",
        html: "Ayunan Newton bukan sekadar mainan meja. Ia memperagakan tumbukan yang nyaris lenting sempurna: momentum dan energi mengalir menembus barisan bola baja keras dengan sangat sedikit kehilangan. Prinsip yang sama dipakai untuk memodelkan tumbukan antar atom gas ideal, yang dianggap lenting sempurna sehingga gas tidak kehilangan energi kinetik total hanya karena partikelnya saling bertabrakan. Dari mainan meja hingga teori gas, satu konsep yang sama bekerja.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya bermakna. Tumbukan lenting sempurna mematuhi <strong>dua</strong> hukum kekal: momentum <strong>m1.v1 + m2.v2 = m1.v1' + m2.v2'</strong> dan energi kinetik <strong>1/2.m1.v1^2 + 1/2.m2.v2^2 = 1/2.m1.v1'^2 + 1/2.m2.v2'^2</strong>. Dari keduanya lahir sifat indah: <strong>kecepatan relatif berbalik tanpa berkurang</strong>, yaitu <strong>v1 - v2 = -(v1' - v2')</strong>, yang berarti koefisien restitusi <strong>e = 1</strong>. Untuk massa sama, hasilnya bertukar kecepatan.",
      },
      {
        type: "takeaways",
        items: [
          "Tumbukan lenting sempurna: momentum dan energi kinetik sama-sama kekal.",
          "Massa sama, salah satu diam: kedua benda bertukar kecepatan.",
          "Kecepatan relatif berbalik tanpa berkurang: v1 - v2 = -(v1' - v2'), e = 1.",
          "Contoh nyata: ayunan Newton dan model tumbukan atom gas ideal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Ciri khas tumbukan lenting sempurna adalah?",
            options: [
              "Hanya momentum kekal",
              "Momentum dan energi kinetik sama-sama kekal",
              "Energi kinetik berkurang",
              "Benda menempel",
            ],
            answer: 1,
            explain: "Pada lenting sempurna, momentum dan energi kinetik keduanya kekal.",
          },
          {
            q: "Dua bola bermassa sama, satu diam, bertumbukan lenting sempurna. Hasilnya?",
            options: ["Menempel", "Bertukar kecepatan", "Berhenti keduanya", "Memantul ke arah sama"],
            answer: 1,
            explain: "Massa sama pada lenting sempurna: kedua benda saling bertukar kecepatan.",
          },
          {
            q: "Koefisien restitusi pada tumbukan lenting sempurna adalah?",
            options: ["e = 0", "e = 0,5", "e = 1", "e tak hingga"],
            answer: 2,
            explain: "Lenting sempurna berarti e = 1, kecepatan relatif berbalik tanpa berkurang.",
          },
          {
            q: "Bola 3 kg @ 4 m/s menabrak bola 3 kg diam secara lenting sempurna. Kecepatan bola yang ditabrak?",
            options: ["0 m/s", "2 m/s", "4 m/s", "8 m/s"],
            answer: 2,
            explain: "Massa sama: bertukar kecepatan, jadi bola yang ditabrak melaju 4 m/s.",
          },
          {
            q: "Tumbukan antar atom gas ideal dimodelkan sebagai?",
            options: ["Tak elastis sempurna", "Lenting sempurna", "Selalu menempel", "Tanpa momentum"],
            answer: 1,
            explain: "Gas ideal dianggap bertumbukan lenting sempurna sehingga EK total tidak hilang.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tumbukan-tak-lenting-sama-sekali",
    levelId: "tumbukan",
    order: 3,
    title: "Tumbukan Tak Lenting Sama Sekali",
    summary:
      "Dua gerbong kereta bertabrakan lalu menyambung jadi satu rangkaian. Mereka tidak lagi bisa dipisah oleh tumbukan itu. Inilah tumbukan paling 'lengket'. Kita selami dulu.",
    durationMin: 13,
    tags: ["fisika", "tumbukan", "tak lenting", "energi"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat gerbong kereta digandeng, satu gerbong didorong pelan menabrak gerbong lain. Terdengar 'klak', kopling mengunci, dan keduanya kini menyatu bergerak sebagai satu rangkaian. Tidak ada pantulan, tidak ada pemisahan. Ke mana perginya sebagian energi geraknya? Dan mengapa kecepatan gabungannya bisa diprediksi dengan pasti? Ayo berpetualang dulu sebelum menulis rumus.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Tumbukan yang Menyatukan",
        caption: "Pada tumbukan tak lenting sempurna, benda menempel dan energi kinetik paling banyak hilang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lempar segumpal tanah liat ke gumpalan lain yang diam: keduanya menyatu dan bergerak bersama, pelan. Tidak ada 'tik' nyaring, hanya 'plok' lembut. Bandingkan dengan kelereng yang memantul lincah. Pada tanah liat, hampir semua energi gerak terpakai untuk mengubah bentuk dan memanaskan benda. Amati: makin lengket tumbukannya, makin banyak energi kinetik yang lenyap jadi panas.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Energi kinetik hilang paling banyak, tapi momentum tetap",
        html: "Tumbukan tak lenting sempurna membuang energi kinetik <strong>paling banyak</strong> di antara semua jenis tumbukan (untuk momentum awal yang sama). Namun momentum total tetap kekal. Karena benda menyatu, kita hanya butuh satu kecepatan gabungan, sehingga perhitungannya justru paling sederhana.",
      },
      {
        type: "widget",
        widget: "SimulatorTumbukan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Energi Kinetik: Gerbong 3 kg Menabrak Gerbong 1 kg lalu Menyatu",
        unit: "joule",
        source: "Gerbong 3 kg @ 4 m/s menabrak gerbong 1 kg diam, menyatu jadi 4 kg @ 3 m/s",
        note: "Momentum tetap 12 kg.m/s sebelum dan sesudah. Energi kinetik turun dari 24 J menjadi 18 J; selisih 6 J berubah jadi panas dan deformasi kopling.",
        data: [
          { label: "EK sebelum", value: 24, color: "#a78bfa" },
          { label: "EK sesudah", value: 18, color: "#f87171" },
          { label: "Energi hilang", value: 6, color: "#fbbf24" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Gerbong 4 kg melaju 5 m/s menabrak gerbong 6 kg yang diam, lalu menyatu. Berapa kecepatan gabungannya?",
        answer: 2,
        tolerance: 0.01,
        suffix: " m/s",
        solution:
          "Momentum = 4 x 5 + 6 x 0 = 20 kg.m/s. Massa gabungan = 10 kg. Kecepatan gabungan = 20 / 10 = <strong>2 m/s</strong>. Karena menyatu, cukup satu kecepatan untuk seluruh sistem.",
        hint: "m1.v1 = (m1 + m2).v gabungan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada tumbukan di atas, energi kinetik sebelum 50 J dan sesudah 20 J. Berapa energi kinetik yang hilang menjadi panas?",
        answer: 30,
        tolerance: 0.01,
        suffix: " J",
        solution:
          "EK sebelum = 1/2 x 4 x 5^2 = 50 J. EK sesudah = 1/2 x 10 x 2^2 = 20 J. Energi hilang = 50 - 20 = <strong>30 J</strong>. Hilang menjadi panas dan deformasi saat kopling mengunci. Momentum tetap 20 kg.m/s.",
        hint: "Kurangkan energi kinetik sesudah dari energi kinetik sebelum.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan peristiwa dengan ciri tumbukan tak lenting sempurna.",
        pairs: [
          { left: "Dua gerbong kereta tergandeng", right: "Menyatu, bergerak bersama, e = 0" },
          { left: "Peluru tertanam di balok", right: "Bergerak bersama, energi kinetik banyak hilang" },
          { left: "Dua bola plastisin menyatu", right: "Tidak memantul, energi jadi panas" },
          { left: "Lumpur menempel di sepatu yang menendang", right: "Massa bertambah, bergerak satu kesatuan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kopling Otomatis Gerbong Kereta",
        html: "Kopling otomatis pada gerbong kereta dirancang agar tumbukan saat penggandengan bersifat tak lenting: gerbong menyatu, tidak memantul. Bayangkan kalau gerbong memantul setiap kali digandeng, proses merangkai kereta akan jadi mimpi buruk. Dengan tumbukan tak lenting, kecepatan gabungan bisa dihitung pasti dari kekekalan momentum, dan kelebihan energi kinetik diserap peredam kopling sebagai panas, bukan dilempar balik. Tabrakan yang 'lengket' justru membuat operasi kereta aman dan terprediksi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya paling ringkas. Karena benda menyatu, kecepatan akhirnya satu: <strong>m1.v1 + m2.v2 = (m1 + m2).v'</strong>, sehingga <strong>v' = (m1.v1 + m2.v2) / (m1 + m2)</strong>. Koefisien restitusi <strong>e = 0</strong> karena benda tidak saling memisah. Energi kinetik yang hilang = EK sebelum - EK sesudah, dan inilah kehilangan terbesar yang mungkin terjadi sambil tetap mematuhi kekekalan momentum.",
      },
      {
        type: "takeaways",
        items: [
          "Tak lenting sempurna: benda menyatu dan bergerak bersama, e = 0.",
          "Kecepatan gabungan v' = (m1.v1 + m2.v2) / (m1 + m2).",
          "Momentum kekal, tetapi energi kinetik hilang paling banyak menjadi panas dan deformasi.",
          "Banyak dipakai praktis: kopling kereta, peluru tertanam, dan analisis tabrakan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada tumbukan tak lenting sempurna, kedua benda setelah tumbukan?",
            options: ["Memantul berlawanan", "Menyatu bergerak bersama", "Berhenti total", "Bertukar kecepatan"],
            answer: 1,
            explain: "Tak lenting sempurna berarti benda menempel dan bergerak sebagai satu.",
          },
          {
            q: "Benda 2 kg @ 9 m/s menyatu dengan benda 1 kg diam. Kecepatan gabungannya?",
            options: ["3 m/s", "6 m/s", "9 m/s", "4,5 m/s"],
            answer: 1,
            explain: "Momentum 18 kg.m/s, massa gabungan 3 kg, v = 18/3 = 6 m/s.",
          },
          {
            q: "Di antara jenis tumbukan, yang energi kinetiknya hilang paling banyak adalah?",
            options: ["Lenting sempurna", "Lenting sebagian", "Tak lenting sempurna", "Semua sama"],
            answer: 2,
            explain: "Tak lenting sempurna membuang energi kinetik terbesar untuk momentum awal yang sama.",
          },
          {
            q: "Koefisien restitusi tumbukan tak lenting sempurna adalah?",
            options: ["e = 1", "e = 0", "e = 0,5", "e = 2"],
            answer: 1,
            explain: "Benda tidak saling memisah, sehingga e = 0.",
          },
          {
            q: "Mengapa kopling kereta dibuat agar tumbukannya tak lenting?",
            options: [
              "Agar gerbong memantul",
              "Agar gerbong menyatu, tidak memantul, dan kecepatan terprediksi",
              "Agar energi kinetik kekal",
              "Agar momentum hilang",
            ],
            answer: 1,
            explain: "Tumbukan tak lenting membuat gerbong menyatu rapi dan kelebihan energi diserap sebagai panas.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tumbukan-lenting-sebagian",
    levelId: "tumbukan",
    order: 4,
    title: "Tumbukan Lenting Sebagian",
    summary:
      "Bola basket memantul, tapi tidak pernah setinggi titik jatuhnya. Inilah tumbukan dunia nyata: di antara sempurna dan lengket. Kita ukur dulu seberapa 'kenyal'.",
    durationMin: 13,
    tags: ["fisika", "tumbukan", "lenting sebagian", "pantulan"],
    blocks: [
      {
        type: "paragraph",
        html: "Pantulkan bola basket di lapangan. Ia memantul kembali, tapi tidak pernah setinggi tempat kamu menjatuhkannya. Pantul berikutnya lebih rendah lagi, dan lagi, sampai akhirnya diam. Tumbukan ini tidak sempurna seperti ayunan Newton, tapi juga tidak lengket seperti tanah liat. Ia ada di antaranya, dan inilah jenis tumbukan yang paling sering kita temui di dunia nyata. Ayo berpetualang dulu mengukurnya.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Pantulan yang Makin Rendah",
        caption: "Pada tumbukan lenting sebagian, sebagian energi kinetik hilang tiap pantulan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Jatuhkan bola dari ketinggian tertentu dan tandai setinggi apa ia memantul. Lakukan untuk bola yang berbeda: bola super memantul hampir penuh, bola tenis lumayan, bola kasti rendah. Setiap bola punya 'tingkat kenyal' sendiri yang khas dan konsisten. Amati: perbandingan tinggi pantul dengan tinggi jatuh selalu kira-kira tetap untuk bola yang sama. Angka inilah yang akan kita beri nama.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Di antara dua ekstrem",
        html: "Tumbukan lenting sebagian berada di antara lenting sempurna (e = 1, energi kinetik kekal) dan tak lenting sempurna (e = 0, menempel). Untuk lenting sebagian, <strong>0 < e < 1</strong>: benda memantul tetapi dengan kecepatan relatif yang berkurang. Momentum tetap kekal, energi kinetik berkurang sebagian.",
      },
      {
        type: "widget",
        widget: "SimulatorTumbukan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tinggi Pantulan Bola dengan Koefisien Restitusi e = 0,8",
        unit: "cm",
        source: "Bola dijatuhkan dari 100 cm; tiap pantulan tingginya menjadi e^2 = 0,64 kali sebelumnya",
        note: "Karena tinggi pantul = e^2 x tinggi sebelumnya, ketinggian menyusut konsisten: 100, 64, 41, 26 cm. Pola penurunan yang tetap inilah tanda koefisien restitusi yang konstan.",
        data: [
          { label: "Jatuh awal", value: 100, color: "#7c3aed" },
          { label: "Pantulan 1", value: 64, color: "#a78bfa" },
          { label: "Pantulan 2", value: 41, color: "#c4b5fd" },
          { label: "Pantulan 3", value: 26, color: "#ddd6fe" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bola menumbuk lantai dengan kecepatan 5 m/s lalu memantul ke atas dengan kecepatan 3 m/s. Berapa koefisien restitusi terhadap lantai?",
        answer: 0.6,
        tolerance: 0.01,
        solution:
          "Untuk pantulan terhadap lantai diam, e = kecepatan pantul / kecepatan datang = 3 / 5 = <strong>0,6</strong>. Nilai antara 0 dan 1 menandakan tumbukan lenting sebagian.",
        hint: "Untuk pantulan dari lantai, e = laju pantul dibagi laju datang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bola dijatuhkan dari ketinggian 1,25 m dan memantul setinggi 0,45 m. Berapa koefisien restitusinya? (gunakan e = akar(h_pantul / h_jatuh))",
        answer: 0.6,
        tolerance: 0.01,
        solution:
          "e = akar(h_pantul / h_jatuh) = akar(0,45 / 1,25) = akar(0,36) = <strong>0,6</strong>. Karena kecepatan sebanding dengan akar ketinggian, perbandingan tingginya adalah e kuadrat.",
        hint: "Tinggi pantul / tinggi jatuh = e^2, jadi e = akar dari perbandingan itu.",
      },
      {
        type: "case",
        title: "Studi Kasus: Standar Pantulan Bola Olahraga",
        html: "Federasi olahraga menetapkan standar pantulan bola secara ketat. Bola basket resmi, misalnya, harus memantul ke ketinggian tertentu saat dijatuhkan dari ketinggian baku, yang berarti koefisien restitusinya harus berada dalam rentang yang disepakati. Bola yang terlalu kenyal atau terlalu mati akan mengubah karakter permainan. Pabrik menguji setiap batch bola dengan menjatuhkannya dan mengukur tinggi pantul. Koefisien restitusi, yang lahir dari fisika tumbukan, menjadi alat kendali mutu yang nyata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang angka 'kenyal' itu punya nama dan rumus. <strong>Koefisien restitusi e = laju berpisah / laju mendekat = -(v1' - v2') / (v1 - v2)</strong>. Untuk pantulan dari lantai diam, ini menyederhana jadi <strong>e = v_pantul / v_datang</strong>. Karena laju sebanding akar ketinggian, <strong>e = akar(h_pantul / h_jatuh)</strong>, dan tinggi tiap pantulan menyusut faktor e kuadrat. Untuk lenting sebagian, 0 < e < 1.",
      },
      {
        type: "takeaways",
        items: [
          "Tumbukan lenting sebagian: 0 < e < 1, benda memantul tapi energi kinetik berkurang sebagian.",
          "Koefisien restitusi e = laju berpisah dibagi laju mendekat.",
          "Pantulan dari lantai: e = v_pantul / v_datang = akar(h_pantul / h_jatuh).",
          "Tinggi tiap pantulan menyusut faktor e kuadrat; ini jenis tumbukan paling umum di dunia nyata.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tumbukan lenting sebagian memiliki koefisien restitusi?",
            options: ["e = 0", "e = 1", "0 < e < 1", "e > 1"],
            answer: 2,
            explain: "Lenting sebagian berada di antara dua ekstrem: 0 < e < 1.",
          },
          {
            q: "Bola datang 8 m/s, memantul 4 m/s dari lantai. Koefisien restitusinya?",
            options: ["0,5", "2", "4", "0,25"],
            answer: 0,
            explain: "e = v_pantul / v_datang = 4/8 = 0,5.",
          },
          {
            q: "Bola jatuh dari 100 cm dan memantul 64 cm. Koefisien restitusinya?",
            options: ["0,64", "0,8", "0,4", "1,28"],
            answer: 1,
            explain: "e = akar(64/100) = akar(0,64) = 0,8.",
          },
          {
            q: "Pada tumbukan lenting sebagian, energi kinetik?",
            options: [
              "Kekal seperti lenting sempurna",
              "Berkurang sebagian (lebih sedikit dari tak lenting sempurna)",
              "Hilang seluruhnya",
              "Bertambah",
            ],
            answer: 1,
            explain: "Sebagian energi kinetik hilang, tetapi tidak sebanyak pada tumbukan menempel.",
          },
          {
            q: "Mengapa pabrik menguji pantulan bola olahraga?",
            options: [
              "Untuk mengukur massa bola",
              "Untuk memastikan koefisien restitusi sesuai standar permainan",
              "Untuk menghitung warna bola",
              "Untuk menambah momentum",
            ],
            answer: 1,
            explain: "Pantulan menentukan koefisien restitusi, yang harus berada di rentang standar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "koefisien-restitusi",
    levelId: "tumbukan",
    order: 5,
    title: "Koefisien Restitusi",
    summary:
      "Satu angka tunggal merangkum seberapa 'kenyal' sebuah tumbukan, dari yang memantul sempurna hingga yang menempel mati. Kita pahami dulu maknanya sebelum rumus.",
    durationMin: 13,
    tags: ["fisika", "tumbukan", "koefisien restitusi", "elastisitas"],
    blocks: [
      {
        type: "paragraph",
        html: "Kita sudah bertemu tiga jenis tumbukan: lenting sempurna yang memantul utuh, lenting sebagian yang memantul berkurang, dan tak lenting yang menempel. Bagaimana jika kita ingin satu angka saja yang merangkum seberapa kenyal tumbukan apa pun? Satu bilangan yang berbunyi 1 untuk yang paling kenyal dan 0 untuk yang paling mati? Angka itu ada, namanya koefisien restitusi. Ayo berpetualang dulu memahaminya.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Satu Angka untuk Semua Tumbukan",
        caption: "Koefisien restitusi membandingkan laju berpisah dengan laju mendekat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan mengukur seberapa cepat dua benda saling mendekat sebelum tumbukan, lalu seberapa cepat mereka saling menjauh sesudahnya. Pada tumbukan kenyal, laju berpisah hampir sama dengan laju mendekat. Pada tumbukan mati, mereka tidak berpisah sama sekali. Perbandingan laju berpisah terhadap laju mendekat inilah ukuran kekenyalan. Amati: satu rasio sederhana bisa membedakan semua jenis tumbukan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Satu skala dari 0 sampai 1",
        html: "Koefisien restitusi e adalah skala tunggal: <strong>e = 1</strong> lenting sempurna (energi kinetik kekal), <strong>0 < e < 1</strong> lenting sebagian, dan <strong>e = 0</strong> tak lenting sempurna (menempel). Ia merangkum sifat kekenyalan tanpa perlu menyebut jenis tumbukan satu per satu.",
      },
      {
        type: "widget",
        widget: "SimulatorTumbukan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan Koefisien Restitusi Berbagai Benda",
        unit: "nilai e (0 sampai 1)",
        source: "ilustrasi edukatif dari uji jatuh; nilai bergantung bahan dan permukaan",
        note: "Makin tinggi e, makin kenyal tumbukannya. Bola super hampir lenting sempurna, plastisin praktis tak lenting (e mendekati 0). Satu angka menempatkan setiap benda pada skala kekenyalan.",
        data: [
          { label: "Bola super (karet)", value: 0.9, color: "#34d399" },
          { label: "Bola tenis", value: 0.7, color: "#a78bfa" },
          { label: "Bola kasti", value: 0.5, color: "#fbbf24" },
          { label: "Plastisin", value: 0.05, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dua benda bergerak searah: benda 1 dengan 6 m/s dan benda 2 dengan 2 m/s. Setelah tumbukan, benda 1 jadi 3 m/s dan benda 2 jadi 5 m/s. Berapa koefisien restitusinya?",
        answer: 0.5,
        tolerance: 0.01,
        solution:
          "e = (v2' - v1') / (v1 - v2) = (5 - 3) / (6 - 2) = 2 / 4 = <strong>0,5</strong>. Laju mendekat 4 m/s menjadi laju berpisah 2 m/s, jadi tumbukan lenting sebagian.",
        hint: "e = laju berpisah (v2' - v1') dibagi laju mendekat (v1 - v2).",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bola dengan koefisien restitusi e = 0,8 dijatuhkan dari ketinggian 2 m. Berapa tinggi pantulan pertamanya? (gunakan h' = e^2 x h)",
        answer: 1.28,
        tolerance: 0.01,
        suffix: " m",
        solution:
          "h' = e^2 x h = 0,8^2 x 2 = 0,64 x 2 = <strong>1,28 m</strong>. Karena tinggi sebanding dengan kuadrat kecepatan dan kecepatan berkurang faktor e, tingginya berkurang faktor e kuadrat.",
        hint: "Tinggi pantul = e kuadrat dikali tinggi jatuh.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan nilai koefisien restitusi berikut sesuai jenis tumbukannya.",
        buckets: ["Lenting sempurna (e = 1)", "Lenting sebagian (0 < e < 1)", "Tak lenting sempurna (e = 0)"],
        items: [
          { text: "Ayunan Newton ideal", bucket: "Lenting sempurna (e = 1)" },
          { text: "Atom gas ideal bertumbukan", bucket: "Lenting sempurna (e = 1)" },
          { text: "Bola basket memantul di lapangan", bucket: "Lenting sebagian (0 < e < 1)" },
          { text: "Bola tenis memantul rendah", bucket: "Lenting sebagian (0 < e < 1)" },
          { text: "Tanah liat menempel ke dinding", bucket: "Tak lenting sempurna (e = 0)" },
          { text: "Dua gerbong kereta tergandeng", bucket: "Tak lenting sempurna (e = 0)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Uji Jatuh untuk Kendali Mutu",
        html: "Banyak industri memakai koefisien restitusi sebagai alat ukur. Pabrik bola menjatuhkan produk dari ketinggian baku dan mengukur tinggi pantul untuk memastikan e sesuai spesifikasi. Insinyur material menguji kekenyalan logam dan polimer dengan cara serupa. Bahkan perancang lantai olahraga mengatur permukaan agar koefisien restitusinya pas, tidak terlalu memantul hingga melelahkan, tidak terlalu mati hingga melukai sendi. Satu angka sederhana, lahir dari fisika tumbukan, menjadi standar mutu di banyak bidang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Kini definisinya jelas. <strong>Koefisien restitusi e = laju berpisah / laju mendekat = (v2' - v1') / (v1 - v2)</strong>, sebuah bilangan tak bersatuan antara 0 dan 1. Nilainya merangkum jenis tumbukan: <strong>e = 1</strong> lenting sempurna, <strong>0 < e < 1</strong> lenting sebagian, <strong>e = 0</strong> tak lenting sempurna. Untuk pantulan dari lantai, <strong>e = v_pantul / v_datang = akar(h_pantul / h_jatuh)</strong>, dan tinggi pantul = e kuadrat dikali tinggi jatuh.",
      },
      {
        type: "takeaways",
        items: [
          "Koefisien restitusi e = (v2' - v1') / (v1 - v2), tak bersatuan, antara 0 dan 1.",
          "e = 1 lenting sempurna, 0 < e < 1 lenting sebagian, e = 0 tak lenting sempurna.",
          "Pantulan dari lantai: e = v_pantul / v_datang = akar(h_pantul / h_jatuh).",
          "Dipakai sebagai standar mutu bola, material, dan lantai olahraga.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Koefisien restitusi didefinisikan sebagai?",
            options: [
              "Laju mendekat dibagi laju berpisah",
              "Laju berpisah dibagi laju mendekat",
              "Momentum sesudah dibagi sebelum",
              "Energi sesudah dibagi sebelum",
            ],
            answer: 1,
            explain: "e = laju berpisah (v2' - v1') dibagi laju mendekat (v1 - v2).",
          },
          {
            q: "Nilai koefisien restitusi untuk tumbukan menempel adalah?",
            options: ["e = 1", "e = 0", "e = 0,5", "e = 2"],
            answer: 1,
            explain: "Benda menempel tidak saling berpisah, sehingga e = 0.",
          },
          {
            q: "Laju mendekat 10 m/s, laju berpisah 7 m/s. Koefisien restitusinya?",
            options: ["0,7", "1,4", "3", "0,3"],
            answer: 0,
            explain: "e = 7/10 = 0,7.",
          },
          {
            q: "Bola e = 0,5 dijatuhkan dari 4 m. Tinggi pantulan pertamanya?",
            options: ["2 m", "1 m", "0,5 m", "4 m"],
            answer: 1,
            explain: "h' = e^2 x h = 0,25 x 4 = 1 m.",
          },
          {
            q: "Koefisien restitusi adalah besaran yang?",
            options: [
              "Bersatuan m/s",
              "Tak bersatuan, antara 0 dan 1",
              "Bersatuan joule",
              "Selalu lebih dari 1",
            ],
            answer: 1,
            explain: "e adalah rasio dua kecepatan, jadi tak bersatuan, dan nilainya 0 sampai 1.",
          },
        ],
      },
    ],
  },
];
