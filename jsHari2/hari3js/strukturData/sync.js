const getNomorAntri = (nomor) =>{
    return nomor;
}

const pilihPaket= (nomor, paket)=>{
    try{
        if(nomor <=0 || isNaN(nomor)){
            throw "silahkan antri";
        }
        if (paket === 'A'){
            return "kfc Paket A";
        }
        else return "kfc paket B";
    }catch(e){
        return e;
    }
}

const tagihan = paket =>{
    if (paket === 'kfc paket A'){
        return 25000;
    }
    else if (paket === 'kfc paket B'){
        return 24000;
    }else{
        return 'belum ada pesanan';
    }
}

let nomor = getNomorAntri('10')
console.log(nomor);
let paket = pilihPaket(nomor, 'A')
console.log(paket);
let bill = tagihan(paket)
console.log(bill);