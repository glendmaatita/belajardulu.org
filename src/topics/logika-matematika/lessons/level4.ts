import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "kuantor-universal-dan-eksistensial",
    levelId: "kuantor-penarikan",
    order: 1,
    title: "Kuantor Universal dan Eksistensial",
    summary:
      "Kata 'semua' dan 'ada' mengubah arti sebuah kalimat secara mendasar. Kita selidiki dulu maknanya sebelum merumuskan kuantor.",
    durationMin: 12,
    tags: ["logika", "kuantor", "universal", "eksistensial"],
    blocks: [
      {
        type: "paragraph",
        html: "\"Semua siswa membawa payung.\" \"Ada siswa yang membawa payung.\" Dua kalimat ini terasa mirip, tetapi untuk membuktikan yang pertama kamu harus memeriksa seluruh kelas, sedangkan yang kedua cukup menemukan satu orang. Ayo selidiki dulu mengapa dua kata kecil ini begitu berbeda sebelum kita rumuskan aturannya.",
      },
      {
        type: "video",
        comp: "OperatorLogika",
        title: "Video: Dari Pernyataan ke Kuantor",
        caption: "Kuantor memberi tahu kita seberapa banyak objek yang dibicarakan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba uji setiap kalimat dengan satu pertanyaan: 'Berapa banyak yang harus benar?' Untuk 'semua', satu pengecualian saja sudah membuatnya salah. Untuk 'ada', satu contoh saja sudah membuatnya benar. Rasakan dulu bedanya lewat contoh sehari-hari sebelum melihat lambangnya.",
      },
      {
        type: "widget",
        widget: "SimulatorOperatorLogika",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua lambang yang sering muncul",
        html: "Kuantor universal ditulis dengan lambang <strong>&forall;</strong> dan dibaca 'untuk setiap'. Kuantor eksistensial ditulis dengan lambang <strong>&exist;</strong> dan dibaca 'ada' atau 'terdapat'. Keduanya selalu menyatakan banyaknya objek yang membuat sebuah kalimat terbuka menjadi benar.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan setiap pernyataan menurut kuantornya.",
        buckets: ["Universal (semua)", "Eksistensial (ada)"],
        items: [
          { text: "Setiap bilangan genap habis dibagi 2", bucket: "Universal (semua)" },
          { text: "Ada bilangan prima yang genap", bucket: "Eksistensial (ada)" },
          { text: "Semua persegi memiliki empat sisi sama", bucket: "Universal (semua)" },
          { text: "Beberapa siswa gemar matematika", bucket: "Eksistensial (ada)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan pernyataan berkuantor dengan negasinya yang tepat.",
        pairs: [
          { left: "Semua siswa hadir", right: "Ada siswa yang tidak hadir" },
          { left: "Ada siswa yang terlambat", right: "Semua siswa tidak terlambat" },
          { left: "Setiap bilangan positif", right: "Ada bilangan yang tidak positif" },
          { left: "Ada solusi yang benar", right: "Semua solusi tidak benar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Klaim iklan dan satu pengecualian",
        html: "Sebuah iklan berbunyi 'Semua pelanggan kami puas.' Cukup satu pelanggan yang kecewa untuk membuktikan klaim itu salah. Sebaliknya, kalau iklan berbunyi 'Ada pelanggan kami yang sangat puas,' satu kesaksian sudah membuatnya benar. Memahami kuantor membuat kita kritis: kita tahu persis bukti seperti apa yang dibutuhkan untuk menerima atau menolak sebuah klaim. Ini bukan soal berhitung, melainkan soal menimbang bukti dengan tepat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah menimbang banyak contoh, baru kita rumuskan: <strong>kuantor universal</strong> (&forall;, 'semua/setiap') benar bila berlaku untuk seluruh objek, dan salah bila ada satu pengecualian. <strong>Kuantor eksistensial</strong> (&exist;, 'ada/terdapat') benar bila ada minimal satu objek yang memenuhi. Negasi 'semua' adalah 'ada yang tidak', dan negasi 'ada' adalah 'semua tidak'.",
      },
      {
        type: "takeaways",
        items: [
          "Kuantor universal (semua/setiap) menuntut semua objek memenuhi syarat.",
          "Kuantor eksistensial (ada/terdapat) cukup dipenuhi oleh satu objek.",
          "Negasi 'semua x bersifat P' adalah 'ada x yang tidak bersifat P'.",
          "Negasi 'ada x bersifat P' adalah 'semua x tidak bersifat P'.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pernyataan 'Setiap bilangan asli lebih besar dari 0' menggunakan kuantor?",
            options: ["Eksistensial", "Universal", "Negasi", "Implikasi"],
            answer: 1,
            explain: "Kata 'setiap' menandakan kuantor universal yang berlaku untuk semua objek.",
          },
          {
            q: "Untuk membuktikan 'Ada siswa yang lulus sempurna' benar, kita perlu?",
            options: [
              "Memeriksa seluruh siswa",
              "Menemukan satu siswa yang lulus sempurna",
              "Membuktikan tidak ada yang gagal",
              "Menghitung rata-rata nilai",
            ],
            answer: 1,
            explain: "Kuantor eksistensial cukup dibuktikan oleh satu contoh.",
          },
          {
            q: "Negasi dari 'Semua kucing berwarna hitam' adalah?",
            options: [
              "Semua kucing tidak berwarna hitam",
              "Ada kucing yang tidak berwarna hitam",
              "Tidak ada kucing",
              "Semua kucing berwarna hitam",
            ],
            answer: 1,
            explain: "Negasi kuantor universal adalah kuantor eksistensial dari ingkarannya.",
          },
          {
            q: "Negasi dari 'Ada bilangan ganjil yang habis dibagi 4' adalah?",
            options: [
              "Ada bilangan ganjil yang tidak habis dibagi 4",
              "Semua bilangan ganjil habis dibagi 4",
              "Semua bilangan ganjil tidak habis dibagi 4",
              "Tidak ada bilangan ganjil",
            ],
            answer: 2,
            explain: "Negasi kuantor eksistensial adalah kuantor universal dari ingkarannya: 'semua ... tidak ...'.",
          },
          {
            q: "Klaim 'Semua pelanggan puas' dapat dibantah dengan?",
            options: [
              "Menunjukkan satu pelanggan yang tidak puas",
              "Menunjukkan satu pelanggan yang puas",
              "Menghitung jumlah pelanggan",
              "Membandingkan dua iklan",
            ],
            answer: 0,
            explain: "Satu pengecualian sudah cukup menggugurkan pernyataan universal.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "modus-ponens",
    levelId: "kuantor-penarikan",
    order: 2,
    title: "Modus Ponens: Menegaskan Sebab",
    summary:
      "Jika sebuah aturan 'jika-maka' benar dan sebabnya terjadi, akibatnya pasti menyusul. Kita uji dulu pola penalaran ini lewat kisah.",
    durationMin: 12,
    tags: ["logika", "penarikan", "modus-ponens", "implikasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayu punya aturan: 'Jika hujan, maka jalanan basah.' Pagi ini ternyata hujan. Tanpa melihat ke luar pun, Bayu sudah yakin jalanan basah. Penalaran ini terasa wajar, tetapi mengapa ia selalu benar? Ayo telusuri dulu polanya sebelum kita namai aturannya.",
      },
      {
        type: "video",
        comp: "DeduktifInduktif",
        title: "Video: Menarik Kesimpulan yang Sah",
        caption: "Penalaran deduktif menjamin kesimpulan benar bila premisnya benar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba mainkan polanya: ambil sebuah aturan 'jika p maka q', lalu pastikan 'p' benar-benar terjadi. Apa yang bisa kamu simpulkan tentang q? Bandingkan dengan kasus saat hanya 'q' yang kamu tahu terjadi. Rasakan dulu mana yang menjamin kesimpulan dan mana yang menjebak.",
      },
      {
        type: "widget",
        widget: "IdentifikasiModus",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Awas jebakan: menegaskan akibat",
        html: "Dari 'Jika hujan maka jalanan basah' dan 'jalanan basah', kita TIDAK boleh menyimpulkan 'hujan'. Jalanan bisa basah karena mobil pemadam, air keran, atau penyiram taman. Menegaskan akibat untuk membuktikan sebab adalah penalaran yang <strong>sesat</strong>.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan penalaran berikut: sah (modus ponens) atau sesat (menegaskan akibat).",
        buckets: ["Sah (modus ponens)", "Sesat (menegaskan akibat)"],
        items: [
          { text: "Jika belajar maka lulus. Andi belajar. Jadi Andi lulus.", bucket: "Sah (modus ponens)" },
          { text: "Jika belajar maka lulus. Andi lulus. Jadi Andi belajar.", bucket: "Sesat (menegaskan akibat)" },
          { text: "Jika lapar maka makan. Dia lapar. Jadi dia makan.", bucket: "Sah (modus ponens)" },
          { text: "Jika lapar maka makan. Dia makan. Jadi dia lapar.", bucket: "Sesat (menegaskan akibat)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan premis 'jika-maka' dan sebab dengan kesimpulan modus ponens yang sah.",
        pairs: [
          { left: "Jika x genap maka x habis dibagi 2. x genap.", right: "x habis dibagi 2" },
          { left: "Jika api menyala maka ada oksigen. Api menyala.", right: "Ada oksigen" },
          { left: "Jika lampu hijau maka boleh jalan. Lampu hijau.", right: "Boleh jalan" },
          { left: "Jika hujan maka bawa payung. Hujan.", right: "Bawa payung" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Diagnosis dokter yang hati-hati",
        html: "Seorang dokter tahu 'Jika pasien terkena flu, maka ia demam.' Ketika seorang pasien datang demam, dokter yang cermat tidak langsung memvonis flu, sebab demam bisa disebabkan banyak hal. Itu akan menjadi kesalahan menegaskan akibat. Namun bila terbukti pasien memang terkena flu, dokter boleh yakin pasien demam. Penalaran yang tepat di sini bukan soal hitungan, melainkan soal menjaga arah kesimpulan agar tidak terbalik.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah menguji banyak kasus, baru kita rumuskan <strong>modus ponens</strong>: dari premis 'jika p maka q' dan premis 'p benar', kita boleh menyimpulkan 'q benar'. Pola ini selalu sah. Sebaliknya, dari 'jika p maka q' dan 'q benar' kita tidak boleh menyimpulkan 'p' karena itu adalah penalaran sesat menegaskan akibat.",
      },
      {
        type: "takeaways",
        items: [
          "Modus ponens: dari p → q dan p, simpulkan q.",
          "Modus ponens selalu menghasilkan kesimpulan yang sah bila premis benar.",
          "Menegaskan akibat (dari p → q dan q simpulkan p) adalah penalaran sesat.",
          "Sebuah akibat bisa punya banyak sebab, jadi akibat tidak membuktikan sebab tertentu.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bentuk modus ponens yang benar adalah?",
            options: [
              "p → q, q, jadi p",
              "p → q, p, jadi q",
              "p → q, bukan p, jadi bukan q",
              "p → q, bukan q, jadi bukan p",
            ],
            answer: 1,
            explain: "Modus ponens menegaskan sebab (p) untuk menarik akibat (q).",
          },
          {
            q: "'Jika belajar maka lulus. Sinta belajar.' Kesimpulan sah?",
            options: ["Sinta tidak lulus", "Sinta lulus", "Sinta tidak belajar", "Tidak bisa disimpulkan"],
            answer: 1,
            explain: "Sebab (belajar) terpenuhi, maka akibat (lulus) menyusul. Ini modus ponens.",
          },
          {
            q: "'Jika hujan maka jalan basah. Jalan basah.' Apa yang sah disimpulkan?",
            options: [
              "Pasti hujan",
              "Pasti tidak hujan",
              "Tidak bisa disimpulkan hujan atau tidak",
              "Jalan kering",
            ],
            answer: 2,
            explain: "Menyimpulkan 'hujan' dari akibat adalah sesat; jalan basah bisa karena sebab lain.",
          },
          {
            q: "Mengapa 'menegaskan akibat' tergolong penalaran sesat?",
            options: [
              "Karena premisnya selalu salah",
              "Karena satu akibat bisa muncul dari banyak sebab",
              "Karena tidak ada kata 'jika'",
              "Karena terlalu panjang",
            ],
            answer: 1,
            explain: "Akibat yang sama bisa lahir dari sebab berbeda, jadi tidak menunjuk satu sebab pasti.",
          },
          {
            q: "'Jika x = 2 maka x bilangan genap. x = 2.' Kesimpulan sah?",
            options: ["x ganjil", "x bilangan genap", "x bukan 2", "Tidak bisa disimpulkan"],
            answer: 1,
            explain: "Sebab terpenuhi (x = 2), maka akibat (genap) sah disimpulkan lewat modus ponens.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "modus-tollens-dan-silogisme",
    levelId: "kuantor-penarikan",
    order: 3,
    title: "Modus Tollens dan Silogisme",
    summary:
      "Menyangkal akibat menggugurkan sebab, dan rantai aturan bisa disambung menjadi kesimpulan baru. Kita telusuri dulu dua pola ini.",
    durationMin: 13,
    tags: ["logika", "penarikan", "modus-tollens", "silogisme"],
    blocks: [
      {
        type: "paragraph",
        html: "Aturan tetap: 'Jika hujan, maka jalanan basah.' Sore ini jalanan kering. Apa yang bisa kita pastikan? Dan jika kita tahu 'Jika hujan maka jalan basah' sekaligus 'Jika jalan basah maka licin', bisakah kita menyambung keduanya? Ayo telusuri dulu dua pola penalaran ini sebelum kita beri nama.",
      },
      {
        type: "video",
        comp: "SilogismeVideo",
        title: "Video: Silogisme dan Rantai Penalaran",
        caption: "Premis-premis bisa dirangkai menjadi kesimpulan yang sah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba dua percobaan. Pertama: ambil 'jika p maka q', lalu andaikan q ternyata tidak terjadi. Apa nasib p? Kedua: sambungkan 'jika p maka q' dengan 'jika q maka r', lalu lihat hubungan langsung antara p dan r. Rasakan dulu pola keduanya sebelum dirumuskan.",
      },
      {
        type: "widget",
        widget: "CekValiditasSilogisme",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Awas jebakan: menyangkal sebab",
        html: "Dari 'Jika hujan maka jalan basah' dan 'tidak hujan', kita TIDAK boleh menyimpulkan 'jalan tidak basah'. Jalan tetap bisa basah karena sebab lain. Menyangkal sebab untuk menyangkal akibat adalah penalaran yang <strong>sesat</strong>, berbeda dari modus tollens yang menyangkal akibat.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan setiap penalaran: sah (modus tollens / silogisme) atau sesat (menyangkal sebab).",
        buckets: ["Sah", "Sesat (menyangkal sebab)"],
        items: [
          { text: "Jika hujan maka basah. Tidak basah. Jadi tidak hujan.", bucket: "Sah" },
          { text: "Jika hujan maka basah. Tidak hujan. Jadi tidak basah.", bucket: "Sesat (menyangkal sebab)" },
          { text: "Jika A maka B. Jika B maka C. Jadi jika A maka C.", bucket: "Sah" },
          { text: "Jika belajar maka lulus. Tidak belajar. Jadi tidak lulus.", bucket: "Sesat (menyangkal sebab)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan premis dengan kesimpulan sahnya (modus tollens atau silogisme).",
        pairs: [
          { left: "Jika p maka q. Bukan q.", right: "Bukan p" },
          { left: "Jika p maka q. Jika q maka r.", right: "Jika p maka r" },
          { left: "Jika demam maka sakit. Tidak sakit.", right: "Tidak demam" },
          { left: "Jika hujan maka basah. Jika basah maka licin.", right: "Jika hujan maka licin" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Detektif menyingkirkan tersangka",
        html: "Seorang detektif berpegang pada aturan 'Jika pelakunya Toni, maka ia ada di kota saat kejadian.' Lalu terbukti Toni sedang berada di luar negeri saat kejadian, artinya akibatnya tidak terpenuhi. Dengan modus tollens, detektif menyimpulkan Toni bukan pelaku. Ia juga merangkai 'jika pelaku masuk lewat jendela maka ada jejak lumpur' dan 'jika ada jejak lumpur maka pelaku dari kebun' menjadi satu kesimpulan rantai. Penalaran ini bukan hitungan, melainkan cara menutup celah secara sah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah menelusuri kedua pola, baru kita rumuskan. <strong>Modus tollens</strong>: dari 'jika p maka q' dan 'q tidak terjadi (bukan q)', kita simpulkan 'p tidak terjadi (bukan p)'. <strong>Silogisme</strong>: dari 'jika p maka q' dan 'jika q maka r', kita simpulkan 'jika p maka r'. Keduanya sah. Tetapi menyangkal sebab (dari 'jika p maka q' dan 'bukan p' menyimpulkan 'bukan q') adalah sesat.",
      },
      {
        type: "takeaways",
        items: [
          "Modus tollens: dari p → q dan bukan q, simpulkan bukan p.",
          "Silogisme: dari p → q dan q → r, simpulkan p → r.",
          "Modus tollens dan silogisme selalu sah bila premisnya benar.",
          "Menyangkal sebab (dari p → q dan bukan p simpulkan bukan q) adalah penalaran sesat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bentuk modus tollens yang benar adalah?",
            options: [
              "p → q, q, jadi p",
              "p → q, bukan q, jadi bukan p",
              "p → q, p, jadi q",
              "p → q, bukan p, jadi bukan q",
            ],
            answer: 1,
            explain: "Modus tollens menyangkal akibat (bukan q) untuk menggugurkan sebab (bukan p).",
          },
          {
            q: "'Jika lulus maka senang. Budi tidak senang.' Kesimpulan sah?",
            options: ["Budi lulus", "Budi tidak lulus", "Budi senang", "Tidak bisa disimpulkan"],
            answer: 1,
            explain: "Akibat (senang) tidak terjadi, maka sebab (lulus) digugurkan: Budi tidak lulus.",
          },
          {
            q: "'Jika p maka q' dan 'jika q maka r' menghasilkan kesimpulan silogisme?",
            options: ["q → p", "p → r", "r → p", "bukan p"],
            answer: 1,
            explain: "Silogisme menyambung rantai: p → q → r menjadi p → r.",
          },
          {
            q: "'Jika hujan maka basah. Tidak hujan.' Apa yang sah disimpulkan?",
            options: [
              "Jalan tidak basah",
              "Jalan pasti basah",
              "Tidak bisa disimpulkan basah atau tidak",
              "Hujan",
            ],
            answer: 2,
            explain: "Menyangkal sebab itu sesat; jalan bisa tetap basah karena sebab lain.",
          },
          {
            q: "'Jika logam dipanaskan maka memuai. Logam ini tidak memuai.' Kesimpulan?",
            options: [
              "Logam dipanaskan",
              "Logam tidak dipanaskan",
              "Logam mencair",
              "Tidak bisa disimpulkan",
            ],
            answer: 1,
            explain: "Akibat (memuai) tidak terjadi, maka lewat modus tollens sebab digugurkan: tidak dipanaskan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "memeriksa-keabsahan-argumen",
    levelId: "kuantor-penarikan",
    order: 4,
    title: "Memeriksa Keabsahan Argumen",
    summary:
      "Argumen di dunia nyata sering menyembunyikan premis dan mencampur pola sah dengan pola sesat. Kita bedah dulu sebelum menyimpulkan.",
    durationMin: 13,
    tags: ["logika", "argumen", "keabsahan", "premis"],
    blocks: [
      {
        type: "paragraph",
        html: "\"Orang sukses pasti bangun pagi. Pak Hadi bangun pagi. Jadi Pak Hadi pasti sukses.\" Terdengar meyakinkan, tetapi ada yang janggal. Argumen sehari-hari kerap menyembunyikan premis atau menukar pola sah dengan pola sesat. Ayo bedah dulu beberapa argumen sebelum kita rumuskan cara memeriksa keabsahannya.",
      },
      {
        type: "video",
        comp: "DeduktifInduktif",
        title: "Video: Menguji Keabsahan Argumen",
        caption: "Argumen sah menjamin kesimpulan bila premisnya benar, terlepas dari isinya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Untuk setiap argumen, lakukan tiga langkah penyelidikan: tandai premis-premisnya, ubah ke bentuk 'jika-maka', lalu cocokkan dengan pola yang kamu kenal (modus ponens, modus tollens, silogisme) atau jebakan (menegaskan akibat, menyangkal sebab). Cari juga premis yang sengaja tidak diucapkan.",
      },
      {
        type: "widget",
        widget: "DetektorPremisTersembunyi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Sah belum tentu benar",
        html: "Argumen <strong>sah</strong> (valid) berarti kesimpulan pasti mengikuti premis. Tetapi argumen sah bisa punya premis yang salah, sehingga kesimpulannya tetap salah. Keabsahan menilai bentuk penalaran, bukan kebenaran isi premis.",
      },
      {
        type: "classifyExercise",
        prompt: "Tentukan pola tiap argumen: sah atau sesat.",
        buckets: ["Argumen sah", "Argumen sesat"],
        items: [
          { text: "Jika hujan maka basah. Hujan. Jadi basah.", bucket: "Argumen sah" },
          { text: "Jika rajin maka pintar. Dia pintar. Jadi dia rajin.", bucket: "Argumen sesat" },
          { text: "Jika A maka B. Bukan B. Jadi bukan A.", bucket: "Argumen sah" },
          { text: "Jika sakit maka lemas. Tidak sakit. Jadi tidak lemas.", bucket: "Argumen sesat" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan argumen dengan nama pola penalarannya.",
        pairs: [
          { left: "p → q, p, jadi q", right: "Modus ponens (sah)" },
          { left: "p → q, bukan q, jadi bukan p", right: "Modus tollens (sah)" },
          { left: "p → q, q, jadi p", right: "Menegaskan akibat (sesat)" },
          { left: "p → q, bukan p, jadi bukan q", right: "Menyangkal sebab (sesat)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Iklan dan premis tersembunyi",
        html: "Sebuah iklan berkata: 'Atlet juara memakai sepatu ini, maka memakai sepatu ini membuatmu juara.' Begitu dibedah, polanya adalah menegaskan akibat sekaligus menyembunyikan premis bahwa banyak faktor lain menentukan kemenangan. Dengan memeriksa keabsahan, kita tidak mudah terbujuk klaim yang berbentuk meyakinkan tetapi cacat penalarannya. Inilah inti logika: menilai bentuk argumen, bukan sekadar terkesan oleh kata-katanya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah membedah banyak argumen, baru kita rumuskan langkahnya. Untuk memeriksa keabsahan: (1) pisahkan premis dan kesimpulan, (2) terjemahkan ke bentuk logika 'jika-maka', (3) cocokkan dengan pola sah (<strong>modus ponens</strong>, <strong>modus tollens</strong>, <strong>silogisme</strong>) atau pola sesat (menegaskan akibat, menyangkal sebab). Ingat: argumen sah hanya menjamin kesimpulan bila premisnya juga benar.",
      },
      {
        type: "takeaways",
        items: [
          "Periksa argumen dengan memisahkan premis, menerjemahkannya, lalu mencocokkan polanya.",
          "Pola sah: modus ponens, modus tollens, dan silogisme.",
          "Pola sesat yang sering menipu: menegaskan akibat dan menyangkal sebab.",
          "Argumen sah hanya menjamin kesimpulan benar jika premisnya juga benar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Argumen 'sah' berarti?",
            options: [
              "Premisnya pasti benar",
              "Kesimpulan pasti mengikuti dari premis",
              "Kesimpulannya pasti benar",
              "Kata-katanya meyakinkan",
            ],
            answer: 1,
            explain: "Keabsahan menilai bentuk: kesimpulan pasti mengikuti bila premis diterima.",
          },
          {
            q: "'Orang sukses bangun pagi. Hadi bangun pagi. Jadi Hadi sukses.' Pola ini?",
            options: ["Modus ponens", "Modus tollens", "Menegaskan akibat (sesat)", "Silogisme"],
            answer: 2,
            explain: "Menyimpulkan sebab (sukses) dari akibat (bangun pagi) adalah menegaskan akibat, sesat.",
          },
          {
            q: "Langkah pertama memeriksa keabsahan argumen adalah?",
            options: [
              "Menghitung jumlah kata",
              "Memisahkan premis dari kesimpulan",
              "Mencari kesimpulan yang disukai",
              "Menilai siapa yang berbicara",
            ],
            answer: 1,
            explain: "Memisahkan premis dan kesimpulan membuat struktur argumen terlihat jelas.",
          },
          {
            q: "Bisakah argumen sah memiliki kesimpulan yang salah?",
            options: [
              "Tidak pernah",
              "Bisa, jika salah satu premisnya salah",
              "Bisa, jika polanya modus ponens",
              "Hanya jika ada kuantor",
            ],
            answer: 1,
            explain: "Keabsahan menjamin bentuk, bukan kebenaran isi; premis salah bisa membuat kesimpulan salah.",
          },
          {
            q: "'Jika sakit maka lemas. Tidak sakit. Jadi tidak lemas.' Argumen ini?",
            options: [
              "Sah (modus tollens)",
              "Sah (silogisme)",
              "Sesat (menyangkal sebab)",
              "Sesat (menegaskan akibat)",
            ],
            answer: 2,
            explain: "Menyangkal sebab (tidak sakit) untuk menyangkal akibat adalah penalaran sesat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "silogisme-disjungtif",
    levelId: "kuantor-penarikan",
    order: 5,
    title: "Silogisme Disjungtif: Menyingkirkan Pilihan",
    summary:
      "Bila hanya ada dua kemungkinan dan satu gugur, yang tersisa pasti benar. Kita uji dulu pola menyingkirkan pilihan ini sebelum menamainya.",
    durationMin: 12,
    tags: ["logika", "penarikan", "silogisme-disjungtif", "disjungsi"],
    blocks: [
      {
        type: "paragraph",
        html: "Kunci motor pasti tertinggal di kamar <strong>atau</strong> di mobil. Setelah kamar diobrak-abrik, kunci tidak ada di sana. Tanpa mengecek mobil pun, kamu sudah yakin kunci ada di mobil. Penalaran ini terasa sangat wajar, tetapi mengapa ia selalu benar? Ayo telusuri dulu polanya sebelum kita beri nama.",
      },
      {
        type: "video",
        comp: "SilogismeVideo",
        title: "Video: Menyingkirkan Kemungkinan",
        caption: "Bila salah satu pilihan gugur, kesimpulan jatuh pada pilihan yang tersisa.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil dua kemungkinan yang dihubungkan 'atau', misalnya 'lewat jalan tol atau jalan biasa'. Gugurkan salah satunya ('ternyata bukan jalan tol'). Apa yang tersisa? Sekarang coba sebaliknya: bila salah satu pilihan justru kamu tahu BENAR, bolehkah kamu menyimpulkan yang lain salah? Catat dugaanmu lebih dulu.",
      },
      {
        type: "widget",
        widget: "CekValiditasSilogisme",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Awas jebakan: menegaskan satu pilihan",
        html: "Dari 'p atau q' dan 'p benar', kita TIDAK boleh menyimpulkan 'bukan q'. Sebab 'atau' dalam logika bersifat inklusif: keduanya bisa benar sekaligus. Misalnya 'dia bawa pena atau pensil', ternyata dia bawa pena, itu tidak membuktikan dia tidak bawa pensil. Hanya <em>menyingkirkan</em> satu pilihan (mengingkarinya) yang menjamin pilihan lain.",
      },
      {
        type: "table",
        headers: ["Nama aturan", "Premis", "Kesimpulan sah"],
        rows: [
          ["Modus ponens", "p → q, dan p", "q"],
          ["Modus tollens", "p → q, dan ¬q", "¬p"],
          ["Silogisme hipotetis", "p → q, dan q → r", "p → r"],
          ["Silogisme disjungtif", "p ∨ q, dan ¬p", "q"],
        ],
        caption: "Empat pola penarikan kesimpulan yang selalu sah bila premisnya benar.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap penalaran: sah (silogisme disjungtif) atau sesat (menegaskan satu pilihan).",
        buckets: ["Sah (silogisme disjungtif)", "Sesat (menegaskan pilihan)"],
        items: [
          { text: "Hadiahnya buku atau pulpen. Bukan buku. Jadi pulpen.", bucket: "Sah (silogisme disjungtif)" },
          { text: "Dia naik bus atau kereta. Naik bus. Jadi tidak naik kereta.", bucket: "Sesat (menegaskan pilihan)" },
          { text: "Lampu merah atau hijau. Bukan merah. Jadi hijau.", bucket: "Sah (silogisme disjungtif)" },
          { text: "Suka teh atau kopi. Suka teh. Jadi tidak suka kopi.", bucket: "Sesat (menegaskan pilihan)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan premis silogisme disjungtif dengan kesimpulan sahnya.",
        pairs: [
          { left: "x genap atau ganjil. x bukan genap.", right: "x ganjil" },
          { left: "Pergi pagi atau sore. Bukan pagi.", right: "Pergi sore" },
          { left: "Menang atau seri. Tidak menang.", right: "Seri" },
          { left: "Jawaban A atau B. Bukan A.", right: "Jawaban B" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Detektif mempersempit tersangka",
        html: "Seorang detektif yakin pelakunya adalah satu dari dua orang: Tono atau Wira. Lalu terbukti Tono punya alibi kuat, ia sedang berada di kota lain. Dengan silogisme disjungtif, detektif menyimpulkan Wira pelakunya. Namun ia tetap berhati-hati: bila ada kemungkinan ketiga yang belum tercatat, kesimpulannya bisa keliru. Kekuatan pola ini bergantung pada lengkapnya daftar pilihan, jadi premis 'p atau q' harus benar-benar mencakup semua kemungkinan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah menguji banyak kasus, baru kita rumuskan <strong>silogisme disjungtif</strong>: dari premis 'p atau q' dan premis 'bukan p', kita boleh menyimpulkan 'q'. Pola ini sah karena salah satu pilihan disingkirkan. Sebaliknya, dari 'p atau q' dan 'p benar', kita tidak boleh menyimpulkan 'bukan q', sebab 'atau' bersifat inklusif. Pastikan pula daftar pilihannya lengkap agar kesimpulan tetap aman.",
      },
      {
        type: "takeaways",
        items: [
          "Silogisme disjungtif: dari p ∨ q dan ¬p, simpulkan q.",
          "Pola ini sah karena menyingkirkan satu pilihan, bukan menegaskannya.",
          "Dari p ∨ q dan p, kita TIDAK boleh menyimpulkan ¬q (karena 'atau' inklusif).",
          "Kesimpulan hanya aman bila daftar pilihan benar-benar mencakup semua kemungkinan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bentuk silogisme disjungtif yang benar adalah?",
            options: [
              "p ∨ q, p, jadi ¬q",
              "p ∨ q, ¬p, jadi q",
              "p ∧ q, ¬p, jadi q",
              "p → q, p, jadi q",
            ],
            answer: 1,
            explain: "Menyingkirkan satu pilihan (¬p) menyisakan pilihan lain (q).",
          },
          {
            q: "'Hadiahnya buku atau pulpen. Ternyata bukan buku.' Kesimpulan sah?",
            options: ["Buku", "Pulpen", "Keduanya", "Tidak bisa disimpulkan"],
            answer: 1,
            explain: "Pilihan 'buku' gugur, maka tersisa 'pulpen'.",
          },
          {
            q: "Mengapa dari 'p atau q' dan 'p benar' tidak boleh disimpulkan 'bukan q'?",
            options: [
              "Karena premisnya salah",
              "Karena 'atau' bersifat inklusif sehingga keduanya bisa benar",
              "Karena tidak ada kata 'jika'",
              "Karena q selalu salah",
            ],
            answer: 1,
            explain: "Disjungsi inklusif membolehkan keduanya benar, jadi 'p benar' tidak menggugurkan q.",
          },
          {
            q: "'Lampu merah atau hijau. Bukan hijau.' Kesimpulan sah?",
            options: ["Hijau", "Merah", "Kuning", "Tidak bisa disimpulkan"],
            answer: 1,
            explain: "Pilihan 'hijau' disingkirkan, maka tersisa 'merah'.",
          },
          {
            q: "Agar silogisme disjungtif aman, premis 'p atau q' harus?",
            options: [
              "Memuat kata 'jika'",
              "Mencakup semua kemungkinan yang ada",
              "Selalu bernilai salah",
              "Lebih panjang dari kesimpulan",
            ],
            answer: 1,
            explain: "Bila ada kemungkinan ketiga yang terlewat, kesimpulan bisa keliru.",
          },
        ],
      },
    ],
  },
];
