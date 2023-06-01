const elapsedTime = (x) => {
    //error handling dengan try-catch
    try{
        //memeriksa apakah nilai x adlah angkah
        if(isNaN(x)){
            //jika x bukan angka maka akan melakukan error epcetion
            throw Error(`${x} is not number`);
        }
        // membuat variabel untuk hari,jam,menit,detik
        //menghitung hari 
     let d = Math.floor(x / (3600*24));
     //menghitung jam dari sisah hari
     let h = Math.floor(x % (3600*24) / 3600);
     //menghitung menit dari sisah jam
     let m = Math.floor(x % 3600 / 60);
    //  menghitung detik dari sisa ment
     let s = Math.floor(x % 60);
    //  menampung hasil di var hasil
     let hasil = `${d} hari ${h} jam ${m} Menit ${s} detik`;
     //mengembalikan nilai hasil
        return(hasil);

//jikaa terjadi error pada blok try
//program akan lompat ke blok catch dibawah
//e >> object
//message >> pesan error
    }catch(e){
        return(e.message);

    }
};
console.log(elapsedTime("700005A"));//output >>700005A is not number
console.log(elapsedTime("700005"));//output >> 8 hari 2 jam 26 Menit 45 detik

