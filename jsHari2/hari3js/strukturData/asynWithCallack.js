// const getNomorAntri = (nomor , cb) =>{
//     setTimeout(()=>{
//         setTimeout(()=>{
//             console.log(nomor);
//             let paket = cb(nomor, 'B')
//             console.log(paket);
//             setTimeout(()=>{
//                 let bill = tagihan(paket)
//                 console.log(bill);
//             },1000);
//         },2000);
//     },5000);
// }

// const pilihPaket = (nomor, paket)=>{
//     try{
//         if(nomor <=1 || isNaN(nomor)){
//             throw "silahkan antri"
//         }
//     }catch(e){
//         return e;
//     }
// }

// const tagihan = paket =>{
//     if (paket === 'kfc paket A'){
//         console.log(25000);
//         return 25000;
//     }
//     else if (paket === 'kfc paket B'){
//         console.log(24000);
//         return 24000;
//     }else{
//         return 'belum ada pesanan';
//     }
// }

// getNomorAntri('10', pilihPaket);



const getNomorAntri = (nomor, cb) => {
    setTimeout(() => {
    console.log(nomor);
      setTimeout(() => {
        let paket = cb(nomor, "B");
        console.log(paket);
        setTimeout(() => {
          let bill = tagihan(paket);
          console.log(bill);
        }, 2000);
      }, 1000);
    }, 3000);
  };
  
  const pilihPaket = (nomor, paket) => {
    try {
      if (nomor <= 0 || isNaN(nomor)) {
        throw "Silahkan Antri";
      }
      if (paket === "A") {
        return "KFC Paket A";
      } else {
        return "KFC Paket B";
      }
    } catch (e) {
      return e;
    }
  };
  
  const tagihan = (paket) => {
    if (paket === "KFC Paket A") {
      return 25000;
    } else if (paket === "KFC Paket B") {
      return 24000;
    } else {
      return "Belum ada Pemesanan";
    }
  };
  
  getNomorAntri("10", pilihPaket);