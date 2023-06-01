// const sayhHello=(message='Hallo')=>{
//     console.log(message)
// }

// sayhHello();

// const sayhHello=(message)=>{
//     message=message~=undefined?message:"Hallo Javascript"
//     console.log(message);
// }

// sayhHello("Hi");
let price=100
function applyDiscount(price, discount = 0.05){
    return price * (1 - discount);
}

console.log(applyDiscount(100))