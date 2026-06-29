import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "teorema-pythagoras",
    levelId: "pythagoras-kesebangunan",
    order: 1,
    title: "Teorema Pythagoras lewat Luas",
    summary:
      "Sebelum menghafal a kuadrat tambah b kuadrat, kita susun bujur sangkar di tiap sisi segitiga siku-siku sampai hubungannya muncul sendiri.",
    durationMin: 14,
    tags: ["geometri", "pythagoras", "segitiga", "luas"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan sebuah segitiga siku-siku. Di setiap sisinya kita tempelkan sebuah <strong>bujur sangkar</strong> (persegi) yang panjang sisinya sama dengan sisi segitiga itu. Pertanyaan kuno yang sudah dipikirkan ribuan tahun: adakah hubungan tetap antara luas ketiga persegi tersebut? Ayo kita amati dulu, jangan buru-buru ke rumus.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gambar segitiga siku-siku dengan dua kaki 3 dan 4 satuan. Buat persegi di tiap sisi, lalu hitung kotak satuan di dalamnya: persegi kaki kecil berisi 9 kotak, persegi kaki besar berisi 16 kotak. Sekarang hitung persegi pada sisi miring. Cocokkah 9 tambah 16 dengan luas persegi terbesar?",
      },
      {
        type: "video",
        comp: "PythagorasPetualangan",
        title: "Video: Petualangan Pythagoras",
        caption: "Menyusun luas persegi pada sisi-sisi segitiga siku-siku.",
      },
      {
        type: "widget",
        widget: "EksplorasiPythagoras",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Luas Persegi Sisi Miring di Beberapa Segitiga",
        unit: "luas (satuan persegi)",
        source: "ilustrasi edukatif",
        note: "Pada tiap segitiga siku-siku, luas persegi sisi miring tepat sama dengan jumlah luas dua persegi kaki: 9+16=25, 36+64=100, 25+144=169.",
        data: [
          { label: "3-4-5", value: 25, color: "#38bdf8" },
          { label: "6-8-10", value: 100, color: "#22d3ee" },
          { label: "5-12-13", value: 169, color: "#2dd4bf" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar berhitung",
        html: "Berhitung menjawab 'berapa panjang sisi miring'. Geometri menjawab 'mengapa luas dua persegi kaki selalu menutup persegi sisi miring', lalu memakainya untuk menalar jarak yang tak bisa diukur langsung.",
      },
      {
        type: "calcExercise",
        prompt:
          "Segitiga siku-siku berkaki 6 dan 8. Berapa panjang sisi miringnya?",
        answer: 10,
        suffix: " satuan",
        solution:
          "Luas dua persegi kaki: 6² + 8² = 36 + 64 = 100. Sisi miring adalah akar dari 100, yaitu <strong>10 satuan</strong>.",
        hint: "Jumlahkan kuadrat kedua kaki, lalu tarik akarnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah segitiga siku-siku punya sisi miring 13 dan satu kaki 5. Berapa panjang kaki yang lain?",
        answer: 12,
        suffix: " satuan",
        solution:
          "Sisi miring kuadrat dikurangi kaki kuadrat: 13² - 5² = 169 - 25 = 144. Kaki lain adalah akar 144, yaitu <strong>12 satuan</strong>.",
        hint: "Kurangkan, bukan jumlahkan, karena yang dicari adalah salah satu kaki.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Apakah tiga sisi berikut membentuk segitiga siku-siku? Cek dengan luas: apakah jumlah kuadrat dua sisi pendek sama dengan kuadrat sisi terpanjang.",
        buckets: ["Siku-siku", "Bukan siku-siku"],
        items: [
          { text: "3, 4, 5", bucket: "Siku-siku" },
          { text: "5, 12, 13", bucket: "Siku-siku" },
          { text: "2, 3, 4", bucket: "Bukan siku-siku" },
          { text: "7, 8, 9", bucket: "Bukan siku-siku" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memasang televisi yang pas",
        html: "Sebuah dinding punya ruang kosong selebar 120 cm dan setinggi 90 cm. Apakah muat televisi berukuran diagonal 60 inci (sekitar 152 cm)? Diagonal ruang kosong itu adalah sisi miring segitiga siku-siku dengan kaki 120 dan 90, yaitu akar dari 120² + 90² = akar 22500 = 150 cm. Karena 150 cm lebih kecil dari 152 cm, televisi itu tidak muat. Pythagoras menyelamatkan kita dari salah beli, tanpa perlu mengangkat televisinya dulu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati luas, baru kita rumuskan <strong>Teorema Pythagoras</strong>: pada segitiga siku-siku, <strong>a² + b² = c²</strong>, dengan a dan b panjang kedua kaki dan c panjang sisi miring. Inti rumusnya bukan simbol, melainkan kenyataan bahwa dua persegi kaki persis menutup persegi sisi miring.",
      },
      {
        type: "takeaways",
        items: [
          "Setiap sisi segitiga siku-siku bisa diwakili oleh sebuah persegi yang luasnya sisi kuadrat.",
          "Luas dua persegi kaki selalu sama dengan luas persegi sisi miring.",
          "Rumusnya a² + b² = c², dengan c sisi miring (sisi terpanjang).",
          "Untuk mencari kaki, kurangkan kuadratnya; untuk mencari sisi miring, jumlahkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dalam a² + b² = c², huruf c mewakili sisi yang mana?",
            options: ["Kaki terpendek", "Salah satu kaki", "Sisi miring", "Tinggi segitiga"],
            answer: 2,
            explain: "c selalu sisi miring, yaitu sisi terpanjang yang berhadapan dengan sudut siku-siku.",
          },
          {
            q: "Segitiga siku-siku berkaki 9 dan 12. Sisi miringnya?",
            options: ["15", "21", "108", "225"],
            answer: 0,
            explain: "9² + 12² = 81 + 144 = 225, dan akar 225 = 15.",
          },
          {
            q: "Sisi miring 25, satu kaki 7. Kaki lainnya?",
            options: ["18", "24", "26", "32"],
            answer: 1,
            explain: "25² - 7² = 625 - 49 = 576, dan akar 576 = 24.",
          },
          {
            q: "Mana yang BUKAN segitiga siku-siku?",
            options: ["6, 8, 10", "8, 15, 17", "5, 6, 7", "9, 40, 41"],
            answer: 2,
            explain: "5² + 6² = 61, tetapi 7² = 49. Tidak cocok, jadi bukan siku-siku.",
          },
          {
            q: "Mengapa luas persegi sisi miring sama dengan jumlah dua persegi kaki?",
            options: [
              "Kebetulan untuk angka tertentu",
              "Itu sifat tetap semua segitiga siku-siku",
              "Hanya berlaku untuk 3-4-5",
              "Karena semua sisi sama panjang",
            ],
            answer: 1,
            explain: "Hubungan ini berlaku untuk SEMUA segitiga siku-siku, bukan kebetulan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tripel-pythagoras-dan-terapan",
    levelId: "pythagoras-kesebangunan",
    order: 2,
    title: "Tripel Pythagoras dan Penerapannya",
    summary:
      "Sebelum menghafal daftar tripel, kita cari pola tiga bilangan bulat yang pas, lalu pakai untuk mengukur jarak nyata.",
    durationMin: 13,
    tags: ["geometri", "pythagoras", "tripel", "penerapan"],
    blocks: [
      {
        type: "paragraph",
        html: "Beberapa segitiga siku-siku istimewa: ketiga sisinya bilangan bulat rapi, seperti 3-4-5. Tiga bilangan seperti ini disebut <strong>tripel Pythagoras</strong>. Sebelum menghafalnya, ayo cari sendiri pola yang membuat tiga bilangan bulat saling cocok, lalu lihat betapa seringnya pola ini muncul di kehidupan nyata.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil tripel 3-4-5. Kalikan semua dengan 2, jadi 6-8-10. Cek: 6² + 8² = 36 + 64 = 100 = 10². Masih cocok! Kalikan dengan 3 jadi 9-12-15. Apa yang kamu temukan tentang kelipatan sebuah tripel?",
      },
      {
        type: "video",
        comp: "PythagorasPetualangan",
        title: "Video: Petualangan Pythagoras",
        caption: "Tripel bilangan bulat dan kelipatannya pada segitiga siku-siku.",
      },
      {
        type: "widget",
        widget: "EksplorasiPythagoras",
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar berhitung",
        html: "Berhitung memberi satu jawaban. Geometri memberi pola: sekali kamu tahu satu tripel, semua kelipatannya ikut menjadi tripel. Satu temuan membuka tak terhingga banyak segitiga.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan dua kaki segitiga siku-siku dengan sisi miringnya.",
        pairs: [
          { left: "3 dan 4", right: "5" },
          { left: "6 dan 8", right: "10" },
          { left: "5 dan 12", right: "13" },
          { left: "8 dan 15", right: "17" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah tangga panjang 13 m bersandar ke dinding. Kaki tangga berjarak 5 m dari dinding. Setinggi berapa ujung tangga mencapai dinding?",
        answer: 12,
        suffix: " meter",
        solution:
          "Tangga adalah sisi miring (13), jarak ke dinding salah satu kaki (5). Tinggi = akar dari 13² - 5² = akar (169 - 25) = akar 144 = <strong>12 meter</strong>.",
        hint: "Ini tripel 5-12-13. Tangga adalah sisi miring.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah lapangan berbentuk persegi panjang berukuran 9 m kali 12 m. Berapa panjang diagonalnya?",
        answer: 15,
        suffix: " meter",
        solution:
          "Diagonal adalah sisi miring segitiga berkaki 9 dan 12: akar dari 9² + 12² = akar (81 + 144) = akar 225 = <strong>15 meter</strong>. Ini kelipatan tripel 3-4-5.",
        hint: "Diagonal persegi panjang membagi dua segitiga siku-siku.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan: mana tripel Pythagoras dan mana yang bukan.",
        buckets: ["Tripel Pythagoras", "Bukan tripel"],
        items: [
          { text: "9, 12, 15", bucket: "Tripel Pythagoras" },
          { text: "8, 15, 17", bucket: "Tripel Pythagoras" },
          { text: "4, 5, 6", bucket: "Bukan tripel" },
          { text: "10, 11, 14", bucket: "Bukan tripel" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tukang bangunan menyiku pondasi",
        html: "Tukang bangunan ingin memastikan sudut pondasi benar-benar siku-siku. Ia menandai 3 meter di satu sisi dan 4 meter di sisi lain, lalu mengukur jarak antara kedua tanda. Jika jaraknya tepat 5 meter, sudutnya pasti siku-siku, sebab 3-4-5 adalah tripel Pythagoras. Trik kuno ini, disebut 'aturan 3-4-5', dipakai jauh sebelum ada alat ukur sudut modern.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mencoba banyak contoh, baru kita simpulkan: <strong>tripel Pythagoras</strong> adalah tiga bilangan bulat a, b, c yang memenuhi <strong>a² + b² = c²</strong>. Sifat penting: setiap <strong>kelipatan</strong> sebuah tripel juga tripel. Dari 3-4-5 lahir 6-8-10, 9-12-15, dan seterusnya tanpa batas.",
      },
      {
        type: "takeaways",
        items: [
          "Tripel Pythagoras adalah tiga bilangan bulat yang memenuhi a² + b² = c².",
          "Tripel dasar yang sering muncul: 3-4-5, 5-12-13, 8-15-17.",
          "Setiap kelipatan sebuah tripel juga merupakan tripel.",
          "Tripel memudahkan mengukur jarak dan menyiku sudut di lapangan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Manakah tripel Pythagoras?",
            options: ["2, 3, 4", "5, 12, 13", "6, 7, 8", "4, 6, 9"],
            answer: 1,
            explain: "5² + 12² = 25 + 144 = 169 = 13².",
          },
          {
            q: "Kelipatan 4 dari tripel 3-4-5 adalah?",
            options: ["7, 8, 9", "12, 16, 20", "6, 8, 10", "9, 12, 15"],
            answer: 1,
            explain: "3×4, 4×4, 5×4 = 12, 16, 20. Cek: 12² + 16² = 400 = 20².",
          },
          {
            q: "Tangga 10 m, kaki 6 m dari dinding. Tinggi yang dicapai?",
            options: ["4 m", "8 m", "16 m", "60 m"],
            answer: 1,
            explain: "akar (10² - 6²) = akar (100 - 36) = akar 64 = 8 m. Tripel 6-8-10.",
          },
          {
            q: "Diagonal layar persegi panjang 8 cm kali 15 cm?",
            options: ["17 cm", "23 cm", "19 cm", "13 cm"],
            answer: 0,
            explain: "akar (8² + 15²) = akar (64 + 225) = akar 289 = 17 cm. Tripel 8-15-17.",
          },
          {
            q: "Mengapa aturan 3-4-5 bisa memastikan sudut siku-siku?",
            options: [
              "Karena angkanya kecil",
              "Karena 3-4-5 memenuhi a² + b² = c²",
              "Karena semua segitiga begitu",
              "Karena jumlahnya 12",
            ],
            answer: 1,
            explain: "Hanya segitiga yang memenuhi teorema Pythagoras yang bersudut siku-siku.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kesebangunan",
    levelId: "pythagoras-kesebangunan",
    order: 3,
    title: "Kesebangunan: Bentuk Sama, Ukuran Beda",
    summary:
      "Sebelum menghafal syarat sebangun, kita amati foto yang diperbesar sampai paham bahwa perbandingan sisinya selalu tetap.",
    durationMin: 13,
    tags: ["geometri", "kesebangunan", "perbandingan", "skala"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah foto kecil dan versi besarnya terlihat 'sama bentuk' walau ukurannya berbeda. Dalam geometri, dua bangun seperti ini disebut <strong>sebangun</strong>. Tapi apa sebenarnya yang membuat dua bentuk 'sama bentuk'? Ayo amati perbandingan sisinya dulu sebelum menyebut aturan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sebuah persegi panjang berukuran 3 kali 4. Perbesar jadi 6 kali 8. Hitung perbandingan tiap sisi yang bersesuaian: 6 dibagi 3 sama dengan 2, dan 8 dibagi 4 juga sama dengan 2. Sekarang coba 6 kali 9. Apakah masih sebangun dengan 3 kali 4? Bandingkan perbandingannya.",
      },
      {
        type: "video",
        comp: "BentukGeometri",
        title: "Video: Mengenal Bentuk",
        caption: "Bangun-bangun yang sebangun: bentuk sama, ukuran berbeda.",
      },
      {
        type: "widget",
        widget: "PenjelajahBentuk",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perbandingan Sisi Bersesuaian pada Segitiga Sebangun",
        unit: "perbandingan (skala)",
        source: "ilustrasi edukatif",
        note: "Segitiga 3-4-5 diperbesar menjadi 6-8-10. Perbandingan tiap pasang sisi bersesuaian sama, yaitu 2: itulah ciri kesebangunan.",
        data: [
          { label: "6 : 3", value: 2, color: "#38bdf8" },
          { label: "8 : 4", value: 2, color: "#22d3ee" },
          { label: "10 : 5", value: 2, color: "#2dd4bf" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar berhitung",
        html: "Berhitung mengubah satu ukuran ke ukuran lain. Geometri menjelaskan mengapa perbandingannya harus tetap agar bentuk tidak penyok, lalu memakainya untuk mengukur tinggi pohon hanya lewat bayangan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Segitiga ABC sebangun dengan DEF. Sisi AB = 4 bersesuaian dengan DE = 6. Jika BC = 8, berapa panjang EF yang bersesuaian?",
        answer: 12,
        suffix: " satuan",
        solution:
          "Faktor skala = 6 / 4 = 1,5. Maka EF = 8 × 1,5 = <strong>12 satuan</strong>.",
        hint: "Cari dulu faktor skala dari sepasang sisi yang diketahui lengkap.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah foto berukuran 8 cm kali 12 cm diperbesar sehingga lebarnya menjadi 20 cm. Berapa tingginya agar tetap sebangun?",
        answer: 30,
        suffix: " cm",
        solution:
          "Faktor skala = 20 / 8 = 2,5. Tinggi baru = 12 × 2,5 = <strong>30 cm</strong>. Perbandingan tetap, foto tidak penyok.",
        hint: "Gunakan faktor skala yang sama untuk lebar dan tinggi.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Apakah pasangan persegi panjang berikut sebangun? Cek perbandingan kedua sisinya.",
        buckets: ["Sebangun", "Tidak sebangun"],
        items: [
          { text: "2×3 dan 4×6", bucket: "Sebangun" },
          { text: "5×10 dan 1×2", bucket: "Sebangun" },
          { text: "2×3 dan 4×5", bucket: "Tidak sebangun" },
          { text: "3×4 dan 6×9", bucket: "Tidak sebangun" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengukur tinggi pohon lewat bayangan",
        html: "Tongkat setinggi 1 m menghasilkan bayangan 1,5 m. Pada saat yang sama, sebuah pohon menghasilkan bayangan 9 m. Karena sinar matahari membentuk segitiga sebangun, perbandingan tinggi terhadap bayangan harus sama: tinggi pohon dibagi 9 sama dengan 1 dibagi 1,5. Maka tinggi pohon = 9 × (1 / 1,5) = 6 m. Kita mengukur pohon tanpa memanjatnya, hanya dengan kesebangunan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati perbandingan, baru kita rumuskan: dua bangun <strong>sebangun</strong> jika <strong>sudut-sudut bersesuaian sama besar</strong> DAN <strong>perbandingan sisi-sisi bersesuaian sama</strong> (faktor skala k tetap). Jadi <strong>sisi baru = sisi lama × k</strong>. Bentuk tidak berubah, hanya membesar atau mengecil.",
      },
      {
        type: "takeaways",
        items: [
          "Dua bangun sebangun berbentuk sama tetapi boleh berbeda ukuran.",
          "Syaratnya: sudut bersesuaian sama besar dan perbandingan sisi bersesuaian tetap.",
          "Perbandingan tetap itu disebut faktor skala (k).",
          "Kesebangunan dipakai mengukur tinggi atau jarak yang sulit dijangkau.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dua bangun sebangun berarti?",
            options: [
              "Sama bentuk dan sama ukuran",
              "Sama bentuk, ukuran boleh berbeda",
              "Beda bentuk, sama ukuran",
              "Selalu berupa persegi",
            ],
            answer: 1,
            explain: "Sebangun = bentuk sama, ukuran boleh berbeda dengan perbandingan tetap.",
          },
          {
            q: "Persegi panjang 4×6 sebangun dengan?",
            options: ["6×8", "8×12", "4×8", "6×9"],
            answer: 1,
            explain: "8×12 punya perbandingan 2 untuk kedua sisi (8/4 = 2, 12/6 = 2).",
          },
          {
            q: "Faktor skala dari segitiga sisi 5 ke sisi bersesuaian 15 adalah?",
            options: ["3", "10", "5", "0,33"],
            answer: 0,
            explain: "15 / 5 = 3. Semua sisi dikalikan 3.",
          },
          {
            q: "Foto 6×9 diperbesar lebarnya jadi 18. Tinggi agar sebangun?",
            options: ["21", "27", "24", "12"],
            answer: 1,
            explain: "Skala = 18 / 6 = 3, maka tinggi = 9 × 3 = 27.",
          },
          {
            q: "Mengapa bayangan bisa dipakai mengukur tinggi pohon?",
            options: [
              "Bayangan selalu sama panjang",
              "Sinar matahari membentuk segitiga-segitiga yang sebangun",
              "Pohon dan tongkat sama tinggi",
              "Bayangan tidak ada hubungannya",
            ],
            answer: 1,
            explain: "Karena sebangun, perbandingan tinggi dan bayangan sama untuk keduanya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kekongruenan",
    levelId: "pythagoras-kesebangunan",
    order: 4,
    title: "Kekongruenan: Sama Persis",
    summary:
      "Sebelum menghafal syarat kongruen, kita coba menumpuk dua bangun sampai paham kapan keduanya benar-benar sama persis.",
    durationMin: 12,
    tags: ["geometri", "kekongruenan", "segitiga", "pembuktian"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua bangun disebut <strong>kongruen</strong> bila bisa ditumpuk sampai persis menutupi satu sama lain: bentuk sama, ukuran sama. Bedanya dengan sebangun, di sini ukurannya juga harus identik. Tapi berapa banyak yang perlu kita ketahui untuk yakin dua segitiga kongruen? Ayo selidiki dulu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba gambar dua segitiga yang ketiga sisinya sama panjang, misalnya 5, 6, dan 7. Apakah kamu bisa membuat dua segitiga berbeda bentuk dengan sisi yang sama itu? Ternyata tidak bisa! Begitu ketiga sisinya ditetapkan, bentuknya terkunci. Sekarang coba kalau hanya ketiga sudutnya yang sama, apakah ukurannya pasti sama?",
      },
      {
        type: "video",
        comp: "BentukGeometri",
        title: "Video: Mengenal Bentuk",
        caption: "Membandingkan bangun yang kongruen: sama bentuk dan sama ukuran.",
      },
      {
        type: "widget",
        widget: "PenjelajahBentuk",
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar berhitung",
        html: "Berhitung mencocokkan angka satu per satu. Geometri menemukan jalan pintas: dengan beberapa informasi tepat, kita bisa yakin dua bangun identik tanpa mengukur setiap bagiannya.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Apakah syarat berikut sudah cukup untuk memastikan dua segitiga kongruen?",
        buckets: ["Cukup membuktikan kongruen", "Tidak cukup"],
        items: [
          { text: "Sisi-Sisi-Sisi (ketiga sisi sama)", bucket: "Cukup membuktikan kongruen" },
          { text: "Sisi-Sudut-Sisi", bucket: "Cukup membuktikan kongruen" },
          { text: "Sudut-Sisi-Sudut", bucket: "Cukup membuktikan kongruen" },
          { text: "Sudut-Sudut-Sudut (ketiga sudut sama)", bucket: "Tidak cukup" },
        ],
      },
      {
        type: "matchExercise",
        prompt:
          "Segitiga ABC kongruen dengan DEF (A↔D, B↔E, C↔F). Pasangkan tiap sisi dengan sisi yang bersesuaian.",
        pairs: [
          { left: "AB", right: "DE" },
          { left: "BC", right: "EF" },
          { left: "CA", right: "FD" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Segitiga ABC kongruen dengan PQR. Sisi-sisi ABC adalah 8, 5, dan 6. Berapa keliling segitiga PQR?",
        answer: 19,
        suffix: " satuan",
        solution:
          "Karena kongruen, sisi-sisi PQR sama persis: 8, 5, dan 6. Keliling = 8 + 5 + 6 = <strong>19 satuan</strong>.",
        hint: "Bangun kongruen punya sisi-sisi yang sama persis.",
      },
      {
        type: "calcExercise",
        prompt:
          "Segitiga ABC kongruen dengan DEF. Sudut A = 50 derajat dan sudut B = 70 derajat. Berapa besar sudut F (yang bersesuaian dengan sudut C)?",
        answer: 60,
        suffix: " derajat",
        solution:
          "Sudut C = 180 - 50 - 70 = 60 derajat. Karena kongruen, sudut F bersesuaian dengan C, jadi sudut F = <strong>60 derajat</strong>.",
        hint: "Jumlah sudut segitiga 180 derajat, lalu pakai kesesuaian.",
      },
      {
        type: "case",
        title: "Studi Kasus: Pabrik genteng yang seragam",
        html: "Sebuah pabrik mencetak ribuan genteng dari satu cetakan yang sama. Setiap genteng harus <strong>kongruen</strong> dengan cetakan induknya agar bisa saling mengunci di atap tanpa celah. Pengawas mutu cukup mengecek tiga sisinya (SSS): jika ketiganya pas dengan acuan, genteng itu dipastikan identik tanpa perlu mengukur setiap sudut. Inilah kekuatan praktis dari syarat kekongruenan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menyelidiki, baru kita simpulkan syarat <strong>kekongruenan segitiga</strong>: <strong>SSS</strong> (tiga sisi sama), <strong>SAS</strong> (sisi-sudut-sisi), <strong>ASA</strong> (sudut-sisi-sudut), dan <strong>AAS</strong>. Catatan penting: <strong>AAA hanya menjamin sebangun, bukan kongruen</strong>, sebab tiga sudut sama bisa menghasilkan ukuran berbeda.",
      },
      {
        type: "takeaways",
        items: [
          "Kongruen berarti sama bentuk DAN sama ukuran (bisa ditumpuk persis).",
          "Syarat kongruen segitiga: SSS, SAS, ASA, dan AAS.",
          "AAA hanya menjamin sebangun, bukan kongruen.",
          "Pada bangun kongruen, sisi dan sudut yang bersesuaian sama besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dua bangun kongruen pasti memiliki?",
            options: [
              "Bentuk sama, ukuran berbeda",
              "Bentuk dan ukuran sama persis",
              "Hanya sudut yang sama",
              "Hanya luas yang sama",
            ],
            answer: 1,
            explain: "Kongruen = sama bentuk dan sama ukuran, dapat ditumpuk persis.",
          },
          {
            q: "Syarat manakah yang TIDAK menjamin kekongruenan?",
            options: ["SSS", "SAS", "AAA", "ASA"],
            answer: 2,
            explain: "AAA hanya membuat segitiga sebangun; ukurannya bisa berbeda.",
          },
          {
            q: "Segitiga PQR kongruen dengan XYZ. Jika PQ = 9, maka sisi bersesuaian XY = ?",
            options: ["9", "18", "4,5", "Tidak bisa ditentukan"],
            answer: 0,
            explain: "Sisi bersesuaian pada bangun kongruen sama persis, jadi 9.",
          },
          {
            q: "Beda utama kongruen dan sebangun adalah?",
            options: [
              "Kongruen sama ukuran, sebangun boleh beda ukuran",
              "Tidak ada bedanya",
              "Sebangun selalu lebih kecil",
              "Kongruen hanya untuk persegi",
            ],
            answer: 0,
            explain: "Keduanya sama bentuk, tetapi kongruen juga sama ukuran.",
          },
          {
            q: "Kedua segitiga punya tiga pasang sisi sama panjang. Syarat ini disebut?",
            options: ["AAA", "SSS", "ASA", "Tidak cukup"],
            answer: 1,
            explain: "Tiga sisi sama adalah syarat SSS, cukup untuk kongruen.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "jarak-dua-titik-koordinat",
    levelId: "pythagoras-kesebangunan",
    order: 5,
    title: "Jarak Dua Titik pada Bidang Koordinat",
    summary:
      "Sebelum menghafal rumus jarak, kita gambar dulu segitiga siku-siku di antara dua titik di peta petak, sampai rumusnya lahir dari Pythagoras.",
    durationMin: 13,
    tags: ["geometri", "pythagoras", "koordinat", "jarak"],
    blocks: [
      {
        type: "paragraph",
        html: "Aplikasi peta memberi tahu jarak lurus antara dua tempat, padahal jalanannya berkelok. Bagaimana cara menghitung jarak lurus itu? Ternyata kuncinya adalah <strong>teorema Pythagoras</strong>. Sebelum kita pakai rumusnya, ayo amati dulu segitiga siku-siku yang tersembunyi di antara dua titik pada bidang koordinat.",
      },
      {
        type: "video",
        comp: "PythagorasPetualangan",
        title: "Video: Petualangan Pythagoras",
        caption: "Selisih mendatar dan selisih tegak membentuk dua sisi siku-siku, jaraknya adalah sisi miring.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tandai titik A(1, 2) dan B(4, 6) di kertas berpetak. Hitung selisih mendatar (4 - 1 = 3 petak) dan selisih tegak (6 - 2 = 4 petak). Gambar segitiga siku-siku dengan dua sisi itu. Berapa panjang sisi miring AB? Cocokkan dengan menghitung lewat luas bujur sangkar sisi-sisinya.",
      },
      {
        type: "widget",
        widget: "EksplorasiPythagoras",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Jarak Lurus vs Jarak Menyusur Petak antara Dua Titik",
        unit: "panjang (satuan)",
        source: "ilustrasi edukatif",
        note: "Untuk selisih 3 dan 4 petak, jarak lurus (sisi miring) 5 selalu lebih pendek daripada menyusur tepi petak 3 + 4 = 7.",
        data: [
          { label: "Lurus (3,4)", value: 5, color: "#38bdf8" },
          { label: "Menyusur (3,4)", value: 7, color: "#94a3b8" },
          { label: "Lurus (6,8)", value: 10, color: "#22d3ee" },
          { label: "Menyusur (6,8)", value: 14, color: "#cbd5e1" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar berhitung",
        html: "Berhitung menjawab 'berapa hasil akarnya'. Geometri menjawab 'mengapa jarak lurus selalu sisi miring segitiga siku-siku' dan memakainya untuk mengukur jarak di peta, layar, dan ruang tanpa menarik penggaris.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa jarak antara titik A(1, 2) dan B(4, 6) pada bidang koordinat? (selisih mendatar 3, selisih tegak 4)",
        answer: 5,
        suffix: " satuan",
        solution:
          "Selisih mendatar 4 - 1 = 3, selisih tegak 6 - 2 = 4. Jarak = akar(3 kuadrat + 4 kuadrat) = akar(9 + 16) = akar 25 = <strong>5 satuan</strong>.",
        hint: "Pakai Pythagoras: jarak = akar dari (selisih-x kuadrat + selisih-y kuadrat).",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah drone terbang dari titik (0, 0) ke titik (5, 12). Berapa jarak lurus yang ditempuh?",
        answer: 13,
        suffix: " satuan",
        solution:
          "Selisih mendatar 5, selisih tegak 12. Jarak = akar(5 kuadrat + 12 kuadrat) = akar(25 + 144) = akar 169 = <strong>13 satuan</strong>.",
        hint: "5, 12, 13 adalah tripel Pythagoras.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap perjalanan dari titik (0,0) dengan jarak lurusnya.",
        pairs: [
          { left: "(0,0) ke (3,4)", right: "5 satuan" },
          { left: "(0,0) ke (6,8)", right: "10 satuan" },
          { left: "(0,0) ke (5,12)", right: "13 satuan" },
          { left: "(0,0) ke (8,15)", right: "17 satuan" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Dari selisih (mendatar, tegak) berikut, kelompokkan apakah jaraknya bilangan bulat atau tidak.",
        buckets: ["Jarak bilangan bulat", "Jarak bukan bilangan bulat"],
        items: [
          { text: "Selisih (3, 4)", bucket: "Jarak bilangan bulat" },
          { text: "Selisih (5, 12)", bucket: "Jarak bilangan bulat" },
          { text: "Selisih (1, 1)", bucket: "Jarak bukan bilangan bulat" },
          { text: "Selisih (2, 3)", bucket: "Jarak bukan bilangan bulat" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Jarak antar menara pemancar",
        html: "Seorang teknisi memetakan dua menara pada peta berskala. Menara A di titik (2, 3) dan menara B di titik (10, 9), dengan tiap satuan mewakili 1 km. Selisih mendatar 8 km dan selisih tegak 6 km. Jarak lurus antar menara = akar(8 kuadrat + 6 kuadrat) = akar(64 + 36) = akar 100 = 10 km. Ia tahu jarak pancar yang dibutuhkan tanpa mengukur langsung di lapangan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menggambar segitiganya, baru rumus jarak lahir dari Pythagoras: jarak antara titik (x1, y1) dan (x2, y2) adalah <strong>akar dari ((x2 - x1) kuadrat + (y2 - y1) kuadrat)</strong>. Selisih mendatar dan selisih tegak adalah dua sisi siku-siku, dan jaraknya adalah sisi miring.",
      },
      {
        type: "takeaways",
        items: [
          "Jarak dua titik adalah sisi miring segitiga siku-siku yang dibentuk selisih koordinatnya.",
          "Rumusnya: jarak = akar dari (selisih-x kuadrat + selisih-y kuadrat).",
          "Jarak lurus selalu lebih pendek daripada menyusur tepi petak.",
          "Tripel Pythagoras (3-4-5, 5-12-13, 8-15-17) memberi jarak bilangan bulat.",
          "Rumus jarak adalah penerapan langsung teorema Pythagoras pada koordinat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus jarak dua titik diturunkan dari?",
            options: ["Rumus luas lingkaran", "Teorema Pythagoras", "Kesebangunan", "Sudut berpelurus"],
            answer: 1,
            explain: "Selisih koordinat membentuk segitiga siku-siku, jaraknya sisi miring (Pythagoras).",
          },
          {
            q: "Jarak titik (0,0) ke (3,4) adalah?",
            options: ["5", "7", "12", "25"],
            answer: 0,
            explain: "akar(9 + 16) = akar 25 = 5 satuan.",
          },
          {
            q: "Pada selisih mendatar 6 dan tegak 8, jarak lurusnya adalah?",
            options: ["10", "14", "48", "100"],
            answer: 0,
            explain: "akar(36 + 64) = akar 100 = 10 satuan.",
          },
          {
            q: "Jarak lurus dibanding jarak menyusur tepi petak biasanya?",
            options: ["Lebih panjang", "Sama saja", "Lebih pendek", "Selalu dua kali lipat"],
            answer: 2,
            explain: "Sisi miring selalu lebih pendek daripada jumlah dua sisi siku-sikunya.",
          },
          {
            q: "Titik A(2,3) dan B(10,9), tiap satuan 1 km. Jarak A ke B adalah?",
            options: ["8 km", "10 km", "14 km", "6 km"],
            answer: 1,
            explain: "akar(8 kuadrat + 6 kuadrat) = akar 100 = 10 km.",
          },
        ],
      },
    ],
  },
];
