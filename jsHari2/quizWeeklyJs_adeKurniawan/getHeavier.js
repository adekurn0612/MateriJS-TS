const getHeavier = (w1, w2, w3) => {
//melakukan pengecekan dengan ternary
// Ekspresi (w1 > w2) memeriksa apakah w1 lebih besar dari w2
// Jika itu benar, ekspresi (w1 > w3 ? w1 : w3) dievaluasi 
// Ini memeriksa apakah w1 lebih besar dari w3 
// Jika benar, nilai w1 ditamahkan ke maxW
// Jika salah, nilai w3 ditamahkan ke maxW
// Jika (w1 > w2) salah, ekspresi (w2 > w3 ? w2 : w3) dievaluasi 
// Ini memeriksa apakah w2 lebih besar dari w3. 
// Jika benar, nilai w2 ditugaskan ke maxW. 
// Jika salah, nilai w3 ditugaskan ke maxW.
    let maxW = (w1 > w2) ? (w1 > w3 ? w1 : w3) : (w2 > w3 ? w2 : w3);
    //mengembalikan nilai maxw
    return maxW;
  }
  
  console.log(getHeavier(12, 45, 70)); //output >> 70
  