const isPalindrome = (a) => {
    //error handlig dengan try-catch
    try {
        //memerikasa apakah nilai a adalah angka
      if (isNaN(a)) {
        //membuat pesan error dan melompat ke catch jika
        //kondisi if diatas terpenuhi
        throw Error(`${a} bukan number`);
        //membuat satatement untuk semua kondisi
        //selain konsisi if diatasnya
      } else {
        //convert a ke string dan ditampung di var str
        const str = a.toString();
        //looping i jika i lebih besar dari 0 
        //maka i akan melakukan pengurangan
        for (var i = str.length; i > 0; i--) {
            //memeriksa apakah str adalah palingdrome atau bukan
          if (str[i-1] !== str[str.length-i]) {
            //mengembalikan sebuah string yang menunjukkan 
            //apakah variabel a bukan palingdrom
            return(`${a} bukan palindrome`);
          }
        }
    //mengembalikan sebuah string yang menunjukkan apakah
    // variabel a merupakan sebuah palindrome .
        return(`${a} adalah palindrome`);
      }

//jikaa terjadi error pada blok try
//program akan lompat ke blok catch dibawah
//e >> object
//message >> pesan error
    } catch(e) {
      return(e.message);
    }
  }
  
  console.log(isPalindrome("abcd")); //output>>abcd bukan number
  console.log(isPalindrome("123a"));//output>>123a bukan number
  console.log(isPalindrome("1234"));//output>>1234 bukan palindrome
  console.log(isPalindrome(1221));//output>>1221 adalah palindrom
  console.log(isPalindrome("8888"));//output>>8888 adalah palindrome
  