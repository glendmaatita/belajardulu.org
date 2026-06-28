import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "variabel-bahasa-simbol",
    levelId: "bahasa-simbol",
    order: 1,
    title: "Variabel: Huruf yang Mewakili Angka",
    summary:
      "Mengapa matematika tiba-tiba pakai huruf? Kita jelajahi teka-teki nyata dulu sampai variabel terasa masuk akal.",
    durationMin: 12,
    tags: ["aljabar", "variabel", "simbol", "pola"],
    blocks: [
      {
        type: "paragraph",
        html: "Ada sebuah kotak berisi sejumlah permen. Kamu tidak tahu isinya, tetapi setelah ditambah 3 permen, jumlahnya jadi 8. Berapa isi kotak semula? Sebelum menulis rumus, ayo selesaikan teka-teki ini dengan akal sehat.",
      },
      {
        type: "video",
        comp: "AljabarVideo",
        title: "Video: Huruf yang Mewakili Angka",
        caption: "Variabel hanyalah nama untuk angka yang belum kita ketahui.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Isi kotak kita sebut saja dengan satu huruf, misalnya <strong>x</strong>. Kalimatnya jadi: x ditambah 3 sama dengan 8. Tanpa aturan rumit, kamu pasti bisa menebak x bernilai 5. Aljabar hanya memberi nama pada yang belum diketahui supaya bisa kita utak-atik.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bukan sekadar berhitung dengan huruf",
        html: "Aljabar bukan berhitung yang dipersulit. Ia adalah <strong>bahasa pola</strong>: satu kalimat aljabar bisa mewakili tak terhingga banyak situasi sekaligus.",
      },
      {
        type: "widget",
        widget: "PolaKeAljabar",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Pola Batang Korek yang Tumbuh",
        unit: "jumlah batang korek",
        source: "ilustrasi edukatif",
        note: "Tiap pola bertambah 3 batang. Dari sinilah bentuk aljabar 3n + 1 akan kita temukan.",
        data: [
          { label: "Pola 1", value: 4, color: "#fb7185" },
          { label: "Pola 2", value: 7, color: "#f472b6" },
          { label: "Pola 3", value: 10, color: "#e879f9" },
          { label: "Pola 4", value: 13, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dari pola batang korek 4, 7, 10, 13, ... yang selalu bertambah 3, berapa batang pada pola ke-5?",
        answer: 16,
        suffix: " batang",
        solution:
          "Pola ke-4 ada 13 batang, tinggal tambah 3, jadi <strong>16 batang</strong>. Polanya bisa ditulis 3n + 1, sehingga pola ke-5 = 3(5) + 1 = 16.",
        hint: "Tambahkan 3 dari suku sebelumnya, atau pakai pola 3n + 1.",
      },
      {
        type: "classifyExercise",
        prompt: "Bagian mana yang variabel dan mana yang konstanta pada bentuk 3n + 1?",
        buckets: ["Variabel", "Konstanta"],
        items: [
          { text: "n (nomor pola yang bisa berubah)", bucket: "Variabel" },
          { text: "1 (angka tetap)", bucket: "Konstanta" },
          { text: "x pada x + 3 = 8", bucket: "Variabel" },
          { text: "3 pada x + 3 = 8", bucket: "Konstanta" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Penjual es teh",
        html: "Seorang penjual menjual es teh seharga Rp3.000 per gelas dan setiap hari laku berbeda. Daripada menulis ulang hitungan tiap hari, ia cukup menulis pendapatan = 3.000 × <strong>g</strong>, dengan g adalah jumlah gelas yang terjual. Satu bentuk aljabar ini berlaku untuk hari apa pun. Itulah kekuatan variabel: meringkas banyak situasi menjadi satu kalimat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah berpetualang, baru kita rumuskan: <strong>variabel</strong> adalah huruf yang mewakili nilai yang belum diketahui atau yang bisa berubah, <strong>konstanta</strong> adalah nilai tetap, dan <strong>koefisien</strong> adalah angka pengali variabel. Aljabar memakainya untuk menuliskan pola dan teka-teki agar mudah dipecahkan.",
      },
      {
        type: "takeaways",
        items: [
          "Variabel adalah huruf yang mewakili angka yang belum diketahui atau berubah-ubah.",
          "Konstanta adalah nilai tetap; koefisien adalah angka pengali variabel.",
          "Satu bentuk aljabar bisa mewakili banyak situasi sekaligus.",
          "Aljabar adalah bahasa pola, bukan sekadar berhitung dengan huruf.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada bentuk 5x + 2, yang disebut koefisien adalah?",
            options: ["x", "5", "2", "+"],
            answer: 1,
            explain: "Koefisien adalah angka pengali variabel, yaitu 5.",
          },
          {
            q: "Jika x + 4 = 10, maka x bernilai?",
            options: ["6", "14", "4", "10"],
            answer: 0,
            explain: "x = 10 - 4 = 6.",
          },
          {
            q: "Fungsi utama variabel dalam aljabar adalah?",
            options: [
              "Mempersulit hitungan",
              "Mewakili nilai yang belum diketahui atau berubah",
              "Mengganti semua angka",
              "Menghapus konstanta",
            ],
            answer: 1,
            explain: "Variabel memberi nama pada nilai yang dicari atau yang bervariasi.",
          },
          {
            q: "Pola 4, 7, 10, 13, ... dapat ditulis sebagai?",
            options: ["4n", "3n + 1", "n + 3", "n²"],
            answer: 1,
            explain: "Mulai 4 dan bertambah 3, polanya 3n + 1 (cek n=1 menghasilkan 4).",
          },
          {
            q: "Pada x + 3 = 8, angka 3 dan 8 adalah?",
            options: ["Variabel", "Konstanta", "Koefisien", "Pangkat"],
            answer: 1,
            explain: "Keduanya nilai tetap, jadi konstanta.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menyusun-bentuk-aljabar",
    levelId: "bahasa-simbol",
    order: 2,
    title: "Menyusun Bentuk Aljabar dari Kalimat",
    summary:
      "Sebelum menghafal cara menulis simbol, kita coba ubah cerita tarif ojek online menjadi satu kalimat aljabar yang berlaku untuk jarak berapa pun.",
    durationMin: 13,
    tags: ["aljabar", "bentuk aljabar", "menerjemahkan", "pola"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu naik ojek online. Layar menampilkan tarif buka pintu Rp5.000, lalu bertambah Rp3.000 untuk setiap kilometer. Hari ini kamu menempuh 4 km, besok mungkin 7 km. Daripada menghitung ulang dari nol setiap kali, adakah satu kalimat yang bisa menghitung ongkos untuk jarak berapa pun?",
      },
      {
        type: "video",
        comp: "MatematikaVsBerhitung",
        title: "Video: Matematika Bukan Sekadar Berhitung",
        caption: "Menerjemahkan situasi nyata menjadi simbol jauh lebih berguna daripada menghitung satu per satu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Mari kita coba dengan angka dulu. 1 km: 5.000 + 3.000 = 8.000. 2 km: 5.000 + 6.000 = 11.000. 3 km: 5.000 + 9.000 = 14.000. Terlihat polanya? Yang selalu berubah hanyalah jumlah kilometer. Beri ia nama, misalnya <strong>k</strong>, dan biarkan sisanya tetap.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kata berubah jadi operasi",
        html: "Menerjemahkan kalimat itu seperti menerjemahkan bahasa: <strong>lebihnya dari</strong> menjadi tambah, <strong>kurangnya dari</strong> menjadi kurang, <strong>kali</strong> menjadi perkalian, dan kata <strong>setiap</strong> atau <strong>per</strong> menandai koefisien yang mengali variabel.",
      },
      {
        type: "widget",
        widget: "PenjelajahPola",
      },
      {
        type: "chart",
        variant: "line",
        title: "Ongkos Ojek terhadap Jarak Tempuh",
        unit: "rupiah",
        source: "ilustrasi tarif 5.000 + 3.000 per km",
        note: "Garis naik lurus karena setiap km menambah Rp3.000 yang tetap. Dari pola ini lahir bentuk 5000 + 3000k.",
        data: [
          { label: "1 km", value: 8000, color: "#fb7185" },
          { label: "2 km", value: 11000, color: "#f472b6" },
          { label: "3 km", value: 14000, color: "#e879f9" },
          { label: "4 km", value: 17000, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan tarif buka pintu Rp5.000 dan Rp3.000 per km, berapa ongkos untuk perjalanan 6 km?",
        answer: 23000,
        prefix: "Rp",
        solution:
          "Bentuknya 5.000 + 3.000 × k. Untuk k = 6: 5.000 + 3.000 × 6 = 5.000 + 18.000 = <strong>Rp23.000</strong>.",
        hint: "Isi k = 6 ke bentuk 5.000 + 3.000k.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan kalimat sehari-hari dengan bentuk aljabarnya (gunakan n sebagai bilangannya).",
        pairs: [
          { left: "Lima lebihnya dari sebuah bilangan", right: "n + 5" },
          { left: "Dua kali sebuah bilangan", right: "2n" },
          { left: "Sebuah bilangan dikurangi tiga", right: "n - 3" },
          { left: "Setengah dari sebuah bilangan", right: "n / 2" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sewa lapangan futsal",
        html: "Sebuah lapangan menetapkan biaya kebersihan tetap Rp20.000 ditambah Rp50.000 per jam. Kalau disewa <strong>j</strong> jam, total biayanya cukup ditulis 20.000 + 50.000 × j. Pengelola tidak perlu membuat daftar harga untuk 1 jam, 2 jam, 3 jam, dan seterusnya. Satu bentuk aljabar sudah mewakili semua pilihan durasi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berlatih, baru kita rumuskan polanya: bagian yang <strong>tetap</strong> menjadi konstanta, bagian yang <strong>berubah</strong> diberi variabel, dan angka yang menyertai kata <strong>setiap</strong> atau <strong>per</strong> menjadi koefisien. Pola tarif tadi menjadi <strong>5.000 + 3.000k</strong>, sebuah kalimat yang berlaku untuk jarak berapa pun.",
      },
      {
        type: "takeaways",
        items: [
          "Menyusun bentuk aljabar berarti menerjemahkan kalimat menjadi simbol, bukan langsung menghitung.",
          "Bagian yang tetap menjadi konstanta, bagian yang berubah diberi variabel.",
          "Kata kunci seperti lebihnya, kurangnya, kali, dan per menentukan operasinya.",
          "Satu bentuk aljabar berlaku untuk semua nilai, tanpa perlu daftar panjang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kalimat 'tujuh lebihnya dari sebuah bilangan' ditulis menjadi?",
            options: ["7n", "n - 7", "n + 7", "7 - n"],
            answer: 2,
            explain: "'Lebihnya dari' berarti ditambah, jadi n + 7.",
          },
          {
            q: "Tarif parkir Rp2.000 untuk jam pertama lalu Rp1.000 per jam berikutnya. Untuk j jam berikutnya, total bentuknya?",
            options: ["2.000 + 1.000j", "1.000 + 2.000j", "2.000 × 1.000j", "3.000j"],
            answer: 0,
            explain: "Biaya tetap 2.000 ditambah 1.000 untuk setiap jam berikutnya, jadi 2.000 + 1.000j.",
          },
          {
            q: "Pada cerita ojek tadi, mengapa Rp5.000 ditulis sebagai konstanta?",
            options: [
              "Karena nilainya selalu berubah",
              "Karena nilainya tetap, tidak bergantung jarak",
              "Karena ia mengali variabel",
              "Karena ia adalah variabel",
            ],
            answer: 1,
            explain: "Tarif buka pintu selalu Rp5.000 berapa pun jaraknya, jadi ia konstanta.",
          },
          {
            q: "Bentuk '3n' paling tepat menerjemahkan kalimat?",
            options: [
              "Tiga lebihnya dari sebuah bilangan",
              "Sebuah bilangan dikurangi tiga",
              "Tiga kali sebuah bilangan",
              "Sepertiga dari sebuah bilangan",
            ],
            answer: 2,
            explain: "3n berarti tiga dikali bilangan n.",
          },
          {
            q: "Bentuk aljabar lebih unggul daripada daftar angka karena?",
            options: [
              "Lebih sulit dibaca",
              "Hanya berlaku untuk satu nilai",
              "Mewakili semua nilai sekaligus dengan satu kalimat",
              "Tidak memerlukan variabel",
            ],
            answer: 2,
            explain: "Satu bentuk aljabar berlaku untuk nilai mana pun, jadi lebih ringkas dan kuat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "suku-koefisien-konstanta",
    levelId: "bahasa-simbol",
    order: 3,
    title: "Mengenali Bagian Bentuk Aljabar",
    summary:
      "Sebelum menghafal istilah suku, koefisien, dan konstanta, kita bedah dulu sebuah struk belanja sampai bagian-bagiannya terasa alami.",
    durationMin: 12,
    tags: ["aljabar", "suku", "koefisien", "konstanta"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu jajan di kantin: 3 risol, 2 gelas teh, ditambah ongkos kemasan Rp1.000. Tanpa sadar, kamu sudah menyusun bentuk aljabar. Apa saja sebenarnya bagian-bagian dari sebuah bentuk aljabar, dan kenapa kita perlu menamainya?",
      },
      {
        type: "video",
        comp: "AljabarVideo",
        title: "Video: Bagian-bagian Bentuk Aljabar",
        caption: "Setiap potongan bentuk aljabar punya peran yang berbeda.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tulis belanjaan kantin tadi: jika harga risol r dan harga teh t, totalnya 3r + 2t + 1.000. Coba amati: ada tiga kelompok yang dipisahkan tanda tambah. Tiap kelompok itu kita sebut <strong>suku</strong>. Angka di depan huruf (3 dan 2) menempel pada variabelnya, sedangkan 1.000 berdiri sendiri tanpa huruf.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga peran yang berbeda",
        html: "<strong>Suku</strong> adalah potongan yang dipisahkan tanda + atau -. <strong>Koefisien</strong> adalah angka yang mengali variabel. <strong>Konstanta</strong> adalah suku yang hanya berupa angka, tanpa variabel. Memberi nama ini memudahkan kita berbicara tentang bentuk aljabar dengan tepat.",
      },
      {
        type: "widget",
        widget: "PolaKeAljabar",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap bagian dari bentuk 3a + 5 dan 2x - 7 sesuai perannya.",
        buckets: ["Variabel", "Koefisien", "Konstanta"],
        items: [
          { text: "a pada 3a + 5", bucket: "Variabel" },
          { text: "3 pada 3a + 5", bucket: "Koefisien" },
          { text: "5 pada 3a + 5", bucket: "Konstanta" },
          { text: "x pada 2x - 7", bucket: "Variabel" },
          { text: "2 pada 2x - 7", bucket: "Koefisien" },
          { text: "-7 pada 2x - 7", bucket: "Konstanta" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap bentuk aljabar dengan jumlah sukunya.",
        pairs: [
          { left: "5y", right: "1 suku" },
          { left: "2x + 3", right: "2 suku" },
          { left: "a + b - 4", right: "3 suku" },
          { left: "3x - 2y + z - 1", right: "4 suku" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Pada bentuk 8m + 6, berapakah koefisien dari m?",
        answer: 8,
        solution:
          "Koefisien adalah angka yang mengali variabel. Pada 8m, angka 8 mengali m, jadi koefisiennya <strong>8</strong>. Sedangkan 6 adalah konstanta.",
        hint: "Cari angka yang menempel langsung di depan variabel m.",
      },
      {
        type: "case",
        title: "Studi Kasus: Gaji harian kurir",
        html: "Seorang kurir digaji Rp4.000 per paket ditambah uang transport tetap Rp25.000 sehari, ditulis 4.000p + 25.000. Di sini <strong>4.000</strong> adalah koefisien yang menempel pada jumlah paket p, sedangkan <strong>25.000</strong> adalah konstanta karena selalu diterima berapa pun paketnya. Menamai bagian-bagian ini membantu kurir cepat memahami slip gajinya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah membedah beberapa contoh, baru kita rapikan istilahnya. Pada bentuk <strong>4.000p + 25.000</strong>: ada dua <strong>suku</strong> (4.000p dan 25.000), <strong>4.000</strong> adalah koefisien, <strong>p</strong> adalah variabel, dan <strong>25.000</strong> adalah konstanta. Suku dipisahkan oleh tanda + atau -, dan tanda itu ikut menjadi milik sukunya.",
      },
      {
        type: "takeaways",
        items: [
          "Suku adalah bagian bentuk aljabar yang dipisahkan tanda tambah atau kurang.",
          "Koefisien adalah angka yang mengali variabel pada sebuah suku.",
          "Konstanta adalah suku yang hanya berupa angka, tanpa variabel.",
          "Menamai bagian-bagian membuat kita bisa membahas bentuk aljabar dengan tepat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bentuk 7x + 2y - 9 terdiri atas berapa suku?",
            options: ["1", "2", "3", "4"],
            answer: 2,
            explain: "Suku-sukunya 7x, 2y, dan -9, jadi ada 3 suku.",
          },
          {
            q: "Pada 6a - 5, manakah konstantanya?",
            options: ["6", "a", "-5", "6a"],
            answer: 2,
            explain: "Konstanta adalah suku tanpa variabel, yaitu -5.",
          },
          {
            q: "Koefisien dari y pada bentuk 9y + 4 adalah?",
            options: ["4", "9", "y", "13"],
            answer: 1,
            explain: "Angka yang mengali y adalah 9.",
          },
          {
            q: "Manakah yang merupakan bentuk dengan satu suku saja?",
            options: ["x + 1", "5ab", "2x - 3", "a + b"],
            answer: 1,
            explain: "5ab tidak punya tanda tambah atau kurang yang memisahkan, jadi satu suku.",
          },
          {
            q: "Pada gaji kurir 4.000p + 25.000, angka 25.000 berperan sebagai?",
            options: ["Variabel", "Koefisien", "Konstanta", "Suku berkoefisien"],
            answer: 2,
            explain: "25.000 berdiri sendiri tanpa variabel, jadi konstanta.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "nilai-bentuk-aljabar",
    levelId: "bahasa-simbol",
    order: 4,
    title: "Menghitung Nilai dengan Substitusi",
    summary:
      "Bentuk aljabar baru terasa hidup saat variabelnya kita isi nilai. Kita mulai dari cerita menabung sebelum aturan substitusi dirumuskan.",
    durationMin: 13,
    tags: ["aljabar", "substitusi", "nilai", "evaluasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu mulai menabung dengan modal awal Rp50.000, lalu menambah Rp20.000 setiap minggu. Temanmu bertanya: 'Kalau 4 minggu, tabunganmu jadi berapa?' Bentuk aljabar bisa menjawabnya, asalkan kita tahu cara mengisi nilai ke dalam variabel.",
      },
      {
        type: "video",
        comp: "PersamaanVideo",
        title: "Video: Mengisi Nilai ke Dalam Variabel",
        caption: "Substitusi adalah mengganti huruf dengan angka, lalu menghitung hasilnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tabunganmu bisa ditulis 50.000 + 20.000 × m, dengan m jumlah minggu. Coba isi pelan-pelan: minggu ke-1 jadi 70.000, minggu ke-2 jadi 90.000, minggu ke-3 jadi 110.000. Yang kita lakukan hanyalah mengganti m dengan angka, lalu menghitung. Itulah inti substitusi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Ganti dulu, hitung kemudian",
        html: "Substitusi punya dua langkah sederhana: <strong>ganti</strong> setiap variabel dengan nilainya, lalu <strong>hitung</strong> mengikuti urutan operasi (perkalian sebelum penjumlahan). Hati-hati: 3x saat x = 4 berarti 3 × 4 = 12, bukan 34.",
      },
      {
        type: "widget",
        widget: "SimulatorOperasi",
      },
      {
        type: "chart",
        variant: "area",
        title: "Pertumbuhan Tabungan dari Minggu ke Minggu",
        unit: "rupiah",
        source: "ilustrasi 50.000 + 20.000 per minggu",
        note: "Tiap titik adalah hasil substitusi m ke bentuk 50.000 + 20.000m. Pola bertambah Rp20.000 yang tetap.",
        data: [
          { label: "Minggu 0", value: 50000, color: "#fb7185" },
          { label: "Minggu 1", value: 70000, color: "#f472b6" },
          { label: "Minggu 2", value: 90000, color: "#e879f9" },
          { label: "Minggu 3", value: 110000, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan bentuk 50.000 + 20.000m, berapa tabungan setelah 5 minggu?",
        answer: 150000,
        prefix: "Rp",
        solution:
          "Ganti m dengan 5: 50.000 + 20.000 × 5 = 50.000 + 100.000 = <strong>Rp150.000</strong>.",
        hint: "Kalikan dulu 20.000 dengan 5, baru tambahkan 50.000.",
      },
      {
        type: "calcExercise",
        prompt: "Berapa nilai dari 3x - 4 jika x = 6?",
        answer: 14,
        solution:
          "Ganti x dengan 6: 3 × 6 - 4 = 18 - 4 = <strong>14</strong>. Ingat, kerjakan perkalian dulu baru pengurangan.",
        hint: "Hitung 3 × 6 terlebih dahulu.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan nilai x dengan hasil dari bentuk 2x + 1.",
        pairs: [
          { left: "x = 0", right: "1" },
          { left: "x = 1", right: "3" },
          { left: "x = 2", right: "5" },
          { left: "x = 3", right: "7" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Konversi suhu",
        html: "Untuk mengubah suhu Celcius ke Fahrenheit dipakai bentuk 1,8C + 32. Saat air mendidih, C = 100, maka substitusi memberi 1,8 × 100 + 32 = 180 + 32 = <strong>212</strong> derajat Fahrenheit. Satu bentuk aljabar yang sama bisa dipakai untuk suhu berapa pun, cukup ganti nilai C.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah banyak mencoba, baru kita rumuskan: <strong>menghitung nilai bentuk aljabar</strong> dilakukan dengan substitusi, yaitu mengganti setiap variabel dengan nilai yang diberikan, lalu menghitung mengikuti urutan operasi. Inilah jembatan yang mengubah simbol abstrak menjadi angka nyata.",
      },
      {
        type: "takeaways",
        items: [
          "Substitusi berarti mengganti variabel dengan nilai tertentu, lalu menghitung.",
          "Kerjakan perkalian sebelum penjumlahan; 3x saat x=4 adalah 12, bukan 34.",
          "Satu bentuk aljabar bisa dipakai berulang untuk nilai variabel yang berbeda.",
          "Substitusi mengubah simbol abstrak menjadi jawaban angka yang nyata.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Nilai dari 4x + 2 untuk x = 3 adalah?",
            options: ["14", "18", "24", "12"],
            answer: 0,
            explain: "4 × 3 + 2 = 12 + 2 = 14.",
          },
          {
            q: "Jika m = 2, berapa nilai 50.000 + 20.000m?",
            options: ["70.000", "90.000", "110.000", "40.000"],
            answer: 1,
            explain: "50.000 + 20.000 × 2 = 50.000 + 40.000 = 90.000.",
          },
          {
            q: "Kesalahan umum saat menghitung 5y untuk y = 3 adalah?",
            options: [
              "Menulis hasilnya 15",
              "Menulis hasilnya 53",
              "Mengalikan 5 dengan 3",
              "Mengganti y dengan 3",
            ],
            answer: 1,
            explain: "5y berarti 5 × 3 = 15, bukan menempel menjadi 53.",
          },
          {
            q: "Nilai dari 2a + 3b jika a = 4 dan b = 1 adalah?",
            options: ["11", "9", "14", "8"],
            answer: 0,
            explain: "2 × 4 + 3 × 1 = 8 + 3 = 11.",
          },
          {
            q: "Mengapa satu bentuk aljabar berguna untuk banyak situasi?",
            options: [
              "Karena hanya bisa dipakai sekali",
              "Karena nilainya tidak pernah berubah",
              "Karena kita bisa menggantinya dengan nilai variabel apa pun",
              "Karena tidak memerlukan perhitungan",
            ],
            answer: 2,
            explain: "Dengan mengganti nilai variabel, bentuk yang sama menjawab banyak kasus.",
          },
        ],
      },
    ],
  },
];
