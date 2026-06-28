import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "luas-daerah-antara-kurva",
    levelId: "aplikasi-integral",
    order: 1,
    title: "Luas Daerah Antara Dua Kurva",
    summary:
      "Sebelum menulis rumus, kita potong-potong daerah di antara dua kurva menjadi pita tipis lalu menjumlahkannya.",
    durationMin: 14,
    tags: ["kalkulus", "integral", "luas", "aplikasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan sebidang sawah yang dibatasi sungai berkelok di atas dan jalan setapak di bawah. Berapa luas tanah di antara keduanya? Kalau batasnya garis lurus, mudah. Tetapi sungai berkelok mengikuti kurva. Ayo kita selidiki dulu cara mengukur luas semacam ini sebelum menuliskan rumusnya.",
      },
      {
        type: "video",
        comp: "IntegralVideo",
        title: "Video: Luas di Bawah dan Antara Kurva",
        caption: "Menjumlahkan pita-pita tipis untuk menemukan luas sebuah daerah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil dua kurva: yang atas f(x) = 4 dan yang bawah g(x) = x kuadrat, pada selang x dari 0 sampai 2. Di setiap titik x, tinggi pita adalah selisih f(x) - g(x). Coba hitung tinggi di x = 0 (yaitu 4 - 0 = 4), di x = 1 (yaitu 4 - 1 = 3), dan di x = 2 (yaitu 4 - 4 = 0). Pita makin tipis ke kanan.",
      },
      {
        type: "widget",
        widget: "SimulatorIntegral",
      },
      {
        type: "chart",
        variant: "area",
        title: "Tinggi Pita f(x) - g(x) dengan f(x)=4 dan g(x)=x kuadrat",
        unit: "tinggi pita",
        source: "ilustrasi edukatif",
        note: "Luas daerah adalah jumlah semua tinggi pita ini dikalikan lebarnya yang sangat kecil.",
        data: [
          { label: "x=0", value: 4, color: "#22d3ee" },
          { label: "x=0,5", value: 3.75, color: "#06b6d4" },
          { label: "x=1", value: 3, color: "#0891b2" },
          { label: "x=1,5", value: 1.75, color: "#0e7490" },
          { label: "x=2", value: 0, color: "#155e75" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Selalu atas dikurangi bawah",
        html: "Kunci daerah antara dua kurva: tinggi setiap pita adalah <strong>fungsi atas dikurangi fungsi bawah</strong>. Selama kita konsisten memilih mana yang di atas, hasilnya selalu positif dan masuk akal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Daerah dibatasi atas oleh f(x) = 6 dan bawah oleh g(x) = 2 pada selang x dari 0 sampai 5. Berapa luasnya?",
        answer: 20,
        suffix: " satuan luas",
        solution:
          "Tinggi pita selalu 6 - 2 = 4, dan lebar selang 5 - 0 = 5. Daerah ini persegi panjang, jadi luas = 4 x 5 = <strong>20</strong>. Integral selisih dua konstanta memang menghasilkan persegi panjang.",
        hint: "Tinggi pita = atas - bawah. Karena keduanya konstan, daerahnya persegi panjang.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan situasi dengan tinggi pita yang benar.",
        pairs: [
          { left: "Atas f(x)=10, bawah g(x)=3", right: "Tinggi pita = 7" },
          { left: "Atas f(x)=x, bawah g(x)=0 di x=4", right: "Tinggi pita = 4" },
          { left: "Atas f(x)=5, bawah g(x)=x kuadrat di x=2", right: "Tinggi pita = 1" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Luas penampang kanal air",
        html: "Insinyur merancang kanal dengan dasar melengkung mengikuti kurva g(x) dan permukaan air datar f(x). Untuk tahu berapa banyak air yang tertampung per meter panjang kanal, mereka butuh luas penampangnya. Caranya persis sama: bagi penampang menjadi pita tegak tipis, tinggi tiap pita adalah permukaan dikurangi dasar, lalu jumlahkan semuanya. Dari penjumlahan pita tak hingga inilah integral bekerja.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan polanya, baru kita tuliskan: luas daerah antara kurva atas f(x) dan kurva bawah g(x) dari x = a sampai x = b adalah <strong>integral dari a ke b atas (f(x) - g(x)) dx</strong>. Integral itulah cara resmi menjumlahkan tinggi pita kali lebar yang menyusut menuju nol.",
      },
      {
        type: "takeaways",
        items: [
          "Luas daerah antara dua kurva dihitung dengan menjumlahkan pita-pita tipis.",
          "Tinggi setiap pita adalah fungsi atas dikurangi fungsi bawah.",
          "Integral (f(x) - g(x)) dx dari a ke b memberikan luas daerah itu.",
          "Konsep ini dipakai untuk luas penampang nyata seperti kanal dan lahan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tinggi sebuah pita pada daerah antara dua kurva adalah?",
            options: [
              "Fungsi atas dikali fungsi bawah",
              "Fungsi atas dikurangi fungsi bawah",
              "Fungsi bawah dikurangi fungsi atas",
              "Jumlah kedua fungsi",
            ],
            answer: 1,
            explain: "Tinggi pita selalu fungsi atas dikurangi fungsi bawah.",
          },
          {
            q: "Luas antara f(x) = 8 dan g(x) = 3 pada selang x dari 0 sampai 4 adalah?",
            options: ["12", "20", "32", "5"],
            answer: 1,
            explain: "Tinggi 8 - 3 = 5, lebar 4, luas = 5 x 4 = 20.",
          },
          {
            q: "Integral yang memberi luas daerah antara dua kurva adalah?",
            options: [
              "Integral (f(x) + g(x)) dx",
              "Integral (f(x) - g(x)) dx dari a ke b",
              "Turunan f(x) - g(x)",
              "Integral f(x) dx saja",
            ],
            answer: 1,
            explain: "Luas = integral selisih atas dan bawah pada selang yang diminta.",
          },
          {
            q: "Mengapa kita memotong daerah menjadi pita tipis?",
            options: [
              "Agar terlihat rumit",
              "Agar tiap potongan mudah dihampiri sebagai persegi panjang lalu dijumlahkan",
              "Agar kurva hilang",
              "Karena luas tidak bisa dihitung",
            ],
            answer: 1,
            explain: "Pita tipis mendekati persegi panjang sehingga mudah dijumlahkan lewat integral.",
          },
          {
            q: "Jika fungsi atas dan bawah keduanya konstan, daerahnya berbentuk?",
            options: ["Lingkaran", "Persegi panjang", "Segitiga", "Parabola"],
            answer: 1,
            explain: "Selisih konstan dengan lebar tertentu membentuk persegi panjang.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "jarak-dari-kecepatan",
    levelId: "aplikasi-integral",
    order: 2,
    title: "Menghitung Jarak dari Grafik Kecepatan",
    summary:
      "Sebelum menulis rumus, kita baca jarak tempuh langsung dari luas di bawah grafik kecepatan.",
    durationMin: 14,
    tags: ["kalkulus", "integral", "kecepatan", "jarak"],
    blocks: [
      {
        type: "paragraph",
        html: "Spidometer mobilmu hanya menampilkan kecepatan, bukan jarak. Namun anehnya, dari catatan kecepatan saja kita bisa tahu sudah berapa jauh perjalanan. Caranya tersembunyi pada grafik kecepatan terhadap waktu. Ayo kita selidiki dulu sebelum menuliskan rumusnya.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Dari Kecepatan ke Jarak",
        caption: "Luas di bawah grafik kecepatan ternyata sama dengan jarak tempuh.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan mobil melaju tetap 60 km/jam selama 2 jam. Jarak = 60 x 2 = 120 km. Sekarang gambar grafiknya: garis datar di ketinggian 60 dari jam ke-0 sampai jam ke-2. Daerah di bawahnya adalah persegi panjang dengan tinggi 60 dan lebar 2. Luasnya 60 x 2 = 120. Persis sama dengan jaraknya. Bukan kebetulan.",
      },
      {
        type: "widget",
        widget: "SimulatorKecepatan",
      },
      {
        type: "chart",
        variant: "area",
        title: "Kecepatan Mobil yang Menanjak Bertahap (km/jam)",
        unit: "km/jam",
        source: "ilustrasi edukatif",
        note: "Jarak tempuh sama dengan luas daerah di bawah grafik kecepatan ini.",
        data: [
          { label: "jam 0", value: 20, color: "#2dd4bf" },
          { label: "jam 1", value: 40, color: "#14b8a6" },
          { label: "jam 2", value: 60, color: "#0d9488" },
          { label: "jam 3", value: 80, color: "#0f766e" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa luas = jarak?",
        html: "Bagi waktu menjadi potongan sangat pendek. Di tiap potongan, kecepatan hampir tetap, jadi jarak kecilnya = kecepatan x waktu kecil, yaitu <strong>luas satu pita tipis</strong>. Jumlahkan semua pita, dan kamu memperoleh jarak total sekaligus luas total di bawah grafik.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah sepeda melaju tetap 15 km/jam selama 3 jam. Berapa jarak tempuhnya?",
        answer: 45,
        suffix: " km",
        solution:
          "Grafik kecepatannya garis datar di 15 selama 3 jam. Luas di bawahnya = 15 x 3 = <strong>45 km</strong>. Itulah jaraknya.",
        hint: "Jarak = luas persegi panjang di bawah grafik = kecepatan x waktu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Mobil mulai dari diam dan kecepatannya naik lurus hingga 40 km/jam dalam 2 jam. Berapa jarak tempuhnya?",
        answer: 40,
        suffix: " km",
        solution:
          "Grafiknya segitiga: alas 2 jam, tinggi 40 km/jam. Luas segitiga = setengah x alas x tinggi = setengah x 2 x 40 = <strong>40 km</strong>. Integral kecepatan yang naik lurus memang membentuk segitiga.",
        hint: "Kecepatan naik lurus membentuk segitiga di bawah grafik.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan bentuk daerah di bawah grafik kecepatan berikut.",
        buckets: ["Persegi panjang", "Segitiga"],
        items: [
          { text: "Kecepatan tetap 50 km/jam", bucket: "Persegi panjang" },
          { text: "Kecepatan tetap 10 km/jam selama 4 jam", bucket: "Persegi panjang" },
          { text: "Kecepatan naik lurus dari 0 ke 60", bucket: "Segitiga" },
          { text: "Mobil berhenti lalu kecepatannya naik lurus", bucket: "Segitiga" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kotak hitam pesawat",
        html: "Perekam penerbangan menyimpan kecepatan pesawat setiap detik, tetapi penyelidik ingin tahu berapa jauh pesawat bergerak pada menit-menit terakhir. Mereka tidak mengukur jarak langsung. Sebaliknya, mereka menggambar grafik kecepatan terhadap waktu lalu menghitung luas di bawahnya. Karena kecepatan berubah-ubah, luas itu dihitung dengan menjumlahkan pita tipis tak hingga, yakni integral. Hasilnya: jarak tempuh yang akurat dari data kecepatan saja.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan polanya, baru kita tuliskan: jika v(t) adalah kecepatan pada waktu t, maka jarak tempuh dari waktu a sampai b adalah <strong>integral dari a ke b atas v(t) dt</strong>. Jarak adalah integral dari kecepatan, sama dengan luas di bawah grafik kecepatan.",
      },
      {
        type: "takeaways",
        items: [
          "Luas di bawah grafik kecepatan terhadap waktu sama dengan jarak tempuh.",
          "Pada kecepatan tetap, daerahnya persegi panjang: jarak = kecepatan x waktu.",
          "Pada kecepatan yang naik lurus, daerahnya segitiga.",
          "Secara umum, jarak = integral v(t) dt, kebalikan dari kecepatan = turunan posisi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa arti luas di bawah grafik kecepatan terhadap waktu?",
            options: ["Percepatan", "Jarak tempuh", "Kecepatan maksimum", "Waktu berhenti"],
            answer: 1,
            explain: "Luas di bawah grafik kecepatan sama dengan jarak tempuh.",
          },
          {
            q: "Mobil melaju tetap 30 km/jam selama 4 jam. Jaraknya?",
            options: ["120 km", "34 km", "7,5 km", "60 km"],
            answer: 0,
            explain: "Luas persegi panjang = 30 x 4 = 120 km.",
          },
          {
            q: "Kecepatan naik lurus dari 0 ke 20 km/jam dalam 2 jam. Jaraknya?",
            options: ["40 km", "20 km", "10 km", "80 km"],
            answer: 1,
            explain: "Luas segitiga = setengah x 2 x 20 = 20 km.",
          },
          {
            q: "Secara umum jarak dinyatakan sebagai?",
            options: [
              "Turunan kecepatan",
              "Integral kecepatan terhadap waktu",
              "Kecepatan dibagi waktu",
              "Kecepatan kali percepatan",
            ],
            answer: 1,
            explain: "Jarak = integral v(t) dt dari a ke b.",
          },
          {
            q: "Mengapa kita membagi waktu menjadi potongan pendek?",
            options: [
              "Agar kecepatan tampak tetap di tiap potongan sehingga jarak kecil mudah dihitung",
              "Agar grafik hilang",
              "Karena jam rusak",
              "Agar kecepatan menjadi nol",
            ],
            answer: 0,
            explain: "Pada potongan pendek kecepatan hampir tetap, jadi jarak kecil = luas pita tipis.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "volume-benda-putar",
    levelId: "aplikasi-integral",
    order: 3,
    title: "Volume Benda Putar: Menumpuk Cakram Tipis",
    summary:
      "Sebelum menulis rumus, kita iris benda putar menjadi cakram tipis dan menumpuknya kembali.",
    durationMin: 15,
    tags: ["kalkulus", "integral", "volume", "benda-putar"],
    blocks: [
      {
        type: "paragraph",
        html: "Lihat sebuah gelas, vas bunga, atau tiang lampu. Banyak benda di sekitar kita berbentuk simetris terhadap sebuah sumbu, seolah dibuat dengan memutar sebuah kurva. Bagaimana cara menghitung volumenya kalau bentuknya melengkung tak beraturan? Ayo kita selidiki dulu sebelum menuliskan rumusnya.",
      },
      {
        type: "video",
        comp: "IntegralVideo",
        title: "Video: Volume Benda Putar",
        caption: "Mengiris benda putar menjadi cakram tipis lalu menjumlahkan volumenya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan sebuah tabung yang dibuat dengan memutar garis datar setinggi r = 2 mengelilingi sumbu. Iris tabung itu menjadi cakram tipis tegak lurus sumbu. Tiap cakram adalah lingkaran berjari-jari 2, jadi luasnya pi x 2 kuadrat = 4 pi. Kalau tebal tiap cakram kecil, volume satu cakram = luas x tebal. Tumpuk semua cakram sepanjang tinggi, itulah volumenya.",
      },
      {
        type: "widget",
        widget: "SimulatorIntegral",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Luas Penampang Cakram saat Jari-jari r(x) Berubah",
        unit: "luas penampang (pi r kuadrat), kelipatan pi",
        source: "ilustrasi edukatif",
        note: "Volume = jumlah semua luas penampang ini dikalikan tebal cakram yang sangat kecil.",
        data: [
          { label: "r=1", value: 1, color: "#5eead4" },
          { label: "r=2", value: 4, color: "#2dd4bf" },
          { label: "r=3", value: 9, color: "#14b8a6" },
          { label: "r=4", value: 16, color: "#0d9488" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Cakram, bukan pita",
        html: "Bedanya dengan luas: di sini tiap irisan bukan pita datar, melainkan <strong>cakram lingkaran</strong> dengan luas pi x (jari-jari) kuadrat. Karena jari-jari bisa berubah di sepanjang sumbu, luas tiap cakram berbeda, dan kita jumlahkan semuanya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah tabung dibuat memutar garis r = 3 sepanjang tinggi 5. Berapa volumenya? (pakai pi sekitar 3,14)",
        answer: 141.3,
        tolerance: 0.5,
        suffix: " satuan volume",
        solution:
          "Setiap cakram berluas pi x 3 kuadrat = 9 pi. Karena jari-jari tetap, volume = luas penampang x tinggi = 9 pi x 5 = 45 pi. Dengan pi sekitar 3,14, hasilnya 45 x 3,14 = <strong>141,3</strong>. Inilah rumus volume tabung pi r kuadrat t.",
        hint: "Jari-jari tetap, jadi volume = luas lingkaran x tinggi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Luas satu cakram benda putar adalah pi x r kuadrat. Jika r = 4, berapa luas cakram itu dalam kelipatan pi? (jawab angka pengali pi)",
        answer: 16,
        suffix: " pi",
        solution:
          "Luas = pi x 4 kuadrat = pi x 16 = <strong>16</strong> pi. Saat jari-jari naik, luas cakram naik mengikuti kuadratnya.",
        hint: "Kuadratkan jari-jarinya, lalu kalikan pi.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan jari-jari cakram dengan luas penampangnya (dalam kelipatan pi).",
        pairs: [
          { left: "r = 1", right: "1 pi" },
          { left: "r = 2", right: "4 pi" },
          { left: "r = 5", right: "25 pi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Volume vas bunga keramik",
        html: "Perajin keramik ingin tahu berapa liter air yang muat dalam vas berleher ramping dan berperut gemuk. Bentuk vas itu adalah hasil memutar sebuah kurva profil terhadap sumbu tegak. Mereka mengiris vas menjadi cakram-cakram mendatar tipis. Di bagian perut, jari-jari besar sehingga cakramnya luas; di leher, jari-jari kecil sehingga cakramnya sempit. Dengan menjumlahkan volume semua cakram tipis lewat integral, mereka mendapatkan kapasitas vas secara akurat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan polanya, baru kita tuliskan: jika benda dibentuk dengan memutar kurva r(x) mengelilingi sumbu x dari x = a sampai b, maka volumenya adalah <strong>integral dari a ke b atas pi x (r(x)) kuadrat dx</strong>. Integral itu menjumlahkan luas cakram pi r kuadrat dikalikan tebal yang menyusut menuju nol.",
      },
      {
        type: "takeaways",
        items: [
          "Benda putar diiris menjadi cakram lingkaran tipis tegak lurus sumbu.",
          "Luas tiap cakram adalah pi dikali jari-jari kuadrat.",
          "Volume = integral pi (r(x)) kuadrat dx dari a ke b.",
          "Untuk jari-jari tetap, rumus ini menjadi volume tabung pi r kuadrat t.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bentuk irisan tipis sebuah benda putar adalah?",
            options: ["Pita persegi panjang", "Cakram lingkaran", "Segitiga", "Bola kecil"],
            answer: 1,
            explain: "Memutar terhadap sumbu menghasilkan irisan berbentuk cakram lingkaran.",
          },
          {
            q: "Luas satu cakram dengan jari-jari r adalah?",
            options: ["2 pi r", "pi r kuadrat", "pi r", "r kuadrat"],
            answer: 1,
            explain: "Luas lingkaran adalah pi dikali jari-jari kuadrat.",
          },
          {
            q: "Volume benda putar dinyatakan sebagai?",
            options: [
              "Integral pi (r(x)) kuadrat dx",
              "Integral 2 pi r dx",
              "Turunan pi r kuadrat",
              "Integral r dx",
            ],
            answer: 0,
            explain: "Volume = integral luas cakram pi r kuadrat sepanjang sumbu.",
          },
          {
            q: "Tabung berjari-jari 2 dan tinggi 10 punya volume (kelipatan pi)?",
            options: ["20 pi", "40 pi", "4 pi", "10 pi"],
            answer: 1,
            explain: "Luas cakram 4 pi, dikali tinggi 10 = 40 pi.",
          },
          {
            q: "Mengapa luas cakram berbeda-beda di sepanjang vas?",
            options: [
              "Karena pi berubah",
              "Karena jari-jari kurva berubah di sepanjang sumbu",
              "Karena tebal cakram nol",
              "Karena vas tidak simetris",
            ],
            answer: 1,
            explain: "Jari-jari berubah sehingga luas pi r kuadrat tiap cakram ikut berubah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "aplikasi-nyata-integral",
    levelId: "aplikasi-integral",
    order: 4,
    title: "Integral di Dunia Nyata: Menjumlahkan yang Mengalir",
    summary:
      "Sebelum menulis rumus umum, kita lihat satu pola besar: integral adalah cara menjumlahkan laju menjadi total.",
    durationMin: 14,
    tags: ["kalkulus", "integral", "aplikasi", "total"],
    blocks: [
      {
        type: "paragraph",
        html: "Air mengalir ke bak dengan laju yang berubah, listrik dipakai dengan daya yang naik turun, sebuah pabrik memproduksi barang dengan kecepatan berbeda tiap jam. Pertanyaannya selalu sama: berapa totalnya setelah sekian waktu? Ayo kita selidiki pola besar ini dulu sebelum menuliskan rumusnya.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Dari Laju ke Total",
        caption: "Bagaimana integral mengubah laju yang berubah-ubah menjadi jumlah total.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sebuah keran mengisi bak. Pada jam pertama mengalir 10 liter/jam, jam kedua 20 liter/jam, jam ketiga 30 liter/jam. Total air bukan dihitung dari satu angka laju, melainkan dijumlahkan: kira-kira 10 + 20 + 30 = 60 liter. Inilah inti integral, menjumlahkan laju di tiap potongan waktu menjadi total.",
      },
      {
        type: "widget",
        widget: "SimulatorKecepatan",
      },
      {
        type: "chart",
        variant: "area",
        title: "Laju Air Masuk ke Bak (liter/jam)",
        unit: "liter/jam",
        source: "ilustrasi edukatif",
        note: "Total volume air sama dengan luas di bawah grafik laju ini.",
        data: [
          { label: "jam 1", value: 10, color: "#67e8f9" },
          { label: "jam 2", value: 20, color: "#22d3ee" },
          { label: "jam 3", value: 30, color: "#06b6d4" },
          { label: "jam 4", value: 40, color: "#0891b2" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Satu pola untuk banyak masalah",
        html: "Perhatikan kesamaannya: jarak adalah jumlah dari kecepatan, volume bak adalah jumlah dari laju aliran, energi adalah jumlah dari daya. Selalu <strong>total = jumlah dari laju selama waktu</strong>, dan luas di bawah grafik laju memberikan total itu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Keran mengalir tetap 12 liter/jam selama 5 jam. Berapa total air yang masuk?",
        answer: 60,
        suffix: " liter",
        solution:
          "Laju tetap, jadi total = laju x waktu = 12 x 5 = <strong>60 liter</strong>. Ini luas persegi panjang di bawah grafik laju.",
        hint: "Total = luas di bawah grafik laju = laju x waktu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pompa mulai dari 0 dan lajunya naik lurus hingga 8 liter/jam dalam 3 jam. Berapa total air yang dipompa?",
        answer: 12,
        suffix: " liter",
        solution:
          "Grafik laju membentuk segitiga: alas 3 jam, tinggi 8 liter/jam. Total = luas segitiga = setengah x 3 x 8 = <strong>12 liter</strong>.",
        hint: "Laju naik lurus membentuk segitiga di bawah grafik.",
      },
      {
        type: "classifyExercise",
        prompt: "Untuk tiap besaran total, kelompokkan laju mana yang harus dijumlahkan.",
        buckets: ["Laju aliran (liter/jam)", "Kecepatan (km/jam)"],
        items: [
          { text: "Total air dalam bak", bucket: "Laju aliran (liter/jam)" },
          { text: "Volume bensin masuk tangki", bucket: "Laju aliran (liter/jam)" },
          { text: "Jarak tempuh mobil", bucket: "Kecepatan (km/jam)" },
          { text: "Panjang lintasan pelari", bucket: "Kecepatan (km/jam)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tagihan listrik dari daya yang berubah",
        html: "Daya listrik rumah naik turun sepanjang hari: rendah saat siang, melonjak saat malam ketika AC dan lampu menyala. Meteran tidak mencatat satu angka daya, melainkan total energi yang terpakai. Caranya, ia menjumlahkan daya di tiap potongan waktu kecil. Daya tinggi selama beberapa jam menyumbang luas besar di bawah grafik daya, dan total seluruh luas itulah energi yang kamu bayar. Integral mengubah grafik daya yang bergelombang menjadi satu angka tagihan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan polanya, baru kita tuliskan pola besar integral: jika r(t) adalah laju sebuah besaran pada waktu t, maka total yang terkumpul dari a sampai b adalah <strong>integral dari a ke b atas r(t) dt</strong>. Total selalu integral dari laju, dan luas di bawah grafik laju adalah totalnya.",
      },
      {
        type: "takeaways",
        items: [
          "Integral menjumlahkan laju yang berubah-ubah menjadi total terkumpul.",
          "Pola yang sama berlaku untuk jarak, volume air, dan energi listrik.",
          "Total selalu sama dengan luas di bawah grafik laju.",
          "Secara umum, total = integral r(t) dt dari a ke b.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dihitung integral dari sebuah laju?",
            options: [
              "Laju maksimum",
              "Total yang terkumpul selama waktu tertentu",
              "Percepatan",
              "Laju rata-rata saja",
            ],
            answer: 1,
            explain: "Integral laju memberikan total yang terkumpul.",
          },
          {
            q: "Keran mengalir tetap 9 liter/jam selama 4 jam. Total airnya?",
            options: ["36 liter", "13 liter", "2,25 liter", "18 liter"],
            answer: 0,
            explain: "Total = 9 x 4 = 36 liter, luas persegi panjang di bawah grafik laju.",
          },
          {
            q: "Pompa lajunya naik lurus dari 0 ke 6 liter/jam dalam 2 jam. Totalnya?",
            options: ["12 liter", "6 liter", "3 liter", "8 liter"],
            answer: 1,
            explain: "Luas segitiga = setengah x 2 x 6 = 6 liter.",
          },
          {
            q: "Energi listrik adalah jumlah dari?",
            options: [
              "Tegangan terhadap arus",
              "Daya terhadap waktu",
              "Arus terhadap hambatan",
              "Daya dibagi waktu",
            ],
            answer: 1,
            explain: "Energi = integral daya terhadap waktu, yaitu luas di bawah grafik daya.",
          },
          {
            q: "Apa pola besar yang menyatukan jarak, volume, dan energi?",
            options: [
              "Semuanya adalah turunan",
              "Semuanya adalah total = integral dari sebuah laju",
              "Semuanya konstan",
              "Semuanya tidak bisa dihitung",
            ],
            answer: 1,
            explain: "Ketiganya adalah total yang diperoleh dengan mengintegralkan laju.",
          },
        ],
      },
    ],
  },
];
