import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "bentuk-model-demokrasi",
    levelId: "bentuk",
    order: 1,
    title: "Bentuk & Model Demokrasi",
    summary:
      "Demokrasi punya banyak bentuk: langsung vs perwakilan, presidensial vs parlementer. Kenali kelebihan dan kekurangan masing-masing.",
    durationMin: 14,
    tags: ["bentuk", "perwakilan", "presidensial", "parlementer"],
    blocks: [
      {
        type: "paragraph",
        html: "Tidak mungkin jutaan warga berkumpul di satu lapangan untuk memutuskan tiap kebijakan. Karena itu, demokrasi modern umumnya berbentuk <strong>perwakilan</strong>: rakyat memilih wakil yang membuat keputusan atas nama mereka. Bentuk <strong>langsung</strong> ala Athena kini hanya dipakai untuk hal tertentu, seperti <strong>referendum</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Presidensial vs parlementer",
        html: "Dalam sistem <strong>presidensial</strong> (mis. Indonesia, AS), presiden dipilih rakyat dan terpisah dari parlemen. Dalam sistem <strong>parlementer</strong> (mis. Inggris), kepala pemerintahan (perdana menteri) berasal dari dan bertanggung jawab kepada parlemen.",
      },
      {
        type: "video",
        comp: "DemokrasiVideo",
        title: "Prinsip Demokrasi",
        caption: "Berbagai bentuk demokrasi tetap berpijak pada prinsip kedaulatan rakyat yang sama.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Inside_the_D%C3%A1il_-_The_Irish_Parliament_Chamber.jpg?width=400",
        alt: "Ruang sidang parlemen dengan deretan kursi anggota dewan",
        caption: "Ruang parlemen: tempat wakil rakyat berdebat dan memutuskan dalam demokrasi perwakilan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat bagaimana suara rakyat diubah menjadi kursi parlemen, dan mengapa sistem yang dipilih sangat memengaruhi hasilnya.",
      },
      { type: "widget", widget: "SimulatorSistemPemilu" },
      {
        type: "chart",
        variant: "bar",
        title: "Demokrasi Langsung vs Perwakilan (ilustrasi karakter)",
        unit: "skor relatif (ilustrasi)",
        source: "ilustrasi edukatif perbandingan konsep",
        note: "Demokrasi langsung lebih partisipatif tetapi sulit diterapkan pada penduduk besar; perwakilan sebaliknya.",
        data: [
          { label: "Partisipasi langsung", value: 90, color: "#34d399" },
          { label: "Skala besar", value: 25, color: "#f87171" },
          { label: "Efisiensi keputusan", value: 40, color: "#fbbf24" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Referendum, demokrasi langsung modern",
        html: "Sebagian negara sesekali memakai <strong>referendum</strong>: rakyat memberi suara langsung atas satu pertanyaan besar, misalnya perubahan konstitusi. Swiss terkenal sering menggelarnya. Contoh dramatis adalah <strong>Brexit (2016)</strong>, ketika rakyat Inggris memilih keluar dari Uni Eropa lewat referendum. Referendum memberi suara langsung kepada rakyat, tetapi mengandung risiko: isu rumit disederhanakan menjadi ya atau tidak, dan hasil tipis bisa membelah masyarakat.",
      },
      {
        type: "case",
        title: "Sejarah: Republik Romawi, jembatan menuju perwakilan",
        html: "Jauh setelah Athena, <strong>Republik Romawi</strong> (sekitar 509-27 SM) mengembangkan gagasan <strong>perwakilan</strong> dan pembagian kekuasaan lewat lembaga seperti Senat dan para konsul yang dipilih. Roma menunjukkan bagaimana sebuah negara besar bisa diperintah tanpa raja absolut, dengan wakil dan masa jabatan terbatas. Banyak istilah modern seperti <em>senat</em> dan <em>republik</em> berakar dari sini, dan para perancang konstitusi Amerika belajar banyak dari pengalaman Roma.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dalam sebuah referendum, dari 10 juta suara sah, 5,2 juta memilih 'Ya'. Berapa persen suara 'Ya'?",
        answer: 52,
        tolerance: 0,
        suffix: "%",
        solution:
          "5,2 juta / 10 juta x 100% = <strong>52%</strong>. Hasil setipis ini memenangkan 'Ya', tetapi menyisakan hampir separuh rakyat di pihak yang kalah, sehingga rawan memecah.",
        hint: "Bagi suara Ya dengan total suara, lalu kali 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri ke sistem yang tepat.",
        buckets: ["Presidensial", "Parlementer"],
        items: [
          { text: "Presiden dipilih langsung rakyat dan terpisah dari parlemen", bucket: "Presidensial" },
          { text: "Kepala pemerintahan dipilih oleh dan dari parlemen", bucket: "Parlementer" },
          { text: "Eksekutif bisa jatuh lewat mosi tidak percaya parlemen", bucket: "Parlementer" },
          { text: "Masa jabatan presiden tetap dan tidak mudah dibubarkan", bucket: "Presidensial" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Demokrasi modern umumnya perwakilan; rakyat memilih wakil untuk memutuskan.",
          "Demokrasi langsung kini dipakai untuk hal tertentu seperti referendum.",
          "Presidensial: presiden dipilih rakyat dan terpisah dari parlemen.",
          "Parlementer: kepala pemerintahan berasal dari dan bertanggung jawab ke parlemen.",
          "Republik Romawi memelopori gagasan perwakilan untuk negara besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa demokrasi modern umumnya berbentuk perwakilan?",
            options: [
              "Karena rakyat malas",
              "Karena tak mungkin jutaan orang memutuskan tiap kebijakan secara langsung",
              "Karena dilarang memilih langsung",
              "Karena wakil lebih pandai",
            ],
            answer: 1,
            explain: "Skala penduduk besar membuat keputusan langsung tidak praktis.",
          },
          {
            q: "Apa ciri sistem presidensial?",
            options: [
              "Presiden dipilih parlemen",
              "Presiden dipilih rakyat dan terpisah dari parlemen",
              "Tidak ada presiden",
              "Raja memimpin pemerintahan",
            ],
            answer: 1,
            explain: "Dalam presidensial, presiden dipilih langsung dan terpisah dari legislatif.",
          },
          {
            q: "Apa itu referendum?",
            options: [
              "Pemilihan wakil rakyat",
              "Pemungutan suara langsung rakyat atas satu pertanyaan",
              "Sidang parlemen",
              "Penunjukan menteri",
            ],
            answer: 1,
            explain: "Referendum memberi rakyat suara langsung atas sebuah isu, seperti Brexit 2016.",
          },
          {
            q: "Apa kontribusi Republik Romawi bagi demokrasi?",
            options: [
              "Menghapus semua lembaga",
              "Mengembangkan gagasan perwakilan dan masa jabatan terbatas",
              "Mengangkat raja absolut",
              "Melarang senat",
            ],
            answer: 1,
            explain: "Roma memelopori perwakilan dan pembagian kekuasaan untuk negara besar.",
          },
          {
            q: "Dari 10 juta suara, 5,2 juta memilih Ya. Persentasenya?",
            options: ["48%", "52%", "5,2%", "60%"],
            answer: 1,
            explain: "5,2 juta dibagi 10 juta sama dengan 52%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "demokrasi-langsung-referendum",
    levelId: "bentuk",
    order: 2,
    title: "Demokrasi Langsung & Referendum",
    summary:
      "Saat rakyat memberi suara langsung atas sebuah keputusan tanpa perantara wakil. Kenali referendum, plebisit, dan inisiatif rakyat.",
    durationMin: 14,
    tags: ["langsung", "referendum", "plebisit", "swiss"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Demokrasi langsung</strong> berarti rakyat memutuskan sendiri suatu kebijakan, bukan menyerahkannya kepada wakil. Bentuk modernnya bukan lagi berkumpul di lapangan seperti Athena, melainkan lewat <strong>referendum</strong> (pemungutan suara atas sebuah pertanyaan), <strong>plebisit</strong>, dan <strong>inisiatif rakyat</strong> (warga mengusulkan undang-undang).",
      },
      {
        type: "paragraph",
        html: "Kekuatannya jelas: keputusan benar-benar di tangan rakyat. Namun ada batasnya. Isu rumit harus diringkas jadi ya atau tidak, kampanye bisa menyesatkan, dan hasil yang tipis dapat membelah masyarakat menjadi dua kubu.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga alat demokrasi langsung",
        html: "<strong>Referendum</strong>: rakyat menyetujui atau menolak sebuah keputusan. <strong>Inisiatif</strong>: warga mengumpulkan tanda tangan untuk memaksa pemungutan suara atas usulan mereka. <strong>Recall</strong>: rakyat memberhentikan pejabat sebelum masa jabatannya habis.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bahaya penyederhanaan",
        html: "Pertanyaan referendum yang kompleks sering dipadatkan jadi satu kalimat. Pemilih bisa memutuskan tanpa memahami konsekuensi teknisnya, dan kampanye emosional dapat mengalahkan fakta.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Bandingkan kualitas demokrasi antarnegara lewat indikator yang dipakai lembaga pemeringkat, dan lihat bagaimana partisipasi langsung menjadi salah satu komponennya.",
      },
      { type: "widget", widget: "SimulatorIndeksDemokrasi" },
      {
        type: "video",
        comp: "DemokrasiVideo",
        title: "Saat Rakyat Memutuskan Langsung",
        caption: "Referendum, inisiatif rakyat, dan recall membuat warga memberi suara langsung tanpa perantara wakil.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ballot_dropped_into_ballot_box_2024_Swedish_EU_election_at_St%C3%A5ngen%C3%A4sskolan%2C_Brastad.jpg?width=400",
        alt: "Surat suara dimasukkan ke dalam kotak suara saat pemungutan suara",
        caption: "Dalam referendum, satu surat suara warga langsung ikut menentukan keputusan, tanpa perantara wakil.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Demokrasi Langsung: Kelebihan vs Kelemahan (ilustrasi karakter)",
        unit: "skor relatif (ilustrasi)",
        source: "ilustrasi edukatif perbandingan konsep",
        note: "Legitimasi keputusan sangat tinggi karena langsung dari rakyat, tetapi kemampuannya menangani isu rumit rendah.",
        data: [
          { label: "Legitimasi keputusan", value: 92, color: "#34d399" },
          { label: "Partisipasi warga", value: 80, color: "#60a5fa" },
          { label: "Menangani isu rumit", value: 30, color: "#f87171" },
          { label: "Risiko polarisasi", value: 70, color: "#fbbf24" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tradisi referendum Swiss",
        html: "Swiss memakai demokrasi langsung lebih intens daripada negara mana pun. Warga dipanggil ke kotak suara beberapa kali setahun untuk memutuskan beragam isu, dari pajak hingga kebijakan publik, lewat referendum dan inisiatif rakyat. Untuk mengubah konstitusi, Swiss menuntut <strong>mayoritas ganda</strong>: mayoritas suara rakyat nasional dan mayoritas kanton (wilayah). Sistem ini membuat keputusan lambat, tetapi sangat dimiliki rakyat.",
      },
      {
        type: "case",
        title: "Sejarah: Referendum Brexit 2016",
        html: "Pada <strong>23 Juni 2016</strong>, Inggris menggelar referendum apakah tetap di Uni Eropa atau keluar. Hasilnya tipis: sekitar <strong>51,9% memilih keluar</strong> dan 48,1% memilih bertahan, dengan tingkat partisipasi sekitar 72%. Keputusan sebesar keluar dari blok ekonomi terbesar diputuskan dengan selisih hanya beberapa persen. Brexit menjadi contoh klasik bagaimana referendum bisa memberi suara langsung pada rakyat sekaligus membelah negeri menjadi dua kubu yang nyaris seimbang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dalam referendum Brexit, 51,9% memilih keluar dan 48,1% memilih bertahan. Berapa selisih persentase kedua kubu?",
        answer: 3.8,
        tolerance: 0.1,
        suffix: "%",
        solution:
          "51,9% - 48,1% = <strong>3,8%</strong>. Selisih setipis ini memutuskan keluar dari Uni Eropa, menunjukkan betapa rapuhnya legitimasi keputusan yang membelah rakyat hampir sama besar.",
        hint: "Kurangkan persentase kubu kalah dari kubu menang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah inisiatif rakyat butuh 100.000 tanda tangan dalam 18 bulan. Jika panitia mengumpulkan rata-rata 6.000 tanda tangan per bulan, apakah cukup? Berapa total tanda tangan terkumpul dalam 18 bulan?",
        answer: 108000,
        tolerance: 0,
        solution:
          "6.000 x 18 = <strong>108.000</strong> tanda tangan, melebihi syarat 100.000, jadi inisiatif lolos untuk dibawa ke pemungutan suara.",
        hint: "Kalikan rata-rata per bulan dengan jumlah bulan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah demokrasi langsung dengan artinya.",
        pairs: [
          { left: "Referendum", right: "Rakyat menyetujui atau menolak sebuah keputusan" },
          { left: "Inisiatif rakyat", right: "Warga mengusulkan undang-undang lewat tanda tangan" },
          { left: "Recall", right: "Rakyat memberhentikan pejabat sebelum masa jabatan habis" },
          { left: "Mayoritas ganda", right: "Butuh mayoritas suara rakyat dan mayoritas wilayah" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Demokrasi langsung membuat rakyat memutuskan sendiri tanpa perantara wakil.",
          "Alat modernnya: referendum, inisiatif rakyat, dan recall.",
          "Swiss adalah contoh paling intens, dengan syarat mayoritas ganda untuk ubah konstitusi.",
          "Brexit 2016 menang tipis sekitar 51,9% dan membelah Inggris jadi dua kubu.",
          "Kekuatannya legitimasi tinggi; kelemahannya sulit menangani isu rumit dan rawan polarisasi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa inti demokrasi langsung?",
            options: [
              "Rakyat memilih wakil untuk memutuskan",
              "Rakyat memutuskan sendiri suatu kebijakan tanpa perantara",
              "Presiden memutuskan sendirian",
              "Parlemen menunjuk menteri",
            ],
            answer: 1,
            explain: "Demokrasi langsung berarti keputusan ada di tangan rakyat secara langsung.",
          },
          {
            q: "Apa yang dimaksud inisiatif rakyat?",
            options: [
              "Pemberhentian pejabat oleh rakyat",
              "Warga mengusulkan undang-undang lewat pengumpulan tanda tangan",
              "Sidang kabinet",
              "Pemilihan presiden",
            ],
            answer: 1,
            explain: "Inisiatif memungkinkan warga memaksa pemungutan suara atas usulan mereka.",
          },
          {
            q: "Negara mana yang paling intens memakai demokrasi langsung?",
            options: ["Amerika Serikat", "Swiss", "Tiongkok", "Arab Saudi"],
            answer: 1,
            explain: "Swiss rutin menggelar referendum dan inisiatif beberapa kali setahun.",
          },
          {
            q: "Berapa kira-kira hasil referendum Brexit untuk kubu 'keluar'?",
            options: ["Sekitar 51,9%", "Sekitar 75%", "Sekitar 40%", "Sekitar 90%"],
            answer: 0,
            explain: "Kubu keluar menang tipis sekitar 51,9% pada 23 Juni 2016.",
          },
          {
            q: "Apa kelemahan utama referendum atas isu rumit?",
            options: [
              "Terlalu mahal sehingga dilarang",
              "Isu kompleks dipadatkan jadi ya atau tidak dan rawan menyesatkan",
              "Selalu menghasilkan suara bulat",
              "Tidak melibatkan rakyat",
            ],
            answer: 1,
            explain: "Penyederhanaan isu rumit jadi satu pertanyaan adalah kelemahan klasik referendum.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "demokrasi-perwakilan",
    levelId: "bentuk",
    order: 3,
    title: "Demokrasi Perwakilan",
    summary:
      "Rakyat memilih wakil untuk membuat keputusan atas nama mereka. Kenali mandat, akuntabilitas, dan dilema wali vs delegasi.",
    durationMin: 14,
    tags: ["perwakilan", "mandat", "akuntabilitas", "parlemen"],
    blocks: [
      {
        type: "paragraph",
        html: "Dalam <strong>demokrasi perwakilan</strong>, rakyat tidak memutuskan tiap kebijakan sendiri, melainkan memilih <strong>wakil</strong> yang dipercaya membuat keputusan atas nama mereka. Inilah bentuk demokrasi yang dipakai hampir semua negara modern, termasuk Indonesia lewat DPR, DPD, dan DPRD.",
      },
      {
        type: "paragraph",
        html: "Wakil bekerja berdasarkan <strong>mandat</strong> dari pemilih dan terikat <strong>akuntabilitas</strong>: mereka harus mempertanggungjawabkan tindakannya, dan bisa tidak dipilih lagi pada pemilu berikutnya jika mengecewakan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Wali atau delegasi?",
        html: "Ada dua pandangan tentang peran wakil. Sebagai <strong>delegasi</strong>, ia wajib menyuarakan persis keinginan pemilihnya. Sebagai <strong>wali (trustee)</strong>, ia memakai pertimbangannya sendiri demi kepentingan terbaik, meski kadang berbeda dari suara mayoritas pemilih. Sistem nyata biasanya mencampur keduanya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa perwakilan menang",
        html: "Perwakilan memungkinkan negara berpenduduk ratusan juta tetap diperintah secara demokratis. Keputusan dibuat oleh sekelompok wakil yang punya waktu mempelajari isu, sementara rakyat tetap berdaulat lewat pemilu berkala.",
      },
      {
        type: "video",
        comp: "SistemPemiluVideo",
        title: "Dari Suara ke Kursi",
        caption: "Pemilu menerjemahkan suara rakyat menjadi kursi wakil di parlemen.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/DPR_sahkan_RUU.jpg?width=400",
        alt: "Suasana sidang paripurna DPR Indonesia mengesahkan rancangan undang-undang",
        caption: "DPR adalah wujud demokrasi perwakilan di Indonesia: wakil rakyat membuat undang-undang atas nama rakyat.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Ilustrasi Komposisi Kursi Parlemen (contoh)",
        unit: "kursi",
        source: "ilustrasi edukatif, bukan data resmi",
        note: "Dalam perwakilan, beragam partai berbagi kursi sehingga keputusan lahir dari negosiasi, bukan suara tunggal.",
        data: [
          { label: "Partai A", value: 38, color: "#60a5fa" },
          { label: "Partai B", value: 27, color: "#34d399" },
          { label: "Partai C", value: 20, color: "#fbbf24" },
          { label: "Partai D", value: 15, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Satu kursi mewakili berapa orang?",
        html: "Bayangkan sebuah daerah pemilihan berpenduduk 3.000.000 jiwa diwakili oleh 6 anggota dewan. Berarti rata-rata satu wakil menyuarakan sekitar 500.000 warga. Angka ini menjelaskan mengapa wakil tidak bisa menemui semua pemilihnya satu per satu, dan mengapa akuntabilitas lewat pemilu, media, serta organisasi masyarakat menjadi penting agar wakil tetap terhubung dengan rakyat.",
      },
      {
        type: "case",
        title: "Sejarah: Pidato Edmund Burke kepada pemilih Bristol 1774",
        html: "Pada <strong>1774</strong>, politikus Inggris <strong>Edmund Burke</strong> berpidato di hadapan pemilihnya di Bristol. Ia menegaskan bahwa seorang wakil berutang kepada pemilihnya bukan sekadar menuruti instruksi, melainkan <em>pertimbangan dan hati nuraninya</em>. Pidato ini menjadi rumusan klasik pandangan <strong>wali (trustee)</strong>: wakil dipilih untuk berpikir, bukan jadi corong otomatis. Perdebatan wali vs delegasi yang ia picu masih hidup dalam teori demokrasi hingga kini.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah daerah pemilihan berpenduduk 3.000.000 jiwa diwakili 6 anggota dewan. Rata-rata satu wakil mewakili berapa jiwa?",
        answer: 500000,
        tolerance: 0,
        solution:
          "3.000.000 / 6 = <strong>500.000</strong> jiwa per wakil. Inilah sebabnya akuntabilitas tidak bisa hanya mengandalkan pertemuan tatap muka.",
        hint: "Bagi jumlah penduduk dengan jumlah wakil.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan ke pandangan peran wakil yang tepat.",
        buckets: ["Delegasi", "Wali (trustee)"],
        items: [
          { text: "Wakil wajib menyuarakan persis keinginan pemilihnya", bucket: "Delegasi" },
          { text: "Wakil memakai pertimbangannya sendiri demi kepentingan terbaik", bucket: "Wali (trustee)" },
          { text: "Wakil mengikuti hasil jajak pendapat di daerahnya", bucket: "Delegasi" },
          { text: "Wakil menolak tekanan mayoritas demi keputusan yang ia yakini benar", bucket: "Wali (trustee)" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Demokrasi perwakilan: rakyat memilih wakil yang memutuskan atas nama mereka.",
          "Wakil bekerja berdasarkan mandat dan terikat akuntabilitas lewat pemilu.",
          "Peran wakil bisa sebagai delegasi (menuruti pemilih) atau wali (pakai pertimbangan sendiri).",
          "Perwakilan memungkinkan negara berpenduduk besar tetap demokratis.",
          "Edmund Burke (1774) merumuskan pandangan wali yang masih diperdebatkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa ciri utama demokrasi perwakilan?",
            options: [
              "Rakyat memutuskan tiap kebijakan langsung",
              "Rakyat memilih wakil untuk memutuskan atas nama mereka",
              "Hanya raja yang memutuskan",
              "Tidak ada pemilu",
            ],
            answer: 1,
            explain: "Inti perwakilan adalah keputusan dibuat oleh wakil yang dipilih rakyat.",
          },
          {
            q: "Apa yang menjaga wakil tetap bertanggung jawab kepada rakyat?",
            options: [
              "Tidak ada mekanisme apa pun",
              "Akuntabilitas lewat pemilu berkala, media, dan masyarakat",
              "Penunjukan seumur hidup",
              "Larangan berbicara",
            ],
            answer: 1,
            explain: "Akuntabilitas dan pemilu berkala menjaga wakil terhubung dengan pemilih.",
          },
          {
            q: "Pandangan 'delegasi' tentang peran wakil berarti...",
            options: [
              "Wakil memakai pertimbangan sendiri",
              "Wakil wajib menyuarakan persis keinginan pemilihnya",
              "Wakil mengabaikan rakyat",
              "Wakil ditunjuk raja",
            ],
            answer: 1,
            explain: "Sebagai delegasi, wakil bertindak sesuai keinginan pemilihnya.",
          },
          {
            q: "Tokoh yang merumuskan pandangan 'wali' pada 1774 adalah...",
            options: ["John Locke", "Edmund Burke", "Montesquieu", "Rousseau"],
            answer: 1,
            explain: "Edmund Burke mengemukakannya dalam pidato kepada pemilih Bristol 1774.",
          },
          {
            q: "3.000.000 jiwa diwakili 6 anggota dewan. Satu wakil mewakili berapa jiwa?",
            options: ["50.000", "500.000", "5.000.000", "300.000"],
            answer: 1,
            explain: "3.000.000 dibagi 6 sama dengan 500.000 jiwa per wakil.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "presidensial-vs-parlementer",
    levelId: "bentuk",
    order: 4,
    title: "Presidensial vs Parlementer",
    summary:
      "Dua cara utama menata eksekutif dan legislatif. Kenali pemisahan kekuasaan, mosi tidak percaya, dan stabilitas masing-masing.",
    durationMin: 15,
    tags: ["presidensial", "parlementer", "eksekutif", "legislatif"],
    blocks: [
      {
        type: "paragraph",
        html: "Negara demokratis menata hubungan eksekutif dan legislatif dengan dua cara utama. Dalam sistem <strong>presidensial</strong>, presiden dipilih rakyat dan terpisah dari parlemen. Dalam sistem <strong>parlementer</strong>, kepala pemerintahan (perdana menteri) berasal dari dan bertanggung jawab kepada parlemen.",
      },
      {
        type: "paragraph",
        html: "Perbedaan ini bukan sekadar nama jabatan. Ia menentukan siapa bisa menjatuhkan siapa, seberapa cepat pemerintahan bisa berganti, dan bagaimana kebuntuan politik diselesaikan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Perbedaan inti",
        html: "<strong>Presidensial</strong>: eksekutif dan legislatif dipilih terpisah, masa jabatan presiden tetap, sulit saling membubarkan. <strong>Parlementer</strong>: eksekutif lahir dari parlemen, bisa jatuh lewat <strong>mosi tidak percaya</strong>, dan parlemen bisa dibubarkan untuk pemilu dini.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Eksperimen dengan sistem pemilu untuk melihat bagaimana suara menjadi kursi. Komposisi parlemen inilah yang menentukan siapa bisa membentuk pemerintahan, terutama dalam sistem parlementer.",
      },
      { type: "widget", widget: "SimulatorSistemPemilu" },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Inside_the_D%C3%A1il_-_The_Irish_Parliament_Chamber.jpg?width=400",
        alt: "Ruang sidang parlemen dengan deretan kursi anggota dewan",
        caption: "Dalam sistem parlementer, pemerintahan lahir dari dan jatuh di ruang seperti ini.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "SistemPemiluVideo",
        title: "Suara, Kursi, dan Pemerintahan",
        caption: "Komposisi kursi parlemen menentukan siapa yang bisa membentuk dan menjatuhkan pemerintahan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Presidensial vs Parlementer (ilustrasi karakter)",
        unit: "skor relatif (ilustrasi)",
        source: "ilustrasi edukatif perbandingan konsep",
        note: "Presidensial cenderung stabil masa jabatan tetapi rawan kebuntuan; parlementer fleksibel berganti tetapi bisa kurang stabil.",
        data: [
          { label: "Stabilitas masa jabatan (presidensial)", value: 80, color: "#60a5fa" },
          { label: "Fleksibilitas ganti pemerintah (parlementer)", value: 85, color: "#34d399" },
          { label: "Risiko kebuntuan (presidensial)", value: 65, color: "#f87171" },
          { label: "Risiko pemerintah jatuh (parlementer)", value: 60, color: "#fbbf24" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mosi tidak percaya menjatuhkan pemerintah",
        html: "Misalkan sebuah parlemen punya 300 kursi. Pemerintahan koalisi menguasai 160 kursi. Ketika satu partai kecil bermitra dengan 25 kursi keluar dari koalisi, dukungan pemerintah turun menjadi 135 kursi, di bawah ambang mayoritas 151. Oposisi mengajukan <strong>mosi tidak percaya</strong> dan menang, sehingga perdana menteri harus mundur. Dalam sistem presidensial, hal seperti ini tidak terjadi: presiden tetap menjabat hingga masa jabatannya habis.",
      },
      {
        type: "case",
        title: "Sejarah: Sistem Westminster Inggris dan presidensial AS 1787",
        html: "Sistem parlementer modern berakar pada <strong>model Westminster</strong> Inggris, tempat perdana menteri memimpin selama menikmati kepercayaan mayoritas House of Commons, sebuah pola yang matang selama abad ke-18 dan ke-19. Sebaliknya, para perancang Konstitusi <strong>Amerika Serikat pada 1787</strong> sengaja memisahkan presiden dari Kongres, menciptakan sistem <strong>presidensial</strong> pertama dengan pemisahan kekuasaan yang tegas. Dua warisan inilah yang menginspirasi mayoritas negara demokrasi hingga sekarang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Parlemen punya 300 kursi. Koalisi pemerintah semula 160 kursi, lalu mitra berisi 25 kursi keluar. Berapa kursi tersisa, dan apakah masih di atas mayoritas 151?",
        answer: 135,
        tolerance: 0,
        solution:
          "160 - 25 = <strong>135</strong> kursi. Karena 135 < 151, pemerintah kehilangan mayoritas dan rawan jatuh lewat mosi tidak percaya.",
        hint: "Kurangkan kursi mitra yang keluar dari kursi koalisi.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan ciri dengan sistem pemerintahannya.",
        pairs: [
          { left: "Presiden dipilih rakyat, terpisah dari parlemen", right: "Presidensial" },
          { left: "Perdana menteri jatuh lewat mosi tidak percaya", right: "Parlementer" },
          { left: "Masa jabatan eksekutif tetap dan sulit dibubarkan", right: "Presidensial" },
          { left: "Parlemen bisa dibubarkan untuk pemilu dini", right: "Parlementer" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Presidensial: eksekutif dan legislatif dipilih terpisah, masa jabatan tetap.",
          "Parlementer: eksekutif lahir dari parlemen dan bisa jatuh lewat mosi tidak percaya.",
          "Presidensial stabil masa jabatan tetapi rawan kebuntuan antarcabang.",
          "Parlementer fleksibel berganti pemerintah tetapi bisa kurang stabil.",
          "Westminster Inggris memelopori parlementer; AS 1787 memelopori presidensial.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dalam sistem parlementer, eksekutif bisa jatuh karena...",
            options: [
              "Habis masa jabatan saja",
              "Mosi tidak percaya dari parlemen",
              "Keputusan presiden",
              "Referendum wajib tahunan",
            ],
            answer: 1,
            explain: "Pemerintah parlementer bertahan selama dipercaya mayoritas parlemen.",
          },
          {
            q: "Apa ciri khas sistem presidensial?",
            options: [
              "Presiden dipilih parlemen",
              "Eksekutif dan legislatif dipilih terpisah dengan masa jabatan tetap",
              "Tidak ada parlemen",
              "Perdana menteri memimpin",
            ],
            answer: 1,
            explain: "Pemisahan pemilihan dan masa jabatan tetap adalah ciri presidensial.",
          },
          {
            q: "Negara mana yang memelopori sistem presidensial modern?",
            options: ["Inggris", "Amerika Serikat (1787)", "Prancis", "Yunani"],
            answer: 1,
            explain: "Konstitusi AS 1787 menciptakan sistem presidensial pertama dengan pemisahan kekuasaan.",
          },
          {
            q: "Model pemerintahan parlementer klasik dikenal sebagai sistem...",
            options: ["Westminster", "Federal", "Konfederasi", "Teokrasi"],
            answer: 0,
            explain: "Model Westminster Inggris menjadi rujukan sistem parlementer.",
          },
          {
            q: "Koalisi 160 kursi kehilangan mitra 25 kursi di parlemen 300 kursi (mayoritas 151). Hasilnya?",
            options: [
              "Tersisa 135 kursi, kehilangan mayoritas",
              "Tersisa 185 kursi, tetap mayoritas",
              "Tersisa 151 kursi, pas mayoritas",
              "Tidak berubah",
            ],
            answer: 0,
            explain: "160 - 25 = 135, di bawah 151, sehingga mayoritas hilang.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "demokrasi-liberal-vs-iliberal",
    levelId: "bentuk",
    order: 5,
    title: "Demokrasi Liberal vs Iliberal",
    summary:
      "Pemilu saja tidak cukup. Kenali perbedaan demokrasi liberal yang menjaga kebebasan dan demokrasi iliberal yang hanya berkedok suara.",
    durationMin: 15,
    tags: ["liberal", "iliberal", "kebebasan", "konstitusi"],
    blocks: [
      {
        type: "paragraph",
        html: "Tidak semua negara yang menggelar pemilu benar-benar demokratis. <strong>Demokrasi liberal</strong> tidak hanya mengandalkan suara mayoritas, tetapi juga menjaga <strong>kebebasan sipil</strong>, supremasi hukum, kebebasan pers, dan perlindungan minoritas. <strong>Demokrasi iliberal</strong> tetap menggelar pemilu, tetapi melemahkan pengadilan, membungkam pers, dan mengikis hak minoritas.",
      },
      {
        type: "paragraph",
        html: "Dengan kata lain, demokrasi sejati butuh dua kaki: <strong>kedaulatan rakyat</strong> (pemilu) dan <strong>pembatasan kekuasaan</strong> (konstitusi, hukum, hak asasi). Tanpa kaki kedua, mayoritas bisa berubah menjadi tirani.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Pemilu tanpa kebebasan",
        html: "Penguasa iliberal sering tetap populer dan menang pemilu, lalu memakai kemenangan itu untuk mengontrol media, pengadilan, dan lembaga pemilu. Hasilnya: pemilu masih ada, tetapi lapangan permainan tidak lagi adil.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dua kaki demokrasi",
        html: "<strong>Kedaulatan rakyat</strong>: keputusan dari suara rakyat. <strong>Konstitusionalisme</strong>: batas atas kekuasaan agar hak individu dan minoritas terlindungi. Demokrasi liberal berdiri di atas keduanya; demokrasi iliberal hanya memakai yang pertama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Bandingkan kualitas demokrasi antarnegara lewat indikator kebebasan sipil, proses pemilu, dan budaya politik. Negara iliberal sering tinggi di satu indikator tetapi sangat rendah di yang lain.",
      },
      { type: "widget", widget: "SimulatorIndeksDemokrasi" },
      {
        type: "video",
        comp: "DemokrasiVideo",
        title: "Dua Kaki Demokrasi Sejati",
        caption: "Kedaulatan rakyat lewat pemilu dan pembatasan kekuasaan lewat konstitusi harus berjalan bersama.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Liberal vs Iliberal: Profil Indikator (ilustrasi karakter)",
        unit: "skor relatif (ilustrasi)",
        source: "ilustrasi edukatif perbandingan konsep",
        note: "Keduanya menggelar pemilu, tetapi demokrasi iliberal jatuh tajam pada kebebasan pers, hukum, dan hak minoritas.",
        data: [
          { label: "Pemilu digelar (liberal)", value: 90, color: "#34d399" },
          { label: "Pemilu digelar (iliberal)", value: 75, color: "#60a5fa" },
          { label: "Kebebasan pers (liberal)", value: 88, color: "#34d399" },
          { label: "Kebebasan pers (iliberal)", value: 25, color: "#f87171" },
          { label: "Perlindungan minoritas (iliberal)", value: 20, color: "#f87171" },
        ],
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ballot_dropped_into_ballot_box_2024_Swedish_EU_election_at_St%C3%A5ngen%C3%A4sskolan%2C_Brastad.jpg?width=400",
        alt: "Surat suara dimasukkan ke dalam kotak suara saat pemungutan suara",
        caption: "Kotak suara yang sama bisa melayani demokrasi liberal maupun iliberal; yang membedakan adalah kebebasan di sekitarnya.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Studi Kasus: Saat 51% menindas 49%",
        html: "Bayangkan sebuah negeri 100.000 pemilih. Sebuah kelompok memenangkan pemilu dengan <strong>51.000 suara</strong> melawan 49.000. Atas nama mayoritas, mereka melarang bahasa kelompok minoritas dan menutup koran oposisi. Secara angka, ini kemenangan pemilu. Namun karena hak <strong>49.000</strong> warga diinjak, ini bukan demokrasi liberal, melainkan tirani mayoritas. Demokrasi liberal justru ada untuk mencegah hal ini lewat konstitusi dan hak yang tak bisa dicabut suara mayoritas.",
      },
      {
        type: "case",
        title: "Sejarah: Istilah 'demokrasi iliberal' Fareed Zakaria 1997",
        html: "Pada <strong>1997</strong>, dalam esai berjudul <em>The Rise of Illiberal Democracy</em> di jurnal Foreign Affairs, ilmuwan politik <strong>Fareed Zakaria</strong> mempopulerkan istilah <strong>demokrasi iliberal</strong>. Ia mengamati banyak negara yang rajin menggelar pemilu tetapi mengabaikan supremasi hukum, kebebasan pers, dan hak minoritas. Tesisnya: demokrasi (memilih penguasa) dan liberalisme konstitusional (membatasi penguasa) adalah dua hal berbeda, dan keduanya bisa berjalan terpisah.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 100.000 pemilih, kelompok berkuasa menang dengan 51.000 suara. Berapa banyak warga (pemilih kalah) yang haknya berisiko terabaikan jika mayoritas bertindak sewenang-wenang?",
        answer: 49000,
        tolerance: 0,
        solution:
          "100.000 - 51.000 = <strong>49.000</strong> pemilih di pihak kalah. Demokrasi liberal melindungi hak mereka lewat konstitusi, bukan menyerahkannya pada belas kasih mayoritas.",
        hint: "Kurangkan suara pemenang dari total pemilih.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri ke jenis demokrasinya.",
        buckets: ["Demokrasi liberal", "Demokrasi iliberal"],
        items: [
          { text: "Pers bebas mengkritik penguasa", bucket: "Demokrasi liberal" },
          { text: "Pengadilan independen membatasi eksekutif", bucket: "Demokrasi liberal" },
          { text: "Pemilu digelar tetapi media oposisi dibungkam", bucket: "Demokrasi iliberal" },
          { text: "Hak minoritas dicabut atas nama mayoritas", bucket: "Demokrasi iliberal" },
          { text: "Konstitusi melindungi hak yang tak bisa dihapus suara mayoritas", bucket: "Demokrasi liberal" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Pemilu saja tidak cukup; demokrasi sejati butuh kebebasan dan supremasi hukum.",
          "Demokrasi liberal menjaga pers bebas, hukum independen, dan hak minoritas.",
          "Demokrasi iliberal tetap menggelar pemilu tetapi mengikis kebebasan itu.",
          "Demokrasi berdiri di atas dua kaki: kedaulatan rakyat dan pembatasan kekuasaan.",
          "Fareed Zakaria (1997) mempopulerkan istilah demokrasi iliberal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang membedakan demokrasi liberal dari sekadar pemilu?",
            options: [
              "Tidak ada bedanya",
              "Menjaga kebebasan sipil, hukum, pers, dan hak minoritas",
              "Melarang pemilu",
              "Menyerahkan semua ke presiden",
            ],
            answer: 1,
            explain: "Demokrasi liberal menambah pembatasan kekuasaan dan perlindungan hak.",
          },
          {
            q: "Ciri demokrasi iliberal adalah...",
            options: [
              "Tidak pernah menggelar pemilu",
              "Menggelar pemilu tetapi mengikis pers, hukum, dan hak minoritas",
              "Melindungi semua minoritas",
              "Pengadilan sepenuhnya independen",
            ],
            answer: 1,
            explain: "Iliberal memakai pemilu sebagai kedok sambil melemahkan kebebasan.",
          },
          {
            q: "Apa dua 'kaki' demokrasi sejati?",
            options: [
              "Tentara dan polisi",
              "Kedaulatan rakyat dan pembatasan kekuasaan",
              "Pajak dan anggaran",
              "Raja dan parlemen",
            ],
            answer: 1,
            explain: "Pemilu (kedaulatan rakyat) plus konstitusionalisme (batas kekuasaan).",
          },
          {
            q: "Siapa yang mempopulerkan istilah 'demokrasi iliberal' pada 1997?",
            options: ["Fareed Zakaria", "Edmund Burke", "Montesquieu", "John Locke"],
            answer: 0,
            explain: "Fareed Zakaria menulisnya dalam esai The Rise of Illiberal Democracy 1997.",
          },
          {
            q: "Mengapa 'tirani mayoritas' bukan demokrasi liberal?",
            options: [
              "Karena tidak ada pemilu",
              "Karena mayoritas menginjak hak minoritas tanpa batas konstitusi",
              "Karena suaranya terlalu sedikit",
              "Karena pers terlalu bebas",
            ],
            answer: 1,
            explain: "Demokrasi liberal melindungi minoritas dari kesewenangan mayoritas.",
          },
        ],
      },
    ],
  },
];
