{const sumDigit = (x : number | string) =>{
    const sum = x.toString(); 
    const summ = x.split(''); 
    const summm = sum.reduce((a, b) => parseInt(a) + parseInt(b), 0); 
    try{
            
        if(isNaN(x)){
            throw Error(`${x} harus dalam angka`);
        }
        else if(x >= 10000){
            throw Error(`${x} harus lebih kecil dari 10000`);
        }
        else{
         return(summm);
        }
    }catch(e){
        return(e.message);
    }
}
console.log(sumDigit(1234)); 
console.log(sumDigit("1234")); 
console.log(sumDigit(12345));  
console.log(sumDigit("a123")); 

}