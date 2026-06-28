import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "mengenal-himpunan",
    levelId: "himpunan",
    order: 1,
    title: "Mengenal Himpunan",
    summary:
      "Sebelum menghafal lambang, kita amati dulu cara manusia mengelompokkan benda. Aturan tentang himpunan baru muncul setelah pola itu terlihat.",
    durationMin: 11,
    tags: ["himpunan", "anggota", "semesta", "kardinalitas"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu merapikan lemari: kaus dikumpulkan dengan kaus, celana dengan celana, kaus kaki dengan kaus kaki. Tanpa sadar kamu sedang membuat <em>himpunan</em>. Tetapi tunggu, apakah \"kumpulan baju yang bagus\" juga sebuah himpunan? Sebelum membuat aturan, ayo selidiki dulu kumpulan seperti apa yang boleh disebut himpunan.",
      },
      {
        type: "video",
        comp: "HimpunanVideo",
        title: "Video: Mengenal Himpunan",
        caption: "Himpunan adalah kumpulan objek yang batasannya jelas.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Uji tiap kumpulan dengan satu pertanyaan: 'Bisakah aku menunjuk dengan pasti, ini anggota atau bukan?' \"Bilangan asli kurang dari 5\" jelas: {1, 2, 3, 4}. Tetapi \"siswa yang pintar\" tidak punya batas tegas, jadi belum tentu himpunan. Coba uji beberapa kumpulan di sekitarmu sebelum membaca aturannya.",
      },
      {
        type: "widget",
        widget: "SimulatorHimpunan",
      },
      {
        type: "callout",
        tone: "info",
        title: "Lambang yang akan sering kita pakai",
        html: "Anggota ditulis dengan <strong>∈</strong> (\"anggota dari\") dan bukan anggota dengan <strong>∉</strong>. Banyaknya anggota himpunan A ditulis <strong>n(A)</strong>. Himpunan tanpa anggota disebut <strong>himpunan kosong</strong>, ditulis ∅ atau { }. Seluruh objek yang sedang dibahas berada dalam <strong>himpunan semesta</strong> (S).",
      },
      {
        type: "classifyExercise",
        prompt: "Mana kumpulan yang merupakan himpunan (batasnya jelas) dan mana yang bukan?",
        buckets: ["Himpunan", "Bukan himpunan"],
        items: [
          { text: "Bilangan genap antara 1 dan 10", bucket: "Himpunan" },
          { text: "Kumpulan makanan yang enak", bucket: "Bukan himpunan" },
          { text: "Huruf vokal dalam alfabet", bucket: "Himpunan" },
          { text: "Kumpulan orang yang tinggi", bucket: "Bukan himpunan" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Himpunan A = {2, 4, 6, 8, 10}. Berapa banyak anggotanya, yaitu n(A)?",
        answer: 5,
        suffix: " anggota",
        solution:
          "Cukup hitung satu per satu: 2, 4, 6, 8, 10. Ada 5 bilangan, jadi n(A) = 5.",
        hint: "Hitung berapa bilangan yang ada di dalam kurung kurawal.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan lambang dengan artinya.",
        pairs: [
          { left: "3 ∈ A", right: "3 adalah anggota A" },
          { left: "7 ∉ A", right: "7 bukan anggota A" },
          { left: "n(A)", right: "Banyaknya anggota A" },
          { left: "∅", right: "Himpunan kosong" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Daftar hadir kelas",
        html: "Seorang guru mendata kelas 7A yang berisi 30 siswa. Ia ingin tahu \"himpunan siswa yang membawa kalkulator\". Karena tiap nama bisa dipastikan membawa atau tidak, ini himpunan yang sah. Tetapi \"himpunan siswa yang rajin\" tidak punya ukuran pasti, sehingga tidak bisa dipakai untuk perhitungan. Inilah sebabnya matematika menuntut batas yang jelas: bukan sekadar mengumpulkan, tetapi memastikan setiap objek bisa dinilai anggota atau bukan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah menguji banyak kumpulan, baru kita rumuskan: <strong>himpunan</strong> adalah kumpulan objek dengan batas yang jelas, sehingga setiap objek pasti anggota (∈) atau bukan anggota (∉). Banyaknya anggota disebut <strong>kardinalitas</strong>, ditulis n(A). Himpunan tanpa anggota adalah <strong>himpunan kosong</strong> (∅), dan semua objek yang dibahas berada dalam <strong>himpunan semesta</strong> (S).",
      },
      {
        type: "takeaways",
        items: [
          "Himpunan adalah kumpulan objek dengan batas yang jelas dan tidak ambigu.",
          "Gunakan ∈ untuk anggota dan ∉ untuk bukan anggota.",
          "n(A) menyatakan banyaknya anggota (kardinalitas) himpunan A.",
          "Himpunan semesta (S) memuat semua objek yang sedang dibicarakan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Manakah yang merupakan himpunan?",
            options: [
              "Kumpulan film yang seru",
              "Kumpulan bilangan ganjil kurang dari 8",
              "Kumpulan lagu yang merdu",
              "Kumpulan kota yang indah",
            ],
            answer: 1,
            explain: "Hanya 'bilangan ganjil kurang dari 8' yang batasnya jelas: {1, 3, 5, 7}.",
          },
          {
            q: "Jika B = {a, i, u, e, o}, maka n(B) = ?",
            options: ["3", "4", "5", "6"],
            answer: 2,
            explain: "B memuat lima huruf vokal, jadi n(B) = 5.",
          },
          {
            q: "Lambang yang tepat untuk '5 bukan anggota A' adalah?",
            options: ["5 ∈ A", "5 ∉ A", "5 = A", "5 ⊂ A"],
            answer: 1,
            explain: "Bukan anggota ditulis dengan ∉.",
          },
          {
            q: "Himpunan yang tidak memiliki anggota disebut?",
            options: ["Himpunan semesta", "Himpunan kosong", "Himpunan bagian", "Himpunan penuh"],
            answer: 1,
            explain: "Himpunan kosong dilambangkan ∅ atau { }.",
          },
          {
            q: "Apa fungsi himpunan semesta (S)?",
            options: [
              "Membuat himpunan menjadi kosong",
              "Membatasi semua objek yang sedang dibahas",
              "Menghitung anggota dua kali",
              "Mengubah anggota menjadi bukan anggota",
            ],
            answer: 1,
            explain: "Semesta menetapkan ruang lingkup objek yang dibicarakan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "operasi-himpunan",
    levelId: "himpunan",
    order: 2,
    title: "Operasi Himpunan: Irisan, Gabungan, Selisih, Komplemen",
    summary:
      "Apa yang terjadi jika dua himpunan bertemu? Kita coba-coba menggabung dan memotong dulu, baru menamai aturannya.",
    durationMin: 13,
    tags: ["irisan", "gabungan", "selisih", "komplemen"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua sahabat membuat daftar buah kesukaan. Andi suka {apel, mangga, jeruk, pisang}, Budi suka {mangga, jeruk, anggur}. Pertanyaannya: buah apa yang disukai keduanya? Buah apa yang disukai salah satu dari mereka? Sebelum menghafal lambang ∩ dan ∪, ayo otak-atik dulu dua daftar ini.",
      },
      {
        type: "video",
        comp: "HimpunanVideo",
        title: "Video: Operasi pada Himpunan",
        caption: "Irisan mencari yang sama, gabungan menyatukan semuanya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Dengan daftar Andi dan Budi, coba jawab sendiri dulu: (1) buah yang ada di KEDUA daftar; (2) buah yang ada di SALAH SATU daftar (digabung tanpa pengulangan); (3) buah yang hanya Andi punya. Setelah kamu menemukan jawabannya, barulah kita beri nama: irisan, gabungan, dan selisih.",
      },
      {
        type: "widget",
        widget: "SimulatorHimpunan",
      },
      {
        type: "callout",
        tone: "info",
        title: "Empat operasi inti",
        html: "<strong>Irisan</strong> A ∩ B: anggota yang ada di A <em>dan</em> di B. <strong>Gabungan</strong> A ∪ B: anggota yang ada di A <em>atau</em> di B (tiap anggota ditulis sekali). <strong>Selisih</strong> A − B: anggota A yang <em>bukan</em> anggota B. <strong>Komplemen</strong> A<sup>c</sup>: anggota semesta yang <em>bukan</em> anggota A.",
      },
      {
        type: "calcExercise",
        prompt:
          "Diketahui A = {1, 2, 3, 4, 6} dan B = {2, 4, 6, 8}. Berapa banyak anggota irisan, yaitu n(A ∩ B)?",
        answer: 3,
        suffix: " anggota",
        solution:
          "Irisan adalah anggota yang ada di kedua himpunan. A ∩ B = {2, 4, 6}, sehingga n(A ∩ B) = 3.",
        hint: "Cari bilangan yang muncul di A maupun di B.",
      },
      {
        type: "calcExercise",
        prompt:
          "Masih dengan A = {1, 2, 3, 4, 6} dan B = {2, 4, 6, 8}. Berapa n(A ∪ B)?",
        answer: 6,
        suffix: " anggota",
        solution:
          "Gabungan menyatukan semua anggota tanpa pengulangan: A ∪ B = {1, 2, 3, 4, 6, 8}, jadi n(A ∪ B) = 6. Periksa dengan rumus: n(A) + n(B) − n(A ∩ B) = 5 + 4 − 3 = 6.",
        hint: "Satukan semua anggota, tetapi tulis anggota yang sama hanya sekali.",
      },
      {
        type: "matchExercise",
        prompt: "Dengan A = {1, 2, 3, 4, 6} dan B = {2, 4, 6, 8}, pasangkan operasi dengan hasilnya.",
        pairs: [
          { left: "A ∩ B", right: "{2, 4, 6}" },
          { left: "A ∪ B", right: "{1, 2, 3, 4, 6, 8}" },
          { left: "A − B", right: "{1, 3}" },
          { left: "B − A", right: "{8}" },
        ],
      },
      {
        type: "classifyExercise",
        prompt:
          "Semesta S = {1, 2, 3, ..., 10} dan A = {2, 4, 6, 8, 10}. Kelompokkan tiap bilangan: anggota A atau anggota komplemen A (Aᶜ).",
        buckets: ["Anggota A", "Anggota Aᶜ"],
        items: [
          { text: "4", bucket: "Anggota A" },
          { text: "7", bucket: "Anggota Aᶜ" },
          { text: "10", bucket: "Anggota A" },
          { text: "3", bucket: "Anggota Aᶜ" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dua klub ekstrakurikuler",
        html: "Sebuah sekolah mendata anggota klub Robotik dan klub Coding. Beberapa siswa ikut keduanya. Untuk membeli kaus seragam, panitia perlu tahu A ∪ B (semua peserta, tanpa menghitung yang ikut dua klub dua kali). Untuk menjadwalkan rapat bersama, mereka perlu A ∩ B (yang ikut keduanya). Tanpa membedakan irisan dan gabungan, kaus bisa terlalu banyak dipesan. Operasi himpunan bukan sekadar lambang, melainkan cara menghindari salah hitung.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah mencoba sendiri, baru kita kunci aturannya. <strong>A ∩ B</strong> = anggota yang ada di A dan B. <strong>A ∪ B</strong> = anggota yang ada di A atau B (sekali tulis). <strong>A − B</strong> = anggota A yang bukan anggota B. <strong>Aᶜ</strong> = anggota semesta yang bukan anggota A. Hubungan penting: <strong>n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</strong>, karena anggota irisan tidak boleh dihitung dua kali.",
      },
      {
        type: "takeaways",
        items: [
          "Irisan (∩) memuat anggota yang sama-sama dimiliki kedua himpunan.",
          "Gabungan (∪) menyatukan semua anggota tanpa pengulangan.",
          "Selisih A − B memuat anggota A yang bukan anggota B.",
          "Komplemen Aᶜ memuat anggota semesta yang berada di luar A.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Jika P = {a, b, c, d} dan Q = {c, d, e}, maka P ∩ Q = ?",
            options: ["{a, b}", "{c, d}", "{e}", "{a, b, c, d, e}"],
            answer: 1,
            explain: "Irisan adalah anggota yang ada di kedua himpunan: {c, d}.",
          },
          {
            q: "Dengan P dan Q di atas, P ∪ Q = ?",
            options: ["{c, d}", "{a, b, e}", "{a, b, c, d, e}", "{a, b, c, d, c, d, e}"],
            answer: 2,
            explain: "Gabungan menyatukan semua anggota sekali saja: {a, b, c, d, e}.",
          },
          {
            q: "Selisih P − Q (anggota P yang bukan anggota Q) adalah?",
            options: ["{a, b}", "{c, d}", "{e}", "{a, b, c, d}"],
            answer: 0,
            explain: "Buang anggota Q dari P, tersisa {a, b}.",
          },
          {
            q: "Jika n(A) = 7, n(B) = 5, dan n(A ∩ B) = 2, maka n(A ∪ B) = ?",
            options: ["12", "14", "10", "9"],
            answer: 2,
            explain: "n(A ∪ B) = 7 + 5 − 2 = 10. Irisan dihitung sekali, bukan dua kali.",
          },
          {
            q: "Semesta S = {1,2,3,4,5} dan A = {1,3,5}. Komplemen Aᶜ adalah?",
            options: ["{1,3,5}", "{2,4}", "{1,2,3,4,5}", "{ }"],
            answer: 1,
            explain: "Aᶜ memuat anggota S yang bukan anggota A: {2, 4}.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "diagram-venn",
    levelId: "himpunan",
    order: 3,
    title: "Membaca dan Membuat Diagram Venn",
    summary:
      "Gambar dua lingkaran bisa bercerita lebih jelas daripada deretan angka. Kita gambar dulu, baru menyimpulkan aturannya.",
    durationMin: 13,
    tags: ["diagram-venn", "irisan", "gabungan", "wilayah"],
    blocks: [
      {
        type: "paragraph",
        html: "Seorang ketua kelas mendata 40 siswa yang ikut ekstrakurikuler olahraga: 25 anak ikut sepak bola, 18 anak ikut basket, dan 8 anak ikut keduanya. Berapa yang hanya ikut sepak bola? Berapa yang tidak ikut keduanya? Daftar nama saja membingungkan. Ayo gambar dulu dua lingkaran yang saling tumpang tindih.",
      },
      {
        type: "video",
        comp: "HimpunanVideo",
        title: "Video: Diagram Venn",
        caption: "Lingkaran yang bertumpang tindih menunjukkan irisan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Mulailah dari bagian tengah. Isi dulu irisan (ikut keduanya = 8). Lalu hitung wilayah \"hanya sepak bola\" = 25 − 8 = 17, dan \"hanya basket\" = 18 − 8 = 10. Terakhir, di luar kedua lingkaran adalah yang tidak ikut keduanya. Coba isi sendiri sebelum melihat angka totalnya.",
      },
      {
        type: "widget",
        widget: "SimulatorHimpunan",
      },
      {
        type: "callout",
        tone: "info",
        title: "Cara membaca wilayah",
        html: "Persegi panjang luar adalah semesta (S). Setiap lingkaran adalah satu himpunan. Daerah tumpang tindih adalah <strong>irisan</strong>. Bagian lingkaran di luar tumpang tindih adalah anggota yang <strong>hanya</strong> milik satu himpunan. Daerah di dalam persegi tetapi di luar semua lingkaran adalah anggota yang tidak masuk himpunan mana pun.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari data tadi (sepak bola 25, basket 18, keduanya 8), berapa siswa yang HANYA ikut sepak bola?",
        answer: 17,
        suffix: " siswa",
        solution:
          "Anggota 'hanya sepak bola' = n(sepak bola) − n(keduanya) = 25 − 8 = 17 siswa.",
        hint: "Kurangi jumlah pemain sepak bola dengan yang ikut keduanya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Masih dari data yang sama, total siswa olahraga ada 40. Berapa siswa yang TIDAK ikut sepak bola maupun basket?",
        answer: 5,
        suffix: " siswa",
        solution:
          "Yang ikut minimal satu = n(A ∪ B) = 25 + 18 − 8 = 35. Maka yang tidak ikut keduanya = 40 − 35 = 5 siswa. Cek: 17 (hanya bola) + 10 (hanya basket) + 8 (keduanya) + 5 (tidak ikut) = 40.",
        hint: "Hitung dulu yang ikut minimal satu klub, lalu kurangkan dari 40.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Sebaran 40 siswa pada empat wilayah diagram Venn",
        unit: " siswa",
        source: "Pendataan ekstrakurikuler olahraga, 40 siswa",
        note: "Angka ini berasal langsung dari soal: 25 sepak bola, 18 basket, 8 keduanya, total 40.",
        data: [
          { label: "Hanya sepak bola", value: 17, color: "#3b82f6" },
          { label: "Hanya basket", value: 10, color: "#f59e0b" },
          { label: "Ikut keduanya", value: 8, color: "#10b981" },
          { label: "Tidak ikut keduanya", value: 5, color: "#94a3b8" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan wilayah diagram Venn dengan jumlah siswanya (dari data di atas).",
        pairs: [
          { left: "Hanya sepak bola", right: "17 siswa" },
          { left: "Hanya basket", right: "10 siswa" },
          { left: "Ikut keduanya (irisan)", right: "8 siswa" },
          { left: "Tidak ikut keduanya", right: "5 siswa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Panitia bazar sekolah",
        html: "Panitia bazar mendata siswa yang bersedia menjaga stan makanan dan stan minuman. Dengan diagram Venn, mereka langsung melihat berapa siswa yang sanggup di kedua stan (irisan) dan berapa yang hanya bisa satu stan. Hasilnya, jadwal piket dibuat tanpa ada siswa yang bentrok di dua stan pada jam yang sama. Diagram Venn mengubah daftar nama yang membingungkan menjadi peta wilayah yang bisa langsung dipakai mengambil keputusan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah menggambar dan menghitung, baru kita rumuskan langkahnya: <strong>isi irisan lebih dulu</strong>, lalu kurangkan untuk wilayah \"hanya satu himpunan\", terakhir isi wilayah luar. Jumlah seluruh wilayah harus sama dengan n(S). Wilayah hanya-A = n(A) − n(A ∩ B), dan yang di luar semua lingkaran = n(S) − n(A ∪ B).",
      },
      {
        type: "takeaways",
        items: [
          "Persegi luar adalah semesta; tiap lingkaran adalah satu himpunan.",
          "Selalu isi irisan terlebih dahulu, baru wilayah lainnya.",
          "Wilayah 'hanya A' = n(A) dikurangi n(A ∩ B).",
          "Jumlah semua wilayah harus sama dengan banyaknya anggota semesta.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dalam diagram Venn dua lingkaran, daerah tumpang tindih menyatakan?",
            options: ["Gabungan", "Irisan", "Komplemen", "Selisih"],
            answer: 1,
            explain: "Daerah tumpang tindih adalah anggota yang dimiliki kedua himpunan, yaitu irisan.",
          },
          {
            q: "Jika n(A) = 20 dan n(A ∩ B) = 6, maka wilayah 'hanya A' berisi?",
            options: ["26", "14", "6", "20"],
            answer: 1,
            explain: "Hanya A = 20 − 6 = 14.",
          },
          {
            q: "Langkah pertama mengisi diagram Venn dari soal cerita sebaiknya?",
            options: [
              "Isi wilayah luar dulu",
              "Isi gabungan dulu",
              "Isi irisan (bagian tengah) dulu",
              "Isi semesta dulu",
            ],
            answer: 2,
            explain: "Mengisi irisan dulu mencegah penghitungan ganda.",
          },
          {
            q: "Daerah di dalam persegi tetapi di luar semua lingkaran menyatakan?",
            options: [
              "Anggota irisan",
              "Anggota yang tidak masuk himpunan mana pun",
              "Anggota gabungan",
              "Anggota terbanyak",
            ],
            answer: 1,
            explain: "Itu adalah anggota semesta yang tidak termasuk himpunan mana pun.",
          },
          {
            q: "Dari data sepak bola 25, basket 18, keduanya 8, berapa siswa yang ikut minimal satu klub?",
            options: ["43", "35", "51", "40"],
            answer: 1,
            explain: "n(A ∪ B) = 25 + 18 − 8 = 35.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menyelesaikan-masalah-dengan-himpunan",
    levelId: "himpunan",
    order: 4,
    title: "Menyelesaikan Masalah dengan Himpunan",
    summary:
      "Survei nyata sering punya angka yang 'tidak nyambung' bila dijumlah biasa. Kita selidiki dulu kejanggalannya, baru menemukan prinsip inklusi-eksklusi.",
    durationMin: 14,
    tags: ["inklusi-eksklusi", "survei", "pemecahan-masalah", "himpunan"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah survei di kelas berisi 30 siswa menunjukkan: 18 siswa suka teh, 12 siswa suka kopi, dan 5 siswa suka keduanya. Kalau kita jumlahkan 18 + 12 = 30, seolah semua siswa suka minuman. Tetapi tunggu, ada yang ganjil. Ayo selidiki dulu mengapa penjumlahan langsung ini menyesatkan.",
      },
      {
        type: "video",
        comp: "HimpunanVideo",
        title: "Video: Himpunan dalam Masalah Nyata",
        caption: "Prinsip inklusi-eksklusi mencegah penghitungan ganda.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba telusuri 5 siswa yang suka keduanya. Mereka sudah terhitung di angka 18 (suka teh) DAN di angka 12 (suka kopi). Artinya saat kita menjumlah 18 + 12, kelima orang ini dihitung dua kali. Sebelum kita namai prinsipnya, coba kamu tebak: berapa siswa yang sebenarnya suka minimal satu minuman?",
      },
      {
        type: "widget",
        widget: "SimulatorHimpunan",
      },
      {
        type: "callout",
        tone: "info",
        title: "Membongkar survei jadi wilayah",
        html: "Pisahkan menjadi empat kelompok yang tidak tumpang tindih: <strong>hanya teh</strong> = 18 − 5 = 13, <strong>hanya kopi</strong> = 12 − 5 = 7, <strong>suka keduanya</strong> = 5, dan <strong>tidak suka keduanya</strong>. Begitu survei dibongkar jadi wilayah terpisah, tiap siswa hanya dihitung sekali.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari survei (suka teh 18, suka kopi 12, suka keduanya 5), berapa siswa yang suka minimal satu minuman, yaitu n(teh ∪ kopi)?",
        answer: 25,
        suffix: " siswa",
        solution:
          "Gunakan inklusi-eksklusi: n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 18 + 12 − 5 = 25 siswa. Kelima siswa yang dihitung dua kali dikurangkan sekali.",
        hint: "Jumlahkan keduanya lalu kurangi yang dihitung dua kali.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kelas berisi 30 siswa. Berapa siswa yang TIDAK suka teh maupun kopi?",
        answer: 5,
        suffix: " siswa",
        solution:
          "Yang suka minimal satu = 25. Maka yang tidak suka keduanya = 30 − 25 = 5 siswa. Cek: 13 (hanya teh) + 7 (hanya kopi) + 5 (keduanya) + 5 (tidak suka) = 30.",
        hint: "Kurangkan jumlah yang suka minimal satu dari total siswa.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Empat kelompok selera minuman pada 30 siswa",
        unit: " siswa",
        source: "Survei selera minuman kelas, 30 siswa",
        note: "Angka diturunkan dari soal: 18 suka teh, 12 suka kopi, 5 suka keduanya, total 30 siswa.",
        data: [
          { label: "Hanya teh", value: 13, color: "#16a34a" },
          { label: "Hanya kopi", value: 7, color: "#b45309" },
          { label: "Suka keduanya", value: 5, color: "#0ea5e9" },
          { label: "Tidak keduanya", value: 5, color: "#94a3b8" },
        ],
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan pernyataan: mana yang BENAR dan mana yang SALAH berdasarkan hasil survei di atas.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "13 siswa suka teh saja", bucket: "Benar" },
          { text: "Semua 30 siswa suka minuman", bucket: "Salah" },
          { text: "25 siswa suka minimal satu minuman", bucket: "Benar" },
          { text: "18 + 12 = 30 adalah jumlah peminat yang benar", bucket: "Salah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Survei langganan aplikasi",
        html: "Sebuah keluarga mengecek 50 tetangga: 30 berlangganan layanan musik, 22 berlangganan layanan film, dan 12 berlangganan keduanya. Bila ditanya berapa rumah yang berlangganan minimal satu layanan, jawaban naifnya 30 + 22 = 52, padahal hanya ada 50 rumah. Mustahil. Dengan inklusi-eksklusi: 30 + 22 − 12 = 40 rumah berlangganan minimal satu, dan 50 − 40 = 10 rumah tidak berlangganan apa pun. Tanpa mengurangi irisan, hasil survei bisa melebihi jumlah orang yang ada. Inilah bukti bahwa himpunan menjaga kita dari kesimpulan yang mustahil.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah melihat kejanggalan dan membongkar survei, baru kita kunci <strong>prinsip inklusi-eksklusi</strong>: <strong>n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</strong>. Anggota irisan dihitung dua kali saat menjumlah, jadi harus dikurangi sekali. Untuk yang di luar kedua himpunan: <strong>n(S) − n(A ∪ B)</strong>. Langkah aman: pecah jadi wilayah hanya-A, hanya-B, keduanya, dan tidak keduanya, lalu pastikan totalnya sama dengan n(S).",
      },
      {
        type: "takeaways",
        items: [
          "Menjumlahkan dua himpunan secara langsung menghitung irisan dua kali.",
          "Prinsip inklusi-eksklusi: n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
          "Yang di luar kedua himpunan = n(S) − n(A ∪ B).",
          "Pecah masalah menjadi wilayah terpisah dan pastikan totalnya sama dengan n(S).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa 18 + 12 bukan jumlah siswa yang suka minuman?",
            options: [
              "Karena angkanya terlalu besar",
              "Karena 5 siswa yang suka keduanya dihitung dua kali",
              "Karena teh dan kopi tidak bisa dijumlah",
              "Karena ada siswa yang absen",
            ],
            answer: 1,
            explain: "Anggota irisan (5 siswa) terhitung di kedua angka, jadi dihitung dua kali.",
          },
          {
            q: "Jika n(A) = 24, n(B) = 16, n(A ∩ B) = 6, maka n(A ∪ B) = ?",
            options: ["46", "40", "34", "30"],
            answer: 2,
            explain: "n(A ∪ B) = 24 + 16 − 6 = 34.",
          },
          {
            q: "Dari survei (teh 18, kopi 12, keduanya 5) di kelas 30 siswa, berapa yang suka teh saja?",
            options: ["18", "13", "5", "25"],
            answer: 1,
            explain: "Hanya teh = 18 − 5 = 13.",
          },
          {
            q: "Sebuah survei 50 orang: 30 suka A, 22 suka B, 12 suka keduanya. Berapa yang tidak suka keduanya?",
            options: ["8", "10", "12", "2"],
            answer: 1,
            explain: "Minimal satu = 30 + 22 − 12 = 40, maka tidak keduanya = 50 − 40 = 10.",
          },
          {
            q: "Apa langkah paling aman menyelesaikan soal survei dua himpunan?",
            options: [
              "Langsung menjumlahkan semua angka",
              "Memecah menjadi wilayah terpisah lalu cek totalnya sama dengan n(S)",
              "Mengabaikan irisan",
              "Mengalikan kedua himpunan",
            ],
            answer: 1,
            explain: "Memecah jadi wilayah terpisah mencegah penghitungan ganda dan bisa diperiksa.",
          },
        ],
      },
    ],
  },
];
