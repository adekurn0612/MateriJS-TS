
interface TipeData{
  noPolice: string, 
  vehicleType: string, 
  year:number, price:number, 
  tax:number, seat: number, 
  transactionDate: string, 
  rent:number, 
  orderPerHours: number, 
  driver: number, 
  order: number, 
  orderPerKm: number, 
  total: number
}
interface Summary extends TipeData{
  getTotalVehicle():number 
  getTotalVehicle(SUV:string):number 
  getTotalInvoiceVehicle(type:string):number
  getTotalInvoiceVehicle():number

}
abstract class DataArray {
  protected summary:TipeData[]=[
      {
          noPolice: "D 1001 UM", vehicleType: "SUV", year: 2010, price:350000000, tax:3500000, seat: 4, transactionDate: "10/01/2023", rent:500000, orderPerHours: 0, driver: 150000, order: 0, orderPerKm: 0, total: 650000 
      },
      {
          noPolice: "D 1002 UM", vehicleType: "SUV", year: 2010, price:350000000, tax:3500000, seat: 4, transactionDate: "10/01/2023", rent:500000, orderPerHours: 0, driver: 150000, order: 0, orderPerKm: 0, total: 650000 
      },
      {
          noPolice: "D 1003 UM", vehicleType: "SUV", year: 2015, price:350000000, tax:3500000, seat: 5, transactionDate: "12/01/2023", rent:500000, orderPerHours: 0, driver: 150000, order: 0, orderPerKm: 0, total: 650000 
      },
      {
          noPolice: "D 1004 UM", vehicleType: "SUV", year: 2015, price:350000000, tax:3500000, seat: 5, transactionDate: "13/01/2023", rent:500000, orderPerHours: 0, driver: 150000, order: 0, orderPerKm: 0, total: 650000 
      },
      {
          noPolice: "D 11 UK", vehicleType: "TAXI", year: 2002, price:175000000, tax:1750000, seat: 4, transactionDate: "12/01/2023", rent:0, orderPerHours: 0, driver: 0, order: 45, orderPerKm: 4500, total: 202500 
      },
      {
          noPolice: "D 12 UK", vehicleType: "TAXI", year: 2015, price:275000000, tax:2750000, seat: 4, transactionDate: "13/01/2023", rent:0, orderPerHours: 0, driver: 0, order: 75, orderPerKm: 4500, total: 337000 
      },
      {
          noPolice: "D 13 UK", vehicleType: "TAXI", year: 2020, price:275000000, tax:2750000, seat: 4, transactionDate: "13/01/2023", rent:0, orderPerHours: 0, driver: 0, order: 90, orderPerKm: 4500, total: 405000 
      },
      {
          noPolice: "ID8089", vehicleType: "PrivateJet", year: 2015, price:150000000000, tax:1500000000000, seat: 12, transactionDate: "23/12/2022", rent:35000000, orderPerHours: 25000000, driver: 15000000, order: 0, orderPerKm: 0, total: 50000000 
      },
      {
          noPolice: "ID8099", vehicleType: "PrivateJet", year: 2018, price:175000000000, tax:1750000000000, seat: 15, transactionDate: "25/12/2022", rent:55000000, orderPerHours: 25000000, driver: 25000000, order: 0, orderPerKm: 0, total: 80000000 
      }
  ]   
  
}

class Vehicle extends DataArray{

  //overload
  getTotalVehicle():number
  getTotalVehicle(SUV:string):number
  getTotalVehicle(SUV?:any):any{
      let res: number = 0
      if(SUV){
          for (let i = 0; i < this.summary.length; i++) {
              if(this.summary[i].vehicleType === SUV){
                  res++
           }
          }
      }else if(typeof SUV === "number"){
          return"Error"
      }else{
          for (let i = 0; i < this.summary.length; i++) {
              if(this.summary[i].vehicleType){
                  res++
              }
          }
      }
      return res
  }
}

class Income extends DataArray{
  getTotalInvoiceVehicle():number
  getTotalInvoiceVehicle(type:string):number
  getTotalInvoiceVehicle(type?:any):any{
      let res:number = 0
      if(type){
          for (let i = 0; i < this.summary.length; i++) {
              if(this.summary[i].vehicleType === type){
                 res += this.summary[i].total
              }
          }
          return `Total Pemasukan ${type} Adalah ${res}`
      }else{
          this.summary.forEach(total => {
              res+= total.total
          });
      }
      return res
  }

}

const income = new Income()
console.log(income.getTotalInvoiceVehicle())

const data = new Vehicle()
console.log(data.getTotalVehicle())