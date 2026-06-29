import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "gaya-berat",
    levelId: "jenis-gaya",
    order: 1,
    title: "Gaya Berat",
    summary:
      "Mengapa benda yang sama terasa lebih ringan di Bulan? Kita rasakan dulu bedanya massa dan berat sebelum menuliskan rumusnya.",
    durationMin: 14,
    tags: ["fisika", "dinamika", "gaya-berat", "gravitasi", "massa"],
    blocks: [
      {
        type: "paragraph",
        html: "Seorang astronaut bermassa sama di Bumi dan di Bulan, tetapi di Bulan ia bisa melompat tinggi seperti tanpa beban. Massanya tidak berubah, lalu apa yang berubah? Yang berubah adalah <strong>seberapa kuat gravitasi menariknya</strong>. Tarikan gravitasi inilah yang kita sebut gaya berat. Ayo rasakan dulu bedanya massa dan berat sebelum menyentuh rumus.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Massa Tetap, Berat Berubah",
        caption: "Massa adalah banyaknya materi; berat adalah tarikan gravitasi yang bisa berbeda di tiap tempat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan menimbang sekarung beras 10 kg. Di Bumi timbangan menunjuk berat tertentu; di Bulan, karung yang sama akan terasa jauh lebih ringan untuk diangkat, padahal jumlah berasnya tidak berkurang sebutir pun. <strong>Massa adalah kandungan benda</strong> dan tidak berubah ke mana pun kamu bawa; <strong>berat adalah tarikan gravitasi</strong> yang bergantung pada tempatnya. Rasakan dulu beda ini.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Massa bukan berat",
        html: "<strong>Massa (kg)</strong> mengukur banyaknya materi dan sama di mana saja. <strong>Berat (N)</strong> adalah gaya tarik gravitasi pada benda, arahnya selalu ke bawah menuju pusat planet. Karena berat adalah gaya, satuannya newton, dan besarnya bergantung pada percepatan gravitasi tempat itu.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Berat Benda Bermassa 10 kg di Berbagai Benda Langit",
        unit: "berat (N)",
        source: "perhitungan berat = massa × percepatan gravitasi setempat",
        note: "Massa dijaga tetap 10 kg, tetapi gravitasi berbeda di tiap tempat. Makin besar gravitasi, makin besar berat. Pola ini muncul sebelum rumus diberikan.",
        data: [
          { label: "Bulan (g=1,6)", value: 16, color: "#a78bfa" },
          { label: "Mars (g=3,7)", value: 37, color: "#a78bfa" },
          { label: "Bumi (g=9,8)", value: 98, color: "#a78bfa" },
          { label: "Jupiter (g=24,8)", value: 248, color: "#a78bfa" },
        ],
      },
      {
        type: "paragraph",
        html: "Amati grafik. Massa benda dijaga tetap 10 kg, tetapi beratnya berbeda jauh: hanya 16 N di Bulan, tetapi 248 N di Jupiter. Beratnya selalu sebanding dengan gravitasi setempat. Perbandingan berat dibagi massa di tiap tempat persis sama dengan nilai g-nya. Dari pola inilah rumus berat akan lahir.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah karung beras bermassa 8 kg berada di Bumi. Dengan g = 10 m/s², berapa berat karung itu?",
        answer: 80,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Berat = massa × gravitasi = 8 kg × 10 m/s² = <strong>80 N</strong>. Inilah besar tarikan gravitasi Bumi pada karung tersebut.",
        hint: "Kalikan massa dengan percepatan gravitasi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berat sebuah benda di Bumi adalah 60 N. Dengan g = 10 m/s², berapa massanya?",
        answer: 6,
        tolerance: 0.1,
        suffix: " kg",
        solution:
          "Massa = berat ÷ gravitasi = 60 N ÷ 10 m/s² = <strong>6 kg</strong>. Massa ini akan tetap 6 kg meski benda dibawa ke Bulan, hanya beratnya yang berubah.",
        hint: "Bagi berat dengan percepatan gravitasi.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan: apakah ia menggambarkan massa atau berat?",
        buckets: ["Massa", "Berat"],
        items: [
          { text: "Tetap sama di Bumi maupun di Bulan", bucket: "Massa" },
          { text: "Diukur dalam newton (N)", bucket: "Berat" },
          { text: "Tarikan gravitasi pada benda", bucket: "Berat" },
          { text: "Ukuran banyaknya materi dalam benda", bucket: "Massa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Timbangan Pasar dan Timbangan Digital",
        html: "Timbangan pegas di pasar sebenarnya mengukur <strong>gaya berat</strong>, yaitu seberapa kuat gravitasi menarik barang, lalu mengubahnya ke pembacaan kilogram dengan asumsi gravitasi Bumi. Bila timbangan itu dibawa ke Bulan, pegasnya akan tertarik jauh lebih lemah dan menunjukkan angka lebih kecil, padahal jumlah barangnya sama. Itulah sebabnya pengukuran massa yang sejati menggunakan timbangan neraca dua lengan, yang membandingkan massa dengan massa, bukan bergantung pada gravitasi setempat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan bedanya massa dan berat, barulah rumus muncul. Berat adalah gaya, dan menurut Hukum II gaya = massa × percepatan, sehingga <strong>W = m · g</strong>, dengan g percepatan gravitasi setempat (sekitar 9,8 m/s² di Bumi, sering dibulatkan 10 m/s²). Arah berat selalu ke bawah. Massa tetap, tetapi berat ikut berubah bila g berubah.",
      },
      {
        type: "takeaways",
        items: [
          "Massa (kg) mengukur banyaknya materi dan sama di mana saja.",
          "Berat (N) adalah gaya tarik gravitasi, arahnya selalu ke bawah.",
          "Berat dirangkum oleh W = m · g, sebanding dengan gravitasi setempat.",
          "Benda yang sama lebih ringan di Bulan karena g Bulan lebih kecil dari Bumi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa perbedaan utama massa dan berat?",
            options: [
              "Keduanya sama saja",
              "Massa tetap di mana saja; berat bergantung gravitasi setempat",
              "Berat tetap; massa berubah",
              "Massa diukur dalam newton",
            ],
            answer: 1,
            explain: "Massa adalah banyaknya materi (tetap); berat adalah gaya gravitasi (bergantung g).",
          },
          {
            q: "Berat benda 5 kg di Bumi dengan g = 10 m/s² adalah?",
            options: ["0,5 N", "5 N", "50 N", "15 N"],
            answer: 2,
            explain: "W = m · g = 5 × 10 = 50 N.",
          },
          {
            q: "Satuan SI untuk berat adalah?",
            options: ["kilogram", "newton", "joule", "meter"],
            answer: 1,
            explain: "Berat adalah gaya, jadi satuannya newton (N).",
          },
          {
            q: "Mengapa benda lebih ringan di Bulan?",
            options: [
              "Massanya berkurang",
              "Gravitasi Bulan lebih kecil dari Bumi",
              "Tidak ada udara di Bulan",
              "Benda menyusut",
            ],
            answer: 1,
            explain: "g Bulan sekitar 1,6 m/s², jauh lebih kecil dari g Bumi, jadi beratnya kecil.",
          },
          {
            q: "Arah gaya berat selalu?",
            options: ["Ke atas", "Ke bawah menuju pusat planet", "Mendatar", "Searah gerak"],
            answer: 1,
            explain: "Berat adalah tarikan gravitasi, selalu mengarah ke bawah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gaya-normal",
    levelId: "jenis-gaya",
    order: 2,
    title: "Gaya Normal",
    summary:
      "Mengapa kamu tidak jatuh menembus lantai? Kita rasakan dulu dorongan tersembunyi dari permukaan sebelum menghitungnya.",
    durationMin: 15,
    tags: ["fisika", "dinamika", "gaya-normal", "permukaan"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu duduk di kursi, gravitasi terus menarikmu ke bawah, tetapi kamu tidak jatuh menembus kursi. Ada gaya yang mendorongmu balik ke atas, tepat sebesar yang dibutuhkan agar kamu tetap diam. Gaya tegak lurus dari permukaan itu disebut <strong>gaya normal</strong>. Ia bukan selalu sama dengan berat, melainkan menyesuaikan diri dengan keadaan. Ayo rasakan dulu sebelum menuliskan rumusnya.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Dorongan Tegak Lurus dari Permukaan",
        caption: "Gaya normal selalu tegak lurus permukaan dan menyesuaikan diri agar benda tidak menembusnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Letakkan buku di telapak tanganmu yang terbuka. Rasakan tanganmu mendorong buku ke atas persis sebesar beratnya. Sekarang tekan buku itu ke bawah dengan tangan satunya: telapakmu harus mendorong lebih kuat. Lalu coba angkat sedikit buku dengan tangan lain: dorongan telapakmu berkurang. <strong>Gaya normal menyesuaikan diri</strong> dengan apa yang menekan permukaan. Rasakan dulu, jangan buru-buru ke angka.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu gaya normal",
        html: "<strong>Gaya normal (N)</strong> adalah gaya yang diberikan permukaan, selalu tegak lurus terhadap permukaan itu, mendorong benda menjauh agar tidak saling menembus. Pada lantai datar tanpa gaya lain, gaya normal mengimbangi berat benda. Bila ada dorongan ke bawah tambahan, gaya normal membesar; bila ada tarikan ke atas, gaya normal mengecil.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya Normal vs Dorongan Tambahan ke Bawah (kotak 5 kg, g = 10 m/s²)",
        unit: "gaya normal (N)",
        source: "perhitungan N = m·g + gaya dorong ke bawah",
        note: "Berat kotak tetap 50 N, lalu ditambah dorongan ke bawah. Gaya normal naik lurus mengikuti dorongan tambahan. Pola ini muncul sebelum rumus diberikan.",
        data: [
          { label: "+0 N", value: 50, color: "#c084fc" },
          { label: "+10 N", value: 60, color: "#c084fc" },
          { label: "+20 N", value: 70, color: "#c084fc" },
          { label: "+30 N", value: 80, color: "#c084fc" },
        ],
      },
      {
        type: "paragraph",
        html: "Lihat grafik. Berat kotak tetap 50 N, tetapi saat kita menekan kotak ke bawah lebih kuat, gaya normal dari lantai ikut naik lurus: dari 50 N menjadi 80 N. Gaya normal selalu pas sebesar total gaya ke bawah yang harus diimbangi agar kotak tetap diam. Pola penyeimbang inilah yang akan dirumuskan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kotak bermassa 6 kg diam di lantai datar. Dengan g = 10 m/s², berapa gaya normal dari lantai?",
        answer: 60,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Di lantai datar tanpa gaya lain, gaya normal mengimbangi berat: N = m · g = 6 × 10 = <strong>60 N</strong>. Karena kotak diam dan tidak menembus lantai, dorongan ke atas pasti sebesar beratnya.",
        hint: "Pada lantai datar tanpa gaya lain, N sama dengan berat (m × g).",
      },
      {
        type: "calcExercise",
        prompt:
          "Kotak 6 kg yang sama ditekan ke bawah dengan gaya tambahan 25 N. Dengan g = 10 m/s², berapa gaya normal sekarang?",
        answer: 85,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Total gaya ke bawah = berat + dorongan = 60 N + 25 N = 85 N. Karena kotak tetap diam, gaya normal harus mengimbangi semuanya: N = <strong>85 N</strong>. Dorongan ke bawah memperbesar gaya normal.",
        hint: "Jumlahkan berat dengan gaya tekan ke bawah.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap keadaan berdasarkan pengaruhnya pada gaya normal di lantai datar.",
        buckets: ["Gaya normal membesar", "Gaya normal mengecil"],
        items: [
          { text: "Seseorang menekan kotak ke bawah", bucket: "Gaya normal membesar" },
          { text: "Tali menarik kotak sedikit ke atas", bucket: "Gaya normal mengecil" },
          { text: "Benda berat ditumpuk di atas kotak", bucket: "Gaya normal membesar" },
          { text: "Balon helium diikat dan menarik kotak ke atas", bucket: "Gaya normal mengecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Kursi Bisa Patah Saat Diloncati",
        html: "Sebuah kursi mungkin kuat menahan beratmu saat duduk tenang, tetapi bisa patah saat kamu menjatuhkan diri ke atasnya. Saat tubuhmu mendarat, kursi harus menghentikan gerak jatuhmu dalam waktu singkat, sehingga <strong>gaya normal</strong> yang harus ia berikan jauh melebihi sekadar beratmu. Gaya normal bukan angka tetap, ia melonjak sesuai seberapa keras benda menekannya. Itulah sebabnya mendarat keras jauh lebih merusak daripada duduk perlahan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan bahwa gaya normal menyesuaikan diri, barulah kita rumuskan dari Hukum Newton. Pada <strong>lantai datar tanpa gaya vertikal lain</strong>, benda diam berarti ΣF tegak = 0, sehingga <strong>N = m · g</strong>. Bila ada gaya tekan ke bawah F, maka <strong>N = m · g + F</strong>; bila ada tarikan ke atas T, maka N = m · g − T. Gaya normal selalu mengimbangi total gaya tegak lurus permukaan agar benda tidak menembusnya.",
      },
      {
        type: "takeaways",
        items: [
          "Gaya normal selalu tegak lurus permukaan dan mendorong benda menjauhinya.",
          "Pada lantai datar tanpa gaya lain, N = m · g.",
          "Dorongan ke bawah memperbesar N; tarikan ke atas memperkecil N.",
          "Gaya normal bukan nilai tetap, ia menyesuaikan agar benda tidak menembus permukaan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Arah gaya normal selalu?",
            options: ["Searah gerak", "Tegak lurus permukaan", "Ke bawah", "Sejajar permukaan"],
            answer: 1,
            explain: "Gaya normal selalu tegak lurus terhadap permukaan kontak.",
          },
          {
            q: "Kotak 4 kg diam di lantai datar, g = 10 m/s². Gaya normalnya?",
            options: ["4 N", "0,4 N", "40 N", "14 N"],
            answer: 2,
            explain: "Tanpa gaya lain, N = m · g = 4 × 10 = 40 N.",
          },
          {
            q: "Bila benda di lantai datar ditekan ke bawah dengan gaya tambahan, gaya normal?",
            options: ["Mengecil", "Membesar", "Tetap", "Menjadi nol"],
            answer: 1,
            explain: "N = m · g + F, jadi gaya normal membesar.",
          },
          {
            q: "Bila tali menarik benda sedikit ke atas, gaya normal lantai?",
            options: ["Membesar", "Mengecil", "Tetap", "Berbalik arah"],
            answer: 1,
            explain: "Tarikan ke atas mengurangi tekanan ke lantai, jadi N = m · g − T mengecil.",
          },
          {
            q: "Apakah gaya normal selalu sama dengan berat benda?",
            options: [
              "Ya, selalu",
              "Tidak, hanya pada lantai datar tanpa gaya vertikal lain",
              "Tidak pernah sama dengan berat",
              "Hanya saat benda bergerak",
            ],
            answer: 1,
            explain: "N = m · g hanya pada lantai datar tanpa gaya vertikal tambahan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gaya-gesek-dan-normal",
    levelId: "jenis-gaya",
    order: 3,
    title: "Gaya Gesek Statis dan Kinetis",
    summary:
      "Mengapa meja berhenti meluncur padahal tak ada yang menahan? Kita rasakan dulu gaya tersembunyi yang lahir dari sentuhan dua permukaan.",
    durationMin: 15,
    tags: ["fisika", "dinamika", "gesek", "gaya-normal"],
    blocks: [
      {
        type: "paragraph",
        html: "Dorong meja di lantai keramik, lalu lepaskan. Meja melambat dan berhenti, padahal tak ada tangan yang menahannya. Ada gaya tak terlihat yang melawan geraknya: <strong>gaya gesek</strong>. Gesekan ini berbeda saat benda masih diam dan saat sudah meluncur. Ia juga bergantung pada seberapa kuat benda menekan permukaan, yaitu gaya normalnya. Ayo rasakan dua jenis gesekan ini sebelum menuliskan rumusnya.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Gaya yang Lahir dari Sentuhan",
        caption: "Gesekan statis menahan benda diam, gesekan kinetis melawan benda yang sudah meluncur.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Geser bukumu pelan-pelan di meja. Mula-mula ia menolak bergerak (gesekan statis menahan), lalu setelah dorongan cukup kuat ia mulai meluncur dan terasa sedikit lebih ringan untuk dilanjutkan (gesekan kinetis). Sekarang tekan buku ke meja sambil menggeser: terasa lebih berat, bukan? Makin kuat tekanan ke permukaan, makin besar gesekannya. Catat pola ini dulu.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua wajah gesekan",
        html: "<strong>Gesekan statis</strong> menahan benda yang masih diam; besarnya menyesuaikan dorongan sampai batas maksimum tertentu. <strong>Gesekan kinetis</strong> melawan benda yang sudah meluncur dan besarnya kira-kira tetap. Keduanya bekerja sejajar permukaan melawan arah gerak (atau kecenderungan gerak), dan keduanya membesar bila gaya normal membesar.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya Gesek vs Gaya Normal (permukaan dengan μ = 0,4)",
        unit: "gaya gesek (N)",
        source: "data simulasi pada koefisien gesek tetap μ = 0,4",
        note: "Kekasaran permukaan dijaga tetap (μ = 0,4). Makin besar gaya normal, makin besar gaya gesek, lurus sebanding. Pola ini muncul sebelum rumus diberikan.",
        data: [
          { label: "N = 10 N", value: 4, color: "#a78bfa" },
          { label: "N = 20 N", value: 8, color: "#a78bfa" },
          { label: "N = 30 N", value: 12, color: "#a78bfa" },
          { label: "N = 40 N", value: 16, color: "#a78bfa" },
        ],
      },
      {
        type: "paragraph",
        html: "Lihat grafik di atas. Pada permukaan yang sama, gaya gesek naik lurus mengikuti gaya normal. Perbandingannya selalu tetap, yaitu 4 dibanding 10, atau 0,4. Angka tetap inilah yang menggambarkan kekasaran permukaan, dan nanti kita beri nama koefisien gesek.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kotak menekan lantai dengan gaya normal 50 N. Koefisien gesek kinetis 0,3. Berapa gaya gesek kinetis yang melawan geraknya?",
        answer: 15,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Gaya gesek kinetis = koefisien gesek dikali gaya normal = 0,3 × 50 N = <strong>15 N</strong>. Gaya inilah yang harus diatasi agar kotak tetap meluncur.",
        hint: "Kalikan koefisien gesek dengan gaya normal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah balok 5 kg di lantai datar (g = 10 m/s²) punya koefisien gesek statis maksimum 0,5. Berapa gaya dorong minimum agar balok mulai bergerak?",
        answer: 25,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Gaya normal N = m · g = 5 × 10 = 50 N. Gesekan statis maksimum = μ · N = 0,5 × 50 = <strong>25 N</strong>. Dorongan harus melebihi 25 N agar balok mulai meluncur.",
        hint: "Hitung N = m · g lalu kalikan dengan koefisien gesek statis.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan ke jenis gaya gesek yang tepat.",
        buckets: ["Gesekan statis", "Gesekan kinetis"],
        items: [
          { text: "Menahan lemari agar tidak mulai meluncur", bucket: "Gesekan statis" },
          { text: "Melawan kotak yang sedang meluncur", bucket: "Gesekan kinetis" },
          { text: "Membuat sepatu tidak tergelincir saat berdiri", bucket: "Gesekan statis" },
          { text: "Memanaskan rem cakram yang sedang berputar", bucket: "Gesekan kinetis" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Mobil Sulit Mengerem di Jalan Basah",
        html: "Rem bekerja dengan memperbesar <strong>gaya gesek</strong> antara ban dan jalan agar mobil melambat. Saat jalan basah, lapisan air menurunkan koefisien gesek antara ban dan aspal, sehingga gaya gesek mengecil meski berat mobil tetap. Akibatnya jarak pengereman memanjang dan mobil bisa tergelincir. Pengemudi yang paham bahwa gesekan bergantung pada permukaan akan melaju lebih pelan saat hujan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati polanya, barulah rumus dituliskan. Gaya gesek sebanding dengan gaya normal, sehingga <strong>f = μ · N</strong>, dengan μ (koefisien gesek) menggambarkan kekasaran permukaan. Gesekan statis maksimum (μ<sub>s</sub> · N) sedikit lebih besar daripada gesekan kinetis (μ<sub>k</sub> · N), itulah sebabnya benda lebih sulit 'dimulai' daripada 'dilanjutkan'. Pada lantai datar, N = m · g.",
      },
      {
        type: "takeaways",
        items: [
          "Gesekan statis menahan benda diam hingga batas maksimum; gesekan kinetis melawan benda yang meluncur.",
          "Gaya gesek bekerja sejajar permukaan melawan arah gerak.",
          "Besar gaya gesek dirangkum oleh f = μ · N, sebanding dengan gaya normal.",
          "Gesekan statis maksimum lebih besar daripada gesekan kinetis.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Gaya gesek selalu bekerja?",
            options: ["Tegak lurus permukaan", "Sejajar permukaan melawan gerak", "Searah gerak", "Ke atas"],
            answer: 1,
            explain: "Gaya gesek sejajar permukaan dan melawan arah gerak atau kecenderungan gerak.",
          },
          {
            q: "Koefisien gesek 0,2 dan gaya normal 60 N. Berapa gaya geseknya?",
            options: ["12 N", "120 N", "0,2 N", "300 N"],
            answer: 0,
            explain: "f = μ · N = 0,2 × 60 = 12 N.",
          },
          {
            q: "Mengapa benda lebih sulit mulai bergerak daripada saat sudah meluncur?",
            options: [
              "Karena gaya normal hilang",
              "Karena gesekan statis maksimum lebih besar dari gesekan kinetis",
              "Karena massa berubah",
              "Karena gravitasi naik",
            ],
            answer: 1,
            explain: "Gesekan statis maksimum sedikit lebih besar daripada gesekan kinetis.",
          },
          {
            q: "Jika gaya normal digandakan pada permukaan yang sama, gaya gesek menjadi?",
            options: ["Setengahnya", "Tetap", "Dua kali lipat", "Nol"],
            answer: 2,
            explain: "f = μ · N, jadi gesekan ikut mengganda saat gaya normal mengganda.",
          },
          {
            q: "Apa yang dilambangkan koefisien gesek μ?",
            options: ["Berat benda", "Kekasaran antara dua permukaan", "Kecepatan benda", "Suhu permukaan"],
            answer: 1,
            explain: "μ menggambarkan seberapa kasar atau licin dua permukaan yang bersentuhan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tegangan-tali",
    levelId: "jenis-gaya",
    order: 4,
    title: "Tegangan Tali",
    summary:
      "Saat menggantung lampu atau menarik gerobak dengan tali, gaya apa yang merambat di sepanjang tali? Kita rasakan dulu tegangan sebelum menghitungnya.",
    durationMin: 15,
    tags: ["fisika", "dinamika", "tegangan", "tali"],
    blocks: [
      {
        type: "paragraph",
        html: "Gantungkan ember air pada seutas tali. Tali menegang, dan kamu bisa merasakan tarikannya di kedua ujung: ujung atas menahan langit-langit, ujung bawah menahan ember. Gaya tarik yang merambat di sepanjang tali itulah <strong>tegangan</strong>. Tali hanya bisa menarik, tidak pernah mendorong. Ayo rasakan tegangan ini sebelum menuliskan rumusnya.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Gaya yang Merambat di Tali",
        caption: "Tegangan menarik benda di kedua ujung tali, searah talinya, tidak pernah mendorong.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang ujung tali, minta teman menarik ujung satunya. Rasakan tarikan di tanganmu: itu tegangan. Sekarang gantungkan tas di tengah tali, talinya melengkung dan terasa makin tegang. Coba juga tarik gerobak dengan tali: gerobak ikut maju karena tegangan tali menariknya. <strong>Tegangan selalu menarik benda searah talinya</strong>, dan pada tali ringan ideal, besarnya sama di sepanjang tali. Rasakan dulu pola ini.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu tegangan tali",
        html: "<strong>Tegangan (T)</strong> adalah gaya tarik yang merambat di sepanjang tali, kabel, atau kawat. Tali hanya bisa <strong>menarik</strong> benda ke arah talinya, tidak pernah mendorong. Pada tali yang ringan (massanya diabaikan) dan katrol licin, tegangan bernilai sama di seluruh bagian tali. Untuk benda diam yang tergantung, tegangan mengimbangi berat.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah lampu bermassa 3 kg digantung diam pada seutas tali. Dengan g = 10 m/s², berapa tegangan talinya?",
        answer: 30,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Karena lampu diam, gaya total nol: tegangan harus mengimbangi berat. T = m × g = 3 × 10 = <strong>30 N</strong>. Tali menarik lampu ke atas persis sebesar beratnya.",
        hint: "Pada benda diam yang tergantung, tegangan sama dengan berat (m × g).",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua beban digantung berurutan pada satu tali vertikal: 2 kg di bawah, lalu 3 kg di atasnya, keduanya diam (g = 10 m/s²). Berapa tegangan pada tali bagian paling atas yang menahan keduanya?",
        answer: 50,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Tali paling atas menahan total kedua beban: massa total = 2 + 3 = 5 kg. T = m total × g = 5 × 10 = <strong>50 N</strong>. Makin ke atas, tali menahan beban yang makin banyak.",
        hint: "Tali paling atas menanggung berat kedua beban sekaligus.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan: benar atau salah tentang tegangan tali ideal.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "Tali hanya bisa menarik, tidak mendorong", bucket: "Benar" },
          { text: "Tegangan menarik benda searah talinya", bucket: "Benar" },
          { text: "Tali bisa mendorong benda menjauh", bucket: "Salah" },
          { text: "Pada tali ringan ideal, tegangan berbeda-beda di tiap titik tanpa sebab", bucket: "Salah" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap situasi dengan tegangan talinya (m dalam kg, g = 10 m/s²).",
        pairs: [
          { left: "Beban 4 kg tergantung diam", right: "40 N" },
          { left: "Beban 7 kg tergantung diam", right: "70 N" },
          { left: "Beban 1 kg tergantung diam", right: "10 N" },
          { left: "Beban 10 kg tergantung diam", right: "100 N" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Tali Jemuran Tak Pernah Lurus Sempurna",
        html: "Coba rentangkan tali jemuran sekencang apa pun, ia tetap melengkung sedikit saat digantungi pakaian. Mengapa? Karena untuk menahan berat pakaian yang menarik ke bawah, tegangan tali harus punya komponen ke atas, dan itu hanya mungkin bila tali membentuk sudut (melengkung). Makin lurus talinya, makin kecil komponen ke atas, sehingga tegangan harus melonjak sangat besar untuk menahan beban yang sama. Itulah sebabnya menarik tali benar-benar lurus mendatar nyaris mustahil, dan kawat yang dipaksa lurus bisa putus.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan tegangan, barulah rumus muncul dari Hukum Newton. Untuk benda <strong>diam atau bergerak lurus beraturan</strong> yang tergantung vertikal, ΣF = 0 sehingga <strong>T = m · g</strong>. Bila benda <strong>dipercepat</strong> searah vertikal, gunakan ΣF = m · a: untuk percepatan ke atas T = m(g + a), untuk percepatan ke bawah T = m(g − a). Pada tali ringan ideal, tegangan sama di sepanjang tali.",
      },
      {
        type: "takeaways",
        items: [
          "Tegangan adalah gaya tarik yang merambat di sepanjang tali.",
          "Tali hanya bisa menarik searah talinya, tidak pernah mendorong.",
          "Pada benda diam yang tergantung, T = m · g.",
          "Pada tali ringan ideal, tegangan bernilai sama di seluruh bagian tali.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tegangan tali selalu?",
            options: ["Mendorong benda", "Menarik benda searah tali", "Tegak lurus tali", "Sama dengan nol"],
            answer: 1,
            explain: "Tali hanya bisa menarik, searah talinya, tidak pernah mendorong.",
          },
          {
            q: "Sebuah beban 5 kg tergantung diam. Dengan g = 10 m/s², tegangan talinya?",
            options: ["5 N", "50 N", "0,5 N", "15 N"],
            answer: 1,
            explain: "T = m · g = 5 × 10 = 50 N karena beban diam.",
          },
          {
            q: "Pada tali ringan ideal melalui katrol licin, tegangan di kedua sisi?",
            options: ["Berbeda jauh", "Sama besar", "Nol di satu sisi", "Selalu ke bawah"],
            answer: 1,
            explain: "Pada tali ringan dan katrol licin, tegangan sama di sepanjang tali.",
          },
          {
            q: "Beban 2 kg tergantung pada tali di dalam lift yang dipercepat ke atas. Tegangan talinya?",
            options: [
              "Lebih kecil dari m · g",
              "Sama dengan m · g",
              "Lebih besar dari m · g",
              "Menjadi nol",
            ],
            answer: 2,
            explain: "T = m(g + a) saat dipercepat ke atas, jadi lebih besar dari m · g.",
          },
          {
            q: "Apa yang dimaksud tegangan tali?",
            options: [
              "Berat tali itu sendiri",
              "Gaya tarik yang merambat di sepanjang tali",
              "Gaya gesek pada tali",
              "Gaya dorong tali pada benda",
            ],
            answer: 1,
            explain: "Tegangan adalah gaya tarik yang merambat sepanjang tali.",
          },
        ],
      },
    ],
  },
];
