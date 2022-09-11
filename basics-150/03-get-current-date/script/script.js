const today = new Date();
console.log(today);

const day = today.getDate();
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = today.getFullYear();

console.log( `${day}-${month}-${year}` )