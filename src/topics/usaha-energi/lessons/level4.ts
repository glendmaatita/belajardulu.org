import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "daya-dan-kecepatan",
    levelId: "efisiensi-konversi",
    order: 1,
    title: "Daya dan Kecepatan",
    summary:
      "Mobil yang sama melaju makin cepat butuh mesin yang mengeluarkan daya makin besar. Daya, gaya, dan laju ternyata satu keluarga.",
    durationMin: 12,
    tags: ["fisika", "daya", "kecepatan", "gaya"],
    blocks: [
      {
        type: "paragraph",
        html: "Sepeda motor yang melaju pelan terasa santai, tetapi untuk melaju kencang mesinnya harus bekerja jauh lebih keras tiap detik. Saat sebuah gaya mendorong benda yang sedang bergerak, daya yang dikeluarkan bergantung pada gaya <strong>dan</strong> kecepatannya. Makin cepat benda bergerak melawan gaya yang sama, makin besar daya yang dibutuhkan. Sebelum rumus, ayo rasakan dulu kaitan antara gaya, laju, dan daya.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Daya, Gaya, dan Laju",
        caption:
          "Daya bisa dinyatakan sebagai gaya dikali kecepatan saat gaya mendorong benda yang bergerak.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Kayuh sepeda di jalan datar dengan santai, lalu coba ngebut. Untuk melawan hambatan udara dan gesekan yang kira-kira tetap, saat ngebut kamu harus mengayuh jauh lebih kuat tiap detik: dayamu melonjak. Itu sebabnya kamu cepat lelah saat ngebut, padahal jaraknya belum jauh. Daya naik karena kecepatannya naik, bukan hanya karena gayanya.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Daya untuk Melawan Gaya Tetap 200 N pada Berbagai Laju",
        unit: "watt",
        source: "ilustrasi edukatif",
        note: "Gaya tetap 200 N. Daya naik lurus terhadap kecepatan: tiap tambahan 2 m/s menambah 400 W. Inilah hubungan P = F x v.",
        data: [
          { label: "2 m/s", value: 400, color: "#f472b6" },
          { label: "4 m/s", value: 800, color: "#ec4899" },
          { label: "6 m/s", value: 1200, color: "#db2777" },
          { label: "8 m/s", value: 1600, color: "#be185d" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mobil memberi gaya dorong 500 N saat melaju tetap 20 m/s. Berapa daya yang dikeluarkan mesinnya?",
        answer: 10000,
        tolerance: 0.1,
        suffix: " W",
        solution:
          "P = F x v = 500 N x 20 m/s = <strong>10000 watt</strong> (10 kilowatt).",
        hint: "Kalikan gaya dengan kecepatan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mesin berdaya 1200 W menggerakkan ban berjalan dengan gaya 300 N. Berapa kecepatan ban berjalan itu?",
        answer: 4,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Dari P = F x v, maka v = P / F = 1200 W / 300 N = <strong>4 m/s</strong>.",
        hint: "Bagi daya dengan gaya untuk mendapat kecepatan.",
      },
      {
        type: "matchExercise",
        prompt:
          "Dengan gaya dorong tetap 100 N, pasangkan kecepatan dengan daya yang dikeluarkan.",
        pairs: [
          { left: "2 m/s", right: "200 W" },
          { left: "5 m/s", right: "500 W" },
          { left: "8 m/s", right: "800 W" },
          { left: "10 m/s", right: "1000 W" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Mengejar Laju Tinggi Boros",
        html: "Pada kecepatan tinggi, hambatan udara pada mobil membesar tajam, sehingga mesin harus memberi gaya dorong besar untuk mengimbanginya. Karena <strong>daya sama dengan gaya dikali kecepatan</strong>, daya yang dibutuhkan melonjak: tidak hanya gayanya yang naik, tetapi juga dikalikan laju yang tinggi. Itulah mengapa menambah kecepatan dari 80 ke 120 km/jam membakar bahan bakar jauh lebih boros daripada perkiraan kita. Berkendara santai jauh lebih hemat karena daya yang dibutuhkan kecil.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya. Saat gaya konstan F mendorong benda yang bergerak dengan kecepatan v searah gaya, daya yang dikeluarkan: P = F x v. Ini selaras dengan P = W / t, karena W = F x s dan s / t = v. Daya naik bila gayanya besar, dan juga bila kecepatannya tinggi. Satuannya tetap watt.",
      },
      {
        type: "takeaways",
        items: [
          "Daya bisa dinyatakan sebagai gaya dikali kecepatan: P = F x v.",
          "Rumus ini selaras dengan P = W / t karena v = s / t.",
          "Daya naik bila gaya besar atau kecepatan tinggi.",
          "Melaju cepat melawan hambatan butuh daya jauh lebih besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Daya saat gaya mendorong benda bergerak dapat ditulis?",
            options: ["P = F / v", "P = F x v", "P = v / F", "P = F + v"],
            answer: 1,
            explain: "P = F x v saat gaya searah kecepatan.",
          },
          {
            q: "Gaya 400 N pada laju 5 m/s. Dayanya?",
            options: ["80 W", "2000 W", "405 W", "0,0125 W"],
            answer: 1,
            explain: "P = 400 x 5 = 2000 W.",
          },
          {
            q: "Pada gaya tetap, jika kecepatan digandakan, daya menjadi?",
            options: ["Setengah", "Tetap", "Dua kali", "Empat kali"],
            answer: 2,
            explain: "P = F x v, jadi daya berbanding lurus dengan kecepatan.",
          },
          {
            q: "Mesin 900 W mendorong dengan gaya 150 N. Kecepatannya?",
            options: ["6 m/s", "1050 m/s", "0,17 m/s", "750 m/s"],
            answer: 0,
            explain: "v = P / F = 900 / 150 = 6 m/s.",
          },
          {
            q: "Mengapa melaju sangat cepat sangat boros bahan bakar?",
            options: [
              "Massa bertambah",
              "Daya = gaya besar dikali laju tinggi",
              "Gravitasi menguat",
              "Mesin mengecil",
            ],
            answer: 1,
            explain: "Hambatan besar dikali laju tinggi membuat daya melonjak.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "efisiensi",
    levelId: "efisiensi-konversi",
    order: 2,
    title: "Efisiensi Mesin",
    summary:
      "Tidak ada mesin yang sempurna; selalu ada energi yang terbuang jadi panas. Efisiensi mengukur seberapa banyak energi benar-benar berguna.",
    durationMin: 13,
    tags: ["fisika", "efisiensi", "energi", "daya"],
    blocks: [
      {
        type: "paragraph",
        html: "Pegang bola lampu pijar yang menyala beberapa menit, lalu tarik tanganmu cepat-cepat: panas. Padahal tugas lampu adalah menerangi, bukan memanaskan. Sebagian besar energi listriknya justru terbuang menjadi panas. Sebelum menghitung, ayo pahami dulu mengapa tidak ada mesin yang mengubah seluruh energi masukannya menjadi keluaran yang berguna.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Ke Mana Energi yang Terbuang?",
        caption:
          "Setiap mesin mengubah energi masukan menjadi keluaran berguna ditambah energi yang terbuang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bandingkan lampu pijar lama dengan lampu LED untuk terang yang sama. Pegang keduanya: lampu pijar jauh lebih panas. Panas itu adalah energi listrik yang terbuang, bukan menjadi cahaya. LED terasa lebih dingin karena lebih banyak energinya benar-benar menjadi cahaya. Mana yang lebih 'pintar' memakai energi?",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Energi tidak hilang, hanya 'terbuang'",
        html: "Saat kita bilang energi 'terbuang', energinya tidak lenyap. Ia berubah menjadi bentuk yang tidak kita inginkan, biasanya panas dan suara. Efisiensi mengukur berapa bagian energi masukan yang menjadi keluaran yang kita inginkan.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Nasib 100 Joule Energi Listrik pada Lampu Pijar",
        unit: "joule",
        source: "ilustrasi edukatif",
        note: "Sekitar 10 joule menjadi cahaya berguna; sisanya 90 joule terbuang sebagai panas. Efisiensinya kira-kira 10 persen.",
        data: [
          { label: "Cahaya berguna", value: 10, color: "#facc15" },
          { label: "Panas terbuang", value: 90, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mesin menerima energi masukan 500 J dan menghasilkan keluaran berguna 150 J. Berapa efisiensinya dalam persen?",
        answer: 30,
        tolerance: 0.1,
        suffix: " %",
        solution:
          "Efisiensi = (energi keluaran berguna / energi masukan) x 100% = (150 / 500) x 100% = <strong>30 persen</strong>.",
        hint: "Bagi keluaran berguna dengan masukan, lalu kali 100 persen.",
      },
      {
        type: "calcExercise",
        prompt:
          "Lampu LED memakai 20 J energi listrik dan menghasilkan 9 J cahaya. Berapa efisiensinya dalam persen?",
        answer: 45,
        tolerance: 0.1,
        suffix: " %",
        solution:
          "Efisiensi = (9 / 20) x 100% = <strong>45 persen</strong>, jauh lebih tinggi daripada lampu pijar.",
        hint: "Bagi energi cahaya dengan energi listrik, kali 100 persen.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan keluaran energi tiap alat sebagai berguna atau terbuang sesuai tujuan alatnya.",
        buckets: ["Keluaran berguna", "Energi terbuang"],
        items: [
          { text: "Cahaya dari bola lampu", bucket: "Keluaran berguna" },
          { text: "Panas dari bola lampu", bucket: "Energi terbuang" },
          { text: "Gerak dari mesin mobil", bucket: "Keluaran berguna" },
          { text: "Panas knalpot mesin mobil", bucket: "Energi terbuang" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mesin Mobil yang 'Boros'",
        html: "Mesin mobil bensin biasa hanya mengubah sekitar 25 sampai 30 persen energi dari bahan bakar menjadi gerak. Sisanya, lebih dari dua pertiga, terbuang sebagai panas lewat knalpot dan radiator. Itulah sebabnya kap mesin dan knalpot menjadi sangat panas. Para insinyur terus berlomba menaikkan efisiensi, karena tiap persen tambahan berarti penghematan bahan bakar yang besar dan emisi yang lebih sedikit.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya. <strong>Efisiensi</strong> adalah perbandingan energi keluaran yang berguna terhadap energi masukan: efisiensi = (energi keluaran berguna / energi masukan) x 100%. Nilainya selalu di bawah 100 persen, sebab selalu ada energi yang terbuang, biasanya menjadi panas. Mesin yang baik adalah yang membuang paling sedikit energi.",
      },
      {
        type: "takeaways",
        items: [
          "Efisiensi = (energi keluaran berguna / energi masukan) x 100%.",
          "Tidak ada mesin nyata yang efisiensinya 100 persen.",
          "Energi yang terbuang tidak lenyap, umumnya berubah menjadi panas.",
          "Alat yang lebih efisien menghasilkan keluaran berguna lebih banyak untuk masukan yang sama.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Efisiensi membandingkan keluaran berguna dengan?",
            options: ["Waktu kerja", "Energi masukan", "Massa mesin", "Suhu ruang"],
            answer: 1,
            explain: "Efisiensi = keluaran berguna dibagi masukan.",
          },
          {
            q: "Mesin masukan 200 J, keluaran berguna 50 J. Efisiensinya?",
            options: ["25 %", "50 %", "75 %", "4 %"],
            answer: 0,
            explain: "(50 / 200) x 100% = 25%.",
          },
          {
            q: "Mengapa efisiensi mesin nyata selalu di bawah 100 persen?",
            options: [
              "Karena energi diciptakan",
              "Karena selalu ada energi terbuang jadi panas",
              "Karena rumus salah",
              "Karena mesin terlalu cepat",
            ],
            answer: 1,
            explain: "Selalu ada energi yang terbuang, umumnya panas.",
          },
          {
            q: "Ke mana umumnya energi terbuang pada mesin?",
            options: [
              "Menjadi cahaya bintang",
              "Menjadi panas dan suara",
              "Menjadi massa",
              "Menghilang total",
            ],
            answer: 1,
            explain: "Energi terbuang umumnya menjadi panas dan suara.",
          },
          {
            q: "Lampu A: 12 J cahaya dari 60 J listrik. Efisiensinya?",
            options: ["20 %", "12 %", "60 %", "48 %"],
            answer: 0,
            explain: "(12 / 60) x 100% = 20%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "konversi-bentuk-energi",
    levelId: "efisiensi-konversi",
    order: 3,
    title: "Konversi Bentuk Energi",
    summary:
      "Energi air terjun jadi listrik, listrik jadi cahaya, cahaya jadi panas. Energi berpindah rupa lewat rantai panjang tanpa pernah hilang.",
    durationMin: 13,
    tags: ["fisika", "konversi energi", "bentuk energi", "rantai energi"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat kamu menyalakan senter, energi kimia baterai berubah menjadi energi listrik, lalu menjadi cahaya dan sedikit panas. Energi jarang dipakai dalam satu wujud saja; ia mengalir lewat rantai perubahan dari satu bentuk ke bentuk lain. Sepanjang rantai itu energi tidak pernah hilang, hanya berganti rupa. Sebelum rumus, ayo telusuri dulu bagaimana satu bentuk energi menjelma menjadi bentuk lain.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Rantai Perubahan Bentuk Energi",
        caption:
          "Energi mengalir dari satu bentuk ke bentuk lain lewat rantai konversi pada alat sehari-hari.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Telusuri perjalanan energi saat kamu mengisi daya ponsel lalu memutar video. Listrik dari stopkontak menjadi energi kimia di baterai, lalu kembali menjadi listrik, lalu menjadi cahaya layar, suara dari speaker, dan panas yang membuat ponsel hangat. Coba sebut rantai energi pada alat lain di rumahmu, dan tebak di mana energinya 'bocor' menjadi panas.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiap perubahan menyisakan panas",
        html: "Setiap kali energi berubah bentuk, sebagian kecil berubah menjadi panas yang tidak diinginkan. Karena itu rantai konversi yang panjang cenderung lebih banyak 'membocorkan' energi. Tetapi jumlah seluruh energi, termasuk panas, tetap sama dengan energi awal. Tidak ada yang lenyap, hanya tersebar.",
      },
      {
        type: "matchExercise",
        prompt:
          "Pasangkan alat dengan perubahan bentuk energi utamanya.",
        pairs: [
          { left: "Lampu LED", right: "Listrik menjadi cahaya" },
          { left: "Kipas angin", right: "Listrik menjadi gerak" },
          { left: "Panel surya", right: "Cahaya menjadi listrik" },
          { left: "Setrika", right: "Listrik menjadi panas" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pembangkit mengubah 1000 J energi air menjadi 850 J energi listrik. Berapa joule yang menjadi panas dan kerugian lain?",
        answer: 150,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Energi total kekal: 1000 J masuk = 850 J listrik + sisanya. Maka yang menjadi panas dan kerugian = 1000 - 850 = <strong>150 joule</strong>.",
        hint: "Kurangi energi masukan dengan keluaran berguna.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah rantai konversi: 200 J energi kimia menjadi 40 J cahaya berguna. Berapa efisiensi konversi keseluruhannya dalam persen?",
        answer: 20,
        tolerance: 0.1,
        suffix: " %",
        solution:
          "Efisiensi = (40 / 200) x 100% = <strong>20 persen</strong>. Sisanya 160 J menjadi panas sepanjang rantai.",
        hint: "Bagi keluaran berguna dengan energi awal, kali 100 persen.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan alat berdasarkan bentuk energi keluaran utama yang diinginkannya.",
        buckets: ["Keluaran gerak", "Keluaran cahaya", "Keluaran panas"],
        items: [
          { text: "Blender", bucket: "Keluaran gerak" },
          { text: "Lampu sorot", bucket: "Keluaran cahaya" },
          { text: "Pemanas air listrik", bucket: "Keluaran panas" },
          { text: "Mesin bor", bucket: "Keluaran gerak" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dari Matahari ke Lampu Kamar",
        html: "Cahaya matahari mengenai panel surya dan berubah menjadi <strong>energi listrik</strong>. Listrik itu disimpan di baterai sebagai <strong>energi kimia</strong>, lalu saat malam dikeluarkan lagi menjadi listrik untuk menyalakan lampu LED, yang mengubahnya menjadi <strong>cahaya</strong>. Setidaknya ada empat kali perubahan bentuk energi, dan tiap perubahan menyisakan sedikit panas. Karena itu energi cahaya yang akhirnya menerangi kamarmu jauh lebih kecil daripada energi matahari yang ditangkap, meski tidak ada energi yang benar-benar hilang. Rantai yang lebih pendek dan komponen yang lebih efisien membuat lebih banyak energi sampai ke tujuan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rangkumannya. Pada tiap <strong>konversi energi</strong> berlaku kekekalan: energi masukan = energi keluaran berguna + energi terbuang (umumnya panas). Untuk rantai bertingkat, efisiensi total adalah perkalian efisiensi tiap tahap, sehingga makin panjang rantai makin kecil bagian energi yang sampai ke tujuan. Tetapi jumlah seluruh energi selalu tetap.",
      },
      {
        type: "takeaways",
        items: [
          "Energi mengalir lewat rantai perubahan dari satu bentuk ke bentuk lain.",
          "Pada tiap konversi: energi masukan = keluaran berguna + energi terbuang.",
          "Setiap perubahan bentuk menyisakan sebagian energi sebagai panas.",
          "Rantai konversi yang panjang membuat lebih sedikit energi sampai ke tujuan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Panel surya mengubah energi?",
            options: [
              "Cahaya menjadi listrik",
              "Listrik menjadi cahaya",
              "Gerak menjadi panas",
              "Kimia menjadi gerak",
            ],
            answer: 0,
            explain: "Panel surya mengubah energi cahaya menjadi listrik.",
          },
          {
            q: "Pada tiap konversi energi, sebagian energi umumnya menjadi?",
            options: ["Massa", "Panas", "Cahaya bintang", "Energi baru"],
            answer: 1,
            explain: "Tiap konversi menyisakan sebagian energi sebagai panas.",
          },
          {
            q: "Pembangkit: 500 J masuk, 400 J listrik berguna. Energi terbuang?",
            options: ["100 J", "900 J", "400 J", "0 J"],
            answer: 0,
            explain: "500 - 400 = 100 J terbuang.",
          },
          {
            q: "Mengapa rantai konversi yang panjang kurang efisien?",
            options: [
              "Energi diciptakan tiap tahap",
              "Tiap tahap menyisakan panas",
              "Massa bertambah tiap tahap",
              "Gravitasi melemah",
            ],
            answer: 1,
            explain: "Tiap tahap kehilangan sebagian energi menjadi panas.",
          },
          {
            q: "Setrika listrik mengubah listrik terutama menjadi?",
            options: ["Cahaya", "Panas", "Gerak", "Suara"],
            answer: 1,
            explain: "Setrika mengubah energi listrik menjadi panas.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sumber-energi",
    levelId: "efisiensi-konversi",
    order: 4,
    title: "Sumber Energi",
    summary:
      "Bensin habis terbakar sekali, sinar matahari datang tiap hari. Sumber energi terbarukan dan tak terbarukan menentukan masa depan kita.",
    durationMin: 12,
    tags: ["fisika", "sumber energi", "terbarukan", "energi"],
    blocks: [
      {
        type: "paragraph",
        html: "Energi yang kita pakai sehari-hari harus berasal dari suatu sumber: bensin di tangki, matahari di atap, atau air yang mengalir. Sebagian sumber bisa habis dan butuh jutaan tahun untuk terbentuk lagi, sebagian lain tersedia terus selama matahari masih bersinar. Memahami dari mana energi berasal sama pentingnya dengan memahami cara kerjanya. Sebelum rangkuman, ayo kenali dulu beda sumber yang habis dan yang terbarukan.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Dari Mana Energi Kita Berasal?",
        caption:
          "Sumber energi terbagi menjadi yang terbarukan dan yang tak terbarukan, masing-masing dengan kelebihannya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Daftar lima alat di rumahmu dan telusuri sumber energinya sampai ke awal. Lampu menyala dari listrik; listriknya mungkin dari pembangkit batu bara, air terjun, atau panel surya. Kompor mungkin dari gas alam. Tanyakan untuk tiap sumber: apakah ia bisa habis, dan dari mana asal mulanya. Kamu akan melihat banyak energi sebenarnya berasal dari matahari, baik langsung maupun lewat tumbuhan dan cuaca.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Terbarukan dan tak terbarukan",
        html: "Sumber <strong>tak terbarukan</strong> seperti minyak bumi, batu bara, dan gas alam terbentuk dari sisa makhluk hidup jutaan tahun lalu, dan bisa habis. Sumber <strong>terbarukan</strong> seperti matahari, angin, air, dan panas bumi terus tersedia dalam skala waktu manusia. Keduanya menyimpan dan melepaskan energi, tetapi hanya yang terbarukan yang tidak akan kita habiskan.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan sumber energi berikut sebagai terbarukan atau tak terbarukan.",
        buckets: ["Terbarukan", "Tak terbarukan"],
        items: [
          { text: "Sinar matahari", bucket: "Terbarukan" },
          { text: "Batu bara", bucket: "Tak terbarukan" },
          { text: "Angin", bucket: "Terbarukan" },
          { text: "Minyak bumi", bucket: "Tak terbarukan" },
          { text: "Air terjun", bucket: "Terbarukan" },
          { text: "Gas alam", bucket: "Tak terbarukan" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah panel surya menerima 600 J energi cahaya dan menghasilkan 120 J listrik. Berapa efisiensinya dalam persen?",
        answer: 20,
        tolerance: 0.1,
        suffix: " %",
        solution:
          "Efisiensi = (120 / 600) x 100% = <strong>20 persen</strong>. Sisanya menjadi panas pada panel.",
        hint: "Bagi energi listrik dengan energi cahaya, kali 100 persen.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pembangkit angin menghasilkan daya 2000 W selama 10 sekon. Berapa energi listrik yang dihasilkannya?",
        answer: 20000,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Energi = daya x waktu = 2000 W x 10 s = <strong>20000 joule</strong>.",
        hint: "Gunakan W = P x t.",
      },
      {
        type: "matchExercise",
        prompt:
          "Pasangkan pembangkit dengan sumber energi yang digerakkannya.",
        pairs: [
          { left: "PLTA", right: "Air yang mengalir" },
          { left: "PLTS", right: "Cahaya matahari" },
          { left: "PLTU batu bara", right: "Pembakaran batu bara" },
          { left: "PLTB", right: "Angin" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bahan Bakar Fosil yang Menipis",
        html: "Minyak bumi, batu bara, dan gas alam disebut <strong>bahan bakar fosil</strong> karena terbentuk dari sisa tumbuhan dan hewan yang terkubur jutaan tahun. Kita memakainya jauh lebih cepat daripada alam membentuknya, sehingga cadangannya menipis dan pembakarannya melepas gas yang menghangatkan bumi. Karena itu dunia beralih ke sumber <strong>terbarukan</strong> seperti surya, angin, dan air, yang tidak akan habis dan lebih bersih. Memahami fisika energi membantu kita memilih sumber yang efisien dan berkelanjutan, bukan sekadar yang murah hari ini.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rangkumannya. Semua sumber energi tunduk pada <strong>kekekalan energi</strong> dan diukur dengan besaran yang sama: energi dalam joule dan daya P = W / t dalam watt. Sumber tak terbarukan menyimpan energi kimia yang habis sekali pakai, sumber terbarukan memasok energi terus-menerus. Efisiensi konversinya tetap dihitung dengan efisiensi = (keluaran berguna / masukan) x 100%.",
      },
      {
        type: "takeaways",
        items: [
          "Sumber energi terbagi menjadi terbarukan dan tak terbarukan.",
          "Bahan bakar fosil menyimpan energi kimia, tetapi bisa habis.",
          "Sumber terbarukan seperti surya, angin, dan air terus tersedia.",
          "Semua sumber tunduk pada kekekalan energi dan diukur dalam joule dan watt.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Manakah yang termasuk sumber energi terbarukan?",
            options: ["Batu bara", "Minyak bumi", "Sinar matahari", "Gas alam"],
            answer: 2,
            explain: "Sinar matahari terus tersedia, jadi terbarukan.",
          },
          {
            q: "Bahan bakar fosil terbentuk dari?",
            options: [
              "Sisa makhluk hidup jutaan tahun lalu",
              "Air hujan",
              "Sinar bintang",
              "Logam cair",
            ],
            answer: 0,
            explain: "Fosil berasal dari sisa tumbuhan dan hewan purba.",
          },
          {
            q: "PLTA memanfaatkan energi dari?",
            options: ["Angin", "Air yang mengalir", "Matahari", "Batu bara"],
            answer: 1,
            explain: "PLTA digerakkan oleh air yang mengalir.",
          },
          {
            q: "Panel surya 500 J cahaya menghasilkan 100 J listrik. Efisiensinya?",
            options: ["20 %", "50 %", "5 %", "100 %"],
            answer: 0,
            explain: "(100 / 500) x 100% = 20%.",
          },
          {
            q: "Mengapa dunia beralih ke sumber energi terbarukan?",
            options: [
              "Karena fosil tak pernah habis",
              "Karena terbarukan tidak habis dan lebih bersih",
              "Karena melanggar kekekalan energi",
              "Karena tidak butuh konversi",
            ],
            answer: 1,
            explain: "Terbarukan tidak habis dalam skala manusia dan lebih bersih.",
          },
        ],
      },
    ],
  },
];
