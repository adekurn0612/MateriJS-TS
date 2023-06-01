interface TableData {
    id: number;
    name: string;
    value: number;
  }
  
  const tableData: TableData[] = [
    { id: 1, name: 'Item 1', value: 10 },
    { id: 2, name: 'Item 2', value: 20 },
    { id: 3, name: 'Item 3', value: 30 },
    { id: 4, name: 'Item 4', value: 40 },
  ];
  
  // Fungsi untuk menghitung jumlah dari kolom 'value' dalam tabel
  function hitungJumlah(data: TableData[]): number {
    let total = 0;
    for (const row of data) {
      total += row.value;
    }
    return total;
  }
  
  const jumlah = hitungJumlah(tableData);
  console.log('Jumlah: ', jumlah);
  