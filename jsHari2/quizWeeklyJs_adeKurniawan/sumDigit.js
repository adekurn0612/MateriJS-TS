const sumDigit = (x) =>{
    // convert x ke string
    const sum = x.toString(); 
    // melakukan split(memisahkan) karakter pada string
    const summ = sum.split(''); 
    //melakukan dungsi reduce yaitu menjumlahkan data di dalam variable 
    // disini data yang dijumlahkan dijadikan menjadi integer(angka)
    const summm = summ.reduce((a, b) => parseInt(a) + parseInt(b), 0); 
    // error handing dengan try catch
    try{
        //memeriksa apakah nilai dari x bukan angka
        //jika x bukan angkah maka program akan melanjutkan
        //ke proses else if selanjutnya
        if(isNaN(x)){
            // statement dari if untuk error exeption jika x bukan angkah
            throw Error(`${x} harus dalam angka`);
        }
        //memriksa apakah nilai x lebih besar dari 10000 atau tidak
        else if(x >= 10000){
            //statement dari if untuk error exception jika x lebih sama dengan 10000
            throw Error(`${x} harus lebih kecil dari 10000`);
        }
        else{
        //mengembalikan nilai summ
         return(summm);
        }
        //jikaa terjadi error pada blok try
        //program akan lompat ke blok catch dibawah
        //e >> object
        //message >> pesan error
    }catch(e){
        return(e.message);
    }
}
console.log(sumDigit(1234)); //output >> 10
console.log(sumDigit("1234")); //output >> 10
console.log(sumDigit(12345));  //12345 harus lebih kecil dari 10000
console.log(sumDigit("a123")); //a123 harus dalam angka