const today = new Date();
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDay())

const hours =today.getHours();
const minute = today.getMinutes().toString().padStart(2,'0');
console.log(`${hours} : ${minute}`);