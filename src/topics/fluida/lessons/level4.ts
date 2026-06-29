import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "viskositas-stokes",
    levelId: "fluida-nyata",
    order: 1,
    title: "Viskositas dan Hukum Stokes",
    summary:
      "Kenapa kelereng jatuh pelan di madu tapi cepat di air, dan apa yang membuat tetes hujan tak terus menambah kecepatan? Kita amati dulu, baru rumus Stokes muncul.",
    durationMin: 15,
    tags: ["fluida nyata", "viskositas", "stokes", "kecepatan terminal"],
    blocks: [
      {
        type: "paragraph",
        html: "Jatuhkan kelereng ke dalam gelas berisi madu. Ia turun perlahan, seakan malas, jauh lebih lambat daripada di air. Madu seperti menahan setiap gerak. Sifat 'enggan mengalir' inilah yang membedakan fluida nyata dari fluida ideal. Sebelum membuka rumusnya, ayo rasakan dulu apa itu <strong>kekentalan</strong> dan bagaimana ia menahan benda yang bergerak.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Fluida yang Menahan Gerak",
        caption: "Viskositas adalah gesekan dalam fluida yang melawan gerak relatif antar lapisannya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Aduk segelas air, lalu aduk segelas madu. Madu jauh lebih sulit diaduk: lapisan-lapisannya saling menempel dan menyeret. Itulah <strong>viskositas</strong>, gesekan dalam fluida. Saat sebuah bola bergerak menembus fluida kental, fluida menahannya dengan gaya gesek. Makin kental fluidanya, makin besar bola, dan makin cepat geraknya, makin besar gaya penahan itu. Akhirnya bola yang jatuh mencapai kecepatan tetap saat gaya penahan menyamai beratnya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kecepatan terminal",
        html: "Benda yang jatuh dalam fluida mula-mula dipercepat gravitasi. Tetapi makin cepat ia bergerak, makin besar gaya gesek viskos yang melawannya. Pada satu titik, gaya ke bawah dan gaya penahan seimbang, sehingga benda bergerak dengan laju tetap yang disebut <strong>kecepatan terminal</strong>. Itulah mengapa tetes hujan tidak terus menambah kecepatan dan tetap aman saat menyentuh kita.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya Gesek Stokes vs Kecepatan Bola",
        unit: "newton (N)",
        source: "hitungan F = 6 x pi x eta x r x v, dengan 6 x pi x eta x r = 0,1 N per (m/s)",
        note: "Pada bola dan fluida tertentu, gaya gesek viskos tumbuh lurus terhadap kecepatan. Makin cepat bergerak, makin besar tahanannya.",
        data: [
          { label: "0,5 m/s", value: 0.05, color: "#60a5fa" },
          { label: "1 m/s", value: 0.1, color: "#818cf8" },
          { label: "2 m/s", value: 0.2, color: "#a78bfa" },
          { label: "4 m/s", value: 0.4, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bola berjari-jari 0,01 m bergerak 2 m/s dalam oli berviskositas 0,8 Pa.s. Berapa gaya gesek Stokes yang menahannya? (F = 6 x pi x eta x r x v, pakai pi = 3,14)",
        answer: 0.3,
        tolerance: 0.02,
        suffix: " N",
        solution:
          "F = 6 x 3,14 x 0,8 x 0,01 x 2 = 6 x 3,14 x 0,016 = <strong>0,30 N</strong> (dibulatkan). Gaya penahan ini berbanding lurus dengan viskositas, jari-jari, dan kecepatan.",
        hint: "Kalikan berurutan 6, pi, viskositas, jari-jari, dan kecepatan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bola jatuh dalam fluida dan mencapai kecepatan terminal saat gaya geseknya 0,5 N. Berapa besar gaya berat efektif (berat dikurangi gaya apung) bola itu pada saat itu?",
        answer: 0.5,
        tolerance: 0.01,
        suffix: " N",
        solution:
          "Pada kecepatan terminal, gaya seimbang: berat efektif = gaya gesek = <strong>0,5 N</strong>. Tidak ada percepatan, jadi gaya ke bawah persis ditandingi gaya gesek viskos.",
        hint: "Pada kecepatan terminal, gaya total nol, jadi gaya ke bawah sama dengan gaya gesek.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap zat cair berdasarkan viskositasnya.",
        buckets: ["Viskositas tinggi (kental)", "Viskositas rendah (encer)"],
        items: [
          { text: "Madu", bucket: "Viskositas tinggi (kental)" },
          { text: "Air", bucket: "Viskositas rendah (encer)" },
          { text: "Oli mesin", bucket: "Viskositas tinggi (kental)" },
          { text: "Bensin", bucket: "Viskositas rendah (encer)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Tetes Hujan Tidak Mematikan",
        html: "Awan terbentuk pada ketinggian ribuan meter. Jika tetes hujan jatuh bebas tanpa hambatan, saat tiba di tanah kecepatannya bisa ratusan meter per detik dan akan melukai siapa pun yang terkena. Kenyataannya hujan terasa lembut. Penyebabnya viskositas udara. Begitu tetes air dipercepat, gaya gesek viskos udara cepat membesar mengikuti kecepatan, sampai menyamai berat tetes. Tetes lalu jatuh dengan kecepatan terminal yang relatif kecil, hanya beberapa meter per detik. Tetes kecil bahkan jatuh lebih pelan karena perbandingan luas permukaannya besar. Berkat hukum Stokes, hujan menjadi berkah, bukan peluru.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan <strong>Hukum Stokes</strong> untuk bola dalam fluida kental: <strong>F = 6 x pi x eta x r x v</strong>, dengan eta viskositas, r jari-jari bola, dan v kecepatan. Gaya gesek tumbuh lurus terhadap ketiganya. Pada kecepatan terminal, gaya ini menyeimbangkan berat efektif, menghasilkan <strong>v_terminal = 2 x r^2 x (rho_benda - rho_fluida) x g / (9 x eta)</strong>. Fluida yang lebih kental menahan lebih kuat sehingga kecepatan terminal lebih kecil.",
      },
      {
        type: "takeaways",
        items: [
          "Viskositas (eta) adalah gesekan dalam fluida yang melawan gerak relatif lapisannya.",
          "Hukum Stokes: gaya gesek bola F = 6 x pi x eta x r x v.",
          "Gaya gesek viskos tumbuh lurus terhadap kecepatan benda.",
          "Kecepatan terminal tercapai saat gaya gesek menyamai berat efektif benda.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Viskositas sebuah fluida menggambarkan?",
            options: [
              "Massa jenisnya",
              "Kekentalan atau keengganannya mengalir",
              "Tekanannya",
              "Volumenya",
            ],
            answer: 1,
            explain: "Viskositas adalah ukuran kekentalan, seberapa enggan fluida mengalir.",
          },
          {
            q: "Menurut hukum Stokes, gaya gesek pada bola sebanding dengan?",
            options: [
              "Kuadrat kecepatan",
              "Kecepatan bola",
              "Akar kecepatan",
              "Massa bola",
            ],
            answer: 1,
            explain: "F = 6 x pi x eta x r x v, jadi gaya gesek sebanding langsung dengan kecepatan.",
          },
          {
            q: "Kecepatan terminal tercapai ketika?",
            options: [
              "Benda berhenti total",
              "Gaya gesek menyamai berat efektif sehingga percepatan nol",
              "Gravitasi hilang",
              "Fluida menguap",
            ],
            answer: 1,
            explain: "Pada kecepatan terminal gaya seimbang, tidak ada percepatan lagi.",
          },
          {
            q: "Bola jatuh dalam fluida lebih kental akan punya kecepatan terminal?",
            options: ["Lebih besar", "Lebih kecil", "Sama", "Tak terhingga"],
            answer: 1,
            explain: "Viskositas besar menahan lebih kuat, jadi kecepatan terminal lebih kecil.",
          },
          {
            q: "Bola r 0,01 m, v 1 m/s, eta 0,5 Pa.s. Gaya Stokes (pi 3,14) kira-kira?",
            options: ["0,094 N", "0,94 N", "9,4 N", "0,0094 N"],
            answer: 0,
            explain: "F = 6 x 3,14 x 0,5 x 0,01 x 1 = 0,0942 N, sekitar 0,094 N.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "aliran-laminar-turbulen",
    levelId: "fluida-nyata",
    order: 2,
    title: "Aliran Laminar dan Turbulen",
    summary:
      "Kenapa asap dupa mula-mula naik lurus rapi lalu mendadak berolak kacau? Kita amati dulu, baru bilangan Reynolds yang memilah dua jenis aliran muncul.",
    durationMin: 14,
    tags: ["fluida nyata", "laminar", "turbulen", "reynolds"],
    blocks: [
      {
        type: "paragraph",
        html: "Nyalakan dupa di ruang tenang. Asapnya naik sebagai benang lurus yang rapi, lalu pada ketinggian tertentu tiba-tiba pecah menjadi olakan yang berputar kacau. Air keran pun begitu: mengalir bening dan tenang saat pelan, berbuih dan bergolak saat deras. Sebelum melihat rumusnya, ayo amati dulu apa yang membedakan aliran yang <strong>rapi</strong> dari aliran yang <strong>kacau</strong>.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Dua Wajah Aliran Fluida",
        caption: "Aliran bisa berlapis rapi (laminar) atau bergolak campur aduk (turbulen).",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pada aliran <strong>laminar</strong>, fluida bergerak dalam lapisan-lapisan sejajar yang tidak saling menyilang, mulus dan dapat diramalkan. Pada aliran <strong>turbulen</strong>, lapisan-lapisan itu pecah menjadi pusaran dan olakan yang acak. Apa yang menentukan? Pertarungan antara kecenderungan fluida untuk meluncur deras (inersia) melawan kekentalan yang ingin menjaga keteraturan. Kecepatan tinggi, pipa lebar, dan fluida encer mendorong ke arah turbulen.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bilangan Reynolds",
        html: "Para insinyur merangkum pertarungan itu dalam satu angka tak bersatuan: <strong>bilangan Reynolds</strong>. Ia membandingkan pengaruh inersia terhadap viskositas. Reynolds kecil berarti viskositas menang, aliran laminar. Reynolds besar berarti inersia menang, aliran turbulen. Untuk aliran dalam pipa, batas kasarnya: di bawah 2300 laminar, di atas 4000 turbulen.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Bilangan Reynolds vs Kecepatan Aliran Air dalam Pipa",
        unit: "Reynolds (tak bersatuan)",
        source: "hitungan Re = rho x v x D / eta, air rho 1000, D 0,05 m, eta 0,001 Pa.s",
        note: "Pada pipa diameter 0,05 m, Reynolds naik lurus terhadap kecepatan. Aliran melewati ambang laminar (2300) di sekitar kecepatan 0,05 m/s.",
        data: [
          { label: "0,02 m/s", value: 1000, color: "#60a5fa" },
          { label: "0,05 m/s", value: 2500, color: "#818cf8" },
          { label: "0,1 m/s", value: 5000, color: "#a78bfa" },
          { label: "0,2 m/s", value: 10000, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Air (rho 1000 kg/m^3, eta 0,001 Pa.s) mengalir 0,04 m/s dalam pipa diameter 0,05 m. Berapa bilangan Reynolds-nya? (Re = rho x v x D / eta)",
        answer: 2000,
        tolerance: 50,
        suffix: "",
        solution:
          "Re = (1000 x 0,04 x 0,05) / 0,001 = 2 / 0,001 = <strong>2000</strong>. Karena di bawah 2300, alirannya masih laminar.",
        hint: "Kalikan rho, v, dan D, lalu bagi dengan viskositas.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan air dan pipa yang sama (rho 1000, D 0,05 m, eta 0,001), berapa kecepatan agar Reynolds tepat mencapai 4000 (ambang turbulen penuh)?",
        answer: 0.08,
        tolerance: 0.005,
        suffix: " m/s",
        solution:
          "Dari Re = rho x v x D / eta, maka v = Re x eta / (rho x D) = 4000 x 0,001 / (1000 x 0,05) = 4 / 50 = <strong>0,08 m/s</strong>. Di atas kecepatan ini aliran menjadi turbulen penuh.",
        hint: "Susun ulang rumus Reynolds menjadi v = Re x eta / (rho x D).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap keadaan sebagai cenderung laminar atau cenderung turbulen.",
        buckets: ["Cenderung laminar", "Cenderung turbulen"],
        items: [
          { text: "Asap dupa tepat di atas bara, mengalir pelan", bucket: "Cenderung laminar" },
          { text: "Air terjun yang menggemuruh", bucket: "Cenderung turbulen" },
          { text: "Madu menetes pelan dari sendok", bucket: "Cenderung laminar" },
          { text: "Air keran dibuka penuh hingga berbuih", bucket: "Cenderung turbulen" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Aliran Darah dan Bunyi yang Tak Diinginkan",
        html: "Dalam tubuh sehat, darah mengalir laminar di pembuluh, mulus dan senyap, sehingga bilangan Reynolds-nya rendah. Namun bila sebuah pembuluh menyempit karena timbunan lemak, darah harus melaju lebih cepat untuk lewat, dan setelah melewati penyempitan ia bergolak menjadi turbulen. Olakan itu menimbulkan getaran yang bisa didengar dokter lewat stetoskop sebagai bunyi desir, disebut bruit. Inilah salah satu tanda pembuluh tersumbat. Prinsip yang sama dipakai saat mengukur tekanan darah: bunyi yang muncul dan hilang di lengan adalah suara aliran yang berubah antara turbulen dan laminar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan <strong>bilangan Reynolds</strong>: <strong>Re = rho x v x D / eta</strong>, dengan rho massa jenis, v kecepatan, D diameter pipa, dan eta viskositas. Angka tanpa satuan ini memilah jenis aliran: <strong>Re &lt; 2300</strong> laminar, <strong>Re &gt; 4000</strong> turbulen, di antaranya transisi. Kecepatan tinggi, pipa lebar, dan fluida encer (eta kecil) menaikkan Reynolds menuju turbulen.",
      },
      {
        type: "takeaways",
        items: [
          "Aliran laminar berlapis rapi; aliran turbulen bergolak acak.",
          "Bilangan Reynolds Re = rho x v x D / eta memilah keduanya, tanpa satuan.",
          "Re di bawah 2300 laminar, di atas 4000 turbulen.",
          "Kecepatan tinggi dan viskositas rendah mendorong aliran ke turbulen.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Aliran laminar dicirikan oleh?",
            options: [
              "Pusaran acak",
              "Lapisan fluida sejajar yang rapi",
              "Buih dan gelembung",
              "Arah yang berubah-ubah",
            ],
            answer: 1,
            explain: "Laminar berarti fluida bergerak dalam lapisan sejajar yang mulus.",
          },
          {
            q: "Bilangan Reynolds membandingkan?",
            options: [
              "Tekanan dan suhu",
              "Pengaruh inersia terhadap viskositas",
              "Massa dan volume",
              "Gaya apung dan berat",
            ],
            answer: 1,
            explain: "Re membandingkan kecenderungan inersia melawan kekentalan fluida.",
          },
          {
            q: "Aliran dalam pipa dengan Re = 5000 tergolong?",
            options: ["Laminar", "Turbulen", "Diam", "Transisi awal"],
            answer: 1,
            explain: "Re di atas 4000 menandakan aliran turbulen.",
          },
          {
            q: "Air (rho 1000, eta 0,001) v 0,06 m/s di pipa D 0,05 m. Reynolds-nya?",
            options: ["300", "3000", "30.000", "30"],
            answer: 1,
            explain: "Re = 1000 x 0,06 x 0,05 / 0,001 = 3 / 0,001 = 3000.",
          },
          {
            q: "Manakah yang membuat aliran cenderung turbulen?",
            options: [
              "Kecepatan rendah",
              "Viskositas tinggi",
              "Kecepatan tinggi dan fluida encer",
              "Pipa sangat sempit",
            ],
            answer: 2,
            explain: "Kecepatan tinggi dan viskositas rendah menaikkan Reynolds ke arah turbulen.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tegangan-permukaan",
    levelId: "fluida-nyata",
    order: 3,
    title: "Tegangan Permukaan",
    summary:
      "Bagaimana serangga berjalan di atas air dan kenapa tetes air selalu membulat? Kita amati dulu kulit tak terlihat di permukaan air, baru rumus tegangan permukaan muncul.",
    durationMin: 14,
    tags: ["fluida nyata", "tegangan permukaan", "tetes", "deterjen"],
    blocks: [
      {
        type: "paragraph",
        html: "Seekor serangga air berjalan santai di atas kolam tanpa tenggelam. Setetes embun di daun membulat sempurna seperti mutiara. Sebuah jarum baja, walau lebih padat dari air, bisa dibuat mengapung jika diletakkan perlahan. Seolah ada selaput tipis tak terlihat menutupi permukaan air. Sebelum membuka rumusnya, ayo pahami dulu dari mana 'kulit' permukaan ini berasal.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Kulit Tak Terlihat di Permukaan",
        caption: "Molekul di permukaan zat cair saling menarik dan membentuk lapisan yang tegang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Di dalam zat cair, tiap molekul ditarik ke segala arah oleh tetangganya, sehingga gayanya seimbang. Tetapi molekul di <strong>permukaan</strong> tidak punya tetangga di atasnya, jadi tarikan ke samping dan ke bawah tidak terimbangi. Akibatnya permukaan cenderung menegang dan menyusut sekecil mungkin, seperti kulit elastis. Itulah mengapa tetes air membulat: bola adalah bentuk dengan permukaan terkecil untuk volume tertentu.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Deterjen memutus tegangan",
        html: "Sabun dan deterjen adalah zat penurun tegangan permukaan. Molekulnya menyelip di antara molekul air di permukaan dan melemahkan tarikan antar molekul air. Itulah sebabnya air sabun membasahi kain lebih baik, dan serangga yang tadinya bisa berjalan di air bersih akan tenggelam begitu air diberi setetes sabun.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tegangan Permukaan Berbagai Cairan (sekitar 20 derajat C)",
        unit: "milinewton per meter (mN/m)",
        source: "data tegangan permukaan terukur pada suhu kamar",
        note: "Raksa punya tegangan permukaan jauh lebih besar dari air, sedangkan air sabun dan alkohol jauh lebih kecil. Inilah kenapa raksa selalu membulat rapat.",
        data: [
          { label: "Alkohol", value: 22, color: "#60a5fa" },
          { label: "Air sabun", value: 25, color: "#818cf8" },
          { label: "Air", value: 72, color: "#a78bfa" },
          { label: "Raksa", value: 465, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Seutas kawat lurus sepanjang 0,05 m menyentuh permukaan air bertegangan permukaan 0,072 N/m. Berapa gaya tegangan permukaan yang menarik kawat di satu sisi? (F = gamma x L)",
        answer: 0.0036,
        tolerance: 0.0002,
        suffix: " N",
        solution:
          "F = gamma x L = 0,072 x 0,05 = <strong>0,0036 N</strong>. Gaya ini kecil, tetapi cukup menahan benda ringan seperti jarum atau kaki serangga.",
        hint: "Kalikan tegangan permukaan dengan panjang kontak kawat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah lapisan sabun (film) memiliki dua permukaan. Jika kawat penopang panjangnya 0,08 m dan tegangan permukaan 0,025 N/m, berapa total gaya tegangan permukaan yang bekerja? (gaya = 2 x gamma x L karena dua permukaan)",
        answer: 0.004,
        tolerance: 0.0002,
        suffix: " N",
        solution:
          "Karena film sabun punya dua sisi permukaan, F = 2 x gamma x L = 2 x 0,025 x 0,08 = <strong>0,004 N</strong>. Faktor 2 muncul karena film menghadap udara di dua sisinya.",
        hint: "Film sabun punya dua permukaan, jadi kalikan gaya dengan 2.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap peristiwa: disebabkan tegangan permukaan TINGGI atau RENDAH.",
        buckets: ["Tegangan permukaan tinggi", "Tegangan permukaan rendah"],
        items: [
          { text: "Serangga berjalan di air bersih", bucket: "Tegangan permukaan tinggi" },
          { text: "Tetes raksa membulat rapat", bucket: "Tegangan permukaan tinggi" },
          { text: "Air sabun membasahi kain dengan mudah", bucket: "Tegangan permukaan rendah" },
          { text: "Serangga tenggelam setelah air diberi sabun", bucket: "Tegangan permukaan rendah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Deterjen dan Daya Cuci",
        html: "Air murni sebenarnya pencuci yang buruk. Tegangan permukaannya yang tinggi membuat air enggan menyusup ke serat kain dan menggumpal menjadi tetes-tetes bulat di permukaan, alih-alih membasahi merata. Begitu deterjen ditambahkan, molekulnya memutus tarikan antar molekul air di permukaan, tegangan permukaan turun drastis, dan air menjadi 'lebih basah'. Ia kini bisa merembes ke sela-sela serat, mengangkat kotoran dan minyak. Itulah mengapa mencuci dengan air saja tidak cukup: yang dibutuhkan bukan lebih banyak air, melainkan air dengan tegangan permukaan yang lebih rendah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan. <strong>Tegangan permukaan</strong> gamma didefinisikan sebagai gaya per satuan panjang kontak: <strong>gamma = F / L</strong>, bersatuan N/m. Maka gaya yang menahan benda di permukaan adalah <strong>F = gamma x L</strong>, dan untuk selaput dengan dua permukaan (seperti film sabun) menjadi F = 2 x gamma x L. Permukaan zat cair selalu berusaha menyusut ke luas terkecil, itulah sebabnya tetes membulat.",
      },
      {
        type: "takeaways",
        items: [
          "Tegangan permukaan muncul karena molekul di permukaan tidak punya tetangga di atasnya.",
          "Tegangan permukaan gamma = F / L, gaya per satuan panjang kontak (N/m).",
          "Permukaan zat cair menyusut ke luas terkecil, sehingga tetes membulat.",
          "Deterjen menurunkan tegangan permukaan sehingga air membasahi lebih baik.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tegangan permukaan timbul karena molekul di permukaan?",
            options: [
              "Bergerak paling cepat",
              "Tidak punya tetangga di atasnya sehingga tarikannya tak seimbang",
              "Paling berat",
              "Menguap terus-menerus",
            ],
            answer: 1,
            explain: "Molekul permukaan tertarik ke samping dan bawah tanpa imbangan dari atas.",
          },
          {
            q: "Mengapa tetes air cenderung membulat?",
            options: [
              "Karena gravitasi menariknya bulat",
              "Karena bola adalah bentuk dengan permukaan terkecil",
              "Karena air berputar",
              "Karena udara mendorong dari satu sisi",
            ],
            answer: 1,
            explain: "Permukaan menyusut ke luas terkecil, dan bola memenuhi syarat itu.",
          },
          {
            q: "Tegangan permukaan didefinisikan sebagai?",
            options: [
              "Gaya dibagi luas",
              "Gaya per satuan panjang kontak",
              "Massa dibagi volume",
              "Tekanan dikali tinggi",
            ],
            answer: 1,
            explain: "gamma = F / L, bersatuan newton per meter.",
          },
          {
            q: "Kawat 0,1 m di permukaan air (gamma 0,072 N/m). Gaya satu sisi?",
            options: ["0,0072 N", "0,072 N", "0,72 N", "0,00072 N"],
            answer: 0,
            explain: "F = 0,072 x 0,1 = 0,0072 N.",
          },
          {
            q: "Apa pengaruh deterjen pada air?",
            options: [
              "Menaikkan tegangan permukaan",
              "Menurunkan tegangan permukaan",
              "Menambah massa jenis",
              "Tidak berpengaruh",
            ],
            answer: 1,
            explain: "Deterjen menurunkan tegangan permukaan sehingga air membasahi lebih baik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kapilaritas",
    levelId: "fluida-nyata",
    order: 4,
    title: "Kapilaritas",
    summary:
      "Bagaimana air naik melawan gravitasi di akar pohon dan tisu, dan kenapa pipa lebih sempit menaikkan air lebih tinggi? Kita amati dulu, baru rumus kapilaritas muncul.",
    durationMin: 14,
    tags: ["fluida nyata", "kapilaritas", "meniskus", "tegangan permukaan"],
    blocks: [
      {
        type: "paragraph",
        html: "Celupkan ujung tisu ke air, dan air merambat naik melawan gravitasi seakan ditarik tangan tak terlihat. Pohon setinggi puluhan meter mengangkut air dari akar ke daun teratas tanpa pompa. Minyak naik sendiri di sumbu lampu. Semua ini gejala <strong>kapilaritas</strong>. Sebelum membuka rumusnya, ayo pahami dulu kerja sama antara tegangan permukaan dan dinding sempit yang membuat zat cair bisa memanjat.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Air yang Memanjat Pipa Sempit",
        caption: "Pada pipa sangat sempit, zat cair bisa naik atau turun melawan gravitasi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Dua gaya bertarung. Air menempel pada dinding kaca (gaya <strong>adhesi</strong>) dan menarik dirinya sendiri naik, dibantu tegangan permukaan. Melawan itu, berat kolom air menariknya turun. Pada pipa sempit, kolom airnya ringan sehingga tarikan permukaan menang dan air naik tinggi. Permukaannya melengkung cekung, disebut <strong>meniskus</strong>. Raksa justru sebaliknya: ia lebih suka menarik dirinya sendiri (kohesi kuat), sehingga di pipa kaca permukaannya cembung dan malah turun.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Makin sempit, makin tinggi",
        html: "Kunci kapilaritas: makin kecil jari-jari pipa, makin tinggi zat cair naik. Pada pipa setengah lebih sempit, air naik dua kali lebih tinggi. Sebab kolom air yang harus diangkat makin ringan, sementara gaya tarik di tepi tetap. Itulah mengapa pembuluh kayu pohon yang sangat halus mampu menaikkan air begitu tinggi.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kenaikan Kapiler Air vs Jari-jari Pipa",
        unit: "milimeter (mm)",
        source: "hitungan h = 2 x gamma / (rho x g x r), air gamma 0,072 N/m, rho 1000, g 10",
        note: "Kenaikan air berbanding terbalik dengan jari-jari pipa. Pipa berjari-jari 0,5 mm menaikkan air dua kali lebih tinggi daripada pipa 1 mm.",
        data: [
          { label: "0,5 mm", value: 28.8, color: "#60a5fa" },
          { label: "1 mm", value: 14.4, color: "#818cf8" },
          { label: "2 mm", value: 7.2, color: "#a78bfa" },
          { label: "4 mm", value: 3.6, color: "#c084fc" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Air (gamma 0,072 N/m, rho 1000, g 10) naik dalam pipa berjari-jari 0,001 m. Berapa tinggi kenaikannya jika sudut kontak nol? (h = 2 x gamma / (rho x g x r))",
        answer: 0.0144,
        tolerance: 0.0005,
        suffix: " m",
        solution:
          "h = (2 x 0,072) / (1000 x 10 x 0,001) = 0,144 / 10 = <strong>0,0144 m</strong>, yaitu sekitar 14,4 mm. Pipa lebih sempit akan menaikkan air lebih tinggi lagi.",
        hint: "Hitung 2 x gamma di atas, lalu bagi dengan rho x g x r.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada pipa berjari-jari 1 mm air naik 14,4 mm. Karena kenaikan berbanding terbalik dengan jari-jari, berapa kenaikan air pada pipa berjari-jari 0,5 mm?",
        answer: 28.8,
        tolerance: 1,
        suffix: " mm",
        solution:
          "Jari-jari menjadi setengah, jadi kenaikan menjadi dua kali: 14,4 x 2 = <strong>28,8 mm</strong>. Makin sempit pipa, makin tinggi air memanjat.",
        hint: "Kenaikan berbanding terbalik dengan jari-jari: jari-jari separuh berarti tinggi dua kali.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan tiap zat cair dalam pipa kaca menurut bentuk meniskus dan perilakunya.",
        buckets: ["Meniskus cekung, naik (air)", "Meniskus cembung, turun (raksa)"],
        items: [
          { text: "Air dalam pipa kaca sempit", bucket: "Meniskus cekung, naik (air)" },
          { text: "Air merambat naik di dinding gelas", bucket: "Meniskus cekung, naik (air)" },
          { text: "Raksa dalam pipa kaca sempit", bucket: "Meniskus cembung, turun (raksa)" },
          { text: "Raksa yang membulat tidak membasahi kaca", bucket: "Meniskus cembung, turun (raksa)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pohon Tinggi dan Tembok yang Lembap",
        html: "Pohon redwood bisa setinggi seratus meter, namun tetap mengantar air dari akar ke pucuk daun. Salah satu pemain kuncinya adalah kapilaritas pada pembuluh kayu yang sangat halus, bekerja bersama penguapan di daun yang menarik kolom air ke atas. Pembuluh yang sempit memberi daya angkat kapiler yang besar. Prinsip yang sama, sayangnya, juga membuat tembok rumah menjadi lembap. Air tanah merambat naik lewat pori-pori halus bata dan semen, persis pipa kapiler, sehingga dinding bagian bawah menjadi basah dan catnya mengelupas. Itulah mengapa fondasi bangunan diberi lapisan kedap air untuk memutus jalur kapiler dari tanah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan rumus kenaikan kapiler: <strong>h = 2 x gamma x cos(theta) / (rho x g x r)</strong>, dengan gamma tegangan permukaan, theta sudut kontak, rho massa jenis, g gravitasi, dan r jari-jari pipa. Kenaikan berbanding terbalik dengan jari-jari, makin sempit makin tinggi. Jika zat membasahi dinding (theta kecil, seperti air di kaca) zat naik; jika tidak membasahi (theta lebih dari 90 derajat, seperti raksa) zat justru turun.",
      },
      {
        type: "takeaways",
        items: [
          "Kapilaritas adalah naik atau turunnya zat cair dalam pipa sempit melawan gravitasi.",
          "Rumus kenaikan: h = 2 x gamma x cos(theta) / (rho x g x r).",
          "Kenaikan berbanding terbalik dengan jari-jari: pipa lebih sempit menaikkan lebih tinggi.",
          "Air membasahi kaca (meniskus cekung, naik); raksa tidak (meniskus cembung, turun).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapilaritas terjadi karena kerja sama antara?",
            options: [
              "Tekanan dan suhu",
              "Tegangan permukaan dan tarikan dinding pipa",
              "Gravitasi dan massa jenis",
              "Viskositas dan tekanan",
            ],
            answer: 1,
            explain: "Tegangan permukaan dan adhesi ke dinding bersama-sama menarik zat cair naik.",
          },
          {
            q: "Hubungan kenaikan kapiler dengan jari-jari pipa adalah?",
            options: [
              "Berbanding lurus",
              "Berbanding terbalik",
              "Tidak berhubungan",
              "Sebanding kuadrat",
            ],
            answer: 1,
            explain: "h berbanding terbalik dengan r, makin sempit pipa makin tinggi kenaikan.",
          },
          {
            q: "Air dalam pipa kaca sempit membentuk meniskus?",
            options: ["Cembung dan turun", "Cekung dan naik", "Datar", "Berputar"],
            answer: 1,
            explain: "Air membasahi kaca, meniskusnya cekung dan zat naik.",
          },
          {
            q: "Air naik 12 mm pada pipa jari-jari 1 mm. Pada pipa jari-jari 0,5 mm air naik?",
            options: ["6 mm", "12 mm", "24 mm", "3 mm"],
            answer: 2,
            explain: "Jari-jari separuh berarti kenaikan dua kali: 12 x 2 = 24 mm.",
          },
          {
            q: "Mengapa raksa justru turun dalam pipa kaca sempit?",
            options: [
              "Karena terlalu berat",
              "Karena tidak membasahi kaca (kohesi lebih kuat dari adhesi)",
              "Karena menguap",
              "Karena membeku",
            ],
            answer: 1,
            explain: "Raksa tidak membasahi kaca, sudut kontaknya lebih dari 90 derajat, sehingga turun.",
          },
        ],
      },
    ],
  },
];
