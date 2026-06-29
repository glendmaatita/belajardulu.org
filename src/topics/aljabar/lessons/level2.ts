import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "persamaan-satu-variabel",
    levelId: "persamaan-linear",
    order: 1,
    title: "Persamaan Satu Variabel: Ide Timbangan Seimbang",
    summary:
      "Sebelum menghafal langkah, kita rasakan dulu bahwa tanda sama dengan itu seperti timbangan yang harus selalu seimbang.",
    durationMin: 13,
    tags: ["aljabar", "persamaan", "timbangan", "satu-variabel"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan sebuah timbangan dua piring. Di piring kiri ada satu kantong tertutup berisi kelereng (jumlahnya belum kita tahu) ditambah 2 kelereng lepas. Di piring kanan ada 9 kelereng. Timbangan itu seimbang sempurna. Tanpa membuka kantong, bisakah kamu tahu berapa isinya? Ayo pikirkan dulu dengan akal sehat sebelum kita tulis rumus.",
      },
      {
        type: "video",
        comp: "PersamaanVideo",
        title: "Video: Persamaan sebagai Timbangan",
        caption: "Tanda sama dengan berarti dua sisi yang nilainya benar-benar sama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Isi kantong kita sebut <strong>x</strong>. Maka timbangan tadi berbunyi: x + 2 = 9. Untuk menjaga timbangan tetap seimbang, apa pun yang kita ambil dari satu sisi harus kita ambil juga dari sisi lain. Ambil 2 kelereng dari kedua piring, maka tersisa x = 7. Kantong itu berisi 7 kelereng. Tidak ada sihir, hanya menjaga keseimbangan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bukan sekadar mencari x",
        html: "Menyelesaikan persamaan bukan menebak-nebak. Ia adalah <strong>menjaga keseimbangan</strong>: selama kita melakukan operasi yang sama persis di kedua ruas, kebenaran kalimatnya tetap terjaga sampai x sendirian.",
      },
      {
        type: "widget",
        widget: "SimulatorTimbangan",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah timbangan seimbang berbunyi x + 5 = 12. Berapa nilai x?",
        answer: 7,
        solution:
          "Ambil 5 dari kedua ruas agar tetap seimbang: x + 5 - 5 = 12 - 5, sehingga <strong>x = 7</strong>.",
        hint: "Hilangkan angka yang menempel pada x dengan mengurangi di kedua ruas.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua kantong berisi sama banyak total 10 kelereng, ditulis 2x = 10. Berapa isi satu kantong?",
        answer: 5,
        suffix: " kelereng",
        solution:
          "Bagi kedua ruas dengan 2 agar tetap seimbang: 2x ÷ 2 = 10 ÷ 2, jadi <strong>x = 5</strong>.",
        hint: "Kalau x dikali 2, lakukan kebalikannya: bagi 2 di kedua ruas.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana operasi yang menjaga timbangan tetap seimbang dan mana yang merusaknya?",
        buckets: ["Tetap seimbang", "Merusak keseimbangan"],
        items: [
          { text: "Mengurangi 3 di kedua ruas", bucket: "Tetap seimbang" },
          { text: "Membagi kedua ruas dengan 2", bucket: "Tetap seimbang" },
          { text: "Menambah 4 hanya di ruas kiri", bucket: "Merusak keseimbangan" },
          { text: "Mengalikan 5 hanya di ruas kanan", bucket: "Merusak keseimbangan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Takaran resep apotek",
        html: "Seorang apoteker menimbang bahan. Wadah kosong beratnya 50 gram, lalu ia tambah serbuk obat sampai timbangan menunjukkan 130 gram. Berapa berat serbuknya? Ia memodelkan: 50 + <strong>b</strong> = 130, lalu kurangi 50 di kedua sisi, b = 80 gram. Ide timbangan yang sama dipakai di laboratorium sungguhan setiap hari.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berpetualang, baru kita rumuskan: <strong>persamaan linear satu variabel</strong> berbentuk ax + b = c. Prinsipnya satu, yaitu <strong>kesetimbangan</strong>: lakukan operasi yang sama di kedua ruas (tambah, kurang, kali, atau bagi) hingga x berdiri sendiri. Selama kedua ruas diperlakukan sama, nilai kebenarannya tidak berubah.",
      },
      {
        type: "takeaways",
        items: [
          "Tanda sama dengan berarti kedua ruas benar-benar bernilai sama, seperti timbangan seimbang.",
          "Apa pun yang dilakukan pada satu ruas harus dilakukan sama persis pada ruas lain.",
          "Untuk membuat x sendirian, lakukan operasi kebalikan: tambah lawan kurang, kali lawan bagi.",
          "Menyelesaikan persamaan adalah menjaga keseimbangan, bukan menebak.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada persamaan x + 2 = 9, langkah yang benar untuk mencari x adalah?",
            options: [
              "Menambah 2 di kedua ruas",
              "Mengurangi 2 di kedua ruas",
              "Mengurangi 2 hanya di ruas kiri",
              "Mengalikan 9 di kedua ruas",
            ],
            answer: 1,
            explain: "Kurangi 2 di kedua ruas agar seimbang: x = 9 - 2 = 7.",
          },
          {
            q: "Penyelesaian dari 2x = 10 adalah?",
            options: ["20", "8", "5", "12"],
            answer: 2,
            explain: "Bagi kedua ruas dengan 2: x = 10 ÷ 2 = 5.",
          },
          {
            q: "Manakah operasi yang TIDAK menjaga keseimbangan persamaan?",
            options: [
              "Mengurangi 3 di kedua ruas",
              "Membagi 4 di kedua ruas",
              "Menambah 5 hanya di satu ruas",
              "Menambah 5 di kedua ruas",
            ],
            answer: 2,
            explain: "Operasi harus dikenakan pada kedua ruas; hanya satu ruas akan merusak keseimbangan.",
          },
          {
            q: "Bentuk umum persamaan linear satu variabel adalah?",
            options: ["ax² + bx + c", "ax + b = c", "a + b + c", "x = y"],
            answer: 1,
            explain: "Persamaan linear satu variabel berbentuk ax + b = c dengan pangkat x adalah 1.",
          },
          {
            q: "Jika 50 + b = 130, maka b bernilai?",
            options: ["180", "80", "100", "60"],
            answer: 1,
            explain: "Kurangi 50 di kedua ruas: b = 130 - 50 = 80.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "memindah-ruas",
    levelId: "persamaan-linear",
    order: 2,
    title: "Memindah Ruas: Mengapa Tandanya Berubah",
    summary:
      "Banyak orang menghafal 'pindah ruas, ganti tanda' tanpa tahu sebabnya. Kita bongkar dulu rahasianya lewat timbangan.",
    durationMin: 12,
    tags: ["aljabar", "persamaan", "pindah-ruas", "tanda"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu mungkin pernah mendengar trik: 'kalau pindah ruas, tandanya berubah'. Yang tambah jadi kurang, yang kali jadi bagi. Tapi mengapa begitu? Apakah ini sihir aturan? Sebelum percaya begitu saja, ayo kita buktikan sendiri dari mana asal aturan itu.",
      },
      {
        type: "video",
        comp: "MatematikaVsBerhitung",
        title: "Video: Aturan yang Punya Alasan",
        caption: "Trik 'pindah ruas' sebenarnya hanyalah cara cepat menulis langkah yang sama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil persamaan x + 3 = 8. Cara jujurnya: kurangi 3 di <strong>kedua</strong> ruas, hingga x = 8 - 3 = 5. Perhatikan, angka +3 di kiri seolah 'pindah' ke kanan dan menjadi -3. Padahal yang terjadi cuma satu: kita mengurangi 3 di dua sisi. 'Pindah ruas, ganti tanda' hanyalah ringkasan dari langkah itu.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Aturan bukan untuk dihafal buta",
        html: "Setiap aturan aljabar punya <strong>alasan</strong>. Memindah ruas dengan mengganti tanda bekerja karena kita sedang melakukan operasi kebalikan yang sama di kedua ruas. Paham alasannya membuatmu tak pernah salah arah.",
      },
      {
        type: "widget",
        widget: "SimulatorTimbangan",
      },
      {
        type: "calcExercise",
        prompt:
          "Selesaikan x - 4 = 6 dengan memindah ruas. Berapa x?",
        answer: 10,
        solution:
          "Angka -4 di kiri pindah ke kanan menjadi +4: x = 6 + 4 = <strong>10</strong>. Sama saja dengan menambah 4 di kedua ruas.",
        hint: "Yang dikurang menjadi ditambah saat pindah ruas.",
      },
      {
        type: "calcExercise",
        prompt:
          "Selesaikan x + 7 = 2. Berapa nilai x?",
        answer: -5,
        solution:
          "Pindahkan +7 menjadi -7: x = 2 - 7 = <strong>-5</strong>. Jawaban boleh negatif; keseimbangan tetap terjaga.",
        hint: "2 dikurangi 7 menghasilkan bilangan negatif.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan suku saat masih di ruas asal dengan bentuknya setelah pindah ruas.",
        pairs: [
          { left: "+ 5 di ruas kiri", right: "- 5 di ruas kanan" },
          { left: "- 8 di ruas kiri", right: "+ 8 di ruas kanan" },
          { left: "× 3 (mengali) di ruas kiri", right: "÷ 3 (membagi) di ruas kanan" },
          { left: "÷ 2 (membagi) di ruas kiri", right: "× 2 (mengali) di ruas kanan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Saldo tabungan",
        html: "Rina menabung sejumlah uang, lalu menambah Rp20.000, dan saldonya jadi Rp95.000. Ia menulis t + 20.000 = 95.000. Dengan memindah ruas, +20.000 menjadi -20.000, sehingga t = 95.000 - 20.000 = Rp75.000. Ia tidak menghafal, ia paham bahwa ia sedang membatalkan tambahan tadi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah membuktikan sendiri, baru kita rumuskan: <strong>memindah suku ke ruas lain sama dengan melakukan operasi kebalikannya di kedua ruas</strong>. Maka tanda + menjadi -, tanda - menjadi +, perkalian menjadi pembagian, dan pembagian menjadi perkalian. Itu bukan sihir, hanya cara cepat menulis langkah yang menjaga keseimbangan.",
      },
      {
        type: "takeaways",
        items: [
          "'Pindah ruas, ganti tanda' adalah ringkasan dari melakukan operasi kebalikan di kedua ruas.",
          "Tambah menjadi kurang, kurang menjadi tambah saat suku pindah ruas.",
          "Perkalian menjadi pembagian, dan sebaliknya, saat faktor pindah ruas.",
          "Memahami alasan aturan lebih kuat daripada menghafalnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Saat memindahkan +3 dari ruas kiri ke ruas kanan, ia menjadi?",
            options: ["+3", "-3", "×3", "÷3"],
            answer: 1,
            explain: "Memindah suku tambah berarti menguranginya di kedua ruas, jadi menjadi -3.",
          },
          {
            q: "Penyelesaian dari x - 4 = 6 adalah?",
            options: ["2", "10", "-2", "24"],
            answer: 1,
            explain: "-4 pindah menjadi +4: x = 6 + 4 = 10.",
          },
          {
            q: "Nilai x dari x + 7 = 2 adalah?",
            options: ["9", "5", "-5", "-9"],
            answer: 2,
            explain: "+7 pindah menjadi -7: x = 2 - 7 = -5.",
          },
          {
            q: "Alasan sebenarnya tanda berubah saat pindah ruas adalah?",
            options: [
              "Aturan yang harus dihafal",
              "Karena kita melakukan operasi kebalikan di kedua ruas",
              "Karena ruas kanan selalu negatif",
              "Karena x harus positif",
            ],
            answer: 1,
            explain: "Pindah ruas hanyalah ringkasan dari operasi kebalikan yang sama di kedua ruas.",
          },
          {
            q: "Pada 3x = 12, saat 3 (pengali) dipindah ke ruas kanan ia menjadi?",
            options: ["+3", "-3", "pembagi (÷3)", "pangkat 3"],
            answer: 2,
            explain: "Faktor pengali pindah menjadi pembagi: x = 12 ÷ 3 = 4.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "persamaan-dengan-pecahan",
    levelId: "persamaan-linear",
    order: 3,
    title: "Persamaan dengan Pecahan: Bersihkan Dulu Penyebutnya",
    summary:
      "Pecahan dalam persamaan sering bikin gentar. Kita cari cara melenyapkannya lebih dulu supaya soal jadi sederhana.",
    durationMin: 13,
    tags: ["aljabar", "persamaan", "pecahan", "kpk"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah pita dipotong jadi 3 bagian sama panjang, dan satu bagiannya 5 cm. Berapa panjang pita semula? Kalau panjang pita kita sebut x, maka sepertiganya bernilai 5, ditulis x/3 = 5. Pecahan terlihat menakutkan, tetapi sebelum panik, ayo cari cara membuatnya lenyap.",
      },
      {
        type: "video",
        comp: "PersamaanVideo",
        title: "Video: Menyelesaikan Persamaan Bertahap",
        caption: "Prinsip kesetimbangan tetap berlaku walau ada pecahan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Untuk x/3 = 5, ingat ide timbangan: kalikan <strong>kedua</strong> ruas dengan 3. Di kiri, 3 dan pembagi 3 saling membatalkan menyisakan x; di kanan menjadi 5 × 3 = 15. Jadi x = 15, dan pita semula 15 cm. Trik intinya: lenyapkan penyebut dengan mengalikannya ke kedua ruas.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pecahan bukan musuh",
        html: "Pecahan dalam persamaan cuma terlihat rumit. Dengan mengalikan kedua ruas dengan <strong>KPK semua penyebut</strong>, pecahan langsung hilang dan tersisa persamaan biasa yang sudah kamu kuasai.",
      },
      {
        type: "widget",
        widget: "SimulatorTimbangan",
      },
      {
        type: "calcExercise",
        prompt:
          "Selesaikan x/4 = 6. Berapa nilai x?",
        answer: 24,
        solution:
          "Kalikan kedua ruas dengan 4: x = 6 × 4 = <strong>24</strong>.",
        hint: "Hilangkan penyebut 4 dengan mengalikan 4 di kedua ruas.",
      },
      {
        type: "calcExercise",
        prompt:
          "Selesaikan x/2 + 1 = 4. Berapa nilai x?",
        answer: 6,
        solution:
          "Pindahkan 1: x/2 = 4 - 1 = 3. Lalu kalikan kedua ruas dengan 2: x = 3 × 2 = <strong>6</strong>.",
        hint: "Singkirkan dulu angka +1, baru lenyapkan penyebut 2.",
      },
      {
        type: "calcExercise",
        prompt:
          "Selesaikan x/2 + x/3 = 5. Berapa nilai x? (KPK dari 2 dan 3 adalah 6)",
        answer: 6,
        solution:
          "Kalikan semua ruas dengan 6: 3x + 2x = 30, jadi 5x = 30, sehingga x = <strong>6</strong>.",
        hint: "Kalikan setiap suku dengan KPK penyebut, yaitu 6.",
      },
      {
        type: "classifyExercise",
        prompt: "Untuk melenyapkan penyebut, dengan berapa kedua ruas harus dikalikan?",
        buckets: ["Kalikan 6", "Kalikan 12"],
        items: [
          { text: "x/2 + x/3 = 4 (penyebut 2 dan 3)", bucket: "Kalikan 6" },
          { text: "x/6 = 1 (penyebut 6)", bucket: "Kalikan 6" },
          { text: "x/4 + x/3 = 2 (penyebut 4 dan 3)", bucket: "Kalikan 12" },
          { text: "x/12 = 1 (penyebut 12)", bucket: "Kalikan 12" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membagi tagihan",
        html: "Tiga sahabat makan bersama dan sepakat membagi rata tagihan. Bagian tiap orang Rp35.000. Berapa total tagihannya? Mereka menulis x/3 = 35.000, lalu kalikan kedua ruas dengan 3, sehingga x = Rp105.000. Persamaan pecahan muncul setiap kali sesuatu dibagi rata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berlatih, baru kita rumuskan strateginya: untuk persamaan yang memuat pecahan, <strong>kalikan kedua ruas dengan KPK semua penyebut</strong> agar pecahan lenyap. Setelah itu, selesaikan seperti persamaan linear biasa memakai prinsip kesetimbangan.",
      },
      {
        type: "takeaways",
        items: [
          "Pecahan dalam persamaan dapat dihilangkan dengan mengalikan kedua ruas.",
          "Kalikan dengan KPK dari semua penyebut agar semua pecahan lenyap sekaligus.",
          "Setelah pecahan hilang, soal kembali menjadi persamaan linear biasa.",
          "Prinsip kesetimbangan tetap berlaku walau bentuknya pecahan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Penyelesaian dari x/3 = 5 adalah?",
            options: ["8", "15", "2", "53"],
            answer: 1,
            explain: "Kalikan kedua ruas dengan 3: x = 5 × 3 = 15.",
          },
          {
            q: "Langkah pertama terbaik untuk x/4 = 6 adalah?",
            options: [
              "Bagi kedua ruas dengan 4",
              "Kalikan kedua ruas dengan 4",
              "Tambah 4 di kedua ruas",
              "Kurangi 6 di kedua ruas",
            ],
            answer: 1,
            explain: "Kalikan dengan 4 untuk melenyapkan penyebut: x = 24.",
          },
          {
            q: "Untuk x/2 + x/3 = 5, kedua ruas sebaiknya dikalikan dengan?",
            options: ["2", "3", "5", "6"],
            answer: 3,
            explain: "KPK dari 2 dan 3 adalah 6, sehingga semua pecahan lenyap.",
          },
          {
            q: "Penyelesaian dari x/2 + 1 = 4 adalah?",
            options: ["6", "10", "3", "5"],
            answer: 0,
            explain: "x/2 = 3, lalu kalikan 2: x = 6.",
          },
          {
            q: "Jika x/3 = 35.000, maka x bernilai?",
            options: ["Rp11.667", "Rp35.003", "Rp105.000", "Rp38.000"],
            answer: 2,
            explain: "Kalikan kedua ruas dengan 3: x = 35.000 × 3 = 105.000.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "soal-cerita-persamaan",
    levelId: "persamaan-linear",
    order: 4,
    title: "Soal Cerita: Menerjemahkan Kalimat jadi Persamaan",
    summary:
      "Bagian tersulit soal cerita bukan menghitung, melainkan mengubah cerita menjadi persamaan. Kita latih nalarnya dulu.",
    durationMin: 14,
    tags: ["aljabar", "persamaan", "soal-cerita", "pemodelan"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah taksi memasang tarif buka Rp5.000, lalu menambah Rp3.000 untuk setiap kilometer. Setelah sampai tujuan, argo menunjukkan Rp20.000. Berapa kilometer jarak yang ditempuh? Jangan buru-buru menghitung. Mari kita ubah cerita ini menjadi kalimat matematika lebih dulu.",
      },
      {
        type: "video",
        comp: "AljabarVideo",
        title: "Video: Dari Cerita ke Simbol",
        caption: "Kunci soal cerita adalah memberi nama pada yang ditanya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Misalkan jarak = <strong>k</strong> kilometer. Tarif buka Rp5.000 selalu ada, lalu Rp3.000 dikali jarak. Total = 5.000 + 3.000k, dan totalnya 20.000. Maka 5.000 + 3.000k = 20.000. Pindahkan 5.000: 3.000k = 15.000, lalu bagi 3.000: k = 5 km. Begitu cerita berubah jadi persamaan, sisanya tinggal langkah yang sudah kamu kuasai.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Menerjemahkan, bukan menghafal pola soal",
        html: "Tidak ada gunanya menghafal jenis-jenis soal cerita. Yang penting satu kebiasaan: <strong>beri nama variabel untuk yang ditanya</strong>, lalu tuliskan hubungan dalam cerita menjadi persamaan.",
      },
      {
        type: "widget",
        widget: "PolaKeAljabar",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Argo Taksi terhadap Jarak Tempuh",
        unit: "rupiah (ribuan)",
        source: "ilustrasi tarif: buka Rp5.000 + Rp3.000/km",
        note: "Tiap kilometer menambah Rp3.000. Saat argo mencapai Rp20.000, jarak yang cocok adalah 5 km.",
        data: [
          { label: "0 km", value: 5, color: "#fb7185" },
          { label: "1 km", value: 8, color: "#f472b6" },
          { label: "3 km", value: 14, color: "#e879f9" },
          { label: "5 km", value: 20, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Tarif taksi: 5.000 + 3.000k = 20.000. Berapa kilometer (k) jaraknya?",
        answer: 5,
        suffix: " km",
        solution:
          "Pindahkan 5.000: 3.000k = 15.000. Bagi 3.000: k = <strong>5</strong> km.",
        hint: "Singkirkan dulu tarif buka 5.000, lalu bagi dengan 3.000.",
      },
      {
        type: "calcExercise",
        prompt:
          "Umur Ayah 3 kali umur Budi. Jika umur Ayah 36 tahun, berapa umur Budi? (Model: 3b = 36)",
        answer: 12,
        suffix: " tahun",
        solution:
          "Bagi kedua ruas dengan 3: b = 36 ÷ 3 = <strong>12</strong> tahun.",
        hint: "Umur Ayah = 3 × umur Budi, jadi bagi 36 dengan 3.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan kalimat cerita dengan persamaannya (x = bilangan yang dicari).",
        pairs: [
          { left: "Sebuah bilangan ditambah 7 hasilnya 12", right: "x + 7 = 12" },
          { left: "Dua kali sebuah bilangan adalah 18", right: "2x = 18" },
          { left: "Sebuah bilangan dikurangi 4 sama dengan 9", right: "x - 4 = 9" },
          { left: "Setengah dari sebuah bilangan adalah 10", right: "x/2 = 10" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Belanja seragam",
        html: "Sebuah toko menjual kemeja seharga sama tiap potong. Ibu membeli 4 kemeja dan membayar Rp240.000 tanpa potongan lain. Berapa harga satu kemeja? Modelnya: 4h = 240.000, sehingga h = 240.000 ÷ 4 = Rp60.000. Sekali cerita diubah jadi persamaan, jawabannya mengalir dengan sendirinya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berlatih, baru kita rangkum langkahnya: (1) <strong>baca cerita dan tentukan yang ditanya</strong>, beri ia nama variabel; (2) <strong>terjemahkan hubungan</strong> dalam cerita menjadi persamaan; (3) <strong>selesaikan</strong> dengan prinsip kesetimbangan; (4) <strong>periksa</strong> apakah jawaban masuk akal dengan cerita semula.",
      },
      {
        type: "takeaways",
        items: [
          "Langkah tersulit soal cerita adalah menerjemahkannya menjadi persamaan, bukan menghitung.",
          "Selalu mulai dengan memberi nama variabel untuk hal yang ditanya.",
          "Tuliskan hubungan dalam cerita apa adanya menjadi kalimat matematika.",
          "Periksa kembali apakah jawaban masuk akal terhadap cerita aslinya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Langkah pertama menyelesaikan soal cerita sebaiknya?",
            options: [
              "Langsung menghitung",
              "Memberi nama variabel untuk yang ditanya",
              "Menebak jawabannya",
              "Menghafal jenis soal",
            ],
            answer: 1,
            explain: "Beri nama variabel dulu, baru cerita bisa diterjemahkan menjadi persamaan.",
          },
          {
            q: "Tarif taksi 5.000 + 3.000k = 20.000 menghasilkan k sama dengan?",
            options: ["3 km", "5 km", "8 km", "15 km"],
            answer: 1,
            explain: "3.000k = 15.000, maka k = 5 km.",
          },
          {
            q: "Kalimat 'dua kali sebuah bilangan adalah 18' menjadi?",
            options: ["x + 2 = 18", "2x = 18", "x/2 = 18", "x - 2 = 18"],
            answer: 1,
            explain: "Dua kali bilangan berarti 2x, jadi 2x = 18.",
          },
          {
            q: "Jika 4 kemeja seharga Rp240.000 (4h = 240.000), harga satu kemeja adalah?",
            options: ["Rp40.000", "Rp60.000", "Rp80.000", "Rp120.000"],
            answer: 1,
            explain: "h = 240.000 ÷ 4 = 60.000.",
          },
          {
            q: "Langkah terakhir yang baik setelah menemukan jawaban adalah?",
            options: [
              "Langsung berhenti",
              "Memeriksa apakah jawaban masuk akal dengan cerita",
              "Mengganti variabel",
              "Menghapus persamaan",
            ],
            answer: 1,
            explain: "Selalu periksa kembali apakah jawaban sesuai dan masuk akal terhadap cerita semula.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "variabel-di-kedua-ruas",
    levelId: "persamaan-linear",
    order: 5,
    title: "Variabel di Kedua Ruas Timbangan",
    summary:
      "Bagaimana jika huruf x muncul di kiri dan kanan sekaligus? Kita bandingkan dua paket data dulu sampai langkahnya terasa wajar.",
    durationMin: 14,
    tags: ["aljabar", "persamaan", "kedua ruas", "linear"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua paket data bersaing. Paket Hemat: biaya tetap Rp20.000 ditambah Rp2.000 per GB. Paket Bebas: biaya tetap Rp5.000 ditambah Rp5.000 per GB. Pertanyaannya: pada berapa GB kedua paket berbiaya sama? Di sinilah huruf yang sama muncul di dua sisi sekaligus.",
      },
      {
        type: "video",
        comp: "PersamaanVideo",
        title: "Video: Menyeimbangkan Dua Sisi yang Berisi x",
        caption: "Memindahkan suku variabel ke satu ruas membuat timbangan kembali sederhana.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tulis biaya kedua paket: <strong>20.000 + 2.000x = 5.000 + 5.000x</strong>, dengan x jumlah GB. Kedua sisi punya x. Bayangkan timbangan: kalau kita ambil 2.000x dari kedua sisi, keseimbangan tetap terjaga. Sisi kiri tinggal 20.000, sisi kanan menjadi 5.000 + 3.000x. Variabel pun berkumpul di satu sisi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kumpulkan yang sejenis di sisi yang sama",
        html: "Aturannya: pindahkan semua suku <strong>variabel</strong> ke satu ruas dan semua <strong>konstanta</strong> ke ruas lain, sambil menjaga timbangan tetap seimbang. Dari 20.000 = 5.000 + 3.000x, kurangi 5.000 di kedua sisi menjadi 15.000 = 3.000x, lalu bagi 3.000, sehingga x = 5.",
      },
      {
        type: "widget",
        widget: "SimulatorTimbangan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Total Biaya Paket Bebas seiring Pemakaian",
        unit: "rupiah",
        source: "Paket Bebas: 5.000 + 5.000 per GB",
        note: "Paket Bebas mulai lebih murah, tetapi naik Rp5.000/GB sehingga menyusul Paket Hemat (mulai Rp20.000, naik Rp2.000/GB) tepat di 5 GB pada Rp30.000.",
        data: [
          { label: "1 GB", value: 10000, color: "#f472b6" },
          { label: "2 GB", value: 15000, color: "#ec4899" },
          { label: "3 GB", value: 20000, color: "#e879f9" },
          { label: "4 GB", value: 25000, color: "#d946ef" },
          { label: "5 GB", value: 30000, color: "#c026d3" },
          { label: "6 GB", value: 35000, color: "#a21caf" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Selesaikan persamaan 3x + 2 = x + 10. Berapa nilai x?",
        answer: 4,
        solution:
          "Kurangi x dari kedua ruas: 2x + 2 = 10. Kurangi 2: 2x = 8. Bagi 2: x = <strong>4</strong>. Cek: 3(4) + 2 = 14 dan 4 + 10 = 14, cocok.",
        hint: "Pindahkan x ke kiri dan angka ke kanan, lalu bagi.",
      },
      {
        type: "calcExercise",
        prompt: "Pada berapa GB Paket Hemat (20.000 + 2.000x) sama dengan Paket Bebas (5.000 + 5.000x)?",
        answer: 5,
        suffix: " GB",
        solution:
          "20.000 + 2.000x = 5.000 + 5.000x. Kurangi 2.000x: 20.000 = 5.000 + 3.000x. Kurangi 5.000: 15.000 = 3.000x, jadi x = <strong>5 GB</strong>. Keduanya berbiaya Rp30.000.",
        hint: "Kumpulkan x di kanan dan angka di kiri.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap persamaan dengan nilai x yang menyelesaikannya.",
        pairs: [
          { left: "2x + 5 = x + 9", right: "x = 4" },
          { left: "3x - 1 = x + 9", right: "x = 5" },
          { left: "x + 8 = 4x + 2", right: "x = 2" },
          { left: "5x - 3 = 3x + 9", right: "x = 6" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memilih taksi argo",
        html: "Taksi A memasang buka pintu Rp10.000 lalu Rp4.000 per km. Taksi B buka pintu Rp25.000 lalu Rp2.500 per km. Persamaannya 10.000 + 4.000d = 25.000 + 2.500d. Kumpulkan d: 1.500d = 15.000, jadi d = <strong>10 km</strong>, di mana keduanya sama-sama Rp50.000. Untuk jarak di bawah 10 km Taksi A lebih murah, di atas 10 km Taksi B lebih hemat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berlatih, baru kita rumuskan langkahnya: untuk persamaan dengan variabel di kedua ruas, <strong>kurangi suku variabel yang lebih kecil</strong> dari kedua sisi agar variabel berkumpul di satu ruas, lalu pindahkan konstanta ke ruas lain, dan terakhir bagi dengan koefisiennya. Timbangan tetap seimbang asal setiap langkah dikenakan pada kedua sisi.",
      },
      {
        type: "takeaways",
        items: [
          "Saat x ada di dua ruas, kumpulkan dulu semua suku variabel ke satu ruas.",
          "Konstanta dipindahkan ke ruas lain, lalu bagi dengan koefisien akhir.",
          "Setiap operasi harus dikenakan pada kedua sisi agar timbangan tetap seimbang.",
          "Titik di mana dua biaya sama persis adalah solusi persamaannya.",
          "Selalu cek jawaban dengan memasukkannya kembali ke kedua ruas.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Langkah pertama yang paling rapi untuk 4x + 1 = 2x + 9 adalah?",
            options: [
              "Membagi semua dengan 4",
              "Mengurangi 2x dari kedua ruas",
              "Menambah 9 ke kiri saja",
              "Mengalikan kedua ruas dengan x",
            ],
            answer: 1,
            explain: "Mengurangi 2x dari kedua ruas mengumpulkan variabel di satu sisi: 2x + 1 = 9.",
          },
          {
            q: "Solusi dari 5x = 2x + 12 adalah?",
            options: ["x = 2", "x = 3", "x = 4", "x = 6"],
            answer: 2,
            explain: "5x - 2x = 12, jadi 3x = 12 dan x = 4.",
          },
          {
            q: "Pada persamaan 20.000 + 2.000x = 5.000 + 5.000x, mengurangi 2.000x dari kedua ruas membuat sisi kanan menjadi?",
            options: ["5.000 + 3.000x", "5.000 + 7.000x", "25.000x", "3.000x"],
            answer: 0,
            explain: "5.000 + 5.000x - 2.000x = 5.000 + 3.000x.",
          },
          {
            q: "Jika dua paket sama biaya pada 5 GB, maka di bawah 5 GB?",
            options: [
              "Paket yang naik lebih lambat selalu lebih mahal",
              "Paket dengan biaya tetap lebih rendah lebih murah",
              "Keduanya selalu sama",
              "Tidak bisa dibandingkan",
            ],
            answer: 1,
            explain: "Di bawah titik temu, paket dengan biaya tetap awal lebih rendah (Paket Bebas) lebih murah.",
          },
          {
            q: "Mengapa kita boleh mengurangi suku yang sama dari kedua ruas?",
            options: [
              "Karena variabel boleh dihapus kapan saja",
              "Karena mengurangi hal sama di dua sisi menjaga keseimbangan",
              "Karena konstanta tidak penting",
              "Karena x selalu positif",
            ],
            answer: 1,
            explain: "Seperti timbangan, mengambil berat sama dari kedua sisi menjaga kesetaraan.",
          },
        ],
      },
    ],
  },
];
