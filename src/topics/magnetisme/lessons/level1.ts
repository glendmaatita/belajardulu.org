import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "magnet-dan-sifatnya",
    levelId: "medan-magnet",
    order: 1,
    title: "Magnet dan Sifatnya",
    summary:
      "Sebelum menyentuh rumus, kita tanya dulu: mengapa jarum kompas selalu menunjuk ke utara? Itu petunjuk pertama tentang medan magnet.",
    durationMin: 13,
    tags: ["fisika", "magnet", "medan magnet", "kompas"],
    blocks: [
      {
        type: "paragraph",
        html: "Ribuan tahun lalu, para pelaut menemukan batu aneh yang selalu menghadap arah yang sama bila digantung bebas. Mereka menyebutnya batu pengarah, dan dari sanalah kompas lahir. Pertanyaannya: ada 'sesuatu' tak terlihat yang menarik jarum itu. Sebelum bertemu rumus, ayo kita rasakan dulu apa itu <strong>medan magnet</strong>.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Garis Medan Magnet di Sekitar Magnet Batang",
        caption: "Serbuk besi menari mengikuti garis tak terlihat dari kutub ke kutub.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Taburkan serbuk besi di atas kertas, lalu letakkan magnet di bawahnya. Amati: serbuk menyusun pola melengkung dari satu ujung magnet ke ujung lain. Pola itu adalah peta <strong>medan magnet</strong>. Garisnya selalu keluar dari kutub utara dan masuk ke kutub selatan, dan tidak pernah berpotongan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua kutub yang tak terpisahkan",
        html: "Patahkan magnet menjadi dua, kamu tidak mendapat kutub utara sendirian dan selatan sendirian. Tiap potongan tetap punya <strong>dua kutub</strong>. Inilah yang membedakan magnet dari muatan listrik: tidak ada 'kutub magnet tunggal' yang pernah ditemukan.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kekuatan Medan Magnet Beberapa Sumber",
        unit: "militesla (mT)",
        source: "nilai tipikal, ilustrasi edukatif",
        note: "Mesin MRI ratusan kali lebih kuat daripada magnet kulkas. Satuan kekuatan medan magnet adalah tesla (T); 1 mT = 0,001 T.",
        data: [
          { label: "Magnet kulkas", value: 5, color: "#34d399" },
          { label: "Magnet sepatu kuda", value: 10, color: "#22d3ee" },
          { label: "Neodymium kecil", value: 300, color: "#38bdf8" },
          { label: "Mesin MRI", value: 1500, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Medan magnet mesin MRI sekitar 1,5 T, sedangkan medan magnet Bumi hanya sekitar 0,00005 T. Berapa kali lebih kuat MRI dibanding medan Bumi?",
        answer: 30000,
        tolerance: 100,
        suffix: " kali",
        solution:
          "Bagi kedua nilai: 1,5 dibagi 0,00005 = <strong>30.000 kali</strong>. Itu sebabnya medan Bumi terlalu lemah untuk menempelkan benda, tapi cukup untuk memutar jarum kompas yang nyaris tanpa gesekan.",
        hint: "Bagi medan MRI dengan medan Bumi.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap bahan: tertarik magnet (feromagnetik) atau tidak.",
        buckets: ["Tertarik magnet", "Tidak tertarik magnet"],
        items: [
          { text: "Besi", bucket: "Tertarik magnet" },
          { text: "Nikel", bucket: "Tertarik magnet" },
          { text: "Aluminium", bucket: "Tidak tertarik magnet" },
          { text: "Tembaga", bucket: "Tidak tertarik magnet" },
          { text: "Kayu", bucket: "Tidak tertarik magnet" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kompas dan Inti Bumi",
        html: "Jarum kompas menunjuk utara karena Bumi sendiri adalah magnet raksasa. Inti luar Bumi yang berupa besi cair yang berputar menghasilkan medan magnet yang membungkus seluruh planet. Menariknya, 'kutub utara' jarum kompas justru tertarik ke kutub magnet yang berada di dekat utara geografis, yang secara magnetis sebenarnya berperan sebagai kutub selatan. Tanpa medan ini, partikel berbahaya dari Matahari akan jauh lebih leluasa menerpa permukaan Bumi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita beri nama. Kuat medan magnet dilambangkan <strong>B</strong> dengan satuan <strong>tesla (T)</strong>. Satu tesla setara dengan satu weber per meter persegi (1 T = 1 Wb/m²) dan tergolong sangat kuat, sehingga medan sehari-hari sering ditulis dalam militesla (mT) atau mikrotesla (µT). Medan magnet adalah besaran vektor: ia punya besar sekaligus arah, yaitu arah yang ditunjuk kutub utara jarum kompas di titik itu.",
      },
      {
        type: "takeaways",
        items: [
          "Medan magnet adalah daerah pengaruh magnet, dipetakan oleh garis dari kutub utara ke kutub selatan.",
          "Magnet selalu punya dua kutub; memotongnya hanya menghasilkan magnet kecil berkutub dua lagi.",
          "Kuat medan magnet dilambangkan B dengan satuan tesla (T).",
          "Bumi adalah magnet raksasa, itulah yang membuat kompas bekerja.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Satuan kuat medan magnet adalah?",
            options: ["volt", "tesla", "ampere", "newton"],
            answer: 1,
            explain: "Kuat medan magnet B diukur dalam tesla (T).",
          },
          {
            q: "Garis medan magnet keluar dari kutub mana?",
            options: ["Kutub selatan", "Kutub utara", "Kedua kutub", "Tidak dari kutub mana pun"],
            answer: 1,
            explain: "Garis medan keluar dari kutub utara dan masuk ke kutub selatan.",
          },
          {
            q: "Jika magnet batang dipotong jadi dua, maka?",
            options: [
              "Satu potong jadi kutub utara saja",
              "Tiap potong tetap punya dua kutub",
              "Magnetnya hilang",
              "Kutubnya bertukar",
            ],
            answer: 1,
            explain: "Tidak ada kutub tunggal; tiap potongan tetap berkutub dua.",
          },
          {
            q: "Mengapa jarum kompas menunjuk utara?",
            options: [
              "Karena angin",
              "Karena Bumi adalah magnet raksasa",
              "Karena gravitasi",
              "Karena gaya gesek",
            ],
            answer: 1,
            explain: "Medan magnet Bumi memutar jarum hingga sejajar dengannya.",
          },
          {
            q: "Manakah bahan yang tertarik magnet?",
            options: ["Aluminium", "Tembaga", "Besi", "Kayu"],
            answer: 2,
            explain: "Besi bersifat feromagnetik sehingga kuat tertarik magnet.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "medan-magnet-dan-garis-gaya",
    levelId: "medan-magnet",
    order: 2,
    title: "Medan Magnet dan Garis Gaya",
    summary:
      "Mengapa serbuk besi membentuk pola melengkung yang rapi di sekitar magnet? Garis-garis itu bukan sekadar gambar, melainkan peta arah dan kuat medan.",
    durationMin: 13,
    tags: ["fisika", "garis gaya", "medan magnet", "vektor"],
    blocks: [
      {
        type: "paragraph",
        html: "Letakkan kaca di atas magnet, taburkan serbuk besi, lalu ketuk pelan. Dalam sekejap serbuk menyusun diri jadi lengkungan-lengkungan rapi yang menghubungkan kedua kutub. Tidak ada yang menyentuh serbuk itu. Sebelum menuliskan rumus, ayo kita pahami apa yang sebenarnya 'digambar' oleh serbuk besi.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Pola Garis Gaya di Sekitar Dua Magnet",
        caption: "Kutub senama saling menolak, kutub berbeda saling merapat: garisnya bercerita.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Dekatkan dua magnet dengan kutub berbeda: garis gaya merapat dan saling menyambung, itulah tarik-menarik. Hadapkan kutub senama: garis gaya saling menekuk menjauh, itulah tolak-menolak. Tempat garis paling <strong>rapat</strong> adalah tempat medan paling <strong>kuat</strong>, yaitu dekat kutub. Garis gaya selalu kontinu dan tak pernah berpotongan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Garis gaya menyimpan dua informasi",
        html: "Arah garis di suatu titik menunjukkan <strong>arah medan</strong> di titik itu (arah yang ditunjuk kutub utara kompas kecil). <strong>Kerapatan</strong> garis menunjukkan <strong>besar medan</strong>: makin rapat makin kuat. Karena itu menggambar garis bukan sekadar hiasan, melainkan cara memvisualkan besaran vektor B.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kuat Medan vs Jarak dari Kutub Magnet Batang",
        unit: "militesla (mT)",
        source: "magnet neodymium kecil, pengukuran ilustratif",
        note: "Dekat kutub garis sangat rapat dan medan kuat; makin jauh garis merenggang dan medan jatuh cepat.",
        data: [
          { label: "1 cm", value: 90, color: "#a78bfa" },
          { label: "2 cm", value: 30, color: "#38bdf8" },
          { label: "4 cm", value: 9, color: "#22d3ee" },
          { label: "8 cm", value: 3, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kompas kecil diletakkan pada tiga titik. Di titik A medan 12 mT, di titik B 4 mT, di titik C 1 mT. Berapa kali lebih kuat medan di A dibanding di C?",
        answer: 12,
        tolerance: 0.1,
        suffix: " kali",
        solution:
          "Bandingkan langsung: 12 mT dibagi 1 mT = <strong>12 kali</strong>. Titik A pasti paling dekat kutub karena di situ garis gaya paling rapat.",
        hint: "Bagi medan di A dengan medan di C.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan tentang garis gaya: benar atau salah.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "Garis gaya keluar dari kutub utara", bucket: "Benar" },
          { text: "Garis paling rapat berarti medan paling kuat", bucket: "Benar" },
          { text: "Dua garis gaya bisa saling berpotongan", bucket: "Salah" },
          { text: "Garis gaya menunjukkan arah medan di tiap titik", bucket: "Benar" },
          { text: "Garis gaya berhenti di tengah ruang kosong", bucket: "Salah" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan ciri pola garis gaya dengan maknanya.",
        pairs: [
          { left: "Garis rapat", right: "Medan kuat" },
          { left: "Garis renggang", right: "Medan lemah" },
          { left: "Garis merapat antar magnet", right: "Tarik-menarik (kutub beda)" },
          { left: "Garis menekuk menjauh", right: "Tolak-menolak (kutub sama)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kartu Akses dan Pita Magnetik",
        html: "Kartu akses dan kartu ATM lama menyimpan data pada pita magnetik di belakangnya. Pita itu berisi jutaan magnet mikroskopis yang arah kutubnya bisa diatur untuk mewakili angka 0 dan 1. Mesin pembaca menggesek kartu melewati kepala baca yang merasakan perubahan arah garis gaya tiap magnet kecil. Bila kartu terkena magnet kuat, susunan garis gaya itu kacau dan datanya rusak: itu sebabnya kartu lama tidak boleh ditempel di tas bermagnet.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan. Garis gaya adalah cara menggambar medan vektor <strong>B</strong>. Arah garis = arah B; kerapatan garis = besar B. Secara kuantitatif, jumlah garis yang menembus suatu luas disebut <strong>fluks magnetik Φ = B·A·cos θ</strong>, sehingga <strong>B = Φ / A</strong> bila tegak lurus. Inilah alasan B juga disebut <em>rapat fluks magnetik</em>, dengan satuan weber per meter persegi (Wb/m²) atau tesla.",
      },
      {
        type: "takeaways",
        items: [
          "Garis gaya menggambarkan medan magnet: arahnya = arah B, kerapatannya = besar B.",
          "Garis selalu keluar dari kutub utara, masuk ke kutub selatan, kontinu, dan tak berpotongan.",
          "Medan paling kuat ada di tempat garis paling rapat, yaitu dekat kutub.",
          "B disebut rapat fluks magnetik karena B = Φ/A untuk luas tegak lurus.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tempat garis gaya paling rapat menandakan medan?",
            options: ["Paling lemah", "Paling kuat", "Nol", "Bolak-balik"],
            answer: 1,
            explain: "Kerapatan garis sebanding dengan besar medan B.",
          },
          {
            q: "Apakah dua garis gaya bisa berpotongan?",
            options: [
              "Bisa, di kutub",
              "Tidak pernah",
              "Bisa, di tengah",
              "Hanya pada magnet lemah",
            ],
            answer: 1,
            explain: "Bila berpotongan berarti ada dua arah medan di satu titik, itu mustahil.",
          },
          {
            q: "Arah garis gaya di suatu titik menunjukkan?",
            options: ["Besar arus", "Arah medan B", "Massa magnet", "Suhu magnet"],
            answer: 1,
            explain: "Arah garis = arah yang ditunjuk kutub utara kompas kecil = arah B.",
          },
          {
            q: "B juga disebut rapat fluks magnetik karena?",
            options: ["B = Φ/A", "B = q·v", "B = I·R", "B = m·a"],
            answer: 0,
            explain: "B sama dengan fluks per satuan luas tegak lurus, B = Φ/A.",
          },
          {
            q: "Dua magnet yang garis gayanya saling merapat dan menyambung berarti?",
            options: ["Tolak-menolak", "Tarik-menarik", "Tidak berinteraksi", "Kehilangan magnet"],
            answer: 1,
            explain: "Garis menyambung antar kutub berbeda menandakan tarik-menarik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kutub-magnet-dan-monopol",
    levelId: "medan-magnet",
    order: 3,
    title: "Kutub Magnet dan Mitos Monopol",
    summary:
      "Bisakah kita memisahkan kutub utara dari kutub selatan? Pertanyaan sederhana ini menyimpan salah satu aturan paling kokoh dalam fisika.",
    durationMin: 12,
    tags: ["fisika", "kutub magnet", "monopol", "dipol"],
    blocks: [
      {
        type: "paragraph",
        html: "Ambil magnet batang, lalu potong jadi dua. Naluri kita berbisik: pasti satu potong jadi 'utara saja' dan satu lagi 'selatan saja'. Tapi alam menolak. Tiap potongan langsung menumbuhkan sepasang kutub baru. Sebelum menuliskan rumus, ayo kita selidiki mengapa kutub magnet selalu datang berpasangan.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Magnet Dipotong Berkali-kali",
        caption: "Sekecil apa pun potongannya, selalu muncul pasangan kutub utara dan selatan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan memotong magnet terus-menerus sampai sekecil satu atom. Tetap saja tiap bagian punya kutub utara dan selatan. Magnet pada dasarnya tersusun dari miliaran <strong>magnet mini</strong> (domain) yang searah. Memotongnya hanya membagi barisan magnet mini itu, bukan memisahkan kutubnya. Kutub tunggal, yang disebut <strong>monopol magnet</strong>, belum pernah ditemukan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Magnet listrik punya monopol, magnet tidak",
        html: "Pada listrik, muatan positif dan negatif bisa berdiri sendiri (ada monopol listrik). Pada magnet, tidak ada padanannya: kutub utara selalu ditemani kutub selatan. Karena itu garis medan magnet selalu <strong>tertutup</strong>, tak punya titik awal atau akhir yang berdiri sendiri.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pasangan kutub: tarik-menarik atau tolak-menolak.",
        buckets: ["Tarik-menarik", "Tolak-menolak"],
        items: [
          { text: "Utara didekatkan Selatan", bucket: "Tarik-menarik" },
          { text: "Utara didekatkan Utara", bucket: "Tolak-menolak" },
          { text: "Selatan didekatkan Selatan", bucket: "Tolak-menolak" },
          { text: "Selatan didekatkan Utara", bucket: "Tarik-menarik" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah magnet batang dipotong menjadi 4 bagian sama panjang. Berapa total kutub (utara + selatan) yang dimiliki seluruh potongan?",
        answer: 8,
        tolerance: 0,
        suffix: " kutub",
        solution:
          "Tiap potongan tetap punya 2 kutub. Dengan 4 potongan: 4 × 2 = <strong>8 kutub</strong> (4 utara dan 4 selatan). Tidak ada potongan berkutub tunggal.",
        hint: "Tiap potongan selalu punya 2 kutub.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya.",
        pairs: [
          { left: "Dipol magnet", right: "Pasangan kutub utara-selatan" },
          { left: "Monopol magnet", right: "Kutub tunggal yang belum ditemukan" },
          { left: "Domain magnet", right: "Magnet mini penyusun bahan" },
          { left: "Kutub senama", right: "Saling tolak-menolak" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Magnet Bisa 'Hilang' Saat Dipanaskan",
        html: "Magnet kuat hanya bekerja jika domain-domain magnet mininya tersusun searah. Bila magnet dipukul keras atau dipanaskan melewati suhu tertentu (suhu Curie), domain-domain itu kembali kacau arahnya dan saling meniadakan, sehingga magnet kehilangan kekuatannya. Sebaliknya, besi biasa bisa dimagnetkan dengan menggosokkan magnet searah berulang kali agar domainnya menjadi sejajar. Ini menegaskan: sifat magnet berasal dari susunan kutub-kutub mini, bukan dari kutub tunggal.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita nyatakan dalam bahasa fisika. Karena tidak ada monopol magnet, fluks magnetik total yang menembus permukaan tertutup selalu nol: <strong>Φ total = 0</strong> (Hukum Gauss untuk magnet). Setiap garis yang masuk pasti keluar lagi. Inilah salah satu dari empat persamaan Maxwell, dan pernyataan resmi bahwa kutub magnet selalu berpasangan sebagai <strong>dipol</strong>, tidak pernah tunggal.",
      },
      {
        type: "takeaways",
        items: [
          "Kutub magnet selalu berpasangan (dipol); monopol magnet belum pernah ditemukan.",
          "Memotong magnet hanya menghasilkan magnet kecil yang tetap berkutub dua.",
          "Kutub senama tolak-menolak, kutub berbeda tarik-menarik.",
          "Karena tak ada monopol, fluks total menembus permukaan tertutup selalu nol (Φ total = 0).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Jika magnet dipotong jadi 3 bagian, total kutubnya?",
            options: ["3", "4", "6", "2"],
            answer: 2,
            explain: "Tiap potongan 2 kutub, jadi 3 × 2 = 6 kutub.",
          },
          {
            q: "Kutub magnet tunggal disebut?",
            options: ["Dipol", "Monopol", "Domain", "Fluks"],
            answer: 1,
            explain: "Monopol magnet adalah kutub tunggal, yang belum pernah ditemukan.",
          },
          {
            q: "Dua kutub utara yang didekatkan akan?",
            options: ["Tarik-menarik", "Tolak-menolak", "Diam", "Bergabung"],
            answer: 1,
            explain: "Kutub senama selalu tolak-menolak.",
          },
          {
            q: "Mengapa magnet bisa kehilangan kekuatan saat sangat panas?",
            options: [
              "Kutubnya menguap",
              "Domain magnetnya kembali kacau arahnya",
              "Massanya berubah",
              "Berubah jadi listrik",
            ],
            answer: 1,
            explain: "Di atas suhu Curie domain kembali acak dan saling meniadakan.",
          },
          {
            q: "Fluks magnetik total menembus permukaan tertutup bernilai?",
            options: ["Selalu nol", "Selalu positif", "Tak hingga", "Bergantung suhu"],
            answer: 0,
            explain: "Karena tak ada monopol, setiap garis yang masuk pasti keluar, Φ total = 0.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "fluks-magnetik",
    levelId: "medan-magnet",
    order: 4,
    title: "Fluks Magnetik",
    summary:
      "Berapa banyak garis medan yang 'menembus' sebuah bingkai? Pertanyaan ini melahirkan besaran yang nanti menjadi kunci seluruh pembangkit listrik.",
    durationMin: 13,
    tags: ["fisika", "fluks", "weber", "medan magnet"],
    blocks: [
      {
        type: "paragraph",
        html: "Pegang sebuah bingkai kawat di dalam medan magnet. Hadapkan tegak lurus medan: banyak garis menembusnya. Putar perlahan hingga sejajar medan: tak ada satu pun garis yang menembus. Sebelum menuliskan rumus, ayo kita rasakan apa yang berubah saat bingkai diputar, karena di situlah letak konsep <strong>fluks</strong>.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Bingkai Kawat Diputar di Dalam Medan",
        caption: "Jumlah garis yang menembus bingkai berubah saat sudutnya berubah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan hujan turun lurus ke bawah dan kamu memegang bingkai. Bila bingkai mendatar, banyak tetes lewat menembusnya. Bila bingkai kamu miringkan, makin sedikit tetes yang menembus. Tegakkan sampai sejajar arah hujan: tak ada tetes menembus sama sekali. <strong>Fluks magnetik</strong> bekerja persis begitu, hanya 'tetesnya' adalah garis medan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga hal yang menentukan fluks",
        html: "Fluks membesar bila: (1) medan <strong>B</strong> lebih kuat, (2) luas bingkai <strong>A</strong> lebih besar, dan (3) bingkai makin <strong>tegak lurus</strong> medan. Saat tegak lurus (sudut antara medan dan bingkai pas), fluks maksimum; saat sejajar, fluks nol. Sudut θ diukur antara arah medan dan garis tegak lurus bidang (garis normal).",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Fluks Magnetik vs Sudut Bidang terhadap Medan",
        unit: "miliweber (mWb)",
        source: "B = 0,5 T, luas A = 0,02 m², Φ = B·A·cos θ",
        note: "Φ maksimum saat bidang tegak lurus medan (θ=0°) dan nol saat bidang sejajar medan (θ=90°).",
        data: [
          { label: "0°", value: 10, color: "#a78bfa" },
          { label: "30°", value: 8.66, color: "#38bdf8" },
          { label: "60°", value: 5, color: "#22d3ee" },
          { label: "90°", value: 0, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bingkai berluas 0,02 m² diletakkan tegak lurus medan magnet 0,5 T. Berapa fluks magnetik yang menembusnya? (jawab dalam mWb)",
        answer: 10,
        tolerance: 0.1,
        suffix: " mWb",
        solution:
          "Tegak lurus berarti θ = 0° dan cos 0° = 1. Φ = B·A·cos θ = 0,5 × 0,02 × 1 = 0,01 Wb = <strong>10 mWb</strong>.",
        hint: "Φ = B·A·cos θ, dan cos 0° = 1. Ingat 1 Wb = 1000 mWb.",
      },
      {
        type: "calcExercise",
        prompt:
          "Bingkai yang sama (A = 0,02 m², B = 0,5 T) diputar hingga membentuk sudut 60° antara medan dan garis normal bidang. Berapa fluksnya sekarang? (jawab dalam mWb)",
        answer: 5,
        tolerance: 0.1,
        suffix: " mWb",
        solution:
          "Φ = B·A·cos θ = 0,5 × 0,02 × cos 60° = 0,5 × 0,02 × 0,5 = 0,005 Wb = <strong>5 mWb</strong>. Memutar bingkai mengurangi fluks.",
        hint: "cos 60° = 0,5.",
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Kumparan Generator Diputar",
        html: "Di dalam generator, sebuah kumparan diputar terus-menerus di antara kutub magnet. Akibat perputaran itu, sudut antara bidang kumparan dan medan berubah tiap saat, sehingga fluks yang menembus kumparan naik-turun secara berkelanjutan. Justru perubahan fluks inilah yang membangkitkan listrik. Jika kumparan dibiarkan diam, fluksnya tetap dan tak ada listrik yang lahir. Memahami fluks adalah satu langkah sebelum memahami bagaimana listrik dibangkitkan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan. Fluks magnetik dirumuskan <strong>Φ = B·A·cos θ</strong>, dengan B kuat medan, A luas bidang, dan θ sudut antara medan dan garis normal bidang. Satuannya <strong>weber (Wb)</strong>, dan 1 Wb = 1 T·m². Fluks maksimum saat θ = 0° (bidang tegak lurus medan) dan nol saat θ = 90° (bidang sejajar medan). Besaran inilah yang nanti menjadi inti hukum Faraday.",
      },
      {
        type: "takeaways",
        items: [
          "Fluks magnetik = banyaknya garis medan yang menembus suatu bidang.",
          "Φ = B·A·cos θ, dengan θ sudut antara medan dan garis normal bidang.",
          "Fluks maksimum saat bidang tegak lurus medan, nol saat sejajar medan.",
          "Satuan fluks adalah weber (Wb); 1 Wb = 1 T·m².",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus fluks magnetik adalah?",
            options: ["Φ = B·A·cos θ", "Φ = B·I·L", "Φ = q·v·B", "Φ = µ₀·n·I"],
            answer: 0,
            explain: "Fluks Φ = B·A·cos θ.",
          },
          {
            q: "Satuan fluks magnetik adalah?",
            options: ["Tesla", "Weber", "Ampere", "Newton"],
            answer: 1,
            explain: "Fluks diukur dalam weber (Wb), dengan 1 Wb = 1 T·m².",
          },
          {
            q: "Fluks bernilai maksimum ketika bidang?",
            options: [
              "Sejajar medan",
              "Tegak lurus medan",
              "Membentuk 45° dengan medan",
              "Berputar cepat",
            ],
            answer: 1,
            explain: "Saat tegak lurus medan θ = 0° dan cos θ = 1, fluks maksimum.",
          },
          {
            q: "Bidang A = 0,1 m² tegak lurus medan 0,2 T. Fluksnya?",
            options: ["0,02 Wb", "0,2 Wb", "2 Wb", "0,5 Wb"],
            answer: 0,
            explain: "Φ = 0,2 × 0,1 × 1 = 0,02 Wb.",
          },
          {
            q: "Saat bidang diputar sejajar medan (θ = 90°), fluksnya?",
            options: ["Maksimum", "Setengah", "Nol", "Tak hingga"],
            answer: 2,
            explain: "cos 90° = 0 sehingga fluks menjadi nol.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "medan-magnet-bumi",
    levelId: "medan-magnet",
    order: 5,
    title: "Medan Magnet Bumi",
    summary:
      "Planet kita adalah magnet raksasa tak terlihat. Tanpa perisai magnet ini, kehidupan di permukaan akan jauh lebih berbahaya.",
    durationMin: 12,
    tags: ["fisika", "medan magnet bumi", "kompas", "aurora"],
    blocks: [
      {
        type: "paragraph",
        html: "Setiap kompas di seluruh dunia menunjuk arah yang nyaris sama. Bagaimana mungkin sepotong jarum kecil 'tahu' di mana utara berada? Jawabannya: ia merasakan medan magnet raksasa yang membungkus seluruh planet. Sebelum menuliskan rumus, ayo kita telusuri magnet sebesar Bumi ini.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Medan Magnet Membungkus Bumi",
        caption: "Garis medan keluar dari dekat kutub selatan geografis dan masuk di dekat utara.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gantung magnet batang bebas dengan benang: ia berputar sampai sejajar arah utara-selatan. Itulah yang dilakukan jarum kompas. Bumi berperilaku seolah ada <strong>magnet batang raksasa</strong> di intinya, sedikit miring terhadap sumbu putar Bumi. Karena itu arah jarum kompas (utara magnetik) sedikit menyimpang dari utara geografis sebenarnya, selisih itu disebut <strong>deklinasi</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Perisai tak terlihat",
        html: "Medan magnet Bumi bukan hanya penunjuk arah. Ia membelokkan partikel bermuatan berbahaya dari Matahari (angin Matahari) menjauhi permukaan, menggiringnya menuju kutub. Di kutub, partikel itu bertumbukan dengan udara dan memancarkan cahaya: itulah <strong>aurora</strong>. Tanpa perisai magnet ini, atmosfer Bumi perlahan bisa terkikis seperti yang diduga terjadi di Mars.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kuat Medan Magnet Bumi di Beberapa Tempat",
        unit: "mikrotesla (µT)",
        source: "nilai tipikal model geomagnetik, ilustratif",
        note: "Medan Bumi sangat lemah (puluhan µT) dibanding magnet kulkas, tapi cukup memutar jarum kompas yang nyaris tanpa gesekan. Lebih kuat di kutub daripada di khatulistiwa.",
        data: [
          { label: "Khatulistiwa", value: 30, color: "#34d399" },
          { label: "Lintang sedang", value: 50, color: "#22d3ee" },
          { label: "Dekat kutub", value: 65, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Medan magnet Bumi di suatu kota sekitar 50 µT, sedangkan magnet kulkas sekitar 5 mT. Berapa kali lebih kuat magnet kulkas dibanding medan Bumi di kota itu? (ingat 5 mT = 5000 µT)",
        answer: 100,
        tolerance: 1,
        suffix: " kali",
        solution:
          "Samakan satuan: 5 mT = 5000 µT. Lalu 5000 ÷ 50 = <strong>100 kali</strong>. Meski lemah, medan Bumi cukup menggerakkan jarum kompas yang bebas berputar.",
        hint: "Ubah 5 mT menjadi µT dulu (×1000), lalu bagi.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan tentang medan magnet Bumi: benar atau salah.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "Bumi berperilaku seperti magnet batang raksasa", bucket: "Benar" },
          { text: "Kutub magnet persis berimpit dengan kutub geografis", bucket: "Salah" },
          { text: "Medan Bumi membelokkan angin Matahari", bucket: "Benar" },
          { text: "Aurora muncul akibat medan magnet Bumi", bucket: "Benar" },
          { text: "Medan Bumi lebih kuat daripada mesin MRI", bucket: "Salah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Burung dan Penyu yang 'Membaca' Medan Bumi",
        html: "Banyak hewan bermigrasi ribuan kilometer tanpa tersesat. Burung, penyu laut, bahkan beberapa ikan diyakini mampu merasakan medan magnet Bumi sebagai peta navigasi alami. Penyu yang menetas di pantai tertentu bisa kembali ke pantai yang sama bertahun-tahun kemudian, sebagian dengan menyandikan 'tanda magnetik' lokasi itu. Ini menunjukkan medan magnet Bumi bukan hanya berguna bagi pelaut, tapi telah dipakai makhluk hidup jauh sebelum kompas ditemukan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan. Medan magnet Bumi di suatu titik dapat diuraikan menjadi komponen mendatar <strong>B<sub>H</sub> = B·cos i</strong> dan komponen tegak (vertikal) <strong>B<sub>V</sub> = B·sin i</strong>, dengan i sudut <strong>inklinasi</strong> (kemiringan medan terhadap horizontal). Jarum kompas biasa menanggapi komponen mendatar B<sub>H</sub>. Selisih arah jarum dengan utara geografis disebut <strong>deklinasi</strong>. Besar medannya hanya puluhan mikrotesla, namun cukup untuk memandu navigasi.",
      },
      {
        type: "takeaways",
        items: [
          "Bumi berperilaku seperti magnet batang raksasa yang sedikit miring terhadap sumbu putarnya.",
          "Deklinasi: selisih arah jarum kompas dengan utara geografis; inklinasi: kemiringan medan terhadap horizontal.",
          "Medan Bumi membelokkan angin Matahari, melindungi atmosfer dan menimbulkan aurora.",
          "Kuat medan Bumi hanya puluhan µT, jauh lebih lemah dari magnet kulkas, tapi cukup untuk kompas.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bumi berperilaku seperti?",
            options: [
              "Muatan listrik raksasa",
              "Magnet batang raksasa",
              "Kapasitor besar",
              "Lensa cembung",
            ],
            answer: 1,
            explain: "Inti Bumi menghasilkan medan seolah ada magnet batang raksasa.",
          },
          {
            q: "Selisih arah jarum kompas dengan utara geografis disebut?",
            options: ["Inklinasi", "Deklinasi", "Fluks", "Refraksi"],
            answer: 1,
            explain: "Deklinasi adalah sudut simpang utara magnetik dari utara geografis.",
          },
          {
            q: "Aurora terjadi karena medan Bumi?",
            options: [
              "Memanaskan udara",
              "Menggiring partikel Matahari ke kutub",
              "Memantulkan cahaya bulan",
              "Menarik awan",
            ],
            answer: 1,
            explain: "Partikel bermuatan dibelokkan ke kutub lalu memancarkan cahaya.",
          },
          {
            q: "Dibanding mesin MRI, medan magnet Bumi tergolong?",
            options: ["Jauh lebih kuat", "Sama kuat", "Jauh lebih lemah", "Tak terukur"],
            answer: 2,
            explain: "Medan Bumi puluhan µT, MRI sekitar 1,5 T, jadi Bumi jauh lebih lemah.",
          },
          {
            q: "Manfaat penting medan magnet Bumi bagi kehidupan adalah?",
            options: [
              "Membuat hujan",
              "Melindungi atmosfer dari angin Matahari",
              "Menghasilkan gravitasi",
              "Menerangi malam",
            ],
            answer: 1,
            explain: "Medan Bumi membelokkan angin Matahari sehingga atmosfer terlindungi.",
          },
        ],
      },
    ],
  },
];
