// //1. Buat class
// {
// interface elektronikTV {
//     resolusi(res: string | number): string | number;
//     outputSpeaker(): string;
//   }
  
//   abstract class namaProdukEL implements elektronikTV {
//     constructor(
//       private nameProduct: string,
//       protected typeProduct: string,
//       public company: string,
//       public res: string | number,
//       public speaker: string
//     ) {}
//     getDataElectronic() {
//       return `${this.nameProduct} merupakan produk dari company ${this.company} dengan jenis ${this.typeProduct} beresolusi ${this.res} yang mempunyai speaker ${this.speaker}`;
//     }
//     //mengupdate nama produk dimana bentuknya private
//     setNamaProduk(nama: string) {
//       this.nameProduct = nama;
//     }
//     abstract thankYou(): string;
  
//     abstract getHarga(): number;
  
//     getname(): string {
//       return this.nameProduct;
//     }
  
//     getcompany(): string {
//       return this.company;
//     }
//     //Overload
//     resolusi():string;
//     resolusi(res: number): number;
//     resolusi(res: number | string): string | number {
//       if (typeof res == "string") {
//         return `${this.res}`;
//       } else  if(typeoff res=='number'){
//         return this.res;
//       }
//       else{
//         return 'silahkan pilih resolusi'
//       }
//     }
//     outputSpeaker(): string {
//       return `${this.speaker}`;
//     }
//   }
  
//   // const nameOfProduct = new namaProdukEL(
//   //   "OLED TV TH-65LZ2000G",
//   //   "Home & Entertainment",
//   //   "Panasonic Corporation"
//   // );
//   // nameOfProduct.company = "Sanyo"; // Mengupdate nama company dimana tipenya public
//   // nameOfProduct.setNamaProduk("Ga dapat uniq"); //Mengupdate nama produk dimana tipenya private
//   // console.log(nameOfProduct.getDataElectronic());
  
//   class spesifikasiProduk extends namaProdukEL {
//     constructor(
//       nameProduct: string,
//       typeProduct: string,
//       public company: string,
//       private size: string,
//       private power: number,
//       private harga: number,
//       public res: string | number,
//       public speaker: string
//     ) {
//       super(nameProduct, typeProduct, company, res, speaker);
//       this.size = size;
//       this.power = power;
//       this.harga = harga;
//     }
//     getDetailInfo() {
//       return `${super.getDataElectronic()}, berukuran ${
//         this.size
//       } memiliki daya ${this.power} watt`;
//     }
//     //mengupdate typeproduct pada class parent, yang mempunyai tipe protected
//     setTypeProduct(type: string) {
//       super.typeProduct = type;
//     }
//     thankYou(): string {
//       return `Terima kasih telah berkunjung ke toko kami`;
//       // return this.getcompany();
//     }
//     getHarga(): number {
//       return this.harga;
//     }
  
//     //override
//     outputSpeaker(): string {
//       return `${this.speaker} with Dolby Atmos`;
//     }
  
//     getData() {
//       return `${this.getname()} merupakan produk dari company ${
//         this.company
//       } dengan jenis ${this.typeProduct} beresolusi ${
//         this.res
//       } yang mempunyai speaker ${this.outputSpeaker()}, berukuran ${
//         this.size
//       } memiliki daya ${this.power} watt`;
//     }
//   }
  
//   const objproduk = new spesifikasiProduk(
//     "OLED TV TH-65LZ2000G",
//     "Home & Entertainment",
//     "Panasonic Corporation",
//     "65 Inch",
//     100,
//     10_000_000,
//     "4K",
//     "10W"
//   );
  
//   console.log(objproduk.getDetailInfo()); //yang awal
//   objproduk.setNamaProduk("LG NANO75 65” TV");
//   objproduk.company = "LG Electronic Indonesia";
//   console.log(objproduk.getDetailInfo()); //udah diupdate nama produk, company
//   objproduk.setTypeProduct("TV/AUDIO"); // ganti jenis
//   console.log(objproduk.getDetailInfo()); // udah diupdate type produk
//   console.log(objproduk.getHarga()); //abstract
//   console.log(objproduk.thankYou()); ///abstract
//   console.log(objproduk.getData()); // udah di overload
// }