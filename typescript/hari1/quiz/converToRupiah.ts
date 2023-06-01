const convertToRupiah = (value: number, currency: string): number | string => {
  try {
    const matauang: {[key: string]: number} = {
      USD: 14450, 
      EURO: 17300, 
      YEN: 130    
    };
    const rate = matauang[currency];
    if (isNaN(rate)) {
      throw new Error(`mata uang ${currency} tidak tersedia`);
    } else {
      const result = value * rate;
      return result;
    }
  } catch (e: any) {
    return e.message;
  }
};

console.log(convertToRupiah(1000, 'YEN')); // Output: 130000
console.log(convertToRupiah(100, 'USD')); // Output: 1445000
console.log(convertToRupiah(100, 'EURO')); // Output: 1730000
console.log(convertToRupiah(100, '123')); // Output: "mata uang 123 tidak tersedia"
