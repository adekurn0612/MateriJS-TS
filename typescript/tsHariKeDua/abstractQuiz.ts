//1. Buat class
abstract class namaProdukEL {
    constructor(
      private nameProduct: string,
      protected typeProduct: string,
      public company: string
    ) {}
    getDataElectronic() {
      return `${this.nameProduct} merupakan produk dari company ${this.company} dengan jenis ${this.typeProduct} `;
    }
    //mengupdate nama produk dimana bentuknya private
    setNamaProduk(nama: string) {
      this.nameProduct = nama;
    }
    abstract thankYou(): string;
  }
  
  // const nameOfProduct = new namaProdukEL(
  //   "OLED TV TH-65LZ2000G",
  //   "Home & Entertainment",
  //   "Panasonic Corporation"
  // );
  // nameOfProduct.company = "Sanyo"; // Mengupdate nama company dimana tipenya public
  // nameOfProduct.setNamaProduk("Ga dapat uniq"); //Mengupdate nama produk dimana tipenya private
  // console.log(nameOfProduct.getDataElectronic());
  
  class spesifikasiProduk extends namaProdukEL {
    size: string = "";
    power: number = 0;
    constructor(
      nameProduct: string,
      typeProduct: string,
      company: string,
      size: string,
      power: number
    ) {
      super(nameProduct, typeProduct, company);
      this.size = size;
      this.power = power;
    }
    getDetailInfo() {
      return `${super.getDataElectronic()}, berukuran ${
        this.size
      } memiliki daya ${this.power} watt`;
    }
    //mengupdate typeproduct pada class parent, yang mempunyai tipe protected
    setTypeProduct(type: string) {
      super.typeProduct = type;
    }
    thankYou(): string {
      return `Terima kasih telah berkunjung ke toko kami`;
    }
  }
  
  const objproduk = new spesifikasiProduk(
    "OLED TV TH-65LZ2000G",
    "Home & Entertainment",
    "Panasonic Corporation",
    "50 Inch",
    100
  );
  
  console.log(objproduk.getDetailInfo());
  objproduk.setNamaProduk("LGTV");
  console.log(objproduk.getDetailInfo());
  objproduk.setTypeProduct("Home Theater");
  console.log(objproduk.getDetailInfo());
  console.log(objproduk.thankYou()); ///abstract