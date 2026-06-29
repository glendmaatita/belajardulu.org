import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "kemiringan-garis-singgung",
    levelId: "turunan",
    order: 1,
    title: "Kemiringan Garis Singgung: Curam di Satu Titik",
    summary:
      "Sebelum rumus turunan, kita rasakan dulu apa artinya 'kemiringan kurva' di satu titik lewat garis yang menyentuhnya.",
    durationMin: 13,
    tags: ["kalkulus", "turunan", "garis singgung", "gradien"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu bersepeda menuruni bukit yang melengkung. Di kaki bukit jalannya hampir datar, tetapi di tengah lerengnya curam sekali. Pada sebuah garis lurus kemiringan selalu sama, tetapi pada kurva kemiringan berubah-ubah di setiap titik. Pertanyaannya: seberapa curam kurva itu tepat di satu titik? Ayo selidiki dulu sebelum menulis rumus apa pun.",
      },
      {
        type: "video",
        comp: "TurunanVideo",
        title: "Video: Garis Singgung pada Kurva",
        caption: "Garis yang menyentuh kurva di satu titik dan mengikuti arah kurva di sana.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ingat kemiringan garis lurus: gradien = perubahan tegak dibagi perubahan datar. Sekarang ambil kurva f(x) = x kuadrat. Tarik garis lewat dua titik di kurva, lalu geser titik kedua makin dekat ke titik pertama. Perhatikan garis itu pelan-pelan berubah dari 'garis pemotong' menjadi 'garis yang menyentuh' satu titik. Itulah garis singgung.",
      },
      {
        type: "widget",
        widget: "SimulatorTurunan",
      },
      {
        type: "callout",
        tone: "info",
        title: "Garis pemotong menuju garis singgung",
        html: "Garis yang melewati <strong>dua</strong> titik kurva disebut garis pemotong (sekan). Kemiringannya adalah gradien rata-rata di antara kedua titik. Saat titik kedua kita geser makin dekat ke titik pertama, garis pemotong berputar pelan dan menempel jadi garis singgung. Kemiringan garis singgung itulah kemiringan kurva di titik tersebut.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah garis melewati titik (1, 3) dan (4, 9). Berapa kemiringan (gradien) garis itu?",
        answer: 2,
        solution:
          "Gradien = perubahan tegak dibagi perubahan datar = (9 - 3) / (4 - 1) = 6 / 3 = <strong>2</strong>.",
        hint: "Gradien = (y2 - y1) / (x2 - x1).",
      },
      {
        type: "classifyExercise",
        prompt: "Lihat kemiringan garis singgung di tiap titik. Kelompokkan menurut arahnya.",
        buckets: ["Gradien positif (naik)", "Gradien negatif (turun)", "Gradien nol (datar)"],
        items: [
          { text: "Lereng kurva yang menanjak ke kanan", bucket: "Gradien positif (naik)" },
          { text: "Garis singgung condong ke atas kanan", bucket: "Gradien positif (naik)" },
          { text: "Lereng kurva yang menurun ke kanan", bucket: "Gradien negatif (turun)" },
          { text: "Garis singgung condong ke bawah kanan", bucket: "Gradien negatif (turun)" },
          { text: "Garis singgung di puncak kurva", bucket: "Gradien nol (datar)" },
          { text: "Garis singgung di dasar lembah kurva", bucket: "Gradien nol (datar)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Spidometer di tikungan menurun",
        html: "Saat mobil melintasi grafik posisi yang melengkung, spidometer membaca kemiringan grafik itu di <strong>saat itu juga</strong>. Saat grafik posisi menanjak curam, mobil melaju cepat; saat grafik mendatar, mobil berhenti sejenak. Kemiringan grafik di satu titik, yaitu gradien garis singgung, persis menggambarkan kecepatan sesaat. Inilah jembatan dari geometri ke laju.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Gagasan pun lahir di akhir",
        html: "Setelah merasakan polanya, baru kita rumuskan: <strong>kemiringan kurva di satu titik</strong> adalah kemiringan (gradien) garis singgung di titik itu. Untuk menemukannya, ambil gradien garis pemotong antara dua titik lalu dekatkan kedua titik sampai jaraknya menuju nol. Nilai yang didekati gradien itulah kemiringan sesaat.",
      },
      {
        type: "takeaways",
        items: [
          "Garis lurus punya satu kemiringan; kurva punya kemiringan berbeda di setiap titik.",
          "Garis singgung menyentuh kurva di satu titik dan mengikuti arahnya di sana.",
          "Gradien garis pemotong (dua titik) menuju gradien garis singgung saat kedua titik mendekat.",
          "Kemiringan grafik posisi di satu titik sama dengan kecepatan sesaat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud kemiringan kurva di satu titik?",
            options: [
              "Nilai fungsi di titik itu",
              "Kemiringan garis singgung di titik itu",
              "Luas di bawah kurva",
              "Jarak titik ke sumbu x",
            ],
            answer: 1,
            explain: "Kemiringan kurva di satu titik adalah gradien garis singgungnya.",
          },
          {
            q: "Garis yang melewati dua titik pada kurva disebut?",
            options: ["Garis singgung", "Garis pemotong (sekan)", "Garis tegak", "Garis datar"],
            answer: 1,
            explain: "Dua titik membentuk garis pemotong; gradiennya adalah gradien rata-rata.",
          },
          {
            q: "Saat dua titik garis pemotong saling didekatkan, garis itu menuju?",
            options: ["Garis tegak", "Garis singgung", "Sumbu x", "Titik asal"],
            answer: 1,
            explain: "Garis pemotong berputar menempel menjadi garis singgung.",
          },
          {
            q: "Gradien garis lewat (2, 1) dan (5, 7) adalah?",
            options: ["2", "3", "6", "1"],
            answer: 0,
            explain: "(7 - 1) / (5 - 2) = 6 / 3 = 2.",
          },
          {
            q: "Di puncak sebuah kurva, kemiringan garis singgungnya adalah?",
            options: ["Positif besar", "Negatif besar", "Nol", "Tak hingga"],
            answer: 2,
            explain: "Di puncak (atau lembah) garis singgung mendatar, gradiennya nol.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "definisi-turunan",
    levelId: "turunan",
    order: 2,
    title: "Definisi Turunan: Memperkecil Selang Menuju Nol",
    summary:
      "Kita ambil gradien rata-rata pada selang yang makin pendek dan lihat nilai yang didekatinya. Dari sanalah turunan lahir.",
    durationMin: 14,
    tags: ["kalkulus", "turunan", "limit", "gradien"],
    blocks: [
      {
        type: "paragraph",
        html: "Pada pelajaran lalu kita rasakan garis pemotong menempel jadi garis singgung. Sekarang kita ubah perasaan itu menjadi angka. Kuncinya satu kata yang sudah akrab: limit. Kita hitung gradien rata-rata pada selang yang makin pendek, lalu kita perkecil selang itu menuju nol. Ayo berpetualang dengan angka nyata dulu, rumus kita simpan di akhir.",
      },
      {
        type: "video",
        comp: "LimitVideo",
        title: "Video: Dari Gradien Rata-rata ke Gradien Sesaat",
        caption: "Selang h diperkecil menuju nol, gradien rata-rata menempel ke satu nilai.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil f(x) = x kuadrat dan titik x = 2. Gradien rata-rata antara x = 2 dan x = 2 + h adalah (f(2+h) - f(2)) / h. Hitung untuk h yang makin kecil: h = 1, lalu 0,5, lalu 0,1, lalu 0,01. Karena (4 + 4h + h kuadrat - 4) / h = 4 + h, hasilnya 5; 4,5; 4,1; 4,01. Ke mana ia menuju?",
      },
      {
        type: "widget",
        widget: "SimulatorTurunan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gradien Rata-rata f(x) = x kuadrat di Sekitar x = 2 saat Selang h Mengecil",
        unit: "gradien rata-rata (= 4 + h)",
        source: "perhitungan (f(2+h) - f(2)) / h",
        note: "Saat h mengecil menuju nol, gradien rata-rata menempel ke 4. Itulah gradien sesaat di x = 2.",
        data: [
          { label: "h=1", value: 5, color: "#a78bfa" },
          { label: "h=0,5", value: 4.5, color: "#8b5cf6" },
          { label: "h=0,1", value: 4.1, color: "#7c3aed" },
          { label: "h=0,01", value: 4.01, color: "#6d28d9" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa harus limit, bukan h = 0 langsung",
        html: "Kalau langsung memasukkan h = 0, kita dapat 0 dibagi 0 yang tak bermakna. Karena itu kita pakai limit: lihat ke mana 4 + h <strong>menuju</strong> saat h makin dekat ke nol, tanpa harus benar-benar nol. Jawabannya 4. Gagasan 'mendekati tanpa menyentuh' dari Level 1 menyelamatkan kita di sini.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk f(x) = x kuadrat, gradien rata-rata di sekitar x = 2 bernilai 4 + h. Berapa nilai yang didekatinya saat h menuju nol (yaitu turunan di x = 2)?",
        answer: 4,
        solution:
          "Saat h menuju nol, 4 + h menuju <strong>4</strong>. Jadi gradien sesaat (turunan) di x = 2 adalah 4.",
        hint: "Masukkan h yang sangat dekat ke nol pada ekspresi 4 + h.",
      },
      {
        type: "matchExercise",
        prompt: "Untuk f(x) = x kuadrat di x = 2, gradien rata-rata = 4 + h. Pasangkan nilai h dengan gradien rata-ratanya.",
        pairs: [
          { left: "h = 1", right: "5" },
          { left: "h = 0,5", right: "4,5" },
          { left: "h = 0,1", right: "4,1" },
          { left: "h = 0,01", right: "4,01" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kecepatan sesaat dari data jarak",
        html: "Seorang pelari dicatat posisinya tiap selang waktu. Untuk menebak kecepatannya tepat pada detik ke-2, kita hitung kecepatan rata-rata pada selang 1 detik, lalu 0,1 detik, lalu 0,01 detik di sekitar detik ke-2. Angka-angka itu menempel ke satu nilai. Nilai itulah kecepatan sesaat, dan secara matematis ia adalah turunan posisi terhadap waktu. Selang yang diperkecil menuju nol adalah inti dari definisi turunan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memperkecil selang menuju nol, baru kita tuliskan definisinya: <strong>f'(x) = lim h→0 (f(x + h) - f(x)) / h</strong>. Inilah turunan: limit dari gradien rata-rata saat selang h menuju nol. Untuk f(x) = x kuadrat, hasilnya f'(x) = 2x, sehingga f'(2) = 4, persis seperti yang kita rasakan tadi.",
      },
      {
        type: "takeaways",
        items: [
          "Turunan adalah limit gradien rata-rata saat selang h menuju nol.",
          "Definisi formalnya: f'(x) = lim h→0 (f(x + h) - f(x)) / h.",
          "Memasukkan h = 0 langsung memberi 0/0; limit-lah yang menyelamatkan.",
          "Untuk f(x) = x kuadrat, turunannya 2x, jadi gradien di x = 2 adalah 4.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Turunan didefinisikan sebagai limit dari?",
            options: [
              "Nilai fungsi",
              "Gradien rata-rata saat selang h menuju nol",
              "Luas di bawah kurva",
              "Jumlah dua titik",
            ],
            answer: 1,
            explain: "f'(x) = lim h→0 (f(x+h) - f(x)) / h, yaitu limit gradien rata-rata.",
          },
          {
            q: "Mengapa kita tidak langsung memasukkan h = 0?",
            options: [
              "Karena dilarang aturan",
              "Karena memberi bentuk 0/0 yang tak bermakna",
              "Karena h harus negatif",
              "Karena fungsi selalu nol",
            ],
            answer: 1,
            explain: "Langsung h = 0 menghasilkan 0/0; kita pakai limit untuk melihat nilai yang didekati.",
          },
          {
            q: "Untuk f(x) = x kuadrat, gradien rata-rata di sekitar x = 2 menyederhana menjadi?",
            options: ["4 + h", "2 + h", "h kuadrat", "2h"],
            answer: 0,
            explain: "((2+h)^2 - 4)/h = (4h + h^2)/h = 4 + h.",
          },
          {
            q: "Saat h menuju nol, gradien rata-rata 4 + h menuju?",
            options: ["0", "2", "4", "Tak hingga"],
            answer: 2,
            explain: "4 + h menuju 4 saat h menuju nol.",
          },
          {
            q: "Turunan f(x) = x kuadrat adalah?",
            options: ["x", "2x", "x kuadrat", "2"],
            answer: 1,
            explain: "f'(x) = 2x, sehingga f'(2) = 4.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "aturan-turunan-dasar",
    levelId: "turunan",
    order: 3,
    title: "Aturan Turunan Dasar: Pintasan untuk x pangkat n",
    summary:
      "Setelah menemukan turunan lewat limit berkali-kali, kita kenali pola berulang dan ringkas menjadi satu aturan pintar.",
    durationMin: 14,
    tags: ["kalkulus", "turunan", "aturan pangkat", "pola"],
    blocks: [
      {
        type: "paragraph",
        html: "Menghitung turunan lewat limit memang teliti, tetapi melelahkan kalau diulang terus. Untungnya matematika bukan sekadar berhitung, melainkan mencari pola. Kalau kita hitung turunan x, lalu x kuadrat, lalu x pangkat tiga lewat limit, sebuah pola rapi akan muncul dengan sendirinya. Ayo temukan polanya dulu, rumus pintasannya kita tulis di akhir.",
      },
      {
        type: "video",
        comp: "TurunanVideo",
        title: "Video: Pola Turunan x pangkat n",
        caption: "Mengamati hasil turunan beberapa pangkat dan menemukan keteraturannya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lewat definisi limit kita peroleh: turunan x adalah 1; turunan x kuadrat adalah 2x; turunan x pangkat tiga adalah 3x kuadrat; turunan x pangkat empat adalah 4x pangkat tiga. Tatap kolom ini sebentar. Apa yang terjadi pada pangkatnya? Dari mana datang angka di depan? Coba tebak turunan x pangkat lima sebelum kita lihat aturannya.",
      },
      {
        type: "widget",
        widget: "SimulatorTurunan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Turunan f(x) = x kuadrat di Berbagai Titik (gradien = 2x)",
        unit: "kemiringan f'(x)",
        source: "perhitungan f'(x) = 2x untuk f(x) = x kuadrat",
        note: "Di tiap titik, kemiringan kurva x kuadrat sama dengan 2 kali x. Garis lurus ini menegaskan f'(x) = 2x.",
        data: [
          { label: "x=1", value: 2, color: "#a78bfa" },
          { label: "x=2", value: 4, color: "#8b5cf6" },
          { label: "x=3", value: 6, color: "#7c3aed" },
          { label: "x=4", value: 8, color: "#6d28d9" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Pola yang muncul",
        html: "Pangkat lama turun ke depan menjadi pengali, lalu pangkatnya berkurang satu. Turunan x pangkat tiga: angka 3 turun ke depan, pangkat jadi 2, hasilnya 3x kuadrat. Aturan ini juga punya teman: turunan sebuah konstanta adalah 0 (garis datar tidak punya kemiringan), dan pengali tetap ikut terbawa, misalnya turunan 5x kuadrat adalah 5 dikali 2x = 10x.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa nilai turunan f(x) = x pangkat tiga di titik x = 2? (Ingat f'(x) = 3x kuadrat.)",
        answer: 12,
        solution:
          "Turunan x pangkat tiga adalah 3x kuadrat. Di x = 2: 3 dikali 2 kuadrat = 3 dikali 4 = <strong>12</strong>.",
        hint: "Hitung dulu f'(x) = 3x kuadrat, lalu masukkan x = 2.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap fungsi dengan turunannya.",
        pairs: [
          { left: "f(x) = x kuadrat", right: "2x" },
          { left: "f(x) = x pangkat tiga", right: "3x kuadrat" },
          { left: "f(x) = 5x", right: "5" },
          { left: "f(x) = 7 (konstanta)", right: "0" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan hasil turunan berikut: nol atau bukan nol.",
        buckets: ["Turunannya nol", "Turunannya bukan nol"],
        items: [
          { text: "f(x) = 9 (konstanta)", bucket: "Turunannya nol" },
          { text: "f(x) = -4 (konstanta)", bucket: "Turunannya nol" },
          { text: "f(x) = x kuadrat", bucket: "Turunannya bukan nol" },
          { text: "f(x) = 6x", bucket: "Turunannya bukan nol" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Insinyur menghitung kemiringan rel cepat",
        html: "Bentuk rel kereta cepat dimodelkan dengan fungsi pangkat agar tikungannya mulus. Untuk menjaga kenyamanan, insinyur perlu tahu kemiringan rel di tiap titik tanpa menghitung limit berulang. Dengan aturan turunan pangkat, mereka langsung memperoleh rumus kemiringan dari rumus bentuk rel, lalu mengevaluasinya di titik mana pun dalam hitungan detik. Pola yang kita temukan tadi menghemat kerja berjam-jam.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah pola terlihat jelas, baru kita ringkas menjadi aturan pangkat: <strong>jika f(x) = x pangkat n, maka f'(x) = n dikali x pangkat (n - 1)</strong>. Tambahannya: turunan konstanta adalah 0, dan pengali ikut terbawa, jadi turunan c dikali x pangkat n adalah c dikali n dikali x pangkat (n - 1). Aturan ini adalah pintasan dari definisi limit, bukan pengganti maknanya.",
      },
      {
        type: "takeaways",
        items: [
          "Aturan pangkat: turunan x pangkat n adalah n dikali x pangkat (n - 1).",
          "Pangkat turun menjadi pengali, lalu pangkatnya berkurang satu.",
          "Turunan sebuah konstanta selalu nol; pengali tetap ikut terbawa.",
          "Aturan ini hanyalah pintasan dari definisi turunan lewat limit.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Aturan pangkat menyatakan turunan x pangkat n adalah?",
            options: [
              "x pangkat (n + 1)",
              "n dikali x pangkat (n - 1)",
              "n dikali x pangkat n",
              "x pangkat n dibagi n",
            ],
            answer: 1,
            explain: "Pangkat turun ke depan menjadi pengali dan pangkat berkurang satu.",
          },
          {
            q: "Turunan f(x) = x pangkat empat adalah?",
            options: ["4x pangkat tiga", "x pangkat tiga", "4x pangkat lima", "3x pangkat empat"],
            answer: 0,
            explain: "4 turun ke depan, pangkat jadi 3: 4x pangkat tiga.",
          },
          {
            q: "Turunan sebuah konstanta, misalnya f(x) = 8, adalah?",
            options: ["8", "1", "0", "x"],
            answer: 2,
            explain: "Garis datar tidak punya kemiringan, jadi turunannya nol.",
          },
          {
            q: "Turunan f(x) = 5x kuadrat adalah?",
            options: ["5x", "10x", "2x", "25x"],
            answer: 1,
            explain: "Pengali 5 terbawa: 5 dikali 2x = 10x.",
          },
          {
            q: "Nilai turunan f(x) = x pangkat tiga di x = 2 adalah?",
            options: ["6", "8", "12", "4"],
            answer: 2,
            explain: "f'(x) = 3x kuadrat, di x = 2: 3 dikali 4 = 12.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "turunan-sebagai-laju",
    levelId: "turunan",
    order: 4,
    title: "Turunan sebagai Laju: Kecepatan Sesaat",
    summary:
      "Turunan bukan sekadar kemiringan grafik; ia adalah laju perubahan sesaat, seperti kecepatan yang terbaca di spidometer.",
    durationMin: 14,
    tags: ["kalkulus", "turunan", "laju perubahan", "kecepatan"],
    blocks: [
      {
        type: "paragraph",
        html: "Spidometer mobil menunjukkan kecepatan tepat saat ini, bukan rata-rata seluruh perjalanan. Tetapi bagaimana mungkin mengukur kecepatan dalam waktu nol detik? Di sinilah turunan menemukan makna terdalamnya: ia adalah laju perubahan sesaat. Kemiringan grafik yang kita pelajari tadi ternyata punya arti nyata yang bisa kita rasakan setiap hari. Ayo berpetualang dulu, rumus akhirnya menyusul.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Turunan sebagai Laju Perubahan",
        caption: "Dari kecepatan rata-rata pada selang pendek menuju kecepatan sesaat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sebuah benda jatuh dengan posisi s(t) = 5t kuadrat meter (t dalam detik). Kecepatan rata-rata antara t dan t + h adalah (s(t+h) - s(t)) / h, yang menyederhana menjadi 10t + 5h. Untuk t = 2: coba h = 1, lalu 0,1, lalu 0,01, sehingga hasilnya 25; 20,5; 20,05. Ke mana kecepatan rata-rata ini menuju saat selang h mengecil ke nol?",
      },
      {
        type: "widget",
        widget: "SimulatorKecepatan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kecepatan Sesaat Benda Jatuh s(t) = 5t kuadrat (v = 10t)",
        unit: "kecepatan (m/detik)",
        source: "perhitungan v(t) = 10t dari turunan s(t) = 5t kuadrat",
        note: "Kecepatan sesaat bertambah 10 m/detik setiap detik. Turunan posisi memberi kecepatan di tiap saat.",
        data: [
          { label: "t=1 dtk", value: 10, color: "#a78bfa" },
          { label: "t=2 dtk", value: 20, color: "#8b5cf6" },
          { label: "t=3 dtk", value: 30, color: "#7c3aed" },
          { label: "t=4 dtk", value: 40, color: "#6d28d9" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Kecepatan rata-rata vs kecepatan sesaat",
        html: "Kecepatan rata-rata mengukur jarak total dibagi waktu total pada sebuah selang. Kecepatan sesaat adalah nilai yang didekati kecepatan rata-rata saat selangnya diperkecil menuju nol. Itulah yang ditunjuk spidometer. Karena posisi adalah fungsi waktu, kecepatan sesaat tidak lain adalah turunan posisi terhadap waktu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Posisi benda jatuh s(t) = 5t kuadrat memberi kecepatan sesaat v(t) = 10t. Berapa kecepatan sesaat pada t = 3 detik? (dalam m/detik)",
        answer: 30,
        suffix: " m/detik",
        solution:
          "v(t) = 10t, jadi v(3) = 10 dikali 3 = <strong>30 m/detik</strong>.",
        hint: "Masukkan t = 3 ke v(t) = 10t.",
      },
      {
        type: "classifyExercise",
        prompt: "Besaran mana yang merupakan laju perubahan (turunan), dan mana yang bukan?",
        buckets: ["Laju perubahan (turunan)", "Bukan laju perubahan"],
        items: [
          { text: "Kecepatan = laju perubahan posisi", bucket: "Laju perubahan (turunan)" },
          { text: "Percepatan = laju perubahan kecepatan", bucket: "Laju perubahan (turunan)" },
          { text: "Laju pengisian air = laju perubahan volume", bucket: "Laju perubahan (turunan)" },
          { text: "Posisi mobil di suatu saat", bucket: "Bukan laju perubahan" },
          { text: "Jumlah total air dalam tangki", bucket: "Bukan laju perubahan" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Untuk v(t) = 10t (m/detik), pasangkan waktu dengan kecepatan sesaatnya.",
        pairs: [
          { left: "t = 1 detik", right: "10 m/detik" },
          { left: "t = 2 detik", right: "20 m/detik" },
          { left: "t = 3 detik", right: "30 m/detik" },
          { left: "t = 4 detik", right: "40 m/detik" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tim balap membaca telemetri",
        html: "Mobil balap mengirim data posisi ratusan kali per detik. Tim teknik tidak puas dengan kecepatan rata-rata satu putaran; mereka ingin tahu kecepatan sesaat tepat di mulut tikungan untuk menentukan titik pengereman. Dengan menurunkan data posisi terhadap waktu, komputer menghasilkan kecepatan di setiap milidetik. Turunan mengubah catatan posisi yang diam menjadi kisah laju yang hidup, dan itu memenangkan perlombaan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan kecepatan sesaat sebagai limit kecepatan rata-rata, baru kita tuliskan: <strong>laju perubahan sesaat = f'(x) = lim h→0 (f(x + h) - f(x)) / h</strong>. Bila f adalah posisi terhadap waktu, turunannya adalah kecepatan; bila f adalah kecepatan, turunannya adalah percepatan. Turunan adalah bahasa universal untuk 'seberapa cepat sesuatu berubah saat ini'.",
      },
      {
        type: "takeaways",
        items: [
          "Turunan adalah laju perubahan sesaat, bukan sekadar kemiringan abstrak.",
          "Kecepatan sesaat adalah limit kecepatan rata-rata saat selang menuju nol.",
          "Turunan posisi terhadap waktu adalah kecepatan; turunan kecepatan adalah percepatan.",
          "Untuk s(t) = 5t kuadrat, kecepatan sesaatnya v(t) = 10t.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Turunan posisi terhadap waktu memberi besaran?",
            options: ["Jarak", "Kecepatan", "Percepatan", "Waktu"],
            answer: 1,
            explain: "Turunan posisi terhadap waktu adalah kecepatan.",
          },
          {
            q: "Kecepatan sesaat adalah?",
            options: [
              "Jarak total dibagi waktu total",
              "Limit kecepatan rata-rata saat selang menuju nol",
              "Posisi pada saat tertentu",
              "Kecepatan terbesar yang pernah dicapai",
            ],
            answer: 1,
            explain: "Kecepatan sesaat adalah nilai yang didekati kecepatan rata-rata saat selang mengecil.",
          },
          {
            q: "Untuk s(t) = 5t kuadrat, kecepatan sesaatnya adalah?",
            options: ["5t", "10t", "5t kuadrat", "t"],
            answer: 1,
            explain: "Turunan 5t kuadrat adalah 5 dikali 2t = 10t.",
          },
          {
            q: "Pada v(t) = 10t, kecepatan di t = 4 detik adalah?",
            options: ["14 m/detik", "40 m/detik", "10 m/detik", "4 m/detik"],
            answer: 1,
            explain: "v(4) = 10 dikali 4 = 40 m/detik.",
          },
          {
            q: "Turunan dari kecepatan terhadap waktu disebut?",
            options: ["Posisi", "Jarak", "Percepatan", "Gradien rata-rata"],
            answer: 2,
            explain: "Laju perubahan kecepatan adalah percepatan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "persamaan-garis-singgung",
    levelId: "turunan",
    order: 5,
    title: "Persamaan Garis Singgung: Menempelkan Garis Lurus pada Kurva",
    summary:
      "Sebelum menulis rumusnya, kita pakai turunan untuk menemukan garis lurus yang menempel pada kurva di satu titik.",
    durationMin: 14,
    tags: ["kalkulus", "turunan", "garis singgung", "hampiran linear"],
    blocks: [
      {
        type: "paragraph",
        html: "Kalau kamu memperbesar peta digital di satu lokasi terus menerus, jalan yang tadinya melengkung tampak makin lurus. Begitu pula kurva: didekati cukup rapat di satu titik, bentuknya nyaris seperti garis lurus. Garis lurus itu adalah garis singgung, dan turunan memberi kita kemiringannya. Ayo selidiki dulu sebelum menulis persamaannya.",
      },
      {
        type: "video",
        comp: "TurunanVideo",
        title: "Video: Garis Lurus yang Menempel pada Kurva",
        caption: "Turunan memberi kemiringan, satu titik memberi posisi, dan garis singgung pun terbentuk.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil f(x) = x kuadrat di titik x = 2. Nilai fungsinya f(2) = 4, jadi titiknya (2, 4). Turunannya f'(x) = 2x, sehingga kemiringan di sana f'(2) = 4. Sekarang bayangkan sebuah garis berkemiringan 4 yang lewat titik (2, 4). Coba hitung tingginya di x = 2,5 dan bandingkan dengan kurva. Hampir sama, bukan?",
      },
      {
        type: "widget",
        widget: "SimulatorTurunan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Selisih Kurva x kuadrat dan Garis Singgungnya y = 4x - 4",
        unit: "selisih (kurva - garis)",
        source: "perhitungan (x kuadrat) - (4x - 4) = (x - 2) kuadrat",
        note: "Tepat di titik singgung x = 2 selisihnya nol; makin jauh, garis makin meleset mengikuti (x - 2) kuadrat.",
        data: [
          { label: "x=2", value: 0, color: "#a78bfa" },
          { label: "x=2,5", value: 0.25, color: "#8b5cf6" },
          { label: "x=3", value: 1, color: "#7c3aed" },
          { label: "x=3,5", value: 2.25, color: "#6d28d9" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua bahan: satu titik dan satu kemiringan",
        html: "Untuk menulis garis lurus kita hanya butuh dua hal: sebuah <strong>titik</strong> yang dilewati dan sebuah <strong>kemiringan</strong>. Titiknya kita ambil dari nilai fungsi, yaitu (a, f(a)). Kemiringannya kita ambil dari turunan, yaitu f'(a). Turunan inilah jembatan yang membuat garis itu menempel pas pada kurva.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk f(x) = x kuadrat, berapa kemiringan garis singgung di titik x = 3? (Ingat f'(x) = 2x.)",
        answer: 6,
        solution:
          "Kemiringan garis singgung adalah f'(3) = 2 x 3 = <strong>6</strong>. Titik singgungnya (3, 9).",
        hint: "Masukkan x = 3 ke f'(x) = 2x.",
      },
      {
        type: "calcExercise",
        prompt:
          "Garis singgung f(x) = x kuadrat di titik x = 2 adalah y = 4x - 4. Berapa nilai y garis itu saat x = 5?",
        answer: 16,
        solution:
          "Masukkan x = 5 ke y = 4x - 4, didapat 4 x 5 - 4 = 20 - 4 = <strong>16</strong>.",
        hint: "Substitusikan x = 5 ke persamaan garis y = 4x - 4.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan fungsi dan titiknya dengan kemiringan garis singgungnya.",
        pairs: [
          { left: "f(x) = x kuadrat di x = 1", right: "2" },
          { left: "f(x) = x kuadrat di x = 3", right: "6" },
          { left: "f(x) = x pangkat tiga di x = 1", right: "3" },
          { left: "f(x) = 5x di sembarang titik", right: "5" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: GPS yang melinierkan jalan melengkung",
        html: "Perangkat navigasi sering menghampiri lintasan melengkung dengan potongan garis lurus pendek untuk menghitung arah dan jarak sesaat. Di setiap titik, arah kendaraan ditentukan oleh <strong>garis singgung</strong> lintasan, yaitu kemiringan kurva di titik itu. Karena dekat titik singgung kurva nyaris lurus, hampiran garis singgung sangat akurat untuk langkah pendek. Inilah sebabnya turunan menjadi alat utama dalam menghampiri kurva dengan garis lurus.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan polanya, baru kita tuliskan: <strong>garis singgung kurva y = f(x) di titik x = a adalah y = f(a) + f'(a)(x - a)</strong>. Kemiringannya f'(a) dari turunan, dan titiknya (a, f(a)) dari nilai fungsi. Dekat titik singgung, garis ini menjadi hampiran linear terbaik untuk kurva.",
      },
      {
        type: "takeaways",
        items: [
          "Garis singgung butuh satu titik (a, f(a)) dan satu kemiringan f'(a).",
          "Kemiringan garis singgung di x = a adalah nilai turunan f'(a).",
          "Persamaannya y = f(a) + f'(a)(x - a).",
          "Dekat titik singgung, garis ini adalah hampiran linear terbaik untuk kurva.",
          "Hampiran ini dipakai luas, misalnya pada navigasi yang melinierkan lintasan melengkung.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dua bahan untuk menulis persamaan garis singgung adalah?",
            options: [
              "Dua kemiringan",
              "Satu titik dan satu kemiringan",
              "Dua titik saja",
              "Luas dan kemiringan",
            ],
            answer: 1,
            explain: "Garis lurus ditentukan oleh sebuah titik dan sebuah kemiringan.",
          },
          {
            q: "Kemiringan garis singgung kurva y = f(x) di x = a adalah?",
            options: ["f(a)", "f'(a)", "a", "f(a) dibagi a"],
            answer: 1,
            explain: "Kemiringan garis singgung adalah nilai turunan f'(a).",
          },
          {
            q: "Untuk f(x) = x kuadrat, kemiringan garis singgung di x = 3 adalah?",
            options: ["3", "6", "9", "2"],
            answer: 1,
            explain: "f'(x) = 2x sehingga f'(3) = 6.",
          },
          {
            q: "Persamaan umum garis singgung di x = a adalah?",
            options: [
              "y = f(a) + f'(a)(x - a)",
              "y = f'(a) + f(a)x",
              "y = f(a) dikali (x - a)",
              "y = f(x) - f(a)",
            ],
            answer: 0,
            explain: "Garis singgung: y = f(a) + f'(a)(x - a).",
          },
          {
            q: "Pada garis singgung y = 4x - 4, nilai y saat x = 5 adalah?",
            options: ["12", "16", "20", "24"],
            answer: 1,
            explain: "4 x 5 - 4 = 16.",
          },
        ],
      },
    ],
  },
];
