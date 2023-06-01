class karyawan {
    constructor{
        private firstname: string,
        private lastname: string,
        public tahunmasuk:number,

    }
    getnamalengkap():string{
        return `${this.firstname} ${this.lastname}`
    }
    protected getdatakaryawan(:string{
        return `${this.getnamalengkap}`
    })

abstract class karyawanabstract{
    constructor{tahunlahir:number, private firstname:string, private lastname:string, publc tahunmasuk:number}
    (super tahunlahir)
}


}