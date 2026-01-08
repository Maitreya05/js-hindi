// dates
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myDate1 = new Date(2023, 0, 23); //month start from 0
// console.log(myDate1)
console.log(myDate1.toLocaleString());

let myDate2 = new Date("01-01-2023");
// console.log(myDate2)
console.log(myDate2.toLocaleString());

let myDate3 = new Date(2023, 0, 23, 5, 3);
// console.log(myDate3)
console.log(myDate3.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myDate2.getTime())   //to compare and to conver to ms

console.log(Math.floor(Date.now() / 1000)); //to convert to seconds by divide by 1000 and floor to avoid decimal

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDate()} and month is ${newDate.getMonth()} and year is ${newDate.getFullYear()}`

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
  })
);
