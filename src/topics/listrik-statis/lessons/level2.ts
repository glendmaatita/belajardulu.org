import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "medan-listrik",
    levelId: "medan-listrik",
    order: 1,
    title: "Medan Listrik",
    summary:
      "Bagaimana sebuah muatan bisa 'merasakan' muatan lain tanpa bersentuhan? Kita ikuti kisah rambut yang berdiri di generator Van de Graaff, lalu rumus medan listrik muncul di akhir.",
    durationMin: 14,
    tags: ["listrik statis", "medan listrik", "muatan", "gaya"],
    blocks: [
      {
        type: "paragraph",
        html: "Pernah melihat orang menyentuh bola logam besar di museum sains, lalu rambutnya berdiri semua? Tangannya tidak ditarik benang. Yang menarik tiap helai rambut adalah sesuatu yang tak terlihat di sekeliling bola bermuatan itu: sebuah <strong>medan listrik</strong>. Sebelum menuliskannya sebagai rumus, ayo rasakan dulu apa itu 'daerah pengaruh' sebuah muatan.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Gaya yang Bekerja dari Jauh",
        caption:
          "Sama seperti gravitasi bekerja tanpa sentuhan, muatan menciptakan daerah pengaruh di sekelilingnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan kamu menaruh sebuah muatan kecil di dekat bola bermuatan, lalu memindahkannya. Di tiap titik, muatan kecilmu merasakan dorongan dengan arah dan kekuatan tertentu. Jika kamu petakan semua arah dorongan itu, terbentuklah pola panah yang memancar keluar. Pola itulah <strong>medan listrik</strong>: peta gaya per satuan muatan di tiap titik ruang.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Arah medan",
        html: "Garis medan listrik selalu <strong>keluar</strong> dari muatan positif dan <strong>masuk</strong> ke muatan negatif. Semakin rapat garisnya, semakin kuat medannya. Satuan medan listrik adalah newton per coulomb (N/C).",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kuat Medan Listrik di Sekitar Muatan 1 µC terhadap Jarak",
        unit: "N/C",
        source: "perhitungan E = k·q/r² dengan k = 9×10⁹",
        note: "Sama seperti gaya Coulomb, medan listrik mengikuti hukum kuadrat terbalik. Menjauh dua kali lipat melemahkan medan menjadi seperempatnya.",
        data: [
          { label: "r = 1 m", value: 9000, color: "#facc15" },
          { label: "r = 2 m", value: 2250, color: "#a3e635" },
          { label: "r = 3 m", value: 1000, color: "#4ade80" },
          { label: "r = 4 m", value: 562, color: "#2dd4bf" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa kuat medan listrik pada jarak 3 m dari muatan 1 µC (1×10⁻⁶ C)? (gunakan k = 9×10⁹ N·m²/C²)",
        answer: 1000,
        tolerance: 20,
        suffix: " N/C",
        solution:
          "E = k·q/r² = 9×10⁹ × 1×10⁻⁶ / (3)² = 9×10³ / 9 = <strong>1000 N/C</strong>.",
        hint: "Gunakan E = k·q/r². Cukup satu muatan saja, tidak perlu dua.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah medan listrik dengan keterangan yang tepat.",
        pairs: [
          { left: "Arah medan dari muatan positif", right: "Memancar keluar" },
          { left: "Satuan medan listrik", right: "N/C" },
          { left: "Sumber medan listrik", right: "Muatan listrik" },
          { left: "Garis medan yang rapat", right: "Medan kuat" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sangkar Faraday",
        html: "Mobil yang tersambar petir biasanya tidak melukai penumpang di dalamnya. Mengapa? Muatan dari petir menyebar di permukaan luar bodi logam, dan di <strong>dalam</strong> rongga logam tertutup, medan listriknya nol. Prinsip ini disebut sangkar Faraday. Memahami medan listrik membuat kita tahu tempat paling aman justru di dalam kotak logam, bukan di luar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita tuliskan: medan listrik adalah <strong>E = F/q</strong>, yaitu gaya yang dirasakan tiap satuan muatan uji. Untuk satu muatan sumber, besarnya <strong>E = k·q/r²</strong>. Perhatikan, medan ada di tiap titik ruang bahkan sebelum ada muatan lain yang merasakannya. Rumus ini hanyalah cara rapi menulis 'peta dorongan' yang tadi kita bayangkan.",
      },
      {
        type: "takeaways",
        items: [
          "Medan listrik adalah daerah pengaruh muatan di tiap titik ruang.",
          "Secara definisi, E = F/q, yaitu gaya per satuan muatan, bersatuan N/C.",
          "Untuk satu muatan sumber, E = k·q/r² dan mengikuti hukum kuadrat terbalik.",
          "Garis medan keluar dari muatan positif dan masuk ke muatan negatif.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Medan listrik didefinisikan sebagai?",
            options: [
              "Gaya dikali muatan",
              "Gaya per satuan muatan",
              "Muatan per satuan jarak",
              "Jarak per satuan gaya",
            ],
            answer: 1,
            explain: "E = F/q, yaitu gaya yang dirasakan tiap satuan muatan uji.",
          },
          {
            q: "Garis medan listrik pada muatan positif?",
            options: ["Masuk ke muatan", "Keluar dari muatan", "Berputar", "Tidak ada"],
            answer: 1,
            explain: "Garis medan memancar keluar dari muatan positif.",
          },
          {
            q: "Satuan kuat medan listrik adalah?",
            options: ["N/C", "Coulomb", "Newton", "Volt·meter"],
            answer: 0,
            explain: "Medan listrik bersatuan newton per coulomb (N/C).",
          },
          {
            q: "Jika jarak ke muatan sumber dijadikan tiga kali lipat, medannya menjadi?",
            options: ["1/3", "1/6", "1/9", "Tetap"],
            answer: 2,
            explain: "Karena E ~ 1/r², tiga kali jarak berarti medan menjadi 1/9.",
          },
          {
            q: "Mengapa penumpang mobil aman saat mobil tersambar petir?",
            options: [
              "Karena ban karet",
              "Karena medan di dalam rongga logam tertutup nol",
              "Karena kaca menahan petir",
              "Karena mobil bergerak",
            ],
            answer: 1,
            explain: "Bodi logam bertindak sebagai sangkar Faraday; medan di dalamnya nol.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "garis-garis-medan",
    levelId: "medan-listrik",
    order: 2,
    title: "Garis-Garis Medan Listrik",
    summary:
      "Taburkan biji rumput halus dalam minyak di sekitar kawat bermuatan, dan pola garis akan muncul sendiri. Kita baca dulu polanya, baru aturan garis medan kita rangkum di akhir.",
    durationMin: 13,
    tags: ["listrik statis", "medan listrik", "garis medan"],
    blocks: [
      {
        type: "paragraph",
        html: "Tuangkan minyak ke piring, taburi biji rumput atau potongan benang halus, lalu celupkan dua kawat bermuatan. Benang-benang itu menyusun diri membentuk lengkungan rapi yang menghubungkan kedua kawat. Kamu baru saja membuat <strong>garis-garis medan listrik</strong> terlihat. Sebelum bertemu aturannya, ayo baca dulu apa yang diceritakan pola itu.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Arah Gaya dan Lintasannya",
        caption:
          "Garis medan menunjukkan ke mana sebuah muatan uji positif akan terdorong di tiap titik.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Perhatikan di mana benang menumpuk paling rapat: tepat di dekat ujung kawat. Di sana medannya paling kuat. Semakin jauh dari kawat, benang merenggang dan medan melemah. Arah benang pun menunjukkan ke mana muatan uji positif akan terdorong. Belum ada rumus, tetapi pola benang sudah memberi tahu kita arah dan kekuatan medan sekaligus.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Aturan garis medan",
        html: "Garis medan <strong>keluar</strong> dari muatan positif dan <strong>masuk</strong> ke muatan negatif. Garis tidak pernah berpotongan. Semakin <strong>rapat</strong> garisnya, semakin kuat medannya. Garis selalu tegak lurus permukaan konduktor. Jumlah garis yang keluar sebanding dengan besar muatannya.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "classifyExercise",
        prompt: "Tentukan apakah tiap pernyataan tentang garis medan listrik benar atau salah.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "Garis medan keluar dari muatan positif", bucket: "Benar" },
          { text: "Dua garis medan boleh berpotongan", bucket: "Salah" },
          { text: "Garis yang rapat menandakan medan kuat", bucket: "Benar" },
          { text: "Garis medan masuk ke muatan negatif", bucket: "Benar" },
          { text: "Garis medan menembus konduktor secara miring", bucket: "Salah" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap ciri pola garis medan dengan maknanya.",
        pairs: [
          { left: "Garis sangat rapat", right: "Medan kuat" },
          { left: "Garis merenggang", right: "Medan lemah" },
          { left: "Garis tegak lurus permukaan", right: "Permukaan konduktor" },
          { left: "Garis tidak pernah bersilangan", right: "Arah medan tunggal tiap titik" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Penangkal Petir Berujung Runcing",
        html: "Penangkal petir dibuat runcing bukan tanpa alasan. Di ujung yang tajam, garis medan menumpuk sangat rapat sehingga medan listriknya menjadi amat kuat. Medan kuat ini mengionisasi udara dan menyalurkan muatan dengan tenang ke tanah sebelum petir besar terbentuk, atau menuntun sambaran ke jalur aman. Membaca kerapatan garis medan membantu insinyur menentukan bentuk ujung penangkal.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang kita rapikan. Kerapatan garis medan sebanding dengan kuat medan: <strong>E ∝ jumlah garis / luas</strong>. Tempat garis paling rapat adalah tempat E paling besar, dan arah garis di tiap titik adalah arah medan, yaitu arah gaya pada muatan uji positif. Garis medan hanyalah cara menggambar peta <strong>E = F/q</strong> yang sudah kita kenal.",
      },
      {
        type: "takeaways",
        items: [
          "Garis medan keluar dari muatan positif dan masuk ke muatan negatif.",
          "Garis medan tidak pernah berpotongan dan selalu tegak lurus permukaan konduktor.",
          "Kerapatan garis menunjukkan kuat medan: makin rapat, makin kuat.",
          "Arah garis di tiap titik adalah arah gaya pada muatan uji positif.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Garis medan listrik keluar dari muatan?",
            options: ["Negatif", "Positif", "Netral", "Tidak menentu"],
            answer: 1,
            explain: "Garis medan memancar keluar dari muatan positif.",
          },
          {
            q: "Dua garis medan listrik tidak boleh berpotongan karena?",
            options: [
              "Medan akan hilang",
              "Tiap titik hanya punya satu arah medan",
              "Muatan akan netral",
              "Garis akan putus",
            ],
            answer: 1,
            explain: "Di satu titik medan hanya punya satu arah, jadi garis tak mungkin bersilangan.",
          },
          {
            q: "Garis medan yang sangat rapat menandakan?",
            options: ["Medan lemah", "Medan kuat", "Tidak ada medan", "Muatan netral"],
            answer: 1,
            explain: "Kerapatan garis sebanding dengan kuat medan.",
          },
          {
            q: "Di dekat permukaan konduktor, garis medan selalu?",
            options: [
              "Sejajar permukaan",
              "Tegak lurus permukaan",
              "Membentuk sudut 45°",
              "Melingkar",
            ],
            answer: 1,
            explain: "Garis medan tegak lurus permukaan konduktor dalam keadaan setimbang.",
          },
          {
            q: "Mengapa ujung penangkal petir dibuat runcing?",
            options: [
              "Agar ringan",
              "Karena di ujung tajam medan menjadi sangat kuat",
              "Agar tidak berkarat",
              "Agar terlihat indah",
            ],
            answer: 1,
            explain: "Garis medan menumpuk rapat di ujung tajam sehingga medannya kuat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "medan-beberapa-muatan",
    levelId: "medan-listrik",
    order: 3,
    title: "Medan oleh Beberapa Muatan",
    summary:
      "Sepasang muatan berlawanan membentuk pola medan yang khas, seperti pada jantung manusia. Kita amati dulu bagaimana medan-medan bertumpuk, baru penjumlahannya kita rangkum di akhir.",
    durationMin: 14,
    tags: ["listrik statis", "medan listrik", "superposisi", "dipol"],
    blocks: [
      {
        type: "paragraph",
        html: "Letakkan muatan positif dan muatan negatif berdekatan, lalu petakan medan di sekitarnya. Di antara keduanya, panah-panah medan mengalir rapi dari yang positif ke yang negatif. Susunan ini disebut <strong>dipol listrik</strong>, dan jantungmu sendiri bekerja seperti dipol raksasa. Sebelum menuliskan rumus, ayo amati dulu bagaimana medan dua muatan bergabung.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Menjumlahkan Arah",
        caption:
          "Medan dari beberapa muatan dijumlahkan sebagai vektor, persis seperti menjumlahkan gaya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Di titik tepat di tengah antara muatan positif dan negatif, ke mana medan menunjuk? Muatan positif mendorong muatan uji menjauh (ke arah negatif), dan muatan negatif menariknya mendekat (juga ke arah negatif). Kedua medan <strong>searah</strong>, jadi mereka saling menguatkan. Belum ada rumus, tetapi kita sudah melihat medan dijumlahkan dengan memperhatikan arahnya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Superposisi medan",
        html: "Medan listrik di sebuah titik akibat banyak muatan adalah <strong>jumlah vektor</strong> dari medan tiap muatan. Hitung E tiap muatan dengan E = k·q/r², tentukan arahnya (menjauh dari muatan positif, mendekati muatan negatif), lalu gabungkan. Pada titik tertentu medan bisa saling menguatkan atau saling meniadakan.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "calcExercise",
        prompt:
          "Muatan +2 µC dan −2 µC terpisah 0,2 m. Berapa kuat medan total di titik tengah, 0,1 m dari masing-masing? (k = 9×10⁹ N·m²/C²)",
        answer: 3600000,
        tolerance: 50000,
        suffix: " N/C",
        solution:
          "Medan tiap muatan: E = 9×10⁹ × 2×10⁻⁶ / (0,1)² = 1,8×10⁶ N/C. Di titik tengah, medan dari muatan positif dan negatif menunjuk ke arah yang sama, jadi dijumlahkan: 1,8×10⁶ + 1,8×10⁶ = <strong>3,6×10⁶ N/C</strong>.",
        hint: "Hitung E tiap muatan, lalu karena keduanya searah di titik tengah, jumlahkan.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Pada titik tertentu, tentukan apakah dua medan listrik saling menguatkan (dijumlah) atau melemahkan (dikurangi).",
        buckets: ["Saling menguatkan", "Saling melemahkan"],
        items: [
          { text: "Dua medan menunjuk ke arah yang sama", bucket: "Saling menguatkan" },
          { text: "Dua medan menunjuk berlawanan arah", bucket: "Saling melemahkan" },
          { text: "Di tengah dipol, medan dari + dan − searah", bucket: "Saling menguatkan" },
          {
            text: "Di tengah dua muatan + sama besar, kedua medan berlawanan",
            bucket: "Saling melemahkan",
          },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Rekam Jantung (EKG)",
        html: "Jantung yang berdetak menggerakkan muatan listrik sehingga berperilaku seperti dipol listrik yang berputar arah. Medan listriknya menjangkau sampai ke permukaan kulit, dan elektroda EKG membaca beda potensial yang ditimbulkannya. Dengan menjumlahkan medan dari muatan yang bergerak di otot jantung, dokter bisa membaca irama detak. Superposisi medan menjadi alat diagnosis yang menyelamatkan banyak nyawa.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita tuliskan. Medan total adalah <strong>E<sub>total</sub> = E₁ + E₂ + E₃ + …</strong> (jumlah vektor), dengan tiap suku E = k·qᵢ/rᵢ². Arah tiap medan: <strong>menjauh</strong> dari muatan positif dan <strong>mendekat</strong> ke muatan negatif. Bila segaris, jumlahkan dengan tanda; bila bersudut, uraikan ke sumbu dahulu. Rumus ini hanyalah cara rapi menulis tumpukan panah yang tadi kita amati.",
      },
      {
        type: "takeaways",
        items: [
          "Medan total adalah jumlah vektor medan dari tiap muatan sumber.",
          "Arah medan: menjauh dari muatan positif, mendekat ke muatan negatif.",
          "Medan bisa saling menguatkan (searah) atau melemahkan (berlawanan) di titik tertentu.",
          "Sepasang muatan berlawanan membentuk dipol, pola dasar yang muncul bahkan di jantung manusia.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Medan listrik di sebuah titik oleh beberapa muatan dihitung dengan?",
            options: [
              "Menjumlahkan besarnya saja",
              "Menjumlahkan sebagai vektor",
              "Mengambil yang terkuat",
              "Mengalikan semuanya",
            ],
            answer: 1,
            explain: "Medan adalah vektor, jadi arah harus diperhitungkan saat dijumlahkan.",
          },
          {
            q: "Arah medan listrik dari muatan negatif adalah?",
            options: [
              "Menjauh dari muatan",
              "Mendekat ke muatan",
              "Sejajar muatan",
              "Tidak ada arah",
            ],
            answer: 1,
            explain: "Medan menunjuk mendekati muatan negatif.",
          },
          {
            q: "Di titik tengah antara +q dan −q, kedua medannya?",
            options: ["Saling meniadakan", "Saling menguatkan", "Nol", "Tak terhingga"],
            answer: 1,
            explain: "Kedua medan searah di titik tengah, sehingga saling menguatkan.",
          },
          {
            q: "Di titik tengah antara dua muatan +q sama besar, medan totalnya?",
            options: ["Maksimum", "Nol", "Searah keduanya", "Tak terhingga"],
            answer: 1,
            explain: "Kedua medan sama besar dan berlawanan arah, sehingga saling meniadakan.",
          },
          {
            q: "Sepasang muatan positif dan negatif berdekatan membentuk?",
            options: ["Monopol", "Dipol listrik", "Konduktor", "Isolator"],
            answer: 1,
            explain: "Susunan dua muatan berlawanan disebut dipol listrik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "fluks-dan-hukum-gauss",
    levelId: "medan-listrik",
    order: 4,
    title: "Fluks dan Hukum Gauss",
    summary:
      "Berapa banyak garis medan yang menembus sebuah permukaan? Pertanyaan sederhana ini melahirkan hukum Gauss. Kita hitung dulu 'aliran' medan, baru rumusnya kita rangkum di akhir.",
    durationMin: 15,
    tags: ["listrik statis", "medan listrik", "fluks", "gauss"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan memegang bingkai jendela di tengah hujan miring. Banyak sedikitnya air yang lewat tergantung seberapa lebar bingkai dan seberapa miring kamu memegangnya. Medan listrik yang menembus sebuah permukaan dihitung dengan cara yang sama, dan kita menyebutnya <strong>fluks listrik</strong>. Sebelum menuliskan rumus, ayo hitung dulu 'aliran' medan lewat permukaan.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Besaran dan Satuannya",
        caption:
          "Fluks listrik adalah besaran baru dengan satuan N·m²/C. Mari kenali cara menghitungnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang bingkai tegak lurus arah medan: paling banyak garis menembusnya. Miringkan perlahan, makin sedikit yang lewat. Saat bingkai sejajar medan (menghadap tepi), tidak ada satu garis pun menembus. Jadi fluks bergantung pada kuat medan, luas, dan <strong>sudut</strong>. Belum ada rumus, tetapi kita sudah menemukan ketiga bahannya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Fluks dan permukaan tertutup",
        html: "Fluks listrik mengukur banyaknya garis medan yang menembus suatu permukaan: <strong>Φ = E·A·cos θ</strong>, dengan θ sudut antara medan dan garis normal permukaan. Untuk <strong>permukaan tertutup</strong> yang membungkus muatan, jumlah garis yang menembus keluar hanya bergantung pada muatan total di dalamnya, bukan bentuk permukaannya.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Fluks Listrik saat Permukaan Dimiringkan (E·A = 100 N·m²/C)",
        unit: "N·m²/C",
        source: "perhitungan Φ = E·A·cos θ",
        note: "Saat tegak lurus medan (θ = 0°) fluks maksimum. Saat sejajar medan (θ = 90°) fluks nol karena tidak ada garis yang menembus. Inilah peran faktor cos θ.",
        data: [
          { label: "θ = 0°", value: 100, color: "#facc15" },
          { label: "θ = 30°", value: 87, color: "#a3e635" },
          { label: "θ = 60°", value: 50, color: "#4ade80" },
          { label: "θ = 90°", value: 0, color: "#2dd4bf" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Medan 400 N/C menembus permukaan seluas 2 m² yang dimiringkan sehingga sudut antara medan dan normal permukaan 60°. Berapa fluks listriknya? (cos 60° = 0,5)",
        answer: 400,
        tolerance: 10,
        suffix: " N·m²/C",
        solution:
          "Φ = E·A·cos θ = 400 × 2 × cos 60° = 400 × 2 × 0,5 = <strong>400 N·m²/C</strong>.",
        hint: "Gunakan Φ = E·A·cos θ. Jangan lupa kalikan dengan cos sudutnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah muatan 8,85 nC (8,85×10⁻⁹ C) dibungkus permukaan tertutup. Berapa fluks total yang menembus keluar? (ε₀ = 8,85×10⁻¹² C²/N·m²)",
        answer: 1000,
        tolerance: 20,
        suffix: " N·m²/C",
        solution:
          "Menurut hukum Gauss, Φ = q/ε₀ = 8,85×10⁻⁹ / 8,85×10⁻¹² = <strong>1000 N·m²/C</strong>. Hasilnya hanya bergantung pada muatan di dalam, bukan bentuk permukaannya.",
        hint: "Pakai hukum Gauss Φ = q/ε₀. Bagi muatan dengan ε₀.",
      },
      {
        type: "case",
        title: "Studi Kasus: Medan Nol di Dalam Bola Logam Berongga",
        html: "Mengapa di dalam bola logam berongga bermuatan tidak ada medan listrik sama sekali? Bayangkan permukaan khayal di dalam rongga: tidak ada muatan yang dibungkusnya, sehingga menurut hukum Gauss fluks totalnya nol, dan medan di sana pun nol. Inilah dasar matematis sangkar Faraday. Hukum Gauss mengubah pertanyaan sulit tentang medan menjadi soal sederhana: berapa muatan di dalam?",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita rangkum. Fluks listrik: <strong>Φ = E·A·cos θ</strong>. Untuk permukaan tertutup, <strong>Hukum Gauss</strong> menyatakan <strong>Φ = q<sub>dalam</sub>/ε₀</strong>, dengan ε₀ = 8,85×10⁻¹² C²/N·m². Artinya total garis medan yang menembus keluar hanya ditentukan oleh muatan di dalam, tak peduli bentuk permukaannya. Rumus ini hanyalah cara rapi menghitung 'aliran' medan yang tadi kita amati lewat bingkai.",
      },
      {
        type: "takeaways",
        items: [
          "Fluks listrik Φ = E·A·cos θ mengukur banyaknya garis medan yang menembus permukaan.",
          "Fluks maksimum saat permukaan tegak lurus medan dan nol saat sejajar medan.",
          "Hukum Gauss: fluks total lewat permukaan tertutup adalah Φ = q_dalam/ε₀.",
          "Fluks lewat permukaan tertutup hanya bergantung pada muatan di dalam, bukan bentuknya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Fluks listrik melalui permukaan datar dirumuskan?",
            options: ["Φ = E/A", "Φ = E·A·cos θ", "Φ = E·A·sin θ", "Φ = A/E"],
            answer: 1,
            explain: "Fluks Φ = E·A·cos θ dengan θ sudut terhadap normal permukaan.",
          },
          {
            q: "Fluks listrik menjadi nol ketika permukaan?",
            options: [
              "Tegak lurus medan",
              "Sejajar medan",
              "Membentuk 45°",
              "Bermuatan",
            ],
            answer: 1,
            explain: "Saat permukaan sejajar medan (θ = 90°), cos θ = 0 sehingga fluks nol.",
          },
          {
            q: "Hukum Gauss menyatakan fluks total lewat permukaan tertutup bergantung pada?",
            options: [
              "Bentuk permukaan",
              "Muatan di dalam permukaan",
              "Luas permukaan",
              "Warna permukaan",
            ],
            answer: 1,
            explain: "Φ = q_dalam/ε₀, hanya ditentukan muatan yang dibungkus.",
          },
          {
            q: "Mengapa medan di dalam bola logam berongga bermuatan nol?",
            options: [
              "Karena logam tebal",
              "Karena tidak ada muatan yang dibungkus permukaan khayal di dalamnya",
              "Karena udara di dalam",
              "Karena bola berputar",
            ],
            answer: 1,
            explain: "Tanpa muatan di dalam, fluks nol menurut Gauss, sehingga medan nol.",
          },
          {
            q: "Nilai ε₀ (permitivitas ruang hampa) kira-kira?",
            options: [
              "8,85×10⁻¹² C²/N·m²",
              "9×10⁹ N·m²/C²",
              "1,6×10⁻¹⁹ C",
              "3×10⁸ m/s",
            ],
            answer: 0,
            explain: "Permitivitas ruang hampa ε₀ ≈ 8,85×10⁻¹² C²/N·m².",
          },
        ],
      },
    ],
  },
];
