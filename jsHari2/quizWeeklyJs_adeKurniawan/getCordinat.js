const getCordinat = (x1, y1, x2, y2)=>{
    //membuat variabel yang akan digunakan untuk mnampung hasil
    //perhitungan kordinat
    cordinat = Math.round(Math.sqrt(((x2 - x1)**2) + (y2 - y1)**2));
    try{
        //memeriksa apakah ada value yang buan angkah dengan logika or
        if(isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)){
            //jika kondisi id tersebut terpenuhi maka 
            //akan melakukan error ecpextion
            throw Error('Cordinat Harus Dalam Angkah')
        }
        //membuat kondisi semua kondisi selain kondisi if-else diatas
        else{
            //mengembalikan nilai cordinat
            return(cordinat);
        }
//jikaa terjadi error pada blok try
//program akan lompat ke blok catch dibawah
//e >> object
//message >> pesan error
    }catch(e){
        return(e.message);
    }
}

console.log(getCordinat(3,4,-4,-5)) //output >> 11
console.log(getCordinat('1','2','-1','-2')) //output >>4
console.log(getCordinat('x','2','-y','-2'))//output >>Cordinat Harus Dalam Angkah
console.log(getCordinat(3.2,4.5,-4.4,-5))//output >>12

