import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "kekekalan-energi-mekanik",
    levelId: "kekekalan-energi",
    order: 1,
    title: "Energi Mekanik",
    summary:
      "Saat bola jatuh, energi posisinya menyusut tetapi energi geraknya tumbuh. Anehnya, totalnya tidak berubah sedikit pun.",
    durationMin: 14,
    tags: ["fisika", "energi mekanik", "kekekalan energi", "energi"],
    blocks: [
      {
        type: "paragraph",
        html: "Jatuhkan sebuah bola dari ketinggian. Saat turun, ia makin cepat: energi geraknya bertambah. Tetapi ketinggiannya berkurang: energi posisinya menyusut. Anehnya, jika digabung, jumlah keduanya tidak berubah sepanjang jatuh. Jumlah energi kinetik dan potensial inilah <strong>energi mekanik</strong>. Sebelum menulis rumus, ayo amati 'pertukaran adil' antara energi kinetik dan potensial ini.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Energi yang Berpindah, Total yang Tetap",
        caption:
          "Sepanjang gerak jatuh, energi potensial berubah menjadi kinetik tanpa ada yang hilang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan kereta roller coaster tanpa mesin di lintasan licin. Di puncak ia lambat tetapi tinggi, sehingga energi potensialnya besar. Di lembah ia kencang tetapi rendah, sehingga energi kinetiknya besar. Naik lagi, ia melambat. Energi seolah berpindah bolak-balik antara 'tinggi' dan 'cepat', tetapi totalnya selalu sama.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "callout",
        tone: "info",
        title: "Syaratnya tanpa gesekan",
        html: "Energi mekanik kekal dengan rapi ketika gaya gesek dan hambatan udara diabaikan. Di dunia nyata sebagian energi berubah menjadi panas akibat gesekan, sehingga energi mekanik sedikit berkurang. Namun gagasan intinya tetap: energi tidak hilang, hanya berpindah wujud.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Energi Mekanik Total Benda 1 kg yang Jatuh dari 20 m",
        unit: "joule",
        source: "ilustrasi edukatif",
        note: "Di 20 m: Ep 200 J, Ek 0 J. Di 10 m: Ep 100 J, Ek 100 J. Di 0 m: Ep 0 J, Ek 200 J. Energi potensial berubah jadi kinetik, tetapi totalnya tetap 200 J.",
        data: [
          { label: "20 m", value: 200, color: "#a78bfa" },
          { label: "15 m", value: 200, color: "#a78bfa" },
          { label: "10 m", value: 200, color: "#a78bfa" },
          { label: "5 m", value: 200, color: "#a78bfa" },
          { label: "0 m", value: 200, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Benda 2 kg dijatuhkan dari ketinggian 5 m (g = 10 m/s², tanpa gesekan). Berapa energi kinetiknya tepat saat menyentuh tanah?",
        answer: 100,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Energi potensial awal Ep = m g h = 2 x 10 x 5 = 100 J. Karena energi mekanik kekal dan di tanah ketinggian nol, seluruh 100 J berubah menjadi energi kinetik = <strong>100 joule</strong>.",
        hint: "Energi potensial di atas seluruhnya menjadi energi kinetik di bawah.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari soal sebelumnya, berapa kecepatan benda 2 kg itu saat menyentuh tanah?",
        answer: 10,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Ek = ½ m v² = 100 J, jadi ½ x 2 x v² = 100, berarti v² = 100 dan v = <strong>10 m/s</strong>.",
        hint: "Gunakan Ek = ½ m v² lalu cari v.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Saat benda jatuh bebas tanpa gesekan, bagaimana tiap besaran berubah dari atas ke bawah?",
        buckets: ["Bertambah", "Berkurang"],
        items: [
          { text: "Energi kinetik", bucket: "Bertambah" },
          { text: "Energi potensial", bucket: "Berkurang" },
          { text: "Kecepatan", bucket: "Bertambah" },
          { text: "Ketinggian", bucket: "Berkurang" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pegas Lompat Pogo Stick",
        html: "Pada pogo stick, saat kamu mendarat, energi kinetik gerakmu berpindah menjadi energi potensial pegas yang tertekan. Sesaat kemudian pegas melepasnya kembali menjadi energi kinetik yang melontarkanmu naik, lalu di puncak menjadi energi potensial gravitasi. Tiga wujud energi bergiliran, tetapi <strong>energi mekanik total</strong> hampir tetap. Karena ada sedikit gesekan dan suara, tiap pantulan sedikit lebih rendah, sebab sebagian energi mekanik berubah menjadi panas.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Barulah rumusnya. <strong>Energi mekanik</strong> adalah jumlah energi kinetik dan potensial: EM = Ek + Ep. Tanpa gesekan, energi ini <strong>kekal</strong>: Ek1 + Ep1 = Ek2 + Ep2, artinya ½ m v1² + m g h1 = ½ m v2² + m g h2. Energi tidak diciptakan atau dimusnahkan, hanya berpindah wujud.",
      },
      {
        type: "takeaways",
        items: [
          "Energi mekanik adalah jumlah energi kinetik dan potensial: EM = Ek + Ep.",
          "Tanpa gesekan, energi mekanik total selalu tetap.",
          "Saat benda jatuh, energi potensial berubah menjadi energi kinetik.",
          "Dengan gesekan, sebagian energi mekanik berubah menjadi panas, tetapi tidak lenyap.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Energi mekanik adalah jumlah dari?",
            options: [
              "Gaya dan jarak",
              "Energi kinetik dan potensial",
              "Daya dan waktu",
              "Massa dan kecepatan",
            ],
            answer: 1,
            explain: "EM = Ek + Ep.",
          },
          {
            q: "Saat benda jatuh bebas tanpa gesekan, energi mekanik totalnya?",
            options: ["Bertambah", "Berkurang", "Tetap", "Nol"],
            answer: 2,
            explain: "Energi mekanik kekal tanpa gesekan.",
          },
          {
            q: "Saat benda jatuh, energi potensialnya berubah menjadi?",
            options: [
              "Energi kinetik",
              "Energi listrik",
              "Massa",
              "Gaya",
            ],
            answer: 0,
            explain: "Energi potensial berubah menjadi energi kinetik saat jatuh.",
          },
          {
            q: "Benda 1 kg jatuh dari 10 m (g = 10). Energi kinetik saat menyentuh tanah?",
            options: ["100 J", "10 J", "50 J", "1 J"],
            answer: 0,
            explain: "Ep awal = 1 x 10 x 10 = 100 J berubah seluruhnya menjadi Ek.",
          },
          {
            q: "Pada pantulan nyata, mengapa tiap pantulan makin rendah?",
            options: [
              "Energi hilang total",
              "Gesekan mengubah energi mekanik jadi panas",
              "Gravitasi melemah",
              "Massa berkurang",
            ],
            answer: 1,
            explain: "Gesekan mengubah sebagian energi mekanik menjadi panas.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-kekekalan-energi",
    levelId: "kekekalan-energi",
    order: 2,
    title: "Hukum Kekekalan Energi",
    summary:
      "Bola yang menggelinding berhenti, energinya seakan lenyap. Padahal ia hanya menyamar jadi panas. Energi tidak pernah hilang.",
    durationMin: 13,
    tags: ["fisika", "kekekalan energi", "energi panas", "gesekan"],
    blocks: [
      {
        type: "paragraph",
        html: "Gelindingkan bola di lantai, lama-lama ia berhenti sendiri. Ke mana energi geraknya? Ia tidak lenyap, melainkan berubah menjadi panas akibat gesekan, juga sedikit suara. Inilah hukum besar fisika: <strong>energi tidak dapat diciptakan atau dimusnahkan, hanya berubah bentuk</strong>. Sebelum rumus, ayo telusuri dulu ke mana energi 'menghilang' sebenarnya pergi.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Energi yang Menyamar",
        caption:
          "Energi yang tampak hilang sebenarnya berubah wujud menjadi panas, suara, atau bentuk lain.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gosok kedua telapak tanganmu cepat-cepat selama beberapa detik. Telapakmu menghangat. Energi gerak tanganmu berubah menjadi panas lewat gesekan. Tidak ada energi yang lenyap: yang tadinya gerak kini menjadi panas yang bisa kamu rasakan. Begitulah energi selalu menemukan jalan untuk berpindah wujud, bukan menghilang.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Energi mekanik bisa berkurang, energi total tidak",
        html: "Saat ada gesekan, energi <strong>mekanik</strong> (kinetik + potensial) memang berkurang. Tetapi energi <strong>total</strong> tetap, karena selisihnya muncul sebagai panas dan suara. Energi mekanik yang 'hilang' sama dengan energi panas yang dihasilkan gesekan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah balok meluncur dengan energi kinetik 80 J lalu berhenti karena gesekan. Berapa energi panas yang dihasilkan gesekan?",
        answer: 80,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Karena energi total kekal dan balok berhenti (Ek akhir 0), seluruh 80 J energi kinetik berubah menjadi panas = <strong>80 joule</strong>.",
        hint: "Energi kinetik yang hilang muncul sebagai panas.",
      },
      {
        type: "calcExercise",
        prompt:
          "Benda jatuh dengan energi potensial awal 150 J, tetapi tiba di tanah dengan energi kinetik hanya 120 J. Berapa energi yang berubah menjadi panas akibat hambatan udara?",
        answer: 30,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Energi total kekal: 150 J awal = 120 J kinetik + energi panas. Maka energi panas = 150 - 120 = <strong>30 joule</strong>.",
        hint: "Selisih energi mekanik awal dan akhir menjadi panas.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Pada tiap peristiwa, kelompokkan bentuk energi yang menjadi tujuan perubahannya.",
        buckets: ["Berubah jadi panas", "Berubah jadi gerak"],
        items: [
          { text: "Rem cakram menghentikan mobil", bucket: "Berubah jadi panas" },
          { text: "Tangan digosok-gosok", bucket: "Berubah jadi panas" },
          { text: "Pegas ketapel melontarkan batu", bucket: "Berubah jadi gerak" },
          { text: "Air bendungan jatuh memutar turbin", bucket: "Berubah jadi gerak" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Rem yang Memanas",
        html: "Setelah menuruni jalan pegunungan yang panjang, rem mobil bisa menjadi sangat panas, bahkan berbau. Mengapa? Saat mengerem, energi kinetik mobil yang besar tidak lenyap, melainkan berubah menjadi <strong>panas</strong> pada cakram rem lewat gesekan. Makin sering dan kuat mengerem, makin banyak energi kinetik yang berubah menjadi panas. Pengemudi disarankan memakai gigi rendah agar mesin ikut menahan laju, sehingga rem tidak kepanasan. Energi mekanik berkurang, tetapi energi totalnya, kini sebagai panas, tetap utuh.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang inti rumusnya. <strong>Hukum kekekalan energi</strong>: energi total suatu sistem tetap; energi tidak diciptakan atau dimusnahkan, hanya berubah bentuk. Saat ada gesekan: Em awal = Em akhir + energi panas. Energi mekanik yang berkurang sama persis dengan energi panas (dan suara) yang muncul. Tidak ada yang benar-benar hilang.",
      },
      {
        type: "takeaways",
        items: [
          "Energi tidak dapat diciptakan atau dimusnahkan, hanya berubah bentuk.",
          "Energi mekanik bisa berkurang, tetapi energi total selalu tetap.",
          "Gesekan mengubah energi mekanik menjadi panas dan suara.",
          "Energi mekanik yang hilang sama dengan panas yang dihasilkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum kekekalan energi menyatakan bahwa energi?",
            options: [
              "Bisa diciptakan dari nol",
              "Tidak dapat diciptakan atau dimusnahkan",
              "Selalu bertambah",
              "Selalu menjadi gerak",
            ],
            answer: 1,
            explain: "Energi hanya berubah bentuk, tidak diciptakan atau dimusnahkan.",
          },
          {
            q: "Ke mana energi kinetik mobil pergi saat direm hingga berhenti?",
            options: [
              "Menjadi panas pada rem",
              "Lenyap total",
              "Menjadi massa",
              "Menjadi cahaya",
            ],
            answer: 0,
            explain: "Energi kinetik berubah menjadi panas lewat gesekan rem.",
          },
          {
            q: "Balok meluncur Ek 60 J lalu berhenti karena gesekan. Energi panasnya?",
            options: ["0 J", "30 J", "60 J", "120 J"],
            answer: 2,
            explain: "Seluruh 60 J berubah menjadi panas.",
          },
          {
            q: "Saat ada gesekan, energi mekanik benda?",
            options: ["Tetap", "Berkurang", "Bertambah", "Menjadi tak terhingga"],
            answer: 1,
            explain: "Sebagian berubah jadi panas, jadi energi mekanik berkurang.",
          },
          {
            q: "Ep awal 100 J, Ek di tanah 90 J. Energi yang jadi panas?",
            options: ["10 J", "90 J", "190 J", "0 J"],
            answer: 0,
            explain: "100 - 90 = 10 J berubah menjadi panas.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "energi-bidang-miring",
    levelId: "kekekalan-energi",
    order: 3,
    title: "Energi pada Bidang Miring",
    summary:
      "Bola meluncur dari puncak perosotan tiba dengan laju yang sama, tak peduli landai atau curam, asalkan tingginya sama.",
    durationMin: 13,
    tags: ["fisika", "bidang miring", "kekekalan energi", "ketinggian"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah bola dilepas dari puncak dua perosotan: yang satu curam dan pendek, yang lain landai dan panjang, tetapi sama tingginya. Mengejutkan, di kaki perosotan keduanya tiba dengan laju yang <strong>sama</strong> (tanpa gesekan). Yang menentukan kecepatan akhir hanyalah ketinggian, bukan kemiringan atau panjang lintasan. Sebelum rumus, ayo selidiki dulu mengapa tinggi yang berbicara, bukan jalannya.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Tinggi yang Menentukan, Bukan Jalannya",
        caption:
          "Pada bidang miring tanpa gesekan, kecepatan di dasar hanya bergantung pada beda ketinggian.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Buat dua lintasan dari buku dan penggaris: satu curam, satu landai, dengan puncak setinggi sama. Lepas kelereng dari puncak masing-masing. Di lintasan landai kelereng menempuh jalan lebih panjang dan butuh waktu lebih lama, tetapi tiba di bawah dengan laju yang hampir sama. Yang menabung energi adalah ketinggiannya, dan tabungan itu dicairkan menjadi kecepatan yang sama.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "callout",
        tone: "info",
        title: "Jalan lebih panjang, gaya lebih kecil",
        html: "Pada bidang landai, hanya sebagian gaya berat yang menarik benda menuruni lereng, sehingga percepatannya kecil. Tetapi lintasannya panjang. Pada bidang curam, gaya pendorongnya besar tetapi lintasannya pendek. Keduanya menghasilkan tambahan energi kinetik yang sama, karena bergantung pada beda <strong>ketinggian</strong> yang sama.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah balok 2 kg meluncur tanpa gesekan dari puncak bidang miring setinggi 3 m (g = 10 m/s²). Berapa energi kinetiknya di dasar?",
        answer: 60,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Ep di puncak = m g h = 2 x 10 x 3 = 60 J. Tanpa gesekan seluruhnya menjadi energi kinetik di dasar = <strong>60 joule</strong>, tak peduli kemiringannya.",
        hint: "Gunakan energi potensial di puncak yang seluruhnya jadi kinetik.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari soal sebelumnya, berapa kecepatan balok 2 kg di dasar bidang miring?",
        answer: 7.75,
        tolerance: 0.2,
        suffix: " m/s",
        solution:
          "Ek = ½ m v² = 60 J, jadi ½ x 2 x v² = 60, berarti v² = 60 dan v = akar 60 ≈ <strong>7,75 m/s</strong>.",
        hint: "Ubah energi kinetik di dasar menjadi kecepatan lewat Ek = ½ m v².",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk dua bidang miring tanpa gesekan dengan tinggi sama, satu curam dan satu landai, kelompokkan pernyataan berikut.",
        buckets: ["Sama pada keduanya", "Berbeda pada keduanya"],
        items: [
          { text: "Kecepatan di dasar", bucket: "Sama pada keduanya" },
          { text: "Energi kinetik di dasar", bucket: "Sama pada keduanya" },
          { text: "Waktu meluncur", bucket: "Berbeda pada keduanya" },
          { text: "Panjang lintasan", bucket: "Berbeda pada keduanya" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Jalur Pendakian yang Berkelok",
        html: "Jalan menuju puncak bukit sering dibuat berkelok-kelok dan landai, bukan lurus menanjak curam. Mengapa? Untuk mencapai ketinggian yang sama, <strong>energi potensial</strong> yang harus ditambahkan tetap sama, yaitu m g h. Tetapi pada jalur landai, gaya yang dibutuhkan tiap langkah jauh lebih kecil, meski jaraknya lebih panjang. Kendaraan dan pejalan kaki lebih mampu menempuh tanjakan kecil yang panjang daripada dinding curam yang pendek, walau usaha melawan gravitasi totalnya sama.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya. Pada bidang miring tanpa gesekan, kekekalan energi memberi: m g h = ½ m v². Massa bisa dicoret sehingga v = akar dari (2 g h). Kecepatan di dasar hanya bergantung pada <strong>beda ketinggian h</strong>, bukan pada kemiringan atau panjang lintasan. Tinggi yang sama berarti laju akhir yang sama.",
      },
      {
        type: "takeaways",
        items: [
          "Pada bidang miring tanpa gesekan, kecepatan di dasar hanya bergantung pada ketinggian.",
          "m g h di puncak berubah menjadi ½ m v² di dasar.",
          "Bidang landai dan curam dengan tinggi sama memberi laju akhir sama.",
          "Bidang landai butuh gaya lebih kecil tetapi lintasan lebih panjang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada bidang miring tanpa gesekan, kecepatan di dasar bergantung pada?",
            options: [
              "Kemiringan saja",
              "Beda ketinggian",
              "Panjang lintasan",
              "Warna bidang",
            ],
            answer: 1,
            explain: "Hanya beda ketinggian yang menentukan kecepatan akhir.",
          },
          {
            q: "Dua bidang miring tinggi sama (curam dan landai), kecepatan di dasar?",
            options: ["Lebih besar yang curam", "Sama", "Lebih besar yang landai", "Nol"],
            answer: 1,
            explain: "Tinggi sama berarti kecepatan akhir sama, tanpa gesekan.",
          },
          {
            q: "Balok 1 kg meluncur tanpa gesekan dari tinggi 5 m (g = 10). Ek di dasar?",
            options: ["50 J", "5 J", "10 J", "25 J"],
            answer: 0,
            explain: "Ep = 1 x 10 x 5 = 50 J menjadi energi kinetik.",
          },
          {
            q: "Rumus kecepatan di dasar bidang miring tanpa gesekan adalah?",
            options: [
              "v = g h",
              "v = akar dari (2 g h)",
              "v = ½ g h",
              "v = m g h",
            ],
            answer: 1,
            explain: "Dari m g h = ½ m v², diperoleh v = akar dari 2 g h.",
          },
          {
            q: "Mengapa jalan ke puncak bukit dibuat berkelok dan landai?",
            options: [
              "Agar energi potensial lebih kecil",
              "Agar gaya tiap langkah lebih kecil",
              "Agar kecepatan akhir lebih besar",
              "Agar jaraknya lebih pendek",
            ],
            answer: 1,
            explain: "Jalur landai butuh gaya lebih kecil meski lintasannya panjang.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "energi-ayunan",
    levelId: "kekekalan-energi",
    order: 4,
    title: "Energi pada Ayunan",
    summary:
      "Bandul berayun menukar tinggi dengan laju tanpa henti. Di titik terendah ia paling cepat, di titik tertinggi ia berhenti sejenak.",
    durationMin: 13,
    tags: ["fisika", "ayunan", "bandul", "kekekalan energi"],
    blocks: [
      {
        type: "paragraph",
        html: "Tarik bandul ke samping lalu lepaskan. Ia meluncur turun makin cepat, melewati titik terendah dengan laju maksimum, lalu naik di sisi lain sampai berhenti sejenak, lalu kembali. Sepanjang ayunan, energi terus bertukar antara potensial di titik tinggi dan kinetik di titik rendah. Sebelum rumus, ayo amati dulu tarian energi pada bandul yang berayun ini.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Tarian Energi pada Bandul",
        caption:
          "Bandul menukar energi potensial dan kinetik bolak-balik sepanjang ayunannya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gantungkan kunci pada seutas benang lalu ayunkan. Perhatikan: di titik paling tepi, kunci sejenak diam sebelum berbalik, dan di sanalah posisinya paling tinggi. Di titik tengah ayunan, kunci melaju paling cepat dan posisinya paling rendah. Coba tarik lebih jauh ke samping: ayunan jadi lebih cepat di tengah, karena energi potensial awal lebih besar.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "callout",
        tone: "info",
        title: "Titik tertinggi diam, titik terendah tercepat",
        html: "Di titik tertinggi ayunan, bandul sesaat berhenti: energinya seluruhnya <strong>potensial</strong>. Di titik terendah, bandul melaju paling kencang: energinya seluruhnya <strong>kinetik</strong>. Di antara keduanya, energi terbagi antara potensial dan kinetik. Jumlahnya, yaitu energi mekanik, tetap sepanjang ayunan tanpa gesekan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Energi Bandul 1 kg di Titik Tertinggi (tinggi 0,2 m, g = 10)",
        unit: "joule",
        source: "ilustrasi edukatif",
        note: "Di titik tertinggi: seluruh 2 J energi mekanik berupa potensial, kinetik 0. Di titik terendah: seluruh 2 J menjadi kinetik, potensial 0. Total tetap 2 J.",
        data: [
          { label: "Ep tertinggi", value: 2, color: "#a78bfa" },
          { label: "Ek tertinggi", value: 0, color: "#c084fc" },
          { label: "Ep terendah", value: 0, color: "#d8b4fe" },
          { label: "Ek terendah", value: 2, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Bandul 1 kg ditarik hingga naik 0,2 m dari titik terendah (g = 10 m/s²). Berapa energi kinetiknya saat melewati titik terendah?",
        answer: 2,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Ep di titik tertinggi = m g h = 1 x 10 x 0,2 = 2 J. Di titik terendah seluruhnya menjadi energi kinetik = <strong>2 joule</strong>.",
        hint: "Energi potensial di tepi menjadi energi kinetik di titik terendah.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari soal sebelumnya, berapa kecepatan bandul 1 kg di titik terendah?",
        answer: 2,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Ek = ½ m v² = 2 J, jadi ½ x 1 x v² = 2, berarti v² = 4 dan v = <strong>2 m/s</strong>.",
        hint: "Ubah energi kinetik di titik terendah menjadi kecepatan.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Pada bandul yang berayun tanpa gesekan, kelompokkan keadaan energi di tiap titik.",
        buckets: ["Energi potensial maksimum", "Energi kinetik maksimum"],
        items: [
          { text: "Titik paling tepi ayunan", bucket: "Energi potensial maksimum" },
          { text: "Bandul sesaat berhenti", bucket: "Energi potensial maksimum" },
          { text: "Titik terendah ayunan", bucket: "Energi kinetik maksimum" },
          { text: "Bandul melaju tercepat", bucket: "Energi kinetik maksimum" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bandul Jam Tua",
        html: "Jam bandul kuno menjaga waktu lewat ayunan yang teratur. Bandulnya terus menukar energi potensial dan kinetik, dan tanpa gangguan ayunan itu akan tetap. Tetapi gesekan poros dan hambatan udara perlahan mengubah sebagian energi mekanik menjadi <strong>panas</strong>, sehingga ayunan mengecil. Itulah sebabnya jam bandul perlu 'diberi tenaga' lewat pegas atau beban yang turun perlahan: untuk menggantikan energi yang hilang menjadi panas, agar amplitudo ayunan tetap. Tanpa pasokan itu, bandul akan berhenti.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya. Pada ayunan tanpa gesekan, energi mekanik kekal: di titik tertinggi seluruhnya potensial (m g h), di titik terendah seluruhnya kinetik (½ m v²). Maka m g h = ½ m v², sehingga kecepatan di titik terendah v = akar dari (2 g h), dengan h beda tinggi antara titik tepi dan titik terendah. Makin jauh ditarik (h besar), makin cepat di dasar.",
      },
      {
        type: "takeaways",
        items: [
          "Bandul menukar energi potensial dan kinetik sepanjang ayunan.",
          "Di titik tertinggi energi seluruhnya potensial, di titik terendah seluruhnya kinetik.",
          "Tanpa gesekan, m g h = ½ m v², jadi v = akar dari 2 g h di dasar.",
          "Gesekan membuat ayunan nyata mengecil karena energi jadi panas.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Di titik tertinggi ayunan bandul, energinya didominasi?",
            options: [
              "Energi kinetik",
              "Energi potensial",
              "Energi panas",
              "Energi listrik",
            ],
            answer: 1,
            explain: "Di titik tertinggi bandul diam sesaat, energi potensial maksimum.",
          },
          {
            q: "Di titik terendah ayunan, bandul memiliki?",
            options: [
              "Energi kinetik maksimum",
              "Energi potensial maksimum",
              "Energi nol",
              "Kecepatan nol",
            ],
            answer: 0,
            explain: "Di titik terendah bandul tercepat, energi kinetik maksimum.",
          },
          {
            q: "Bandul 1 kg dari tinggi 0,2 m (g = 10). Ek di titik terendah?",
            options: ["2 J", "0,2 J", "20 J", "10 J"],
            answer: 0,
            explain: "Ep = 1 x 10 x 0,2 = 2 J menjadi energi kinetik.",
          },
          {
            q: "Jika bandul ditarik lebih jauh ke samping, di titik terendah ia?",
            options: ["Lebih lambat", "Lebih cepat", "Sama saja", "Berhenti"],
            answer: 1,
            explain: "Tinggi awal lebih besar berarti energi kinetik dan laju lebih besar.",
          },
          {
            q: "Mengapa jam bandul perlu diberi tenaga dari pegas atau beban?",
            options: [
              "Karena energi diciptakan",
              "Untuk mengganti energi yang jadi panas akibat gesekan",
              "Agar bandul lebih berat",
              "Agar gravitasi tetap",
            ],
            answer: 1,
            explain: "Pasokan energi mengganti yang hilang jadi panas agar ayunan tetap.",
          },
        ],
      },
    ],
  },
];
