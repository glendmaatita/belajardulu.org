import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "kecepatan-lepas",
    levelId: "energi-orbit",
    order: 1,
    title: "Kecepatan Lepas",
    summary:
      "Seberapa cepat sebuah benda harus melaju agar bisa kabur dari tarikan Bumi selamanya? Kita renungkan dulu logikanya, baru rumus v = akar(2GM/R) lahir.",
    durationMin: 14,
    tags: ["fisika", "gravitasi", "kecepatan-lepas", "roket"],
    blocks: [
      {
        type: "paragraph",
        html: "Lempar bola ke atas, ia kembali jatuh. Lempar lebih kuat, ia naik lebih tinggi sebelum jatuh. Pertanyaannya: adakah laju tertentu yang membuat bola terus naik dan tidak pernah kembali? Ternyata ada, dan namanya kecepatan lepas. Untuk Bumi, angkanya sekitar 11,2 kilometer per detik. Sebelum menghafal rumus, ayo pahami dulu dari mana angka itu masuk akal.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Berapa Cepat untuk Kabur dari Bumi?",
        caption: "Kecepatan lepas adalah laju minimum untuk meninggalkan gravitasi selamanya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan gravitasi sebagai lembah yang dalam, dan benda sebagai bola di dasarnya. Untuk keluar dari lembah, bola butuh <strong>energi kinetik</strong> yang cukup mengalahkan kedalaman lembah, yaitu energi potensial gravitasinya. Makin dalam lembah (makin besar massa planet), makin cepat bola harus melaju untuk kabur. Kecepatan lepas hanyalah laju ketika energi gerak pas menutup energi yang mengikat.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kecepatan Lepas Berbagai Benda Langit",
        unit: "km/s",
        source: "data astronomi",
        note: "Makin besar massa dan makin padat sebuah benda langit, makin tinggi kecepatan lepasnya. Kabur dari Jupiter butuh laju lima kali lebih besar dibanding kabur dari Bumi.",
        data: [
          { label: "Bulan", value: 2.38, color: "#fbbf24" },
          { label: "Mars", value: 5.03, color: "#fb7185" },
          { label: "Bumi", value: 11.2, color: "#f472b6" },
          { label: "Jupiter", value: 59.5, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Laju orbit tepat di permukaan sebuah planet adalah 7,9 km/s. Kecepatan lepas sama dengan akar 2 dikali laju orbit itu. Berapa kira-kira kecepatan lepasnya?",
        answer: 11.2,
        tolerance: 0.3,
        suffix: " km/s",
        solution:
          "Kecepatan lepas v = akar(2GM/R), sedangkan laju orbit di permukaan v = akar(GM/R). Jadi kecepatan lepas = akar 2 dikali laju orbit = 1,414 x 7,9 = sekitar <strong>11,2 km/s</strong>. Inilah kecepatan lepas Bumi.",
        hint: "Kalikan 7,9 dengan akar 2 (sekitar 1,414).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap benda langit dengan kecepatan lepasnya.",
        pairs: [
          { left: "Bulan", right: "sekitar 2,4 km/s" },
          { left: "Mars", right: "sekitar 5,0 km/s" },
          { left: "Bumi", right: "sekitar 11,2 km/s" },
          { left: "Jupiter", right: "sekitar 59,5 km/s" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Bulan Tidak Punya Atmosfer",
        html: "Kecepatan lepas Bulan hanya sekitar 2,4 km/s, jauh lebih kecil daripada Bumi. Molekul gas yang bergerak akibat panas Matahari dengan mudah melampaui laju itu, lalu kabur ke angkasa. Itulah sebabnya Bulan nyaris tanpa atmosfer. Bumi, dengan kecepatan lepas 11,2 km/s, cukup kuat menahan sebagian besar molekul udara. Kecepatan lepas bukan sekadar urusan roket, ia ikut menentukan apakah sebuah dunia bisa menyimpan udara dan air.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan: dengan menyamakan energi kinetik dan energi potensial gravitasi, lahir <strong>v = &radic;(2 &middot; G &middot; M / R)</strong>. Di sini M massa planet dan R jari-jarinya. Perhatikan, rumus ini tidak mengandung massa benda yang kabur. Itu sebabnya kerikil dan roket butuh laju lepas yang sama. Rumusnya hanya merapikan gagasan 'energi gerak pas menutup energi pengikat'.",
      },
      {
        type: "takeaways",
        items: [
          "Kecepatan lepas adalah laju minimum untuk meninggalkan gravitasi suatu benda selamanya.",
          "Rumusnya v = akar(2GM/R), bergantung pada massa dan jari-jari planet, bukan massa benda yang kabur.",
          "Kecepatan lepas Bumi sekitar 11,2 km/s, yaitu akar 2 kali laju orbit di permukaan.",
          "Makin besar dan padat sebuah benda langit, makin tinggi kecepatan lepasnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus kecepatan lepas adalah?",
            options: ["v = akar(2GM/R)", "v = akar(GM/R)", "v = G M / R", "v = m g R"],
            answer: 0,
            explain: "Menyamakan energi kinetik dan energi potensial memberi v = akar(2GM/R).",
          },
          {
            q: "Berapa kira-kira kecepatan lepas Bumi?",
            options: ["1,2 km/s", "11,2 km/s", "112 km/s", "3,1 km/s"],
            answer: 1,
            explain: "Kecepatan lepas Bumi sekitar 11,2 km/s.",
          },
          {
            q: "Kecepatan lepas dibanding laju orbit di permukaan planet adalah?",
            options: ["Setengahnya", "Sama", "Akar 2 kali lebih besar", "2 kali lebih besar"],
            answer: 2,
            explain: "v lepas = akar 2 dikali v orbit, karena ada faktor 2 di dalam akarnya.",
          },
          {
            q: "Apakah kecepatan lepas bergantung pada massa benda yang ditembakkan?",
            options: [
              "Ya, makin berat makin besar",
              "Tidak, hanya bergantung massa dan jari-jari planet",
              "Ya, makin ringan makin besar",
              "Hanya untuk roket",
            ],
            answer: 1,
            explain: "Massa benda lenyap dari rumus, jadi kerikil dan roket butuh laju lepas yang sama.",
          },
          {
            q: "Benda langit manakah yang kecepatan lepasnya paling besar?",
            options: ["Bulan", "Mars", "Bumi", "Jupiter"],
            answer: 3,
            explain: "Jupiter paling masif, kecepatan lepasnya sekitar 59,5 km/s.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "energi-total-orbit",
    levelId: "energi-orbit",
    order: 2,
    title: "Energi Total Orbit",
    summary:
      "Mengapa menaikkan satelit ke orbit lebih tinggi justru membuatnya bergerak lebih lambat? Kita pahami dulu kekekalan energi orbit, baru rumus E = -GMm/2r muncul.",
    durationMin: 14,
    tags: ["fisika", "gravitasi", "energi", "orbit"],
    blocks: [
      {
        type: "paragraph",
        html: "Ada teka-teki yang membingungkan banyak insinyur pemula. Untuk menaikkan satelit ke orbit lebih tinggi, kamu harus menambah energi dengan menyalakan roket. Tetapi di orbit yang lebih tinggi, satelit justru bergerak lebih lambat. Kamu memberi energi, lalu satelit melambat? Jawabannya tersembunyi dalam cara energi gerak dan energi potensial saling berbagi dalam sebuah orbit. Sebelum bertemu rumusnya, ayo runut dulu logikanya.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Paradoks Satelit yang Melambat",
        caption: "Menambah energi menaikkan orbit, tetapi laju justru berkurang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Energi total orbit adalah jumlah <strong>energi kinetik</strong> (gerak) dan <strong>energi potensial</strong> (kedudukan). Saat menaikkan orbit, energi potensial naik banyak (mendekati nol dari bawah), sedangkan energi kinetik justru turun karena satelit melambat. Hasil bersihnya: total energi tetap naik (mendekati nol), walau lajunya berkurang. Roketmu menambah energi total, tetapi sebagian besar masuk ke 'menabung ketinggian', bukan menambah kecepatan.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Energi Total Orbit 1 kg terhadap Jari-jari Orbit",
        unit: "megajoule per kg",
        source: "perhitungan E = -GMm/2r untuk Bumi",
        note: "Energi total selalu negatif untuk orbit terikat, dan naik mendekati nol saat orbit makin tinggi. Untuk mencapai orbit lebih tinggi, satelit harus menambah energi (angka naik ke arah nol).",
        data: [
          { label: "1 R", value: -31.3, color: "#fb7185" },
          { label: "2 R", value: -15.6, color: "#f472b6" },
          { label: "4 R", value: -7.8, color: "#e879f9" },
          { label: "8 R", value: -3.9, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pada sebuah orbit, energi potensial gravitasi satelit adalah -60 megajoule. Energi total orbit sama dengan setengah dari energi potensial itu. Berapa energi total orbitnya?",
        answer: -30,
        tolerance: 0.5,
        suffix: " megajoule",
        solution:
          "Untuk orbit lingkaran, energi kinetik = +GMm/2r dan energi potensial = -GMm/r, sehingga energi total = -GMm/2r, yaitu setengah dari energi potensial: -60 dibagi 2 = <strong>-30 megajoule</strong>.",
        hint: "Energi total orbit lingkaran adalah setengah dari energi potensialnya.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan tentang energi orbit sebagai benar atau keliru.",
        buckets: ["Benar", "Keliru"],
        items: [
          { text: "Energi total orbit terikat selalu bernilai negatif", bucket: "Benar" },
          { text: "Menaikkan orbit menambah energi total tetapi mengurangi laju", bucket: "Benar" },
          { text: "Energi kinetik satelit bertambah saat orbit dinaikkan", bucket: "Keliru" },
          { text: "Energi total orbit lingkaran adalah setengah dari energi potensialnya", bucket: "Benar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Drag Atmosfer yang Mempercepat Satelit",
        html: "Satelit di orbit rendah perlahan tergerus gesekan sisa atmosfer. Anehnya, gesekan yang seharusnya memperlambat justru membuat satelit bergerak <strong>lebih cepat</strong>. Penjelasannya: gesekan menurunkan energi total, sehingga orbit menyusut, dan pada orbit lebih rendah laju orbit memang lebih tinggi. Satelit kehilangan energi tetapi malah melaju kencang sambil spiral turun, sampai akhirnya terbakar di atmosfer. Paradoks ini langsung lahir dari hubungan energi total dan jari-jari orbit.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan: energi total orbit lingkaran <strong>E = &minus; G &middot; M &middot; m / (2r)</strong>. Ini berasal dari menjumlahkan energi kinetik <strong>K = +G&middot;M&middot;m/(2r)</strong> dan energi potensial <strong>U = &minus;G&middot;M&middot;m/r</strong>. Perhatikan E = U/2 = &minus;K. Tanda negatif berarti orbit terikat, dan makin besar r, makin mendekati nol. Rumus ini menjelaskan semua paradoks tadi: energi naik, tetapi laju turun.",
      },
      {
        type: "takeaways",
        items: [
          "Energi total orbit adalah jumlah energi kinetik dan energi potensial.",
          "Rumusnya E = -GMm/2r, selalu negatif untuk orbit terikat dan naik mendekati nol di orbit tinggi.",
          "Menaikkan orbit menambah energi total tetapi justru menurunkan laju satelit.",
          "Energi total orbit lingkaran sama dengan setengah energi potensialnya, atau negatif energi kinetiknya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus energi total orbit lingkaran adalah?",
            options: ["E = -G M m / (2r)", "E = -G M m / r", "E = G M m / r kuadrat", "E = 1/2 m v kuadrat"],
            answer: 0,
            explain: "Energi total orbit lingkaran E = -GMm/(2r), setengah dari energi potensialnya.",
          },
          {
            q: "Saat satelit dinaikkan ke orbit lebih tinggi, energi totalnya?",
            options: ["Turun", "Naik mendekati nol", "Tetap", "Menjadi nol"],
            answer: 1,
            explain: "Energi total bertambah (mendekati nol) saat orbit dinaikkan.",
          },
          {
            q: "Mengapa laju satelit berkurang padahal energinya bertambah?",
            options: [
              "Karena massanya berkurang",
              "Karena tambahan energi banyak masuk ke energi potensial, bukan kinetik",
              "Karena gravitasi hilang",
              "Karena roket mati",
            ],
            answer: 1,
            explain: "Di orbit tinggi energi potensial jauh lebih besar; energi kinetik justru turun.",
          },
          {
            q: "Energi total orbit terikat selalu bertanda?",
            options: ["Positif", "Negatif", "Nol", "Berubah-ubah"],
            answer: 1,
            explain: "Orbit terikat memiliki energi total negatif; nol berarti tepat lepas.",
          },
          {
            q: "Mengapa gesekan atmosfer justru mempercepat satelit di orbit rendah?",
            options: [
              "Karena menambah energi",
              "Karena menurunkan energi sehingga orbit menyusut dan laju orbit naik",
              "Karena mendorong dari belakang",
              "Karena menambah massa",
            ],
            answer: 1,
            explain: "Energi turun membuat orbit lebih rendah, dan orbit rendah berlaju lebih tinggi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gravitasi-di-dalam-planet",
    levelId: "energi-orbit",
    order: 3,
    title: "Gravitasi di Dalam Planet",
    summary:
      "Berapa berat badanmu tepat di pusat Bumi? Kita renungkan dulu apa yang terjadi saat materi mengelilingimu dari segala arah, baru pola g di dalam planet muncul.",
    durationMin: 13,
    tags: ["fisika", "gravitasi", "planet", "interior"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu menggali terus menuju pusat Bumi. Di permukaan, seluruh massa Bumi menarikmu ke bawah. Tetapi saat kamu turun, sebagian massa kini berada di atasmu, menarik ke arah berlawanan. Tepat di pusat, massa menariknya merata ke segala arah dan saling meniadakan, sehingga beratmu nol. Gravitasi di dalam planet ternyata berlawanan dengan dugaan awam. Sebelum bertemu polanya, ayo pahami dulu logikanya.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Menggali Menuju Pusat Bumi",
        caption: "Di dalam planet, hanya massa di bawah kakimu yang menarikmu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ada hasil indah dari Newton: untuk benda di dalam bola, lapisan massa yang berada <strong>lebih luar</strong> dari posisimu saling meniadakan tarikannya, sehingga tidak berpengaruh. Hanya bola materi yang berada <strong>lebih dalam</strong> dari kakimu yang menarikmu. Makin dalam kamu turun, makin sedikit massa yang tersisa di bawah, sehingga gravitasi melemah. Pada planet berkerapatan seragam, gravitasi turun lurus dari nilai penuh di permukaan menjadi nol di pusat.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Percepatan Gravitasi di Dalam Planet Berkerapatan Seragam",
        unit: "m/s kuadrat",
        source: "model planet seragam, g sebanding r di dalam",
        note: "Pada model planet berkerapatan seragam, gravitasi nol di pusat lalu naik lurus menjadi penuh (9,8) di permukaan. Di luar permukaan barulah ia turun mengikuti kuadrat terbalik.",
        data: [
          { label: "Pusat (0 R)", value: 0, color: "#fbbf24" },
          { label: "0,25 R", value: 2.45, color: "#fb7185" },
          { label: "0,5 R", value: 4.9, color: "#e879f9" },
          { label: "0,75 R", value: 7.35, color: "#c084fc" },
          { label: "Permukaan (1 R)", value: 9.8, color: "#a855f7" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pada planet berkerapatan seragam, gravitasi di dalam sebanding lurus dengan jarak dari pusat. Jika di permukaan (jari-jari penuh) g = 9,8 m/s kuadrat, berapa g di kedalaman tempat jaraknya setengah jari-jari dari pusat?",
        answer: 4.9,
        tolerance: 0.1,
        suffix: " m/s kuadrat",
        solution:
          "Di dalam planet seragam, g sebanding lurus dengan r. Pada setengah jari-jari, g menjadi setengahnya: 9,8 x 0,5 = <strong>4,9 m/s kuadrat</strong>. Berbeda dengan di luar planet yang mengikuti kuadrat terbalik.",
        hint: "Di dalam planet seragam, kalikan g permukaan dengan pecahan jaraknya dari pusat.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan tentang gravitasi di dalam planet sebagai benar atau keliru.",
        buckets: ["Benar", "Keliru"],
        items: [
          { text: "Gravitasi di pusat planet bernilai nol", bucket: "Benar" },
          { text: "Lapisan massa di atas posisi kita saling meniadakan tarikannya", bucket: "Benar" },
          { text: "Makin dalam menuju pusat, gravitasi makin kuat tak terhingga", bucket: "Keliru" },
          { text: "Di luar permukaan, gravitasi mengikuti hukum kuadrat terbalik", bucket: "Benar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Gravitasi Bumi Sebenarnya Memuncak di Bawah Permukaan",
        html: "Bumi tidak berkerapatan seragam: intinya jauh lebih padat daripada mantelnya. Akibatnya, saat kita turun dari permukaan, gravitasi tidak langsung berkurang, malah sedikit <strong>naik</strong> hingga mencapai puncak sekitar 10,7 m/s kuadrat di batas inti-mantel, baru kemudian turun menuju nol di pusat. Model planet seragam memberi gambaran lurus yang rapi, tetapi Bumi sungguhan memperlihatkan bahwa sebaran massa di dalam ikut menentukan pola gravitasinya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan. Di <strong>dalam</strong> planet berkerapatan seragam, hanya massa di bawah kaki yang menarik, sehingga gravitasi <strong>g sebanding lurus dengan r</strong> (g = 0 di pusat, penuh di permukaan). Di <strong>luar</strong> planet, ia kembali ke <strong>g = G&middot;M/r&sup2;</strong> yang turun mengikuti kuadrat terbalik. Jadi gravitasi memuncak di permukaan model seragam: naik lurus dari dalam, lalu turun melengkung di luar.",
      },
      {
        type: "takeaways",
        items: [
          "Di dalam planet, hanya massa yang lebih dalam dari posisi kita yang menarik; lapisan luar saling meniadakan.",
          "Pada planet seragam, gravitasi nol di pusat dan naik lurus (g sebanding r) menjadi penuh di permukaan.",
          "Di luar planet, gravitasi turun mengikuti hukum kuadrat terbalik (g = GM/r kuadrat).",
          "Bumi sungguhan tidak seragam, sehingga gravitasi sedikit memuncak di bawah permukaan sebelum turun ke nol di pusat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Berapa percepatan gravitasi tepat di pusat planet?",
            options: ["Paling besar", "Nol", "Sama dengan di permukaan", "Tak terhingga"],
            answer: 1,
            explain: "Di pusat, massa menarik merata ke segala arah dan saling meniadakan, sehingga g nol.",
          },
          {
            q: "Di dalam planet berkerapatan seragam, gravitasi sebanding dengan?",
            options: ["1 dibagi r kuadrat", "r (lurus dengan jarak dari pusat)", "r kuadrat", "Tetap"],
            answer: 1,
            explain: "Di dalam planet seragam, g sebanding lurus dengan jarak r dari pusat.",
          },
          {
            q: "Lapisan massa yang lebih luar dari posisi kita di dalam planet?",
            options: [
              "Menarik kita ke luar",
              "Saling meniadakan, tidak berpengaruh",
              "Menarik kita ke pusat",
              "Menggandakan gravitasi",
            ],
            answer: 1,
            explain: "Tarikan dari kulit bola luar saling meniadakan sehingga nettonya nol.",
          },
          {
            q: "Pada planet seragam, g di setengah jari-jari dari pusat adalah?",
            options: ["9,8", "4,9", "2,45", "0"],
            answer: 1,
            explain: "g sebanding r, jadi setengah jari-jari memberi setengah nilai: 4,9 m/s kuadrat.",
          },
          {
            q: "Di luar permukaan planet, gravitasi mengikuti?",
            options: ["g sebanding r", "Hukum kuadrat terbalik g = GM/r kuadrat", "g tetap", "g nol"],
            answer: 1,
            explain: "Di luar planet, gravitasi turun mengikuti kuadrat terbalik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pengantar-lubang-hitam",
    levelId: "energi-orbit",
    order: 4,
    title: "Pengantar Lubang Hitam",
    summary:
      "Apa jadinya bila kecepatan lepas sebuah benda melampaui kecepatan cahaya? Kita renungkan dulu gagasan 'bintang gelap', baru jari-jari Schwarzschild muncul.",
    durationMin: 14,
    tags: ["fisika", "gravitasi", "lubang-hitam", "kecepatan-lepas"],
    blocks: [
      {
        type: "paragraph",
        html: "Sudah kita tahu kecepatan lepas membesar bila massa benda makin padat. Pada 1783, John Michell mengajukan pertanyaan berani: bagaimana jika sebuah benda begitu padat sampai kecepatan lepasnya melampaui kecepatan cahaya? Maka cahaya pun tak bisa kabur, dan benda itu akan tampak sepenuhnya gelap. Gagasan 'bintang gelap' itu kini kita kenal sebagai lubang hitam. Sebelum bertemu rumusnya, ayo telusuri dulu logikanya.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Saat Cahaya pun Tak Bisa Kabur",
        caption: "Lubang hitam adalah benda dengan kecepatan lepas melampaui kecepatan cahaya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ingat kecepatan lepas v = akar(2GM/R). Untuk massa M tetap, makin kecil jari-jari R (makin padat), makin besar kecepatan lepasnya. Mampatkan terus sebuah benda, dan pada suatu ukuran tertentu kecepatan lepasnya mencapai <strong>kecepatan cahaya</strong>, sekitar 300.000 km/s. Lewat batas itu, bahkan cahaya tak sanggup melarikan diri. Batas ukuran itulah <strong>jari-jari Schwarzschild</strong>, tepi tak terlihat yang kita sebut horizon peristiwa.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kecepatan Lepas Benda Makin Padat Menuju Kecepatan Cahaya",
        unit: "km/s",
        source: "data astrofisika",
        note: "Makin padat sebuah benda, makin tinggi kecepatan lepasnya. Pada lubang hitam, kecepatan lepas mencapai kecepatan cahaya (sekitar 300.000 km/s), sehingga cahaya pun tak bisa keluar.",
        data: [
          { label: "Bumi", value: 11.2, color: "#fbbf24" },
          { label: "Matahari", value: 618, color: "#fb7185" },
          { label: "Bintang neutron", value: 100000, color: "#e879f9" },
          { label: "Lubang hitam (cahaya)", value: 300000, color: "#7c3aed" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Jari-jari Schwarzschild dihitung dengan Rs = 2GM/c kuadrat. Untuk Matahari, 2GM = 2,65 x 10 pangkat 20 dan c kuadrat = 9 x 10 pangkat 16. Berapa Rs Matahari (dalam meter)?",
        answer: 2950,
        tolerance: 150,
        suffix: " meter",
        solution:
          "Rs = (2,65 x 10 pangkat 20) dibagi (9 x 10 pangkat 16) = sekitar <strong>2.950 meter</strong>, atau hampir 3 km. Jadi bila seluruh massa Matahari dimampatkan ke dalam bola berjari-jari 3 km, ia menjadi lubang hitam.",
        hint: "Bagi 2GM dengan c kuadrat; perhatikan selisih pangkat 10-nya.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah lubang hitam dengan maknanya.",
        pairs: [
          { left: "Jari-jari Schwarzschild", right: "Ukuran saat kecepatan lepas = kecepatan cahaya" },
          { left: "Horizon peristiwa", right: "Batas yang tak bisa dilewati cahaya untuk keluar" },
          { left: "Singularitas", right: "Titik pusat tempat materi termampatkan" },
          { left: "Rs = 2GM/c kuadrat", right: "Rumus jari-jari Schwarzschild" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menimbang Lubang Hitam di Pusat Galaksi Kita",
        html: "Di jantung Bima Sakti bersembunyi Sagittarius A*, sebuah lubang hitam supermasif. Para astronom tidak bisa melihatnya langsung, tetapi mereka melacak orbit bintang-bintang yang mengitarinya selama bertahun-tahun. Dengan menerapkan Hukum Kepler dan hukum gravitasi pada orbit bintang-bintang itu, mereka menghitung massanya: sekitar 4 juta kali massa Matahari, terjejal dalam ruang lebih kecil dari orbit Merkurius. Gravitasi memungkinkan kita menimbang sesuatu yang bahkan tak memancarkan cahaya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan. Tetapkan kecepatan lepas sama dengan kecepatan cahaya c pada v = &radic;(2GM/R), lalu selesaikan untuk R: lahir <strong>R&#8347; = 2 &middot; G &middot; M / c&sup2;</strong>, jari-jari Schwarzschild. Inilah ukuran horizon peristiwa, batas saat gravitasi begitu kuat sampai cahaya pun terperangkap. Rumus sederhana dari Newton ini memberi tebakan pertama yang mengejutkan dekat dengan hasil teori relativitas Einstein.",
      },
      {
        type: "takeaways",
        items: [
          "Lubang hitam adalah benda yang kecepatan lepasnya melampaui kecepatan cahaya.",
          "Memampatkan massa memperkecil R dan memperbesar kecepatan lepas hingga mencapai kecepatan cahaya.",
          "Jari-jari Schwarzschild Rs = 2GM/c kuadrat menandai horizon peristiwa.",
          "Massa lubang hitam yang tak terlihat pun bisa ditimbang dari orbit bintang di sekitarnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang mendefinisikan sebuah lubang hitam dari sisi kecepatan lepas?",
            options: [
              "Kecepatan lepasnya nol",
              "Kecepatan lepasnya melampaui kecepatan cahaya",
              "Kecepatan lepasnya sama dengan di Bumi",
              "Tidak punya kecepatan lepas",
            ],
            answer: 1,
            explain: "Pada lubang hitam, kecepatan lepas melampaui kecepatan cahaya sehingga cahaya pun terperangkap.",
          },
          {
            q: "Rumus jari-jari Schwarzschild adalah?",
            options: ["Rs = 2GM/c kuadrat", "Rs = GM/c", "Rs = 2GM/c", "Rs = GM/c kuadrat"],
            answer: 0,
            explain: "Menetapkan kecepatan lepas = c memberi Rs = 2GM/c kuadrat.",
          },
          {
            q: "Jari-jari Schwarzschild Matahari kira-kira?",
            options: ["3 km", "700.000 km", "300.000 km", "11 km"],
            answer: 0,
            explain: "Rs Matahari sekitar 2.950 meter, hampir 3 km.",
          },
          {
            q: "Batas tak terlihat di sekitar lubang hitam yang tak bisa dilewati cahaya disebut?",
            options: ["Singularitas", "Horizon peristiwa", "Fotosfer", "Korona"],
            answer: 1,
            explain: "Horizon peristiwa adalah batas pada jari-jari Schwarzschild.",
          },
          {
            q: "Bagaimana astronom menimbang lubang hitam Sagittarius A*?",
            options: [
              "Dengan memotretnya langsung",
              "Dari orbit bintang-bintang yang mengitarinya",
              "Dengan menimbang cahayanya",
              "Dengan mengukur suhunya",
            ],
            answer: 1,
            explain: "Orbit bintang di sekitarnya, lewat hukum Kepler dan gravitasi, mengungkap massanya.",
          },
        ],
      },
    ],
  },
];
