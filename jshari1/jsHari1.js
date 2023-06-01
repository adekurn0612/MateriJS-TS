

// ---------------------------------------------JAVA Skript-----------------------------------------
// whitespace = spasi
// satemaent = skript/intruksi(if else), standarnya menggunakan {}
// identifiers = deklarsi var, diawali hurup,_,$, tidak diawali dengan angkah, //case sensitif//
// comment = // untuk 1 baris , /* untk pembuka dan penutup
// expression
// keyword = while,new,for dll >> tidak bisa digunakan untuk koding

// ----data type
// bertype dinamis
//  counter = 120;
// counter = false;

// console.log(typeof counter); >> bool


// let counter ;
// console.log(typeof counter); >> undifine

// let obj = null;
// console.log(typeof obj); >> object "bug"

// console.log(null == undefined); >> null dan undifine itu  sama 

// 1000000 == 1_000_000; >> _ diabaikan

// let str = "java script";
// console.log( "saya belajar" + str);

// console.log(`I'am ade`); menggunkan kutip `` 

// ade = 1;
// ade+= 'ade';
// console.log(ade);

// ade =2;
// console.log(ade+ade);
// let str=`ade kurniawan`;
// str.length
// console.log(str.length); >> untuk panjang string
// console.log(str.charAt(2)); //>> untuk membara index dimuai dari 0,1,2 dst
// console.log(str[1]); // >> untuk membaca string ke 3 dimuai dari 0,1,2 dst
// console.log(str[str.lenth-1]);

// let str="java skript";
// let newstr= str.substr(0,4);// code yang di garis tengah brarti hampir expired
// console.log(newstr);
// let newstr2=str.substring(0,4)
// console.log(newstr2);

// let rawstring = ' HI ';
// let strippedstring = rawstring.trimEnd(); menghapus spasi
// console.log(strippedstring);
// console.log(rawstring.toLowerCase()); mebuat output menjadi lower case

// let str ='1 2 1';
// let newstr=str.replace(/1/g, "a") // g digunakan untuk global>>replace semua value
// console.log(newstr);

// let contact={
//     firstname : 'john',
//     lastname : 'doe',
//     email : 'johndoe@gmail.com',
//     phone : '(1234567890)',
//     address : {
//         'building no' : 3960,
//         street : 'north 1st street',
//         ity : 'san jose',
//         state : 'Ca',
//     }
// } 

// console.log(contact.firstname);
// console.log(contact.address['building no']);

// let person={
//     name:'john du',
//     age : '20'
// }
// console.log(person)
// let newperson=person
// console.log(newperson);

// let greeting = "say Hi";
// let times = 4;

// if (times> 3){
//     let hello = "say Hello intead";
//     console.log(hello);
// }
// console.log(hello);

// let age = "100";
// console.log(typeof(+age));

// age = ++age +5;
// console.log(age);
// let age1 = age++ + 5;

// console.log(age1);


// let weight = 70; 
// let height = 1.72; 

// let bmi = weight / (height * height);

// let weightStatus;

// if (bmi < 18.5) {
//   weightStatus = 'Underweight';
// } 
//     else if (bmi >= 18.5 && bmi <= 24.9) {
//         weightStatus = 'Healthy Weight';
//     } 
//     else if (bmi >= 25 && bmi <= 29.9) {
//         weightStatus = 'Overweight'; 
//     } 
// else {
//     weightStatus = 'Obesity';
//     }

// console.log(weightStatus);

// -------------if else-----------

// let nilai = 78 ;

// let output;

// if(nilai >= 90 && nilai <= 100){
//     output = 'A';
// }
//     else if(nilai >= 80 && nilai <= 89){
//         output = 'B';
//     }
//     else if(nilai >= 70 && nilai <= 79){
//         output = 'C';
//     }
//     else if(nilai >= 60 && nilai <= 69){
//         output = 'A';
//     }
//     else if(nilai >= 50 && nilai <= 59){
//         output = 'A';
//     }
// else{
//     nilai='E';
// }

// console.log(output);

// ---------ternaey condition---------

// let age = 18;
// let message;

// age >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.');

// console.log(message);

// let age = 18;
// let message;

// message = age >= 16 ? 'You can drive.' : 'You cannot drive.';

// console.log(message);

// ---------el if----------

// let speed = 90;
// let msg;
// if ( speed >=120){
//     msg='Too past';
// }
//     else if( speed >= 90 {
//             msg='fast';
//     }
// else{

// }
// console.log(msg);

// let weight = 40; 
// let height = 1.72; 

// let bmi = weight / (height * height);

// let weightStatus;

// switch(true){
//     case (bmi < 18.5):
//         weightStatus = 'Underweight';
//         break;
//     case (bmi >= 25 && bmi <= 29.9):
//         weightStatus = 'Healthy Weight'; 
//         break;
//     default:
//         weightStatus = 'Obesity';

// }

// console.log(bmi + weightStatus);



// let nilai = null;

// let output;
// switch(true){
//         case (nilai >= 90 && nilai <= 100):
//         output='A';
//         break;
//         case (nilai >= 80 && nilai <= 89):
//         output='B';
//         break;
//         case (nilai >= 75 && nilai <= 79):
//         output='B';
//         break;
//         case (nilai >= 70 && nilai <= 74):
//         output='C';
//         break;
//         case (nilai >= 60 && nilai <= 69):
//         output='D';
//         break;
//         default:
//         output='E';
// }

// console.log(output);

// -----------menentukan nama hari dengan switch case------------
// let day = 3;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = 'Sunday';
//     break;
//   case 2:
//     dayName = 'Monday';
//     break;
//   case 3:
//     dayName = 'Tuesday';
//     break;
//   case 4:
//     dayName = 'Wednesday';
//     break;
//   case 5:
//     dayName = 'Thursday';
//     break;
//   case 6:
//     dayName = 'Friday';
//     break;
//   case 7:
//     dayName = 'Saturday';
//     break;
//   default:
//     dayName = 'Invalid day';
// }

// console.log(dayName); 

// https://regex101.com/ >> mencari format regex

// let inputtext ="0813";

// let inputtext= "e62gefeujfcefeijfcrgregcethtvgte";
// let matchcompleted = /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z0-9])(?!.*\s).^[\w]{6,8}$/;

// let number = /[a-z]/;

// if(inputtext.match(matchcompleted)){
//     console.log(inputtext);
//     return true;
// }
// else{
//     console.log('yah salah')
//     return false;
// }

// angkaFloat= 123;

// let msg=" i am ade" + angkaFloat;
// console.log(msg.repeat(2)); //repeat untuk menampilkan output sebanyak tertentu


const ar = [3,1,3];


let sum = ar.reduce((a, b) => a + b)
console.log(sum)



  
