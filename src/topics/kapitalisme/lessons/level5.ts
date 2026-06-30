import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "adam-smith-pemikir-ekonomi",
    levelId: "pemikir",
    order: 1,
    title: "Adam Smith & Lahirnya Ilmu Ekonomi",
    summary:
      "Tokoh yang meletakkan dasar pemikiran ekonomi modern: pembagian kerja, tangan tak tampak, dan keyakinan bahwa pasar bisa memakmurkan banyak orang.",
    durationMin: 14,
    tags: ["pemikir", "adam smith", "pembagian kerja"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Adam Smith</strong> (1723-1790), filsuf moral asal Skotlandia, sering disebut <strong>bapak ilmu ekonomi</strong>. Karyanya <em>The Wealth of Nations</em> (1776) menjadi titik awal ekonomi sebagai ilmu tersendiri. Dua gagasannya paling berpengaruh: <strong>pembagian kerja</strong> dan <strong>tangan tak tampak</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Pembagian kerja",
        html: "Smith mengamati pabrik peniti: satu pekerja sendirian hampir tak bisa membuat peniti, tetapi bila pekerjaan dipecah menjadi langkah-langkah khusus, sekelompok kecil orang bisa membuat ribuan peniti sehari. <strong>Spesialisasi</strong> melipatgandakan produktivitas.",
      },
      {
        type: "video",
        comp: "SejarahKapitalismeVideo",
        title: "Gagasan yang Membentuk Ekonomi",
        caption: "Dari merkantilisme ke pemikiran pasar bebas Adam Smith dan penerusnya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Adam_Smith%2C_1723_-_1790._Political_economist_-_Google_Art_Project.jpg?width=400",
        alt: "Lukisan potret Adam Smith",
        caption: "Adam Smith, penulis The Wealth of Nations (1776), peletak dasar ilmu ekonomi modern.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Produktivitas Pabrik Peniti: Sendiri vs Pembagian Kerja (ilustrasi Smith)",
        unit: "peniti per orang per hari",
        source: "ilustrasi berdasarkan contoh Adam Smith",
        note: "Dengan memecah pekerjaan menjadi langkah khusus, produksi per orang melonjak ribuan kali.",
        data: [
          { label: "Kerja sendiri", value: 20, color: "#f87171" },
          { label: "Pembagian kerja", value: 4800, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pembagian kerja di dapur restoran",
        html: "Sebuah restoran ramai tidak menyuruh satu koki memasak seluruh pesanan dari awal sampai akhir. Sebaliknya, ada yang khusus memotong bahan, menggoreng, menata piring, dan mencuci. <strong>Spesialisasi</strong> ini membuat tiap orang makin mahir di tugasnya dan alur kerja jauh lebih cepat. Inilah penerapan langsung gagasan Adam Smith: memecah pekerjaan menjadi bagian-bagian khusus melipatgandakan hasil.",
      },
      {
        type: "case",
        title: "Sejarah: Dari Smith ke Ricardo dan keunggulan komparatif",
        html: "Penerus Smith, <strong>David Ricardo</strong> (1772-1823), memperluas gagasan spesialisasi ke perdagangan antarnegara lewat teori <strong>keunggulan komparatif</strong> (1817). Idenya: meski satu negara lebih unggul memproduksi segalanya, kedua negara tetap untung bila masing-masing fokus pada yang <em>paling efisien</em> mereka buat, lalu berdagang. Teori ini sampai hari ini menjadi dasar argumen mengapa perdagangan bebas bisa menguntungkan semua pihak.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang pekerja sendiri membuat 20 peniti/hari. Dengan pembagian kerja, 10 pekerja membuat 48.000 peniti/hari. Berapa peniti per orang dengan pembagian kerja?",
        answer: 4800,
        tolerance: 0,
        suffix: "peniti",
        solution:
          "48.000 / 10 = <strong>4.800 peniti per orang</strong>, yaitu 240 kali lipat dibanding bekerja sendiri. Itulah kekuatan spesialisasi yang ditunjukkan Adam Smith.",
        hint: "Bagi total peniti dengan jumlah pekerja.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan pemikir dengan gagasan kuncinya.",
        pairs: [
          { left: "Adam Smith", right: "Tangan tak tampak & pembagian kerja" },
          { left: "David Ricardo", right: "Keunggulan komparatif dalam perdagangan" },
          { left: "Karl Marx", right: "Kritik terhadap eksploitasi buruh" },
          { left: "John Maynard Keynes", right: "Peran negara menstabilkan ekonomi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Adam Smith (1776) meletakkan dasar ilmu ekonomi lewat The Wealth of Nations.",
          "Pembagian kerja dan spesialisasi melipatgandakan produktivitas.",
          "Tangan tak tampak: koordinasi pasar muncul dari kepentingan pribadi.",
          "David Ricardo memperluasnya ke perdagangan lewat keunggulan komparatif (1817).",
          "Gagasan para pemikir ini masih membentuk perdebatan ekonomi sampai sekarang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa Adam Smith disebut bapak ilmu ekonomi?",
            options: [
              "Ia menemukan uang",
              "Karyanya 1776 menjadi titik awal ekonomi sebagai ilmu",
              "Ia mendirikan bank pertama",
              "Ia menjadi raja Skotlandia",
            ],
            answer: 1,
            explain: "The Wealth of Nations menjadi fondasi ekonomi sebagai disiplin tersendiri.",
          },
          {
            q: "Apa inti pembagian kerja menurut Smith?",
            options: [
              "Semua orang mengerjakan semua hal",
              "Spesialisasi langkah kerja melipatgandakan produktivitas",
              "Pekerja harus libur lebih banyak",
              "Mesin menggantikan semua manusia",
            ],
            answer: 1,
            explain: "Memecah pekerjaan menjadi langkah khusus membuat tiap orang lebih produktif.",
          },
          {
            q: "Apa gagasan utama David Ricardo?",
            options: [
              "Keunggulan komparatif dalam perdagangan",
              "Tangan tak tampak",
              "Bank sentral",
              "Negara kesejahteraan",
            ],
            answer: 0,
            explain: "Ricardo menunjukkan dua negara tetap untung bila berspesialisasi lalu berdagang.",
          },
          {
            q: "10 pekerja menghasilkan 48.000 peniti/hari berarti per orang?",
            options: ["480", "4.800", "48.000", "240"],
            answer: 1,
            explain: "48.000 dibagi 10 sama dengan 4.800 peniti per orang.",
          },
          {
            q: "Pemikir mana yang mengkritik eksploitasi buruh?",
            options: ["Adam Smith", "David Ricardo", "Karl Marx", "Milton Friedman"],
            answer: 2,
            explain: "Karl Marx terkenal dengan kritiknya terhadap eksploitasi pekerja dalam kapitalisme.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "david-ricardo-keunggulan-komparatif",
    levelId: "pemikir",
    order: 2,
    title: "David Ricardo & Keunggulan Komparatif",
    summary:
      "Mengapa dua negara tetap untung berdagang meski salah satunya lebih hebat di segala hal? Jawaban Ricardo lewat keunggulan komparatif dan biaya kesempatan.",
    durationMin: 14,
    tags: ["pemikir", "david ricardo", "perdagangan", "keunggulan komparatif"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>David Ricardo</strong> (1772-1823) adalah pialang saham yang menjadi salah satu ekonom paling berpengaruh. Dalam <em>On the Principles of Political Economy and Taxation</em> (1817) ia menjelaskan <strong>keunggulan komparatif</strong>: prinsip yang sampai hari ini menjadi dasar argumen perdagangan bebas.",
      },
      {
        type: "paragraph",
        html: "Kejutannya begini: meski satu negara lebih efisien memproduksi <em>semua</em> barang (punya keunggulan absolut), kedua negara tetap lebih makmur bila masing-masing berspesialisasi pada barang yang <strong>biaya kesempatannya paling rendah</strong>, lalu saling berdagang.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_David_Ricardo_by_Thomas_Phillips.jpg?width=400",
        alt: "Lukisan potret David Ricardo karya Thomas Phillips",
        caption: "David Ricardo, perumus teori keunggulan komparatif (1817).",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Biaya kesempatan adalah kuncinya",
        html: "Keunggulan komparatif bukan soal siapa yang lebih cepat, melainkan soal <strong>apa yang dikorbankan</strong>. Negara sebaiknya membuat barang yang, untuk memproduksinya, ia mengorbankan paling sedikit produksi barang lain.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Contoh klasik Ricardo",
        html: "Ricardo memakai contoh Inggris dan Portugal yang berdagang kain dan anggur. Portugal lebih efisien di keduanya, tetapi tetap untung bila ia fokus pada anggur (keunggulan komparatifnya) dan membeli kain dari Inggris.",
      },
      {
        type: "video",
        comp: "KeunggulanKomparatif",
        title: "Keunggulan Komparatif Bekerja",
        caption: "Bagaimana spesialisasi dan perdagangan membuat dua pihak sama-sama untung.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Biaya Kesempatan 1 Meter Kain (dalam botol anggur)",
        unit: "botol anggur dikorbankan",
        source: "ilustrasi berdasarkan contoh Ricardo",
        note: "Negara A mengorbankan lebih sedikit anggur untuk membuat kain, jadi keunggulan komparatif kain ada di A.",
        data: [
          { label: "Negara A", value: 0.5, color: "#34d399" },
          { label: "Negara B", value: 1, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dokter dan asistennya",
        html: "Seorang dokter mengetik 2 kali lebih cepat daripada asistennya, jadi ia unggul absolut di mengetik <em>dan</em> memeriksa pasien. Tetapi satu jam dokter mengetik berarti kehilangan pendapatan dari memeriksa banyak pasien. Maka <strong>biaya kesempatan</strong> dokter untuk mengetik sangat tinggi. Lebih untung bila dokter fokus memeriksa pasien dan menyerahkan pengetikan ke asisten. Itulah keunggulan komparatif dalam kehidupan sehari-hari.",
      },
      {
        type: "case",
        title: "Sejarah: Ricardo, Hukum Jagung, dan perdagangan bebas Inggris",
        html: "Pada awal 1800-an Inggris memberlakukan <strong>Corn Laws</strong> (Hukum Jagung) yang membatasi impor biji-bijian demi melindungi tuan tanah. Ricardo, yang duduk di parlemen, menentangnya dengan argumen keunggulan komparatif: melarang impor pangan murah justru memiskinkan rakyat. Perdebatan ini berlangsung bertahun-tahun hingga Corn Laws akhirnya dicabut pada 1846, menjadi tonggak penting kemenangan gagasan perdagangan bebas.",
      },
      {
        type: "calcExercise",
        prompt:
          "Di Negara A, satu pekerja per hari bisa membuat 10 meter kain ATAU 5 botol anggur. Berapa botol anggur yang dikorbankan untuk memproduksi 1 meter kain (biaya kesempatan)?",
        answer: 0.5,
        tolerance: 0.01,
        suffix: "botol",
        solution:
          "Biaya kesempatan 1 meter kain = anggur dibagi kain = 5 / 10 = <strong>0,5 botol anggur</strong>. Karena angka ini lebih kecil dibanding negara lain, A punya keunggulan komparatif di kain.",
        hint: "Biaya kesempatan 1 kain = jumlah anggur dibagi jumlah kain.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pernyataan ke dalam keunggulan absolut atau keunggulan komparatif.",
        buckets: ["Keunggulan absolut", "Keunggulan komparatif"],
        items: [
          { text: "Mampu memproduksi lebih banyak dengan sumber daya sama", bucket: "Keunggulan absolut" },
          { text: "Memproduksi barang dengan biaya kesempatan paling rendah", bucket: "Keunggulan komparatif" },
          { text: "Dasar utama argumen keuntungan dari perdagangan", bucket: "Keunggulan komparatif" },
          { text: "Sekadar membandingkan siapa yang lebih cepat atau efisien", bucket: "Keunggulan absolut" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "David Ricardo merumuskan keunggulan komparatif pada 1817.",
          "Perdagangan menguntungkan bila tiap pihak fokus pada biaya kesempatan terendahnya.",
          "Keunggulan absolut berbeda dari keunggulan komparatif.",
          "Argumen Ricardo membantu mencabut Corn Laws Inggris pada 1846.",
          "Prinsip ini masih jadi dasar kebijakan perdagangan bebas modern.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa inti keunggulan komparatif?",
            options: [
              "Negara yang lebih cepat selalu menang",
              "Fokus pada barang dengan biaya kesempatan terendah lalu berdagang",
              "Setiap negara harus memproduksi semua barangnya sendiri",
              "Perdagangan selalu merugikan negara kecil",
            ],
            answer: 1,
            explain: "Keunggulan komparatif soal biaya kesempatan, bukan sekadar siapa lebih efisien.",
          },
          {
            q: "Tahun berapa Ricardo menerbitkan teorinya?",
            options: ["1776", "1817", "1848", "1936"],
            answer: 1,
            explain: "Principles of Political Economy and Taxation terbit pada 1817.",
          },
          {
            q: "Jika 1 pekerja membuat 10 kain atau 5 anggur, biaya kesempatan 1 kain adalah?",
            options: ["2 anggur", "0,5 anggur", "5 anggur", "10 anggur"],
            answer: 1,
            explain: "5 dibagi 10 sama dengan 0,5 botol anggur per meter kain.",
          },
          {
            q: "Apa perbedaan keunggulan absolut dan komparatif?",
            options: [
              "Tidak ada bedanya",
              "Absolut soal produksi lebih banyak; komparatif soal biaya kesempatan",
              "Komparatif hanya untuk negara kaya",
              "Absolut hanya berlaku untuk jasa",
            ],
            answer: 1,
            explain: "Keunggulan absolut membandingkan output, komparatif membandingkan biaya kesempatan.",
          },
          {
            q: "Peristiwa sejarah apa yang terkait argumen Ricardo?",
            options: [
              "Pencabutan Corn Laws Inggris 1846",
              "Revolusi Prancis 1789",
              "Depresi Besar 1929",
              "Krisis minyak 1973",
            ],
            answer: 0,
            explain: "Argumen perdagangan bebas Ricardo turut mendorong pencabutan Corn Laws pada 1846.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "karl-marx-kritik-kapitalisme",
    levelId: "pemikir",
    order: 3,
    title: "Karl Marx & Kritik Kapitalisme",
    summary:
      "Kritik paling berpengaruh terhadap kapitalisme: nilai lebih, eksploitasi buruh, dan ramalan tentang ketimpangan yang masih diperdebatkan sampai kini.",
    durationMin: 15,
    tags: ["pemikir", "karl marx", "nilai lebih", "ketimpangan"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Karl Marx</strong> (1818-1883), filsuf dan ekonom asal Jerman, adalah pengkritik kapitalisme paling berpengaruh sepanjang sejarah. Bersama Friedrich Engels ia menulis <em>Manifesto Komunis</em> (1848), lalu karya besarnya <em>Das Kapital</em> jilid pertama terbit pada 1867.",
      },
      {
        type: "paragraph",
        html: "Inti kritik Marx adalah <strong>nilai lebih</strong> (surplus value): pekerja menciptakan nilai lebih besar daripada upah yang mereka terima, dan selisihnya diambil pemilik modal sebagai keuntungan. Bagi Marx, inilah sumber <strong>eksploitasi</strong> dan akar ketegangan antara pekerja dan pemilik modal.",
      },
      {
        type: "video",
        comp: "KetimpanganGiniVideo",
        title: "Akar Ketimpangan yang Disorot Marx",
        caption: "Bagaimana penumpukan modal bisa memperlebar jurang antara pemilik modal dan pekerja.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png?width=400",
        alt: "Foto potret Karl Marx tahun 1875",
        caption: "Karl Marx, penulis Das Kapital (1867) dan Manifesto Komunis (1848).",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Nilai lebih (surplus value)",
        html: "Jika pekerja menghasilkan barang senilai Rp 1.000.000 dalam sehari tetapi hanya diupah Rp 250.000, maka Rp 750.000 adalah nilai lebih yang diambil pemilik modal. Tingkat eksploitasi = nilai lebih dibagi upah.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Yang terbukti dan yang meleset",
        html: "Marx benar menyoroti kecenderungan kapitalisme menumpuk modal dan memperlebar ketimpangan. Tetapi ramalannya bahwa kapitalisme pasti runtuh digantikan komunisme tidak terjadi seperti yang ia bayangkan; banyak negara justru memperbaiki kapitalisme lewat serikat buruh dan negara kesejahteraan.",
      },
      {
        type: "widget",
        widget: "KalkulatorGini",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Pembagian Nilai dari Satu Hari Kerja (ilustrasi nilai lebih)",
        unit: "rupiah",
        source: "ilustrasi berdasarkan konsep Marx",
        note: "Dari nilai Rp 1 juta yang diciptakan pekerja, hanya seperempat kembali sebagai upah dalam contoh ini.",
        data: [
          { label: "Upah pekerja", value: 250000, color: "#34d399" },
          { label: "Nilai lebih (pemilik modal)", value: 750000, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pabrik garmen dan nilai lebih",
        html: "Seorang penjahit di pabrik garmen membuat 20 kemeja sehari. Tiap kemeja dijual Rp 100.000 sehingga ia menciptakan nilai Rp 2.000.000. Setelah dikurangi bahan Rp 800.000, nilai yang ditambahkan tenaganya adalah Rp 1.200.000. Jika upah hariannya Rp 300.000, maka Rp 900.000 menjadi nilai lebih bagi pemilik pabrik. Marx akan menyebut selisih inilah inti dari hubungan modal dan buruh.",
      },
      {
        type: "case",
        title: "Sejarah: Manifesto 1848 dan tahun revolusi Eropa",
        html: "<strong>Manifesto Komunis</strong> terbit pada Februari 1848, persis ketika gelombang revolusi melanda Eropa pada tahun yang sama (Revolusi 1848 di Prancis, Jerman, Austria, dan Italia). Karya ini membuka dengan kalimat terkenal tentang hantu komunisme yang menghantui Eropa. Meski revolusi 1848 sebagian besar gagal, gagasan Marx terus berkembang dan kelak memengaruhi gerakan buruh, partai sosialis, hingga revolusi besar pada abad ke-20.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang pekerja menciptakan nilai Rp 1.000.000 per hari tetapi diupah Rp 250.000. Berapa tingkat eksploitasi menurut Marx (nilai lebih dibagi upah, dalam persen)?",
        answer: 300,
        tolerance: 1,
        suffix: "%",
        solution:
          "Nilai lebih = 1.000.000 - 250.000 = Rp 750.000. Tingkat eksploitasi = 750.000 / 250.000 = 3 = <strong>300%</strong>. Artinya pekerja menghasilkan tiga kali lipat upahnya sebagai keuntungan bagi pemilik modal.",
        hint: "Hitung dulu nilai lebih (nilai diciptakan dikurangi upah), lalu bagi dengan upah.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah Marx dengan maknanya.",
        pairs: [
          { left: "Nilai lebih", right: "Selisih nilai yang diciptakan pekerja dan upahnya" },
          { left: "Borjuasi", right: "Kelas pemilik modal dan alat produksi" },
          { left: "Proletariat", right: "Kelas pekerja yang menjual tenaganya" },
          { left: "Das Kapital", right: "Karya utama Marx yang terbit 1867" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Karl Marx menulis Manifesto Komunis (1848) dan Das Kapital (1867).",
          "Konsep nilai lebih menjelaskan keuntungan sebagai selisih nilai yang diambil dari pekerja.",
          "Marx menyoroti pertentangan kelas antara borjuasi dan proletariat.",
          "Ramalan keruntuhan total kapitalisme tidak terjadi seperti yang ia bayangkan.",
          "Kritik Marx mendorong lahirnya serikat buruh dan negara kesejahteraan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud nilai lebih (surplus value)?",
            options: [
              "Bonus tahunan pekerja",
              "Selisih antara nilai yang diciptakan pekerja dan upah yang diterimanya",
              "Pajak yang dibayar perusahaan",
              "Keuntungan dari menabung di bank",
            ],
            answer: 1,
            explain: "Nilai lebih adalah selisih nilai ciptaan pekerja dengan upahnya, yang diambil pemilik modal.",
          },
          {
            q: "Kapan Das Kapital jilid pertama terbit?",
            options: ["1848", "1867", "1776", "1917"],
            answer: 1,
            explain: "Das Kapital jilid pertama terbit pada 1867.",
          },
          {
            q: "Jika pekerja menciptakan nilai Rp 1 juta dan diupah Rp 250.000, tingkat eksploitasinya?",
            options: ["75%", "100%", "300%", "25%"],
            answer: 2,
            explain: "Nilai lebih Rp 750.000 dibagi upah Rp 250.000 sama dengan 300%.",
          },
          {
            q: "Apa istilah Marx untuk kelas pekerja?",
            options: ["Borjuasi", "Proletariat", "Aristokrasi", "Bangsawan"],
            answer: 1,
            explain: "Proletariat adalah kelas pekerja yang hanya memiliki tenaganya untuk dijual.",
          },
          {
            q: "Manakah ramalan Marx yang tidak terbukti seperti yang ia bayangkan?",
            options: [
              "Kapitalisme menumpuk modal",
              "Ketimpangan bisa melebar",
              "Kapitalisme pasti runtuh total digantikan komunisme",
              "Ada pertentangan kepentingan modal dan buruh",
            ],
            answer: 2,
            explain: "Banyak negara justru memperbaiki kapitalisme, bukan menggantinya dengan komunisme.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "keynes-peran-negara",
    levelId: "pemikir",
    order: 4,
    title: "John Maynard Keynes & Peran Negara",
    summary:
      "Saat pasar membeku dalam depresi, Keynes berargumen negara harus turun tangan. Lahirlah ekonomi makro modern, pengganda fiskal, dan kebijakan stabilisasi.",
    durationMin: 15,
    tags: ["pemikir", "keynes", "kebijakan fiskal", "pengganda"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>John Maynard Keynes</strong> (1883-1946), ekonom Inggris, mengubah cara dunia memahami resesi. Dalam <em>The General Theory of Employment, Interest and Money</em> (1936) ia menentang keyakinan bahwa pasar selalu pulih sendiri. Dalam krisis, permintaan bisa macet berkepanjangan, dan negara perlu turun tangan.",
      },
      {
        type: "paragraph",
        html: "Gagasan kuncinya: ketika rumah tangga dan dunia usaha takut membelanjakan uang, pemerintah bisa menaikkan belanja untuk menutup kekurangan <strong>permintaan agregat</strong>. Lewat efek <strong>pengganda (multiplier)</strong>, satu rupiah belanja pemerintah bisa menggerakkan ekonomi lebih dari satu rupiah.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/John_Maynard_Keynes_1929.jpg?width=400",
        alt: "Foto potret John Maynard Keynes tahun 1929",
        caption: "John Maynard Keynes, penulis The General Theory (1936), peletak dasar ekonomi makro modern.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Pengganda fiskal (multiplier)",
        html: "Jika masyarakat membelanjakan 80% dari tambahan pendapatannya (MPC = 0,8), maka pengganda = 1 / (1 - 0,8) = 5. Artinya belanja pemerintah Rp 100 miliar berpotensi menambah output total hingga Rp 500 miliar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser besaran belanja dan pajak untuk melihat bagaimana kebijakan fiskal menggerakkan output dan defisit anggaran.",
      },
      {
        type: "widget",
        widget: "SimulatorKebijakanFiskal",
      },
      {
        type: "video",
        comp: "KebijakanMoneterFiskal",
        title: "Kebijakan Fiskal dan Moneter",
        caption: "Bagaimana pemerintah dan bank sentral mengelola naik turunnya ekonomi.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Efek Pengganda: Belanja Pemerintah vs Tambahan Output (MPC 0,8)",
        unit: "rupiah (miliar)",
        source: "ilustrasi berdasarkan model pengganda Keynes",
        note: "Dengan pengganda 5, belanja awal Rp 100 miliar berpotensi menambah output total Rp 500 miliar.",
        data: [
          { label: "Belanja awal", value: 100, color: "#60a5fa" },
          { label: "Tambahan output total", value: 500, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Proyek infrastruktur saat resesi",
        html: "Saat ekonomi lesu, pemerintah membangun jalan senilai Rp 100 miliar. Para pekerja konstruksi menerima upah, lalu membelanjakannya di warung, toko, dan jasa. Pemilik warung pun ikut berbelanja, dan seterusnya. Dengan kecenderungan membelanjakan 80%, satu putaran demi putaran menambah output total mendekati Rp 500 miliar. Inilah logika pengganda yang dipakai banyak negara untuk melawan resesi.",
      },
      {
        type: "case",
        title: "Sejarah: New Deal dan resep Keynesian melawan Depresi Besar",
        html: "Saat <strong>Depresi Besar</strong> meletus setelah 1929, jutaan orang menganggur dan ekonomi membeku. Di Amerika Serikat, Presiden Franklin D. Roosevelt meluncurkan program <strong>New Deal</strong> mulai 1933, berisi belanja publik besar-besaran untuk membuka lapangan kerja. Gagasan Keynes yang dibukukan pada 1936 memberi landasan teori bagi pendekatan ini, dan kelak menjadi resep standar banyak negara, termasuk Indonesia lewat program PEN saat pandemi COVID-19 pada 2020.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika kecenderungan membelanjakan tambahan pendapatan (MPC) adalah 0,8, berapa nilai pengganda fiskal menurut Keynes?",
        answer: 5,
        tolerance: 0.01,
        solution:
          "Pengganda = 1 / (1 - MPC) = 1 / (1 - 0,8) = 1 / 0,2 = <strong>5</strong>. Maka tiap Rp 1 belanja pemerintah berpotensi menambah output hingga Rp 5.",
        hint: "Pakai rumus pengganda = 1 dibagi (1 dikurangi MPC).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan kebijakan ke dalam ekspansif (melawan resesi) atau kontraktif (meredam inflasi).",
        buckets: ["Fiskal ekspansif", "Fiskal kontraktif"],
        items: [
          { text: "Menaikkan belanja infrastruktur saat resesi", bucket: "Fiskal ekspansif" },
          { text: "Memberi subsidi dan bantuan tunai ke masyarakat", bucket: "Fiskal ekspansif" },
          { text: "Menaikkan pajak ketika ekonomi terlalu panas", bucket: "Fiskal kontraktif" },
          { text: "Memangkas belanja untuk menekan defisit dan inflasi", bucket: "Fiskal kontraktif" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Keynes menerbitkan The General Theory pada 1936.",
          "Dalam resesi, pasar bisa macet lama dan negara perlu turun tangan.",
          "Belanja pemerintah dapat menutup kekurangan permintaan agregat.",
          "Efek pengganda membuat satu rupiah belanja menggerakkan output lebih besar.",
          "Resep Keynesian dipakai dari New Deal 1933 hingga program PEN 2020.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa argumen utama Keynes tentang resesi?",
            options: [
              "Pasar selalu pulih sendiri dengan cepat",
              "Permintaan bisa macet lama sehingga negara perlu turun tangan",
              "Pemerintah tidak boleh ikut campur ekonomi",
              "Resesi tidak pernah benar-benar terjadi",
            ],
            answer: 1,
            explain: "Keynes menolak gagasan pasar selalu cepat pulih; negara perlu menambah permintaan.",
          },
          {
            q: "Tahun berapa The General Theory terbit?",
            options: ["1776", "1867", "1936", "1974"],
            answer: 2,
            explain: "The General Theory of Employment, Interest and Money terbit pada 1936.",
          },
          {
            q: "Jika MPC = 0,8, berapa pengganda fiskalnya?",
            options: ["2", "4", "5", "8"],
            answer: 2,
            explain: "1 dibagi (1 - 0,8) = 1 / 0,2 = 5.",
          },
          {
            q: "Manakah contoh kebijakan fiskal ekspansif?",
            options: [
              "Menaikkan pajak saat ekonomi panas",
              "Memangkas belanja pemerintah",
              "Menambah belanja infrastruktur saat resesi",
              "Menaikkan suku bunga acuan",
            ],
            answer: 2,
            explain: "Menambah belanja saat resesi adalah kebijakan fiskal ekspansif khas Keynesian.",
          },
          {
            q: "Program sejarah mana yang sejalan dengan resep Keynesian?",
            options: [
              "New Deal AS mulai 1933",
              "Corn Laws Inggris",
              "Tulip mania 1637",
              "Standar emas",
            ],
            answer: 0,
            explain: "New Deal memakai belanja publik besar untuk melawan Depresi Besar, selaras gagasan Keynes.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hayek-friedman-pasar-bebas",
    levelId: "pemikir",
    order: 5,
    title: "Hayek & Friedman: Pembela Pasar Bebas",
    summary:
      "Dua raksasa abad ke-20 yang membela kebebasan pasar: Hayek dengan pengetahuan tersebar dan bahaya perencanaan terpusat, Friedman dengan monetarisme.",
    durationMin: 14,
    tags: ["pemikir", "hayek", "friedman", "pasar bebas", "monetarisme"],
    blocks: [
      {
        type: "paragraph",
        html: "Setelah Keynes mendominasi pertengahan abad ke-20, dua ekonom membela kembali kebebasan pasar. <strong>Friedrich Hayek</strong> (1899-1992) asal Austria dan <strong>Milton Friedman</strong> (1912-2006) asal Amerika Serikat memberi argumen kuat mengapa pasar sering lebih bijak daripada perencanaan pemerintah.",
      },
      {
        type: "paragraph",
        html: "Hayek dalam <em>The Road to Serfdom</em> (1944) memperingatkan bahwa perencanaan ekonomi terpusat bisa berujung hilangnya kebebasan. Argumen intinya: <strong>pengetahuan tersebar</strong> di jutaan kepala, dan harga pasar adalah cara mengoordinasikannya, sesuatu yang mustahil ditiru perencana pusat.",
      },
      {
        type: "video",
        comp: "KebijakanMoneterFiskal",
        title: "Uang, Inflasi, dan Peran Negara",
        caption: "Latar di balik monetarisme Friedman dan perdebatan soal seberapa jauh negara mengatur ekonomi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Friedrich_Hayek_portrait.jpg?width=400",
        alt: "Foto potret Friedrich Hayek",
        caption: "Friedrich Hayek, penulis The Road to Serfdom (1944), peraih Nobel Ekonomi 1974.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_Milton_Friedman.jpg?width=400",
        alt: "Foto potret Milton Friedman",
        caption: "Milton Friedman, tokoh monetarisme, peraih Nobel Ekonomi 1976.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Monetarisme Friedman",
        html: "Friedman terkenal dengan ucapan bahwa inflasi selalu dan di mana pun adalah gejala moneter. Inti monetarisme: jumlah uang beredar adalah pendorong utama inflasi. Kira-kira, <strong>inflasi = pertumbuhan uang beredar dikurangi pertumbuhan output riil</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua Nobel berbeda dekade",
        html: "Hayek meraih Nobel Ekonomi pada 1974, dan Friedman pada 1976. Keduanya menjadi rujukan utama gerakan ekonomi pasar bebas pada akhir abad ke-20.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser posisi pada spektrum dari pasar bebas ke ekonomi terencana untuk melihat perbedaan peran negara dan harga.",
      },
      {
        type: "widget",
        widget: "SimulatorSpektrumEkonomi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Menghitung Inflasi ala Monetarisme (ilustrasi)",
        unit: "persen per tahun",
        source: "ilustrasi berdasarkan persamaan kuantitas uang",
        note: "Jika uang beredar tumbuh 12% dan output riil 4%, sisanya sekitar 8% menjadi inflasi.",
        data: [
          { label: "Pertumbuhan uang", value: 12, color: "#f87171" },
          { label: "Pertumbuhan output riil", value: 4, color: "#34d399" },
          { label: "Perkiraan inflasi", value: 8, color: "#fbbf24" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa harga lebih pintar daripada perencana",
        html: "Bayangkan panen kopi gagal di satu daerah. Tidak ada pejabat yang perlu memerintahkan siapa pun, tetapi harga kopi naik. Kenaikan itu otomatis memberi sinyal: konsumen menghemat, petani lain terdorong menanam lebih banyak, pedagang mencari pasokan dari tempat lain. Bagi Hayek, harga adalah pembawa informasi yang merangkum pengetahuan jutaan orang, sesuatu yang tak mungkin dikumpulkan satu kantor perencanaan.",
      },
      {
        type: "case",
        title: "Sejarah: The Road to Serfdom 1944 dan gelombang pasar bebas 1980-an",
        html: "<strong>The Road to Serfdom</strong> terbit pada 1944 di tengah Perang Dunia II, ketika perencanaan terpusat sedang populer. Awalnya dianggap melawan arus, gagasan Hayek dan Friedman justru naik daun pada akhir 1970-an saat banyak negara terjebak stagflasi. Pada 1980-an, kebijakan Margaret Thatcher di Inggris dan Ronald Reagan di Amerika Serikat banyak mengambil ilham dari kedua pemikir ini, termasuk pengendalian jumlah uang untuk meredam inflasi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Menurut pendekatan monetaris, jika jumlah uang beredar tumbuh 12% per tahun dan output riil tumbuh 4% per tahun, kira-kira berapa persen inflasinya?",
        answer: 8,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Perkiraan inflasi = pertumbuhan uang - pertumbuhan output riil = 12% - 4% = <strong>8%</strong>. Inilah inti monetarisme Friedman: kelebihan uang di atas pertumbuhan barang mendorong harga naik.",
        hint: "Kurangi pertumbuhan uang beredar dengan pertumbuhan output riil.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan pemikir atau karya dengan ide kuncinya.",
        pairs: [
          { left: "Friedrich Hayek", right: "Pengetahuan tersebar dan bahaya perencanaan terpusat" },
          { left: "Milton Friedman", right: "Monetarisme: uang beredar mendorong inflasi" },
          { left: "The Road to Serfdom (1944)", right: "Peringatan bahwa perencanaan total mengancam kebebasan" },
          { left: "Harga pasar", right: "Pembawa informasi yang mengoordinasi jutaan orang" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Hayek menulis The Road to Serfdom (1944) dan meraih Nobel 1974.",
          "Friedman mempopulerkan monetarisme dan meraih Nobel 1976.",
          "Harga pasar menyalurkan pengetahuan yang tersebar di banyak orang.",
          "Inflasi, bagi monetaris, terutama gejala dari jumlah uang beredar.",
          "Gagasan keduanya memengaruhi kebijakan Thatcher dan Reagan pada 1980-an.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa argumen inti Hayek tentang harga pasar?",
            options: [
              "Harga ditetapkan pemerintah agar adil",
              "Harga menyalurkan pengetahuan yang tersebar di banyak orang",
              "Harga sebaiknya selalu tetap",
              "Harga tidak penting dalam ekonomi",
            ],
            answer: 1,
            explain: "Bagi Hayek, harga merangkum informasi jutaan orang yang tak bisa ditiru perencana pusat.",
          },
          {
            q: "Apa inti monetarisme Friedman?",
            options: [
              "Belanja pemerintah penyebab utama inflasi",
              "Jumlah uang beredar adalah pendorong utama inflasi",
              "Pajak harus selalu dinaikkan",
              "Bank sentral harus dihapus",
            ],
            answer: 1,
            explain: "Friedman menekankan jumlah uang beredar sebagai pendorong utama inflasi.",
          },
          {
            q: "Kapan Hayek dan Friedman meraih Nobel Ekonomi?",
            options: [
              "Hayek 1974, Friedman 1976",
              "Keduanya 1936",
              "Hayek 1944, Friedman 1948",
              "Keduanya 1990",
            ],
            answer: 0,
            explain: "Hayek meraih Nobel pada 1974 dan Friedman pada 1976.",
          },
          {
            q: "Jika uang tumbuh 12% dan output riil 4%, perkiraan inflasinya?",
            options: ["4%", "8%", "12%", "16%"],
            answer: 1,
            explain: "12% dikurangi 4% menghasilkan perkiraan inflasi sekitar 8%.",
          },
          {
            q: "Karya Hayek tahun 1944 berjudul?",
            options: [
              "The Wealth of Nations",
              "Das Kapital",
              "The Road to Serfdom",
              "The General Theory",
            ],
            answer: 2,
            explain: "The Road to Serfdom terbit pada 1944 dan memperingatkan bahaya perencanaan terpusat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "schumpeter-penghancuran-kreatif",
    levelId: "pemikir",
    order: 6,
    title: "Joseph Schumpeter & Penghancuran Kreatif",
    summary:
      "Inovasi adalah mesin kapitalisme. Schumpeter menyebut prosesnya penghancuran kreatif: yang baru menggulung yang lama, dan dari situlah kemajuan lahir.",
    durationMin: 14,
    tags: ["pemikir", "schumpeter", "inovasi", "penghancuran kreatif"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Joseph Schumpeter</strong> (1883-1950), ekonom kelahiran Austria, melihat jantung kapitalisme bukan pada keseimbangan, melainkan pada <strong>inovasi</strong>. Dalam <em>Capitalism, Socialism and Democracy</em> (1942) ia memperkenalkan istilah terkenal: <strong>penghancuran kreatif</strong> (creative destruction).",
      },
      {
        type: "paragraph",
        html: "Maknanya: produk, teknologi, dan perusahaan baru terus-menerus menggantikan yang lama. Proses ini menghancurkan bisnis usang, tetapi sekaligus melahirkan kemajuan, lapangan kerja baru, dan kemakmuran. Bagi Schumpeter, <strong>pengusaha (entrepreneur)</strong> adalah penggerak utama yang membawa inovasi ke pasar.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Joseph_Schumpeter_1945_Bachrach_portrait.png?width=400",
        alt: "Foto potret Joseph Schumpeter tahun 1945",
        caption: "Joseph Schumpeter, perumus konsep penghancuran kreatif (1942).",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Penghancuran kreatif",
        html: "Inovasi baru tidak hanya menambah, tetapi sering <strong>menggantikan</strong> yang lama. Mobil menggusur kereta kuda, ponsel pintar menggusur kamera saku dan peta kertas. Kerugian bagi yang tergusur adalah harga dari kemajuan yang lebih luas.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Sisi yang menyakitkan",
        html: "Penghancuran kreatif nyata menimbulkan korban: pekerja kehilangan pekerjaan, kota industri lama meredup. Karena itu banyak ekonom menekankan pentingnya jaring pengaman sosial dan pelatihan ulang agar manfaat inovasi tidak hanya dinikmati segelintir orang.",
      },
      {
        type: "video",
        comp: "CreativeDestructionVideo",
        title: "Penghancuran Kreatif",
        caption: "Bagaimana inovasi terus menggulung yang lama dan melahirkan yang baru.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Umur Rata-rata Perusahaan Besar Makin Pendek (ilustrasi)",
        unit: "tahun",
        source: "ilustrasi tren penghancuran kreatif",
        note: "Tekanan inovasi membuat perusahaan besar lebih cepat tergantikan dibanding beberapa dekade lalu.",
        data: [
          { label: "1960-an", value: 60, color: "#60a5fa" },
          { label: "1980-an", value: 35, color: "#34d399" },
          { label: "2000-an", value: 25, color: "#fbbf24" },
          { label: "2020-an", value: 18, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dari rental film ke layanan streaming",
        html: "Pada awal 2000-an, toko rental film fisik tersebar di banyak kota dan mempekerjakan ribuan orang. Lalu muncul layanan streaming yang mengirim film lewat internet. Dalam waktu singkat, jaringan rental raksasa bangkrut, sementara perusahaan streaming tumbuh besar dan menciptakan jenis pekerjaan baru. Toko lama hancur, model bisnis baru lahir: inilah penghancuran kreatif yang dilukiskan Schumpeter.",
      },
      {
        type: "case",
        title: "Sejarah: Schumpeter 1942 dan ramalan tentang kapitalisme",
        html: "Dalam <strong>Capitalism, Socialism and Democracy</strong> (1942), Schumpeter tidak hanya merumuskan penghancuran kreatif, tetapi juga membuat ramalan mengejutkan: justru karena keberhasilannya, kapitalisme dapat melemahkan dirinya sendiri dari dalam karena birokrasi besar dan menurunnya semangat kewirausahaan. Ramalan ini tidak terbukti persis, tetapi konsep penghancuran kreatifnya menjadi salah satu ide ekonomi paling banyak dikutip hingga hari ini.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 500 perusahaan besar pada awal periode, 250 di antaranya tergantikan oleh pendatang baru dalam 15 tahun. Berapa persen perusahaan yang tergantikan?",
        answer: 50,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Persentase tergantikan = 250 / 500 = 0,5 = <strong>50%</strong>. Separuh perusahaan besar tergulung dalam 15 tahun, gambaran kuat tentang penghancuran kreatif.",
        hint: "Bagi jumlah yang tergantikan dengan jumlah awal, lalu jadikan persen.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan dampak penghancuran kreatif sebagai sisi 'kreatif' atau sisi 'penghancuran'.",
        buckets: ["Sisi kreatif", "Sisi penghancuran"],
        items: [
          { text: "Lahirnya industri dan pekerjaan baru", bucket: "Sisi kreatif" },
          { text: "Produk lebih murah dan lebih baik bagi konsumen", bucket: "Sisi kreatif" },
          { text: "Pekerja industri lama kehilangan pekerjaan", bucket: "Sisi penghancuran" },
          { text: "Perusahaan mapan bangkrut karena teknologi baru", bucket: "Sisi penghancuran" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Joseph Schumpeter memperkenalkan penghancuran kreatif pada 1942.",
          "Inovasi adalah mesin utama kemajuan kapitalisme.",
          "Pengusaha adalah penggerak yang membawa inovasi ke pasar.",
          "Proses ini punya sisi menyakitkan: pekerjaan dan bisnis lama tergusur.",
          "Jaring pengaman dan pelatihan ulang membantu meratakan manfaat inovasi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud penghancuran kreatif?",
            options: [
              "Pemerintah menghancurkan perusahaan swasta",
              "Inovasi baru terus menggantikan produk dan perusahaan lama",
              "Resesi yang menghancurkan ekonomi",
              "Perang dagang antarnegara",
            ],
            answer: 1,
            explain: "Penghancuran kreatif adalah proses inovasi yang menggulung yang lama dan melahirkan yang baru.",
          },
          {
            q: "Dalam karya tahun berapa Schumpeter memperkenalkan istilah ini?",
            options: ["1817", "1936", "1942", "1974"],
            answer: 2,
            explain: "Capitalism, Socialism and Democracy terbit pada 1942.",
          },
          {
            q: "Siapa penggerak utama inovasi menurut Schumpeter?",
            options: ["Birokrat", "Pengusaha (entrepreneur)", "Bank sentral", "Serikat buruh"],
            answer: 1,
            explain: "Schumpeter menempatkan pengusaha sebagai penggerak yang membawa inovasi ke pasar.",
          },
          {
            q: "Jika 250 dari 500 perusahaan tergantikan, berapa persennya?",
            options: ["25%", "40%", "50%", "75%"],
            answer: 2,
            explain: "250 dibagi 500 sama dengan 0,5 atau 50%.",
          },
          {
            q: "Manakah yang merupakan sisi 'penghancuran'?",
            options: [
              "Lahirnya industri baru",
              "Produk lebih murah bagi konsumen",
              "Pekerja industri lama kehilangan pekerjaan",
              "Munculnya jenis pekerjaan baru",
            ],
            answer: 2,
            explain: "Hilangnya pekerjaan lama adalah sisi menyakitkan dari penghancuran kreatif.",
          },
        ],
      },
    ],
  },
];
