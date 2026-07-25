//  Primitive
// 7 types: String , Numbber, Boolean , null, undefined ,Symbol , BigInt

const name="Dip"
const score = 200
const scoreValue = 33.3
const islggedIn = false
const outsideTemp=null
let userEmail;

const id=Symbol("123")
const anotherid=Symbol("123")

console.log(id===anotherid);

const bigNumber=12345678912345679n

//Reference-Non-Primitive
//Array , Object , Functions

const heros = ["Thor","Spidy","Hulk","Deadpool"]   //Array

let myObject = {     //Object
    name:"Dip",
    Age:21,
}   

const myFunction = function(){          //Function
        console.log("Hello World");
}


console.log(heros);
console.log(myObject);
console.log(myFunction);
