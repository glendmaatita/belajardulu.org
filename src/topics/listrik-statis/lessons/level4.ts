import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "kapasitansi-dan-kapasitor",
    levelId: "kapasitor",
    order: 1,
    title: "Kapasitansi dan Kapasitor",
    summary:
      "Lampu kilat kamera mengisi tenaga perlahan lalu melepasnya dalam sekejap. Di balik kilatan itu ada kapasitor. Kita telusuri kisahnya dulu, baru rumus kapasitansi lahir di akhir.",
    durationMin: 15,
    tags: ["listrik statis", "kapasitor", "kapasitansi", "muatan"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat memotret di tempat gelap, kamera berbunyi mendengung sebentar sebelum lampu kilat menyala. Dengungan itu adalah <strong>kapasitor</strong> yang sedang diisi muatan pelan-pelan dari baterai, lalu melepaskan semuanya dalam sepersekian detik untuk menghasilkan cahaya terang. Sebelum bertemu rumus, ayo pahami dulu bagaimana sebuah komponen bisa 'menabung' muatan.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Muatan, Tegangan, dan Komponen Listrik",
        caption:
          "Kapasitor menghubungkan muatan yang tersimpan dengan tegangan di antara kedua kepingnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua keping logam sejajar yang didekatkan tanpa bersentuhan. Hubungkan ke baterai: satu keping menumpuk muatan positif, keping lain negatif. Makin tinggi tegangan baterai, makin banyak muatan yang tertampung. Amati hubungannya: <strong>muatan tersimpan sebanding dengan tegangan</strong>. Perbandingan tetap inilah yang menentukan 'kapasitas tabungan' si keping.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu kapasitansi",
        html: "<strong>Kapasitansi (C)</strong> adalah ukuran kemampuan menyimpan muatan untuk tiap volt tegangan, bersatuan farad (F). Kapasitor keping sejajar punya kapasitansi lebih besar bila kepingnya luas dan jaraknya dekat.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Muatan Tersimpan pada Kapasitor 100 µF terhadap Tegangan",
        unit: "µC",
        source: "perhitungan Q = C·V dengan C = 100 µF",
        note: "Hubungan muatan dan tegangan berupa garis lurus. Kemiringan garis yang tetap itulah kapasitansi: nilai C tidak berubah meski tegangan dinaikkan.",
        data: [
          { label: "V = 2 volt", value: 200, color: "#facc15" },
          { label: "V = 4 volt", value: 400, color: "#a3e635" },
          { label: "V = 6 volt", value: 600, color: "#4ade80" },
          { label: "V = 8 volt", value: 800, color: "#2dd4bf" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kapasitor 500 µF (5×10⁻⁴ F) dihubungkan ke tegangan 12 V. Berapa muatan yang tersimpan?",
        answer: 0.006,
        tolerance: 0.0002,
        suffix: " C",
        solution:
          "Q = C·V = 5×10⁻⁴ × 12 = 6×10⁻³ = <strong>0,006 C</strong> (atau 6 mC). Muatan tersimpan sebanding dengan tegangan dan kapasitansinya.",
        hint: "Gunakan Q = C·V. Pastikan kapasitansi dalam farad, bukan mikrofarad.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah kapasitor dengan keterangan yang tepat.",
        pairs: [
          { left: "Satuan kapasitansi", right: "Farad (F)" },
          { left: "Kapasitansi besar", right: "Menyimpan lebih banyak muatan tiap volt" },
          { left: "Mendekatkan kedua keping", right: "Memperbesar kapasitansi" },
          { left: "Definisi kapasitansi", right: "C = Q/V" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lampu Kilat Kamera",
        html: "Baterai kamera hanya beberapa volt dan tidak cukup kuat memberi semburan cahaya seketika. Maka kapasitor mengumpulkan muatan perlahan, lalu melepaskannya ke tabung kilat dalam sepersekian detik. Itu sebabnya ada jeda dan dengungan sebelum lampu siap. Kapasitor mengubah aliran lemah yang panjang menjadi ledakan tenaga yang singkat, tepat seperti tabungan yang dikuras sekaligus.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita tuliskan. Kapasitansi: <strong>C = Q/V</strong>, yaitu muatan tersimpan per satuan tegangan, bersatuan farad. Sebaliknya, muatan tersimpan: <strong>Q = C·V</strong>. Rumus ini hanyalah ringkasan dari pengamatan kita: makin besar tegangan, makin banyak muatan, dan perbandingan tetap di antara keduanya adalah kapasitansi.",
      },
      {
        type: "takeaways",
        items: [
          "Kapasitor menyimpan muatan pada dua keping yang berdekatan dan berlawanan muatan.",
          "Kapasitansi C = Q/V mengukur muatan tersimpan tiap volt, bersatuan farad.",
          "Muatan tersimpan sebanding dengan tegangan: Q = C·V.",
          "Kapasitansi adalah sifat tetap kapasitor, tidak berubah saat tegangan dinaikkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapasitansi didefinisikan sebagai?",
            options: ["C = Q·V", "C = Q/V", "C = V/Q", "C = Q/V²"],
            answer: 1,
            explain: "Kapasitansi adalah muatan per satuan tegangan, C = Q/V.",
          },
          {
            q: "Satuan kapasitansi adalah?",
            options: ["Volt", "Coulomb", "Farad", "Ampere"],
            answer: 2,
            explain: "Kapasitansi diukur dalam farad (F).",
          },
          {
            q: "Jika tegangan pada kapasitor dijadikan dua kali lipat, muatannya menjadi?",
            options: ["Setengah", "Tetap", "Dua kali lipat", "Empat kali lipat"],
            answer: 2,
            explain: "Karena Q = C·V dan C tetap, dua kali tegangan berarti dua kali muatan.",
          },
          {
            q: "Cara memperbesar kapasitansi kapasitor keping sejajar adalah?",
            options: [
              "Menjauhkan kedua keping",
              "Memperkecil luas keping",
              "Mendekatkan dan memperluas keping",
              "Menurunkan tegangan",
            ],
            answer: 2,
            explain: "Kapasitansi membesar bila keping diperluas dan jaraknya diperdekat.",
          },
          {
            q: "Mengapa lampu kilat kamera memakai kapasitor?",
            options: [
              "Agar baterai awet selamanya",
              "Untuk mengumpulkan muatan lalu melepasnya dalam sekejap",
              "Untuk menambah berat kamera",
              "Untuk mendinginkan lampu",
            ],
            answer: 1,
            explain: "Kapasitor mengubah aliran lemah panjang menjadi semburan tenaga singkat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kapasitor-keping-sejajar",
    levelId: "kapasitor",
    order: 2,
    title: "Kapasitor Keping Sejajar",
    summary:
      "Layar sentuh ponselmu mendeteksi jari karena jari mengubah kapasitansi. Kita selidiki dulu apa yang membuat kapasitansi keping membesar atau mengecil, baru rumusnya lahir di akhir.",
    durationMin: 14,
    tags: ["listrik statis", "kapasitor", "keping sejajar", "dielektrik"],
    blocks: [
      {
        type: "paragraph",
        html: "Layar sentuh ponsel menyimpan jaringan kapasitor mungil. Saat jarimu mendekat, ia mengubah kapasitansi di titik itu, dan ponsel tahu persis di mana kamu menekan. Tapi apa sebenarnya yang menentukan besar kapasitansi sebuah kapasitor keping sejajar? Sebelum menuliskan rumus, ayo selidiki dulu tiga tombol yang mengaturnya.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Muatan, Tegangan, dan Komponen Listrik",
        caption:
          "Kapasitansi keping sejajar ditentukan oleh bentuk fisiknya, bukan oleh baterai yang dipasang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba tiga hal pada dua keping sejajar. Pertama, perluas kepingnya: muatan punya lebih banyak ruang menumpuk, kapasitansi naik. Kedua, dekatkan kedua keping: tarikan antar muatan berlawanan menguat, lebih banyak muatan tertahan, kapasitansi naik. Ketiga, sisipkan lembar kaca atau plastik di antaranya: kapasitansi naik lagi. Belum ada rumus, tetapi kita sudah menemukan tiga tombol pengaturnya: <strong>luas, jarak, dan bahan penyekat</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Luas, jarak, dan dielektrik",
        html: "Kapasitansi keping sejajar membesar bila <strong>luas keping (A)</strong> bertambah dan mengecil bila <strong>jarak (d)</strong> bertambah. Bahan penyekat di antara keping disebut <strong>dielektrik</strong>; menyisipkannya melipatgandakan kapasitansi sebesar konstanta dielektrik εᵣ (untuk udara εᵣ ≈ 1, kaca εᵣ ≈ 5).",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kapasitansi Keping (Luas 0,02 m²) saat Jarak Antar Keping Berubah",
        unit: "pF",
        source: "perhitungan C = ε₀·A/d dengan ε₀ = 8,85×10⁻¹², A = 0,02 m²",
        note: "Kapasitansi berbanding terbalik dengan jarak: mendekatkan keping (d mengecil) membuat kapasitansi melonjak. Inilah sebabnya kapasitor dibuat dengan keping yang sangat berdekatan.",
        data: [
          { label: "d = 1 mm", value: 177, color: "#facc15" },
          { label: "d = 2 mm", value: 88, color: "#a3e635" },
          { label: "d = 3 mm", value: 59, color: "#4ade80" },
          { label: "d = 4 mm", value: 44, color: "#2dd4bf" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Kapasitor keping sejajar berisi udara punya luas keping 0,02 m² dan jarak 0,001 m. Berapa kapasitansinya? (ε₀ = 8,85×10⁻¹² F/m)",
        answer: 177,
        tolerance: 3,
        suffix: " pF",
        solution:
          "C = ε₀·A/d = 8,85×10⁻¹² × 0,02 / 0,001 = 8,85×10⁻¹² × 20 = 1,77×10⁻¹⁰ F = <strong>177 pF</strong>.",
        hint: "Gunakan C = ε₀·A/d, lalu ubah hasilnya ke pikofarad (1 pF = 10⁻¹² F).",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kapasitor berisi udara berkapasitansi 100 pF. Berapa kapasitansinya setelah celahnya diisi dielektrik dengan εᵣ = 4?",
        answer: 400,
        tolerance: 5,
        suffix: " pF",
        solution:
          "Dengan dielektrik, C = εᵣ × C₀ = 4 × 100 = <strong>400 pF</strong>. Dielektrik melipatgandakan kapasitansi sebesar konstanta dielektriknya.",
        hint: "Kalikan kapasitansi awal dengan konstanta dielektrik εᵣ.",
      },
      {
        type: "classifyExercise",
        prompt: "Tentukan apakah tiap tindakan berikut memperbesar atau memperkecil kapasitansi keping sejajar.",
        buckets: ["Memperbesar kapasitansi", "Memperkecil kapasitansi"],
        items: [
          { text: "Memperluas keping", bucket: "Memperbesar kapasitansi" },
          { text: "Menjauhkan kedua keping", bucket: "Memperkecil kapasitansi" },
          { text: "Mendekatkan kedua keping", bucket: "Memperbesar kapasitansi" },
          { text: "Menyisipkan lembar kaca (dielektrik)", bucket: "Memperbesar kapasitansi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Layar Sentuh Kapasitif",
        html: "Di bawah kaca ponsel terbentang kisi-kisi elektroda transparan yang membentuk ribuan kapasitor kecil. Jari manusia bersifat sedikit konduktif sehingga saat menyentuh layar, ia mengubah kapasitansi lokal di titik itu. Cip pengontrol membaca perubahan tersebut dan menghitung posisi sentuhan. Memahami bagaimana luas, jarak, dan bahan memengaruhi kapasitansi membuat insinyur merancang layar yang peka tetapi tahan terhadap gangguan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita tuliskan. Kapasitansi keping sejajar: <strong>C = ε₀·εᵣ·A/d</strong>, dengan ε₀ = 8,85×10⁻¹² F/m, A luas keping, d jarak antar keping, dan εᵣ konstanta dielektrik bahan penyekat. Rumus ini hanyalah ringkasan dari tiga tombol yang tadi kita putar: perluas keping, dekatkan jaraknya, dan sisipkan dielektrik untuk memperbesar C.",
      },
      {
        type: "takeaways",
        items: [
          "Kapasitansi keping sejajar C = ε₀·εᵣ·A/d.",
          "Memperluas keping (A naik) memperbesar kapasitansi.",
          "Menjauhkan keping (d naik) memperkecil kapasitansi; mendekatkan memperbesarnya.",
          "Menyisipkan dielektrik melipatgandakan kapasitansi sebesar konstanta εᵣ.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapasitansi kapasitor keping sejajar dirumuskan?",
            options: ["C = ε₀·A·d", "C = ε₀·εᵣ·A/d", "C = ε₀·d/A", "C = A/(ε₀·d)"],
            answer: 1,
            explain: "C = ε₀·εᵣ·A/d, bergantung luas, jarak, dan dielektrik.",
          },
          {
            q: "Menjauhkan kedua keping membuat kapasitansi?",
            options: ["Bertambah", "Berkurang", "Tetap", "Nol"],
            answer: 1,
            explain: "Karena d ada di penyebut, jarak lebih besar membuat C lebih kecil.",
          },
          {
            q: "Menyisipkan dielektrik di antara keping akan?",
            options: [
              "Memperkecil kapasitansi",
              "Memperbesar kapasitansi",
              "Tidak berpengaruh",
              "Membuat kapasitansi nol",
            ],
            answer: 1,
            explain: "Dielektrik melipatgandakan kapasitansi sebesar εᵣ.",
          },
          {
            q: "Memperluas keping kapasitor akan?",
            options: ["Memperkecil C", "Memperbesar C", "Tidak mengubah C", "Menghapus muatan"],
            answer: 1,
            explain: "Luas lebih besar memberi ruang menumpuk muatan, sehingga C naik.",
          },
          {
            q: "Konstanta dielektrik udara kira-kira?",
            options: ["1", "5", "80", "9×10⁹"],
            answer: 0,
            explain: "Udara hampir seperti ruang hampa, εᵣ ≈ 1.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "rangkaian-kapasitor",
    levelId: "kapasitor",
    order: 3,
    title: "Rangkaian Seri dan Paralel Kapasitor",
    summary:
      "Butuh kapasitansi yang pas tetapi hanya punya kapasitor seadanya? Susun saja. Kita amati dulu apa yang terjadi saat kapasitor dirangkai, baru rumusnya kita rangkum di akhir.",
    durationMin: 14,
    tags: ["listrik statis", "kapasitor", "seri", "paralel"],
    blocks: [
      {
        type: "paragraph",
        html: "Insinyur jarang punya kapasitor dengan nilai persis yang dibutuhkan. Solusinya: gabungkan beberapa kapasitor. Tergantung cara menyusunnya, kapasitansi totalnya bisa membesar atau justru mengecil. Sebelum menuliskan rumus, ayo amati dulu apa yang terjadi pada dua cara penyusunan: paralel dan seri.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Merangkai Komponen Listrik",
        caption:
          "Seperti hambatan, kapasitor punya aturan penggabungan tersendiri saat dirangkai seri atau paralel.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Susun dua kapasitor <strong>paralel</strong> (berdampingan): luas keping efektifnya seakan bertambah, sehingga total muatan yang tertampung lebih besar dan kapasitansinya menjumlah. Lalu susun <strong>seri</strong> (berurutan): jaraknya seakan bertambah, sehingga kapasitansi totalnya justru lebih kecil dari yang terkecil sekalipun. Belum ada rumus, tetapi kita sudah melihat paralel menambah dan seri mengurangi kapasitansi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Aturan paralel dan seri",
        html: "<strong>Paralel</strong>: kapasitansi total adalah jumlah semuanya, C = C₁ + C₂ + …, dan selalu lebih besar dari tiap kapasitor. <strong>Seri</strong>: kebalikan kapasitansi total adalah jumlah kebalikannya, 1/C = 1/C₁ + 1/C₂ + …, dan hasilnya selalu lebih kecil dari yang terkecil. Perhatikan: aturan ini kebalikan dari aturan hambatan.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kapasitansi Total Dua Kapasitor 6 µF",
        unit: "µF",
        source: "perhitungan paralel C = C₁+C₂ dan seri 1/C = 1/C₁+1/C₂",
        note: "Dua kapasitor 6 µF yang sama menghasilkan 12 µF saat paralel, tetapi hanya 3 µF saat seri. Paralel menambah, seri mengurangi, persis kebalikan dari aturan hambatan.",
        data: [
          { label: "Satu kapasitor", value: 6, color: "#a3e635" },
          { label: "Paralel", value: 12, color: "#facc15" },
          { label: "Seri", value: 3, color: "#2dd4bf" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dua kapasitor 4 µF dan 6 µF disusun paralel. Berapa kapasitansi totalnya?",
        answer: 10,
        tolerance: 0.1,
        suffix: " µF",
        solution:
          "Pada susunan paralel, C = C₁ + C₂ = 4 + 6 = <strong>10 µF</strong>. Kapasitansi total selalu lebih besar dari tiap kapasitor.",
        hint: "Untuk paralel, jumlahkan langsung kapasitansinya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua kapasitor 4 µF dan 6 µF disusun seri. Berapa kapasitansi totalnya?",
        answer: 2.4,
        tolerance: 0.1,
        suffix: " µF",
        solution:
          "Pada susunan seri, 1/C = 1/4 + 1/6 = 3/12 + 2/12 = 5/12, sehingga C = 12/5 = <strong>2,4 µF</strong>. Hasilnya lebih kecil dari kapasitor terkecil (4 µF).",
        hint: "Jumlahkan kebalikan kapasitansi, lalu balikkan hasilnya.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan ke susunan kapasitor yang sesuai.",
        buckets: ["Susunan paralel", "Susunan seri"],
        items: [
          { text: "Kapasitansi total = jumlah semua kapasitor", bucket: "Susunan paralel" },
          { text: "Kapasitansi total lebih kecil dari yang terkecil", bucket: "Susunan seri" },
          { text: "Tegangan tiap kapasitor sama", bucket: "Susunan paralel" },
          { text: "Muatan tiap kapasitor sama", bucket: "Susunan seri" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bank Kapasitor Panggung Konser",
        html: "Penguat audio panggung konser membutuhkan semburan arus besar saat bas menghentak. Catu dayanya memasang banyak kapasitor besar yang disusun <strong>paralel</strong> sehingga kapasitansi totalnya raksasa, mampu menyimpan dan melepas muatan dalam jumlah besar dengan cepat. Tanpa memahami aturan paralel, suara akan pecah saat puncak lagu. Susunan kapasitor menjaga tegangan tetap stabil.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita tuliskan. <strong>Paralel</strong>: C<sub>total</sub> = C₁ + C₂ + C₃ + … <strong>Seri</strong>: 1/C<sub>total</sub> = 1/C₁ + 1/C₂ + 1/C₃ + … Pada paralel tegangan tiap kapasitor sama; pada seri muatan tiap kapasitor sama. Rumus ini hanyalah ringkasan dari pengamatan: paralel seakan memperluas keping (menambah C), seri seakan memperjauh jarak (mengurangi C).",
      },
      {
        type: "takeaways",
        items: [
          "Paralel: C_total = C₁ + C₂ + …, selalu lebih besar dari tiap kapasitor.",
          "Seri: 1/C_total = 1/C₁ + 1/C₂ + …, selalu lebih kecil dari yang terkecil.",
          "Pada paralel tegangan tiap kapasitor sama; pada seri muatan tiap kapasitor sama.",
          "Aturan kapasitor adalah kebalikan dari aturan hambatan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapasitansi total dua kapasitor yang disusun paralel adalah?",
            options: ["C₁ + C₂", "1/(C₁ + C₂)", "C₁·C₂", "C₁ − C₂"],
            answer: 0,
            explain: "Pada paralel, kapasitansi dijumlahkan langsung.",
          },
          {
            q: "Untuk susunan seri, yang dijumlahkan adalah?",
            options: [
              "Kapasitansinya",
              "Kebalikan kapasitansinya",
              "Kuadrat kapasitansinya",
              "Tegangannya saja",
            ],
            answer: 1,
            explain: "Pada seri, 1/C_total = 1/C₁ + 1/C₂ + …",
          },
          {
            q: "Dua kapasitor 6 µF yang disusun seri menghasilkan?",
            options: ["12 µF", "6 µF", "3 µF", "0 µF"],
            answer: 2,
            explain: "1/C = 1/6 + 1/6 = 2/6, sehingga C = 3 µF.",
          },
          {
            q: "Pada susunan paralel, besaran yang sama di tiap kapasitor adalah?",
            options: ["Muatan", "Tegangan", "Energi", "Luas"],
            answer: 1,
            explain: "Kapasitor paralel berbagi tegangan yang sama.",
          },
          {
            q: "Untuk memperbesar kapasitansi total, kapasitor sebaiknya disusun?",
            options: ["Seri", "Paralel", "Bergantian", "Tunggal"],
            answer: 1,
            explain: "Susunan paralel menjumlahkan kapasitansi, sehingga totalnya membesar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "energi-kapasitor",
    levelId: "kapasitor",
    order: 4,
    title: "Energi Tersimpan dalam Kapasitor",
    summary:
      "Koil pengapian mobil menyalakan busi dari kapasitor kecil yang menyimpan dan melepas energi berulang kali. Kita amati dulu bagaimana energi tertimbun, baru rumusnya kita rangkum di akhir.",
    durationMin: 14,
    tags: ["listrik statis", "kapasitor", "energi", "muatan"],
    blocks: [
      {
        type: "paragraph",
        html: "Pada mesin mobil bensin, sistem pengapian menyimpan energi listrik di kapasitor lalu melepasnya ke busi untuk memantik percikan ribuan kali per menit. Energi yang tersimpan itu tidak datang seketika, melainkan menumpuk perlahan seiring kapasitor terisi. Sebelum menuliskan rumus, ayo amati dulu bagaimana energi menimbun saat kita mengisi kapasitor.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Muatan, Tegangan, dan Energi",
        caption:
          "Mengisi kapasitor berarti mendorong muatan demi muatan, dan tiap dorongan menambah energi tersimpan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Saat kapasitor masih kosong, mendorong muatan pertama mudah karena tegangannya nol. Tapi makin penuh, tegangan naik dan tiap muatan baru makin sulit didorong. Energi total bukan sekadar muatan dikali tegangan penuh, melainkan kira-kira <strong>setengahnya</strong>, karena tegangan naik dari nol secara bertahap. Belum ada rumus, tetapi kita sudah mencium kehadiran faktor setengah itu.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Energi naik secara kuadrat",
        html: "Energi tersimpan dalam kapasitor sebanding dengan <strong>kuadrat tegangan</strong>. Menggandakan tegangan bukan menggandakan energi, melainkan melipatempatkannya. Itu sebabnya kapasitor bertegangan tinggi bisa menyimpan energi yang sangat besar dan berbahaya meski ukurannya kecil.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Energi Tersimpan pada Kapasitor 100 µF terhadap Tegangan",
        unit: "mJ",
        source: "perhitungan W = ½·C·V² dengan C = 100 µF",
        note: "Tidak seperti muatan yang naik lurus, energi naik secara kuadrat terhadap tegangan. Menggandakan tegangan dari 20 ke 40 volt melipatempatkan energi dari 20 ke 80 mJ.",
        data: [
          { label: "V = 10 volt", value: 5, color: "#facc15" },
          { label: "V = 20 volt", value: 20, color: "#a3e635" },
          { label: "V = 30 volt", value: 45, color: "#4ade80" },
          { label: "V = 40 volt", value: 80, color: "#2dd4bf" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kapasitor 200 µF (2×10⁻⁴ F) diisi hingga tegangan 100 V. Berapa energi yang tersimpan?",
        answer: 1,
        tolerance: 0.02,
        suffix: " J",
        solution:
          "W = ½·C·V² = ½ × 2×10⁻⁴ × (100)² = ½ × 2×10⁻⁴ × 10⁴ = ½ × 2 = <strong>1 J</strong>.",
        hint: "Gunakan W = ½·C·V². Kuadratkan tegangan dulu, lalu kalikan dengan setengah kapasitansi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kapasitor menyimpan muatan 0,01 C pada tegangan 50 V. Berapa energi tersimpannya? (gunakan W = ½·Q·V)",
        answer: 0.25,
        tolerance: 0.01,
        suffix: " J",
        solution:
          "W = ½·Q·V = ½ × 0,01 × 50 = ½ × 0,5 = <strong>0,25 J</strong>. Bentuk ini setara dengan ½·C·V² karena Q = C·V.",
        hint: "Gunakan W = ½·Q·V. Kalikan muatan dengan tegangan, lalu ambil setengahnya.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap bentuk rumus energi kapasitor dengan keterangannya.",
        pairs: [
          { left: "W = ½·C·V²", right: "Pakai kapasitansi dan tegangan" },
          { left: "W = ½·Q·V", right: "Pakai muatan dan tegangan" },
          { left: "W = Q²/(2C)", right: "Pakai muatan dan kapasitansi" },
          { left: "Faktor ½", right: "Karena tegangan naik dari nol bertahap" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Koil Pengapian Mobil",
        html: "Sistem pengapian mobil lama memakai kapasitor (sering disebut kondensor) untuk menyimpan energi listrik lalu melepaskannya ke koil dan busi. Energi W = ½·C·V² yang dilepas dalam sekejap menghasilkan percikan bertegangan tinggi yang membakar campuran bensin dan udara. Mengatur kapasitansi dan tegangan menentukan kuat percikan. Tanpa memahami energi kapasitor, mesin tidak akan menyala mulus.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita tuliskan. Energi tersimpan dalam kapasitor: <strong>W = ½·C·V² = ½·Q·V = Q²/(2C)</strong>. Ketiga bentuk itu setara karena Q = C·V, jadi pilih yang paling cocok dengan data yang diketahui. Faktor <strong>½</strong> muncul karena tegangan naik bertahap dari nol selama pengisian. Rumus ini hanyalah ringkasan dari energi yang tadi kita lihat menimbun perlahan.",
      },
      {
        type: "takeaways",
        items: [
          "Energi kapasitor W = ½·C·V² = ½·Q·V = Q²/(2C); ketiganya setara.",
          "Faktor setengah muncul karena tegangan naik bertahap dari nol saat mengisi.",
          "Energi sebanding dengan kuadrat tegangan: dua kali tegangan, empat kali energi.",
          "Pilih bentuk rumus yang cocok dengan besaran yang diketahui.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Energi yang tersimpan dalam kapasitor dirumuskan?",
            options: ["W = C·V", "W = ½·C·V²", "W = Q·V²", "W = ½·Q²·V"],
            answer: 1,
            explain: "Energi kapasitor adalah W = ½·C·V².",
          },
          {
            q: "Jika tegangan kapasitor dijadikan dua kali lipat, energinya menjadi?",
            options: ["Dua kali", "Setengah", "Empat kali", "Tetap"],
            answer: 2,
            explain: "Karena energi sebanding V², dua kali tegangan berarti empat kali energi.",
          },
          {
            q: "Bentuk energi kapasitor yang memakai muatan dan tegangan adalah?",
            options: ["W = ½·C·V²", "W = ½·Q·V", "W = Q²/(2C)", "W = Q·V²"],
            answer: 1,
            explain: "W = ½·Q·V memakai muatan dan tegangan.",
          },
          {
            q: "Mengapa ada faktor setengah pada rumus energi kapasitor?",
            options: [
              "Karena ada dua keping",
              "Karena tegangan naik bertahap dari nol saat mengisi",
              "Karena muatan terbagi dua",
              "Karena kapasitansi setengah",
            ],
            answer: 1,
            explain: "Tegangan rata-rata selama pengisian adalah setengah tegangan akhir.",
          },
          {
            q: "Ketiga bentuk ½·C·V², ½·Q·V, dan Q²/(2C) setara karena?",
            options: ["Q = C/V", "Q = C·V", "V = Q·C", "C = Q·V"],
            answer: 1,
            explain: "Karena Q = C·V, ketiga bentuk rumus saling setara.",
          },
        ],
      },
    ],
  },
];
