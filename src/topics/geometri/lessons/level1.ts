import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "garis-sudut-bidang",
    levelId: "garis-sudut",
    order: 1,
    title: "Garis, Sudut, dan Hubungannya",
    summary:
      "Sebelum menghafal jenis sudut, kita ukur dan amati dulu, sampai aturan jumlah sudut muncul sendiri.",
    durationMin: 12,
    tags: ["geometri", "sudut", "garis", "pengukuran"],
    blocks: [
      {
        type: "paragraph",
        html: "Lihat pertemuan dua jalan, jarum jam, atau sudut meja. Di mana-mana ada <strong>sudut</strong>, yaitu besarnya putaran antara dua arah. Sebelum kita beri nama jenis-jenisnya, ayo amati dulu apa yang tetap saat sudut berubah.",
      },
      {
        type: "video",
        comp: "SudutVideo",
        title: "Video: Mengenal Sudut",
        caption: "Sudut diukur dalam derajat, dari lancip hingga lurus.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gambar sebuah garis lurus, lalu tarik satu garis dari titik di atasnya. Terbentuk dua sudut. Coba berbagai kemiringan, lalu jumlahkan kedua sudut itu. Apa yang kamu temukan? Selalu menghasilkan angka yang sama.",
      },
      {
        type: "widget",
        widget: "SimulatorSudut",
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar mengukur",
        html: "Berhitung menjawab 'berapa derajat'. Geometri menjawab 'mengapa hubungan sudut selalu tetap' dan memakainya untuk menalar bentuk yang lebih rumit.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua sudut saling berpelurus (membentuk garis lurus). Jika satu sudut 65 derajat, berapa sudut pasangannya?",
        answer: 115,
        suffix: " derajat",
        solution:
          "Sudut berpelurus berjumlah 180 derajat, jadi 180 - 65 = <strong>115 derajat</strong>.",
        hint: "Pasangan pelurus selalu melengkapi menjadi 180 derajat.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap sudut menurut jenisnya.",
        buckets: ["Lancip", "Siku-siku", "Tumpul"],
        items: [
          { text: "35 derajat", bucket: "Lancip" },
          { text: "90 derajat", bucket: "Siku-siku" },
          { text: "120 derajat", bucket: "Tumpul" },
          { text: "75 derajat", bucket: "Lancip" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tukang kayu dan siku-siku",
        html: "Seorang tukang kayu memastikan rangka pintu benar-benar persegi dengan mengecek tiap pojoknya tepat 90 derajat. Jika satu sudut meleset jadi 92 derajat, sudut di sebelahnya pasti ikut berubah karena keduanya berpelurus harus berjumlah 180. Memahami hubungan sudut membuat ia bisa memperbaiki tanpa mengukur ulang semuanya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah mengamati, baru kita simpulkan: <strong>sudut lancip</strong> kurang dari 90 derajat, <strong>siku-siku</strong> tepat 90, <strong>tumpul</strong> antara 90 dan 180, dan <strong>lurus</strong> tepat 180. Dua sudut <strong>berpenyiku</strong> berjumlah 90, dua sudut <strong>berpelurus</strong> berjumlah 180.",
      },
      {
        type: "takeaways",
        items: [
          "Sudut adalah besar putaran antara dua sinar, diukur dalam derajat.",
          "Lancip kurang dari 90, siku-siku 90, tumpul 90 sampai 180, lurus 180.",
          "Sudut berpenyiku berjumlah 90 derajat, berpelurus berjumlah 180 derajat.",
          "Hubungan sudut yang tetap itulah yang membuat geometri bisa diandalkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sudut yang besarnya tepat 90 derajat disebut?",
            options: ["Lancip", "Tumpul", "Siku-siku", "Lurus"],
            answer: 2,
            explain: "Sudut 90 derajat adalah sudut siku-siku.",
          },
          {
            q: "Pelurus dari sudut 50 derajat adalah?",
            options: ["40", "130", "50", "310"],
            answer: 1,
            explain: "180 - 50 = 130 derajat.",
          },
          {
            q: "Penyiku dari sudut 30 derajat adalah?",
            options: ["60", "150", "30", "330"],
            answer: 0,
            explain: "90 - 30 = 60 derajat.",
          },
          {
            q: "Sudut 145 derajat termasuk?",
            options: ["Lancip", "Siku-siku", "Tumpul", "Lurus"],
            answer: 2,
            explain: "Antara 90 dan 180, jadi tumpul.",
          },
          {
            q: "Dua sudut pada satu garis lurus selalu berjumlah?",
            options: ["90", "180", "360", "Bergantung gambarnya"],
            answer: 1,
            explain: "Sepasang sudut berpelurus selalu berjumlah 180 derajat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "titik-garis-bidang",
    levelId: "garis-sudut",
    order: 2,
    title: "Titik, Garis, dan Bidang",
    summary:
      "Sebelum menghafal definisi, kita amati dulu unsur paling dasar geometri lewat benda di sekitar, sampai aturannya muncul sendiri.",
    durationMin: 11,
    tags: ["geometri", "titik", "garis", "bidang"],
    blocks: [
      {
        type: "paragraph",
        html: "Tiang lampu, kabel listrik yang membentang, dan lantai yang datar. Tanpa sadar, semua bangunan disusun dari tiga unsur paling sederhana, yaitu <strong>titik</strong>, <strong>garis</strong>, dan <strong>bidang</strong>. Sebelum kita beri definisi resmi, ayo amati dulu bagaimana ketiganya saling membangun.",
      },
      {
        type: "video",
        comp: "BentukGeometri",
        title: "Video: Unsur Dasar Geometri",
        caption: "Dari titik tumbuh garis, dari garis tersusun bidang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tandai beberapa titik di kertas tanpa ada tiga titik yang segaris. Tarik ruas garis di antara setiap pasang titik. Hitung berapa banyak ruas garis yang terbentuk untuk 2, 3, lalu 4 titik. Apakah kamu melihat polanya bertambah cepat?",
      },
      {
        type: "widget",
        widget: "PenjelajahBentuk",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Banyak Ruas Garis dari Sejumlah Titik (tidak ada 3 yang segaris)",
        unit: "ruas garis",
        source: "ilustrasi edukatif",
        note: "Setiap pasang titik menentukan tepat satu ruas garis, jadi banyaknya mengikuti pola kombinasi.",
        data: [
          { label: "2 titik", value: 1, color: "#2dd4bf" },
          { label: "3 titik", value: 3, color: "#22d3ee" },
          { label: "4 titik", value: 6, color: "#38bdf8" },
          { label: "5 titik", value: 10, color: "#818cf8" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar menggambar",
        html: "Menggambar menjawab 'seperti apa bentuknya'. Geometri menjawab 'mengapa dua titik selalu cukup untuk satu garis' dan memakainya untuk menalar ruang yang lebih rumit.",
      },
      {
        type: "calcExercise",
        prompt:
          "Ada 4 titik dan tidak ada tiga titik yang segaris. Berapa banyak ruas garis berbeda yang dapat dibuat dengan menghubungkan setiap pasang titik?",
        answer: 6,
        suffix: " ruas garis",
        solution:
          "Setiap pasang titik menentukan satu ruas garis. Banyak pasangan dari 4 titik adalah (4 x 3) / 2 = <strong>6 ruas garis</strong>.",
        hint: "Hitung banyak pasangan titik, bukan banyak titiknya.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap unsur dengan ciri khasnya.",
        pairs: [
          { left: "Titik", right: "Tidak punya panjang maupun lebar" },
          { left: "Sinar garis", right: "Punya satu pangkal, memanjang tak hingga ke satu arah" },
          { left: "Ruas garis", right: "Punya dua ujung dan panjang tertentu" },
          { left: "Bidang", right: "Permukaan datar yang meluas ke segala arah" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap unsur menurut dimensinya.",
        buckets: ["Berdimensi 0", "Berdimensi 1", "Berdimensi 2"],
        items: [
          { text: "Titik", bucket: "Berdimensi 0" },
          { text: "Garis", bucket: "Berdimensi 1" },
          { text: "Ruas garis", bucket: "Berdimensi 1" },
          { text: "Bidang", bucket: "Berdimensi 2" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Surveyor memasang patok lahan",
        html: "Seorang surveyor cukup menancapkan dua patok untuk menentukan satu batas lurus, karena dua titik selalu menentukan tepat satu garis. Untuk menentukan permukaan tanah yang rata, ia butuh tiga patok yang tidak segaris, sebab tiga titik itulah yang menentukan satu bidang. Memahami unsur dasar membuat pekerjaan ukur jadi pasti, bukan tebakan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah mengamati, baru kita simpulkan: <strong>titik</strong> hanya menunjukkan posisi tanpa ukuran, <strong>garis</strong> memanjang lurus tak hingga ke dua arah, dan <strong>bidang</strong> adalah permukaan datar yang meluas. Dua titik berbeda menentukan tepat satu garis, dan tiga titik yang tidak segaris menentukan tepat satu bidang.",
      },
      {
        type: "takeaways",
        items: [
          "Titik, garis, dan bidang adalah unsur dasar yang menyusun semua bangun.",
          "Titik tak berukuran, garis berdimensi satu, bidang berdimensi dua.",
          "Dua titik menentukan tepat satu garis; tiga titik tak segaris menentukan tepat satu bidang.",
          "Sinar punya satu pangkal, ruas garis punya dua ujung, garis tak berujung.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Unsur geometri yang hanya menunjukkan posisi dan tidak punya ukuran adalah?",
            options: ["Garis", "Titik", "Bidang", "Sinar"],
            answer: 1,
            explain: "Titik hanya menyatakan letak, tanpa panjang, lebar, atau tinggi.",
          },
          {
            q: "Berapa banyak garis lurus yang dapat dibuat melalui dua titik berbeda?",
            options: ["Tak hingga", "Tepat satu", "Tepat dua", "Tidak ada"],
            answer: 1,
            explain: "Dua titik berbeda selalu menentukan tepat satu garis.",
          },
          {
            q: "Bagian garis yang memiliki satu pangkal dan memanjang tak hingga ke satu arah disebut?",
            options: ["Ruas garis", "Sinar garis", "Bidang", "Titik"],
            answer: 1,
            explain: "Sinar garis berpangkal di satu titik dan tak berujung di arah lain.",
          },
          {
            q: "Agar satu bidang datar tertentukan dengan pasti, paling sedikit diperlukan?",
            options: ["Satu titik", "Dua titik", "Tiga titik yang tidak segaris", "Empat titik"],
            answer: 2,
            explain: "Tiga titik yang tidak segaris menentukan tepat satu bidang.",
          },
          {
            q: "Dari 4 titik yang tidak ada tiga segaris, banyak ruas garis yang bisa dibuat adalah?",
            options: ["4", "6", "8", "12"],
            answer: 1,
            explain: "(4 x 3) / 2 = 6 ruas garis.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "mengukur-sudut",
    levelId: "garis-sudut",
    order: 3,
    title: "Mengukur Sudut dengan Busur Derajat",
    summary:
      "Sebelum menghafal rumus, kita pegang busur derajat dan ukur sudut nyata dulu, sampai aturan membaca dan menjumlahkannya muncul sendiri.",
    durationMin: 12,
    tags: ["geometri", "sudut", "busur derajat", "pengukuran"],
    blocks: [
      {
        type: "paragraph",
        html: "Atap rumah dimiringkan pada sudut tertentu agar air hujan mengalir, kursi malas direbahkan supaya nyaman, dan jam dinding membentuk sudut yang berubah tiap menit. Untuk tahu besarnya, kita pakai <strong>busur derajat</strong>. Sebelum menghafal cara membacanya, ayo ukur dulu beberapa sudut dan amati apa yang tetap.",
      },
      {
        type: "video",
        comp: "SudutVideo",
        title: "Video: Membaca Besar Sudut",
        caption: "Sudut diukur dari 0 sampai 360 derajat mengelilingi satu titik.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Letakkan titik di tengah kertas, lalu tarik beberapa sinar dari titik itu sampai membaginya menjadi beberapa sudut. Ukur tiap sudut dengan busur derajat, lalu jumlahkan semuanya. Apa pun pembagiannya, berapa total yang selalu kamu dapat saat mengelilingi satu titik penuh?",
      },
      {
        type: "widget",
        widget: "SimulatorSudut",
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar membaca angka",
        html: "Membaca busur derajat menjawab 'berapa derajat'. Geometri menjawab 'mengapa sudut di sekitar satu titik selalu genap 360' dan memakainya untuk memeriksa rancangan tanpa harus mengukur ulang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Tiga sudut bertemu mengelilingi satu titik. Dua di antaranya berukuran 150 dan 130 derajat. Berapa besar sudut ketiga?",
        answer: 80,
        suffix: " derajat",
        solution:
          "Sudut sekeliling satu titik berjumlah 360 derajat, jadi 360 - 150 - 130 = <strong>80 derajat</strong>.",
        hint: "Satu putaran penuh adalah 360 derajat.",
      },
      {
        type: "classifyExercise",
        prompt: "Hasil pengukuran busur derajat berikut, kelompokkan menurut jenis sudutnya.",
        buckets: ["Lancip", "Siku-siku", "Tumpul"],
        items: [
          { text: "25 derajat", bucket: "Lancip" },
          { text: "90 derajat", bucket: "Siku-siku" },
          { text: "135 derajat", bucket: "Tumpul" },
          { text: "60 derajat", bucket: "Lancip" },
          { text: "170 derajat", bucket: "Tumpul" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan langkah memakai busur derajat dengan tujuannya.",
        pairs: [
          { left: "Titik tengah busur di titik sudut", right: "Agar pusat pengukuran tepat di puncak sudut" },
          { left: "Garis nol diimpitkan ke satu kaki sudut", right: "Agar pembacaan dimulai dari 0 derajat" },
          { left: "Baca angka di kaki sudut yang lain", right: "Itulah besar sudut dalam derajat" },
          { left: "Pakai skala yang mulai dari kaki nol", right: "Agar tidak tertukar antara skala dalam dan luar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memasang panel surya",
        html: "Pemasang panel surya memiringkan panel pada sudut tertentu terhadap tanah agar sinar matahari tegak lurus mengenainya. Ia memakai busur derajat untuk memastikan kemiringan tepat, misalnya 30 derajat. Jika ia perlu menambah dudukan penyangga, sudut antara panel dan penyangga harus melengkapi agar totalnya pas. Membaca sudut dengan benar membuat panel menangkap energi paling banyak.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah mengukur, baru kita simpulkan caranya: tempatkan <strong>titik tengah busur</strong> tepat di titik sudut, impitkan <strong>garis nol</strong> ke salah satu kaki, lalu baca angka pada kaki yang lain memakai skala yang dimulai dari nol. Ingat, semua sudut yang mengelilingi satu titik selalu berjumlah <strong>360 derajat</strong>.",
      },
      {
        type: "takeaways",
        items: [
          "Busur derajat mengukur sudut dari 0 sampai 180 pada tiap skalanya.",
          "Titik tengah busur diletakkan di titik sudut dan garis nol diimpitkan ke satu kaki.",
          "Pakai skala yang dimulai dari kaki nol agar tidak salah membaca.",
          "Semua sudut yang mengelilingi satu titik selalu berjumlah 360 derajat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Saat mengukur, titik tengah busur derajat harus diletakkan di?",
            options: ["Ujung salah satu kaki", "Titik sudut (puncak)", "Angka 90", "Tengah-tengah kaki"],
            answer: 1,
            explain: "Pusat busur harus tepat di titik sudut agar pembacaan benar.",
          },
          {
            q: "Hasil pengukuran 135 derajat termasuk jenis sudut?",
            options: ["Lancip", "Siku-siku", "Tumpul", "Lurus"],
            answer: 2,
            explain: "Antara 90 dan 180 derajat, jadi tergolong tumpul.",
          },
          {
            q: "Semua sudut yang mengelilingi satu titik berjumlah?",
            options: ["90 derajat", "180 derajat", "360 derajat", "Bergantung gambar"],
            answer: 2,
            explain: "Satu putaran penuh di sekeliling sebuah titik adalah 360 derajat.",
          },
          {
            q: "Dua sudut mengelilingi setengah putaran (garis lurus) berjumlah?",
            options: ["90", "180", "270", "360"],
            answer: 1,
            explain: "Setengah putaran adalah 180 derajat.",
          },
          {
            q: "Empat sudut mengelilingi satu titik. Tiga di antaranya 100, 80, dan 90. Sudut keempat adalah?",
            options: ["80", "90", "100", "110"],
            answer: 1,
            explain: "360 - 100 - 80 - 90 = 90 derajat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "garis-sejajar-dan-transversal",
    levelId: "garis-sudut",
    order: 4,
    title: "Garis Sejajar dan Transversal",
    summary:
      "Sebelum menghafal nama-nama sudut, kita amati dulu sudut yang terbentuk saat satu garis memotong dua garis sejajar, sampai aturannya muncul sendiri.",
    durationMin: 13,
    tags: ["geometri", "sudut", "garis sejajar", "transversal"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua rel kereta membentang sejajar, lalu sebuah palang perlintasan memotong keduanya secara miring. Di setiap perpotongan muncul sudut-sudut yang ternyata saling berkaitan. Sebelum kita hafalkan namanya, ayo amati dulu pola sudut yang terbentuk ketika sebuah <strong>garis transversal</strong> memotong dua garis sejajar.",
      },
      {
        type: "video",
        comp: "SudutVideo",
        title: "Video: Sudut pada Garis Sejajar",
        caption: "Satu garis pemotong menciptakan sudut yang berpasangan dan setara.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gambar dua garis sejajar, lalu tarik satu garis miring yang memotong keduanya. Ukur kedelapan sudut yang muncul. Kelompokkan mana yang ternyata sama besar dan mana yang berpasangan berjumlah 180. Pola apa yang kamu lihat berulang di kedua perpotongan?",
      },
      {
        type: "widget",
        widget: "SimulatorSudut",
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar menghafal nama",
        html: "Menghafal menjawab 'apa nama pasangan sudutnya'. Geometri menjawab 'mengapa sudut sehadap selalu sama besar saat garis sejajar' dan memakainya untuk menghitung sudut yang tak terjangkau diukur langsung.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua garis sejajar dipotong sebuah transversal. Salah satu sudut adalah 70 derajat. Berapa besar sudut sehadapnya?",
        answer: 70,
        suffix: " derajat",
        solution:
          "Pada garis sejajar, sudut <strong>sehadap sama besar</strong>, jadi sudut sehadapnya juga <strong>70 derajat</strong>.",
        hint: "Sudut sehadap menempati posisi yang sama di kedua perpotongan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua garis sejajar dipotong sebuah transversal. Sepasang sudut dalam sepihak terbentuk, salah satunya 115 derajat. Berapa besar pasangannya?",
        answer: 65,
        suffix: " derajat",
        solution:
          "Sudut dalam sepihak berjumlah 180 derajat, jadi 180 - 115 = <strong>65 derajat</strong>.",
        hint: "Dalam sepihak (sepihak transversal) saling berpelurus, totalnya 180.",
      },
      {
        type: "classifyExercise",
        prompt: "Saat transversal memotong dua garis sejajar, kelompokkan tiap pasangan sudut menurut sifatnya.",
        buckets: ["Sama besar", "Berjumlah 180 derajat"],
        items: [
          { text: "Sudut sehadap", bucket: "Sama besar" },
          { text: "Sudut dalam berseberangan", bucket: "Sama besar" },
          { text: "Sudut luar berseberangan", bucket: "Sama besar" },
          { text: "Sudut dalam sepihak", bucket: "Berjumlah 180 derajat" },
          { text: "Sudut luar sepihak", bucket: "Berjumlah 180 derajat" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan nama hubungan sudut dengan letaknya saat transversal memotong dua garis sejajar.",
        pairs: [
          { left: "Sehadap", right: "Posisi sama di kedua perpotongan, sama besar" },
          { left: "Dalam berseberangan", right: "Di antara dua garis, berseberangan transversal, sama besar" },
          { left: "Dalam sepihak", right: "Di antara dua garis, sepihak transversal, berjumlah 180" },
          { left: "Bertolak belakang", right: "Saling membelakangi di satu perpotongan, sama besar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Perancang tangga dan pegangannya",
        html: "Seorang perancang menggambar dua anak tangga sebagai garis sejajar, lalu pegangan tangga menjadi transversal yang memotong keduanya. Ia perlu sudut pegangan di lantai atas, tetapi hanya bisa mengukur sudut di lantai bawah, yaitu 35 derajat. Karena sudut sehadap pada garis sejajar selalu sama, ia langsung tahu sudut di atas juga 35 derajat tanpa naik untuk mengukur. Inilah kekuatan menalar hubungan sudut.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah mengamati, baru kita simpulkan: jika sebuah transversal memotong dua garis sejajar, maka sudut <strong>sehadap</strong>, sudut <strong>dalam berseberangan</strong>, dan sudut <strong>luar berseberangan</strong> sama besar, sedangkan sudut <strong>dalam sepihak</strong> dan <strong>luar sepihak</strong> berjumlah 180 derajat. Sudut <strong>bertolak belakang</strong> di satu perpotongan juga selalu sama besar.",
      },
      {
        type: "takeaways",
        items: [
          "Transversal adalah garis yang memotong dua garis lain.",
          "Pada dua garis sejajar, sudut sehadap dan sudut berseberangan sama besar.",
          "Sudut dalam sepihak dan luar sepihak berjumlah 180 derajat.",
          "Hubungan sudut ini memungkinkan kita menghitung sudut tanpa mengukur langsung.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Garis yang memotong dua garis lain disebut?",
            options: ["Sejajar", "Transversal", "Tegak lurus", "Sinar"],
            answer: 1,
            explain: "Garis pemotong dua garis lain disebut transversal.",
          },
          {
            q: "Pada dua garis sejajar yang dipotong transversal, sudut sehadap bersifat?",
            options: ["Berjumlah 90", "Berjumlah 180", "Sama besar", "Selalu siku-siku"],
            answer: 2,
            explain: "Sudut sehadap pada garis sejajar selalu sama besar.",
          },
          {
            q: "Sepasang sudut dalam sepihak pada garis sejajar selalu?",
            options: ["Sama besar", "Berjumlah 90", "Berjumlah 180", "Berjumlah 360"],
            answer: 2,
            explain: "Sudut dalam sepihak saling berpelurus, berjumlah 180 derajat.",
          },
          {
            q: "Salah satu sudut dalam berseberangan adalah 105 derajat. Pasangannya berukuran?",
            options: ["75", "105", "85", "180"],
            answer: 1,
            explain: "Sudut dalam berseberangan sama besar, jadi tetap 105 derajat.",
          },
          {
            q: "Salah satu sudut dalam sepihak adalah 120 derajat. Pasangannya berukuran?",
            options: ["120", "90", "60", "240"],
            answer: 2,
            explain: "180 - 120 = 60 derajat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sudut-putaran-jam-arah",
    levelId: "garis-sudut",
    order: 5,
    title: "Sudut Putaran: Jam dan Arah Mata Angin",
    summary:
      "Sebelum menghafal rumus, kita amati dulu sudut yang terbentuk jarum jam dan arah mata angin, sampai pola 'satu putaran 360 derajat' muncul sendiri.",
    durationMin: 12,
    tags: ["geometri", "sudut", "jam", "arah mata angin"],
    blocks: [
      {
        type: "paragraph",
        html: "Jarum jam berputar pelan, kompas menunjuk arah, dan kincir angin berputar penuh lalu kembali ke posisi semula. Semua itu adalah <strong>sudut putaran</strong>, yaitu sudut yang diukur dari satu arah acuan. Sebelum kita pakai rumus, ayo amati dulu berapa derajat tiap langkah putaran pada benda sehari-hari.",
      },
      {
        type: "video",
        comp: "SudutVideo",
        title: "Video: Sudut sebagai Putaran",
        caption: "Satu putaran penuh adalah 360 derajat, setengah putaran 180 derajat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lihat jam dinding. Tepat pukul 3, kedua jarum membentuk sudut siku-siku. Tepat pukul 6, keduanya lurus berlawanan. Coba tebak: tiap berpindah satu angka jam, berapa derajat jarum bergeser? Bagi 360 dengan 12 angka, lalu cocokkan dengan amatanmu.",
      },
      {
        type: "widget",
        widget: "SimulatorSudut",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Sudut antara Kedua Jarum Jam Tepat Pukul (jam:00)",
        unit: "sudut (derajat)",
        source: "ilustrasi edukatif",
        note: "Tiap angka jam berjarak 30 derajat (360 dibagi 12), jadi sudutnya bertambah 30 derajat tiap jam.",
        data: [
          { label: "Pukul 1", value: 30, color: "#2dd4bf" },
          { label: "Pukul 2", value: 60, color: "#22d3ee" },
          { label: "Pukul 3", value: 90, color: "#38bdf8" },
          { label: "Pukul 4", value: 120, color: "#818cf8" },
          { label: "Pukul 6", value: 180, color: "#a78bfa" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar melihat jam",
        html: "Melihat jam menjawab 'pukul berapa'. Geometri menjawab 'berapa derajat jarum sudah berputar' dan memakainya untuk menghitung arah, posisi kincir, atau sudut antena tanpa menebak.",
      },
      {
        type: "calcExercise",
        prompt:
          "Tepat pukul 5:00, berapa besar sudut yang dibentuk jarum pendek dan jarum panjang (diukur yang lebih kecil)?",
        answer: 150,
        suffix: " derajat",
        solution:
          "Tiap angka jam berjarak 360 / 12 = 30 derajat. Pukul 5, jarum pendek 5 angka dari jarum panjang, jadi 5 x 30 = <strong>150 derajat</strong>.",
        hint: "Hitung berapa angka jam jaraknya, lalu kalikan 30 derajat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Arah mata angin dibagi rata jadi 8 penjuru (Utara, Timur Laut, Timur, dan seterusnya). Berapa derajat sudut antara dua arah yang bersebelahan?",
        answer: 45,
        suffix: " derajat",
        solution:
          "Satu putaran penuh 360 derajat dibagi 8 arah = 360 / 8 = <strong>45 derajat</strong> tiap arah bersebelahan.",
        hint: "Bagi 360 dengan banyaknya arah.",
      },
      {
        type: "classifyExercise",
        prompt: "Tepat pada jam berikut, kelompokkan sudut antara kedua jarum menurut jenisnya.",
        buckets: ["Lancip", "Siku-siku", "Tumpul", "Lurus"],
        items: [
          { text: "Pukul 1:00 (30 derajat)", bucket: "Lancip" },
          { text: "Pukul 2:00 (60 derajat)", bucket: "Lancip" },
          { text: "Pukul 3:00 (90 derajat)", bucket: "Siku-siku" },
          { text: "Pukul 4:00 (120 derajat)", bucket: "Tumpul" },
          { text: "Pukul 6:00 (180 derajat)", bucket: "Lurus" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pelaut membaca arah angin",
        html: "Seorang nahkoda kecil memakai kompas yang terbagi 360 derajat. Ia mencatat angin datang dari arah 90 derajat (Timur) lalu berputar ke 135 derajat (Tenggara). Karena tahu tiap arah utama berjarak 90 derajat dan tiap arah antara 45 derajat, ia langsung paham angin bergeser 45 derajat searah jarum jam. Membaca sudut putaran membuat ia menyetel layar dengan tepat tanpa menebak.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah mengamati, baru kita simpulkan: satu putaran penuh adalah <strong>360 derajat</strong>. Pada jam, tiap angka berjarak 360 / 12 = <strong>30 derajat</strong>. Pada arah mata angin 8 penjuru, tiap arah bersebelahan berjarak 360 / 8 = <strong>45 derajat</strong>. Sudut putaran selalu dihitung dari satu arah acuan.",
      },
      {
        type: "takeaways",
        items: [
          "Sudut putaran diukur dari satu arah acuan; satu putaran penuh 360 derajat.",
          "Pada jam, tiap angka berjarak 30 derajat (360 dibagi 12).",
          "Arah mata angin 8 penjuru berjarak 45 derajat tiap arah bersebelahan.",
          "Empat arah utama (U, T, S, B) berjarak 90 derajat satu sama lain.",
          "Memahami sudut putaran membantu membaca jam, kompas, dan arah secara pasti.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada jam dinding, sudut antara dua angka yang bersebelahan adalah?",
            options: ["15 derajat", "30 derajat", "45 derajat", "60 derajat"],
            answer: 1,
            explain: "360 dibagi 12 angka = 30 derajat tiap angka.",
          },
          {
            q: "Tepat pukul 3:00, sudut antara kedua jarum jam adalah?",
            options: ["60 derajat", "90 derajat", "120 derajat", "180 derajat"],
            answer: 1,
            explain: "Jarak 3 angka x 30 derajat = 90 derajat, sudut siku-siku.",
          },
          {
            q: "Pada arah mata angin 8 penjuru, sudut antara dua arah bersebelahan adalah?",
            options: ["30 derajat", "45 derajat", "60 derajat", "90 derajat"],
            answer: 1,
            explain: "360 dibagi 8 arah = 45 derajat.",
          },
          {
            q: "Sudut antara arah Utara dan arah Timur pada kompas adalah?",
            options: ["45 derajat", "90 derajat", "135 derajat", "180 derajat"],
            answer: 1,
            explain: "Utara dan Timur adalah arah utama yang berjarak 90 derajat.",
          },
          {
            q: "Tepat pukul 6:00, kedua jarum jam membentuk sudut?",
            options: ["Lancip", "Siku-siku", "Tumpul", "Lurus (180 derajat)"],
            answer: 3,
            explain: "6 angka x 30 derajat = 180 derajat, yaitu sudut lurus.",
          },
        ],
      },
    ],
  },
];
