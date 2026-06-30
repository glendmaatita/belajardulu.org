import type { Lesson } from "../../../types";

export const level8: Lesson[] = [
  // ============================================================
  {
    id: "pemikir-demokrasi-locke",
    levelId: "pemikir",
    order: 1,
    title: "Pemikir Demokrasi: Locke & Kontrak Sosial",
    summary:
      "Gagasan yang membangun demokrasi modern: hak alamiah Locke, kontrak sosial, dan kehendak umum Rousseau.",
    durationMin: 14,
    tags: ["pemikir", "locke", "kontrak sosial", "rousseau"],
    blocks: [
      {
        type: "paragraph",
        html: "Demokrasi modern berdiri di atas gagasan para filsuf. Salah satu yang paling berpengaruh adalah <strong>John Locke</strong> (1632-1704). Ia berargumen bahwa setiap manusia punya <strong>hak alamiah</strong> atas hidup, kebebasan, dan milik, dan pemerintah hanya sah bila melindungi hak-hak itu atas <strong>persetujuan</strong> yang diperintah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kontrak sosial",
        html: "Gagasan <strong>kontrak sosial</strong>: rakyat menyerahkan sebagian kebebasan kepada pemerintah dengan imbalan perlindungan dan ketertiban. Bila pemerintah mengkhianati amanah itu, rakyat berhak menggantinya. Inilah dasar legitimasi kekuasaan dalam demokrasi.",
      },
      {
        type: "video",
        comp: "SejarahDemokrasiVideo",
        title: "Gagasan yang Membentuk Demokrasi",
        caption: "Dari hak alamiah Locke sampai kehendak umum Rousseau yang mengilhami revolusi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/John_Locke_by_John_Greenhill.jpg?width=400",
        alt: "Lukisan potret John Locke, filsuf Inggris",
        caption: "John Locke (1632-1704), penggagas hak alamiah dan persetujuan rakyat sebagai dasar pemerintahan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Garis Waktu Pemikir Demokrasi",
        unit: "tahun karya utama",
        source: "tanggal historis terverifikasi",
        note: "Gagasan demokrasi dibangun bertahap oleh banyak pemikir lintas abad.",
        data: [
          { label: "Locke", value: 1689 },
          { label: "Montesquieu", value: 1748 },
          { label: "Rousseau", value: 1762 },
          { label: "Tocqueville", value: 1835 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kehendak umum Rousseau",
        html: "<strong>Jean-Jacques Rousseau</strong> (1712-1778) menambahkan gagasan <strong>kehendak umum</strong> (<em>volonte generale</em>): keputusan sah harus mencerminkan kepentingan bersama, bukan sekadar penjumlahan keinginan pribadi. Idenya kuat tetapi juga berbahaya bila disalahgunakan: penguasa bisa mengaku mewakili 'kehendak umum' untuk menindas yang berbeda. Karena itu, gagasan Rousseau perlu diimbangi perlindungan hak individu dan pembagian kekuasaan agar tidak berubah menjadi tirani atas nama rakyat.",
      },
      {
        type: "case",
        title: "Sejarah: Locke, Two Treatises (1689), dan Revolusi Amerika",
        html: "Locke menerbitkan <em>Two Treatises of Government</em> pada <strong>1689</strong>, tak lama setelah Revolusi Agung Inggris membatasi kekuasaan raja. Gagasannya tentang hak alamiah dan persetujuan rakyat sangat memengaruhi <strong>Deklarasi Kemerdekaan Amerika 1776</strong>, yang menyatakan hak atas 'hidup, kebebasan, dan kebahagiaan'. Lewat jalur ini, pemikiran satu filsuf abad ke-17 mengalir menjadi fondasi negara demokrasi modern di seberang lautan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Locke menerbitkan Two Treatises (1689) dan Rousseau menulis The Social Contract (1762). Berapa tahun jarak keduanya?",
        answer: 73,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "1762 - 1689 = <strong>73 tahun</strong>. Selama itu, gagasan kontrak sosial terus berkembang dari Locke ke Rousseau dengan penekanan berbeda.",
        hint: "Kurangkan tahun karya Locke dari tahun karya Rousseau.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan pemikir dengan gagasan kuncinya.",
        pairs: [
          { left: "John Locke", right: "Hak alamiah & persetujuan rakyat" },
          { left: "Montesquieu", right: "Pembagian kekuasaan (trias politica)" },
          { left: "Rousseau", right: "Kehendak umum (volonte generale)" },
          { left: "Tocqueville", right: "Pengamatan tentang demokrasi Amerika" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Locke: manusia punya hak alamiah, dan pemerintah sah hanya atas persetujuan rakyat.",
          "Kontrak sosial: rakyat menyerahkan sebagian kebebasan demi perlindungan dan ketertiban.",
          "Bila pemerintah mengkhianati amanah, rakyat berhak menggantinya.",
          "Rousseau menambahkan kehendak umum, yang perlu diimbangi perlindungan hak individu.",
          "Gagasan Locke (1689) mengilhami Deklarasi Kemerdekaan Amerika 1776.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa gagasan inti John Locke?",
            options: [
              "Raja berkuasa mutlak",
              "Manusia punya hak alamiah dan pemerintah butuh persetujuan rakyat",
              "Kekuasaan tak boleh dibatasi",
              "Rakyat tidak boleh memilih",
            ],
            answer: 1,
            explain: "Locke menekankan hak alamiah dan legitimasi dari persetujuan yang diperintah.",
          },
          {
            q: "Apa itu kontrak sosial?",
            options: [
              "Perjanjian dagang antarnegara",
              "Rakyat menyerahkan sebagian kebebasan demi perlindungan dan ketertiban",
              "Kontrak kerja buruh",
              "Perjanjian sewa tanah",
            ],
            answer: 1,
            explain: "Kontrak sosial adalah dasar tukar-menukar kebebasan dengan perlindungan.",
          },
          {
            q: "Apa gagasan Rousseau yang bisa berbahaya bila disalahgunakan?",
            options: [
              "Hak milik",
              "Kehendak umum yang bisa dipakai menindas yang berbeda",
              "Pembagian kekuasaan",
              "Hak pilih perempuan",
            ],
            answer: 1,
            explain: "Klaim mewakili 'kehendak umum' bisa disalahgunakan untuk menindas minoritas.",
          },
          {
            q: "Karya Locke 1689 paling memengaruhi dokumen mana?",
            options: [
              "Magna Carta 1215",
              "Deklarasi Kemerdekaan Amerika 1776",
              "UUD 1945",
              "Manifesto Komunis 1848",
            ],
            answer: 1,
            explain: "Gagasan hak alamiah Locke mengalir ke Deklarasi Kemerdekaan Amerika 1776.",
          },
          {
            q: "Jarak antara karya Locke (1689) dan Rousseau (1762)?",
            options: ["63 tahun", "73 tahun", "83 tahun", "53 tahun"],
            answer: 1,
            explain: "1762 dikurangi 1689 sama dengan 73 tahun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pemikir-plato-aristoteles",
    levelId: "pemikir",
    order: 2,
    title: "Plato & Aristoteles tentang Pemerintahan",
    summary:
      "Dua filsuf Yunani kuno: Plato yang skeptis pada demokrasi dan Aristoteles yang mengklasifikasikan bentuk-bentuk pemerintahan.",
    durationMin: 14,
    tags: ["pemikir", "plato", "aristoteles", "yunani kuno"],
    blocks: [
      {
        type: "paragraph",
        html: "Jauh sebelum demokrasi modern lahir, dua filsuf Yunani sudah memikirkan cara terbaik memerintah negara. <strong>Plato</strong> (sekitar 427-347 SM) dan muridnya <strong>Aristoteles</strong> (384-322 SM) hidup di Athena, kota yang justru mempraktikkan demokrasi langsung. Menariknya, keduanya punya pandangan kritis terhadap demokrasi.",
      },
      {
        type: "paragraph",
        html: "Dalam karyanya <em>Republic</em> (sekitar <strong>375 SM</strong>), Plato skeptis pada demokrasi. Ia khawatir rakyat yang tidak terdidik mudah dihasut, dan demokrasi bisa merosot menjadi <strong>tirani mayoritas</strong>. Ia mengusulkan negara dipimpin oleh 'raja filsuf' yang bijak. Aristoteles dalam <em>Politics</em> (sekitar <strong>350 SM</strong>) lebih sistematis: ia mengklasifikasikan pemerintahan dan menilai mana yang sehat dan mana yang rusak.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Klasifikasi Aristoteles",
        html: "Aristoteles membagi pemerintahan berdasarkan dua hal: <strong>jumlah penguasa</strong> (satu, sedikit, banyak) dan <strong>untuk siapa</strong> mereka memerintah (kepentingan umum atau kepentingan pribadi). Dari sini lahir enam bentuk: monarki dan tirani (satu orang), aristokrasi dan oligarki (sedikit orang), serta polity dan demokrasi (banyak orang).",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Takut tirani mayoritas",
        html: "Kekhawatiran Plato tetap relevan: bila mayoritas memilih tanpa nalar dan tanpa menghormati hak minoritas, demokrasi bisa berubah menjadi penindasan atas nama suara terbanyak. Itulah sebabnya demokrasi modern dilengkapi konstitusi dan perlindungan hak asasi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Guru dan murid",
        html: "Aristoteles adalah murid Plato, dan Plato adalah murid Socrates. Tiga generasi pemikir ini meletakkan dasar filsafat politik Barat yang masih dipelajari sampai hari ini.",
      },
      {
        type: "video",
        comp: "GarisWaktuFilsafat",
        title: "Garis Waktu Pemikiran Politik",
        caption: "Dari Socrates ke Plato ke Aristoteles, gagasan tentang negara berkembang turun-temurun.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Plato_bust_National_Glyptotheque_Athens_Greece_02.jpg?width=400",
        alt: "Patung dada Plato, filsuf Yunani kuno",
        caption: "Plato (sekitar 427-347 SM), penulis Republic yang skeptis pada demokrasi tanpa rakyat terdidik.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tahun Lahir Tiga Filsuf Yunani",
        unit: "tahun (SM)",
        source: "tanggal historis terverifikasi",
        note: "Angka SM membesar berarti lebih kuno: Socrates guru Plato, Plato guru Aristoteles.",
        data: [
          { label: "Socrates", value: 470 },
          { label: "Plato", value: 427 },
          { label: "Aristoteles", value: 384 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Enam bentuk pemerintahan Aristoteles",
        html: "Bayangkan satu negara. Bila dipimpin <strong>satu orang</strong> demi kepentingan umum, itu <strong>monarki</strong>; bila demi diri sendiri, itu <strong>tirani</strong>. Bila dipimpin <strong>sedikit orang</strong> terbaik, itu <strong>aristokrasi</strong>; bila sedikit orang kaya yang rakus, itu <strong>oligarki</strong>. Bila dipimpin <strong>banyak orang</strong> demi kepentingan umum, Aristoteles menyebutnya <strong>polity</strong>; bila banyak orang yang hanya mengejar kepentingan kelompoknya, itu <strong>demokrasi</strong> versi rusak. Jadi ada 3 pasang, total 6 bentuk.",
      },
      {
        type: "case",
        title: "Sejarah: Hukuman mati Socrates, 399 SM",
        html: "Pada <strong>399 SM</strong>, pengadilan rakyat Athena yang demokratis menjatuhkan hukuman mati kepada <strong>Socrates</strong>, guru Plato, dengan tuduhan merusak pikiran kaum muda. Peristiwa ini sangat memengaruhi Plato: ia melihat sendiri bagaimana mayoritas yang marah bisa menghukum orang bijak. Trauma inilah salah satu alasan Plato menulis Republic dan meragukan demokrasi tanpa nalar dan keadilan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Plato menulis Republic sekitar 375 SM dan Aristoteles menulis Politics sekitar 350 SM. Berapa tahun selisih kedua karya itu?",
        answer: 25,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "375 SM dikurangi 350 SM sama dengan <strong>25 tahun</strong>. Republic lebih tua daripada Politics karena Plato adalah guru Aristoteles.",
        hint: "Karena keduanya tahun SM, kurangkan angka yang lebih besar dengan yang lebih kecil.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan bentuk pemerintahan menurut Aristoteles: sehat (demi kepentingan umum) atau rusak (demi kepentingan pribadi).",
        buckets: ["Bentuk sehat", "Bentuk rusak"],
        items: [
          { text: "Monarki", bucket: "Bentuk sehat" },
          { text: "Aristokrasi", bucket: "Bentuk sehat" },
          { text: "Polity", bucket: "Bentuk sehat" },
          { text: "Tirani", bucket: "Bentuk rusak" },
          { text: "Oligarki", bucket: "Bentuk rusak" },
          { text: "Demokrasi (versi rusak Aristoteles)", bucket: "Bentuk rusak" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Plato (Republic, ~375 SM) skeptis pada demokrasi dan takut tirani mayoritas.",
          "Plato mengusulkan 'raja filsuf' yang bijak untuk memimpin negara.",
          "Aristoteles (Politics, ~350 SM) mengklasifikasikan 6 bentuk pemerintahan.",
          "Klasifikasi memakai dua sumbu: jumlah penguasa dan untuk kepentingan siapa.",
          "Kekhawatiran Plato kini dijawab demokrasi modern lewat konstitusi dan hak asasi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa Plato skeptis pada demokrasi?",
            options: [
              "Karena terlalu mahal",
              "Karena takut rakyat mudah dihasut dan demokrasi merosot jadi tirani mayoritas",
              "Karena raja lebih murah",
              "Karena tidak ada pemilu",
            ],
            answer: 1,
            explain: "Plato khawatir rakyat tanpa nalar mudah dihasut sehingga lahir tirani mayoritas.",
          },
          {
            q: "Apa judul karya utama Plato tentang negara ideal?",
            options: ["Politics", "Republic", "The Prince", "Leviathan"],
            answer: 1,
            explain: "Plato menulis Republic sekitar 375 SM; Politics ditulis Aristoteles.",
          },
          {
            q: "Dua sumbu klasifikasi pemerintahan Aristoteles adalah?",
            options: [
              "Kaya dan miskin",
              "Jumlah penguasa dan untuk kepentingan siapa mereka memerintah",
              "Kota dan desa",
              "Perang dan damai",
            ],
            answer: 1,
            explain: "Aristoteles memakai jumlah penguasa serta tujuan pemerintahan (umum atau pribadi).",
          },
          {
            q: "Bentuk rusak dari pemerintahan oleh sedikit orang menurut Aristoteles disebut?",
            options: ["Aristokrasi", "Oligarki", "Monarki", "Polity"],
            answer: 1,
            explain: "Aristokrasi adalah versi sehat; oligarki adalah versi rusak pemerintahan sedikit orang.",
          },
          {
            q: "Peristiwa 399 SM yang memengaruhi pandangan Plato adalah?",
            options: [
              "Perang Troya",
              "Hukuman mati Socrates oleh pengadilan rakyat Athena",
              "Pendirian Roma",
              "Penemuan demokrasi",
            ],
            answer: 1,
            explain: "Athena yang demokratis menghukum mati Socrates pada 399 SM, membuat Plato meragukan demokrasi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pemikir-montesquieu",
    levelId: "pemikir",
    order: 3,
    title: "Montesquieu & Pembagian Kekuasaan",
    summary:
      "Trias politica: gagasan Montesquieu memisahkan kekuasaan menjadi legislatif, eksekutif, dan yudikatif agar tidak ada penguasa mutlak.",
    durationMin: 14,
    tags: ["pemikir", "montesquieu", "trias politica", "pembagian kekuasaan"],
    blocks: [
      {
        type: "paragraph",
        html: "Bagaimana mencegah satu orang atau satu lembaga menjadi terlalu berkuasa? Jawaban paling berpengaruh datang dari filsuf Prancis <strong>Charles de Montesquieu</strong> (1689-1755). Dalam karyanya <em>The Spirit of the Laws</em> (<strong>1748</strong>), ia mengusulkan kekuasaan negara dibagi agar saling mengawasi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Trias politica",
        html: "Montesquieu membagi kekuasaan menjadi <strong>tiga cabang</strong>: <strong>legislatif</strong> (membuat undang-undang), <strong>eksekutif</strong> (menjalankan undang-undang), dan <strong>yudikatif</strong> (mengadili pelanggaran). Bila ketiganya terpisah, masing-masing bisa saling mengawasi dan mengimbangi (<em>checks and balances</em>).",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bahaya kekuasaan menumpuk",
        html: "Menurut Montesquieu, bila legislatif dan eksekutif berada di tangan yang sama, kebebasan hilang karena penguasa bisa membuat aturan zalim lalu menjalankannya sendiri tanpa hambatan. Pemisahan kekuasaan adalah penjaga kebebasan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Gunakan simulator di bawah untuk melihat apa yang terjadi pada keseimbangan kekuasaan ketika satu cabang menjadi terlalu kuat.",
      },
      {
        type: "video",
        comp: "TriasPoliticaVideo",
        title: "Tiga Cabang Kekuasaan",
        caption: "Bagaimana legislatif, eksekutif, dan yudikatif saling mengawasi.",
      },
      {
        type: "widget",
        widget: "SimulatorTriasPolitica",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Montesquieu_-_Versailles_MV_2976.png?width=400",
        alt: "Lukisan potret Montesquieu, filsuf Prancis",
        caption: "Montesquieu (1689-1755), penggagas pembagian kekuasaan dalam The Spirit of the Laws (1748).",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Penyebaran Gagasan Pembagian Kekuasaan",
        unit: "tahun",
        source: "tanggal historis terverifikasi",
        note: "Dari buku Montesquieu, gagasan trias politica menyebar ke konstitusi banyak negara.",
        data: [
          { label: "The Spirit of the Laws", value: 1748 },
          { label: "Konstitusi AS", value: 1787 },
          { label: "Konstitusi Prancis", value: 1791 },
          { label: "UUD 1945 Indonesia", value: 1945 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Trias politica di Indonesia",
        html: "Indonesia menerapkan pemisahan kekuasaan: <strong>DPR</strong> bersama pemerintah membentuk undang-undang (legislatif), <strong>Presiden</strong> menjalankan pemerintahan (eksekutif), dan <strong>Mahkamah Agung serta Mahkamah Konstitusi</strong> menegakkan hukum (yudikatif). Mahkamah Konstitusi bahkan bisa membatalkan undang-undang yang bertentangan dengan UUD, contoh nyata mekanisme saling mengawasi yang dibayangkan Montesquieu.",
      },
      {
        type: "case",
        title: "Sejarah: Konstitusi Amerika Serikat, 1787",
        html: "Para perancang <strong>Konstitusi Amerika Serikat</strong> pada <strong>1787</strong>, terutama James Madison, secara terbuka mengambil gagasan Montesquieu. Mereka merancang tiga cabang yang terpisah: Kongres (legislatif), Presiden (eksekutif), dan Mahkamah Agung (yudikatif), lengkap dengan mekanisme checks and balances. Inilah penerapan praktis pertama yang besar dari trias politica, hanya 39 tahun setelah bukunya terbit.",
      },
      {
        type: "calcExercise",
        prompt:
          "The Spirit of the Laws terbit 1748 dan Konstitusi Amerika Serikat disahkan 1787. Berapa tahun jaraknya?",
        answer: 39,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "1787 - 1748 = <strong>39 tahun</strong>. Gagasan Montesquieu cukup cepat diadopsi menjadi konstitusi nyata.",
        hint: "Kurangkan tahun terbit buku dari tahun pengesahan konstitusi.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan cabang kekuasaan dengan tugas dan lembaganya di Indonesia.",
        pairs: [
          { left: "Legislatif", right: "Membuat undang-undang (DPR)" },
          { left: "Eksekutif", right: "Menjalankan pemerintahan (Presiden)" },
          { left: "Yudikatif", right: "Mengadili dan menegakkan hukum (Mahkamah Agung)" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Montesquieu menulis The Spirit of the Laws (1748) tentang pembagian kekuasaan.",
          "Trias politica membagi kekuasaan menjadi legislatif, eksekutif, dan yudikatif.",
          "Tujuannya: tiga cabang saling mengawasi dan mengimbangi (checks and balances).",
          "Bila kekuasaan menumpuk di satu tangan, kebebasan rakyat terancam.",
          "Konstitusi AS 1787 adalah penerapan besar pertama gagasan ini.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa karya utama Montesquieu tentang pembagian kekuasaan?",
            options: [
              "The Social Contract",
              "The Spirit of the Laws",
              "Republic",
              "Democracy in America",
            ],
            answer: 1,
            explain: "Montesquieu menulis The Spirit of the Laws pada 1748.",
          },
          {
            q: "Tiga cabang kekuasaan dalam trias politica adalah?",
            options: [
              "Raja, bangsawan, rakyat",
              "Legislatif, eksekutif, yudikatif",
              "Pusat, daerah, desa",
              "Polisi, tentara, jaksa",
            ],
            answer: 1,
            explain: "Trias politica memisahkan legislatif, eksekutif, dan yudikatif.",
          },
          {
            q: "Apa tujuan utama pemisahan kekuasaan?",
            options: [
              "Mempercepat keputusan",
              "Agar cabang-cabang saling mengawasi sehingga tidak ada penguasa mutlak",
              "Menghemat anggaran",
              "Memperbanyak pejabat",
            ],
            answer: 1,
            explain: "Pemisahan kekuasaan menciptakan checks and balances yang menjaga kebebasan.",
          },
          {
            q: "Di Indonesia, lembaga yang menjalankan fungsi eksekutif adalah?",
            options: ["DPR", "Presiden", "Mahkamah Agung", "Mahkamah Konstitusi"],
            answer: 1,
            explain: "Presiden memimpin kekuasaan eksekutif, yaitu menjalankan pemerintahan.",
          },
          {
            q: "Konstitusi negara mana yang menjadi penerapan besar pertama trias politica pada 1787?",
            options: ["Prancis", "Amerika Serikat", "Inggris", "Indonesia"],
            answer: 1,
            explain: "Konstitusi Amerika Serikat 1787 mengadopsi gagasan Montesquieu secara nyata.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pemikir-rousseau",
    levelId: "pemikir",
    order: 4,
    title: "Rousseau & Kehendak Umum",
    summary:
      "The Social Contract (1762): gagasan kehendak umum, kedaulatan rakyat, dan akar demokrasi langsung.",
    durationMin: 14,
    tags: ["pemikir", "rousseau", "kehendak umum", "kontrak sosial"],
    blocks: [
      {
        type: "paragraph",
        html: "Filsuf Prancis-Swiss <strong>Jean-Jacques Rousseau</strong> (1712-1778) membuka karyanya <em>The Social Contract</em> (<strong>1762</strong>) dengan kalimat terkenal: 'Manusia terlahir merdeka, tetapi di mana-mana ia terbelenggu.' Ia bertanya bagaimana orang bisa hidup bersama dalam masyarakat tanpa kehilangan kebebasannya.",
      },
      {
        type: "paragraph",
        html: "Jawabannya adalah <strong>kehendak umum</strong> (<em>volonte generale</em>). Rakyat sebagai keseluruhan adalah pemegang kedaulatan, dan hukum yang sah adalah ungkapan kehendak umum demi kebaikan bersama. Bagi Rousseau, mematuhi hukum yang kita buat sendiri bersama-sama justru adalah bentuk kebebasan, bukan belenggu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kehendak umum bukan kehendak semua",
        html: "Rousseau membedakan <strong>kehendak umum</strong> (apa yang baik untuk kepentingan bersama) dari <strong>kehendak semua</strong> (sekadar penjumlahan keinginan pribadi setiap orang). Demokrasi sehat mencari kepentingan bersama, bukan hanya menjumlahkan ego masing-masing.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Akar demokrasi langsung",
        html: "Rousseau lebih menyukai <strong>demokrasi langsung</strong>, tempat rakyat sendiri memutuskan, bukan lewat wakil. Gagasan ini menginspirasi praktik referendum modern, terutama di Swiss, tanah airnya.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Sisi gelap kehendak umum",
        html: "Klaim mewakili 'kehendak umum' bisa disalahgunakan. Penguasa otoriter dapat mengaku berbicara atas nama rakyat untuk menindas yang berbeda pendapat. Karena itu kehendak umum harus selalu diimbangi perlindungan hak individu dan pembagian kekuasaan.",
      },
      {
        type: "video",
        comp: "EvolusiPemikiran",
        title: "Evolusi Gagasan Kedaulatan Rakyat",
        caption: "Bagaimana kehendak umum Rousseau mengubah cara orang memahami kekuasaan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jean-Jacques_Rousseau_%28painted_portrait%29.jpg?width=400",
        alt: "Lukisan potret Jean-Jacques Rousseau",
        caption: "Jean-Jacques Rousseau (1712-1778), penggagas kehendak umum dan kedaulatan rakyat.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Jumlah Referendum Nasional (sejak 1848)",
        unit: "kira-kira jumlah pemungutan suara",
        source: "ilustrasi berdasarkan catatan sejarah referendum",
        note: "Swiss, tanah air Rousseau, jauh paling sering memakai demokrasi langsung lewat referendum.",
        data: [
          { label: "Swiss", value: 600 },
          { label: "Italia", value: 72 },
          { label: "Irlandia", value: 40 },
          { label: "Australia", value: 44 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Referendum di Swiss",
        html: "Swiss menjalankan demokrasi langsung paling intensif di dunia. Warga negara dipanggil ke kotak suara beberapa kali setahun untuk memutuskan banyak hal, mulai dari pajak hingga kebijakan lingkungan. Sejak 1848, Swiss telah menggelar ratusan referendum tingkat nasional. Inilah perwujudan paling dekat dari cita-cita Rousseau: rakyat memutuskan sendiri, bukan hanya lewat wakil.",
      },
      {
        type: "case",
        title: "Sejarah: The Social Contract dan Revolusi Prancis 1789",
        html: "Pada <strong>1789</strong>, Revolusi Prancis meletus dengan semboyan kedaulatan rakyat yang banyak terinspirasi gagasan Rousseau, 27 tahun setelah The Social Contract terbit (1762). <strong>Deklarasi Hak Asasi Manusia dan Warga Negara</strong> tahun 1789 menyatakan bahwa kedaulatan berada di tangan bangsa. Namun fase Teror (1793-1794) juga menunjukkan sisi gelapnya: atas nama 'kehendak rakyat', ribuan orang dihukum mati tanpa proses adil.",
      },
      {
        type: "calcExercise",
        prompt:
          "The Social Contract terbit 1762 dan Revolusi Prancis meletus 1789. Berapa tahun jaraknya?",
        answer: 27,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "1789 - 1762 = <strong>27 tahun</strong>. Gagasan Rousseau ikut menyalakan semangat Revolusi Prancis.",
        hint: "Kurangkan tahun terbit buku dari tahun revolusi.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pernyataan: termasuk 'kehendak umum' (demi kebaikan bersama) atau 'kehendak semua' (sekadar penjumlahan keinginan pribadi).",
        buckets: ["Kehendak umum", "Kehendak semua"],
        items: [
          { text: "Memutuskan udara bersih untuk seluruh warga", bucket: "Kehendak umum" },
          { text: "Menjaga keselamatan jalan bagi semua orang", bucket: "Kehendak umum" },
          { text: "Setiap orang ingin pajaknya sendiri nol", bucket: "Kehendak semua" },
          { text: "Masing-masing menuntut keuntungan pribadi tanpa peduli yang lain", bucket: "Kehendak semua" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Rousseau menulis The Social Contract (1762) tentang kedaulatan rakyat.",
          "Kehendak umum adalah kepentingan bersama, berbeda dari sekadar menjumlahkan keinginan pribadi.",
          "Mematuhi hukum yang dibuat bersama dipandang Rousseau sebagai bentuk kebebasan.",
          "Gagasannya menjadi akar demokrasi langsung, seperti referendum di Swiss.",
          "Kehendak umum bisa disalahgunakan, maka perlu perlindungan hak individu.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa karya utama Rousseau tentang kedaulatan rakyat?",
            options: [
              "The Spirit of the Laws",
              "The Social Contract",
              "Politics",
              "Polyarchy",
            ],
            answer: 1,
            explain: "Rousseau menulis The Social Contract pada 1762.",
          },
          {
            q: "Apa yang dimaksud kehendak umum (volonte generale)?",
            options: [
              "Keinginan raja",
              "Apa yang baik untuk kepentingan bersama",
              "Suara mayoritas pengusaha",
              "Penjumlahan keinginan pribadi setiap orang",
            ],
            answer: 1,
            explain: "Kehendak umum mengarah pada kebaikan bersama, bukan sekadar penjumlahan keinginan.",
          },
          {
            q: "Bentuk demokrasi yang lebih disukai Rousseau adalah?",
            options: [
              "Demokrasi perwakilan",
              "Demokrasi langsung",
              "Monarki",
              "Oligarki",
            ],
            answer: 1,
            explain: "Rousseau menyukai demokrasi langsung, tempat rakyat memutuskan sendiri.",
          },
          {
            q: "Negara yang paling intensif mempraktikkan referendum nasional adalah?",
            options: ["Amerika Serikat", "Swiss", "Inggris", "Jepang"],
            answer: 1,
            explain: "Swiss, tanah air Rousseau, paling sering menggelar referendum sejak 1848.",
          },
          {
            q: "Mengapa gagasan kehendak umum bisa berbahaya?",
            options: [
              "Karena terlalu mahal dijalankan",
              "Karena bisa disalahgunakan penguasa untuk menindas yang berbeda atas nama rakyat",
              "Karena melarang pemilu",
              "Karena hanya berlaku di Swiss",
            ],
            answer: 1,
            explain: "Klaim mewakili kehendak umum dapat dipakai menindas minoritas, seperti pada fase Teror 1793-1794.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pemikir-tocqueville",
    levelId: "pemikir",
    order: 5,
    title: "Tocqueville: Demokrasi di Amerika",
    summary:
      "Democracy in America (1835-1840): pengamatan Tocqueville tentang kesetaraan, asosiasi warga, dan bahaya tirani mayoritas.",
    durationMin: 14,
    tags: ["pemikir", "tocqueville", "demokrasi amerika", "masyarakat sipil"],
    blocks: [
      {
        type: "paragraph",
        html: "Pada 1831, seorang bangsawan muda Prancis bernama <strong>Alexis de Tocqueville</strong> (1805-1859) berlayar ke Amerika Serikat untuk mempelajari sistem penjaranya. Yang ia bawa pulang jauh lebih besar: sebuah analisis mendalam tentang bagaimana demokrasi bekerja dalam masyarakat nyata.",
      },
      {
        type: "paragraph",
        html: "Hasilnya adalah <em>Democracy in America</em>, terbit dalam dua jilid pada <strong>1835</strong> dan <strong>1840</strong>. Tocqueville melihat bahwa kekuatan demokrasi Amerika bukan sekadar pemilu, melainkan <strong>kesetaraan kondisi</strong> dan kebiasaan warga membentuk <strong>asosiasi</strong> atau perkumpulan untuk mengurus urusan bersama tanpa menunggu negara.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Seni berserikat",
        html: "Tocqueville terkesan bahwa warga Amerika gemar membentuk perkumpulan: dari gereja, koran, sekolah, sampai kelompok amal. Menurutnya, <strong>asosiasi sukarela</strong> inilah sekolah demokrasi: tempat orang belajar bekerja sama, berdebat, dan memimpin. Masyarakat sipil yang kuat menjaga demokrasi tetap hidup.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Tirani mayoritas",
        html: "Tocqueville juga memperingatkan bahaya <strong>tirani mayoritas</strong>: ketika opini mayoritas menjadi begitu kuat sehingga menekan suara minoritas dan kebebasan berpikir. Demokrasi yang sehat butuh keberanian melindungi yang berbeda, bukan hanya tunduk pada suara terbanyak.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Ukur kualitas sebuah demokrasi dengan simulator indeks demokrasi di bawah, lalu pikirkan unsur mana yang paling Tocqueville hargai.",
      },
      {
        type: "widget",
        widget: "SimulatorIndeksDemokrasi",
      },
      {
        type: "video",
        comp: "SejarahDemokrasiVideo",
        title: "Demokrasi yang Diamati Langsung",
        caption: "Perjalanan gagasan demokrasi yang Tocqueville saksikan sendiri di tengah masyarakat Amerika.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Alexis_de_tocqueville.jpg?width=400",
        alt: "Lukisan potret Alexis de Tocqueville",
        caption: "Alexis de Tocqueville (1805-1859), penulis Democracy in America (1835-1840).",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Perjalanan Karya Democracy in America",
        unit: "tahun",
        source: "tanggal historis terverifikasi",
        note: "Dari kunjungan 1831 hingga jilid kedua 1840, Tocqueville butuh hampir satu dekade.",
        data: [
          { label: "Kunjungan ke AS", value: 1831 },
          { label: "Jilid 1 terbit", value: 1835 },
          { label: "Jilid 2 terbit", value: 1840 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Asosiasi sebagai sekolah demokrasi",
        html: "Bayangkan sebuah desa di Indonesia dengan kelompok arisan, karang taruna, kelompok tani, dan pengurus masjid atau gereja. Saat warga rapat menentukan iuran, memilih ketua, dan menyelesaikan perselisihan, mereka sebenarnya sedang berlatih demokrasi setiap hari. Inilah yang Tocqueville maksud: kebiasaan berserikat dan bermusyawarah membuat warga terbiasa mengelola kepentingan bersama, jauh sebelum mereka mencoblos di pemilu nasional.",
      },
      {
        type: "case",
        title: "Sejarah: Penghapusan perbudakan yang Tocqueville sorot",
        html: "Meski memuji demokrasi Amerika, Tocqueville pada <strong>1835</strong> dengan tajam menyorot satu kontradiksi besar: <strong>perbudakan</strong> dan perlakuan terhadap penduduk asli. Ia meramalkan masalah ras akan menjadi ujian terberat bagi demokrasi Amerika. Ramalan itu terbukti: <strong>Perang Saudara Amerika (1861-1865)</strong> meletus soal perbudakan, dan perbudakan baru benar-benar dihapus lewat Amendemen ke-13 pada 1865.",
      },
      {
        type: "calcExercise",
        prompt:
          "Tocqueville mengunjungi Amerika pada 1831 dan menerbitkan jilid kedua Democracy in America pada 1840. Berapa tahun rentang antara keduanya?",
        answer: 9,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "1840 - 1831 = <strong>9 tahun</strong>. Karya besar ini lahir dari pengamatan yang diolah hampir satu dekade.",
        hint: "Kurangkan tahun kunjungan dari tahun terbit jilid kedua.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan gagasan Tocqueville dengan penjelasannya.",
        pairs: [
          { left: "Kesetaraan kondisi", right: "Ciri utama masyarakat demokratis Amerika" },
          { left: "Asosiasi sukarela", right: "Sekolah demokrasi tempat warga berlatih kerja sama" },
          { left: "Tirani mayoritas", right: "Bahaya saat opini mayoritas menekan minoritas" },
          { left: "Democracy in America", right: "Karya hasil pengamatan langsung di Amerika" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Tocqueville menulis Democracy in America (jilid 1835 dan 1840) dari pengamatan langsung.",
          "Kekuatan demokrasi Amerika ada pada kesetaraan kondisi dan kebiasaan berserikat.",
          "Asosiasi sukarela adalah sekolah demokrasi tempat warga belajar bekerja sama.",
          "Ia memperingatkan bahaya tirani mayoritas terhadap minoritas.",
          "Ia menyorot perbudakan sebagai ujian terberat demokrasi Amerika, terbukti pada Perang Saudara.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan awal Tocqueville berlayar ke Amerika pada 1831?",
            options: [
              "Berdagang kapas",
              "Mempelajari sistem penjara Amerika",
              "Mencari emas",
              "Menjadi presiden",
            ],
            answer: 1,
            explain: "Ia datang untuk mempelajari sistem penjara, lalu menulis tentang demokrasi.",
          },
          {
            q: "Menurut Tocqueville, apa 'sekolah demokrasi' bagi warga?",
            options: [
              "Tentara",
              "Asosiasi atau perkumpulan sukarela",
              "Istana raja",
              "Bank",
            ],
            answer: 1,
            explain: "Asosiasi sukarela melatih warga bekerja sama dan mengurus kepentingan bersama.",
          },
          {
            q: "Bahaya apa yang diperingatkan Tocqueville dalam demokrasi?",
            options: [
              "Inflasi",
              "Tirani mayoritas yang menekan minoritas",
              "Kekurangan tentara",
              "Terlalu sedikit pajak",
            ],
            answer: 1,
            explain: "Tocqueville khawatir opini mayoritas bisa menindas suara minoritas.",
          },
          {
            q: "Dalam berapa jilid Democracy in America terbit?",
            options: ["Satu jilid", "Dua jilid (1835 dan 1840)", "Tiga jilid", "Lima jilid"],
            answer: 1,
            explain: "Karya itu terbit dalam dua jilid, pada 1835 dan 1840.",
          },
          {
            q: "Kontradiksi besar yang disorot Tocqueville pada demokrasi Amerika adalah?",
            options: [
              "Pajak tinggi",
              "Perbudakan dan perlakuan terhadap penduduk asli",
              "Kurangnya jalan",
              "Tidak ada koran",
            ],
            answer: 1,
            explain: "Ia menyorot perbudakan, yang kelak memicu Perang Saudara 1861-1865.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pemikir-robert-dahl",
    levelId: "pemikir",
    order: 6,
    title: "Robert Dahl & Poliarki",
    summary:
      "Polyarchy (1971): Robert Dahl menawarkan ukuran nyata demokrasi lewat dua dimensi, kompetisi dan partisipasi.",
    durationMin: 13,
    tags: ["pemikir", "robert dahl", "poliarki", "indeks demokrasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Bila para filsuf terdahulu berbicara tentang demokrasi ideal, ilmuwan politik Amerika <strong>Robert Dahl</strong> (1915-2014) bertanya hal yang lebih membumi: bagaimana mengukur demokrasi yang nyata? Dalam bukunya <em>Polyarchy</em> (<strong>1971</strong>), ia berpendapat tidak ada negara yang benar-benar 'demokrasi sempurna'. Yang ada adalah <strong>poliarki</strong>, yaitu sistem yang mendekati cita-cita demokrasi dalam derajat tertentu.",
      },
      {
        type: "paragraph",
        html: "Dahl menilai sebuah sistem dari <strong>dua dimensi</strong>: <strong>kontestasi</strong> (seberapa bebas warga bersaing dan beroposisi) dan <strong>partisipasi</strong> (seberapa luas warga boleh ikut serta). Semakin tinggi keduanya, semakin dekat sebuah negara ke poliarki yang utuh.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Demokrasi sebagai derajat, bukan saklar",
        html: "Gagasan besar Dahl: demokrasi bukan tombol on atau off, melainkan <strong>skala bertingkat</strong>. Negara bisa lebih demokratis atau kurang demokratis. Cara berpikir ini melahirkan berbagai <strong>indeks demokrasi</strong> modern yang memberi skor pada tiap negara.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Syarat-syarat poliarki",
        html: "Dahl menyebut sejumlah syarat kelembagaan, antara lain: pejabat dipilih lewat pemilu, pemilu yang bebas dan adil, hak memilih dan dipilih yang luas, kebebasan berekspresi, akses ke sumber informasi alternatif, dan kebebasan berserikat. Bila syarat-syarat ini terpenuhi, sebuah negara layak disebut poliarki.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser komponen-komponen di simulator indeks demokrasi di bawah dan lihat bagaimana skor berubah. Itulah cara berpikir Dahl: demokrasi diukur dalam derajat.",
      },
      {
        type: "video",
        comp: "EvolusiPemikiran",
        title: "Dari Demokrasi Ideal ke Ukuran Nyata",
        caption: "Bagaimana pemikiran tentang demokrasi berkembang sampai bisa diukur dengan indeks.",
      },
      {
        type: "widget",
        widget: "SimulatorIndeksDemokrasi",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Inside_the_D%C3%A1il_-_The_Irish_Parliament_Chamber.jpg?width=400",
        alt: "Ruang sidang parlemen tempat wakil rakyat bersidang",
        caption: "Pemilu yang bebas dan partisipasi yang luas adalah dua dimensi yang dinilai Dahl untuk mengukur poliarki.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Indeks Demokrasi Beberapa Negara",
        unit: "skor 0-10",
        source: "ilustrasi mengacu Economist Intelligence Unit, Indeks Demokrasi 2023",
        note: "Cara berpikir Dahl terlihat di sini: demokrasi diberi skor bertingkat, bukan ya atau tidak.",
        data: [
          { label: "Norwegia", value: 9.81 },
          { label: "Swedia", value: 9.39 },
          { label: "Amerika Serikat", value: 7.85 },
          { label: "Indonesia", value: 6.53 },
          { label: "Rusia", value: 2.22 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membaca skor sebuah negara",
        html: "Indonesia memperoleh skor sekitar <strong>6,53</strong> pada Indeks Demokrasi 2023, masuk kategori 'demokrasi cacat' (<em>flawed democracy</em>): pemilu bebas dan partisipasi luas, tetapi masih ada kelemahan pada kebebasan sipil atau budaya politik. Dengan kacamata Dahl, Indonesia adalah poliarki yang nyata, namun belum mencapai derajat tertinggi. Memperbaiki satu dimensi, misalnya kebebasan pers, bisa menaikkan skor itu.",
      },
      {
        type: "case",
        title: "Sejarah: Gelombang demokratisasi pasca-1971",
        html: "Buku <strong>Polyarchy</strong> terbit pada <strong>1971</strong>, tepat sebelum apa yang disebut Samuel Huntington sebagai 'gelombang ketiga' demokratisasi (dimulai sekitar 1974 dengan Revolusi Bunga di Portugal). Dalam dua dekade berikutnya, puluhan negara beralih dari otoriter ke poliarki, termasuk negara-negara Amerika Latin, Eropa Timur setelah 1989, dan <strong>Indonesia pada 1998</strong> ketika Reformasi mengakhiri Orde Baru. Kerangka Dahl menjadi alat untuk menilai sejauh mana transisi itu berhasil.",
      },
      {
        type: "calcExercise",
        prompt:
          "Robert Dahl lahir pada 1915 dan wafat pada 2014. Berapa usianya saat wafat?",
        answer: 99,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "2014 - 1915 = <strong>99 tahun</strong>. Dahl menjadi salah satu ilmuwan politik paling berpengaruh abad ke-20.",
        hint: "Kurangkan tahun lahir dari tahun wafat.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan setiap ciri ke dalam dua dimensi poliarki menurut Dahl.",
        buckets: ["Kontestasi", "Partisipasi"],
        items: [
          { text: "Partai oposisi bebas bersaing", bucket: "Kontestasi" },
          { text: "Kebebasan pers mengkritik penguasa", bucket: "Kontestasi" },
          { text: "Semua warga dewasa punya hak pilih", bucket: "Partisipasi" },
          { text: "Tidak ada kelompok yang dilarang ikut pemilu", bucket: "Partisipasi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Robert Dahl (Polyarchy, 1971) menilai demokrasi nyata, bukan demokrasi ideal.",
          "Poliarki adalah sistem yang mendekati cita-cita demokrasi dalam derajat tertentu.",
          "Dua dimensinya: kontestasi (kebebasan bersaing) dan partisipasi (keluasan ikut serta).",
          "Demokrasi adalah skala bertingkat, bukan tombol on atau off.",
          "Pemikirannya melahirkan indeks demokrasi modern yang memberi skor pada tiap negara.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa istilah Robert Dahl untuk sistem yang mendekati demokrasi ideal?",
            options: ["Monarki", "Poliarki", "Oligarki", "Anarki"],
            answer: 1,
            explain: "Dahl menyebut sistem nyata yang mendekati demokrasi sebagai poliarki.",
          },
          {
            q: "Dua dimensi poliarki menurut Dahl adalah?",
            options: [
              "Kaya dan miskin",
              "Kontestasi dan partisipasi",
              "Pusat dan daerah",
              "Perang dan damai",
            ],
            answer: 1,
            explain: "Dahl menilai sistem dari kontestasi (kompetisi) dan partisipasi (keterlibatan).",
          },
          {
            q: "Gagasan besar Dahl tentang demokrasi adalah?",
            options: [
              "Demokrasi adalah tombol on atau off",
              "Demokrasi adalah skala bertingkat yang bisa diukur derajatnya",
              "Demokrasi hanya soal pemilu",
              "Demokrasi mustahil diukur",
            ],
            answer: 1,
            explain: "Dahl melihat demokrasi sebagai derajat, yang melahirkan indeks demokrasi.",
          },
          {
            q: "Pada tahun berapa buku Polyarchy terbit?",
            options: ["1948", "1971", "1989", "1998"],
            answer: 1,
            explain: "Polyarchy terbit pada 1971.",
          },
          {
            q: "Kategori demokrasi Indonesia pada Indeks Demokrasi 2023 (skor sekitar 6,53) adalah?",
            options: [
              "Demokrasi penuh",
              "Demokrasi cacat (flawed democracy)",
              "Rezim otoriter",
              "Rezim hibrida sempurna",
            ],
            answer: 1,
            explain: "Skor sekitar 6,53 menempatkan Indonesia pada kategori demokrasi cacat.",
          },
        ],
      },
    ],
  },
];
