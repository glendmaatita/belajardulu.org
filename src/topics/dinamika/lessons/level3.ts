import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "menggambar-fbd",
    levelId: "diagram-benda-bebas",
    order: 1,
    title: "Menggambar Diagram Benda Bebas",
    summary:
      "Sebelum menghitung gerak apa pun, kita gambar dulu semua gaya pada satu benda. Dari sketsa panah inilah rumus keseimbangan dan gerak muncul dengan sendirinya.",
    durationMin: 16,
    tags: ["fisika", "dinamika", "diagram-benda-bebas", "gaya"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan sebuah lampu gantung di langit-langit. Ia diam, tetapi gravitasi terus menariknya ke bawah. Apa yang menahannya? Tali yang menegang, menarik lampu ke atas dengan gaya yang persis mengimbangi beratnya. Untuk memahami benda apa pun, kita perlu memisahkannya dari lingkungan dan menggambar semua gaya yang bekerja padanya. Inilah <strong>diagram benda bebas</strong>. Ayo belajar menggambarnya sebelum menulis rumus.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Menggambar Gaya pada Satu Benda",
        caption: "Diagram benda bebas memisahkan satu benda dan semua gaya yang bekerja padanya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil tas, gantungkan di jarimu dengan tali pendek. Rasakan tali menegang dan jarimu tertarik ke bawah. Sekarang bayangkan menggambar tas itu sendirian: ada panah berat ke bawah, dan panah tegangan tali ke atas. Karena tas diam, kedua panah pasti sama panjang. Latihan 'menggambar gaya' inilah inti diagram benda bebas, jauh sebelum angka muncul.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu diagram benda bebas",
        html: "<strong>Diagram benda bebas</strong> adalah sketsa satu benda yang dipisahkan dari lingkungannya, lengkap dengan semua panah gaya yang bekerja padanya: berat ke bawah, gaya normal, tegangan tali, dan gaya gesek bila ada. Tiap panah menunjukkan arah dan besar gaya. Dari diagram inilah kita menjumlahkan gaya di tiap arah untuk menerapkan Hukum Newton.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah lampu bermassa 3 kg digantung diam pada seutas tali. Dengan g = 10 m/s², berapa tegangan talinya?",
        answer: 30,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Dari diagram benda bebas: berat 30 N ke bawah, tegangan T ke atas. Karena lampu diam, ΣF = 0 sehingga T = m × g = 3 × 10 = <strong>30 N</strong>. Keseimbangan ini terbaca langsung dari panah-panahnya.",
        hint: "Pada benda diam yang tergantung, tegangan sama dengan berat (m × g).",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kotak 4 kg di lantai datar (g = 10 m/s²) didorong mendatar 30 N, dan gaya gesek 10 N melawannya. Berapa gaya total mendatar pada kotak?",
        answer: 20,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Pada diagram benda bebas arah mendatar: dorongan 30 N ke depan, gesekan 10 N ke belakang. Gaya total mendatar = 30 − 10 = <strong>20 N</strong> searah dorongan. Arah vertikal (berat dan normal) saling mengimbangi.",
        hint: "Kurangkan gaya gesek dari gaya dorong pada arah mendatar.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk sebuah kotak yang ditarik tali ke kanan di atas lantai kasar, kelompokkan arah tiap gaya pada diagram benda bebasnya.",
        buckets: ["Ke atas", "Ke bawah", "Mendatar"],
        items: [
          { text: "Gaya normal dari lantai", bucket: "Ke atas" },
          { text: "Berat kotak", bucket: "Ke bawah" },
          { text: "Tegangan tali", bucket: "Mendatar" },
          { text: "Gaya gesek lantai", bucket: "Mendatar" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap gaya pada diagram benda bebas dengan deskripsinya.",
        pairs: [
          { left: "Berat", right: "Tarikan gravitasi ke bawah, sebesar m · g" },
          { left: "Gaya normal", right: "Dorongan permukaan tegak lurus, ke atas pada lantai datar" },
          { left: "Tegangan", right: "Tarikan sepanjang tali, menjauhi benda" },
          { left: "Gaya gesek", right: "Perlawanan sejajar permukaan terhadap gerak" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Insinyur Menggambar Sebelum Membangun",
        html: "Sebelum membangun jembatan atau derek, insinyur selalu menggambar <strong>diagram benda bebas</strong> tiap sambungan: panah berat beban, panah tegangan kabel, panah gaya tekan batang. Dengan memastikan semua panah seimbang (ΣF = 0), mereka tahu kabel mana yang harus paling kuat dan sudut mana yang paling rawan. Satu kesalahan dalam menggambar gaya bisa berarti struktur runtuh. Diagram sederhana berisi panah-panah inilah fondasi keselamatan bangunan, jauh sebelum rumus rumit dipakai.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah terbiasa menggambar gaya, barulah rumus muncul sebagai penerapan Hukum Newton di tiap arah. Bila benda <strong>diam atau bergerak lurus beraturan</strong>, di setiap arah ΣF = 0 (gaya-gaya saling mengimbangi). Bila benda <strong>dipercepat</strong>, di arah gerak berlaku ΣF = m · a. Langkahnya selalu: gambar benda, tarik semua panah gaya, lalu jumlahkan per arah. Rumus hanyalah pembacaan dari diagram benda bebas.",
      },
      {
        type: "takeaways",
        items: [
          "Diagram benda bebas memisahkan satu benda dengan semua gaya yang bekerja padanya.",
          "Gaya yang lazim digambar: berat, gaya normal, tegangan, dan gaya gesek.",
          "Benda diam berarti ΣF = 0 di setiap arah; benda dipercepat memenuhi ΣF = m · a.",
          "Langkahnya: gambar benda, tarik panah gaya, lalu jumlahkan per arah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fungsi utama diagram benda bebas?",
            options: [
              "Menghitung suhu benda",
              "Menampilkan semua gaya pada satu benda agar mudah dianalisis",
              "Menggambar lintasan benda",
              "Mengukur massa benda",
            ],
            answer: 1,
            explain: "Diagram benda bebas memetakan semua gaya pada satu benda untuk diterapkan ke Hukum Newton.",
          },
          {
            q: "Pada diagram benda bebas kotak di lantai datar, berat digambar ke arah?",
            options: ["Atas", "Bawah", "Kiri", "Kanan"],
            answer: 1,
            explain: "Berat adalah tarikan gravitasi yang selalu ke bawah.",
          },
          {
            q: "Sebuah beban 5 kg tergantung diam. Dengan g = 10 m/s², tegangan talinya?",
            options: ["5 N", "50 N", "0,5 N", "15 N"],
            answer: 1,
            explain: "ΣF = 0, jadi T = m · g = 5 × 10 = 50 N.",
          },
          {
            q: "Untuk benda yang diam, jumlah gaya di setiap arah harus?",
            options: ["Lebih besar dari nol", "Nol", "Negatif", "Sama dengan beratnya"],
            answer: 1,
            explain: "Benda diam berarti ΣF = 0 di setiap arah.",
          },
          {
            q: "Langkah pertama menganalisis gaya pada benda adalah?",
            options: [
              "Langsung menulis rumus",
              "Menggambar diagram benda bebas dengan semua panah gaya",
              "Menghitung kecepatan",
              "Mengukur suhu",
            ],
            answer: 1,
            explain: "Mulailah dengan menggambar semua gaya pada benda, baru terapkan Hukum Newton.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gaya-pada-lift",
    levelId: "diagram-benda-bebas",
    order: 2,
    title: "Gaya pada Lift",
    summary:
      "Mengapa perutmu terasa ringan saat lift mulai turun dan berat saat mulai naik? Kita rasakan dulu perubahan gaya normal sebelum menghitungnya.",
    durationMin: 16,
    tags: ["fisika", "dinamika", "lift", "gaya-normal", "berat-semu"],
    blocks: [
      {
        type: "paragraph",
        html: "Berdiri di dalam lift saat ia mulai bergerak. Ketika lift mulai naik, tubuhmu terasa lebih berat, kakimu menekan lantai lebih kuat. Saat lift mulai turun, sejenak kamu merasa ringan, seolah melayang. Padahal massamu tidak berubah sedikit pun. Yang berubah adalah <strong>gaya normal</strong> dari lantai lift pada kakimu. Ayo rasakan dulu sensasi ini sebelum menuliskan rumusnya.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Berat yang Terasa Berubah di Lift",
        caption: "Saat lift dipercepat, gaya normal pada kaki berubah, dan kita merasakannya sebagai berat semu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bawa timbangan kamar mandi ke dalam lift dan berdirilah di atasnya. Saat lift diam, jarum menunjuk beratmu yang biasa. Saat lift mulai naik, jarum melonjak naik sejenak; saat lift mulai turun, jarum turun sejenak. Timbangan membaca <strong>gaya normal</strong>, dan itulah yang tubuhmu tafsirkan sebagai 'berat'. Massamu tetap, tetapi 'berat semu' yang kamu rasakan berubah. Rasakan dulu polanya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Berat semu",
        html: "Apa yang kita rasakan sebagai 'berat' sebenarnya adalah <strong>gaya normal</strong> yang menahan kita. Saat lift dipercepat <strong>ke atas</strong>, lantai harus mendorong lebih kuat dari sekadar menahan berat, sehingga gaya normal membesar (terasa berat). Saat dipercepat <strong>ke bawah</strong>, dorongan lantai berkurang (terasa ringan). Saat lift diam atau bergerak dengan kecepatan tetap, gaya normal sama dengan berat biasa.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya Normal pada Orang 60 kg di Lift (g = 10 m/s²)",
        unit: "gaya normal (N)",
        source: "perhitungan N = m(g + a) untuk berbagai percepatan lift",
        note: "Massa tetap 60 kg, berat biasa 600 N. Saat lift dipercepat ke atas, N naik; saat ke bawah, N turun. Pola ini muncul sebelum rumus diberikan.",
        data: [
          { label: "turun 2 m/s²", value: 480, color: "#818cf8" },
          { label: "diam / tetap", value: 600, color: "#818cf8" },
          { label: "naik 2 m/s²", value: 720, color: "#818cf8" },
          { label: "naik 4 m/s²", value: 840, color: "#818cf8" },
        ],
      },
      {
        type: "paragraph",
        html: "Amati grafik. Berat biasa orang itu 600 N, tetapi gaya normal yang ia rasakan bergeser mengikuti percepatan lift: hanya 480 N saat dipercepat turun, melonjak 840 N saat dipercepat naik kencang. Selisihnya selalu sebesar massa dikali percepatan lift. Pola rapi inilah yang akan dirumuskan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang anak bermassa 40 kg berdiri di lift yang dipercepat ke atas 2 m/s². Dengan g = 10 m/s², berapa gaya normal dari lantai lift?",
        answer: 480,
        tolerance: 1,
        suffix: " N",
        solution:
          "Lift naik dipercepat, jadi N − m·g = m·a, sehingga N = m(g + a) = 40 × (10 + 2) = <strong>480 N</strong>. Lebih besar dari berat biasanya 400 N, itulah rasa berat.",
        hint: "Untuk percepatan ke atas, N = m(g + a).",
      },
      {
        type: "calcExercise",
        prompt:
          "Anak 40 kg yang sama kini di lift yang dipercepat ke bawah 3 m/s². Dengan g = 10 m/s², berapa gaya normalnya?",
        answer: 280,
        tolerance: 1,
        suffix: " N",
        solution:
          "Lift turun dipercepat, jadi m·g − N = m·a, sehingga N = m(g − a) = 40 × (10 − 3) = <strong>280 N</strong>. Lebih kecil dari 400 N, itulah rasa ringan.",
        hint: "Untuk percepatan ke bawah, N = m(g − a).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap keadaan lift berdasarkan rasa berat yang dialami penumpang.",
        buckets: ["Terasa lebih berat (N > m·g)", "Terasa lebih ringan (N < m·g)", "Terasa biasa (N = m·g)"],
        items: [
          { text: "Lift mulai bergerak naik (dipercepat ke atas)", bucket: "Terasa lebih berat (N > m·g)" },
          { text: "Lift mulai bergerak turun (dipercepat ke bawah)", bucket: "Terasa lebih ringan (N < m·g)" },
          { text: "Lift bergerak naik dengan kecepatan tetap", bucket: "Terasa biasa (N = m·g)" },
          { text: "Lift melambat saat hendak berhenti di lantai atas", bucket: "Terasa lebih ringan (N < m·g)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Rasa Melayang di Lift Cepat Gedung Pencakar Langit",
        html: "Di gedung pencakar langit, lift ekspres bisa melaju sangat cepat. Saat lift mulai turun dari lantai atas, ia dipercepat ke bawah, dan <strong>gaya normal</strong> pada kakimu berkurang drastis sehingga perutmu terasa melayang sesaat. Bila percepatan lift ke bawah mendekati g, gaya normal bisa mendekati nol dan kamu nyaris merasa tanpa bobot, persis seperti astronaut. Sensasi yang sama inilah yang dirancang ekstrem di wahana jatuh bebas taman hiburan, sepenuhnya dijelaskan oleh perubahan gaya normal.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan polanya, barulah rumus muncul dari diagram benda bebas dan Hukum II. Gaya pada orang: berat m·g ke bawah dan gaya normal N ke atas. Searah gerak vertikal, ΣF = m · a. Saat dipercepat ke atas, <strong>N = m(g + a)</strong>; saat dipercepat ke bawah, <strong>N = m(g − a)</strong>; saat diam atau kecepatan tetap, N = m · g. Berat semu adalah nilai N, bukan massa yang berubah.",
      },
      {
        type: "takeaways",
        items: [
          "Yang kita rasakan sebagai berat adalah gaya normal yang menahan kita.",
          "Lift dipercepat ke atas: N = m(g + a), terasa lebih berat.",
          "Lift dipercepat ke bawah: N = m(g − a), terasa lebih ringan.",
          "Saat kecepatan tetap atau diam, N = m · g dan terasa biasa.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Saat lift dipercepat ke atas, gaya normal pada penumpang?",
            options: ["Lebih kecil dari m·g", "Sama dengan m·g", "Lebih besar dari m·g", "Nol"],
            answer: 2,
            explain: "N = m(g + a), jadi lebih besar dari berat biasa m·g.",
          },
          {
            q: "Orang 50 kg di lift dipercepat ke atas 2 m/s², g = 10 m/s². Gaya normalnya?",
            options: ["400 N", "500 N", "600 N", "100 N"],
            answer: 2,
            explain: "N = m(g + a) = 50 × 12 = 600 N.",
          },
          {
            q: "Mengapa kita merasa ringan saat lift mulai turun?",
            options: [
              "Massa kita berkurang",
              "Gaya normal mengecil karena lift dipercepat ke bawah",
              "Gravitasi hilang",
              "Berat kita menjadi nol selamanya",
            ],
            answer: 1,
            explain: "N = m(g − a) saat dipercepat ke bawah, jadi gaya normal mengecil.",
          },
          {
            q: "Saat lift bergerak naik dengan kecepatan tetap, gaya normal penumpang?",
            options: ["Lebih besar dari m·g", "Sama dengan m·g", "Lebih kecil dari m·g", "Nol"],
            answer: 1,
            explain: "Kecepatan tetap berarti a = 0, jadi N = m·g (terasa biasa).",
          },
          {
            q: "Berat semu seorang penumpang lift adalah?",
            options: [
              "Massanya yang berubah",
              "Gaya normal yang ia rasakan dari lantai",
              "Gravitasi yang berubah",
              "Selalu sama dengan m·g",
            ],
            answer: 1,
            explain: "Berat semu adalah besar gaya normal, bukan perubahan massa atau gravitasi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sistem-katrol",
    levelId: "diagram-benda-bebas",
    order: 3,
    title: "Sistem Katrol",
    summary:
      "Dua beban tergantung pada satu tali lewat katrol. Yang lebih berat turun, yang ringan naik. Kita amati dulu polanya sebelum merumuskan percepatan dan tegangannya.",
    durationMin: 17,
    tags: ["fisika", "dinamika", "katrol", "tegangan", "sistem"],
    blocks: [
      {
        type: "paragraph",
        html: "Gantungkan dua ember berbeda berat pada ujung-ujung satu tali yang dilewatkan di atas katrol. Lepaskan: ember yang lebih berat turun, menarik ember yang lebih ringan naik. Mereka bergerak bersama dengan percepatan yang sama, dihubungkan satu tali. Mengapa percepatannya tidak sebesar jatuh bebas? Karena beban di sisi lain ikut 'menahan'. Ayo amati polanya sebelum menuliskan rumus.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Dua Beban, Satu Tali, Satu Katrol",
        caption: "Beban yang lebih berat menarik beban ringan; keduanya berbagi tegangan dan percepatan yang sama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan tarik tambang versi vertikal lewat katrol. Bila kedua beban sama berat, sistem diam, seimbang sempurna. Bila satu sisi sedikit lebih berat, sistem mulai bergerak pelan ke arahnya. Makin besar <strong>selisih berat</strong>, makin cepat sistem bergerak; tetapi makin besar <strong>total massa</strong> yang harus digerakkan, makin lamban. Rasakan dulu dua kecenderungan ini sebelum melihat angkanya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pola pada katrol ideal",
        html: "Pada katrol licin dengan tali ringan, kedua beban dihubungkan satu tali sehingga <strong>percepatannya sama besar</strong> dan <strong>tegangan talinya sama</strong> di kedua sisi. Beban yang lebih berat turun, yang lebih ringan naik. Penggeraknya adalah selisih berat kedua beban, sedangkan yang harus digerakkan adalah jumlah massa keduanya.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua beban tergantung pada katrol licin: 5 kg di satu sisi, 3 kg di sisi lain (g = 10 m/s²). Berapa percepatan sistem?",
        answer: 2.5,
        tolerance: 0.1,
        suffix: " m/s²",
        solution:
          "Penggerak = selisih berat = (5 − 3) × 10 = 20 N. Total massa yang digerakkan = 5 + 3 = 8 kg. a = penggerak ÷ total massa = (m₁ − m₂)g ÷ (m₁ + m₂) = 20 ÷ 8 = <strong>2,5 m/s²</strong>.",
        hint: "a = (m₁ − m₂) · g ÷ (m₁ + m₂).",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada sistem katrol yang sama (5 kg dan 3 kg, g = 10 m/s², a = 2,5 m/s²), berapa tegangan talinya? Tinjau beban 3 kg yang naik: T − m·g = m·a.",
        answer: 37.5,
        tolerance: 0.5,
        suffix: " N",
        solution:
          "Tinjau beban 3 kg yang dipercepat ke atas: T − m·g = m·a, sehingga T = m(g + a) = 3 × (10 + 2,5) = <strong>37,5 N</strong>. Tegangan ini sama di kedua sisi tali katrol ideal.",
        hint: "Untuk beban yang naik, T = m(g + a).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan tentang sistem katrol ideal: benar atau salah.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "Kedua beban memiliki percepatan yang sama besar", bucket: "Benar" },
          { text: "Tegangan tali sama di kedua sisi katrol licin", bucket: "Benar" },
          { text: "Beban yang lebih berat akan turun", bucket: "Benar" },
          { text: "Percepatan sistem selalu sama dengan g", bucket: "Salah" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap pasangan beban dengan percepatan sistemnya (katrol licin, g = 10 m/s²).",
        pairs: [
          { left: "6 kg dan 4 kg", right: "2 m/s²" },
          { left: "5 kg dan 5 kg", right: "0 m/s² (seimbang)" },
          { left: "7 kg dan 3 kg", right: "4 m/s²" },
          { left: "9 kg dan 1 kg", right: "8 m/s²" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lift dan Beban Pengimbang",
        html: "Lift gedung tidak ditarik motor melawan seluruh berat kabinnya. Di sisi lain kabel, melalui katrol besar di puncak, tergantung <strong>beban pengimbang</strong> (counterweight) yang massanya hampir sama dengan kabin berisi penumpang biasa. Karena kedua sisi nyaris seimbang, motor hanya perlu mengatasi selisih kecil, persis seperti sistem katrol dua beban. Inilah sebabnya lift hemat energi dan motornya tidak perlu raksasa. Fisika katrol sederhana ini menggerakkan jutaan lift setiap hari.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati polanya, kita terapkan Hukum II pada tiap beban lalu gabungkan. Untuk katrol licin dengan tali ringan dan dua beban m₁ (turun) dan m₂ (naik): percepatan <strong>a = (m₁ − m₂) · g ÷ (m₁ + m₂)</strong>, dan tegangan tali <strong>T = m₂(g + a)</strong> (atau setara T = 2·m₁·m₂·g ÷ (m₁ + m₂)). Penggeraknya selisih berat, penghambatnya total massa. Rumus ini merangkum dua kecenderungan yang sudah kita rasakan.",
      },
      {
        type: "takeaways",
        items: [
          "Pada katrol ideal, kedua beban berbagi percepatan dan tegangan yang sama.",
          "Penggerak sistem adalah selisih berat; penghambatnya jumlah massa.",
          "a = (m₁ − m₂) · g ÷ (m₁ + m₂); bila massa sama, sistem seimbang (a = 0).",
          "Tegangan tali dihitung dengan meninjau satu beban: T = m(g + a) untuk beban yang naik.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada katrol licin, percepatan kedua beban yang terhubung satu tali?",
            options: ["Berbeda", "Sama besar", "Selalu nol", "Sama dengan g"],
            answer: 1,
            explain: "Satu tali menghubungkan keduanya, jadi percepatannya sama besar.",
          },
          {
            q: "Dua beban 6 kg dan 2 kg pada katrol licin, g = 10 m/s². Percepatannya?",
            options: ["10 m/s²", "5 m/s²", "8 m/s²", "2 m/s²"],
            answer: 1,
            explain: "a = (6 − 2)·10 ÷ (6 + 2) = 40 ÷ 8 = 5 m/s².",
          },
          {
            q: "Bila kedua beban katrol bermassa sama, sistemnya?",
            options: ["Bergerak cepat", "Seimbang, percepatan nol", "Jatuh bebas", "Tegangan nol"],
            answer: 1,
            explain: "Selisih berat nol, jadi a = 0; sistem diam atau bergerak dengan kecepatan tetap.",
          },
          {
            q: "Pada katrol licin dengan tali ringan, tegangan di kedua sisi tali?",
            options: ["Berbeda jauh", "Sama besar", "Nol di satu sisi", "Sama dengan berat terbesar"],
            answer: 1,
            explain: "Tali ringan dan katrol licin membuat tegangan sama di kedua sisi.",
          },
          {
            q: "Apa yang menjadi penggerak sistem dua beban pada katrol?",
            options: ["Jumlah berat keduanya", "Selisih berat kedua beban", "Tegangan tali", "Gaya gesek katrol"],
            answer: 1,
            explain: "Selisih berat kedua beban yang menggerakkan sistem.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gaya-pada-tali",
    levelId: "diagram-benda-bebas",
    order: 4,
    title: "Gaya pada Tali Penghubung Benda",
    summary:
      "Saat satu tarikan menggerakkan dua kotak yang dihubungkan tali, berapa tegangan tali di tengahnya? Kita amati dulu bagaimana gaya terbagi sebelum merumuskannya.",
    durationMin: 16,
    tags: ["fisika", "dinamika", "tegangan", "sistem-dua-benda", "tali"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan dua kotak di atas lantai licin, dihubungkan seutas tali, lalu kotak depan ditarik mendatar. Kedua kotak bergerak maju bersama dengan percepatan yang sama. Tetapi tali di antara mereka hanya perlu menarik kotak belakang saja. Berapa besar tegangan tali penghubung itu? Ia tidak selalu sama dengan gaya tarikmu. Ayo amati dulu bagaimana gaya terbagi sebelum menuliskan rumusnya.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Satu Tarikan, Dua Benda Bergerak",
        caption: "Tali penghubung hanya menarik benda di belakangnya, sehingga tegangannya lebih kecil dari gaya tarik total.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ikat dua tas dengan tali pendek, lalu seret tas depan di lantai. Kedua tas maju bersama. Sekarang rasakan: gaya tarikmu harus menggerakkan <strong>kedua tas</strong>, tetapi tali di tengah hanya menggerakkan <strong>tas belakang</strong>. Karena itu tegangan tali tengah lebih kecil dari gaya tarikmu. Makin berat tas belakang dibanding total, makin besar bagian tegangan yang ia butuhkan. Rasakan dulu pembagian ini.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pola pembagian gaya",
        html: "Saat beberapa benda terhubung tali dan ditarik bersama, semuanya bergerak dengan <strong>percepatan yang sama</strong>. Gaya tarik luar harus mempercepat <strong>seluruh massa</strong>, sedangkan tali penghubung hanya mempercepat benda yang ada di belakangnya. Karena itu tegangan tali penghubung selalu lebih kecil daripada gaya tarik total (selama lantai licin).",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua kotak di lantai licin dihubungkan tali: depan 2 kg, belakang 3 kg. Kotak depan ditarik mendatar 10 N. Berapa percepatan sistem?",
        answer: 2,
        tolerance: 0.1,
        suffix: " m/s²",
        solution:
          "Gaya tarik mempercepat seluruh massa: a = F ÷ (m₁ + m₂) = 10 ÷ (2 + 3) = 10 ÷ 5 = <strong>2 m/s²</strong>. Kedua kotak bergerak dengan percepatan sama.",
        hint: "Bagi gaya tarik dengan massa total kedua kotak.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada sistem yang sama (a = 2 m/s²), berapa tegangan tali penghubung yang menarik kotak belakang 3 kg?",
        answer: 6,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Tali penghubung hanya mempercepat kotak belakang: T = m_belakang × a = 3 × 2 = <strong>6 N</strong>. Lebih kecil dari gaya tarik 10 N, karena tali hanya menggerakkan satu kotak.",
        hint: "Tegangan = massa kotak belakang × percepatan.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan tentang dua benda terhubung tali (lantai licin): benar atau salah.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "Kedua benda bergerak dengan percepatan yang sama", bucket: "Benar" },
          { text: "Tegangan tali penghubung lebih kecil dari gaya tarik total", bucket: "Benar" },
          { text: "Gaya tarik luar mempercepat seluruh massa", bucket: "Benar" },
          { text: "Tegangan tali selalu sama dengan gaya tarik luar", bucket: "Salah" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap besaran dengan cara menghitungnya pada sistem dua benda terhubung tali.",
        pairs: [
          { left: "Percepatan sistem", right: "Gaya tarik ÷ massa total" },
          { left: "Tegangan tali penghubung", right: "Massa benda belakang × percepatan" },
          { left: "Gaya total pada benda depan", right: "Gaya tarik − tegangan tali" },
          { left: "Massa yang digerakkan gaya tarik", right: "Jumlah massa semua benda" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lokomotif Menarik Rangkaian Gerbong",
        html: "Sebuah lokomotif menarik puluhan gerbong barang yang saling terhubung dengan sambungan baja, mirip tali. Sambungan paling depan (dekat lokomotif) menahan <strong>tegangan terbesar</strong> karena harus mempercepat hampir seluruh rangkaian gerbong di belakangnya. Sambungan paling belakang hanya menarik satu gerbong terakhir, sehingga tegangannya kecil. Itulah sebabnya sambungan depan dirancang paling kuat dan paling sering diperiksa. Pembagian tegangan sepanjang rangkaian ini persis seperti tali penghubung dua kotak yang kita pelajari.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati pembagian gaya, kita terapkan Hukum II dua kali. Pertama untuk seluruh sistem: percepatan <strong>a = F ÷ (m₁ + m₂)</strong>. Kedua, tinjau benda belakang saja yang hanya ditarik tali: <strong>T = m_belakang · a</strong>. Karena m_belakang lebih kecil dari massa total, tegangan T selalu lebih kecil dari gaya tarik F. Kuncinya: gaya luar menggerakkan semua massa, tali penghubung hanya menggerakkan benda di belakangnya.",
      },
      {
        type: "takeaways",
        items: [
          "Benda-benda yang terhubung tali bergerak dengan percepatan yang sama.",
          "Percepatan sistem: a = gaya tarik ÷ massa total.",
          "Tegangan tali penghubung = massa benda di belakang × percepatan.",
          "Tegangan tali penghubung selalu lebih kecil dari gaya tarik luar (lantai licin).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dua benda terhubung tali ditarik bersama. Percepatan keduanya?",
            options: ["Berbeda", "Sama besar", "Nol", "Bergantung warnanya"],
            answer: 1,
            explain: "Terhubung satu tali, jadi keduanya bergerak dengan percepatan sama.",
          },
          {
            q: "Kotak 2 kg dan 3 kg terhubung, ditarik 15 N di lantai licin. Percepatannya?",
            options: ["3 m/s²", "5 m/s²", "7,5 m/s²", "15 m/s²"],
            answer: 0,
            explain: "a = F ÷ (m₁ + m₂) = 15 ÷ 5 = 3 m/s².",
          },
          {
            q: "Pada soal sebelumnya, tegangan tali yang menarik kotak belakang 3 kg?",
            options: ["15 N", "9 N", "6 N", "3 N"],
            answer: 1,
            explain: "T = m_belakang × a = 3 × 3 = 9 N.",
          },
          {
            q: "Mengapa tegangan tali penghubung lebih kecil dari gaya tarik total?",
            options: [
              "Karena tali menyerap gaya",
              "Karena tali hanya mempercepat benda di belakangnya, bukan seluruh massa",
              "Karena tali memantulkan gaya",
              "Karena gaya tarik hilang",
            ],
            answer: 1,
            explain: "Tali penghubung hanya menggerakkan benda belakang, sedangkan gaya luar menggerakkan semua massa.",
          },
          {
            q: "Pada rangkaian gerbong, sambungan mana yang menahan tegangan terbesar?",
            options: ["Paling belakang", "Paling depan dekat lokomotif", "Di tengah", "Semua sama"],
            answer: 1,
            explain: "Sambungan depan mempercepat hampir seluruh gerbong, jadi tegangannya terbesar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kesetimbangan-benda",
    levelId: "diagram-benda-bebas",
    order: 5,
    title: "Kesetimbangan Benda (Resultan Gaya Nol)",
    summary:
      "Benda yang diam pun penuh gaya, hanya saja semuanya saling meniadakan. Kita pakai diagram benda bebas untuk membuktikan resultannya nol.",
    durationMin: 14,
    tags: ["fisika", "dinamika", "kesetimbangan", "diagram-benda-bebas", "resultan-gaya"],
    blocks: [
      {
        type: "paragraph",
        html: "Lampu gantung yang diam, buku di atas meja, jembatan yang menahan kendaraan, semuanya tampak tenang. Namun di dalamnya bekerja banyak gaya sekaligus. Karena benda tetap diam, gaya-gaya itu pasti <strong>saling meniadakan</strong> sehingga resultannya nol. Inilah keadaan setimbang, dan diagram benda bebas adalah alat untuk membuktikannya.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Diam Bukan Berarti Tanpa Gaya",
        caption: "Pada benda setimbang, jumlah seluruh gaya sama dengan nol meski tiap gayanya tidak nol.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Syarat kesetimbangan",
        html: "Sebuah benda berada dalam kesetimbangan (diam atau bergerak lurus beraturan) bila <strong>resultan gayanya nol</strong>. Artinya jumlah gaya ke kiri sama dengan jumlah gaya ke kanan, dan jumlah gaya ke atas sama dengan jumlah gaya ke bawah. Ini langsung mengikuti Hukum I Newton.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Diam tidak sama dengan tanpa gaya",
        html: "Jangan tertukar: benda diam bukan berarti tidak ada gaya yang bekerja. Yang benar adalah gaya-gayanya berimbang. Pada buku di meja, berat menarik ke bawah dan gaya normal mendorong ke atas dengan besar sama, sehingga keduanya saling menghapus.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Gunakan simulator gaya untuk menambah atau mengurangi gaya pada benda, lalu cari kombinasi yang membuat resultannya nol dan benda tetap diam.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tegangan Tiap Tali saat Sudut terhadap Horizontal Mengecil (beban 100 N, dua tali simetris)",
        unit: "tegangan (N)",
        source: "perhitungan kesetimbangan: 2 · T · sin(sudut) = berat",
        note: "Makin mendatar tali, makin besar tegangannya. Pada 30° tegangan tiap tali sudah sebesar seluruh beban; mendekati horizontal, tegangan melonjak tajam.",
        data: [
          { label: "90°", value: 50, color: "#d946ef" },
          { label: "60°", value: 58, color: "#d946ef" },
          { label: "45°", value: 71, color: "#d946ef" },
          { label: "30°", value: 100, color: "#d946ef" },
          { label: "15°", value: 193, color: "#d946ef" },
        ],
      },
      {
        type: "paragraph",
        html: "Amati grafik. Dua tali simetris menahan beban 100 N. Saat tali nyaris tegak (90°), tiap tali cukup menanggung setengah beban, yaitu 50 N. Namun saat tali makin mendatar, tegangan melonjak: pada 30° tiap tali menanggung 100 N, dan pada 15° hampir 193 N. Itulah sebabnya tali yang ditarik nyaris lurus mendatar mudah putus.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah lampu seberat 25 N digantung diam pada satu tali vertikal. Berapa tegangan tali itu?",
        answer: 25,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Karena lampu diam, resultan gaya nol: tegangan ke atas = berat ke bawah. Maka tegangan = <strong>25 N</strong>.",
        hint: "Pada benda setimbang, gaya ke atas sama dengan gaya ke bawah.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua tali simetris masing-masing membentuk sudut 30° terhadap horizontal menahan beban 80 N. Berapa tegangan tiap tali?",
        answer: 80,
        tolerance: 1,
        suffix: " N",
        solution:
          "Komponen vertikal kedua tali menahan beban: 2 · T · sin 30° = 80. Karena sin 30° = 0,5, maka 2 · T · 0,5 = T = <strong>80 N</strong> tiap tali.",
        hint: "Jumlahkan komponen vertikal kedua tali dan setarakan dengan berat. sin 30° = 0,5.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap keadaan: benda setimbang (resultan nol) atau tidak setimbang?",
        buckets: ["Setimbang (resultan nol)", "Tidak setimbang"],
        items: [
          { text: "Buku diam di atas meja", bucket: "Setimbang (resultan nol)" },
          { text: "Lampu tergantung diam pada tali", bucket: "Setimbang (resultan nol)" },
          { text: "Mobil dipercepat dari lampu merah", bucket: "Tidak setimbang" },
          { text: "Bola jatuh bebas makin cepat", bucket: "Tidak setimbang" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Tali Jemuran Dibiarkan Sedikit Kendur",
        html: "Jika tali jemuran ditarik nyaris lurus mendatar lalu kita gantungkan pakaian basah di tengahnya, tali akan menanggung tegangan yang sangat besar, seperti terlihat pada grafik saat sudut mendekati 0°. Tegangan yang melonjak ini bisa menarik lepas paku penyangga atau memutus tali. Karena itu tali jemuran sengaja dibiarkan agak kendur sehingga melengkung; sudut tali terhadap horizontal menjadi lebih besar dan tegangannya turun ke tingkat yang aman.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Inti yang lahir di akhir",
        html: "Kunci kesetimbangan: <strong>resultan gaya sama dengan nol</strong>. Pisahkan gaya menjadi arah mendatar dan tegak, lalu setarakan yang berlawanan: total kiri = total kanan, total atas = total bawah. Dari syarat sederhana inilah seluruh tegangan tali, gaya normal, dan gaya penyangga pada benda diam dapat dihitung lewat diagram benda bebas.",
      },
      {
        type: "takeaways",
        items: [
          "Benda setimbang bila resultan gayanya nol (Hukum I Newton).",
          "Diam tidak berarti tanpa gaya, melainkan gaya-gayanya berimbang.",
          "Pecah gaya ke arah mendatar dan tegak, lalu setarakan yang berlawanan.",
          "Tali yang makin mendatar menanggung tegangan yang makin besar.",
          "Diagram benda bebas membuat semua gaya tampak sehingga mudah disetarakan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Syarat sebuah benda berada dalam kesetimbangan adalah?",
            options: [
              "Tidak ada gaya yang bekerja",
              "Resultan gayanya nol",
              "Hanya ada satu gaya",
              "Beratnya nol",
            ],
            answer: 1,
            explain: "Benda setimbang bila jumlah seluruh gaya (resultan) sama dengan nol.",
          },
          {
            q: "Sebuah lampu 40 N digantung diam pada satu tali vertikal. Tegangan tali?",
            options: ["0 N", "20 N", "40 N", "80 N"],
            answer: 2,
            explain: "Tegangan ke atas sama dengan berat ke bawah, yaitu 40 N.",
          },
          {
            q: "Pada buku diam di atas meja, gaya normal seimbang dengan?",
            options: ["Gaya gesek", "Gaya berat", "Tegangan tali", "Gaya pegas"],
            answer: 1,
            explain: "Gaya normal ke atas menyeimbangkan gaya berat ke bawah.",
          },
          {
            q: "Saat sudut tali penahan beban terhadap horizontal mengecil, tegangan tali?",
            options: ["Mengecil", "Tetap", "Membesar", "Menjadi nol"],
            answer: 2,
            explain: "Komponen vertikal tiap tali mengecil, sehingga tegangan harus membesar untuk menahan beban.",
          },
          {
            q: "Manakah benda yang TIDAK setimbang?",
            options: [
              "Buku diam di meja",
              "Lampu tergantung diam",
              "Mobil dipercepat dari diam",
              "Lemari diam di lantai",
            ],
            answer: 2,
            explain: "Mobil yang dipercepat mengalami resultan gaya tidak nol, jadi tidak setimbang.",
          },
        ],
      },
    ],
  },
];
