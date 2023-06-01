// {let price : number;
// price = 9.95;
// }

// {

//     let firstName : string = 'jhon';
//     let title : string = 'web develover';
//     console.log(firstName , title);
// }

// {
//     let bool1=true;
//     bool1=false;
//     let bools:boolean=true
//     bools=(true)
// }

// function multiply(a: number , b : number , c: number): number{
//     if (typeof(c)){
//         return a * b ; // 
//     }
//     return a * b * c;
// }

function applyDiscountType(price = 0 , discount = 0.05){
    return price * (1-discount);
}
console.log(applyDiscountType(100,0.2));