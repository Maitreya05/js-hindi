// singleton constructor
// const tinderUser = {}   not singleton obj
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "maitreya"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userFullname:{
            firstname: "maitreya",
            lastname:  "patil"
            
        }
    }
}

// console.log(regularUser.fullname.userFullname.lastname)

const obj1={1: "a", 2:"b"}
const obj2={3: "c" , 4:"d"}
// const obj3={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)  //empty array to target object

const obj3 ={...obj1,...obj2}  //spread operator
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// course.courseInstructor

const {courseInstructor:Instructor}=course

console.log(Instructor)

// jsonnn ***********


// {
//     "name" : "maitreya",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]


