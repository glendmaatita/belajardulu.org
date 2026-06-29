import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "hukum-gravitasi-newton",
    levelId: "hukum-gravitasi",
    order: 1,
    title: "Hukum Gravitasi Newton",
    summary:
      "Mulai dari kisah apel yang jatuh, kita telusuri gagasan bahwa gaya yang sama menarik apel ke tanah dan menahan Bulan di langit, baru kemudian rumusnya lahir.",
    durationMin: 14,
    tags: ["fisika", "gravitasi", "newton", "gaya"],
    blocks: [
      {
        type: "paragraph",
        html: "Konon Isaac Newton duduk di bawah pohon ketika sebuah apel jatuh menimpa kepalanya. Pertanyaan besarnya bukan 'mengapa apel jatuh', melainkan 'mengapa Bulan tidak jatuh juga?'. Newton menebak hal yang berani: gaya yang sama menarik apel ke tanah dan menahan Bulan tetap mengitari Bumi. Sebelum bertemu rumus, ayo ikuti dulu jalan pikirannya.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Apel, Bulan, dan Satu Gaya yang Sama",
        caption: "Gravitasi mengikat benda sehari-hari sekaligus benda langit.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang dua benda, lalu jauhkan. Apakah tarikan di antara keduanya makin kuat atau makin lemah? Sekarang bayangkan benda yang lebih berat. Tanpa rumus apa pun, kamu sudah bisa menebak dua aturan: makin <strong>besar massa</strong>, makin kuat tarikannya, dan makin <strong>jauh jarak</strong>, makin lemah tarikannya. Newton hanya menajamkan tebakan ini menjadi angka.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya Gravitasi Melemah terhadap Jarak",
        unit: "gaya relatif",
        source: "perhitungan hukum kuadrat terbalik",
        note: "Saat jarak digandakan (2x), gaya tidak menjadi setengah, melainkan seperempat. Inilah hukum kuadrat terbalik: gaya sebanding dengan 1 dibagi jarak kuadrat.",
        data: [
          { label: "jarak 1", value: 1, color: "#fb7185" },
          { label: "jarak 2", value: 0.25, color: "#f472b6" },
          { label: "jarak 3", value: 0.111, color: "#e879f9" },
          { label: "jarak 4", value: 0.0625, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dua benda saling menarik dengan gaya tertentu. Jika jarak antara keduanya digandakan menjadi dua kali lipat, gaya gravitasinya menjadi berapa kali semula?",
        answer: 0.25,
        tolerance: 0.01,
        suffix: " kali",
        solution:
          "Gaya gravitasi sebanding dengan 1 dibagi jarak kuadrat. Jika jarak menjadi 2 kali, maka gaya menjadi 1 dibagi 2 kuadrat = 1 dibagi 4 = <strong>0,25 kali</strong> semula. Inilah inti hukum kuadrat terbalik.",
        hint: "Kuadratkan dulu faktor perubahan jaraknya, lalu balik (1 dibaginya).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap perubahan dengan dampaknya pada gaya gravitasi.",
        pairs: [
          { left: "Salah satu massa digandakan", right: "Gaya menjadi 2 kali" },
          { left: "Kedua massa digandakan", right: "Gaya menjadi 4 kali" },
          { left: "Jarak digandakan", right: "Gaya menjadi seperempat" },
          { left: "Jarak dijadikan tiga kali", right: "Gaya menjadi sepersembilan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menimbang Bumi tanpa Timbangan",
        html: "Pada 1798, Henry Cavendish menggantung dua bola timah kecil dekat dua bola besar, lalu mengukur puntiran benang yang teramat halus akibat tarikan gravitasi di antara mereka. Dari situ ia memperoleh nilai konstanta gravitasi, dan untuk pertama kalinya manusia bisa menghitung massa Bumi, sekitar 6 x 10 pangkat 24 kilogram. Tarikan antarbenda di meja laboratorium ternyata cukup untuk 'menimbang' seluruh planet.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum dalam satu persamaan: <strong>F = G &middot; m&#8321; &middot; m&#8322; / r&sup2;</strong>. Gaya gravitasi (F) sebanding dengan hasil kali kedua massa (m&#8321; dan m&#8322;) dan berbanding terbalik dengan kuadrat jaraknya (r&sup2;). Huruf G adalah konstanta gravitasi universal, sekitar 6,674 x 10 pangkat -11. Rumus ini hanya menuliskan secara rapi apa yang sudah kamu tebak: massa menarik, jarak melemahkan.",
      },
      {
        type: "takeaways",
        items: [
          "Gaya gravitasi menarik setiap pasang benda bermassa, dari apel sampai planet.",
          "Gaya membesar jika massa membesar, dan mengecil jika jarak membesar.",
          "Hubungan jaraknya adalah kuadrat terbalik: jarak 2 kali membuat gaya seperempat.",
          "Rumus F = G m1 m2 / r kuadrat hanya merangkum tebakan intuitif itu menjadi angka.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bagaimana bentuk hukum gravitasi Newton?",
            options: [
              "F = m a",
              "F = G m1 m2 / r kuadrat",
              "F = m g",
              "F = 1/2 m v kuadrat",
            ],
            answer: 1,
            explain:
              "Gaya gravitasi sebanding dengan hasil kali massa dan berbanding terbalik dengan jarak kuadrat.",
          },
          {
            q: "Jika jarak antara dua benda digandakan, gaya gravitasinya menjadi?",
            options: ["2 kali", "Setengah", "Seperempat", "Tetap"],
            answer: 2,
            explain: "Hukum kuadrat terbalik: 1 dibagi 2 kuadrat = seperempat.",
          },
          {
            q: "Jika salah satu massa digandakan dan jarak tetap, gaya menjadi?",
            options: ["Setengah", "2 kali", "4 kali", "Tetap"],
            answer: 1,
            explain: "Gaya sebanding lurus dengan massa, jadi 2 kali massa berarti 2 kali gaya.",
          },
          {
            q: "Apa gagasan utama dari kisah apel Newton?",
            options: [
              "Apel selalu jatuh ke atas",
              "Gaya yang menjatuhkan apel sama dengan yang menahan Bulan",
              "Bulan ditarik gaya berbeda dari apel",
              "Gravitasi hanya berlaku di Bumi",
            ],
            answer: 1,
            explain: "Newton menyatukan gravitasi di Bumi dan di langit sebagai satu gaya yang sama.",
          },
          {
            q: "Huruf G dalam rumus gravitasi melambangkan?",
            options: [
              "Percepatan gravitasi",
              "Konstanta gravitasi universal",
              "Massa Bumi",
              "Berat benda",
            ],
            answer: 1,
            explain: "G adalah konstanta gravitasi universal, sekitar 6,674 x 10 pangkat -11.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "konstanta-gravitasi-g",
    levelId: "hukum-gravitasi",
    order: 2,
    title: "Konstanta Gravitasi G",
    summary:
      "Mengapa kita tidak merasakan tarikan antara dua orang yang berdiri berdekatan? Kita selami dulu betapa lemahnya gravitasi sehari-hari, baru memahami angka kecil bernama G.",
    durationMin: 13,
    tags: ["fisika", "gravitasi", "konstanta", "cavendish"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua orang berdiri berdampingan saling menarik secara gravitasi, tetapi tak seorang pun merasakannya. Tarikannya jauh lebih kecil daripada sehelai rambut yang jatuh. Lalu mengapa Bumi bisa menarik kita begitu kuat? Jawabannya tersembunyi pada satu angka mungil yang mengatur seberapa 'galak' gravitasi bekerja. Sebelum melihat angkanya, ayo rasakan dulu betapa lembutnya gaya ini.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Eksperimen Cavendish, Menimbang Dunia",
        caption: "Mengukur tarikan gravitasi sekecil puntiran benang di laboratorium.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua bola besi 1 kilogram berjarak sejengkal. Tarikan gravitasi di antara keduanya lebih kecil daripada berat satu butir debu. Gravitasi sebenarnya gaya yang <strong>sangat lemah</strong>, ia hanya terasa kuat ketika salah satu bendanya semasif planet. Untuk menuliskan seberapa lemah, fisika butuh satu 'angka pengali' yang sama di seluruh alam semesta. Itulah peran konstanta G.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Gaya Tarik Dua Bola Besi (jarak 10 cm)",
        unit: "nanonewton",
        source: "perhitungan F = G m1 m2 / r kuadrat",
        note: "Satu bola dipatok 1 kg, bola lain dibuat makin berat. Gaya tumbuh sebanding lurus dengan massa, tetapi semuanya tetap teramat kecil: satuannya nanonewton, sepermiliar newton.",
        data: [
          { label: "1 kg", value: 6.67, color: "#fb7185" },
          { label: "2 kg", value: 13.3, color: "#f472b6" },
          { label: "4 kg", value: 26.7, color: "#e879f9" },
          { label: "8 kg", value: 53.4, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Tarik dua bola yang masing-masing 1 kg pada jarak 10 cm menghasilkan gaya 6,67 nanonewton. Jika salah satu bola diganti menjadi 5 kg (jarak tetap), berapa gaya tariknya?",
        answer: 33.35,
        tolerance: 0.5,
        suffix: " nanonewton",
        solution:
          "Gaya sebanding lurus dengan massa. Mengganti 1 kg menjadi 5 kg membuat gaya menjadi 5 kali: 6,67 x 5 = <strong>33,35 nanonewton</strong>. Tetap teramat kecil karena G sangat mungil.",
        hint: "Kalikan gaya awal dengan faktor pertambahan massanya.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan tentang konstanta G sebagai benar atau keliru.",
        buckets: ["Benar", "Keliru"],
        items: [
          { text: "Nilai G sama di seluruh alam semesta", bucket: "Benar" },
          { text: "G adalah angka yang sangat kecil, sekitar 6,674 x 10 pangkat -11", bucket: "Benar" },
          { text: "G berubah-ubah tergantung planet tempat kita berada", bucket: "Keliru" },
          { text: "Gravitasi tergolong gaya yang lemah dibanding gaya listrik", bucket: "Benar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Neraca Puntir Cavendish",
        html: "Henry Cavendish menggantung batang dengan dua bola kecil pada seutas benang halus, lalu mendekatkan dua bola timah besar. Tarikan gravitasi yang teramat lemah memuntir benang sedikit saja, dan dari sudut puntiran itu ia menghitung nilai G. Eksperimen 1798 ini begitu peka sampai harus dilindungi dari embusan angin dan perubahan suhu. Berkat G, manusia akhirnya bisa menghitung massa Bumi dan Matahari hanya dari pengamatan gerak benda.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita kunci angkanya: <strong>G &asymp; 6,674 x 10 pangkat -11 N&middot;m&sup2;/kg&sup2;</strong>. Inilah konstanta dalam <strong>F = G &middot; m&#8321; &middot; m&#8322; / r&sup2;</strong>. Karena G begitu kecil, gravitasi antarbenda sehari-hari nyaris tak terasa, dan baru menjadi penting saat massanya sebesar planet atau bintang. G bersifat universal: nilainya sama di Bumi, di Mars, maupun di galaksi terjauh.",
      },
      {
        type: "takeaways",
        items: [
          "Gravitasi adalah gaya yang sangat lemah, baru terasa kuat bila massanya sebesar planet.",
          "Konstanta gravitasi G sekitar 6,674 x 10 pangkat -11 dan bernilai sama di seluruh semesta.",
          "Cavendish mengukur G lewat puntiran benang halus, lalu memungkinkan massa Bumi dihitung.",
          "G adalah angka pengali dalam rumus F = G m1 m2 / r kuadrat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Berapa kira-kira nilai konstanta gravitasi G?",
            options: [
              "9,8",
              "6,674 x 10 pangkat -11",
              "3 x 10 pangkat 8",
              "1",
            ],
            answer: 1,
            explain: "G sekitar 6,674 x 10 pangkat -11 N m kuadrat per kg kuadrat.",
          },
          {
            q: "Mengapa kita tidak merasakan tarikan gravitasi antara dua orang?",
            options: [
              "Karena manusia tidak bermassa",
              "Karena G sangat kecil sehingga gayanya teramat lemah",
              "Karena gravitasi hanya bekerja di luar angkasa",
              "Karena udara menghalangi gravitasi",
            ],
            answer: 1,
            explain: "Nilai G yang mungil membuat gaya antarbenda kecil teramat lemah.",
          },
          {
            q: "Nilai G di planet Mars dibanding di Bumi adalah?",
            options: ["Lebih kecil", "Lebih besar", "Sama", "Nol"],
            answer: 2,
            explain: "G bersifat universal, nilainya sama di mana pun.",
          },
          {
            q: "Eksperimen siapa yang pertama mengukur G secara teliti?",
            options: ["Galileo", "Kepler", "Cavendish", "Einstein"],
            answer: 2,
            explain: "Henry Cavendish memakai neraca puntir pada 1798.",
          },
          {
            q: "Jika kedua massa pada sepasang benda digandakan, gaya gravitasinya menjadi?",
            options: ["2 kali", "4 kali", "Setengah", "Tetap"],
            answer: 1,
            explain: "Gaya sebanding dengan hasil kali massa, jadi 2 x 2 = 4 kali.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "percepatan-gravitasi-g",
    levelId: "hukum-gravitasi",
    order: 3,
    title: "Percepatan Gravitasi g",
    summary:
      "Mengapa bulu dan palu jatuh bersamaan di Bulan? Kita renungkan dulu bahwa semua benda jatuh dengan percepatan sama, baru rumus g = GM/r kuadrat muncul.",
    durationMin: 14,
    tags: ["fisika", "gravitasi", "percepatan", "galileo"],
    blocks: [
      {
        type: "paragraph",
        html: "Di Bulan tahun 1971, astronaut David Scott menjatuhkan sehelai bulu dan sebuah palu dari ketinggian sama. Keduanya mendarat serentak. Tanpa udara yang menghambat, benda ringan dan berat jatuh dengan percepatan yang sama persis. Galileo sudah menduga ini berabad-abad sebelumnya. Sebelum bertemu rumusnya, ayo pahami dulu mengapa massa benda tidak menentukan seberapa cepat ia jatuh.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Bulu dan Palu Jatuh Bersamaan",
        caption: "Tanpa hambatan udara, semua benda jatuh dengan percepatan yang sama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Benda berat memang ditarik gravitasi lebih kuat, tetapi benda berat juga lebih <strong>malas digerakkan</strong> (massanya besar). Dua efek ini saling membatalkan dengan rapi, sehingga semua benda jatuh dengan percepatan sama, yang kita sebut <strong>g</strong>. Di Bumi g sekitar 9,8 meter per detik kuadrat. Di Bulan jauh lebih kecil karena massa Bulan lebih kecil. Jadi g bukan sifat benda yang jatuh, melainkan sifat planet yang menarik.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Percepatan Gravitasi di Permukaan Berbagai Benda Langit",
        unit: "m/s kuadrat",
        source: "data astronomi, g = GM/r kuadrat",
        note: "g bergantung pada massa M dan jari-jari r benda langit. Jupiter yang masif memberi g jauh lebih besar daripada Bulan yang kecil.",
        data: [
          { label: "Bulan", value: 1.62, color: "#fbbf24" },
          { label: "Mars", value: 3.71, color: "#fb7185" },
          { label: "Bumi", value: 9.8, color: "#f472b6" },
          { label: "Jupiter", value: 24.8, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah batu dilepas dari keadaan diam dan jatuh bebas di Bumi (g = 9,8 m/s kuadrat) selama 3 detik. Berapa laju batu saat itu? Gunakan v = g dikali t.",
        answer: 29.4,
        tolerance: 0.2,
        suffix: " m/s",
        solution:
          "Pada jatuh bebas, laju bertambah g tiap detik. Setelah 3 detik: v = g x t = 9,8 x 3 = <strong>29,4 m/s</strong>. Hasil ini tidak bergantung pada massa batu.",
        hint: "Kalikan percepatan g dengan lama jatuh.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan tentang percepatan gravitasi sebagai benar atau keliru.",
        buckets: ["Benar", "Keliru"],
        items: [
          { text: "Tanpa hambatan udara, bulu dan palu jatuh dengan percepatan sama", bucket: "Benar" },
          { text: "Benda yang lebih berat selalu jatuh lebih cepat di ruang hampa", bucket: "Keliru" },
          { text: "Nilai g bergantung pada massa dan jari-jari planet", bucket: "Benar" },
          { text: "g di Bulan sama besar dengan g di Bumi", bucket: "Keliru" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menara Pisa dan Ruang Hampa",
        html: "Kisah Galileo menjatuhkan dua bola berbeda massa dari Menara Pisa mungkin hanya legenda, tetapi gagasannya benar. Di udara, bulu kalah cepat karena hambatan udara, bukan karena gravitasi pilih kasih. Ketika percobaan diulang di tabung vakum raksasa, bulu dan bola boling benar-benar jatuh serentak. Percepatan g hanya ditentukan oleh planet yang menarik, bukan oleh benda yang jatuh.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan: percepatan gravitasi di permukaan adalah <strong>g = G &middot; M / r&sup2;</strong>, dengan M massa planet dan r jari-jarinya. Perhatikan, massa benda yang jatuh sama sekali tidak muncul, itulah sebabnya semua benda jatuh dengan g yang sama. Untuk Bumi, memasukkan massa dan jari-jarinya menghasilkan g sekitar 9,8 m/s&sup2;.",
      },
      {
        type: "takeaways",
        items: [
          "Semua benda jatuh dengan percepatan sama karena gaya yang lebih besar diimbangi massa yang lebih besar.",
          "Percepatan gravitasi g adalah sifat planet penarik, bukan sifat benda yang jatuh.",
          "Rumusnya g = GM/r kuadrat: bergantung pada massa dan jari-jari planet.",
          "g di Bumi sekitar 9,8 m/s kuadrat, di Bulan sekitar 1,62, di Jupiter sekitar 24,8.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus percepatan gravitasi di permukaan planet adalah?",
            options: ["g = G M / r kuadrat", "g = m a", "g = G M r", "g = F / r"],
            answer: 0,
            explain: "Percepatan gravitasi g = GM dibagi r kuadrat.",
          },
          {
            q: "Mengapa bulu dan palu jatuh bersamaan di Bulan?",
            options: [
              "Karena Bulan tidak punya gravitasi",
              "Karena tidak ada udara yang menghambat",
              "Karena bulu lebih ringan",
              "Karena palu menarik bulu",
            ],
            answer: 1,
            explain: "Tanpa hambatan udara, semua benda jatuh dengan percepatan g yang sama.",
          },
          {
            q: "Nilai g pada rumus bergantung pada?",
            options: [
              "Massa benda yang jatuh",
              "Massa dan jari-jari planet penarik",
              "Warna benda",
              "Lama benda jatuh",
            ],
            answer: 1,
            explain: "g = GM/r kuadrat hanya bergantung pada planet, bukan benda yang jatuh.",
          },
          {
            q: "Percepatan gravitasi di permukaan Bumi kira-kira?",
            options: ["1,6 m/s kuadrat", "9,8 m/s kuadrat", "24,8 m/s kuadrat", "100 m/s kuadrat"],
            answer: 1,
            explain: "g Bumi sekitar 9,8 m/s kuadrat.",
          },
          {
            q: "Benda diam jatuh bebas di Bumi selama 2 detik. Lajunya menjadi?",
            options: ["4,9 m/s", "9,8 m/s", "19,6 m/s", "29,4 m/s"],
            answer: 2,
            explain: "v = g t = 9,8 x 2 = 19,6 m/s.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "berat-massa-dan-g",
    levelId: "hukum-gravitasi",
    order: 4,
    title: "Berat, Massa, dan g di Planet Lain",
    summary:
      "Mengapa kamu bisa melompat jauh lebih tinggi di Bulan padahal tubuhmu tidak berubah? Kita bedakan dulu massa dan berat, baru rumus w = m g jadi jelas.",
    durationMin: 13,
    tags: ["fisika", "gravitasi", "berat", "massa"],
    blocks: [
      {
        type: "paragraph",
        html: "Astronaut Apollo bisa melompat-lompat di Bulan seolah ringan sekali, padahal tubuh dan jumlah materinya sama persis seperti di Bumi. Yang berubah bukan tubuhnya, melainkan seberapa kuat planet menariknya. Di sinilah dua kata yang sering tertukar perlu dipisahkan: massa dan berat. Sebelum bertemu rumusnya, ayo pahami dulu bedanya.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Melompat di Bulan",
        caption: "Massa tetap, tetapi berat berubah karena g yang berbeda.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "<strong>Massa</strong> adalah jumlah materi dalam tubuhmu, dan nilainya sama di mana pun, di Bumi, di Bulan, maupun di luar angkasa. <strong>Berat</strong> adalah gaya tarik gravitasi pada tubuhmu, dan nilainya berubah mengikuti g di tempat itu. Di Bulan g hanya seperenam Bumi, jadi beratmu seperenam, tetapi massamu tetap. Itu sebabnya kamu melompat lebih tinggi, bukan karena tubuhmu menyusut.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Berat Seorang Anak Bermassa 50 kg di Berbagai Planet",
        unit: "newton",
        source: "perhitungan w = m g",
        note: "Massa tetap 50 kg di mana pun, tetapi beratnya berubah mengikuti g. Di Jupiter beratnya lebih dari dua kali di Bumi, di Bulan hanya sepersekian.",
        data: [
          { label: "Bulan", value: 81, color: "#fbbf24" },
          { label: "Mars", value: 186, color: "#fb7185" },
          { label: "Bumi", value: 490, color: "#f472b6" },
          { label: "Jupiter", value: 1240, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang anak bermassa 50 kg pergi ke Bulan, tempat g = 1,62 m/s kuadrat. Berapa beratnya di Bulan? Gunakan w = m dikali g.",
        answer: 81,
        tolerance: 1,
        suffix: " newton",
        solution:
          "Berat adalah gaya gravitasi: w = m x g = 50 x 1,62 = <strong>81 newton</strong>. Bandingkan dengan beratnya di Bumi, 50 x 9,8 = 490 newton. Massanya tetap 50 kg di kedua tempat.",
        hint: "Kalikan massa dengan percepatan gravitasi setempat.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah atau tempat dengan keterangannya.",
        pairs: [
          { left: "Massa", right: "Jumlah materi, sama di mana pun" },
          { left: "Berat", right: "Gaya gravitasi, berubah mengikuti g" },
          { left: "Berat di Bulan", right: "Sekitar seperenam berat di Bumi" },
          { left: "Berat di Jupiter", right: "Lebih besar daripada di Bumi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Timbangan Kamar Mandi yang 'Bohong' di Bulan",
        html: "Timbangan kamar mandi sebenarnya mengukur gaya tekan kakimu, yaitu berat, lalu menampilkannya seolah massa. Bawa timbangan itu ke Bulan, dan angkanya akan tinggal seperenam, padahal tubuhmu tidak berubah sedikit pun. Sebaliknya, timbangan dua lengan yang membandingkan dengan anak timbangan tetap akurat di mana saja, karena ia membandingkan massa lawan massa. Inilah alasan fisikawan teliti membedakan satuan kilogram (massa) dari newton (berat).",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan: berat <strong>w = m &middot; g</strong>, dengan m massa benda dan g percepatan gravitasi setempat. Karena g berbeda di tiap planet, berat ikut berubah sementara massa m tetap. Rumus ini sekadar menegaskan apa yang dirasakan astronaut: yang berubah saat melompat di Bulan adalah tarikan planet (g), bukan jumlah materi (m).",
      },
      {
        type: "takeaways",
        items: [
          "Massa adalah jumlah materi dan bernilai sama di mana pun.",
          "Berat adalah gaya gravitasi pada benda dan berubah mengikuti g setempat.",
          "Rumusnya w = m g: berat = massa dikali percepatan gravitasi.",
          "Di Bulan berat tinggal seperenam Bumi, tetapi massa tetap sama.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hubungan antara berat dan massa adalah?",
            options: ["w = m g", "w = m / g", "w = g / m", "w = m + g"],
            answer: 0,
            explain: "Berat = massa dikali percepatan gravitasi setempat.",
          },
          {
            q: "Saat seseorang pergi ke Bulan, yang tetap sama adalah?",
            options: ["Beratnya", "Massanya", "Keduanya berubah", "Keduanya nol"],
            answer: 1,
            explain: "Massa adalah jumlah materi yang tidak berubah; berat berubah mengikuti g.",
          },
          {
            q: "Berat anak 50 kg di Bumi (g = 9,8) kira-kira?",
            options: ["50 newton", "490 newton", "81 newton", "9,8 newton"],
            answer: 1,
            explain: "w = 50 x 9,8 = 490 newton.",
          },
          {
            q: "Mengapa astronaut bisa melompat tinggi di Bulan?",
            options: [
              "Karena massanya menyusut",
              "Karena berat mereka tinggal seperenam akibat g kecil",
              "Karena tidak ada gravitasi di Bulan",
              "Karena baju antariksa mendorong mereka",
            ],
            answer: 1,
            explain: "g Bulan kecil, sehingga berat mereka jauh lebih kecil walau massa tetap.",
          },
          {
            q: "Satuan yang tepat untuk berat adalah?",
            options: ["Kilogram", "Newton", "Meter", "Sekon"],
            answer: 1,
            explain: "Berat adalah gaya, satuannya newton; massa bersatuan kilogram.",
          },
        ],
      },
    ],
  },
];
