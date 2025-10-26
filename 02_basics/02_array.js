const marvel_heros = ["thor","spiderman","ironman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])   array inside array

const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros)  

const all_new_heros=[...marvel_heros,...dc_heros]  //spread operator one by one
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)  //flat array and deep 
// console.log(real_another_array)

console.log(Array.isArray("Maitreya"))
console.log(Array.from("Maitreya"))
console.log(Array.from({name:"Maitreya"}))  //it will not work and interesting and empty array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))