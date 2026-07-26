//Singleton     =>using Constoctor


//Objct Literals

const mysym = Symbol("key1")
const user={
    name:"Dip",
    "full name":"Dip Dobariya",
    [mysym]:"mykey1",
    age:21,
    location:"Amreli",
    email:"dip@gmail.com"
}

// console.log(user["name"]);
// console.log(user[mysym]);
// console.log(typeof user["mysym"]);

user.email = "dipdobariya@gmail.com"
// Object.freeze(user)
user.email = "dipdobariya2085@gmail.com"

// console.log(user);


// user.greeting = function(){
//     console.log("Hello JS Users");
    
// }
// console.log(user.greeting());



// user.greetingtwo = function(){
//     console.log(`Hello JS Users, ${this.name} wellcome to our Profile `);
    
// }
// console.log(user.greetingtwo());



//************Part 2************ */

// const tinderUser = new  Object()       SingleTone 
const tinderUser = {}    //Non-SingleTone

tinderUser.id="123"
tinderUser.name = "sam"
tinderUser.isloggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "john@gmail.com",
    fullName: {
        userfullname: {
             firstname: "john",
             lastname: "wick"
        }
    }
}
// console.log(regularUser.fullName.userfullname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = { obj1 , obj2}
// const obj3 = Object.assign(obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));
 
// console.log(tinderUser.hasOwnProperty('name'));



//**********Part 3**************8 */


const course = {
    coursename: "JS",
    price: 999,
    courseInstructor: "Dip"
}
// const{courseInstructor } = course
// console.log(courseInstructor);
const{courseInstructor: instructor } = course
console.log(instructor);
