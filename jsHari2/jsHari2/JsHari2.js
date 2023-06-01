// --------------Latihan hari 1------------

// const ar = [3,1,3];


// let sum = ar.reduce((a, b) => a + b)
// console.log(sum)

//--tr catch digunakan untuk membaca error dan tidak memutus program

// try{
//     let result = a(10, 20);
//     console.log(result);
//     throw new Error("error a not defined")
// }
// catch(e){
//     console.log(e.name, ':', e.message);
// }
// console.log("try again")

// let angka = 20

// const errorbro=(name, message)=> {
//     return{name:name, message:msg}
// }
// let angka="javascript"
// try{
//     if(angka === "")
//     throw Error("validasiError" ,"angkah tidak boleh kosong")

//     if(typeof angka != 'number')
//     throw Error("validasi error","hanya boleh angka")
//     console.log(`umur anda : $(angka)`)

// }catch(e){
//     console.log(e.name, ":", e.message)
// }
// let nilai=12

// try{
//     if(nilai >= 90 && nilai <= 100){
//          output = 'A';
//     }
//         else if(nilai >= 80 && nilai <= 89){
//                 output = 'B';
//         }
//         else if(nilai >= 70 && nilai <= 79){
//                  output = 'C';
//         }
//         else if(nilai >= 60 && nilai <= 69){
//                  output = 'A';
//         }
//          else if(nilai >= 50 && nilai <= 59){
//                  output = 'A';
//         }
//         else if(typeof nilai !=='number'){
//             throw Error("Validasi eroor",":","masukan angka")
//         }
//          else{
//              nilai='E';
//          }

// }catch(e){
//     console.log(e.name, ":", e.message)
// }

// for (let i =2 ; i <10 ; i+=2){
// console.log(i)
// }
// ranks=['A','B']
// for (let rank of ranks){
//     console.log(rank)
// }


// let person = [{
//     firstName : 'John',
//     lastName  : 'Doe',
//     ssn       : '299-00-191'
// },
// {   firstName : 'Alex',
//     lastName  : 'Doe',
//     ssn       : '300-00=50'

// }]

// let person1 = [{
//     firstName : 'John',
//     lastName  : 'Doe',
//     ssn       : '299-00-191'
// }]

// for(let i in person){
//     console.log(i + ':' + person[i]);
// }

// for(let prop of person){
//     console.log(prop.person);

// }

// for(x in person1){
//     console.log([x]);
// }


// let count = 1;
// while(count < 10){
//     console.log(count);
//     if(count===5)
//     break;
//     count +=2;
// }

// let count = 1;
// while(count < 10){
//     console.log(count);
//     if(count===5)
//     continue;
//     count +=2;
// }


// let x = 0;
// do{
//     console.log(x);
//     x++;
// }while(x<5)


// function greetings(){
//     let msg = " hallo"
//     // console.log(msg);
//     return msg
// }
// let result =greetings();
// console.log(result);

// function penambahan(x,y){
//     return x+y
// }


// const penambahan (x,y)=>{
//     return x+y
// }

// console.log(penambahan(10,10));




// const penilaian =(nilai)=>{
// try{
//     if(typeof nilai !=='number'){
//         throw Error("Validasi eroor",":","masukan angka")
// }

// else if(nilai >= 90 && nilai <= 100){
// output = 'A';
// }
// else if(nilai >= 80 && nilai <= 89){
// output = 'B';
// }
// else if(nilai >= 70 && nilai <= 79){
// output = 'C';
// }
// else if(nilai >= 60 && nilai <= 69){
// output = 'A';
// }
// else if(nilai >= 50 && nilai <= 59){
// output = 'A';
// }
// console.log(output);
// }catch(e){
//     console.log(e.name, ":", e.message);
// }

// }
// penilaian (70);

// const startEngine = ()=>{
//     console.log(`Enggineee Starrr... `);
// }

// const changeGear = (gear)=>{
//     console.log(`masukan gigi $(gear) to move a car`);
// }

// const goCar = ()=>{
//     console.log(`Mobil Berjalan`);
// }

// const stopCar = ()=>{
//     console.log(`Mobil Berhenti`);
// }

// const shutDownCar = ()=>{
//     console.log(`Mesin Mobil Dimatian`);
// }

// const DriveACar=(cb)=>{
//     cb();
//     changeGear(1);
//     goCar();
//     stopCar();
//     shutDownCar();

// }
// DriveACar(startEngine);


// setTimeout (()=>{console.log(`Enggineee Starrr... `);},10)
// setTimeout (()=>{console.log(`masukan gigi ${gear} to move a car`);},20,"2")
// setTimeout (()=>{console.log(`Mobil Berjalan`);},30)
// setTimeout (()=>{console.log(`Mobil Berhenti`);},40)
// setTimeout (()=>{console.log(`Mesin Mobil Dimatian`);},50)


// const quizSegiTigaSikuSiku =()=>{
//     for (let i = 0 ; i <6; i++){
//         let row = '';
//         for (let j = 0; j<= i; j++){
//             row+=String.fromCharCode(97 + i);
//         }
//         console.log(row);
//     }
// };
// quizSegiTigaSikuSiku();

// const quizSegiTigaSiku_Siku=((besar)=>{
//     for (let i = 0 ; i <besar; i++){
//         let row = "";
//         for (let j = 0; j<= i; j++){
//             row+= String.fromCharCode(97+j) + '/';
//         }
//         console.log(row);
//     }
    
// });
// quizSegiTigaSiku_Siku(4);


// const quizSegiTigaSiku_Siku=((besar)=>{
//         let row = '';
//         for (let i = 0; i<= besar; i++){
//             row += String.fromCharCode(97+i) ;
//             console.log(row);
//         }
// });
// quizSegiTigaSiku_Siku(4);

// const quizSegiTigaSiku_Siku = (besar) => {
//     let row = '';
//     for (let i = 0; i < besar; i++) {
//       row += String.fromCharCode(97 + i);
//       console.log(row);
//     }
//   };
  
//   quizSegiTigaSiku_Siku(4);


// function quizSegiTigaSiku_Siku(besar){
//     for (let i = 0 ; i <besar; i++){
//         let row = '';
//         for (let j = 0; j<= i; j++){
//             row+= String.fromCharCode(97 + j) ;
//         }
//         console.log(row);
//     }
// }
// quizSegiTigaSiku_Siku(4);



// function quizSegiTigaSiku_Siku(besar) {
//     for (let i = 0; i < besar; i++) {
//       let row = '';
//       for (let j = 0; j <= i; j++) {
//         row += String.fromCharCode(97 + j) + '/';
//       }
//       console.log(row);
//     }
//   }
  
//   quizSegiTigaSiku_Siku(4);


//   const quizSegiTigaSiku_Siku = (besar) => {
//     let i = 0;
//     while (i < besar) {
//       let j = 0;
//       let row = '';
//       while (j <= i) {
//         row += String.fromCharCode(97 + j) ;
//         j++;
//       }
//       console.log(row);
//       i++;
//     }
//   }
  
//   quizSegiTigaSiku_Siku(4);