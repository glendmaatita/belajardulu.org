import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "pemantulan-pembiasan",
    levelId: "sifat-gelombang",
    order: 1,
    title: "Pemantulan dan Pembiasan",
    summary:
      "Mengapa suara kita memantul jadi gema, dan sedotan tampak patah di air? Kita amati dulu gelombang yang membentur dan berbelok sebelum rumusnya muncul.",
    durationMin: 14,
    tags: ["pemantulan", "pembiasan", "gema", "gelombang"],
    blocks: [
      {
        type: "paragraph",
        html: "Berteriak di mulut gua, suaramu kembali sebagai gema: gelombang bunyi <strong>memantul</strong> dari dinding. Celupkan sedotan ke gelas, ia tampak patah di batas air: cahaya <strong>membelok</strong> saat berpindah medium. Dua peristiwa ini, membentur dan berbelok, dialami semua gelombang. Sebelum menulis rumus, ayo amati dulu bagaimana gelombang berperilaku saat menabrak penghalang dan saat ganti medium.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Membentur dan Berbelok",
        caption: "Gelombang memantul dengan sudut sama, dan membelok saat lajunya berubah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan melempar bola miring ke tembok: ia memantul dengan sudut yang sama miringnya. Gelombang juga begitu, <strong>sudut datang sama dengan sudut pantul</strong>. Lalu bayangkan barisan ombak masuk dari laut dalam ke perairan dangkal: lajunya melambat dan arahnya sedikit <strong>berbelok</strong>. Rasakan dulu dua perilaku ini sebelum menamai hukumnya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Memantul dan membias",
        html: "<strong>Pemantulan</strong>: gelombang membentur batas dan kembali, dengan sudut datang sama dengan sudut pantul. <strong>Pembiasan</strong>: gelombang masuk medium baru, lajunya berubah sehingga arahnya membelok. Saat membias, frekuensi tetap, tetapi cepat rambat dan panjang gelombang berubah.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Panjang Gelombang Air saat Pindah Kedalaman (f tetap 2 Hz)",
        unit: "meter",
        source: "perhitungan λ = v/f; laut dalam v = 4 m/s, perairan dangkal v = 2 m/s",
        note: "Frekuensi tetap, tetapi di air dangkal laju mengecil sehingga panjang gelombang memendek. Inilah yang membuat ombak membelok dan memuncak di tepi pantai.",
        data: [
          { label: "Laut dalam (v = 4 m/s)", value: 2, color: "#38bdf8" },
          { label: "Perairan dangkal (v = 2 m/s)", value: 1, color: "#0ea5e9" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu berteriak ke tebing dan gema terdengar 2 sekon kemudian. Laju bunyi 340 m/s. Berapa jarakmu ke tebing? (gunakan jarak = v·t/2)",
        answer: 340,
        tolerance: 5,
        suffix: " m",
        solution:
          "Bunyi menempuh jarak pergi-pulang: total = v × t = 340 × 2 = 680 m. Karena itu bolak-balik, jarak ke tebing = 680/2 = <strong>340 m</strong>.",
        hint: "Bunyi menempuh dua kali jarak (pergi dan pulang), jadi bagi dua di akhir.",
      },
      {
        type: "calcExercise",
        prompt:
          "Ombak berfrekuensi 2 Hz dengan laju 4 m/s di laut dalam masuk ke perairan dangkal berlaju 2 m/s. Berapa panjang gelombang di perairan dangkal? (gunakan λ = v/f, f tetap)",
        answer: 1,
        tolerance: 0.05,
        suffix: " m",
        solution:
          "Saat membias frekuensi tetap 2 Hz. Di perairan dangkal: λ = v/f = 2/2 = <strong>1 m</strong>. Di laut dalam tadi λ = 4/2 = 2 m, jadi panjang gelombang memendek saat melambat.",
        hint: "Frekuensi tidak berubah; bagi laju baru dengan frekuensi.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap peristiwa sebagai pemantulan atau pembiasan gelombang.",
        buckets: ["Pemantulan", "Pembiasan"],
        items: [
          { text: "Gema suara kembali dari tebing", bucket: "Pemantulan" },
          { text: "Sedotan tampak patah di permukaan air", bucket: "Pembiasan" },
          { text: "Sonar kapal memantul dari dasar laut", bucket: "Pemantulan" },
          { text: "Ombak berbelok saat masuk perairan dangkal", bucket: "Pembiasan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sonar Mengukur Kedalaman Laut",
        html: "Kapal memetakan dasar laut dengan <strong>sonar</strong>: ia memancarkan pulsa bunyi ke bawah lalu menunggu pantulannya kembali. Jika bunyi merambat sekitar 1.500 m/s di air laut dan pantulan tiba 0,4 sekon kemudian, maka kedalamannya 1.500 × 0,4 / 2 = 300 meter. Prinsip pemantulan yang sama dipakai kelelawar untuk berburu dalam gelap dan mesin USG untuk melihat janin: pancarkan gelombang, ukur waktu pantulnya, hitung jaraknya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati, hukumnya pun dirangkum. <strong>Hukum pemantulan</strong>: sudut datang = sudut pantul. <strong>Hukum pembiasan (Snell)</strong>: sin θ₁ / sin θ₂ = v₁/v₂, dengan v laju di tiap medium. Untuk jarak dari pemantulan: <strong>jarak = v·t/2</strong>. Saat membias, frekuensi tetap sehingga λ ikut berubah bersama v.",
      },
      {
        type: "takeaways",
        items: [
          "Pemantulan: gelombang membentur batas, sudut datang = sudut pantul.",
          "Pembiasan: gelombang ganti medium, laju berubah sehingga arah membelok.",
          "Saat membias, frekuensi tetap; v dan λ berubah bersama.",
          "Jarak dari pantulan: jarak = v·t/2 (bunyi menempuh pergi-pulang).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada pemantulan gelombang, sudut datang selalu...",
            options: [
              "Lebih besar dari sudut pantul",
              "Sama dengan sudut pantul",
              "Nol",
              "Tegak lurus",
            ],
            answer: 1,
            explain: "Hukum pemantulan: sudut datang sama dengan sudut pantul.",
          },
          {
            q: "Saat gelombang membias ke medium baru, besaran yang tetap adalah...",
            options: ["Cepat rambat", "Panjang gelombang", "Frekuensi", "Arah"],
            answer: 2,
            explain: "Saat pembiasan, frekuensi tetap; v dan λ yang berubah.",
          },
          {
            q: "Gema terdengar 2 s setelah teriakan, laju bunyi 340 m/s. Jarak ke tebing...",
            options: ["680 m", "340 m", "170 m", "1360 m"],
            answer: 1,
            explain: "Jarak = v·t/2 = 340 × 2 / 2 = 340 m.",
          },
          {
            q: "Sedotan tampak patah di air karena gelombang cahaya mengalami...",
            options: ["Pemantulan", "Pembiasan", "Difraksi", "Resonansi"],
            answer: 1,
            explain: "Cahaya membelok saat berpindah medium, itulah pembiasan.",
          },
          {
            q: "Sonar dan USG memanfaatkan sifat gelombang berupa...",
            options: ["Pembiasan", "Pemantulan", "Difraksi", "Interferensi"],
            answer: 1,
            explain: "Keduanya mengukur jarak lewat waktu pantul gelombang.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "superposisi-dan-resonansi",
    levelId: "sifat-gelombang",
    order: 2,
    title: "Superposisi dan Interferensi",
    summary:
      "Apa jadinya bila dua gelombang bertemu di satu titik? Kita selidiki dulu perpaduannya, baru prinsip superposisinya muncul.",
    durationMin: 14,
    tags: ["superposisi", "interferensi", "gelombang", "fase"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua riak di kolam bertemu: di sebagian titik airnya jadi lebih tinggi, di titik lain malah datar. Dua pengeras suara memainkan nada sama: berjalanlah di depannya dan kamu mendengar bunyi menguat lalu melemah bergantian. Saat dua gelombang berpadu, hasilnya tidak selalu makin besar. Sebelum menamai aturannya, ayo selidiki dulu apa yang terjadi saat gelombang bertumpang.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Dua Gelombang Bertemu",
        caption: "Saat gelombang berpadu, simpangannya saling menjumlah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua gelombang berjalan saling mendekat. Kalau puncak bertemu puncak, hasilnya gelombang yang lebih <strong>tinggi</strong> (saling menguatkan). Kalau puncak bertemu lembah, keduanya saling <strong>meniadakan</strong> sehingga menjadi datar. Rasakan dulu bahwa hasil perpaduan ditentukan oleh <strong>fase</strong>: apakah keduanya seirama atau berlawanan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Superposisi dan interferensi",
        html: "<strong>Superposisi</strong>: ketika gelombang bertumpang, simpangannya dijumlahkan titik demi titik. Hasilnya disebut <strong>interferensi</strong>: <em>konstruktif</em> bila saling menguatkan (sefase), <em>destruktif</em> bila saling melemahkan (berlawanan fase).",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap situasi sebagai interferensi konstruktif (menguat) atau destruktif (melemah).",
        buckets: ["Konstruktif", "Destruktif"],
        items: [
          { text: "Puncak gelombang bertemu puncak gelombang", bucket: "Konstruktif" },
          { text: "Puncak gelombang bertemu lembah gelombang", bucket: "Destruktif" },
          { text: "Dua gelombang sefase berpadu", bucket: "Konstruktif" },
          { text: "Dua gelombang berlawanan fase berpadu", bucket: "Destruktif" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dua gelombang sefase bertemu di satu titik. Yang pertama beramplitudo 3 cm, yang kedua 4 cm. Berapa amplitudo gabungannya saat interferensi konstruktif?",
        answer: 7,
        tolerance: 0.1,
        suffix: " cm",
        solution:
          "Pada interferensi konstruktif, simpangan dijumlahkan: 3 + 4 = <strong>7 cm</strong>. Itulah inti prinsip superposisi.",
        hint: "Saat menguat, kedua amplitudo cukup dijumlahkan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua gelombang berlawanan fase bertemu, beramplitudo 5 cm dan 3 cm. Berapa amplitudo gabungannya saat interferensi destruktif?",
        answer: 2,
        tolerance: 0.1,
        suffix: " cm",
        solution:
          "Pada interferensi destruktif, simpangan saling mengurangi: 5 − 3 = <strong>2 cm</strong>. Jika keduanya sama besar, hasilnya bisa nol total.",
        hint: "Saat melemah, kurangkan amplitudo yang besar dengan yang kecil.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya.",
        pairs: [
          { left: "Superposisi", right: "Simpangan gelombang yang bertemu dijumlahkan" },
          { left: "Interferensi konstruktif", right: "Gelombang saling menguatkan (sefase)" },
          { left: "Interferensi destruktif", right: "Gelombang saling melemahkan (berlawanan fase)" },
          { left: "Fase", right: "Penentu apakah perpaduan menguat atau melemah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Headphone Peredam Bising Aktif",
        html: "Headphone peredam bising (noise-cancelling) memakai interferensi destruktif dengan cerdik. Mikrofon kecil menangkap suara bising dari luar, lalu rangkaian elektronik menghasilkan gelombang bunyi yang persis <strong>berlawanan fase</strong> dengan bising itu. Saat keduanya berpadu di telingamu, puncak bertemu lembah dan saling meniadakan, sehingga deru mesin pesawat terdengar jauh lebih pelan. Prinsip superposisi yang sama yang membuat dua riak saling membatalkan dipakai untuk menciptakan keheningan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menyelidiki, aturannya kita rangkum. <strong>Prinsip superposisi</strong>: simpangan total = jumlah simpangan tiap gelombang, <strong>y = y₁ + y₂</strong>. Interferensi <strong>konstruktif</strong> saat sefase, amplitudo dijumlahkan (A = A₁ + A₂). Interferensi <strong>destruktif</strong> saat berlawanan fase, amplitudo dikurangkan (A = |A₁ − A₂|).",
      },
      {
        type: "takeaways",
        items: [
          "Superposisi: simpangan gelombang yang bertemu saling dijumlahkan.",
          "Konstruktif menguatkan (sefase): amplitudo dijumlahkan.",
          "Destruktif melemahkan (berlawanan fase): amplitudo dikurangkan.",
          "Hasil perpaduan ditentukan oleh fase kedua gelombang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Prinsip superposisi menyatakan bahwa simpangan dua gelombang yang bertemu...",
            options: ["Dikalikan", "Dijumlahkan", "Dibagi", "Selalu saling membatalkan"],
            answer: 1,
            explain: "Simpangan total adalah jumlah simpangan masing-masing gelombang.",
          },
          {
            q: "Puncak bertemu lembah menghasilkan interferensi...",
            options: ["Konstruktif", "Destruktif", "Resonansi", "Refraksi"],
            answer: 1,
            explain: "Puncak dan lembah saling meniadakan, jadi destruktif.",
          },
          {
            q: "Dua gelombang sefase beramplitudo 2 cm dan 5 cm berinterferensi konstruktif. Amplitudo hasilnya...",
            options: ["3 cm", "7 cm", "10 cm", "2,5 cm"],
            answer: 1,
            explain: "Konstruktif: 2 + 5 = 7 cm.",
          },
          {
            q: "Dua gelombang berlawanan fase beramplitudo 6 cm dan 4 cm. Amplitudo gabungannya...",
            options: ["10 cm", "2 cm", "24 cm", "0 cm"],
            answer: 1,
            explain: "Destruktif: |6 − 4| = 2 cm.",
          },
          {
            q: "Headphone peredam bising aktif memanfaatkan interferensi...",
            options: ["Konstruktif", "Destruktif", "Difraksi", "Pembiasan"],
            answer: 1,
            explain: "Gelombang berlawanan fase meniadakan bising lewat interferensi destruktif.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "difraksi-gelombang",
    levelId: "sifat-gelombang",
    order: 3,
    title: "Difraksi Gelombang",
    summary:
      "Mengapa kita bisa mendengar orang di balik tembok tapi tidak bisa melihatnya? Kita amati dulu gelombang yang melentur sebelum aturannya muncul.",
    durationMin: 13,
    tags: ["difraksi", "celah", "gelombang", "panjang-gelombang"],
    blocks: [
      {
        type: "paragraph",
        html: "Berdiri di balik tembok, kamu tetap bisa mendengar orang mengobrol di seberang, padahal kamu tidak bisa melihat mereka. Ombak yang masuk lewat celah sempit pelabuhan menyebar membentuk busur di baliknya. Gelombang ternyata bisa <strong>melentur</strong> di tepi penghalang dan menjalar ke daerah 'bayangan'. Sebelum menulis aturannya, ayo amati dulu kapan lenturan ini jelas dan kapan tidak.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Gelombang Melentur di Celah",
        caption: "Gelombang menyebar membentuk busur setelah melewati celah sempit.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan ombak lurus menabrak dinding berlubang. Kalau lubangnya <strong>lebar</strong> dibanding panjang gelombang, ombak lewat hampir lurus. Kalau lubangnya <strong>sesempit</strong> seukuran panjang gelombang, ombak di baliknya menyebar lebar membentuk busur. Aturan mainnya: difraksi makin jelas bila celah seukuran atau lebih kecil dari panjang gelombang. Rasakan dulu hubungan celah dengan λ ini.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Difraksi dan ukuran celah",
        html: "<strong>Difraksi</strong> adalah pelenturan gelombang saat melewati celah atau tepi penghalang. Difraksi paling jelas ketika lebar celah <strong>sebanding atau lebih kecil</strong> dari panjang gelombang. Karena itu bunyi (λ besar, hitungan meter) mudah berdifraksi mengitari tembok, sedangkan cahaya (λ amat kecil) hampir tidak.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "calcExercise",
        prompt:
          "Bunyi percakapan berfrekuensi sekitar 340 Hz merambat 340 m/s. Berapa panjang gelombangnya? (gunakan λ = v/f)",
        answer: 1,
        tolerance: 0.05,
        suffix: " m",
        solution:
          "λ = v/f = 340/340 = <strong>1 m</strong>. Karena panjang gelombang bunyi sekitar 1 meter, sebanding dengan lebar pintu, bunyi mudah berdifraksi mengitari tepi pintu dan tembok.",
        hint: "Bagi laju bunyi dengan frekuensinya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Cahaya tampak memiliki panjang gelombang sekitar 5 × 10⁻⁷ m. Berapa kali lebih pendek panjang gelombang ini dibanding bunyi 1 m tadi? (bagi 1 dengan 5 × 10⁻⁷)",
        answer: 2000000,
        tolerance: 100000,
        suffix: " kali",
        solution:
          "1 / (5 × 10⁻⁷) = <strong>2.000.000 kali</strong> lebih pendek. Karena panjang gelombang cahaya jauh lebih kecil dari celah biasa, cahaya nyaris tidak berdifraksi, sehingga kita tidak bisa 'melihat' menembus tembok seperti kita 'mendengar'.",
        hint: "Bagi 1 meter dengan 5 × 10⁻⁷ meter.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan, manakah keadaan yang membuat difraksi tampak jelas dan mana yang tidak.",
        buckets: ["Difraksi jelas", "Difraksi nyaris tak tampak"],
        items: [
          { text: "Celah selebar satu panjang gelombang", bucket: "Difraksi jelas" },
          { text: "Bunyi mengitari sudut tembok", bucket: "Difraksi jelas" },
          { text: "Cahaya melewati pintu lebar", bucket: "Difraksi nyaris tak tampak" },
          { text: "Celah jauh lebih lebar dari panjang gelombang", bucket: "Difraksi nyaris tak tampak" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Radio AM Sampai ke Lembah",
        html: "Siaran radio <strong>AM</strong> memakai gelombang berpanjang ratusan meter, sedangkan radio <strong>FM</strong> dan TV memakai gelombang beberapa meter saja. Karena panjang gelombangnya raksasa, sinyal AM mudah berdifraksi mengitari bukit dan masuk ke lembah, sehingga bisa diterima di daerah yang terhalang. Sinyal FM yang berpanjang gelombang pendek tidak selentur itu, jadi butuh pemancar pada garis pandang. Itulah sebabnya di pegunungan terpencil radio AM kerap masih terdengar saat FM hilang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati, aturannya pun jelas. <strong>Difraksi makin jelas ketika lebar celah (d) sebanding atau lebih kecil dari panjang gelombang (λ)</strong>, yaitu saat λ/d besar. Untuk membandingkan, kita pakai <strong>λ = v/f</strong>: gelombang berfrekuensi rendah punya λ besar sehingga lebih mudah melentur, sedangkan gelombang berfrekuensi sangat tinggi (λ kecil) hampir tidak berdifraksi.",
      },
      {
        type: "takeaways",
        items: [
          "Difraksi adalah pelenturan gelombang di celah atau tepi penghalang.",
          "Difraksi jelas bila lebar celah sebanding atau lebih kecil dari λ.",
          "Bunyi (λ besar) mudah berdifraksi; cahaya (λ amat kecil) hampir tidak.",
          "Membandingkan λ memakai λ = v/f menjelaskan beda perilaku gelombang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Difraksi adalah peristiwa gelombang yang...",
            options: [
              "Memantul dari dinding",
              "Melentur di celah atau tepi penghalang",
              "Berubah frekuensi",
              "Berhenti total",
            ],
            answer: 1,
            explain: "Difraksi adalah pelenturan gelombang di celah atau tepi penghalang.",
          },
          {
            q: "Difraksi paling jelas terjadi ketika lebar celah...",
            options: [
              "Jauh lebih besar dari λ",
              "Sebanding atau lebih kecil dari λ",
              "Nol",
              "Tak berhubungan dengan λ",
            ],
            answer: 1,
            explain: "Difraksi menonjol saat celah seukuran atau lebih kecil dari panjang gelombang.",
          },
          {
            q: "Mengapa kita bisa mendengar tapi tak bisa melihat orang di balik tembok?",
            options: [
              "Bunyi lebih cepat dari cahaya",
              "Panjang gelombang bunyi besar sehingga mudah berdifraksi",
              "Cahaya tidak membawa energi",
              "Tembok menyerap cahaya saja",
            ],
            answer: 1,
            explain: "λ bunyi besar (mudah melentur), λ cahaya amat kecil (hampir tak melentur).",
          },
          {
            q: "Bunyi 340 m/s berfrekuensi 340 Hz memiliki panjang gelombang...",
            options: ["0,5 m", "1 m", "2 m", "340 m"],
            answer: 1,
            explain: "λ = v/f = 340/340 = 1 m.",
          },
          {
            q: "Radio AM lebih mudah menjangkau lembah dibanding FM karena...",
            options: [
              "Dayanya lebih besar",
              "Panjang gelombangnya jauh lebih besar sehingga lebih mudah berdifraksi",
              "Frekuensinya lebih tinggi",
              "Tidak butuh pemancar",
            ],
            answer: 1,
            explain: "λ AM yang panjang membuatnya mudah melentur mengitari bukit.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gelombang-berdiri",
    levelId: "sifat-gelombang",
    order: 4,
    title: "Gelombang Berdiri",
    summary:
      "Mengapa dawai gitar hanya berbunyi pada nada tertentu? Kita amati dulu pola diamnya, baru rumus frekuensinya muncul.",
    durationMin: 14,
    tags: ["gelombang-berdiri", "dawai", "harmonik", "simpul"],
    blocks: [
      {
        type: "paragraph",
        html: "Petik satu dawai gitar: ia bergetar dan mengeluarkan nada yang sama setiap kali, tidak pernah meleset. Lihat baik-baik, dawai itu tampak bergetar di tengah tapi diam di kedua ujung. Pola getaran yang seakan 'diam di tempat' inilah <strong>gelombang berdiri</strong>. Sebelum menulis rumus nadanya, ayo amati dulu pola simpul dan perutnya.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Dawai yang Bergetar",
        caption: "Gelombang yang terpantul bolak-balik membentuk pola tetap.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ikat seutas tali di kedua ujung lalu getarkan. Kamu akan melihat titik-titik yang tetap <strong>diam</strong> (disebut simpul) dan titik-titik yang bergetar paling besar (disebut perut). Pola ini hanya muncul pada frekuensi tertentu. Bermainlah dengan panjang tali: makin pendek tali, makin tinggi nadanya. Rasakan dulu hubungan ini.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Simpul, perut, dan nada dasar",
        html: "<strong>Simpul</strong> adalah titik yang selalu diam; <strong>perut</strong> adalah titik dengan simpangan terbesar. Pola paling sederhana (satu perut) menghasilkan <strong>nada dasar</strong>. Pola dengan lebih banyak simpul menghasilkan nada-nada lebih tinggi yang disebut harmonik.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Frekuensi Harmonik Dawai (nada dasar 110 Hz)",
        unit: "Hz",
        source: "perhitungan fn = n · f₁ untuk dawai terikat dua ujung",
        note: "Frekuensi harmonik adalah kelipatan bulat dari nada dasar: 1×, 2×, 3×, dan seterusnya.",
        data: [
          { label: "Harmonik 1 (dasar)", value: 110, color: "#fb923c" },
          { label: "Harmonik 2", value: 220, color: "#f59e0b" },
          { label: "Harmonik 3", value: 330, color: "#f43f5e" },
          { label: "Harmonik 4", value: 440, color: "#a855f7" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah dawai sepanjang 0,5 m terikat di kedua ujung. Cepat rambat gelombang pada dawai 400 m/s. Berapa frekuensi nada dasarnya? (gunakan f₁ = v/2L)",
        answer: 400,
        tolerance: 2,
        suffix: " Hz",
        solution:
          "f₁ = v/(2L) = 400/(2 × 0,5) = 400/1 = <strong>400 Hz</strong>. Pada nada dasar, panjang dawai sama dengan setengah panjang gelombang.",
        hint: "Bagi cepat rambat dengan dua kali panjang dawai.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika nada dasar sebuah dawai 150 Hz, berapa frekuensi harmonik ketiganya? (gunakan fn = n·f₁)",
        answer: 450,
        tolerance: 1,
        suffix: " Hz",
        solution:
          "f₃ = 3 × f₁ = 3 × 150 = <strong>450 Hz</strong>. Harmonik adalah kelipatan bulat dari nada dasar.",
        hint: "Kalikan nada dasar dengan tiga.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya pada gelombang berdiri.",
        pairs: [
          { left: "Simpul", right: "Titik yang selalu diam" },
          { left: "Perut", right: "Titik dengan simpangan terbesar" },
          { left: "Nada dasar", right: "Pola paling sederhana dengan satu perut" },
          { left: "Harmonik", right: "Frekuensi kelipatan dari nada dasar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menyetel Gitar dan Alat Musik Petik",
        html: "Saat memutar pasak gitar, pemain sedang mengubah <strong>tegangan</strong> dawai, yang mengatur cepat rambat gelombang sehingga frekuensi nada dasarnya pas. Saat menekan fret, ia memendekkan panjang dawai yang bergetar (L), sehingga nadanya naik. Setiap dawai hanya mau berbunyi pada frekuensi-frekuensi yang membentuk gelombang berdiri rapi, dan kombinasi nada dasar serta harmoniknyalah yang memberi tiap alat musik warna suara khasnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati pola simpul dan perut, rumus pun muncul. Untuk dawai terikat di kedua ujung, frekuensi yang diizinkan: <strong>fn = n · v/(2L)</strong>, dengan n = 1, 2, 3, ... Nada dasar (n = 1): <strong>f₁ = v/(2L)</strong>; harmonik berikutnya adalah kelipatan bulatnya. Di sini v cepat rambat pada dawai dan L panjang dawai.",
      },
      {
        type: "takeaways",
        items: [
          "Gelombang berdiri terbentuk dari gelombang yang terpantul bolak-balik, polanya tetap.",
          "Simpul selalu diam; perut bersimpangan terbesar.",
          "Dawai hanya berbunyi pada frekuensi tertentu: fn = n·v/(2L).",
          "Nada dasar f₁ = v/(2L); harmonik adalah kelipatan bulatnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Titik yang selalu diam pada gelombang berdiri disebut...",
            options: ["Perut", "Simpul", "Puncak", "Amplitudo"],
            answer: 1,
            explain: "Simpul adalah titik yang selalu diam.",
          },
          {
            q: "Dawai 0,5 m dengan cepat rambat 400 m/s memiliki nada dasar...",
            options: ["200 Hz", "400 Hz", "800 Hz", "100 Hz"],
            answer: 1,
            explain: "f₁ = v/(2L) = 400/1 = 400 Hz.",
          },
          {
            q: "Harmonik ketiga dari nada dasar 100 Hz adalah...",
            options: ["100 Hz", "200 Hz", "300 Hz", "400 Hz"],
            answer: 2,
            explain: "f₃ = 3 × f₁ = 3 × 100 = 300 Hz.",
          },
          {
            q: "Menekan fret gitar memperpendek L, sehingga nadanya...",
            options: ["Turun", "Naik", "Tetap", "Hilang"],
            answer: 1,
            explain: "f₁ = v/(2L); L lebih kecil membuat frekuensi naik.",
          },
          {
            q: "Frekuensi harmonik pada dawai selalu...",
            options: [
              "Acak",
              "Kelipatan bulat nada dasar",
              "Setengah nada dasar",
              "Sama dengan nada dasar",
            ],
            answer: 1,
            explain: "Harmonik adalah kelipatan bulat (n) dari nada dasar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "polarisasi-gelombang",
    levelId: "sifat-gelombang",
    order: 5,
    title: "Polarisasi Gelombang",
    summary:
      "Sebagian gelombang bisa 'disaring' agar hanya bergetar pada satu arah. Sifat ini cuma dimiliki gelombang transversal, dan jadi cara membedakannya dari longitudinal.",
    durationMin: 13,
    tags: ["polarisasi", "transversal", "cahaya", "hukum malus"],
    blocks: [
      {
        type: "paragraph",
        html: "Kacamata hitam polaroid bisa meredam silau pantulan di air atau aspal jauh lebih baik daripada kaca gelap biasa. Rahasianya adalah <strong>polarisasi</strong>: kemampuan menyaring gelombang agar hanya yang bergetar pada satu arah tertentu yang lolos. Ini sifat istimewa yang tidak dimiliki semua gelombang.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Menyaring Arah Getar",
        caption: "Celah penyaring hanya meloloskan getaran yang searah dengannya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Hanya gelombang transversal",
        html: "Polarisasi <strong>hanya bisa terjadi pada gelombang transversal</strong>, yaitu yang arah getarnya tegak lurus arah rambat (misalnya cahaya dan gelombang tali). Gelombang longitudinal seperti bunyi <strong>tidak bisa dipolarisasi</strong>, karena getarannya searah rambat sehingga tidak ada arah lain untuk disaring. Inilah uji penentu jenis gelombang.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Polarisator dan analisator",
        html: "Lembar pertama (<strong>polarisator</strong>) mengubah cahaya alami yang bergetar ke segala arah menjadi cahaya yang bergetar satu arah, sekaligus memotong intensitasnya menjadi separuh. Lembar kedua (<strong>analisator</strong>) menyaring lagi sesuai sudut antara sumbunya dan arah getar cahaya yang datang.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "line",
        title: "Intensitas Lolos terhadap Sudut Analisator (Hukum Malus)",
        unit: "I/I₀",
        source: "ilustrasi edukatif (I = I₀ cos²θ)",
        note: "Saat sumbu analisator sejajar (0°) semua lolos; saat tegak lurus (90°) tidak ada yang lolos; pada 45° tepat separuh.",
        data: [
          { label: "0°", value: 1, color: "#6366f1" },
          { label: "30°", value: 0.75, color: "#6366f1" },
          { label: "45°", value: 0.5, color: "#6366f1" },
          { label: "60°", value: 0.25, color: "#4f46e5" },
          { label: "90°", value: 0, color: "#4f46e5" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dua Lembar Polaroid",
        html: "Cahaya alami berintensitas 80 W/m² melewati polarisator. Intensitasnya turun jadi separuh, 40 W/m², dan kini terpolarisasi. Cahaya ini lalu melewati analisator yang sumbunya membentuk sudut 60° terhadap arah getar cahaya. Menurut hukum Malus, I = I&#8320; cos²θ = 40 x cos²60° = 40 x (0,5)² = 40 x 0,25 = <strong>10 W/m²</strong>. Jadi dari 80 W/m² semula, hanya 10 W/m² yang akhirnya lolos.",
      },
      {
        type: "calcExercise",
        prompt:
          "Cahaya terpolarisasi berintensitas 80 W/m² melewati analisator yang sumbunya membentuk sudut 60° terhadap arah getar cahaya. Berapa intensitas yang lolos?",
        answer: 20,
        tolerance: 0.5,
        suffix: " W/m²",
        solution:
          "Hukum Malus: I = I&#8320; cos²θ = 80 x cos²60° = 80 x (0,5)² = 80 x 0,25 = <strong>20 W/m²</strong>.",
        hint: "cos 60° = 0,5; kuadratkan dulu baru kalikan dengan intensitas datang.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan gelombang berikut, mana yang dapat dipolarisasi dan mana yang tidak.",
        buckets: ["Dapat dipolarisasi", "Tidak dapat dipolarisasi"],
        items: [
          { text: "Cahaya tampak", bucket: "Dapat dipolarisasi" },
          { text: "Gelombang pada tali yang digetarkan ke atas-bawah", bucket: "Dapat dipolarisasi" },
          { text: "Gelombang bunyi di udara", bucket: "Tidak dapat dipolarisasi" },
          { text: "Rapatan dan regangan pada slinki yang didorong memanjang", bucket: "Tidak dapat dipolarisasi" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Bukti cahaya itu transversal",
        html: "Fakta bahwa cahaya bisa dipolarisasi adalah bukti kuat bahwa cahaya merupakan gelombang transversal. Kalau cahaya merambat secara longitudinal seperti bunyi, kacamata polaroid mustahil bekerja.",
      },
      {
        type: "takeaways",
        items: [
          "Polarisasi adalah penyaringan gelombang agar hanya satu arah getar yang lolos.",
          "Hanya gelombang transversal yang bisa dipolarisasi; longitudinal tidak.",
          "Polarisator mengubah cahaya alami jadi terpolarisasi dan memotong intensitas jadi separuh.",
          "Hukum Malus: I = I₀ cos²θ untuk cahaya yang sudah terpolarisasi.",
          "Pada sudut 90° tidak ada cahaya yang lolos; pada 45° lolos separuh.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Polarisasi hanya dapat terjadi pada gelombang...",
            options: ["Longitudinal", "Transversal", "Bunyi", "Semua gelombang"],
            answer: 1,
            explain: "Hanya gelombang transversal yang punya arah getar tegak lurus untuk disaring.",
          },
          {
            q: "Gelombang bunyi tidak dapat dipolarisasi karena...",
            options: [
              "Terlalu cepat",
              "Bersifat longitudinal, getarannya searah rambat",
              "Tidak punya energi",
              "Frekuensinya terlalu tinggi",
            ],
            answer: 1,
            explain: "Getaran longitudinal searah rambat, jadi tidak ada arah lain untuk disaring.",
          },
          {
            q: "Hukum Malus menyatakan intensitas lolos sebanding dengan...",
            options: ["cos θ", "cos²θ", "sin θ", "θ²"],
            answer: 1,
            explain: "I = I₀ cos²θ.",
          },
          {
            q: "Cahaya terpolarisasi 100 W/m² melewati analisator pada sudut 60°. Intensitas lolos...",
            options: ["25 W/m²", "50 W/m²", "75 W/m²", "100 W/m²"],
            answer: 0,
            explain: "I = 100 x cos²60° = 100 x 0,25 = 25 W/m².",
          },
          {
            q: "Cahaya alami yang melewati satu polarisator intensitasnya menjadi...",
            options: ["Tetap", "Nol", "Separuh", "Dua kali"],
            answer: 2,
            explain: "Polarisator meloloskan separuh intensitas cahaya alami dan membuatnya terpolarisasi.",
          },
        ],
      },
    ],
  },
];
