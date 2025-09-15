const myArr = [1,2,3,4,5]
const MyHeros = ["spiderman","batman","superman"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1])

//Array methods

// myArr.push(6)  //add at end
// console.log(myArr)

// myArr.pop()  //remove from end
// console.log(myArr)

// myArr.unshift(9) //add at start
// myArr.shift() //remove from start

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()


// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

//slice,splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B", myArr)
 
const myn2 = myArr.splice(1, 3)    //change original array and return the deleted elements
console.log("C", myArr)
console.log(myn2)









