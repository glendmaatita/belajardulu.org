import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "gaya-massa-inersia",
    levelId: "gaya-hukum-newton",
    order: 1,
    title: "Gaya, Massa, dan Inersia",
    summary:
      "Sebelum bertemu rumus, kita rasakan dulu bedanya mendorong meja kosong dan meja penuh buku. Dari situ lahir gagasan gaya, massa, dan inersia.",
    durationMin: 14,
    tags: ["fisika", "dinamika", "gaya", "massa", "inersia"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu mendorong meja kosong: ringan, langsung meluncur. Lalu meja itu diisi tumpukan buku, kamu dorong dengan tenaga yang sama, tetapi ia nyaris tak bergerak. Apa yang berubah? Bukan doronganmu, melainkan <strong>seberapa sulit benda itu diubah geraknya</strong>. Ayo selami dulu rasa ini sebelum kita menyentuh rumus apa pun.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Mengapa Benda Sulit Digerakkan",
        caption: "Dorongan yang sama menghasilkan gerak berbeda pada benda yang massanya berbeda.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sebelum menghafal apa pun, lakukan percobaan pikiran. Dorong kereta belanja kosong, lalu dorong yang penuh dengan tenaga yang persis sama. Yang kosong cepat melaju, yang penuh lamban. <strong>Dorongan = gaya</strong>, <strong>kandungan benda = massa</strong>, dan keengganan benda berubah gerak itulah <strong>inersia</strong>. Rasakan dulu polanya, jangan buru-buru ke angka.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga kata kunci",
        html: "<strong>Gaya</strong> adalah dorongan atau tarikan (satuan newton, N). <strong>Massa</strong> adalah ukuran banyaknya materi (satuan kg). <strong>Inersia</strong> adalah kecenderungan benda mempertahankan keadaan geraknya, dan inersia makin besar bila massa makin besar.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "line",
        title: "Percepatan vs Gaya pada Benda Bermassa 2 kg",
        unit: "percepatan (m/s²)",
        source: "data simulasi pada massa tetap 2 kg",
        note: "Massa dijaga tetap 2 kg. Saat gaya digandakan, percepatan ikut berlipat dua. Pola garis lurus ini muncul sebelum rumus diberikan.",
        data: [
          { label: "2 N", value: 1, color: "#818cf8" },
          { label: "4 N", value: 2, color: "#818cf8" },
          { label: "6 N", value: 3, color: "#818cf8" },
          { label: "8 N", value: 4, color: "#818cf8" },
        ],
      },
      {
        type: "paragraph",
        html: "Amati grafik di atas. Pada massa yang dijaga tetap, percepatan tumbuh lurus mengikuti gaya: gaya dua kali lipat memberi percepatan dua kali lipat. Sekarang coba balik: jika gaya dijaga tetap tetapi massa diperbesar, percepatan justru mengecil. Dua pola inilah yang nanti melahirkan rumus.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah troli bermassa 4 kg didorong sehingga percepatannya 3 m/s². Berapa besar gaya yang bekerja padanya?",
        answer: 12,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Gaya = massa dikali percepatan = 4 kg × 3 m/s² = <strong>12 N</strong>. Perhatikan, kita kalikan massa dengan percepatan, bukan menjumlahkannya.",
        hint: "Kalikan massa dengan percepatan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Gaya 20 N bekerja pada sebuah kotak dan menghasilkan percepatan 5 m/s². Berapa massa kotak itu?",
        answer: 4,
        tolerance: 0.1,
        suffix: " kg",
        solution:
          "Massa = gaya dibagi percepatan = 20 N ÷ 5 m/s² = <strong>4 kg</strong>. Makin besar massanya, makin kecil percepatan untuk gaya yang sama.",
        hint: "Bagi gaya dengan percepatan.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk gaya dorong yang sama, kelompokkan benda berikut berdasarkan inersianya.",
        buckets: ["Inersia besar (sulit dipercepat)", "Inersia kecil (mudah dipercepat)"],
        items: [
          { text: "Truk bermuatan pasir", bucket: "Inersia besar (sulit dipercepat)" },
          { text: "Bola tenis", bucket: "Inersia kecil (mudah dipercepat)" },
          { text: "Lemari besi penuh", bucket: "Inersia besar (sulit dipercepat)" },
          { text: "Pena di atas meja", bucket: "Inersia kecil (mudah dipercepat)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Sabuk Pengaman Menyelamatkan",
        html: "Saat mobil mengerem mendadak, tubuhmu tetap ingin bergerak maju. Itu bukan sihir, melainkan <strong>inersia</strong>: tubuhmu mempertahankan geraknya meski mobil sudah melambat. Sabuk pengaman memberi <strong>gaya</strong> ke belakang untuk menahanmu, sehingga kamu ikut melambat bersama mobil. Tanpa rumus pun, kamu sudah merasakan bahwa massa yang bergerak punya keengganan untuk berhenti.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan dan mengamati polanya, barulah rumus muncul dengan sendirinya. Percepatan sebanding dengan gaya dan berbanding terbalik dengan massa, sehingga <strong>F = m · a</strong>. Gaya 1 newton adalah gaya yang membuat massa 1 kg dipercepat 1 m/s². Rumus ini bukan hafalan awal, melainkan rangkuman dari pola yang sudah kita amati.",
      },
      {
        type: "takeaways",
        items: [
          "Gaya adalah dorongan atau tarikan, diukur dalam newton (N).",
          "Massa mengukur banyaknya materi dan menentukan besar inersia benda.",
          "Untuk gaya tetap, percepatan mengecil bila massa membesar.",
          "Pola itu dirangkum oleh F = m · a, ditemukan dari pengamatan, bukan dihafal di awal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud inersia?",
            options: [
              "Gaya gravitasi pada benda",
              "Kecenderungan benda mempertahankan keadaan geraknya",
              "Kecepatan maksimum benda",
              "Energi yang tersimpan dalam benda",
            ],
            answer: 1,
            explain: "Inersia adalah keengganan benda untuk mengubah keadaan geraknya.",
          },
          {
            q: "Gaya 18 N bekerja pada massa 6 kg. Berapa percepatannya?",
            options: ["3 m/s²", "24 m/s²", "108 m/s²", "12 m/s²"],
            answer: 0,
            explain: "a = F ÷ m = 18 ÷ 6 = 3 m/s².",
          },
          {
            q: "Untuk gaya yang sama, benda manakah yang paling sulit dipercepat?",
            options: ["Yang massanya paling kecil", "Yang massanya paling besar", "Semua sama", "Yang warnanya gelap"],
            answer: 1,
            explain: "Makin besar massa, makin besar inersia, makin sulit dipercepat.",
          },
          {
            q: "Satuan SI untuk gaya adalah?",
            options: ["kilogram", "newton", "joule", "watt"],
            answer: 1,
            explain: "Gaya diukur dalam newton (N).",
          },
          {
            q: "Jika gaya pada benda digandakan sementara massanya tetap, percepatannya menjadi?",
            options: ["Setengahnya", "Tetap", "Dua kali lipat", "Nol"],
            answer: 2,
            explain: "Percepatan sebanding dengan gaya pada massa tetap, jadi menjadi dua kali lipat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-newton-pertama",
    levelId: "gaya-hukum-newton",
    order: 2,
    title: "Hukum Newton I: Kelembaman",
    summary:
      "Mengapa penumpang terdorong maju saat bus direm, dan koin tetap diam saat kartu di bawahnya disentil? Kita rasakan dulu kecenderungan benda mempertahankan geraknya.",
    durationMin: 14,
    tags: ["fisika", "dinamika", "hukum-newton", "kelembaman", "inersia"],
    blocks: [
      {
        type: "paragraph",
        html: "Letakkan selembar kartu di atas gelas, lalu taruh koin di atas kartu. Sentil kartunya cepat ke samping: kartu terbang, tetapi koin justru jatuh lurus ke dalam gelas. Koin seolah 'ngotot' tetap di tempatnya. Begitu pula saat bus direm mendadak, tubuhmu terdorong maju. Ada satu aturan sederhana di balik semua ini. Ayo rasakan dulu polanya sebelum menamainya.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Benda yang Enggan Berubah",
        caption: "Tanpa gaya total, benda diam tetap diam dan benda bergerak tetap melaju lurus.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Naik mobil dan perhatikan tubuhmu. Saat mobil tiba-tiba maju, kamu terdorong ke belakang. Saat mobil direm, kamu terlempar ke depan. Saat mobil membelok, kamu terdorong ke samping. Tubuhmu selalu <strong>mempertahankan keadaan geraknya yang lama</strong>, dan baru berubah karena ada gaya. Rasakan dulu pola ini di tiap perjalanan, jauh sebelum kita menulis aturannya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pola yang kamu amati",
        html: "Bila <strong>tidak ada gaya total</strong> pada benda (semua gaya saling mengimbangi), maka benda yang diam tetap diam, dan benda yang bergerak terus melaju lurus dengan kecepatan tetap. Untuk mengubah keadaan ini, dibutuhkan gaya total dari luar. Sifat enggan berubah inilah yang disebut <strong>kelembaman</strong> atau inersia.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kotak meluncur lurus di lantai licin dengan kecepatan tetap 5 m/s tanpa percepatan. Berapa besar gaya total yang bekerja padanya?",
        answer: 0,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Kecepatan tetap berarti tidak ada percepatan. Menurut Hukum I, benda yang bergerak lurus beraturan memiliki gaya total <strong>0 N</strong>. Semua gaya yang bekerja pasti saling mengimbangi.",
        hint: "Kecepatan tetap berarti percepatan nol. Apa arti gaya total saat itu?",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah lampu 4 kg tergantung diam pada langit-langit. Dengan g = 10 m/s², berapa besar gaya total padanya, mengingat ia tidak bergerak?",
        answer: 0,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Lampu diam, jadi gaya total = <strong>0 N</strong>. Berat 40 N ke bawah dan tegangan tali 40 N ke atas saling meniadakan. Hukum I menjamin keseimbangan ini selama benda tetap diam.",
        hint: "Benda diam berarti gaya total nol; berat dan tegangan saling mengimbangi.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap peristiwa: apakah ia contoh kelembaman (Hukum I) atau bukan?",
        buckets: ["Contoh kelembaman (Hukum I)", "Bukan (ada gaya total / percepatan)"],
        items: [
          { text: "Penumpang terdorong maju saat bus direm mendadak", bucket: "Contoh kelembaman (Hukum I)" },
          { text: "Gelas tetap diam saat taplak disentak cepat", bucket: "Contoh kelembaman (Hukum I)" },
          { text: "Mobil makin cepat saat pedal gas diinjak", bucket: "Bukan (ada gaya total / percepatan)" },
          { text: "Bola menggelinding makin cepat menuruni bukit", bucket: "Bukan (ada gaya total / percepatan)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sandaran Kepala di Jok Mobil",
        html: "Pernah memperhatikan ada bantalan di atas jok mobil? Itu bukan sekadar hiasan. Saat mobil ditabrak dari belakang, badan terdorong maju bersama jok, tetapi kepala karena <strong>kelembaman</strong> cenderung tertinggal di tempatnya. Tanpa sandaran kepala, leher bisa tersentak hebat (cedera whiplash). Sandaran itu ikut mendorong kepala maju bersama badan, sehingga seluruh tubuh berubah gerak bersamaan. Hukum I menjelaskan mengapa fitur kecil ini menyelamatkan leher.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan polanya, barulah Hukum I dituliskan. <strong>Jika ΣF = 0, maka a = 0</strong>: benda diam tetap diam, benda bergerak tetap bergerak lurus dengan kecepatan tetap. Hukum ini mendefinisikan keadaan 'alami' benda tanpa gangguan gaya, dan menjadi dasar bagi Hukum II yang membahas apa yang terjadi ketika ΣF tidak nol.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum I: tanpa gaya total, benda mempertahankan keadaan geraknya (kelembaman).",
          "Benda diam tetap diam; benda bergerak tetap lurus beraturan bila ΣF = 0.",
          "Kelembaman makin terasa pada benda bermassa besar.",
          "ΣF = 0 berarti percepatan nol, bukan berarti tidak ada gaya sama sekali.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum Newton I berlaku ketika gaya total pada benda?",
            options: ["Sangat besar", "Nol", "Selalu ke bawah", "Berubah-ubah"],
            answer: 1,
            explain: "Hukum I menjelaskan keadaan benda saat gaya totalnya nol.",
          },
          {
            q: "Sebuah pesawat terbang lurus pada kecepatan tetap 250 m/s. Gaya total padanya?",
            options: ["250 N", "Nol", "Tidak bisa ditentukan", "Lebih besar dari beratnya"],
            answer: 1,
            explain: "Kecepatan tetap berarti percepatan nol, jadi gaya total nol (Hukum I).",
          },
          {
            q: "Mengapa koin jatuh ke gelas saat kartu di bawahnya disentil cepat?",
            options: [
              "Karena koin lebih berat dari kartu",
              "Karena kelembaman membuat koin cenderung diam di tempatnya",
              "Karena gaya gesek mendorong koin",
              "Karena gravitasi menarik kartu",
            ],
            answer: 1,
            explain: "Koin mempertahankan keadaan diamnya (kelembaman), lalu jatuh lurus ke gelas.",
          },
          {
            q: "Kelembaman sebuah benda paling besar bila benda itu?",
            options: ["Bermassa besar", "Berwarna gelap", "Bergerak cepat", "Bersuhu tinggi"],
            answer: 0,
            explain: "Kelembaman sebanding dengan massa benda.",
          },
          {
            q: "Pernyataan yang benar tentang Hukum I adalah?",
            options: [
              "ΣF = 0 menyebabkan percepatan nol",
              "Benda diam pasti tidak punya gaya apa pun",
              "Benda bergerak selalu butuh gaya untuk tetap melaju",
              "Kecepatan tetap butuh gaya total besar",
            ],
            answer: 0,
            explain: "Jika gaya total nol, percepatan nol; benda mempertahankan geraknya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-newton-kedua",
    levelId: "gaya-hukum-newton",
    order: 3,
    title: "Hukum Newton II: F = m · a",
    summary:
      "Injak gas lebih dalam, motor melaju lebih cepat. Tambah penumpang, akselerasi melemah. Kita amati dulu pola gaya, massa, dan percepatan sebelum merangkumnya jadi rumus.",
    durationMin: 16,
    tags: ["fisika", "dinamika", "hukum-newton", "percepatan", "gaya"],
    blocks: [
      {
        type: "paragraph",
        html: "Naik motor sendirian, sekali tarik gas langsung melesat. Boncengkan dua teman, tarikan gas yang sama terasa berat dan akselerasinya lemah. Sebaliknya, makin dalam kamu menarik gas, makin cepat motor bertambah laju. Ada hubungan rapi antara <strong>gaya</strong>, <strong>massa</strong>, dan <strong>percepatan</strong>. Ayo amati polanya dulu sebelum menulis rumus.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Gaya, Massa, dan Percepatan",
        caption: "Percepatan tumbuh searah gaya total dan menyusut saat massa bertambah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Dorong sebuah kursi beroda. Dorong pelan, ia berakselerasi pelan; dorong kuat, ia melesat. Sekarang minta teman duduk di kursi itu, lalu dorong dengan tenaga yang sama: akselerasinya jelas berkurang. Dua pengamatan ini berlawanan arah: <strong>percepatan naik bersama gaya, tetapi turun bersama massa</strong>. Rasakan dulu dua kecenderungan ini sebelum melihat angkanya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua pola yang kamu amati",
        html: "<strong>Pola pertama:</strong> pada massa tetap, percepatan sebanding dengan gaya total (gaya dua kali lipat, percepatan dua kali lipat). <strong>Pola kedua:</strong> pada gaya tetap, percepatan berbanding terbalik dengan massa (massa dua kali lipat, percepatan setengahnya). Percepatan selalu searah dengan gaya total.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "line",
        title: "Percepatan vs Massa pada Gaya Tetap 12 N",
        unit: "percepatan (m/s²)",
        source: "data simulasi pada gaya tetap 12 N",
        note: "Gaya dijaga tetap 12 N. Saat massa digandakan, percepatan turun menjadi setengahnya. Pola melengkung turun ini muncul sebelum rumus diberikan.",
        data: [
          { label: "1 kg", value: 12, color: "#818cf8" },
          { label: "2 kg", value: 6, color: "#818cf8" },
          { label: "3 kg", value: 4, color: "#818cf8" },
          { label: "4 kg", value: 3, color: "#818cf8" },
        ],
      },
      {
        type: "paragraph",
        html: "Lihat grafik di atas. Dengan gaya dijaga tetap 12 N, percepatan menurun saat massa naik: 1 kg menghasilkan 12 m/s², tetapi 4 kg hanya 3 m/s². Perhatikan hasil kali massa dan percepatan selalu 12, persis sama dengan gayanya. Pola tetap inilah yang akan melahirkan rumus.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mobil mainan bermassa 0,5 kg didorong gaya total 3 N. Berapa percepatannya?",
        answer: 6,
        tolerance: 0.1,
        suffix: " m/s²",
        solution:
          "a = F ÷ m = 3 N ÷ 0,5 kg = <strong>6 m/s²</strong>. Massa yang kecil membuat percepatan besar untuk gaya yang sama.",
        hint: "Bagi gaya total dengan massa.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa gaya total yang dibutuhkan untuk mempercepat sepeda bermassa 15 kg (beserta pengendaranya yang total menjadi 65 kg) sebesar 2 m/s²?",
        answer: 130,
        tolerance: 0.5,
        suffix: " N",
        solution:
          "F = m · a = 65 kg × 2 m/s² = <strong>130 N</strong>. Massa total yang dipercepat adalah sepeda beserta pengendaranya.",
        hint: "Gunakan F = m · a dengan massa total 65 kg.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk gaya total tetap, kelompokkan apa yang terjadi pada percepatan saat massa diubah.",
        buckets: ["Percepatan membesar", "Percepatan mengecil"],
        items: [
          { text: "Massa dikurangi separuh", bucket: "Percepatan membesar" },
          { text: "Massa digandakan", bucket: "Percepatan mengecil" },
          { text: "Muatan truk diturunkan", bucket: "Percepatan membesar" },
          { text: "Penumpang ditambah", bucket: "Percepatan mengecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mobil Balap yang Ringan",
        html: "Mengapa mobil balap dibuat seringan mungkin dan bermesin sekuat mungkin? Karena percepatan bergantung pada <strong>gaya dibagi massa</strong>. Mesin yang kuat memberi gaya dorong besar, sementara bodi ringan dari serat karbon menekan massa. Keduanya bekerja sama menaikkan percepatan: tim balap menambah gaya sekaligus memangkas massa. Itulah sebabnya menghapus beberapa kilogram bisa berarti selisih kemenangan, jauh sebelum rumus resmi dituliskan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati kedua pola, barulah keduanya dirangkum menjadi satu. Percepatan sebanding dengan gaya total dan berbanding terbalik dengan massa, sehingga <strong>ΣF = m · a</strong>, atau a = ΣF ÷ m. Percepatan selalu searah dengan gaya total. Inilah Hukum Newton II, jantung dinamika, yang lahir dari pengamatan bukan dari hafalan.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum II: gaya total menghasilkan percepatan searah gaya, dirangkum ΣF = m · a.",
          "Pada massa tetap, percepatan sebanding dengan gaya total.",
          "Pada gaya tetap, percepatan berbanding terbalik dengan massa.",
          "Hasil kali massa dan percepatan selalu sama dengan gaya totalnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum Newton II menyatakan hubungan antara?",
            options: ["Suhu dan tekanan", "Gaya total, massa, dan percepatan", "Jarak dan waktu", "Muatan dan medan"],
            answer: 1,
            explain: "Hukum II: ΣF = m · a.",
          },
          {
            q: "Gaya total 24 N bekerja pada massa 8 kg. Percepatannya?",
            options: ["3 m/s²", "32 m/s²", "192 m/s²", "16 m/s²"],
            answer: 0,
            explain: "a = ΣF ÷ m = 24 ÷ 8 = 3 m/s².",
          },
          {
            q: "Pada gaya tetap, jika massa digandakan, percepatan menjadi?",
            options: ["Dua kali lipat", "Tetap", "Setengahnya", "Nol"],
            answer: 2,
            explain: "Percepatan berbanding terbalik dengan massa, jadi menjadi setengahnya.",
          },
          {
            q: "Berapa gaya yang diperlukan untuk mempercepat 10 kg sebesar 4 m/s²?",
            options: ["2,5 N", "14 N", "40 N", "6 N"],
            answer: 2,
            explain: "F = m · a = 10 × 4 = 40 N.",
          },
          {
            q: "Arah percepatan sebuah benda selalu?",
            options: [
              "Berlawanan dengan gaya total",
              "Searah dengan gaya total",
              "Tegak lurus gaya total",
              "Ke bawah",
            ],
            answer: 1,
            explain: "Pada Hukum II, percepatan selalu searah dengan gaya total.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-newton-ketiga",
    levelId: "gaya-hukum-newton",
    order: 4,
    title: "Hukum Newton III: Aksi dan Reaksi",
    summary:
      "Dorong tembok, tanganmu terdorong balik. Lompat dari perahu, perahu mundur. Kita rasakan dulu bahwa gaya selalu berpasangan sebelum menuliskan aturannya.",
    durationMin: 15,
    tags: ["fisika", "dinamika", "hukum-newton", "aksi-reaksi"],
    blocks: [
      {
        type: "paragraph",
        html: "Dorong tembok sekuat tenaga. Tembok tak bergerak, tetapi telapak tanganmu jelas terasa ditekan balik. Berenang dengan menyibak air ke belakang, dan tubuhmu terdorong maju. Tembakan senapan menendang bahu ke belakang. Di balik semua peristiwa ini ada satu kebenaran: <strong>gaya tidak pernah sendirian, ia selalu berpasangan</strong>. Ayo rasakan pasangan ini sebelum menamainya.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Setiap Dorongan Punya Dorongan Balik",
        caption: "Gaya aksi dan reaksi sama besar, berlawanan arah, dan bekerja pada dua benda berbeda.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Berdiri di lantai licin (atau pakai sepatu roda) lalu dorong dinding. Bukan dinding yang bergerak, melainkan kamu yang meluncur mundur. Saat kamu memberi gaya pada dinding, dinding memberi gaya yang sama besar ke arahmu. Coba juga menembakkan air dari selang: selangnya tersentak ke belakang. <strong>Setiap kali kamu mendorong sesuatu, sesuatu itu mendorongmu balik</strong>. Rasakan dulu pola berpasangan ini.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pola yang kamu amati",
        html: "Setiap gaya selalu muncul berpasangan: bila benda A memberi gaya pada benda B (aksi), maka benda B memberi gaya pada benda A (reaksi) yang <strong>sama besar dan berlawanan arah</strong>. Yang penting, kedua gaya itu bekerja pada <strong>dua benda berbeda</strong>, sehingga keduanya tidak saling meniadakan.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu mendorong dinding dengan gaya 90 N. Berapa besar gaya yang diberikan dinding pada tanganmu?",
        answer: 90,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Menurut Hukum III, reaksi sama besar dengan aksi: dinding mendorong balik dengan <strong>90 N</strong>, hanya berlawanan arah. Inilah sebabnya tanganmu terasa ditekan.",
        hint: "Reaksi selalu sama besar dengan aksi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seekor gurita menyemburkan air ke belakang dengan gaya 12 N untuk berenang. Berapa besar gaya dorong maju yang diterima tubuh gurita?",
        answer: 12,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Gurita mendorong air ke belakang (aksi 12 N), air mendorong gurita ke depan (reaksi 12 N). Gaya dorong majunya <strong>12 N</strong>, sama besar dengan aksinya.",
        hint: "Gaya maju (reaksi) sama besar dengan gaya menyembur air (aksi).",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk peristiwa 'kaki perenang mendorong air ke belakang', kelompokkan tiap gaya sebagai aksi atau reaksi.",
        buckets: ["Aksi (gaya pada air)", "Reaksi (gaya pada perenang)"],
        items: [
          { text: "Kaki mendorong air ke belakang", bucket: "Aksi (gaya pada air)" },
          { text: "Air mendorong perenang ke depan", bucket: "Reaksi (gaya pada perenang)" },
          { text: "Telapak menyibak air menjauh", bucket: "Aksi (gaya pada air)" },
          { text: "Tubuh perenang terdorong maju", bucket: "Reaksi (gaya pada perenang)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap aksi dengan reaksi yang menyertainya.",
        pairs: [
          { left: "Roket menyemburkan gas ke bawah", right: "Gas mendorong roket ke atas" },
          { left: "Telapak mendayung air ke belakang", right: "Air mendorong perahu ke depan" },
          { left: "Kaki menekan tanah ke belakang saat berlari", right: "Tanah mendorong pelari ke depan" },
          { left: "Peluru terdorong maju keluar laras", right: "Senapan tertendang ke belakang" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bagaimana Roket Terbang di Ruang Hampa",
        html: "Banyak yang mengira roket terbang dengan 'mendorong udara'. Padahal di ruang angkasa tidak ada udara untuk didorong. Roket bekerja murni dengan <strong>aksi dan reaksi</strong>: mesin menyemburkan gas panas ke bawah dengan gaya besar (aksi), dan gas itu mendorong roket ke atas dengan gaya yang sama besar (reaksi). Karena aksi dan reaksi bekerja pada dua benda berbeda (gas dan roket), keduanya tidak saling membatalkan, dan roket pun melaju. Itulah sebabnya roket tetap bisa terbang di kehampaan, jauh sebelum kita menuliskan rumus apa pun.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan pola berpasangan, barulah aturannya dituliskan. <strong>F(aksi) = −F(reaksi)</strong>: setiap gaya aksi selalu disertai gaya reaksi yang sama besar dan berlawanan arah, bekerja pada dua benda berbeda. Karena keduanya menempel pada benda yang berbeda, mereka tidak saling meniadakan, dan justru itulah yang membuat berjalan, berenang, dan meluncurkan roket menjadi mungkin.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum III: setiap aksi punya reaksi yang sama besar dan berlawanan arah.",
          "Pasangan aksi reaksi selalu bekerja pada dua benda berbeda.",
          "Karena bekerja pada benda berbeda, aksi dan reaksi tidak saling meniadakan.",
          "Berjalan, berenang, dan roket semuanya memanfaatkan pasangan aksi reaksi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Ciri khas pasangan aksi dan reaksi adalah?",
            options: [
              "Bekerja pada benda yang sama",
              "Sama besar, berlawanan arah, pada dua benda berbeda",
              "Selalu menghasilkan gerak nol",
              "Hanya muncul di ruang hampa",
            ],
            answer: 1,
            explain: "Aksi dan reaksi sama besar, berlawanan arah, dan bekerja pada dua benda berbeda.",
          },
          {
            q: "Saat kamu melompat ke depan dari perahu kecil, perahu bergerak ke belakang. Ini contoh?",
            options: ["Hukum I", "Hukum II", "Hukum III", "Bukan hukum Newton"],
            answer: 2,
            explain: "Kakimu mendorong perahu ke belakang, perahu mendorongmu ke depan (aksi reaksi).",
          },
          {
            q: "Kamu mendorong tembok dengan 60 N. Tembok mendorong tanganmu dengan?",
            options: ["0 N", "30 N", "60 N", "120 N"],
            answer: 2,
            explain: "Reaksi sama besar dengan aksi, yaitu 60 N berlawanan arah.",
          },
          {
            q: "Mengapa aksi dan reaksi tidak saling meniadakan?",
            options: [
              "Karena besarnya berbeda",
              "Karena bekerja pada dua benda yang berbeda",
              "Karena arahnya sama",
              "Karena salah satunya selalu nol",
            ],
            answer: 1,
            explain: "Kedua gaya menempel pada benda berbeda, jadi tidak membatalkan satu sama lain.",
          },
          {
            q: "Seorang pelari bisa maju karena?",
            options: [
              "Tanah menarik kakinya ke depan",
              "Kaki mendorong tanah ke belakang, tanah mendorong pelari ke depan",
              "Tidak ada gaya yang bekerja",
              "Gravitasi mendorongnya maju",
            ],
            answer: 1,
            explain: "Reaksi tanah atas dorongan kaki itulah yang mendorong pelari maju.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tiga-hukum-newton",
    levelId: "gaya-hukum-newton",
    order: 5,
    title: "Merangkai Tiga Hukum Newton",
    summary:
      "Tiga aturan sederhana yang menjelaskan hampir semua gerak di sekitar kita, mulai dari bola yang diam sampai roket yang melesat. Kini kita rangkai ketiganya menjadi satu gambaran utuh.",
    durationMin: 16,
    tags: ["fisika", "dinamika", "hukum-newton", "aksi-reaksi"],
    blocks: [
      {
        type: "paragraph",
        html: "Kita sudah merasakan ketiga Hukum Newton satu per satu: benda yang enggan berubah, gaya yang menghasilkan percepatan, dan dorongan yang selalu berbalas. Sekarang ayo satukan ketiganya. Dalam satu peristiwa sederhana, misalnya bus yang melaju dan direm, ketiga hukum ini sering bekerja bersamaan. Mari kita lihat bagaimana ketiganya saling melengkapi sebelum kembali pada rumus-rumusnya.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Tiga Hukum yang Mengatur Gerak",
        caption: "Dari benda diam, benda dipercepat, hingga pasangan aksi dan reaksi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lakukan tiga percobaan kecil. Pertama, letakkan buku di meja, ia diam dan tetap diam sampai disentuh (Hukum I). Kedua, dorong buku itu, makin kuat dorongan makin cepat ia melaju (Hukum II). Ketiga, saat kamu mendorong buku, buku itu menekan balik tanganmu (Hukum III). Tiga pengamatan ini muncul dari satu gerakan tunggal. Rasakan dulu bagaimana ketiganya hadir bersama.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga pola dalam satu gambaran",
        html: "<strong>Pola 1:</strong> tanpa gaya total, benda mempertahankan geraknya. <strong>Pola 2:</strong> bila ada gaya total, benda dipercepat searah gaya itu sebesar a = ΣF ÷ m. <strong>Pola 3:</strong> setiap gaya dari benda A ke B selalu dibalas gaya B ke A yang sama besar dan berlawanan arah.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap hukum dengan contoh nyatanya.",
        pairs: [
          { left: "Hukum I: benda diam tetap diam tanpa gaya total", right: "Buku di meja tidak bergerak sendiri" },
          { left: "Hukum II: gaya total menghasilkan percepatan", right: "Mobil makin cepat saat gas diinjak" },
          { left: "Hukum III: aksi selalu disertai reaksi", right: "Roket terdorong naik saat gas disemburkan ke bawah" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mobil mainan bermassa 0,5 kg didorong gaya total 2 N. Berapa percepatannya?",
        answer: 4,
        tolerance: 0.1,
        suffix: " m/s²",
        solution:
          "Gunakan Hukum II: a = ΣF ÷ m = 2 N ÷ 0,5 kg = <strong>4 m/s²</strong>. Hukum II menjembatani gaya yang kita beri dengan percepatan yang teramati.",
        hint: "Bagi gaya total dengan massa.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap peristiwa ke Hukum Newton yang paling tepat menjelaskannya.",
        buckets: ["Hukum I (kelembaman)", "Hukum II (gaya dan percepatan)", "Hukum III (aksi reaksi)"],
        items: [
          { text: "Penumpang terdorong maju saat bus direm", bucket: "Hukum I (kelembaman)" },
          { text: "Gerobak makin cepat saat didorong lebih kuat", bucket: "Hukum II (gaya dan percepatan)" },
          { text: "Senapan tertendang ke belakang saat menembak", bucket: "Hukum III (aksi reaksi)" },
          { text: "Gelas tetap diam di atas taplak yang disentak cepat", bucket: "Hukum I (kelembaman)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Satu Lompatan, Tiga Hukum",
        html: "Saat kamu melompat, ketiga hukum bekerja sekaligus. Sebelum melompat, tubuhmu diam karena gaya total nol (<strong>Hukum I</strong>). Kakimu lalu mendorong tanah ke bawah, dan tanah mendorong tubuhmu ke atas dengan gaya yang sama besar (<strong>Hukum III</strong>). Gaya dorong dari tanah yang melebihi beratmu itu menghasilkan percepatan ke atas sesuai a = ΣF ÷ m (<strong>Hukum II</strong>). Satu gerakan sederhana ternyata merangkum seluruh dinamika Newton.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah melihat ketiganya bekerja bersama, kita rangkum rumusnya. <strong>Hukum I:</strong> jika ΣF = 0, benda diam atau bergerak lurus beraturan. <strong>Hukum II:</strong> ΣF = m · a, percepatan searah gaya total. <strong>Hukum III:</strong> F(aksi) = −F(reaksi), tiap gaya berpasangan pada dua benda berbeda. Ketiganya bukan rumus terpisah yang dihafal, melainkan satu kerangka utuh untuk membaca setiap gerak.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum I: tanpa gaya total, benda mempertahankan keadaan geraknya (kelembaman).",
          "Hukum II: gaya total menghasilkan percepatan, dirangkum ΣF = m · a.",
          "Hukum III: setiap aksi punya reaksi yang sama besar dan berlawanan arah.",
          "Dalam satu peristiwa, ketiga hukum sering bekerja bersamaan, bukan sendiri-sendiri.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sebuah benda bergerak lurus dengan kecepatan tetap. Berapa gaya total padanya?",
            options: ["Lebih besar dari nol", "Nol", "Bergantung warnanya", "Selalu ke bawah"],
            answer: 1,
            explain: "Kecepatan tetap berarti tidak ada percepatan, jadi gaya total nol (Hukum I).",
          },
          {
            q: "Hukum Newton II menyatakan hubungan antara?",
            options: ["Suhu dan tekanan", "Gaya total, massa, dan percepatan", "Jarak dan waktu", "Muatan dan medan"],
            answer: 1,
            explain: "Hukum II: ΣF = m · a.",
          },
          {
            q: "Saat kamu melompat ke depan dari perahu kecil, perahu bergerak ke belakang. Ini contoh?",
            options: ["Hukum I", "Hukum II", "Hukum III", "Bukan hukum Newton"],
            answer: 2,
            explain: "Kakimu mendorong perahu ke belakang, perahu mendorongmu ke depan (aksi reaksi).",
          },
          {
            q: "Ciri khas pasangan aksi dan reaksi adalah?",
            options: [
              "Bekerja pada benda yang sama",
              "Sama besar, berlawanan arah, pada dua benda berbeda",
              "Selalu menghasilkan gerak nol",
              "Hanya muncul di ruang hampa",
            ],
            answer: 1,
            explain: "Aksi dan reaksi sama besar, berlawanan arah, dan bekerja pada dua benda berbeda.",
          },
          {
            q: "Gaya total 10 N bekerja pada benda 2 kg. Percepatannya?",
            options: ["5 m/s²", "20 m/s²", "8 m/s²", "12 m/s²"],
            answer: 0,
            explain: "a = ΣF ÷ m = 10 ÷ 2 = 5 m/s².",
          },
        ],
      },
    ],
  },
];
