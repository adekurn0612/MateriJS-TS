const totalGaji=(gaji1,gaji2,gaji3)=>{
    //error handling dengant try-catch
    try {
    let text = '' //membuat variale untuk menampung text
    // melakukan mengecekan pada value gaji1,2,dan 3 dengan logika or
        if(isNaN(gaji1) || isNaN(gaji2) || isNaN(gaji3))
        //membuat sebuah pesan error jika konsisi if diatas terpenuhi
        throw errorCustomHandling("InputError","inputan harus harus dalam angka")
        //membuat statement pengecualian untuk semua statement sebelumnya
        else{
            //membuat variable dan penghitungan 
            let emp1 = gaji1 + (gaji1 * 2 / 100)
            let emp2 = gaji2 + (gaji2 * 5 / 100)
            let emp3 = gaji3 + (gaji3 * 10 / 100)
            let total  = emp1 + emp2 + emp3  
            //membuat output dan menampunya ke dalam variable text
            text = "Total Gaji yang harus dibayar :\nEmp1 : Rp."+gaji1+" + pajak(2%)  = Rp."+emp1+"\nEmp2 : Rp."+gaji2+" + pajak(5%)  = Rp."+emp2+"\nEmp2 : Rp."+gaji3+" + pajak(10%)  = Rp."+emp3+"\nTotal : Rp."+total

        }
        //mengembalikan nilai text
        return text
        //jikaa terjadi error pada blok try
        //program akan lompat ke blok catch dibawah
        //e >> object
        //message >> pesan error
    } catch (e) {
        console.log(e.nama,":",e.mmm);    
    }
}

console.log(totalGaji(60000,75000,100000));
//output
// Total Gaji yang harus dibayar :
// Emp1 : Rp.60000 + pajak(2%)  = Rp.61200
// Emp2 : Rp.75000 + pajak(5%)  = Rp.78750
// Emp2 : Rp.100000 + pajak(10%)  = Rp.110000
// Total : Rp.249950