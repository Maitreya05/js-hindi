const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, curr) {
//   console.log(`acc: ${acc} and curr: ${curr}`);
//   return acc + curr;
// }, 0);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal);

const shoppingCart = [
  { itemName: "js course", price: 2999 },
  { itemName: "python course", price: 999 },
  { itemName: "mobile dev course", price: 5999 },
  { itemName: "data science course", price: 12999 },
];

const totalCost = shoppingCart.reduce((acc, curr) => acc + curr.price, 0);

console.log(totalCost);
