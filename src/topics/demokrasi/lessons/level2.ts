import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "sejarah-demokrasi-athena",
    levelId: "sejarah",
    order: 1,
    title: "Sejarah Demokrasi: Dari Athena",
    summary:
      "Demokrasi lahir di Athena kuno lalu diperjuangkan berabad-abad. Telusuri jejaknya dari 508 SM, Magna Carta, sampai revolusi besar.",
    durationMin: 15,
    tags: ["sejarah", "athena", "magna carta", "revolusi"],
    blocks: [
      {
        type: "paragraph",
        html: "Demokrasi pertama yang tercatat lahir di kota <strong>Athena</strong>, Yunani, sekitar <strong>508 SM</strong>, lewat reformasi <strong>Kleisthenes</strong>. Warga (terbatas pada laki-laki dewasa merdeka) berkumpul langsung untuk berdebat dan memutuskan kebijakan. Ini disebut <strong>demokrasi langsung</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Athena: hebat tapi terbatas",
        html: "Demokrasi Athena revolusioner karena memberi suara langsung kepada warga. Tapi ia juga sangat <strong>terbatas</strong>: perempuan, budak, dan pendatang tidak punya hak suara. Demokrasi yang inklusif butuh ribuan tahun lagi untuk terwujud.",
      },
      {
        type: "video",
        comp: "SejarahDemokrasiVideo",
        title: "Perjalanan Panjang Demokrasi",
        caption: "Dari Athena kuno, Magna Carta, revolusi, sampai hak pilih universal dan Reformasi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Attica_06-13_Athens_50_View_from_Philopappos_-_Acropolis_Hill.jpg?width=400",
        alt: "Acropolis Athena, simbol peradaban Yunani kuno",
        caption: "Athena kuno, tempat lahirnya demokrasi langsung sekitar 508 SM.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tonggak Sejarah Demokrasi",
        unit: "tahun peristiwa",
        source: "tanggal historis terverifikasi (SM ditandai negatif)",
        note: "Demokrasi tidak lahir sekali jadi, melainkan diperjuangkan berabad-abad lewat banyak tonggak.",
        data: [
          { label: "Athena", value: -508 },
          { label: "Magna Carta", value: 1215 },
          { label: "Revolusi AS", value: 1776 },
          { label: "Revolusi Prancis", value: 1789 },
          { label: "Reformasi RI", value: 1998 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Magna Carta membatasi raja (1215)",
        html: "Pada <strong>1215</strong> di Inggris, para bangsawan memaksa <strong>Raja John</strong> menandatangani <strong>Magna Carta</strong>. Dokumen ini menegaskan satu prinsip yang kelak menjadi jantung demokrasi: bahkan <strong>raja pun tunduk pada hukum</strong> dan tidak boleh sewenang-wenang, misalnya memenjarakan orang tanpa proses yang sah. Magna Carta bukan demokrasi, tetapi menjadi benih penting gagasan bahwa kekuasaan harus dibatasi.",
      },
      {
        type: "case",
        title: "Sejarah: Revolusi Amerika 1776 dan Prancis 1789",
        html: "Dua revolusi besar mengubah dunia. <strong>Revolusi Amerika (1776)</strong> melahirkan Deklarasi Kemerdekaan dengan gagasan bahwa semua manusia diciptakan setara dan pemerintah harus mendapat persetujuan rakyat. <strong>Revolusi Prancis (1789)</strong> meneriakkan <em>liberte, egalite, fraternite</em> (kebebasan, kesetaraan, persaudaraan) dan menumbangkan monarki absolut. Keduanya menyebarkan gagasan kedaulatan rakyat ke seluruh dunia, meski jalannya berdarah dan tidak langsung sempurna.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa kira-kira tahun berlalu dari demokrasi Athena (508 SM) sampai Magna Carta (1215 M)?",
        answer: 1723,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "508 (SM) + 1215 (M) = <strong>1.723 tahun</strong>. Jarak yang sangat panjang ini menunjukkan demokrasi sempat lama meredup sebelum bangkit lagi.",
        hint: "Jumlahkan tahun SM dan tahun Masehi (tidak ada tahun nol).",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tonggak sejarah dengan maknanya.",
        pairs: [
          { left: "Athena 508 SM", right: "Demokrasi langsung pertama yang tercatat" },
          { left: "Magna Carta 1215", right: "Raja pun tunduk pada hukum" },
          { left: "Revolusi Amerika 1776", right: "Pemerintah butuh persetujuan rakyat" },
          { left: "Revolusi Prancis 1789", right: "Kebebasan, kesetaraan, persaudaraan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Demokrasi langsung pertama lahir di Athena sekitar 508 SM lewat reformasi Kleisthenes.",
          "Demokrasi Athena revolusioner tetapi terbatas: perempuan dan budak tak bersuara.",
          "Magna Carta (1215) menanam benih bahwa raja pun tunduk pada hukum.",
          "Revolusi Amerika 1776 dan Prancis 1789 menyebarkan gagasan kedaulatan rakyat.",
          "Demokrasi diperjuangkan berabad-abad, bukan lahir sekali jadi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Di mana dan kapan demokrasi pertama yang tercatat lahir?",
            options: ["Roma, 100 M", "Athena, sekitar 508 SM", "Inggris, 1215", "Prancis, 1789"],
            answer: 1,
            explain: "Demokrasi langsung lahir di Athena sekitar 508 SM lewat reformasi Kleisthenes.",
          },
          {
            q: "Apa keterbatasan demokrasi Athena?",
            options: [
              "Tidak ada pemungutan suara",
              "Perempuan, budak, dan pendatang tidak punya hak suara",
              "Tidak ada warga",
              "Raja yang memutuskan semua",
            ],
            answer: 1,
            explain: "Hanya laki-laki dewasa merdeka yang berhak ikut, jauh dari inklusif.",
          },
          {
            q: "Apa prinsip penting dari Magna Carta 1215?",
            options: [
              "Raja berkuasa mutlak",
              "Bahkan raja tunduk pada hukum",
              "Rakyat tidak boleh memilih",
              "Pajak dihapus",
            ],
            answer: 1,
            explain: "Magna Carta menegaskan kekuasaan raja pun dibatasi hukum.",
          },
          {
            q: "Apa semboyan Revolusi Prancis 1789?",
            options: [
              "Kebebasan, kesetaraan, persaudaraan",
              "Darah dan besi",
              "Kerja, modal, laba",
              "Raja, tanah, gereja",
            ],
            answer: 0,
            explain: "Liberte, egalite, fraternite menjadi semboyan Revolusi Prancis.",
          },
          {
            q: "Berapa kira-kira rentang dari 508 SM ke 1215 M?",
            options: ["707 tahun", "1.723 tahun", "1.215 tahun", "508 tahun"],
            answer: 1,
            explain: "508 + 1215 = 1.723 tahun (tidak ada tahun nol).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "demokrasi-athena-lebih-dalam",
    levelId: "sejarah",
    order: 2,
    title: "Demokrasi Athena Lebih Dalam",
    summary:
      "Bagaimana sebenarnya warga Athena memerintah diri sendiri? Telusuri Majelis Rakyat, Dewan 500, undian jabatan, sampai pengucilan lewat ostrakisme.",
    durationMin: 14,
    tags: ["sejarah", "athena", "ekklesia", "ostrakisme"],
    blocks: [
      {
        type: "paragraph",
        html: "Setelah reformasi <strong>Kleisthenes</strong> sekitar <strong>508 SM</strong>, Athena membangun mesin pemerintahan yang unik. Inti kekuasaan ada di <strong>Ekklesia</strong> (Majelis Rakyat) yang bersidang di bukit Pnyx, tempat ribuan warga berkumpul langsung untuk berdebat dan memberi suara dengan mengangkat tangan.",
      },
      {
        type: "paragraph",
        html: "Yang mengejutkan, banyak jabatan publik di Athena tidak dipilih lewat pemilu, melainkan diundi lewat alat bernama <strong>kleroterion</strong>. Gagasannya: kalau setiap warga punya peluang sama menduduki jabatan, kekuasaan tidak akan dikuasai segelintir orang kaya yang pandai berkampanye.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga lembaga utama",
        html: "<strong>Ekklesia</strong> (Majelis Rakyat) memutuskan kebijakan besar. <strong>Boule</strong> (Dewan 500) menyiapkan agenda harian. <strong>Dikasteria</strong> (pengadilan rakyat) mengadili perkara dengan ratusan juri warga biasa.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Undian, bukan pemilu",
        html: "Bagi orang Athena, <strong>pemilu justru dianggap kurang demokratis</strong> karena cenderung memenangkan yang kaya dan terkenal. Undian dianggap lebih adil sebab memberi peluang setara kepada semua warga.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Tetap eksklusif",
        html: "Dari sekitar 250 ribu penduduk Attika, hanya sekitar 30 ribu yang berstatus warga penuh dengan hak suara. Perempuan, budak, dan penduduk asing (metik) tetap di luar.",
      },
      {
        type: "video",
        comp: "SejarahDemokrasiVideo",
        title: "Cara Warga Athena Memerintah Diri Sendiri",
        caption: "Ekklesia, Dewan 500, undian jabatan, dan ostrakisme dalam demokrasi langsung Athena.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Attica_06-13_Athens_50_View_from_Philopappos_-_Acropolis_Hill.jpg?width=400",
        alt: "Acropolis Athena dilihat dari bukit Philopappos",
        caption: "Athena, kota tempat Ekklesia bersidang di bukit Pnyx dekat Acropolis.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "widget",
        widget: "SimulatorIndeksDemokrasi",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Siapa yang Boleh Bersuara di Athena",
        unit: "ribu jiwa (perkiraan)",
        source: "perkiraan demografi Attika abad ke-5 SM (ilustrasi edukatif)",
        note: "Hanya sebagian kecil penduduk berstatus warga penuh, sisanya tanpa hak suara.",
        data: [
          { label: "Warga penuh (hak suara)", value: 30, color: "#2563eb" },
          { label: "Perempuan & anak", value: 110, color: "#f59e0b" },
          { label: "Budak", value: 90, color: "#ef4444" },
          { label: "Metik (pendatang)", value: 20, color: "#10b981" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kuorum 6.000 untuk ostrakisme",
        html: "Athena punya cara unik membuang tokoh yang dianggap berbahaya bagi demokrasi: <strong>ostrakisme</strong>. Sekali setahun warga menuliskan nama di pecahan tembikar (<em>ostrakon</em>). Bila terkumpul minimal <strong>6.000 suara</strong>, orang dengan nama terbanyak diasingkan dari kota selama <strong>10 tahun</strong>, tanpa kehilangan harta atau kehormatannya. Negarawan seperti Themistokles dan Aristides pernah terkena ostrakisme.",
      },
      {
        type: "case",
        title: "Sejarah: Pengadilan Sokrates 399 SM",
        html: "Pada <strong>399 SM</strong>, filsuf <strong>Sokrates</strong> diadili oleh juri rakyat Athena yang berjumlah sekitar <strong>500 orang</strong> atas tuduhan merusak moral pemuda dan tidak menghormati dewa kota. Ia divonis bersalah lewat pemungutan suara mayoritas dan dihukum mati dengan minum racun. Peristiwa ini sering dijadikan pengingat bahwa demokrasi mayoritas pun bisa keliru dan menindas suara minoritas bila tanpa perlindungan hak.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dewan Boule beranggotakan 500 orang yang dibagi rata dari 10 suku (phyle). Berapa wakil tiap suku?",
        answer: 50,
        tolerance: 0,
        suffix: "orang",
        solution:
          "500 anggota dibagi 10 suku = <strong>50 orang per suku</strong>. Pembagian rata ini menjamin tiap suku punya porsi setara di dewan.",
        hint: "Bagi total anggota dengan jumlah suku.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan siapa yang punya hak suara penuh di Athena kuno.",
        buckets: ["Punya hak suara", "Tanpa hak suara"],
        items: [
          { text: "Laki-laki dewasa warga Athena", bucket: "Punya hak suara" },
          { text: "Perempuan", bucket: "Tanpa hak suara" },
          { text: "Budak", bucket: "Tanpa hak suara" },
          { text: "Metik (pendatang merdeka)", bucket: "Tanpa hak suara" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Ekklesia (Majelis Rakyat) adalah pusat keputusan di Athena, bersidang langsung di Pnyx.",
          "Banyak jabatan diisi lewat undian, bukan pemilu, demi peluang yang setara.",
          "Boule beranggotakan 500 orang, 50 dari tiap 10 suku.",
          "Ostrakisme mengasingkan tokoh berbahaya bila terkumpul minimal 6.000 suara.",
          "Demokrasi Athena tetap eksklusif: hanya sekitar 30 ribu warga penuh dari ratusan ribu penduduk.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa nama Majelis Rakyat yang menjadi pusat keputusan di Athena?",
            options: ["Boule", "Ekklesia", "Senat", "Dikasteria"],
            answer: 1,
            explain: "Ekklesia adalah Majelis Rakyat tempat warga berdebat dan memberi suara langsung.",
          },
          {
            q: "Mengapa orang Athena lebih suka mengisi jabatan lewat undian?",
            options: [
              "Karena lebih cepat",
              "Karena dianggap lebih adil dan setara daripada pemilu",
              "Karena tidak ada yang mau jadi pejabat",
              "Karena raja yang menentukan",
            ],
            answer: 1,
            explain: "Undian memberi peluang setara dan mencegah dominasi yang kaya serta terkenal.",
          },
          {
            q: "Berapa anggota Dewan Boule?",
            options: ["100", "300", "500", "1.000"],
            answer: 2,
            explain: "Boule terdiri atas 500 anggota, 50 dari tiap 10 suku.",
          },
          {
            q: "Apa itu ostrakisme?",
            options: [
              "Pemilihan raja",
              "Pengasingan tokoh selama 10 tahun bila terkumpul 6.000 suara",
              "Pajak untuk pendatang",
              "Upacara keagamaan",
            ],
            answer: 1,
            explain: "Ostrakisme mengasingkan tokoh yang dianggap berbahaya bagi demokrasi.",
          },
          {
            q: "Apa pelajaran dari pengadilan Sokrates 399 SM?",
            options: [
              "Mayoritas selalu benar",
              "Demokrasi mayoritas pun bisa keliru tanpa perlindungan hak minoritas",
              "Pengadilan tidak penting",
              "Filsuf tidak boleh bicara",
            ],
            answer: 1,
            explain: "Vonis mati Sokrates menunjukkan bahaya tirani mayoritas tanpa jaminan hak.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "republik-romawi",
    levelId: "sejarah",
    order: 3,
    title: "Republik Romawi",
    summary:
      "Roma tidak meniru demokrasi langsung Athena, tetapi membangun republik dengan Senat, dua konsul, dan tribun rakyat. Inilah akar gagasan checks and balances.",
    durationMin: 15,
    tags: ["sejarah", "roma", "republik", "senat"],
    blocks: [
      {
        type: "paragraph",
        html: "Sekitar <strong>509 SM</strong>, rakyat Roma menggulingkan raja terakhirnya dan mendirikan <strong>Republik</strong> (dari <em>res publica</em>, urusan publik). Republik ini bertahan sampai sekitar <strong>27 SM</strong>, ketika Augustus mengubah Roma menjadi kekaisaran. Berbeda dengan demokrasi langsung Athena, Roma memakai sistem <strong>republik</strong>: rakyat memilih pejabat yang mewakili mereka.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga pilar kekuasaan",
        html: "<strong>Senat</strong> (para bangsawan/patricia) memberi nasihat dan mengatur keuangan serta politik luar negeri. <strong>Konsul</strong> (dua orang) memimpin pemerintahan dan tentara. <strong>Majelis rakyat</strong> memilih pejabat dan mengesahkan undang-undang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dua konsul, saling mengerem",
        html: "Roma sengaja mengangkat <strong>dua konsul</strong> dengan masa jabatan hanya <strong>satu tahun</strong>. Keduanya punya hak veto atas tindakan rekannya. Tujuannya mencegah satu orang menjadi tiran. Inilah cikal bakal gagasan <strong>pembagian dan pembatasan kekuasaan</strong>.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Tribun pelindung rakyat",
        html: "Rakyat jelata (pleb) memperjuangkan jabatan <strong>tribun</strong> yang boleh memveto keputusan yang merugikan rakyat kecil. Ini hasil perjuangan panjang melawan dominasi kaum bangsawan.",
      },
      {
        type: "video",
        comp: "SejarahDemokrasiVideo",
        title: "Dari Athena ke Roma dan Seterusnya",
        caption: "Roma mewariskan gagasan republik dan pembatasan kekuasaan ke dunia modern.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Attica_06-13_Athens_50_View_from_Philopappos_-_Acropolis_Hill.jpg?width=400",
        alt: "Lanskap kota kuno Mediterania",
        caption: "Dunia kuno Mediterania, panggung lahirnya demokrasi Athena dan republik Roma.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Athena vs Roma: Dua Model Berbeda",
        unit: "skor ilustratif 1-5",
        source: "perbandingan konseptual (ilustrasi edukatif)",
        note: "Athena menonjol pada partisipasi langsung, Roma pada perwakilan dan pembatasan kekuasaan.",
        data: [
          { label: "Partisipasi langsung (Athena)", value: 5, color: "#2563eb" },
          { label: "Partisipasi langsung (Roma)", value: 2, color: "#93c5fd" },
          { label: "Perwakilan (Athena)", value: 2, color: "#f59e0b" },
          { label: "Perwakilan (Roma)", value: 5, color: "#fbbf24" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Masa jabatan konsul hanya satu tahun",
        html: "Bayangkan seorang konsul Roma yang ambisius. Karena masa jabatannya cuma <strong>satu tahun</strong> dan ia harus berbagi kekuasaan dengan <strong>satu konsul lain</strong> yang bisa memveto tindakannya, peluangnya untuk menumpuk kekuasaan sangat terbatas. Republik Roma berdiri sekitar <strong>482 tahun</strong> (509 SM sampai 27 SM) dengan prinsip ini, sebuah rekam jejak panjang sebelum akhirnya runtuh menjadi kekaisaran.",
      },
      {
        type: "case",
        title: "Sejarah: Julius Caesar dan akhir Republik 44 SM",
        html: "Pada <strong>44 SM</strong>, <strong>Julius Caesar</strong> diangkat menjadi <em>dictator perpetuo</em> (diktator seumur hidup), melanggar prinsip pembatasan kekuasaan yang menjaga Republik selama berabad-abad. Sekelompok senator yang khawatir kembalinya monarki membunuhnya pada Idus Maret (15 Maret) 44 SM. Namun bukannya memulihkan republik, kematian Caesar memicu perang saudara yang berujung pada berdirinya kekaisaran di bawah Augustus pada 27 SM.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa lama Republik Romawi bertahan, dari 509 SM sampai 27 SM?",
        answer: 482,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "509 SM dikurangi 27 SM = <strong>482 tahun</strong>. Keduanya tahun SM, jadi cukup selisihkan angkanya.",
        hint: "Karena keduanya SM (semakin besar angkanya semakin tua), kurangkan: 509 - 27.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan lembaga Republik Romawi dengan perannya.",
        pairs: [
          { left: "Senat", right: "Penasihat, mengatur keuangan dan politik luar negeri" },
          { left: "Konsul", right: "Dua pemimpin eksekutif yang saling memveto" },
          { left: "Majelis rakyat", right: "Memilih pejabat dan mengesahkan undang-undang" },
          { left: "Tribun", right: "Pelindung kepentingan rakyat jelata" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Republik Romawi berdiri sekitar 509 SM dan berakhir sekitar 27 SM.",
          "Roma memakai model republik (perwakilan), bukan demokrasi langsung seperti Athena.",
          "Dua konsul dengan masa jabatan satu tahun saling mengerem agar tak ada tiran.",
          "Tribun melindungi kepentingan rakyat jelata lewat hak veto.",
          "Roma mewariskan gagasan pembagian dan pembatasan kekuasaan ke dunia modern.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapan Republik Romawi berdiri dan berakhir?",
            options: ["753 SM - 509 SM", "509 SM - 27 SM", "27 SM - 476 M", "100 M - 400 M"],
            answer: 1,
            explain: "Republik berdiri sekitar 509 SM dan berakhir sekitar 27 SM saat Augustus berkuasa.",
          },
          {
            q: "Apa beda mendasar Roma dengan Athena?",
            options: [
              "Roma demokrasi langsung, Athena republik",
              "Roma memakai model republik (perwakilan), Athena demokrasi langsung",
              "Keduanya sama persis",
              "Roma tanpa pejabat terpilih",
            ],
            answer: 1,
            explain: "Roma memilih wakil (republik), sedangkan Athena memutuskan langsung.",
          },
          {
            q: "Mengapa Roma mengangkat dua konsul setahun saja?",
            options: [
              "Agar pekerjaan cepat selesai",
              "Agar kekuasaan terbagi dan tak ada yang menjadi tiran",
              "Karena kekurangan orang",
              "Agar rakyat tidak ikut campur",
            ],
            answer: 1,
            explain: "Dua konsul dengan masa singkat dan hak veto mencegah pemusatan kekuasaan.",
          },
          {
            q: "Apa peran tribun?",
            options: [
              "Memimpin tentara",
              "Melindungi kepentingan rakyat jelata lewat hak veto",
              "Mengadili penjahat",
              "Memungut pajak",
            ],
            answer: 1,
            explain: "Tribun adalah jabatan yang memperjuangkan dan melindungi rakyat kecil.",
          },
          {
            q: "Apa yang terjadi setelah Julius Caesar dibunuh pada 44 SM?",
            options: [
              "Republik langsung pulih",
              "Perang saudara yang berujung berdirinya kekaisaran",
              "Roma dibubarkan",
              "Athena mengambil alih Roma",
            ],
            answer: 1,
            explain: "Kematian Caesar memicu perang saudara dan lahirnya kekaisaran di bawah Augustus pada 27 SM.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "magna-carta-lahirnya-parlemen",
    levelId: "sejarah",
    order: 4,
    title: "Magna Carta & Lahirnya Parlemen",
    summary:
      "Dari piagam yang dipaksakan kepada Raja John tahun 1215 sampai English Bill of Rights 1689, Inggris perlahan mengubah raja absolut menjadi raja yang tunduk pada parlemen.",
    durationMin: 14,
    tags: ["sejarah", "magna carta", "parlemen", "inggris"],
    blocks: [
      {
        type: "paragraph",
        html: "Pada <strong>1215</strong>, para bangsawan Inggris yang marah atas pajak tinggi dan kesewenangan <strong>Raja John</strong> memaksanya menandatangani <strong>Magna Carta</strong> (Piagam Agung) di padang Runnymede. Piagam ini menegaskan bahwa raja pun tunduk pada hukum dan tidak boleh memungut pajak baru tanpa persetujuan.",
      },
      {
        type: "paragraph",
        html: "Dari benih ini tumbuh <strong>parlemen</strong>. Pada 1265, Simon de Montfort memanggil perwakilan kota dan daerah ke majelis. Perlahan parlemen menjadi tempat rakyat (lewat wakilnya) ikut menentukan pajak dan undang-undang, sampai puncaknya pada <strong>English Bill of Rights 1689</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tidak ada pajak tanpa persetujuan",
        html: "Prinsip <strong>no taxation without representation</strong> berakar di sini: raja tidak boleh memungut pajak seenaknya. Gagasan ini kelak menyalakan Revolusi Amerika.",
      },
      {
        type: "callout",
        tone: "info",
        title: "English Bill of Rights 1689",
        html: "Setelah Revolusi Agung (Glorious Revolution) 1688, parlemen mengesahkan <strong>Bill of Rights 1689</strong>: raja tidak boleh menangguhkan undang-undang, memungut pajak, atau menahan tentara tanpa izin parlemen. Inggris resmi menjadi <strong>monarki konstitusional</strong>.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bukan demokrasi penuh",
        html: "Magna Carta awalnya hanya melindungi kaum bangsawan, bukan rakyat biasa. Hak pilih luas baru datang berabad-abad kemudian. Tetapi prinsip pembatasan kekuasaan yang ditanamnya sangat berpengaruh.",
      },
      {
        type: "video",
        comp: "SejarahDemokrasiVideo",
        title: "Inggris Perlahan Membatasi Raja",
        caption: "Dari Magna Carta 1215 sampai Bill of Rights 1689, raja absolut berubah menjadi raja yang tunduk pada parlemen.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Magna_Carta_%28British_Library_Cotton_MS_Augustus_II.106%29.jpg?width=400",
        alt: "Naskah asli Magna Carta tahun 1215",
        caption: "Naskah Magna Carta 1215, piagam yang memaksa raja tunduk pada hukum.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Jalan Panjang Inggris Membatasi Raja",
        unit: "tahun peristiwa",
        source: "tanggal historis terverifikasi",
        note: "Butuh hampir lima abad dari Magna Carta sampai parlemen benar-benar mengungguli raja.",
        data: [
          { label: "Magna Carta", value: 1215 },
          { label: "Parlemen de Montfort", value: 1265 },
          { label: "Glorious Revolution", value: 1688 },
          { label: "Bill of Rights", value: 1689 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Raja John dan pajak yang memberatkan",
        html: "Raja John butuh uang besar untuk perang merebut kembali wilayah di Prancis. Ia menaikkan pajak para bangsawan secara sepihak dan menghukum penentangnya tanpa pengadilan. Para bangsawan akhirnya memberontak dan, alih-alih sekadar menggulingkan raja, mereka memaksanya menandatangani aturan tertulis pada <strong>1215</strong>. Untuk pertama kalinya, kekuasaan raja Inggris dibatasi oleh dokumen hukum.",
      },
      {
        type: "case",
        title: "Sejarah: Glorious Revolution 1688",
        html: "Pada <strong>1688</strong>, parlemen Inggris menggulingkan Raja James II yang dianggap menyalahgunakan kekuasaan, lalu mengundang Wiliam dan Mary naik takhta dengan syarat menerima pembatasan dari parlemen. Peristiwa ini disebut <strong>Glorious Revolution</strong> karena nyaris tanpa pertumpahan darah. Hasilnya adalah <strong>Bill of Rights 1689</strong> yang mengukuhkan supremasi parlemen atas raja, fondasi monarki konstitusional yang bertahan sampai kini.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa tahun berlalu dari Magna Carta (1215) sampai English Bill of Rights (1689)?",
        answer: 474,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "1689 dikurangi 1215 = <strong>474 tahun</strong>. Inggris butuh hampir lima abad untuk benar-benar menundukkan raja di bawah parlemen.",
        hint: "Kurangkan tahun yang lebih besar dengan yang lebih kecil.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan ciri sistem sebelum dan sesudah Bill of Rights 1689.",
        buckets: ["Raja absolut", "Monarki konstitusional"],
        items: [
          { text: "Raja memungut pajak tanpa izin siapa pun", bucket: "Raja absolut" },
          { text: "Raja menangguhkan undang-undang sesukanya", bucket: "Raja absolut" },
          { text: "Pajak harus disetujui parlemen", bucket: "Monarki konstitusional" },
          { text: "Raja tunduk pada undang-undang parlemen", bucket: "Monarki konstitusional" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Magna Carta 1215 memaksa Raja John mengakui bahwa raja pun tunduk pada hukum.",
          "Prinsip tidak ada pajak tanpa persetujuan berakar dari Magna Carta.",
          "Parlemen tumbuh perlahan sebagai tempat wakil rakyat menentukan pajak dan hukum.",
          "Glorious Revolution 1688 dan Bill of Rights 1689 menjadikan Inggris monarki konstitusional.",
          "Butuh hampir lima abad agar parlemen benar-benar mengungguli raja.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Siapa yang dipaksa menandatangani Magna Carta pada 1215?",
            options: ["Raja Henry", "Raja John", "Raja William", "Raja James II"],
            answer: 1,
            explain: "Para bangsawan memaksa Raja John menandatangani Magna Carta di Runnymede tahun 1215.",
          },
          {
            q: "Prinsip apa yang berakar dari Magna Carta dan kelak memicu Revolusi Amerika?",
            options: [
              "Raja berkuasa mutlak",
              "Tidak ada pajak tanpa persetujuan",
              "Gereja menguasai negara",
              "Tentara memerintah",
            ],
            answer: 1,
            explain: "No taxation without representation berakar dari Magna Carta.",
          },
          {
            q: "Apa hasil dari English Bill of Rights 1689?",
            options: [
              "Raja menjadi absolut",
              "Inggris menjadi monarki konstitusional dengan parlemen di atas raja",
              "Parlemen dibubarkan",
              "Pajak dihapus selamanya",
            ],
            answer: 1,
            explain: "Bill of Rights 1689 menegaskan supremasi parlemen atas raja.",
          },
          {
            q: "Mengapa peristiwa 1688 disebut Glorious Revolution?",
            options: [
              "Karena terjadi perang besar",
              "Karena berlangsung nyaris tanpa pertumpahan darah",
              "Karena raja menang",
              "Karena Athena membantu Inggris",
            ],
            answer: 1,
            explain: "Glorious Revolution menggulingkan James II hampir tanpa kekerasan.",
          },
          {
            q: "Berapa tahun antara Magna Carta dan Bill of Rights?",
            options: ["100 tahun", "474 tahun", "508 tahun", "1.215 tahun"],
            answer: 1,
            explain: "1689 - 1215 = 474 tahun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "revolusi-amerika-dan-prancis",
    levelId: "sejarah",
    order: 5,
    title: "Revolusi Amerika & Prancis",
    summary:
      "Dua revolusi besar pada akhir abad ke-18 menerjemahkan gagasan kedaulatan rakyat menjadi kenyataan: Amerika 1776 dan Prancis 1789.",
    durationMin: 15,
    tags: ["sejarah", "revolusi", "amerika", "prancis"],
    blocks: [
      {
        type: "paragraph",
        html: "Pada akhir abad ke-18, gagasan para pemikir <strong>Pencerahan</strong> seperti Locke, Montesquieu, dan Rousseau meledak menjadi aksi nyata. <strong>Revolusi Amerika (1776)</strong> dan <strong>Revolusi Prancis (1789)</strong> menyatakan bahwa kekuasaan berasal dari rakyat, bukan dari raja atau Tuhan lewat garis keturunan.",
      },
      {
        type: "paragraph",
        html: "Amerika berontak melawan pajak Inggris dengan semboyan <strong>no taxation without representation</strong>, lalu menyusun <strong>Deklarasi Kemerdekaan</strong> yang menyatakan semua manusia diciptakan setara. Prancis menumbangkan monarki absolut dengan semboyan <em>liberte, egalite, fraternite</em>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Pemerintah butuh persetujuan rakyat",
        html: "Deklarasi Kemerdekaan AS 1776 menyatakan pemerintah memperoleh kekuasaannya dari <strong>persetujuan yang diperintah</strong>. Bila pemerintah menindas, rakyat berhak mengubahnya. Ini gagasan radikal pada zamannya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pembagian kekuasaan",
        html: "Montesquieu mengusulkan kekuasaan dipecah menjadi <strong>eksekutif, legislatif, dan yudikatif</strong> agar saling mengawasi. Konstitusi AS 1787 menerapkan gagasan ini, yang kini dipakai banyak negara termasuk Indonesia.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Jalan berdarah dan tak langsung sempurna",
        html: "Revolusi Prancis melahirkan masa <strong>Teror</strong> (1793-1794) yang penuh hukuman mati, lalu jatuh ke tangan Napoleon. Demokrasi sejati butuh waktu lama untuk stabil. Revolusi membuka jalan, bukan menyelesaikan segalanya sekaligus.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/United_States_Declaration_of_Independence.jpg?width=400",
        alt: "Naskah Deklarasi Kemerdekaan Amerika Serikat 1776",
        caption: "Deklarasi Kemerdekaan AS 1776: semua manusia diciptakan setara.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Prise_de_la_Bastille_clean.jpg?width=400",
        alt: "Lukisan penyerbuan penjara Bastille tahun 1789",
        caption: "Penyerbuan Bastille, 14 Juli 1789, simbol meletusnya Revolusi Prancis.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "DemokrasiVideo",
        title: "Kedaulatan di Tangan Rakyat",
        caption: "Revolusi Amerika dan Prancis menjadikan rakyat sebagai sumber kekuasaan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Dua Revolusi dan Warisannya",
        unit: "tahun peristiwa",
        source: "tanggal historis terverifikasi",
        note: "Hanya berselang 13 tahun, kedua revolusi saling memengaruhi dan menyebar ke seluruh dunia.",
        data: [
          { label: "Deklarasi Kemerdekaan AS", value: 1776, color: "#2563eb" },
          { label: "Konstitusi AS", value: 1787, color: "#60a5fa" },
          { label: "Penyerbuan Bastille", value: 1789, color: "#ef4444" },
          { label: "Deklarasi Hak Manusia (Prancis)", value: 1789, color: "#f59e0b" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Selisih 13 tahun yang saling memantik",
        html: "Banyak tentara Prancis ikut membantu Amerika merebut kemerdekaan dari Inggris. Sepulangnya ke Prancis, mereka membawa gagasan kebebasan dan kesetaraan. Ditambah kas negara Prancis yang bangkrut, ide-ide ini ikut memicu meletusnya revolusi pada <strong>1789</strong>, hanya <strong>13 tahun</strong> setelah Deklarasi Kemerdekaan AS 1776. Gagasan demokrasi memang menular lintas benua.",
      },
      {
        type: "case",
        title: "Sejarah: Penyerbuan Bastille 14 Juli 1789",
        html: "Pada <strong>14 Juli 1789</strong>, rakyat Paris menyerbu penjara <strong>Bastille</strong>, simbol kesewenangan monarki. Peristiwa ini menandai meletusnya Revolusi Prancis secara terbuka. Tak lama kemudian Majelis Nasional mengesahkan <strong>Deklarasi Hak Asasi Manusia dan Warga Negara</strong> yang menyatakan manusia lahir bebas dan setara dalam hak. Tanggal 14 Juli kini diperingati sebagai hari nasional Prancis.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa tahun selisih antara Revolusi Amerika (1776) dan Revolusi Prancis (1789)?",
        answer: 13,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "1789 dikurangi 1776 = <strong>13 tahun</strong>. Jarak yang dekat ini membuat kedua revolusi saling memengaruhi.",
        hint: "Kurangkan 1789 dengan 1776.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan peristiwa atau gagasan dengan asalnya.",
        pairs: [
          { left: "Deklarasi Kemerdekaan 1776", right: "Revolusi Amerika" },
          { left: "Liberte, egalite, fraternite", right: "Revolusi Prancis" },
          { left: "Pembagian kekuasaan tiga cabang", right: "Montesquieu" },
          { left: "Penyerbuan Bastille 14 Juli 1789", right: "Awal terbuka Revolusi Prancis" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Revolusi Amerika 1776 dan Prancis 1789 mewujudkan gagasan kedaulatan rakyat.",
          "Deklarasi Kemerdekaan AS menyatakan semua manusia diciptakan setara.",
          "Prancis menumbangkan monarki absolut dengan semboyan kebebasan, kesetaraan, persaudaraan.",
          "Montesquieu mengilhami pembagian kekuasaan eksekutif, legislatif, dan yudikatif.",
          "Revolusi membuka jalan demokrasi, meski jalannya berdarah dan tidak langsung sempurna.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa pernyataan utama Deklarasi Kemerdekaan AS 1776?",
            options: [
              "Raja berkuasa atas nama Tuhan",
              "Semua manusia diciptakan setara dan pemerintah butuh persetujuan rakyat",
              "Pajak harus dinaikkan",
              "Hanya bangsawan yang merdeka",
            ],
            answer: 1,
            explain: "Deklarasi menegaskan kesetaraan manusia dan persetujuan yang diperintah.",
          },
          {
            q: "Apa semboyan Revolusi Prancis 1789?",
            options: [
              "Darah dan besi",
              "Liberte, egalite, fraternite",
              "Raja, tanah, gereja",
              "Kerja, modal, laba",
            ],
            answer: 1,
            explain: "Kebebasan, kesetaraan, dan persaudaraan menjadi semboyan Revolusi Prancis.",
          },
          {
            q: "Siapa pemikir yang mengusulkan pembagian kekuasaan tiga cabang?",
            options: ["Rousseau", "Montesquieu", "Napoleon", "Raja John"],
            answer: 1,
            explain: "Montesquieu mengusulkan eksekutif, legislatif, dan yudikatif saling mengawasi.",
          },
          {
            q: "Apa yang terjadi pada 14 Juli 1789?",
            options: [
              "Penandatanganan Magna Carta",
              "Penyerbuan penjara Bastille di Paris",
              "Deklarasi Kemerdekaan AS",
              "Pengadilan Sokrates",
            ],
            answer: 1,
            explain: "Penyerbuan Bastille menandai meletusnya Revolusi Prancis secara terbuka.",
          },
          {
            q: "Berapa selisih tahun Revolusi Amerika dan Prancis?",
            options: ["3 tahun", "13 tahun", "30 tahun", "100 tahun"],
            answer: 1,
            explain: "1789 - 1776 = 13 tahun, jarak dekat yang membuat keduanya saling memengaruhi.",
          },
        ],
      },
    ],
  },
];
