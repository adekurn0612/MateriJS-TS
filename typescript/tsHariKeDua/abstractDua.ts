{//ABSTRACT
abstract class transportasiClassA {
    constructor(private namaPemilik: string) {
        
    }

    abstract getHargaKendaraan(): number //methodAbstract
    
    getNamaPemilik() : string {
        return `Nama pemilik kendaraan: ${this.namaPemilik}`
    }

    getInfoPemilik() : string {
        return `Nama pemilik kendaraan: ${this.namaPemilik} telah membayar seharga ${this.getHargaKendaraan()}`
    }
    
}
class transportasiClass extends transportasiClassA {
    constructor(namaPemilik:string, private nama: string, protected jmlhRoda:number, public jenis:string, public warna:string, public merk:string, public harga:number) {
        super(namaPemilik)
    }

    getDiscount(): string;
    getDiscount(disc: number): string;
    getDiscount(disc?:any): any{
        return((disc)?`Dapat potongan harga sebesar: ${this.harga = this.harga*disc}`:`Discount=0, harga normal`)
    }

    getStatement(): string{
        return `Selamat datang di toko kami`
    }

    getHargaKendaraan(): number {
        return this.harga
    }

    setNamaKendaraan(nama: string){
        this.nama=nama;
    }

    protected getInfoKendaraan(): string{
        return `Nama kendaraan: ${this.nama} dengan merk: ${this.merk}, jumlah roda: ${this.jmlhRoda}`
    }
    getInfoDetailKendaraan(): string{
        return `Jenis kendaraan: ${this.jenis}, warna kendaraan: ${this.warna}`
    }
}

class Mobil extends transportasiClass {
    constructor(namaPemilik: string, nama:string, jmlhRoda:number, jenis: string, warna: string, merk: string, harga: number,
        public bahanBakar: string, public status: boolean) {
        super(namaPemilik, nama, jmlhRoda, jenis, warna, merk, harga)
    }

    getJumlahRoda(): number{
        return this.jmlhRoda
    }

    setJumlahRoda(roda: number){
        this.jmlhRoda=roda
    }

    getKendaraan(): string{
        return `${super.getInfoKendaraan()}`
    }

    getBahanBakar(): string{
        return `Bahan bakar yang digunakan ${this.bahanBakar}`
    }

    getInfo(): string{
        return `${this.getKendaraan()}, ${this.getBahanBakar()}`
    }

    getStatement(): string {
        return (this.status)?`Terima kasih sudah berbelanja di toko kami`:super.getStatement()
    }
}

let mobilObj=new Mobil('John Doe','Bus',6,'Transportasi Umum','Biru','Mercy',1_000_000_000,'Solar',true)
mobilObj.warna='Putih';

(mobilObj.status)?console.log('\n'+mobilObj.getInfoPemilik()+'\n',mobilObj.getInfo()+'\n',
mobilObj.getDiscount(0.5)+'\n',mobilObj.getStatement()):
console.log(mobilObj.getStatement());


//method Overloading
class Counter{
    private current: number=0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values: number[]=[];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current= target;
            return values;
        }
        return ++this.current;
    }
}
let counter = new Counter();

console.log(counter.count());
console.log(counter.count(20));
}