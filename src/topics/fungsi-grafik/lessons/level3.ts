import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "parabola-dari-tabel-nilai",
    levelId: "fungsi-kuadrat",
    order: 1,
    title: "Parabola: Lengkungan dari Tabel Nilai",
    summary:
      "Sebelum mengenal rumus, kita lempar bola dan susun tabel nilai sampai bentuk melengkungnya muncul sendiri.",
    durationMin: 13,
    tags: ["fungsi kuadrat", "parabola", "tabel nilai"],
    blocks: [
      {
        type: "paragraph",
        html: "Lempar bola lurus ke atas. Ia tidak naik selamanya: melambat, berhenti sejenak di puncak, lalu turun lagi. Lintasannya bukan garis lurus, melainkan lengkungan mulus. Sebelum bertemu rumus apa pun, ayo susun dulu tabel nilai dan biarkan lengkungan itu muncul dengan sendirinya.",
      },
      {
        type: "video",
        comp: "PolaAlam",
        title: "Video: Lengkungan yang Berulang di Alam",
        caption: "Dari pancuran air sampai lintasan bola, bentuk lengkung yang sama muncul lagi dan lagi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba aturan sederhana: kuadratkan tiap masukan, y = x kali x. Masukkan x = -3, -2, -1, 0, 1, 2, 3. Hasilnya: 9, 4, 1, 0, 1, 4, 9. Perhatikan, nilai di kiri dan kanan nol seperti bercermin. Belum ada rumus rumit, tapi polanya sudah terasa.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tabel Nilai y = x kuadrat",
        unit: "nilai y",
        source: "perhitungan y = x²",
        note: "Nilai turun sampai titik terendah di x = 0, lalu naik lagi secara simetris. Inilah bentuk parabola.",
        data: [
          { label: "x=-3", value: 9, color: "#22d3ee" },
          { label: "x=-2", value: 4, color: "#22d3ee" },
          { label: "x=-1", value: 1, color: "#22d3ee" },
          { label: "x=0", value: 0, color: "#22d3ee" },
          { label: "x=1", value: 1, color: "#22d3ee" },
          { label: "x=2", value: 4, color: "#22d3ee" },
          { label: "x=3", value: 9, color: "#22d3ee" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Kenapa melengkung, bukan lurus?",
        html: "Pada garis lurus, tiap langkah x naik 1 membuat y naik tetap. Di sini tidak: dari x=0 ke 1 naik 1, dari x=1 ke 2 naik 3, dari x=2 ke 3 naik 5. Kenaikannya makin besar, jadi grafiknya melengkung makin tajam.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan aturan y = x², berapa nilai y saat x = 5?",
        answer: 25,
        solution:
          "Kuadratkan masukannya: 5 × 5 = <strong>25</strong>. Maka titik (5, 25) ada pada parabola.",
        hint: "Kuadratkan berarti kalikan angka dengan dirinya sendiri.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada y = x², berapa nilai y saat x = -4?",
        answer: 16,
        solution:
          "(-4) × (-4) = <strong>16</strong>. Negatif kali negatif jadi positif, itu sebabnya sisi kiri parabola juga naik.",
        hint: "Negatif dikali negatif menghasilkan positif.",
      },
      {
        type: "classifyExercise",
        prompt: "Lihat polanya: tabel nilai mana yang membentuk parabola (melengkung, simetris) dan mana garis lurus?",
        buckets: ["Parabola", "Garis lurus"],
        items: [
          { text: "x: -2,-1,0,1,2 menghasilkan y: 4,1,0,1,4", bucket: "Parabola" },
          { text: "x: 0,1,2,3 menghasilkan y: 1,3,5,7", bucket: "Garis lurus" },
          { text: "x: -2,-1,0,1,2 menghasilkan y: 7,4,3,4,7", bucket: "Parabola" },
          { text: "x: 0,1,2,3 menghasilkan y: 0,2,4,6", bucket: "Garis lurus" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pancuran air taman",
        html: "Air dari pancuran taman menyembur ke atas lalu jatuh kembali, membentuk lengkungan yang persis sama di kiri dan kanan titik tertinggi. Jika kita ukur tinggi air pada beberapa jarak mendatar, tabelnya akan naik sampai puncak lalu turun simetris, persis seperti tabel y = x² yang dibalik. Tukang taman memanfaatkan bentuk parabola ini supaya air jatuh tepat kembali ke kolam.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Baru sekarang kita beri nama",
        html: "Lengkungan tadi disebut <strong>parabola</strong>, grafik dari <strong>fungsi kuadrat</strong> berbentuk <strong>y = ax² + bx + c</strong> dengan a ≠ 0. Cirinya: simetris terhadap satu garis tegak, punya satu titik balik, dan melengkung makin tajam menjauhi pusatnya. Contoh kita tadi, y = x², adalah parabola paling sederhana dengan a = 1, b = 0, c = 0.",
      },
      {
        type: "takeaways",
        items: [
          "Fungsi kuadrat berbentuk y = ax² + bx + c dengan a ≠ 0, dan grafiknya disebut parabola.",
          "Tabel nilai fungsi kuadrat naik lalu turun (atau sebaliknya) secara simetris.",
          "Kenaikan y tidak tetap seperti garis lurus, melainkan makin besar menjauhi pusat.",
          "Bentuk parabola muncul nyata di lintasan bola dan pancuran air.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Grafik fungsi kuadrat disebut?",
            options: ["Garis lurus", "Parabola", "Lingkaran", "Zig-zag"],
            answer: 1,
            explain: "Grafik y = ax² + bx + c berbentuk parabola.",
          },
          {
            q: "Pada y = x², nilai y untuk x = 3 adalah?",
            options: ["6", "9", "3", "12"],
            answer: 1,
            explain: "3 × 3 = 9.",
          },
          {
            q: "Mengapa tabel y = x² simetris di kiri dan kanan x = 0?",
            options: [
              "Karena x selalu positif",
              "Karena (-x)² = x², jadi x dan -x memberi y yang sama",
              "Karena y selalu 0",
              "Karena grafiknya garis lurus",
            ],
            answer: 1,
            explain: "Mengkuadratkan -x dan x menghasilkan nilai yang sama.",
          },
          {
            q: "Agar y = ax² + bx + c menjadi fungsi kuadrat, syaratnya?",
            options: ["a = 0", "a ≠ 0", "c = 0", "b = 1"],
            answer: 1,
            explain: "Jika a = 0 suku kuadrat hilang dan fungsinya tidak lagi kuadrat.",
          },
          {
            q: "Pada y = x², dari x=2 ke x=3 nilai y naik 5; dari x=3 ke x=4 naik?",
            options: ["5", "7", "3", "9"],
            answer: 1,
            explain: "y berubah dari 9 ke 16, naik 7. Kenaikannya makin besar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "titik-puncak-dan-sumbu-simetri",
    levelId: "fungsi-kuadrat",
    order: 2,
    title: "Titik Puncak dan Sumbu Simetri",
    summary:
      "Bola berhenti sejenak di titik tertinggi. Kita temukan dulu titik balik dan garis cermin parabola dari tabel, baru rumusnya.",
    durationMin: 14,
    tags: ["fungsi kuadrat", "titik puncak", "sumbu simetri"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat bola dilempar, ada satu momen ia seolah diam di udara: itulah titik tertinggi sebelum turun. Setiap parabola punya satu titik istimewa seperti itu, dan sebuah garis tegak yang membelahnya jadi dua bagian bercermin. Ayo temukan keduanya dari tabel dulu.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Saat Naik Berhenti dan Mulai Turun",
        caption: "Di titik balik, laju naik habis sebelum berganti arah jadi turun.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Susun tabel y = x² - 4x + 3 untuk x = 0,1,2,3,4. Hasilnya 3, 0, -1, 0, 3. Nilai terendah -1 terjadi di x = 2. Lihat: 3 dan 3 bercermin, 0 dan 0 bercermin, dan cerminnya tepat di x = 2. Itu titik baliknya dan garis cerminnya, tanpa rumus apa pun.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tabel Nilai y = x² - 4x + 3",
        unit: "nilai y",
        source: "perhitungan y = x² - 4x + 3",
        note: "Nilai terendah -1 ada di x = 2; nilai-nilai di kiri dan kanannya bercermin terhadap garis x = 2.",
        data: [
          { label: "x=0", value: 3, color: "#2dd4bf" },
          { label: "x=1", value: 0, color: "#2dd4bf" },
          { label: "x=2", value: -1, color: "#0ea5e9" },
          { label: "x=3", value: 0, color: "#2dd4bf" },
          { label: "x=4", value: 3, color: "#2dd4bf" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Puncak atau lembah?",
        html: "Jika a > 0 parabola membuka ke atas, titik baliknya adalah titik <strong>terendah</strong> (lembah). Jika a < 0 parabola membuka ke bawah, titik baliknya adalah titik <strong>tertinggi</strong> (puncak), seperti bola yang dilempar.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari tabel y = x² - 4x + 3, pada nilai x berapa parabola mencapai titik baliknya?",
        answer: 2,
        solution:
          "Nilai terendah -1 terjadi di <strong>x = 2</strong>, dan nilai di kiri-kanannya bercermin terhadap x = 2. Jadi sumbu simetrinya x = 2.",
        hint: "Cari x tempat nilai y paling kecil; di situ pula cerminnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk y = x² - 6x + 5, gunakan x = -b / (2a) dengan a = 1 dan b = -6. Berapa sumbu simetrinya?",
        answer: 3,
        solution:
          "x = -b / (2a) = -(-6) / (2 × 1) = 6 / 2 = <strong>3</strong>. Sumbu simetrinya garis x = 3.",
        hint: "Masukkan a = 1, b = -6 ke rumus -b dibagi 2a.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan fungsi kuadrat dengan sumbu simetrinya (gunakan x = -b/2a, semua a = 1).",
        pairs: [
          { left: "y = x² - 4x + 3", right: "x = 2" },
          { left: "y = x² - 6x + 5", right: "x = 3" },
          { left: "y = x² + 2x - 8", right: "x = -1" },
          { left: "y = x² - 8x + 7", right: "x = 4" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lompatan atlet lompat jauh",
        html: "Tinggi badan atlet lompat jauh terhadap waktu membentuk parabola yang membuka ke bawah. Titik baliknya adalah saat tubuhnya berada paling tinggi, tepat di tengah lompatan. Pelatih tahu bahwa fase naik dan fase turun simetris terhadap saat tertinggi itu, sehingga waktu menanjak sama dengan waktu menurun. Memahami sumbu simetri membantu mengatur tolakan dan pendaratan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Sekarang rumusnya",
        html: "Garis cermin tadi bernama <strong>sumbu simetri</strong>, dan letaknya bisa dihitung langsung: <strong>x = -b / (2a)</strong>. Titik pada parabola di sumbu itu disebut <strong>titik puncak</strong> (atau titik balik); koordinat y-nya didapat dengan memasukkan nilai x tersebut ke fungsi. Jadi tabel tadi hanya memastikan apa yang kini bisa kita hitung seketika.",
      },
      {
        type: "takeaways",
        items: [
          "Setiap parabola punya satu titik balik (puncak/lembah) dan satu sumbu simetri.",
          "Sumbu simetri dihitung dengan rumus x = -b / (2a).",
          "Nilai y titik puncak didapat dengan memasukkan x sumbu simetri ke fungsi.",
          "Jika a > 0 titik baliknya terendah; jika a < 0 titik baliknya tertinggi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus sumbu simetri parabola y = ax² + bx + c adalah?",
            options: ["x = -b/(2a)", "x = b/a", "x = a/b", "x = -c/a"],
            answer: 0,
            explain: "Sumbu simetri terletak di x = -b/(2a).",
          },
          {
            q: "Untuk y = x² - 4x + 3, sumbu simetrinya?",
            options: ["x = 1", "x = 2", "x = 3", "x = 4"],
            answer: 1,
            explain: "-b/(2a) = 4/2 = 2.",
          },
          {
            q: "Jika a < 0, titik balik parabola adalah titik?",
            options: ["Terendah", "Tertinggi", "Di sumbu y", "Tidak ada"],
            answer: 1,
            explain: "Parabola membuka ke bawah, titik baliknya tertinggi (puncak).",
          },
          {
            q: "Pada y = x² - 6x + 5, nilai y di titik puncak (x = 3) adalah?",
            options: ["-4", "0", "5", "3"],
            answer: 0,
            explain: "y = 9 - 18 + 5 = -4.",
          },
          {
            q: "Sumbu simetri membagi parabola menjadi?",
            options: [
              "Dua bagian yang saling bercermin",
              "Tiga bagian sama",
              "Bagian atas dan garis",
              "Tidak membagi apa pun",
            ],
            answer: 0,
            explain: "Kedua sisi parabola simetris terhadap sumbu ini.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "akar-dan-titik-potong-sumbu",
    levelId: "fungsi-kuadrat",
    order: 3,
    title: "Akar dan Titik Potong Sumbu",
    summary:
      "Di mana bola menyentuh tanah? Kita cari dulu titik tempat parabola memotong sumbu dari tabel, baru namanya.",
    durationMin: 13,
    tags: ["fungsi kuadrat", "akar", "titik potong"],
    blocks: [
      {
        type: "paragraph",
        html: "Bola yang dilempar akhirnya menyentuh tanah. Pada grafik tinggi terhadap jarak, momen menyentuh tanah adalah saat tinggi sama dengan nol, yaitu tempat parabola memotong sumbu mendatar. Ayo temukan titik-titik potong itu dari tabel dulu, sebelum memberi mereka nama resmi.",
      },
      {
        type: "video",
        comp: "FungsiVideo",
        title: "Video: Saat Nilai Fungsi Menjadi Nol",
        caption: "Titik tempat grafik menyentuh sumbu mendatar punya arti khusus.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pakai lagi y = x² - 4x + 3. Tabelnya untuk x = 0,1,2,3,4 adalah 3, 0, -1, 0, 3. Perhatikan: y = 0 terjadi di x = 1 dan x = 3. Di dua titik itulah grafik menyentuh sumbu mendatar. Dan saat x = 0, nilainya y = 3, tempat grafik memotong sumbu tegak.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "y = x² - 4x + 3 Memotong Sumbu",
        unit: "nilai y",
        source: "perhitungan y = x² - 4x + 3",
        note: "y bernilai 0 di x = 1 dan x = 3 (titik potong sumbu mendatar); di x = 0 nilainya 3 (titik potong sumbu tegak).",
        data: [
          { label: "x=0", value: 3, color: "#38bdf8" },
          { label: "x=1", value: 0, color: "#f97316" },
          { label: "x=2", value: -1, color: "#2dd4bf" },
          { label: "x=3", value: 0, color: "#f97316" },
          { label: "x=4", value: 3, color: "#38bdf8" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Bisa dua, satu, atau tidak ada",
        html: "Parabola bisa memotong sumbu mendatar di dua titik, menyentuhnya di satu titik (tepat di puncak), atau tidak menyentuhnya sama sekali bila seluruh lengkungan berada di atas atau di bawah sumbu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada y = x² - 4x + 3, berapa nilai y saat x = 0 (titik potong sumbu tegak)?",
        answer: 3,
        solution:
          "Masukkan x = 0: 0 - 0 + 3 = <strong>3</strong>. Nilai ini sama dengan c, suku tetap fungsinya.",
        hint: "Substitusikan x = 0; semua suku ber-x menjadi nol.",
      },
      {
        type: "calcExercise",
        prompt:
          "Salah satu akar y = x² - 4x + 3 adalah x = 1. Faktornya (x - 1)(x - 3). Berapa akar yang satunya?",
        answer: 3,
        solution:
          "Akar membuat tiap faktor nol. (x - 3) = 0 memberi x = <strong>3</strong>. Jadi akarnya x = 1 dan x = 3.",
        hint: "Buat faktor (x - 3) sama dengan nol.",
      },
      {
        type: "classifyExercise",
        prompt: "Untuk y = x² - 4x + 3, kelompokkan pernyataan berikut.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "x = 1 dan x = 3 adalah akar (membuat y = 0)", bucket: "Benar" },
          { text: "Titik potong sumbu tegak ada di y = 3", bucket: "Benar" },
          { text: "x = 2 adalah akar fungsi", bucket: "Salah" },
          { text: "Titik potong sumbu tegak ada di y = 0", bucket: "Salah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Jangkauan tembakan air mancur",
        html: "Sebuah air mancur menyemprot air mengikuti parabola y = -x² + 4x, dengan y tinggi air dan x jarak mendatar dalam meter. Air menyentuh kolam saat y = 0. Karena -x² + 4x = -x(x - 4), akarnya x = 0 dan x = 4. Artinya air berangkat di x = 0 dan jatuh kembali di x = 4 meter. Teknisi memakai akar ini untuk menentukan lebar kolam agar tidak ada air yang tumpah ke luar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Inilah nama-namanya",
        html: "Nilai x yang membuat y = 0 disebut <strong>akar</strong> fungsi (atau pembuat nol), dan grafiknya memotong sumbu-x di titik-titik itu. Titik tempat grafik memotong sumbu-y didapat dengan memasukkan x = 0, hasilnya selalu sama dengan <strong>c</strong>. Jadi: akar ada di sumbu-x (substitusi y = 0), titik potong sumbu-y ada di (0, c).",
      },
      {
        type: "takeaways",
        items: [
          "Akar adalah nilai x yang membuat y = 0; di situ grafik memotong sumbu-x.",
          "Titik potong sumbu-y diperoleh dengan x = 0 dan nilainya sama dengan c.",
          "Parabola bisa punya dua akar, satu akar, atau tidak punya akar nyata.",
          "Pemfaktoran seperti (x - 1)(x - 3) langsung memperlihatkan akarnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Akar fungsi kuadrat adalah nilai x yang membuat?",
            options: ["y = 0", "x = 0", "y maksimum", "a = 0"],
            answer: 0,
            explain: "Akar adalah pembuat nol, yaitu saat y = 0.",
          },
          {
            q: "Titik potong sumbu-y pada y = ax² + bx + c selalu di?",
            options: ["(0, a)", "(0, b)", "(0, c)", "(c, 0)"],
            answer: 2,
            explain: "Substitusi x = 0 menyisakan y = c.",
          },
          {
            q: "Akar dari y = (x - 2)(x - 5) adalah?",
            options: ["2 dan 5", "-2 dan -5", "0 dan 7", "2 dan -5"],
            answer: 0,
            explain: "Tiap faktor nol memberi x = 2 dan x = 5.",
          },
          {
            q: "Sebuah parabola yang seluruhnya di atas sumbu-x memiliki akar nyata sebanyak?",
            options: ["Dua", "Satu", "Tidak ada", "Tiga"],
            answer: 2,
            explain: "Tidak memotong sumbu-x berarti tidak ada akar nyata.",
          },
          {
            q: "Untuk y = -x² + 4x, akarnya adalah?",
            options: ["0 dan 4", "0 dan -4", "2 dan 4", "1 dan 3"],
            answer: 0,
            explain: "-x(x - 4) = 0 memberi x = 0 dan x = 4.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menggambar-parabola",
    levelId: "fungsi-kuadrat",
    order: 4,
    title: "Menggambar Parabola Utuh",
    summary:
      "Gabungkan puncak, sumbu simetri, dan akar menjadi satu lengkungan utuh. Kita gambar dulu lewat titik-titik kunci, baru rapikan jadi langkah baku.",
    durationMin: 15,
    tags: ["fungsi kuadrat", "menggambar grafik", "parabola"],
    blocks: [
      {
        type: "paragraph",
        html: "Sekarang kita punya semua bahannya: titik puncak, sumbu simetri, dan akar. Seperti melukis lintasan bola lengkap dari lempar sampai jatuh, ayo gabungkan titik-titik kunci ini menjadi satu parabola utuh, lewat contoh dulu sebelum kita rapikan jadi langkah baku.",
      },
      {
        type: "video",
        comp: "PolaAlam",
        title: "Video: Merangkai Titik Menjadi Lengkungan",
        caption: "Beberapa titik kunci sudah cukup untuk membentuk parabola yang mulus.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil y = x² - 2x - 3. Sumbu simetri x = -(-2)/(2×1) = 1. Puncak: y(1) = 1 - 2 - 3 = -4, jadi (1, -4). Akar dari (x - 3)(x + 1): x = 3 dan x = -1. Titik potong sumbu-y: c = -3. Plot lima titik ini, lalu hubungkan jadi lengkungan. Parabolanya muncul utuh.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tabel Nilai y = x² - 2x - 3",
        unit: "nilai y",
        source: "perhitungan y = x² - 2x - 3",
        note: "Akar di x = -1 dan x = 3, puncak di (1, -4), titik potong sumbu-y di (0, -3). Semua tampak dalam satu tabel simetris.",
        data: [
          { label: "x=-2", value: 5, color: "#22d3ee" },
          { label: "x=-1", value: 0, color: "#f97316" },
          { label: "x=0", value: -3, color: "#38bdf8" },
          { label: "x=1", value: -4, color: "#0ea5e9" },
          { label: "x=2", value: -3, color: "#38bdf8" },
          { label: "x=3", value: 0, color: "#f97316" },
          { label: "x=4", value: 5, color: "#22d3ee" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Arah buka menentukan bentuk",
        html: "Tanda a menentukan arah: a > 0 membuka ke atas (berbentuk U), a < 0 membuka ke bawah (berbentuk U terbalik). Makin besar nilai mutlak a, makin sempit dan tajam lengkungannya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk y = x² - 2x - 3, berapa nilai x sumbu simetrinya? (gunakan -b/2a, a = 1, b = -2)",
        answer: 1,
        solution:
          "x = -(-2)/(2×1) = 2/2 = <strong>1</strong>. Sumbu simetrinya garis x = 1, tempat puncak berada.",
        hint: "Masukkan a = 1 dan b = -2 ke -b/(2a).",
      },
      {
        type: "calcExercise",
        prompt:
          "Masih y = x² - 2x - 3, berapa nilai y di titik puncak (x = 1)?",
        answer: -4,
        solution:
          "y = 1² - 2(1) - 3 = 1 - 2 - 3 = <strong>-4</strong>. Jadi titik puncaknya (1, -4).",
        hint: "Substitusikan x = 1 ke fungsinya.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap unsur parabola y = x² - 2x - 3 dengan nilainya.",
        pairs: [
          { left: "Sumbu simetri", right: "x = 1" },
          { left: "Titik puncak", right: "(1, -4)" },
          { left: "Akar-akar", right: "x = -1 dan x = 3" },
          { left: "Titik potong sumbu-y", right: "(0, -3)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Desain jembatan lengkung",
        html: "Insinyur merancang penyangga jembatan berbentuk parabola y = x² - 2x - 3 (dalam satuan meter, disesuaikan). Mereka tidak menghitung ratusan titik: cukup tandai puncak (1, -4) sebagai bagian terendah penyangga, dua akar x = -1 dan x = 3 sebagai titik tumpu di tepi, lalu hubungkan dengan lengkungan mulus. Dengan empat sampai lima titik kunci, bentuk penyangga sudah akurat untuk digambar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Langkah baku menggambar parabola",
        html: "Sekarang rapikan jadi resep: <strong>(1)</strong> tentukan arah buka dari tanda a; <strong>(2)</strong> hitung sumbu simetri x = -b/(2a); <strong>(3)</strong> cari titik puncak dengan memasukkan x itu; <strong>(4)</strong> cari akar (y = 0) dan titik potong sumbu-y (x = 0, yaitu c); <strong>(5)</strong> plot titik-titik itu dan hubungkan jadi lengkungan simetris. Itulah cara menggambar parabola apa pun dengan cepat.",
      },
      {
        type: "takeaways",
        items: [
          "Lima titik kunci sudah cukup: arah buka, sumbu simetri, puncak, akar, dan titik potong sumbu-y.",
          "Sumbu simetri x = -b/(2a) menentukan letak puncak dan garis cermin.",
          "Tanda a menentukan arah buka; besarnya menentukan ketajaman lengkungan.",
          "Menggambar parabola adalah merangkai titik-titik kunci menjadi lengkungan simetris.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Langkah pertama menggambar parabola sebaiknya?",
            options: [
              "Menghitung ratusan titik",
              "Menentukan arah buka dari tanda a",
              "Menggambar garis lurus",
              "Mengabaikan sumbu simetri",
            ],
            answer: 1,
            explain: "Tanda a menentukan arah buka, fondasi bentuk grafik.",
          },
          {
            q: "Untuk y = x² - 2x - 3, titik puncaknya adalah?",
            options: ["(1, -4)", "(0, -3)", "(-1, 0)", "(2, 5)"],
            answer: 0,
            explain: "Sumbu simetri x = 1; y(1) = -4.",
          },
          {
            q: "Parabola membuka ke bawah jika?",
            options: ["a > 0", "a < 0", "b > 0", "c < 0"],
            answer: 1,
            explain: "Nilai a negatif membuat parabola membuka ke bawah.",
          },
          {
            q: "Titik potong sumbu-y dari y = x² - 2x - 3 adalah?",
            options: ["(0, -3)", "(0, 3)", "(-3, 0)", "(0, 0)"],
            answer: 0,
            explain: "Substitusi x = 0 memberi y = -3, yaitu nilai c.",
          },
          {
            q: "Minimal berapa jenis titik kunci yang dipakai untuk menggambar parabola dengan baik?",
            options: [
              "Puncak, akar, dan titik potong sumbu-y",
              "Hanya satu titik",
              "Hanya akar",
              "Tidak perlu titik apa pun",
            ],
            answer: 0,
            explain: "Puncak, akar, dan titik potong sumbu-y bersama arah buka sudah cukup.",
          },
        ],
      },
    ],
  },
];
