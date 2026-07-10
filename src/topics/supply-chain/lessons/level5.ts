import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "logistik-kepulauan-tol-laut",
    levelId: "logistik",
    order: 1,
    title: "Logistik Negara Kepulauan & Tol Laut",
    summary:
      "Memindahkan barang di ribuan pulau adalah tantangan khas Indonesia. Pelajari peran moda laut, masalah last mile, dan bagaimana program Tol Laut menekan disparitas harga.",
    durationMin: 15,
    tags: ["logistik", "tol laut", "kepulauan", "distribusi"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Logistik</strong> adalah bagian rantai pasok yang mengurus penyimpanan dan pemindahan barang. Di Indonesia, tantangannya unik: lebih dari 17.000 pulau, sehingga sebagian besar barang harus melewati <strong>laut</strong>. Jalur laut murah per kilogram, tapi lambat dan butuh pelabuhan, kapal, serta jadwal yang andal.",
      },
      {
        type: "paragraph",
        html: "Masalah terbesar sering muncul di <strong>last mile</strong>, segmen terakhir sampai ke konsumen di pulau atau pegunungan terpencil. Di sinilah biaya per kilogram bisa meledak karena volume kecil, jalan buruk, dan tidak ada muatan balik (kapal pulang kosong).",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg?width=400",
        alt: "Kapal kontainer besar berlayar di laut lepas",
        caption: "Kapal kontainer adalah tulang punggung logistik negara kepulauan: murah per ton-kilometer dan mampu menyambung ribuan pulau.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kenapa moda laut dominan di Indonesia",
        html: "Per ton-kilometer, kapal laut adalah moda <strong>termurah dan paling rendah emisi</strong>. Untuk negara kepulauan, laut bukan pilihan mewah melainkan tulang punggung. Truk dan pesawat melengkapi di darat dan untuk barang mendesak.",
      },
      {
        type: "video",
        comp: "TolLautVideo",
        title: "Tol Laut",
        caption: "Pelayaran terjadwal yang menyambung barat ke timur agar harga kebutuhan pokok lebih merata.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Bandingkan laut, darat, dan udara, bukan hanya dari ongkos kirim, tapi juga dari biaya barang yang tertahan selama transit.",
      },
      { type: "widget", widget: "KalkulatorPilihModa" },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan Biaya Logistik per Ton-Kilometer antar Moda (ilustrasi)",
        unit: "indeks biaya relatif",
        source: "ilustrasi edukatif, urutan sesuai pola nyata",
        note: "Laut jauh lebih murah per ton-km, tapi paling lambat. Pesawat tercepat namun termahal.",
        data: [
          { label: "Laut", value: 1, color: "#34d399" },
          { label: "Kereta", value: 2.3, color: "#60a5fa" },
          { label: "Truk", value: 5.2, color: "#fbbf24" },
          { label: "Pesawat", value: 38, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Program Tol Laut menekan harga di timur",
        html: "Sebelum program <strong>Tol Laut</strong> diluncurkan pada <strong>2015</strong>, kapal hanya singgah ke pelabuhan kecil di timur Indonesia bila ada muatan menguntungkan, sehingga jarang dan mahal. Tol Laut menyediakan kapal yang berlayar <strong>terjadwal tetap</strong> dan disubsidi, menyambung pelabuhan besar ke pulau terpencil. Hasilnya, di sejumlah daerah harga semen, beras, dan barang pokok turun cukup besar karena ongkos angkut lebih pasti dan murah. Ini contoh bagaimana kebijakan logistik langsung menyentuh harga di rak.",
      },
      {
        type: "case",
        title: "Sejarah: Revolusi kontainer Malcolm McLean (1956)",
        html: "Pada <strong>26 April 1956</strong>, pengusaha truk Amerika <strong>Malcolm McLean</strong> mengirim 58 kotak logam standar dengan kapal dari Newark ke Houston. Sebelumnya, barang dimuat satu per satu (break bulk), lambat dan mahal. <strong>Peti kemas</strong> (kontainer) yang seragam memungkinkan barang dipindah mulus antara kapal, truk, dan kereta tanpa dibongkar. Biaya bongkar muat anjlok drastis dan perdagangan global meledak. Hampir semua barang yang kita pakai hari ini pernah berada di dalam kontainer.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kiriman 8 ton menempuh 1.500 km. Dengan tarif laut Rp1.200 per ton-km, berapa total ongkos angkutnya?",
        answer: 14400000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "8 ton x 1.500 km x Rp1.200 = <strong>Rp14.400.000</strong>. Tarif per ton-km dikalikan berat dan jarak menghasilkan total ongkos angkut.",
        hint: "Kalikan berat (ton) x jarak (km) x tarif per ton-km.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan ke moda yang paling tepat.",
        buckets: ["Laut", "Pesawat"],
        items: [
          { text: "Termurah per ton-km untuk volume besar", bucket: "Laut" },
          { text: "Tercepat untuk barang mendesak atau cepat rusak", bucket: "Pesawat" },
          { text: "Tulang punggung distribusi antar pulau", bucket: "Laut" },
          { text: "Biaya per kilogram paling mahal", bucket: "Pesawat" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Logistik mengurus penyimpanan dan pemindahan barang dalam rantai pasok.",
          "Sebagai negara kepulauan, Indonesia bertumpu pada moda laut yang murah per ton-km.",
          "Last mile ke daerah terpencil adalah titik biaya tertinggi karena volume kecil dan muatan balik kosong.",
          "Program Tol Laut (2015) memakai kapal terjadwal dan subsidi untuk menekan disparitas harga.",
          "Revolusi kontainer McLean (1956) memangkas biaya bongkar muat dan memicu perdagangan global.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa moda laut dominan dalam logistik Indonesia?",
            options: [
              "Karena paling cepat",
              "Karena Indonesia negara kepulauan dan laut termurah per ton-km",
              "Karena tidak ada truk",
              "Karena gratis",
            ],
            answer: 1,
            explain: "Geografi kepulauan dan biaya laut yang rendah per ton-km menjadikannya tulang punggung.",
          },
          {
            q: "Apa itu masalah 'last mile'?",
            options: [
              "Jarak pertama dari pabrik",
              "Segmen terakhir sampai konsumen, sering paling mahal",
              "Jarak antar dua pelabuhan besar",
              "Waktu bongkar di gudang",
            ],
            answer: 1,
            explain: "Last mile ke daerah terpencil mahal karena volume kecil dan muatan balik kosong.",
          },
          {
            q: "Apa inti program Tol Laut?",
            options: [
              "Membangun jalan tol di atas laut",
              "Kapal berlayar terjadwal dan disubsidi menyambung ke pulau terpencil",
              "Melarang impor",
              "Mengganti kapal dengan pesawat",
            ],
            answer: 1,
            explain: "Tol Laut menyediakan pelayaran rutin bersubsidi untuk menekan disparitas harga.",
          },
          {
            q: "Apa dampak revolusi kontainer Malcolm McLean (1956)?",
            options: [
              "Membuat kapal lebih lambat",
              "Memangkas biaya bongkar muat dan memicu perdagangan global",
              "Menghapus pelabuhan",
              "Menaikkan harga semua barang",
            ],
            answer: 1,
            explain: "Peti kemas seragam membuat pemindahan barang mulus dan murah antar moda.",
          },
          {
            q: "Kiriman 8 ton sejauh 1.500 km dengan tarif Rp1.200 per ton-km berongkos?",
            options: ["Rp1.440.000", "Rp14.400.000", "Rp144.000.000", "Rp1.200.000"],
            answer: 1,
            explain: "8 x 1.500 x 1.200 = Rp14.400.000.",
          },
        ],
      },
    ],
  },
  {
    id: "logistik-domestik-vs-internasional",
    levelId: "logistik",
    order: 2,
    title: "Logistik Domestik vs Internasional",
    summary:
      "Mengirim barang dalam negeri dan ke luar negeri sama-sama logistik, tapi kompleksitasnya berbeda jauh. Pelajari perbedaan cakupan, dokumen, dan risiko keduanya.",
    durationMin: 14,
    tags: ["logistik", "ekspor impor", "domestik", "dokumen"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Logistik domestik</strong> memindahkan barang di dalam satu negara. Aturan, mata uang, dan bahasanya seragam, jadi relatif sederhana. <strong>Logistik internasional</strong> melintasi batas negara, sehingga melibatkan bea cukai, banyak dokumen, beberapa mata uang, dan rantai pelaku yang jauh lebih panjang.",
      },
      {
        type: "paragraph",
        html: "Perbedaan ini bukan sekadar jarak. Kiriman dari Surabaya ke Makassar bisa selesai dalam hitungan hari dengan satu surat jalan. Kiriman dari Surabaya ke Rotterdam butuh <strong>invoice</strong>, <strong>packing list</strong>, <strong>bill of lading</strong>, dokumen pabean (PEB), dan kadang sertifikat asal barang serta asuransi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/MSC_HARMONY_III_%28container_ship%2C_2006%29_in_Port_Koper_%28SIKOP%2C_2024%29.jpg?width=400",
        alt: "Kapal kontainer bersandar di dermaga pelabuhan untuk bongkar muat",
        caption: "Pengiriman internasional melewati pelabuhan dengan bea cukai dan banyak dokumen, jauh lebih kompleks daripada kiriman domestik.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga sumber kerumitan internasional",
        html: "Pertama, <strong>bea cukai</strong> di negara asal dan tujuan. Kedua, <strong>dokumen</strong> yang banyak dan harus konsisten. Ketiga, <strong>risiko</strong> kurs, asuransi, dan waktu transit yang panjang. Salah satu saja meleset, barang bisa tertahan di pelabuhan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Incoterms menentukan siapa menanggung apa",
        html: "Aturan <strong>Incoterms</strong> (mis. FOB, CIF) menetapkan sampai titik mana penjual menanggung biaya dan risiko, lalu pembeli mengambil alih. Ini hampir tidak relevan di logistik domestik, tapi krusial di internasional.",
      },
      {
        type: "video",
        comp: "SupplyChainVideo",
        title: "Rantai pasok lintas batas",
        caption: "Semakin jauh dan semakin banyak batas negara, semakin banyak pihak dan dokumen yang terlibat.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan Jumlah Dokumen & Pihak Terlibat (ilustrasi)",
        unit: "jumlah relatif",
        source: "ilustrasi edukatif berdasar pola praktik logistik",
        note: "Kiriman internasional melibatkan jauh lebih banyak dokumen dan pelaku dibanding domestik.",
        data: [
          { label: "Dokumen domestik", value: 2, color: "#34d399" },
          { label: "Pihak domestik", value: 3, color: "#60a5fa" },
          { label: "Dokumen internasional", value: 7, color: "#fbbf24" },
          { label: "Pihak internasional", value: 9, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ekspor furnitur Jepara ke Eropa",
        html: "Sebuah UKM mebel di <strong>Jepara</strong> mengekspor 1 kontainer furnitur senilai <strong>Rp200.000.000</strong> ke Belanda. Selain ongkos kapal, ia menyiapkan invoice, packing list, bill of lading, dokumen PEB Bea Cukai, dan sertifikat fumigasi kayu. Karena memakai Incoterms FOB, tanggung jawabnya berhenti saat barang naik kapal di Tanjung Emas, lalu pembeli di Rotterdam menanggung freight dan bea masuk di negaranya. Satu dokumen yang salah bisa menahan kontainer berhari-hari dan menambah biaya demurrage.",
      },
      {
        type: "case",
        title: "Sejarah: Terusan Suez memangkas jarak Eropa-Asia (1869)",
        html: "Pada <strong>17 November 1869</strong>, <strong>Terusan Suez</strong> dibuka, menghubungkan Laut Tengah dengan Laut Merah. Sebelumnya, kapal dari Eropa ke Asia harus mengelilingi seluruh benua Afrika lewat Tanjung Harapan. Terusan ini memangkas jarak ribuan kilometer dan mempercepat perdagangan internasional secara dramatis. Ia menjadi contoh awal bagaimana infrastruktur logistik mengubah peta perdagangan dunia, termasuk arus rempah dan komoditas dari Nusantara.",
      },
      {
        type: "calcExercise",
        prompt:
          "Furnitur senilai Rp200.000.000 diimpor dengan tarif bea masuk 10 persen. Berapa rupiah bea masuk yang harus dibayar?",
        answer: 20000000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Bea masuk = 10 persen x Rp200.000.000 = <strong>Rp20.000.000</strong>. Tarif bea masuk dihitung dari nilai pabean barang.",
        hint: "Kalikan nilai barang dengan persentase tarif (10 persen = 0,10).",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap hal ke jenis logistik yang paling sesuai.",
        buckets: ["Domestik", "Internasional"],
        items: [
          { text: "Cukup surat jalan dan satu mata uang", bucket: "Domestik" },
          { text: "Butuh bill of lading dan dokumen pabean", bucket: "Internasional" },
          { text: "Tunduk pada aturan Incoterms", bucket: "Internasional" },
          { text: "Kiriman Jakarta ke Medan", bucket: "Domestik" },
          { text: "Risiko kurs dan demurrage di pelabuhan asing", bucket: "Internasional" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Logistik domestik seragam dalam aturan dan mata uang sehingga relatif sederhana.",
          "Logistik internasional melibatkan bea cukai, banyak dokumen, dan beberapa mata uang.",
          "Dokumen inti ekspor: invoice, packing list, bill of lading, dan dokumen pabean.",
          "Incoterms menetapkan pembagian biaya dan risiko antara penjual dan pembeli.",
          "Infrastruktur seperti Terusan Suez (1869) bisa mengubah peta perdagangan dunia.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa pembeda utama logistik internasional dibanding domestik?",
            options: [
              "Selalu lebih cepat",
              "Melibatkan bea cukai, banyak dokumen, dan beberapa mata uang",
              "Tidak butuh dokumen",
              "Hanya pakai pesawat",
            ],
            answer: 1,
            explain: "Lintas batas menambah bea cukai, dokumen, mata uang, dan risiko.",
          },
          {
            q: "Dokumen mana yang khas pengiriman laut internasional?",
            options: ["Surat jalan", "Bill of lading", "Kuitansi warung", "KTP"],
            answer: 1,
            explain: "Bill of lading adalah dokumen pengangkutan laut sekaligus bukti kepemilikan barang.",
          },
          {
            q: "Apa fungsi Incoterms?",
            options: [
              "Menentukan harga jual eceran",
              "Menetapkan sampai titik mana penjual menanggung biaya dan risiko",
              "Menghitung pajak penghasilan",
              "Mengatur jam kerja pelabuhan",
            ],
            answer: 1,
            explain: "Incoterms membagi tanggung jawab biaya dan risiko antara penjual dan pembeli.",
          },
          {
            q: "Apa dampak dibukanya Terusan Suez pada 1869?",
            options: [
              "Menambah jarak Eropa ke Asia",
              "Memangkas jarak Eropa ke Asia tanpa mengelilingi Afrika",
              "Menutup perdagangan rempah",
              "Menghapus pelabuhan",
            ],
            answer: 1,
            explain: "Suez menghubungkan Laut Tengah dan Laut Merah, memangkas jarak ribuan kilometer.",
          },
          {
            q: "Bea masuk 10 persen atas barang senilai Rp200.000.000 adalah?",
            options: ["Rp2.000.000", "Rp20.000.000", "Rp200.000", "Rp200.000.000"],
            answer: 1,
            explain: "10 persen x Rp200.000.000 = Rp20.000.000.",
          },
        ],
      },
    ],
  },
  {
    id: "freight-forwarding-3pl-4pl",
    levelId: "logistik",
    order: 3,
    title: "Freight Forwarding & 3PL/4PL",
    summary:
      "Banyak perusahaan tidak punya kapal, truk, atau gudang sendiri. Mereka menyerahkan logistik ke perantara ahli. Kenali peran freight forwarder, 3PL, dan 4PL.",
    durationMin: 14,
    tags: ["logistik", "3pl", "4pl", "outsourcing", "forwarder"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah toko online tidak perlu memiliki gudang raksasa atau armada truk untuk mengirim ribuan paket. Ia bisa <strong>menyewa</strong> jasa pihak ketiga. Inilah dunia <strong>outsourcing logistik</strong>, tempat perantara ahli mengurus pergerakan barang agar pemilik produk fokus berjualan.",
      },
      {
        type: "paragraph",
        html: "<strong>Freight forwarder</strong> mengatur pengangkutan, terutama lintas negara, dengan memesan ruang kapal atau pesawat dan mengurus dokumen. <strong>3PL</strong> (third party logistics) menyediakan layanan lebih luas: pergudangan, pengepakan, hingga pengiriman. <strong>4PL</strong> (fourth party logistics) bertindak sebagai pengelola yang mengoordinasikan banyak 3PL sekaligus, sering tanpa memiliki aset fisik.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trailer_Truck_5.jpg?width=400",
        alt: "Truk trailer pengangkut barang di jalan",
        caption: "Perusahaan yang tak memiliki armada sendiri menyewa forwarder dan 3PL untuk menggerakkan barang lewat truk, kapal, dan gudang.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tangga peran logistik",
        html: "<strong>Forwarder</strong>: mengatur pengangkutan dan dokumen. <strong>3PL</strong>: menjalankan gudang dan distribusi. <strong>4PL</strong>: otak yang mengoordinasikan banyak penyedia. Semakin tinggi angkanya, semakin strategis dan semakin sedikit aset fisik yang dimiliki.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Kapan outsourcing masuk akal",
        html: "Outsourcing logistik tepat saat volume berfluktuasi, ekspansi cepat, atau perusahaan ingin fokus pada produk. Membangun gudang dan armada sendiri butuh modal besar dan hanya efisien pada skala sangat tinggi.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Risiko ketergantungan",
        html: "Menyerahkan logistik ke pihak ketiga berarti kehilangan sebagian kendali atas kualitas layanan dan data pelanggan. Pilih mitra dengan kontrak dan indikator kinerja (SLA) yang jelas.",
      },
      {
        type: "video",
        comp: "SupplyChainVideo",
        title: "Perantara dalam rantai pasok",
        caption: "Forwarder, 3PL, dan 4PL menjadi penghubung antara produsen dan konsumen.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Komposisi Layanan yang Biasa Dialihkan ke 3PL (ilustrasi)",
        unit: "porsi relatif",
        source: "ilustrasi edukatif berdasar pola industri 3PL",
        note: "Pergudangan dan pengiriman adalah layanan yang paling sering diserahkan ke 3PL.",
        data: [
          { label: "Pergudangan", value: 35, color: "#60a5fa" },
          { label: "Transportasi & pengiriman", value: 40, color: "#34d399" },
          { label: "Pengepakan & fulfillment", value: 15, color: "#fbbf24" },
          { label: "Manajemen retur", value: 10, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: UKM fashion menyewa 3PL fulfillment",
        html: "Sebuah brand fashion lokal kebanjiran pesanan saat Harbolnas dan tidak sanggup mengepak sendiri. Ia menyewa <strong>3PL</strong> dengan tarif gudang <strong>Rp15.000 per pallet per hari</strong> untuk <strong>40 pallet</strong> selama <strong>30 hari</strong>. Total biaya sewa gudang = Rp15.000 x 40 x 30 = <strong>Rp18.000.000</strong>. Dengan ini, paket diproses 3PL dan dikirim lewat JNE serta J&T, sementara pemilik brand cukup mengurus desain dan pemasaran.",
      },
      {
        type: "case",
        title: "Sejarah: FedEx dan model hub-and-spoke (1973)",
        html: "Pada <strong>1973</strong>, <strong>FedEx</strong> yang didirikan Fred Smith memulai layanan pengiriman semalam di Amerika Serikat. Inovasinya adalah model <strong>hub-and-spoke</strong>: semua paket diterbangkan ke satu hub pusat di <strong>Memphis</strong> pada malam hari, disortir, lalu diterbangkan lagi ke kota tujuan menjelang pagi. Dengan memusatkan penyortiran, FedEx bisa menjamin kiriman tiba keesokan harinya. Pola ini menjadi cetak biru banyak jaringan kurir modern, termasuk hub-hub sortir milik J&T dan JNE.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah brand menyewa gudang 3PL: tarif Rp15.000 per pallet per hari, untuk 40 pallet selama 30 hari. Berapa total biaya sewa gudangnya?",
        answer: 18000000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Rp15.000 x 40 pallet x 30 hari = <strong>Rp18.000.000</strong>. Biaya gudang 3PL umumnya dihitung per unit ruang per satuan waktu.",
        hint: "Kalikan tarif harian x jumlah pallet x jumlah hari.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap peran logistik dengan deskripsinya.",
        pairs: [
          { left: "Freight forwarder", right: "Mengatur pengangkutan dan dokumen lintas negara" },
          { left: "3PL", right: "Menjalankan gudang dan pengiriman" },
          { left: "4PL", right: "Mengoordinasikan banyak penyedia tanpa aset fisik" },
          { left: "SLA", right: "Indikator kinerja layanan yang disepakati" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Outsourcing logistik memungkinkan perusahaan fokus pada produk tanpa memiliki aset besar.",
          "Freight forwarder mengatur pengangkutan dan dokumen, terutama lintas negara.",
          "3PL menyediakan pergudangan, pengepakan, dan distribusi.",
          "4PL mengoordinasikan banyak 3PL sebagai pengelola strategis tanpa aset fisik.",
          "Model hub-and-spoke FedEx (1973) menjadi dasar banyak jaringan kurir modern.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa peran utama freight forwarder?",
            options: [
              "Memproduksi barang",
              "Mengatur pengangkutan dan dokumen pengiriman",
              "Menjual produk ke konsumen",
              "Mencetak uang",
            ],
            answer: 1,
            explain: "Forwarder memesan ruang angkut dan mengurus dokumen, terutama untuk lintas negara.",
          },
          {
            q: "Layanan apa yang biasa disediakan 3PL?",
            options: [
              "Hanya desain produk",
              "Pergudangan, pengepakan, dan pengiriman",
              "Hanya iklan",
              "Hanya akuntansi",
            ],
            answer: 1,
            explain: "3PL menjalankan operasi logistik fisik mulai gudang hingga distribusi.",
          },
          {
            q: "Apa yang membedakan 4PL dari 3PL?",
            options: [
              "4PL memiliki paling banyak truk",
              "4PL mengoordinasikan banyak penyedia, sering tanpa aset fisik",
              "4PL hanya melayani satu kota",
              "4PL tidak memakai komputer",
            ],
            answer: 1,
            explain: "4PL adalah pengelola strategis yang mengatur banyak 3PL.",
          },
          {
            q: "Apa inti model hub-and-spoke FedEx (1973)?",
            options: [
              "Mengirim langsung antar kota tanpa pusat",
              "Memusatkan penyortiran di satu hub lalu menyebar ke tujuan",
              "Melarang pengiriman malam hari",
              "Hanya memakai kapal laut",
            ],
            answer: 1,
            explain: "Semua paket masuk ke hub Memphis untuk disortir, lalu dikirim ke tujuan keesokan pagi.",
          },
          {
            q: "Sewa gudang Rp15.000/pallet/hari untuk 40 pallet selama 30 hari berbiaya?",
            options: ["Rp1.800.000", "Rp18.000.000", "Rp180.000.000", "Rp600.000"],
            answer: 1,
            explain: "15.000 x 40 x 30 = Rp18.000.000.",
          },
        ],
      },
    ],
  },
  {
    id: "pengangkutan-laut-fcl-vs-lcl",
    levelId: "logistik",
    order: 4,
    title: "Pengangkutan Laut: FCL vs LCL & Peti Kemas",
    summary:
      "Mengirim lewat laut berarti memilih: sewa satu kontainer penuh atau menumpang berbagi kontainer dengan pengirim lain. Pelajari FCL, LCL, dan jenis peti kemas.",
    durationMin: 15,
    tags: ["logistik", "laut", "kontainer", "fcl", "lcl"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Peti kemas</strong> (kontainer) adalah kotak baja berukuran standar. Yang paling umum adalah ukuran <strong>20 kaki</strong> dan <strong>40 kaki</strong>. Standar ini membuat barang bisa berpindah mulus antara kapal, truk, dan kereta tanpa dibongkar isinya.",
      },
      {
        type: "paragraph",
        html: "Saat mengirim laut, ada dua pilihan. <strong>FCL</strong> (Full Container Load): Anda menyewa satu kontainer penuh untuk barang Anda sendiri. <strong>LCL</strong> (Less than Container Load): barang Anda <strong>dikonsolidasi</strong>, digabung dengan kiriman pengirim lain dalam satu kontainer, dan ongkosnya dihitung per meter kubik (cbm).",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/MSC_HARMONY_III_%28container_ship%2C_2006%29_in_Port_Koper_%28SIKOP%2C_2024%29.jpg?width=400",
        alt: "Tumpukan peti kemas di atas kapal kontainer di pelabuhan",
        caption: "Peti kemas standar 20 dan 40 kaki memungkinkan pilihan FCL (kontainer penuh) atau LCL (berbagi ruang) saat mengirim lewat laut.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan praktis FCL vs LCL",
        html: "Volume <strong>banyak</strong>: pilih <strong>FCL</strong>, ongkos per unit lebih murah dan risiko campur barang hilang. Volume <strong>sedikit</strong>: pilih <strong>LCL</strong>, bayar hanya seukuran ruang yang dipakai. Ada titik <strong>break-even</strong> tempat keduanya berbiaya sama.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Jenis peti kemas",
        html: "Selain kontainer <strong>dry</strong> biasa, ada <strong>reefer</strong> (berpendingin untuk ikan, buah, vaksin), <strong>open top</strong> (muatan tinggi), dan <strong>flat rack</strong> (alat berat). Pemilihan jenis menentukan tarif dan penanganan.",
      },
      {
        type: "video",
        comp: "LogistikKontainerVideo",
        title: "Anatomi peti kemas",
        caption: "Standar 20 dan 40 kaki yang menyatukan kapal, truk, dan kereta.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Biaya FCL vs LCL terhadap Volume Kiriman (ilustrasi)",
        unit: "Rp juta",
        source: "ilustrasi edukatif, tarif contoh untuk konsep break-even",
        note: "LCL naik per cbm, FCL relatif tetap. Di sekitar 15 cbm keduanya bertemu.",
        data: [
          { label: "5 cbm", value: 3, color: "#34d399" },
          { label: "10 cbm", value: 6, color: "#34d399" },
          { label: "15 cbm", value: 9, color: "#fbbf24" },
          { label: "20 cbm", value: 12, color: "#f87171" },
          { label: "FCL (tetap)", value: 9, color: "#60a5fa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Importir memilih FCL atau LCL",
        html: "Seorang importir mainan lewat <strong>Pelabuhan Tanjung Priok</strong> (dikelola <strong>Pelindo</strong>) menghitung dua opsi. LCL bertarif <strong>Rp600.000 per cbm</strong>. FCL satu kontainer 20 kaki bertarif tetap <strong>Rp9.000.000</strong>. Titik break-even = Rp9.000.000 dibagi Rp600.000 = <strong>15 cbm</strong>. Untuk 12 cbm, LCL = Rp7.200.000 lebih murah. Untuk 20 cbm, LCL = Rp12.000.000 lebih mahal daripada FCL, jadi sebaiknya sewa kontainer penuh.",
      },
      {
        type: "case",
        title: "Sejarah: Terusan Panama menyatukan dua samudra (1914)",
        html: "Pada <strong>15 Agustus 1914</strong>, <strong>Terusan Panama</strong> resmi dibuka, menghubungkan Samudra Atlantik dan Pasifik melalui jalur selebar Amerika Tengah. Kapal tak perlu lagi mengelilingi ujung selatan Amerika Selatan yang berbahaya. Ukuran pintu air terusan ini bahkan melahirkan standar kapal <strong>Panamax</strong>, yang ikut memengaruhi ukuran kapal dan jumlah kontainer yang bisa diangkut sekali jalan selama puluhan tahun.",
      },
      {
        type: "calcExercise",
        prompt:
          "FCL kontainer 20 kaki bertarif tetap Rp9.000.000. LCL bertarif Rp600.000 per cbm. Pada berapa cbm biaya keduanya sama (break-even)?",
        answer: 15,
        tolerance: 0,
        suffix: " cbm",
        solution:
          "Break-even = tarif FCL dibagi tarif LCL per cbm = Rp9.000.000 / Rp600.000 = <strong>15 cbm</strong>. Di bawah itu LCL lebih murah, di atasnya FCL lebih hemat.",
        hint: "Bagi tarif tetap FCL dengan tarif LCL per cbm.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap situasi ke pilihan pengangkutan yang paling tepat.",
        buckets: ["FCL", "LCL"],
        items: [
          { text: "Volume besar memenuhi satu kontainer", bucket: "FCL" },
          { text: "Hanya 8 cbm barang kecil", bucket: "LCL" },
          { text: "Ingin barang tidak dicampur pengirim lain", bucket: "FCL" },
          { text: "Bayar hanya seukuran ruang yang dipakai", bucket: "LCL" },
          { text: "Kiriman rutin volume tinggi tiap bulan", bucket: "FCL" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Peti kemas standar 20 dan 40 kaki menyatukan kapal, truk, dan kereta.",
          "FCL menyewa satu kontainer penuh; LCL berbagi kontainer dan dihitung per cbm.",
          "Ada titik break-even tempat biaya FCL dan LCL sama, dihitung dari tarif tetap dibagi tarif per cbm.",
          "Jenis kontainer (dry, reefer, open top, flat rack) menyesuaikan sifat barang.",
          "Terusan Panama (1914) menghubungkan dua samudra dan melahirkan standar kapal Panamax.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa perbedaan FCL dan LCL?",
            options: [
              "FCL pakai pesawat, LCL pakai truk",
              "FCL menyewa kontainer penuh, LCL berbagi kontainer per cbm",
              "Keduanya sama persis",
              "LCL hanya untuk domestik",
            ],
            answer: 1,
            explain: "FCL satu kontainer penuh; LCL dikonsolidasi dengan pengirim lain dan dihitung per cbm.",
          },
          {
            q: "Mengapa peti kemas berukuran standar penting?",
            options: [
              "Agar terlihat rapi saja",
              "Agar barang berpindah mulus antar kapal, truk, dan kereta",
              "Agar lebih berat",
              "Agar mahal",
            ],
            answer: 1,
            explain: "Keseragaman ukuran memungkinkan perpindahan antar moda tanpa membongkar isi.",
          },
          {
            q: "Kontainer reefer dipakai untuk?",
            options: [
              "Alat berat",
              "Barang berpendingin seperti ikan, buah, vaksin",
              "Muatan terlalu tinggi",
              "Cairan curah",
            ],
            answer: 1,
            explain: "Reefer adalah kontainer berpendingin untuk barang yang butuh suhu terjaga.",
          },
          {
            q: "FCL Rp9.000.000 dan LCL Rp600.000 per cbm bertemu pada volume?",
            options: ["5 cbm", "15 cbm", "30 cbm", "60 cbm"],
            answer: 1,
            explain: "9.000.000 / 600.000 = 15 cbm sebagai titik break-even.",
          },
          {
            q: "Apa arti penting Terusan Panama (1914)?",
            options: [
              "Menutup jalur Pasifik",
              "Menghubungkan Atlantik dan Pasifik serta melahirkan standar Panamax",
              "Hanya untuk kapal kecil nelayan",
              "Menggantikan semua pelabuhan",
            ],
            answer: 1,
            explain: "Panama menyatukan dua samudra dan ukuran pintu airnya membentuk standar kapal Panamax.",
          },
        ],
      },
    ],
  },
  {
    id: "kargo-udara-trucking-kereta",
    levelId: "logistik",
    order: 5,
    title: "Kargo Udara, Trucking & Kereta",
    summary:
      "Laut bukan satu-satunya moda. Pesawat untuk yang mendesak, truk untuk fleksibilitas, kereta untuk jarak darat yang panjang. Pelajari kapan tiap moda dipakai dan konsep intermodal.",
    durationMin: 15,
    tags: ["logistik", "moda", "kargo udara", "trucking", "kereta", "intermodal"],
    blocks: [
      {
        type: "paragraph",
        html: "Setiap moda punya karakter. <strong>Pesawat</strong> tercepat tapi termahal, cocok untuk barang mendesak, bernilai tinggi, atau cepat rusak. <strong>Truk</strong> paling fleksibel karena bisa sampai ke pintu, ideal untuk last mile dan jarak menengah. <strong>Kereta</strong> efisien untuk volume besar di jarak darat yang panjang.",
      },
      {
        type: "paragraph",
        html: "Sering kali satu kiriman memakai beberapa moda berurutan. Inilah <strong>intermodal</strong>: misalnya kontainer naik kapal, lalu kereta, lalu truk ke gudang. Karena memakai peti kemas standar, perpindahan antar moda berjalan tanpa membongkar isi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Aircraft_cargo_loader_at_ZRH.jpg?width=400",
        alt: "Kargo dimuat ke dalam pesawat di bandara",
        caption: "Kargo udara tercepat namun termahal, dipakai untuk barang mendesak, bernilai tinggi, atau cepat rusak.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "LogistikKontainerVideo",
        title: "Perpindahan antar moda",
        caption: "Peti kemas standar membuat barang berpindah mulus dari kapal ke kereta lalu truk dalam rangkaian intermodal.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Memilih moda: tiga pertanyaan",
        html: "Seberapa <strong>cepat</strong> harus tiba? Seberapa <strong>berharga</strong> dan <strong>mudah rusak</strong> barangnya? Berapa <strong>volume</strong> dan jaraknya? Jawaban ketiganya menentukan apakah pesawat, truk, kereta, atau kombinasi yang paling masuk akal.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Bandingkan biaya dan waktu antar moda untuk satu kiriman. Perhatikan bahwa moda termurah belum tentu terbaik bila barang Anda butuh cepat sampai.",
      },
      { type: "widget", widget: "KalkulatorPilihModa" },
      {
        type: "case",
        title: "Studi Kasus: Mengirim vaksin vs mengirim semen",
        html: "Sebuah distributor harus mengirim <strong>200 kg vaksin</strong> mendesak dari Jakarta ke Jayapura. Dengan tarif kargo udara <strong>Rp45.000 per kg</strong>, ongkosnya = 200 x Rp45.000 = <strong>Rp9.000.000</strong>, tapi tiba dalam hitungan jam. Sebaliknya, mengirim semen 20 ton yang tidak mendesak akan mubazir bila pakai pesawat; lebih tepat lewat kapal dan truk. Pilihan moda mengikuti urgensi dan nilai barang, bukan sekadar harga termurah.",
      },
      {
        type: "case",
        title: "Sejarah: Jembatan Udara Berlin (1948 sampai 1949)",
        html: "Saat <strong>Berlin Barat</strong> diblokade pada <strong>Juni 1948</strong>, Sekutu memasok kota lewat udara dalam operasi raksasa yang dikenal sebagai <strong>Berlin Airlift</strong>. Selama hampir setahun hingga <strong>Mei 1949</strong>, ribuan penerbangan mengangkut batu bara, makanan, dan obat, kadang pesawat mendarat tiap beberapa menit. Operasi ini membuktikan kekuatan kargo udara untuk memindahkan barang dalam jumlah besar dengan cepat ketika moda lain tertutup, sekaligus mengasah disiplin penjadwalan penerbangan yang ketat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kiriman 200 kg vaksin dikirim lewat kargo udara dengan tarif Rp45.000 per kg. Berapa total ongkos angkutnya?",
        answer: 9000000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "200 kg x Rp45.000 = <strong>Rp9.000.000</strong>. Kargo udara umumnya ditarifkan per kilogram (atau berat volumetrik bila barang ringan tapi besar).",
        hint: "Kalikan berat (kg) dengan tarif per kg.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap moda dengan keunggulan khasnya.",
        pairs: [
          { left: "Pesawat", right: "Tercepat untuk barang mendesak dan bernilai tinggi" },
          { left: "Truk", right: "Paling fleksibel, bisa sampai ke pintu" },
          { left: "Kereta", right: "Efisien untuk volume besar jarak darat panjang" },
          { left: "Intermodal", right: "Menggabungkan beberapa moda dalam satu kiriman" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Pesawat tercepat tapi termahal, cocok untuk barang mendesak atau cepat rusak.",
          "Truk paling fleksibel karena bisa sampai ke pintu tujuan.",
          "Kereta efisien untuk volume besar di jarak darat yang panjang.",
          "Intermodal menggabungkan beberapa moda berkat peti kemas standar.",
          "Pilih moda dari urgensi, nilai, volume, dan jarak, bukan hanya harga termurah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapan kargo udara paling tepat dipakai?",
            options: [
              "Untuk semen dalam jumlah besar",
              "Untuk barang mendesak, bernilai tinggi, atau cepat rusak",
              "Untuk semua barang agar murah",
              "Hanya untuk surat",
            ],
            answer: 1,
            explain: "Kecepatan pesawat sepadan dengan biayanya untuk barang urgent atau bernilai tinggi.",
          },
          {
            q: "Apa keunggulan utama truk?",
            options: [
              "Termurah untuk lintas samudra",
              "Paling fleksibel dan bisa sampai ke pintu tujuan",
              "Tercepat antar benua",
              "Tidak butuh sopir",
            ],
            answer: 1,
            explain: "Truk menjangkau alamat langsung sehingga ideal untuk last mile dan jarak menengah.",
          },
          {
            q: "Apa itu pengiriman intermodal?",
            options: [
              "Memakai satu moda saja",
              "Menggabungkan beberapa moda dalam satu kiriman",
              "Mengirim tanpa kontainer",
              "Mengirim hanya lewat udara",
            ],
            answer: 1,
            explain: "Intermodal memakai kapal, kereta, dan truk berurutan lewat peti kemas standar.",
          },
          {
            q: "Mengapa kereta efisien untuk muatan tertentu?",
            options: [
              "Karena selalu lebih cepat dari pesawat",
              "Karena hemat untuk volume besar di jarak darat panjang",
              "Karena bisa terbang",
              "Karena tidak butuh rel",
            ],
            answer: 1,
            explain: "Kereta memindahkan banyak muatan sekaligus dengan biaya per ton-km rendah di darat.",
          },
          {
            q: "Ongkos 200 kg vaksin dengan tarif udara Rp45.000 per kg adalah?",
            options: ["Rp900.000", "Rp9.000.000", "Rp90.000.000", "Rp4.500.000"],
            answer: 1,
            explain: "200 x 45.000 = Rp9.000.000.",
          },
        ],
      },
    ],
  },
  {
    id: "last-mile-delivery",
    levelId: "logistik",
    order: 6,
    title: "Last Mile Delivery",
    summary:
      "Segmen terakhir sampai ke tangan pembeli sering jadi yang termahal dan paling rumit. Pelajari ekonomi last mile di era e-commerce, kurir instan, dan ojek online.",
    durationMin: 14,
    tags: ["logistik", "last mile", "e-commerce", "kurir", "ojek online"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Last mile</strong> adalah langkah terakhir mengantar barang dari gudang atau hub terdekat sampai ke alamat pembeli. Meski jaraknya paling pendek, segmen ini sering menyerap porsi <strong>biaya terbesar</strong> karena pengiriman dipecah ke banyak alamat berbeda, masing-masing volume kecil.",
      },
      {
        type: "paragraph",
        html: "Ledakan <strong>e-commerce</strong> membuat last mile jadi medan persaingan utama. Pembeli ingin paket cepat, murah, dan bisa dilacak. Di Indonesia, ini melahirkan ekosistem kurir reguler (<strong>JNE, J&T, SiCepat</strong>) dan pengiriman instan lewat <strong>ojek online</strong> seperti GoSend dan GrabExpress.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Courier_Delivering_a_Parcel.jpg?width=400",
        alt: "Kurir mengantar paket ke alamat penerima",
        caption: "Last mile adalah segmen terakhir mengantar paket ke pintu pembeli, sering menjadi komponen biaya terbesar dalam pengiriman.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "key",
        title: "Mengapa last mile mahal",
        html: "Volume per titik kecil, alamat tersebar, macet, alamat sulit ditemukan, dan banyak percobaan antar ulang bila penerima tidak di tempat. Semua ini menaikkan biaya per paket dibanding angkutan curah antar kota.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Strategi menekan biaya last mile",
        html: "Titik ambil (drop point), loker paket, pengelompokan rute, dan hub mikro di tengah kota memperpendek jarak antar dan mengurangi antar ulang yang gagal.",
      },
      {
        type: "video",
        comp: "SupplyChainVideo",
        title: "Ujung rantai sampai ke pembeli",
        caption: "Last mile menghubungkan gudang dengan pintu rumah konsumen.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Perkiraan Porsi Biaya Last Mile dalam Total Ongkos Kirim (ilustrasi)",
        unit: "persen",
        source: "ilustrasi edukatif sesuai pola industri pengiriman",
        note: "Segmen terakhir bisa menyerap separuh lebih dari total biaya logistik per paket.",
        data: [
          { label: "Last mile", value: 53, color: "#f87171" },
          { label: "Angkutan antar kota", value: 29, color: "#60a5fa" },
          { label: "Sortir & gudang", value: 18, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ongkos kirim Shopee dan porsi last mile",
        html: "Seorang pembeli di <strong>Tokopedia</strong> membayar total ongkos kirim <strong>Rp40.000</strong> untuk paket dari Bandung ke rumahnya di Bekasi lewat <strong>J&T</strong>. Dari jumlah itu, sekitar <strong>Rp24.000</strong> habis di segmen last mile, yaitu mengantar dari hub Bekasi ke rumah. Porsi last mile = Rp24.000 dibagi Rp40.000 = <strong>60 persen</strong>. Inilah alasan platform berlomba membangun hub kota dan jaringan kurir agar segmen terakhir lebih efisien.",
      },
      {
        type: "case",
        title: "Sejarah: Bangkitnya logistik e-commerce Indonesia (2009 sampai 2015)",
        html: "<strong>Tokopedia</strong> berdiri pada <strong>2009</strong>, lalu <strong>Gojek</strong> didirikan pada <strong>2010</strong> dan meluncurkan aplikasinya pada 2015, diikuti <strong>Shopee</strong> yang masuk Indonesia pada <strong>2015</strong>. Gelombang ini mengubah pola belanja: jutaan paket kecil harus diantar ke rumah setiap hari. Ojek online yang awalnya mengantar penumpang berkembang menjadi tulang punggung pengiriman instan, dan kurir seperti JNE serta J&T memperluas jaringan hub demi menjawab lonjakan permintaan last mile.",
      },
      {
        type: "calcExercise",
        prompt:
          "Total ongkos kirim sebuah paket Rp40.000, dan Rp24.000 di antaranya habis di segmen last mile. Berapa persen porsi last mile?",
        answer: 60,
        tolerance: 0,
        suffix: "%",
        solution:
          "Porsi = Rp24.000 / Rp40.000 x 100 persen = <strong>60 persen</strong>. Segmen terakhir kerap menjadi komponen biaya terbesar dalam pengiriman.",
        hint: "Bagi biaya last mile dengan total ongkos, lalu kalikan 100.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap hal sebagai penyebab biaya last mile naik atau strategi menekannya.",
        buckets: ["Penyebab biaya naik", "Strategi penekan"],
        items: [
          { text: "Alamat tersebar dengan volume kecil per titik", bucket: "Penyebab biaya naik" },
          { text: "Penerima tidak di tempat sehingga antar ulang", bucket: "Penyebab biaya naik" },
          { text: "Loker paket dan drop point", bucket: "Strategi penekan" },
          { text: "Pengelompokan rute pengiriman", bucket: "Strategi penekan" },
          { text: "Kemacetan kota", bucket: "Penyebab biaya naik" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Last mile adalah langkah terakhir ke alamat pembeli dan sering yang termahal.",
          "Volume kecil per titik, alamat tersebar, dan antar ulang menaikkan biaya last mile.",
          "E-commerce membuat last mile jadi medan persaingan utama di Indonesia.",
          "Drop point, loker paket, dan pengelompokan rute menekan biaya segmen terakhir.",
          "Tokopedia (2009), Gojek (2010), dan Shopee (2015) memicu ledakan logistik e-commerce.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dimaksud last mile delivery?",
            options: [
              "Pengangkutan antar pelabuhan besar",
              "Langkah terakhir mengantar ke alamat pembeli",
              "Produksi barang di pabrik",
              "Penyimpanan di gudang pusat",
            ],
            answer: 1,
            explain: "Last mile adalah segmen pengantaran terakhir sampai ke pintu konsumen.",
          },
          {
            q: "Mengapa last mile cenderung mahal?",
            options: [
              "Karena jaraknya paling jauh",
              "Karena volume kecil per titik, alamat tersebar, dan antar ulang",
              "Karena memakai kapal laut",
              "Karena bebas biaya bahan bakar",
            ],
            answer: 1,
            explain: "Banyak titik tujuan dengan volume kecil membuat biaya per paket tinggi.",
          },
          {
            q: "Mana strategi menekan biaya last mile?",
            options: [
              "Menambah antar ulang",
              "Memakai drop point, loker paket, dan pengelompokan rute",
              "Mengirim satu paket per kendaraan",
              "Menghindari hub kota",
            ],
            answer: 1,
            explain: "Drop point dan rute terkelompok memperpendek jarak dan mengurangi kegagalan antar.",
          },
          {
            q: "Apa peran ojek online dalam logistik Indonesia?",
            options: [
              "Hanya mengantar penumpang",
              "Menjadi tulang punggung pengiriman instan paket",
              "Menggantikan kapal laut",
              "Hanya untuk surat resmi",
            ],
            answer: 1,
            explain: "Layanan seperti GoSend dan GrabExpress menopang pengiriman instan e-commerce.",
          },
          {
            q: "Jika last mile Rp24.000 dari total ongkos Rp40.000, porsinya?",
            options: ["40 persen", "60 persen", "24 persen", "80 persen"],
            answer: 1,
            explain: "24.000 / 40.000 = 0,6 atau 60 persen.",
          },
        ],
      },
    ],
  },
  {
    id: "reverse-logistics",
    levelId: "logistik",
    order: 7,
    title: "Reverse Logistics",
    summary:
      "Barang tidak selalu bergerak maju. Retur, daur ulang, dan perbaikan mengalir mundur dalam rantai pasok. Pelajari reverse logistics dan tantangan biayanya.",
    durationMin: 14,
    tags: ["logistik", "reverse logistics", "retur", "daur ulang"],
    blocks: [
      {
        type: "paragraph",
        html: "Selama ini kita membahas barang yang mengalir maju, dari pabrik ke konsumen. <strong>Reverse logistics</strong> adalah arus sebaliknya: barang bergerak <strong>mundur</strong> dari konsumen kembali ke penjual atau produsen. Contohnya retur barang salah ukuran, produk rusak yang diperbaiki, kemasan yang dikembalikan, dan limbah yang didaur ulang.",
      },
      {
        type: "paragraph",
        html: "Di era e-commerce, arus retur membengkak karena pembeli tidak bisa mencoba barang sebelum membeli. Mengelola retur itu mahal dan rumit: barang harus dijemput, diperiksa, disortir (dijual lagi, diperbaiki, atau dibuang), lalu dimasukkan kembali ke stok.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/A_warehouse_full_of_USAID_goods_-_20110826-FS-LSC-0046_-_Flickr_-_USDAgov.jpg?width=400",
        alt: "Gudang penuh barang yang ditata di atas pallet",
        caption: "Barang retur mengalir mundur ke gudang untuk diperiksa dan disortir: dijual lagi, diperbaiki, atau didaur ulang.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "SupplyChainVideo",
        title: "Arus mundur dalam rantai pasok",
        caption: "Reverse logistics menggerakkan barang dari konsumen kembali ke penjual lewat jalur retur, perbaikan, dan daur ulang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga jalur reverse logistics",
        html: "<strong>Retur</strong>: barang dikembalikan konsumen. <strong>Perbaikan</strong>: produk rusak diservis lalu dikirim balik. <strong>Daur ulang</strong>: material atau kemasan diolah kembali. Ketiganya butuh alur, biaya, dan keputusan tersendiri.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Retur menggerus margin",
        html: "Setiap retur menanggung ongkos jemput, pemeriksaan, pengemasan ulang, dan kadang penurunan nilai barang. Tingkat retur yang tinggi bisa menghapus keuntungan, jadi mencegah retur (deskripsi akurat, foto jelas, panduan ukuran) sama pentingnya dengan menanganinya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Hitung jejak karbon perjalanan logistik. Perhatikan bahwa arus retur yang bolak-balik menambah jarak tempuh, biaya, sekaligus emisi.",
      },
      { type: "widget", widget: "KalkulatorJejakKarbonLogistik" },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan Tingkat Retur menurut Kategori Produk (ilustrasi)",
        unit: "persen retur",
        source: "ilustrasi edukatif sesuai pola umum e-commerce",
        note: "Fashion punya tingkat retur tertinggi karena soal ukuran dan ekspektasi tampilan.",
        data: [
          { label: "Fashion", value: 20, color: "#f87171" },
          { label: "Elektronik", value: 9, color: "#fbbf24" },
          { label: "Buku", value: 4, color: "#60a5fa" },
          { label: "Kebutuhan harian", value: 2, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Biaya menangani retur fashion",
        html: "Sebuah toko fashion di <strong>Shopee</strong> mengirim <strong>10.000 paket</strong> dalam sebulan dengan tingkat retur <strong>8 persen</strong>, sehingga ada 10.000 x 8 persen = <strong>800 paket retur</strong>. Bila biaya menangani tiap retur (jemput lewat <strong>SiCepat</strong>, periksa, kemas ulang) sekitar <strong>Rp25.000</strong>, total biaya reverse logistics = 800 x Rp25.000 = <strong>Rp20.000.000</strong> sebulan. Angka ini menjelaskan mengapa toko berinvestasi pada panduan ukuran dan foto akurat untuk menekan retur sejak awal.",
      },
      {
        type: "case",
        title: "Sejarah: Jaminan uang kembali Montgomery Ward (sekitar 1872)",
        html: "Pada <strong>sekitar 1872</strong>, peritel katalog Amerika <strong>Montgomery Ward</strong> mempopulerkan janji <strong>jaminan uang kembali</strong>: pelanggan yang tidak puas boleh mengembalikan barang dan menerima uangnya. Karena pembeli memesan lewat katalog tanpa melihat barang langsung, kebijakan ini membangun kepercayaan dan mendorong penjualan jarak jauh. Namun ia juga melahirkan kebutuhan menata arus barang yang kembali, cikal bakal reverse logistics yang kini jadi bagian penting e-commerce.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 10.000 paket dengan tingkat retur 8 persen, dan biaya tangani Rp25.000 per retur, berapa total biaya menangani retur sebulan?",
        answer: 20000000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Jumlah retur = 8 persen x 10.000 = 800 paket. Total biaya = 800 x Rp25.000 = <strong>Rp20.000.000</strong>.",
        hint: "Hitung dulu jumlah retur (8 persen x 10.000), lalu kalikan biaya per retur.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah reverse logistics dengan contohnya.",
        pairs: [
          { left: "Retur", right: "Baju salah ukuran dikembalikan ke penjual" },
          { left: "Perbaikan", right: "Ponsel rusak diservis lalu dikirim balik" },
          { left: "Daur ulang", right: "Kardus dan plastik diolah jadi material baru" },
          { left: "Pencegahan retur", right: "Panduan ukuran dan foto produk yang akurat" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Reverse logistics adalah arus barang yang bergerak mundur dari konsumen ke penjual.",
          "Tiga jalur utamanya adalah retur, perbaikan, dan daur ulang.",
          "E-commerce meningkatkan volume retur karena barang tidak bisa dicoba dulu.",
          "Retur menggerus margin lewat ongkos jemput, periksa, dan kemas ulang.",
          "Mencegah retur dengan informasi akurat sama penting dengan menanganinya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu reverse logistics?",
            options: [
              "Arus barang maju dari pabrik ke konsumen",
              "Arus barang mundur dari konsumen kembali ke penjual atau produsen",
              "Penyimpanan barang di gudang",
              "Produksi barang baru",
            ],
            answer: 1,
            explain: "Reverse logistics menangani barang yang bergerak mundur, seperti retur dan daur ulang.",
          },
          {
            q: "Mana yang termasuk jalur reverse logistics?",
            options: [
              "Hanya pengiriman paket baru",
              "Retur, perbaikan, dan daur ulang",
              "Hanya pembuatan produk",
              "Hanya pemasaran",
            ],
            answer: 1,
            explain: "Tiga jalur utamanya adalah retur, perbaikan, dan daur ulang.",
          },
          {
            q: "Mengapa e-commerce meningkatkan volume retur?",
            options: [
              "Karena barang lebih murah",
              "Karena pembeli tidak bisa mencoba barang sebelum membeli",
              "Karena gratis ongkir selalu",
              "Karena tidak ada gudang",
            ],
            answer: 1,
            explain: "Tanpa mencoba langsung, ukuran atau ekspektasi sering tidak sesuai sehingga barang diretur.",
          },
          {
            q: "Apa kontribusi penting Montgomery Ward (sekitar 1872)?",
            options: [
              "Menciptakan pesawat kargo",
              "Mempopulerkan jaminan uang kembali yang mendorong arus retur",
              "Membangun Terusan Suez",
              "Menemukan peti kemas",
            ],
            answer: 1,
            explain: "Jaminan uang kembali membangun kepercayaan belanja katalog dan melahirkan kebutuhan reverse logistics.",
          },
          {
            q: "Dari 10.000 paket dengan retur 8 persen dan biaya Rp25.000 per retur, totalnya?",
            options: ["Rp2.000.000", "Rp20.000.000", "Rp200.000.000", "Rp800.000"],
            answer: 1,
            explain: "800 retur x Rp25.000 = Rp20.000.000.",
          },
        ],
      },
    ],
  },
];
