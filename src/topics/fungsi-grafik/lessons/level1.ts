import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "fungsi-mesin",
    levelId: "apa-itu-fungsi",
    order: 1,
    title: "Fungsi: Mesin Input dan Output",
    summary:
      "Sebelum menulis f(x), kita mainkan dulu mesin angka misterius sampai aturannya ketahuan.",
    durationMin: 12,
    tags: ["fungsi", "relasi", "input", "output"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan mesin ajaib: kamu masukkan angka 2, keluar 5. Masuk 3, keluar 7. Masuk 4, keluar 9. Sebelum bertemu notasi f(x), ayo tebak dulu aturan rahasia mesin ini lewat bermain.",
      },
      {
        type: "video",
        comp: "FungsiVideo",
        title: "Video: Fungsi adalah Mesin",
        caption: "Tiap masukan menghasilkan tepat satu keluaran.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Perhatikan pasangannya: 2 jadi 5, 3 jadi 7, 4 jadi 9. Tiap kali masukan naik 1, keluaran naik 2. Berarti angka dikali 2, lalu... masih kurang 1 dari keluaran. Aturannya: kali 2 tambah 1. Kamu baru saja menemukan sebuah fungsi.",
      },
      {
        type: "widget",
        widget: "SimulatorMesinFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Pasangan Masukan dan Keluaran Mesin",
        unit: "nilai keluaran",
        source: "ilustrasi edukatif",
        note: "Tiap masukan naik 1, keluaran naik tetap 2. Garis lurus menandakan hubungan yang teratur.",
        data: [
          { label: "x=1", value: 3, color: "#34d399" },
          { label: "x=2", value: 5, color: "#34d399" },
          { label: "x=3", value: 7, color: "#34d399" },
          { label: "x=4", value: 9, color: "#34d399" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Syarat sebuah fungsi",
        html: "Tidak semua hubungan adalah fungsi. Syaratnya: tiap masukan harus memberi <strong>tepat satu</strong> keluaran. Kalau satu masukan bisa memberi dua hasil berbeda, itu bukan fungsi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Mesin punya aturan kali 2 tambah 1. Jika dimasukkan angka 10, berapa keluarannya?",
        answer: 21,
        solution:
          "Kali 2 dulu: 10 × 2 = 20, lalu tambah 1 = <strong>21</strong>. Dengan notasi, f(x) = 2x + 1, maka f(10) = 21.",
        hint: "Ikuti aturannya: kalikan 2, lalu tambah 1.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana yang merupakan fungsi (tiap masukan tepat satu keluaran)?",
        buckets: ["Fungsi", "Bukan fungsi"],
        items: [
          { text: "Tiap orang dipasangkan dengan tanggal lahirnya", bucket: "Fungsi" },
          { text: "Tiap angka dipasangkan dengan dua akar kuadratnya", bucket: "Bukan fungsi" },
          { text: "Tiap mobil dipasangkan dengan nomor platnya", bucket: "Fungsi" },
          { text: "Satu masukan x=2 memberi hasil 5 dan juga 9", bucket: "Bukan fungsi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tarif parkir",
        html: "Sebuah tempat parkir menarik Rp3.000 untuk jam pertama, lalu Rp2.000 tiap jam berikutnya. Lama parkir adalah masukan, biaya adalah keluaran. Untuk 1 jam biayanya 3.000, untuk 3 jam 3.000 + 2(2.000) = 7.000. Tiap lama parkir memberi tepat satu biaya, jadi ini fungsi. Aturannya bisa ditulis biaya = 3.000 + 2.000 × (jam - 1).",
      },
      {
        type: "callout",
        tone: "key",
        title: "Notasi pun lahir di akhir",
        html: "Setelah memahami mesinnya, baru kita pakai notasi ringkas: <strong>f(x)</strong> berarti keluaran fungsi f untuk masukan x. Mesin kita tadi adalah <strong>f(x) = 2x + 1</strong>. Fungsi memetakan tiap masukan ke tepat satu keluaran.",
      },
      {
        type: "takeaways",
        items: [
          "Fungsi adalah aturan yang memetakan tiap masukan ke tepat satu keluaran.",
          "Notasi f(x) berarti keluaran fungsi untuk masukan x.",
          "Jika satu masukan memberi lebih dari satu hasil, itu bukan fungsi.",
          "Banyak hal sehari-hari, seperti tarif, adalah fungsi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sebuah relasi disebut fungsi jika?",
            options: [
              "Tiap masukan memberi tepat satu keluaran",
              "Tiap masukan memberi banyak keluaran",
              "Tidak ada masukan",
              "Keluaran selalu nol",
            ],
            answer: 0,
            explain: "Syarat fungsi: tiap masukan tepat satu keluaran.",
          },
          {
            q: "Jika f(x) = 2x + 1, maka f(5) adalah?",
            options: ["10", "11", "7", "12"],
            answer: 1,
            explain: "2(5) + 1 = 11.",
          },
          {
            q: "Pada f(x), x berperan sebagai?",
            options: ["Keluaran", "Masukan", "Aturan", "Hasil akhir"],
            answer: 1,
            explain: "x adalah masukan; f(x) adalah keluarannya.",
          },
          {
            q: "Mana yang BUKAN fungsi?",
            options: [
              "Nama orang ke nomor KTP-nya",
              "Angka ke kuadratnya",
              "Satu masukan memberi dua keluaran berbeda",
              "Jam parkir ke biayanya",
            ],
            answer: 2,
            explain: "Satu masukan dengan dua keluaran melanggar syarat fungsi.",
          },
          {
            q: "Jika tiap masukan naik 1 dan keluaran naik tetap 3, aturannya memuat?",
            options: ["kali 3", "tambah 1", "kali 1", "bagi 3"],
            answer: 0,
            explain: "Kenaikan tetap 3 per langkah menandakan koefisien (kali) 3.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "domain-dan-range",
    levelId: "apa-itu-fungsi",
    order: 2,
    title: "Domain dan Range: Pintu Masuk dan Pintu Keluar",
    summary:
      "Sebelum menghafal istilah, kita uji dulu mesin angka sampai ketahuan masukan mana yang boleh dan keluaran mana yang muncul.",
    durationMin: 13,
    tags: ["fungsi", "domain", "range", "himpunan"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan mesin akar kuadrat. Kamu masukkan 9, keluar 3. Masukkan 4, keluar 2. Tapi saat kamu coba masukkan -1, mesin berbunyi error: ia menolak. Ternyata tiap mesin punya daftar masukan yang boleh dan daftar keluaran yang mungkin muncul. Ayo selidiki dulu batas-batasnya sebelum kita beri nama.",
      },
      {
        type: "video",
        comp: "FungsiVideo",
        title: "Video: Masukan yang Boleh dan Keluaran yang Muncul",
        caption: "Tiap mesin punya pintu masuk dan pintu keluar tersendiri.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba mesin kuadrat: masukkan -2 keluar 4, masukkan -1 keluar 1, masukkan 0 keluar 0, masukkan 1 keluar 1, masukkan 2 keluar 4. Perhatikan: masukannya boleh angka apa saja, tapi keluarannya tidak pernah negatif. Daftar masukan yang boleh dan daftar keluaran yang muncul ternyata bisa berbeda. Kamu sedang meraba dua himpunan penting.",
      },
      {
        type: "widget",
        widget: "PenjelajahPola",
      },
      {
        type: "chart",
        variant: "line",
        title: "Keluaran Mesin Kuadrat untuk Tiap Masukan",
        unit: "nilai keluaran",
        source: "ilustrasi edukatif",
        note: "Masukan dari -2 sampai 2 boleh semua, tetapi keluaran tidak pernah kurang dari 0. Itulah bedanya daftar masuk dan daftar keluar.",
        data: [
          { label: "x=-2", value: 4, color: "#34d399" },
          { label: "x=-1", value: 1, color: "#34d399" },
          { label: "x=0", value: 0, color: "#34d399" },
          { label: "x=1", value: 1, color: "#34d399" },
          { label: "x=2", value: 4, color: "#34d399" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua daftar yang berbeda",
        html: "Daftar semua masukan yang boleh kita sebut <strong>daerah asal</strong>, daftar semua keluaran yang benar-benar muncul kita sebut <strong>daerah hasil</strong>. Keduanya bisa berbeda: mesin kuadrat menerima angka apa saja, tetapi hanya menghasilkan angka tak-negatif.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk mesin kuadrat dengan masukan dari himpunan {-2, -1, 0, 1, 2}, berapa nilai keluaran terbesar yang muncul?",
        answer: 4,
        solution:
          "Kuadratkan tiap masukan: (-2)²=4, (-1)²=1, 0²=0, 1²=1, 2²=4. Keluaran terbesar adalah <strong>4</strong>. Daerah hasilnya {0, 1, 4}.",
        hint: "Hitung kuadrat tiap anggota, lalu cari yang paling besar.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Mesin akar kuadrat hanya menerima angka tak-negatif. Mana yang boleh masuk sebagai masukan?",
        buckets: ["Boleh masuk", "Ditolak mesin"],
        items: [
          { text: "16", bucket: "Boleh masuk" },
          { text: "-9", bucket: "Ditolak mesin" },
          { text: "0", bucket: "Boleh masuk" },
          { text: "-1", bucket: "Ditolak mesin" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tiap masukan mesin kuadrat dengan keluarannya.",
        pairs: [
          { left: "masukan 3", right: "keluaran 9" },
          { left: "masukan -5", right: "keluaran 25" },
          { left: "masukan 0", right: "keluaran 0" },
          { left: "masukan 10", right: "keluaran 100" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lift gedung",
        html: "Sebuah gedung punya lantai 1 sampai 20. Tombol lift hanya menerima angka 1 sampai 20, tidak ada lantai 0 atau 21. Masukan yang boleh (daerah asal) adalah {1, 2, ..., 20}. Keluaran lift adalah posisi yang ia datangi, juga {1, 2, ..., 20}. Kalau kamu coba pencet 25, lift menolak, sama seperti mesin kita menolak masukan di luar daftar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah meraba batasnya, baru kita pakai istilahnya: <strong>domain</strong> adalah himpunan semua masukan yang diperbolehkan, dan <strong>range</strong> (daerah hasil) adalah himpunan semua keluaran yang muncul. Untuk f(x) = x², domainnya semua bilangan real, tetapi rangenya hanya bilangan ≥ 0.",
      },
      {
        type: "takeaways",
        items: [
          "Domain adalah himpunan semua masukan yang diperbolehkan sebuah fungsi.",
          "Range (daerah hasil) adalah himpunan semua keluaran yang benar-benar muncul.",
          "Domain dan range bisa berbeda, seperti pada fungsi kuadrat.",
          "Beberapa masukan bisa ditolak, misalnya akar dari bilangan negatif.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Domain sebuah fungsi adalah?",
            options: [
              "Himpunan semua masukan yang diperbolehkan",
              "Himpunan semua keluaran",
              "Aturan fungsinya",
              "Nilai terbesar keluaran",
            ],
            answer: 0,
            explain: "Domain adalah himpunan masukan yang boleh diproses fungsi.",
          },
          {
            q: "Range sebuah fungsi adalah?",
            options: [
              "Himpunan masukan",
              "Himpunan keluaran yang muncul",
              "Banyaknya masukan",
              "Selisih masukan dan keluaran",
            ],
            answer: 1,
            explain: "Range adalah himpunan semua keluaran yang benar-benar dihasilkan.",
          },
          {
            q: "Untuk f(x) = x², nilai f(x) tidak pernah?",
            options: ["Lebih dari 1", "Negatif", "Genap", "Bilangan bulat"],
            answer: 1,
            explain: "Kuadrat suatu bilangan selalu ≥ 0, jadi rangenya tidak negatif.",
          },
          {
            q: "Jika domain {-1, 0, 2} dipakai pada f(x) = x², maka rangenya?",
            options: ["{-1, 0, 2}", "{1, 0, 4}", "{0, 1, 2}", "{1, 2, 4}"],
            answer: 1,
            explain: "(-1)²=1, 0²=0, 2²=4, jadi range {0, 1, 4}.",
          },
          {
            q: "Masukan mana yang ditolak fungsi akar kuadrat √x?",
            options: ["4", "0", "-4", "9"],
            answer: 2,
            explain: "Akar kuadrat tidak terdefinisi untuk bilangan negatif seperti -4.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "notasi-dan-nilai-fungsi",
    levelId: "apa-itu-fungsi",
    order: 3,
    title: "Menghitung Nilai Fungsi: Mengganti Masukan",
    summary:
      "Sebelum melihat notasi f(a), kita jalankan dulu mesin aturan langkah demi langkah sampai cara menghitungnya terasa wajar.",
    durationMin: 13,
    tags: ["fungsi", "substitusi", "nilai fungsi", "notasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah toko fotokopi punya aturan: bayar Rp2.000 untuk biaya tetap, lalu Rp500 per lembar. Kalau kamu fotokopi 4 lembar, berapa bayarnya? Kamu pasti langsung hitung: 2.000 + 500 × 4. Tanpa sadar, kamu baru saja menghitung nilai sebuah fungsi dengan mengganti masukannya. Ayo dalami caranya dulu.",
      },
      {
        type: "video",
        comp: "MatematikaVsBerhitung",
        title: "Video: Menghitung Bukan Sekadar Mengganti Angka",
        caption: "Mengganti masukan dengan angka lalu mengikuti aturannya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Aturan toko: bayar = 2.000 + 500 × lembar. Coba beberapa: 0 lembar bayar 2.000, 2 lembar bayar 3.000, 4 lembar bayar 4.000. Caranya selalu sama: ambil aturan, ganti 'lembar' dengan angka yang kamu pilih, lalu hitung. Mengganti masukan dan menghitung hasilnya, itu inti dari menilai sebuah fungsi.",
      },
      {
        type: "widget",
        widget: "SimulatorMesinFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Total Bayar Fotokopi untuk Tiap Jumlah Lembar",
        unit: "rupiah",
        source: "ilustrasi edukatif",
        note: "Tiap tambah 1 lembar, total naik tetap 500. Mengganti masukan menghasilkan keluaran yang dapat dihitung.",
        data: [
          { label: "0 lbr", value: 2000, color: "#34d399" },
          { label: "1 lbr", value: 2500, color: "#34d399" },
          { label: "2 lbr", value: 3000, color: "#34d399" },
          { label: "3 lbr", value: 3500, color: "#34d399" },
          { label: "4 lbr", value: 4000, color: "#34d399" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Satu langkah penting",
        html: "Saat menghitung, kerjakan perkalian dulu baru penjumlahan. Untuk aturan 2.000 + 500 × lembar dengan 4 lembar: hitung 500 × 4 = 2.000 lebih dulu, baru tambah 2.000 menjadi 4.000.",
      },
      {
        type: "calcExercise",
        prompt:
          "Aturan fotokopi: bayar = 2.000 + 500 × lembar. Berapa bayar untuk 6 lembar (dalam rupiah)?",
        answer: 5000,
        prefix: "Rp",
        solution:
          "Ganti lembar dengan 6: 500 × 6 = 3.000, lalu tambah 2.000 = <strong>5.000</strong>. Dengan notasi, f(x) = 2.000 + 500x, maka f(6) = 5.000.",
        hint: "Kalikan 500 dengan 6 dulu, baru tambah 2.000.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk aturan g(x) = x² + 1, berapa nilai keluaran saat masukannya 3?",
        answer: 10,
        solution:
          "Ganti x dengan 3: 3² + 1 = 9 + 1 = <strong>10</strong>. Jadi g(3) = 10.",
        hint: "Kuadratkan dulu masukannya, lalu tambah 1.",
      },
      {
        type: "matchExercise",
        prompt: "Untuk aturan h(x) = 3x − 2, cocokkan tiap masukan dengan hasilnya.",
        pairs: [
          { left: "masukan 1", right: "hasil 1" },
          { left: "masukan 2", right: "hasil 4" },
          { left: "masukan 4", right: "hasil 10" },
          { left: "masukan 0", right: "hasil -2" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tagihan internet",
        html: "Sebuah paket internet menagih Rp100.000 biaya tetap per bulan, ditambah Rp10.000 tiap GB di atas kuota. Aturannya: tagihan = 100.000 + 10.000 × (kelebihan GB). Untuk kelebihan 3 GB, ganti angkanya: 10.000 × 3 = 30.000, tambah 100.000 = 130.000. Menghitung tagihan sama persis dengan menilai fungsi: ganti masukan, ikuti aturan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah terbiasa mengganti angka, baru notasinya terasa ringkas: <strong>f(a)</strong> berarti nilai fungsi f saat masukannya a. Menghitungnya berarti mengganti tiap x pada aturan dengan a, lalu menyelesaikan operasinya. Untuk f(x) = 2x + 1, maka f(3) = 2(3) + 1 = 7.",
      },
      {
        type: "takeaways",
        items: [
          "f(a) berarti nilai fungsi f ketika masukannya adalah a.",
          "Menghitung f(a) berarti mengganti setiap x dengan a lalu menyelesaikan operasinya.",
          "Ikuti urutan operasi: pangkat dan perkalian sebelum penjumlahan.",
          "Banyak perhitungan sehari-hari, seperti tagihan, adalah penilaian fungsi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Notasi f(a) berarti?",
            options: [
              "Nilai fungsi f saat masukannya a",
              "Fungsi dikali a",
              "Masukan ditambah a",
              "Aturan baru bernama a",
            ],
            answer: 0,
            explain: "f(a) adalah keluaran fungsi f untuk masukan a.",
          },
          {
            q: "Jika f(x) = 2x + 1, maka f(3) adalah?",
            options: ["5", "6", "7", "8"],
            answer: 2,
            explain: "2(3) + 1 = 6 + 1 = 7.",
          },
          {
            q: "Untuk g(x) = x² + 1, nilai g(4) adalah?",
            options: ["9", "16", "17", "8"],
            answer: 2,
            explain: "4² + 1 = 16 + 1 = 17.",
          },
          {
            q: "Untuk h(x) = 3x − 2, nilai h(0) adalah?",
            options: ["-2", "0", "2", "3"],
            answer: 0,
            explain: "3(0) − 2 = 0 − 2 = -2.",
          },
          {
            q: "Pada aturan 100 + 50x, langkah pertama yang benar untuk x = 4 adalah?",
            options: [
              "Tambah 100 + 50 dulu",
              "Hitung 50 × 4 dulu",
              "Bagi 100 dengan 4",
              "Kalikan 100 × 4",
            ],
            answer: 1,
            explain: "Perkalian dikerjakan sebelum penjumlahan: 50 × 4 = 200, baru + 100.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "relasi-vs-fungsi",
    levelId: "apa-itu-fungsi",
    order: 4,
    title: "Relasi vs Fungsi: Membedakan Keduanya",
    summary:
      "Sebelum menghafal definisi, kita uji dulu beberapa hubungan sampai terasa kapan sebuah relasi pantas disebut fungsi.",
    durationMin: 13,
    tags: ["fungsi", "relasi", "pemetaan", "syarat"],
    blocks: [
      {
        type: "paragraph",
        html: "Setiap fungsi adalah relasi, tetapi tidak setiap relasi adalah fungsi. Bayangkan daftar 'ibu kandung': tiap orang punya tepat satu ibu kandung. Bandingkan dengan daftar 'teman': satu orang bisa punya banyak teman. Dua-duanya hubungan, tapi hanya satu yang berperilaku seperti fungsi. Ayo selidiki bedanya dulu.",
      },
      {
        type: "video",
        comp: "FungsiVideo",
        title: "Video: Kapan Relasi Menjadi Fungsi",
        caption: "Fungsi adalah relasi istimewa: tiap masukan tepat satu keluaran.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba periksa beberapa hubungan. 'Tiap orang ke nomor KTP-nya': satu orang satu nomor, rapi. 'Tiap orang ke saudara kandungnya': satu orang bisa punya banyak saudara, bercabang. Kuncinya bukan jumlah pasangan, tapi apakah satu masukan pernah memberi lebih dari satu keluaran. Kalau pernah bercabang, ia gugur jadi fungsi.",
      },
      {
        type: "widget",
        widget: "PenjelajahPola",
      },
      {
        type: "callout",
        tone: "info",
        title: "Uji garis tegak",
        html: "Pada grafik, ada cara cepat: tarik garis tegak (vertikal) di mana saja. Kalau garis itu memotong grafik lebih dari satu titik, berarti satu masukan punya banyak keluaran, jadi <strong>bukan fungsi</strong>. Lingkaran gagal uji ini, sedangkan garis lurus selalu lolos.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana yang merupakan fungsi (tiap masukan tepat satu keluaran)?",
        buckets: ["Fungsi", "Bukan fungsi"],
        items: [
          { text: "Tiap orang ke ibu kandungnya", bucket: "Fungsi" },
          { text: "Tiap orang ke nomor telepon yang ia miliki (bisa lebih dari satu)", bucket: "Bukan fungsi" },
          { text: "Tiap negara ke ibu kotanya", bucket: "Fungsi" },
          { text: "Tiap angka ke bilangan yang lebih besar darinya", bucket: "Bukan fungsi" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tiap hubungan dengan alasan tepat mengapa ia fungsi atau bukan.",
        pairs: [
          { left: "Tiap orang ke tanggal lahirnya", right: "Fungsi: satu orang satu tanggal" },
          { left: "Tiap angka ke dua akar kuadratnya", right: "Bukan fungsi: satu masukan dua hasil" },
          { left: "Tiap mobil ke nomor platnya", right: "Fungsi: satu mobil satu plat" },
          { left: "Tiap siswa ke daftar mata pelajarannya", right: "Bukan fungsi: satu masukan banyak hasil" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pada sebuah grafik, garis tegak digeser melintasi grafik dan paling banyak memotong di 2 titik sekaligus. Berapa titik potong maksimal yang masih membuat grafik itu sebuah fungsi?",
        answer: 1,
        solution:
          "Agar tetap fungsi, tiap garis tegak boleh memotong grafik paling banyak <strong>1</strong> titik. Karena grafik tadi pernah dipotong 2 titik, ia bukan fungsi.",
        hint: "Ingat: satu masukan hanya boleh memberi satu keluaran.",
      },
      {
        type: "case",
        title: "Studi Kasus: Daftar absen kelas",
        html: "Wali kelas membuat dua daftar. Daftar A: tiap nomor absen ke nama siswa, satu nomor satu nama, ini fungsi. Daftar B: tiap siswa ke kegiatan ekstrakurikuler yang ia ikuti, dan beberapa siswa ikut dua kegiatan. Karena satu siswa (masukan) memberi dua kegiatan (keluaran), Daftar B sekadar relasi, bukan fungsi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah mengujinya, baru definisinya mengendap: <strong>relasi</strong> adalah hubungan apa pun antara dua himpunan, sedangkan <strong>fungsi</strong> adalah relasi khusus di mana tiap masukan dipetakan ke tepat satu keluaran. Uji garis tegak adalah cara cepat memeriksanya pada grafik.",
      },
      {
        type: "takeaways",
        items: [
          "Relasi adalah hubungan apa pun antara dua himpunan.",
          "Fungsi adalah relasi khusus: tiap masukan tepat satu keluaran.",
          "Setiap fungsi adalah relasi, tetapi tidak setiap relasi adalah fungsi.",
          "Uji garis tegak: jika garis vertikal memotong grafik lebih dari satu titik, itu bukan fungsi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Perbedaan utama fungsi dan relasi adalah?",
            options: [
              "Fungsi memetakan tiap masukan ke tepat satu keluaran",
              "Relasi tidak punya masukan",
              "Fungsi tidak punya keluaran",
              "Relasi selalu berupa garis lurus",
            ],
            answer: 0,
            explain: "Fungsi adalah relasi dengan syarat tiap masukan tepat satu keluaran.",
          },
          {
            q: "Pernyataan yang benar adalah?",
            options: [
              "Setiap relasi adalah fungsi",
              "Setiap fungsi adalah relasi",
              "Fungsi dan relasi tidak berhubungan",
              "Relasi selalu fungsi jika linear",
            ],
            answer: 1,
            explain: "Fungsi adalah jenis khusus relasi, jadi setiap fungsi pasti relasi.",
          },
          {
            q: "Uji garis tegak menyatakan sebuah grafik BUKAN fungsi jika garis vertikal?",
            options: [
              "Tidak memotong grafik",
              "Memotong tepat satu titik",
              "Memotong lebih dari satu titik",
              "Sejajar grafik",
            ],
            answer: 2,
            explain: "Lebih dari satu titik berarti satu masukan punya banyak keluaran.",
          },
          {
            q: "Mana yang merupakan fungsi?",
            options: [
              "Tiap angka ke dua akar kuadratnya",
              "Tiap orang ke ibu kandungnya",
              "Tiap angka ke semua bilangan yang lebih besar",
              "Tiap siswa ke banyak hobinya",
            ],
            answer: 1,
            explain: "Tiap orang punya tepat satu ibu kandung, jadi ini fungsi.",
          },
          {
            q: "Grafik lingkaran penuh bukan fungsi karena?",
            options: [
              "Tidak punya masukan",
              "Garis tegak bisa memotongnya di dua titik",
              "Bentuknya melengkung",
              "Tidak melewati titik nol",
            ],
            answer: 1,
            explain: "Pada lingkaran, satu nilai x bisa memberi dua nilai y, jadi gagal uji garis tegak.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cara-menyajikan-fungsi",
    levelId: "apa-itu-fungsi",
    order: 5,
    title: "Empat Cara Menyajikan Fungsi",
    summary:
      "Sebelum memilih bentuk favorit, kita lihat dulu satu aturan harga yang sama ditampilkan lewat empat wajah berbeda.",
    durationMin: 13,
    tags: ["fungsi", "tabel", "grafik", "representasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah warung menjual nasi bungkus seharga Rp12.000 per porsi. Aturannya satu, tetapi bisa kita tampilkan dalam banyak rupa: sebagai daftar harga, sebagai panah dari pesanan ke total, sebagai titik-titik pada grafik, atau sebagai deretan pasangan angka. Ayo lihat dulu keempat wajah ini sebelum memberi mereka nama resmi.",
      },
      {
        type: "video",
        comp: "FungsiVideo",
        title: "Video: Satu Fungsi, Banyak Wajah",
        caption: "Aturan yang sama bisa ditulis sebagai tabel, panah, grafik, atau pasangan angka.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil aturan total = 12.000 × porsi. Tulis sebagai tabel: 1 porsi 12.000, 2 porsi 24.000, 3 porsi 36.000. Tulis sebagai panah: 1 menunjuk 12.000, 2 menunjuk 24.000. Tulis sebagai pasangan: (1, 12.000), (2, 24.000), (3, 36.000). Gambar tiap pasangan sebagai titik, dan titik-titiknya berbaris lurus. Empat tampilan, satu aturan.",
      },
      {
        type: "widget",
        widget: "SimulatorMesinFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Total Bayar Nasi Bungkus terhadap Jumlah Porsi",
        unit: "ribu rupiah",
        source: "ilustrasi edukatif",
        note: "Inilah wajah grafik dari aturan total = 12.000 × porsi. Karena tiap porsi menambah Rp12.000 tetap, titik-titiknya berbaris pada satu garis lurus.",
        data: [
          { label: "1 porsi", value: 12, color: "#34d399" },
          { label: "2 porsi", value: 24, color: "#34d399" },
          { label: "3 porsi", value: 36, color: "#34d399" },
          { label: "4 porsi", value: 48, color: "#34d399" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Wajah berbeda, isi sama",
        html: "Keempat cara ini menyimpan informasi yang persis sama, hanya berbeda tampilan. <strong>Tabel</strong> enak dibaca angkanya, <strong>grafik</strong> enak dilihat polanya, <strong>diagram panah</strong> menegaskan tiap masukan menunjuk tepat satu keluaran, dan <strong>pasangan berurutan</strong> ringkas untuk ditulis.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah fungsi disajikan sebagai pasangan berurutan {(1, 3), (2, 5), (3, 7)}. Mengikuti pola yang sama, berapa keluaran untuk masukan 4?",
        answer: 9,
        solution:
          "Tiap masukan naik 1, keluaran naik 2 (3, 5, 7, ...). Maka setelah 7 adalah <strong>9</strong>. Aturannya f(x) = 2x + 1, jadi f(4) = 9.",
        hint: "Lihat selisih keluaran yang berurutan, lalu teruskan polanya.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap tampilan ke jenis penyajian fungsinya.",
        buckets: ["Tabel", "Diagram panah", "Grafik", "Pasangan berurutan"],
        items: [
          { text: "Dua kolom berisi nilai x dan nilai y", bucket: "Tabel" },
          { text: "Panah dari tiap masukan ke keluarannya", bucket: "Diagram panah" },
          { text: "Titik-titik yang diplot pada bidang koordinat", bucket: "Grafik" },
          { text: "Daftar (x, y) di dalam kurung kurawal", bucket: "Pasangan berurutan" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan nama penyajian fungsi dengan ciri khasnya.",
        pairs: [
          { left: "Tabel", right: "Baris angka masukan dan keluaran" },
          { left: "Diagram panah", right: "Panah menghubungkan dua himpunan" },
          { left: "Grafik", right: "Titik pada bidang koordinat" },
          { left: "Pasangan berurutan", right: "Kumpulan (x, y)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menu warung dalam empat bentuk",
        html: "Pemilik warung menulis aturan harga es teh, Rp5.000 per gelas, di papan menu sebagai tabel: 1 gelas 5.000, 2 gelas 10.000, 3 gelas 15.000. Kasir menyimpannya sebagai pasangan berurutan (1, 5.000), (2, 10.000), (3, 15.000) di mesin kasir. Saat rapat, manajer menampilkannya sebagai grafik garis untuk melihat polanya. Ketiganya menggambarkan satu fungsi yang sama: total = 5.000 × gelas. Memilih bentuk hanyalah soal kebutuhan, bukan mengubah fungsinya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Sebuah fungsi bisa disajikan lewat empat cara setara: <strong>tabel</strong>, <strong>diagram panah</strong>, <strong>grafik</strong>, dan <strong>pasangan berurutan</strong>. Semua menyimpan aturan yang sama, yaitu tiap masukan dipetakan ke tepat satu keluaran. Memilih bentuk tidak mengubah fungsinya, hanya cara kita melihatnya.",
      },
      {
        type: "takeaways",
        items: [
          "Fungsi yang sama bisa disajikan sebagai tabel, diagram panah, grafik, atau pasangan berurutan.",
          "Keempat bentuk menyimpan informasi yang sama, hanya berbeda tampilan.",
          "Diagram panah menegaskan tiap masukan menunjuk tepat satu keluaran.",
          "Memilih bentuk penyajian disesuaikan dengan kebutuhan, tanpa mengubah fungsinya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Manakah yang BUKAN cara menyajikan fungsi?",
            options: ["Tabel", "Diagram panah", "Grafik", "Daftar belanja acak"],
            answer: 3,
            explain: "Tabel, diagram panah, grafik, dan pasangan berurutan adalah penyajian fungsi; daftar acak bukan.",
          },
          {
            q: "Pasangan berurutan (3, 8) berarti?",
            options: [
              "Masukan 3 memberi keluaran 8",
              "Masukan 8 memberi keluaran 3",
              "Hasil kali 3 dan 8",
              "Dua fungsi berbeda",
            ],
            answer: 0,
            explain: "Pada (x, y), angka pertama masukan dan angka kedua keluaran.",
          },
          {
            q: "Bentuk penyajian mana yang paling mudah memperlihatkan pola naik-turun?",
            options: ["Grafik", "Daftar kata", "Paragraf panjang", "Nomor antrean"],
            answer: 0,
            explain: "Grafik menampilkan pola secara visual sehingga arah perubahan cepat terlihat.",
          },
          {
            q: "Tabel 1 porsi 12.000, 2 porsi 24.000, 3 porsi 36.000 menggambarkan aturan?",
            options: ["total = 12.000 × porsi", "total = 12.000 + porsi", "total = porsi", "total = 24.000 × porsi"],
            answer: 0,
            explain: "Tiap porsi menambah 12.000, jadi total = 12.000 × porsi.",
          },
          {
            q: "Jika sebuah fungsi diubah dari tabel menjadi grafik, fungsinya?",
            options: [
              "Tetap sama, hanya tampilannya berbeda",
              "Berubah menjadi fungsi lain",
              "Kehilangan sebagian aturannya",
              "Menjadi bukan fungsi",
            ],
            answer: 0,
            explain: "Penyajian hanya mengubah tampilan, bukan aturan fungsinya.",
          },
        ],
      },
    ],
  },
];
