let buah=['mangga', 'jambu','jeruk','anggur'] // arr string
// buah.push('durian');
// console.log(buah); //[ 'mangga', 'jambu', 'jeruk', 'anggur', 'durian' ]

// buah[0]="durian"
// console.log(buah); //[ 'durian', 'jambu', 'jeruk', 'anggur', 'durian' ]

// buah.pop()
// console.log(buah); //[ 'mangga', 'jambu', 'jeruk', 'anggur' ]

// buah.unshift("nanas")
// console.log(buah); //[ 'nanas', 'mangga', 'jambu', 'jeruk', 'anggur' ]

// buah.shift()
// console.log(buah); //[ 'mangga', 'jambu', 'jeruk', 'anggur' ]

let person=[
    {nama :" Alex", alamat: "bandung"},
    {nama :" donald" , alamat : "semaang"}
]

// person.push({nama:"agnes", alamat:"bogor"})
// console.log(person); //[
//                 //     { nama: ' Alex', alamat: 'bandung' },
//                 //     { nama: ' donald', alamat: 'semaang' },
//                 //     { nama: 'agnes', alamat: 'bogor' }
//                 //   ]
// person.pop();
// console.log(person); //[
//                     //     { nama: ' Alex', alamat: 'bandung' },
//                     //     { nama: ' donald', alamat: 'semaang' }
//                     //   ]

// fungsi arr lainya
// foreach >>
// Map
// slice
// Filter
// find
// join >> bengabungkan arr menjadi string mengguakan karakter tertentu

// person.forEach((value,index)=>{
//     console.log(index+1,".",value);
// })
// 1 . { nama: ' Alex', alamat: 'bandung' }
// 2 . { nama: ' donald', alamat: 'semaang


// person.forEach((value,index)=>{

//     console.log(index+1,".",value.nama);
// })
// 1 .  Alex
// 2 .  donald

// const personNew=person.map((value,index)=>{
//     return `${index+1}. $value.nama)`
// })

// console.log(personNew)

// let buah=['mangga', 'jeruk', 'anggur']
// let buahNew=buah.slice(0,2)
// console.log(buahNew);

const personFilter=person.filter(value=>{
    return value.nama != 'Alex'
})
// console.log(personFilter);
console.log(personFilter.join("&"));



// const personFind=person.filter(value=>{
//     return value.nama=='alex'
// })
// console.log(personFind);

// console.log(buah.join(":")); //jambu:jeruk:anggur