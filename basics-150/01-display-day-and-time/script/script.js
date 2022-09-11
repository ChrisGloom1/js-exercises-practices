// the way to list out what day it is today.
const weekday = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
const today = new Date();
let day = weekday[ today.getDay() ];

console.log( "Current day is: " + day );

//
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();


console.log( `Current time is: ${hour}:${minute}:${second}` );