// singleton  declared by constructor
// Object.create


// object literals

const mySym = Symbol("key1") //declaring symbol
const Jsuser ={
    name: "Maitreya",
    age: 21,
    [mySym]: "mykey1",   //symbol
    "Location": "Pune",
    email: "maitreya@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]

}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["Location"])
// console.log(Jsuser[mySym])

Jsuser.email="chatgpt@gmail.com"
// Object.freeze(Jsuser)
Jsuser.email="chatgpt2@gmail.com"
// console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello js");
}
console.log(Jsuser.greeting())
console.log(Jsuser.greeting)

Jsuser.greeting2 = function(){
    console.log(`Hello js ${this.name}`);
}
console.log(Jsuser.greeting2())

