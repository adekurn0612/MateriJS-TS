const getProsentase = (in1, in2) => {
    //error handling dengan try-catch
    try {
        //melakukan pengecekan apakah nilai in1 dan in 2 adalah angkah 
        //dengan menggunakan logika or
        if (isNaN(in1) || isNaN(in2)) {
            //melakukan error exception jika kondisi if diatas terpenuhi
            throw new Error(`${in1} atau ${in2} harus dalam angka`);
        }
        //mendeklarasikan  rumus menghitung  prosentase
        //dan menyimpanya dalam var total
        //menggunakan matth.floor karena -14 lebih kecil dari -13 
        const total = Math.floor(((in2 - in1) / in1) * 100);
        //mengecek apakah nilai in 1 lebih kecil dari in2
        if (in1 < in2) {
            //jika nilai in1 lebih kecil maka akan
            //return kenaikan dan menampilkan nilai
            //total
            return (`total kenaikan income adalah ${total}%`);
            //membuat  kondisi semua kondisi kecuali kondisi if-else diatas
        } else  {
            //return nilai penurunan dan total 
            return (`total penurunan income adalah ${total}%`);
        }
//jikaa terjadi error pada blok try
//program akan lompat ke blok catch dibawah
//e >> object
//message >> pesan error
    } catch (e) {
        return e.message;
    }
};

console.log(getProsentase("abc", "bca"));// output >>abc atau bca harus dalam angka
console.log(getProsentase(60000, 75000));// output >>total kenaikan income adalah 25%
console.log(getProsentase(75000, 65000));// output >>total penurunan income adalah -14%
