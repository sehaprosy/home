function getBotResponse(input) {
  //rock paper scissors
  if (input == "batu") {
    return "kertas";
  } else if (input == "kertas") {
    return "gunting";
  } else if (input == "gunting") {
    return "batu";
  }

  // Simple responses
  if (input == "Mulai") {
    return "Halo semua 🙌<br/>Aku GiBot, bot pemandu yang akan membantu kalian dalam menggunakan website ini.<br/><br/>SEHAPROSY (Sexual Harassment Protection System) adalah sebuah website yang akan memberikan edukasi mengenai cara untuk melindungi diri dari pelecehan seksual serta memberikan penanganan pelecehan seksual di kalangan remaja secara daring (online) sehingga korban lebih berani mengungkapkan perasaan serta permasalahan yang dialaminya.<br/><br/>Oiyaaa, kalo kamu bingung mulai dari mana silakan ketik 'Kata kunci' ya...<br/><br/>Terima kasih!";
  } else if (input.indexOf("alasan") >= 0) {
    return "Indonesia akan memasuki periode bonus demografi di mana pada saat itu jumlah usia produktif akan lebih tinggi dibandingkan anak-anak dan orang tua. Jika orang dengan usia produktif tersebut mengalami stress atau gangguan jiwa karena pelecehan seksual tentunya akan menghambat dalam pembangunan SDM yang menjadi salah satu pilar dalam menuju Indonesia Emas 2045. Oleh karena itu website ini bertujuan untuk mencegah dan menangani masalah tersebut.";
  } else if (input.indexOf("atasi") >= 0) {
    return "Berikut merupakan cara mengatasi maupun menghadapi pelecehan seksual:<br/>1. Pastikan korban dalam keadaan aman.<br/>2. Jadi pendengar yang baik tanpa menyalahkan.<br/>3. Laporkan insiden tersebut kepada pihak berwenang.<br/>4. Jika mungkin, dapatkan bukti yang mendukung.<br/>5. Sarankan korban untuk berkonsultasi dengan ahli.<br/>6. Ingatkan korban bahwa ini bukan kesalahannya.<br/>7. Hindari konfrontasi langsung dengan pelaku.<br/>8. Cari bantuan hukum untuk langkah selanjutnya.<br/>9. Cari dukungan dari lingkungan sekitar.<br/>10. Bagikan pengalaman untuk meningkatkan kesadaran di lingkungan sekitar.";
  } else if (input.indexOf("hadapi") >= 0) {
    return "Berikut merupakan cara mengatasi maupun menghadapi pelecehan seksual:<br/>1. Pastikan korban dalam keadaan aman.<br/>2. Jadi pendengar yang baik tanpa menyalahkan.<br/>3. Laporkan insiden tersebut kepada pihak berwenang.<br/>4. Jika mungkin, dapatkan bukti yang mendukung.<br/>5. Sarankan korban untuk berkonsultasi dengan ahli.<br/>6. Ingatkan korban bahwa ini bukan kesalahannya.<br/>7. Hindari konfrontasi langsung dengan pelaku.<br/>8. Cari bantuan hukum untuk langkah selanjutnya.<br/>9. Cari dukungan dari lingkungan sekitar.<br/>10. Bagikan pengalaman untuk meningkatkan kesadaran di lingkungan sekitar.";
  } else if (input.indexOf("Alasan") >= 0) {
    return "Indonesia akan memasuki periode bonus demografi di mana pada saat itu jumlah usia produktif akan lebih tinggi dibandingkan anak-anak dan orang tua. Jika orang dengan usia produktif tersebut mengalami stress atau gangguan jiwa karena pelecehan seksual tentunya akan menghambat dalam pembangunan SDM yang menjadi salah satu pilar dalam menuju Indonesia Emas 2045. Oleh karena itu website ini bertujuan untuk mencegah dan menangani masalah tersebut.";
  } else if (input.indexOf("latar") >= 0) {
    return "Indonesia akan memasuki periode bonus demografi di mana pada saat itu jumlah usia produktif akan lebih tinggi dibandingkan anak-anak dan orang tua. Jika orang dengan usia produktif tersebut mengalami stress atau gangguan jiwa karena pelecehan seksual tentunya akan menghambat dalam pembangunan SDM yang menjadi salah satu pilar dalam menuju Indonesia Emas 2045. Oleh karena itu website ini bertujuan untuk mencegah dan menangani masalah tersebut.";
  } else if (input.indexOf("mulai") >= 0) {
    return "Halo semua 🙌<br/>Aku GiBot, bot pemandu yang akan membantu kalian dalam menggunakan website ini.<br/><br/>SEHAPROSY (Sexual Harassment Protection System) adalah sebuah website yang akan memberikan edukasi mengenai cara untuk melindungi diri dari pelecehan seksual serta memberikan penanganan pelecehan seksual di kalangan remaja secara daring (online) sehingga korban lebih berani mengungkapkan perasaan serta permasalahan yang dialaminya.<br/><br/>Oiyaaa, kalo kamu bingung mulai dari mana silakan ketik 'Kata kunci' ya...<br/><br/>Terima kasih!";
  } else if (input.indexOf("buat") >= 0) {
    return "Pembuat aku adalah Aristya dan Ananta";
  } else if (input.indexOf("cipta") >= 0) {
    return "Pencipta aku adalah Aristya dan Ananta";
  } else if (input.indexOf("cinta") >= 0) {
    return "Aku juga!";
  } else if (input.indexOf("kunci") >= 0) {
    return "Kamu bingung mau nulis apa? Coba tanya mengenai hal dibawah ini ke GiBot deh...<br/><br/>1. Coba tanyakan pencipta/pembuat GiBot. <br/> 2. Coba tanyakan fitur-fitur yang tersedia di SEHAPROSY. <br>3. Coba tanyakan mengenai cara mencegah pelecehan seksual.<br/>4. Coba tanyakan mengenai siapa saja yang dapat mengalami pelecehan seksual.<br/>5. Coba tanyakan mengenai salah satu fitur di SEHAPROSY.<br/>6. Coba tanyakan alasan membuat SEHAPROSY.<br/><br/>Tips jika jawaban yang diberikan tidak sesuai:<br/>1. Coba kata kunci lain<br/>2. Tulis setiap perintah dengan huruf kecil<br/>3. Periksa penulisan kata (hindari saltik/typo)<br/><br/>Selain hal di atas, GiBot bisa ngelakuin hal lain lho! (Easter Egg)";
  } else if (input.indexOf("pagi") >= 0) {
    return "Selamat pagi juga! Apakah ada yang bisa dibantu?";
  } else if (input.indexOf("siang") >= 0) {
    return "Hai! Selamat siang! Apakah kamu perlu bantuan?";
  } else if (input.indexOf("malam") >= 0) {
    return "Selamat malam juga! Ada yang bisa dibantu?";
  } else if (input.indexOf("sore") >= 0) {
    return "Selamat sore! Ada yang bisa dibantu?";
  } else if (input.indexOf("mengalami") >= 0) {
    return "Pelecehan seksual dapat dialami oleh siapa saja, tanpa memandang usia, jenis kelamin, latar belakang sosial, atau status ekonomi. Baik pria, wanita, anak-anak, remaja, maupun orang dewasa dapat menjadi korban pelecehan seksual. Pelecehan seksual dapat terjadi di manapun, termasuk di rumah, tempat kerja, sekolah, atau dalam situasi sosial. Pemahaman yang tepat tentang pelecehan seksual penting untuk meningkatkan kesadaran dan melindungi semua orang dari risiko tersebut.";
  } else if (input.indexOf("korban") >= 0) {
    return "Pelecehan seksual dapat dialami oleh siapa saja, tanpa memandang usia, jenis kelamin, latar belakang sosial, atau status ekonomi. Baik pria, wanita, anak-anak, remaja, maupun orang dewasa dapat menjadi korban pelecehan seksual. Pelecehan seksual dapat terjadi di manapun, termasuk di rumah, tempat kerja, sekolah, atau dalam situasi sosial. Pemahaman yang tepat tentang pelecehan seksual penting untuk meningkatkan kesadaran dan melindungi semua orang dari risiko tersebut.";
  }

  // Curhat
  else if (input.indexOf("mekanisme curhat") >= 0) {
    return "Berikut merupakan mekanisme fitur curhat<br/>1. Klik gambar fitur 'Curhat' pada feature section.<br/>2. Pada layar akan muncul tiga pilihan yaitu WhatsApp Aristya, WhatsApp Ananta, dan Layanan SAPA 129.<br/>3. Klik salah satu pilihan dan kamu akan diarahkan ke aplikasi WhatsApp.<br/>4. Kirim pesan mengenai permasalahan yang dialami.<br/>5. WhatsApp Aristya dan WhatsApp Ananta hanya dapat memberikan motivasi dan saran dasar untukmu. Jika menginginkan saran profesional silakan pilih Layanan SAPA 129.<br/>";
  } else if (input.indexOf("mekanisme fitur curhat") >= 0) {
    return "Berikut merupakan mekanisme fitur curhat<br/>1. Klik gambar fitur 'Curhat' pada feature section.<br/>2. Pada layar akan muncul tiga pilihan yaitu WhatsApp Aristya, WhatsApp Ananta, dan Layanan SAPA 129.<br/>3. Klik salah satu pilihan dan kamu akan diarahkan ke aplikasi WhatsApp.<br/>4. Kirim pesan mengenai permasalahan yang dialami.<br/>5. WhatsApp Aristya dan WhatsApp Ananta hanya dapat memberikan motivasi dan saran dasar untukmu. Jika menginginkan saran profesional silakan pilih Layanan SAPA 129.<br/>";
  } else if (input.indexOf("curhat") >= 0) {
    return "Fitur curhat akan mengarahkan kamu ke sebuah laman yang memiliki tiga pilihan yaitu WhatsApp Aristya, WhatsApp Ananta, dan Telegram. Yang di mana fitur ini berfungsi sebagai tempat kamu untuk mengeluarkan isi hatimu baik secara anonim, ataupun tidak.<br/><br/>Dalam fitur ini kami akan memberikan motivasi dan saran-saran dasar mengenai pelecehan seksual. Jika kamu membutuhkan tenaga ahli dapat menghubungi Layanan SAPA 129 pada fitur ini.";
  } else if (input.indexOf("Curhat") >= 0) {
    return "Fitur curhat akan mengarahkan kamu ke sebuah laman yang memiliki tiga pilihan yaitu WhatsApp Aristya, WhatsApp Ananta, dan Telegram. Yang di mana fitur ini berfungsi sebagai tempat kamu untuk mengeluarkan isi hatimu baik secara anonim, ataupun tidak.<br/><br/>Dalam fitur ini kami akan memberikan motivasi dan saran-saran dasar mengenai pelecehan seksual. Jika kamu membutuhkan tenaga ahli dapat menghubungi Layanan SAPA 129 pada fitur ini.";
  }

  // Quotes
  else if (input.indexOf("mekanisme quotes") >= 0) {
    return "Berikut merupakan mekanisme fitur quotes<br/>1. Klik gambar fitur 'Quotes' pada feature section.<br/>2. Pada layar akan muncul sebuah kutipan dan tokoh pembuat kutipan.<br/>3. Klik tombol 'Kutipan Lain' untuk mengganti kutipan.<br/>";
  } else if (input.indexOf("mekanisme fitur quotes") >= 0) {
    return "Berikut merupakan mekanisme fitur quotes<br/>1. Klik gambar fitur 'Quotes' pada feature section.<br/>2. Pada layar akan muncul sebuah kutipan dan tokoh pembuat kutipan.<br/>3. Klik tombol 'Kutipan Lain' untuk mengganti kutipan.<br/>";
  } else if (input.indexOf("quotes") >= 0) {
    return "Fitur quotes (kutipan) adalah sebuah fitur di mana terdapat sebuah quotes atau kutipan dari seorang tokoh yang memberikan motivasi dan semangat kepada pembaca. Fitur ini ditampilkan di sebuah kotak dan di lengkapi dengan tombol 'Kutipan Lain' yang jika di klik akan menampilkan quotes yang berbeda.";
  } else if (input.indexOf("Quotes") >= 0) {
    return "Fitur quotes (kutipan) adalah sebuah fitur di mana terdapat sebuah quotes atau kutipan dari seorang tokoh yang memberikan motivasi dan semangat kepada pembaca. Fitur ini ditampilkan di sebuah kotak dan di lengkapi dengan tombol 'Kutipan Lain' yang jika di klik akan menampilkan quotes yang berbeda.";
  }

  // GiBot
  else if (input.indexOf("mekanisme gibot") >= 0) {
    return "Berikut merupakan mekanisme fitur GiBot<br/>1. Klik gambar fitur 'GitBot' pada feature section.<br/>2. Pada layar akan muncul kotak chat, jam, dan tulisan 'Ketik 'Mulai' untuk memulai'.<br/>3. Setelah mengetik 'Mulai' maka akan muncul sebuah pesan pembuka.<br/>4. Jika mengetik 'Kata kunci' maka akan muncul clue yang memicu pengguna untuk mengetik kata kunci.<br/>5. Jika pada suatu kalimat mengandung suatu kata kunci maka akan memicu sebuah pesan.";
  } else if (input.indexOf("mekanisme fitur gibot") >= 0) {
    return "Berikut merupakan mekanisme fitur quotes<br/>1. Klik gambar fitur 'GitBot' pada feature section.<br/>2. Pada layar akan muncul kotak chat, jam, dan tulisan 'Ketik 'Mulai' untuk memulai'.<br/>3. Setelah mengetik 'Mulai' maka akan muncul sebuah pesan pembuka.<br/>4. Jika mengetik 'Kata kunci' maka akan muncul clue yang memicu pengguna untuk mengetik kata kunci.<br/>5. Jika pada suatu kalimat mengandung suatu kata kunci maka akan memicu sebuah pesan.";
  } else if (input.indexOf("mekanisme GiBot") >= 0) {
    return "Berikut merupakan mekanisme fitur quotes<br/>1. Klik gambar fitur 'GitBot' pada feature section.<br/>2. Pada layar akan muncul kotak chat, jam, dan tulisan 'Ketik 'Mulai' untuk memulai'.<br/>3. Setelah mengetik 'Mulai' maka akan muncul sebuah pesan pembuka.<br/>4. Jika mengetik 'Kata kunci' maka akan muncul clue yang memicu pengguna untuk mengetik kata kunci.<br/>5. Jika pada suatu kalimat mengandung suatu kata kunci maka akan memicu sebuah pesan.";
  } else if (input.indexOf("mekanisme fitur GiBot") >= 0) {
    return "Berikut merupakan mekanisme fitur quotes<br/>1. Klik gambar fitur 'GitBot' pada feature section.<br/>2. Pada layar akan muncul kotak chat, jam, dan tulisan 'Ketik 'Mulai' untuk memulai'.<br/>3. Setelah mengetik 'Mulai' maka akan muncul sebuah pesan pembuka.<br/>4. Jika mengetik 'Kata kunci' maka akan muncul clue yang memicu pengguna untuk mengetik kata kunci.<br/>5. Jika pada suatu kalimat mengandung suatu kata kunci maka akan memicu sebuah pesan.";
  } else if (input.indexOf("gibot") >= 0) {
    return "GiBot adalah sebuah fitur berbentuk guide bot atau bot pemandu yang bertujuan untuk memberikan panduan mengenai penggunaan website SEHAPROSY. Selain itu website ini juga dapat memberikan informasi mengenai penanganan pelecehan seksual dan juga dapat memberikan motivasi semangat kepada kamu. ";
  } else if (input.indexOf("Gibot") >= 0) {
    return "GiBot adalah sebuah fitur berbentuk guide bot atau bot pemandu yang bertujuan untuk memberikan panduan mengenai penggunaan website SEHAPROSY. Selain itu website ini juga dapat memberikan informasi mengenai penanganan pelecehan seksual dan juga dapat memberikan motivasi semangat kepada kamu. ";
  } else if (input.indexOf("GiBot") >= 0) {
    return "GiBot adalah sebuah fitur berbentuk guide bot atau bot pemandu yang bertujuan untuk memberikan panduan mengenai penggunaan website SEHAPROSY. Selain itu website ini juga dapat memberikan informasi mengenai penanganan pelecehan seksual dan juga dapat memberikan motivasi semangat kepada kamu. ";
  }

  // Pojok Baca
  else if (input.indexOf("mekanisme pojok baca") >= 0) {
    return "Berikut merupakan mekanisme fitur pojok baca<br/>1. Klik gambar fitur 'Pojok Baca' pada feature section.<br/>2. Pada layar akan muncul lima jurnal pilihan dengan judul yaitu:<br/>a. Mengatasi dan Mencegah Tindak Kekerasan Seksual pada Perempuan dengan Pelatihan Asertif<br/>b. Pelecehan Seksual Pada Jurnalis Perempuan di Indonesia<br/>c. Perlindungan Hukum Terhadap Korban Pelecehan Seksual<br/>d. Pelecehan Seksual: Tinjauan Psikologis<br/>e. Media Sosial: Ruang Baru dalam Tindak Pelecehan Seksual Remaja<br/>3. Klik salah satu pilihan untuk membaca atau mengunduh jurnal tersebut.";
  } else if (input.indexOf("mekanisme fitur pojok baca") >= 0) {
    return "Berikut merupakan mekanisme fitur pojok baca<br/>1. Klik gambar fitur 'Pojok Baca' pada feature section.<br/>2. Pada layar akan muncul lima jurnal pilihan dengan judul yaitu:<br/>a. Mengatasi dan Mencegah Tindak Kekerasan Seksual pada Perempuan dengan Pelatihan Asertif<br/>b. Pelecehan Seksual Pada Jurnalis Perempuan di Indonesia<br/>c. Perlindungan Hukum Terhadap Korban Pelecehan Seksual<br/>d. Pelecehan Seksual: Tinjauan Psikologis<br/>e. Media Sosial: Ruang Baru dalam Tindak Pelecehan Seksual Remaja<br/>3. Klik salah satu pilihan untuk membaca atau mengunduh jurnal tersebut.";
  } else if (input.indexOf("pojok baca") >= 0) {
    return "Fitur pojok baca adalah fitur bacaan di mana para pengguna dapat membaca informasi-informasi yang berkaitan dengan pelecehan seksual. Pada fitur ini pembaca akan diberi informasi dari jurnaljurnal ilmiah. Informasi tersebut berupa cara menangani, mencegah, tindakan-tindakan yang termasuk pelecehan seksual.";
  }

  // Kuis
  else if (input.indexOf("mekanisme kuis") >= 0) {
    return "Berikut merupakan mekanisme fitur kuis<br/>1. Klik gambar fitur 'Kuis' pada feature section.<br/>2. Pada layar akan muncul dua pilihan pertanyaan yaitu pertanyaan 1 dan pertanyaan 2.<br/>3. Saat salah satu dari pilihan tersebut di klik maka pengguna akan diarahkan ke sebuah halaman yang berisi kotak peraturan yang berisi aturan mengenai kuis tersebut:a. Terdapat 10 pertanyaan dengan 4 pilihan jawaban.<br/>b. Kamu hanya punya waktu 15 detik untuk setiap pertanyaan.<br/>c. Jawaban yang dipilih tidak bisa diubah.<br/>d. Skor dihitung berdasarkan jawaban benar.<br/>4. Setelah membaca peraturan klik 'Mulai' untuk memulai kuis.<br/>5. Setelah mengerjakan kuis akan muncul skor nilai dan tombol 'Ulangi' dan 'Kembali'.<br/>6. Klik 'Ulangi' untuk mengulangi kuis.<br/>7. Klik 'Kembali' untuk kembali ke poin 2.";
  } else if (input.indexOf("mekanisme fitur kuis") >= 0) {
    return "Berikut merupakan mekanisme fitur kuis<br/>1. Klik gambar fitur 'Kuis' pada feature section.<br/>2. Pada layar akan muncul dua pilihan pertanyaan yaitu pertanyaan 1 dan pertanyaan 2.<br/>3. Saat salah satu dari pilihan tersebut di klik maka pengguna akan diarahkan ke sebuah halaman yang berisi kotak peraturan yang berisi aturan mengenai kuis tersebut:a. Terdapat 10 pertanyaan dengan 4 pilihan jawaban.<br/>b. Kamu hanya punya waktu 15 detik untuk setiap pertanyaan.<br/>c. Jawaban yang dipilih tidak bisa diubah.<br/>d. Skor dihitung berdasarkan jawaban benar.<br/>4. Setelah membaca peraturan klik 'Mulai' untuk memulai kuis.<br/>5. Setelah mengerjakan kuis akan muncul skor nilai dan tombol 'Ulangi' dan 'Kembali'.<br/>6. Klik 'Ulangi' untuk mengulangi kuis.<br/>7. Klik 'Kembali' untuk kembali ke poin 2.";
  } else if (input.indexOf("kuis") >= 0) {
    return "Fitur kuis adalah sebuah fitur yang memberikan pertanyaan kepada pengguna yang nantinya akan dijawab oleh pengguna berdasarkan pilihan jawaban yang ada. SEHAPROSY memiliki dua pilihan soal di mana masing-masing soal terdiri atas 10 pertanyaan. Setiap pertanyaan memiliki waktu menjawab selama 15 detik. Dan skor dihitung berdasarkan jawaban benar.";
  }

  // Berani Bicara
  else if (input.indexOf("mekanisme berani bicara") >= 0) {
    return "Berikut merupakan mekanisme fitur berani bicara<br/>1. Klik gambar fitur 'Berani Bicara' pada feature section.<br/>2. Pada layar akan muncul emoji reaksi dan kolom komentar.<br/>3. Klik emoji reaksi untuk memberikan reaksi tertentu.<br/>4. Untuk berkomentar maka pengguna harus login terlebih dahulu menggunakan akun Google, Twitter, Facebook, atau Disqus.<br/>5. Setelah login maka pengguna dapat berkomentar.";
  } else if (input.indexOf("mekanisme fitur berani bicara") >= 0) {
    return "Berikut merupakan mekanisme fitur berani bicara<br/>1. Klik gambar fitur 'Berani Bicara' pada feature section.<br/>2. Pada layar akan muncul emoji reaksi dan kolom komentar.<br/>3. Klik emoji reaksi untuk memberikan reaksi tertentu.<br/>4. Untuk berkomentar maka pengguna harus login terlebih dahulu menggunakan akun Google, Twitter, Facebook, atau Disqus.<br/>5. Setelah login maka pengguna dapat berkomentar.";
  } else if (input.indexOf("berani bicara") >= 0) {
    return "Fitur berani bicara adalah sebuah fitur komentar yang berbasis platform Disqus. Di mana fitur ini dapat menampilkan komentarkomentar mengenai website SEHAPROSY. Selain itu fitur ini juga dapat menampilkan reaksi pengguna yang ditampilkan melalui emoji.";
  }

  // Proteksi
  else if (input.indexOf("mekanisme proteksi") >= 0) {
    return "Berikut merupakan mekanisme fitur proteksi<br/>1. Klik gambar fitur 'Proteksi' pada feature section.<br/>2. Pada layar akan ditampilkan teks mengenai 5W+1H tentang pelecehan seksual khususnya cara menangani dan menghadapi pelecehan seksual.";
  } else if (input.indexOf("mekanisme fitur proteksi") >= 0) {
    return "Berikut merupakan mekanisme fitur proteksi<br/>1. Klik gambar fitur 'Proteksi' pada feature section.<br/>2. Pada layar akan ditampilkan teks mengenai 5W+1H tentang pelecehan seksual khususnya cara menangani dan menghadapi pelecehan seksual.";
  } else if (input.indexOf("proteksi") >= 0) {
    return "Fitur proteksi adalah fitur yang memberikan informasi mengenai cara melindungi diri dari pelecehan seksual baik secara digital ataupun nyata.";
  }

  // Default
  else if (input.indexOf("fitur") >= 0) {
    return "SEHAPROSY memiliki beragam fitur yang sangat menarik, fitur-fitur tersebut yaitu:<br/><br/>1. Fitur Quotes<br/>2. Fitur Curhat<br/>3. Fitur GiBot<br/>4. Fitur Pojok Baca<br/>5. Fitur Kuis<br/>6. Fitur Berani Bicara<br/>7. Fitur Proteksi <br/><br/>Yuk coba tanyakan mengenai pengertian maupun mekanisme fitur-fitur tersebut kepada GiBot!";
  } else if (input.indexOf("halo") >= 0) {
    return "Hai! Ada yang bisa dibantu?";
  } else if (input.indexOf("Halo") >= 0) {
    return "Hai! Ada yang bisa dibantu?";
  } else if (input.indexOf("bosan") >= 0) {
    return "Kamu bosan? Aku saranin cobain fitur kuis atau quotes deh... Seru lho";
  } else if (input.indexOf("hai") >= 0) {
    return "Halo! Ada yang bisa dibantu?";
  } else if (input.indexOf("Hai") >= 0) {
    return "Halo! Ada yang bisa dibantu?";
  } else if (input.indexOf("tindakan") >= 0) {
    return "Tindakan yang termasuk pelecehan seksual dapat mencakup berbagai bentuk, seperti sentuhan fisik yang tidak diinginkan, pencabulan verbal, eksploitasi seksual, atau pelecehan online.";
  } else if (input.indexOf("leceh") >= 0) {
    return "Pelecehan seksual adalah perilaku yang melibatkan tindakan atau komentar seksual yang tidak diinginkan atau tindakan tidak etis yang melibatkan eksploitasi secara seksual terhadap seseorang tanpa adanya persetujuan.";
  } else if (input.indexOf("Fitur") >= 0) {
    return "SEHAPROSY memiliki beragam fitur yang sangat menarik, fitur-fitur tersebut yaitu:<br/><br/>1. Fitur Quotes<br/>2. Fitur Curhat<br/>3. Fitur GiBot<br/>4. Fitur Pojok Baca<br/>5. Fitur Kuis<br/>6. Fitur Berani Bicara<br/>7. Fitur Proteksi <br/><br/>Yuk coba tanyakan mengenai pengertian maupun mekanisme fitur-fitur tersebut kepada GiBot!";
  } else if (input.indexOf("SEHAPROSY") >= 0) {
    return "SEHAPROSY (Sexual Harassment Protection System) adalah sebuah website yang akan memberikan edukasi mengenai cara untuk melindungi diri dari pelecehan seksual serta memberikan penanganan pelecehan seksual di kalangan remaja secara daring (online) sehingga korban lebih berani mengungkapkan perasaan serta permasalahan yang dialaminya.";
  } else if (input.indexOf("sehaprosy") >= 0) {
    return "SEHAPROSY (Sexual Harassment Protection System) adalah sebuah website yang akan memberikan edukasi mengenai cara untuk melindungi diri dari pelecehan seksual serta memberikan penanganan pelecehan seksual di kalangan remaja secara daring (online) sehingga korban lebih berani mengungkapkan perasaan serta permasalahan yang dialaminya.";
  } else {
    return "Maaf aku gak ngerti, coba ikuti instruksi berikut ya:<br/>1. Coba kata kunci lain<br/>2. Tulis setiap perintah dengan huruf kecil<br/>3. Periksa penulisan kata (hindari saltik/typo)";
  }
}
