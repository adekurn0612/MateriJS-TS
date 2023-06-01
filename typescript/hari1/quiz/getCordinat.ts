{const getCordinat = (x1 : number | string, y1 : number |string, x2: number |string, y2: number |string)=>{
  
    try{
        let convertx1: number = +x1;
        let convertx2: number = +x2;
        let converty1: number = +y1;
        let converty2: number = +y2;

        if(isNaN(convertx1) || isNaN(converty1) || isNaN(convertx2) || isNaN(converty2)){
            throw Error('Cordinat Harus Dalam Angkah')
        }
        else{
            let  cordinat = Math.round(Math.sqrt(((convertx2 - convertx1)**2) + (converty2 - converty1)**2));
            return(cordinat);
        }

    }catch(e :any){
        return (e.message);
    }
}

console.log(getCordinat(3,4,-4,-5))
console.log(getCordinat('1','2','-1','-2'))
console.log(getCordinat('x','2','-y','-2'))
console.log(getCordinat(3.2,4.5,-4.4,-5))
}
