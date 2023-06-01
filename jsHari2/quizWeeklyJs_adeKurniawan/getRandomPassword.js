const getRandomPassword = (s) => {
//error handling dengan menggunakan try-catch
    try {
        // memeriksa apakah nilai adalah
        // string dengan hurup kecil antara a-z
        // dan berjumlah lebih dari 6(fungsi regex)
      if (!/^[a-z]{6,}$/.test(s)) {
        //membuat pesan error dan melanjutkan proses ke bagian catch
        throw Error('Password harus dalam bentuk string dan memiliki panjang minimal 6 karakter.');
    //membuat kondisi semua kondisi selain kondisi if diatas  
    } else {
        //membuat var penampungan bernama password
        let password = '';
        //looping i dari 0 hingga 7
        for (let i = 0; i < 8; i++) {
            //kondisi i dari 0 hingga 3
          if (i <= 3) {
            //memilih hurup secara random dari nilai s
            const randomLetterIndex = Math.floor(Math.random() * s.length);
            //mencetak hurup random yang didapat
            //menyimpan hurup random yang didapat
            //data yang disimpan hanya ada 4 
            //sesuai dengan fungsi if(i nya 0-3) yang membungkusnya
            password += s[randomLetterIndex];
            //melakukan kondisi i dari 4-8
          } else if (i >= 4 && i <= 8) {
            // mengambil dan menyimpan data random dari 0-10
            // data disimpan meneruskan data password sebelumnya 
            // yaitu data ke 4-8
            password += Math.floor(Math.random() * 10);
          }
        }
        //mengembalikan nilai password
        return password;
      }

//jikaa terjadi error pada blok try
//program akan lompat ke blok catch dibawah
//e >> object
//message >> pesan error
    } catch (e) {
      return e.message;
    }
  };
  
  console.log(getRandomPassword('123456')); // output: Password harus dalam bentuk string dan memiliki panjang minimal 6 karakter.
  console.log(getRandomPassword(3422)); // output: Password harus dalam bentuk string dan memiliki panjang minimal 6 karakter.
  console.log(getRandomPassword('code')); // output: Password harus dalam bentuk string dan memiliki panjang minimal 6 karakter.
  console.log(getRandomPassword('codeid')); // contoh output: qcoe8d3i
  