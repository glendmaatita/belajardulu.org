import type { Lesson } from "../../../types";

export const level12: Lesson[] = [
  // ============================================================
  {
    id: "rantai-pasok-digital-blockchain",
    levelId: "digital",
    order: 1,
    title: "Rantai Pasok Digital & Ketertelusuran Blockchain",
    summary:
      "Teknologi mengubah rantai pasok dari buram menjadi transparan. Pelajari Industry 4.0, peran IoT dan RFID, serta blockchain untuk ketertelusuran yang bisa dibuktikan.",
    durationMin: 15,
    tags: ["digital", "blockchain", "iot", "industry 4.0"],
    blocks: [
      {
        type: "paragraph",
        html: "Masalah klasik rantai pasok adalah <strong>kebutaan</strong>: begitu barang keluar gudang, sering sulit tahu di mana ia berada dan dalam kondisi apa. <strong>Rantai pasok digital</strong> menambal kebutaan itu dengan teknologi: sensor, data, dan otomasi yang membuat aliran barang terlihat dan terkelola secara langsung. Gelombang ini sering disebut <strong>Industry 4.0</strong>.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/QR_code_for_mobile_English_Wikipedia.svg?width=400",
        alt: "Kode QR yang bisa dipindai dengan ponsel",
        caption: "Satu kode QR di kemasan dapat membuka seluruh jejak digital produk, dari kebun sampai rak toko.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Teknologi kunci dan kegunaannya",
        html: "<strong>IoT</strong> (sensor pada barang dan kendaraan) memberi data lokasi dan suhu secara langsung. <strong>RFID</strong> mempercepat penghitungan stok tanpa pindai satu per satu. <strong>AI dan machine learning</strong> menajamkan ramalan permintaan. <strong>Blockchain</strong> mencatat jejak yang sulit dipalsukan untuk ketertelusuran.",
      },
      {
        type: "video",
        comp: "BlockchainTraceabilityVideo",
        title: "Ketertelusuran Blockchain",
        caption: "Tiap tangan mencatat jejak yang tak bisa diam-diam diubah, dari kebun sampai cangkir.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Otomasi gudang mahal di depan tapi memangkas biaya tenaga kerja. Hitung berapa lama investasinya kembali (payback period).",
      },
      { type: "widget", widget: "KalkulatorOtomasiGudang" },
      {
        type: "chart",
        variant: "bar",
        title: "Waktu Melacak Asal Produk: Manual vs Blockchain (ilustrasi)",
        unit: "indeks waktu penelusuran",
        source: "ilustrasi terinspirasi kasus nyata penelusuran pangan",
        note: "Penelusuran asal produk yang dulu butuh berhari-hari bisa dipangkas menjadi hitungan detik dengan catatan digital bersama.",
        data: [
          { label: "Manual (berhari-hari)", value: 100, color: "#f87171" },
          { label: "Blockchain (detik)", value: 1, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ketertelusuran kopi dan klaim yang bisa dibuktikan",
        html: "Sebuah eksportir kopi specialty ingin membuktikan kepada pembeli luar negeri bahwa biji benar-benar berasal dari kebun tertentu dan diproses secara berkelanjutan. Dengan mencatat tiap tahap (panen, sangrai, ekspor) di sebuah <strong>buku besar digital bersama</strong>, pembeli cukup memindai satu kode untuk melihat seluruh perjalanan. Klaim seperti asal-usul, organik, atau bebas deforestasi berubah dari sekadar janji menjadi sesuatu yang <strong>bisa dibuktikan</strong>. Ketertelusuran ini menambah nilai jual sekaligus kepercayaan.",
      },
      {
        type: "case",
        title: "Sejarah: Walmart, IBM, dan mangga yang dilacak dalam hitungan detik (2016-2018)",
        html: "Sekitar <strong>2016 sampai 2018</strong>, <strong>Walmart</strong> bekerja sama dengan <strong>IBM</strong> menguji blockchain untuk melacak pangan. Dalam satu uji terkenal, menelusuri asal seikat <strong>mangga</strong> dari rak toko sampai ke kebun yang dulu memakan waktu sekitar <strong>tujuh hari</strong> dipangkas menjadi sekitar <strong>2,2 detik</strong>. Saat terjadi wabah penyakit dari makanan, kecepatan ini sangat penting: sumber masalah bisa ditemukan dan ditarik dalam hitungan detik, bukan minggu. Ini menunjukkan nilai nyata teknologi digital dalam rantai pasok pangan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Investasi otomasi gudang Rp4 miliar menghemat biaya tenaga kerja Rp1 miliar per tahun. Berapa tahun periode balik modalnya (payback)?",
        answer: 4,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "Payback = investasi / penghematan tahunan = 4 miliar / 1 miliar = <strong>4 tahun</strong>. Setelah itu, penghematan menjadi keuntungan bersih, di luar manfaat tambahan seperti kecepatan dan akurasi.",
        hint: "Bagi nilai investasi dengan penghematan per tahun.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan teknologi dengan kegunaan utamanya dalam rantai pasok.",
        pairs: [
          { left: "IoT", right: "Memantau lokasi dan suhu barang secara langsung" },
          { left: "RFID", right: "Menghitung stok cepat tanpa pindai satu per satu" },
          { left: "AI / machine learning", right: "Menajamkan ramalan permintaan" },
          { left: "Blockchain", right: "Mencatat jejak yang sulit dipalsukan untuk ketertelusuran" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Rantai pasok digital menambal kebutaan dengan sensor, data, dan otomasi (Industry 4.0).",
          "IoT memantau lokasi dan suhu; RFID mempercepat hitung stok; AI menajamkan ramalan.",
          "Blockchain mencatat jejak yang sulit dipalsukan, menjadikan klaim bisa dibuktikan.",
          "Penelusuran asal produk bisa dipangkas dari berhari-hari menjadi hitungan detik.",
          "Uji Walmart-IBM (2016-2018) menelusuri mangga dari tujuh hari menjadi sekitar 2,2 detik.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Masalah klasik apa yang ditambal rantai pasok digital?",
            options: [
              "Harga yang terlalu murah",
              "Kebutaan: sulit tahu posisi dan kondisi barang",
              "Terlalu banyak gudang",
              "Kelebihan pekerja",
            ],
            answer: 1,
            explain: "Teknologi membuat aliran barang terlihat dan terkelola secara langsung.",
          },
          {
            q: "Apa kegunaan utama IoT dalam rantai pasok?",
            options: [
              "Mencetak faktur",
              "Memantau lokasi dan kondisi barang secara langsung",
              "Menggantikan blockchain",
              "Menaikkan harga",
            ],
            answer: 1,
            explain: "Sensor IoT memberi data lokasi dan suhu barang maupun kendaraan secara real time.",
          },
          {
            q: "Mengapa blockchain berguna untuk ketertelusuran?",
            options: [
              "Karena membuat data mudah diubah",
              "Karena mencatat jejak yang sulit dipalsukan sehingga klaim bisa dibuktikan",
              "Karena menghapus catatan lama",
              "Karena hanya untuk mata uang",
            ],
            answer: 1,
            explain: "Catatan yang sulit diubah membuat asal-usul dan klaim produk bisa diverifikasi.",
          },
          {
            q: "Apa hasil uji Walmart-IBM melacak mangga?",
            options: [
              "Dari detik menjadi hari",
              "Dari sekitar tujuh hari menjadi sekitar 2,2 detik",
              "Tidak ada perubahan waktu",
              "Menjadi mustahil dilacak",
            ],
            answer: 1,
            explain: "Penelusuran asal dipangkas drastis, krusial saat menarik produk bermasalah.",
          },
          {
            q: "Investasi otomasi Rp4 miliar menghemat Rp1 miliar/tahun. Payback-nya?",
            options: ["1 tahun", "4 tahun", "8 tahun", "0,25 tahun"],
            answer: 1,
            explain: "4 miliar / 1 miliar per tahun = 4 tahun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "industry-4-0-smart-factory",
    levelId: "digital",
    order: 2,
    title: "Industry 4.0 & Pabrik Pintar",
    summary:
      "Pabrik pintar menyatukan dunia fisik dan digital: mesin yang melapor sendiri, perawatan prediktif, dan digital twin yang mensimulasikan lini produksi sebelum mesin nyata disentuh.",
    durationMin: 15,
    tags: ["digital", "industry 4.0", "smart factory", "digital twin"],
    blocks: [
      {
        type: "paragraph",
        html: "Tiga revolusi industri sebelumnya digerakkan oleh <strong>uap</strong>, <strong>listrik dan produksi massal</strong>, lalu <strong>elektronik dan otomasi terprogram</strong>. Revolusi keempat (<strong>Industry 4.0</strong>) digerakkan oleh <strong>integrasi siber-fisik</strong>: mesin, produk, dan sistem saling terhubung dan bertukar data lewat internet, lalu mengambil keputusan dengan sedikit campur tangan manusia.",
      },
      {
        type: "paragraph",
        html: "Di <strong>pabrik pintar</strong>, sebuah mesin tidak menunggu rusak baru diperbaiki. Sensor membaca getaran dan suhu, sistem memperkirakan kapan komponen akan aus, lalu menjadwalkan perawatan tepat sebelum gagal. Inilah <strong>perawatan prediktif</strong>, salah satu nilai paling nyata dari Industry 4.0.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Autonomous_Mobile_Robot_AMR.png?width=400",
        alt: "Robot bergerak otonom (AMR) di lantai pabrik",
        caption: "Robot otonom yang saling terhubung adalah wajah nyata Industry 4.0 di lantai produksi.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Empat ciri pabrik pintar",
        html: "1) <strong>Interkoneksi</strong>: mesin dan sensor saling terhubung. 2) <strong>Transparansi informasi</strong>: data fisik tersaji sebagai salinan digital (digital twin). 3) <strong>Bantuan teknis</strong>: sistem membantu manusia mengambil keputusan cepat. 4) <strong>Keputusan terdesentralisasi</strong>: mesin bisa memutuskan hal sederhana sendiri.",
      },
      {
        type: "video",
        comp: "DigitalTwinVideo",
        title: "Digital Twin: Kembaran Digital Lini Produksi",
        caption: "Salinan digital dari mesin nyata membuat tim bisa menguji skenario tanpa menghentikan produksi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Digital twin itu apa",
        html: "Digital twin adalah model digital hidup dari aset fisik (mesin, lini, bahkan seluruh pabrik) yang terus diperbarui oleh data sensor. Tim bisa mencoba 'bagaimana jika kecepatan dinaikkan 10 persen' di layar dulu, sebelum menyentuh mesin sungguhan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Empat Revolusi Industri dan Perkiraan Tahun Mulainya",
        unit: "tahun perkiraan",
        source: "fakta sejarah industri (tahun perkiraan tonggak utama)",
        note: "Jarak antar revolusi makin pendek: dari uap (1784) ke siber-fisik (2011) langkahnya kian cepat.",
        data: [
          { label: "1.0 Uap", value: 1784, color: "#94a3b8" },
          { label: "2.0 Listrik", value: 1870, color: "#60a5fa" },
          { label: "3.0 Otomasi", value: 1969, color: "#a78bfa" },
          { label: "4.0 Siber-fisik", value: 2011, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: OEE naik di pabrik komponen otomotif Karawang",
        html: "Sebuah pabrik komponen di kawasan industri <strong>Karawang</strong> memasang sensor getaran dan sistem pemantauan di lini pengepresan. Sebelumnya, <strong>Overall Equipment Effectiveness (OEE)</strong> hanya sekitar <strong>65 persen</strong> karena sering berhenti mendadak. Setelah perawatan prediktif berjalan, henti tak terencana turun dan OEE naik ke sekitar <strong>80 persen</strong>. Dengan kapasitas yang sama, output efektif naik sekitar 23 persen tanpa membeli mesin baru.",
      },
      {
        type: "case",
        title: "Sejarah: Istilah 'Industrie 4.0' lahir di Jerman (sekitar 2011)",
        html: "Istilah <strong>Industrie 4.0</strong> pertama kali diperkenalkan ke publik di <strong>Jerman sekitar tahun 2011</strong>, pada pameran industri <strong>Hannover Messe</strong>, sebagai bagian dari inisiatif pemerintah untuk memodernisasi manufaktur lewat integrasi siber-fisik. Dari sana istilah ini menyebar ke seluruh dunia dan menjadi payung bagi tren pabrik pintar, IoT industri, dan digital twin.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bukan sekadar beli robot",
        html: "Industry 4.0 gagal bila hanya membeli mesin canggih tanpa data yang rapi dan orang yang bisa membaca data. Teknologi tanpa proses dan keterampilan hanya menambah biaya, bukan nilai.",
      },
      {
        type: "calcExercise",
        prompt:
          "OEE = Ketersediaan x Kinerja x Kualitas. Jika Ketersediaan 90 persen, Kinerja 80 persen, dan Kualitas 95 persen, berapa OEE-nya (persen)?",
        answer: 68.4,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "OEE = 0,90 x 0,80 x 0,95 = 0,684 = <strong>68,4 persen</strong>. OEE menggabungkan tiga sumber kerugian (henti, lambat, dan cacat) menjadi satu angka kesehatan lini.",
        hint: "Kalikan ketiga persentase dalam bentuk desimal, lalu ubah ke persen.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan ciri berikut ke Pabrik Pintar atau Pabrik Tradisional.",
        buckets: ["Pabrik Pintar", "Pabrik Tradisional"],
        items: [
          { text: "Mesin melaporkan kondisinya sendiri lewat sensor", bucket: "Pabrik Pintar" },
          { text: "Perawatan baru dilakukan setelah mesin rusak", bucket: "Pabrik Tradisional" },
          { text: "Perawatan prediktif dijadwalkan sebelum gagal", bucket: "Pabrik Pintar" },
          { text: "Stok dicatat manual di buku kertas", bucket: "Pabrik Tradisional" },
          { text: "Digital twin mensimulasikan lini sebelum diubah", bucket: "Pabrik Pintar" },
          { text: "Data produksi terlihat real time di dasbor", bucket: "Pabrik Pintar" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Industry 4.0 digerakkan integrasi siber-fisik: mesin dan sistem saling bertukar data.",
          "Pabrik pintar memakai sensor untuk perawatan prediktif, mengurangi henti tak terencana.",
          "Digital twin adalah salinan digital hidup yang dipakai menguji skenario tanpa risiko.",
          "OEE menggabungkan ketersediaan, kinerja, dan kualitas menjadi satu angka kesehatan lini.",
          "Istilah Industrie 4.0 lahir di Jerman sekitar 2011 di Hannover Messe.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang menggerakkan Industry 4.0?",
            options: [
              "Tenaga uap",
              "Integrasi siber-fisik dan data yang saling terhubung",
              "Hanya listrik",
              "Tenaga kerja manual yang lebih banyak",
            ],
            answer: 1,
            explain: "Mesin, produk, dan sistem terhubung serta bertukar data untuk mengambil keputusan.",
          },
          {
            q: "Apa itu perawatan prediktif?",
            options: [
              "Memperbaiki mesin hanya setelah rusak",
              "Menjadwalkan perawatan berdasar data sensor sebelum komponen gagal",
              "Mengganti semua komponen tiap minggu",
              "Tidak pernah merawat mesin",
            ],
            answer: 1,
            explain: "Sensor membaca tanda aus sehingga perbaikan dilakukan tepat sebelum kegagalan.",
          },
          {
            q: "Apa fungsi utama digital twin?",
            options: [
              "Menggandakan mesin fisik secara nyata",
              "Menjadi salinan digital hidup untuk menguji skenario tanpa risiko",
              "Mencetak laporan keuangan",
              "Menggantikan semua pekerja",
            ],
            answer: 1,
            explain: "Model digital yang diperbarui data sensor memungkinkan uji 'bagaimana jika' di layar.",
          },
          {
            q: "Di mana dan kira-kira kapan istilah Industrie 4.0 diperkenalkan?",
            options: [
              "Amerika Serikat sekitar 1990",
              "Jerman sekitar 2011 di Hannover Messe",
              "Jepang sekitar 1980",
              "Indonesia sekitar 2020",
            ],
            answer: 1,
            explain: "Istilah ini muncul sebagai inisiatif pemerintah Jerman untuk modernisasi manufaktur.",
          },
          {
            q: "Ketersediaan 90 persen, Kinerja 80 persen, Kualitas 95 persen. Berapa OEE?",
            options: ["68,4 persen", "88,3 persen", "75 persen", "95 persen"],
            answer: 0,
            explain: "0,90 x 0,80 x 0,95 = 0,684 atau 68,4 persen.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "iot-sensor-pelacakan-real-time",
    levelId: "digital",
    order: 3,
    title: "IoT & Sensor: Pelacakan Suhu dan Lokasi Real Time",
    summary:
      "Sensor murah yang terhubung internet mengubah barang dan kendaraan menjadi sumber data hidup. Fokus pada dua kasus paling bernilai: rantai dingin (cold chain) dan pelacakan armada.",
    durationMin: 14,
    tags: ["digital", "iot", "cold chain", "sensor"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Internet of Things (IoT)</strong> berarti menempelkan sensor dan koneksi pada benda fisik sehingga benda itu bisa 'melapor' sendiri: di mana ia berada, seberapa panas, lembap, atau terguncang. Dalam rantai pasok, dua kasus paling berharga adalah <strong>rantai dingin</strong> (menjaga suhu produk sensitif) dan <strong>pelacakan armada</strong> (tahu posisi kendaraan secara langsung).",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Data_logger.jpg?width=400",
        alt: "Perekam data (data logger) sensor IoT",
        caption: "Perekam data sensor inilah yang membuat barang dan kendaraan melapor sendiri suhu serta posisinya.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kenapa rantai dingin butuh IoT",
        html: "Vaksin, daging, ikan, dan produk farmasi rusak bila suhu menyimpang walau sebentar. Sensor suhu yang melapor terus membuat penyimpangan (excursion) ketahuan saat itu juga, bukan setelah barang rusak dan uang sudah hilang.",
      },
      {
        type: "video",
        comp: "DigitalTwinVideo",
        title: "Data Sensor Jadi Salinan Digital Armada",
        caption: "Lokasi dan suhu tiap kendaraan mengalir ke layar pusat sebagai gambaran hidup operasi.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Suhu di Dalam Truk Berpendingin Selama Pengiriman (ilustrasi)",
        unit: "derajat Celsius",
        source: "ilustrasi edukatif rantai dingin (ambang aman 2-8 C)",
        note: "Pada jam ke-4 pintu terlalu lama terbuka, suhu menembus 8 C. Sensor menangkap excursion ini saat terjadi.",
        data: [
          { label: "Jam 0", value: 4 },
          { label: "Jam 1", value: 4 },
          { label: "Jam 2", value: 5 },
          { label: "Jam 3", value: 6 },
          { label: "Jam 4", value: 11, color: "#f87171" },
          { label: "Jam 5", value: 7 },
          { label: "Jam 6", value: 5 },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Sensor itu murah, barang yang rusak itu mahal",
        html: "Biaya satu logger suhu jauh lebih kecil daripada nilai satu palet vaksin atau ikan yang rusak. IoT bekerja paling kuat saat melindungi muatan yang nilainya tinggi dan mudah rusak.",
      },
      {
        type: "case",
        title: "Studi Kasus: Distribusi vaksin di Indonesia",
        html: "Sebuah dinas kesehatan mengirim <strong>500 vial vaksin</strong> senilai <strong>Rp500 ribu per vial</strong> (total Rp250 juta) ke puskesmas di daerah. Tanpa pemantauan suhu, sekitar <strong>10 persen</strong> dosis terbuang karena excursion yang tak terdeteksi, yaitu kerugian <strong>Rp25 juta</strong> per pengiriman. Dengan logger IoT seharga jauh lebih murah, penyimpangan ketahuan langsung dan sebagian besar kerugian itu dapat dicegah.",
      },
      {
        type: "case",
        title: "Sejarah: Kevin Ashton mencetuskan istilah 'Internet of Things' (sekitar 1999)",
        html: "Istilah <strong>Internet of Things</strong> dicetuskan oleh <strong>Kevin Ashton</strong> sekitar tahun <strong>1999</strong>, justru dalam konteks <strong>rantai pasok</strong>. Saat itu ia bekerja di Procter &amp; Gamble dan mengusulkan memakai tag RFID agar komputer bisa 'melihat' sendiri stok di rak tanpa data diketik manusia. Jadi sejak awal, IoT memang lahir untuk membuat rantai pasok terlihat otomatis.",
      },
      {
        type: "calcExercise",
        prompt:
          "Satu pengiriman berisi 500 vial vaksin senilai Rp500 ribu per vial. Tanpa pemantauan suhu, 10 persen terbuang. Berapa juta rupiah kerugian per pengiriman?",
        answer: 25,
        tolerance: 0,
        prefix: "Rp",
        suffix: "juta",
        solution:
          "Nilai total = 500 x Rp500 ribu = Rp250 juta. Kerugian = 10 persen x Rp250 juta = <strong>Rp25 juta</strong>. Sensor yang jauh lebih murah dari angka ini mudah membayar dirinya sendiri.",
        hint: "Hitung nilai total dulu, lalu ambil 10 persennya.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan jenis sensor IoT dengan apa yang diukurnya.",
        pairs: [
          { left: "Sensor suhu", right: "Memastikan rantai dingin tetap dalam ambang aman" },
          { left: "GPS", right: "Memberi posisi kendaraan secara langsung" },
          { left: "Sensor guncangan", right: "Mendeteksi benturan pada barang rapuh" },
          { left: "Sensor kelembapan", right: "Menjaga produk yang sensitif terhadap air" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "IoT membuat barang dan kendaraan melapor sendiri: lokasi, suhu, kelembapan, guncangan.",
          "Rantai dingin dan pelacakan armada adalah dua kasus IoT paling bernilai di rantai pasok.",
          "Excursion suhu yang ketahuan saat terjadi mencegah kerugian besar pada barang sensitif.",
          "Biaya sensor jauh lebih kecil daripada nilai muatan mahal yang dilindunginya.",
          "Istilah IoT dicetuskan Kevin Ashton sekitar 1999, justru untuk rantai pasok.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa inti dari Internet of Things dalam rantai pasok?",
            options: [
              "Menambah jumlah gudang",
              "Menempelkan sensor dan koneksi agar benda melapor sendiri",
              "Mengganti truk dengan kereta",
              "Menaikkan harga jual",
            ],
            answer: 1,
            explain: "Benda fisik menjadi sumber data hidup tentang lokasi dan kondisinya.",
          },
          {
            q: "Mengapa rantai dingin sangat butuh sensor suhu?",
            options: [
              "Agar truk lebih cepat",
              "Karena produk sensitif rusak bila suhu menyimpang walau sebentar",
              "Agar sopir tidak mengantuk",
              "Untuk mencetak label",
            ],
            answer: 1,
            explain: "Excursion suhu yang terdeteksi saat itu juga mencegah barang terlanjur rusak.",
          },
          {
            q: "Sensor apa yang memberi posisi kendaraan secara langsung?",
            options: ["Sensor suhu", "GPS", "Sensor kelembapan", "Barcode"],
            answer: 1,
            explain: "GPS pada armada memberi data lokasi real time ke pusat kendali.",
          },
          {
            q: "Siapa dan kira-kira kapan istilah Internet of Things dicetuskan?",
            options: [
              "Steve Jobs sekitar 2007",
              "Kevin Ashton sekitar 1999 dalam konteks rantai pasok",
              "Bill Gates sekitar 1985",
              "Tidak diketahui",
            ],
            answer: 1,
            explain: "Ashton mengusulkan RFID agar komputer bisa melihat stok sendiri.",
          },
          {
            q: "500 vial @ Rp500 ribu, 10 persen terbuang. Berapa kerugiannya?",
            options: ["Rp2,5 juta", "Rp25 juta", "Rp250 juta", "Rp50 juta"],
            answer: 1,
            explain: "Total Rp250 juta, 10 persennya Rp25 juta.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "rfid-barcode-identifikasi-otomatis",
    levelId: "digital",
    order: 4,
    title: "RFID & Barcode: Identifikasi Otomatis",
    summary:
      "Dua cara membuat komputer 'membaca' barang tanpa diketik manusia. Pahami kapan barcode cukup, kapan RFID layak biayanya, dan bagaimana keduanya mempercepat penghitungan stok.",
    durationMin: 14,
    tags: ["digital", "rfid", "barcode", "inventory"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Identifikasi otomatis</strong> (auto-ID) membuat komputer mengenali barang tanpa data diketik manusia, sehingga lebih cepat dan jauh lebih sedikit salah. Dua teknologi utamanya adalah <strong>barcode</strong> (dibaca dengan cahaya, butuh garis pandang) dan <strong>RFID</strong> (dibaca dengan gelombang radio, bisa banyak sekaligus tanpa garis pandang).",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/RFID_tag_in_textile_label_disassembled.jpg?width=400",
        alt: "Tag RFID yang tersembunyi di dalam label tekstil",
        caption: "Tag RFID setipis ini bisa ditanam di label pakaian, lalu dibaca massal tanpa garis pandang.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Perbedaan inti barcode dan RFID",
        html: "<strong>Barcode</strong>: sangat murah, tapi harus dipindai satu per satu dan label harus terlihat. <strong>RFID</strong>: tag lebih mahal, tapi pembaca bisa menangkap ratusan tag sekaligus dari jarak beberapa meter tanpa garis pandang. RFID menang untuk penghitungan massal dan cepat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "RFID memangkas jam kerja penghitungan stok. Hitung berapa lama investasi alat dan tag itu balik modal lewat penghematan tenaga kerja.",
      },
      { type: "widget", widget: "KalkulatorOtomasiGudang" },
      {
        type: "video",
        comp: "DigitalTwinVideo",
        title: "Tag Jadi Salinan Digital Stok",
        caption: "Tiap item ber-tag RFID melapor sendiri sehingga stok fisik tercermin hidup di sistem.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Waktu Menghitung 10.000 Item: Barcode Manual vs RFID (ilustrasi)",
        unit: "menit",
        source: "ilustrasi edukatif berdasarkan kecepatan baca tipikal",
        note: "Pembaca RFID menangkap ratusan tag per detik, sedangkan barcode dipindai satu per satu.",
        data: [
          { label: "Barcode manual", value: 1000, color: "#f87171" },
          { label: "RFID portal", value: 1, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Toko fesyen menaikkan akurasi stok",
        html: "Sebuah peritel pakaian di Indonesia mengeluhkan <strong>akurasi stok</strong> hanya sekitar <strong>75 persen</strong>: catatan dan barang fisik sering tak cocok, sehingga sering 'kehabisan' padahal barang ada di gudang. Setelah memasang tag <strong>RFID</strong> pada tiap potong pakaian dan melakukan cycle counting mingguan, akurasi naik ke sekitar <strong>98 persen</strong>. Hasilnya, kehilangan penjualan akibat stok hantu turun dan staf tidak lagi menghabiskan berjam-jam memindai manual.",
      },
      {
        type: "case",
        title: "Sejarah: Barcode pertama dipindai pada permen karet (1974)",
        html: "Pada <strong>26 Juni 1974</strong>, sebungkus permen karet <strong>Wrigley</strong> menjadi produk pertama yang dipindai dengan <strong>barcode</strong> di sebuah supermarket Marsh di <strong>Troy, Ohio</strong>, Amerika Serikat. Itu menandai awal era kasir otomatis yang kita kenal sekarang. Hampir tiga dekade kemudian, sekitar <strong>2003</strong>, <strong>Walmart</strong> mewajibkan pemasok besarnya memakai <strong>RFID</strong>, mendorong adopsi teknologi itu di rantai pasok global.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "RFID bukan selalu jawabannya",
        html: "Untuk barang murah dalam jumlah sangat besar, harga tag RFID per unit bisa lebih mahal daripada manfaatnya. Barcode tetap pilihan tepat saat margin tipis dan kecepatan baca massal tidak kritis.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pembaca RFID portal membaca 200 tag per detik. Berapa detik untuk menghitung 10.000 item sekaligus?",
        answer: 50,
        tolerance: 0,
        suffix: "detik",
        solution:
          "Waktu = 10.000 / 200 = <strong>50 detik</strong>. Bandingkan dengan pemindaian barcode satu per satu yang bisa makan berjam-jam untuk jumlah yang sama.",
        hint: "Bagi jumlah item dengan kecepatan baca per detik.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pernyataan berikut ke Barcode atau RFID.",
        buckets: ["Barcode", "RFID"],
        items: [
          { text: "Harus ada garis pandang langsung ke label", bucket: "Barcode" },
          { text: "Bisa membaca ratusan tag sekaligus tanpa garis pandang", bucket: "RFID" },
          { text: "Biaya per label sangat murah", bucket: "Barcode" },
          { text: "Dipindai satu per satu", bucket: "Barcode" },
          { text: "Memakai gelombang radio dari jarak beberapa meter", bucket: "RFID" },
          { text: "Paling unggul untuk cycle counting cepat dan massal", bucket: "RFID" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Identifikasi otomatis membuat komputer membaca barang tanpa diketik manusia.",
          "Barcode murah tapi butuh garis pandang dan dipindai satu per satu.",
          "RFID menangkap banyak tag sekaligus dari jarak, unggul untuk hitung stok massal.",
          "RFID dapat menaikkan akurasi stok dari sekitar 75 persen ke sekitar 98 persen.",
          "Barcode pertama dipindai 1974 (permen Wrigley); Walmart mewajibkan RFID sekitar 2003.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa keunggulan utama RFID dibanding barcode?",
            options: [
              "Lebih murah per label",
              "Bisa membaca banyak tag sekaligus tanpa garis pandang",
              "Tidak butuh pembaca",
              "Selalu lebih akurat untuk semua barang",
            ],
            answer: 1,
            explain: "Gelombang radio menangkap ratusan tag dari jarak, mempercepat hitung massal.",
          },
          {
            q: "Kapan barcode tetap pilihan yang tepat?",
            options: [
              "Saat barang murah dalam jumlah besar dan margin tipis",
              "Saat butuh baca ratusan item sekaligus",
              "Saat label tak boleh terlihat",
              "Tidak pernah",
            ],
            answer: 0,
            explain: "Tag RFID per unit bisa lebih mahal daripada manfaatnya untuk barang murah massal.",
          },
          {
            q: "Apa dampak RFID pada akurasi stok di kasus peritel fesyen?",
            options: [
              "Turun dari 98 ke 75 persen",
              "Naik dari sekitar 75 ke sekitar 98 persen",
              "Tidak berubah",
              "Menjadi 100 persen pasti",
            ],
            answer: 1,
            explain: "Cycle counting RFID membuat catatan dan stok fisik jauh lebih cocok.",
          },
          {
            q: "Produk apa yang menjadi barcode pertama yang dipindai pada 1974?",
            options: [
              "Sekaleng soda",
              "Sebungkus permen karet Wrigley",
              "Sebuah buku",
              "Sebotol susu",
            ],
            answer: 1,
            explain: "Dipindai di supermarket Marsh, Troy, Ohio, menandai era kasir otomatis.",
          },
          {
            q: "Pembaca RFID 200 tag/detik. Berapa lama menghitung 10.000 item?",
            options: ["5 detik", "50 detik", "500 detik", "20 detik"],
            answer: 1,
            explain: "10.000 dibagi 200 sama dengan 50 detik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "ai-machine-learning-scm",
    levelId: "digital",
    order: 5,
    title: "AI & Machine Learning dalam Rantai Pasok",
    summary:
      "Machine learning belajar dari data masa lalu untuk tiga tugas berharga: meramal permintaan lebih tajam, mendeteksi anomali lebih dini, dan mengoptimalkan rute pengiriman.",
    durationMin: 15,
    tags: ["digital", "ai", "machine learning", "forecasting"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Machine learning (ML)</strong> adalah program yang belajar pola dari data, bukan dari aturan yang ditulis tangan. Dalam rantai pasok, ML paling bernilai pada tiga tugas: <strong>peramalan permintaan</strong> (berapa yang akan terjual), <strong>deteksi anomali</strong> (menemukan transaksi atau pengiriman ganjil), dan <strong>optimasi rute</strong> (urutan dan jalur antar yang paling hemat).",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Diagnostic_monitors_in_the_control_room_of_Wendelstein_7-X.jpg?width=400",
        alt: "Deretan monitor di sebuah ruang kendali",
        caption: "Model machine learning menyajikan ramalan dan anomali di dasbor seperti ini agar tim cepat mengambil keputusan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kenapa ramalan yang lebih tajam itu mahal nilainya",
        html: "Ramalan yang meleset menimbulkan dua biaya sekaligus: <strong>kehabisan stok</strong> (penjualan dan pelanggan hilang) dan <strong>kelebihan stok</strong> (modal terkunci, barang kedaluwarsa). ML menurunkan error ramalan, sehingga kedua biaya itu menyusut bersamaan.",
      },
      {
        type: "video",
        comp: "DigitalTwinVideo",
        title: "Menguji Skenario Permintaan di Model Digital",
        caption: "Sebelum menumpuk stok, tim menguji ramalan dan skenario di salinan digital operasinya.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Permintaan Aktual vs Ramalan Sederhana vs Ramalan ML (ilustrasi)",
        unit: "ribu unit",
        source: "ilustrasi edukatif: ML mengikuti pola musiman lebih dekat",
        note: "Ramalan ML (hijau) menempel lebih rapat ke permintaan aktual ketimbang ramalan rata-rata sederhana.",
        data: [
          { label: "Jan", value: 100 },
          { label: "Feb", value: 120 },
          { label: "Mar", value: 90 },
          { label: "Apr", value: 140 },
          { label: "Mei", value: 160 },
          { label: "Jun", value: 130 },
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "ML hanya sebaik datanya",
        html: "Model yang dilatih dari data kotor atau bias akan meramal salah dengan percaya diri. Bersihkan data, perbarui terus, dan tetap libatkan akal sehat manusia untuk keputusan besar.",
      },
      {
        type: "case",
        title: "Studi Kasus: FMCG menekan error ramalan",
        html: "Sebuah distributor barang konsumsi (FMCG) di Indonesia awalnya meramal permintaan dengan rata-rata sederhana, dengan <strong>error sekitar 30 persen</strong>. Setelah memakai model ML yang membaca pola musiman, promosi, dan hari libur, error turun ke sekitar <strong>15 persen</strong>. Stok pengaman bisa dikurangi, modal yang terkunci di gudang berkurang miliaran rupiah, dan kejadian kehabisan stok di toko ikut menurun.",
      },
      {
        type: "case",
        title: "Sejarah: Paten 'anticipatory shipping' Amazon (sekitar 2014)",
        html: "Sekitar tahun <strong>2014</strong>, <strong>Amazon</strong> memperoleh paten untuk ide <strong>anticipatory shipping</strong>, yaitu mulai mengirim barang ke arah wilayah pelanggan bahkan sebelum pesanan resmi masuk, berdasar prediksi pola pembelian. Idenya menggambarkan arah ekstrem dari peramalan berbasis data: makin tajam prediksi, makin cepat barang bisa sampai. Ini menandai betapa serius industri memandang ML untuk meramal permintaan.",
      },
      {
        type: "calcExercise",
        prompt:
          "MAPE mengukur error ramalan. Jika ramalan 1.200 unit dan aktual 1.000 unit, berapa persen error absolutnya?",
        answer: 20,
        tolerance: 0,
        suffix: "%",
        solution:
          "Error = |ramalan - aktual| / aktual = |1.200 - 1.000| / 1.000 = 200 / 1.000 = 0,20 = <strong>20 persen</strong>. Makin kecil angka ini, makin tepat ramalannya.",
        hint: "Selisih absolut dibagi nilai aktual, lalu ubah ke persen.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tugas machine learning dengan masalah rantai pasok yang dipecahkannya.",
        pairs: [
          { left: "Peramalan permintaan", right: "Menentukan berapa banyak stok yang perlu disiapkan" },
          { left: "Deteksi anomali", right: "Menemukan pengiriman atau transaksi ganjil lebih dini" },
          { left: "Optimasi rute", right: "Memilih urutan antar yang paling hemat jarak dan waktu" },
          { left: "Segmentasi pelanggan", right: "Mengelompokkan permintaan agar perencanaan lebih tepat" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Machine learning belajar pola dari data, bukan dari aturan yang ditulis tangan.",
          "Tiga tugas paling bernilai: peramalan permintaan, deteksi anomali, optimasi rute.",
          "Ramalan lebih tajam menurunkan biaya kehabisan stok dan kelebihan stok sekaligus.",
          "ML hanya sebaik datanya; data kotor membuat ramalan salah dengan percaya diri.",
          "MAPE mengukur error ramalan: makin kecil persennya, makin tepat prediksinya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa beda machine learning dengan program biasa?",
            options: [
              "ML mengikuti aturan yang ditulis tangan",
              "ML belajar pola dari data, bukan dari aturan tetap",
              "ML tidak butuh data",
              "ML hanya untuk grafik",
            ],
            answer: 1,
            explain: "Model dilatih dari data masa lalu untuk memprediksi atau mengelompokkan.",
          },
          {
            q: "Mengapa ramalan yang lebih tajam bernilai mahal?",
            options: [
              "Karena menambah biaya iklan",
              "Karena menurunkan biaya kehabisan stok dan kelebihan stok sekaligus",
              "Karena menaikkan harga jual",
              "Karena mengurangi jumlah pelanggan",
            ],
            answer: 1,
            explain: "Error ramalan yang turun memangkas dua sumber kerugian sekaligus.",
          },
          {
            q: "Tugas ML mana yang menemukan pengiriman ganjil lebih dini?",
            options: ["Optimasi rute", "Deteksi anomali", "Peramalan permintaan", "Segmentasi"],
            answer: 1,
            explain: "Deteksi anomali menandai pola yang menyimpang dari kebiasaan.",
          },
          {
            q: "Apa ide paten 'anticipatory shipping' Amazon sekitar 2014?",
            options: [
              "Mengirim barang setelah dua tahun",
              "Mulai mengirim ke arah pelanggan sebelum pesanan resmi masuk",
              "Menghapus gudang",
              "Menaikkan ongkos kirim",
            ],
            answer: 1,
            explain: "Prediksi pola pembelian dipakai untuk mempercepat pengiriman.",
          },
          {
            q: "Ramalan 1.200, aktual 1.000. Berapa error absolutnya?",
            options: ["10 persen", "20 persen", "12 persen", "2 persen"],
            answer: 1,
            explain: "|1.200-1.000|/1.000 = 200/1.000 = 20 persen.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cloud-supply-chain-visibilitas",
    levelId: "digital",
    order: 6,
    title: "Cloud Supply Chain & Visibilitas Mitra",
    summary:
      "Platform berbasis cloud membuat principal, distributor, dan peritel melihat data yang sama secara langsung. Visibilitas bersama meredam efek cambuk (bullwhip) dan menyusutkan stok pengaman.",
    durationMin: 15,
    tags: ["digital", "cloud", "visibilitas", "control tower"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat tiap mitra menyimpan datanya sendiri, mereka saling menebak. Akibatnya muncul <strong>efek cambuk (bullwhip)</strong>: perubahan kecil di permintaan eceran membesar berlipat-lipat saat naik ke distributor, pabrik, lalu pemasok. <strong>Cloud supply chain</strong> menaruh data di satu tempat bersama (sering disebut <strong>control tower</strong>), sehingga semua pihak melihat angka yang sama secara langsung.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Diagnostic_monitors_in_the_control_room_of_Wendelstein_7-X.jpg?width=400",
        alt: "Ruang kendali dengan banyak layar pemantauan",
        caption: "Control tower berbasis cloud menyatukan data semua mitra ke satu ruang pemantauan seperti ini.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Visibilitas bersama meredam efek cambuk",
        html: "Bila pabrik bisa melihat penjualan eceran yang sesungguhnya, ia tak perlu bereaksi berlebihan terhadap lonjakan pesanan distributor. Data yang sama untuk semua mitra memperkecil ayunan stok dan pesanan di sepanjang rantai.",
      },
      {
        type: "video",
        comp: "DigitalTwinVideo",
        title: "Control Tower: Satu Layar untuk Seluruh Rantai",
        caption: "Cloud menyatukan data mitra menjadi gambaran hidup yang dilihat semua pihak sekaligus.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Efek Cambuk: Ayunan Pesanan Membesar ke Hulu (ilustrasi)",
        unit: "indeks variasi pesanan",
        source: "ilustrasi edukatif konsep bullwhip effect",
        note: "Tanpa visibilitas bersama, variasi pesanan membesar dari peritel ke pemasok. Cloud meratakannya.",
        data: [
          { label: "Peritel", value: 10, color: "#34d399" },
          { label: "Distributor", value: 25, color: "#a3e635" },
          { label: "Pabrik", value: 50, color: "#fbbf24" },
          { label: "Pemasok", value: 90, color: "#f87171" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Cloud bukan cuma soal hemat server",
        html: "Manfaat terbesar cloud di rantai pasok bukan sekadar tidak membeli server, melainkan <strong>integrasi mitra</strong>: pemasok, gudang, dan peritel bisa dihubungkan ke platform yang sama tanpa proyek IT raksasa di tiap pihak.",
      },
      {
        type: "case",
        title: "Studi Kasus: Control tower memangkas stok pengaman",
        html: "Sebuah principal consumer goods di Indonesia menghubungkan <strong>distributor dan peritel utamanya</strong> ke platform cloud bersama. Karena pabrik kini melihat penjualan nyata di toko, ia tak lagi menimbun untuk berjaga-jaga. <strong>Stok pengaman</strong> turun dari sekitar <strong>Rp10 miliar</strong> menjadi sekitar <strong>Rp7 miliar</strong>, yaitu pembebasan modal sekitar <strong>Rp3 miliar</strong> tanpa menurunkan tingkat layanan.",
      },
      {
        type: "case",
        title: "Sejarah: TradeLens Maersk-IBM, lahir 2018 dan ditutup 2022",
        html: "Sekitar <strong>2018</strong>, raksasa pelayaran <strong>Maersk</strong> bersama <strong>IBM</strong> meluncurkan <strong>TradeLens</strong>, platform berbasis blockchain untuk berbagi dokumen dan visibilitas pengapalan global. Namun pada <strong>2022</strong> platform itu <strong>ditutup</strong> karena gagal menarik cukup banyak pelaku industri untuk bergabung. Pelajarannya jelas: platform berbagi data hanya berguna bila banyak mitra ikut. Teknologi hebat tanpa adopsi luas tetap gagal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Visibilitas cloud menurunkan stok pengaman dari Rp10 miliar menjadi Rp7 miliar. Berapa persen penurunannya?",
        answer: 30,
        tolerance: 0,
        suffix: "%",
        solution:
          "Penurunan = (10 - 7) / 10 = 3 / 10 = 0,30 = <strong>30 persen</strong>. Modal sebesar Rp3 miliar terbebas untuk dipakai di tempat lain.",
        hint: "Selisih dibagi nilai awal, lalu ubah ke persen.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pernyataan berikut sebagai Manfaat atau Tantangan platform cloud bersama.",
        buckets: ["Manfaat", "Tantangan"],
        items: [
          { text: "Semua mitra melihat data yang sama secara langsung", bucket: "Manfaat" },
          { text: "Butuh banyak mitra mau bergabung agar berguna", bucket: "Tantangan" },
          { text: "Integrasi mitra tanpa proyek IT raksasa di tiap pihak", bucket: "Manfaat" },
          { text: "Kekhawatiran soal siapa pemilik dan keamanan data", bucket: "Tantangan" },
          { text: "Efek cambuk mengecil karena permintaan nyata terlihat", bucket: "Manfaat" },
          { text: "Ketergantungan pada koneksi internet yang andal", bucket: "Tantangan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Data yang tersekat membuat mitra saling menebak dan memicu efek cambuk.",
          "Cloud supply chain menaruh data di control tower bersama yang dilihat semua pihak.",
          "Visibilitas bersama meredam ayunan pesanan dan menyusutkan stok pengaman.",
          "Manfaat utama cloud adalah integrasi mitra, bukan sekadar hemat server.",
          "TradeLens (2018-2022) membuktikan platform berbagi data gagal tanpa adopsi luas.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu efek cambuk (bullwhip)?",
            options: [
              "Harga yang naik turun karena cuaca",
              "Perubahan kecil permintaan eceran membesar berlipat ke hulu rantai",
              "Gudang yang terlalu kecil",
              "Pengiriman yang terlambat",
            ],
            answer: 1,
            explain: "Tanpa data bersama, tiap tingkat bereaksi berlebihan dan ayunan membesar.",
          },
          {
            q: "Apa fungsi control tower berbasis cloud?",
            options: [
              "Menyimpan barang fisik",
              "Menyatukan data mitra agar semua melihat angka yang sama secara langsung",
              "Menggantikan truk",
              "Mencetak barcode",
            ],
            answer: 1,
            explain: "Satu sumber data bersama mengurangi tebak-tebakan antar mitra.",
          },
          {
            q: "Apa manfaat terbesar cloud di rantai pasok?",
            options: [
              "Hemat membeli server saja",
              "Integrasi mitra tanpa proyek IT raksasa di tiap pihak",
              "Menghapus kebutuhan data",
              "Menaikkan harga",
            ],
            answer: 1,
            explain: "Pemasok, gudang, dan peritel terhubung ke platform yang sama.",
          },
          {
            q: "Apa pelajaran dari TradeLens (2018-2022)?",
            options: [
              "Blockchain selalu sukses",
              "Platform berbagi data gagal tanpa adopsi mitra yang luas",
              "Visibilitas tidak penting",
              "Maersk berhenti berlayar",
            ],
            answer: 1,
            explain: "Teknologi hebat tetap gagal bila terlalu sedikit pelaku industri ikut.",
          },
          {
            q: "Stok pengaman turun dari Rp10 miliar ke Rp7 miliar. Berapa persen penurunannya?",
            options: ["3 persen", "30 persen", "70 persen", "13 persen"],
            answer: 1,
            explain: "(10-7)/10 = 0,30 atau 30 persen.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "rpa-pengadaan-digital",
    levelId: "digital",
    order: 7,
    title: "RPA & Pengadaan Digital",
    summary:
      "Robot perangkat lunak (RPA) mengerjakan tugas dokumen yang berulang tanpa lelah. Dipadu e-procurement dan pencocokan tiga arah, proses pengadaan jadi lebih cepat, murah, dan minim salah.",
    durationMin: 14,
    tags: ["digital", "rpa", "e-procurement", "automation"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Robotic Process Automation (RPA)</strong> adalah robot perangkat lunak yang meniru langkah manusia di komputer: membuka email, menyalin angka dari faktur, mengetik ke sistem, dan mencocokkan dokumen. Ia cocok untuk tugas <strong>berulang, bervolume tinggi, dan berbasis aturan</strong>, persis seperti banyak proses di <strong>pengadaan (procurement)</strong>.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/EAN-13-5901234123457.svg?width=400",
        alt: "Contoh barcode EAN-13",
        caption: "Barcode pada barang yang datang dipindai saat penerimaan, lalu dicocokkan otomatis dengan PO dan faktur.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Pencocokan tiga arah (three-way match)",
        html: "Sebelum faktur dibayar, tiga dokumen harus cocok: <strong>Purchase Order</strong> (apa yang dipesan), <strong>bukti penerimaan barang</strong> (apa yang datang), dan <strong>faktur</strong> (apa yang ditagih). RPA mencocokkan ketiganya otomatis dan hanya menyerahkan kasus yang tidak cocok ke manusia.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Otomasi proses kantor mirip otomasi gudang: biaya di depan ditukar dengan penghematan jangka panjang. Pakai kalkulator untuk merasakan logika balik modalnya.",
      },
      { type: "widget", widget: "KalkulatorOtomasiGudang" },
      {
        type: "video",
        comp: "BlockchainTraceabilityVideo",
        title: "Jejak Dokumen Pengadaan yang Bisa Diaudit",
        caption: "Tiap langkah pengadaan meninggalkan jejak digital sehingga pencocokan dan audit menjadi mudah.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Biaya Memproses Satu Faktur: Manual vs RPA (ilustrasi)",
        unit: "rupiah per faktur",
        source: "ilustrasi edukatif biaya pemrosesan dokumen",
        note: "Setelah robot dibuat, biaya per faktur turun drastis karena tak ada jam kerja manusia per dokumen.",
        data: [
          { label: "Manual", value: 25000, color: "#f87171" },
          { label: "RPA", value: 5000, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Shared service center memangkas biaya faktur",
        html: "Sebuah perusahaan di Indonesia memproses sekitar <strong>100.000 faktur per tahun</strong>. Secara manual, biayanya sekitar <strong>Rp25 ribu per faktur</strong>. Setelah RPA menangani pencocokan tiga arah, biaya turun ke sekitar <strong>Rp5 ribu per faktur</strong>. Penghematan sekitar <strong>Rp20 ribu per faktur</strong> dikalikan 100.000 faktur menjadi sekitar <strong>Rp2 miliar per tahun</strong>, ditambah pembayaran yang lebih cepat dan lebih sedikit salah.",
      },
      {
        type: "case",
        title: "Sejarah: Ariba dan lahirnya e-procurement (sekitar 1996)",
        html: "Sekitar tahun <strong>1996</strong>, perusahaan <strong>Ariba</strong> didirikan di Amerika Serikat sebagai salah satu pelopor <strong>e-procurement</strong>, yaitu memindahkan pembelian antar-perusahaan dari faks dan kertas ke internet. Gagasan ini ikut memicu gelombang pengadaan digital: katalog elektronik, persetujuan daring, dan jejak audit otomatis. Dari sanalah jalan menuju RPA dan pencocokan faktur otomatis hari ini dimulai.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Otomasi proses berantakan hanya mempercepat kekacauan",
        html: "RPA paling berhasil setelah proses dirapikan lebih dulu. Mengotomasi alur kerja yang penuh pengecualian justru membuat robot sering tersandung dan butuh banyak perbaikan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Memproses faktur manual Rp25 ribu, dengan RPA Rp5 ribu. Untuk 100.000 faktur per tahun, berapa miliar rupiah penghematan setahun?",
        answer: 2,
        tolerance: 0,
        prefix: "Rp",
        suffix: "miliar",
        solution:
          "Penghematan per faktur = Rp25 ribu - Rp5 ribu = Rp20 ribu. Total = Rp20 ribu x 100.000 = Rp2.000.000.000 = <strong>Rp2 miliar</strong> per tahun.",
        hint: "Hitung selisih biaya per faktur, lalu kalikan dengan jumlah faktur setahun.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah pengadaan digital dengan artinya.",
        pairs: [
          { left: "Purchase Order", right: "Dokumen yang menyatakan apa yang dipesan" },
          { left: "Bukti penerimaan barang", right: "Catatan apa yang sebenarnya datang" },
          { left: "Faktur", right: "Tagihan atas barang atau jasa yang dikirim" },
          { left: "RPA", right: "Robot perangkat lunak yang mencocokkan dokumen otomatis" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "RPA adalah robot perangkat lunak untuk tugas dokumen yang berulang dan berbasis aturan.",
          "Pencocokan tiga arah membandingkan PO, bukti penerimaan, dan faktur sebelum bayar.",
          "E-procurement memindahkan pembelian antar-perusahaan dari kertas ke internet.",
          "Otomasi menurunkan biaya per faktur dan mempercepat pembayaran, tapi butuh proses yang rapi dulu.",
          "Ariba (sekitar 1996) menjadi pelopor yang mengawali gelombang pengadaan digital.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tugas seperti apa yang paling cocok untuk RPA?",
            options: [
              "Keputusan strategis yang rumit",
              "Tugas berulang, bervolume tinggi, dan berbasis aturan",
              "Negosiasi tatap muka",
              "Desain produk baru",
            ],
            answer: 1,
            explain: "Robot perangkat lunak unggul pada langkah yang jelas dan diulang terus.",
          },
          {
            q: "Apa tiga dokumen dalam pencocokan tiga arah?",
            options: [
              "PO, bukti penerimaan barang, dan faktur",
              "Faktur, gaji, dan pajak",
              "Katalog, iklan, dan kontrak",
              "GPS, sensor, dan barcode",
            ],
            answer: 0,
            explain: "Ketiganya harus cocok sebelum faktur dibayar.",
          },
          {
            q: "Apa risiko mengotomasi proses yang masih berantakan?",
            options: [
              "Tidak ada risiko sama sekali",
              "Robot sering tersandung dan butuh banyak perbaikan",
              "Biaya langsung nol",
              "Proses otomatis jadi rapi sendiri",
            ],
            answer: 1,
            explain: "Otomasi mempercepat kekacauan; rapikan proses lebih dulu.",
          },
          {
            q: "Apa peran Ariba sekitar 1996?",
            options: [
              "Membuat truk otonom",
              "Menjadi pelopor e-procurement, memindahkan pembelian ke internet",
              "Menemukan barcode",
              "Meluncurkan blockchain",
            ],
            answer: 1,
            explain: "Ariba ikut mengawali gelombang pengadaan digital.",
          },
          {
            q: "Manual Rp25 ribu, RPA Rp5 ribu, 100.000 faktur/tahun. Berapa penghematannya?",
            options: ["Rp200 juta", "Rp2 miliar", "Rp20 miliar", "Rp500 juta"],
            answer: 1,
            explain: "Selisih Rp20 ribu x 100.000 = Rp2 miliar per tahun.",
          },
        ],
      },
    ],
  },
];
