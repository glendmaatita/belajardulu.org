import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "alat-ukur-ketelitian",
    levelId: "ketelitian-pengukuran",
    order: 1,
    title: "Alat Ukur dan Ketelitian",
    summary:
      "Kenapa tukang kayu pakai meteran, tetapi pembuat jam tangan pakai mikrometer? Tiap alat punya batas ketelitian, dan memilih yang tepat itu seni tersendiri.",
    durationMin: 12,
    tags: ["fisika", "alat ukur", "ketelitian", "skala"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu tidak akan mengukur tebal rambut dengan penggaris biasa, dan tidak akan mengukur lapangan bola dengan mikrometer. Setiap alat ukur punya <strong>ketelitian</strong> sendiri, yaitu seberapa halus skala terkecilnya. Sebelum menghafal angka-angkanya, mari pahami dulu apa arti ketelitian sebuah alat.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Setiap Alat Punya Batas",
        caption: "Skala terkecil sebuah alat menentukan seberapa teliti ia bisa membaca.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lihat penggaris di tasmu. Garis terkecilnya berjarak 1 mm, jadi paling teliti kamu bisa membaca sampai milimeter. Sekarang bayangkan jangka sorong yang bisa membaca 0,1 mm, dan mikrometer sekrup 0,01 mm. Coba rasakan: makin rapat skala terkecilnya, makin teliti alatnya, dan makin kecil pula bagian yang harus kita taksir dengan mata.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Skala terkecil tiap alat",
        html: "Penggaris biasa teliti sampai sekitar 1 mm, jangka sorong sampai 0,1 mm, dan mikrometer sekrup sampai 0,01 mm. Untuk waktu, stopwatch digital umumnya membaca 0,01 s. Pilih alat yang ketelitiannya sesuai dengan benda yang diukur.",
      },
      {
        type: "widget",
        widget: "AngkaPenting",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Skala Terkecil Beberapa Alat Ukur Panjang",
        unit: "mm",
        source: "spesifikasi umum alat ukur",
        note: "Makin kecil nilainya, makin teliti alatnya. Mikrometer 100 kali lebih teliti daripada penggaris biasa.",
        data: [
          { label: "Penggaris", value: 1, color: "#38bdf8" },
          { label: "Jangka sorong", value: 0.1, color: "#2dd4bf" },
          { label: "Mikrometer", value: 0.01, color: "#34d399" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap alat ukur dengan skala terkecilnya yang umum.",
        pairs: [
          { left: "Penggaris", right: "1 mm" },
          { left: "Jangka sorong", right: "0,1 mm" },
          { left: "Mikrometer sekrup", right: "0,01 mm" },
          { left: "Stopwatch digital", right: "0,01 s" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pengukuran: alat mana yang paling tepat dipakai?",
        buckets: ["Cukup penggaris", "Perlu mikrometer sekrup"],
        items: [
          { text: "Panjang buku tulis", bucket: "Cukup penggaris" },
          { text: "Tebal sehelai kertas", bucket: "Perlu mikrometer sekrup" },
          { text: "Lebar meja belajar", bucket: "Cukup penggaris" },
          { text: "Diameter kawat tipis", bucket: "Perlu mikrometer sekrup" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah penggaris berskala terkecil 1 mm. Ketidakpastian pembacaannya umumnya setengah skala terkecil. Berapa ketidakpastian itu dalam mm?",
        answer: 0.5,
        tolerance: 0.01,
        suffix: " mm",
        solution:
          "Aturan umum: ketidakpastian = ½ × skala terkecil = ½ × 1 mm = <strong>0,5 mm</strong>. Itulah batas keraguan terkecil saat membaca penggaris biasa dengan mata.",
        hint: "Bagi skala terkecil (1 mm) dengan 2.",
      },
      {
        type: "case",
        title: "Studi Kasus: Memilih Alat di Bengkel Mesin",
        html: "Di bengkel presisi, seorang teknisi harus memastikan diameter piston pas dengan silinder sampai seperseratus milimeter. Kalau ia memakai penggaris biasa yang hanya teliti 1 mm, mesin bisa macet atau bocor. Maka ia memilih <strong>mikrometer sekrup</strong> yang teliti 0,01 mm. Pelajarannya: ketelitian alat harus dipilih sesuai kebutuhan, sebab alat yang terlalu kasar membuat hasil tak berguna, sedangkan alat super teliti untuk benda kasar hanya buang waktu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>Ketelitian sebuah alat ukur ditentukan oleh skala terkecilnya</strong>, dan ketidakpastian pembacaan umumnya diambil <strong>setengah skala terkecil</strong> untuk alat berskala. Makin kecil skala terkecil, makin teliti alat itu. Tugas kita memilih alat yang ketelitiannya sepadan dengan benda yang diukur.",
      },
      {
        type: "takeaways",
        items: [
          "Ketelitian alat ditentukan oleh skala terkecilnya.",
          "Penggaris ~1 mm, jangka sorong 0,1 mm, mikrometer sekrup 0,01 mm.",
          "Ketidakpastian baca alat berskala umumnya setengah skala terkecil.",
          "Pilih alat yang ketelitiannya sesuai dengan benda yang diukur.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Alat manakah yang paling teliti?",
            options: ["Penggaris", "Jangka sorong", "Mikrometer sekrup", "Pita meteran"],
            answer: 2,
            explain: "Mikrometer sekrup berskala 0,01 mm, paling teliti di antaranya.",
          },
          {
            q: "Ketelitian sebuah alat ukur ditentukan oleh...",
            options: ["warnanya", "skala terkecilnya", "panjangnya", "harganya"],
            answer: 1,
            explain: "Makin kecil skala terkecil, makin teliti alat itu.",
          },
          {
            q: "Penggaris berskala 1 mm punya ketidakpastian baca sekitar...",
            options: ["1 mm", "0,5 mm", "2 mm", "0,01 mm"],
            answer: 1,
            explain: "Ketidakpastian umumnya setengah skala terkecil, jadi 0,5 mm.",
          },
          {
            q: "Untuk mengukur tebal sehelai kertas, alat yang tepat adalah...",
            options: ["penggaris", "meteran gulung", "mikrometer sekrup", "jam dinding"],
            answer: 2,
            explain: "Tebal kertas sangat tipis, butuh mikrometer sekrup yang teliti 0,01 mm.",
          },
          {
            q: "Memakai alat yang terlalu kasar untuk benda kecil akan membuat hasil...",
            options: [
              "lebih teliti",
              "tidak berguna karena ketelitiannya kurang",
              "selalu benar",
              "tanpa ketidakpastian",
            ],
            answer: 1,
            explain: "Alat kasar tidak bisa menangkap detail benda kecil, hasilnya jadi tak bermakna.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "ketidakpastian",
    levelId: "ketelitian-pengukuran",
    order: 2,
    title: "Ketidakpastian Pengukuran",
    summary:
      "Tidak ada hasil ukur yang berupa satu angka mutlak. Fisika mengajarkan cara jujur menuliskan seberapa yakin kita terhadap sebuah pengukuran.",
    durationMin: 13,
    tags: ["fisika", "ketidakpastian", "akurasi", "presisi"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua orang mengukur meja yang sama, satu membaca 80,2 cm dan satu lagi 80,3 cm. Siapa yang benar? Keduanya. Setiap pengukuran selalu mengandung sedikit <strong>ketidakpastian</strong>. Sebelum menghafal cara menulisnya, mari pahami dulu mengapa hasil ukur tidak pernah berupa satu angka mutlak.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Mengukur Berarti Membandingkan",
        caption: "Setiap alat ukur punya batas ketelitian, dan itu menentukan kepercayaan kita.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba bedakan dua kata yang sering tertukar. <strong>Akurasi</strong> adalah seberapa dekat hasil dengan nilai sebenarnya, sedangkan <strong>presisi</strong> adalah seberapa konsisten hasil saat diulang. Sebuah timbangan yang selalu menunjukkan 1 kg lebih berat itu presisi tinggi tapi akurasi rendah. Rasakan: keduanya dua hal berbeda, dan keduanya penting.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Menuliskan ketidakpastian",
        html: "Hasil ukur ditulis sebagai <strong>(x &plusmn; &Delta;x)</strong>, dengan &Delta;x menyatakan rentang keraguan. Misalnya (5,2 &plusmn; 0,1) cm berarti nilai sebenarnya hampir pasti antara 5,1 cm dan 5,3 cm. <strong>Ketidakpastian relatif = (&Delta;x / x) &times; 100%</strong> menilai mutu pengukuran dibanding besarnya.",
      },
      {
        type: "widget",
        widget: "AngkaPenting",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan tiap pernyataan: apakah ia berbicara tentang akurasi (dekat nilai benar) atau presisi (konsisten saat diulang)?",
        buckets: ["Akurasi", "Presisi"],
        items: [
          { text: "Rata-rata hasil sangat dekat dengan nilai sebenarnya", bucket: "Akurasi" },
          { text: "Lima kali pengukuran menghasilkan angka yang nyaris sama", bucket: "Presisi" },
          { text: "Timbangan selalu menunjukkan 0,5 kg lebih berat dari seharusnya", bucket: "Akurasi" },
          { text: "Tembakan berkumpul rapat meski jauh dari pusat sasaran", bucket: "Presisi" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah panjang dilaporkan sebagai (5,2 ± 0,1) cm. Berapa persen ketidakpastian relatifnya? Bulatkan ke satu angka di belakang koma.",
        answer: 1.9,
        tolerance: 0.4,
        suffix: " %",
        solution:
          "Ketidakpastian relatif = (Δx / x) × 100% = (0,1 / 5,2) × 100% ≈ <strong>1,9%</strong>. Makin kecil persentase ini, makin teliti pengukurannya dibanding besaran yang diukur.",
        hint: "Bagi ketidakpastian (0,1) dengan nilai ukur (5,2), lalu kalikan 100%.",
      },
      {
        type: "calcExercise",
        prompt:
          "Hasil ukur (4,0 ± 0,2) cm. Berapa batas bawah nilai yang mungkin (dalam cm)?",
        answer: 3.8,
        tolerance: 0.01,
        suffix: " cm",
        solution:
          "Batas bawah = x - Δx = 4,0 - 0,2 = <strong>3,8 cm</strong>, dan batas atasnya 4,2 cm. Nilai sebenarnya diyakini berada di antara keduanya.",
        hint: "Kurangkan ketidakpastian dari nilai ukur.",
      },
      {
        type: "case",
        title: "Studi Kasus: Menemukan Boson Higgs dengan Hati-hati",
        html: "Saat fisikawan CERN mengumumkan penemuan partikel Higgs pada 2012, mereka tidak langsung berkata 'pasti ada'. Mereka menunggu sampai sinyalnya mencapai standar ketat yang disebut '5 sigma', yaitu tingkat keyakinan dengan peluang salah hanya sekitar 1 dari 3,5 juta. Mereka begitu menghormati <strong>ketidakpastian</strong> sehingga tidak mau menyimpulkan terlalu cepat. Pelajarannya: dalam sains, mengakui dan mengukur keraguan justru membuat sebuah klaim layak dipercaya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>Setiap pengukuran punya ketidakpastian, dan hasil ditulis (x &plusmn; &Delta;x).</strong> Akurasi adalah kedekatan dengan nilai benar, presisi adalah kekonsistenan saat diulang. <strong>Ketidakpastian relatif = (&Delta;x / x) &times; 100%</strong> mengukur mutu pengukuran: makin kecil, makin baik.",
      },
      {
        type: "takeaways",
        items: [
          "Setiap pengukuran mengandung ketidakpastian; hasil ditulis (x ± Δx).",
          "Akurasi itu dekat nilai benar; presisi itu konsisten saat diulang.",
          "Ketidakpastian relatif = (Δx / x) × 100% menilai mutu pengukuran.",
          "Mengakui dan mengukur keraguan justru membuat klaim ilmiah lebih kuat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Cara baku menuliskan hasil pengukuran beserta ketidakpastiannya adalah...",
            options: ["x × Δx", "x / Δx", "(x ± Δx)", "x Δx"],
            answer: 2,
            explain: "Hasil ukur ditulis (x ± Δx), dengan Δx sebagai ketidakpastiannya.",
          },
          {
            q: "Sebuah timbangan selalu membaca 0,3 kg lebih berat. Ini contoh...",
            options: [
              "presisi rendah",
              "akurasi rendah tapi bisa presisi tinggi",
              "akurasi tinggi",
              "tidak ada ketidakpastian",
            ],
            answer: 1,
            explain: "Selisih tetap dari nilai benar menandakan akurasi rendah, meski hasilnya bisa konsisten.",
          },
          {
            q: "Panjang (4,0 ± 0,2) cm punya ketidakpastian relatif sekitar...",
            options: ["0,2%", "2%", "5%", "20%"],
            answer: 2,
            explain: "(0,2 / 4,0) × 100% = 5%.",
          },
          {
            q: "Hasil (5,2 ± 0,1) cm berarti nilai sebenarnya diyakini berada antara...",
            options: ["5,0 dan 5,4 cm", "5,1 dan 5,3 cm", "4,2 dan 6,2 cm", "5,2 cm tepat", ],
            answer: 1,
            explain: "Rentangnya x ± Δx, yaitu 5,1 cm sampai 5,3 cm.",
          },
          {
            q: "Mengapa ilmuwan menghormati ketidakpastian, seperti pada penemuan Higgs?",
            options: [
              "Agar tidak menyimpulkan terlalu cepat dan klaimnya lebih terpercaya",
              "Karena ketidakpastian membuat hasil pasti salah",
              "Agar tidak perlu mengukur",
              "Karena keraguan tidak penting",
            ],
            answer: 0,
            explain: "Mengukur dan mengakui keraguan membuat kesimpulan ilmiah lebih kuat dipercaya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "angka-penting-dan-notasi-ilmiah",
    levelId: "ketelitian-pengukuran",
    order: 3,
    title: "Angka Penting dan Notasi Ilmiah",
    summary:
      "Berapa banyak angka yang boleh kita tulis setelah mengukur? Fisika punya cara jujur untuk menyatakan seberapa pasti sebuah hasil.",
    durationMin: 12,
    tags: ["fisika", "angka penting", "notasi ilmiah", "presisi"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu mengukur panjang pensil dengan penggaris bermilimeter dan membaca '14,3 cm'. Angka 3 di belakang itu sebenarnya hasil <em>menaksir</em> di antara dua garis. Menuliskan '14,283 cm' justru berbohong, seolah penggarismu seteliti itu. Sebelum menghafal aturan, mari pahami mengapa jumlah angka yang kita tulis itu bermakna.",
      },
      {
        type: "video",
        comp: "MatematikaVsBerhitung",
        title: "Video: Menghitung Itu Bukan Sekadar Menekan Kalkulator",
        caption: "Kalkulator memberi 10 digit, tetapi tidak semua digit itu berarti.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bagi 1 dibagi 3 di kalkulator: muncul 0,333333333. Kalau angka 1 itu hasil ukur penggaris kasar, apakah semua angka 3 itu nyata? Tentu tidak. <strong>Angka penting</strong> adalah angka yang benar-benar kita yakini dari pengukuran. Coba rasakan: hasil hitung tidak boleh lebih teliti daripada alat yang dipakai mengukur.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Sekilas aturan angka penting",
        html: "Semua angka bukan nol itu penting. Nol di antara angka penting juga penting (102 punya 3 angka penting). Nol di depan hanya penanda tempat dan tidak penting (0,0045 punya 2 angka penting). Nol di belakang setelah koma desimal itu penting (1,50 punya 3 angka penting).",
      },
      {
        type: "widget",
        widget: "AngkaPenting",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap bilangan berdasarkan jumlah angka pentingnya.",
        buckets: ["2 angka penting", "3 angka penting"],
        items: [
          { text: "0,0045", bucket: "2 angka penting" },
          { text: "3,14", bucket: "3 angka penting" },
          { text: "0,020", bucket: "2 angka penting" },
          { text: "1,50", bucket: "3 angka penting" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap bilangan dengan bentuk notasi ilmiahnya.",
        pairs: [
          { left: "0,0034", right: "3,4 × 10⁻³" },
          { left: "56.000", right: "5,6 × 10⁴" },
          { left: "0,00012", right: "1,2 × 10⁻⁴" },
          { left: "920.000", right: "9,2 × 10⁵" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pelat diukur: panjang 6,2 cm dan lebar 2,0 cm (masing-masing 2 angka penting). Berapa luasnya, dibulatkan ke jumlah angka penting yang benar?",
        answer: 12,
        tolerance: 0.5,
        suffix: " cm²",
        solution:
          "6,2 × 2,0 = 12,4 cm². Karena pada perkalian hasil mengikuti faktor dengan angka penting paling sedikit (di sini 2 angka penting), luasnya ditulis <strong>12 cm²</strong>. Menulis 12,4 akan mengklaim ketelitian yang tidak kita miliki.",
        hint: "Kalikan dulu, lalu bulatkan ke 2 angka penting.",
      },
      {
        type: "case",
        title: "Studi Kasus: Berapa Digit Pi yang Dipakai NASA?",
        html: "Untuk menavigasi wahana antarplanet sejauh miliaran kilometer, insinyur NASA JPL ternyata hanya memakai sekitar <strong>15 sampai 16 angka penting</strong> dari bilangan &pi;. Dengan presisi itu, kesalahan perhitungan keliling orbit sebesar Bumi pun lebih kecil daripada lebar sebuah atom. Pelajarannya: menambah angka di belakang koma tidak selalu menambah arti. Yang penting adalah seberapa teliti pengukuran kita sebenarnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>Notasi ilmiah</strong> menulis bilangan sebagai a &times; 10<sup>n</sup> dengan 1 &le; a &lt; 10, sehingga jumlah angka penting menjadi jelas dan bilangan sangat besar atau sangat kecil mudah ditulis. Saat berhitung: pada perkalian dan pembagian, hasil mengikuti angka penting paling sedikit; pada penjumlahan, hasil mengikuti jumlah desimal paling sedikit.",
      },
      {
        type: "takeaways",
        items: [
          "Angka penting adalah digit yang benar-benar diyakini dari hasil ukur.",
          "Nol di depan hanya penanda tempat; nol di belakang koma desimal itu penting.",
          "Notasi ilmiah a × 10ⁿ membuat jumlah angka penting jelas dan rapi.",
          "Hasil hitung tidak boleh lebih teliti daripada alat ukur yang dipakai.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Berapa angka penting pada bilangan 0,00302?",
            options: ["2", "3", "5", "6"],
            answer: 1,
            explain: "Nol di depan tidak dihitung; angka 3, 0, dan 2 penting, jadi 3 angka penting.",
          },
          {
            q: "Bentuk notasi ilmiah dari 48.000 (2 angka penting) adalah...",
            options: ["48 × 10³", "4,8 × 10⁴", "4,8 × 10⁵", "0,48 × 10⁵"],
            answer: 1,
            explain: "Koefisien harus 1 ≤ a < 10, jadi 4,8 × 10⁴.",
          },
          {
            q: "Hasil 3,0 cm × 2,00 cm ditulis dengan berapa angka penting?",
            options: ["1", "2", "3", "4"],
            answer: 1,
            explain: "Mengikuti faktor dengan angka penting paling sedikit, yaitu 2 (dari 3,0).",
          },
          {
            q: "Mengapa menulis 1/3 sebagai 0,33333 dari hasil ukur kasar itu menyesatkan?",
            options: [
              "Karena hasilnya salah",
              "Karena mengklaim ketelitian melebihi alat ukur",
              "Karena 1/3 tidak boleh dihitung",
              "Karena kalkulator selalu keliru",
            ],
            answer: 1,
            explain: "Jumlah angka penting tidak boleh melebihi ketelitian pengukuran asalnya.",
          },
          {
            q: "Bilangan 1,50 × 10³ memiliki berapa angka penting?",
            options: ["1", "2", "3", "4"],
            answer: 2,
            explain: "Koefisien 1,50 punya 3 angka penting (1, 5, dan 0 di belakang koma).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "operasi-angka-penting",
    levelId: "ketelitian-pengukuran",
    order: 4,
    title: "Operasi dengan Angka Penting",
    summary:
      "Saat hasil ukur dijumlah atau dikali, berapa angka yang boleh kita pertahankan? Ada dua aturan berbeda, dan keduanya soal kejujuran.",
    durationMin: 12,
    tags: ["fisika", "angka penting", "operasi", "pembulatan"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu menjumlahkan 12,1 cm dan 3,45 cm di kalkulator, muncul 15,55 cm. Tetapi pengukuran pertama hanya teliti sampai satu desimal. Berhak kah kita menulis dua desimal di hasil? Tidak. Saat hasil ukur diolah, ketidaktelitian ikut menjalar. Sebelum menghafal aturannya, mari pahami mengapa hasil hitung tidak boleh lebih teliti dari data mentahnya.",
      },
      {
        type: "video",
        comp: "MatematikaVsBerhitung",
        title: "Video: Kalkulator Tidak Tahu Ketelitian Datamu",
        caption: "Mesin memberi banyak digit, tetapi kita yang harus tahu mana yang berarti.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ada dua aturan, dan keduanya logis. Untuk <strong>penjumlahan/pengurangan</strong>, hasil mengikuti suku dengan <em>desimal paling sedikit</em>: 12,1 + 3,45 = 15,6 (satu desimal, ikut 12,1). Untuk <strong>perkalian/pembagian</strong>, hasil mengikuti faktor dengan <em>angka penting paling sedikit</em>. Coba rasakan: rantai sekuat mata rantai terlemahnya, dan hasil seteliti datamu yang paling kasar.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua aturan, jangan tertukar",
        html: "Penjumlahan dan pengurangan menghitung <strong>jumlah desimal</strong> (angka di belakang koma). Perkalian dan pembagian menghitung <strong>jumlah angka penting</strong>. Bulatkan hanya di langkah akhir, bukan di tengah-tengah, agar pembulatan tidak menumpuk.",
      },
      {
        type: "widget",
        widget: "AngkaPenting",
      },
      {
        type: "calcExercise",
        prompt:
          "Jumlahkan dua panjang: 12,1 cm dan 3,45 cm. Tuliskan hasil dengan jumlah desimal yang benar (dalam cm).",
        answer: 15.6,
        tolerance: 0.01,
        suffix: " cm",
        solution:
          "12,1 + 3,45 = 15,55 cm. Karena 12,1 hanya punya satu desimal, hasil dibulatkan ke satu desimal menjadi <strong>15,6 cm</strong>. Aturan penjumlahan memakai jumlah desimal terkecil.",
        hint: "Jumlahkan dulu, lalu bulatkan ke satu angka di belakang koma.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda bermassa 4,5 g (2 angka penting) bervolume 1,2 cm³ (2 angka penting). Berapa massa jenisnya, dengan angka penting yang benar?",
        answer: 3.8,
        tolerance: 0.1,
        suffix: " g/cm³",
        solution:
          "4,5 / 1,2 = 3,75 g/cm³. Karena keduanya 2 angka penting, hasil dibulatkan ke 2 angka penting menjadi <strong>3,8 g/cm³</strong>. Aturan pembagian memakai angka penting paling sedikit.",
        hint: "Bagi massa dengan volume, lalu bulatkan ke 2 angka penting.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan tiap operasi berdasarkan aturan yang dipakai untuk menentukan angka di hasilnya.",
        buckets: ["Aturan jumlah desimal", "Aturan jumlah angka penting"],
        items: [
          { text: "Menjumlahkan 2,5 cm + 1,25 cm", bucket: "Aturan jumlah desimal" },
          { text: "Mengalikan 3,0 cm × 2,00 cm", bucket: "Aturan jumlah angka penting" },
          { text: "Mengurangkan 10,0 g - 2,5 g", bucket: "Aturan jumlah desimal" },
          { text: "Membagi 12 m dengan 3,0 s", bucket: "Aturan jumlah angka penting" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menimbun Pembulatan di Laboratorium",
        html: "Seorang siswa menghitung rapat jenis logam melalui banyak langkah, dan di setiap langkah ia membulatkan hasilnya. Di akhir, jawabannya meleset cukup jauh dari nilai sebenarnya. Penyebabnya: <strong>pembulatan yang menumpuk</strong>. Setiap kali membulatkan di tengah, ia membuang sedikit informasi, dan kesalahan kecil itu berlipat ganda. Para peneliti menyiasatinya dengan menyimpan beberapa digit cadangan selama perhitungan, lalu membulatkan hanya sekali di akhir.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum aturannya. <strong>Penjumlahan dan pengurangan: hasil mengikuti jumlah desimal paling sedikit. Perkalian dan pembagian: hasil mengikuti jumlah angka penting paling sedikit.</strong> Bulatkan hanya di langkah terakhir agar pembulatan tidak menumpuk. Intinya, hasil olahan tidak boleh terlihat lebih teliti daripada data paling kasar yang dipakai.",
      },
      {
        type: "takeaways",
        items: [
          "Penjumlahan dan pengurangan mengikuti jumlah desimal paling sedikit.",
          "Perkalian dan pembagian mengikuti jumlah angka penting paling sedikit.",
          "Bulatkan hanya sekali di langkah akhir agar pembulatan tidak menumpuk.",
          "Hasil olahan tidak boleh tampak lebih teliti daripada data paling kasar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hasil 8,2 cm + 1,15 cm yang benar adalah...",
            options: ["9,35 cm", "9,4 cm", "9,3 cm", "9 cm"],
            answer: 1,
            explain: "8,2 punya satu desimal, jadi 9,35 dibulatkan ke 9,4 cm.",
          },
          {
            q: "Pada perkalian, jumlah angka penting hasil mengikuti...",
            options: [
              "faktor dengan angka penting terbanyak",
              "faktor dengan angka penting paling sedikit",
              "selalu 2 angka penting",
              "jumlah desimal terkecil",
            ],
            answer: 1,
            explain: "Hasil perkalian mengikuti faktor dengan angka penting paling sedikit.",
          },
          {
            q: "Hasil 6,0 m ÷ 2,0 s ditulis dengan berapa angka penting?",
            options: ["1", "2", "3", "4"],
            answer: 1,
            explain: "Kedua data punya 2 angka penting, jadi hasilnya 2 angka penting: 3,0 m/s.",
          },
          {
            q: "Mengapa sebaiknya membulatkan hanya di langkah akhir?",
            options: [
              "Agar perhitungan lebih lama",
              "Agar pembulatan tidak menumpuk dan merusak hasil",
              "Karena pembulatan dilarang",
              "Agar angka penting bertambah",
            ],
            answer: 1,
            explain: "Pembulatan di tiap langkah membuang informasi dan kesalahannya bisa menumpuk.",
          },
          {
            q: "Operasi 10,0 g - 2,55 g memakai aturan...",
            options: [
              "jumlah angka penting",
              "jumlah desimal paling sedikit",
              "tanpa aturan",
              "selalu 3 angka penting",
            ],
            answer: 1,
            explain: "Pengurangan memakai aturan jumlah desimal; 10,0 punya satu desimal, hasil 7,5 g.",
          },
        ],
      },
    ],
  },
];
