// const luasLingkaran = ((jariJari)=>{
//     let phi = 3.14;
    
//     try{
    
//          if(isNaN(jariJari)){
//             throw new Error("inputan harus dalam angka")
//         }
//         else if(jariJari<=0){
//             throw new Error("inputan harus lebih dari 0");
//         }else{
//             let luas = jariJari * jariJari * phi;
//             return(luas);
//         }
//     }
//     catch(e){
//         return (e.message);
//     }
    
// })

// console.log(luasLingkaran(-1)) ;
// console.log(luasLingkaran('a')) ;
// console.log(luasLingkaran(5)) ;


// const caltDistance = (a, t) => {
//     try {
//       if (isNaN(a) || isNaN(t)) {
//         throw new Error('Input harus berupa angka');
//       } else if (a <= 0) {
//         throw new Error('a harus lebih dari 0');
//       }else{
//       const distance = 1/2 * a * t ** 2;
//       return distance;}
//     } catch (e) {
//       console.log(e.name, e.message);
//     }
//   };
  
//   console.log(caltDistance('a', 't')); 
//   console.log(caltDistance(-1, 9)); 
//   console.log(caltDistance(50, 60)); 

//   const convertTemp= (F)=>{
//     try{
//       if (typeof F !== 'number'){
//         throw Error('inputan harus number')
       
//     }else{
//     let K = (F + 459.67) / 1.8;
//     return(K);
//     }
//   }
//     catch(e){
//       console.log(e.name, e.message);
//     }
//   }

//   console.log(convertTemp(45));
//   console.log(convertTemp('1'));
//   console.log(convertTemp('F'));

// const getSales = (price,tax)=>{

//     try{
//         if(isNaN(tax) || isNaN(price)){
//         throw Error('price dan tax harus dalam angkah')
//         }else{
//         total =price + (price*(tax/100));
//         return(total);
//         }
//     }catch(e){
//         return(e.message);
//     }
//   }

//   console.log(getSales("a",1));
//   console.log(getSales(500,'pajak'));
//   console.log(getSales("harga",'pajak'));
//   console.log(getSales(4500,5));

const getSales = (price,tax, discount)=>{

    try{
        if(isNaN(price) || isNaN(tax) || isNaN(discount)){
        throw Error('inputan harus dalam angkah')
        }
        else{
            priceAfterDiscount =price - (price * (discount/100));
            taxed=(priceAfterDiscount * (tax/100));
            total =priceAfterDiscount + taxed;
        return(total);
        }
    }catch(e){
        return(e.message);
    }
}
  

  console.log(getSales("a",1,5));
  console.log(getSales(500,'pajak',5));
  console.log(getSales("harga",'pajak','discount'));
  console.log(getSales(4500,10,5));

// const getSalesTax = (price, tax) => {
//   try {
//     if (isNaN(price) & isNaN(tax)) {
//       throw new Error("Pajak dan price harus dalam angka");
//     } else if (isNaN(price) & (typeof tax == "number")) {
//       throw new Error("Price harus dalam angka");
//     } else if (typeof price == "number" && isNaN(tax)) {
//       throw new Error("Pajak harus dalam angka");
//     } else {
//       tax = tax / 100;
//       const hasil = price + (price * tax);
//       const result =
//         "Total Sales : Rp. " +
//         price +
//         "\nPajak : " +
//         tax * price +
//         "\nTotal Harga + Pajak :" +
//         hasil;
//       return result;
//     }
//   } catch (e) {
//     return e.message;
//   }
// };

// console.log(getSalesTax(4500, 5));
// console.log(getSalesTax("harga", "pajak"));
// console.log(getSalesTax("a", 1));
// console.log(getSalesTax(5000, "b"));

// //5. get sales discount
// const getSalesDiscount = (price, tax, discount) => {
//   try {
//     if (isNaN(price) & isNaN(tax) & isNaN(discount)) {
//       throw new Error("Price, Tax & Discount harus dalam angka");
//     } else if (
//       isNaN(price) &&
//       typeof tax == "number" &&
//       typeof discount == "number"
//     ) {
//       throw new Error("Price harus dalam angka");
//     } else if (
//       typeof price == "number" &&
//       typeof discount == "number" &&
//       isNaN(tax)
//     ) {
//       throw new Error("Pajak harus dalam angka");
//     } else if (
//       typeof price == "number" &&
//       typeof tax == "number" &&
//       isNaN(discount)
//     ) {
//       throw new Error("Discount harus dalam angka");
//     } else {
//       taxes = tax / 100;
//       discounts = discount / 100;

//       const hasil1 = hasil + (hasil * taxes);
//       const result =
//         "Total Sales           : Rp. " +
//         price +
//         "\nDiscount (" +
//         discount +
//         "%)         : Rp. " +
//         discounts * price +
//         "\nPriceAfterDiscount    : Rp. " +
//         hasil +
//         "\nPajak  (" +
//         tax +
//         "%)          : Rp. " +
//         taxes * hasil +
//         "\n=================================" +
//         "\nTotal Payment         : Rp. " +
//         hasil1;
//       return result;
//     }
//   } catch (e) {
//     return e.message;
//   }
// };

// console.log(getSalesDiscount(4500, 10, 5));
// console.log(getSalesDiscount(4500, "a", 5));
// console.log(getSalesDiscount(4500, 10, "a"));
// console.log(getSalesDiscount("a", 10, 5));