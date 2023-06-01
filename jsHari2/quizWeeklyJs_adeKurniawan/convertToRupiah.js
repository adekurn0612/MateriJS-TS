
const convertToRupiah = (value, currency) => {
    // error handling dengan try-catch
    try {
        //membuat var untuk jenis mata uang dan 
        //nilai mata uang nya
      const matauang = {
        USD: 14450, // 14,500  
        EURO: 17300, // 17,300 
        YEN: 130    // 130 
      };
      //mendeklarisakn variabel rate dengan objek mata uang
      const rate = matauang[currency];
      //memerika apakah rate adalah angka atau bukan
      if (isNaN(rate)) {
        //jika rate bukan angka maka akan error
        throw new Error(`mata uang ${currency} tidak tersedia`);
        //membuat kondisi semua kondisi selain kondsisi if else diaats
      }else{
      //mendeklarasikan nilai result dengan mengalikan value dan rate
      const result = value * rate;
      //mengembalikan nilai resul
      return result}
    
//jikaa terjadi error pada blok try
//program akan lompat ke blok catch dibawah
//e >> object
//message >> pesan error
    } catch (e) {
      return e.message;
    }
  };
  console.log(convertToRupiah(1000,'YEN'));// output >>130000
  console.log(convertToRupiah(100,'USD'));// output >>1445000
  console.log(convertToRupiah(100,'EURO'));// output >>1730000
  console.log(convertToRupiah(100,'123'));// output >>mata uang 123 tidak tersedia
