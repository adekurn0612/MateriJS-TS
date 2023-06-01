{const totalGaji=(gaji1 : number,gaji2 : number ,gaji3 : number) =>{
    try {
    let text : string;
        if(isNaN(gaji1) || isNaN(gaji2) || isNaN(gaji3)){
        throw Error("inputan harus harus dalam angka")}
        else{
            let emp1 = gaji1 + (gaji1 * 2 / 100)
            let emp2 = gaji2 + (gaji2 * 5 / 100)
            let emp3 = gaji3 + (gaji3 * 10 / 100)
            let total  = emp1 + emp2 + emp3  
            text = "Total Gaji yang harus dibayar :\nEmp1 : Rp."+gaji1+" + pajak(2%)  = Rp."+emp1+"\nEmp2 : Rp."+gaji2+" + pajak(5%)  = Rp."+emp2+"\nEmp2 : Rp."+gaji3+" + pajak(10%)  = Rp."+emp3+"\nTotal : Rp."+total

        }
        return text
    } catch (e) {
        console.log(e.nama,":",e.mmm);    
    }
}

console.log(totalGaji(60000,75000,100000));
}