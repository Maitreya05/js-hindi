//for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  //   console.log("index value is ", element);
}

for (let i = 0; i <= 10; i++) {
  //   console.log(`Outer loop value : ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
  }
}

let myArray = ["flash", "batman", "superman"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  //   console.log(element);
}

//break and continue

for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log("5 is detected");
    continue;
  }
  console.log(`value of i is ${i}`);
}
console.log("out of loop");
for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log("5 is detected");
    break;
  }
  console.log(`value of i is ${i}`);
}
console.log("out of loop");
