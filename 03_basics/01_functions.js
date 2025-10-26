
function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
}

//sayMyName()

function addTwoNumbers(num1,num2){  //parameters in defination
    // let result = num1+num2;
    // return result
    return num1+num2
}

const result=addTwoNumbers(7,4)                  //arguments
console.log("Result:",result);


function loginUserMessage(username = "Sam"){
    if(username===undefined || !username){
        console.log("Pls enter Username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());
console.log(loginUserMessage("Maitreya"));

function calculateCartPrice(val1,val2,...num1){    //rest operator to pass multiple values
return num1
}
console.log(calculateCartPrice(200,300,400,500));
console.log(calculateCartPrice(200,300,400,500,600));

const user={
    username:"Maitreya",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,500,450]))
