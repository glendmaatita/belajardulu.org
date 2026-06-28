import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "aturan-sinus",
    levelId: "aturan-aplikasi",
    order: 1,
    title: "Aturan Sinus untuk Segitiga Sembarang",
    summary:
      "Dua kapal terlihat dari satu mercusuar dengan sudut berbeda. Bagaimana mengukur jaraknya tanpa berlayar ke sana? Kita selidiki dulu sebuah perbandingan yang tak pernah berubah.",
    durationMin: 14,
    tags: ["trigonometri", "aturan sinus", "segitiga sembarang", "pengukuran"],
    blocks: [
      {
        type: "paragraph",
        html: "Dari sebuah mercusuar, penjaga melihat dua kapal nelayan. Ia tahu jarak ke kapal pertama dan besar sudut antara keduanya, tetapi tidak mungkin mengukur jarak ke kapal kedua dengan meteran. Trigonometri segitiga siku-siku tidak cukup, sebab segitiga antara mercusuar dan dua kapal bukan segitiga siku-siku. Sebelum bertemu rumusnya, ayo selidiki dulu satu pola pada segitiga sembarang.",
      },
      {
        type: "video",
        comp: "TrigonometriVideo",
        title: "Video: Perbandingan Sisi dan Sudut di Segitiga Sembarang",
        caption: "Di segitiga apa pun, sisi yang lebih panjang selalu berhadapan dengan sudut yang lebih besar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gambar sebuah segitiga sembarang. Beri nama sudut A, B, C dan sisi di depannya a, b, c. Sekarang bandingkan: sudut yang paling besar selalu menghadap sisi yang paling panjang. Coba bagi tiap sisi dengan sinus sudut di depannya. Anehnya, ketiga hasilnya sama persis. Ada perbandingan tersembunyi yang berlaku di seluruh segitiga.",
      },
      {
        type: "widget",
        widget: "SimulatorTrigonometri",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Panjang Sisi Segitiga dengan Sudut 40, 60, dan 80 Derajat",
        unit: "satuan panjang",
        source: "ilustrasi edukatif",
        note: "Sisi a menghadap sudut 40 derajat, b menghadap 60 derajat, c menghadap 80 derajat. Makin besar sudut, makin panjang sisi di depannya.",
        data: [
          { label: "a (sudut 40)", value: 10, color: "#34d399" },
          { label: "b (sudut 60)", value: 13.5, color: "#10b981" },
          { label: "c (sudut 80)", value: 15.3, color: "#059669" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa ini berguna",
        html: "Kalau perbandingan sisi terhadap sinus sudutnya selalu sama, maka cukup tahu satu pasang sisi dan sudut, lalu satu sudut lain, untuk menemukan sisi yang tak terjangkau. Inilah cara mengukur jarak ke kapal tanpa berlayar.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada segitiga, sudut A = 30 derajat dengan sisi a = 6. Sudut B = 90 derajat. Berapa panjang sisi b? Gunakan b = a × sin B ÷ sin A, dengan sin 30 = 0,5 dan sin 90 = 1.",
        answer: 12,
        tolerance: 0.1,
        prefix: "b = ",
        solution:
          "b = a × sin B ÷ sin A = 6 × 1 ÷ 0,5 = <strong>12</strong>. Sisi yang menghadap sudut lebih besar memang lebih panjang.",
        hint: "b = a × sin B ÷ sin A.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk tiap kasus segitiga sembarang, tentukan apakah aturan sinus bisa langsung dipakai atau tidak.",
        buckets: ["Bisa pakai aturan sinus", "Tidak cukup data"],
        items: [
          { text: "Diketahui dua sudut dan satu sisi", bucket: "Bisa pakai aturan sinus" },
          { text: "Diketahui satu sisi dan sudut di depannya, lalu sudut lain", bucket: "Bisa pakai aturan sinus" },
          { text: "Diketahui ketiga sisi saja, tanpa sudut", bucket: "Tidak cukup data" },
          { text: "Diketahui dua sisi dan sudut yang diapitnya saja", bucket: "Tidak cukup data" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengukur jarak antar kapal dari mercusuar",
        html: "Dari mercusuar M, jarak ke kapal A diketahui 800 meter. Penjaga mengukur sudut di kapal A menghadap mercusuar sebesar 50 derajat, dan sudut di mercusuar antara dua kapal sebesar 70 derajat. Maka sudut di kapal B = 180 − 50 − 70 = 60 derajat. Jarak antar kapal (sisi di depan sudut 70 derajat di M) = 800 × sin 70 ÷ sin 60 = 800 × 0,940 ÷ 0,866 = sekitar 868 meter. Penjaga tahu jarak antar kapal tanpa sekali pun meninggalkan mercusuar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah melihat perbandingan yang selalu tetap, baru kita beri nama Aturan Sinus: pada segitiga sembarang dengan sisi a, b, c di depan sudut A, B, C, berlaku <strong>a ÷ sin A = b ÷ sin B = c ÷ sin C</strong>. Aturan ini dipakai saat kita tahu sebuah sisi beserta sudut di depannya.",
      },
      {
        type: "takeaways",
        items: [
          "Aturan sinus berlaku untuk segitiga apa pun, bukan hanya segitiga siku-siku.",
          "Rumusnya: a ÷ sin A = b ÷ sin B = c ÷ sin C.",
          "Sisi yang lebih panjang selalu berhadapan dengan sudut yang lebih besar.",
          "Aturan sinus dipakai bila diketahui sebuah sisi dan sudut di depannya, lalu satu unsur lain.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bentuk aturan sinus yang benar adalah?",
            options: [
              "a × sin A = b × sin B",
              "a ÷ sin A = b ÷ sin B = c ÷ sin C",
              "a² = b² + c²",
              "sin A + sin B + sin C = 1",
            ],
            answer: 1,
            explain: "Aturan sinus: a ÷ sin A = b ÷ sin B = c ÷ sin C.",
          },
          {
            q: "Di segitiga sembarang, sisi terpanjang berhadapan dengan?",
            options: ["Sudut terkecil", "Sudut siku-siku saja", "Sudut terbesar", "Sisi terpendek"],
            answer: 2,
            explain: "Makin besar sudut, makin panjang sisi di depannya.",
          },
          {
            q: "Jika a = 6, sin A = 0,5, dan sin B = 1, maka b sama dengan?",
            options: ["3", "6", "12", "0,5"],
            answer: 2,
            explain: "b = a × sin B ÷ sin A = 6 × 1 ÷ 0,5 = 12.",
          },
          {
            q: "Kapan aturan sinus paling tepat digunakan?",
            options: [
              "Saat tahu ketiga sisi saja",
              "Saat tahu dua sisi dan sudut apitnya saja",
              "Saat tahu sebuah sisi dan sudut di depannya",
              "Hanya pada segitiga siku-siku",
            ],
            answer: 2,
            explain: "Aturan sinus butuh pasangan sisi dan sudut di depannya yang diketahui.",
          },
          {
            q: "Pada segitiga dengan sudut A = 50 dan B = 70 derajat, besar sudut C adalah?",
            options: ["60 derajat", "70 derajat", "50 derajat", "120 derajat"],
            answer: 0,
            explain: "Jumlah sudut segitiga 180, jadi C = 180 − 50 − 70 = 60 derajat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "aturan-kosinus",
    levelId: "aturan-aplikasi",
    order: 2,
    title: "Aturan Kosinus untuk Sisi dan Sudut",
    summary:
      "Dua jalan setapak berangkat dari satu pos dengan sudut tertentu. Berapa jarak ujung keduanya? Aturan sinus tak cukup, ayo cari pola lain dulu.",
    durationMin: 15,
    tags: ["trigonometri", "aturan kosinus", "segitiga sembarang", "jarak"],
    blocks: [
      {
        type: "paragraph",
        html: "Dari satu pos pendakian, dua jalur menanjak ke arah berbeda. Kamu tahu panjang kedua jalur dan sudut di pos antara keduanya, lalu ingin tahu jarak langsung antara dua puncak. Di sini aturan sinus macet, sebab kita tidak punya pasangan sisi dan sudut di depannya. Sebelum bertemu rumusnya, ayo selidiki dulu bagaimana jarak itu berubah saat sudutnya melebar.",
      },
      {
        type: "video",
        comp: "TrigonometriVideo",
        title: "Video: Saat Pythagoras Tidak Lagi Cukup",
        caption: "Untuk segitiga bukan siku-siku, ada koreksi tambahan pada teorema Pythagoras.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil dua tongkat sepanjang 5 dan 7 satuan, ujungnya disatukan. Atur sudut di antaranya: mulai dari sempit, lalu lebarkan. Ukur jarak antara dua ujung yang bebas. Saat sudut membesar, jarak ikut membesar. Saat sudut tepat 90 derajat, jaraknya pas sesuai Pythagoras. Di luar 90 derajat, ada selisih yang teratur. Pola inilah yang akan kita rumuskan.",
      },
      {
        type: "widget",
        widget: "SimulatorTrigonometri",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Jarak Ujung Dua Sisi (5 dan 7) saat Sudut Apit Membesar",
        unit: "satuan panjang",
        source: "ilustrasi edukatif",
        note: "Dihitung dengan c² = 5² + 7² − 2·5·7·cos C. Makin lebar sudut apit, makin jauh kedua ujung.",
        data: [
          { label: "60 derajat", value: 6.24, color: "#34d399" },
          { label: "90 derajat", value: 8.6, color: "#10b981" },
          { label: "120 derajat", value: 10.44, color: "#059669" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa ini berguna",
        html: "Saat sudut tepat 90 derajat, cos 90 = 0, dan rumus menyusut menjadi Pythagoras c² = a² + b². Jadi aturan kosinus adalah Pythagoras yang diperluas untuk segitiga sembarang. Satu rumus untuk semua segitiga.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua sisi segitiga a = 3 dan b = 4 mengapit sudut C = 90 derajat. Hitung c menggunakan c² = a² + b² − 2ab cos C, dengan cos 90 = 0.",
        answer: 5,
        tolerance: 0.05,
        prefix: "c = ",
        solution:
          "c² = 3² + 4² − 2·3·4·0 = 9 + 16 = 25, jadi c = <strong>5</strong>. Karena cos 90 = 0, rumus berubah menjadi Pythagoras.",
        hint: "cos 90 = 0, sehingga suku terakhir hilang.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan situasi segitiga dengan aturan yang paling tepat dipakai.",
        pairs: [
          { left: "Tahu dua sisi dan sudut apitnya", right: "Aturan kosinus" },
          { left: "Tahu ketiga sisi, mencari sudut", right: "Aturan kosinus" },
          { left: "Tahu sebuah sisi dan sudut di depannya", right: "Aturan sinus" },
          { left: "Segitiga siku-siku biasa", right: "Teorema Pythagoras" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Jarak antara dua puncak dari satu pos",
        html: "Dari pos, jalur ke puncak utara sepanjang 600 meter dan jalur ke puncak timur sepanjang 800 meter. Sudut di pos antara keduanya 120 derajat. Jarak langsung antar puncak: c² = 600² + 800² − 2·600·800·cos 120. Karena cos 120 = −0,5, maka c² = 360000 + 640000 − 960000·(−0,5) = 1.000.000 + 480.000 = 1.480.000, sehingga c = sekitar 1.217 meter. Tim SAR bisa merencanakan tali penghubung antar puncak tanpa mengukur langsung di tebing.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah melihat polanya, baru kita namai Aturan Kosinus: <strong>c² = a² + b² − 2ab cos C</strong>. Dipakai saat tahu dua sisi dan sudut apitnya, atau saat tahu ketiga sisi untuk mencari sudut. Bila C = 90 derajat, rumus ini kembali menjadi Pythagoras.",
      },
      {
        type: "takeaways",
        items: [
          "Aturan kosinus: c² = a² + b² − 2ab cos C.",
          "Dipakai bila tahu dua sisi dan sudut apitnya, atau ketiga sisi untuk mencari sudut.",
          "Saat sudut 90 derajat, cos 90 = 0 dan rumus menjadi Pythagoras.",
          "Sudut apit yang lebih lebar membuat sisi di depannya lebih panjang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Aturan kosinus yang benar adalah?",
            options: [
              "c² = a² + b² − 2ab cos C",
              "c = a + b − cos C",
              "c² = a² + b²",
              "c ÷ sin C = a ÷ sin A",
            ],
            answer: 0,
            explain: "Aturan kosinus: c² = a² + b² − 2ab cos C.",
          },
          {
            q: "Saat sudut apit C = 90 derajat, aturan kosinus menjadi?",
            options: ["c² = a² − b²", "c² = a² + b²", "c = a × b", "c = 2ab"],
            answer: 1,
            explain: "cos 90 = 0, sehingga suku −2ab cos C hilang dan tersisa Pythagoras.",
          },
          {
            q: "Aturan kosinus paling tepat dipakai saat diketahui?",
            options: [
              "Satu sisi dan sudut di depannya",
              "Dua sudut saja",
              "Dua sisi dan sudut apitnya",
              "Tinggi segitiga saja",
            ],
            answer: 2,
            explain: "Dengan dua sisi dan sudut apit, sisi ketiga dapat dihitung langsung.",
          },
          {
            q: "Jika a = 3, b = 4, dan C = 90 derajat, maka c sama dengan?",
            options: ["7", "5", "12", "1"],
            answer: 1,
            explain: "c² = 9 + 16 = 25, jadi c = 5.",
          },
          {
            q: "Nilai cos 120 derajat yang dipakai dalam perhitungan adalah?",
            options: ["0,5", "−0,5", "1", "0"],
            answer: 1,
            explain: "cos 120 derajat = −0,5, sehingga suku terakhir menambah panjang sisi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "luas-segitiga-dengan-trigonometri",
    levelId: "aturan-aplikasi",
    order: 3,
    title: "Luas Segitiga dengan Trigonometri",
    summary:
      "Sepetak lahan berbentuk segitiga, tetapi tinggi tegaknya sulit diukur di medan miring. Bisakah luasnya dihitung hanya dari dua sisi dan sudutnya?",
    durationMin: 13,
    tags: ["trigonometri", "luas segitiga", "sinus", "lahan"],
    blocks: [
      {
        type: "paragraph",
        html: "Seorang petani punya lahan segitiga. Rumus luas yang ia hafal, setengah alas kali tinggi, butuh tinggi tegak lurus yang sulit diukur di tanah miring. Tetapi ia tahu panjang dua sisi dan sudut di antaranya. Sebelum bertemu rumus barunya, ayo selidiki dulu hubungan antara tinggi segitiga dan sinus sudut.",
      },
      {
        type: "video",
        comp: "TrigonometriVideo",
        title: "Video: Tinggi Tersembunyi di Balik Sinus",
        caption: "Tinggi sebuah segitiga bisa ditemukan dari sebuah sisi dikali sinus sudutnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gambar segitiga dengan dua sisi a dan b yang mengapit sudut C. Tarik garis tinggi dari salah satu ujung. Perhatikan, tinggi itu sama dengan b × sin C. Karena luas adalah setengah alas kali tinggi, coba ganti tinggi dengan b × sin C. Sebuah rumus luas yang rapi mulai terlihat.",
      },
      {
        type: "widget",
        widget: "SimulatorTrigonometri",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Luas Segitiga Bersisi 6 dan 8 saat Sudut Apit Berubah",
        unit: "satuan luas",
        source: "ilustrasi edukatif",
        note: "Dihitung dengan luas = 1/2 · 6 · 8 · sin C. Luas terbesar saat sudut apit 90 derajat.",
        data: [
          { label: "30 derajat", value: 12, color: "#34d399" },
          { label: "90 derajat", value: 24, color: "#10b981" },
          { label: "150 derajat", value: 12, color: "#059669" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa ini berguna",
        html: "Dengan rumus ini, luas dihitung tanpa pernah mengukur tinggi tegak lurus. Cukup dua sisi dan sudut di antaranya. Luas paling besar saat sudut apit 90 derajat, karena sin 90 = 1.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah segitiga punya dua sisi a = 6 dan b = 8 yang mengapit sudut C = 30 derajat. Hitung luasnya dengan luas = 1/2 × a × b × sin C, dan sin 30 = 0,5.",
        answer: 12,
        tolerance: 0.1,
        suffix: " satuan luas",
        solution:
          "Luas = 1/2 × 6 × 8 × sin 30 = 1/2 × 48 × 0,5 = <strong>12</strong> satuan luas.",
        hint: "Luas = 1/2 × a × b × sin C, dengan sin 30 = 0,5.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan apakah luas segitiga bisa dihitung langsung dengan rumus 1/2 ab sin C dari data berikut.",
        buckets: ["Bisa langsung", "Belum bisa langsung"],
        items: [
          { text: "Dua sisi dan sudut apitnya diketahui", bucket: "Bisa langsung" },
          { text: "Sisi 10, sisi 12, dan sudut antara keduanya 40 derajat", bucket: "Bisa langsung" },
          { text: "Hanya ketiga sudut diketahui", bucket: "Belum bisa langsung" },
          { text: "Hanya satu sisi dan satu sudut diketahui", bucket: "Belum bisa langsung" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menaksir luas lahan miring",
        html: "Petani mengukur dua sisi lahan, 40 meter dan 50 meter, dengan sudut di antaranya 60 derajat. Luas = 1/2 × 40 × 50 × sin 60 = 1/2 × 2000 × 0,866 = sekitar 866 meter persegi. Ia mendapat luas yang cukup akurat tanpa harus memasang patok tegak lurus di tanah yang miring dan tidak rata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengganti tinggi dengan b × sin C, lahirlah rumus luas: <strong>Luas = 1/2 × a × b × sin C</strong>, dengan a dan b dua sisi yang mengapit sudut C. Rumus ini bekerja untuk segitiga apa pun.",
      },
      {
        type: "takeaways",
        items: [
          "Luas segitiga = 1/2 × a × b × sin C, dengan C sudut apit kedua sisi.",
          "Rumus ini tidak butuh tinggi tegak lurus yang sulit diukur.",
          "Luas terbesar dicapai saat sudut apit 90 derajat, karena sin 90 = 1.",
          "Cukup dua sisi dan sudut di antaranya untuk menghitung luas.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus luas segitiga dengan trigonometri adalah?",
            options: [
              "Luas = a × b × sin C",
              "Luas = 1/2 × a × b × sin C",
              "Luas = 1/2 × a × b × cos C",
              "Luas = a + b + sin C",
            ],
            answer: 1,
            explain: "Luas = 1/2 × a × b × sin C, dengan C sudut apit a dan b.",
          },
          {
            q: "Sudut C harus berupa sudut?",
            options: [
              "Sudut apit antara sisi a dan b",
              "Sudut di depan sisi a",
              "Sudut siku-siku saja",
              "Sudut terkecil",
            ],
            answer: 0,
            explain: "Sisi a dan b harus mengapit sudut C yang dipakai.",
          },
          {
            q: "Dengan a = 6, b = 8, dan C = 30 derajat, luasnya adalah?",
            options: ["24", "48", "12", "6"],
            answer: 2,
            explain: "Luas = 1/2 × 6 × 8 × 0,5 = 12.",
          },
          {
            q: "Untuk a dan b tetap, luas segitiga paling besar saat sudut apitnya?",
            options: ["30 derajat", "60 derajat", "90 derajat", "150 derajat"],
            answer: 2,
            explain: "sin 90 = 1 adalah nilai sinus terbesar, jadi luasnya maksimum.",
          },
          {
            q: "Keunggulan rumus 1/2 ab sin C dibanding 1/2 alas kali tinggi adalah?",
            options: [
              "Lebih lambat",
              "Tidak perlu mengukur tinggi tegak lurus",
              "Hanya untuk segitiga siku-siku",
              "Butuh ketiga sudut",
            ],
            answer: 1,
            explain: "Cukup dua sisi dan sudut apit, tanpa mengukur tinggi tegak lurus.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "aplikasi-navigasi-dan-survei",
    levelId: "aturan-aplikasi",
    order: 4,
    title: "Aplikasi Navigasi dan Survei",
    summary:
      "Bagaimana surveyor mengukur lebar sungai tanpa menyeberanginya, dan kapal menentukan posisinya di laut lepas? Aturan sinus dan kosinus turun ke lapangan.",
    durationMin: 15,
    tags: ["trigonometri", "navigasi", "survei", "triangulasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Seorang surveyor harus tahu lebar sungai yang deras, tetapi tak mungkin merentangkan meteran ke seberang. Seorang nakhoda harus tahu posisinya hanya dari dua arah pandang ke menara pantai. Keduanya memakai cara yang sama, yaitu membentuk segitiga dari hal yang bisa diukur, lalu menghitung sisi yang tidak bisa dijangkau. Sebelum melihat rumus apa yang dipakai, ayo pahami dulu cara kerja triangulasi.",
      },
      {
        type: "video",
        comp: "TrigonometriVideo",
        title: "Video: Triangulasi di Lapangan",
        caption: "Mengukur sebuah garis dasar dan dua sudut sudah cukup untuk menentukan jarak yang jauh.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan kamu di tepi sungai. Pohon di seberang menjadi titik sasaran. Berjalanlah menyusuri tepi sejauh 50 meter, itu garis dasar yang bisa diukur. Dari kedua ujung garis dasar, ukur sudut pandang ke pohon. Sekarang kamu punya satu sisi dan dua sudut, cukup untuk menghitung jarak ke seberang. Tidak perlu basah sedikit pun.",
      },
      {
        type: "widget",
        widget: "SimulatorTrigonometri",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa ini berguna",
        html: "Triangulasi memilih aturan yang pas dengan data lapangan. Bila yang terukur sebuah sisi dan dua sudut, pakai aturan sinus. Bila yang terukur dua sisi dan sudut apitnya, pakai aturan kosinus. Lapangan menentukan rumusnya, bukan sebaliknya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Garis dasar di tepi sungai panjangnya 50 meter. Sudut pandang ke pohon dari satu ujung 90 derajat dan dari ujung lain 45 derajat, sehingga sudut di pohon 45 derajat. Jarak dari ujung pertama ke pohon = 50 × sin 45 ÷ sin 45. Berapa meter?",
        answer: 50,
        tolerance: 0.5,
        suffix: " meter",
        solution:
          "Karena sudut di pohon sama dengan sudut pandang (45 derajat), jaraknya = 50 × sin 45 ÷ sin 45 = <strong>50</strong> meter. Aturan sinus menyelesaikannya hanya dari satu sisi dan dua sudut.",
        hint: "Pakai aturan sinus: jarak = garis dasar × sin sudut ÷ sin sudut di depan garis dasar.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan situasi survei atau navigasi dengan aturan yang tepat.",
        pairs: [
          { left: "Garis dasar dan dua sudut ke sasaran", right: "Aturan sinus" },
          { left: "Dua lintasan kapal dan sudut belokannya", right: "Aturan kosinus" },
          { left: "Dua sisi lahan dan sudut apit, mencari luas", right: "Luas = 1/2 ab sin C" },
          { left: "Tiga sisi diketahui, mencari sebuah sudut", right: "Aturan kosinus" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Posisi kapal dari dua menara pantai",
        html: "Sebuah kapal melihat dua menara pantai yang jaraknya 4 kilometer satu sama lain di sepanjang garis pantai. Sudut pandang dari kapal ke menara kiri membentuk 80 derajat terhadap garis pantai, dan ke menara kanan 60 derajat, sehingga sudut di kapal = 180 − 80 − 60 = 40 derajat. Jarak kapal ke menara kanan = 4 × sin 80 ÷ sin 40 = 4 × 0,985 ÷ 0,643 = sekitar 6,13 kilometer. Dengan dua arah pandang, nakhoda mengunci posisinya di laut lepas tanpa sinyal satelit.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Tidak ada rumus baru di sini, yang ada adalah memilih alat yang tepat. <strong>Aturan sinus (a ÷ sin A = b ÷ sin B)</strong> untuk data sisi dan sudut di depannya, <strong>aturan kosinus (c² = a² + b² − 2ab cos C)</strong> untuk dua sisi dan sudut apit. Triangulasi mengubah pengukuran yang mustahil menjadi sebuah segitiga yang bisa dihitung.",
      },
      {
        type: "takeaways",
        items: [
          "Triangulasi mengubah jarak tak terjangkau menjadi segitiga yang terukur.",
          "Garis dasar dan dua sudut diselesaikan dengan aturan sinus.",
          "Dua sisi dan sudut apit diselesaikan dengan aturan kosinus.",
          "Data lapangan menentukan aturan mana yang dipakai.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Triangulasi pada dasarnya bekerja dengan cara?",
            options: [
              "Menebak jarak",
              "Membentuk segitiga dari hal yang bisa diukur",
              "Mengukur langsung dengan meteran",
              "Menghafal peta",
            ],
            answer: 1,
            explain: "Triangulasi menghitung sisi tak terjangkau lewat segitiga yang terukur.",
          },
          {
            q: "Bila yang terukur sebuah garis dasar dan dua sudut, aturan yang dipakai?",
            options: ["Aturan kosinus", "Aturan sinus", "Pythagoras", "Rumus luas"],
            answer: 1,
            explain: "Sebuah sisi dengan dua sudut cocok untuk aturan sinus.",
          },
          {
            q: "Bila yang terukur dua sisi dan sudut apitnya, aturan yang dipakai?",
            options: ["Aturan sinus", "Aturan kosinus", "Hanya sin C", "Tidak ada"],
            answer: 1,
            explain: "Dua sisi dan sudut apit diselesaikan dengan aturan kosinus.",
          },
          {
            q: "Kapal melihat dua menara dengan sudut pandang 80 dan 60 derajat. Sudut di kapal adalah?",
            options: ["20 derajat", "40 derajat", "140 derajat", "60 derajat"],
            answer: 1,
            explain: "Sudut di kapal = 180 − 80 − 60 = 40 derajat.",
          },
          {
            q: "Manfaat utama triangulasi dalam survei adalah?",
            options: [
              "Mengukur tanpa menjangkau objek secara langsung",
              "Mengganti kalkulator",
              "Menggambar lingkaran",
              "Menghitung waktu",
            ],
            answer: 0,
            explain: "Triangulasi menentukan jarak ke titik yang mustahil dijangkau langsung.",
          },
        ],
      },
    ],
  },
];
