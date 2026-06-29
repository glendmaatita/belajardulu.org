import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "fluks-dan-ggl-induksi",
    levelId: "induksi-elektromagnetik",
    order: 1,
    title: "Fluks dan GGL Induksi",
    summary:
      "Jika arus bisa membuat magnet, bisakah magnet membuat arus? Kisah Faraday menjawabnya, dan dari sana lahir seluruh pembangkit listrik.",
    durationMin: 15,
    tags: ["fisika", "induksi", "fluks", "GGL"],
    blocks: [
      {
        type: "paragraph",
        html: "Michael Faraday penasaran dengan satu pertanyaan: kalau arus menghasilkan magnet, mungkinkah magnet menghasilkan arus? Ia menggerakkan magnet keluar masuk kumparan dan melihat jarum galvanometer bergoyang, tapi hanya saat magnet bergerak. Sebelum menuliskan rumus, ayo kita rasakan rahasia di balik gerakan itu, rahasia yang menerangi seluruh dunia.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Magnet Bergerak Membangkitkan Arus",
        caption: "Jarum hanya menyimpang ketika magnet bergerak, bukan saat diam.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Dorong magnet masuk ke dalam kumparan: jarum galvanometer menyimpang ke satu arah. Tarik keluar: jarum menyimpang ke arah sebaliknya. Diamkan magnet di dalam kumparan: jarum kembali nol. Kuncinya bukan magnetnya, melainkan <strong>perubahan</strong>. Arus hanya lahir ketika jumlah garis medan yang menembus kumparan sedang berubah.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga cara mengubah fluks",
        html: "GGL induksi muncul setiap kali <strong>fluks Φ = B·A·cos θ</strong> berubah. Itu bisa terjadi dengan tiga cara: mengubah kuat medan <strong>B</strong> (magnet didekatkan/dijauhkan), mengubah luas <strong>A</strong> (kumparan ditarik melar), atau mengubah sudut <strong>θ</strong> (kumparan diputar). Apa pun caranya, asalkan fluks berubah, listrik akan lahir.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "GGL Induksi vs Jumlah Lilitan",
        unit: "volt (V)",
        source: "laju perubahan fluks dΦ/dt = 0,02 Wb/s",
        note: "Pada laju perubahan fluks yang sama, makin banyak lilitan makin besar GGL. Hubungannya lurus karena GGL sebanding dengan N.",
        data: [
          { label: "100 lilitan", value: 2, color: "#34d399" },
          { label: "200 lilitan", value: 4, color: "#22d3ee" },
          { label: "500 lilitan", value: 10, color: "#38bdf8" },
          { label: "1000 lilitan", value: 20, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kumparan 100 lilitan mengalami perubahan fluks magnetik sebesar 0,02 Wb dalam waktu 0,1 s. Berapa besar GGL induksi yang timbul?",
        answer: 20,
        tolerance: 0.1,
        suffix: " V",
        solution:
          "Pakai ε = N·(ΔΦ/Δt) = 100 × (0,02 / 0,1) = 100 × 0,2 = <strong>20 V</strong>. Tanda negatif pada hukum Lenz hanya menunjukkan arah perlawanan, besarnya tetap 20 V.",
        hint: "ε = N × (ΔΦ / Δt).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap situasi: menimbulkan GGL induksi atau tidak.",
        buckets: ["Timbul GGL induksi", "Tidak timbul GGL"],
        items: [
          { text: "Magnet digerakkan masuk kumparan", bucket: "Timbul GGL induksi" },
          { text: "Kumparan diputar dalam medan magnet", bucket: "Timbul GGL induksi" },
          { text: "Magnet ditarik keluar kumparan", bucket: "Timbul GGL induksi" },
          { text: "Magnet diam di dalam kumparan", bucket: "Tidak timbul GGL" },
          { text: "Fluks magnetik konstan", bucket: "Tidak timbul GGL" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap cara mengubah fluks dengan besaran yang diubah.",
        pairs: [
          { left: "Magnet didekatkan kumparan", right: "Mengubah kuat medan B" },
          { left: "Kumparan ditarik melar", right: "Mengubah luas A" },
          { left: "Kumparan diputar", right: "Mengubah sudut θ" },
          { left: "Magnet diam di dalam", right: "Fluks tetap, tak ada GGL" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lampu Sepeda Tanpa Baterai",
        html: "Dinamo pada sepeda lawas menyalakan lampu tanpa baterai sama sekali. Saat roda berputar, ia memutar magnet kecil di dekat kumparan. Perputaran itu membuat fluks yang menembus kumparan terus berubah, sehingga GGL induksi muncul dan menyalakan lampu. Makin cepat mengayuh, makin cepat fluks berubah, dan makin terang lampunya. Itu sebabnya lampu meredup saat sepeda melambat: persis seperti yang diramalkan hukum Faraday.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita tuliskan. GGL induksi sama dengan jumlah lilitan dikali laju perubahan fluks: <strong>ε = -N·(ΔΦ/Δt)</strong>. Fluks sendiri <strong>Φ = B·A·cos θ</strong>, diukur dalam weber (Wb). Tanda negatif menandakan arah perlawanan (hukum Lenz). Intinya: bukan besar fluks yang membangkitkan listrik, melainkan <strong>laju perubahannya</strong>. Inilah fondasi seluruh pembangkit listrik.",
      },
      {
        type: "takeaways",
        items: [
          "GGL induksi hanya muncul ketika fluks magnetik yang menembus kumparan berubah.",
          "Fluks bisa diubah lewat tiga cara: ubah B, ubah A, atau ubah sudut θ.",
          "Besar GGL: ε = N·(ΔΦ/Δt), makin cepat fluks berubah makin besar GGL.",
          "Induksi elektromagnetik adalah dasar semua pembangkit listrik dan dinamo.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "GGL induksi muncul ketika?",
            options: [
              "Magnet diam di kumparan",
              "Fluks magnetik berubah",
              "Arus konstan mengalir",
              "Kumparan dipanaskan",
            ],
            answer: 1,
            explain: "Perubahan fluks adalah syarat munculnya GGL induksi.",
          },
          {
            q: "Manakah yang TIDAK mengubah fluks?",
            options: [
              "Mendekatkan magnet",
              "Memutar kumparan",
              "Membiarkan magnet diam di dalam",
              "Menarik kumparan melar",
            ],
            answer: 2,
            explain: "Magnet diam membuat fluks tetap, jadi tak ada GGL.",
          },
          {
            q: "Besar GGL induksi dirumuskan?",
            options: ["ε = N·(ΔΦ/Δt)", "F = B·I·L", "B = µ₀·n·I", "V = I·R"],
            answer: 0,
            explain: "GGL = jumlah lilitan dikali laju perubahan fluks.",
          },
          {
            q: "Kumparan 200 lilitan, fluks berubah 0,01 Wb dalam 0,1 s. GGL-nya?",
            options: ["10 V", "20 V", "2 V", "200 V"],
            answer: 1,
            explain: "ε = 200 × (0,01/0,1) = 200 × 0,1 = 20 V.",
          },
          {
            q: "Mengapa lampu dinamo sepeda meredup saat melambat?",
            options: [
              "Baterai habis",
              "Fluks berubah lebih lambat sehingga GGL mengecil",
              "Kawat memanas",
              "Magnet melemah",
            ],
            answer: 1,
            explain: "Putaran lebih lambat membuat fluks berubah pelan, GGL turun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-faraday",
    levelId: "induksi-elektromagnetik",
    order: 2,
    title: "Hukum Faraday",
    summary:
      "Seberapa besar listrik yang lahir dari magnet bergerak? Faraday menemukan jawabannya dalam satu rumus yang menjalankan seluruh peradaban listrik.",
    durationMin: 14,
    tags: ["fisika", "hukum Faraday", "GGL induksi", "fluks"],
    blocks: [
      {
        type: "paragraph",
        html: "Faraday tahu magnet bergerak menghasilkan arus. Tapi ia ingin lebih: seberapa <strong>besar</strong> tepatnya? Ia mencoba menggerakkan magnet pelan dan cepat, memakai sedikit dan banyak lilitan, lalu mencatat simpangan jarum. Dari ribuan percobaan lahirlah satu pola sederhana. Sebelum menuliskan rumusnya, ayo kita temukan polanya bersama.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Cepat-Lambat Magnet dan Besar Simpangan Jarum",
        caption: "Gerakan magnet yang lebih cepat membuat jarum galvanometer menyimpang lebih jauh.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gerakkan magnet dua kali lebih cepat: simpangan jarum kira-kira dua kali lebih besar. Pakai kumparan dengan dua kali lebih banyak lilitan: simpangan juga sekitar dua kali. Pola ini jernih: GGL induksi sebanding dengan <strong>jumlah lilitan</strong> dan dengan <strong>laju perubahan fluks</strong>. Bukan seberapa kuat magnetnya, tapi seberapa cepat fluksnya berubah.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Laju perubahan, bukan nilai",
        html: "Fluks yang besar tapi <strong>diam</strong> tidak menghasilkan apa-apa. Fluks yang kecil tapi <strong>berubah cepat</strong> bisa menghasilkan GGL besar. Yang dihitung adalah ΔΦ/Δt, yaitu seberapa banyak fluks berubah tiap detik. Inilah inti hukum Faraday yang membedakannya dari sekadar 'ada medan magnet'.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "GGL Induksi vs Laju Perubahan Fluks",
        unit: "volt (V)",
        source: "kumparan N = 200 lilitan, ε = N·(ΔΦ/Δt)",
        note: "Pada jumlah lilitan tetap, GGL bertambah lurus seiring laju perubahan fluks. Dua kali laju berarti dua kali GGL.",
        data: [
          { label: "0,01 Wb/s", value: 2, color: "#34d399" },
          { label: "0,02 Wb/s", value: 4, color: "#22d3ee" },
          { label: "0,05 Wb/s", value: 10, color: "#38bdf8" },
          { label: "0,1 Wb/s", value: 20, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Kumparan 500 lilitan mengalami perubahan fluks 0,004 Wb dalam 0,01 s. Berapa GGL induksi yang timbul?",
        answer: 200,
        tolerance: 1,
        suffix: " V",
        solution:
          "Pakai ε = N·(ΔΦ/Δt) = 500 × (0,004/0,01) = 500 × 0,4 = <strong>200 V</strong>. Perubahan fluks yang cepat menghasilkan GGL besar.",
        hint: "ε = N × (ΔΦ / Δt). Hitung ΔΦ/Δt dulu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kumparan menghasilkan GGL 12 V saat fluksnya berubah 0,003 Wb dalam 0,05 s. Berapa jumlah lilitan kumparan itu?",
        answer: 200,
        tolerance: 2,
        suffix: " lilitan",
        solution:
          "Dari ε = N·(ΔΦ/Δt), maka N = ε/(ΔΦ/Δt) = 12/(0,003/0,05) = 12/0,06 = <strong>200 lilitan</strong>.",
        hint: "Susun ulang: N = ε ÷ (ΔΦ/Δt).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan: membuat GGL induksi lebih besar atau lebih kecil.",
        buckets: ["GGL lebih besar", "GGL lebih kecil"],
        items: [
          { text: "Magnet digerakkan lebih cepat", bucket: "GGL lebih besar" },
          { text: "Jumlah lilitan ditambah", bucket: "GGL lebih besar" },
          { text: "Magnet digerakkan lebih lambat", bucket: "GGL lebih kecil" },
          { text: "Lilitan dikurangi", bucket: "GGL lebih kecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kompor Induksi",
        html: "Kompor induksi tidak punya api maupun elemen panas yang membara. Di bawah permukaan kaca, ada kumparan yang dialiri arus bolak-balik berfrekuensi tinggi, menghasilkan fluks magnetik yang berubah sangat cepat. Saat panci besi diletakkan di atasnya, perubahan fluks itu menginduksi arus berputar di dasar panci. Arus inilah yang memanaskan panci secara langsung. Karena ΔΦ/Δt sangat besar (berubah ribuan kali per detik), panas yang dihasilkan pun besar, padahal permukaan kompornya sendiri tetap relatif dingin.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan hukum Faraday secara penuh: <strong>ε = -N·(dΦ/dt)</strong>. GGL induksi sama dengan jumlah lilitan N dikali laju perubahan fluks dΦ/dt. Makin banyak lilitan dan makin cepat fluks berubah, makin besar GGL. Tanda negatif berasal dari hukum Lenz dan hanya menunjukkan arah, bukan mengurangi besarnya. Inilah persamaan yang menjalankan setiap generator di dunia.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum Faraday: ε = -N·(dΦ/dt), GGL sebanding jumlah lilitan dan laju perubahan fluks.",
          "Yang membangkitkan listrik adalah laju perubahan fluks, bukan besar fluksnya.",
          "Menggandakan kecepatan perubahan atau jumlah lilitan menggandakan GGL.",
          "Hukum Faraday adalah dasar generator, dinamo, dan kompor induksi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum Faraday dinyatakan sebagai?",
            options: ["ε = -N·(dΦ/dt)", "F = B·I·L", "B = µ₀·n·I", "V = I·R"],
            answer: 0,
            explain: "GGL induksi = jumlah lilitan dikali laju perubahan fluks.",
          },
          {
            q: "GGL induksi paling besar dihasilkan oleh?",
            options: [
              "Fluks besar yang diam",
              "Fluks kecil yang berubah sangat cepat",
              "Magnet yang sangat berat",
              "Kumparan tanpa lilitan",
            ],
            answer: 1,
            explain: "Yang penting laju perubahan fluks, bukan besar fluksnya.",
          },
          {
            q: "Kumparan 100 lilitan, fluks berubah 0,002 Wb dalam 0,01 s. GGL-nya?",
            options: ["10 V", "20 V", "2 V", "200 V"],
            answer: 1,
            explain: "ε = 100 × (0,002/0,01) = 100 × 0,2 = 20 V.",
          },
          {
            q: "Jika magnet digerakkan dua kali lebih cepat, GGL menjadi?",
            options: ["Setengah", "Dua kali", "Tetap", "Nol"],
            answer: 1,
            explain: "GGL sebanding laju perubahan fluks, jadi dua kali lebih cepat = dua kali GGL.",
          },
          {
            q: "Kompor induksi memanaskan panci karena?",
            options: [
              "Api di bawah kaca",
              "Fluks berubah cepat menginduksi arus di dasar panci",
              "Gesekan panci",
              "Cahaya inframerah",
            ],
            answer: 1,
            explain: "Perubahan fluks cepat menginduksi arus pemanas di dasar panci besi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-lenz",
    levelId: "induksi-elektromagnetik",
    order: 3,
    title: "Hukum Lenz",
    summary:
      "Hukum Faraday memberi besar GGL, tapi ke arah mana arusnya mengalir? Lenz menjawab dengan satu kata: melawan. Dan itu menjaga kekekalan energi.",
    durationMin: 13,
    tags: ["fisika", "hukum Lenz", "induksi", "kekekalan energi"],
    blocks: [
      {
        type: "paragraph",
        html: "Jatuhkan magnet kuat ke dalam pipa tembaga tegak. Anehnya, magnet itu meluncur turun perlahan, seakan ada tangan tak terlihat menahannya, padahal tembaga bukan bahan magnetik. Sebelum menuliskan rumus, ayo kita selidiki gaya rem misterius ini, yang ternyata adalah hukum Lenz beraksi.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Magnet Jatuh Lambat di Pipa Tembaga",
        caption: "Arus induksi yang lahir di pipa menciptakan medan yang menahan magnet.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Saat magnet mendekat, kumparan membangkitkan arus yang medannya <strong>menolak</strong> magnet itu (seolah menahan agar tak masuk). Saat magnet menjauh, arus berbalik dan medannya <strong>menarik</strong> magnet (seolah menahan agar tak pergi). Apa pun yang kamu lakukan, arus induksi selalu <strong>melawan</strong> perubahan yang menyebabkannya. Itulah hukum Lenz.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa harus melawan?",
        html: "Bayangkan bila arus induksi malah <strong>membantu</strong> gerakan magnet. Magnet akan makin cepat, menghasilkan arus lebih besar, mempercepat lagi, dan seterusnya: energi muncul dari ketiadaan. Itu mustahil. Maka alam memilih perlawanan, sehingga kita harus melakukan <strong>usaha</strong> untuk menggerakkan magnet, dan usaha itulah yang berubah menjadi energi listrik. Hukum Lenz adalah wujud kekekalan energi.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan reaksi kumparan sesuai hukum Lenz.",
        buckets: ["Kumparan menolak magnet", "Kumparan menarik magnet"],
        items: [
          { text: "Kutub utara magnet didekatkan", bucket: "Kumparan menolak magnet" },
          { text: "Magnet didorong masuk kumparan", bucket: "Kumparan menolak magnet" },
          { text: "Kutub utara magnet ditarik menjauh", bucket: "Kumparan menarik magnet" },
          { text: "Magnet ditarik keluar kumparan", bucket: "Kumparan menarik magnet" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan situasi dengan akibatnya menurut hukum Lenz.",
        pairs: [
          { left: "Magnet jatuh dalam pipa tembaga", right: "Melaju lambat karena ditahan arus induksi" },
          { left: "Arus induksi", right: "Selalu melawan perubahan fluks" },
          { left: "Tanda negatif pada hukum Faraday", right: "Menyatakan arah perlawanan" },
          { left: "Alasan adanya perlawanan", right: "Menjaga kekekalan energi" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kumparan 50 lilitan mengalami penurunan fluks dari 0,06 Wb menjadi 0,02 Wb dalam 0,2 s. Berapa BESAR GGL induksi yang timbul? (abaikan tandanya)",
        answer: 10,
        tolerance: 0.1,
        suffix: " V",
        solution:
          "ΔΦ = 0,06 − 0,02 = 0,04 Wb dalam 0,2 s. Besar ε = N·|ΔΦ/Δt| = 50 × (0,04/0,2) = 50 × 0,2 = <strong>10 V</strong>. Tanda negatif (Lenz) hanya menunjukkan arah arus melawan penurunan fluks.",
        hint: "Cari ΔΦ dulu, lalu ε = N × |ΔΦ/Δt|.",
      },
      {
        type: "case",
        title: "Studi Kasus: Rem Magnetik Kereta dan Roller Coaster",
        html: "Kereta cepat dan roller coaster modern memakai rem tanpa gesekan yang disebut rem arus pusar. Saat gerbong melaju, lempeng logam padanya melewati medan magnet kuat, menimbulkan arus induksi yang, sesuai hukum Lenz, menciptakan gaya yang melawan gerak. Hasilnya pengereman mulus tanpa bagian yang saling bergesek, sehingga tidak ada komponen yang aus. Makin cepat kereta, makin kuat perlawanannya: rem ini otomatis lebih kuat justru saat paling dibutuhkan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita maknai tanda itu. Hukum Lenz tersimpan pada <strong>tanda negatif</strong> di hukum Faraday: <strong>ε = -N·(dΦ/dt)</strong>. Tanda minus berarti arus induksi selalu mengalir ke arah yang <strong>melawan</strong> perubahan fluks penyebabnya. Ini bukan menambah atau mengurangi besar GGL, melainkan menetapkan arahnya, dan sekaligus menjamin energi tidak muncul dari ketiadaan.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum Lenz: arus induksi selalu melawan perubahan fluks yang menyebabkannya.",
          "Perlawanan ini adalah wujud hukum kekekalan energi.",
          "Tanda negatif pada ε = -N·(dΦ/dt) menyatakan arah perlawanan, bukan besar.",
          "Diterapkan pada rem magnetik (arus pusar) tanpa gesekan pada kereta dan wahana.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum Lenz menyatakan arus induksi selalu?",
            options: [
              "Memperkuat perubahan",
              "Melawan perubahan penyebabnya",
              "Searah medan luar",
              "Bernilai nol",
            ],
            answer: 1,
            explain: "Arus induksi melawan perubahan fluks demi kekekalan energi.",
          },
          {
            q: "Mengapa magnet jatuh lambat di pipa tembaga?",
            options: [
              "Tembaga menarik magnet",
              "Arus induksi menciptakan gaya yang melawan gerak",
              "Gravitasi melemah",
              "Tembaga bersifat magnetik",
            ],
            answer: 1,
            explain: "Arus pusar di pipa menimbulkan medan yang menahan magnet (Lenz).",
          },
          {
            q: "Tanda negatif pada hukum Faraday menyatakan?",
            options: [
              "GGL selalu mengecil",
              "Arah arus melawan perubahan fluks",
              "Energi hilang",
              "Fluks negatif",
            ],
            answer: 1,
            explain: "Tanda minus menandakan arah perlawanan sesuai hukum Lenz.",
          },
          {
            q: "Hukum Lenz pada dasarnya menegaskan hukum?",
            options: ["Kekekalan energi", "Kekekalan massa", "Ohm", "Pascal"],
            answer: 0,
            explain: "Bila tidak melawan, energi akan muncul dari ketiadaan; itu mustahil.",
          },
          {
            q: "Saat kutub utara magnet didekatkan ke kumparan, kumparan akan?",
            options: ["Menarik magnet", "Menolak magnet", "Diam", "Memanas"],
            answer: 1,
            explain: "Kumparan menolak agar melawan pertambahan fluks (Lenz).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "ggl-gerak-pada-kawat",
    levelId: "induksi-elektromagnetik",
    order: 4,
    title: "GGL Gerak pada Kawat",
    summary:
      "Tak perlu magnet bergerak. Cukup geser sebatang kawat menyilang medan, dan beda potensial langsung lahir di ujung-ujungnya.",
    durationMin: 13,
    tags: ["fisika", "GGL gerak", "induksi", "kawat"],
    blocks: [
      {
        type: "paragraph",
        html: "Pegang sebatang logam lalu gerakkan menyilang medan magnet. Tanpa baterai, tanpa magnet yang bergerak, tiba-tiba ujung-ujungnya memiliki beda potensial. Bila kawat itu bagian dari rangkaian tertutup, arus pun mengalir. Sebelum menuliskan rumus, ayo kita pahami dari mana tegangan ini muncul.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Batang Logam Digeser di Atas Rel dalam Medan",
        caption: "Saat batang bergeser, arus mengalir di rangkaian rel yang menyertainya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Di dalam batang logam ada muatan-muatan bebas. Saat batang bergerak menyilang medan, tiap muatan ikut bergerak, dan gaya Lorentz mendorongnya ke salah satu ujung batang. Akibatnya satu ujung kelebihan muatan, ujung lain kekurangan: lahirlah <strong>beda potensial</strong>. Inilah induksi yang dipandang dari sisi gaya Lorentz, bukan dari perubahan fluks.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua sudut pandang, satu kebenaran",
        html: "GGL gerak bisa dijelaskan dua cara yang sama benarnya: lewat <strong>perubahan fluks</strong> (luas yang disapu batang bertambah, fluks berubah) maupun lewat <strong>gaya Lorentz</strong> pada muatan dalam batang. Keduanya menghasilkan rumus yang sama. Makin panjang batang, makin kuat medan, dan makin cepat geraknya, makin besar GGL yang lahir.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "line",
        title: "GGL Gerak vs Kecepatan Batang",
        unit: "volt (V)",
        source: "panjang batang L = 0,5 m, medan B = 0,4 T, ε = B·L·v",
        note: "Pada panjang dan medan tetap, GGL bertambah lurus seiring kecepatan batang. Dua kali laju berarti dua kali GGL.",
        data: [
          { label: "2 m/s", value: 0.4, color: "#34d399" },
          { label: "4 m/s", value: 0.8, color: "#22d3ee" },
          { label: "6 m/s", value: 1.2, color: "#38bdf8" },
          { label: "10 m/s", value: 2.0, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebatang logam panjang 0,5 m digerakkan dengan kecepatan 4 m/s tegak lurus medan magnet 0,4 T. Berapa GGL gerak yang timbul di ujung-ujungnya?",
        answer: 0.8,
        tolerance: 0.01,
        suffix: " V",
        solution:
          "Pakai ε = B·L·v = 0,4 × 0,5 × 4 = <strong>0,8 V</strong>. Karena gerak tegak lurus medan, seluruh kecepatan ikut menyumbang GGL.",
        hint: "ε = B·L·v. Kalikan ketiganya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Batang sepanjang 0,2 m bergerak 5 m/s tegak lurus medan, dan menghasilkan GGL 0,5 V. Berapa kuat medan magnetnya?",
        answer: 0.5,
        tolerance: 0.01,
        suffix: " T",
        solution:
          "Dari ε = B·L·v, maka B = ε/(L·v) = 0,5/(0,2 × 5) = 0,5/1 = <strong>0,5 T</strong>.",
        hint: "Susun ulang: B = ε ÷ (L·v).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan: membuat GGL gerak lebih besar atau lebih kecil.",
        buckets: ["GGL lebih besar", "GGL lebih kecil"],
        items: [
          { text: "Batang digerakkan lebih cepat", bucket: "GGL lebih besar" },
          { text: "Batang lebih panjang", bucket: "GGL lebih besar" },
          { text: "Medan magnet diperkuat", bucket: "GGL lebih besar" },
          { text: "Batang digerakkan lebih lambat", bucket: "GGL lebih kecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: GGL pada Sayap Pesawat",
        html: "Saat pesawat terbang, kedua ujung sayap logamnya bergerak menyilang medan magnet Bumi. Akibatnya, gaya Lorentz mendorong muatan ke salah satu ujung sayap, menimbulkan beda potensial kecil antara ujung-ujung sayap, persis seperti batang yang digeser dalam medan. Beda potensial ini terlalu kecil untuk dimanfaatkan, tapi nyata dan terukur. Fenomena serupa membuat batang panjang yang ditarik di luar angkasa (tether) bisa membangkitkan tegangan dari medan magnet Bumi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan. GGL gerak pada batang sepanjang L yang bergerak dengan kecepatan v tegak lurus medan B adalah <strong>ε = B·L·v</strong>. Ini sebenarnya hukum Faraday yang ditulis ulang: luas yang disapu batang per detik adalah L·v, sehingga laju perubahan fluks B·(L·v) sama dengan GGL-nya. Bila membentuk sudut, ε = B·L·v·sin θ. Makin panjang, makin cepat, makin kuat medan, makin besar GGL.",
      },
      {
        type: "takeaways",
        items: [
          "Kawat yang bergerak menyilang medan menimbulkan GGL tanpa magnet yang bergerak.",
          "Penyebabnya: gaya Lorentz mendorong muatan ke ujung kawat (atau setara, fluks berubah).",
          "Besar GGL gerak: ε = B·L·v, membesar dengan medan, panjang, dan kecepatan.",
          "Ini adalah hukum Faraday yang dipandang dari sudut gaya Lorentz.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "GGL gerak pada kawat dirumuskan?",
            options: ["ε = B·L·v", "ε = -N·dΦ/dt", "F = B·I·L", "B = µ₀·n·I"],
            answer: 0,
            explain: "GGL gerak pada batang lurus: ε = B·L·v.",
          },
          {
            q: "Penyebab munculnya GGL gerak pada batang adalah?",
            options: [
              "Pemanasan batang",
              "Gaya Lorentz mendorong muatan ke ujung batang",
              "Gesekan udara",
              "Gravitasi",
            ],
            answer: 1,
            explain: "Gaya Lorentz pada muatan dalam batang menimbulkan beda potensial.",
          },
          {
            q: "Batang 0,4 m bergerak 3 m/s tegak lurus medan 0,5 T. GGL-nya?",
            options: ["0,6 V", "0,3 V", "1,2 V", "0,12 V"],
            answer: 0,
            explain: "ε = 0,5 × 0,4 × 3 = 0,6 V.",
          },
          {
            q: "Jika kecepatan batang digandakan, GGL geraknya?",
            options: ["Setengah", "Dua kali", "Tetap", "Empat kali"],
            answer: 1,
            explain: "ε sebanding v, jadi dua kali laju memberi dua kali GGL.",
          },
          {
            q: "GGL gerak pada dasarnya adalah bentuk lain dari?",
            options: ["Hukum Ohm", "Hukum Faraday", "Hukum Pascal", "Hukum Archimedes"],
            answer: 1,
            explain: "Luas tersapu per detik membuat fluks berubah, itulah hukum Faraday.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "induktansi-diri",
    levelId: "induksi-elektromagnetik",
    order: 5,
    title: "Induktansi Diri",
    summary:
      "Sebuah kumparan bahkan bisa melawan perubahan arusnya sendiri. Sifat 'keras kepala' ini melahirkan komponen yang ada di hampir semua perangkat elektronik.",
    durationMin: 13,
    tags: ["fisika", "induktansi", "induktor", "GGL balik"],
    blocks: [
      {
        type: "paragraph",
        html: "Nyalakan dan matikan sebuah kumparan besar dengan cepat, lalu amati: arusnya tidak langsung naik atau turun, melainkan butuh waktu, seolah enggan berubah. Saat diputus tiba-tiba, bahkan bisa muncul percikan di sakelar. Sebelum menuliskan rumus, ayo kita pahami mengapa kumparan melawan perubahan arusnya sendiri.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Lampu pada Kumparan Menyala dan Padam Bertahap",
        caption: "Arus pada kumparan naik dan turun perlahan, tidak seketika.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Saat arus dalam kumparan berubah, fluks yang dibuatnya sendiri ikut berubah. Menurut Faraday, perubahan fluks itu menimbulkan GGL. Dan menurut Lenz, GGL itu <strong>melawan</strong> perubahan arus penyebabnya. Jadi kumparan menentang arus yang hendak naik, dan menahan arus yang hendak turun. Sifat 'keras kepala terhadap perubahan arus' inilah yang disebut <strong>induktansi diri</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Induktor: penyimpan energi medan",
        html: "Komponen yang dirancang punya induktansi besar disebut <strong>induktor</strong>, biasanya berupa kumparan, kadang berinti besi. Induktor menyimpan energi dalam medan magnetnya selama arus mengalir. Karena melawan perubahan arus mendadak, induktor dipakai untuk memuluskan arus, menyaring sinyal, dan bersama kapasitor membentuk rangkaian penala radio.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "line",
        title: "GGL Balik Induktor vs Laju Perubahan Arus",
        unit: "volt (V)",
        source: "induktansi L = 0,5 H, ε = L·(ΔI/Δt)",
        note: "Pada induktansi tetap, GGL balik bertambah lurus seiring laju perubahan arus. Perubahan arus yang cepat memicu GGL besar.",
        data: [
          { label: "2 A/s", value: 1, color: "#34d399" },
          { label: "4 A/s", value: 2, color: "#22d3ee" },
          { label: "10 A/s", value: 5, color: "#38bdf8" },
          { label: "20 A/s", value: 10, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah induktor 0,5 H mengalami perubahan arus 4 A dalam 0,1 s. Berapa besar GGL balik (GGL induksi diri) yang timbul?",
        answer: 20,
        tolerance: 0.1,
        suffix: " V",
        solution:
          "Pakai ε = L·(ΔI/Δt) = 0,5 × (4/0,1) = 0,5 × 40 = <strong>20 V</strong>. Perubahan arus yang cepat menimbulkan GGL balik besar.",
        hint: "ε = L × (ΔI / Δt). Hitung ΔI/Δt dulu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kumparan menimbulkan GGL balik 6 V ketika arusnya berubah 3 A dalam 0,5 s. Berapa induktansi kumparan itu?",
        answer: 1,
        tolerance: 0.02,
        suffix: " H",
        solution:
          "Dari ε = L·(ΔI/Δt), maka L = ε/(ΔI/Δt) = 6/(3/0,5) = 6/6 = <strong>1 H</strong>.",
        hint: "Susun ulang: L = ε ÷ (ΔI/Δt).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan: membuat GGL balik induktor lebih besar atau lebih kecil.",
        buckets: ["GGL balik lebih besar", "GGL balik lebih kecil"],
        items: [
          { text: "Arus diubah lebih cepat", bucket: "GGL balik lebih besar" },
          { text: "Induktansi diperbesar", bucket: "GGL balik lebih besar" },
          { text: "Arus diubah lebih lambat", bucket: "GGL balik lebih kecil" },
          { text: "Induktansi diperkecil", bucket: "GGL balik lebih kecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Percikan di Sakelar dan Koil Pengapian Mobil",
        html: "Saat sakelar pada rangkaian berinduktor diputus tiba-tiba, arus berusaha turun ke nol dalam waktu sangat singkat. Karena ΔI/Δt menjadi sangat besar, GGL balik melonjak tinggi, kadang cukup untuk meloncatkan percikan di celah sakelar. Mobil memanfaatkan justru efek ini: koil pengapian sengaja memutus arus pada kumparan secara mendadak agar lonjakan tegangan ribuan volt itu meloncatkan percikan di busi, lalu membakar bahan bakar. Sifat melawan perubahan arus diubah menjadi pemantik mesin.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan. GGL induksi diri (GGL balik) pada induktor adalah <strong>ε = -L·(dI/dt)</strong>, dengan L disebut <strong>induktansi</strong>, satuannya henry (H). Tanda negatif (Lenz) menandakan GGL melawan perubahan arus. Energi yang tersimpan dalam medan magnet induktor adalah <strong>W = ½·L·I²</strong>. Induktansi mengukur seberapa kuat sebuah kumparan menentang perubahan arusnya sendiri.",
      },
      {
        type: "takeaways",
        items: [
          "Induktansi diri: kumparan melawan perubahan arusnya sendiri lewat GGL balik.",
          "GGL balik: ε = -L·(dI/dt), makin cepat arus berubah makin besar GGL.",
          "Induktansi L diukur dalam henry (H); energi tersimpan W = ½·L·I².",
          "Diterapkan pada penyaring arus, rangkaian penala, dan koil pengapian mobil.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "GGL induksi diri pada induktor dirumuskan?",
            options: ["ε = -L·(dI/dt)", "ε = B·L·v", "F = B·I·L", "Φ = B·A·cos θ"],
            answer: 0,
            explain: "GGL balik induktor: ε = -L·(dI/dt).",
          },
          {
            q: "Satuan induktansi adalah?",
            options: ["Henry", "Weber", "Tesla", "Farad"],
            answer: 0,
            explain: "Induktansi L diukur dalam henry (H).",
          },
          {
            q: "Induktor 0,2 H, arus berubah 5 A dalam 0,1 s. GGL baliknya?",
            options: ["10 V", "20 V", "1 V", "5 V"],
            answer: 0,
            explain: "ε = 0,2 × (5/0,1) = 0,2 × 50 = 10 V.",
          },
          {
            q: "Mengapa muncul percikan saat sakelar berinduktor diputus tiba-tiba?",
            options: [
              "Arus naik perlahan",
              "ΔI/Δt sangat besar sehingga GGL balik melonjak",
              "Induktansi menjadi nol",
              "Tegangan baterai naik",
            ],
            answer: 1,
            explain: "Perubahan arus yang sangat cepat membuat GGL balik melonjak tinggi.",
          },
          {
            q: "Energi yang tersimpan dalam induktor adalah?",
            options: ["W = ½·L·I²", "W = I·R", "W = q·V", "W = ½·m·v²"],
            answer: 0,
            explain: "Energi medan magnet induktor: W = ½·L·I².",
          },
        ],
      },
    ],
  },
];
