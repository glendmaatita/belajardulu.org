import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "pengertian-usaha",
    levelId: "usaha-daya",
    order: 1,
    title: "Pengertian Usaha",
    summary:
      "Berkeringat mendorong tembok yang tak bergerak: dalam fisika itu bukan usaha. Kita cari tahu dulu kapan dorongan benar-benar 'berbuah'.",
    durationMin: 12,
    tags: ["fisika", "usaha", "gaya", "perpindahan"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu mendorong tembok sekuat tenaga. Otot tegang, napas memburu, keringat mengalir, tetapi tembok tidak bergerak sedikit pun. Dalam bahasa sehari-hari kamu 'bekerja keras', tetapi dalam fisika kamu belum melakukan <strong>usaha</strong> sama sekali. Usaha baru lahir ketika gaya berhasil membuat benda <strong>berpindah</strong>. Jangan buru-buru ke rumus, ayo rasakan dulu kapan sebuah gaya benar-benar membuahkan hasil.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Apa Sebenarnya Usaha Itu?",
        caption:
          "Usaha terjadi ketika gaya membuat benda berpindah searah gaya tersebut.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba dua hal ini. Pertama, dorong dinding kamarmu kuat-kuat selama sepuluh detik. Kedua, dorong kursi beroda dari pintu ke jendela. Pada dorongan dinding, tidak ada perpindahan, jadi tidak ada usaha. Pada kursi, ada perpindahan, jadi ada usaha. Rasakan: yang menentukan bukan seberapa lelah kamu, melainkan apakah benda berpindah.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Usaha bisa bernilai nol",
        html: "Menahan tas berat di tangan tanpa bergerak terasa melelahkan, tetapi karena tidak ada perpindahan, usaha mekaniknya nol. Begitu pula saat kamu membawa tas mendatar dengan kecepatan tetap: gaya angkatmu ke atas, sedangkan perpindahannya mendatar, sehingga gaya itu tidak melakukan usaha.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Tentukan mana yang melakukan usaha (ada perpindahan searah gaya) dan mana yang tidak.",
        buckets: ["Ada usaha", "Tidak ada usaha"],
        items: [
          { text: "Mengangkat ember dari lantai ke meja", bucket: "Ada usaha" },
          { text: "Menahan ember diam di tangan", bucket: "Tidak ada usaha" },
          { text: "Menarik gerobak hingga maju", bucket: "Ada usaha" },
          { text: "Mendorong lemari yang tetap diam", bucket: "Tidak ada usaha" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu mendorong troli dengan gaya 30 N searah gerak dan troli berpindah 5 m. Berapa usaha yang kamu lakukan?",
        answer: 150,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Usaha = gaya searah perpindahan dikali jarak perpindahan = 30 N x 5 m = <strong>150 joule</strong>.",
        hint: "Kalikan gaya dengan jarak perpindahan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seseorang mendorong dinding dengan gaya 200 N, tetapi dinding tidak bergerak. Berapa usaha yang dilakukannya?",
        answer: 0,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Tidak ada perpindahan, sehingga usaha = 200 N x 0 m = <strong>0 joule</strong>. Lelah bukan berarti melakukan usaha mekanik.",
        hint: "Berapa jarak perpindahan dindingnya?",
      },
      {
        type: "case",
        title: "Studi Kasus: Pramusaji Membawa Nampan",
        html: "Seorang pramusaji membawa nampan penuh gelas dengan kecepatan tetap menyeberangi ruang makan yang datar. Tangannya menahan beban ke atas, tetapi perpindahan nampan ke arah samping. Karena gaya angkat tegak lurus arah jalan, gaya itu <strong>tidak melakukan usaha</strong> pada nampan. Inilah mengapa membawa beban mendatar terasa berat bagi otot, padahal secara fisika usaha mekaniknya nol. Otot tetap bekerja menahan beban, tetapi tidak ada usaha yang dilakukan pada nampan itu sendiri.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>Usaha</strong> adalah hasil kali gaya searah perpindahan dengan besar perpindahan: W = F x s. Satuannya joule (J), yaitu newton dikali meter. Jika perpindahan nol, usaha pun nol, sekuat apa pun gayanya. Jika gaya tegak lurus perpindahan, usahanya juga nol.",
      },
      {
        type: "takeaways",
        items: [
          "Usaha membutuhkan gaya dan perpindahan searah gaya.",
          "W = F x s, dengan satuan joule.",
          "Tanpa perpindahan, usaha bernilai nol meski gaya besar.",
          "Gaya tegak lurus perpindahan tidak melakukan usaha.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapan sebuah gaya melakukan usaha?",
            options: [
              "Saat benda berpindah searah gaya",
              "Saat otot terasa lelah",
              "Saat benda diam",
              "Saat gaya sangat besar",
            ],
            answer: 0,
            explain: "Usaha memerlukan perpindahan searah gaya.",
          },
          {
            q: "Satuan usaha adalah?",
            options: ["watt", "newton", "joule", "sekon"],
            answer: 2,
            explain: "Usaha diukur dalam joule (newton x meter).",
          },
          {
            q: "Gaya 40 N memindahkan benda 3 m searah gaya. Usahanya?",
            options: ["120 J", "43 J", "13 J", "0 J"],
            answer: 0,
            explain: "W = 40 x 3 = 120 J.",
          },
          {
            q: "Mendorong tembok yang tetap diam menghasilkan usaha?",
            options: ["Besar", "Nol", "Negatif besar", "Tak terhingga"],
            answer: 1,
            explain: "Tanpa perpindahan, usaha nol.",
          },
          {
            q: "Membawa tas mendatar dengan kecepatan tetap, gaya angkat ke atas melakukan usaha?",
            options: [
              "Ya, sangat besar",
              "Tidak, karena tegak lurus perpindahan",
              "Ya, sebanding berat",
              "Tidak bisa ditentukan",
            ],
            answer: 1,
            explain: "Gaya tegak lurus arah gerak tidak melakukan usaha.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "usaha-gaya-konstan",
    levelId: "usaha-daya",
    order: 2,
    title: "Usaha oleh Gaya Konstan",
    summary:
      "Dorong gerobak dengan gaya tetap, makin jauh makin besar usahanya. Hubungannya lurus dan rapi, kita lihat polanya dulu.",
    durationMin: 12,
    tags: ["fisika", "usaha", "gaya konstan", "perpindahan"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu mendorong gerobak dengan gaya yang sama terus-menerus searah jalan. Setelah satu meter terasa ringan, setelah sepuluh meter kamu sudah mengeluarkan jauh lebih banyak 'usaha'. Ketika gaya tetap besarnya dan searah perpindahan, usaha bertambah secara teratur mengikuti jaraknya. Sebelum menulis rumus, ayo amati pola lurus antara usaha dan jarak ini.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Gaya Tetap, Jarak Bertambah",
        caption:
          "Dengan gaya konstan searah gerak, usaha bertambah sebanding dengan jarak perpindahan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Geser sebuah buku tebal di meja dengan dorongan yang kamu jaga tetap. Geser satu jengkal, lalu dua jengkal, lalu tiga jengkal. Tiap kali jaraknya bertambah, 'jatah' usaha yang kamu berikan bertambah dengan takaran yang sama. Gaya tidak berubah, hanya jaraknya yang menumpuk.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Usaha oleh Gaya Konstan 20 N pada Berbagai Jarak",
        unit: "joule",
        source: "ilustrasi edukatif",
        note: "Gaya tetap 20 N. Usaha naik lurus terhadap jarak: tiap tambahan 2 m menambah 40 J. Inilah ciri gaya konstan searah gerak.",
        data: [
          { label: "0 m", value: 0, color: "#a78bfa" },
          { label: "2 m", value: 40, color: "#a78bfa" },
          { label: "4 m", value: 80, color: "#a78bfa" },
          { label: "6 m", value: 120, color: "#a78bfa" },
          { label: "8 m", value: 160, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah peti didorong dengan gaya konstan 25 N searah gerak sejauh 8 m. Berapa usaha yang dilakukan?",
        answer: 200,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "W = F x s = 25 N x 8 m = <strong>200 joule</strong>.",
        hint: "Kalikan gaya konstan dengan jarak.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah gaya konstan melakukan usaha 360 J saat memindahkan benda sejauh 12 m searah gaya. Berapa besar gayanya?",
        answer: 30,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Dari W = F x s, maka F = W / s = 360 J / 12 m = <strong>30 newton</strong>.",
        hint: "Bagi usaha dengan jarak perpindahan.",
      },
      {
        type: "matchExercise",
        prompt:
          "Dengan gaya konstan 50 N searah gerak, pasangkan jarak perpindahan dengan usaha yang dihasilkan.",
        pairs: [
          { left: "Jarak 2 m", right: "100 J" },
          { left: "Jarak 4 m", right: "200 J" },
          { left: "Jarak 6 m", right: "300 J" },
          { left: "Jarak 10 m", right: "500 J" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menarik Koper di Bandara",
        html: "Saat menarik koper beroda di lantai datar bandara, kamu memberi gaya tarik yang kira-kira tetap searah gerak. Dari gerbang keberangkatan ke ruang tunggu mungkin 50 meter, ke gerbang yang jauh bisa 300 meter. Karena gayamu hampir sama, usaha yang kamu lakukan bertambah <strong>sebanding</strong> dengan jaraknya: enam kali lebih jauh berarti kira-kira enam kali lebih banyak usaha. Itulah sebabnya gerbang yang jauh terasa lebih melelahkan, padahal kopernya sama berat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya. Untuk gaya <strong>konstan</strong> yang searah perpindahan, usaha adalah hasil kali keduanya: W = F x s. Karena F tetap, usaha berbanding lurus dengan jarak s, maka grafik usaha terhadap jarak berupa garis lurus melalui titik nol. Kemiringan garis itu sama dengan besar gaya.",
      },
      {
        type: "takeaways",
        items: [
          "Untuk gaya konstan searah gerak, W = F x s.",
          "Usaha berbanding lurus dengan jarak perpindahan.",
          "Grafik usaha terhadap jarak adalah garis lurus dari titik nol.",
          "Kemiringan grafik usaha-jarak sama dengan besar gaya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Untuk gaya konstan searah gerak, usaha dihitung dengan?",
            options: ["W = F / s", "W = F x s", "W = s / F", "W = F + s"],
            answer: 1,
            explain: "Usaha gaya konstan searah gerak adalah F dikali s.",
          },
          {
            q: "Gaya konstan 15 N memindahkan benda 6 m searah gaya. Usahanya?",
            options: ["90 J", "21 J", "2,5 J", "9 J"],
            answer: 0,
            explain: "W = 15 x 6 = 90 J.",
          },
          {
            q: "Jika jarak digandakan dengan gaya tetap, usaha menjadi?",
            options: ["Setengah", "Tetap", "Dua kali", "Empat kali"],
            answer: 2,
            explain: "Usaha sebanding jarak, jadi dua kali lipat.",
          },
          {
            q: "Grafik usaha terhadap jarak untuk gaya konstan berbentuk?",
            options: [
              "Garis lurus dari titik nol",
              "Parabola",
              "Garis mendatar",
              "Kurva menurun",
            ],
            answer: 0,
            explain: "Karena W = F x s dengan F tetap, grafiknya garis lurus.",
          },
          {
            q: "Usaha 240 J dilakukan gaya konstan menempuh 8 m searah gaya. Gayanya?",
            options: ["30 N", "1920 N", "32 N", "3 N"],
            answer: 0,
            explain: "F = W / s = 240 / 8 = 30 N.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "usaha-gaya-bersudut",
    levelId: "usaha-daya",
    order: 3,
    title: "Usaha oleh Gaya Bersudut",
    summary:
      "Menarik koper dengan tali miring: hanya sebagian gaya yang benar-benar mendorong maju. Kita pisahkan dulu bagian yang berguna.",
    durationMin: 13,
    tags: ["fisika", "usaha", "sudut", "komponen gaya"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat kamu menarik koper beroda dengan tali yang miring ke atas, sebagian tarikanmu membuat koper maju, dan sebagian lagi seolah mengangkatnya. Hanya bagian yang searah gerak yang benar-benar melakukan usaha mendorong koper maju. Makin miring talimu, makin sedikit bagian tarikan yang berguna. Sebelum bertemu rumus, ayo pahami dulu mengapa arah gaya menentukan berapa banyak usaha yang dihasilkan.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Hanya Bagian yang Searah yang Berguna",
        caption:
          "Saat gaya membentuk sudut dengan perpindahan, hanya komponen searah gerak yang melakukan usaha.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ikat tali pada kotak lalu tarik mendatar, sejajar lantai. Hampir seluruh tarikanmu mendorong kotak maju. Sekarang tarik dengan tali yang condong tinggi ke atas. Kotak tetap maju, tetapi terasa sebagian tenagamu 'terbuang' untuk mengangkat. Makin tegak arah tarikan, makin kecil bagian yang mendorong maju, sampai kalau ditarik lurus ke atas, kotak tidak maju sama sekali.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Komponen searah gerak yang berperan",
        html: "Gaya yang miring bisa dibayangkan terbagi dua: bagian yang searah perpindahan dan bagian yang tegak lurus perpindahan. Hanya bagian searah perpindahan yang melakukan usaha. Bagian tegak lurus, misalnya yang mengangkat, tidak menambah usaha pada gerak mendatar.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Usaha Gaya 100 N Sejauh 5 m pada Berbagai Sudut",
        unit: "joule",
        source: "ilustrasi edukatif",
        note: "Gaya dan jarak sama, hanya sudut berbeda. Makin besar sudut terhadap arah gerak, makin kecil usahanya, sampai nol pada 90 derajat.",
        data: [
          { label: "0 derajat", value: 500, color: "#a78bfa" },
          { label: "60 derajat", value: 250, color: "#c084fc" },
          { label: "90 derajat", value: 0, color: "#e9d5ff" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kotak ditarik gaya 100 N membentuk sudut 60 derajat terhadap arah gerak, sejauh 5 m. Dengan cos 60 derajat = 0,5, berapa usahanya?",
        answer: 250,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "W = F x s x cos θ = 100 x 5 x 0,5 = <strong>250 joule</strong>. Hanya komponen searah gerak (100 x 0,5 = 50 N) yang bekerja.",
        hint: "Kalikan gaya, jarak, dan cosinus sudutnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Gaya 80 N searah perpindahan (sudut 0 derajat, cos 0 = 1) memindahkan benda 6 m. Berapa usahanya?",
        answer: 480,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "W = F x s x cos 0 = 80 x 6 x 1 = <strong>480 joule</strong>. Saat sudut nol, seluruh gaya berguna.",
        hint: "cos 0 derajat bernilai 1, jadi seluruh gaya bekerja.",
      },
      {
        type: "matchExercise",
        prompt:
          "Pasangkan sudut antara gaya dan perpindahan dengan keterangan usahanya.",
        pairs: [
          { left: "0 derajat (cos = 1)", right: "Usaha maksimum" },
          { left: "60 derajat (cos = 0,5)", right: "Usaha setengah maksimum" },
          { left: "90 derajat (cos = 0)", right: "Usaha nol" },
          { left: "Searah penuh", right: "Seluruh gaya berguna" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kuda Penarik Tongkang",
        html: "Dahulu tongkang di kanal ditarik kuda yang berjalan di tepian, dengan tali yang miring dari tepi ke perahu di tengah air. Karena tali membentuk sudut terhadap arah laju perahu, hanya <strong>komponen tarikan searah kanal</strong> yang menggerakkan tongkang maju. Komponen yang menarik ke tepi diimbangi kemudi agar perahu tetap lurus. Pengangkut yang cerdik menjaga sudut tali sekecil mungkin supaya bagian tarikan yang berguna sebesar mungkin.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Barulah rumusnya muncul. Untuk gaya yang membentuk <strong>sudut θ</strong> terhadap perpindahan: W = F x s x cos θ. Saat θ = 0 (searah), cos θ = 1 dan usaha maksimum. Saat θ = 90 derajat (tegak lurus), cos θ = 0 dan usahanya nol. Faktor cos θ inilah yang menyaring bagian gaya yang benar-benar searah gerak.",
      },
      {
        type: "takeaways",
        items: [
          "Hanya komponen gaya searah perpindahan yang melakukan usaha.",
          "W = F x s x cos θ untuk gaya bersudut.",
          "Sudut 0 derajat memberi usaha maksimum (cos 0 = 1).",
          "Sudut 90 derajat memberi usaha nol (cos 90 = 0).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Usaha gaya yang membentuk sudut θ terhadap perpindahan adalah?",
            options: [
              "W = F x s",
              "W = F x s x cos θ",
              "W = F x s x sin θ",
              "W = F / s x cos θ",
            ],
            answer: 1,
            explain: "Hanya komponen searah gerak, yaitu F cos θ, yang bekerja.",
          },
          {
            q: "Pada sudut 90 derajat antara gaya dan perpindahan, usahanya?",
            options: ["Maksimum", "Setengah", "Nol", "Negatif besar"],
            answer: 2,
            explain: "cos 90 derajat = 0, sehingga usaha nol.",
          },
          {
            q: "Gaya 60 N, jarak 4 m, sudut 60 derajat (cos = 0,5). Usahanya?",
            options: ["240 J", "120 J", "60 J", "0 J"],
            answer: 1,
            explain: "W = 60 x 4 x 0,5 = 120 J.",
          },
          {
            q: "Agar usaha sebuah gaya maksimum, arahnya sebaiknya?",
            options: [
              "Tegak lurus perpindahan",
              "Searah perpindahan",
              "Berlawanan perpindahan",
              "Miring 90 derajat",
            ],
            answer: 1,
            explain: "Searah perpindahan berarti cos 0 = 1, usaha maksimum.",
          },
          {
            q: "Mengapa tarikan tali yang sangat miring kurang efektif menggerakkan benda maju?",
            options: [
              "Gayanya hilang",
              "Hanya sebagian gaya searah gerak",
              "Massa bertambah",
              "Cosinus menjadi negatif",
            ],
            answer: 1,
            explain: "Makin miring, makin kecil komponen searah gerak (F cos θ).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "usaha-beberapa-gaya",
    levelId: "usaha-daya",
    order: 4,
    title: "Usaha oleh Beberapa Gaya",
    summary:
      "Mendorong peti sambil ada gesekan yang menahan: ada usaha positif dan usaha negatif. Kita jumlahkan dulu siapa menang.",
    durationMin: 13,
    tags: ["fisika", "usaha", "gaya gesek", "usaha total"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat kamu mendorong peti di lantai kasar, kamu memberi usaha yang membantu gerak, tetapi gesekan melawan arah gerak dan 'memakan' sebagian usaha itu. Pada satu benda sering bekerja banyak gaya sekaligus: ada yang searah gerak dan ada yang melawan. Sebelum rumus, ayo lihat dulu bagaimana usaha-usaha itu bisa saling menambah atau saling mengurangi.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Banyak Gaya pada Satu Benda",
        caption:
          "Tiap gaya memberi usahanya sendiri; usaha total adalah jumlah seluruh usaha itu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Dorong buku di atas meja lalu lepaskan. Buku meluncur sebentar lalu berhenti. Saat kamu dorong, usahamu positif, searah gerak. Setelah lepas, gesekan terus melawan gerak dan melakukan usaha negatif sampai energi gerak buku habis. Coba di meja licin dan di karpet: di karpet buku lebih cepat berhenti karena usaha negatif gesekan lebih besar.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Usaha positif dan usaha negatif",
        html: "Gaya yang searah perpindahan melakukan usaha <strong>positif</strong>, menambah energi gerak benda. Gaya yang berlawanan arah perpindahan, seperti gesekan, melakukan usaha <strong>negatif</strong>, mengurangi energi gerak. Usaha total adalah jumlah aljabar keduanya, dengan tanda diperhatikan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah peti didorong dengan gaya 60 N searah gerak sejauh 10 m, sementara gesekan 20 N melawan gerak. Berapa usaha total pada peti?",
        answer: 400,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Usaha dorong = +60 x 10 = +600 J. Usaha gesekan = -20 x 10 = -200 J. Usaha total = 600 - 200 = <strong>400 joule</strong>.",
        hint: "Hitung usaha tiap gaya dengan tandanya, lalu jumlahkan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah balok meluncur 5 m hanya dilawan gesekan 12 N (berlawanan arah gerak). Berapa usaha gesekan pada balok?",
        answer: -60,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Gesekan melawan gerak, jadi usahanya negatif: W = -12 x 5 = <strong>-60 joule</strong>. Inilah energi gerak yang diserap menjadi panas.",
        hint: "Gaya berlawanan arah gerak memberi usaha negatif.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk sebuah peti yang sedang didorong maju, kelompokkan tiap gaya berdasarkan tanda usahanya.",
        buckets: ["Usaha positif", "Usaha negatif"],
        items: [
          { text: "Gaya dorong searah gerak", bucket: "Usaha positif" },
          { text: "Gesekan lantai melawan gerak", bucket: "Usaha negatif" },
          { text: "Hambatan udara melawan gerak", bucket: "Usaha negatif" },
          { text: "Tarikan tali searah gerak", bucket: "Usaha positif" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengerem Sepeda Menurun",
        html: "Saat menuruni bukit, gaya berat menarik sepeda ke bawah lereng dan melakukan usaha positif yang mempercepatmu. Untuk menjaga kecepatan aman, kamu menarik rem: gaya gesek rem melakukan usaha <strong>negatif</strong> yang melawan gerak. Jika usaha negatif rem sama besar dengan usaha positif gravitasi, usaha total nol dan kecepatanmu tetap. Jika kamu mengerem lebih kuat, usaha total menjadi negatif dan sepeda melambat. Pengendara mengatur rem persis untuk menyeimbangkan kedua usaha ini.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya. Usaha total pada sebuah benda adalah <strong>jumlah</strong> usaha dari setiap gaya, dengan tandanya: W total = W1 + W2 + W3 + ... Gaya searah gerak memberi usaha positif, gaya berlawanan gerak memberi usaha negatif. Alternatifnya, hitung dulu gaya total searah gerak (resultan), lalu W total = F resultan x s.",
      },
      {
        type: "takeaways",
        items: [
          "Usaha total adalah jumlah aljabar usaha tiap gaya.",
          "Gaya searah gerak memberi usaha positif, melawan gerak memberi usaha negatif.",
          "Gesekan dan hambatan udara umumnya melakukan usaha negatif.",
          "Usaha total juga bisa dihitung dari gaya resultan dikali perpindahan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Usaha total dari beberapa gaya pada satu benda adalah?",
            options: [
              "Selalu usaha gaya terbesar",
              "Jumlah aljabar usaha tiap gaya",
              "Selisih massa dan gaya",
              "Usaha gaya gesek saja",
            ],
            answer: 1,
            explain: "Usaha total = jumlah usaha tiap gaya dengan tandanya.",
          },
          {
            q: "Gaya gesek yang melawan gerak melakukan usaha?",
            options: ["Positif", "Negatif", "Nol selalu", "Tak terhingga"],
            answer: 1,
            explain: "Berlawanan arah gerak berarti usaha negatif.",
          },
          {
            q: "Dorong 50 N sejauh 4 m, gesekan 10 N melawan. Usaha total?",
            options: ["240 J", "160 J", "200 J", "40 J"],
            answer: 1,
            explain: "(+50 x 4) + (-10 x 4) = 200 - 40 = 160 J.",
          },
          {
            q: "Jika usaha total pada benda bergerak adalah nol, maka energi geraknya?",
            options: ["Bertambah", "Berkurang", "Tetap", "Hilang"],
            answer: 2,
            explain: "Usaha total nol berarti energi gerak tidak berubah.",
          },
          {
            q: "Balok meluncur 6 m dilawan gesekan 15 N. Usaha gesekannya?",
            options: ["+90 J", "-90 J", "-2,5 J", "+2,5 J"],
            answer: 1,
            explain: "W = -15 x 6 = -90 J karena melawan gerak.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "usaha-dan-daya",
    levelId: "usaha-daya",
    order: 5,
    title: "Daya",
    summary:
      "Dua orang mengangkat beban sama tinggi, tetapi yang satu lebih cepat. Usaha mereka sama, dayanya berbeda. Kita ukur kecepatan kerja itu.",
    durationMin: 12,
    tags: ["fisika", "daya", "usaha", "waktu"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan dua orang mengangkat tumpukan batu bata yang sama ke lantai dua. Yang satu selesai dalam dua menit, yang lain butuh sepuluh menit. <strong>Usaha</strong> mereka sama, karena beban dan ketinggiannya sama. Yang berbeda adalah seberapa cepat usaha itu diselesaikan, dan itulah <strong>daya</strong>. Sebelum rumus, ayo rasakan dulu beda antara 'seberapa banyak' dan 'seberapa cepat'.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Seberapa Cepat Usaha Dilakukan",
        caption:
          "Daya mengukur laju melakukan usaha: usaha yang sama selesai lebih cepat berarti daya lebih besar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Naiki tangga rumahmu dengan santai, lalu naiki lagi sambil berlari. Usaha yang kamu lakukan melawan gravitasi sama, karena tinggi tangganya sama. Tetapi saat berlari kamu terengah-engah, sebab <strong>daya</strong>-mu jauh lebih besar: usaha yang sama selesai dalam waktu lebih singkat. Rasakan bedanya antara jumlah usaha dan kecepatan melakukannya.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Daya untuk Usaha yang Sama (1200 J)",
        unit: "watt",
        source: "ilustrasi edukatif",
        note: "Usaha sama 1200 J, tetapi makin singkat waktunya makin besar dayanya. Daya berbanding terbalik dengan waktu.",
        data: [
          { label: "10 s", value: 120, color: "#a78bfa" },
          { label: "20 s", value: 60, color: "#c084fc" },
          { label: "30 s", value: 40, color: "#d8b4fe" },
          { label: "60 s", value: 20, color: "#e9d5ff" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mesin melakukan usaha 600 J dalam waktu 30 sekon. Berapa dayanya?",
        answer: 20,
        tolerance: 0.1,
        suffix: " W",
        solution:
          "Daya = usaha dibagi waktu = 600 J / 30 s = <strong>20 watt</strong>.",
        hint: "Bagi usaha dengan waktu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang pekerja menghasilkan daya 150 W selama 8 sekon. Berapa usaha yang ia lakukan?",
        answer: 1200,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Dari P = W / t, maka W = P x t = 150 W x 8 s = <strong>1200 joule</strong>.",
        hint: "Kalikan daya dengan waktu.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk usaha yang sama besarnya, kelompokkan keadaan berikut berdasarkan dayanya.",
        buckets: ["Daya besar", "Daya kecil"],
        items: [
          { text: "Usaha selesai dalam waktu singkat", bucket: "Daya besar" },
          { text: "Usaha selesai dalam waktu lama", bucket: "Daya kecil" },
          { text: "Forklift mengangkat cepat", bucket: "Daya besar" },
          { text: "Kuli mengangkat perlahan", bucket: "Daya kecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kuli Panggul dan Forklift",
        html: "Seorang kuli memindahkan satu ton beras ke truk dalam satu jam. Sebuah forklift memindahkan beban yang sama hanya dalam lima menit. <strong>Usaha</strong> keduanya bisa sama, karena beban dan ketinggian truk sama. Yang berbeda adalah <strong>daya</strong>: forklift menyelesaikan usaha yang sama dua belas kali lebih cepat, sehingga dayanya kira-kira dua belas kali lebih besar. Inilah alasan mesin menggantikan tenaga manusia untuk pekerjaan berat yang harus cepat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru rumusnya. <strong>Daya</strong> adalah laju melakukan usaha: P = W / t, yaitu usaha dibagi waktu. Satuannya watt (W), yaitu joule per sekon. Daya mengukur seberapa cepat usaha dilakukan, bukan seberapa besar. Usaha yang sama dalam waktu lebih singkat berarti daya lebih besar.",
      },
      {
        type: "takeaways",
        items: [
          "Daya adalah laju melakukan usaha: P = W / t.",
          "Satuan daya adalah watt, yaitu joule per sekon.",
          "Usaha sama bisa punya daya berbeda, tergantung waktunya.",
          "Usaha bisa dicari kembali dari W = P x t.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Daya adalah?",
            options: [
              "Jumlah usaha",
              "Laju melakukan usaha",
              "Gaya dikali jarak",
              "Massa dikali kecepatan",
            ],
            answer: 1,
            explain: "Daya mengukur seberapa cepat usaha dilakukan.",
          },
          {
            q: "Satuan daya adalah?",
            options: ["joule", "watt", "newton", "sekon"],
            answer: 1,
            explain: "Daya diukur dalam watt (joule per sekon).",
          },
          {
            q: "Usaha 400 J dilakukan dalam 8 s. Dayanya?",
            options: ["50 W", "3200 W", "8 W", "400 W"],
            answer: 0,
            explain: "P = 400 / 8 = 50 W.",
          },
          {
            q: "Daya 100 W bekerja 5 s. Usaha yang dilakukan?",
            options: ["20 J", "500 J", "105 J", "95 J"],
            answer: 1,
            explain: "W = P x t = 100 x 5 = 500 J.",
          },
          {
            q: "Dua orang melakukan usaha sama, tetapi A lebih cepat. Maka:",
            options: [
              "Daya A lebih besar",
              "Daya A lebih kecil",
              "Daya keduanya sama",
              "A tidak berusaha",
            ],
            answer: 0,
            explain: "Waktu lebih singkat untuk usaha sama berarti daya lebih besar.",
          },
        ],
      },
    ],
  },
];
