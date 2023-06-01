interface info_s{
    getTotalVehicle():any;
    getTotalIncome():any;
}
interface juragan{
    nopolice:string,vechiletype:string, year:number,price:number,tax:number,seat:number
    , transactionDate:string ,  rent:number, orderPH:number, driver:number , order:number, orderKM:number, total:number 
}
let juragans : juragan[]=
[{ 
     nopolice:"D 1001 UM",
    vechiletype:"SUV", 
    year:2010,
    price:350000000,
    tax:3500000,
    seat:4,
    transactionDate:"10/01/2023",
    rent:500000,
    orderPH:0,
    driver:150000,
    order:0,
    orderKM:0,
    total:650000,
},{
    nopolice:"D 1002 UM",
    vechiletype:"SUV", 
    year:2010,
    price:350000000,
    tax:3500000,
    seat:4,
    transactionDate:"10/01/2023",
    rent:500000,
    orderPH:0,
    driver:150000,
    order:0,
    orderKM:0,
    total:650000
},{
    nopolice:"D 1003 UM",
    vechiletype:"SUV", 
    year:2010,
    price:350000000,
    tax:35000000,
    seat:5,
    transactionDate:"12/01/2023",
    rent:500000,
    orderPH:0,
    driver:150000,
    order:0,
    orderKM:0,
    total:650000,
},{
    nopolice:"D 1004 UM",
    vechiletype:"SUV", 
    year:2015,
    price:350000000,
    tax:35000000,
    seat:5,
    transactionDate:"13/01/2023",
    rent:500000,
    orderPH:0,
    driver:150000,
    order:0,
    orderKM:0,
    total:650000,
},{//5
    nopolice:"D 11 UK",
    vechiletype:"TAXI", 
    year:2002,
    price:175000000,
    tax:1750000,
    seat:4,
    transactionDate:"12/01/2023",
    rent:0,
    orderPH:0,
    driver:0,
    order:45,
    orderKM:4500,
    total:202500,
},{
    nopolice:"D 12 UK",
    vechiletype:"TAXI", 
    year:2015,
    price:225000000,
    tax:2250000,
    seat:4,
    transactionDate:"13/01/2023",
    rent:0,
    orderPH:0,
    driver:0,
    order:75,
    orderKM:4500,
    total:337500,
},{
    nopolice:"D 13 UK",
    vechiletype:"TAXI", 
    year:2020,
    price:275000000,
    tax:2750000,
    seat:4,
    transactionDate:"13/01/2023",
    rent:0,
    orderPH:0,
    driver:0,
    order:90,
    orderKM:4500,
    total:405000,
},{
    nopolice:"ID8089",
    vechiletype:"PrivatJet", 
    year:2015,
    price:150000000000,
    tax:1500000000,
    seat:12,
    transactionDate:"23/12/2022",
    rent:35000000,
    orderPH:25000000,
    driver:15000000,
    order:0,
    orderKM:0,
    total:50000000,
},{
    nopolice:"ID8099",
    vechiletype:"PrivatJet", 
    year:2018,
    price:175000000000,
    tax:1750000000,
    seat:15,
    transactionDate:"25/12/2022",
    rent:55000000,
    orderPH:25000000,
    driver:25000000,
    order:0,
    orderKM:0,
    total:80000000,
}
]
abstract class vechileData{
    constructor(protected juragans: juragan[]) {}
    abstract getTotalData(): any;
  }
  class vehicle12 extends vechileData implements info_s {
    constructor(juragans: juragan[]) {
      super(juragans);
    }
    
getTotalData():any{
    let data;
    if(data) {
        return vehicle12[data]
    }else{
        return vehicle12
    }
}


getTotalVehicle():number;
getTotalVehicle(vehicletype:string):number;
getTotalVehicle(vehicletype?:string):number{
    if (vehicletype) {
        let total :number = 0
        for (let i=0; i < this.juragans.length;i++){
            if(this.juragans [i].vechiletype===vehicletype)
            total++
        }
        return total
    } else {
        return this.juragans.length
    }
    
}
getTotalIncome(): number;
getTotalIncome(vehicletype: string): any;
getTotalIncome(vehicletype?: string): any {
  if (vehicletype) {
    let total: number = 0;
    for (let i = 0; i < this.juragans.length; i++) {
      if (this.juragans[i].vechiletype === vehicletype) {
        total += this.juragans[i].total;
      }
    }
    return `Total Income${vehicletype} = ${total}`;
  } else {
    let total: number = 0;
    for (let i = 0; i < this.juragans.length; i++) {
      total += this.juragans[i].total;
    }
    return `Total = ${total}`;
  }
}


}
const Data = new vehicle12(juragans);
console.log(Data.getTotalVehicle('SUV'));
console.log(Data.getTotalVehicle(''));
console.log(Data.getTotalVehicle('TAXI'));
console.log(Data.getTotalVehicle('PrivatJet'));
console.log(Data.getTotalIncome('SUV'));
console.log(Data.getTotalIncome('TAXI'));
console.log(Data.getTotalIncome('PrivatJet'));
console.log(Data.getTotalIncome(''));


