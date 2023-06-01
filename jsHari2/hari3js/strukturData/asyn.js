// const startEngine = ()=>{
//     setTimeout(()=>{
//         console.log(`Enggineee Starrr... `);},4000)
//     }


// const changeGear = (gear)=>{
//     setTimeout(()=>{
//         console.log(`masukan gigi ${gear} to move a car`);
//     },3000)
    
// }

// const goCar = ()=>{
//     setTimeout(()=>{
//         console.log(`Mobil Berjalan`);
//     },2000)
    
// }

// const stopCar = ()=>{
//     console.log(`Mobil Berhenti`);
// }

// const shutDownCar = ()=>{
//     console.log(`Mesin Mobil Dimatian`);
// }

// const DriveACar=(cb)=>{
//     cb();
//     changeGear(1);
//     goCar();
//     stopCar();
//     shutDownCar();

// }
// DriveACar(startEngine);


const getNomorAntri = (nomor) =>{
    setTimeout(()=>{
        console.log(nomor);
        return nomor;
    },3000)
    
}

const pilihPaket= (nomor, paket)=>{
    setTimeout(() =>{
    try{
        if(nomor <=0 || isNaN(nomor)){
            throw "solahkan antri";
        }
        if (paket === 'A'){
            return "KFC Paket A";
        }
        else return "kfc paket b";
    }catch(e){
        console.log(e);
        return e;
    }},2000)
}

const tagihan = paket =>{
    setTimeout(()=>{
    if (paket === 'kfc paket b'){
        console.log(25000);
        return 25000;
    }
    else if (paket === 'kfc paket a'){
        console.log(24000);
        return 24000;
    }else{
        return 'belum ada pesanan';
    }},1000);
}

let nomor = getNomorAntri('10')
console.log(nomor);
let paket = pilihPaket(nomor, 'A')
console.log(paket);
let bill = tagihan(paket)
console.log(paket)





