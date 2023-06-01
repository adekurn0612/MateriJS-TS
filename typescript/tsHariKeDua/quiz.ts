// Interface untuk objek Transaction
interface vehiclePurchase {
    nopolice: string;
    vehicletype: string;
    year: number;
    price: number;
    tax: number;
    seat: number;
  }
  
  // Abstract class untuk objek Transaction
  abstract class income implements vehiclePurchase {
    constructor(
      public nopolice: string,
      public vehicletype: string,
      public year: number,
      public price: number,
      public tax: number,
      public seat: number,
      public transactiondate: Date,
      public rent: number,
      public orderperhours: number,
      public driver: boolean,
      public order: number,
      public orderperkm: number,
      public total: number
    ) {}
  
    // Method untuk menghitung total biaya
    abstract calculateTotal(): number;
  }
  
getTotalVehicle(vehicleType){

  }

getIncomeVehicle(vehicleType){

}