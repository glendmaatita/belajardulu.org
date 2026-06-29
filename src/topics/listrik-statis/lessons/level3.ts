import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "energi-potensial-listrik",
    levelId: "potensial-listrik",
    order: 1,
    title: "Energi Potensial Listrik",
    summary:
      "Mendorong dua muatan sejenis agar saling mendekat terasa seperti menekan pegas: makin dekat, makin berat. Kita rasakan dulu energi yang tersimpan, baru rumusnya kita rangkum di akhir.",
    durationMin: 14,
    tags: ["listrik statis", "energi potensial", "usaha", "muatan"],
    blocks: [
      {
        type: "paragraph",
        html: "Coba dorong dua magnet dengan kutub sama agar bersentuhan. Makin dekat, makin kuat ia melawan, dan tanganmu menyimpan tenaga yang siap melontarkannya balik begitu dilepas. Dua muatan sejenis berperilaku persis sama: mendekatkannya menyimpan <strong>energi potensial listrik</strong>. Sebelum bertemu rumus, ayo rasakan dulu dari mana energi tersembunyi itu berasal.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Usaha dan Energi",
        caption:
          "Usaha yang kita lakukan melawan gaya tersimpan sebagai energi potensial, siap dilepas kembali.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Untuk mendekatkan dua muatan positif, kamu harus melakukan usaha melawan tolakannya. Usaha itu tidak hilang: ia tersimpan sebagai energi potensial. Lepaskan muatannya, dan energi itu berubah menjadi gerak saat keduanya saling menjauh. Belum ada rumus, tetapi kita sudah melihat bahwa <strong>posisi muatan menyimpan tenaga</strong>, seperti bukit menyimpan tenaga bagi bola di puncaknya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tanda energi potensial",
        html: "Energi potensial sepasang muatan bergantung pada jenisnya. Dua muatan <strong>sejenis</strong> menyimpan energi potensial positif (butuh usaha untuk mendekatkan, ingin saling menjauh). Dua muatan <strong>berlawanan</strong> punya energi potensial negatif (ingin saling mendekat). Acuannya: energi nol saat keduanya berjarak tak hingga.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Energi Potensial Dua Muatan 1 µC saat Jaraknya Berubah",
        unit: "joule",
        source: "perhitungan Ep = k·q₁·q₂/r dengan k = 9×10⁹",
        note: "Energi potensial turun sebagai 1/r, bukan 1/r². Makin dekat muatan sejenis, makin besar energi tersimpannya, dan ia memuncak tajam saat jarak mengecil.",
        data: [
          { label: "r = 0,1 m", value: 0.09, color: "#facc15" },
          { label: "r = 0,2 m", value: 0.045, color: "#a3e635" },
          { label: "r = 0,3 m", value: 0.03, color: "#4ade80" },
          { label: "r = 0,4 m", value: 0.0225, color: "#2dd4bf" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa energi potensial sepasang muatan 2 µC dan 3 µC yang terpisah 0,6 m? (k = 9×10⁹ N·m²/C²)",
        answer: 0.09,
        tolerance: 0.003,
        suffix: " J",
        solution:
          "Ep = k·q₁·q₂/r = 9×10⁹ × (2×10⁻⁶ × 3×10⁻⁶) / 0,6 = 9×10⁹ × 6×10⁻¹² / 0,6 = 54×10⁻³ / 0,6 = <strong>0,09 J</strong>.",
        hint: "Gunakan Ep = k·q₁·q₂/r. Perhatikan jaraknya tidak dikuadratkan.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Energi potensial dua muatan adalah Ep = k·q₁·q₂/r. Kelompokkan tiap pasangan sebagai berenergi potensial positif (sejenis) atau negatif (berlawanan).",
        buckets: ["Energi potensial positif", "Energi potensial negatif"],
        items: [
          { text: "Dua proton", bucket: "Energi potensial positif" },
          { text: "Proton dan elektron", bucket: "Energi potensial negatif" },
          { text: "Dua elektron", bucket: "Energi potensial positif" },
          { text: "Inti positif dan elektron", bucket: "Energi potensial negatif" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Reaksi Fusi di Inti Matahari",
        html: "Agar dua inti hidrogen (sama-sama positif) bisa bergabung menjadi helium, keduanya harus didorong sangat dekat melawan tolakan Coulomb yang menyimpan energi potensial raksasa. Hanya pada suhu jutaan derajat di inti Matahari, intinya bergerak cukup cepat untuk menembus 'bukit' energi potensial itu. Memahami energi potensial listrik menjelaskan mengapa bintang menyala dan mengapa fusi begitu sulit ditiru di Bumi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita tuliskan. Energi potensial sepasang muatan: <strong>Ep = k·q₁·q₂/r</strong>, dengan acuan nol di jarak tak hingga. Usaha yang kita lakukan untuk menyusun muatan sama dengan perubahan energi potensialnya: <strong>W = ΔEp</strong>. Tandanya positif untuk muatan sejenis dan negatif untuk berlawanan. Rumus ini hanyalah ringkasan dari 'tenaga tersimpan' yang tadi kita rasakan saat mendorong magnet.",
      },
      {
        type: "takeaways",
        items: [
          "Mendekatkan muatan sejenis menyimpan energi potensial listrik.",
          "Ep = k·q₁·q₂/r, turun sebagai 1/r dengan acuan nol di jarak tak hingga.",
          "Energi potensial positif untuk muatan sejenis, negatif untuk berlawanan.",
          "Usaha menyusun muatan sama dengan perubahan energi potensialnya, W = ΔEp.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Energi potensial sepasang muatan dirumuskan?",
            options: ["Ep = k·q₁·q₂/r²", "Ep = k·q₁·q₂/r", "Ep = k·q₁·q₂·r", "Ep = q₁·q₂/r"],
            answer: 1,
            explain: "Energi potensial memakai 1/r, jadi Ep = k·q₁·q₂/r.",
          },
          {
            q: "Energi potensial dua muatan sejenis bernilai?",
            options: ["Positif", "Negatif", "Nol", "Tak terdefinisi"],
            answer: 0,
            explain: "Hasil kali dua muatan sejenis positif, sehingga Ep positif.",
          },
          {
            q: "Acuan nol energi potensial listrik diambil saat kedua muatan?",
            options: ["Bersentuhan", "Berjarak tak hingga", "Berjarak 1 m", "Bermuatan nol"],
            answer: 1,
            explain: "Energi potensial diambil nol saat jarak tak hingga.",
          },
          {
            q: "Mendekatkan dua muatan positif berarti kita?",
            options: [
              "Melepas energi",
              "Melakukan usaha dan menyimpan energi",
              "Tidak melakukan apa-apa",
              "Menghapus muatan",
            ],
            answer: 1,
            explain: "Usaha melawan tolakan tersimpan sebagai energi potensial.",
          },
          {
            q: "Mengapa fusi inti butuh suhu sangat tinggi?",
            options: [
              "Agar inti mencair",
              "Agar inti cukup cepat menembus bukit energi potensial Coulomb",
              "Agar inti membesar",
              "Agar muatan hilang",
            ],
            answer: 1,
            explain: "Inti harus mengatasi energi potensial tolakan yang besar untuk bergabung.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "potensial-dan-energi-potensial-listrik",
    levelId: "potensial-listrik",
    order: 2,
    title: "Potensial Listrik",
    summary:
      "Petir adalah loncatan muatan akibat beda potensial yang sangat besar. Kita mulai dari kisah petir, baru rumus potensial dan energi potensial listrik kita rangkum di akhir.",
    durationMin: 15,
    tags: ["listrik statis", "potensial", "energi potensial", "tegangan"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat awan badai menumpuk muatan negatif di bagian bawahnya, terbentuk <strong>beda potensial</strong> jutaan volt antara awan dan tanah. Ketika sudah terlalu besar untuk ditahan udara, muatan meloncat: itulah petir. Sebelum menuliskan rumus potensial, ayo pahami dulu mengapa 'beda ketinggian listrik' bisa membuat muatan bergerak.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Tegangan sebagai Pendorong Muatan",
        caption:
          "Potensial listrik adalah ide yang sama dengan tegangan: seberapa besar 'tekanan' yang mendorong muatan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan bola di puncak bukit. Ia punya energi potensial gravitasi dan akan menggelinding turun jika dilepas. Muatan listrik mirip: di dekat muatan positif, sebuah muatan uji positif berada di 'bukit listrik' yang tinggi dan ingin meluncur menjauh. <strong>Potensial listrik</strong> adalah ketinggian bukit itu, dan <strong>energi potensial</strong> adalah tenaga yang tersimpan karena posisinya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Potensial vs energi potensial",
        html: "<strong>Potensial (V)</strong> adalah energi per satuan muatan di suatu titik, bersatuan volt (V = J/C). <strong>Energi potensial (Ep)</strong> adalah energi total sepasang muatan. Beda potensial inilah yang biasa kita sebut tegangan.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Potensial Listrik di Sekitar Muatan 1 µC terhadap Jarak",
        unit: "volt",
        source: "perhitungan V = k·q/r dengan k = 9×10⁹",
        note: "Berbeda dengan medan yang turun sebagai 1/r², potensial turun lebih landai sebagai 1/r. Menjauh dua kali lipat hanya menyetengahkan potensial.",
        data: [
          { label: "r = 1 m", value: 9000, color: "#facc15" },
          { label: "r = 2 m", value: 4500, color: "#a3e635" },
          { label: "r = 3 m", value: 3000, color: "#4ade80" },
          { label: "r = 4 m", value: 2250, color: "#2dd4bf" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa potensial listrik pada jarak 0,9 m dari muatan 1 µC (1×10⁻⁶ C)? (gunakan k = 9×10⁹ N·m²/C²)",
        answer: 10000,
        tolerance: 100,
        suffix: " V",
        solution:
          "V = k·q/r = 9×10⁹ × 1×10⁻⁶ / 0,9 = 9×10³ / 0,9 = <strong>10.000 V</strong>. Perhatikan: jaraknya tidak dikuadratkan, karena potensial memakai 1/r, bukan 1/r².",
        hint: "Gunakan V = k·q/r. Jangan kuadratkan jaraknya.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap besaran dengan rumus atau satuannya.",
        pairs: [
          { left: "Potensial listrik", right: "V = k·q/r" },
          { left: "Energi potensial", right: "Ep = k·q₁·q₂/r" },
          { left: "Satuan potensial", right: "Volt (J/C)" },
          { left: "Beda potensial", right: "Tegangan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Generator Van de Graaff",
        html: "Generator Van de Graaff di museum sains menumpuk muatan di bola logamnya hingga potensialnya mencapai ratusan ribu volt. Karena seluruh permukaan bola berada pada potensial sama, muatan tersebar merata di luar. Saat seseorang menyentuhnya, rambut yang ikut bermuatan saling menolak dan berdiri. Potensial tinggi inilah yang menyimpan 'tekanan listrik' siap memercik. Memahami potensial menjelaskan kenapa percikannya bisa sepanjang itu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Baru sekarang kita rangkum. Potensial sebuah muatan: <strong>V = k·q/r</strong>. Energi potensial sepasang muatan: <strong>Ep = k·q₁·q₂/r</strong>. Hubungan keduanya: <strong>Ep = q·V</strong>, energi potensial sebuah muatan q di titik berpotensial V. Ketiganya hanyalah cara menuliskan 'bukit listrik' yang tadi kita bayangkan, dan petir adalah saat muatan akhirnya meluncur menuruni bukit itu.",
      },
      {
        type: "takeaways",
        items: [
          "Potensial listrik adalah energi per satuan muatan, bersatuan volt (J/C).",
          "Potensial sebuah muatan V = k·q/r, turun sebagai 1/r (lebih landai daripada medan).",
          "Energi potensial sepasang muatan Ep = k·q₁·q₂/r, positif untuk muatan sejenis.",
          "Energi potensial sebuah muatan di titik berpotensial V adalah Ep = q·V.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Satuan potensial listrik adalah?",
            options: ["Newton", "Volt", "Ampere", "Coulomb"],
            answer: 1,
            explain: "Potensial bersatuan volt, yaitu joule per coulomb.",
          },
          {
            q: "Potensial listrik satu muatan dirumuskan?",
            options: ["V = k·q/r²", "V = k·q/r", "V = k·q·r", "V = q/r"],
            answer: 1,
            explain: "Potensial memakai 1/r, jadi V = k·q/r, tanpa pengkuadratan jarak.",
          },
          {
            q: "Energi potensial sebuah muatan q di titik berpotensial V adalah?",
            options: ["Ep = q/V", "Ep = V/q", "Ep = q·V", "Ep = q·V²"],
            answer: 2,
            explain: "Karena V energi per satuan muatan, maka Ep = q·V.",
          },
          {
            q: "Dibanding medan listrik, potensial listrik turun?",
            options: [
              "Lebih cepat (1/r²)",
              "Lebih landai (1/r)",
              "Sama persis",
              "Tidak turun",
            ],
            answer: 1,
            explain: "Potensial turun sebagai 1/r, lebih landai daripada medan yang 1/r².",
          },
          {
            q: "Petir terjadi karena?",
            options: [
              "Awan bergesekan dengan matahari",
              "Beda potensial sangat besar antara awan dan tanah",
              "Suhu udara naik",
              "Angin kencang",
            ],
            answer: 1,
            explain: "Beda potensial jutaan volt membuat muatan meloncat melalui udara.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "beda-potensial-dan-usaha",
    levelId: "potensial-listrik",
    order: 3,
    title: "Beda Potensial dan Usaha",
    summary:
      "Baterai bertuliskan 9 volt sebenarnya menjanjikan sesuatu tentang energi. Kita pahami dulu apa arti 'volt' lewat usaha memindahkan muatan, baru rumusnya kita rangkum di akhir.",
    durationMin: 14,
    tags: ["listrik statis", "beda potensial", "usaha", "tegangan"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah baterai bertuliskan 9 V. Apa sebenarnya makna angka itu? Ia berjanji memberi 9 joule energi untuk tiap 1 coulomb muatan yang melewatinya. Beda potensial, atau tegangan, adalah ukuran <strong>usaha per satuan muatan</strong>. Sebelum menuliskan rumus, ayo pahami dulu mengapa memindahkan muatan butuh tenaga.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Tegangan sebagai Pendorong Muatan",
        caption:
          "Beda potensial menentukan berapa banyak energi yang diberikan ke tiap muatan yang lewat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan menaikkan ember air ke lantai atas: makin tinggi dan makin berat embernya, makin besar usahanya. Memindahkan muatan melewati beda potensial mirip begitu: makin besar muatan dan makin besar beda potensialnya, makin besar usaha yang dibutuhkan. Belum ada rumus, tetapi kita sudah menebak bahwa usaha bergantung pada <strong>muatan dikali beda potensial</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Beda potensial dan elektronvolt",
        html: "Beda potensial ΔV adalah selisih potensial antara dua titik, yaitu energi per satuan muatan untuk berpindah di antaranya. Satu volt berarti 1 joule tiap coulomb. Untuk muatan sekecil elektron, dipakai satuan <strong>elektronvolt (eV)</strong>: energi yang diperoleh satu elektron saat melewati beda potensial 1 volt, yaitu 1,6×10⁻¹⁹ J.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Usaha Memindahkan Muatan pada Beda Potensial 12 V",
        unit: "mJ",
        source: "perhitungan W = q·ΔV dengan ΔV = 12 volt",
        note: "Usaha berbanding lurus dengan muatan yang dipindahkan. Garis lurus ini menunjukkan beda potensial berperan sebagai kemiringan tetap: tiap tambahan muatan membutuhkan tambahan usaha yang tetap.",
        data: [
          { label: "q = 1 mC", value: 12, color: "#facc15" },
          { label: "q = 2 mC", value: 24, color: "#a3e635" },
          { label: "q = 3 mC", value: 36, color: "#4ade80" },
          { label: "q = 4 mC", value: 48, color: "#2dd4bf" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa usaha yang dibutuhkan untuk memindahkan muatan 0,5 C melalui beda potensial 9 V?",
        answer: 4.5,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "W = q·ΔV = 0,5 × 9 = <strong>4,5 J</strong>. Tiap coulomb memerlukan 9 joule, jadi 0,5 coulomb memerlukan 4,5 joule.",
        hint: "Gunakan W = q·ΔV. Kalikan muatan dengan beda potensialnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah elektron (q = 1,6×10⁻¹⁹ C) dipercepat melalui beda potensial 50 V. Berapa energi yang diperolehnya (dalam joule)?",
        answer: 8e-18,
        tolerance: 2e-19,
        suffix: " J",
        solution:
          "W = q·ΔV = 1,6×10⁻¹⁹ × 50 = <strong>8×10⁻¹⁸ J</strong>. Energi ini juga setara 50 eV, karena tiap volt memberi 1 eV pada satu elektron.",
        hint: "Gunakan W = q·ΔV dengan muatan elektron 1,6×10⁻¹⁹ C.",
      },
      {
        type: "case",
        title: "Studi Kasus: Tabung Sinar Katoda",
        html: "Televisi dan monitor lama menggunakan tabung sinar katoda: elektron ditembakkan dan dipercepat melewati beda potensial ribuan volt sebelum menumbuk layar dan memendarkan cahaya. Makin besar beda potensialnya, makin besar usaha W = q·ΔV yang diberikan, sehingga elektron makin cepat dan layar makin terang. Memahami beda potensial dan usaha memungkinkan insinyur mengatur kecerahan gambar dengan tepat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita tuliskan. Beda potensial: <strong>ΔV = W/q</strong>, sehingga usaha memindahkan muatan q adalah <strong>W = q·ΔV</strong>. Satu volt = 1 joule per coulomb. Untuk elektron, <strong>1 eV = 1,6×10⁻¹⁹ J</strong>. Rumus ini hanyalah cara rapi menulis 'tenaga per muatan' yang tadi kita rasakan saat menaikkan ember.",
      },
      {
        type: "takeaways",
        items: [
          "Beda potensial adalah usaha per satuan muatan: ΔV = W/q.",
          "Usaha memindahkan muatan adalah W = q·ΔV.",
          "Satu volt berarti 1 joule tiap coulomb.",
          "Elektronvolt adalah energi satu elektron melewati 1 volt, yaitu 1,6×10⁻¹⁹ J.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Usaha memindahkan muatan q melalui beda potensial ΔV adalah?",
            options: ["W = q/ΔV", "W = ΔV/q", "W = q·ΔV", "W = q²·ΔV"],
            answer: 2,
            explain: "Usaha listrik W = q·ΔV.",
          },
          {
            q: "Satu volt sama dengan?",
            options: [
              "1 joule per coulomb",
              "1 coulomb per joule",
              "1 newton per coulomb",
              "1 joule per detik",
            ],
            answer: 0,
            explain: "Volt didefinisikan sebagai joule per coulomb.",
          },
          {
            q: "Beda potensial didefinisikan sebagai?",
            options: [
              "Usaha dikali muatan",
              "Usaha per satuan muatan",
              "Muatan per usaha",
              "Muatan dikali jarak",
            ],
            answer: 1,
            explain: "ΔV = W/q, yaitu usaha per satuan muatan.",
          },
          {
            q: "Satu elektronvolt setara dengan?",
            options: ["1,6×10⁻¹⁹ J", "9×10⁹ J", "1 J", "8,85×10⁻¹² J"],
            answer: 0,
            explain: "1 eV = 1,6×10⁻¹⁹ J, energi elektron melewati beda potensial 1 volt.",
          },
          {
            q: "Jika beda potensial dijadikan dua kali lipat, usaha memindahkan muatan yang sama menjadi?",
            options: ["Setengah", "Tetap", "Dua kali lipat", "Empat kali lipat"],
            answer: 2,
            explain: "Karena W = q·ΔV, dua kali ΔV berarti dua kali usaha.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hubungan-medan-dan-potensial",
    levelId: "potensial-listrik",
    order: 4,
    title: "Hubungan Medan dan Potensial",
    summary:
      "Peta kontur menunjukkan ketinggian, dan air selalu mengalir tegak lurus garis kontur menuruni lereng tercuram. Medan dan potensial berhubungan persis seperti itu, dan rumusnya muncul di akhir.",
    durationMin: 14,
    tags: ["listrik statis", "medan listrik", "potensial", "ekuipotensial"],
    blocks: [
      {
        type: "paragraph",
        html: "Lihat peta kontur sebuah bukit: garis-garisnya menghubungkan titik dengan ketinggian sama, dan air mengalir tegak lurus garis itu menuruni lereng paling curam. Potensial listrik adalah 'ketinggian', dan medan listrik adalah 'arah lereng tercuram'. Sebelum menuliskan rumus, ayo lihat dulu bagaimana keduanya saling terhubung.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Arah Gaya dan Lereng",
        caption:
          "Sama seperti bola menggelinding menuruni lereng, muatan terdorong dari potensial tinggi ke rendah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Letakkan dua keping logam sejajar dan beri beda potensial. Di antara keping, potensial turun merata dari keping positif ke negatif, dan medannya seragam menunjuk dari potensial tinggi ke rendah. Makin rapat 'garis kontur' potensial, makin curam lerengnya, makin kuat medannya. Belum ada rumus, tetapi kita sudah melihat <strong>medan menunjuk arah penurunan potensial tercepat</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Permukaan ekuipotensial",
        html: "Permukaan dengan potensial sama disebut <strong>ekuipotensial</strong>, seperti garis kontur pada peta. Garis medan listrik selalu <strong>tegak lurus</strong> permukaan ekuipotensial dan menunjuk dari potensial tinggi ke rendah. Memindahkan muatan di sepanjang permukaan ekuipotensial tidak memerlukan usaha, karena potensialnya tidak berubah.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kuat Medan antara Dua Keping pada Tegangan Tetap 12 V",
        unit: "N/C",
        source: "perhitungan E = V/d dengan V = 12 volt",
        note: "Dengan tegangan tetap, makin dekat kedua keping makin kuat medannya. Medan berbanding terbalik dengan jarak: mendekatkan keping menumpuk 'kontur' potensial sehingga lerengnya menjadi curam.",
        data: [
          { label: "d = 0,02 m", value: 600, color: "#facc15" },
          { label: "d = 0,03 m", value: 400, color: "#a3e635" },
          { label: "d = 0,04 m", value: 300, color: "#4ade80" },
          { label: "d = 0,06 m", value: 200, color: "#2dd4bf" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dua keping sejajar diberi beda potensial 200 V dan terpisah 0,05 m. Berapa kuat medan listrik seragam di antaranya?",
        answer: 4000,
        tolerance: 50,
        suffix: " N/C",
        solution:
          "E = V/d = 200 / 0,05 = <strong>4000 N/C</strong>. Pada medan seragam antara dua keping, kuat medan adalah beda potensial dibagi jarak antar keping.",
        hint: "Gunakan E = V/d untuk medan seragam antara dua keping.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada medan seragam 5000 N/C, sebuah muatan dipindahkan sejauh 0,02 m searah medan. Berapa beda potensial yang dilaluinya?",
        answer: 100,
        tolerance: 2,
        suffix: " V",
        solution:
          "ΔV = E·d = 5000 × 0,02 = <strong>100 V</strong>. Beda potensial sama dengan kuat medan dikali jarak sepanjang arah medan.",
        hint: "Balik rumusnya: dari E = V/d menjadi V = E·d.",
      },
      {
        type: "case",
        title: "Studi Kasus: Membran Sel Saraf",
        html: "Membran sel saraf hanya setebal sekitar 5 nanometer, tetapi menahan beda potensial sekitar 70 milivolt antara dalam dan luar sel. Dengan E = V/d, medan di dalam membran mencapai sekitar 14 juta volt per meter, lebih kuat dari udara menjelang petir. Medan sekuat ini mengatur pintu-pintu ion yang membuat sinyal saraf merambat. Hubungan E dan V menjelaskan cara otak mengirim pesan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita tuliskan. Untuk medan seragam, <strong>E = V/d</strong>, dan sebaliknya <strong>V = E·d</strong>. Secara umum, medan menunjuk ke arah penurunan potensial tercuram, ditulis <strong>E = −ΔV/Δd</strong>. Garis medan selalu tegak lurus permukaan ekuipotensial. Rumus ini hanyalah cara menulis 'lereng' dari peta kontur potensial yang tadi kita bayangkan.",
      },
      {
        type: "takeaways",
        items: [
          "Medan listrik menunjuk dari potensial tinggi ke rendah, ke arah penurunan tercuram.",
          "Untuk medan seragam, E = V/d dan sebaliknya V = E·d.",
          "Permukaan ekuipotensial menghubungkan titik berpotensial sama; garis medan tegak lurus padanya.",
          "Memindahkan muatan sepanjang permukaan ekuipotensial tidak memerlukan usaha.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Untuk medan listrik seragam antara dua keping, hubungannya adalah?",
            options: ["E = V·d", "E = V/d", "E = d/V", "E = V/d²"],
            answer: 1,
            explain: "Medan seragam E = V/d, beda potensial dibagi jarak antar keping.",
          },
          {
            q: "Garis medan listrik terhadap permukaan ekuipotensial selalu?",
            options: ["Sejajar", "Tegak lurus", "Membentuk 45°", "Berimpit"],
            answer: 1,
            explain: "Garis medan selalu tegak lurus permukaan ekuipotensial.",
          },
          {
            q: "Memindahkan muatan sepanjang permukaan ekuipotensial memerlukan usaha?",
            options: ["Sangat besar", "Nol", "Tergantung muatan", "Tak terhingga"],
            answer: 1,
            explain: "Karena potensial tidak berubah, usaha W = q·ΔV = 0.",
          },
          {
            q: "Arah medan listrik adalah dari potensial?",
            options: [
              "Rendah ke tinggi",
              "Tinggi ke rendah",
              "Sama ke sama",
              "Tidak menentu",
            ],
            answer: 1,
            explain: "Medan menunjuk dari potensial tinggi ke rendah.",
          },
          {
            q: "Pada tegangan tetap, mendekatkan dua keping membuat medannya?",
            options: ["Melemah", "Menguat", "Tetap", "Nol"],
            answer: 1,
            explain: "Karena E = V/d, jarak lebih kecil membuat medan lebih kuat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "potensial-beberapa-muatan",
    levelId: "potensial-listrik",
    order: 5,
    title: "Potensial oleh Beberapa Muatan",
    summary:
      "Menjumlahkan medan dari banyak muatan merepotkan karena harus memperhatikan arah. Potensial jauh lebih ramah: cukup dijumlah dengan tanda. Kita amati dulu kemudahannya, baru rumusnya kita rangkum di akhir.",
    durationMin: 14,
    tags: ["listrik statis", "potensial", "superposisi", "skalar"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat menghitung medan dari banyak muatan, kita harus menguraikan tiap medan ke sumbu x dan y, lalu menjumlahkannya sebagai vektor. Melelahkan. Tetapi potensial listrik adalah besaran <strong>skalar</strong>: ia tidak punya arah, jadi cukup dijumlah biasa dengan memperhatikan tanda muatannya. Sebelum menuliskan rumus, ayo amati dulu betapa mudahnya menjumlahkan potensial.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Tegangan sebagai Angka",
        caption:
          "Potensial, seperti tegangan, hanyalah sebuah angka di tiap titik. Tanpa arah, ia jauh lebih mudah dijumlahkan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tempatkan dua muatan +q dan -q sama besar, sama jarak dari sebuah titik P. Medannya tidak nol di sana karena arahnya berbeda. Tetapi potensialnya? Yang positif menyumbang +V, yang negatif menyumbang -V, dan keduanya saling <strong>meniadakan menjadi nol</strong>. Belum ada rumus, tetapi kita sudah melihat potensial cukup dijumlah dengan tanda, tanpa repot arah.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Superposisi skalar",
        html: "Potensial di sebuah titik akibat banyak muatan adalah <strong>jumlah aljabar</strong> potensial tiap muatan: hitung V = k·q/r untuk tiap muatan, ikut sertakan <strong>tanda</strong> muatannya (positif atau negatif), lalu jumlahkan. Tidak ada sudut, tidak ada penguraian vektor. Inilah keunggulan potensial dibanding medan.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Potensial di Titik Tengah untuk Berbagai Pasangan Muatan (0,1 m dari tiap muatan)",
        unit: "kV",
        source: "perhitungan V = k·q/r dengan k = 9×10⁹, r = 0,1 m",
        note: "Dua muatan +5 µC saling menguatkan menjadi 900 kV. Pasangan +5 dan -5 µC saling meniadakan menjadi nol. Tanda muatan menentukan apakah potensial menambah atau mengurangi.",
        data: [
          { label: "+5 & +5 µC", value: 900, color: "#facc15" },
          { label: "+5 & -3 µC", value: 180, color: "#a3e635" },
          { label: "+5 & -5 µC", value: 0, color: "#2dd4bf" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Titik P berjarak 0,3 m dari muatan +3 µC dan 0,6 m dari muatan -3 µC. Berapa potensial total di P? (k = 9×10⁹ N·m²/C²)",
        answer: 45000,
        tolerance: 500,
        suffix: " V",
        solution:
          "V₁ = k·q₁/r₁ = 9×10⁹ × 3×10⁻⁶ / 0,3 = 90.000 V. V₂ = k·q₂/r₂ = 9×10⁹ × (−3×10⁻⁶) / 0,6 = −45.000 V. Potensial total = 90.000 + (−45.000) = <strong>45.000 V</strong>.",
        hint: "Hitung V tiap muatan dengan V = k·q/r, ikutkan tanda muatan, lalu jumlahkan biasa.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Tentukan apakah tiap muatan menambah (potensial positif) atau mengurangi (potensial negatif) potensial total di sebuah titik P.",
        buckets: ["Menambah potensial (positif)", "Mengurangi potensial (negatif)"],
        items: [
          { text: "Muatan +5 µC", bucket: "Menambah potensial (positif)" },
          { text: "Muatan -3 µC", bucket: "Mengurangi potensial (negatif)" },
          { text: "Proton di dekat P", bucket: "Menambah potensial (positif)" },
          { text: "Elektron di dekat P", bucket: "Mengurangi potensial (negatif)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap pernyataan dengan sifat potensial atau medan yang tepat.",
        pairs: [
          { left: "Potensial listrik", right: "Skalar, dijumlah dengan tanda" },
          { left: "Medan listrik", right: "Vektor, dijumlah dengan arah" },
          { left: "Dua muatan +q dan -q sama jarak dari P", right: "Potensial total nol" },
          { left: "Dua muatan +q sama jarak dari P", right: "Potensial saling menguatkan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Titik Berpotensial Nol",
        html: "Muatan +4 µC dan -8 µC terpisah 0,3 m. Di mana di antara keduanya potensialnya nol? Misalkan titik itu berjarak x dari muatan +4 µC. Syarat V = 0: k·4/x = k·8/(0,3 − x), sehingga 4(0,3 − x) = 8x, lalu 1,2 = 12x, dan x = <strong>0,1 m</strong> dari muatan +4 µC. Karena potensial skalar, mencari titik nol cukup menyamakan dua angka, tanpa memikirkan arah sama sekali.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita tuliskan. Potensial total: <strong>V<sub>total</sub> = k·q₁/r₁ + k·q₂/r₂ + k·q₃/r₃ + …</strong>, yaitu jumlah aljabar dengan tanda muatan ikut diperhitungkan. Tidak ada penguraian vektor karena potensial adalah <strong>skalar</strong>. Energi sebuah muatan q di titik itu adalah Ep = q·V<sub>total</sub>. Rumus ini hanyalah ringkasan dari penjumlahan sederhana yang tadi kita amati.",
      },
      {
        type: "takeaways",
        items: [
          "Potensial adalah skalar, jadi dijumlahkan biasa dengan memperhatikan tanda muatan.",
          "V_total = k·q₁/r₁ + k·q₂/r₂ + …, tanpa penguraian vektor.",
          "Muatan positif menambah potensial, muatan negatif menguranginya.",
          "Di titik tengah antara +q dan -q sama besar, potensial total nol meski medannya tidak nol.",
          "Menjumlahkan potensial jauh lebih mudah daripada menjumlahkan medan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Potensial total di sebuah titik oleh beberapa muatan dihitung dengan?",
            options: [
              "Menjumlahkan sebagai vektor",
              "Menjumlahkan aljabar dengan tanda muatan",
              "Mengambil yang terbesar",
              "Menguraikan ke sumbu x dan y",
            ],
            answer: 1,
            explain: "Potensial skalar, jadi cukup dijumlah dengan memperhatikan tanda.",
          },
          {
            q: "Mengapa menjumlahkan potensial lebih mudah daripada medan?",
            options: [
              "Karena potensial selalu nol",
              "Karena potensial skalar dan tidak punya arah",
              "Karena medan tidak nyata",
              "Karena potensial selalu positif",
            ],
            answer: 1,
            explain: "Potensial skalar sehingga tidak perlu penguraian arah.",
          },
          {
            q: "Di titik tengah antara +q dan -q sama besar, potensial totalnya?",
            options: ["Maksimum", "Nol", "Tak terhingga", "Negatif besar"],
            answer: 1,
            explain: "Sumbangan +V dan -V sama besar saling meniadakan menjadi nol.",
          },
          {
            q: "Sebuah muatan negatif menyumbang potensial yang?",
            options: ["Positif", "Negatif", "Nol", "Tak tentu"],
            answer: 1,
            explain: "Tanda muatan ikut diperhitungkan, jadi muatan negatif memberi V negatif.",
          },
          {
            q: "Titik P berjarak 0,3 m dari +2 µC dan 0,3 m dari +2 µC lainnya. Potensial total (k = 9×10⁹)?",
            options: ["60.000 V", "120.000 V", "0 V", "30.000 V"],
            answer: 1,
            explain: "Tiap muatan memberi 60.000 V; karena keduanya positif, totalnya 120.000 V.",
          },
        ],
      },
    ],
  },
];
