import type { Lesson } from "../../../types";

export const level7: Lesson[] = [
  // ============================================================
  {
    id: "hak-asasi-kebebasan-sipil",
    levelId: "hak",
    order: 1,
    title: "Hak Asasi & Kebebasan Sipil",
    summary:
      "Yang tak boleh dilanggar bahkan oleh mayoritas. Pelajari hak asasi, kebebasan sipil, dan bahaya tirani mayoritas.",
    durationMin: 14,
    tags: ["hak asasi", "kebebasan", "minoritas", "tirani mayoritas"],
    blocks: [
      {
        type: "paragraph",
        html: "Demokrasi bukan sekadar 'mayoritas selalu menang'. Ada hal-hal mendasar yang <strong>tidak boleh dilanggar</strong>, bahkan oleh suara terbanyak: <strong>hak asasi manusia</strong>. Kebebasan berpendapat, beragama, berkumpul, dan hak atas peradilan adil melindungi tiap individu, termasuk yang berbeda dari mayoritas.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Tirani mayoritas",
        html: "Bila mayoritas bisa menindas minoritas hanya karena lebih banyak, demokrasi berubah menjadi <strong>tirani mayoritas</strong>. Karena itu hak asasi ditempatkan di atas keputusan biasa: ia menjadi rem bagi kehendak mayoritas.",
      },
      {
        type: "video",
        comp: "KeadilanVideo",
        title: "Keadilan",
        caption: "Mengapa hak dan keadilan harus melindungi setiap orang, bukan hanya yang terbanyak.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/G20_peaceful_crowd.jpg?width=400",
        alt: "Kerumunan warga melakukan unjuk rasa damai",
        caption: "Kebebasan berkumpul dan menyampaikan pendapat di muka umum adalah hak sipil mendasar.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Studi Kasus: Kebebasan pers sebagai pilar keempat",
        html: "Pers sering disebut <strong>pilar keempat demokrasi</strong>, di samping legislatif, eksekutif, dan yudikatif. Lewat pemberitaan, jurnalis mengungkap korupsi, mengawasi penguasa, dan memberi rakyat informasi untuk memilih. Ketika pers dibungkam atau dikuasai penguasa, rakyat kehilangan mata dan telinga, dan penyalahgunaan kekuasaan jadi mudah disembunyikan. Itulah mengapa kebebasan pers menjadi penanda penting sehat-tidaknya sebuah demokrasi.",
      },
      {
        type: "case",
        title: "Sejarah: Deklarasi Universal Hak Asasi Manusia (1948)",
        html: "Setelah kekejaman Perang Dunia II, dunia bertekad menegakkan martabat manusia. Pada <strong>10 Desember 1948</strong>, Majelis Umum PBB mengesahkan <strong>Deklarasi Universal Hak Asasi Manusia (DUHAM)</strong>. Dokumen ini menyatakan bahwa semua manusia lahir merdeka dan setara dalam martabat dan hak. DUHAM menjadi rujukan global, mengilhami konstitusi banyak negara, termasuk jaminan hak asasi dalam UUD 1945 Indonesia hasil amandemen.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kelompok minoritas adalah 8% dari 50 juta penduduk. Berapa juta orang yang hak-haknya harus tetap dilindungi meski mereka minoritas?",
        answer: 4,
        tolerance: 0,
        suffix: "juta",
        solution:
          "8% x 50 juta = 0,08 x 50 = <strong>4 juta orang</strong>. Dalam demokrasi sehat, jumlah yang kecil tidak membuat hak mereka boleh diabaikan mayoritas.",
        hint: "Kalikan persentase minoritas dengan total penduduk.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap tindakan: MENJUNJUNG atau MELANGGAR hak asasi.",
        buckets: ["Menjunjung HAM", "Melanggar HAM"],
        items: [
          { text: "Membiarkan warga mengkritik pemerintah secara damai", bucket: "Menjunjung HAM" },
          { text: "Menangkap jurnalis karena memberitakan korupsi", bucket: "Melanggar HAM" },
          { text: "Menjamin kebebasan beribadah semua agama", bucket: "Menjunjung HAM" },
          { text: "Melarang kelompok minoritas berkumpul", bucket: "Melanggar HAM" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Demokrasi bukan sekadar mayoritas menang; ada hak yang tak boleh dilanggar.",
          "Hak asasi melindungi tiap individu, termasuk minoritas, dari tirani mayoritas.",
          "Kebebasan pers adalah pilar keempat yang mengawasi penguasa.",
          "DUHAM (1948) menjadi rujukan global hak asasi setelah Perang Dunia II.",
          "Jumlah yang kecil tidak membuat hak sebuah kelompok boleh diabaikan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa hak asasi ditempatkan di atas keputusan mayoritas biasa?",
            options: [
              "Agar mayoritas selalu kalah",
              "Agar mayoritas tidak bisa menindas minoritas",
              "Agar tidak ada pemilu",
              "Agar penguasa kebal hukum",
            ],
            answer: 1,
            explain: "Hak asasi menjadi rem agar mayoritas tidak menindas yang lemah.",
          },
          {
            q: "Apa itu tirani mayoritas?",
            options: [
              "Mayoritas melindungi minoritas",
              "Mayoritas menindas minoritas hanya karena lebih banyak",
              "Minoritas memerintah",
              "Tidak ada yang memilih",
            ],
            answer: 1,
            explain: "Tirani mayoritas terjadi saat suara terbanyak melanggar hak minoritas.",
          },
          {
            q: "Mengapa pers disebut pilar keempat demokrasi?",
            options: [
              "Karena menjual koran",
              "Karena mengawasi penguasa dan memberi rakyat informasi",
              "Karena membuat undang-undang",
              "Karena mengadili perkara",
            ],
            answer: 1,
            explain: "Pers mengungkap penyalahgunaan dan memberi informasi untuk rakyat memilih.",
          },
          {
            q: "Apa itu DUHAM 1948?",
            options: [
              "Deklarasi kemerdekaan Indonesia",
              "Deklarasi Universal Hak Asasi Manusia oleh PBB",
              "Perjanjian dagang",
              "Konstitusi Amerika",
            ],
            answer: 1,
            explain: "DUHAM disahkan PBB pada 10 Desember 1948 sebagai rujukan hak asasi global.",
          },
          {
            q: "Minoritas 8% dari 50 juta penduduk berjumlah?",
            options: ["2 juta", "4 juta", "8 juta", "40 juta"],
            answer: 1,
            explain: "0,08 dikali 50 juta sama dengan 4 juta orang.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hak-asasi-manusia-duham",
    levelId: "hak",
    order: 2,
    title: "Hak Asasi Manusia & DUHAM",
    summary:
      "Apa itu hak asasi manusia, dari mana asalnya, dan bagaimana Deklarasi Universal 1948 menjadi standar bersama umat manusia.",
    durationMin: 14,
    tags: ["hak asasi", "DUHAM", "PBB", "martabat manusia"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Hak asasi manusia (HAM)</strong> adalah hak yang melekat pada setiap orang sejak lahir, semata karena ia manusia. HAM tidak diberikan oleh negara dan karena itu tidak boleh dicabut oleh negara. Hak hidup, kebebasan beragama, kesetaraan di depan hukum, dan kebebasan dari penyiksaan berlaku untuk semua orang tanpa memandang suku, agama, jenis kelamin, atau status.",
      },
      {
        type: "paragraph",
        html: "Setelah dunia menyaksikan kekejaman Perang Dunia II, bangsa-bangsa sepakat menuliskan standar bersama agar tragedi serupa tidak terulang. Lahirlah <strong>Deklarasi Universal Hak Asasi Manusia (DUHAM)</strong> dengan 30 pasal yang menjadi rujukan moral seluruh umat manusia.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga ciri hak asasi",
        html: "HAM bersifat <strong>universal</strong> (berlaku untuk semua orang), <strong>tidak dapat dicabut</strong> (melekat sejak lahir), dan <strong>tidak dapat dibagi</strong> (satu hak tidak boleh dikorbankan demi hak lain).",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bukan pemberian negara",
        html: "Karena HAM melekat sejak lahir, tugas negara bukan memberi, melainkan <strong>menghormati, melindungi, dan memenuhi</strong>. Konstitusi yang baik mencantumkan jaminan HAM agar penguasa tidak mudah melanggarnya.",
      },
      {
        type: "video",
        comp: "DemokrasiVideo",
        title: "Demokrasi dan martabat manusia",
        caption: "Bagaimana demokrasi menempatkan hak setiap warga sebagai dasar, bukan sekadar hitungan suara.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Headquarters_of_the_United_Nations%2C_New_York_City%2C_20231001_1103_1006.jpg?width=400",
        alt: "Gedung markas besar Perserikatan Bangsa-Bangsa di New York",
        caption: "Markas PBB di New York, tempat DUHAM lahir dan standar HAM global dirumuskan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Pertumbuhan jumlah negara anggota PBB",
        unit: "negara anggota",
        source: "PBB (perkembangan keanggotaan)",
        note: "Makin banyak negara bergabung, makin luas pula kerangka HAM yang disepakati bersama.",
        data: [
          { label: "1945", value: 51, color: "#60a5fa" },
          { label: "1975", value: 144, color: "#34d399" },
          { label: "1992", value: 179, color: "#fbbf24" },
          { label: "2011", value: 193, color: "#a78bfa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: 30 pasal yang melindungi sehari-hari",
        html: "DUHAM bukan dokumen abstrak. Pasal-pasalnya menyentuh hidup nyata: hak atas pendidikan (Pasal 26), hak bekerja dan upah layak (Pasal 23), kebebasan berpikir dan beragama (Pasal 18), serta hak atas peradilan yang adil (Pasal 10 dan 11). Ketika seorang anak miskin tetap bisa bersekolah atau seorang terdakwa berhak didampingi pembela, di situ DUHAM bekerja.",
      },
      {
        type: "case",
        title: "Sejarah: Penyusunan DUHAM (1948)",
        html: "Komisi penyusun DUHAM diketuai <strong>Eleanor Roosevelt</strong>. Setelah perdebatan panjang lintas budaya dan ideologi, naskahnya disahkan Majelis Umum PBB di Paris pada <strong>10 Desember 1948</strong>. Sebanyak 48 negara menyetujui, 8 negara abstain, dan tidak ada yang menolak. Tanggal itu kini diperingati dunia sebagai Hari Hak Asasi Manusia.",
      },
      {
        type: "calcExercise",
        prompt:
          "DUHAM disahkan tahun 1948. Pada tahun 2018 dunia memperingati ulang tahunnya. Genap berapa tahun usia DUHAM saat itu?",
        answer: 70,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "2018 - 1948 = <strong>70 tahun</strong>. Pada 2018 DUHAM genap berusia 70 tahun sebagai standar HAM global.",
        hint: "Kurangkan tahun peringatan dengan tahun pengesahan.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana yang termasuk hak asasi yang dijamin DUHAM, dan mana yang bukan?",
        buckets: ["Hak asasi (dijamin DUHAM)", "Bukan hak asasi"],
        items: [
          { text: "Hak atas pendidikan", bucket: "Hak asasi (dijamin DUHAM)" },
          { text: "Kebebasan beragama dan berkeyakinan", bucket: "Hak asasi (dijamin DUHAM)" },
          { text: "Hak atas peradilan yang adil", bucket: "Hak asasi (dijamin DUHAM)" },
          { text: "Hak memaksa orang lain seagama dengan kita", bucket: "Bukan hak asasi" },
          { text: "Hak menghukum orang tanpa pengadilan", bucket: "Bukan hak asasi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "HAM melekat pada setiap orang sejak lahir, bukan pemberian negara.",
          "HAM bersifat universal, tidak dapat dicabut, dan tidak dapat dibagi.",
          "DUHAM 1948 berisi 30 pasal yang menjadi standar bersama umat manusia.",
          "Tugas negara adalah menghormati, melindungi, dan memenuhi HAM.",
          "10 Desember diperingati dunia sebagai Hari Hak Asasi Manusia.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dari mana hak asasi manusia berasal?",
            options: [
              "Diberikan penguasa sebagai hadiah",
              "Melekat pada setiap orang sejak lahir",
              "Hanya dimiliki warga negara kaya",
              "Dibeli dengan uang",
            ],
            answer: 1,
            explain: "HAM melekat sejak lahir karena seseorang adalah manusia, bukan pemberian negara.",
          },
          {
            q: "Apa arti HAM bersifat 'tidak dapat dicabut'?",
            options: [
              "Bisa dihapus kapan saja",
              "Tetap melekat dan tidak boleh dirampas",
              "Hanya berlaku saat pemilu",
              "Hanya untuk mayoritas",
            ],
            answer: 1,
            explain: "Tidak dapat dicabut berarti hak itu tetap melekat dan tidak boleh dirampas penguasa.",
          },
          {
            q: "Berapa jumlah pasal dalam DUHAM?",
            options: ["10 pasal", "30 pasal", "100 pasal", "1 pasal"],
            answer: 1,
            explain: "DUHAM terdiri atas 30 pasal yang mencakup berbagai hak dasar manusia.",
          },
          {
            q: "Siapa yang mengetuai komisi penyusun DUHAM?",
            options: ["Nelson Mandela", "Eleanor Roosevelt", "Martin Luther King", "Soekarno"],
            answer: 1,
            explain: "Komisi penyusun DUHAM diketuai Eleanor Roosevelt.",
          },
          {
            q: "Apa kewajiban utama negara terhadap HAM?",
            options: [
              "Memberi izin sesekali",
              "Menghormati, melindungi, dan memenuhi",
              "Menjual hak kepada warga",
              "Mengabaikan minoritas",
            ],
            answer: 1,
            explain: "Negara wajib menghormati, melindungi, dan memenuhi hak asasi warganya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kebebasan-pers",
    levelId: "hak",
    order: 3,
    title: "Kebebasan Pers",
    summary:
      "Mengapa pers bebas disebut pilar keempat demokrasi, bagaimana ia mengawasi kekuasaan, dan kisah kebangkitan pers Indonesia pasca-Reformasi.",
    durationMin: 14,
    tags: ["kebebasan pers", "jurnalisme", "pilar keempat", "Reformasi"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Kebebasan pers</strong> adalah hak media untuk mencari, mengolah, dan menyebarkan informasi tanpa sensor atau tekanan penguasa. Pers yang bebas menjadi <strong>mata dan telinga rakyat</strong>: ia mengungkap korupsi, mengawasi pejabat, dan memberi warga informasi untuk menilai pemerintah.",
      },
      {
        type: "paragraph",
        html: "Karena perannya mengawasi tiga cabang kekuasaan, pers sering disebut <strong>pilar keempat demokrasi</strong>. Tanpa pers bebas, penyalahgunaan kekuasaan mudah disembunyikan dan rakyat memilih dalam kegelapan informasi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Anjing penjaga, bukan corong",
        html: "Pers sehat berperan sebagai <strong>watchdog</strong> atau anjing penjaga yang menggonggong saat ada penyimpangan, bukan corong yang hanya memuji penguasa. Inilah beda pers merdeka dengan media propaganda.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Cara pers dibungkam",
        html: "Pers bisa dilemahkan dengan banyak cara: pencabutan izin terbit, kekerasan terhadap jurnalis, kriminalisasi pemberitaan, atau penguasaan media oleh segelintir pemilik. Semuanya membuat rakyat kehilangan informasi yang jujur.",
      },
      {
        type: "video",
        comp: "KeadilanVideo",
        title: "Pers dan keadilan informasi",
        caption: "Bagaimana informasi yang jujur menjaga keseimbangan kekuasaan dan keadilan bagi rakyat.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/G20_peaceful_crowd.jpg?width=400",
        alt: "Kerumunan warga di ruang publik tempat informasi mengalir bebas",
        caption: "Arus informasi yang bebas memungkinkan warga berdiskusi dan menilai penguasa secara terbuka.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Ledakan media cetak Indonesia sesudah Reformasi (ilustrasi)",
        unit: "perkiraan jumlah penerbitan",
        source: "ilustrasi edukatif berdasarkan tren pasca-1998",
        note: "Setelah izin terbit dibebaskan pada 1998, jumlah media melonjak tajam dalam waktu singkat.",
        data: [
          { label: "1997 (Orde Baru)", value: 289, color: "#f87171" },
          { label: "1999 (Reformasi)", value: 1687, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pemberitaan yang membongkar korupsi",
        html: "Bayangkan sebuah proyek jalan senilai Rp 200 miliar yang hanya separuh dikerjakan. Tanpa pers, kasus ini bisa lenyap dalam arsip. Dengan pers bebas, jurnalis menelusuri dokumen, mewawancarai warga, dan menerbitkan laporan. Tekanan publik memaksa aparat menyelidiki. Di sinilah pers menyelamatkan uang rakyat yang seharusnya dipakai untuk kepentingan umum.",
      },
      {
        type: "case",
        title: "Sejarah: Kebebasan pers pasca-Reformasi Indonesia (1998)",
        html: "Pada masa Orde Baru, pers dikekang lewat izin terbit (SIUPP) yang bisa dicabut sewaktu-waktu, dan beberapa media dibredel. Setelah <strong>Reformasi 1998</strong> dan jatuhnya Soeharto, kebebasan pers mekar pesat. Kewajiban SIUPP dihapus dan lahir <strong>Undang-Undang Pers Nomor 40 Tahun 1999</strong> yang menjamin kemerdekaan pers serta melarang penyensoran dan pembredelan. Indonesia berubah dari pers terkekang menjadi salah satu yang paling hidup di kawasan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kebebasan pers Indonesia mekar sejak Reformasi 1998. Hingga tahun 2023, sudah berapa tahun pers Indonesia hidup dalam kebebasan?",
        answer: 25,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "2023 - 1998 = <strong>25 tahun</strong> kebebasan pers sejak Reformasi.",
        hint: "Kurangkan tahun acuan dengan tahun Reformasi.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya dalam dunia pers.",
        pairs: [
          { left: "Watchdog", right: "Pers mengawasi dan menggonggong saat ada penyimpangan" },
          { left: "Pembredelan", right: "Pemberangusan media oleh penguasa" },
          { left: "Pilar keempat", right: "Pers sebagai pengawas tiga cabang kekuasaan" },
          { left: "UU Pers 1999", right: "Jaminan hukum kemerdekaan pers di Indonesia" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kebebasan pers adalah hak media menyebarkan informasi tanpa sensor.",
          "Pers bebas mengawasi kekuasaan dan disebut pilar keempat demokrasi.",
          "Pers sehat berperan watchdog, bukan corong propaganda.",
          "Reformasi 1998 dan UU Pers 1999 menghidupkan kebebasan pers Indonesia.",
          "Tanpa pers bebas, penyalahgunaan kekuasaan mudah disembunyikan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa peran utama pers dalam demokrasi?",
            options: [
              "Memuji penguasa",
              "Mengawasi kekuasaan dan memberi informasi pada rakyat",
              "Menjual iklan saja",
              "Membuat undang-undang",
            ],
            answer: 1,
            explain: "Pers mengawasi penguasa dan memberi rakyat informasi untuk menilai pemerintah.",
          },
          {
            q: "Mengapa pers disebut pilar keempat demokrasi?",
            options: [
              "Karena bangunannya tinggi",
              "Karena mengawasi legislatif, eksekutif, dan yudikatif",
              "Karena menjadi cabang kekuasaan resmi",
              "Karena memilih presiden",
            ],
            answer: 1,
            explain: "Pers mengawasi tiga cabang kekuasaan, sehingga disebut pilar keempat.",
          },
          {
            q: "Apa arti pers berperan sebagai watchdog?",
            options: [
              "Menjaga rumah penguasa",
              "Mengawasi dan menggonggong saat ada penyimpangan",
              "Diam menuruti perintah",
              "Hanya menyiarkan hiburan",
            ],
            answer: 1,
            explain: "Watchdog berarti pers menggonggong saat ada penyimpangan kekuasaan.",
          },
          {
            q: "Apa yang terjadi pada kebebasan pers Indonesia setelah Reformasi 1998?",
            options: [
              "Makin dikekang",
              "Mekar pesat dan kewajiban SIUPP dihapus",
              "Semua media ditutup",
              "Tidak berubah",
            ],
            answer: 1,
            explain: "Setelah Reformasi, SIUPP dihapus dan lahir UU Pers 1999 yang menjamin kemerdekaan pers.",
          },
          {
            q: "Undang-undang apa yang menjamin kemerdekaan pers Indonesia?",
            options: [
              "UU Pers Nomor 40 Tahun 1999",
              "UU Pemilu",
              "UU Lalu Lintas",
              "UU Pajak",
            ],
            answer: 0,
            explain: "UU Pers Nomor 40 Tahun 1999 menjamin kemerdekaan pers dan melarang penyensoran.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kebebasan-berpendapat-berkumpul",
    levelId: "hak",
    order: 4,
    title: "Kebebasan Berpendapat & Berkumpul",
    summary:
      "Hak menyuarakan pikiran dan berkumpul secara damai, batasnya, serta kekuatan gerakan damai mengubah sejarah.",
    durationMin: 14,
    tags: ["kebebasan berpendapat", "berkumpul", "unjuk rasa", "demokrasi"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Kebebasan berpendapat</strong> adalah hak menyuarakan pikiran, kritik, dan gagasan tanpa takut dihukum. <strong>Kebebasan berkumpul</strong> adalah hak berhimpun secara damai, termasuk berunjuk rasa, untuk menyampaikan aspirasi. Keduanya membuat rakyat bisa mengoreksi penguasa di antara dua pemilu.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kunci kemajuan bersama",
        html: "Saat orang bebas berdebat, gagasan buruk bisa dibantah dan gagasan baik bisa menyebar. Banyak perbaikan sosial bermula dari segelintir orang yang berani bersuara, lalu didengar oleh banyak orang.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Kebebasan bukan tanpa batas",
        html: "Kebebasan berpendapat tidak berarti boleh memfitnah, menghasut kekerasan, atau menyebar kebencian yang membahayakan orang lain. Berkumpul pun harus <strong>damai</strong>. Batas yang adil melindungi hak semua pihak, bukan membungkam kritik.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser indikator kebebasan sipil dan lihat bagaimana ia memengaruhi skor demokrasi sebuah negara.",
      },
      {
        type: "widget",
        widget: "SimulatorIndeksDemokrasi",
      },
      {
        type: "video",
        comp: "DemokrasiVideo",
        title: "Suara Rakyat di Antara Dua Pemilu",
        caption: "Bagaimana kebebasan berpendapat dan berkumpul membuat rakyat bisa mengoreksi penguasa setiap saat.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/G20_peaceful_crowd.jpg?width=400",
        alt: "Warga berkumpul damai menyampaikan aspirasi di ruang publik",
        caption: "Berkumpul secara damai adalah cara rakyat menyuarakan aspirasi tanpa kekerasan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Studi Kasus: Aksi damai mengubah kebijakan",
        html: "Sebuah aksi damai menolak kenaikan tarif diikuti sekitar 5.000 orang. Mereka berorasi, membawa spanduk, dan pulang tanpa kekerasan. Liputan media membuat aspirasi itu terdengar luas, dan pemerintah akhirnya meninjau ulang kebijakannya. Tanpa hak berkumpul dan berpendapat, suara 5.000 orang itu tak akan pernah sampai ke meja pengambil keputusan.",
      },
      {
        type: "case",
        title: "Sejarah: March on Washington dan 'I Have a Dream' (1963)",
        html: "Pada <strong>28 Agustus 1963</strong>, sekitar <strong>250.000 orang</strong> berkumpul damai di Washington, DC, menuntut persamaan hak warga kulit hitam Amerika. Di sana <strong>Martin Luther King Jr.</strong> menyampaikan pidato 'I Have a Dream'. Aksi raksasa tanpa kekerasan ini mendorong lahirnya Undang-Undang Hak Sipil 1964. Inilah bukti kekuatan kebebasan berkumpul dan berpendapat mengubah sejarah.",
      },
      {
        type: "calcExercise",
        prompt:
          "Aturan menetapkan pemberitahuan unjuk rasa damai paling lambat 3 x 24 jam sebelum aksi. Berapa jam itu?",
        answer: 72,
        tolerance: 0,
        suffix: "jam",
        solution:
          "3 x 24 = <strong>72 jam</strong>. Pemberitahuan sebelumnya membantu aparat mengamankan aksi, bukan melarangnya.",
        hint: "Kalikan 3 dengan 24 jam.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana yang merupakan penggunaan hak yang SAH, dan mana yang MENYALAHGUNAKAN kebebasan?",
        buckets: ["Penggunaan hak yang sah", "Penyalahgunaan kebebasan"],
        items: [
          { text: "Berorasi damai mengkritik kebijakan pemerintah", bucket: "Penggunaan hak yang sah" },
          { text: "Mengirim petisi tertulis kepada DPR", bucket: "Penggunaan hak yang sah" },
          { text: "Menghasut massa membakar dan merusak fasilitas", bucket: "Penyalahgunaan kebebasan" },
          { text: "Menyebar fitnah untuk menjatuhkan seseorang", bucket: "Penyalahgunaan kebebasan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kebebasan berpendapat adalah hak menyuarakan kritik dan gagasan.",
          "Kebebasan berkumpul adalah hak berhimpun secara damai.",
          "Keduanya membantu rakyat mengoreksi penguasa di antara pemilu.",
          "Kebebasan ada batasnya: tidak boleh memfitnah atau menghasut kekerasan.",
          "March on Washington 1963 membuktikan kekuatan aksi damai mengubah sejarah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu kebebasan berkumpul?",
            options: [
              "Hak memaksa orang sependapat",
              "Hak berhimpun secara damai untuk menyampaikan aspirasi",
              "Hak merusak fasilitas umum",
              "Hak melarang orang lain bicara",
            ],
            answer: 1,
            explain: "Kebebasan berkumpul adalah hak berhimpun damai menyampaikan aspirasi.",
          },
          {
            q: "Manakah batas yang sah bagi kebebasan berpendapat?",
            options: [
              "Tidak boleh mengkritik penguasa",
              "Tidak boleh memfitnah atau menghasut kekerasan",
              "Tidak boleh berbeda dengan mayoritas",
              "Tidak boleh berbicara sama sekali",
            ],
            answer: 1,
            explain: "Kebebasan dibatasi larangan memfitnah dan menghasut kekerasan, bukan larangan mengkritik.",
          },
          {
            q: "Mengapa kebebasan berpendapat penting di antara dua pemilu?",
            options: [
              "Agar rakyat bisa mengoreksi penguasa kapan saja",
              "Agar pemilu tidak perlu diadakan",
              "Agar penguasa kebal kritik",
              "Agar media ditutup",
            ],
            answer: 0,
            explain: "Lewat pendapat dan aksi damai, rakyat bisa mengoreksi penguasa tanpa menunggu pemilu.",
          },
          {
            q: "Apa peristiwa penting 28 Agustus 1963 di Washington?",
            options: [
              "Perang dunia dimulai",
              "Aksi damai 250.000 orang dan pidato 'I Have a Dream'",
              "Pemilu Indonesia pertama",
              "Pengesahan DUHAM",
            ],
            answer: 1,
            explain: "March on Washington 1963 menghimpun sekitar 250.000 orang dan pidato Martin Luther King Jr.",
          },
          {
            q: "Apa syarat utama sebuah unjuk rasa dilindungi sebagai hak?",
            options: [
              "Harus rusuh",
              "Harus damai dan tanpa kekerasan",
              "Harus diikuti jutaan orang",
              "Harus mendukung penguasa",
            ],
            answer: 1,
            explain: "Hak berkumpul melindungi aksi yang damai dan tanpa kekerasan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hak-minoritas-tirani-mayoritas",
    levelId: "hak",
    order: 5,
    title: "Hak Minoritas & Tirani Mayoritas",
    summary:
      "Mengapa demokrasi sehat melindungi minoritas, bagaimana aturan menahan tirani mayoritas, dan pelajaran dari berakhirnya apartheid.",
    durationMin: 14,
    tags: ["hak minoritas", "tirani mayoritas", "supermajoritas", "apartheid"],
    blocks: [
      {
        type: "paragraph",
        html: "Demokrasi memakai suara terbanyak untuk memutuskan, tetapi <strong>mayoritas tidak boleh berbuat sesuka hati</strong>. Bila suara terbanyak dipakai untuk menindas kelompok kecil, itu bukan lagi demokrasi sehat, melainkan <strong>tirani mayoritas</strong>. Karena itu hak minoritas dilindungi secara khusus.",
      },
      {
        type: "paragraph",
        html: "Perlindungan itu bekerja lewat beberapa cara: <strong>hak asasi</strong> yang tak boleh dilanggar suara terbanyak, <strong>konstitusi</strong> yang sulit diubah, dan aturan <strong>supermajoritas</strong> yang menuntut persetujuan lebih dari sekadar 50 persen untuk keputusan besar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Demokrasi bukan 51 persen menelan 49 persen",
        html: "Tujuan demokrasi bukan agar mayoritas menguasai segalanya, melainkan agar semua warga, termasuk yang kalah suara, tetap dihormati hak-haknya. Minoritas hari ini bisa menjadi mayoritas esok, maka melindungi mereka berarti melindungi diri sendiri.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Tirani mayoritas dalam praktik",
        html: "Tirani mayoritas terjadi bila kelompok terbanyak melarang ibadah agama lain, mencabut hak pilih suatu suku, atau menyingkirkan kelompok berbeda dari pekerjaan dan pendidikan, hanya karena bisa, sebab mereka lebih banyak.",
      },
      {
        type: "video",
        comp: "KeadilanVideo",
        title: "Keadilan bagi yang berbeda",
        caption: "Mengapa keadilan diukur dari bagaimana yang lemah dan berbeda diperlakukan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ballot_dropped_into_ballot_box_2024_Swedish_EU_election_at_St%C3%A5ngen%C3%A4sskolan%2C_Brastad.jpg?width=400",
        alt: "Surat suara dimasukkan ke dalam kotak suara",
        caption: "Suara terbanyak menentukan keputusan, tetapi hak minoritas tetap dilindungi di luar kotak suara.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Ambang persetujuan menurut jenis keputusan",
        unit: "persen suara yang dibutuhkan",
        source: "ilustrasi edukatif aturan pengambilan keputusan",
        note: "Keputusan biasa cukup mayoritas sederhana, tetapi mengubah konstitusi menuntut supermajoritas agar minoritas terlindungi.",
        data: [
          { label: "Keputusan biasa (mayoritas sederhana)", value: 50, color: "#60a5fa" },
          { label: "Ubah undang-undang penting", value: 60, color: "#fbbf24" },
          { label: "Ubah konstitusi (2/3)", value: 67, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Supermajoritas menjaga aturan dasar",
        html: "Di sebuah parlemen 100 kursi, koalisi mayoritas menguasai 60 kursi, cukup untuk membuat undang-undang biasa. Namun mereka ingin mengubah konstitusi, yang menuntut dukungan 2/3 atau sekitar 67 kursi. Karena kurang 7 kursi, mereka harus bernegosiasi dengan kelompok lain, termasuk minoritas. Aturan inilah yang mencegah mayoritas mengubah aturan dasar sesuka hati.",
      },
      {
        type: "case",
        title: "Sejarah: Berakhirnya apartheid Afrika Selatan (1994)",
        html: "Selama puluhan tahun, rezim <strong>apartheid</strong> di Afrika Selatan menindas mayoritas kulit hitam lewat kekuasaan minoritas kulit putih: hak pilih dicabut, tempat tinggal dipisah, dan kesempatan dirampas. Setelah perjuangan panjang, pada <strong>1994</strong> digelar pemilu pertama yang diikuti semua ras, dan <strong>Nelson Mandela</strong> terpilih menjadi presiden. Konstitusi baru menegaskan kesetaraan dan perlindungan hak semua kelompok, contoh bahwa keadilan harus melindungi setiap orang, bukan hanya yang berkuasa.",
      },
      {
        type: "calcExercise",
        prompt:
          "Parlemen punya 100 kursi. Untuk mengubah konstitusi dibutuhkan dukungan 2/3 (dibulatkan menjadi 67 kursi). Bila koalisi mayoritas hanya punya 60 kursi, berapa kursi lagi yang mereka butuhkan?",
        answer: 7,
        tolerance: 0,
        suffix: "kursi",
        solution:
          "Ambang 2/3 dari 100 dibulatkan menjadi 67 kursi. 67 - 60 = <strong>7 kursi</strong>. Mereka harus menggandeng kelompok lain, sehingga minoritas tetap punya posisi tawar.",
        hint: "Kurangkan ambang 67 kursi dengan kursi yang sudah dimiliki.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya.",
        pairs: [
          { left: "Tirani mayoritas", right: "Suara terbanyak menindas hak kelompok kecil" },
          { left: "Supermajoritas", right: "Ambang persetujuan lebih dari 50 persen untuk keputusan besar" },
          { left: "Hak minoritas", right: "Hak kelompok kecil yang tetap dilindungi negara" },
          { left: "Apartheid", right: "Pemisahan dan penindasan berdasarkan ras di Afrika Selatan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Mayoritas memutuskan, tetapi tidak boleh menindas minoritas.",
          "Tirani mayoritas adalah suara terbanyak yang melanggar hak kelompok kecil.",
          "Hak asasi, konstitusi, dan supermajoritas melindungi minoritas.",
          "Minoritas hari ini bisa menjadi mayoritas esok, maka melindunginya melindungi semua.",
          "Berakhirnya apartheid 1994 menunjukkan keadilan harus melindungi setiap orang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud tirani mayoritas?",
            options: [
              "Mayoritas melindungi minoritas",
              "Suara terbanyak menindas hak kelompok kecil",
              "Minoritas memerintah sendiri",
              "Tidak ada yang memilih",
            ],
            answer: 1,
            explain: "Tirani mayoritas adalah saat suara terbanyak dipakai menindas hak minoritas.",
          },
          {
            q: "Mengapa mengubah konstitusi biasanya butuh supermajoritas?",
            options: [
              "Agar lebih cepat",
              "Agar mayoritas tidak bisa mengubah aturan dasar sesuka hati",
              "Agar minoritas tidak punya suara",
              "Agar pemilu dihapus",
            ],
            answer: 1,
            explain: "Supermajoritas menuntut persetujuan luas sehingga aturan dasar terlindung dari kehendak sepihak.",
          },
          {
            q: "Mengapa melindungi minoritas berarti melindungi semua orang?",
            options: [
              "Karena minoritas selalu menang",
              "Karena kita pun bisa menjadi minoritas suatu saat",
              "Karena minoritas tidak penting",
              "Karena mayoritas tak pernah salah",
            ],
            answer: 1,
            explain: "Minoritas hari ini bisa jadi mayoritas esok, dan sebaliknya, sehingga perlindungan berlaku timbal balik.",
          },
          {
            q: "Apa itu apartheid?",
            options: [
              "Sistem demokrasi penuh",
              "Pemisahan dan penindasan berdasarkan ras di Afrika Selatan",
              "Jenis pemilu",
              "Nama partai di Indonesia",
            ],
            answer: 1,
            explain: "Apartheid adalah sistem pemisahan dan penindasan berdasarkan ras di Afrika Selatan.",
          },
          {
            q: "Siapa yang terpilih sebagai presiden Afrika Selatan setelah apartheid berakhir pada 1994?",
            options: ["Eleanor Roosevelt", "Nelson Mandela", "Martin Luther King", "Soekarno"],
            answer: 1,
            explain: "Nelson Mandela terpilih sebagai presiden lewat pemilu multiras pertama pada 1994.",
          },
        ],
      },
    ],
  },
];
