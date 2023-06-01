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

async function orderKfc(nomor){
    try{
        const no_urut = await getNomorAntriChaining(nomor);
        console.log(no_urut);
        const paket = await pilihPaketChaining(no_urut , 'A');
        console.log(paket);
        const bill = await tagihanChaining(paket)
        console.log(bill)
    }catch(e){
        console.log(e.toString());
    }
}
orderKfc(1);