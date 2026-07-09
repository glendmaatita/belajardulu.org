import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "epistemologi",
    levelId: "epistemologi",
    order: 1,
    title: "Epistemologi: Hakikat Pengetahuan",
    summary: "Apa itu pengetahuan, dari mana asalnya (akal vs pengalaman), dan apakah kita bisa benar-benar yakin. Dengan video.",
    durationMin: 14,
    tags: ["epistemologi", "rasionalisme", "empirisme"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Epistemologi</strong> mempelajari hakikat dan sumber <strong>pengetahuan</strong>. Definisi klasik: pengetahuan adalah <strong>keyakinan benar yang terjustifikasi</strong> (justified true belief). Artinya kita tidak hanya percaya, tetapi percaya itu benar dan punya alasan.",
      },
      {
        type: "paragraph",
        html: "Pertanyaan epistemologi tidak muncul sekaligus, melainkan berkembang dari era ke era sebagai sebuah <strong>perdebatan yang terus hidup</strong>. Pada abad ke-17, <strong>Rene Descartes</strong> mengangkat akal sebagai fondasi. Reaksi datang dari kubu empiris abad ke-17 dan ke-18, yaitu <strong>John Locke</strong> lalu <strong>David Hume</strong>, yang menukar akal bawaan dengan pengalaman indra. Pada akhir abad ke-18, <strong>Immanuel Kant</strong> menyatukan dua arus itu. Memahami urutan ini membantu kita melihat bagaimana setiap gagasan lahir sebagai jawaban atas gagasan sebelumnya.",
      },
      {
        type: "video",
        comp: "RasionalismeEmpirisme",
        title: "Video: Rasionalisme vs Empirisme",
        caption: "Animasi dua sumber pengetahuan: akal dan pengalaman indra.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dua sumber pengetahuan",
        html: "<strong>Rasionalisme</strong> (Descartes): akal adalah sumber utama kebenaran. <strong>Empirisme</strong> (Locke, Hume): pengetahuan berasal dari pengalaman indra. <strong>Kant</strong> memadukan keduanya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Frans_Hals_-_Portret_van_René_Descartes.jpg?width=400",
        alt: "Potret Rene Descartes",
        caption: "Rene Descartes (1596-1650), bapak rasionalisme yang menaruh akal sebagai fondasi pengetahuan.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/John_Locke.jpg?width=400",
        alt: "Potret John Locke",
        caption: "John Locke (1632-1704), tokoh empirisme yang menyebut pikiran lahir sebagai kertas kosong.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Immanuel_Kant_(painted_portrait).jpg?width=400",
        alt: "Potret Immanuel Kant",
        caption: "Immanuel Kant (1724-1804), penjembatan rasionalisme dan empirisme.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "callout",
        tone: "info",
        title: "Skeptisisme",
        html: "<strong>Skeptisisme</strong> meragukan apakah kita bisa tahu dengan pasti. Descartes meragukan segalanya sampai menemukan satu kepastian: 'Aku berpikir, maka aku ada' (cogito ergo sum).",
      },
      {
        type: "case",
        title: "Studi Kasus: Tahu atau sekadar beruntung?",
        html: "Budi menebak jam 3 sore dan kebetulan benar, tetapi jamnya rusak. Apakah Budi <strong>tahu</strong> waktu? Menurut definisi justified true belief: tidak, karena keyakinannya benar tetapi <strong>tidak terjustifikasi</strong> (sumbernya rusak). Ini menunjukkan pengetahuan butuh lebih dari sekadar kebetulan benar.",
      },
      {
        type: "classifyExercise",
        prompt: "Pandangan ini rasionalisme atau empirisme?",
        buckets: ["Rasionalisme", "Empirisme"],
        items: [
          { text: "Kebenaran matematika diketahui lewat akal", bucket: "Rasionalisme" },
          { text: "Kita tahu api panas karena merasakannya", bucket: "Empirisme" },
          { text: "Pikiran lahir sebagai kertas kosong", bucket: "Empirisme" },
          { text: "Ada kebenaran bawaan yang tak perlu pengalaman", bucket: "Rasionalisme" },
        ],
      },
      {
        type: "widget",
        widget: "TebakFilsuf",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan filsuf dengan aliran atau gagasan epistemologisnya.",
        pairs: [
          { left: "Rene Descartes", right: "Rasionalisme (akal sebagai sumber utama)" },
          { left: "John Locke", right: "Empirisme (pikiran sebagai kertas kosong)" },
          { left: "David Hume", right: "Empirisme (pengetahuan dari pengalaman)" },
          { left: "Immanuel Kant", right: "Sintesis akal dan pengalaman" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Epistemologi mempelajari hakikat dan sumber pengetahuan.",
          "Definisi klasik: keyakinan benar yang terjustifikasi.",
          "Rasionalisme menekankan akal; empirisme menekankan pengalaman.",
          "Skeptisisme menantang kepastian; Descartes menemukan cogito ergo sum.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Definisi klasik pengetahuan adalah?",
            options: ["Keyakinan saja", "Keyakinan benar yang terjustifikasi", "Tebakan benar", "Pendapat populer"],
            answer: 1,
            explain: "Pengetahuan = justified true belief.",
          },
          {
            q: "Empirisme menekankan sumber pengetahuan dari?",
            options: ["Akal murni", "Pengalaman indra", "Wahyu", "Tebakan"],
            answer: 1,
            explain: "Empirisme: pengetahuan berasal dari pengalaman indra.",
          },
          {
            q: "'Cogito ergo sum' dikemukakan oleh?",
            options: ["Aristoteles", "Descartes", "Hume", "Kant"],
            answer: 1,
            explain: "Descartes: 'Aku berpikir, maka aku ada'.",
          },
          {
            q: "Rasionalisme menekankan?",
            options: ["Pengalaman indra", "Akal dan penalaran", "Emosi", "Mayoritas"],
            answer: 1,
            explain: "Rasionalisme menjadikan akal sumber utama kebenaran.",
          },
          {
            q: "Tebakan yang kebetulan benar tanpa alasan, menurut JTB?",
            options: ["Pengetahuan", "Bukan pengetahuan (tak terjustifikasi)", "Selalu salah", "Skeptisisme"],
            answer: 1,
            explain: "Tanpa justifikasi, keyakinan benar belum jadi pengetahuan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "rasionalisme-empirisme",
    levelId: "epistemologi",
    order: 2,
    title: "Rasionalisme vs Empirisme: Akal atau Pengalaman",
    summary: "Descartes melawan Locke dan Hume soal sumber pengetahuan, lalu Kant menjembatani keduanya. Memahami a priori dan a posteriori.",
    durationMin: 13,
    tags: ["epistemologi", "rasionalisme", "empirisme", "kant"],
    blocks: [
      {
        type: "paragraph",
        html: "Pertanyaan besar epistemologi modern: dari mana pengetahuan yang sah berasal? <strong>Rasionalisme</strong> menjawab lewat akal. <strong>Empirisme</strong> menjawab lewat pengalaman indra. <strong>Rene Descartes</strong> percaya akal menyimpan kebenaran bawaan yang pasti, sedangkan <strong>John Locke</strong> dan <strong>David Hume</strong> menegaskan pikiran lahir kosong dan diisi oleh pengalaman.",
      },
      {
        type: "video",
        comp: "RasionalismeEmpirisme",
        title: "Video: Rasionalisme vs Empirisme",
        caption: "Memvisualkan dua jawaban besar atas pertanyaan sumber pengetahuan.",
      },
      {
        type: "paragraph",
        html: "Debat ini berkembang sebagai <strong>rantai tanggapan antar era</strong>. Arus rasionalis benua Eropa dirintis <strong>Descartes</strong> (abad ke-17), lalu diperluas <strong>Baruch Spinoza</strong> dan <strong>Gottfried Leibniz</strong> yang sama-sama percaya akal mampu menemukan kebenaran tanpa bergantung pada indra. Sebagai reaksi, lahir empirisme Britania: <strong>Locke</strong>, kemudian <strong>George Berkeley</strong>, dan dipuncaki keraguan <strong>Hume</strong>. Ketegangan dua kubu inilah yang kemudian membangunkan <strong>Kant</strong> untuk menawarkan sintesis.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Frans_Hals_-_Portret_van_René_Descartes.jpg?width=400",
        alt: "Potret Rene Descartes",
        caption: "Rene Descartes, bapak rasionalisme yang mempercayai kebenaran bawaan akal.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Baruch_de_Spinoza.jpg?width=400",
        alt: "Potret Baruch Spinoza",
        caption: "Baruch Spinoza, rasionalis yang melanjutkan keyakinan pada kuasa akal.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gottfried_Wilhelm_Leibniz,_Bernhard_Christoph_Francke.jpg?width=400",
        alt: "Potret Gottfried Wilhelm Leibniz",
        caption: "Gottfried Leibniz, rasionalis yang menekankan kebenaran nalar.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/David_Hume.jpg?width=400",
        alt: "Potret David Hume",
        caption: "David Hume, empiris yang mendorong debat ini ke puncak keraguan.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "paragraph",
        html: "<strong>Immanuel Kant</strong> menawarkan sintesis: pengetahuan butuh keduanya. Indra memberi bahan mentah, sedangkan akal menyediakan struktur (ruang, waktu, kausalitas) untuk mengolahnya. Kalimat terkenalnya: 'Pikiran tanpa isi kosong, persepsi tanpa konsep buta.'",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Immanuel_Kant_(painted_portrait).jpg?width=400",
        alt: "Potret Immanuel Kant",
        caption: "Immanuel Kant, yang mendamaikan akal dan pengalaman dalam satu sistem.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "callout",
        tone: "key",
        title: "A priori vs a posteriori",
        html: "<strong>A priori</strong>: pengetahuan yang benar tanpa perlu pengalaman, misalnya '2 + 2 = 4'. <strong>A posteriori</strong>: pengetahuan yang bergantung pada pengalaman, misalnya 'air mendidih pada 100 derajat Celsius di tekanan normal'.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Posisi Kant",
        html: "Kant menyebut adanya penilaian <strong>sintetis a priori</strong>: menambah informasi baru namun tetap berlaku tanpa pengalaman, seperti aksioma geometri. Ini menjadi jembatan antara rasionalisme dan empirisme.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Cara mengingat",
        html: "Rasionalisme bertumpu pada <strong>akal</strong> (rasio). Empirisme bertumpu pada <strong>pengalaman</strong> (empiris, dari indra). Kant menggabungkan keduanya menjadi satu kesatuan.",
      },
      {
        type: "widget",
        widget: "PencocokAliranFilsafat",
      },
      {
        type: "case",
        title: "Studi Kasus: Anak yang belum pernah melihat salju",
        html: "Seorang anak di daerah tropis belum pernah menyentuh salju, tetapi bisa memahami bahwa 'segitiga punya tiga sisi' tanpa pengalaman apa pun. Pengetahuan geometri ini bersifat <strong>a priori</strong>. Namun untuk tahu 'salju terasa dingin', ia butuh pengalaman langsung, yaitu pengetahuan <strong>a posteriori</strong>. Kasus ini menunjukkan akal dan pengalaman mengisi peran berbeda.",
      },
      {
        type: "classifyExercise",
        prompt: "Klasifikasikan pernyataan berikut sebagai a priori atau a posteriori.",
        buckets: ["A priori", "A posteriori"],
        items: [
          { text: "Semua bujangan belum menikah", bucket: "A priori" },
          { text: "Jakarta lebih panas daripada Bandung hari ini", bucket: "A posteriori" },
          { text: "Tujuh ditambah lima sama dengan dua belas", bucket: "A priori" },
          { text: "Kopi di cangkir ini terasa pahit", bucket: "A posteriori" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan filsuf dengan aliran epistemologisnya.",
        pairs: [
          { left: "Rene Descartes", right: "Rasionalisme" },
          { left: "Baruch Spinoza", right: "Rasionalisme" },
          { left: "John Locke", right: "Empirisme" },
          { left: "David Hume", right: "Empirisme" },
          { left: "Immanuel Kant", right: "Sintesis rasionalisme dan empirisme" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Rasionalisme (Descartes) menjadikan akal sumber utama kebenaran.",
          "Empirisme (Locke, Hume) menjadikan pengalaman indra sumber pengetahuan.",
          "Kant memadukan keduanya: indra memberi bahan, akal memberi struktur.",
          "A priori tidak butuh pengalaman; a posteriori bergantung pada pengalaman.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tokoh yang dikenal sebagai rasionalis adalah?",
            options: ["John Locke", "David Hume", "Rene Descartes", "Francis Bacon"],
            answer: 2,
            explain: "Descartes percaya akal adalah sumber utama kebenaran.",
          },
          {
            q: "Gagasan pikiran lahir sebagai kertas kosong dikemukakan oleh?",
            options: ["Descartes", "John Locke", "Kant", "Plato"],
            answer: 1,
            explain: "Locke menyebutnya tabula rasa, pikiran kosong yang diisi pengalaman.",
          },
          {
            q: "Pengetahuan a priori adalah pengetahuan yang?",
            options: ["Butuh pengamatan indra", "Benar tanpa perlu pengalaman", "Selalu salah", "Berasal dari mayoritas"],
            answer: 1,
            explain: "A priori benar tanpa bergantung pada pengalaman, contohnya 2 + 2 = 4.",
          },
          {
            q: "Peran Kant dalam debat ini adalah?",
            options: ["Menolak akal sepenuhnya", "Menolak pengalaman sepenuhnya", "Memadukan akal dan pengalaman", "Mengabaikan keduanya"],
            answer: 2,
            explain: "Kant menyatukan kontribusi akal dan pengalaman dalam membentuk pengetahuan.",
          },
          {
            q: "Pernyataan 'air mendidih pada 100 derajat Celsius di tekanan normal' termasuk?",
            options: ["A priori", "A posteriori", "Tautologi murni", "Pengetahuan bawaan"],
            answer: 1,
            explain: "Pengetahuan ini diperoleh lewat pengamatan, jadi bersifat a posteriori.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "skeptisisme-dan-kepastian",
    levelId: "epistemologi",
    order: 3,
    title: "Skeptisisme dan Kepastian",
    summary: "Apakah kita bisa benar-benar yakin? Keraguan metodis Descartes, cogito sebagai titik pasti, dan problem of induction milik Hume.",
    durationMin: 13,
    tags: ["epistemologi", "skeptisisme", "descartes", "hume"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Skeptisisme</strong> adalah sikap meragukan klaim pengetahuan. Skeptisisme tidak selalu negatif; sebagai metode, ia membantu menyaring keyakinan yang rapuh. <strong>Descartes</strong> menggunakan <strong>keraguan metodis</strong>: ia meragukan segala sesuatu yang masih bisa diragukan demi menemukan dasar yang benar-benar pasti.",
      },
      {
        type: "video",
        comp: "SkeptisismeDescartes",
        title: "Video: Keraguan Metodis menuju Cogito",
        caption: "Bagaimana Descartes meragukan segalanya hingga sampai pada 'cogito ergo sum'.",
      },
      {
        type: "paragraph",
        html: "Skeptisisme adalah benang merah yang berkembang lintas era. Descartes (abad ke-17) memakai keraguan secara <strong>metodis</strong> untuk membangun kepastian baru, sedangkan satu abad kemudian <strong>David Hume</strong> mendorong keraguan lebih jauh hingga menggugat dasar induksi. Gagasan Hume inilah yang kelak membangunkan Kant dari 'tidur dogmatis' dan memicu sintesis pada babak berikutnya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Frans_Hals_-_Portret_van_René_Descartes.jpg?width=400",
        alt: "Potret Rene Descartes",
        caption: "Rene Descartes, perintis keraguan metodis dan penemu cogito ergo sum.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "paragraph",
        html: "Setelah meragukan indra, dunia luar, bahkan matematika (lewat hipotesis 'iblis penipu'), Descartes menemukan satu hal yang tidak bisa diragukan: fakta bahwa ia sedang ragu berarti ia sedang berpikir, dan jika berpikir maka ia ada. Inilah <strong>cogito ergo sum</strong>, titik pijak yang pasti.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Cogito ergo sum",
        html: "'Aku berpikir, maka aku ada.' Meski semua bisa diragukan, tindakan meragukan itu sendiri membuktikan adanya sang pemikir. Ini menjadi fondasi yang tidak bisa digugurkan oleh keraguan.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Problem of induction (Hume)",
        html: "<strong>David Hume</strong> menunjukkan bahwa induksi tidak terjamin secara logis. Fakta 'matahari selalu terbit' di masa lalu tidak membuktikan ia <strong>pasti</strong> terbit besok. Kita hanya berasumsi alam itu seragam, padahal asumsi itu sendiri tidak bisa dibuktikan tanpa berputar.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/David_Hume.jpg?width=400",
        alt: "Potret David Hume",
        caption: "David Hume, yang merumuskan problem of induction.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "callout",
        tone: "info",
        title: "Skeptisisme yang sehat",
        html: "Tujuan skeptisisme ilmiah bukan menyerah pada ketidaktahuan, melainkan menuntut bukti yang memadai sebelum menerima sebuah klaim sebagai pengetahuan.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Prinsip: Keyakinan Rasional Naik seiring Bertambahnya Bukti (ilustrasi konsep)",
        unit: "tingkat keyakinan (0-100)",
        source: "Ilustrasi konsep, bukan data survei",
        note: "Menggambarkan prinsip skeptisisme metodis: derajat keyakinan yang wajar sebaiknya mengikuti kekuatan bukti, bukan melampauinya.",
        data: [
          { label: "Tanpa bukti", value: 10, color: "#ef4444" },
          { label: "Satu pengamatan", value: 30, color: "#f59e0b" },
          { label: "Pengamatan berulang", value: 60, color: "#eab308" },
          { label: "Diuji & direplikasi", value: 90, color: "#10b981" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kalkun Hume",
        html: "Seekor kalkun diberi makan setiap pagi selama 364 hari, lalu menyimpulkan secara induktif bahwa manusia selalu memberinya makan. Pada hari ke-365, menjelang hari raya, ia justru disembelih. Kasus klasik ini menggambarkan <strong>problem of induction</strong>: pola masa lalu tidak menjamin masa depan, sebanyak apa pun pengamatannya.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan penjelasan yang tepat.",
        pairs: [
          { left: "Keraguan metodis", right: "Meragukan segala hal untuk menemukan dasar pasti" },
          { left: "Cogito ergo sum", right: "Aku berpikir, maka aku ada" },
          { left: "Problem of induction", right: "Pola masa lalu tak menjamin masa depan" },
          { left: "Iblis penipu", right: "Hipotesis Descartes yang menguji batas keraguan" },
        ],
      },
      {
        type: "widget",
        widget: "TebakFilsuf",
      },
      {
        type: "classifyExercise",
        prompt: "Pandangan ini lebih dekat ke Descartes (rasionalisme) atau Hume (empirisme)?",
        buckets: ["Rasionalisme", "Empirisme"],
        items: [
          { text: "Ada kepastian yang ditemukan murni lewat akal, seperti cogito", bucket: "Rasionalisme" },
          { text: "Semua pengetahuan kausal berasal dari kebiasaan mengamati", bucket: "Empirisme" },
          { text: "Induksi tidak terjamin karena hanya bertumpu pada pengalaman", bucket: "Empirisme" },
          { text: "Akal dapat menemukan dasar pasti tanpa bergantung pada indra", bucket: "Rasionalisme" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Skeptisisme meragukan klaim pengetahuan dan menuntut bukti yang memadai.",
          "Descartes memakai keraguan metodis untuk mencari dasar yang pasti.",
          "Cogito ergo sum adalah titik pijak yang tak bisa diragukan.",
          "Hume menunjukkan induksi tidak menjamin kebenaran masa depan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Keraguan metodis Descartes bertujuan untuk?",
            options: ["Menyerah pada ketidaktahuan", "Menemukan dasar yang pasti", "Menolak semua ilmu", "Mempercayai indra sepenuhnya"],
            answer: 1,
            explain: "Descartes meragukan segala sesuatu demi menemukan fondasi yang tak tergoyahkan.",
          },
          {
            q: "Apa yang menurut Descartes tidak bisa diragukan?",
            options: ["Keberadaan dunia luar", "Kebenaran indra", "Fakta bahwa ia berpikir", "Keberadaan Tuhan"],
            answer: 2,
            explain: "Tindakan berpikir membuktikan adanya sang pemikir: cogito ergo sum.",
          },
          {
            q: "Problem of induction milik Hume menyatakan bahwa?",
            options: ["Akal selalu benar", "Pola masa lalu tidak menjamin masa depan", "Pengalaman tidak ada", "Matematika salah"],
            answer: 1,
            explain: "Sebanyak apa pun pengamatan, kesimpulan induktif tidak terjamin pasti.",
          },
          {
            q: "Hipotesis 'iblis penipu' digunakan Descartes untuk?",
            options: ["Membuktikan Tuhan", "Menguji sejauh mana keraguan bisa berjalan", "Menolak akal", "Menjelaskan induksi"],
            answer: 1,
            explain: "Iblis penipu adalah alat berpikir untuk menguji batas keraguan.",
          },
          {
            q: "Skeptisisme yang sehat dalam sains berarti?",
            options: ["Menolak semua bukti", "Menuntut bukti memadai sebelum menerima klaim", "Percaya tanpa syarat", "Mengikuti mayoritas"],
            answer: 1,
            explain: "Skeptisisme ilmiah menahan keyakinan sampai bukti cukup tersedia.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "teori-kebenaran",
    levelId: "epistemologi",
    order: 4,
    title: "Teori Kebenaran dan Era Post-Truth",
    summary: "Tiga teori klasik tentang apa itu benar: korespondensi, koherensi, dan pragmatis. Lalu tantangan post-truth dan hoaks di era digital.",
    durationMin: 14,
    tags: ["epistemologi", "kebenaran", "post-truth", "hoaks"],
    blocks: [
      {
        type: "paragraph",
        html: "Setelah membahas sumber pengetahuan, muncul pertanyaan: apa artinya sebuah pernyataan itu <strong>benar</strong>? Filsafat menawarkan tiga teori utama. <strong>Teori korespondensi</strong>: benar jika pernyataan sesuai dengan fakta di dunia nyata. <strong>Teori koherensi</strong>: benar jika konsisten dan selaras dengan keyakinan lain dalam satu sistem. <strong>Teori pragmatis</strong>: benar jika berguna dan berhasil dalam praktik.",
      },
      {
        type: "video",
        comp: "TeoriKebenaran",
        title: "Video: Tiga Teori Kebenaran",
        caption: "Membandingkan teori korespondensi, koherensi, dan pragmatis.",
      },
      {
        type: "paragraph",
        html: "Pertanyaan 'apa itu benar' adalah lanjutan dari perjalanan epistemologi yang sudah kita telusuri. Setelah <strong>Descartes</strong> mencari kepastian lewat akal, <strong>Locke</strong> dan <strong>Hume</strong> menekankan pengalaman, lalu <strong>Kant</strong> menyatukan keduanya, para pemikir berikutnya bergeser dari pertanyaan 'dari mana pengetahuan berasal' ke 'kapan sebuah klaim layak disebut benar'. Tiga teori kebenaran di bawah ini adalah buah dari perdebatan panjang itu.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/David_Hume.jpg?width=400",
        alt: "Potret David Hume",
        caption: "David Hume, yang keraguannya mempertajam pertanyaan tentang dasar kebenaran.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Immanuel_Kant_(painted_portrait).jpg?width=400",
        alt: "Potret Immanuel Kant",
        caption: "Immanuel Kant, yang sintesisnya menutup babak rasionalisme-empirisme klasik.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "paragraph",
        html: "Di era digital, ketiga teori ini diuji oleh fenomena <strong>post-truth</strong>, yaitu situasi ketika emosi dan keyakinan pribadi lebih berpengaruh daripada fakta objektif. <strong>Hoaks</strong> menyebar cepat karena sering terasa koheren dengan prasangka kita atau terasa berguna untuk memperkuat keyakinan kelompok, meski tidak berkorespondensi dengan fakta.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga teori kebenaran",
        html: "<strong>Korespondensi</strong>: cocok dengan fakta. <strong>Koherensi</strong>: konsisten dengan sistem keyakinan. <strong>Pragmatis</strong>: berhasil dalam praktik. Teori korespondensi paling banyak dipakai dalam sains.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bahaya post-truth",
        html: "Saat orang hanya menuntut koherensi dengan prasangkanya dan mengabaikan korespondensi dengan fakta, hoaks mudah dipercaya. Penting menguji klaim dengan bukti nyata, bukan sekadar rasa cocok.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Cek sebelum percaya",
        html: "Tanyakan: apakah klaim ini cocok dengan fakta yang bisa diverifikasi (korespondensi)? Apakah sumbernya kredibel? Apakah ada bukti tandingan? Ini menerapkan teori kebenaran secara praktis melawan hoaks.",
      },
      {
        type: "widget",
        widget: "PencocokAliranFilsafat",
      },
      {
        type: "widget",
        widget: "SimulatorTeoriKebenaran",
      },
      {
        type: "case",
        title: "Studi Kasus: Pesan berantai soal 'air panas membunuh virus'",
        html: "Sebuah pesan viral mengklaim minum air panas tiap jam pasti mencegah suatu penyakit. Pesan ini terasa <strong>koheren</strong> dengan kepercayaan umum bahwa panas membunuh kuman dan terasa <strong>berguna</strong> sehingga banyak diteruskan. Namun ketika dicek dengan teori <strong>korespondensi</strong>, klaim itu tidak sesuai bukti medis. Kasus ini menunjukkan koherensi dan rasa berguna saja tidak cukup; kebenaran ilmiah menuntut korespondensi dengan fakta.",
      },
      {
        type: "classifyExercise",
        prompt: "Teori kebenaran mana yang paling cocok dengan setiap penilaian berikut?",
        buckets: ["Korespondensi", "Koherensi", "Pragmatis"],
        items: [
          { text: "Pernyataan ini benar karena sesuai hasil pengukuran nyata", bucket: "Korespondensi" },
          { text: "Teori ini benar karena tidak bertentangan dengan teori lain dalam sistem", bucket: "Koherensi" },
          { text: "Ide ini benar karena terbukti berhasil saat diterapkan", bucket: "Pragmatis" },
          { text: "Peta dianggap benar karena cocok dengan keadaan wilayah sebenarnya", bucket: "Korespondensi" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan teori kebenaran dengan inti gagasannya.",
        pairs: [
          { left: "Korespondensi", right: "Benar jika sesuai fakta di dunia nyata" },
          { left: "Koherensi", right: "Benar jika konsisten dengan sistem keyakinan" },
          { left: "Pragmatis", right: "Benar jika berguna dan berhasil dalam praktik" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Teori korespondensi: benar jika sesuai fakta dunia nyata.",
          "Teori koherensi: benar jika konsisten dengan sistem keyakinan.",
          "Teori pragmatis: benar jika berguna dan berhasil dalam praktik.",
          "Post-truth dan hoaks berkembang saat fakta dikalahkan emosi dan prasangka.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Teori korespondensi menyatakan sebuah pernyataan benar jika?",
            options: ["Konsisten dengan keyakinan lain", "Sesuai dengan fakta di dunia nyata", "Berguna dalam praktik", "Disetujui banyak orang"],
            answer: 1,
            explain: "Korespondensi: benar jika cocok dengan fakta nyata.",
          },
          {
            q: "Teori koherensi menilai kebenaran berdasarkan?",
            options: ["Kesesuaian dengan fakta", "Konsistensi dengan sistem keyakinan", "Hasil praktis", "Popularitas"],
            answer: 1,
            explain: "Koherensi: benar jika selaras dan konsisten dengan keyakinan lain.",
          },
          {
            q: "Teori pragmatis mengukur kebenaran dari?",
            options: ["Kesesuaian fakta", "Konsistensi logis", "Kegunaan dan keberhasilan praktik", "Wahyu"],
            answer: 2,
            explain: "Pragmatisme: benar jika berhasil dan berguna saat diterapkan.",
          },
          {
            q: "Istilah post-truth menggambarkan situasi ketika?",
            options: ["Fakta selalu menang", "Emosi dan keyakinan pribadi mengalahkan fakta objektif", "Tidak ada hoaks", "Sains diutamakan"],
            answer: 1,
            explain: "Post-truth: emosi dan keyakinan lebih berpengaruh daripada fakta.",
          },
          {
            q: "Cara paling tepat melawan hoaks adalah?",
            options: ["Mengikuti yang viral", "Memverifikasi klaim dengan fakta yang bisa diuji", "Percaya jika terasa cocok", "Meneruskan ke banyak orang"],
            answer: 1,
            explain: "Menguji korespondensi klaim dengan bukti nyata melawan penyebaran hoaks.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "masalah-gettier",
    levelId: "epistemologi",
    order: 5,
    title: "Masalah Gettier: Retaknya Definisi Pengetahuan",
    summary: "Edmund Gettier menantang definisi klasik 'keyakinan benar yang terjustifikasi' lewat kasus tandingan, dan bagaimana epistemologi menambalnya.",
    durationMin: 13,
    tags: ["epistemologi", "Gettier", "justified true belief", "justifikasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Di pelajaran awal kita mengenal definisi klasik: pengetahuan adalah <strong>keyakinan benar yang terjustifikasi</strong> (justified true belief / JTB). Definisi ini bertahan sejak dialog <em>Theaetetus</em> karya <strong>Plato</strong> selama lebih dari dua ribu tahun, hampir tanpa gugatan serius.",
      },
      {
        type: "paragraph",
        html: "Pada 1963, filsuf <strong>Edmund Gettier</strong> menerbitkan makalah yang sangat pendek (hanya sekitar tiga halaman) namun mengguncang. Ia menunjukkan kasus di mana seseorang punya keyakinan yang <strong>benar</strong> dan <strong>terjustifikasi</strong>, tetapi kita ragu menyebutnya tahu, karena benarnya hanya karena <strong>keberuntungan</strong>.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Plato_Silanion_Musei_Capitolini_MC1377.jpg?width=400",
        alt: "Potret patung Plato",
        caption: "Plato, yang dalam Theaetetus merintis gagasan pengetahuan sebagai keyakinan benar yang berdasar.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "callout",
        tone: "key",
        title: "Anatomi kasus Gettier",
        html: "Sebuah keyakinan bisa memenuhi ketiga syarat JTB (diyakini, benar, terjustifikasi) tetapi tetap bukan pengetahuan bila kebenarannya tersambung lewat <strong>keberuntungan</strong>, bukan lewat justifikasinya. Justifikasi dan kebenaran 'kebetulan bertemu', bukan saling terhubung.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tesis, antitesis, lalu tambalan",
        html: "Ini contoh dialektika dalam epistemologi. <strong>Tesis</strong>: pengetahuan = JTB. <strong>Antitesis</strong>: kasus Gettier menunjukkan JTB tidak cukup. <strong>Sintesis</strong>: para filsuf menambah syarat keempat, misalnya 'tanpa premis palsu' atau <strong>reliabilisme</strong> (keyakinan harus lahir dari proses yang andal).",
      },
      {
        type: "video",
        comp: "TeoriKebenaran",
        title: "Video: Apa Artinya Benar",
        caption: "Kasus Gettier mempertajam hubungan antara kebenaran, keyakinan, dan justifikasi.",
      },
      { type: "widget", widget: "TebakFilsuf" },
      {
        type: "table",
        caption: "Kasus domba di padang dipetakan ke tiga syarat JTB",
        headers: ["Syarat JTB", "Terpenuhi?", "Dalam kasus domba"],
        rows: [
          ["Keyakinan (belief)", "Ya", "Andi yakin ada domba di padang"],
          ["Benar (true)", "Ya", "Memang ada domba, tersembunyi di balik bukit"],
          ["Terjustifikasi (justified)", "Ya", "Ia melihat sesuatu yang tampak persis seperti domba"],
          ["Tetap pengetahuan?", "Tidak", "Benarnya hanya karena keberuntungan, bukan dari yang ia lihat"],
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Domba di padang (Chisholm)",
        html: "Andi memandang padang dan melihat dari jauh benda putih berbulu, lalu yakin 'ada domba di padang itu'. Ternyata benda yang ia lihat adalah <strong>anjing berbulu putih</strong>, bukan domba. Namun, kebetulan di balik bukit yang tak terlihat, memang ada <strong>seekor domba sungguhan</strong>. Keyakinan Andi <strong>benar</strong> (ada domba) dan <strong>terjustifikasi</strong> (ia melihat sesuatu yang meyakinkan), tetapi kita enggan menyebutnya tahu, sebab ia benar hanya karena beruntung.",
      },
      {
        type: "classifyExercise",
        prompt: "Kasus berikut tergolong pengetahuan sejati atau sekadar keyakinan benar yang beruntung (kasus Gettier)?",
        buckets: ["Pengetahuan sejati", "Beruntung (Gettier)"],
        items: [
          { text: "Aku melihat domba asli di padang, lalu yakin ada domba", bucket: "Pengetahuan sejati" },
          { text: "Aku menyangka anjing putih itu domba, tapi kebetulan ada domba lain tak terlihat", bucket: "Beruntung (Gettier)" },
          { text: "Jam yang akurat menunjukkan pukul tiga dan memang pukul tiga", bucket: "Pengetahuan sejati" },
          { text: "Jam yang berhenti kebetulan menunjuk pukul tiga saat memang pukul tiga", bucket: "Beruntung (Gettier)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan penjelasannya.",
        pairs: [
          { left: "Justified true belief", right: "Definisi klasik pengetahuan dengan tiga syarat" },
          { left: "Kasus Gettier", right: "Keyakinan benar dan terjustifikasi tetapi benar karena keberuntungan" },
          { left: "Syarat keempat", right: "Tambahan seperti larangan bersandar pada premis palsu" },
          { left: "Reliabilisme", right: "Pengetahuan harus lahir dari proses yang andal" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Definisi klasik JTB bertahan sejak Plato selama ribuan tahun.",
          "Gettier (1963) menunjukkan JTB belum cukup untuk pengetahuan.",
          "Kasus Gettier: keyakinan benar dan terjustifikasi tetapi benar karena keberuntungan.",
          "Tanggapan: tambah syarat keempat atau beralih ke reliabilisme.",
          "Justifikasi dan kebenaran harus saling terhubung, bukan kebetulan bertemu.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Definisi pengetahuan yang ditantang Gettier adalah?",
            options: ["Keyakinan saja", "Keyakinan benar yang terjustifikasi", "Tebakan beruntung", "Pendapat mayoritas"],
            answer: 1,
            explain: "Gettier menggugat definisi justified true belief.",
          },
          {
            q: "Inti kasus Gettier adalah keyakinan yang?",
            options: ["Salah dan tak berdasar", "Benar dan terjustifikasi tetapi benar karena keberuntungan", "Tidak diyakini", "Tanpa justifikasi"],
            answer: 1,
            explain: "Ketiga syarat terpenuhi, tetapi kebenarannya bertumpu pada keberuntungan.",
          },
          {
            q: "Pada tahun berapa Gettier menerbitkan makalahnya?",
            options: ["1781", "1859", "1963", "2001"],
            answer: 2,
            explain: "Makalah singkat Gettier terbit pada 1963.",
          },
          {
            q: "Salah satu tanggapan atas masalah Gettier adalah?",
            options: ["Menghapus syarat kebenaran", "Menambah syarat keempat atau beralih ke reliabilisme", "Menolak semua pengetahuan", "Mengandalkan mayoritas"],
            answer: 1,
            explain: "Para filsuf menambah syarat baru atau menekankan proses yang andal.",
          },
          {
            q: "Pelajaran utama dari kasus Gettier adalah?",
            options: ["Justifikasi tidak penting", "Justifikasi dan kebenaran harus terhubung, bukan kebetulan bertemu", "Kebenaran tidak ada", "Keyakinan selalu salah"],
            answer: 1,
            explain: "Pengetahuan menuntut hubungan yang tepat antara justifikasi dan kebenaran.",
          },
        ],
      },
    ],
  },
];
