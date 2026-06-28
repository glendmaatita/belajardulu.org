import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "translasi-pergeseran",
    levelId: "transformasi",
    order: 1,
    title: "Translasi: Menggeser Tanpa Mengubah Bentuk",
    summary:
      "Sebelum menghafal rumus geser, kita pindahkan dulu titik di bidang koordinat sampai polanya muncul sendiri.",
    durationMin: 12,
    tags: ["geometri", "transformasi", "translasi", "koordinat"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan menggeser bidak catur, menyeret ikon di layar ponsel, atau memindahkan meja lurus ke samping. Bentuk dan ukurannya tidak berubah, hanya posisinya yang pindah. Gerakan inilah yang dalam geometri disebut <strong>translasi</strong>. Sebelum kita tulis aturannya, ayo amati dulu apa yang terjadi pada koordinat.",
      },
      {
        type: "video",
        comp: "PolaAlam",
        title: "Video: Pola Gerak dan Pergeseran",
        caption: "Banyak pola di alam terbentuk dari satu bentuk yang digeser berulang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil titik (1, 2) pada kertas berpetak. Geser 4 langkah ke kanan dan 3 langkah ke atas, lalu catat koordinat barunya. Ulangi dari titik lain dengan pergeseran yang sama. Adakah pola antara koordinat awal dan koordinat akhir?",
      },
      {
        type: "widget",
        widget: "PenjelajahPola",
      },
      {
        type: "chart",
        variant: "line",
        title: "Koordinat-x Sebuah Titik yang Digeser Berulang ke Kanan",
        unit: "nilai absis (x)",
        source: "ilustrasi edukatif",
        note: "Satu titik di x = 1 digeser +2 setiap langkah. Absisnya naik tetap: 1, 3, 5, 7. Pergeseran selalu menambah angka yang sama.",
        data: [
          { label: "Awal", value: 1, color: "#818cf8" },
          { label: "Geser 1x", value: 3, color: "#818cf8" },
          { label: "Geser 2x", value: 5, color: "#a78bfa" },
          { label: "Geser 3x", value: 7, color: "#a78bfa" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar menghitung",
        html: "Berhitung menjawab 'di mana titik baru'. Geometri menjawab 'mengapa bentuk tetap sama saat digeser' dan memakainya untuk memahami pola, ubin, dan animasi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Titik A(3, 5) ditranslasi sejauh (4, -2). Berapa absis (nilai x) bayangannya?",
        answer: 7,
        solution:
          "Translasi menambahkan komponen mendatar ke absis: 3 + 4 = <strong>7</strong>. (Ordinatnya menjadi 5 + (-2) = 3.)",
        hint: "Tambahkan komponen pertama vektor ke nilai x.",
      },
      {
        type: "matchExercise",
        prompt:
          "Setiap titik ditranslasi dengan vektor (2, 3). Pasangkan titik asal dengan bayangannya.",
        pairs: [
          { left: "(0, 0)", right: "(2, 3)" },
          { left: "(1, 1)", right: "(3, 4)" },
          { left: "(-2, 0)", right: "(0, 3)" },
          { left: "(4, -1)", right: "(6, 2)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menyusun motif batik",
        html: "Seorang perajin membuat motif dengan menggambar satu bentuk, lalu menyalinnya dengan pergeseran tetap ke kanan dan ke atas. Karena translasi tidak mengubah bentuk maupun ukuran, semua salinan tampak seragam dan rapi. Cukup tahu vektor pergeserannya, ia bisa memprediksi posisi setiap motif tanpa menggambar ulang dari nol.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati, baru kita simpulkan: translasi oleh vektor (a, b) memetakan setiap titik <strong>(x, y) menjadi (x + a, y + b)</strong>. Bentuk dan ukuran tidak berubah, hanya posisi yang bergeser.",
      },
      {
        type: "takeaways",
        items: [
          "Translasi memindahkan setiap titik dengan arah dan jarak yang sama.",
          "Vektor (a, b) mengubah (x, y) menjadi (x + a, y + b).",
          "Bentuk, ukuran, dan arah benda tetap; hanya posisinya berpindah.",
          "Pergeseran tetap inilah yang membuat pola berulang seperti ubin dan batik bisa diprediksi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Translasi mengubah hal apa dari sebuah bangun?",
            options: ["Ukurannya", "Bentuknya", "Posisinya", "Sudut-sudutnya"],
            answer: 2,
            explain: "Translasi hanya memindahkan posisi; bentuk dan ukuran tetap.",
          },
          {
            q: "Titik (2, 3) ditranslasi (5, 1). Bayangannya adalah?",
            options: ["(7, 4)", "(3, 2)", "(10, 3)", "(7, 2)"],
            answer: 0,
            explain: "(2 + 5, 3 + 1) = (7, 4).",
          },
          {
            q: "Titik (-1, 4) ditranslasi (3, -6). Bayangannya adalah?",
            options: ["(2, -2)", "(-4, 10)", "(2, 10)", "(-4, -2)"],
            answer: 0,
            explain: "(-1 + 3, 4 + (-6)) = (2, -2).",
          },
          {
            q: "Bayangan suatu titik adalah (8, 5) setelah digeser (3, 2). Titik asalnya?",
            options: ["(5, 3)", "(11, 7)", "(5, 7)", "(11, 3)"],
            answer: 0,
            explain: "Kurangi vektornya: (8 - 3, 5 - 2) = (5, 3).",
          },
          {
            q: "Vektor translasi (0, 0) menghasilkan?",
            options: [
              "Bayangan tepat di tempat semula",
              "Titik di pusat koordinat",
              "Bayangan dua kali lebih jauh",
              "Bayangan tercermin",
            ],
            answer: 0,
            explain: "Tidak ada pergeseran, jadi bayangan berimpit dengan titik asal.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "refleksi-pencerminan",
    levelId: "transformasi",
    order: 2,
    title: "Refleksi: Bayangan di Balik Cermin",
    summary:
      "Sebelum menghafal aturan tanda, kita cerminkan dulu titik terhadap sumbu sampai polanya jelas.",
    durationMin: 12,
    tags: ["geometri", "transformasi", "refleksi", "koordinat"],
    blocks: [
      {
        type: "paragraph",
        html: "Lihat wajahmu di cermin, pantulan gunung di danau, atau tulisan ambulans yang terbalik. Semuanya adalah <strong>refleksi</strong>, yaitu pencerminan terhadap sebuah garis. Jarak ke cermin sama, tetapi arahnya berbalik. Sebelum kita tulis aturannya, ayo amati apa yang terjadi pada koordinat.",
      },
      {
        type: "video",
        comp: "BentukGeometri",
        title: "Video: Bentuk dan Cerminannya",
        caption: "Bangun dan bayangan cerminnya sama persis, hanya berlawanan arah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gambar titik (3, 2) pada kertas berpetak. Anggap sumbu-x sebagai cermin, lalu tandai bayangannya di seberang. Catat koordinatnya. Ulangi dengan sumbu-y sebagai cermin. Apa yang berubah dari tanda x dan y?",
      },
      {
        type: "widget",
        widget: "PenjelajahBentuk",
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar menghitung",
        html: "Berhitung menjawab 'berapa koordinat bayangan'. Geometri menjawab 'mengapa cermin membalik satu arah saja' dan memakainya untuk memahami simetri, desain, dan optik.",
      },
      {
        type: "calcExercise",
        prompt:
          "Titik P(4, 5) dicerminkan terhadap sumbu-x. Berapa ordinat (nilai y) bayangannya?",
        answer: -5,
        solution:
          "Pencerminan terhadap sumbu-x menjaga x dan membalik tanda y: (4, 5) menjadi (4, -5). Jadi ordinatnya <strong>-5</strong>.",
        hint: "Cermin sumbu-x membalik tanda y, nilai x tetap.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Setiap pasangan adalah titik dan bayangannya. Kelompokkan menurut garis cerminnya.",
        buckets: ["Sumbu-x", "Sumbu-y", "Garis y = x"],
        items: [
          { text: "(3, 4) menjadi (3, -4)", bucket: "Sumbu-x" },
          { text: "(3, 4) menjadi (-3, 4)", bucket: "Sumbu-y" },
          { text: "(3, 4) menjadi (4, 3)", bucket: "Garis y = x" },
          { text: "(2, 5) menjadi (2, -5)", bucket: "Sumbu-x" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Titik Q(-2, 7) dicerminkan terhadap sumbu-y. Berapa absis (nilai x) bayangannya?",
        answer: 2,
        solution:
          "Pencerminan terhadap sumbu-y membalik tanda x dan menjaga y: (-2, 7) menjadi (2, 7). Jadi absisnya <strong>2</strong>.",
        hint: "Cermin sumbu-y membalik tanda x, nilai y tetap.",
      },
      {
        type: "case",
        title: "Studi Kasus: Merancang logo simetris",
        html: "Seorang desainer hanya menggambar setengah logo, lalu mencerminkannya terhadap sebuah garis tegak untuk mendapat separuh lainnya. Karena refleksi menjaga ukuran dan hanya membalik arah, kedua sisi pasti seimbang sempurna. Ia menghemat separuh pekerjaan dan menjamin logo benar-benar simetris.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah mengamati, baru kita simpulkan aturan pencerminan: terhadap <strong>sumbu-x</strong> (x, y) menjadi (x, -y); terhadap <strong>sumbu-y</strong> (x, y) menjadi (-x, y); terhadap <strong>garis y = x</strong> (x, y) menjadi (y, x); terhadap <strong>garis y = -x</strong> (x, y) menjadi (-y, -x); dan terhadap <strong>titik asal O</strong> (x, y) menjadi (-x, -y).",
      },
      {
        type: "takeaways",
        items: [
          "Refleksi mencerminkan titik terhadap sebuah garis; jarak ke garis tetap, arah berbalik.",
          "Cermin sumbu-x membalik tanda y; cermin sumbu-y membalik tanda x.",
          "Cermin garis y = x menukar posisi x dan y menjadi (y, x).",
          "Bentuk dan ukuran tidak berubah, sehingga refleksi menjaga kekongruenan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Titik (5, 2) dicerminkan terhadap sumbu-x menjadi?",
            options: ["(5, -2)", "(-5, 2)", "(2, 5)", "(-5, -2)"],
            answer: 0,
            explain: "Sumbu-x membalik tanda y: (5, -2).",
          },
          {
            q: "Titik (5, 2) dicerminkan terhadap sumbu-y menjadi?",
            options: ["(5, -2)", "(-5, 2)", "(2, 5)", "(-5, -2)"],
            answer: 1,
            explain: "Sumbu-y membalik tanda x: (-5, 2).",
          },
          {
            q: "Titik (3, 7) dicerminkan terhadap garis y = x menjadi?",
            options: ["(7, 3)", "(-3, 7)", "(3, -7)", "(-7, -3)"],
            answer: 0,
            explain: "Garis y = x menukar x dan y: (7, 3).",
          },
          {
            q: "Titik (4, -1) dicerminkan terhadap titik asal O menjadi?",
            options: ["(-4, 1)", "(4, 1)", "(-4, -1)", "(1, -4)"],
            answer: 0,
            explain: "Terhadap O kedua tanda berbalik: (-4, 1).",
          },
          {
            q: "Apa yang TIDAK berubah saat sebuah bangun dicerminkan?",
            options: [
              "Ukuran dan bentuknya",
              "Arah hadapnya",
              "Tanda salah satu koordinat",
              "Posisi terhadap cermin",
            ],
            answer: 0,
            explain: "Refleksi menjaga ukuran dan bentuk; yang berbalik adalah arah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "rotasi-perputaran",
    levelId: "transformasi",
    order: 3,
    title: "Rotasi: Memutar Mengelilingi Sebuah Titik",
    summary:
      "Sebelum menghafal rumus putar, kita putar dulu titik mengelilingi pusat sampai polanya muncul.",
    durationMin: 12,
    tags: ["geometri", "transformasi", "rotasi", "koordinat"],
    blocks: [
      {
        type: "paragraph",
        html: "Perhatikan jarum jam, roda bianglala, atau baling-baling kipas. Semuanya berputar mengelilingi satu titik tetap sambil tetap utuh. Gerakan inilah yang disebut <strong>rotasi</strong>. Sebelum kita tulis aturannya, ayo putar dulu titik di bidang koordinat dan amati koordinat barunya.",
      },
      {
        type: "video",
        comp: "PolaAlam",
        title: "Video: Pola Berputar di Alam",
        caption: "Kelopak bunga dan pusaran air kerap tersusun dari putaran yang teratur.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gambar titik (3, 0). Pusatkan jarimu di titik asal O, lalu putar titik itu sejauh 90 derajat berlawanan arah jarum jam. Di mana ia mendarat? Coba juga putaran 180 derajat. Perhatikan bagaimana x dan y saling bertukar dan berganti tanda.",
      },
      {
        type: "widget",
        widget: "PenjelajahPola",
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar menghitung",
        html: "Berhitung menjawab 'di mana titik setelah diputar'. Geometri menjawab 'mengapa jarak ke pusat selalu tetap' dan memakainya untuk roda, gir, dan animasi berputar.",
      },
      {
        type: "calcExercise",
        prompt:
          "Titik (2, 0) dirotasi 180 derajat dengan pusat titik asal O. Berapa absis (nilai x) bayangannya?",
        answer: -2,
        solution:
          "Rotasi 180 derajat membalik kedua tanda: (x, y) menjadi (-x, -y). Maka (2, 0) menjadi (-2, 0), sehingga absisnya <strong>-2</strong>.",
        hint: "Putaran setengah lingkaran membalik tanda x dan y.",
      },
      {
        type: "matchExercise",
        prompt:
          "Titik (1, 0) dirotasi dengan pusat O. Pasangkan besar putaran (berlawanan jarum jam) dengan bayangannya.",
        pairs: [
          { left: "90 derajat", right: "(0, 1)" },
          { left: "180 derajat", right: "(-1, 0)" },
          { left: "270 derajat", right: "(0, -1)" },
          { left: "360 derajat", right: "(1, 0)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menata kursi mengelilingi meja bundar",
        html: "Seorang penata acara ingin enam kursi tersebar merata mengelilingi meja bundar. Ia menaruh satu kursi, lalu memutarnya 60 derajat mengelilingi pusat meja berkali-kali. Karena rotasi menjaga jarak ke pusat, semua kursi berakhir pada lingkaran yang sama dan berjarak sama. Cukup tahu pusat dan sudut putar, ia menata sempurna tanpa mengukur ulang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati, baru kita simpulkan aturan rotasi dengan pusat O berlawanan arah jarum jam: <strong>90 derajat</strong> memetakan (x, y) menjadi (-y, x); <strong>180 derajat</strong> menjadi (-x, -y); dan <strong>270 derajat</strong> menjadi (y, -x). Jarak setiap titik ke pusat selalu tetap.",
      },
      {
        type: "takeaways",
        items: [
          "Rotasi memutar setiap titik mengelilingi sebuah pusat dengan sudut tertentu.",
          "Rotasi 90 derajat (pusat O) mengubah (x, y) menjadi (-y, x).",
          "Rotasi 180 derajat mengubah (x, y) menjadi (-x, -y), sama untuk searah maupun berlawanan jarum jam.",
          "Jarak setiap titik ke pusat tidak berubah, jadi bentuk dan ukuran tetap.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rotasi 90 derajat berlawanan jarum jam (pusat O) mengubah (x, y) menjadi?",
            options: ["(-y, x)", "(y, -x)", "(-x, -y)", "(y, x)"],
            answer: 0,
            explain: "Aturan rotasi 90 derajat berlawanan jarum jam: (x, y) menjadi (-y, x).",
          },
          {
            q: "Titik (3, 0) dirotasi 90 derajat berlawanan jarum jam (pusat O) menjadi?",
            options: ["(0, 3)", "(0, -3)", "(-3, 0)", "(3, 0)"],
            answer: 0,
            explain: "(-y, x) = (-0, 3) = (0, 3).",
          },
          {
            q: "Titik (4, 2) dirotasi 180 derajat (pusat O) menjadi?",
            options: ["(-4, -2)", "(-2, 4)", "(2, -4)", "(4, -2)"],
            answer: 0,
            explain: "Rotasi 180 derajat: (-x, -y) = (-4, -2).",
          },
          {
            q: "Apa yang selalu tetap pada setiap rotasi?",
            options: [
              "Jarak titik ke pusat putar",
              "Posisi titik",
              "Arah hadap bangun",
              "Tanda koordinat",
            ],
            answer: 0,
            explain: "Rotasi menjaga jarak setiap titik ke pusatnya, sehingga bentuk tetap.",
          },
          {
            q: "Rotasi 360 derajat dengan pusat O menghasilkan?",
            options: [
              "Bayangan tepat di tempat semula",
              "Bayangan tercermin",
              "Bayangan di pusat O",
              "Bayangan dua kali lebih jauh",
            ],
            answer: 0,
            explain: "Satu putaran penuh mengembalikan titik ke posisi awal.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "dilatasi-dan-simetri",
    levelId: "transformasi",
    order: 4,
    title: "Dilatasi dan Simetri: Memperbesar dan Menyeimbangkan",
    summary:
      "Sebelum menghafal faktor skala, kita perbesar dan lipat dulu bangun sampai aturannya muncul sendiri.",
    durationMin: 13,
    tags: ["geometri", "transformasi", "dilatasi", "simetri"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat memperbesar foto di ponsel, bentuknya tetap tetapi ukurannya berubah. Itulah <strong>dilatasi</strong>. Saat kupu-kupu melipat sayapnya dan kedua sisi berhimpit, itulah <strong>simetri</strong>. Sebelum kita tulis aturannya, ayo perbesar dan lipat dulu beberapa bangun, lalu amati apa yang berubah dan apa yang tetap.",
      },
      {
        type: "video",
        comp: "MenemukanLuas",
        title: "Video: Saat Ukuran Berubah",
        caption: "Memperbesar bangun mengubah panjang dan luas, tetapi tidak mengubah bentuk.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gambar titik (2, 3). Kalikan kedua koordinatnya dengan 2 dari pusat titik asal O, lalu tandai hasilnya. Coba juga faktor 1/2. Bagaimana jarak titik ke pusat berubah? Lalu gambar persegi dan cari berapa garis lipat yang membuat kedua bagiannya berhimpit.",
      },
      {
        type: "widget",
        widget: "PenemuLuas",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Panjang Ruas Garis 4 Satuan Setelah Dilatasi (pusat O)",
        unit: "panjang (satuan)",
        source: "ilustrasi edukatif",
        note: "Faktor skala mengalikan panjang: dengan k = 1, 2, dan 3, panjang menjadi 4, 8, dan 12. Bentuk tetap, ukuran berubah sebanding.",
        data: [
          { label: "k = 1", value: 4, color: "#818cf8" },
          { label: "k = 2", value: 8, color: "#a78bfa" },
          { label: "k = 3", value: 12, color: "#c4b5fd" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar menghitung",
        html: "Berhitung menjawab 'berapa ukuran baru'. Geometri menjawab 'mengapa bentuk tetap meski ukuran berubah' dan 'mengapa benda simetris terasa seimbang', lalu memakainya untuk peta, desain, dan arsitektur.",
      },
      {
        type: "calcExercise",
        prompt:
          "Titik (3, -2) didilatasi dengan pusat O dan faktor skala 3. Berapa absis (nilai x) bayangannya?",
        answer: 9,
        solution:
          "Dilatasi pusat O mengalikan tiap koordinat dengan faktor skala: (x, y) menjadi (3x, 3y). Maka absisnya 3 x 3 = <strong>9</strong>.",
        hint: "Kalikan nilai x dengan faktor skala k.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan faktor dilatasi menurut efeknya pada ukuran bayangan (lihat besarnya, abaikan tanda).",
        buckets: ["Membesar", "Tetap", "Mengecil"],
        items: [
          { text: "k = 3", bucket: "Membesar" },
          { text: "k = 1", bucket: "Tetap" },
          { text: "k = 1/2", bucket: "Mengecil" },
          { text: "k = 2", bucket: "Membesar" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap bangun dengan jumlah sumbu simetri lipatnya.",
        pairs: [
          { left: "Persegi", right: "4 sumbu" },
          { left: "Persegi panjang", right: "2 sumbu" },
          { left: "Segitiga sama sisi", right: "3 sumbu" },
          { left: "Lingkaran", right: "Tak hingga" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memperbesar denah ruangan",
        html: "Seorang arsitek punya denah kecil berskala dan ingin mencetaknya dua kali lebih besar. Ia menerapkan dilatasi dengan faktor 2, sehingga setiap panjang menjadi dua kali, tetapi semua sudut dan perbandingan tetap sama. Denah besar dan kecil tetap sebangun, sehingga proporsi ruangan tidak melenceng sedikit pun.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah mengamati, baru kita simpulkan: <strong>dilatasi</strong> pusat O faktor k memetakan (x, y) menjadi (kx, ky); jika |k| > 1 bayangan membesar dan jika |k| < 1 mengecil, tetapi bentuk selalu tetap (sebangun). <strong>Sumbu simetri</strong> adalah garis lipat yang membuat kedua bagian bangun berhimpit sempurna.",
      },
      {
        type: "takeaways",
        items: [
          "Dilatasi pusat O faktor k mengubah (x, y) menjadi (kx, ky).",
          "Faktor |k| > 1 memperbesar dan |k| < 1 memperkecil, tetapi bentuk tetap sebangun.",
          "Sumbu simetri adalah garis lipat yang membagi bangun menjadi dua bagian yang berhimpit.",
          "Persegi punya 4 sumbu simetri, persegi panjang 2, segitiga sama sisi 3, dan lingkaran tak hingga.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Titik (2, 5) didilatasi pusat O faktor 3 menjadi?",
            options: ["(6, 15)", "(5, 8)", "(2/3, 5/3)", "(6, 5)"],
            answer: 0,
            explain: "(3 x 2, 3 x 5) = (6, 15).",
          },
          {
            q: "Faktor dilatasi 1/2 membuat bayangan?",
            options: [
              "Mengecil setengah ukuran",
              "Membesar dua kali",
              "Tetap sama",
              "Berputar 90 derajat",
            ],
            answer: 0,
            explain: "Karena |1/2| < 1, ukuran menjadi setengahnya.",
          },
          {
            q: "Apa yang TIDAK berubah pada dilatasi?",
            options: ["Bentuk (sebangun)", "Panjang sisi", "Luas", "Jarak ke pusat"],
            answer: 0,
            explain: "Dilatasi menjaga bentuk; panjang, luas, dan jarak ke pusat berubah.",
          },
          {
            q: "Berapa jumlah sumbu simetri sebuah persegi?",
            options: ["4", "2", "1", "Tak hingga"],
            answer: 0,
            explain: "Persegi memiliki 4 sumbu simetri lipat.",
          },
          {
            q: "Bangun yang memiliki tak hingga sumbu simetri adalah?",
            options: ["Lingkaran", "Persegi panjang", "Segitiga sama sisi", "Jajar genjang"],
            answer: 0,
            explain: "Setiap garis melalui pusat lingkaran adalah sumbu simetri, jadi tak hingga.",
          },
        ],
      },
    ],
  },
];
