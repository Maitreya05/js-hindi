//for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const str = "Hello world!";

for (const great of str) {
  if (great == " ") {
    continue;
  }
  //   console.log(`Each char is: ${great}`);
}

//maps only unique values stores key value paris

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("FR", "France");
map.set("IN", "Bharat"); //updates value for existing key

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":", value);
}

const myObj = {
  game1: "NFS",
  game2: "Spiderman",
  game3: "GTA",
};

// for ( const [key, value] of myObj){   not works for objects for of loop
//     console.log(key,":", value);
// }
