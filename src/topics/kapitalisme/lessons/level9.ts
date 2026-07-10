import type { Lesson } from "../../../types";

export const level9: Lesson[] = [
  // ============================================================
  {
    id: "kapitalisme-peran-negara",
    levelId: "negara",
    order: 1,
    title: "Kapitalisme & Peran Negara",
    summary:
      "Pasar tidak pernah benar-benar sendirian. Pelajari mengapa negara hadir lewat regulasi, antitrust, pajak, dan bank sentral, serta perdebatan besar di baliknya.",
    durationMin: 15,
    tags: ["negara", "regulasi", "keynes", "bank sentral"],
    blocks: [
      {
        type: "paragraph",
        html: "Bahkan ekonomi paling pro-pasar tetap membutuhkan negara. Pasar bisa <strong>gagal</strong>: muncul monopoli, polusi yang tak dibayar (eksternalitas), informasi yang menyesatkan, dan krisis. Negara hadir untuk menambal kegagalan itu lewat <strong>regulasi</strong>, <strong>antitrust</strong>, <strong>pajak</strong>, dan <strong>bank sentral</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Empat peran utama negara",
        html: "Menegakkan aturan main (hukum & kontrak), mencegah monopoli (<strong>antitrust</strong>), menyediakan <strong>barang publik</strong> (jalan, pertahanan), dan menstabilkan ekonomi lewat kebijakan fiskal serta moneter.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat bagaimana belanja dan pajak pemerintah dapat mendorong atau meredam ekonomi, salah satu cara negara menstabilkan siklus.",
      },
      { type: "widget", widget: "SimulatorKebijakanFiskal" },
      {
        type: "video",
        comp: "KebijakanMoneterFiskal",
        title: "Kebijakan Moneter & Fiskal",
        caption: "Dua alat utama negara untuk menstabilkan ekonomi: anggaran dan suku bunga.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Federal_Hall_August_2017_01.jpg?width=400",
        alt: "Gedung bersejarah di kawasan Wall Street, New York",
        caption: "Wall Street: pusat keuangan yang diawasi ketat oleh regulator agar pasar tetap jujur dan stabil.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Studi Kasus: Bank sentral memadamkan krisis",
        html: "Saat krisis 2008 mengancam membekukan seluruh sistem keuangan, <strong>bank sentral</strong> seperti The Federal Reserve turun tangan: menurunkan suku bunga drastis dan menyuntikkan likuiditas agar bank tidak ambruk berantai. Pemerintah juga menggelontorkan dana talangan dan stimulus. Tindakan ini kontroversial, sebagian menilainya menyelamatkan ekonomi, sebagian menilainya menolong bank yang serakah. Yang jelas, krisis menunjukkan pasar modern tidak bisa lepas sepenuhnya dari tangan negara.",
      },
      {
        type: "case",
        title: "Sejarah: Keynes, New Deal, dan kelahiran negara aktif",
        html: "Depresi Besar mengubah cara pandang tentang peran negara. Ekonom <strong>John Maynard Keynes</strong> berargumen dalam karyanya (<strong>1936</strong>) bahwa saat ekonomi lesu, pemerintah harus <strong>membelanjakan</strong> untuk mendorong permintaan. Di Amerika, Presiden Roosevelt menjalankan <strong>New Deal</strong> sepanjang 1930-an: proyek publik besar-besaran dan jaring pengaman sosial. Sejak itu, gagasan negara yang aktif menstabilkan ekonomi menjadi arus utama, meski terus diperdebatkan kaum pasar bebas seperti Hayek dan Friedman.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pemerintah menambah belanja Rp10 triliun dengan angka pengganda (multiplier) 1,5. Berapa tambahan output ekonomi yang dihasilkan?",
        answer: 15,
        tolerance: 0,
        suffix: "triliun",
        solution:
          "Tambahan output = belanja x multiplier = 10 x 1,5 = <strong>Rp15 triliun</strong>. Inilah dasar argumen Keynes: belanja pemerintah bisa menggerakkan ekonomi lebih besar dari nilai awalnya.",
        hint: "Kalikan belanja dengan angka pengganda.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap tindakan ke alat kebijakan yang tepat.",
        buckets: ["Kebijakan fiskal", "Kebijakan moneter"],
        items: [
          { text: "Menaikkan atau menurunkan belanja pemerintah", bucket: "Kebijakan fiskal" },
          { text: "Mengubah suku bunga acuan", bucket: "Kebijakan moneter" },
          { text: "Memberi keringanan atau menaikkan pajak", bucket: "Kebijakan fiskal" },
          { text: "Menambah atau mengurangi jumlah uang beredar", bucket: "Kebijakan moneter" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Pasar bisa gagal lewat monopoli, eksternalitas, informasi buruk, dan krisis.",
          "Negara hadir lewat regulasi, antitrust, barang publik, dan stabilisasi ekonomi.",
          "Bank sentral menstabilkan sistem keuangan, seperti saat krisis 2008.",
          "Keynes (1936) dan New Deal melahirkan gagasan negara yang aktif menstabilkan ekonomi.",
          "Takaran peran negara terus diperdebatkan antara kaum Keynesian dan pasar bebas.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud kegagalan pasar?",
            options: [
              "Pasar yang tutup hari libur",
              "Situasi saat pasar sendirian menghasilkan hasil buruk, seperti monopoli atau polusi",
              "Harga yang stabil",
              "Banyaknya penjual",
            ],
            answer: 1,
            explain: "Kegagalan pasar adalah saat mekanisme pasar tak menghasilkan hasil terbaik bagi masyarakat.",
          },
          {
            q: "Apa fungsi kebijakan antitrust?",
            options: ["Menaikkan pajak", "Mencegah monopoli dan menjaga persaingan", "Mencetak uang", "Membangun jalan"],
            answer: 1,
            explain: "Antitrust mencegah satu perusahaan menguasai pasar dan menindas persaingan.",
          },
          {
            q: "Apa argumen inti Keynes saat ekonomi lesu?",
            options: [
              "Pemerintah harus berhenti belanja",
              "Pemerintah harus membelanjakan untuk mendorong permintaan",
              "Pajak harus dihapus total",
              "Bank harus ditutup",
            ],
            answer: 1,
            explain: "Keynes menyarankan belanja pemerintah untuk menggerakkan ekonomi yang lesu.",
          },
          {
            q: "Mengubah suku bunga acuan termasuk kebijakan?",
            options: ["Fiskal", "Moneter", "Antitrust", "Perdagangan"],
            answer: 1,
            explain: "Suku bunga dan jumlah uang beredar adalah ranah kebijakan moneter bank sentral.",
          },
          {
            q: "Belanja Rp10 triliun dengan multiplier 1,5 menghasilkan output?",
            options: ["Rp10 triliun", "Rp15 triliun", "Rp1,5 triliun", "Rp25 triliun"],
            answer: 1,
            explain: "10 dikali 1,5 sama dengan Rp15 triliun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "regulasi-dan-antitrust",
    levelId: "negara",
    order: 2,
    title: "Regulasi & Antitrust",
    summary:
      "Persaingan adalah jantung kapitalisme, tetapi pasar bebas bisa melahirkan raksasa yang menindas pesaing. Pelajari bagaimana negara menjaga persaingan lewat regulasi dan hukum antitrust.",
    durationMin: 14,
    tags: ["negara", "antitrust", "monopoli", "regulasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Pasar bekerja paling baik saat banyak penjual bersaing. Tetapi tanpa pengawasan, perusahaan kuat bisa menyingkirkan pesaing, membeli saingan, atau berkongkalikong menetapkan harga. Hasilnya: <strong>monopoli</strong> yang menaikkan harga dan menurunkan mutu. Untuk itu negara membuat hukum <strong>antitrust</strong> dan <strong>regulasi</strong> persaingan.",
      },
      {
        type: "paragraph",
        html: "Antitrust bukan menghukum perusahaan karena besar atau sukses, melainkan karena <strong>menyalahgunakan</strong> kekuatan pasar: menetapkan harga bersama (kartel), merger yang membunuh persaingan, atau menjegal pemain baru.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Inti antitrust",
        html: "Tujuannya menjaga <strong>persaingan</strong>, bukan melindungi pesaing tertentu. Persaingan sehat menekan harga, mendorong inovasi, dan memberi pilihan bagi konsumen.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Tanda bahaya kartel",
        html: "Saat para pesaing diam-diam sepakat menetapkan harga atau membagi wilayah, konsumen membayar lebih mahal tanpa sadar. Inilah praktik antipersaingan yang paling dilarang.",
      },
      {
        type: "video",
        comp: "MonopoliVsPersaingan",
        title: "Monopoli vs Persaingan",
        caption: "Mengapa pasar dengan satu penguasa menghasilkan harga lebih tinggi dan output lebih sedikit.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Federal_Hall_August_2017_01.jpg?width=400",
        alt: "Gedung bersejarah di kawasan Wall Street, New York",
        caption: "Regulator pasar mengawasi agar persaingan tetap adil dan tidak dikuasai segelintir raksasa.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Monopoli vs Persaingan: harga & output (ilustrasi)",
        unit: "indeks relatif",
        source: "ilustrasi edukatif teori organisasi industri",
        note: "Monopoli cenderung menetapkan harga lebih tinggi dan output lebih rendah dibanding pasar bersaing.",
        data: [
          { label: "Harga (monopoli)", value: 90, color: "#f87171" },
          { label: "Harga (persaingan)", value: 55, color: "#34d399" },
          { label: "Output (monopoli)", value: 50, color: "#fbbf24" },
          { label: "Output (persaingan)", value: 85, color: "#60a5fa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pemecahan Standard Oil",
        html: "Pada awal 1900-an, <strong>Standard Oil</strong> milik John D. Rockefeller menguasai sekitar <strong>90%</strong> penyulingan minyak di Amerika Serikat. Pada <strong>1911</strong>, Mahkamah Agung AS memutuskan perusahaan itu melanggar Sherman Antitrust Act dan memecahnya menjadi <strong>34</strong> perusahaan terpisah. Beberapa pecahannya kelak menjadi Exxon, Mobil, dan Chevron. Kasus ini menjadi tonggak bahwa negara bisa membongkar monopoli demi persaingan.",
      },
      {
        type: "case",
        title: "Sejarah: Sherman Antitrust Act 1890",
        html: "Di akhir abad ke-19, raksasa industri (trust) menguasai rel kereta, baja, dan minyak di Amerika. Pada <strong>1890</strong> Kongres mengesahkan <strong>Sherman Antitrust Act</strong>, undang-undang antitrust modern pertama yang melarang persekongkolan menghambat perdagangan dan monopolisasi. Undang-undang inilah yang kemudian dipakai untuk memecah Standard Oil pada 1911. Sejak itu, menjaga persaingan menjadi tugas tetap negara dalam kapitalisme.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah perusahaan menguasai 90% pasar. Pengadilan memecahnya menjadi 3 perusahaan dengan pangsa setara. Berapa persen pangsa pasar tiap perusahaan baru?",
        answer: 30,
        tolerance: 0,
        suffix: "%",
        solution:
          "Pangsa 90% dibagi rata ke 3 perusahaan = 90 / 3 = <strong>30%</strong> per perusahaan. Konsentrasi pasar turun drastis sehingga persaingan kembali hidup.",
        hint: "Bagi total pangsa pasar dengan jumlah perusahaan baru.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap praktik: melukai persaingan atau menegakkan persaingan?",
        buckets: ["Praktik antipersaingan", "Tindakan penegak antitrust"],
        items: [
          { text: "Para pesaing diam-diam menetapkan harga yang sama (kartel)", bucket: "Praktik antipersaingan" },
          { text: "Merger dua raksasa hingga nyaris menjadi monopoli", bucket: "Praktik antipersaingan" },
          { text: "Pengadilan memecah perusahaan monopoli", bucket: "Tindakan penegak antitrust" },
          { text: "Regulator melarang perjanjian kolusi harga", bucket: "Tindakan penegak antitrust" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Pasar bebas bisa melahirkan monopoli yang menaikkan harga dan menekan inovasi.",
          "Antitrust menjaga persaingan, bukan melindungi pesaing tertentu.",
          "Sherman Antitrust Act 1890 adalah undang-undang antitrust modern pertama.",
          "Standard Oil dipecah menjadi 34 perusahaan pada 1911.",
          "Kartel dan merger yang membunuh persaingan adalah sasaran utama antitrust.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan utama hukum antitrust?",
            options: [
              "Menghukum perusahaan yang sukses",
              "Menjaga persaingan agar harga wajar dan inovasi tumbuh",
              "Menaikkan pajak perusahaan",
              "Mencetak uang",
            ],
            answer: 1,
            explain: "Antitrust melindungi proses persaingan, bukan pesaing tertentu.",
          },
          {
            q: "Apa itu kartel?",
            options: [
              "Perusahaan yang menurunkan harga",
              "Kesepakatan diam-diam antar pesaing untuk menetapkan harga atau membagi pasar",
              "Lembaga pemerintah",
              "Jenis pajak",
            ],
            answer: 1,
            explain: "Kartel membuat konsumen membayar lebih mahal karena persaingan dimatikan.",
          },
          {
            q: "Undang-undang antitrust modern pertama di AS adalah?",
            options: ["New Deal", "Sherman Antitrust Act 1890", "Federal Reserve Act", "Marshall Plan"],
            answer: 1,
            explain: "Sherman Antitrust Act disahkan pada 1890.",
          },
          {
            q: "Apa yang terjadi pada Standard Oil tahun 1911?",
            options: [
              "Dibebaskan dari semua tuduhan",
              "Dipecah menjadi 34 perusahaan terpisah",
              "Dinasionalisasi negara",
              "Dijual ke Inggris",
            ],
            answer: 1,
            explain: "Mahkamah Agung memecah Standard Oil karena melanggar Sherman Act.",
          },
          {
            q: "Jika monopoli 90% dipecah menjadi 3 perusahaan setara, pangsa tiap perusahaan adalah?",
            options: ["90%", "45%", "30%", "10%"],
            answer: 2,
            explain: "90 dibagi 3 sama dengan 30%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pajak-dan-redistribusi",
    levelId: "negara",
    order: 3,
    title: "Pajak & Redistribusi",
    summary:
      "Pajak adalah cara negara membiayai dirinya sekaligus memeratakan beban. Pelajari pajak progresif, redistribusi, dan perdebatan antara keadilan dan insentif kerja.",
    durationMin: 14,
    tags: ["negara", "pajak", "redistribusi", "progresif"],
    blocks: [
      {
        type: "paragraph",
        html: "Negara butuh uang untuk membangun jalan, sekolah, dan rumah sakit. Sumber utamanya adalah <strong>pajak</strong>. Tetapi pajak bukan sekadar alat mengumpulkan dana, ia juga alat <strong>redistribusi</strong>: memindahkan sebagian penghasilan dari yang kaya ke layanan yang dinikmati semua, terutama yang kurang mampu.",
      },
      {
        type: "paragraph",
        html: "Kebanyakan negara memakai <strong>pajak progresif</strong>: makin tinggi penghasilan, makin tinggi persentase pajaknya. Indonesia menerapkan ini lewat lapisan tarif PPh orang pribadi yang naik bertahap.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga jenis struktur pajak",
        html: "<strong>Progresif</strong>: tarif naik seiring penghasilan (mis. PPh). <strong>Proporsional</strong>: tarif tetap berapa pun penghasilan (mis. PPN). <strong>Regresif</strong>: bebannya secara relatif lebih berat bagi yang miskin.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Selalu ada timbal balik",
        html: "Pajak terlalu tinggi bisa mengurangi insentif bekerja dan berinvestasi; pajak terlalu rendah membuat negara kekurangan dana untuk layanan publik. Inti perdebatannya adalah mencari titik seimbang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Belanja yang dibiayai pajak bisa berlipat ganda lewat angka pengganda. Lihat bagaimana satu rupiah belanja pemerintah menggerakkan ekonomi lebih besar.",
      },
      { type: "widget", widget: "KalkulatorMultiplier" },
      {
        type: "video",
        comp: "KebijakanMoneterFiskal",
        title: "Kebijakan Moneter & Fiskal",
        caption: "Pajak dan belanja adalah dua sisi kebijakan fiskal yang dipakai negara untuk menstabilkan ekonomi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Unemployed_men_during_the_Great_Depression.jpg?width=400",
        alt: "Antrean orang menganggur pada masa Depresi Besar",
        caption: "Depresi Besar mendorong lahirnya pajak progresif dan jaring pengaman sosial untuk meredistribusi beban.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tarif Marginal PPh Orang Pribadi di Indonesia per Lapisan",
        unit: "% tarif marginal",
        source: "UU HPP 2021, tarif PPh orang pribadi",
        note: "Tarif naik bertahap dari 5% hingga 35%, inilah wujud pajak progresif: makin tinggi penghasilan, makin besar persentase yang ditarik.",
        data: [
          { label: "0-60 juta", value: 5, color: "#34d399" },
          { label: "60-250 juta", value: 15, color: "#60a5fa" },
          { label: "250-500 juta", value: 25, color: "#fbbf24" },
          { label: "500jt-5 miliar", value: 30, color: "#fb923c" },
          { label: "di atas 5 miliar", value: 35, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menghitung pajak progresif",
        html: "Andi memiliki penghasilan kena pajak <strong>Rp200 juta</strong> setahun. Dengan tarif progresif Indonesia, Rp60 juta pertama dikenai <strong>5%</strong> dan sisanya Rp140 juta dikenai <strong>15%</strong>. Pajaknya: (60 x 5%) + (140 x 15%) = Rp3 juta + Rp21 juta = <strong>Rp24 juta</strong>. Tarif efektifnya hanya 12% meski lapisan tertingginya 15%, karena tidak semua penghasilan kena tarif tertinggi.",
      },
      {
        type: "case",
        title: "Sejarah: Lahirnya pajak penghasilan federal AS, 1913",
        html: "Sebelum abad ke-20, pemerintah AS sebagian besar dibiayai tarif bea masuk. Pada <strong>1913</strong>, <strong>Amandemen ke-16</strong> Konstitusi AS mengesahkan pajak penghasilan federal yang bersifat progresif. Tarif awalnya rendah, tetapi saat Perang Dunia dan New Deal, tarif untuk penghasilan tertinggi melonjak hingga di atas 90% pada 1940-an-1950-an. Pajak progresif sejak itu menjadi tulang punggung pembiayaan negara modern sekaligus alat redistribusi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Penghasilan kena pajak Rp200 juta. Lapisan: 5% untuk Rp60 juta pertama, 15% untuk sisa hingga Rp250 juta. Berapa total pajaknya?",
        answer: 24,
        tolerance: 0,
        prefix: "Rp",
        suffix: "juta",
        solution:
          "Lapisan pertama: 60 x 5% = Rp3 juta. Lapisan kedua: (200 - 60) x 15% = 140 x 15% = Rp21 juta. Total = 3 + 21 = <strong>Rp24 juta</strong>.",
        hint: "Hitung pajak per lapisan lalu jumlahkan, jangan kenakan satu tarif untuk seluruh penghasilan.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pajak ke struktur tarifnya.",
        buckets: ["Progresif", "Proporsional", "Regresif"],
        items: [
          { text: "PPh orang pribadi dengan lapisan tarif naik", bucket: "Progresif" },
          { text: "PPN dengan tarif tunggal untuk semua orang", bucket: "Proporsional" },
          { text: "Pajak yang bebannya relatif lebih berat bagi yang berpenghasilan rendah", bucket: "Regresif" },
          { text: "Tarif pajak yang makin tinggi untuk penghasilan makin besar", bucket: "Progresif" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Pajak membiayai negara sekaligus menjadi alat redistribusi.",
          "Pajak progresif menaikkan tarif seiring naiknya penghasilan.",
          "Indonesia memakai lapisan tarif PPh dari 5% hingga 35%.",
          "Tarif efektif biasanya lebih rendah dari tarif lapisan tertinggi.",
          "Pajak yang terlalu tinggi atau terlalu rendah sama-sama berisiko, kuncinya keseimbangan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa ciri pajak progresif?",
            options: [
              "Tarif tetap untuk semua orang",
              "Tarif naik seiring naiknya penghasilan",
              "Tarif turun saat penghasilan naik",
              "Tidak ada tarif",
            ],
            answer: 1,
            explain: "Pada pajak progresif, makin tinggi penghasilan, makin tinggi persentase pajaknya.",
          },
          {
            q: "PPN dengan tarif tunggal untuk semua termasuk pajak?",
            options: ["Progresif", "Proporsional", "Regresif", "Antitrust"],
            answer: 1,
            explain: "Tarif yang sama berapa pun penghasilan disebut proporsional.",
          },
          {
            q: "Selain mengumpulkan dana, fungsi penting pajak adalah?",
            options: [
              "Menaikkan harga barang impor",
              "Redistribusi penghasilan untuk membiayai layanan publik",
              "Mencetak uang",
              "Memecah monopoli",
            ],
            answer: 1,
            explain: "Pajak memindahkan sebagian penghasilan ke layanan yang dinikmati bersama.",
          },
          {
            q: "Penghasilan kena pajak Rp200 juta (5% untuk Rp60 juta pertama, 15% sisanya). Berapa pajaknya?",
            options: ["Rp30 juta", "Rp24 juta", "Rp10 juta", "Rp40 juta"],
            answer: 1,
            explain: "(60 x 5%) + (140 x 15%) = 3 + 21 = Rp24 juta.",
          },
          {
            q: "Amandemen ke-16 Konstitusi AS tahun 1913 mengesahkan?",
            options: [
              "Antitrust",
              "Pajak penghasilan federal yang progresif",
              "Bank sentral",
              "Penghapusan pajak",
            ],
            answer: 1,
            explain: "Amandemen ke-16 (1913) menjadi dasar pajak penghasilan federal AS.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "bank-sentral-dan-kebijakan-moneter",
    levelId: "negara",
    order: 4,
    title: "Bank Sentral & Kebijakan Moneter",
    summary:
      "Bank sentral mengatur suku bunga dan jumlah uang beredar untuk menjaga harga stabil dan ekonomi tidak terlalu panas atau terlalu dingin. Pelajari cara kerjanya.",
    durationMin: 15,
    tags: ["negara", "bank sentral", "moneter", "inflasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Di balik nilai uang yang kita pakai ada lembaga yang menjaganya: <strong>bank sentral</strong>. Di Indonesia tugas ini diemban <strong>Bank Indonesia</strong>. Tujuan utamanya menjaga <strong>stabilitas harga</strong>, yakni mengendalikan inflasi agar tidak terlalu tinggi maupun terlalu rendah.",
      },
      {
        type: "paragraph",
        html: "Alat utamanya adalah <strong>suku bunga acuan</strong>. Saat inflasi terlalu tinggi, bank sentral menaikkan suku bunga agar meminjam jadi mahal, belanja melambat, dan harga mereda. Saat ekonomi lesu, ia menurunkan suku bunga agar kredit murah dan aktivitas kembali bergerak.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tugas inti bank sentral",
        html: "Menjaga stabilitas nilai uang (inflasi), mengatur <strong>suku bunga</strong> dan jumlah uang beredar, serta menjadi <strong>penjaga terakhir</strong> (lender of last resort) saat sistem keuangan terancam krisis.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Independensi itu penting",
        html: "Bank sentral dibuat relatif independen dari politik agar tidak tergoda mencetak uang demi kepentingan jangka pendek. Mencetak uang berlebihan adalah jalan tercepat menuju inflasi tinggi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba kalkulatornya",
        html: "Rasakan bagaimana inflasi menggerogoti daya beli uangmu dari tahun ke tahun. Inilah yang dijaga bank sentral agar tetap terkendali.",
      },
      { type: "widget", widget: "KalkulatorInflasi" },
      {
        type: "video",
        comp: "InflasiVideo",
        title: "Memahami Inflasi",
        caption: "Mengapa harga naik dari waktu ke waktu dan bagaimana bank sentral berusaha menjaganya tetap rendah dan stabil.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/John_Maynard_Keynes_1929.jpg?width=400",
        alt: "Potret John Maynard Keynes pada 1929",
        caption: "Keynes ikut membentuk pemikiran modern tentang peran uang, suku bunga, dan campur tangan negara dalam ekonomi.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Inflasi Tahunan Indonesia pada Beberapa Tahun Penting",
        unit: "% per tahun (perkiraan)",
        source: "data historis BPS/Bank Indonesia (perkiraan dibulatkan)",
        note: "Krisis 1998 memicu inflasi melonjak; di tahun-tahun normal, bank sentral berhasil menjaganya rendah dan stabil.",
        data: [
          { label: "1998 (krismon)", value: 58, color: "#f87171" },
          { label: "2009", value: 2.8, color: "#34d399" },
          { label: "2020 (pandemi)", value: 1.7, color: "#60a5fa" },
          { label: "2022", value: 5.5, color: "#fbbf24" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Volcker menjinakkan inflasi",
        html: "Pada akhir 1970-an, inflasi di Amerika Serikat tembus dua digit. Ketua The Federal Reserve, <strong>Paul Volcker</strong>, menaikkan suku bunga acuan secara drastis hingga mendekati <strong>20%</strong> pada awal 1980-an. Langkah ini menyakitkan: ekonomi sempat resesi dan pengangguran naik. Tetapi inflasi akhirnya turun dari belasan persen menjadi sekitar 3-4%. Kasus ini menunjukkan suku bunga adalah alat ampuh, sekaligus pahit, untuk mengendalikan harga.",
      },
      {
        type: "case",
        title: "Sejarah: Berdirinya The Federal Reserve, 1913",
        html: "Setelah serangkaian kepanikan perbankan, terutama Kepanikan 1907, Amerika Serikat menyadari perlunya lembaga penstabil. Pada <strong>1913</strong>, Kongres mengesahkan <strong>Federal Reserve Act</strong> dan lahirlah bank sentral AS. Tugasnya menjaga sistem perbankan dan menjadi penjaga terakhir saat krisis. Bank Indonesia mengemban peran serupa di tanah air. Sejak itu, bank sentral menjadi pilar permanen kapitalisme modern.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan inflasi tetap 7% per tahun, kira-kira berapa tahun yang dibutuhkan agar tingkat harga berlipat dua? (Gunakan aturan 70.)",
        answer: 10,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "Aturan 70: waktu menggandakan dengan kira-kira 70 dibagi laju inflasi. 70 / 7 = <strong>10 tahun</strong>. Inilah sebabnya inflasi yang tampak kecil pun menggerus daya beli jika dibiarkan bertahun-tahun.",
        hint: "Bagi 70 dengan laju inflasi per tahun.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan kondisi ekonomi dengan respons bank sentral yang tepat.",
        pairs: [
          { left: "Inflasi terlalu tinggi", right: "Menaikkan suku bunga acuan" },
          { left: "Ekonomi lesu dan resesi", right: "Menurunkan suku bunga acuan" },
          { left: "Bank besar nyaris ambruk", right: "Bertindak sebagai penjaga terakhir" },
          { left: "Uang beredar terlalu banyak", right: "Memperketat likuiditas" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Bank sentral menjaga stabilitas harga lewat suku bunga dan jumlah uang beredar.",
          "Bunga dinaikkan untuk meredam inflasi, diturunkan untuk menghidupkan ekonomi lesu.",
          "Bank sentral menjadi penjaga terakhir saat sistem keuangan terancam.",
          "The Federal Reserve berdiri 1913; Bank Indonesia mengemban peran serupa di Indonesia.",
          "Independensi menjaga bank sentral dari godaan mencetak uang demi politik jangka pendek.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan utama bank sentral?",
            options: [
              "Memaksimalkan laba",
              "Menjaga stabilitas harga dan sistem keuangan",
              "Memecah monopoli",
              "Memungut pajak",
            ],
            answer: 1,
            explain: "Tugas inti bank sentral adalah menjaga nilai uang dan kestabilan keuangan.",
          },
          {
            q: "Saat inflasi terlalu tinggi, bank sentral biasanya?",
            options: [
              "Menurunkan suku bunga",
              "Menaikkan suku bunga acuan",
              "Menghapus pajak",
              "Mencetak lebih banyak uang",
            ],
            answer: 1,
            explain: "Menaikkan suku bunga membuat pinjaman mahal sehingga belanja dan inflasi mereda.",
          },
          {
            q: "Istilah penjaga terakhir (lender of last resort) berarti?",
            options: [
              "Bank sentral memberi pinjaman saat sistem keuangan terancam ambruk",
              "Bank yang buka paling malam",
              "Pemberi pajak terakhir",
              "Pemilik saham terbesar",
            ],
            answer: 0,
            explain: "Saat krisis, bank sentral menyuntikkan likuiditas agar sistem tidak runtuh berantai.",
          },
          {
            q: "Dengan aturan 70, inflasi 7% per tahun melipatduakan harga dalam?",
            options: ["5 tahun", "7 tahun", "10 tahun", "70 tahun"],
            answer: 2,
            explain: "70 dibagi 7 sama dengan 10 tahun.",
          },
          {
            q: "The Federal Reserve, bank sentral AS, didirikan pada tahun?",
            options: ["1890", "1911", "1913", "1933"],
            answer: 2,
            explain: "Federal Reserve Act disahkan pada 1913.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "barang-publik-dan-eksternalitas",
    levelId: "negara",
    order: 5,
    title: "Barang Publik & Eksternalitas",
    summary:
      "Sebagian biaya dan manfaat tidak masuk harga pasar. Pelajari eksternalitas, barang publik, tragedi milik bersama, dan bagaimana negara memperbaikinya.",
    durationMin: 14,
    tags: ["negara", "eksternalitas", "barang publik", "pajak pigou"],
    blocks: [
      {
        type: "paragraph",
        html: "Harga pasar tidak selalu menangkap seluruh biaya dan manfaat. Pabrik yang mencemari sungai memindahkan biayanya ke warga di hilir tanpa membayarnya. Inilah <strong>eksternalitas</strong>: dampak suatu kegiatan terhadap pihak ketiga yang tidak tercermin dalam harga.",
      },
      {
        type: "paragraph",
        html: "Eksternalitas bisa <strong>negatif</strong> (polusi, kebisingan) atau <strong>positif</strong> (vaksinasi melindungi orang lain, pendidikan menguntungkan masyarakat). Ada pula <strong>barang publik</strong> seperti pertahanan dan lampu jalan yang sulit dijual per orang sehingga pasar enggan menyediakannya. Di sinilah negara turun tangan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Ciri barang publik",
        html: "<strong>Non-rival</strong>: dipakai satu orang tidak mengurangi jatah orang lain. <strong>Non-ekskludabel</strong>: sulit melarang orang menikmatinya. Karena sulit ditarik bayaran, pasar kurang menyediakannya, sehingga negara membiayainya lewat pajak.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pajak Pigou",
        html: "Untuk eksternalitas negatif, negara dapat mengenakan <strong>pajak Pigou</strong> sebesar biaya eksternal agar pencemar menanggung biaya sosialnya. Untuk eksternalitas positif, negara bisa memberi <strong>subsidi</strong>.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba kalkulatornya",
        html: "Hitung selisih antara biaya privat dan biaya sosial, lalu lihat besar pajak yang dibutuhkan agar harga mencerminkan kerugian sebenarnya.",
      },
      { type: "widget", widget: "KalkulatorEksternalitas" },
      {
        type: "video",
        comp: "KegagalanPasar",
        title: "Kegagalan Pasar",
        caption: "Saat harga tidak menangkap seluruh biaya sosial, pasar menghasilkan terlalu banyak polusi dan terlalu sedikit barang publik.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Federal_Hall_August_2017_01.jpg?width=400",
        alt: "Gedung bersejarah di kawasan Wall Street, New York",
        caption: "Negara menetapkan aturan dan pajak agar biaya sosial seperti polusi ikut diperhitungkan pasar.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Biaya Privat vs Biaya Sosial Sebuah Pabrik (ilustrasi)",
        unit: "ribu rupiah per unit",
        source: "ilustrasi edukatif konsep eksternalitas",
        note: "Biaya sosial = biaya privat + biaya eksternal. Pajak Pigou sebesar biaya eksternal membuat harga mencerminkan kerugian sebenarnya.",
        data: [
          { label: "Biaya privat", value: 50, color: "#34d399" },
          { label: "Biaya eksternal (polusi)", value: 20, color: "#f87171" },
          { label: "Biaya sosial total", value: 70, color: "#60a5fa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menghitung biaya sosial polusi",
        html: "Sebuah pabrik memproduksi dengan biaya privat <strong>Rp50.000</strong> per unit. Tetapi tiap unit menimbulkan polusi yang merugikan warga sekitar senilai <strong>Rp20.000</strong>. Biaya sosial sebenarnya adalah Rp50.000 + Rp20.000 = <strong>Rp70.000</strong> per unit. Tanpa campur tangan, pabrik hanya menghitung Rp50.000 sehingga memproduksi terlalu banyak. Pajak Pigou Rp20.000 per unit menutup selisih ini agar harga jujur.",
      },
      {
        type: "case",
        title: "Sejarah: Tragedi milik bersama, Hardin 1968",
        html: "Pada <strong>1968</strong>, Garrett Hardin menerbitkan esai <strong>The Tragedy of the Commons</strong> di jurnal Science. Ia menggambarkan padang rumput bersama yang rusak karena tiap penggembala menambah ternak demi untung pribadi, padahal beban kerusakan ditanggung bersama. Pelajarannya: sumber daya milik bersama (udara bersih, laut, hutan) cenderung dieksploitasi berlebihan tanpa aturan. Ini menjadi dasar argumen perlunya regulasi lingkungan dan hak milik yang jelas.",
      },
      {
        type: "calcExercise",
        prompt:
          "Biaya privat produksi Rp50.000 per unit dan biaya eksternal polusi Rp20.000 per unit. Berapa biaya sosial per unit?",
        answer: 70000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Biaya sosial = biaya privat + biaya eksternal = 50.000 + 20.000 = <strong>Rp70.000</strong>. Pajak Pigou sebesar Rp20.000 dapat menutup selisihnya.",
        hint: "Jumlahkan biaya privat dengan biaya eksternal.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap contoh sebagai eksternalitas positif atau negatif.",
        buckets: ["Eksternalitas positif", "Eksternalitas negatif"],
        items: [
          { text: "Pabrik mencemari sungai yang dipakai warga", bucket: "Eksternalitas negatif" },
          { text: "Vaksinasi yang ikut melindungi orang di sekitar", bucket: "Eksternalitas positif" },
          { text: "Asap kendaraan yang memperburuk kualitas udara", bucket: "Eksternalitas negatif" },
          { text: "Pemilik rumah merawat taman yang memperindah lingkungan", bucket: "Eksternalitas positif" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Eksternalitas adalah biaya atau manfaat yang tidak tercermin dalam harga pasar.",
          "Eksternalitas negatif (polusi) membuat produksi berlebihan; pajak Pigou menambalnya.",
          "Eksternalitas positif (vaksin, pendidikan) sebaiknya disubsidi negara.",
          "Barang publik bersifat non-rival dan non-ekskludabel sehingga dibiayai lewat pajak.",
          "Tragedi milik bersama (Hardin 1968) menjelaskan perlunya aturan atas sumber daya bersama.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu eksternalitas?",
            options: [
              "Pajak atas barang impor",
              "Dampak suatu kegiatan terhadap pihak ketiga yang tidak tercermin dalam harga",
              "Keuntungan perusahaan",
              "Suku bunga acuan",
            ],
            answer: 1,
            explain: "Eksternalitas adalah biaya atau manfaat yang jatuh ke pihak lain di luar harga pasar.",
          },
          {
            q: "Polusi pabrik yang merugikan warga adalah contoh?",
            options: ["Eksternalitas positif", "Eksternalitas negatif", "Barang publik", "Subsidi"],
            answer: 1,
            explain: "Polusi membebani pihak ketiga tanpa dibayar, sehingga termasuk eksternalitas negatif.",
          },
          {
            q: "Manakah ciri barang publik?",
            options: [
              "Rival dan mudah dijual per orang",
              "Non-rival dan non-ekskludabel",
              "Selalu disediakan pasar dengan untung besar",
              "Hanya dinikmati orang kaya",
            ],
            answer: 1,
            explain: "Barang publik sulit ditarik bayaran dan pemakaian satu orang tidak mengurangi jatah lain.",
          },
          {
            q: "Biaya privat Rp50.000 dan biaya eksternal Rp20.000. Berapa biaya sosial per unit?",
            options: ["Rp30.000", "Rp50.000", "Rp70.000", "Rp20.000"],
            answer: 2,
            explain: "Biaya sosial = 50.000 + 20.000 = Rp70.000.",
          },
          {
            q: "Esai Tragedy of the Commons (1968) karya Garrett Hardin mengajarkan bahwa?",
            options: [
              "Pasar selalu efisien",
              "Sumber daya milik bersama cenderung dieksploitasi berlebihan tanpa aturan",
              "Pajak harus dihapus",
              "Monopoli baik untuk konsumen",
            ],
            answer: 1,
            explain: "Tanpa aturan, tiap orang mengambil untung pribadi sambil membebani kerusakan ke semua.",
          },
        ],
      },
    ],
  },
];
