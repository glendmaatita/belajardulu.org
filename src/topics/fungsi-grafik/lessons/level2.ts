import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "garis-lurus-dari-tabel",
    levelId: "fungsi-linear",
    order: 1,
    title: "Garis Lurus dari Tabel Nilai",
    summary:
      "Sebelum kenal rumus, kita susun tabel tarif ojek sampai polanya membentuk garis lurus sendiri.",
    durationMin: 12,
    tags: ["fungsi linear", "tabel", "garis lurus", "perubahan tetap"],
    blocks: [
      {
        type: "paragraph",
        html: "Matematika bukan sekadar berhitung, melainkan menangkap pola. Bayangkan tarif ojek online: jarak 1 km dikenai Rp8.000, 2 km Rp11.000, 3 km Rp14.000. Ada irama tersembunyi di sini. Ayo kita buru polanya dulu sebelum menyentuh rumus apa pun.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Saat Perubahan Selalu Tetap",
        caption: "Ketika nilai bertambah dengan langkah yang sama, jejaknya membentuk garis lurus.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lihat tabelnya: dari 1 km ke 2 km biaya naik Rp3.000, dari 2 km ke 3 km naik Rp3.000 lagi. Kenaikannya selalu sama. Coba tebak biaya untuk 4 km tanpa rumus apa pun. Benar, 14.000 + 3.000 = Rp17.000. Kamu baru saja meneruskan sebuah pola linear.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tarif Ojek terhadap Jarak Tempuh",
        unit: "ribu rupiah",
        source: "ilustrasi edukatif",
        note: "Tiap jarak bertambah 1 km, biaya naik tetap Rp3.000. Langkah yang sama membuat titik-titik berbaris pada satu garis lurus.",
        data: [
          { label: "1 km", value: 8, color: "#34d399" },
          { label: "2 km", value: 11, color: "#34d399" },
          { label: "3 km", value: 14, color: "#34d399" },
          { label: "4 km", value: 17, color: "#34d399" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Ciri hubungan linear",
        html: "Sebuah hubungan disebut <strong>linear</strong> bila tiap kali masukan naik satu langkah, keluaran berubah dengan jumlah yang <strong>tetap</strong>. Tabel dengan selisih tetap selalu menggambar garis lurus.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan pola tarif yang sama (mulai Rp8.000 di 1 km, naik Rp3.000 tiap km), berapa biaya untuk 6 km? Jawab dalam ribuan rupiah.",
        answer: 23,
        suffix: " ribu",
        solution:
          "Dari 1 km ke 6 km ada 5 langkah, tiap langkah +3.000. Jadi 8.000 + 5 × 3.000 = 8.000 + 15.000 = <strong>Rp23.000</strong>.",
        hint: "Hitung berapa langkah dari 1 km ke 6 km, lalu kalikan kenaikan tetapnya.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana tabel yang berpola linear (selisih keluaran tetap)?",
        buckets: ["Linear", "Bukan linear"],
        items: [
          { text: "x: 1,2,3,4 menghasilkan 5,8,11,14", bucket: "Linear" },
          { text: "x: 1,2,3,4 menghasilkan 2,4,8,16", bucket: "Bukan linear" },
          { text: "x: 0,1,2,3 menghasilkan 10,7,4,1", bucket: "Linear" },
          { text: "x: 1,2,3,4 menghasilkan 1,4,9,16", bucket: "Bukan linear" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tabungan mingguan",
        html: "Sinta menabung dengan rutin. Minggu ke-1 saldonya Rp20.000, minggu ke-2 Rp35.000, minggu ke-3 Rp50.000. Selisihnya selalu Rp15.000 tiap minggu, jadi ini hubungan linear. Tanpa rumus, kita bisa meneruskan: minggu ke-4 pasti Rp65.000. Pola tetap membuat saldonya berbaris di satu garis lurus.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menyusun tabel dan melihat selisih tetap, baru kita rangkum: bila keluaran berubah <strong>tetap</strong> setiap masukan naik satu, hubungannya <strong>linear</strong> dan grafiknya garis lurus. Nilai keluaran bisa ditulis sebagai <strong>nilai awal + (perubahan tetap × banyak langkah)</strong>. Pola itulah cikal bakal persamaan garis.",
      },
      {
        type: "takeaways",
        items: [
          "Hubungan linear punya selisih keluaran yang tetap untuk tiap langkah masukan.",
          "Tabel dengan selisih tetap selalu membentuk garis lurus pada grafik.",
          "Pola dapat diteruskan tanpa rumus dengan menambah perubahan tetap.",
          "Tidak semua tabel linear; bila selisihnya berubah, grafiknya tidak lurus.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sebuah hubungan disebut linear jika?",
            options: [
              "Keluaran berubah tetap tiap masukan naik satu",
              "Keluaran berubah makin cepat",
              "Keluaran selalu nol",
              "Masukan tidak berubah",
            ],
            answer: 0,
            explain: "Ciri linear adalah perubahan keluaran yang tetap untuk tiap langkah masukan.",
          },
          {
            q: "Tabel x: 1,2,3 dengan keluaran 4,7,10 punya selisih tetap?",
            options: ["2", "3", "4", "7"],
            answer: 1,
            explain: "7 - 4 = 3 dan 10 - 7 = 3, selisih tetapnya 3.",
          },
          {
            q: "Grafik dari tabel berselisih tetap berbentuk?",
            options: ["Garis lurus", "Parabola", "Lingkaran", "Zig-zag"],
            answer: 0,
            explain: "Selisih tetap membuat titik-titik berbaris pada satu garis lurus.",
          },
          {
            q: "Mana tabel yang BUKAN linear?",
            options: [
              "5, 8, 11, 14",
              "2, 4, 8, 16",
              "10, 7, 4, 1",
              "0, 3, 6, 9",
            ],
            answer: 1,
            explain: "2,4,8,16 selisihnya 2,4,8 (berubah), jadi bukan linear melainkan menggandakan.",
          },
          {
            q: "Mulai dari 6 dan naik tetap 4, nilai pada langkah ketiga (setelah 3 langkah) adalah?",
            options: ["10", "14", "18", "22"],
            answer: 2,
            explain: "6 + 3 × 4 = 6 + 12 = 18.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "memahami-gradien",
    levelId: "fungsi-linear",
    order: 2,
    title: "Memahami Gradien: Seberapa Curam Garisnya",
    summary:
      "Kita rasakan dulu curamnya tanjakan, baru menamai angkanya: gradien sebagai perubahan y dibagi perubahan x.",
    durationMin: 13,
    tags: ["gradien", "kemiringan", "linear", "laju perubahan"],
    blocks: [
      {
        type: "paragraph",
        html: "Naik tangga landai terasa ringan, naik tangga curam bikin ngos-ngosan. Bedanya ada pada kemiringan. Garis lurus pun punya rasa curam yang bisa diukur. Ayo kita rasakan dulu, baru beri nama angkanya.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Mengukur Kemiringan",
        caption: "Naik berapa untuk tiap langkah ke kanan? Itulah inti kemiringan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lihat garis dengan nilai 1, 3, 5, 7, 9 saat x = 0, 1, 2, 3, 4. Tiap melangkah satu ke kanan, garis naik 2 ke atas. Garis lain naik 5 tiap langkah, ia terasa jauh lebih curam. Coba bandingkan: makin besar kenaikan per langkah, makin curam garisnya. Itulah yang sebentar lagi kita namai.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Sebuah Garis yang Naik Tetap 2 per Langkah",
        unit: "nilai y",
        source: "ilustrasi edukatif",
        note: "Dari x=0 ke x=4, tiap langkah ke kanan garis naik 2. Naik 2 untuk maju 1 inilah ukuran kemiringannya.",
        data: [
          { label: "x=0", value: 1, color: "#2dd4bf" },
          { label: "x=1", value: 3, color: "#2dd4bf" },
          { label: "x=2", value: 5, color: "#2dd4bf" },
          { label: "x=3", value: 7, color: "#2dd4bf" },
          { label: "x=4", value: 9, color: "#2dd4bf" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Arah kemiringan",
        html: "Bila garis naik dari kiri ke kanan, kemiringannya <strong>positif</strong>. Bila turun, kemiringannya <strong>negatif</strong>. Garis mendatar punya kemiringan <strong>nol</strong> karena tidak naik maupun turun.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah garis melewati titik (2, 5) dan (6, 17). Berapa gradien (kemiringan) garis itu?",
        answer: 3,
        solution:
          "Gradien = perubahan y dibagi perubahan x = (17 - 5) / (6 - 2) = 12 / 4 = <strong>3</strong>. Artinya tiap maju 1 ke kanan, garis naik 3.",
        hint: "Bagi selisih nilai y dengan selisih nilai x.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan pasangan titik dengan nilai gradiennya.",
        pairs: [
          { left: "(0,0) dan (1,2)", right: "Gradien 2" },
          { left: "(0,0) dan (2,2)", right: "Gradien 1" },
          { left: "(0,4) dan (1,1)", right: "Gradien -3" },
          { left: "(0,5) dan (3,5)", right: "Gradien 0" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan arah kemiringan tiap garis.",
        buckets: ["Naik (positif)", "Turun (negatif)", "Datar (nol)"],
        items: [
          { text: "Melewati (0,1) lalu (2,7)", bucket: "Naik (positif)" },
          { text: "Melewati (0,8) lalu (4,0)", bucket: "Turun (negatif)" },
          { text: "Melewati (0,3) lalu (5,3)", bucket: "Datar (nol)" },
          { text: "Melewati (1,2) lalu (3,10)", bucket: "Naik (positif)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Jalur sepeda menanjak",
        html: "Sebuah jalur sepeda naik 60 meter ketinggian sepanjang 400 meter mendatar. Kemiringannya = 60 / 400 = 0,15. Jalur lain naik 60 meter tetapi hanya sepanjang 200 meter mendatar, kemiringannya 60 / 200 = 0,3, dua kali lebih curam. Angka gradien membuat rasa curam bisa dibandingkan dengan adil.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan curam dan membandingkannya, baru kita beri nama: kemiringan garis disebut <strong>gradien</strong>, dilambangkan <strong>m</strong>. Untuk dua titik (x1, y1) dan (x2, y2), <strong>m = (y2 - y1) / (x2 - x1)</strong>, yaitu perubahan y dibagi perubahan x. Pada garis lurus, gradien selalu sama di mana pun diukur.",
      },
      {
        type: "takeaways",
        items: [
          "Gradien (m) mengukur kemiringan garis: perubahan y dibagi perubahan x.",
          "Gradien positif berarti garis naik, negatif berarti turun, nol berarti datar.",
          "Pada garis lurus, gradien tetap sama di setiap bagian garis.",
          "Makin besar nilai gradien, makin curam garisnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Gradien sebuah garis dihitung dengan?",
            options: [
              "Perubahan y dibagi perubahan x",
              "Perubahan x dibagi perubahan y",
              "y dikali x",
              "y ditambah x",
            ],
            answer: 0,
            explain: "Gradien m = (y2 - y1) / (x2 - x1), yaitu perubahan y per perubahan x.",
          },
          {
            q: "Garis melalui (1,2) dan (4,11). Gradiennya?",
            options: ["2", "3", "4", "9"],
            answer: 1,
            explain: "(11 - 2) / (4 - 1) = 9 / 3 = 3.",
          },
          {
            q: "Garis mendatar punya gradien?",
            options: ["1", "0", "Tak terhingga", "-1"],
            answer: 1,
            explain: "Garis datar tidak naik maupun turun, jadi perubahan y = 0 dan gradiennya 0.",
          },
          {
            q: "Gradien negatif menandakan garis?",
            options: ["Naik ke kanan", "Turun ke kanan", "Datar", "Tegak"],
            answer: 1,
            explain: "Gradien negatif berarti nilai y mengecil saat x membesar, garis turun.",
          },
          {
            q: "Garis A naik 4 tiap langkah, garis B naik 2 tiap langkah. Maka?",
            options: [
              "Garis A lebih curam",
              "Garis B lebih curam",
              "Sama curam",
              "Keduanya datar",
            ],
            answer: 0,
            explain: "Kenaikan per langkah lebih besar berarti gradien lebih besar dan garis lebih curam.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "titik-potong-dan-persamaan-garis",
    levelId: "fungsi-linear",
    order: 3,
    title: "Titik Potong dan Persamaan Garis",
    summary:
      "Dari pola tabel kita temukan dua angka kunci, gradien dan titik awal, sampai persamaan y = mx + c muncul sendiri.",
    durationMin: 14,
    tags: ["persamaan garis", "titik potong", "y=mx+c", "linear"],
    blocks: [
      {
        type: "paragraph",
        html: "Setiap garis lurus menyimpan dua rahasia: seberapa curam ia naik, dan dari mana ia berangkat. Begitu dua rahasia itu terbaca, kita bisa menebak nilai garis di titik mana pun. Ayo gali dua angka itu dari pola dulu.",
      },
      {
        type: "video",
        comp: "FungsiVideo",
        title: "Video: Dua Angka Penentu Garis",
        caption: "Kemiringan dan titik awal cukup untuk menggambarkan seluruh garis.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Perhatikan tabel: x = 0, 1, 2, 3 memberi y = 1, 3, 5, 7. Tiap langkah y naik 2, itu kemiringannya. Lalu di x = 0, nilainya 1. Angka 1 adalah titik berangkat garis saat menyentuh sumbu tegak. Dengan dua angka ini, 2 dan 1, kamu bisa menebak y untuk x berapa pun. Coba: di x = 5, y = 1 + 2 × 5 = 11.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Garis dengan Kemiringan 2 dan Titik Awal 1",
        unit: "nilai y",
        source: "ilustrasi edukatif",
        note: "Garis memotong sumbu tegak di y = 1 saat x = 0, lalu naik 2 tiap langkah. Dua angka itulah yang menentukan seluruh garis.",
        data: [
          { label: "x=0", value: 1, color: "#14b8a6" },
          { label: "x=1", value: 3, color: "#14b8a6" },
          { label: "x=2", value: 5, color: "#14b8a6" },
          { label: "x=3", value: 7, color: "#14b8a6" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu titik potong sumbu y",
        html: "<strong>Titik potong sumbu y</strong> adalah nilai garis saat x = 0, yaitu tempat garis memotong sumbu tegak. Inilah nilai awal atau titik berangkat garis sebelum kemiringan mulai bekerja.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah garis punya kemiringan 4 dan memotong sumbu y di 3. Berapa nilai y saat x = 5?",
        answer: 23,
        solution:
          "Mulai dari titik awal 3, lalu naik 4 sebanyak 5 langkah: 3 + 4 × 5 = 3 + 20 = <strong>23</strong>. Dengan persamaan, y = 4x + 3 sehingga y = 4(5) + 3 = 23.",
        hint: "Mulai dari titik potong sumbu y, lalu tambahkan kemiringan dikali x.",
      },
      {
        type: "calcExercise",
        prompt:
          "Garis melalui (0, 2) dan (3, 14). Berapa kemiringannya?",
        answer: 4,
        solution:
          "Kemiringan = (14 - 2) / (3 - 0) = 12 / 3 = <strong>4</strong>. Karena melalui (0, 2), titik potong sumbu y-nya 2, jadi persamaannya y = 4x + 2.",
        hint: "Bagi selisih y dengan selisih x; titik awal terbaca saat x = 0.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan persamaan garis dengan kemiringan dan titik potongnya.",
        pairs: [
          { left: "y = 2x + 5", right: "Kemiringan 2, potong y di 5" },
          { left: "y = -3x + 1", right: "Kemiringan -3, potong y di 1" },
          { left: "y = x", right: "Kemiringan 1, potong y di 0" },
          { left: "y = 7", right: "Kemiringan 0, potong y di 7" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sewa skuter listrik",
        html: "Penyewaan skuter menetapkan biaya buka Rp5.000, lalu Rp2.000 tiap menit. Biaya buka adalah titik berangkat (saat 0 menit) dan Rp2.000 per menit adalah kemiringannya. Maka total biaya = 2.000 × menit + 5.000. Untuk 10 menit: 2.000 × 10 + 5.000 = Rp25.000. Dua angka, kemiringan dan titik awal, sudah cukup memodelkan seluruh tarif.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menemukan kemiringan dan titik berangkat dari pola, baru rumusnya kita tuliskan: <strong>y = mx + c</strong>. Di sini <strong>m</strong> adalah gradien (kemiringan) dan <strong>c</strong> adalah titik potong sumbu y (nilai saat x = 0). Persamaan ini bukan untuk dihafal lebih dulu, melainkan rangkuman dari pola yang sudah kita amati.",
      },
      {
        type: "takeaways",
        items: [
          "Persamaan garis lurus berbentuk y = mx + c.",
          "m adalah gradien atau kemiringan garis.",
          "c adalah titik potong sumbu y, yaitu nilai y saat x = 0.",
          "Dengan m dan c, nilai garis di titik mana pun bisa dihitung.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada persamaan y = mx + c, huruf c menyatakan?",
            options: [
              "Gradien",
              "Titik potong sumbu y",
              "Nilai x",
              "Kemiringan negatif",
            ],
            answer: 1,
            explain: "c adalah titik potong sumbu y, nilai y ketika x = 0.",
          },
          {
            q: "Garis y = 3x + 2 memotong sumbu y di?",
            options: ["3", "2", "5", "0"],
            answer: 1,
            explain: "Saat x = 0, y = 3(0) + 2 = 2, jadi memotong sumbu y di 2.",
          },
          {
            q: "Garis melalui (0,4) dengan kemiringan 5. Persamaannya?",
            options: ["y = 4x + 5", "y = 5x + 4", "y = 5x - 4", "y = x + 9"],
            answer: 1,
            explain: "Kemiringan m = 5 dan titik potong c = 4, jadi y = 5x + 4.",
          },
          {
            q: "Pada y = 2x + 1, nilai y saat x = 4 adalah?",
            options: ["7", "8", "9", "10"],
            answer: 2,
            explain: "y = 2(4) + 1 = 8 + 1 = 9.",
          },
          {
            q: "Garis y = -2x + 6. Kemiringannya?",
            options: ["6", "-2", "2", "-6"],
            answer: 1,
            explain: "Koefisien x adalah m, yaitu -2, sehingga garis turun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menggambar-dan-membaca-garis",
    levelId: "fungsi-linear",
    order: 4,
    title: "Menggambar dan Membaca Garis",
    summary:
      "Kita main tebak nilai dari grafik dulu, lalu sadar bahwa dua titik saja sudah cukup untuk menggambar garis lurus.",
    durationMin: 13,
    tags: ["grafik", "menggambar garis", "membaca grafik", "linear"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah garis lurus pada grafik bisa bercerita banyak: berapa nilai sekarang, berapa nanti, dan kapan mencapai angka tertentu. Sebelum membahas cara menggambarnya, ayo kita coba membaca cerita sebuah garis lebih dulu.",
      },
      {
        type: "video",
        comp: "FungsiVideo",
        title: "Video: Membaca Cerita Sebuah Garis",
        caption: "Setiap titik pada garis adalah pasangan nilai yang bisa dibaca langsung.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan grafik jarak tempuh mobil terhadap waktu: jam ke-0 di 0 km, jam ke-1 di 60 km, jam ke-2 di 120 km, jam ke-3 di 180 km. Tanpa rumus, baca saja: di jam ke-2 sudah 120 km. Mau tahu jam ke-4? Teruskan polanya, 240 km. Garis lurus membuat nilai di antara dan di luar titik mudah ditebak.",
      },
      {
        type: "widget",
        widget: "SimulatorKecepatan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Jarak Tempuh Mobil terhadap Waktu",
        unit: "kilometer",
        source: "ilustrasi edukatif",
        note: "Mobil melaju tetap 60 km tiap jam, jadi titik-titiknya berbaris pada garis lurus dan nilai antar jam mudah dibaca.",
        data: [
          { label: "Jam 0", value: 0, color: "#10b981" },
          { label: "Jam 1", value: 60, color: "#10b981" },
          { label: "Jam 2", value: 120, color: "#10b981" },
          { label: "Jam 3", value: 180, color: "#10b981" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Cukup dua titik",
        html: "Untuk menggambar sebuah garis lurus, kita hanya perlu <strong>dua titik</strong>. Tandai keduanya pada grafik, hubungkan dengan penggaris, lalu perpanjang. Titik ketiga hanya berguna sebagai pemeriksa, bukan keharusan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari grafik mobil di atas (60 km tiap jam, mulai 0), berapa jarak tempuh pada jam ke-5?",
        answer: 300,
        suffix: " km",
        solution:
          "Tiap jam menambah 60 km dari titik awal 0: 60 × 5 = <strong>300 km</strong>. Membaca grafik berarti meneruskan garis sampai jam ke-5.",
        hint: "Kalikan kecepatan tetap dengan jumlah jam.",
      },
      {
        type: "classifyExercise",
        prompt: "Untuk garis y = 2x - 1, kelompokkan titik yang terletak PADA garis dan yang TIDAK.",
        buckets: ["Pada garis", "Tidak pada garis"],
        items: [
          { text: "(0, -1)", bucket: "Pada garis" },
          { text: "(2, 3)", bucket: "Pada garis" },
          { text: "(1, 5)", bucket: "Tidak pada garis" },
          { text: "(3, 5)", bucket: "Pada garis" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan langkah menggambar garis dengan kegunaannya.",
        pairs: [
          { left: "Tandai titik potong sumbu y", right: "Tempat garis berangkat saat x = 0" },
          { left: "Pakai gradien naik atau turun", right: "Menentukan arah dan curam garis" },
          { left: "Tandai titik kedua", right: "Cukup untuk membuat garis lurus" },
          { left: "Tarik garis menembus kedua titik", right: "Garis bisa diperpanjang dua arah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengisi tangki air",
        html: "Sebuah tangki sudah berisi 10 liter, lalu keran menambah 5 liter tiap menit. Titik awal di (0, 10) dan kemiringan 5 liter per menit. Tandai (0, 10) dan satu titik lagi, misalnya (4, 30), lalu hubungkan. Dari garis itu kita bisa membaca: kapan tangki mencapai 50 liter? Saat 5x + 10 = 50, berarti x = 8 menit. Menggambar dan membaca garis menjawab pertanyaan nyata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah lihai membaca dan menandai titik, baru kita rangkum caranya: untuk menggambar garis <strong>y = mx + c</strong>, mulai dari titik potong sumbu y di <strong>(0, c)</strong>, gunakan gradien <strong>m</strong> untuk menandai titik kedua (maju 1 ke kanan, naik atau turun sebesar m), lalu hubungkan. Membaca grafik berarti membalik proses: dari sumbu mendatar naik ke garis, lalu mendatar ke sumbu tegak untuk menemukan nilainya.",
      },
      {
        type: "takeaways",
        items: [
          "Cukup dua titik untuk menggambar sebuah garis lurus.",
          "Mulai dari titik potong sumbu y (0, c), lalu gunakan gradien untuk titik kedua.",
          "Membaca grafik berarti memasangkan nilai pada sumbu mendatar dengan sumbu tegak.",
          "Sebuah titik terletak pada garis bila pasangan nilainya memenuhi persamaan garis.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Berapa titik minimal yang dibutuhkan untuk menggambar garis lurus?",
            options: ["1", "2", "3", "4"],
            answer: 1,
            explain: "Dua titik sudah cukup; hubungkan dan perpanjang untuk mendapat garisnya.",
          },
          {
            q: "Untuk garis y = mx + c, titik pertama yang mudah ditandai adalah?",
            options: ["(0, c)", "(c, 0)", "(m, c)", "(1, 1)"],
            answer: 0,
            explain: "Saat x = 0, y = c, jadi titik (0, c) adalah titik potong sumbu y yang praktis.",
          },
          {
            q: "Apakah titik (2, 3) terletak pada garis y = 2x - 1?",
            options: ["Ya", "Tidak", "Tidak bisa ditentukan", "Hanya jika x = 0"],
            answer: 0,
            explain: "2(2) - 1 = 3, sesuai dengan nilai y, jadi titik itu ada pada garis.",
          },
          {
            q: "Mobil melaju 60 km tiap jam mulai dari 0. Jarak pada jam ke-3?",
            options: ["120 km", "150 km", "180 km", "240 km"],
            answer: 2,
            explain: "60 × 3 = 180 km.",
          },
          {
            q: "Tangki berisi 10 liter lalu bertambah 5 liter per menit. Kapan mencapai 50 liter?",
            options: ["6 menit", "8 menit", "10 menit", "12 menit"],
            answer: 1,
            explain: "5x + 10 = 50 memberi 5x = 40, jadi x = 8 menit.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "perpotongan-dua-garis",
    levelId: "fungsi-linear",
    order: 5,
    title: "Titik Potong Dua Garis: Mencari Titik Impas",
    summary:
      "Kita bandingkan dua paket pulsa yang sama-sama lurus, lalu temukan menit ajaib saat keduanya berbiaya sama persis.",
    durationMin: 14,
    tags: ["linear", "titik potong", "titik impas", "perbandingan"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua paket pulsa bersaing. Paket Hemat tanpa biaya tetap tapi Rp500 per menit. Paket Langganan menarik Rp10.000 di muka, lalu hanya Rp250 per menit. Yang mana lebih murah? Jawabannya tergantung seberapa lama kamu menelepon. Ayo selidiki dulu kapan keduanya berbalik unggul, sebelum menamai titik temunya.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Saat Dua Garis Bertemu",
        caption: "Dua garis dengan kemiringan berbeda pasti berpotongan di satu titik.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Hitung biaya keduanya. Untuk 20 menit: Hemat 500 × 20 = 10.000, Langganan 10.000 + 250 × 20 = 15.000, Hemat menang. Untuk 60 menit: Hemat 30.000, Langganan 25.000, kini Langganan menang. Pasti ada satu titik di tengah saat biayanya sama persis. Coba raba: di menit berapa keduanya seri?",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Selisih Biaya (Paket Langganan dikurangi Paket Hemat)",
        unit: "ribu rupiah",
        source: "ilustrasi edukatif",
        note: "Selisihnya menyusut sampai nol tepat di menit ke-40. Sebelum itu selisih positif (Hemat lebih murah), sesudahnya negatif (Langganan lebih murah). Titik nol itulah titik impas.",
        data: [
          { label: "0 mnt", value: 10, color: "#14b8a6" },
          { label: "20 mnt", value: 5, color: "#14b8a6" },
          { label: "40 mnt", value: 0, color: "#f97316" },
          { label: "60 mnt", value: -5, color: "#14b8a6" },
          { label: "80 mnt", value: -10, color: "#14b8a6" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Di titik potong, nilai keduanya sama",
        html: "Pada titik potong dua garis, kedua fungsi memberi <strong>keluaran yang sama untuk masukan yang sama</strong>. Untuk mencarinya, samakan kedua aturan: 500x = 10.000 + 250x. Dari sini selisih kemiringan (500 - 250 = 250) menutup jarak awal 10.000.",
      },
      {
        type: "calcExercise",
        prompt:
          "Samakan biaya kedua paket: 500x = 10.000 + 250x. Pada menit ke berapa biayanya sama (titik impas)?",
        answer: 40,
        suffix: " menit",
        solution:
          "500x - 250x = 10.000, jadi 250x = 10.000 dan x = 10.000 / 250 = <strong>40 menit</strong>. Itulah titik impasnya.",
        hint: "Kumpulkan suku x di satu ruas: 500x - 250x, lalu bagi dengan selisihnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa total biaya (rupiah) tiap paket tepat di titik impas (menit ke-40)?",
        answer: 20000,
        prefix: "Rp",
        solution:
          "Paket Hemat: 500 × 40 = 20.000. Paket Langganan: 10.000 + 250 × 40 = 10.000 + 10.000 = 20.000. Keduanya <strong>Rp20.000</strong>, persis sama, sebab inilah titik potongnya.",
        hint: "Masukkan 40 menit ke salah satu aturan; keduanya pasti memberi hasil sama.",
      },
      {
        type: "classifyExercise",
        prompt: "Untuk tiap lama pemakaian, paket mana yang lebih murah?",
        buckets: ["Paket Hemat lebih murah", "Paket Langganan lebih murah", "Biaya sama"],
        items: [
          { text: "Pemakaian 10 menit", bucket: "Paket Hemat lebih murah" },
          { text: "Pemakaian 20 menit", bucket: "Paket Hemat lebih murah" },
          { text: "Pemakaian 40 menit", bucket: "Biaya sama" },
          { text: "Pemakaian 60 menit", bucket: "Paket Langganan lebih murah" },
          { text: "Pemakaian 100 menit", bucket: "Paket Langganan lebih murah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memilih keanggotaan gym",
        html: "Sebuah gym menawarkan dua skema. Skema Bebas: Rp200.000 per bulan, sepuasnya. Skema Bayar Datang: Rp25.000 tiap kunjungan. Kapan keduanya seri? Samakan: 25.000 × n = 200.000, jadi n = 8 kunjungan. Kalau kamu datang kurang dari 8 kali sebulan, Bayar Datang lebih hemat; lebih dari 8 kali, Skema Bebas menang; tepat 8 kali, sama saja. Titik potong dua garis langsung menjawab keputusan sehari-hari.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah membandingkan dan menyamakan biaya, kita rangkum: <strong>titik potong dua garis</strong> adalah nilai masukan yang membuat kedua fungsi berkeluaran sama. Mencarinya berarti <strong>menyamakan kedua persamaan</strong> lalu menyelesaikan x. Dalam dunia nyata, titik ini sering disebut <strong>titik impas</strong>, batas saat satu pilihan berbalik lebih untung dari yang lain.",
      },
      {
        type: "takeaways",
        items: [
          "Titik potong dua garis adalah masukan yang membuat kedua fungsi berkeluaran sama.",
          "Mencarinya berarti menyamakan kedua persamaan lalu menyelesaikan x.",
          "Di kehidupan nyata titik ini disebut titik impas, batas berbaliknya keuntungan.",
          "Sebelum titik impas satu pilihan lebih murah, sesudahnya pilihan lain yang menang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada titik potong dua garis, kedua fungsi memberi?",
            options: [
              "Keluaran yang sama untuk masukan yang sama",
              "Masukan yang berbeda",
              "Keluaran yang selalu nol",
              "Kemiringan yang sama",
            ],
            answer: 0,
            explain: "Titik potong adalah tempat kedua garis bernilai sama.",
          },
          {
            q: "Untuk mencari titik potong y = 500x dan y = 10.000 + 250x kita?",
            options: [
              "Menyamakan kedua persamaan",
              "Menjumlahkan keduanya",
              "Mengabaikan salah satunya",
              "Mengalikan keduanya",
            ],
            answer: 0,
            explain: "Samakan 500x = 10.000 + 250x lalu selesaikan x.",
          },
          {
            q: "Hasil 250x = 10.000 memberi x sama dengan?",
            options: ["20", "30", "40", "50"],
            answer: 2,
            explain: "x = 10.000 / 250 = 40.",
          },
          {
            q: "Gym Rp200.000 per bulan vs Rp25.000 per kunjungan. Titik impasnya?",
            options: ["5 kunjungan", "8 kunjungan", "10 kunjungan", "20 kunjungan"],
            answer: 1,
            explain: "25.000 n = 200.000 memberi n = 8 kunjungan.",
          },
          {
            q: "Jika pemakaian jauh di atas titik impas pada contoh pulsa, paket mana yang lebih murah?",
            options: ["Paket Hemat", "Paket Langganan", "Selalu sama", "Tidak bisa ditentukan"],
            answer: 1,
            explain: "Di atas titik impas, biaya per menit yang lebih kecil (Langganan) menang.",
          },
        ],
      },
    ],
  },
];
