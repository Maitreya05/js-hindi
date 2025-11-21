const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "Swift",
};

for (const key in myObj) {
  //   console.log(`${key} short form of ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //   console.log(key, " : ", programming[key]);
}

// const map = new Map();   maps not works for in loop
// map.set("IN", "India");
// map.set("US", "United States");
// map.set("FR", "France");
// map.set("IN", "Bharat");

// for (const key in map) {
//   console.log(key);
// }
