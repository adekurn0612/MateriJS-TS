function getNomorAntriChaining(nomor){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(nomor)
        },5000) 
    })
}

function pilihPaketChaining(nomor, paket){
    const result = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(nomor <=0 || isNaN(nomor)){
                reject(new Error("silahkan antri"));
            }
            if (paket === 'A'){
                resolve ("kfc paket a")
            }
            else{
                resolve("kfc paket b")
            }
        },2000)
    });
    return result;
}

function tagihanChaining(paket){
    const result = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (paket === 'kfc paket a'){
                resolve(25000)
            }
            else if(paket ==='kfc paket b'){
                resolve(24000)
            }
            else{
                resolve('belum ada pesanan')
            }
        },1000)
    })
    return result;
}

const result = getNomorAntriChaining(10)
result
    .then((nomor)=>{
        console.log(nomor);
        return pilihPaketChaining(nomor, 'b')
    })
    .then((paket)=>{
        console.log(paket);
        return tagihanChaining(paket)
    })
    .then((bill)=>{
        console.log(bill);
    })
    .catch((e)=>{
        console.log(e.name, e.message);
    })