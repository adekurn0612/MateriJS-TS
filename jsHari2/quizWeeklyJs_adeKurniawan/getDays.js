const getDays = ( m , y ) =>{
// mendeklarasikan var days yang didalamnya ada fungsi untuk mengambil jumlah hari
    days =new Date(y, m, 0).getDate();
    //error handing dengan try-catch
    try{
        // memerikasa nilai m dan y apakah angka atau bukan dengan logika or
        if(isNaN(m) ||isNaN(y)){
            //melakukan eror ecpextion
            throw Error('inputan harus integer')
        }
        //memerikasa apakah nilai y habis dibagi 4 atau tidak
        //tahun yang habis dibagi 4 adlah tahun kabisat
        else if (y %4 == 0){
            //return strng dan memberi nilai jumlah hari dan menjelsakan kalau tahun tersebut
            // adalh kabisat
            return (`jumlah hari pada bulan ${m} dan tahun ${y} adalah ${days}, ${y} adalah tahun kabisat`);
        }
        //membuat kondisi semua kondisi selain kondsii if else diatas
        else{
            //return strng dan membri nilai jumlah hari
            return (`jumlah hari pada bulan ${m} dan tahun ${y} adalah ${days} `);
        }
//jikaa terjadi error pada blok try
//program akan lompat ke blok catch dibawah
//e >> object
//message >> pesan error
    }catch(e){
        return (e.message);
    }
}

console.log(getDays('a', 2021)); //output >>inputan harus integer
console.log(getDays('2', 'year'));//output >>inputan harus integer
console.log(getDays(2, 2000));//output >>jumlah hari pada bulan 2 dan tahun 2000 adalah 29
                            //, 2000 adalah tahun kabisat
console.log(getDays(8, 2021));//output >>jumlah hari pada bulan 8 dan tahun 2021 adalah 31