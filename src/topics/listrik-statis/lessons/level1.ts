import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "sifat-muatan-listrik",
    levelId: "muatan-coulomb",
    order: 1,
    title: "Sifat Muatan Listrik",
    summary:
      "Penggaris plastik yang digosok rambut bisa menarik potongan kertas dari kejauhan. Sebelum berhitung, kita kenali dulu apa sebenarnya muatan listrik itu, baru aturannya kita rangkum di akhir.",
    durationMin: 13,
    tags: ["listrik statis", "muatan", "atom", "konduktor"],
    blocks: [
      {
        type: "paragraph",
        html: "Sobek kertas kecil-kecil di atas meja. Gosokkan penggaris plastik ke rambut yang kering, lalu dekatkan ke kertas tanpa menyentuh. Kertas-kertas itu meloncat menempel ke penggaris. Tidak ada yang menyedotnya, yang bekerja adalah <strong>muatan listrik</strong> yang berpindah saat penggaris digosok. Sebelum kita kenalan dengan rumus, ayo selidiki dulu dari mana muatan itu berasal.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Besaran dan Satuannya",
        caption:
          "Muatan listrik adalah sebuah besaran fisika, dan seperti besaran lain ia punya satuan resmi: coulomb.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba bandingkan: penggaris yang belum digosok diam saja di dekat kertas, sedangkan yang sudah digosok menariknya. Apa bedanya? Bukan bentuknya yang berubah, melainkan sesuatu yang tak terlihat ikut berpindah saat bergesekan. Belum ada rumus, baru pengamatan, tetapi kita sudah menemukan bahwa gosokan memindahkan 'sesuatu' yang menimbulkan tarikan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Isi dari sebuah atom",
        html: "Setiap benda tersusun dari atom. Di pusat atom ada <strong>proton</strong> bermuatan positif dan neutron tanpa muatan, dikelilingi <strong>elektron</strong> bermuatan negatif. Dalam keadaan netral jumlah proton dan elektron sama. Yang mudah berpindah hanyalah elektron. Benda kelebihan elektron menjadi negatif, kekurangan elektron menjadi positif.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda menerima kelebihan 5×10¹³ elektron. Berapa besar muatan benda itu? (muatan satu elektron e = 1,6×10⁻¹⁹ C)",
        answer: 8,
        tolerance: 0.1,
        suffix: " µC",
        solution:
          "q = n·e = 5×10¹³ × 1,6×10⁻¹⁹ = 8×10⁻⁶ C = <strong>8 µC</strong>. Muatan selalu kelipatan muatan satu elektron, jadi kita tinggal mengalikan jumlah elektron dengan e.",
        hint: "Kalikan jumlah elektron dengan muatan satu elektron, lalu ubah ke mikrocoulomb (1 µC = 10⁻⁶ C).",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan tiap bahan berdasarkan apakah muatan mudah mengalir di dalamnya (konduktor) atau tidak (isolator).",
        buckets: ["Konduktor", "Isolator"],
        items: [
          { text: "Tembaga", bucket: "Konduktor" },
          { text: "Kaca", bucket: "Isolator" },
          { text: "Aluminium", bucket: "Konduktor" },
          { text: "Karet", bucket: "Isolator" },
          { text: "Air garam", bucket: "Konduktor" },
          { text: "Plastik kering", bucket: "Isolator" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Truk Tangki Bahan Bakar",
        html: "Truk pengangkut bensin sering memasang rantai logam yang menjuntai ke tanah atau menyambungkan kabel sebelum mengisi. Gesekan bahan bakar yang mengalir menumpuk muatan listrik pada badan truk, dan jika tidak dialirkan ke tanah, percikan kecil bisa menyulut uap bensin. Karena muatan bisa berpindah lewat konduktor menuju tanah, rantai itu mencegah ledakan. Memahami sifat muatan menyelamatkan nyawa.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. Muatan listrik selalu kelipatan muatan dasar: <strong>q = n·e</strong> dengan e = 1,6×10⁻¹⁹ C dan n bilangan bulat. Muatan juga bersifat <strong>kekal</strong>: total muatan sebelum dan sesudah proses apa pun tetap sama. Gosokan tidak menciptakan muatan baru, hanya memindahkan elektron dari satu benda ke benda lain.",
      },
      {
        type: "takeaways",
        items: [
          "Atom punya proton positif, neutron netral, dan elektron negatif; hanya elektron yang mudah berpindah.",
          "Benda kelebihan elektron menjadi negatif, kekurangan elektron menjadi positif.",
          "Muatan terkuantisasi: q = n·e dengan e = 1,6×10⁻¹⁹ C.",
          "Muatan bersifat kekal dan mengalir mudah di konduktor, sulit di isolator.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Partikel apa yang berpindah saat sebuah benda diberi muatan dengan digosok?",
            options: ["Proton", "Neutron", "Elektron", "Inti atom"],
            answer: 2,
            explain: "Hanya elektron yang mudah berpindah; proton dan neutron terikat di inti.",
          },
          {
            q: "Sebuah benda menjadi bermuatan positif karena?",
            options: [
              "Menerima elektron",
              "Kehilangan elektron",
              "Menerima proton",
              "Kehilangan neutron",
            ],
            answer: 1,
            explain: "Kekurangan elektron membuat proton lebih banyak, sehingga benda positif.",
          },
          {
            q: "Satuan muatan listrik adalah?",
            options: ["Volt", "Coulomb", "Ampere", "Newton"],
            answer: 1,
            explain: "Muatan diukur dalam coulomb (C).",
          },
          {
            q: "Manakah yang termasuk konduktor?",
            options: ["Kaca", "Karet", "Aluminium", "Plastik kering"],
            answer: 2,
            explain: "Logam seperti aluminium membiarkan muatan mengalir bebas.",
          },
          {
            q: "Pernyataan 'muatan bersifat kekal' berarti?",
            options: [
              "Muatan bisa diciptakan dari ketiadaan",
              "Total muatan dalam sistem tertutup tetap",
              "Muatan selalu bertambah",
              "Muatan selalu hilang ke udara",
            ],
            answer: 1,
            explain: "Muatan tidak diciptakan atau dimusnahkan, hanya berpindah tempat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cara-memberi-muatan",
    levelId: "muatan-coulomb",
    order: 2,
    title: "Cara Memberi Muatan",
    summary:
      "Turun dari mobil lalu tersengat kecil saat menyentuh pintunya? Itu muatan yang berpindah. Kita amati dulu tiga cara memberi muatan, baru polanya kita rapikan di akhir.",
    durationMin: 13,
    tags: ["listrik statis", "muatan", "induksi", "konduksi"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat keluar dari mobil di hari kering, kadang jarimu tersengat kecil ketika menyentuh badan mobil. Gesekan baju dengan jok menumpuk muatan, lalu muatan itu meloncat saat kamu menyentuh logam. Peristiwa kecil ini menyimpan tiga cara berbeda memberi muatan pada benda. Sebelum bertemu rumus, ayo amati ketiganya satu per satu.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Tarikan dan Dorongan",
        caption:
          "Memberi muatan selalu melibatkan tarikan atau dorongan elektron antarbenda. Mari pinjam cara berpikir ini.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Dekatkan balon bermuatan ke kaleng minuman kosong yang berbaring. Tanpa menyentuh, kaleng menggelinding mengejar balon. Aneh, padahal kaleng netral. Rahasianya: balon menarik muatan berlawanan ke sisi dekat kaleng dan mendorong yang sejenis ke sisi jauh. Sisi dekat menang sehingga timbul tarikan. Inilah benih dari cara memberi muatan tanpa sentuhan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga cara memberi muatan",
        html: "<strong>Gosokan</strong>: dua benda berbeda digesek sehingga elektron berpindah, keduanya bermuatan berlawanan. <strong>Konduksi</strong>: benda bermuatan menyentuh benda netral, muatannya menular sehingga keduanya bermuatan sejenis. <strong>Induksi</strong>: benda bermuatan didekatkan tanpa menyentuh, memisahkan muatan di benda netral. Alat penguji muatan disebut elektroskop.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "classifyExercise",
        prompt: "Tentukan cara memberi muatan pada tiap peristiwa berikut.",
        buckets: ["Gosokan", "Konduksi", "Induksi"],
        items: [
          { text: "Penggaris digesek ke rambut", bucket: "Gosokan" },
          { text: "Batang bermuatan menyentuh bola logam netral", bucket: "Konduksi" },
          { text: "Balon bermuatan didekatkan tanpa menyentuh kaleng", bucket: "Induksi" },
          { text: "Kain wol digosok ke batang kaca", bucket: "Gosokan" },
          { text: "Daun elektroskop mekar saat benda bermuatan didekatkan", bucket: "Induksi" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap cara memberi muatan dengan ciri khasnya.",
        pairs: [
          { left: "Gosokan", right: "Dua benda jadi bermuatan berlawanan" },
          { left: "Konduksi", right: "Benda netral jadi sejenis setelah disentuh" },
          { left: "Induksi", right: "Muatan terpisah tanpa sentuhan" },
          { left: "Elektroskop", right: "Alat penguji ada tidaknya muatan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pengecatan Mobil Elektrostatik",
        html: "Pabrik mobil menyemprot cat yang sudah diberi muatan listrik ke bodi yang dihubungkan ke muatan berlawanan. Butiran cat bermuatan saling tolak sehingga menyebar rata, lalu tertarik ke seluruh permukaan logam, bahkan membelok ke sisi yang tersembunyi. Hasilnya lapisan tipis merata dengan cat terbuang sangat sedikit. Tanpa memahami cara memberi muatan, teknik hemat ini tidak akan ada.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, kita rapikan polanya. Pada semua cara, muatan total <strong>kekal</strong>: yang berpindah hanya elektron. Konduksi menghasilkan muatan <strong>sejenis</strong> (qakhir dibagi rata pada benda yang bersentuhan), sedangkan induksi memunculkan muatan <strong>berlawanan</strong> di sisi dekat. Bila benda saat induksi dihubungkan ke tanah lalu diputus, ia menyimpan muatan berlawanan dengan benda penginduksi secara permanen.",
      },
      {
        type: "takeaways",
        items: [
          "Ada tiga cara memberi muatan: gosokan, konduksi, dan induksi.",
          "Gosokan dan induksi menghasilkan muatan berlawanan pada pasangannya; konduksi menghasilkan muatan sejenis.",
          "Induksi memisahkan muatan tanpa sentuhan dan bisa dipermanenkan lewat penanahan.",
          "Pada semua cara, muatan total tetap kekal: hanya elektron yang berpindah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Memberi muatan dengan cara menyentuhkan benda bermuatan ke benda netral disebut?",
            options: ["Gosokan", "Konduksi", "Induksi", "Polarisasi"],
            answer: 1,
            explain: "Konduksi terjadi lewat sentuhan langsung dan menghasilkan muatan sejenis.",
          },
          {
            q: "Pada induksi, sisi benda netral yang dekat dengan benda bermuatan akan?",
            options: [
              "Bermuatan sejenis",
              "Bermuatan berlawanan",
              "Tetap netral",
              "Kehilangan semua muatan",
            ],
            answer: 1,
            explain: "Muatan berlawanan tertarik ke sisi dekat, muatan sejenis terdorong menjauh.",
          },
          {
            q: "Setelah konduksi, dua benda yang bersentuhan akan bermuatan?",
            options: ["Berlawanan", "Sejenis", "Netral", "Tidak menentu"],
            answer: 1,
            explain: "Muatan menular sehingga keduanya bermuatan sejenis.",
          },
          {
            q: "Alat untuk menguji ada tidaknya muatan pada benda adalah?",
            options: ["Voltmeter", "Elektroskop", "Amperemeter", "Barometer"],
            answer: 1,
            explain: "Elektroskop menunjukkan muatan lewat mekarnya daun logam.",
          },
          {
            q: "Mengapa balon bermuatan bisa menarik kaleng yang netral?",
            options: [
              "Kaleng menjadi bermuatan total",
              "Muatan kaleng terpisah secara induksi, sisi dekat tertarik",
              "Balon menyentuh kaleng",
              "Kaleng kehilangan elektron",
            ],
            answer: 1,
            explain: "Induksi memisahkan muatan kaleng; sisi dekat bermuatan berlawanan dan tertarik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "muatan-dan-hukum-coulomb",
    levelId: "muatan-coulomb",
    order: 3,
    title: "Hukum Coulomb",
    summary:
      "Sebelum bertemu rumus gaya listrik, kita amati dulu mengapa balon bisa menempel di dinding dan rambut berdiri. Dari kisah sederhana itu, hukum Coulomb akan lahir sendiri di akhir.",
    durationMin: 14,
    tags: ["listrik statis", "muatan", "coulomb", "gaya"],
    blocks: [
      {
        type: "paragraph",
        html: "Gosokkan balon ke rambutmu, lalu tempelkan ke dinding. Balon itu menempel, seolah ada lem tak terlihat. Tidak ada lem, yang ada adalah <strong>muatan listrik</strong> yang berpindah saat balon digosok. Sebelum kita kenalan dengan rumus, ayo selidiki dulu apa yang sebenarnya terjadi pada balon dan dinding itu.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Gaya sebagai Tarikan dan Dorongan",
        caption:
          "Gaya listrik, seperti gaya pada umumnya, bisa menarik atau mendorong. Mari kita pinjam cara berpikir ini.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba dekatkan dua balon yang sama-sama habis digosok ke rambut. Keduanya saling <strong>menjauh</strong>. Tapi balon yang digosok justru tertarik ke potongan kertas kecil. Amati polanya: muatan sejenis tolak-menolak, muatan berlawanan tarik-menarik. Belum ada rumus, baru pengamatan, tetapi kita sudah menemukan aturan mainnya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua jenis muatan",
        html: "Ada dua jenis muatan: <strong>positif</strong> (kekurangan elektron) dan <strong>negatif</strong> (kelebihan elektron). Saat balon digosok, sebagian elektron berpindah dari rambut ke balon, sehingga balon menjadi bermuatan negatif. Satuan muatan adalah coulomb (C).",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya Coulomb antara Dua Muatan 10 µC saat Jaraknya Bertambah",
        unit: "newton",
        source: "perhitungan F = k·q₁·q₂/r² dengan k = 9×10⁹",
        note: "Jarak menjadi dua kali lipat membuat gaya bukan setengah, melainkan seperempat. Inilah ciri khas hukum kuadrat terbalik: gaya turun sebanding dengan kuadrat jarak.",
        data: [
          { label: "r = 1 m", value: 0.9, color: "#facc15" },
          { label: "r = 2 m", value: 0.225, color: "#a3e635" },
          { label: "r = 3 m", value: 0.1, color: "#4ade80" },
          { label: "r = 4 m", value: 0.056, color: "#2dd4bf" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dua muatan masing-masing 1 µC (1×10⁻⁶ C) berjarak 0,1 m. Berapa besar gaya Coulomb di antara keduanya? (gunakan k = 9×10⁹ N·m²/C²)",
        answer: 0.9,
        tolerance: 0.02,
        suffix: " N",
        solution:
          "F = k·q₁·q₂/r² = 9×10⁹ × (1×10⁻⁶ × 1×10⁻⁶) / (0,1)² = 9×10⁹ × 1×10⁻¹² / 0,01 = 9×10⁻³ / 0,01 = <strong>0,9 N</strong>.",
        hint: "Kalikan kedua muatan dulu, lalu bagi dengan kuadrat jaraknya, terakhir kalikan dengan k.",
      },
      {
        type: "classifyExercise",
        prompt: "Tentukan apakah tiap pasangan muatan saling tarik-menarik atau tolak-menolak.",
        buckets: ["Tarik-menarik", "Tolak-menolak"],
        items: [
          { text: "Dua muatan positif", bucket: "Tolak-menolak" },
          { text: "Muatan positif dan muatan negatif", bucket: "Tarik-menarik" },
          { text: "Dua muatan negatif", bucket: "Tolak-menolak" },
          { text: "Proton dan elektron", bucket: "Tarik-menarik" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mesin Fotokopi",
        html: "Di dalam mesin fotokopi, sebuah silinder diberi muatan listrik mengikuti pola tulisan yang akan disalin. Bubuk tinta (toner) yang bermuatan berlawanan lalu <strong>tertarik</strong> hanya ke bagian bermuatan itu, persis seperti kertas kecil tertarik ke balon. Tanpa hukum tarik-menarik muatan, tidak akan ada satu pun lembar fotokopi di dunia ini.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum dalam <strong>Hukum Coulomb</strong>: <strong>F = k·q₁·q₂/r²</strong>. Gaya listrik sebanding dengan hasil kali kedua muatan dan berbanding terbalik dengan kuadrat jaraknya, dengan k = 9×10⁹ N·m²/C². Rumus ini hanyalah ringkasan rapi dari semua yang sudah kita amati pada balon, kertas, dan rambut.",
      },
      {
        type: "takeaways",
        items: [
          "Ada dua jenis muatan: positif dan negatif, dengan satuan coulomb (C).",
          "Muatan sejenis tolak-menolak, muatan berlawanan tarik-menarik.",
          "Gaya Coulomb sebanding dengan hasil kali kedua muatan.",
          "Gaya berbanding terbalik dengan kuadrat jarak, jadi menjauh sedikit melemahkan gaya dengan cepat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Saat balon digosok ke rambut, apa yang berpindah?",
            options: ["Proton", "Neutron", "Elektron", "Atom utuh"],
            answer: 2,
            explain: "Elektron berpindah dari rambut ke balon, membuat balon bermuatan negatif.",
          },
          {
            q: "Dua muatan negatif yang berdekatan akan?",
            options: ["Tarik-menarik", "Tolak-menolak", "Diam saja", "Menjadi netral"],
            answer: 1,
            explain: "Muatan sejenis selalu tolak-menolak.",
          },
          {
            q: "Jika jarak antara dua muatan dijadikan dua kali lipat, gayanya menjadi?",
            options: ["Dua kali lebih besar", "Setengahnya", "Seperempatnya", "Tetap"],
            answer: 2,
            explain: "Karena F berbanding terbalik dengan r², dua kali jarak berarti gaya menjadi 1/4.",
          },
          {
            q: "Satuan muatan listrik adalah?",
            options: ["Newton", "Coulomb", "Volt", "Ampere"],
            answer: 1,
            explain: "Muatan diukur dalam coulomb (C).",
          },
          {
            q: "Pada rumus F = k·q₁·q₂/r², nilai k kira-kira?",
            options: ["9×10⁹", "1×10⁻⁶", "3×10⁸", "9,8"],
            answer: 0,
            explain: "Konstanta Coulomb k ≈ 9×10⁹ N·m²/C².",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gaya-beberapa-muatan",
    levelId: "muatan-coulomb",
    order: 4,
    title: "Gaya oleh Beberapa Muatan",
    summary:
      "Di dunia nyata, sebuah muatan jarang sendirian. Kita amati dulu bagaimana banyak muatan menarik dan mendorong serentak, baru prinsip penjumlahannya kita rangkum di akhir.",
    durationMin: 14,
    tags: ["listrik statis", "coulomb", "superposisi", "gaya"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan sebuah muatan kecil diapit dua muatan lain di kiri dan kanannya. Yang satu menariknya, yang lain mendorongnya. Lalu ke mana ia bergerak? Jawabannya tergantung siapa yang menang. Sebelum menuliskan rumus, ayo amati dulu bagaimana beberapa gaya listrik bekerja bersama-sama pada satu muatan.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Menjumlahkan Gaya",
        caption:
          "Beberapa gaya yang bekerja pada satu benda dijumlahkan sebagai vektor. Aturan yang sama berlaku untuk gaya listrik.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Letakkan sebuah muatan positif tepat di tengah antara dua muatan positif yang sama besar. Kiri mendorong ke kanan, kanan mendorong ke kiri, sama kuat. Hasilnya muatan tengah <strong>diam</strong>: gayanya saling meniadakan. Geser sedikit ke satu sisi, keseimbangan pecah dan ia terlempar. Belum ada rumus, tetapi kita sudah melihat bahwa gaya-gaya itu dijumlahkan dengan memperhatikan arahnya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Prinsip superposisi",
        html: "Gaya pada sebuah muatan akibat banyak muatan lain adalah <strong>jumlah vektor</strong> dari tiap gaya Coulomb satu per satu. Tiap pasangan muatan dihitung seolah pasangan lain tidak ada, lalu semua hasilnya digabung dengan memperhatikan arah. Inilah yang disebut prinsip superposisi.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "calcExercise",
        prompt:
          "Muatan q₁ = +1 µC di x = 0 dan q₂ = −1 µC di x = 0,3 m. Berapa besar gaya total pada q₃ = +1 µC yang berada di x = 0,1 m? (k = 9×10⁹ N·m²/C²)",
        answer: 1.125,
        tolerance: 0.03,
        suffix: " N",
        solution:
          "Gaya q₁ pada q₃: F₁₃ = 9×10⁹ × 1×10⁻⁶ × 1×10⁻⁶ / (0,1)² = 0,9 N, menolak ke arah +x. Gaya q₂ pada q₃: F₂₃ = 9×10⁹ × 1×10⁻¹² / (0,2)² = 0,225 N, menarik ke arah +x. Keduanya searah, jadi F = 0,9 + 0,225 = <strong>1,125 N</strong>.",
        hint: "Hitung tiap gaya terpisah dengan hukum Coulomb, tentukan arahnya, lalu jumlahkan karena keduanya searah.",
      },
      {
        type: "calcExercise",
        prompt:
          "Muatan +2 µC berada tepat di tengah antara dua muatan +2 µC yang sama jarak di kiri dan kanannya. Berapa besar gaya total pada muatan tengah?",
        answer: 0,
        tolerance: 0.001,
        suffix: " N",
        solution:
          "Kedua muatan sisi sama besar dan sama jarak, sehingga mendorong muatan tengah dengan gaya sama besar tetapi berlawanan arah. Jumlah vektornya = <strong>0 N</strong>. Muatan tengah berada di titik seimbang.",
        hint: "Bandingkan besar dan arah kedua gaya. Apa yang terjadi jika keduanya sama besar tetapi berlawanan?",
      },
      {
        type: "classifyExercise",
        prompt:
          "Sebuah muatan uji +q berada di antara muatan A dan B. Tentukan arah gaya total padanya untuk tiap susunan (anggap A di kiri, B di kanan, jarak sama).",
        buckets: ["Ke kiri", "Ke kanan", "Nol"],
        items: [
          { text: "A = +q, B = +q (sama besar)", bucket: "Nol" },
          { text: "A = +2q, B = +q", bucket: "Ke kanan" },
          { text: "A = +q (menolak), B = −q (menarik), sama besar", bucket: "Ke kanan" },
          { text: "A = −q, B = −q (sama besar)", bucket: "Nol" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pengendap Elektrostatik Cerobong Pabrik",
        html: "Cerobong pabrik memasang pelat bermuatan untuk menangkap debu sebelum asap keluar. Tiap butir debu diberi muatan, lalu merasakan gaya dari banyak pelat sekaligus dan tertarik menempel ke pelat penampung. Insinyur menghitung gaya total dari seluruh pelat dengan menjumlahkan kontribusinya satu per satu. Tanpa prinsip superposisi, mustahil merancang penyaring udara raksasa ini.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita tuliskan. Gaya total pada sebuah muatan adalah <strong>F<sub>total</sub> = F₁ + F₂ + F₃ + …</strong> (jumlah vektor). Tiap suku dihitung dengan hukum Coulomb F = k·q·qᵢ/rᵢ², lalu digabung dengan memperhatikan arah. Bila gaya-gaya segaris, cukup jumlahkan dengan tanda; bila bersudut, uraikan ke sumbu x dan y dahulu. Rumus ini hanyalah cara rapi menulis 'siapa menang' yang tadi kita amati.",
      },
      {
        type: "takeaways",
        items: [
          "Gaya pada satu muatan oleh banyak muatan lain adalah jumlah vektor tiap gaya Coulomb.",
          "Tiap pasangan dihitung terpisah seolah muatan lain tidak ada (prinsip superposisi).",
          "Gaya yang sama besar dan berlawanan arah saling meniadakan menjadi nol.",
          "Untuk gaya bersudut, uraikan dulu ke sumbu x dan y sebelum dijumlahkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Gaya total pada satu muatan oleh beberapa muatan lain dihitung dengan?",
            options: [
              "Menjumlahkan besarnya saja",
              "Menjumlahkan sebagai vektor",
              "Mengalikan semua gaya",
              "Mengambil yang terbesar saja",
            ],
            answer: 1,
            explain: "Gaya adalah besaran vektor, jadi arah harus diperhitungkan saat menjumlahkan.",
          },
          {
            q: "Prinsip superposisi menyatakan bahwa tiap gaya Coulomb dihitung?",
            options: [
              "Bergantung pada muatan lain",
              "Seolah pasangan lain tidak ada, lalu digabung",
              "Hanya untuk muatan terdekat",
              "Dengan mengabaikan jarak",
            ],
            answer: 1,
            explain: "Tiap pasangan dihitung sendiri lalu hasilnya dijumlahkan secara vektor.",
          },
          {
            q: "Muatan +q di tengah dua muatan +q sama jarak akan mengalami gaya total?",
            options: ["Besar ke kiri", "Besar ke kanan", "Nol", "Tak terhingga"],
            answer: 2,
            explain: "Kedua dorongan sama besar dan berlawanan arah, sehingga saling meniadakan.",
          },
          {
            q: "Jika dua gaya pada sebuah muatan searah, gaya totalnya?",
            options: [
              "Selisih keduanya",
              "Jumlah keduanya",
              "Nol",
              "Setengah jumlahnya",
            ],
            answer: 1,
            explain: "Gaya searah dijumlahkan langsung.",
          },
          {
            q: "Untuk gaya-gaya yang membentuk sudut, langkah yang benar adalah?",
            options: [
              "Langsung dijumlahkan besarnya",
              "Diuraikan ke sumbu x dan y dulu",
              "Diabaikan salah satunya",
              "Dikalikan",
            ],
            answer: 1,
            explain: "Gaya bersudut harus diuraikan ke komponen sebelum dijumlahkan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pembagian-muatan-konduktor",
    levelId: "muatan-coulomb",
    order: 5,
    title: "Pembagian Muatan pada Konduktor",
    summary:
      "Dua bola logam identik yang bersentuhan selalu berbagi muatan secara adil. Kita amati dulu bagaimana muatan menyebar saat konduktor bertemu, baru aturannya kita rangkum di akhir.",
    durationMin: 13,
    tags: ["listrik statis", "muatan", "konduktor", "konduksi"],
    blocks: [
      {
        type: "paragraph",
        html: "Sentuhkan bola logam bermuatan ke bola logam lain yang netral, lalu pisahkan. Sekarang keduanya bermuatan, padahal tadi hanya satu yang bermuatan. Tidak ada muatan baru yang lahir, yang terjadi adalah muatan lama <strong>terbagi</strong> ke kedua bola. Sebelum bertemu rumus, ayo selidiki dulu menurut aturan apa muatan itu membagi diri.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Sebab dan Akibat pada Benda",
        caption:
          "Saat dua konduktor bersentuhan, muatan mengalir sampai keduanya seimbang. Mari kita pinjam cara berpikir sebab-akibat ini.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bola A bermuatan 8 µC menyentuh bola identik B yang netral. Muatan negatif (elektron) mengalir sampai kedua bola sama 'penuh', sehingga masing-masing membawa 4 µC. Sentuhkan A (kini 4 µC) ke bola netral identik baru, A menjadi 2 µC. Ulangi terus, muatan A selalu <strong>separuh</strong> dari sebelumnya. Belum ada rumus, tetapi kita sudah melihat bahwa konduktor identik berbagi muatan sama rata.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bagi rata pada bola identik",
        html: "Pada konduktor, muatan bebas bergerak sampai potensialnya merata. Untuk dua bola <strong>identik</strong> yang bersentuhan, muatan total terbagi <strong>sama besar</strong> ke keduanya. Jika ukurannya berbeda, muatan terbagi sebanding jari-jari (bola lebih besar menampung lebih banyak), bukan rata.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Muatan pada Bola A setelah Tiap Sentuhan dengan Bola Netral Identik Baru",
        unit: "µC",
        source: "perhitungan q_baru = q_lama / 2 untuk dua bola identik",
        note: "Setiap sentuhan dengan bola netral identik membagi muatan menjadi dua sama besar, sehingga muatan A berkurang separuh tiap kali. Inilah cara cepat menurunkan muatan secara terukur.",
        data: [
          { label: "Awal", value: 8, color: "#facc15" },
          { label: "Sentuhan 1", value: 4, color: "#a3e635" },
          { label: "Sentuhan 2", value: 2, color: "#4ade80" },
          { label: "Sentuhan 3", value: 1, color: "#2dd4bf" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Bola logam A bermuatan +9 µC menyentuh bola identik B bermuatan +3 µC, lalu dipisahkan. Berapa muatan pada tiap bola sekarang?",
        answer: 6,
        tolerance: 0.1,
        suffix: " µC",
        solution:
          "Karena kedua bola identik, muatan total dibagi rata: q_tiap = (q₁ + q₂)/2 = (9 + 3)/2 = <strong>6 µC</strong>. Muatan total tetap kekal: 6 + 6 = 12 µC, sama dengan 9 + 3 sebelumnya.",
        hint: "Jumlahkan kedua muatan, lalu bagi dua karena bolanya identik.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Bola A disentuhkan ke bola identik B lalu dipisahkan. Tentukan apa yang terjadi pada muatan bola A.",
        buckets: ["Muatan A bertambah", "Muatan A berkurang", "Muatan A tetap"],
        items: [
          { text: "A = +8 µC menyentuh B netral", bucket: "Muatan A berkurang" },
          { text: "A = +2 µC menyentuh B = +8 µC", bucket: "Muatan A bertambah" },
          { text: "A = +4 µC menyentuh B = +4 µC", bucket: "Muatan A tetap" },
          { text: "A netral menyentuh B = +6 µC", bucket: "Muatan A bertambah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengukur Muatan dengan Bola Pembagi",
        html: "Seorang siswa ingin tahu muatan sebuah bola logam tanpa alat ukur langsung. Ia menyentuhkan bola itu ke bola identik milik elektroskop yang terkalibrasi, dan alat membaca 4 µC pada bola elektroskop. Karena kedua bola identik, muatan terbagi rata, sehingga sebelum disentuh bola asal membawa 2 × 4 = <strong>8 µC</strong>. Memahami pembagian muatan menjadikan sentuhan sederhana sebagai alat ukur.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. Untuk dua konduktor <strong>identik</strong> yang bersentuhan, muatan terbagi rata: <strong>q_tiap = (q₁ + q₂)/2</strong>. Untuk bola berbeda ukuran, muatan terbagi sebanding jari-jari (q₁/q₂ = r₁/r₂). Pada semua kasus, muatan total tetap <strong>kekal</strong>: yang berpindah hanya elektron sampai potensial merata.",
      },
      {
        type: "takeaways",
        items: [
          "Muatan pada konduktor mengalir bebas sampai potensialnya merata.",
          "Dua konduktor identik yang bersentuhan berbagi muatan sama besar: q_tiap = (q₁+q₂)/2.",
          "Bola berbeda ukuran membagi muatan sebanding jari-jari, bukan rata.",
          "Tiap sentuhan dengan bola netral identik membagi muatan menjadi separuh.",
          "Muatan total selalu kekal dalam setiap pembagian.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dua bola logam identik bermuatan +10 µC dan +2 µC disentuhkan lalu dipisahkan. Muatan tiap bola menjadi?",
            options: ["+12 µC", "+6 µC", "+5 µC", "+2 µC"],
            answer: 1,
            explain: "Muatan total 12 µC dibagi rata pada dua bola identik, jadi masing-masing 6 µC.",
          },
          {
            q: "Mengapa muatan pada dua konduktor identik terbagi sama besar?",
            options: [
              "Karena gravitasi",
              "Karena muatan mengalir sampai potensial keduanya merata",
              "Karena udara",
              "Karena keduanya isolator",
            ],
            answer: 1,
            explain: "Pada konduktor, muatan bergerak bebas sampai potensial seimbang.",
          },
          {
            q: "Bola bermuatan +8 µC menyentuh tiga bola netral identik berturut-turut (satu per satu, bola baru). Muatan akhir bola asal kira-kira?",
            options: ["8 µC", "4 µC", "2 µC", "1 µC"],
            answer: 3,
            explain: "Tiap sentuhan membagi dua: 8 → 4 → 2 → 1 µC.",
          },
          {
            q: "Jika dua bola yang bersentuhan ukurannya berbeda, muatan terbagi?",
            options: [
              "Tetap sama rata",
              "Sebanding jari-jari masing-masing bola",
              "Semua ke bola kecil",
              "Hilang ke udara",
            ],
            answer: 1,
            explain: "Bola lebih besar menampung lebih banyak muatan, sebanding jari-jarinya.",
          },
          {
            q: "Saat dua konduktor berbagi muatan, besaran yang selalu tetap adalah?",
            options: ["Muatan tiap bola", "Muatan total", "Jari-jari bola", "Potensial awal"],
            answer: 1,
            explain: "Muatan total kekal; hanya pembagiannya yang berubah.",
          },
        ],
      },
    ],
  },
];
