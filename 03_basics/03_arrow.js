const user={
    username:"Maitreya",
    price:199,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);//current context
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username="Maitreya"
//     console.log(this.username); //undefined cant work in function (this)
// }
// chai()
// const chai=function (){
//     let username="Maitreya"
//     console.log(this.username); //undefined cant work in function (this)
// }
// chai()

const chai=()=>{
    let username="Maitreya"
    console.log(this); //undefined cant work in function (this)
                       //only this give {} empty parathesis
}
// chai()
//**************Arrow function**************
// const addTwo =(num1,num2) =>{  
//     return num1+num2
// }
const addTwo =(num1,num2) =>(num1+num2) //implicit return
//implicit return for one line,return use when {} and () no return required


const add =(num1,num2) =>({username:"Maitreya"}) //return object
console.log(addTwo(3,4))


